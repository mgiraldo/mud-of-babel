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
      "description": "You are in an expansive plaza surrounded by 10 buildings conforming General Works.\nThe buildings are accessible via their classification code, visible above the main door:\n[A-AC] \u201cCollections.  Series.  Collected works Building\u201d, [A-AE] \u201cEncyclopedias Building\u201d, [A-AG] \u201cDictionaries and other general reference works Building\u201d, [A-AZ] \u201cHistory of scholarship and learning.  The humanities Building\u201d, [A-AM] \u201cMuseums.  Collectors and collecting Building\u201d, [A-AS] \u201cAcademies and learned societies Building\u201d, [A-AP] \u201cPeriodicals Building\u201d, [A-AY] \u201cYearbooks.  Almanacs.  Directories Building\u201d, [A-AI] \u201cIndexes Building\u201d, [A-AN] \u201cNewspapers Building\u201d.",
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
    "A-AC-AC1-195": {
      "firstVisit": true,
      "displayName": "Collections of monographs, essays, etc.",
      "description": "Description for \u201cCollections of monographs, essays, etc. Room\u201d. You can exit to the floor foyer.",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "A-AC"
        }
      }
    },
    "A-AC-AC1-999": {
      "firstVisit": true,
      "displayName": "Collections.  Series.  Collected works",
      "description": "Description for \u201cCollections.  Series.  Collected works Room\u201d. You can exit to the floor foyer.",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "A-AC"
        }
      }
    },
    "A-AC": {
      "firstVisit": true,
      "displayName": "\u201cCollections.  Series.  Collected works Building\u201d Main Lobby",
      "description": "There are 2 rooms throughout this building in 1 floor. The rooms in this floor are:\n[A-AC-AC1-195] \u201cCollections of monographs, essays, etc. Room\u201d, [A-AC-AC1-999] \u201cCollections.  Series.  Collected works Room\u201d.",
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
    "A-AE-AE1-90": {
      "firstVisit": true,
      "displayName": "Encyclopedias",
      "description": "Description for \u201cEncyclopedias Room\u201d. You can exit to the floor foyer.",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "A-AE"
        }
      }
    },
    "A-AE": {
      "firstVisit": true,
      "displayName": "\u201cEncyclopedias Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building in 1 floor. The room in this floor is:\n[A-AE-AE1-90] \u201cEncyclopedias Room\u201d.",
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
    "A-AG-AG2-600": {
      "firstVisit": true,
      "displayName": "Dictionaries and other general reference works",
      "description": "Description for \u201cDictionaries and other general reference works Room\u201d. You can exit to the floor foyer.",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "A-AG"
        }
      }
    },
    "A-AG": {
      "firstVisit": true,
      "displayName": "\u201cDictionaries and other general reference works Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building in 1 floor. The room in this floor is:\n[A-AG-AG2-600] \u201cDictionaries and other general reference works Room\u201d.",
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
    "A-AZ-AZ20-999": {
      "firstVisit": true,
      "displayName": "History of scholarship and learning.  The humanities",
      "description": "Description for \u201cHistory of scholarship and learning.  The humanities Room\u201d. You can exit to the floor foyer.",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "A-AZ"
        }
      }
    },
    "A-AZ": {
      "firstVisit": true,
      "displayName": "\u201cHistory of scholarship and learning.  The humanities Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building in 1 floor. The room in this floor is:\n[A-AZ-AZ20-999] \u201cHistory of scholarship and learning.  The humanities Room\u201d.",
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
    "A-AM-AM1-501": {
      "firstVisit": true,
      "displayName": "Museums.  Collectors and collecting",
      "description": "Description for \u201cMuseums.  Collectors and collecting Room\u201d. You can exit to the floor foyer.",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "A-AM"
        }
      }
    },
    "A-AM": {
      "firstVisit": true,
      "displayName": "\u201cMuseums.  Collectors and collecting Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building in 1 floor. The room in this floor is:\n[A-AM-AM1-501] \u201cMuseums.  Collectors and collecting Room\u201d.",
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
    "A-AS-AS1-945": {
      "firstVisit": true,
      "displayName": "Academies and learned societies",
      "description": "Description for \u201cAcademies and learned societies Room\u201d. You can exit to the floor foyer.",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "A-AS"
        }
      }
    },
    "A-AS": {
      "firstVisit": true,
      "displayName": "\u201cAcademies and learned societies Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building in 1 floor. The room in this floor is:\n[A-AS-AS1-945] \u201cAcademies and learned societies Room\u201d.",
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
    "A-AP-AP1-271": {
      "firstVisit": true,
      "displayName": "Periodicals",
      "description": "Description for \u201cPeriodicals Room\u201d. You can exit to the floor foyer.",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "A-AP"
        }
      }
    },
    "A-AP": {
      "firstVisit": true,
      "displayName": "\u201cPeriodicals Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building in 1 floor. The room in this floor is:\n[A-AP-AP1-271] \u201cPeriodicals Room\u201d.",
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
    "A-AY-AY10-2001": {
      "firstVisit": true,
      "displayName": "Yearbooks.  Almanacs.  Directories",
      "description": "Description for \u201cYearbooks.  Almanacs.  Directories Room\u201d. You can exit to the floor foyer.",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "A-AY"
        }
      }
    },
    "A-AY": {
      "firstVisit": true,
      "displayName": "\u201cYearbooks.  Almanacs.  Directories Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building in 1 floor. The room in this floor is:\n[A-AY-AY10-2001] \u201cYearbooks.  Almanacs.  Directories Room\u201d.",
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
    "A-AI-AI1-21": {
      "firstVisit": true,
      "displayName": "Indexes",
      "description": "Description for \u201cIndexes Room\u201d. You can exit to the floor foyer.",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "A-AI"
        }
      }
    },
    "A-AI": {
      "firstVisit": true,
      "displayName": "\u201cIndexes Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building in 1 floor. The room in this floor is:\n[A-AI-AI1-21] \u201cIndexes Room\u201d.",
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
    "A-AN-AN": {
      "firstVisit": true,
      "displayName": "Newspapers",
      "description": "Description for \u201cNewspapers Room\u201d. You can exit to the floor foyer.",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "A-AN"
        }
      }
    },
    "A-AN": {
      "firstVisit": true,
      "displayName": "\u201cNewspapers Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building in 1 floor. The room in this floor is:\n[A-AN-AN] \u201cNewspapers Room\u201d.",
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