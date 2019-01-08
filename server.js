let dotenv = require('dotenv');
dotenv.config();

let numWords = require('num-words');
let fs = require('fs');
let fetch = require('isomorphic-fetch');
let ansiHTML = require('ansi-html');
let chalk = require('chalk');
chalk.enabled = true;
chalk.level = 3;
let express = require('express');
let bodyParser = require('body-parser');
let expressSession = require('express-session');
let redis = require('redis');
let bluebird = require('bluebird');
let http = require('http');
let connectRedis = require('connect-redis');
let socketIO = require('socket.io');
let sharedSession = require('express-socket.io-session');
let cookieParser = require('cookie-parser')(process.env.SECRET);

// === Server Flags ===
let debugMode = true;

// === Game Variables ===
let lccData = JSON.parse(
  fs.readFileSync(__dirname + '/python/lcc_simple_count.json', 'utf8')
);
let players = 0;
let defaultLocation = 'MAIN';
let adjectives = [
  'Agreeable',
  'Alert',
  'Alluring',
  'Ambitious',
  'Amused',
  'Boundless',
  'Brave',
  'Bright',
  'Calm',
  'Capable',
  'Charming',
  'Cheerful',
  'Coherent',
  'Comfortable',
  'Confident',
  'Cooperative',
  'Courageous',
  'Credible',
  'Cultured',
  'Dashing',
  'Dazzling',
  'Debonair',
  'Decisive',
  'Decorous',
  'Delightful',
  'Detailed',
  'Determined',
  'Diligent',
  'Discreet',
  'Dynamic',
  'Eager',
  'Efficient',
  'Elated',
  'Eminent',
  'Enchanting',
  'Encouraging',
  'Endurable',
  'Energetic',
  'Entertaining',
  'Enthusiastic',
  'Excellent',
  'Excited',
  'Exclusive',
  'Exuberant',
  'Fabulous',
  'Fair',
  'Faithful',
  'Fantastic',
  'Fearless',
  'Fine',
  'Frank',
  'Friendly',
  'Funny',
  'Generous',
  'Gentle',
  'Glorious',
  'Good',
  'Happy',
  'Harmonious',
  'Helpful',
  'Hilarious',
  'Honorable',
  'Impartial',
  'Industrious',
  'Instinctive',
  'Jolly',
  'Joyous',
  'Kind',
  'Kind-hearted',
  'Knowledgeable',
  'Level',
  'Likeable',
  'Lively',
  'Lovely',
  'Loving',
  'Lucky',
  'Mature',
  'Modern',
  'Nice',
  'Obedient',
  'Painstaking',
  'Peaceful',
  'Perfect',
  'Placid',
  'Plausible',
  'Pleasant',
  'Plucky',
  'Productive',
  'Protective',
  'Proud',
  'Punctual',
  'Quiet',
  'Receptive',
  'Reflective',
  'Relieved',
  'Resolute',
  'Responsible',
  'Rhetorical',
  'Righteous',
  'Romantic',
  'Sedate',
  'Seemly',
  'Selective',
  'Self-assured',
  'Sensitive',
  'Shrewd',
  'Silly',
  'Sincere',
  'Skillful',
  'Smiling',
  'Splendid',
  'Steadfast',
  'Stimulating',
  'Successful',
  'Succinct',
  'Talented',
  'Thoughtful',
  'Thrifty',
  'Tough',
  'Trustworthy',
  'Unbiased',
  'Unusual',
  'Upbeat',
  'Vigorous',
  'Vivacious',
  'Warm',
  'Willing',
  'Wise',
  'Witty',
  'Wonderful',
];
let treeNames = [
  'Alder',
  'Apple',
  'Pear',
  'Ash',
  'Aspen',
  'Cottonwood',
  'Poplar',
  'Basswood',
  'Birch',
  'Buckeye',
  'Buckthorn',
  'California-laurel',
  'Catalpa',
  'Cedar',
  'Cherry',
  'Plum',
  'Chestnut',
  'Chinkapin',
  'Cottonwood',
  'Poplar',
  'Aspen',
  'Cypress',
  'Dogwood',
  'Douglas-fir',
  'Elm',
  'Fir',
  'Filbert',
  'Hazel',
  'Giant Sequoia',
  'Hawthorn',
  'Hazel',
  'Filbert',
  'Hemlock',
  'Honeylocust',
  'Holly',
  'Horsechestnut',
  'Incense-cedar',
  'Juniper',
  'Larch',
  'Locust',
  'Madrone',
  'Maple',
  'Mountain-ash',
  'Mountain-mahogany',
  'Oak',
  'Oregon-myrtle',
  'Pear',
  'Apple',
  'Pine',
  'Plum',
  'Cherry',
  'Poplar',
  'Aspen',
  'Cottonwood',
  'Redcedar',
  'Redwood',
  'Russian-olive',
  'Spruce',
  'Sweetgum',
  'Sycamore',
  'Tanoak',
  'True Cedar',
  'True Fir',
  'Walnut',
  'White-cedar',
  'Willow',
  'Yellow-poplar',
  'Yew',
];
let exits = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  'm',
  'n',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'z',
  'entrance',
  'annex',
  'next',
  'previous',
  'exit',
  'enter',
  'main',
  'south',
  'north',
  'east',
  'west',
  'northeast',
  'northwest',
  'southeast',
  'southwest',
  'up',
  'down',
];

