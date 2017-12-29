var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var sessionStore = require("connect-redis")(session);
var dotenv = require("dotenv");
dotenv.config();

// === Server Flags ===
var debugMode = true;

// === Game Variables ===
var players = 0;
var defaultLocation = "MAIN";
var adjectives = ["Agreeable", "Alert", "Alluring", "Ambitious", "Amused", "Boundless", "Brave", "Bright", "Calm", "Capable", "Charming", "Cheerful", "Coherent", "Comfortable", "Confident", "Cooperative", "Courageous", "Credible", "Cultured", "Dashing", "Dazzling", "Debonair", "Decisive", "Decorous", "Delightful", "Detailed", "Determined", "Diligent", "Discreet", "Dynamic", "Eager", "Efficient", "Elated", "Eminent", "Enchanting", "Encouraging", "Endurable", "Energetic", "Entertaining", "Enthusiastic", "Excellent", "Excited", "Exclusive", "Exuberant", "Fabulous", "Fair", "Faithful", "Fantastic", "Fearless", "Fine", "Frank", "Friendly", "Funny", "Generous", "Gentle", "Glorious", "Good", "Happy", "Harmonious", "Helpful", "Hilarious", "Honorable", "Impartial", "Industrious", "Instinctive", "Jolly", "Joyous", "Kind", "Kind-hearted", "Knowledgeable", "Level", "Likeable", "Lively", "Lovely", "Loving", "Lucky", "Mature", "Modern", "Nice", "Obedient", "Painstaking", "Peaceful", "Perfect", "Placid", "Plausible", "Pleasant", "Plucky", "Productive", "Protective", "Proud", "Punctual", "Quiet", "Receptive", "Reflective", "Relieved", "Resolute", "Responsible", "Rhetorical", "Righteous", "Romantic", "Sedate", "Seemly", "Selective", "Self-assured", "Sensitive", "Shrewd", "Silly", "Sincere", "Skillful", "Smiling", "Splendid", "Steadfast", "Stimulating", "Successful", "Succinct", "Talented", "Thoughtful", "Thrifty", "Tough", "Trustworthy", "Unbiased", "Unusual", "Upbeat", "Vigorous", "Vivacious", "Warm", "Willing", "Wise", "Witty", "Wonderful"];
var treeNames = ["Alder", "Apple", "Pear", "Ash", "Aspen", "Cottonwood", "Poplar", "Basswood", "Birch", "Buckeye", "Buckthorn", "California-laurel", "Catalpa", "Cedar", "Cherry", "Plum", "Chestnut", "Chinkapin", "Cottonwood", "Poplar", "Aspen", "Cypress", "Dogwood", "Douglas-fir", "Elm", "Fir", "Filbert", "Hazel", "Giant Sequoia", "Hawthorn", "Hazel", "Filbert", "Hemlock", "Honeylocust", "Holly", "Horsechestnut", "Incense-cedar", "Juniper", "Larch", "Locust", "Madrone", "Maple", "Mountain-ash", "Mountain-mahogany", "Oak", "Oregon-myrtle", "Pear", "Apple", "Pine", "Plum", "Cherry", "Poplar", "Aspen", "Cottonwood", "Redcedar", "Redwood", "Russian-olive", "Spruce", "Sweetgum", "Sycamore", "Tanoak", "True Cedar", "True Fir", "Walnut", "White-cedar", "Willow", "Yellow-poplar", "Yew"];

// === Initialize Redis ===
var redis = require("redis");
var bluebird = require("bluebird");
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

var store = redis.createClient(process.env.REDIS_URL);
store.set("players", players); // start with 0 players
var pub = redis.createClient(process.env.REDIS_URL);
var sub = redis.createClient(process.env.REDIS_URL);
store.on("error", function (err) {
  debug("Store error: " + err);
});
pub.on("error", function (err) {
  debug("Pub error: " + err);
});
sub.on("error", function (err) {
  debug("Sub error: " + err);
});
sub.subscribe("mud");

// === Initilize Express ===
var app = express();
var server = require("http").Server(app);
var sessionMiddleware = session({
  store: new sessionStore({ client: store }), secret: process.env.SECRET, resave: false, saveUninitialized: true, cookie: {
    maxAge: new Date(Date.now() + (60000 * 60 * 24 * 365))
  }  
});  

// === The UI
app.use(express.static(__dirname + "/terminal"));

// === Import Necessary Functionality ==
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(sessionMiddleware);

