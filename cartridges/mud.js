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
      "description": "You are in an expansive plaza surrounded by 10 buildings conforming General Works.\nThe buildings are accessible via their classification code, visible above the main door: [A_AC] \u201cCollections.  Series.  Collected works\u201d Building, [A_AE] \u201cEncyclopedias\u201d Building, [A_AG] \u201cDictionaries and other general reference works\u201d Building, [A_AZ] \u201cHistory of scholarship and learning.  The humanities\u201d Building, [A_AM] \u201cMuseums.  Collectors and collecting\u201d Building, [A_AS] \u201cAcademies and learned societies\u201d Building, [A_AP] \u201cPeriodicals\u201d Building, [A_AY] \u201cYearbooks.  Almanacs.  Directories\u201d Building, [A_AI] \u201cIndexes\u201d Building, [A_AN] \u201cNewspapers\u201d Building.",
      "interactables": {},
      "items": {},
      "exits": {
        "A_AC": {
          "displayName": "A_AC",
          "destination": "A_AC"
        },
        "A_AE": {
          "displayName": "A_AE",
          "destination": "A_AE"
        },
        "A_AG": {
          "displayName": "A_AG",
          "destination": "A_AG"
        },
        "A_AZ": {
          "displayName": "A_AZ",
          "destination": "A_AZ"
        },
        "A_AM": {
          "displayName": "A_AM",
          "destination": "A_AM"
        },
        "A_AS": {
          "displayName": "A_AS",
          "destination": "A_AS"
        },
        "A_AP": {
          "displayName": "A_AP",
          "destination": "A_AP"
        },
        "A_AY": {
          "displayName": "A_AY",
          "destination": "A_AY"
        },
        "A_AI": {
          "displayName": "A_AI",
          "destination": "A_AI"
        },
        "A_AN": {
          "displayName": "A_AN",
          "destination": "A_AN"
        }
      }
    },
    "A_AC": {
      "firstVisit": true,
      "displayName": "Collections.  Series.  Collected works",
      "description": "There are 2 rooms throughout this building. Visit them with the appropriate code. [A_AC_AC1-195] \u201cCollections of monographs, essays, etc.\u201d Room, [A_AC_AC1-999] \u201cCollections.  Series.  Collected works\u201d Room.",
      "interactables": {},
      "items": {},
      "exits": {
        "A_AC": {
          "displayName": "Main Plaza",
          "destination": "Plaza"
        },
        "A_AC_AC1-195": {
          "displayName": "A_AC_AC1-195",
          "destination": "A_AC_AC1-195"
        },
        "A_AC_AC1-999": {
          "displayName": "A_AC_AC1-999",
          "destination": "A_AC_AC1-999"
        }
      }
    },
    "A_AC_AC1-195": {
      "firstVisit": true,
      "displayName": "Collections of monographs, essays, etc.",
      "description": "Collections of monographs, essays, etc.",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Lobby",
          "destination": "A_AC"
        }
      }
    },
    "A_AC_AC1-999": {
      "firstVisit": true,
      "displayName": "Collections.  Series.  Collected works",
      "description": "Collections.  Series.  Collected works",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Lobby",
          "destination": "A_AC"
        }
      }
    },
    "A_AE": {
      "firstVisit": true,
      "displayName": "Encyclopedias",
      "description": "There is 1 room throughout this building. Visit it with the appropriate code. [A_AE_AE1-90] \u201cEncyclopedias\u201d Room.",
      "interactables": {},
      "items": {},
      "exits": {
        "A_AE": {
          "displayName": "Main Plaza",
          "destination": "Plaza"
        },
        "A_AE_AE1-90": {
          "displayName": "A_AE_AE1-90",
          "destination": "A_AE_AE1-90"
        }
      }
    },
    "A_AE_AE1-90": {
      "firstVisit": true,
      "displayName": "Encyclopedias",
      "description": "Encyclopedias",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Lobby",
          "destination": "A_AE"
        }
      }
    },
    "A_AG": {
      "firstVisit": true,
      "displayName": "Dictionaries and other general reference works",
      "description": "There is 1 room throughout this building. Visit it with the appropriate code. [A_AG_AG2-600] \u201cDictionaries and other general reference works\u201d Room.",
      "interactables": {},
      "items": {},
      "exits": {
        "A_AG": {
          "displayName": "Main Plaza",
          "destination": "Plaza"
        },
        "A_AG_AG2-600": {
          "displayName": "A_AG_AG2-600",
          "destination": "A_AG_AG2-600"
        }
      }
    },
    "A_AG_AG2-600": {
      "firstVisit": true,
      "displayName": "Dictionaries and other general reference works",
      "description": "Dictionaries and other general reference works",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Lobby",
          "destination": "A_AG"
        }
      }
    },
    "A_AZ": {
      "firstVisit": true,
      "displayName": "History of scholarship and learning.  The humanities",
      "description": "There is 1 room throughout this building. Visit it with the appropriate code. [A_AZ_AZ20-999] \u201cHistory of scholarship and learning.  The humanities\u201d Room.",
      "interactables": {},
      "items": {},
      "exits": {
        "A_AZ": {
          "displayName": "Main Plaza",
          "destination": "Plaza"
        },
        "A_AZ_AZ20-999": {
          "displayName": "A_AZ_AZ20-999",
          "destination": "A_AZ_AZ20-999"
        }
      }
    },
    "A_AZ_AZ20-999": {
      "firstVisit": true,
      "displayName": "History of scholarship and learning.  The humanities",
      "description": "History of scholarship and learning.  The humanities",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Lobby",
          "destination": "A_AZ"
        }
      }
    },
    "A_AM": {
      "firstVisit": true,
      "displayName": "Museums.  Collectors and collecting",
      "description": "There is 1 room throughout this building. Visit it with the appropriate code. [A_AM_AM1-501] \u201cMuseums.  Collectors and collecting\u201d Room.",
      "interactables": {},
      "items": {},
      "exits": {
        "A_AM": {
          "displayName": "Main Plaza",
          "destination": "Plaza"
        },
        "A_AM_AM1-501": {
          "displayName": "A_AM_AM1-501",
          "destination": "A_AM_AM1-501"
        }
      }
    },
    "A_AM_AM1-501": {
      "firstVisit": true,
      "displayName": "Museums.  Collectors and collecting",
      "description": "Museums.  Collectors and collecting",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Lobby",
          "destination": "A_AM"
        }
      }
    },
    "A_AS": {
      "firstVisit": true,
      "displayName": "Academies and learned societies",
      "description": "There is 1 room throughout this building. Visit it with the appropriate code. [A_AS_AS1-945] \u201cAcademies and learned societies\u201d Room.",
      "interactables": {},
      "items": {},
      "exits": {
        "A_AS": {
          "displayName": "Main Plaza",
          "destination": "Plaza"
        },
        "A_AS_AS1-945": {
          "displayName": "A_AS_AS1-945",
          "destination": "A_AS_AS1-945"
        }
      }
    },
    "A_AS_AS1-945": {
      "firstVisit": true,
      "displayName": "Academies and learned societies",
      "description": "Academies and learned societies",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Lobby",
          "destination": "A_AS"
        }
      }
    },
    "A_AP": {
      "firstVisit": true,
      "displayName": "Periodicals",
      "description": "There is 1 room throughout this building. Visit it with the appropriate code. [A_AP_AP1-271] \u201cPeriodicals\u201d Room.",
      "interactables": {},
      "items": {},
      "exits": {
        "A_AP": {
          "displayName": "Main Plaza",
          "destination": "Plaza"
        },
        "A_AP_AP1-271": {
          "displayName": "A_AP_AP1-271",
          "destination": "A_AP_AP1-271"
        }
      }
    },
    "A_AP_AP1-271": {
      "firstVisit": true,
      "displayName": "Periodicals",
      "description": "Periodicals",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Lobby",
          "destination": "A_AP"
        }
      }
    },
    "A_AY": {
      "firstVisit": true,
      "displayName": "Yearbooks.  Almanacs.  Directories",
      "description": "There is 1 room throughout this building. Visit it with the appropriate code. [A_AY_AY10-2001] \u201cYearbooks.  Almanacs.  Directories\u201d Room.",
      "interactables": {},
      "items": {},
      "exits": {
        "A_AY": {
          "displayName": "Main Plaza",
          "destination": "Plaza"
        },
        "A_AY_AY10-2001": {
          "displayName": "A_AY_AY10-2001",
          "destination": "A_AY_AY10-2001"
        }
      }
    },
    "A_AY_AY10-2001": {
      "firstVisit": true,
      "displayName": "Yearbooks.  Almanacs.  Directories",
      "description": "Yearbooks.  Almanacs.  Directories",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Lobby",
          "destination": "A_AY"
        }
      }
    },
    "A_AI": {
      "firstVisit": true,
      "displayName": "Indexes",
      "description": "There is 1 room throughout this building. Visit it with the appropriate code. [A_AI_AI1-21] \u201cIndexes\u201d Room.",
      "interactables": {},
      "items": {},
      "exits": {
        "A_AI": {
          "displayName": "Main Plaza",
          "destination": "Plaza"
        },
        "A_AI_AI1-21": {
          "displayName": "A_AI_AI1-21",
          "destination": "A_AI_AI1-21"
        }
      }
    },
    "A_AI_AI1-21": {
      "firstVisit": true,
      "displayName": "Indexes",
      "description": "Indexes",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Lobby",
          "destination": "A_AI"
        }
      }
    },
    "A_AN": {
      "firstVisit": true,
      "displayName": "Newspapers",
      "description": "There is 1 room throughout this building. Visit it with the appropriate code. [A_AN_AN] \u201cNewspapers\u201d Room.",
      "interactables": {},
      "items": {},
      "exits": {
        "A_AN": {
          "displayName": "Main Plaza",
          "destination": "Plaza"
        },
        "A_AN_AN": {
          "displayName": "A_AN_AN",
          "destination": "A_AN_AN"
        }
      }
    },
    "A_AN_AN": {
      "firstVisit": true,
      "displayName": "Newspapers",
      "description": "Newspapers",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Lobby",
          "destination": "A_AN"
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