// === Initialize Servers ===
let app = express();
let server = http.createServer(app);
let io = socketIO(server);
let sessionStore = connectRedis(expressSession);

// === Initialize Redis ===
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

let store = redis.createClient(process.env.REDIS_URL);
let pub = redis.createClient(process.env.REDIS_URL);
let sub = redis.createClient(process.env.REDIS_URL);

// === Session Stuff
let session = expressSession({
  store: new sessionStore({ client: store }),
  secret: process.env.SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: new Date(Date.now() + 60000 * 60 * 24 * 365),
  },
});

// === Base Redis Listeners
store.set('players', players); // start with 0 players
store.on('error', function(err) {
  debug('Store error: ' + err);
});
pub.on('error', function(err) {
  debug('Pub error: ' + err);
});
sub.on('error', function(err) {
  debug('Sub error: ' + err);
});
sub.subscribe('mud');

// === App Stuff ==
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser);
app.use(session);
io.use(
  sharedSession(session, {
    autoSave: true,
  })
);
app.use(express.static(__dirname + '/terminal'));
app.use(express.static(__dirname + '/python'));

// === Start Server ===
let server_port = process.env.PORT || 3001;
server.listen(server_port, function() {
  debug('Listening on server_port ' + server_port);
});

// === Create Console ===
let mudconsole = require('./console/console.js');
let status = mudconsole.loadDefaultGameData(getBaseGameData());
debug(status);