// === Start Server ===
var server_port = process.env.PORT || 3001;
server.listen(server_port, function () {
  debug("Listening on server_port " + server_port);
});

// === Create Console ===
var mudconsole = require("./console/console.js");
var status = mudconsole.loadDefaultGameData(getBaseGameData());
debug(status);

// === Initialize Socket.io
var io = require("socket.io")(server);
io.use(function (socket, next) {
  sessionMiddleware(socket.request, socket.request.res, next);
});

io.on("connection", function (client) {
  // new player arrived
  debug("player connected! " + client.request.session.id);
  client.join(defaultLocation);
  // io.in(defaultLocation).emit("Librarian entered the room", client);
  initPlayer(client.request.session);

  store.incr("players", function (err, reply) {
    players = reply;
    debug("players: " + players);
  });

  client.on("event", function (data) {
    debug("event:" + data);
  });

  client.on("create", (room) => {
    client.join(room);
  });

  client.on("message", (message) => {
    debug("message: " + message);
  });

  client.on("disconnect", function () {
    debug("player left");
    store.decr("players", function (err, reply) {
      players = reply;
      debug("players: " + players);
    });
  });

  // === Respond to AJAX calls ===
  client.on("console", (message) => {
    var sessionID = client.request.session.id;
    debug(message + " -- from: " + sessionID);
    var response;
    var location;
    if (message.toLowerCase() === "look") {
      // get last location from redis
      initLocation(sessionID, () =>{
        response = performCommand(message, sessionID);
        client.emit("message", response);
      });
    } else if (message.toLowerCase() === "players") {
      // getting player list does not need to go to the console
      debug("  requesting player count");
      store.getAsync("players").then((value) => {
        message = message + " " + value;
        response = performCommand(message, sessionID);
        client.emit("message", response);
      });
    } else if (message.toLowerCase().indexOf("yell ") === 0) {
      // yelling can only be done once a minute
      store.getAsync(sessionID + ".lastYell").then((value) => {
        if (value) {
          var yell = Number(value);
          var canYell = Date.now() - yell > 60000;
          if (!canYell) {
            message = "yell denied";
            response = performCommand(message, sessionID);
            client.emit("message", response);
            return;
          }
        }
        store.set(sessionID + ".lastYell", Date.now());
        response = performCommand(message, sessionID);
        var yellMessage = message.substring(5);
        var yellUser = client.request.session.name;
        var yellEmit = "\n* " + yellUser + " (yelling): " + yellMessage + " *";
        io.emit("message", {response: yellEmit});
        client.emit("message", response);
      });
    } else {
      response = performCommand(message, sessionID);
      if (message.toLowerCase().indexOf("go ") === 0 && response.response.indexOf("You can't go there.") === -1) {
        location = mudconsole.getLocation(sessionID);
        saveLocation(sessionID, location);
      }
      client.emit("message", response);
    }
  });
});

function initPlayer(session) {
  // set player name if not set already
  var sessionID = session.id;
  store.getAsync(sessionID + ".name").then((value) => {
    if (value) {
      session.name = value;
    } else {
      var adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
      var tree = treeNames[Math.floor(Math.random() * treeNames.length)];
      var name = adjective + " " + tree;
      session.name = name;
      store.set(sessionID + ".name", name);
    }
  });

  initLocation(sessionID);
}

function initLocation(sessionID, callback) {
  // get last location from redis
  var currentLocation = defaultLocation; // the default location
  store.getAsync(sessionID + ".currentLocation").then((value) => {
    if (value === null) {
      // no last know location
      debug("    no location existed");
      saveLocation(sessionID, currentLocation);
    } else {
      // get last know location (in db)
      debug("    location found: " + value);
      currentLocation = value;
      mudconsole.setLocation(sessionID, currentLocation);
    }

    if (callback) callback();
  });
}

function performCommand(command, sessionID) {
  debug("  ||command: " + command + "\n  ||session: " + sessionID);
  return { response: mudconsole.input(command, sessionID) };
}

function saveLocation(sessionID, location) {
  store.set(sessionID + ".currentLocation", location);
  // create the room
  io.emit("create", location);
}

// === Helper Functions ===
function getBaseGameData() {
  var gameFile = require("./cartridges/mud.js"); // load generic JS game file
  return { gameData: gameFile.gameData, gameActions: gameFile.gameActions };
}

function debug(debugText) {
  if (debugMode) {
    console.log(debugText);
  }
}