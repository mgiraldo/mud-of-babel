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
      "displayName": "Collections.  Series.  Collected works",
      "description": "There are 2 rooms throughout this building. Visit them with the appropriate code. [A-AC-AC1-195] \u201cCollections of monographs, essays, etc. Room\u201d, [A-AC-AC1-999] \u201cCollections.  Series.  Collected works Room\u201d.",
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
    "A-AC-AC1-195": {
      "firstVisit": true,
      "displayName": "Collections of monographs, essays, etc.",
      "description": "Description for \u201cCollections of monographs, essays, etc. Room\u201d. You can exit to the building lobby.",
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
      "description": "Description for \u201cCollections.  Series.  Collected works Room\u201d. You can exit to the building lobby.",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "A-AC"
        }
      }
    },
    "A-AE": {
      "firstVisit": true,
      "displayName": "Encyclopedias",
      "description": "There is 1 room throughout this building. Visit it with the appropriate code. [A-AE-AE1-90] \u201cEncyclopedias Room\u201d.",
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
    "A-AE-AE1-90": {
      "firstVisit": true,
      "displayName": "Encyclopedias",
      "description": "Description for \u201cEncyclopedias Room\u201d. You can exit to the building lobby.",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "A-AE"
        }
      }
    },
    "A-AG": {
      "firstVisit": true,
      "displayName": "Dictionaries and other general reference works",
      "description": "There is 1 room throughout this building. Visit it with the appropriate code. [A-AG-AG2-600] \u201cDictionaries and other general reference works Room\u201d.",
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
    "A-AG-AG2-600": {
      "firstVisit": true,
      "displayName": "Dictionaries and other general reference works",
      "description": "Description for \u201cDictionaries and other general reference works Room\u201d. You can exit to the building lobby.",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "A-AG"
        }
      }
    },
    "A-AZ": {
      "firstVisit": true,
      "displayName": "History of scholarship and learning.  The humanities",
      "description": "There is 1 room throughout this building. Visit it with the appropriate code. [A-AZ-AZ20-999] \u201cHistory of scholarship and learning.  The humanities Room\u201d.",
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
    "A-AZ-AZ20-999": {
      "firstVisit": true,
      "displayName": "History of scholarship and learning.  The humanities",
      "description": "Description for \u201cHistory of scholarship and learning.  The humanities Room\u201d. You can exit to the building lobby.",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "A-AZ"
        }
      }
    },
    "A-AM": {
      "firstVisit": true,
      "displayName": "Museums.  Collectors and collecting",
      "description": "There is 1 room throughout this building. Visit it with the appropriate code. [A-AM-AM1-501] \u201cMuseums.  Collectors and collecting Room\u201d.",
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
    "A-AM-AM1-501": {
      "firstVisit": true,
      "displayName": "Museums.  Collectors and collecting",
      "description": "Description for \u201cMuseums.  Collectors and collecting Room\u201d. You can exit to the building lobby.",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "A-AM"
        }
      }
    },
    "A-AS": {
      "firstVisit": true,
      "displayName": "Academies and learned societies",
      "description": "There is 1 room throughout this building. Visit it with the appropriate code. [A-AS-AS1-945] \u201cAcademies and learned societies Room\u201d.",
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
    "A-AS-AS1-945": {
      "firstVisit": true,
      "displayName": "Academies and learned societies",
      "description": "Description for \u201cAcademies and learned societies Room\u201d. You can exit to the building lobby.",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "A-AS"
        }
      }
    },
    "A-AP": {
      "firstVisit": true,
      "displayName": "Periodicals",
      "description": "There is 1 room throughout this building. Visit it with the appropriate code. [A-AP-AP1-271] \u201cPeriodicals Room\u201d.",
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
    "A-AP-AP1-271": {
      "firstVisit": true,
      "displayName": "Periodicals",
      "description": "Description for \u201cPeriodicals Room\u201d. You can exit to the building lobby.",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "A-AP"
        }
      }
    },
    "A-AY": {
      "firstVisit": true,
      "displayName": "Yearbooks.  Almanacs.  Directories",
      "description": "There is 1 room throughout this building. Visit it with the appropriate code. [A-AY-AY10-2001] \u201cYearbooks.  Almanacs.  Directories Room\u201d.",
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
    "A-AY-AY10-2001": {
      "firstVisit": true,
      "displayName": "Yearbooks.  Almanacs.  Directories",
      "description": "Description for \u201cYearbooks.  Almanacs.  Directories Room\u201d. You can exit to the building lobby.",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "A-AY"
        }
      }
    },
    "A-AI": {
      "firstVisit": true,
      "displayName": "Indexes",
      "description": "There is 1 room throughout this building. Visit it with the appropriate code. [A-AI-AI1-21] \u201cIndexes Room\u201d.",
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
    "A-AI-AI1-21": {
      "firstVisit": true,
      "displayName": "Indexes",
      "description": "Description for \u201cIndexes Room\u201d. You can exit to the building lobby.",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "A-AI"
        }
      }
    },
    "A-AN": {
      "firstVisit": true,
      "displayName": "Newspapers",
      "description": "There is 1 room throughout this building. Visit it with the appropriate code. [A-AN-AN] \u201cNewspapers Room\u201d.",
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
    },
    "A-AN-AN": {
      "firstVisit": true,
      "displayName": "Newspapers",
      "description": "Description for \u201cNewspapers Room\u201d. You can exit to the building lobby.",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "A-AN"
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