io.on('connection', async client => {
  // new player arrived
  debug('player connected! ' + client.handshake.session.id);
  client.handshake.session.lastLocation = defaultLocation;
  let playerInfo = await initPlayer(client.handshake.session, client);
  client.broadcast.to(playerInfo.location).emit('message', {
    response: cleanString('\n' + playerInfo.name + ' connected.'),
  });

  store.incr('players', function(err, reply) {
    players = reply;
    debug('players: ' + players);
  });

  client.on('message', message => {
    debug('message: ' + message);
  });

  client.on('disconnect', function() {
    debug('player left');
    client.broadcast
      .to(client.handshake.session.currentLocation)
      .emit('message', {
        response: cleanString(
          '\n' + client.handshake.session.name + ' disconnected.'
        ),
      });
    store.decr('players', function(err, reply) {
      players = reply;
      debug('players: ' + players);
    });
  });

  // === Respond to AJAX calls ===
  client.on('console', async message => {
    var sessionID = client.handshake.session.id;
    var name = client.handshake.session.name;
    // location id (not lcc but game id)
    var location = client.handshake.session.currentLocation;
    var response;
    var others;
    var value;
    // make sure location is correct in console
    mudconsole.setLocation(sessionID, location);
    // lcation full info
    var room = mudconsole.getGameData().map[location];
    if (exits.indexOf(message.toLowerCase()) !== -1) {
      message = 'go ' + message;
    }
    if (message.toLowerCase() === 'look') {
      response = performConsoleCommand(message, sessionID);
      others = getOthers(client, location);
      response.response += othersToDescription(others);
      client.emit('message', { response: cleanString(response.response) });
    } else if (message.toLowerCase() === 'about') {
      response = performConsoleCommand(message, sessionID);
      client.emit('message', { response: cleanString(response.response) });
    } else if (message.toLowerCase() === 'debug') {
      var debugObj = Object.assign({}, client.handshake.session);
      delete debugObj.cookie;
      client.emit('message', {
        response:
          '<pre>' +
          cleanString(chalk.green(JSON.stringify(debugObj, null, 2))) +
          '</pre>',
      });
    } else if (message.toLowerCase().indexOf('shelf') === 0) {
      // TODO: mention that there are no shelves to look at
      // TODO: check if it is a normal book room (not the plaza/porch/etc)
      // TODO: add another shelf for books of the current room (count > 0)
      // TODO: there's some edge cases not being considered
      if (message.length <= 5) {
        client.emit('message', { response: 'What shelf are you looking at?' });
        return;
      }
      // get the shelf number
      let shelfNumber = message.substring(6);
      // get current room lcc id
      let lcc = '';
      if (location.indexOf('#') === -1 && location.indexOf('_') === -1) {
        lcc = location;
      } else if (location.indexOf('#') !== -1) {
        lcc = location.substring(location.lastIndexOf('#') + 1);
      } else if (location.indexOf('_') !== -1) {
        lcc = location.substring(location.lastIndexOf('_') + 1);
      } else if (location.indexOf('#') !== -1 || location.indexOf('_') !== -1) {
        lcc = getLccFromLocation(location, shelfNumber);
      }
      client.handshake.session.lastShelf = lcc;
      client.handshake.session.save();
      let bookResponse = await booksToDescription(lcc);
      client.emit('message', { response: cleanString(bookResponse) });
    } else if (message.toLowerCase() === 'books') {
      if (
        client.handshake.session.books &&
        Object.keys(client.handshake.session.books).length > 0
      ) {
        let response = formatBookList(client.handshake.session.books);
        client.emit('message', {
          response: cleanString(response),
        });
      } else {
        client.emit('message', {
          response: 'You have no books.',
        });
      }
    } else if (message.toLowerCase().indexOf('book') === 0) {
      // TODO: there's some edge cases not being considered
      if (message.length <= 4) {
        client.emit('message', {
          response: 'What book are you looking at?',
        });
        return;
      }
      let lcc = '';
      let bookNumber = Number(message.substring(5));
      try {
        lcc = client.handshake.session.lastShelf;
      } catch {
        lcc = room.id;
      }
      let booksJson = await getBooks(lcc);
      if (booksJson && booksJson.titles && booksJson.titles.length > 0) {
        // get n-th book from titles endpoint
        let theBook = booksJson.titles[bookNumber - 1];
        if (theBook) {
          if (
            !client.handshake.session.books ||
            Object.keys(client.handshake.session.books).indexOf(theBook.lccn) ==
              -1
          ) {
            takeBook(client.handshake.session, theBook);
            client.emit('message', {
              response:
                'You take “' + theBook.title + '” by ' + theBook.author + '',
            });
          } else {
            client.emit('message', {
              response: 'You already have that book!',
            });
          }
        } else {
          client.emit('message', {
            response: 'Book not found!',
          });
        }
      } else {
        client.emit('message', {
          response: 'There are no books!',
        });
      }
    } else if (message.toLowerCase() === 'players') {
      value = await store.getAsync('players');
      message = message + ' ' + value;
      response = performConsoleCommand(message, sessionID);
      client.emit('message', {
        response: cleanString(response.response),
      });
    } else if (message.toLowerCase() === 'newname') {
      var newName = changeName(client.handshake.session);
      message = message + ' ' + newName;
      response = performConsoleCommand(message, sessionID);
      client.emit('message', {
        response: cleanString(response.response),
      });
    } else if (message.toLowerCase().indexOf('yell ') === 0) {
      // yelling can only be done once a minute
      value = client.handshake.session.lastYell;
      if (value) {
        var yell = Number(value);
        var canYell = Date.now() - yell > 60000;
        if (!canYell) {
          message = 'yell denied';
          response = performConsoleCommand(message, sessionID);
          client.emit('message', {
            response: cleanString(response.response),
          });
          return;
        }
      }
      client.handshake.session.lastYell = Date.now();
      client.handshake.session.save();
      response = performConsoleCommand(message, sessionID);
      var yellMessage = message.substring(5);
      var yellEmit = '\n* ' + name + ' (yelling): ' + yellMessage + ' *';
      var yellMyself = '\n* You (yelling): ' + yellMessage + ' *';
      client.emit('message', {
        response: cleanString(yellMyself),
      });
      client.broadcast.emit('message', {
        response: cleanString(yellEmit),
      });
      client.emit('message', {
        response: cleanString(response.response),
      });
    } else if (message.toLowerCase().indexOf('say ') === 0) {
      value = client.handshake.session.currentLocation;
      location = value;
      response = performConsoleCommand(message, sessionID);
      var sayMessage = message.substring(4);
      var sayEmit = '\n+ ' + name + ' says: ' + sayMessage + ' +';
      var sayMyself = '\n+ You say: ' + sayMessage + ' +';
      client.broadcast
        .to(location)
        .emit('message', { response: cleanString(sayEmit) });
      client.emit('message', {
        response: cleanString(sayMyself),
      });
    } else if (message.toLowerCase() === 'wave') {
      value = client.handshake.session.currentLocation;
      location = value;
      response = performConsoleCommand(message, sessionID);
      var waveEmit = '\n+ ' + name + ' waves. +';
      var waveMyself = '\n+ You wave +';
      client.broadcast
        .to(location)
        .emit('message', { response: cleanString(waveEmit) });
      client.emit('message', {
        response: cleanString(waveMyself),
      });
    } else if (message.toLowerCase().indexOf('go ') === 0) {
      var oldLocation = location;
      response = performConsoleCommand(message, sessionID);
      if (response.response.indexOf("You can't go there.") === -1) {
        location = mudconsole.getLocation(sessionID);
        leaveRoom(
          client,
          name,
          oldLocation,
          mudconsole.getGameData().map[location].displayName
        );
        enterRoom(
          client,
          name,
          location,
          mudconsole.getGameData().map[oldLocation].displayName
        );
        saveLocation(client, location);
        others = getOthers(client, location);
        room = mudconsole.getGameData().map[location];
        response.response += othersToDescription(others);
      }
      client.emit('message', {
        response: cleanString(response.response),
      });
    } else {
      response = performConsoleCommand(message, sessionID);
      client.emit('message', {
        response: cleanString(response.response),
      });
    }
  });

  client.on('debug', async message => {
    client.emit('debug', { state: client.handshake.session });
  });
});

