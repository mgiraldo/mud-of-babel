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

// === Initilize Express ===
var app = express();
var server = require("http").Server(app);

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

// === Import Necessary Functionality ==
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/terminal"));
app.use(session({
  store: new sessionStore({ client: store }), secret: process.env.SECRET, resave: false, saveUninitialized: true, cookie: {
    maxAge: new Date(Date.now() + (60000 * 60 * 24 * 365)) } }));

// === Start Server ===
var server_port = process.env.PORT || 3001;
server.listen(server_port, function () {
  debug("Listening on server_port " + server_port);
});

// === Initialize Socket.io
var io = require("socket.io")(server);
io.on("connection", function (client) {
  // new player arrived
  debug("player connected!");
  store.incr("players", function (err, reply) {
    players = reply;
    debug("players: " + players);
  });
  client.on("event", function (data) {
    debug("event:" + data);
  });
  client.on("disconnect", function () {
    debug("player left");
    store.decr("players", function (err, reply) {
      players = reply;
      debug("players: " + players);
    });
  });
});

// === Create Console ===
var mudconsole = require("./console/console.js");
var status = mudconsole.loadDefaultGameData(getBaseGameData());
debug(status);
// === Respond to AJAX calls ===
app.post("/console", (req, res) => {
  var sessionID = req.session.id;
  debug(req.body.input + " -- from: " + sessionID);
  var response;
  var location;
  if (req.body.input.toLowerCase() === "ping") {
    // first connect
    debug("first connect -- from : " + sessionID);
    // get last location from redis
    var currentLocation = "MAIN"; // the default location
    store.getAsync(sessionID + ".currentLocation").then((reply) => {
      if (reply === null) {
        // no last know location
        debug("    no location existed");
        saveLocation(sessionID, currentLocation);
      } else {
        // get last know location (in db)
        debug("    location found: " + reply);
        currentLocation = reply;
        mudconsole.setLocation(sessionID, currentLocation);
      }
      req.session.currentLocation = currentLocation;
      debug("  performing: " + req.body.input);
      debug("         for: " + sessionID);
      response = performCommand("look", sessionID);
      res.json(response);
    });
  } else if (req.body.input.toLowerCase() === "players") {
    // getting player list does not need to go to the console
    debug("  requesting player count");
    store.getAsync("players").then((reply) => {
      req.body.input = req.body.input + " " + reply;
      response = performCommand(req.body.input, sessionID);
      res.json(response);
    });
  } else {
    response = performCommand(req.body.input, sessionID);
    if (req.body.input.indexOf("go ") === 0 && response.response.indexOf("You can't go there.") === -1) {
      location = mudconsole.getLocation(sessionID);
      saveLocation(sessionID, location);
    }
    res.json(response);
  }
});

function performCommand(command, sessionID) {
  debug("  ||command: " + command + "\n  ||session: " + sessionID);
  return { response: mudconsole.input(command, sessionID) };
}

function saveLocation(sessionID, location) {
  store.set(sessionID + ".currentLocation", location);
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