// === Debug Variable ===
var debugMode = false;

// === Import Necessary Functionality ===
var parser = require('./parser.js');

// === Creat Necessary Variables ===
var games = {};
var baseData;

// ----------------------------\
// === Main Function ==================================================================================================
// ----------------------------/

// === Server Data Interaction ===
exports.getGameData = () => {
  return baseData.gameData;
};

exports.setLocation = (gameID, location) => {
  var game = initGame(gameID);
  game.gameData.player.currentLocation = location;
};

exports.getLocation = gameID => {
  var game = initGame(gameID);
  return game.gameData.player.currentLocation;
};

exports.setName = (gameID, name) => {
  var game = initGame(gameID);
  game.gameData.player.name = name;
};

exports.loadDefaultGameData = data => {
  try {
    // each user session has different game id based on the cookie
    baseData = data;
    return 'Loaded base data';
  } catch (error) {
    return 'Could not load base game';
  }
};

// === Main Input Parser ===
exports.input = (input, gameID) => {
  var command = parser.parse(input);
  var game = games[gameID];
  if (game) {
    game = game.gameData;
  } else {
    // load the base game
    game = loadBaseGameForID(gameID).gameData;
  }
  var returnString;
  try {
    try {
      debug('---Attempting to run cartridge command "' + command.action + '"');
      returnString = eval(
        'gameActions.' + command.action + '(game,command,consoleInterface)'
      );
    } catch (cartridgeCommandError) {
      debug('-----' + cartridgeCommandError);
      debug('---Attempting to run cartridge command "' + command.action + '"');
      returnString = eval('actions.' + command.action + '(game,command)')
        .message;
    }
  } catch (consoleCommandError) {
    try {
      debug('-----' + consoleCommandError);
      debug('---Attempting to perform ' + command.action + ' interaction');
      returnString = interact(game, command.action, command.subject);
    } catch (interactionError) {
      debug('-----' + interactionError);
    }
  }
  if (returnString === undefined) {
    returnString = "I don't know how to do that.";
  } else {
    try {
      var updateLocationString = getCurrentLocation(game).updateLocation(
        command
      );
    } catch (updateLocationError) {
      debug('---Failed to Perform updateLocation()');
      debug('-----' + updateLocationError);
    }
  }
  if (updateLocationString !== undefined) {
    returnString = updateLocationString;
  }
  return checkForGameEnd(game, returnString);
};