function getLccFromLocation(location, shelfNumber) {
  let lcc = location;
  // get data from json file
  let shelfData = JSON.parse(JSON.stringify(lccData));
  tree = location.substring(location.lastIndexOf('_') + 1).split('#');
  // console.log(tree)
  while (tree.length > 0) {
    shelfData = JSON.parse(JSON.stringify(shelfData[tree.shift()].children));
  }
  // check to see if it's a shallow room (no children)
  if (Object.keys(shelfData).length !== 0 && shelfData.constructor === Object) {
    // get books for the shelfNumber-th child (minus one)
    let shelfKeys = Object.keys(shelfData);
    let selectedShelfKey = shelfKeys[shelfNumber - 1];
    let selectedShelf = shelfData[selectedShelfKey];
    lcc = selectedShelf.id;
  }
  return lcc;
}

async function getBooks(roomid) {
  if (!roomid) return '';
  console.log('get books for ', roomid);
  // ping s3 for books
  let res = await fetch(process.env.S3_BASEURL + roomid + '_titles.json');
  let json = await res.json();
  return json;
}

async function booksToDescription(roomid) {
  let booksJson = await getBooks(roomid);
  return parseBooks(booksJson);
}

function parseBooks(booksJson) {
  var count = booksJson.titles.length;
  var response = '\n\nThere ' + (count !== 1 ? 'are ' : 'is ');
  response +=
    numWords(booksJson.titles.length) + ' book' + (count !== 1 ? 's' : '');
  response += ' in the “' + booksJson.subject + '” shelf:\n';
  var books = booksJson.titles.map(
    (book, index) =>
      '(' +
      chalk.green(index + 1) +
      ') “' +
      book.title +
      '”' +
      ' by ' +
      chalk.cyan(book.author)
  );
  response += books.join('\n');
  return response;
}

function takeBook(session, bookJson) {
  let books = session.books ? session.books : {};
  books[bookJson.lccn] = bookJson;
  session.books = books;
  session.save();
}

function formatBookList(books) {
  let formatted = Object.values(books).map(
    book => '“' + book.title + '” by ' + book.author
  );
  let response = '\nYou have:\n' + formatted.join('\n');
  return response;
}

