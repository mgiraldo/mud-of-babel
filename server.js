var dotenv = require("dotenv");
dotenv.config();

var ansiHTML = require("ansi-html");
var chalk = require("chalk");
var express = require("express");
var bodyParser = require("body-parser");
var expressSession = require("express-session");
var redis = require("redis");
var bluebird = require("bluebird");
var http = require("http");
var connectRedis = require("connect-redis");
var socketIO = require("socket.io");
var sharedSession = require("express-socket.io-session");
var cookieParser = require("cookie-parser")(process.env.SECRET);


// === Server Flags ===
var debugMode = true;

// === Game Variables ===
var players = 0;
var defaultLocation = "MAIN";
var adjectives = ["Agreeable", "Alert", "Alluring", "Ambitious", "Amused", "Boundless", "Brave", "Bright", "Calm", "Capable", "Charming", "Cheerful", "Coherent", "Comfortable", "Confident", "Cooperative", "Courageous", "Credible", "Cultured", "Dashing", "Dazzling", "Debonair", "Decisive", "Decorous", "Delightful", "Detailed", "Determined", "Diligent", "Discreet", "Dynamic", "Eager", "Efficient", "Elated", "Eminent", "Enchanting", "Encouraging", "Endurable", "Energetic", "Entertaining", "Enthusiastic", "Excellent", "Excited", "Exclusive", "Exuberant", "Fabulous", "Fair", "Faithful", "Fantastic", "Fearless", "Fine", "Frank", "Friendly", "Funny", "Generous", "Gentle", "Glorious", "Good", "Happy", "Harmonious", "Helpful", "Hilarious", "Honorable", "Impartial", "Industrious", "Instinctive", "Jolly", "Joyous", "Kind", "Kind-hearted", "Knowledgeable", "Level", "Likeable", "Lively", "Lovely", "Loving", "Lucky", "Mature", "Modern", "Nice", "Obedient", "Painstaking", "Peaceful", "Perfect", "Placid", "Plausible", "Pleasant", "Plucky", "Productive", "Protective", "Proud", "Punctual", "Quiet", "Receptive", "Reflective", "Relieved", "Resolute", "Responsible", "Rhetorical", "Righteous", "Romantic", "Sedate", "Seemly", "Selective", "Self-assured", "Sensitive", "Shrewd", "Silly", "Sincere", "Skillful", "Smiling", "Splendid", "Steadfast", "Stimulating", "Successful", "Succinct", "Talented", "Thoughtful", "Thrifty", "Tough", "Trustworthy", "Unbiased", "Unusual", "Upbeat", "Vigorous", "Vivacious", "Warm", "Willing", "Wise", "Witty", "Wonderful"];
var treeNames = ["Alder", "Apple", "Pear", "Ash", "Aspen", "Cottonwood", "Poplar", "Basswood", "Birch", "Buckeye", "Buckthorn", "California-laurel", "Catalpa", "Cedar", "Cherry", "Plum", "Chestnut", "Chinkapin", "Cottonwood", "Poplar", "Aspen", "Cypress", "Dogwood", "Douglas-fir", "Elm", "Fir", "Filbert", "Hazel", "Giant Sequoia", "Hawthorn", "Hazel", "Filbert", "Hemlock", "Honeylocust", "Holly", "Horsechestnut", "Incense-cedar", "Juniper", "Larch", "Locust", "Madrone", "Maple", "Mountain-ash", "Mountain-mahogany", "Oak", "Oregon-myrtle", "Pear", "Apple", "Pine", "Plum", "Cherry", "Poplar", "Aspen", "Cottonwood", "Redcedar", "Redwood", "Russian-olive", "Spruce", "Sweetgum", "Sycamore", "Tanoak", "True Cedar", "True Fir", "Walnut", "White-cedar", "Willow", "Yellow-poplar", "Yew"];

// === Initialize Servers ===
var app = express();
var server = http.createServer(app);
var io = socketIO(server);
var sessionStore = connectRedis(expressSession);

// === Initialize Redis ===
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

var store = redis.createClient(process.env.REDIS_URL);
var pub = redis.createClient(process.env.REDIS_URL);
var sub = redis.createClient(process.env.REDIS_URL);

// === Session Stuff
var session = expressSession({
  store: new sessionStore({ client: store }), secret: process.env.SECRET, resave: true, saveUninitialized: true, cookie: {
    maxAge: new Date(Date.now() + (60000 * 60 * 24 * 365))
  }
});

// === Base Redis Listeners
store.set("players", players); // start with 0 players
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

// === App Stuff ==
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser);
app.use(session);
io.use(sharedSession(session, {
  autoSave: true
}));
app.use(express.static(__dirname + "/terminal"));

// === Start Server ===
var server_port = process.env.PORT || 3001;
server.listen(server_port, function () {
  debug("Listening on server_port " + server_port);
});

// === Create Console ===
var mudconsole = require("./console/console.js");
var status = mudconsole.loadDefaultGameData(getBaseGameData());
debug(status);

