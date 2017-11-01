var gameData = {
  "commandCounter": 0,
  "gameOver": false,
  "introText": "\n\nWelcome to the MUD of Babel!\n",
  "outroText": "Thanks For playing!",
  "player": {
    "currentLocation": "Plaza",
    "inventory": {},
    "lightSource": false
  },
  "map": {
    "Plaza": {
      "firstVisit": true,
      "displayName": "General Works Plaza",
      "description": "You are in an expansive plaza surrounded by 10 buildings conforming General Works.\nThe buildings are accessible via their classification code, visible above the main door: [A-AC] \u201cCollections.  Series.  Collected works Building\u201d, [A-AE] \u201cEncyclopedias Building\u201d, [A-AG] \u201cDictionaries and other general reference works Building\u201d, [A-AZ] \u201cHistory of scholarship and learning.  The humanities Building\u201d, [A-AM] \u201cMuseums.  Collectors and collecting Building\u201d, [A-AS] \u201cAcademies and learned societies Building\u201d, [A-AP] \u201cPeriodicals Building\u201d, [A-AY] \u201cYearbooks.  Almanacs.  Directories Building\u201d, [A-AI] \u201cIndexes Building\u201d, [A-AN] \u201cNewspapers Building\u201d.",
      "interactables": {},
      "items": {},
      "exits": {
        "A-AC": {
          "displayName": "A-AC",
          "destination": "A-AC"
        },
        "A-AE": {
          "displayName": "A-AE",
          "destination": "A-AE"
        },
        "A-AG": {
          "displayName": "A-AG",
          "destination": "A-AG"
        },
        "A-AZ": {
          "displayName": "A-AZ",
          "destination": "A-AZ"
        },
        "A-AM": {
          "displayName": "A-AM",
          "destination": "A-AM"
        },
        "A-AS": {
          "displayName": "A-AS",
          "destination": "A-AS"
        },
        "A-AP": {
          "displayName": "A-AP",
          "destination": "A-AP"
        },
        "A-AY": {
          "displayName": "A-AY",
          "destination": "A-AY"
        },
        "A-AI": {
          "displayName": "A-AI",
          "destination": "A-AI"
        },
        "A-AN": {
          "displayName": "A-AN",
          "destination": "A-AN"
        }
      }
    },
    "A-AC": {
      "firstVisit": true,
      "displayName": "\u201cCollections.  Series.  Collected works Building\u201d Main Lobby",
      "description": "There are 2 rooms throughout this building in 1 floor. The rooms in this floor are:  [A-AC-AC1-195] \u201cCollections of monographs, essays, etc. Room\u201d, [A-AC-AC1-999] \u201cCollections.  Series.  Collected works Room\u201d.",
      "interactables": {},
      "items": {},
      "exits": {
        "A-AC": {
          "displayName": "Exit",
          "destination": "Plaza"
        },
        "A-AC-AC1-195": {
          "displayName": "A-AC-AC1-195",
          "destination": "A-AC-AC1-195"
        },
        "A-AC-AC1-999": {
          "displayName": "A-AC-AC1-999",
          "destination": "A-AC-AC1-999"
        }
      }
    },
    "A-AE": {
      "firstVisit": true,
      "displayName": "\u201cEncyclopedias Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building in 1 floor. The room in this floor is:  [A-AE-AE1-90] \u201cEncyclopedias Room\u201d.",
      "interactables": {},
      "items": {},
      "exits": {
        "A-AE": {
          "displayName": "Exit",
          "destination": "Plaza"
        },
        "A-AE-AE1-90": {
          "displayName": "A-AE-AE1-90",
          "destination": "A-AE-AE1-90"
        }
      }
    },
    "A-AG": {
      "firstVisit": true,
      "displayName": "\u201cDictionaries and other general reference works Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building in 1 floor. The room in this floor is:  [A-AG-AG2-600] \u201cDictionaries and other general reference works Room\u201d.",
      "interactables": {},
      "items": {},
      "exits": {
        "A-AG": {
          "displayName": "Exit",
          "destination": "Plaza"
        },
        "A-AG-AG2-600": {
          "displayName": "A-AG-AG2-600",
          "destination": "A-AG-AG2-600"
        }
      }
    },
    "A-AZ": {
      "firstVisit": true,
      "displayName": "\u201cHistory of scholarship and learning.  The humanities Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building in 1 floor. The room in this floor is:  [A-AZ-AZ20-999] \u201cHistory of scholarship and learning.  The humanities Room\u201d.",
      "interactables": {},
      "items": {},
      "exits": {
        "A-AZ": {
          "displayName": "Exit",
          "destination": "Plaza"
        },
        "A-AZ-AZ20-999": {
          "displayName": "A-AZ-AZ20-999",
          "destination": "A-AZ-AZ20-999"
        }
      }
    },
    "A-AM": {
      "firstVisit": true,
      "displayName": "\u201cMuseums.  Collectors and collecting Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building in 1 floor. The room in this floor is:  [A-AM-AM1-501] \u201cMuseums.  Collectors and collecting Room\u201d.",
      "interactables": {},
      "items": {},
      "exits": {
        "A-AM": {
          "displayName": "Exit",
          "destination": "Plaza"
        },
        "A-AM-AM1-501": {
          "displayName": "A-AM-AM1-501",
          "destination": "A-AM-AM1-501"
        }
      }
    },
    "A-AS": {
      "firstVisit": true,
      "displayName": "\u201cAcademies and learned societies Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building in 1 floor. The room in this floor is:  [A-AS-AS1-945] \u201cAcademies and learned societies Room\u201d.",
      "interactables": {},
      "items": {},
      "exits": {
        "A-AS": {
          "displayName": "Exit",
          "destination": "Plaza"
        },
        "A-AS-AS1-945": {
          "displayName": "A-AS-AS1-945",
          "destination": "A-AS-AS1-945"
        }
      }
    },
    "A-AP": {
      "firstVisit": true,
      "displayName": "\u201cPeriodicals Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building in 1 floor. The room in this floor is:  [A-AP-AP1-271] \u201cPeriodicals Room\u201d.",
      "interactables": {},
      "items": {},
      "exits": {
        "A-AP": {
          "displayName": "Exit",
          "destination": "Plaza"
        },
        "A-AP-AP1-271": {
          "displayName": "A-AP-AP1-271",
          "destination": "A-AP-AP1-271"
        }
      }
    },
    "A-AY": {
      "firstVisit": true,
      "displayName": "\u201cYearbooks.  Almanacs.  Directories Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building in 1 floor. The room in this floor is:  [A-AY-AY10-2001] \u201cYearbooks.  Almanacs.  Directories Room\u201d.",
      "interactables": {},
      "items": {},
      "exits": {
        "A-AY": {
          "displayName": "Exit",
          "destination": "Plaza"
        },
        "A-AY-AY10-2001": {
          "displayName": "A-AY-AY10-2001",
          "destination": "A-AY-AY10-2001"
        }
      }
    },
    "A-AI": {
      "firstVisit": true,
      "displayName": "\u201cIndexes Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building in 1 floor. The room in this floor is:  [A-AI-AI1-21] \u201cIndexes Room\u201d.",
      "interactables": {},
      "items": {},
      "exits": {
        "A-AI": {
          "displayName": "Exit",
          "destination": "Plaza"
        },
        "A-AI-AI1-21": {
          "displayName": "A-AI-AI1-21",
          "destination": "A-AI-AI1-21"
        }
      }
    },
    "A-AN": {
      "firstVisit": true,
      "displayName": "\u201cNewspapers Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building in 1 floor. The room in this floor is:  [A-AN-AN] \u201cNewspapers Room\u201d.",
      "interactables": {},
      "items": {},
      "exits": {
        "A-AN": {
          "displayName": "Exit",
          "destination": "Plaza"
        },
        "A-AN-AN": {
          "displayName": "A-AN-AN",
          "destination": "A-AN-AN"
        }
      }
    }
  }
}

var gameActions = {

}

module.exports.gameData = gameData;
module.exports.gameActions = gameActions;

function end(){
  if(gameData.player.lightSource){
    gameData.map['End'].description = 'You found more gold than you can carry.';
  } else {
    gameData.map['End'].description = 'It is so dark, you can\'t see anything! You fall down an unseen crevice. Your body is never recovered.';
  }
  gameData.gameOver = true;
}

function useLightSource(){
  gameData.player.lightSource = true;
  return 'You click on the light attached to the helmet.'
}