// ----------------------------\
// === Console Actions =================================================================================================
// ----------------------------/
var actions = {
  help: function() {
    var message =
      'Try these commands: ' + Object.keys(actions).join(', ') + '.';
    return { message: message, success: true };
  },

  // die: function (game) {
  //   delete games[game.gameID];
  //   return { message: "You are dead", success: true };
  // },

  drop: function(game, command) {
    if (!command.subject) {
      return { message: 'What do you want to drop?', success: false };
    }
    try {
      return {
        message: interact(game, 'drop', command.subject),
        success: true,
      };
    } catch (error) {
      try {
        var currentLocation = getCurrentLocation(game);
        moveItem(command.subject, game.player.inventory, currentLocation.items);
        var item = getItem(currentLocation.items, command.subject);
        item.hidden = false;
        return { message: command.subject + ' dropped', success: true };
      } catch (error2) {
        return {
          message: 'You do not have a ' + command.subject + ' to drop.',
          success: false,
        };
      }
    }
  },

  go: function(game, command) {
    if (!command.subject) {
      return { message: 'Where do you want to go?', success: false };
    }
    var exits = getCurrentLocation(game).exits;
    var playerDestination = null;
    try {
      playerDestination = exits[command.subject].destination;
    } catch (error) {
      for (var exit in exits) {
        var exitObject = exits[exit];
        if (exitObject.displayName.toLowerCase() === command.subject) {
          playerDestination = exitObject.destination;
        }
      }
    }
    if (playerDestination === null) {
      return { message: "You can't go there.", success: false };
    }
    getCurrentLocation(game).firstVisit = false;
    if (getCurrentLocation(game).teardown !== undefined) {
      getCurrentLocation(game).teardown();
    }
    if (game.map[playerDestination].setup !== undefined) {
      game.map[playerDestination].setup();
    }
    game.player.currentLocation = playerDestination;
    return { message: getLocationDescription(game, true), success: true };
  },

  inventory: function(game) {
    var inventoryList = 'Your inventory contains:';
    for (var item in game.player.inventory) {
      var itemObject = game.player.inventory[item];
      var itemName = itemObject.displayName;
      if (itemObject.quantity > 1) {
        itemName = itemName.concat(' x' + itemObject.quantity);
      }
      inventoryList = inventoryList.concat('\n' + itemName);
    }
    if (inventoryList === 'Your inventory contains:') {
      return { message: 'Your inventory is empty.', success: true };
    } else {
      return { message: inventoryList, success: true };
    }
  },

  players: function(game, command) {
    var playersMessage =
      Number(command.subject) !== 1
        ? command.subject + ' players online.'
        : 'Just you online.';
    return { message: playersMessage, success: true };
  },

  name: function(game) {
    var message = 'Your name is: ' + game.player.name + '.';
    return { message: message, success: true };
  },

  newname: function(game) {
    var message = 'Your new name is: ' + game.player.name + '.';
    return { message: message, success: true };
  },

  yell: function(game, command) {
    var playersMessage = 'Shhh! This is a library. You cannot just scream.';
    if (!command.subject) {
      return { message: playersMessage, success: true };
    } else if (command.subject === 'denied') {
      playersMessage = 'You can only yell once per minute.';
    } else {
      playersMessage = 'Everyone in the library has received your message.';
    }
    return { message: playersMessage, success: true };
  },

  say: function(game, command) {
    var playersMessage = 'What do you want to say?';
    if (!command.subject) {
      // player didnt say anything
      return { message: playersMessage, success: true };
    }
    return { message: playersMessage, success: true };
  },

  wave: function(game) {
    var playersMessage = 'You wave.';
    return { message: playersMessage, success: true };
  },

  book: function(game, command) {
    return { message: 'Placeholder (happens server-side)', success: true };
  },

  shelf: function(game, command) {
    return { message: 'Placeholder (happens server-side)', success: true };
  },

  look: function(game, command) {
    if (!command.subject) {
      return { message: getLocationDescription(game, true), success: true };
    }
    try {
      try {
        return {
          message: getItem(game.player.inventory, command.subject).description,
          success: true,
        };
      } catch (itemNotInInventoryError) {
        return {
          message: getItem(getCurrentLocation(game).items, command.subject)
            .description,
          success: true,
        };
      }
    } catch (isNotAnItemError) {
      try {
        return {
          message: interact(game, 'look', command.subject),
          success: true,
        };
      } catch (subjectNotFound) {
        return {
          message:
            'There is nothing important about the ' + command.subject + '.',
          success: false,
        };
      }
    }
  },

  take: function(game, command) {
    if (!command.subject) {
      return { message: 'What do you want to take?', success: false };
    }
    try {
      return {
        message: interact(game, 'take', command.subject),
        success: true,
      };
    } catch (error) {
      try {
        moveItem(
          command.subject,
          getCurrentLocation(game).items,
          game.player.inventory
        );
        return { message: command.subject + ' taken', success: true };
      } catch (error2) {
        return {
          message: 'Best just to leave the ' + command.subject + ' as it is.',
          success: false,
        };
      }
    }
  },

  use: function(game, command) {
    if (!command.subject) {
      return { message: 'What would you like to use?', success: false };
    }
    try {
      return {
        message: getItem(game.player.inventory, command.subject).use(),
        success: true,
      };
    } catch (itemNotInInventoryError) {
      return { message: "Can't do that.", success: false };
    }
  },

  debug: function() {
    return { message: '' };
  },
};

// ----------------------------\
// === Helper Functions ===============================================================================================
// ----------------------------/
function initGame(gameID) {
  if (!games[gameID]) {
    games[gameID] = loadBaseGameForID(gameID);
  }
  return games[gameID];
}

function loadBaseGameForID(gameID) {
  games[gameID] = {
    gameData: baseData.gameData,
    gameActions: baseData.gameActions,
  };
  games[gameID].gameData.gameID = gameID;
  return games[gameID];
}

function checkForGameEnd(game, returnString) {
  if (game.gameOver) {
    returnString = returnString + '\n' + game.outroText;
    actions.die(game, { action: 'die' });
  }
  return returnString;
}

function clone(obj) {
  if (obj == null || typeof obj != 'object') {
    return obj;
  }
  var temp = obj.constructor();
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      temp[key] = clone(obj[key]);
    }
  }
  return temp;
}