io.on("connection", function (client) {
  // new player arrived
  debug("player connected! " + client.handshake.session.id);
  client.join(defaultLocation);
  initPlayer(client.handshake.session, client);

  store.incr("players", function (err, reply) {
    players = reply;
    debug("players: " + players);
  });

  client.on("event", function (data) {
    debug("event:" + data);
  });

  client.on("message", (message) => {
    debug("message: " + message);
  });

  client.on("disconnect", function () {
    debug("player left");
    client.broadcast.to(client.handshake.session.currentLocation).emit("message", { response: cleanString("\n" + client.handshake.session.name + " disconnected.") });
    store.decr("players", function (err, reply) {
      players = reply;
      debug("players: " + players);
    });
  });

  // === Respond to AJAX calls ===
  client.on("console", (message) => {
    var sessionID = client.handshake.session.id;
    var name = client.handshake.session.name;
    debug(message + " -- from: " + sessionID);
    var response;
    var location;
    if (message.toLowerCase() === "look") {
      // get last location from redis
      initLocation(client.handshake.session, client, () =>{
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
        var yellEmit = "\n* " + name + " (yelling): " + yellMessage + " *";
        var yellMyself = "\n* You (yelling): " + yellMessage + " *";
        client.emit("message", { response: cleanString(yellMyself) });
        client.broadcast.emit("message", { response: cleanString(yellEmit) });
        client.emit("message", response);
      });
    } else if (message.toLowerCase().indexOf("say ") === 0) {
      store.getAsync(sessionID + ".currentLocation").then((value) => {
        var location = value;
        response = performCommand(message, sessionID);
        var sayMessage = message.substring(4);
        var sayEmit = "\n+ " + name + " says: " + sayMessage + " +";
        var sayMyself = "\n+ You say: " + sayMessage + " +";
        client.broadcast.to(location).emit("message", { response: cleanString(sayEmit) });
        client.emit("message", { response: cleanString(sayMyself) });
      });
    } else if (message.toLowerCase().indexOf("go ") === 0) {
      var oldLocation = client.handshake.session.currentLocation;
      // make sure location is correct in console
      mudconsole.setLocation(sessionID, oldLocation);
      response = performCommand(message, sessionID);
      if (response.response.indexOf("You can't go there.") === -1) {
        location = mudconsole.getLocation(sessionID);
        saveLocation(client.handshake.session, location, client);
        leaveRoom(client, name, oldLocation);
        enterRoom(client, name, location);
      }
      client.emit("message", response);
    } else {
      response = performCommand(message, sessionID);
      client.emit("message", response);
    }
  });
});

function initPlayer(session, socket) {
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
      session.save();
    }
    initLocation(session, socket);
  });

}

function initLocation(session, socket, callback) {
  var sessionID = session.id;
  // get last location from redis
  var currentLocation = defaultLocation; // the default location
  store.getAsync(sessionID + ".currentLocation").then((value) => {
    if (value === null) {
      // no last know location
      debug("    no location existed");
      saveLocation(session, currentLocation, socket);
    } else {
      // get last know location (in db)
      debug("    location found: " + value);
      currentLocation = value;
      mudconsole.setLocation(sessionID, currentLocation);
    }

    if (!callback) {
      // only happens when first instantiate
      socket.join(currentLocation);
      socket.broadcast.to(currentLocation).emit("message", { response: cleanString("\n" + session.name + " connected.") });
    } else {
      callback();
    }
    session.currentLocation = currentLocation;
    session.save();
  });
}

function enterRoom(client, name, location) {
  client.join(location);
  client.broadcast.to(location).emit("message", { response: cleanString("\n" + name + " entered the room.") });
}

function leaveRoom(client, name, location) {
  client.leave(location);
  client.broadcast.to(location).emit("message", { response: cleanString("\n" + name + " left the room.") });
}

function performCommand(command, sessionID) {
  debug("  ||command: " + command + "\n  ||session: " + sessionID);
  // limit chars
  if (command.length > 140) command = command.substr(0, 140);
  return { response: cleanString(mudconsole.input(command, sessionID)) };
}

function cleanString(string) {
  if (string.indexOf("---") !== -1) {
    // check to see if it is “normal” room description
    var lines = string.split("\n");
    string = lines.map((line, index) => {
      if (index === 1) {
        // get title
        return chalk.yellow(line);
      } else if (line.indexOf("---") !== -1) {
        // get underline
        return chalk.gray(line);
      } else if (line.indexOf("[") !== -1) {
        // check to see if it has exit texts
        var exitStart = line.indexOf("|");
        var exitEnd = line.lastIndexOf("|");
        var exit = line.substring(exitStart, exitEnd);
        var roomStart = line.indexOf("]") + 1;
        var room = line.substring(roomStart);
        line = line.substring(0, exitStart) + chalk.cyan(exit) + line.substring(exitEnd, roomStart) + chalk.yellow(room);
        return line;
      } else if (line.indexOf("Exits are:") !== -1 || line.indexOf("Exit is:") !== -1) {
        var intro = line.substring(0,line.indexOf(":")+1);
        var exits = line.substring(line.indexOf(":")+1).split(",");
        line = intro + exits.map(exit => {
          if (exit.indexOf(" and ") !== -1) {
            var twoExits = exit.split(" and ");
            exit = twoExits.map(e => {
              return chalk.cyan(e.replace(".", ""));
            }).join(" and ");
            return exit;
          } else {
            return chalk.cyan(exit.replace(".",""));
          }
        }).join(",") + ".";
        return line;
      } else {
        return line;
      }
    }).join("\n");
  } else if (string.indexOf("+ ") !== -1) {
    string = chalk.green(string);
  } else if (string.indexOf("* ") !== -1) {
    string = chalk.red(string);
  }
  // convert colors to html
  string = ansiHTML(string);
  string = string.replace(/\n/g, "<br />").replace(/\|/g, "&nbsp;");
  return string;
}

function saveLocation(session, location) {
  var sessionID = session.id;
  store.set(sessionID + ".currentLocation", location);
  session.currentLocation = location;
  session.save();
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