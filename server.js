var dotenv = require("dotenv");
dotenv.config();

var fetch = require("isomorphic-fetch");
var ansiHTML = require("ansi-html");
var chalk = require("chalk");
chalk.enabled = true;
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
var exits = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "u", "v", "z", "entrance", "shelf", "next", "previous", "exit", "enter", "main", "south", "north", "east", "west", "northeast", "northwest", "southeast", "southwest", "up", "down"];

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

io.on("connection", async (client) => {
  // new player arrived
  debug("player connected! " + client.handshake.session.id);
  client.handshake.session.lastLocation = defaultLocation;
  var playerInfo = await initPlayer(client.handshake.session, client);
  client.broadcast.to(playerInfo.location).emit("message", { response: cleanString("\n" + playerInfo.name + " connected.") });

  store.incr("players", function (err, reply) {
    players = reply;
    debug("players: " + players);
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
  client.on("console", async (message) => {
    var sessionID = client.handshake.session.id;
    var name = client.handshake.session.name;
    // location id (not lcc but game id)
    var location = client.handshake.session.currentLocation;
    debug(message + " -- from: " + sessionID);
    debug(" -- at: " + location);
    var response;
    var others;
    var value;
    // make sure location is correct in console
    mudconsole.setLocation(sessionID, location);
    // lcation full info
    var room = mudconsole.getGameData().map[location];
    if (exits.indexOf(message.toLowerCase()) !== -1) {
      message = "go " + message;
    }
    if (message.toLowerCase() === "look") {
      response = performConsoleCommand(message, sessionID);
      others = getOthers(client, location);
      // show book count
      response.response += await booksToDescription(room.id);
      response.response += othersToDescription(others);
      debug(location);
      client.emit("message", { response: cleanString(response.response) } );
    } else if (message.toLowerCase() === "debug") {
      var debugObj = Object.assign({}, client.handshake.session);
      delete debugObj.cookie;
      client.emit("message", { response: "<pre>" + cleanString(chalk.green(JSON.stringify(debugObj, null, 2))) + "</pre>" });
    } else if (message.toLowerCase() === "books") {
      // check if it is a normal book room (not the plaza/porch/etc)
      var bookResponse = await booksToDescription(room.id);
      client.emit("message", { response: cleanString(bookResponse) });
    } else if (message.toLowerCase() === "players") {
      debug("  requesting player count");
      value = await store.getAsync("players");
      message = message + " " + value;
      response = performConsoleCommand(message, sessionID);
      client.emit("message", { response: cleanString(response.response) });
    } else if (message.toLowerCase() === "newname") {
      var newName = changeName(client.handshake.session);
      message = message + " " + newName;
      response = performConsoleCommand(message, sessionID);
      client.emit("message", { response: cleanString(response.response) });
    } else if (message.toLowerCase().indexOf("yell ") === 0) {
      // yelling can only be done once a minute
      value = await store.getAsync(sessionID + ".lastYell");
      if (value) {
        var yell = Number(value);
        var canYell = Date.now() - yell > 60000;
        if (!canYell) {
          message = "yell denied";
          response = performConsoleCommand(message, sessionID);
          client.emit("message", { response: cleanString(response.response) });
          return;
        }
      }
      store.set(sessionID + ".lastYell", Date.now());
      response = performConsoleCommand(message, sessionID);
      var yellMessage = message.substring(5);
      var yellEmit = "\n* " + name + " (yelling): " + yellMessage + " *";
      var yellMyself = "\n* You (yelling): " + yellMessage + " *";
      client.emit("message", { response: cleanString(yellMyself) });
      client.broadcast.emit("message", { response: cleanString(yellEmit) });
      client.emit("message", { response: cleanString(response.response) });
    } else if (message.toLowerCase().indexOf("say ") === 0) {
      value = await store.getAsync(sessionID + ".currentLocation");
      location = value;
      response = performConsoleCommand(message, sessionID);
      var sayMessage = message.substring(4);
      var sayEmit = "\n+ " + name + " says: " + sayMessage + " +";
      var sayMyself = "\n+ You say: " + sayMessage + " +";
      client.broadcast.to(location).emit("message", { response: cleanString(sayEmit) });
      client.emit("message", { response: cleanString(sayMyself) });
    } else if (message.toLowerCase() === "wave") {
      value = await store.getAsync(sessionID + ".currentLocation");
      location = value;
      response = performConsoleCommand(message, sessionID);
      var waveEmit = "\n+ " + name + " waves. +";
      var waveMyself = "\n+ You wave +";
      client.broadcast.to(location).emit("message", { response: cleanString(waveEmit) });
      client.emit("message", { response: cleanString(waveMyself) });
    } else if (message.toLowerCase().indexOf("go ") === 0) {
      var oldLocation = location;
      response = performConsoleCommand(message, sessionID);
      if (response.response.indexOf("You can't go there.") === -1) {
        location = mudconsole.getLocation(sessionID);
        leaveRoom(client, name, oldLocation, mudconsole.getGameData().map[location].displayName);
        enterRoom(client, name, location, mudconsole.getGameData().map[oldLocation].displayName);
        saveLocation(client, location);
        others = getOthers(client, location);
        room = mudconsole.getGameData().map[location];
        response.response += await booksToDescription(room.id);
        response.response += othersToDescription(others);
      }
      client.emit("message", { response: cleanString(response.response) });
    } else {
      response = performConsoleCommand(message, sessionID);
      client.emit("message", { response: cleanString(response.response) });
    }
  });
  
  client.on("debug", async (message) => {
    client.emit("debug", {state: client.handshake.session})
  });
});

async function booksToDescription(roomid) {
  if (!roomid) return "";
  console.log("get books for ", roomid);
  // ping s3 for books
  var res = await fetch(process.env.S3_BASEURL + roomid + "_titles.json");
  var json = await res.json();
  return parseBooks(json);
}

function parseBooks(booksJson) {
  var authorsMax = 4;
  var count = booksJson.titles.length;
  var response = "\n\nThere are ";
  response += chalk.red(booksJson.titles.length + " book" + (count !== 1 ? "s" : ""));
  response += " including titles by ";
  var authors = booksJson.titles.slice(0, authorsMax).map(title => title.author);
  if (count > 1) authors[authors.length-1] = "and " + authors[authors.length-1];
  if (count > 2) {
    response += authors.join(", ");
  } else {
    response += authors.join(" ");
  }
  return response + ".";
}

function othersToDescription(others) {
  var description = "";
  if (others.length > 0) {
    description += "\n\n" + others.map(player => {
      return chalk.magenta(player) + " is here.";
    }).join("\n");
  }
  return description;
}

function getOthers(client, location) {
  // add the people in the room
  /* ***
    * NOTE:
    * i think it might be necessary to integrate the room descriptions to the server
    * or have some setters/getters in the console to allow for injection of additional info
    * ***/
  var room = io.sockets.adapter.rooms[location];
  var others = [];
  if (!room) return others;
  var socketsInRoom = room.sockets;
  Object.keys(socketsInRoom).forEach(key => {
    if (client !== io.sockets.connected[key]) {
      var other = io.sockets.connected[key];
      others.push(other.handshake.session.name);
    }
  });
  return others;
}

async function initPlayer(session, socket) {
  // set player name if not set already
  var name, location;
  name = await initName(session);
  location = await initLocation(session, socket);
  return {name: name, location: location};
}

function createName() {
  var adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  var tree = treeNames[Math.floor(Math.random() * treeNames.length)];
  return adjective + " " + tree;
}

async function initName(session) {
  var sessionID = session.id;
  var name = await store.getAsync(sessionID + ".name");
  if (name) {
    session.name = name;
    session.save();
  } else {
    name = changeName(session);
  }
  mudconsole.setName(sessionID, name);
  return name;
}

function changeName(session) {
  var sessionID = session.id;
  var name = createName();
  store.set(sessionID + ".name", name);
  session.name = name;
  session.save();
  mudconsole.setName(sessionID, name);
  return name;
}

async function initLocation(session, socket) {
  var sessionID = session.id;
  // get last location from redis
  var currentLocation = defaultLocation; // the default location
  var value = await store.getAsync(sessionID + ".currentLocation");
  if (value !== null) {
    // get last know location (in db)
    debug("    location found: " + value);
    currentLocation = value;
  }
  
  changeLocation(socket, currentLocation);
  return currentLocation;
}

function changeLocation(client, location) {
  mudconsole.setLocation(client.handshake.session.id, location);
  Object.keys(client.rooms).forEach(room => {
    client.leave(room);
  });
  client.handshake.session.lastLocation = client.handshake.session.currentLocation;
  client.handshake.session.currentLocation = location;
  client.handshake.session.save();
  client.join(location);
}

function enterRoom(client, name, location, direction) {
  client.broadcast.to(location).emit("message", { response: cleanString("\n" + name + " enters from " + direction + ".") });
}

function leaveRoom(client, name, location, direction) {
  client.broadcast.to(location).emit("message", { response: cleanString("\n" + name + " leaves towards " + direction + ".") });
}

function performConsoleCommand(command, sessionID) {
  debug("  ||command: " + command + "\n  ||session: " + sessionID);
  // limit chars
  if (command.length > 140) command = command.substr(0, 140);
  return { response: mudconsole.input(command, sessionID) };
}

function cleanString(string) {
  if (string.indexOf("---") !== -1 && string.indexOf("[") !== -1 && string.indexOf("Exit") !== -1) {
    // check to see if it is “normal” room description
    var lines = string.split("\n");
    string = lines.map((line, index) => {
      if (index === 1) {
        // get title
        line = line.replace(/\s/g, "&nbsp;"); // so length matches the underline
        return chalk.yellow(line);
      } else if (line.indexOf("---") === 0) {
        // get underline
        return chalk.gray(line);
      } else if (line.indexOf("[") === 0) {
        // check to see if it has exit texts
        var exitStart = line.indexOf("|");
        var exitEnd = line.lastIndexOf("|");
        var exit = line.substring(exitStart, exitEnd);
        var roomStart = line.indexOf("]") + 1;
        var room = line.substring(roomStart);
        line = line.substring(0, exitStart) + chalk.cyan(exit) + line.substring(exitEnd, roomStart) + chalk.yellow(room);
        return line;
      } else if (line.indexOf("Exits are:") === 0 || line.indexOf("Exit is:") === 0) {
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
  } else if (string.indexOf("+ ") !== -1 && (string.indexOf("say") !== -1 || string.indexOf("wave") !== -1)) {
    string = chalk.green(string);
  } else if (string.indexOf("* ") !== -1 && string.indexOf("yell") !== -1) {
    string = chalk.red(string);
  } else if (string.indexOf("Try these commands") === 0) {
    var intro = string.substring(0, string.indexOf(":") + 1);
    var commands = string.substring(string.indexOf(":") + 1).split(",");
    string = intro + commands.map(command => {
      return chalk.green(command.replace(".",""));
    }).join(",") + ".";
  }
  // convert colors to html
  string = ansiHTML(string);
  string = string.replace(/\n/g, "<br />").replace(/\|/g, "&nbsp;");
  return string;
}

async function saveLocation(client, location) {
  var sessionID = client.handshake.session.id;
  await store.setAsync(sessionID + ".currentLocation", location);
  changeLocation(client, location);
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