function othersToDescription(others) {
  var description = '';
  if (others.length > 0) {
    description +=
      '\n\n' +
      others
        .map(player => {
          return chalk.magenta(player) + ' is here.';
        })
        .join('\n');
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
  return { name: name, location: location };
}

function createName() {
  var adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  var tree = treeNames[Math.floor(Math.random() * treeNames.length)];
  return adjective + ' ' + tree;
}

async function initName(session) {
  var sessionID = session.id;
  var name = session.name;
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
  session.name = name;
  session.save();
  mudconsole.setName(sessionID, name);
  return name;
}

async function initLocation(session, socket) {
  // get last location from redis
  let currentLocation = defaultLocation; // the default location
  let value = session.currentLocation;
  if (value !== null) {
    // get last know location (in db)
    debug('    location found: ' + value);
    if (Object.keys(mudconsole.getGameData().map).indexOf(value) === -1) {
      value = defaultLocation;
    }
    currentLocation = value;
  }

  changeLocation(socket, currentLocation, session.lastShelf);
  return currentLocation;
}

function changeLocation(client, location, shelf) {
  mudconsole.setLocation(client.handshake.session.id, location);
  Object.keys(client.rooms).forEach(room => {
    client.leave(room);
  });
  client.handshake.session.lastLocation =
    client.handshake.session.currentLocation;
  client.handshake.session.currentLocation = location;
  client.handshake.session.lastShelf = shelf;
  client.handshake.session.save();
  client.join(location);
}

function enterRoom(client, name, location, direction) {
  client.broadcast.to(location).emit('message', {
    response: cleanString('\n' + name + ' enters from ' + direction + '.'),
  });
}

function leaveRoom(client, name, location, direction) {
  client.broadcast.to(location).emit('message', {
    response: cleanString('\n' + name + ' leaves towards ' + direction + '.'),
  });
}

function performConsoleCommand(command, sessionID) {
  debug('  ||command: ' + command + '\n  ||session: ' + sessionID);
  // limit chars
  if (command.length > 140) command = command.substr(0, 140);
  return { response: mudconsole.input(command, sessionID) };
}

function cleanString(string) {
  if (
    string.indexOf('---') !== -1 &&
    string.indexOf('[') !== -1 &&
    string.indexOf('Exit') !== -1
  ) {
    // check to see if it is “normal” room description
    let lines = string.split('\n');
    string = lines
      .map((line, index) => {
        if (index === 1) {
          // get title
          line = line.replace(/\s/g, '&nbsp;'); // so length matches the underline
          return chalk.yellow(line);
        } else if (line.indexOf('---') === 0) {
          // get underline
          return chalk.gray(line);
        } else if (line.indexOf('(') === 0) {
          // it's a shelf description
          let numberStart = 1;
          let numberEnd = line.indexOf(')');
          let shelfNumber = line.substring(numberStart, numberEnd);
          line =
            line.substring(0, numberStart) +
            chalk.magenta(shelfNumber) +
            line.substring(numberEnd);
          return line;
        } else if (line.indexOf('[') === 0) {
          // check to see if it has exit texts
          let exitStart = line.indexOf('|');
          let exitEnd = line.lastIndexOf('|');
          let exit = line.substring(exitStart, exitEnd);
          let roomStart = line.indexOf(']') + 1;
          let room = line.substring(roomStart);
          line =
            line.substring(0, exitStart) +
            chalk.cyan(exit) +
            line.substring(exitEnd, roomStart) +
            chalk.yellow(room);
          return line;
        } else if (
          line.indexOf('Exits are:') === 0 ||
          line.indexOf('Exit is:') === 0
        ) {
          let intro = line.substring(0, line.indexOf(':') + 1);
          let exits = line.substring(line.indexOf(':') + 1).split(',');
          line =
            intro +
            exits
              .map(exit => {
                if (exit.indexOf(' and ') !== -1) {
                  let twoExits = exit.split(' and ');
                  exit = twoExits
                    .map(e => {
                      return chalk.cyan(e.replace('.', ''));
                    })
                    .join(' and ');
                  return exit;
                } else {
                  return chalk.cyan(exit.replace('.', ''));
                }
              })
              .join(',') +
            '.';
          return line;
        } else {
          return line;
        }
      })
      .join('\n');
  } else if (
    string.indexOf('+ ') !== -1 &&
    (string.indexOf('say') !== -1 || string.indexOf('wave') !== -1)
  ) {
    string = chalk.green(string);
  } else if (string.indexOf('* ') !== -1 && string.indexOf('yell') !== -1) {
    string = chalk.red(string);
  } else if (string.indexOf('Try these commands') === 0) {
    let intro = string.substring(0, string.indexOf(':') + 1);
    let commands = string.substring(string.indexOf(':') + 1).split(',');
    string =
      intro +
      commands
        .map(command => {
          return chalk.green(command.replace('.', ''));
        })
        .join(',') +
      '.';
  }
  // convert colors to html
  string = ansiHTML(string);
  string = string.replace(/\n/g, '<br />').replace(/\|/g, '&nbsp;');
  return string;
}

async function saveLocation(client, location) {
  changeLocation(client, location, '');
}

// === Helper Functions ===
function getBaseGameData() {
  var gameFile = require('./cartridges/mud.js'); // load generic JS game file
  return { gameData: gameFile.gameData, gameActions: gameFile.gameActions };
}

function debug(debugText) {
  if (debugMode) {
    console.log(debugText);
  }
}