function consoleInterface(game, command) {
  return eval('actions.' + command.action + '(game,command);');
}

function debug(debugText) {
  if (debugMode) {
    console.log(debugText);
  }
}

function exitsToString(exitsObject) {
  var numOfExits = Object.keys(exitsObject).length;
  if (numOfExits === 0) {
    return '';
  }
  var visibleExits = [];
  for (var exit in exitsObject) {
    var exitObject = exitsObject[exit];
    if (!exitObject.hidden) {
      visibleExits.push(exitObject.displayName);
    }
  }
  var returnString;
  switch (visibleExits.length) {
    case 0:
      return '';
    case 1:
      returnString = '\n\nExit is: ';
      break;
    default:
      returnString = '\n\nExits are: ';
  }
  for (var i = 0; i < visibleExits.length; ++i) {
    returnString = returnString.concat(visibleExits[i]);
    if (i === visibleExits.length - 2) {
      returnString = returnString.concat(' and ');
    } else if (i === visibleExits.length - 1) {
      returnString = returnString.concat('.');
    } else {
      returnString = returnString.concat(', ');
    }
  }
  return returnString;
}

function getCurrentLocation(game) {
  return game.map[game.player.currentLocation];
}

function getLocationDescription(game, forcedLongDescription) {
  var currentLocation = getCurrentLocation(game);
  var description;
  if (currentLocation.firstVisit || forcedLongDescription) {
    description = currentLocation.displayName + '\n';
    description = description.concat(
      '-'.repeat(currentLocation.displayName.length) + '\n'
    );
    description = description.concat(currentLocation.description);
    if (currentLocation.items) {
      description = description.concat(itemsToString(currentLocation.items));
    }
    if (currentLocation.exits) {
      description = description.concat(exitsToString(currentLocation.exits));
    }
  } else {
    description = currentLocation.displayName;
  }
  description = '\n'.concat(description);
  return description;
}

function getItem(itemLocation, itemName) {
  return itemLocation[getItemName(itemLocation, itemName)];
}

function getItemName(itemLocation, itemName) {
  if (itemLocation[itemName] !== undefined) {
    return itemName;
  } else {
    for (var item in itemLocation) {
      if (itemLocation[item].displayName.toLowerCase() === itemName) {
        return item;
      }
    }
  }
}

function itemsToString(itemsObject) {
  var numOfItems = Object.keys(itemsObject).length;
  if (numOfItems === 0) {
    return '';
  }
  var visibleItems = [];
  for (var item in itemsObject) {
    var itemObject = itemsObject[item];
    if (!itemObject.hidden) {
      visibleItems.push({
        name: itemObject.displayName,
        quantity: itemObject.quantity,
      });
    }
  }
  if (visibleItems.length === 0) {
    return '';
  }
  var returnString;
  if (visibleItems[0].quantity === 1) {
    returnString = ' There is ';
  } else {
    returnString = ' There are ';
  }
  for (var i = 0; i < visibleItems.length; ++i) {
    if (visibleItems[i].quantity > 1) {
      returnString = returnString.concat(
        visibleItems[i].quantity + ' ' + visibleItems[i].name + 's'
      );
    } else {
      returnString = returnString.concat('a ' + visibleItems[i].name);
    }
    if (i === visibleItems.length - 2) {
      returnString = returnString.concat(' and ');
    } else if (i === visibleItems.length - 1) {
      returnString = returnString.concat(' here.');
    } else {
      returnString = returnString.concat(', ');
    }
  }
  return returnString;
}

function interact(game, interaction, subject) {
  try {
    return getCurrentLocation(game).items[subject].interactions[interaction];
  } catch (error) {
    return getCurrentLocation(game).interactables[subject][interaction];
  }
}

function moveItem(itemName, startLocation, endLocation) {
  var itemAtOrigin = getItem(startLocation, itemName);
  if (itemAtOrigin === undefined) {
    throw 'itemDoesNotExist';
  }
  var itemAtDestination = getItem(endLocation, itemName);
  if (itemAtDestination === undefined) {
    endLocation[itemName] = clone(itemAtOrigin);
    endLocation[itemName].quantity = 1;
  } else {
    ++endLocation[itemName].quantity;
  }
  if (itemAtOrigin.hasOwnProperty('quantity')) {
    --itemAtOrigin.quantity;
    if (itemAtOrigin.quantity === 0) {
      delete startLocation[itemName];
    }
  }
}
