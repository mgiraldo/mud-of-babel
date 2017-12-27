var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var redis = require("redis");
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
var store = redis.createClient();
store.set("players", players); // start with 0 players
var pub = redis.createClient();
var sub = redis.createClient();
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

// === Initialize Socket.io
var io = require("socket.io")(server);
io.on("connection", function(client){
  // new player arrived
  debug("player connected!");
  store.incr("players", function(err, reply) {
    players = reply;
    debug("players: " + players);
  });
  client.on("event", function(data){
    debug("event:" + data);
  });
  client.on("disconnect", function(){
    debug("player left");
    store.decr("players", function(err, reply) {
      players = reply;
      debug("players: " + players);
    });
  });
});

// === Import Necessary Functionality ==
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/terminal"));
app.use(session({store: new sessionStore({client:store}), secret: process.env.SECRET, resave: false, saveUninitialized: true}));

// === Start Server ===
var server_port = process.env.PORT || 3001;
server.listen(server_port, function () {
  debug( "Listening on server_port " + server_port );
});

// === Create Console ===
var mudconsole = require("./console/console.js");
var status = mudconsole.loadDefaultGameData(getBaseGameData());
debug(status);
// === Respond to AJAX calls ===
app.post("/console", function(req,res){
  debug(req.body.input + " -- from: " + req.session.id);
  res.json({response: mudconsole.input(req.body.input, req.session.id)});
});

// === Helper Functions ===
function getBaseGameData() {
  var gameFile = require("./cartridges/mud.js"); // load generic JS game file
  return {gameData: gameFile.gameData, gameActions: gameFile.gameActions};
}

function debug(debugText){
  if(debugMode){
    console.log(debugText);
  }
}