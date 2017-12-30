var gameData = {
  "gameOver": false,
  "introText": "\n\nWelcome to the MUD of Babel!\n",
  "outroText": "Thanks For playing!",
  "player": {
    "currentLocation": "MAIN",
    "inventory": {},
    "lightSource": false
  },
  "map": {
    "MAIN": {
      "firstVisit": true,
      "displayName": "Main Library Grounds",
      "description": "You are in an plaza surrounded by 21 buildings conforming Main Library Grounds.\nThe buildings are accessible via their classification code, visible above the main door:\n\n[|A|] (2 stories) \u201cGeneral Works Building\u201d\n[|B|] (2 stories) \u201cPhilosophy, Psychology, Religion Building\u201d\n[|C|] (2 stories) \u201cAuxiliary Sciences of History (General) Building\u201d\n[|D|] (3 stories) \u201cWorld History (except American History) Building\u201d\n[|E|] (1 story) \u201cAmerican History Building\u201d\n[|F|] (1 story) \u201cLocal History of the United States and British, Dutch, French, and Latin America Building\u201d\n[|G|] (2 stories) \u201cGeography, Anthropology, Recreation Building\u201d\n[|H|] (2 stories) \u201cSocial Sciences Building\u201d\n[|J|] (2 stories) \u201cPolitical Science Building\u201d\n[|K|] (35 stories) \u201cLaw Building\u201d\n[|L|] (2 stories) \u201cEducation Building\u201d\n[|M|] (1 story) \u201cMusic Building\u201d\n[|N|] (1 story) \u201cFine Arts Building\u201d\n[|P|] (3 stories) \u201cLanguage and Literature Building\u201d\n[|Q|] (2 stories) \u201cScience Building\u201d\n[|R|] (3 stories) \u201cMedicine Building\u201d\n[|S|] (1 story) \u201cAgriculture Building\u201d\n[|T|] (3 stories) \u201cTechnology Building\u201d\n[|U|] (2 stories) \u201cMilitary Science Building\u201d\n[|V|] (2 stories) \u201cNaval Science Building\u201d\n[|Z|] (1 story) \u201cBibliography, Library Science Building\u201d",
      "interactables": {},
      "items": {},
      "exits": {
        "A": {
          "displayName": "A",
          "destination": "A"
        },
        "B": {
          "displayName": "B",
          "destination": "B"
        },
        "C": {
          "displayName": "C",
          "destination": "C"
        },
        "D": {
          "displayName": "D",
          "destination": "D"
        },
        "E": {
          "displayName": "E",
          "destination": "E"
        },
        "F": {
          "displayName": "F",
          "destination": "F"
        },
        "G": {
          "displayName": "G",
          "destination": "G"
        },
        "H": {
          "displayName": "H",
          "destination": "H"
        },
        "J": {
          "displayName": "J",
          "destination": "J"
        },
        "K": {
          "displayName": "K",
          "destination": "K"
        },
        "L": {
          "displayName": "L",
          "destination": "L"
        },
        "M": {
          "displayName": "M",
          "destination": "M"
        },
        "N": {
          "displayName": "N",
          "destination": "N"
        },
        "P": {
          "displayName": "P",
          "destination": "P"
        },
        "Q": {
          "displayName": "Q",
          "destination": "Q"
        },
        "R": {
          "displayName": "R",
          "destination": "R"
        },
        "S": {
          "displayName": "S",
          "destination": "S"
        },
        "T": {
          "displayName": "T",
          "destination": "T"
        },
        "U": {
          "displayName": "U",
          "destination": "U"
        },
        "V": {
          "displayName": "V",
          "destination": "V"
        },
        "Z": {
          "displayName": "Z",
          "destination": "Z"
        }
      }
    },
    "A": {
      "firstVisit": true,
      "displayName": "\u201cGeneral Works Building\u201d Front Porch",
      "description": "This is a small, one story tall, octagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cGeneral Works\u201d engraved.\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
      "interactables": {},
      "items": {},
      "exits": {
        "MAIN": {
          "displayName": "Main",
          "destination": "MAIN"
        },
        "Building": {
          "displayName": "Enter",
          "destination": "building_A"
        }
      }
    },
    "building_A-AC": {
      "firstVisit": true,
      "displayName": "Collections.  Series.  Collected works",
      "description": "Description for \u201cCollections.  Series.  Collected works Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_A"
        }
      }
    },
    "building_A-AE": {
      "firstVisit": true,
      "displayName": "Encyclopedias",
      "description": "Description for \u201cEncyclopedias Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_A"
        }
      }
    },
    "building_A-AG": {
      "firstVisit": true,
      "displayName": "Dictionaries and other general reference works",
      "description": "Description for \u201cDictionaries and other general reference works Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_A"
        }
      }
    },
    "building_A-AZ": {
      "firstVisit": true,
      "displayName": "History of scholarship and learning.  The humanities",
      "description": "Description for \u201cHistory of scholarship and learning.  The humanities Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_A"
        }
      }
    },
    "building_A-AM": {
      "firstVisit": true,
      "displayName": "Museums.  Collectors and collecting",
      "description": "Description for \u201cMuseums.  Collectors and collecting Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_A"
        }
      }
    },
    "building_A-AS": {
      "firstVisit": true,
      "displayName": "Academies and learned societies",
      "description": "Description for \u201cAcademies and learned societies Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_A"
        }
      }
    },
    "building_A-AP": {
      "firstVisit": true,
      "displayName": "Periodicals",
      "description": "Description for \u201cPeriodicals Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_A"
        }
      }
    },
    "building_A-AY": {
      "firstVisit": true,
      "displayName": "Yearbooks.  Almanacs.  Directories",
      "description": "Description for \u201cYearbooks.  Almanacs.  Directories Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_A"
        }
      }
    },
    "building_A": {
      "firstVisit": true,
      "displayName": "\u201cGeneral Works Building\u201d Main Lobby",
      "description": "There are 10 rooms throughout this building in 2 floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] \u201cCollections.  Series.  Collected works Room\u201d\n[|North|||||] \u201cEncyclopedias Room\u201d\n[|East||||||] \u201cDictionaries and other general reference works Room\u201d\n[|West||||||] \u201cHistory of scholarship and learning.  The humanities Room\u201d\n[|SouthEast|] \u201cMuseums.  Collectors and collecting Room\u201d\n[|NorthWest|] \u201cAcademies and learned societies Room\u201d\n[|SouthWest|] \u201cPeriodicals Room\u201d\n[|NorthEast|] \u201cYearbooks.  Almanacs.  Directories Room\u201d\n[|Up||||||||] 2nd floor\n[|Exit||||||] \u201cGeneral Works Building\u201d Front Porch",
      "interactables": {},
      "items": {},
      "exits": {
        "A": {
          "displayName": "Exit",
          "destination": "A"
        },
        "up": {
          "displayName": "Up",
          "destination": "2_building_A"
        },
        "A-AC": {
          "displayName": "South",
          "destination": "A-AC"
        },
        "A-AE": {
          "displayName": "North",
          "destination": "A-AE"
        },
        "A-AG": {
          "displayName": "East",
          "destination": "A-AG"
        },
        "A-AZ": {
          "displayName": "West",
          "destination": "A-AZ"
        },
        "A-AM": {
          "displayName": "SouthEast",
          "destination": "A-AM"
        },
        "A-AS": {
          "displayName": "NorthWest",
          "destination": "A-AS"
        },
        "A-AP": {
          "displayName": "SouthWest",
          "destination": "A-AP"
        },
        "A-AY": {
          "displayName": "NorthEast",
          "destination": "A-AY"
        }
      }
    },
    "building_A-AI": {
      "firstVisit": true,
      "displayName": "Indexes",
      "description": "Description for \u201cIndexes Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_A"
        }
      }
    },
    "building_A-AN": {
      "firstVisit": true,
      "displayName": "Newspapers",
      "description": "Description for \u201cNewspapers Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_A"
        }
      }
    },
    "2_building_A": {
      "firstVisit": true,
      "displayName": "\u201cGeneral Works Building\u201d, 2nd Floor",
      "description": "You are in the 2nd floor. There are 2 rooms:\n\n[|South|||||] \u201cIndexes Room\u201d\n[|North|||||] \u201cNewspapers Room\u201d\n[|Down||||||] 1st floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_A-AI": {
          "displayName": "South",
          "destination": "building_A-AI"
        },
        "building_A-AN": {
          "displayName": "North",
          "destination": "building_A-AN"
        },
        "down": {
          "displayName": "Down",
          "destination": "building_A"
        }
      }
    },
    "B": {
      "firstVisit": true,
      "displayName": "\u201cPhilosophy, Psychology, Religion Building\u201d Front Porch",
      "description": "This is a small, one story tall, octagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cPhilosophy, Psychology, Religion\u201d engraved.\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
      "interactables": {},
      "items": {},
      "exits": {
        "MAIN": {
          "displayName": "Main",
          "destination": "MAIN"
        },
        "Building": {
          "displayName": "Enter",
          "destination": "building_B"
        }
      }
    },
    "building_B-BV": {
      "firstVisit": true,
      "displayName": "Practical Theology",
      "description": "Description for \u201cPractical Theology Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_B"
        }
      }
    },
    "building_B-BJ": {
      "firstVisit": true,
      "displayName": "Ethics",
      "description": "Description for \u201cEthics Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_B"
        }
      }
    },
    "building_B-BX": {
      "firstVisit": true,
      "displayName": "Christian Denominations",
      "description": "Description for \u201cChristian Denominations Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_B"
        }
      }
    },
    "building_B-BF": {
      "firstVisit": true,
      "displayName": "Psychology",
      "description": "Description for \u201cPsychology Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_B"
        }
      }
    },
    "building_B-BS": {
      "firstVisit": true,
      "displayName": "The Bible",
      "description": "Description for \u201cThe Bible Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_B"
        }
      }
    },
    "building_B-BT": {
      "firstVisit": true,
      "displayName": "Doctrinal Theology",
      "description": "Description for \u201cDoctrinal Theology Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_B"
        }
      }
    },
    "building_B-B": {
      "firstVisit": true,
      "displayName": "Philosophy (General)",
      "description": "Description for \u201cPhilosophy (General) Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_B"
        }
      }
    },
    "building_B-BR": {
      "firstVisit": true,
      "displayName": "Christianity",
      "description": "Description for \u201cChristianity Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_B"
        }
      }
    },
    "building_B": {
      "firstVisit": true,
      "displayName": "\u201cPhilosophy, Psychology, Religion Building\u201d Main Lobby",
      "description": "There are 15 rooms throughout this building in 2 floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] \u201cPractical Theology Room\u201d\n[|North|||||] \u201cEthics Room\u201d\n[|East||||||] \u201cChristian Denominations Room\u201d\n[|West||||||] \u201cPsychology Room\u201d\n[|SouthEast|] \u201cThe Bible Room\u201d\n[|NorthWest|] \u201cDoctrinal Theology Room\u201d\n[|SouthWest|] \u201cPhilosophy (General) Room\u201d\n[|NorthEast|] \u201cChristianity Room\u201d\n[|Up||||||||] 2nd floor\n[|Exit||||||] \u201cPhilosophy, Psychology, Religion Building\u201d Front Porch",
      "interactables": {},
      "items": {},
      "exits": {
        "B": {
          "displayName": "Exit",
          "destination": "B"
        },
        "up": {
          "displayName": "Up",
          "destination": "2_building_B"
        },
        "B-BV": {
          "displayName": "South",
          "destination": "B-BV"
        },
        "B-BJ": {
          "displayName": "North",
          "destination": "B-BJ"
        },
        "B-BX": {
          "displayName": "East",
          "destination": "B-BX"
        },
        "B-BF": {
          "displayName": "West",
          "destination": "B-BF"
        },
        "B-BS": {
          "displayName": "SouthEast",
          "destination": "B-BS"
        },
        "B-BT": {
          "displayName": "NorthWest",
          "destination": "B-BT"
        },
        "B-B": {
          "displayName": "SouthWest",
          "destination": "B-B"
        },
        "B-BR": {
          "displayName": "NorthEast",
          "destination": "B-BR"
        }
      }
    },
    "building_B-BL": {
      "firstVisit": true,
      "displayName": "Religions.  Mythology.  Rationalism",
      "description": "Description for \u201cReligions.  Mythology.  Rationalism Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_B"
        }
      }
    },
    "building_B-BP": {
      "firstVisit": true,
      "displayName": "Islam.  Bahai Faith.  Theosophy, etc.",
      "description": "Description for \u201cIslam.  Bahai Faith.  Theosophy, etc. Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_B"
        }
      }
    },
    "building_B-BM": {
      "firstVisit": true,
      "displayName": "Judaism",
      "description": "Description for \u201cJudaism Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_B"
        }
      }
    },
    "building_B-BC": {
      "firstVisit": true,
      "displayName": "Logic",
      "description": "Description for \u201cLogic Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_B"
        }
      }
    },
    "building_B-BQ": {
      "firstVisit": true,
      "displayName": "Buddhism",
      "description": "Description for \u201cBuddhism Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_B"
        }
      }
    },
    "building_B-BD": {
      "firstVisit": true,
      "displayName": "Speculative philosophy",
      "description": "Description for \u201cSpeculative philosophy Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_B"
        }
      }
    },
    "building_B-BH": {
      "firstVisit": true,
      "displayName": "Aesthetics",
      "description": "Description for \u201cAesthetics Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_B"
        }
      }
    },
    "2_building_B": {
      "firstVisit": true,
      "displayName": "\u201cPhilosophy, Psychology, Religion Building\u201d, 2nd Floor",
      "description": "You are in the 2nd floor. There are 7 rooms:\n\n[|South|||||] \u201cReligions.  Mythology.  Rationalism Room\u201d\n[|North|||||] \u201cIslam.  Bahai Faith.  Theosophy, etc. Room\u201d\n[|East||||||] \u201cJudaism Room\u201d\n[|West||||||] \u201cLogic Room\u201d\n[|SouthEast|] \u201cBuddhism Room\u201d\n[|NorthWest|] \u201cSpeculative philosophy Room\u201d\n[|SouthWest|] \u201cAesthetics Room\u201d\n[|Down||||||] 1st floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_B-BL": {
          "displayName": "South",
          "destination": "building_B-BL"
        },
        "building_B-BP": {
          "displayName": "North",
          "destination": "building_B-BP"
        },
        "building_B-BM": {
          "displayName": "East",
          "destination": "building_B-BM"
        },
        "building_B-BC": {
          "displayName": "West",
          "destination": "building_B-BC"
        },
        "building_B-BQ": {
          "displayName": "SouthEast",
          "destination": "building_B-BQ"
        },
        "building_B-BD": {
          "displayName": "NorthWest",
          "destination": "building_B-BD"
        },
        "building_B-BH": {
          "displayName": "SouthWest",
          "destination": "building_B-BH"
        },
        "down": {
          "displayName": "Down",
          "destination": "building_B"
        }
      }
    },
    "C": {
      "firstVisit": true,
      "displayName": "\u201cAuxiliary Sciences of History (General) Building\u201d Front Porch",
      "description": "This is a small, one story tall, octagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cAuxiliary Sciences of History (General)\u201d engraved.\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
      "interactables": {},
      "items": {},
      "exits": {
        "MAIN": {
          "displayName": "Main",
          "destination": "MAIN"
        },
        "Building": {
          "displayName": "Enter",
          "destination": "building_C"
        }
      }
    },
    "building_C-CT": {
      "firstVisit": true,
      "displayName": "Biography",
      "description": "Description for \u201cBiography Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_C"
        }
      }
    },
    "building_C-CS": {
      "firstVisit": true,
      "displayName": "Genealogy",
      "description": "Description for \u201cGenealogy Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_C"
        }
      }
    },
    "building_C-CR": {
      "firstVisit": true,
      "displayName": "Heraldry",
      "description": "Description for \u201cHeraldry Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_C"
        }
      }
    },
    "building_C-CB": {
      "firstVisit": true,
      "displayName": "History of Civilization",
      "description": "Description for \u201cHistory of Civilization Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_C"
        }
      }
    },
    "building_C-CJ": {
      "firstVisit": true,
      "displayName": "Numismatics",
      "description": "Description for \u201cNumismatics Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_C"
        }
      }
    },
    "building_C-CC": {
      "firstVisit": true,
      "displayName": "Archaeology",
      "description": "Description for \u201cArchaeology Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_C"
        }
      }
    },
    "building_C-CN": {
      "firstVisit": true,
      "displayName": "Inscriptions.  Epigraphy",
      "description": "Description for \u201cInscriptions.  Epigraphy Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_C"
        }
      }
    },
    "building_C-CD": {
      "firstVisit": true,
      "displayName": "Diplomatics.  Archives.  Seals",
      "description": "Description for \u201cDiplomatics.  Archives.  Seals Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_C"
        }
      }
    },
    "building_C": {
      "firstVisit": true,
      "displayName": "\u201cAuxiliary Sciences of History (General) Building\u201d Main Lobby",
      "description": "There are 10 rooms throughout this building in 2 floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] \u201cBiography Room\u201d\n[|North|||||] \u201cGenealogy Room\u201d\n[|East||||||] \u201cHeraldry Room\u201d\n[|West||||||] \u201cHistory of Civilization Room\u201d\n[|SouthEast|] \u201cNumismatics Room\u201d\n[|NorthWest|] \u201cArchaeology Room\u201d\n[|SouthWest|] \u201cInscriptions.  Epigraphy Room\u201d\n[|NorthEast|] \u201cDiplomatics.  Archives.  Seals Room\u201d\n[|Up||||||||] 2nd floor\n[|Exit||||||] \u201cAuxiliary Sciences of History (General) Building\u201d Front Porch",
      "interactables": {},
      "items": {},
      "exits": {
        "C": {
          "displayName": "Exit",
          "destination": "C"
        },
        "up": {
          "displayName": "Up",
          "destination": "2_building_C"
        },
        "C-CT": {
          "displayName": "South",
          "destination": "C-CT"
        },
        "C-CS": {
          "displayName": "North",
          "destination": "C-CS"
        },
        "C-CR": {
          "displayName": "East",
          "destination": "C-CR"
        },
        "C-CB": {
          "displayName": "West",
          "destination": "C-CB"
        },
        "C-CJ": {
          "displayName": "SouthEast",
          "destination": "C-CJ"
        },
        "C-CC": {
          "displayName": "NorthWest",
          "destination": "C-CC"
        },
        "C-CN": {
          "displayName": "SouthWest",
          "destination": "C-CN"
        },
        "C-CD": {
          "displayName": "NorthEast",
          "destination": "C-CD"
        }
      }
    },
    "building_C-CE": {
      "firstVisit": true,
      "displayName": "Technical chronology.  Calendar",
      "description": "Description for \u201cTechnical chronology.  Calendar Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_C"
        }
      }
    },
    "building_C-C": {
      "firstVisit": true,
      "displayName": "Auxiliary Sciences of History (General)",
      "description": "Description for \u201cAuxiliary Sciences of History (General) Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_C"
        }
      }
    },
    "2_building_C": {
      "firstVisit": true,
      "displayName": "\u201cAuxiliary Sciences of History (General) Building\u201d, 2nd Floor",
      "description": "You are in the 2nd floor. There are 2 rooms:\n\n[|South|||||] \u201cTechnical chronology.  Calendar Room\u201d\n[|North|||||] \u201cAuxiliary Sciences of History (General) Room\u201d\n[|Down||||||] 1st floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_C-CE": {
          "displayName": "South",
          "destination": "building_C-CE"
        },
        "building_C-C": {
          "displayName": "North",
          "destination": "building_C-C"
        },
        "down": {
          "displayName": "Down",
          "destination": "building_C"
        }
      }
    },
    "D": {
      "firstVisit": true,
      "displayName": "\u201cWorld History (except American History) Building\u201d Front Porch",
      "description": "This is a small, one story tall, octagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cWorld History (except American History)\u201d engraved.\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
      "interactables": {},
      "items": {},
      "exits": {
        "MAIN": {
          "displayName": "Main",
          "destination": "MAIN"
        },
        "Building": {
          "displayName": "Enter",
          "destination": "building_D"
        }
      }
    },
    "building_D-DS": {
      "firstVisit": true,
      "displayName": "History of Asia",
      "description": "Description for \u201cHistory of Asia Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_D"
        }
      }
    },
    "building_D-D": {
      "firstVisit": true,
      "displayName": "History (General)",
      "description": "Description for \u201cHistory (General) Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_D"
        }
      }
    },
    "building_D-DA": {
      "firstVisit": true,
      "displayName": "History of Great Britain",
      "description": "Description for \u201cHistory of Great Britain Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_D"
        }
      }
    },
    "building_D-DT": {
      "firstVisit": true,
      "displayName": "History of Africa",
      "description": "Description for \u201cHistory of Africa Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_D"
        }
      }
    },
    "building_D-DG": {
      "firstVisit": true,
      "displayName": "History of Italy",
      "description": "Description for \u201cHistory of Italy Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_D"
        }
      }
    },
    "building_D-DC": {
      "firstVisit": true,
      "displayName": "History of France",
      "description": "Description for \u201cHistory of France Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_D"
        }
      }
    },
    "building_D-DD": {
      "firstVisit": true,
      "displayName": "History of Germany",
      "description": "Description for \u201cHistory of Germany Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_D"
        }
      }
    },
    "building_D-DH": {
      "firstVisit": true,
      "displayName": "History of Low Countries.  Benelux Countries",
      "description": "Description for \u201cHistory of Low Countries.  Benelux Countries Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_D"
        }
      }
    },
    "building_D": {
      "firstVisit": true,
      "displayName": "\u201cWorld History (except American History) Building\u201d Main Lobby",
      "description": "There are 21 rooms throughout this building in 3 floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] \u201cHistory of Asia Room\u201d\n[|North|||||] \u201cHistory (General) Room\u201d\n[|East||||||] \u201cHistory of Great Britain Room\u201d\n[|West||||||] \u201cHistory of Africa Room\u201d\n[|SouthEast|] \u201cHistory of Italy Room\u201d\n[|NorthWest|] \u201cHistory of France Room\u201d\n[|SouthWest|] \u201cHistory of Germany Room\u201d\n[|NorthEast|] \u201cHistory of Low Countries.  Benelux Countries Room\u201d\n[|Up||||||||] 2nd floor\n[|Exit||||||] \u201cWorld History (except American History) Building\u201d Front Porch",
      "interactables": {},
      "items": {},
      "exits": {
        "D": {
          "displayName": "Exit",
          "destination": "D"
        },
        "up": {
          "displayName": "Up",
          "destination": "2_building_D"
        },
        "D-DS": {
          "displayName": "South",
          "destination": "D-DS"
        },
        "D-D": {
          "displayName": "North",
          "destination": "D-D"
        },
        "D-DA": {
          "displayName": "East",
          "destination": "D-DA"
        },
        "D-DT": {
          "displayName": "West",
          "destination": "D-DT"
        },
        "D-DG": {
          "displayName": "SouthEast",
          "destination": "D-DG"
        },
        "D-DC": {
          "displayName": "NorthWest",
          "destination": "D-DC"
        },
        "D-DD": {
          "displayName": "SouthWest",
          "destination": "D-DD"
        },
        "D-DH": {
          "displayName": "NorthEast",
          "destination": "D-DH"
        }
      }
    },
    "building_D-DU": {
      "firstVisit": true,
      "displayName": "History of Oceania (South Seas)",
      "description": "Description for \u201cHistory of Oceania (South Seas) Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_D"
        }
      }
    },
    "building_D-DK": {
      "firstVisit": true,
      "displayName": "History of Russia.  Soviet Union.  Former Soviet Republics",
      "description": "Description for \u201cHistory of Russia.  Soviet Union.  Former Soviet Republics Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_D"
        }
      }
    },
    "building_D-DE": {
      "firstVisit": true,
      "displayName": "History of the Greco-Roman world",
      "description": "Description for \u201cHistory of the Greco-Roman world Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_D"
        }
      }
    },
    "building_D-DR": {
      "firstVisit": true,
      "displayName": "History of Balkan Peninsula",
      "description": "Description for \u201cHistory of Balkan Peninsula Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_D"
        }
      }
    },
    "building_D-DP": {
      "firstVisit": true,
      "displayName": "History of Spain",
      "description": "Description for \u201cHistory of Spain Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_D"
        }
      }
    },
    "building_D-DF": {
      "firstVisit": true,
      "displayName": "History of Greece",
      "description": "Description for \u201cHistory of Greece Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_D"
        }
      }
    },
    "building_D-DJK": {
      "firstVisit": true,
      "displayName": "History of Eastern Europe (General)",
      "description": "Description for \u201cHistory of Eastern Europe (General) Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_D"
        }
      }
    },
    "building_D-DB": {
      "firstVisit": true,
      "displayName": "History of Austria.  Liechtenstein.  Hungary.  Czechoslovakia",
      "description": "Description for \u201cHistory of Austria.  Liechtenstein.  Hungary.  Czechoslovakia Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_D"
        }
      }
    },
    "2_building_D": {
      "firstVisit": true,
      "displayName": "\u201cWorld History (except American History) Building\u201d, 2nd Floor",
      "description": "You are in the 2nd floor. There are 8 rooms:\n\n[|South|||||] \u201cHistory of Oceania (South Seas) Room\u201d\n[|North|||||] \u201cHistory of Russia.  Soviet Union.  Former Soviet Republics Room\u201d\n[|East||||||] \u201cHistory of the Greco-Roman world Room\u201d\n[|West||||||] \u201cHistory of Balkan Peninsula Room\u201d\n[|SouthEast|] \u201cHistory of Spain Room\u201d\n[|NorthWest|] \u201cHistory of Greece Room\u201d\n[|SouthWest|] \u201cHistory of Eastern Europe (General) Room\u201d\n[|NorthEast|] \u201cHistory of Austria.  Liechtenstein.  Hungary.  Czechoslovakia Room\u201d\n[|Down||||||] 1st floor\n[|Up||||||||] 3rd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_D-DU": {
          "displayName": "South",
          "destination": "building_D-DU"
        },
        "building_D-DK": {
          "displayName": "North",
          "destination": "building_D-DK"
        },
        "building_D-DE": {
          "displayName": "East",
          "destination": "building_D-DE"
        },
        "building_D-DR": {
          "displayName": "West",
          "destination": "building_D-DR"
        },
        "building_D-DP": {
          "displayName": "SouthEast",
          "destination": "building_D-DP"
        },
        "building_D-DF": {
          "displayName": "NorthWest",
          "destination": "building_D-DF"
        },
        "building_D-DJK": {
          "displayName": "SouthWest",
          "destination": "building_D-DJK"
        },
        "building_D-DB": {
          "displayName": "NorthEast",
          "destination": "building_D-DB"
        },
        "down": {
          "displayName": "Down",
          "destination": "building_D"
        },
        "up": {
          "displayName": "Up",
          "destination": "3_building_D"
        }
      }
    },
    "building_D-DL": {
      "firstVisit": true,
      "displayName": "History of Northern Europe.  Scandinavia",
      "description": "Description for \u201cHistory of Northern Europe.  Scandinavia Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_building_D"
        }
      }
    },
    "building_D-DQ": {
      "firstVisit": true,
      "displayName": "History of Switzerland",
      "description": "Description for \u201cHistory of Switzerland Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_building_D"
        }
      }
    },
    "building_D-DAW": {
      "firstVisit": true,
      "displayName": "History of Central Europe",
      "description": "Description for \u201cHistory of Central Europe Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_building_D"
        }
      }
    },
    "building_D-DJ": {
      "firstVisit": true,
      "displayName": "History of Netherlands (Holland)",
      "description": "Description for \u201cHistory of Netherlands (Holland) Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_building_D"
        }
      }
    },
    "building_D-DX": {
      "firstVisit": true,
      "displayName": "History of Romanies",
      "description": "Description for \u201cHistory of Romanies Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_building_D"
        }
      }
    },
    "3_building_D": {
      "firstVisit": true,
      "displayName": "\u201cWorld History (except American History) Building\u201d, 3rd Floor",
      "description": "You are in the 3rd floor. There are 5 rooms:\n\n[|South|||||] \u201cHistory of Northern Europe.  Scandinavia Room\u201d\n[|North|||||] \u201cHistory of Switzerland Room\u201d\n[|East||||||] \u201cHistory of Central Europe Room\u201d\n[|West||||||] \u201cHistory of Netherlands (Holland) Room\u201d\n[|SouthEast|] \u201cHistory of Romanies Room\u201d\n[|Down||||||] 2nd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_D-DL": {
          "displayName": "South",
          "destination": "building_D-DL"
        },
        "building_D-DQ": {
          "displayName": "North",
          "destination": "building_D-DQ"
        },
        "building_D-DAW": {
          "displayName": "East",
          "destination": "building_D-DAW"
        },
        "building_D-DJ": {
          "displayName": "West",
          "destination": "building_D-DJ"
        },
        "building_D-DX": {
          "displayName": "SouthEast",
          "destination": "building_D-DX"
        },
        "down": {
          "displayName": "Down",
          "destination": "2_building_D"
        }
      }
    },
    "E": {
      "firstVisit": true,
      "displayName": "\u201cAmerican History Building\u201d Front Porch",
      "description": "This is a small, one story tall, square-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cAmerican History\u201d engraved.\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
      "interactables": {},
      "items": {},
      "exits": {
        "MAIN": {
          "displayName": "Main",
          "destination": "MAIN"
        },
        "Building": {
          "displayName": "Enter",
          "destination": "building_E"
        }
      }
    },
    "building_E-E": {
      "firstVisit": true,
      "displayName": "United States",
      "description": "Description for \u201cUnited States Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_E"
        }
      }
    },
    "building_E": {
      "firstVisit": true,
      "displayName": "\u201cAmerican History Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[|South|||||] \u201cUnited States Room\u201d\n[|Exit||||||] \u201cAmerican History Building\u201d Front Porch",
      "interactables": {},
      "items": {},
      "exits": {
        "E": {
          "displayName": "Exit",
          "destination": "E"
        },
        "E-E": {
          "displayName": "South",
          "destination": "E-E"
        }
      }
    },
    "F": {
      "firstVisit": true,
      "displayName": "\u201cLocal History of the United States and British, Dutch, French, and Latin America Building\u201d Front Porch",
      "description": "This is a small, one story tall, square-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cLocal History of the United States and British, Dutch, French, and Latin America\u201d engraved.\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
      "interactables": {},
      "items": {},
      "exits": {
        "MAIN": {
          "displayName": "Main",
          "destination": "MAIN"
        },
        "Building": {
          "displayName": "Enter",
          "destination": "building_F"
        }
      }
    },
    "building_F-F": {
      "firstVisit": true,
      "displayName": "Latin America.  Spanish America",
      "description": "Description for \u201cLatin America.  Spanish America Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_F"
        }
      }
    },
    "building_F": {
      "firstVisit": true,
      "displayName": "\u201cLocal History of the United States and British, Dutch, French, and Latin America Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[|South|||||] \u201cLatin America.  Spanish America Room\u201d\n[|Exit||||||] \u201cLocal History of the United States and British, Dutch, French, and Latin America Building\u201d Front Porch",
      "interactables": {},
      "items": {},
      "exits": {
        "F": {
          "displayName": "Exit",
          "destination": "F"
        },
        "F-F": {
          "displayName": "South",
          "destination": "F-F"
        }
      }
    },
    "G": {
      "firstVisit": true,
      "displayName": "\u201cGeography, Anthropology, Recreation Building\u201d Front Porch",
      "description": "This is a small, one story tall, octagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cGeography, Anthropology, Recreation\u201d engraved.\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
      "interactables": {},
      "items": {},
      "exits": {
        "MAIN": {
          "displayName": "Main",
          "destination": "MAIN"
        },
        "Building": {
          "displayName": "Enter",
          "destination": "building_G"
        }
      }
    },
    "building_G-G": {
      "firstVisit": true,
      "displayName": "Maps",
      "description": "Description for \u201cMaps Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_G"
        }
      }
    },
    "building_G-GV": {
      "firstVisit": true,
      "displayName": "Recreation.  Leisure",
      "description": "Description for \u201cRecreation.  Leisure Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_G"
        }
      }
    },
    "building_G-GA": {
      "firstVisit": true,
      "displayName": "Mathematical geography.  Cartography",
      "description": "Description for \u201cMathematical geography.  Cartography Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_G"
        }
      }
    },
    "building_G-GN": {
      "firstVisit": true,
      "displayName": "Anthropology",
      "description": "Description for \u201cAnthropology Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_G"
        }
      }
    },
    "building_G-GR": {
      "firstVisit": true,
      "displayName": "Folklore",
      "description": "Description for \u201cFolklore Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_G"
        }
      }
    },
    "building_G-GT": {
      "firstVisit": true,
      "displayName": "Manners and customs (General)",
      "description": "Description for \u201cManners and customs (General) Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_G"
        }
      }
    },
    "building_G-GC": {
      "firstVisit": true,
      "displayName": "Oceanography",
      "description": "Description for \u201cOceanography Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_G"
        }
      }
    },
    "building_G-GB": {
      "firstVisit": true,
      "displayName": "Physical geography",
      "description": "Description for \u201cPhysical geography Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_G"
        }
      }
    },
    "building_G": {
      "firstVisit": true,
      "displayName": "\u201cGeography, Anthropology, Recreation Building\u201d Main Lobby",
      "description": "There are 10 rooms throughout this building in 2 floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] \u201cMaps Room\u201d\n[|North|||||] \u201cRecreation.  Leisure Room\u201d\n[|East||||||] \u201cMathematical geography.  Cartography Room\u201d\n[|West||||||] \u201cAnthropology Room\u201d\n[|SouthEast|] \u201cFolklore Room\u201d\n[|NorthWest|] \u201cManners and customs (General) Room\u201d\n[|SouthWest|] \u201cOceanography Room\u201d\n[|NorthEast|] \u201cPhysical geography Room\u201d\n[|Up||||||||] 2nd floor\n[|Exit||||||] \u201cGeography, Anthropology, Recreation Building\u201d Front Porch",
      "interactables": {},
      "items": {},
      "exits": {
        "G": {
          "displayName": "Exit",
          "destination": "G"
        },
        "up": {
          "displayName": "Up",
          "destination": "2_building_G"
        },
        "G-G": {
          "displayName": "South",
          "destination": "G-G"
        },
        "G-GV": {
          "displayName": "North",
          "destination": "G-GV"
        },
        "G-GA": {
          "displayName": "East",
          "destination": "G-GA"
        },
        "G-GN": {
          "displayName": "West",
          "destination": "G-GN"
        },
        "G-GR": {
          "displayName": "SouthEast",
          "destination": "G-GR"
        },
        "G-GT": {
          "displayName": "NorthWest",
          "destination": "G-GT"
        },
        "G-GC": {
          "displayName": "SouthWest",
          "destination": "G-GC"
        },
        "G-GB": {
          "displayName": "NorthEast",
          "destination": "G-GB"
        }
      }
    },
    "building_G-GE": {
      "firstVisit": true,
      "displayName": "Environmental sciences",
      "description": "Description for \u201cEnvironmental sciences Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_G"
        }
      }
    },
    "building_G-GF": {
      "firstVisit": true,
      "displayName": "Human ecology.  Anthropogeography",
      "description": "Description for \u201cHuman ecology.  Anthropogeography Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_G"
        }
      }
    },
    "2_building_G": {
      "firstVisit": true,
      "displayName": "\u201cGeography, Anthropology, Recreation Building\u201d, 2nd Floor",
      "description": "You are in the 2nd floor. There are 2 rooms:\n\n[|South|||||] \u201cEnvironmental sciences Room\u201d\n[|North|||||] \u201cHuman ecology.  Anthropogeography Room\u201d\n[|Down||||||] 1st floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_G-GE": {
          "displayName": "South",
          "destination": "building_G-GE"
        },
        "building_G-GF": {
          "displayName": "North",
          "destination": "building_G-GF"
        },
        "down": {
          "displayName": "Down",
          "destination": "building_G"
        }
      }
    },
    "H": {
      "firstVisit": true,
      "displayName": "\u201cSocial Sciences Building\u201d Front Porch",
      "description": "This is a small, one story tall, octagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cSocial Sciences\u201d engraved.\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
      "interactables": {},
      "items": {},
      "exits": {
        "MAIN": {
          "displayName": "Main",
          "destination": "MAIN"
        },
        "Building": {
          "displayName": "Enter",
          "destination": "building_H"
        }
      }
    },
    "building_H-HF": {
      "firstVisit": true,
      "displayName": "Commerce",
      "description": "Description for \u201cCommerce Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_H"
        }
      }
    },
    "building_H-HX": {
      "firstVisit": true,
      "displayName": "Socialism.  Communism.  Anarchism",
      "description": "Description for \u201cSocialism.  Communism.  Anarchism Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_H"
        }
      }
    },
    "building_H-HD": {
      "firstVisit": true,
      "displayName": "Industries.  Land use.  Labor",
      "description": "Description for \u201cIndustries.  Land use.  Labor Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_H"
        }
      }
    },
    "building_H-HG": {
      "firstVisit": true,
      "displayName": "Finance",
      "description": "Description for \u201cFinance Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_H"
        }
      }
    },
    "building_H-HB": {
      "firstVisit": true,
      "displayName": "Economic theory.  Demography",
      "description": "Description for \u201cEconomic theory.  Demography Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_H"
        }
      }
    },
    "building_H-HQ": {
      "firstVisit": true,
      "displayName": "The Family.  Marriage.  Women",
      "description": "Description for \u201cThe Family.  Marriage.  Women Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_H"
        }
      }
    },
    "building_H-H": {
      "firstVisit": true,
      "displayName": "Social sciences (General)",
      "description": "Description for \u201cSocial sciences (General) Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_H"
        }
      }
    },
    "building_H-HE": {
      "firstVisit": true,
      "displayName": "Transportation and communications",
      "description": "Description for \u201cTransportation and communications Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_H"
        }
      }
    },
    "building_H": {
      "firstVisit": true,
      "displayName": "\u201cSocial Sciences Building\u201d Main Lobby",
      "description": "There are 16 rooms throughout this building in 2 floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] \u201cCommerce Room\u201d\n[|North|||||] \u201cSocialism.  Communism.  Anarchism Room\u201d\n[|East||||||] \u201cIndustries.  Land use.  Labor Room\u201d\n[|West||||||] \u201cFinance Room\u201d\n[|SouthEast|] \u201cEconomic theory.  Demography Room\u201d\n[|NorthWest|] \u201cThe Family.  Marriage.  Women Room\u201d\n[|SouthWest|] \u201cSocial sciences (General) Room\u201d\n[|NorthEast|] \u201cTransportation and communications Room\u201d\n[|Up||||||||] 2nd floor\n[|Exit||||||] \u201cSocial Sciences Building\u201d Front Porch",
      "interactables": {},
      "items": {},
      "exits": {
        "H": {
          "displayName": "Exit",
          "destination": "H"
        },
        "up": {
          "displayName": "Up",
          "destination": "2_building_H"
        },
        "H-HF": {
          "displayName": "South",
          "destination": "H-HF"
        },
        "H-HX": {
          "displayName": "North",
          "destination": "H-HX"
        },
        "H-HD": {
          "displayName": "East",
          "destination": "H-HD"
        },
        "H-HG": {
          "displayName": "West",
          "destination": "H-HG"
        },
        "H-HB": {
          "displayName": "SouthEast",
          "destination": "H-HB"
        },
        "H-HQ": {
          "displayName": "NorthWest",
          "destination": "H-HQ"
        },
        "H-H": {
          "displayName": "SouthWest",
          "destination": "H-H"
        },
        "H-HE": {
          "displayName": "NorthEast",
          "destination": "H-HE"
        }
      }
    },
    "building_H-HM": {
      "firstVisit": true,
      "displayName": "Sociology",
      "description": "Description for \u201cSociology Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_H"
        }
      }
    },
    "building_H-HJ": {
      "firstVisit": true,
      "displayName": "Public finance",
      "description": "Description for \u201cPublic finance Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_H"
        }
      }
    },
    "building_H-HN": {
      "firstVisit": true,
      "displayName": "Social history and conditions.  Social problems.",
      "description": "Description for \u201cSocial history and conditions.  Social problems. Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_H"
        }
      }
    },
    "building_H-HS": {
      "firstVisit": true,
      "displayName": "Societies: secret, benevolent, etc.",
      "description": "Description for \u201cSocieties: secret, benevolent, etc. Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_H"
        }
      }
    },
    "building_H-HV": {
      "firstVisit": true,
      "displayName": "Social pathology.  Social and public welfare.",
      "description": "Description for \u201cSocial pathology.  Social and public welfare. Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_H"
        }
      }
    },
    "building_H-HC": {
      "firstVisit": true,
      "displayName": "Economic history and conditions",
      "description": "Description for \u201cEconomic history and conditions Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_H"
        }
      }
    },
    "building_H-HA": {
      "firstVisit": true,
      "displayName": "Statistics",
      "description": "Description for \u201cStatistics Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_H"
        }
      }
    },
    "building_H-HT": {
      "firstVisit": true,
      "displayName": "Communities.  Classes.  Races",
      "description": "Description for \u201cCommunities.  Classes.  Races Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_H"
        }
      }
    },
    "2_building_H": {
      "firstVisit": true,
      "displayName": "\u201cSocial Sciences Building\u201d, 2nd Floor",
      "description": "You are in the 2nd floor. There are 8 rooms:\n\n[|South|||||] \u201cSociology Room\u201d\n[|North|||||] \u201cPublic finance Room\u201d\n[|East||||||] \u201cSocial history and conditions.  Social problems. Room\u201d\n[|West||||||] \u201cSocieties: secret, benevolent, etc. Room\u201d\n[|SouthEast|] \u201cSocial pathology.  Social and public welfare. Room\u201d\n[|NorthWest|] \u201cEconomic history and conditions Room\u201d\n[|SouthWest|] \u201cStatistics Room\u201d\n[|NorthEast|] \u201cCommunities.  Classes.  Races Room\u201d\n[|Down||||||] 1st floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_H-HM": {
          "displayName": "South",
          "destination": "building_H-HM"
        },
        "building_H-HJ": {
          "displayName": "North",
          "destination": "building_H-HJ"
        },
        "building_H-HN": {
          "displayName": "East",
          "destination": "building_H-HN"
        },
        "building_H-HS": {
          "displayName": "West",
          "destination": "building_H-HS"
        },
        "building_H-HV": {
          "displayName": "SouthEast",
          "destination": "building_H-HV"
        },
        "building_H-HC": {
          "displayName": "NorthWest",
          "destination": "building_H-HC"
        },
        "building_H-HA": {
          "displayName": "SouthWest",
          "destination": "building_H-HA"
        },
        "building_H-HT": {
          "displayName": "NorthEast",
          "destination": "building_H-HT"
        },
        "down": {
          "displayName": "Down",
          "destination": "building_H"
        }
      }
    },
    "J": {
      "firstVisit": true,
      "displayName": "\u201cPolitical Science Building\u201d Front Porch",
      "description": "This is a small, one story tall, octagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cPolitical Science\u201d engraved.\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
      "interactables": {},
      "items": {},
      "exits": {
        "MAIN": {
          "displayName": "Main",
          "destination": "MAIN"
        },
        "Building": {
          "displayName": "Enter",
          "destination": "building_J"
        }
      }
    },
    "building_J-JF": {
      "firstVisit": true,
      "displayName": "Political institutions and public administration",
      "description": "Description for \u201cPolitical institutions and public administration Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_J"
        }
      }
    },
    "building_J-JC": {
      "firstVisit": true,
      "displayName": "Political theory.  The state.  Theories of the state",
      "description": "Description for \u201cPolitical theory.  The state.  Theories of the state Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_J"
        }
      }
    },
    "building_J-JK": {
      "firstVisit": true,
      "displayName": "Political institutions and public administration",
      "description": "Description for \u201cPolitical institutions and public administration Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_J"
        }
      }
    },
    "building_J-JS": {
      "firstVisit": true,
      "displayName": "Local government.  Municipal government",
      "description": "Description for \u201cLocal government.  Municipal government Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_J"
        }
      }
    },
    "building_J-JV": {
      "firstVisit": true,
      "displayName": "Colonies and colonization.  Emigration and",
      "description": "Description for \u201cColonies and colonization.  Emigration and Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_J"
        }
      }
    },
    "building_J-JA": {
      "firstVisit": true,
      "displayName": "Political science (General)",
      "description": "Description for \u201cPolitical science (General) Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_J"
        }
      }
    },
    "building_J-JX": {
      "firstVisit": true,
      "displayName": "International law, see JZ and KZ",
      "description": "Description for \u201cInternational law, see JZ and KZ Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_J"
        }
      }
    },
    "building_J-JN": {
      "firstVisit": true,
      "displayName": "Political institutions and public administration (Europe)",
      "description": "Description for \u201cPolitical institutions and public administration (Europe) Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_J"
        }
      }
    },
    "building_J": {
      "firstVisit": true,
      "displayName": "\u201cPolitical Science Building\u201d Main Lobby",
      "description": "There are 13 rooms throughout this building in 2 floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] \u201cPolitical institutions and public administration Room\u201d\n[|North|||||] \u201cPolitical theory.  The state.  Theories of the state Room\u201d\n[|East||||||] \u201cPolitical institutions and public administration Room\u201d\n[|West||||||] \u201cLocal government.  Municipal government Room\u201d\n[|SouthEast|] \u201cColonies and colonization.  Emigration and Room\u201d\n[|NorthWest|] \u201cPolitical science (General) Room\u201d\n[|SouthWest|] \u201cInternational law, see JZ and KZ Room\u201d\n[|NorthEast|] \u201cPolitical institutions and public administration (Europe) Room\u201d\n[|Up||||||||] 2nd floor\n[|Exit||||||] \u201cPolitical Science Building\u201d Front Porch",
      "interactables": {},
      "items": {},
      "exits": {
        "J": {
          "displayName": "Exit",
          "destination": "J"
        },
        "up": {
          "displayName": "Up",
          "destination": "2_building_J"
        },
        "J-JF": {
          "displayName": "South",
          "destination": "J-JF"
        },
        "J-JC": {
          "displayName": "North",
          "destination": "J-JC"
        },
        "J-JK": {
          "displayName": "East",
          "destination": "J-JK"
        },
        "J-JS": {
          "displayName": "West",
          "destination": "J-JS"
        },
        "J-JV": {
          "displayName": "SouthEast",
          "destination": "J-JV"
        },
        "J-JA": {
          "displayName": "NorthWest",
          "destination": "J-JA"
        },
        "J-JX": {
          "displayName": "SouthWest",
          "destination": "J-JX"
        },
        "J-JN": {
          "displayName": "NorthEast",
          "destination": "J-JN"
        }
      }
    },
    "building_J-JZ": {
      "firstVisit": true,
      "displayName": "International relations",
      "description": "Description for \u201cInternational relations Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_J"
        }
      }
    },
    "building_J-JL": {
      "firstVisit": true,
      "displayName": "Political institutions and public administration",
      "description": "Description for \u201cPolitical institutions and public administration Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_J"
        }
      }
    },
    "building_J-J": {
      "firstVisit": true,
      "displayName": "General legislative and executive papers",
      "description": "Description for \u201cGeneral legislative and executive papers Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_J"
        }
      }
    },
    "building_J-JQ": {
      "firstVisit": true,
      "displayName": "Political institutions and public administration (Asia,",
      "description": "Description for \u201cPolitical institutions and public administration (Asia, Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_J"
        }
      }
    },
    "building_J-JJ": {
      "firstVisit": true,
      "displayName": "Political institutions and public administration",
      "description": "Description for \u201cPolitical institutions and public administration Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_J"
        }
      }
    },
    "2_building_J": {
      "firstVisit": true,
      "displayName": "\u201cPolitical Science Building\u201d, 2nd Floor",
      "description": "You are in the 2nd floor. There are 5 rooms:\n\n[|South|||||] \u201cInternational relations Room\u201d\n[|North|||||] \u201cPolitical institutions and public administration Room\u201d\n[|East||||||] \u201cGeneral legislative and executive papers Room\u201d\n[|West||||||] \u201cPolitical institutions and public administration (Asia, Room\u201d\n[|SouthEast|] \u201cPolitical institutions and public administration Room\u201d\n[|Down||||||] 1st floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_J-JZ": {
          "displayName": "South",
          "destination": "building_J-JZ"
        },
        "building_J-JL": {
          "displayName": "North",
          "destination": "building_J-JL"
        },
        "building_J-J": {
          "displayName": "East",
          "destination": "building_J-J"
        },
        "building_J-JQ": {
          "displayName": "West",
          "destination": "building_J-JQ"
        },
        "building_J-JJ": {
          "displayName": "SouthEast",
          "destination": "building_J-JJ"
        },
        "down": {
          "displayName": "Down",
          "destination": "building_J"
        }
      }
    },
    "K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d Front Porch",
      "description": "This is a small, one story tall, octagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cLaw\u201d engraved.\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
      "interactables": {},
      "items": {},
      "exits": {
        "MAIN": {
          "displayName": "Main",
          "destination": "MAIN"
        },
        "Building": {
          "displayName": "Enter",
          "destination": "building_K"
        }
      }
    },
    "building_K-KF": {
      "firstVisit": true,
      "displayName": "Law of the United States (Federal)",
      "description": "Description for \u201cLaw of the United States (Federal) Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_K"
        }
      }
    },
    "building_K-KFW": {
      "firstVisit": true,
      "displayName": "Law of Washington",
      "description": "Description for \u201cLaw of Washington Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_K"
        }
      }
    },
    "building_K-KFM": {
      "firstVisit": true,
      "displayName": "Law of Maine",
      "description": "Description for \u201cLaw of Maine Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_K"
        }
      }
    },
    "building_K-KFT": {
      "firstVisit": true,
      "displayName": "Law of Tennessee",
      "description": "Description for \u201cLaw of Tennessee Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_K"
        }
      }
    },
    "building_K-K": {
      "firstVisit": true,
      "displayName": "Comparative law.  International uniform law",
      "description": "Description for \u201cComparative law.  International uniform law Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_K"
        }
      }
    },
    "building_K-KZ": {
      "firstVisit": true,
      "displayName": "Law of nations",
      "description": "Description for \u201cLaw of nations Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_K"
        }
      }
    },
    "building_K-KD": {
      "firstVisit": true,
      "displayName": "Law of England and Wales",
      "description": "Description for \u201cLaw of England and Wales Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_K"
        }
      }
    },
    "building_K-KFP": {
      "firstVisit": true,
      "displayName": "Law of Pennsylvania",
      "description": "Description for \u201cLaw of Pennsylvania Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_K"
        }
      }
    },
    "building_K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d Main Lobby",
      "description": "There are 275 rooms throughout this building in 35 floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] \u201cLaw of the United States (Federal) Room\u201d\n[|North|||||] \u201cLaw of Washington Room\u201d\n[|East||||||] \u201cLaw of Maine Room\u201d\n[|West||||||] \u201cLaw of Tennessee Room\u201d\n[|SouthEast|] \u201cComparative law.  International uniform law Room\u201d\n[|NorthWest|] \u201cLaw of nations Room\u201d\n[|SouthWest|] \u201cLaw of England and Wales Room\u201d\n[|NorthEast|] \u201cLaw of Pennsylvania Room\u201d\n[|Up||||||||] 2nd floor\n[|Exit||||||] \u201cLaw Building\u201d Front Porch",
      "interactables": {},
      "items": {},
      "exits": {
        "K": {
          "displayName": "Exit",
          "destination": "K"
        },
        "up": {
          "displayName": "Up",
          "destination": "2_building_K"
        },
        "K-KF": {
          "displayName": "South",
          "destination": "K-KF"
        },
        "K-KFW": {
          "displayName": "North",
          "destination": "K-KFW"
        },
        "K-KFM": {
          "displayName": "East",
          "destination": "K-KFM"
        },
        "K-KFT": {
          "displayName": "West",
          "destination": "K-KFT"
        },
        "K-K": {
          "displayName": "SouthEast",
          "destination": "K-K"
        },
        "K-KZ": {
          "displayName": "NorthWest",
          "destination": "K-KZ"
        },
        "K-KD": {
          "displayName": "SouthWest",
          "destination": "K-KD"
        },
        "K-KFP": {
          "displayName": "NorthEast",
          "destination": "K-KFP"
        }
      }
    },
    "building_K-KFI": {
      "firstVisit": true,
      "displayName": "Law of Idaho",
      "description": "Description for \u201cLaw of Idaho Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_K"
        }
      }
    },
    "building_K-KFN": {
      "firstVisit": true,
      "displayName": "Law of Nebraska",
      "description": "Description for \u201cLaw of Nebraska Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_K"
        }
      }
    },
    "building_K-KFC": {
      "firstVisit": true,
      "displayName": "Law of California",
      "description": "Description for \u201cLaw of California Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_K"
        }
      }
    },
    "building_K-KFO": {
      "firstVisit": true,
      "displayName": "Law of Ohio",
      "description": "Description for \u201cLaw of Ohio Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_K"
        }
      }
    },
    "building_K-KFL": {
      "firstVisit": true,
      "displayName": "Law of Louisiana",
      "description": "Description for \u201cLaw of Louisiana Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_K"
        }
      }
    },
    "building_K-KFA": {
      "firstVisit": true,
      "displayName": "Law of Alabama",
      "description": "Description for \u201cLaw of Alabama Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_K"
        }
      }
    },
    "building_K-KLA": {
      "firstVisit": true,
      "displayName": "Russia, Soviet Union",
      "description": "Description for \u201cRussia, Soviet Union Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_K"
        }
      }
    },
    "building_K-KKT": {
      "firstVisit": true,
      "displayName": "Law of Spain",
      "description": "Description for \u201cLaw of Spain Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_K"
        }
      }
    },
    "2_building_K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 2nd Floor",
      "description": "You are in the 2nd floor. There are 8 rooms:\n\n[|South|||||] \u201cLaw of Idaho Room\u201d\n[|North|||||] \u201cLaw of Nebraska Room\u201d\n[|East||||||] \u201cLaw of California Room\u201d\n[|West||||||] \u201cLaw of Ohio Room\u201d\n[|SouthEast|] \u201cLaw of Louisiana Room\u201d\n[|NorthWest|] \u201cLaw of Alabama Room\u201d\n[|SouthWest|] \u201cRussia, Soviet Union Room\u201d\n[|NorthEast|] \u201cLaw of Spain Room\u201d\n[|Down||||||] 1st floor\n[|Up||||||||] 3rd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KFI": {
          "displayName": "South",
          "destination": "building_K-KFI"
        },
        "building_K-KFN": {
          "displayName": "North",
          "destination": "building_K-KFN"
        },
        "building_K-KFC": {
          "displayName": "East",
          "destination": "building_K-KFC"
        },
        "building_K-KFO": {
          "displayName": "West",
          "destination": "building_K-KFO"
        },
        "building_K-KFL": {
          "displayName": "SouthEast",
          "destination": "building_K-KFL"
        },
        "building_K-KFA": {
          "displayName": "NorthWest",
          "destination": "building_K-KFA"
        },
        "building_K-KLA": {
          "displayName": "SouthWest",
          "destination": "building_K-KLA"
        },
        "building_K-KKT": {
          "displayName": "NorthEast",
          "destination": "building_K-KKT"
        },
        "down": {
          "displayName": "Down",
          "destination": "building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "3_building_K"
        }
      }
    },
    "building_K-KMT": {
      "firstVisit": true,
      "displayName": "Saudi Arabia",
      "description": "Description for \u201cSaudi Arabia Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_building_K"
        }
      }
    },
    "building_K-KJM": {
      "firstVisit": true,
      "displayName": "Law of Croatia",
      "description": "Description for \u201cLaw of Croatia Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_building_K"
        }
      }
    },
    "building_K-KBP": {
      "firstVisit": true,
      "displayName": "Islamic law.  Shar\u012b\u02bbah.  Fiqh",
      "description": "Description for \u201cIslamic law.  Shar\u012b\u02bbah.  Fiqh Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_building_K"
        }
      }
    },
    "building_K-KBR": {
      "firstVisit": true,
      "displayName": "History of canon law",
      "description": "Description for \u201cHistory of canon law Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_building_K"
        }
      }
    },
    "building_K-KZA": {
      "firstVisit": true,
      "displayName": "Law of the sea",
      "description": "Description for \u201cLaw of the sea Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_building_K"
        }
      }
    },
    "building_K-KNQ": {
      "firstVisit": true,
      "displayName": "China (People\u2019s Republic, 1949-    )",
      "description": "Description for \u201cChina (People\u2019s Republic, 1949-    ) Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_building_K"
        }
      }
    },
    "building_K-KJE": {
      "firstVisit": true,
      "displayName": "Regional organization and integration (Europe)",
      "description": "Description for \u201cRegional organization and integration (Europe) Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_building_K"
        }
      }
    },
    "building_K-KFV": {
      "firstVisit": true,
      "displayName": "Law of Vermont",
      "description": "Description for \u201cLaw of Vermont Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_building_K"
        }
      }
    },
    "3_building_K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 3rd Floor",
      "description": "You are in the 3rd floor. There are 8 rooms:\n\n[|South|||||] \u201cSaudi Arabia Room\u201d\n[|North|||||] \u201cLaw of Croatia Room\u201d\n[|East||||||] \u201cIslamic law.  Shar\u012b\u02bbah.  Fiqh Room\u201d\n[|West||||||] \u201cHistory of canon law Room\u201d\n[|SouthEast|] \u201cLaw of the sea Room\u201d\n[|NorthWest|] \u201cChina (People\u2019s Republic, 1949-    ) Room\u201d\n[|SouthWest|] \u201cRegional organization and integration (Europe) Room\u201d\n[|NorthEast|] \u201cLaw of Vermont Room\u201d\n[|Down||||||] 2nd floor\n[|Up||||||||] 4th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KMT": {
          "displayName": "South",
          "destination": "building_K-KMT"
        },
        "building_K-KJM": {
          "displayName": "North",
          "destination": "building_K-KJM"
        },
        "building_K-KBP": {
          "displayName": "East",
          "destination": "building_K-KBP"
        },
        "building_K-KBR": {
          "displayName": "West",
          "destination": "building_K-KBR"
        },
        "building_K-KZA": {
          "displayName": "SouthEast",
          "destination": "building_K-KZA"
        },
        "building_K-KNQ": {
          "displayName": "NorthWest",
          "destination": "building_K-KNQ"
        },
        "building_K-KJE": {
          "displayName": "SouthWest",
          "destination": "building_K-KJE"
        },
        "building_K-KFV": {
          "displayName": "NorthEast",
          "destination": "building_K-KFV"
        },
        "down": {
          "displayName": "Down",
          "destination": "2_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "4_building_K"
        }
      }
    },
    "building_K-KNN": {
      "firstVisit": true,
      "displayName": "Law of China",
      "description": "Description for \u201cLaw of China Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "4_building_K"
        }
      }
    },
    "building_K-KMM": {
      "firstVisit": true,
      "displayName": "West Bank",
      "description": "Description for \u201cWest Bank Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "4_building_K"
        }
      }
    },
    "building_K-KJC": {
      "firstVisit": true,
      "displayName": "Regional comparative and uniform law (Europe)",
      "description": "Description for \u201cRegional comparative and uniform law (Europe) Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "4_building_K"
        }
      }
    },
    "building_K-KMK": {
      "firstVisit": true,
      "displayName": "Israel",
      "description": "Description for \u201cIsrael Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "4_building_K"
        }
      }
    },
    "building_K-KTL": {
      "firstVisit": true,
      "displayName": "South Africa, Republic of",
      "description": "Description for \u201cSouth Africa, Republic of Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "4_building_K"
        }
      }
    },
    "building_K-KMC": {
      "firstVisit": true,
      "displayName": "Regional comparative and uniform law",
      "description": "Description for \u201cRegional comparative and uniform law Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "4_building_K"
        }
      }
    },
    "building_K-KEN": {
      "firstVisit": true,
      "displayName": "Law of New Brunswick",
      "description": "Description for \u201cLaw of New Brunswick Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "4_building_K"
        }
      }
    },
    "building_K-KRP": {
      "firstVisit": true,
      "displayName": "Ethiopia",
      "description": "Description for \u201cEthiopia Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "4_building_K"
        }
      }
    },
    "4_building_K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 4th Floor",
      "description": "You are in the 4th floor. There are 8 rooms:\n\n[|South|||||] \u201cLaw of China Room\u201d\n[|North|||||] \u201cWest Bank Room\u201d\n[|East||||||] \u201cRegional comparative and uniform law (Europe) Room\u201d\n[|West||||||] \u201cIsrael Room\u201d\n[|SouthEast|] \u201cSouth Africa, Republic of Room\u201d\n[|NorthWest|] \u201cRegional comparative and uniform law Room\u201d\n[|SouthWest|] \u201cLaw of New Brunswick Room\u201d\n[|NorthEast|] \u201cEthiopia Room\u201d\n[|Down||||||] 3rd floor\n[|Up||||||||] 5th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KNN": {
          "displayName": "South",
          "destination": "building_K-KNN"
        },
        "building_K-KMM": {
          "displayName": "North",
          "destination": "building_K-KMM"
        },
        "building_K-KJC": {
          "displayName": "East",
          "destination": "building_K-KJC"
        },
        "building_K-KMK": {
          "displayName": "West",
          "destination": "building_K-KMK"
        },
        "building_K-KTL": {
          "displayName": "SouthEast",
          "destination": "building_K-KTL"
        },
        "building_K-KMC": {
          "displayName": "NorthWest",
          "destination": "building_K-KMC"
        },
        "building_K-KEN": {
          "displayName": "SouthWest",
          "destination": "building_K-KEN"
        },
        "building_K-KRP": {
          "displayName": "NorthEast",
          "destination": "building_K-KRP"
        },
        "down": {
          "displayName": "Down",
          "destination": "3_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "5_building_K"
        }
      }
    },
    "building_K-KJA": {
      "firstVisit": true,
      "displayName": "Roman Law",
      "description": "Description for \u201cRoman Law Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "5_building_K"
        }
      }
    },
    "building_K-KJV": {
      "firstVisit": true,
      "displayName": "Law of France",
      "description": "Description for \u201cLaw of France Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "5_building_K"
        }
      }
    },
    "building_K-KBU": {
      "firstVisit": true,
      "displayName": "Law of the Roman Catholic Church. The Holy See",
      "description": "Description for \u201cLaw of the Roman Catholic Church. The Holy See Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "5_building_K"
        }
      }
    },
    "building_K-KLB": {
      "firstVisit": true,
      "displayName": "Russia (Federation, 1992-    )",
      "description": "Description for \u201cRussia (Federation, 1992-    ) Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "5_building_K"
        }
      }
    },
    "building_K-KK": {
      "firstVisit": true,
      "displayName": "Law of Germany",
      "description": "Description for \u201cLaw of Germany Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "5_building_K"
        }
      }
    },
    "building_K-KFG": {
      "firstVisit": true,
      "displayName": "Law of Georgia",
      "description": "Description for \u201cLaw of Georgia Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "5_building_K"
        }
      }
    },
    "building_K-KHA": {
      "firstVisit": true,
      "displayName": "Argentina",
      "description": "Description for \u201cArgentina Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "5_building_K"
        }
      }
    },
    "building_K-KLW": {
      "firstVisit": true,
      "displayName": "Uzbekistan",
      "description": "Description for \u201cUzbekistan Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "5_building_K"
        }
      }
    },
    "5_building_K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 5th Floor",
      "description": "You are in the 5th floor. There are 8 rooms:\n\n[|South|||||] \u201cRoman Law Room\u201d\n[|North|||||] \u201cLaw of France Room\u201d\n[|East||||||] \u201cLaw of the Roman Catholic Church. The Holy See Room\u201d\n[|West||||||] \u201cRussia (Federation, 1992-    ) Room\u201d\n[|SouthEast|] \u201cLaw of Germany Room\u201d\n[|NorthWest|] \u201cLaw of Georgia Room\u201d\n[|SouthWest|] \u201cArgentina Room\u201d\n[|NorthEast|] \u201cUzbekistan Room\u201d\n[|Down||||||] 4th floor\n[|Up||||||||] 6th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KJA": {
          "displayName": "South",
          "destination": "building_K-KJA"
        },
        "building_K-KJV": {
          "displayName": "North",
          "destination": "building_K-KJV"
        },
        "building_K-KBU": {
          "displayName": "East",
          "destination": "building_K-KBU"
        },
        "building_K-KLB": {
          "displayName": "West",
          "destination": "building_K-KLB"
        },
        "building_K-KK": {
          "displayName": "SouthEast",
          "destination": "building_K-KK"
        },
        "building_K-KFG": {
          "displayName": "NorthWest",
          "destination": "building_K-KFG"
        },
        "building_K-KHA": {
          "displayName": "SouthWest",
          "destination": "building_K-KHA"
        },
        "building_K-KLW": {
          "displayName": "NorthEast",
          "destination": "building_K-KLW"
        },
        "down": {
          "displayName": "Down",
          "destination": "4_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "6_building_K"
        }
      }
    },
    "building_K-KNW": {
      "firstVisit": true,
      "displayName": "Indonesia",
      "description": "Description for \u201cIndonesia Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "6_building_K"
        }
      }
    },
    "building_K-KQC": {
      "firstVisit": true,
      "displayName": "Regional comparative and uniform law",
      "description": "Description for \u201cRegional comparative and uniform law Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "6_building_K"
        }
      }
    },
    "building_K-KDZ": {
      "firstVisit": true,
      "displayName": "America.  North America",
      "description": "Description for \u201cAmerica.  North America Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "6_building_K"
        }
      }
    },
    "building_K-KFK": {
      "firstVisit": true,
      "displayName": "Law of Kansas",
      "description": "Description for \u201cLaw of Kansas Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "6_building_K"
        }
      }
    },
    "building_K-KDC": {
      "firstVisit": true,
      "displayName": "Law of Scotland",
      "description": "Description for \u201cLaw of Scotland Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "6_building_K"
        }
      }
    },
    "building_K-KNR": {
      "firstVisit": true,
      "displayName": "Hong Kong",
      "description": "Description for \u201cHong Kong Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "6_building_K"
        }
      }
    },
    "building_K-KFF": {
      "firstVisit": true,
      "displayName": "Law of Florida",
      "description": "Description for \u201cLaw of Florida Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "6_building_K"
        }
      }
    },
    "building_K-KBM": {
      "firstVisit": true,
      "displayName": "Jewish law.  Halakah",
      "description": "Description for \u201cJewish law.  Halakah Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "6_building_K"
        }
      }
    },
    "6_building_K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 6th Floor",
      "description": "You are in the 6th floor. There are 8 rooms:\n\n[|South|||||] \u201cIndonesia Room\u201d\n[|North|||||] \u201cRegional comparative and uniform law Room\u201d\n[|East||||||] \u201cAmerica.  North America Room\u201d\n[|West||||||] \u201cLaw of Kansas Room\u201d\n[|SouthEast|] \u201cLaw of Scotland Room\u201d\n[|NorthWest|] \u201cHong Kong Room\u201d\n[|SouthWest|] \u201cLaw of Florida Room\u201d\n[|NorthEast|] \u201cJewish law.  Halakah Room\u201d\n[|Down||||||] 5th floor\n[|Up||||||||] 7th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KNW": {
          "displayName": "South",
          "destination": "building_K-KNW"
        },
        "building_K-KQC": {
          "displayName": "North",
          "destination": "building_K-KQC"
        },
        "building_K-KDZ": {
          "displayName": "East",
          "destination": "building_K-KDZ"
        },
        "building_K-KFK": {
          "displayName": "West",
          "destination": "building_K-KFK"
        },
        "building_K-KDC": {
          "displayName": "SouthEast",
          "destination": "building_K-KDC"
        },
        "building_K-KNR": {
          "displayName": "NorthWest",
          "destination": "building_K-KNR"
        },
        "building_K-KFF": {
          "displayName": "SouthWest",
          "destination": "building_K-KFF"
        },
        "building_K-KBM": {
          "displayName": "NorthEast",
          "destination": "building_K-KBM"
        },
        "down": {
          "displayName": "Down",
          "destination": "5_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "7_building_K"
        }
      }
    },
    "building_K-KJ": {
      "firstVisit": true,
      "displayName": "History of Law (Europe)",
      "description": "Description for \u201cHistory of Law (Europe) Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "7_building_K"
        }
      }
    },
    "building_K-KL": {
      "firstVisit": true,
      "displayName": "History of law.  The ancient orient",
      "description": "Description for \u201cHistory of law.  The ancient orient Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "7_building_K"
        }
      }
    },
    "building_K-KE": {
      "firstVisit": true,
      "displayName": "Law of Canada",
      "description": "Description for \u201cLaw of Canada Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "7_building_K"
        }
      }
    },
    "building_K-KFD": {
      "firstVisit": true,
      "displayName": "Law of Delaware",
      "description": "Description for \u201cLaw of Delaware Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "7_building_K"
        }
      }
    },
    "building_K-KDK": {
      "firstVisit": true,
      "displayName": "Law of Ireland (Eire)",
      "description": "Description for \u201cLaw of Ireland (Eire) Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "7_building_K"
        }
      }
    },
    "building_K-KTT": {
      "firstVisit": true,
      "displayName": "Tanzania",
      "description": "Description for \u201cTanzania Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "7_building_K"
        }
      }
    },
    "building_K-KNX": {
      "firstVisit": true,
      "displayName": "Constitutional law",
      "description": "Description for \u201cConstitutional law Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "7_building_K"
        }
      }
    },
    "building_K-KTY": {
      "firstVisit": true,
      "displayName": "Zambia",
      "description": "Description for \u201cZambia Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "7_building_K"
        }
      }
    },
    "7_building_K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 7th Floor",
      "description": "You are in the 7th floor. There are 8 rooms:\n\n[|South|||||] \u201cHistory of Law (Europe) Room\u201d\n[|North|||||] \u201cHistory of law.  The ancient orient Room\u201d\n[|East||||||] \u201cLaw of Canada Room\u201d\n[|West||||||] \u201cLaw of Delaware Room\u201d\n[|SouthEast|] \u201cLaw of Ireland (Eire) Room\u201d\n[|NorthWest|] \u201cTanzania Room\u201d\n[|SouthWest|] \u201cConstitutional law Room\u201d\n[|NorthEast|] \u201cZambia Room\u201d\n[|Down||||||] 6th floor\n[|Up||||||||] 8th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KJ": {
          "displayName": "South",
          "destination": "building_K-KJ"
        },
        "building_K-KL": {
          "displayName": "North",
          "destination": "building_K-KL"
        },
        "building_K-KE": {
          "displayName": "East",
          "destination": "building_K-KE"
        },
        "building_K-KFD": {
          "displayName": "West",
          "destination": "building_K-KFD"
        },
        "building_K-KDK": {
          "displayName": "SouthEast",
          "destination": "building_K-KDK"
        },
        "building_K-KTT": {
          "displayName": "NorthWest",
          "destination": "building_K-KTT"
        },
        "building_K-KNX": {
          "displayName": "SouthWest",
          "destination": "building_K-KNX"
        },
        "building_K-KTY": {
          "displayName": "NorthEast",
          "destination": "building_K-KTY"
        },
        "down": {
          "displayName": "Down",
          "destination": "6_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "8_building_K"
        }
      }
    },
    "building_K-KFS": {
      "firstVisit": true,
      "displayName": "Law of South Carolina",
      "description": "Description for \u201cLaw of South Carolina Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "8_building_K"
        }
      }
    },
    "building_K-KNC": {
      "firstVisit": true,
      "displayName": "Regional comparative and uniform law",
      "description": "Description for \u201cRegional comparative and uniform law Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "8_building_K"
        }
      }
    },
    "building_K-KFH": {
      "firstVisit": true,
      "displayName": "Law of Hawaii",
      "description": "Description for \u201cLaw of Hawaii Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "8_building_K"
        }
      }
    },
    "building_K-KFX": {
      "firstVisit": true,
      "displayName": "Laws of the cities",
      "description": "Description for \u201cLaws of the cities Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "8_building_K"
        }
      }
    },
    "building_K-KJT": {
      "firstVisit": true,
      "displayName": "Law of Finland",
      "description": "Description for \u201cLaw of Finland Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "8_building_K"
        }
      }
    },
    "building_K-KQW": {
      "firstVisit": true,
      "displayName": "Cameroon",
      "description": "Description for \u201cCameroon Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "8_building_K"
        }
      }
    },
    "building_K-KB": {
      "firstVisit": true,
      "displayName": "Religious law in general.  Comparative religious law.",
      "description": "Description for \u201cReligious law in general.  Comparative religious law. Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "8_building_K"
        }
      }
    },
    "building_K-KGL": {
      "firstVisit": true,
      "displayName": "British West Indies (General)",
      "description": "Description for \u201cBritish West Indies (General) Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "8_building_K"
        }
      }
    },
    "8_building_K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 8th Floor",
      "description": "You are in the 8th floor. There are 8 rooms:\n\n[|South|||||] \u201cLaw of South Carolina Room\u201d\n[|North|||||] \u201cRegional comparative and uniform law Room\u201d\n[|East||||||] \u201cLaw of Hawaii Room\u201d\n[|West||||||] \u201cLaws of the cities Room\u201d\n[|SouthEast|] \u201cLaw of Finland Room\u201d\n[|NorthWest|] \u201cCameroon Room\u201d\n[|SouthWest|] \u201cReligious law in general.  Comparative religious law. Room\u201d\n[|NorthEast|] \u201cBritish West Indies (General) Room\u201d\n[|Down||||||] 7th floor\n[|Up||||||||] 9th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KFS": {
          "displayName": "South",
          "destination": "building_K-KFS"
        },
        "building_K-KNC": {
          "displayName": "North",
          "destination": "building_K-KNC"
        },
        "building_K-KFH": {
          "displayName": "East",
          "destination": "building_K-KFH"
        },
        "building_K-KFX": {
          "displayName": "West",
          "destination": "building_K-KFX"
        },
        "building_K-KJT": {
          "displayName": "SouthEast",
          "destination": "building_K-KJT"
        },
        "building_K-KQW": {
          "displayName": "NorthWest",
          "destination": "building_K-KQW"
        },
        "building_K-KB": {
          "displayName": "SouthWest",
          "destination": "building_K-KB"
        },
        "building_K-KGL": {
          "displayName": "NorthEast",
          "destination": "building_K-KGL"
        },
        "down": {
          "displayName": "Down",
          "destination": "7_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "9_building_K"
        }
      }
    },
    "building_K-KGF": {
      "firstVisit": true,
      "displayName": "Mexico",
      "description": "Description for \u201cMexico Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "9_building_K"
        }
      }
    },
    "building_K-KPL": {
      "firstVisit": true,
      "displayName": "Pakistan",
      "description": "Description for \u201cPakistan Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "9_building_K"
        }
      }
    },
    "building_K-KNS": {
      "firstVisit": true,
      "displayName": "History of law",
      "description": "Description for \u201cHistory of law Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "9_building_K"
        }
      }
    },
    "building_K-KFR": {
      "firstVisit": true,
      "displayName": "Law of Rhode Island",
      "description": "Description for \u201cLaw of Rhode Island Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "9_building_K"
        }
      }
    },
    "building_K-KGV": {
      "firstVisit": true,
      "displayName": "Puerto Rico",
      "description": "Description for \u201cPuerto Rico Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "9_building_K"
        }
      }
    },
    "building_K-KKW": {
      "firstVisit": true,
      "displayName": "Law of Switzerland",
      "description": "Description for \u201cLaw of Switzerland Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "9_building_K"
        }
      }
    },
    "building_K-KKE": {
      "firstVisit": true,
      "displayName": "Law of Greece",
      "description": "Description for \u201cLaw of Greece Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "9_building_K"
        }
      }
    },
    "building_K-KKY": {
      "firstVisit": true,
      "displayName": "Law of Ukraine",
      "description": "Description for \u201cLaw of Ukraine Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "9_building_K"
        }
      }
    },
    "9_building_K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 9th Floor",
      "description": "You are in the 9th floor. There are 8 rooms:\n\n[|South|||||] \u201cMexico Room\u201d\n[|North|||||] \u201cPakistan Room\u201d\n[|East||||||] \u201cHistory of law Room\u201d\n[|West||||||] \u201cLaw of Rhode Island Room\u201d\n[|SouthEast|] \u201cPuerto Rico Room\u201d\n[|NorthWest|] \u201cLaw of Switzerland Room\u201d\n[|SouthWest|] \u201cLaw of Greece Room\u201d\n[|NorthEast|] \u201cLaw of Ukraine Room\u201d\n[|Down||||||] 8th floor\n[|Up||||||||] 10th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KGF": {
          "displayName": "South",
          "destination": "building_K-KGF"
        },
        "building_K-KPL": {
          "displayName": "North",
          "destination": "building_K-KPL"
        },
        "building_K-KNS": {
          "displayName": "East",
          "destination": "building_K-KNS"
        },
        "building_K-KFR": {
          "displayName": "West",
          "destination": "building_K-KFR"
        },
        "building_K-KGV": {
          "displayName": "SouthEast",
          "destination": "building_K-KGV"
        },
        "building_K-KKW": {
          "displayName": "NorthWest",
          "destination": "building_K-KKW"
        },
        "building_K-KKE": {
          "displayName": "SouthWest",
          "destination": "building_K-KKE"
        },
        "building_K-KKY": {
          "displayName": "NorthEast",
          "destination": "building_K-KKY"
        },
        "down": {
          "displayName": "Down",
          "destination": "8_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "10_building_K"
        }
      }
    },
    "building_K-KKP": {
      "firstVisit": true,
      "displayName": "Law of Poland",
      "description": "Description for \u201cLaw of Poland Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "10_building_K"
        }
      }
    },
    "building_K-KKM": {
      "firstVisit": true,
      "displayName": "Law of Netherlands",
      "description": "Description for \u201cLaw of Netherlands Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "10_building_K"
        }
      }
    },
    "building_K-KKK": {
      "firstVisit": true,
      "displayName": "Law of Malta",
      "description": "Description for \u201cLaw of Malta Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "10_building_K"
        }
      }
    },
    "building_K-KJK": {
      "firstVisit": true,
      "displayName": "Law of Bosnia and Hercegovina",
      "description": "Description for \u201cLaw of Bosnia and Hercegovina Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "10_building_K"
        }
      }
    },
    "building_K-KKH": {
      "firstVisit": true,
      "displayName": "Law of Kosovo",
      "description": "Description for \u201cLaw of Kosovo Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "10_building_K"
        }
      }
    },
    "building_K-KKJ": {
      "firstVisit": true,
      "displayName": "Law of Lithuania",
      "description": "Description for \u201cLaw of Lithuania Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "10_building_K"
        }
      }
    },
    "building_K-KGD": {
      "firstVisit": true,
      "displayName": "Guatemala",
      "description": "Description for \u201cGuatemala Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "10_building_K"
        }
      }
    },
    "building_K-KHQ": {
      "firstVisit": true,
      "displayName": "Peru",
      "description": "Description for \u201cPeru Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "10_building_K"
        }
      }
    },
    "10_building_K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 10th Floor",
      "description": "You are in the 10th floor. There are 8 rooms:\n\n[|South|||||] \u201cLaw of Poland Room\u201d\n[|North|||||] \u201cLaw of Netherlands Room\u201d\n[|East||||||] \u201cLaw of Malta Room\u201d\n[|West||||||] \u201cLaw of Bosnia and Hercegovina Room\u201d\n[|SouthEast|] \u201cLaw of Kosovo Room\u201d\n[|NorthWest|] \u201cLaw of Lithuania Room\u201d\n[|SouthWest|] \u201cGuatemala Room\u201d\n[|NorthEast|] \u201cPeru Room\u201d\n[|Down||||||] 9th floor\n[|Up||||||||] 11th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KKP": {
          "displayName": "South",
          "destination": "building_K-KKP"
        },
        "building_K-KKM": {
          "displayName": "North",
          "destination": "building_K-KKM"
        },
        "building_K-KKK": {
          "displayName": "East",
          "destination": "building_K-KKK"
        },
        "building_K-KJK": {
          "displayName": "West",
          "destination": "building_K-KJK"
        },
        "building_K-KKH": {
          "displayName": "SouthEast",
          "destination": "building_K-KKH"
        },
        "building_K-KKJ": {
          "displayName": "NorthWest",
          "destination": "building_K-KKJ"
        },
        "building_K-KGD": {
          "displayName": "SouthWest",
          "destination": "building_K-KGD"
        },
        "building_K-KHQ": {
          "displayName": "NorthEast",
          "destination": "building_K-KHQ"
        },
        "down": {
          "displayName": "Down",
          "destination": "9_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "11_building_K"
        }
      }
    },
    "building_K-KST": {
      "firstVisit": true,
      "displayName": "Mali",
      "description": "Description for \u201cMali Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "11_building_K"
        }
      }
    },
    "building_K-KTA": {
      "firstVisit": true,
      "displayName": "Nigeria",
      "description": "Description for \u201cNigeria Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "11_building_K"
        }
      }
    },
    "building_K-KGS": {
      "firstVisit": true,
      "displayName": "Haiti",
      "description": "Description for \u201cHaiti Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "11_building_K"
        }
      }
    },
    "building_K-KHH": {
      "firstVisit": true,
      "displayName": "Colombia",
      "description": "Description for \u201cColombia Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "11_building_K"
        }
      }
    },
    "building_K-KG": {
      "firstVisit": true,
      "displayName": "Latin America (General)",
      "description": "Description for \u201cLatin America (General) Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "11_building_K"
        }
      }
    },
    "building_K-KHK": {
      "firstVisit": true,
      "displayName": "Ecuador",
      "description": "Description for \u201cEcuador Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "11_building_K"
        }
      }
    },
    "building_K-KHC": {
      "firstVisit": true,
      "displayName": "Bolivia",
      "description": "Description for \u201cBolivia Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "11_building_K"
        }
      }
    },
    "building_K-KNP": {
      "firstVisit": true,
      "displayName": "China (Republic, 1949-    ).  Taiwan",
      "description": "Description for \u201cChina (Republic, 1949-    ).  Taiwan Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "11_building_K"
        }
      }
    },
    "11_building_K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 11th Floor",
      "description": "You are in the 11th floor. There are 8 rooms:\n\n[|South|||||] \u201cMali Room\u201d\n[|North|||||] \u201cNigeria Room\u201d\n[|East||||||] \u201cHaiti Room\u201d\n[|West||||||] \u201cColombia Room\u201d\n[|SouthEast|] \u201cLatin America (General) Room\u201d\n[|NorthWest|] \u201cEcuador Room\u201d\n[|SouthWest|] \u201cBolivia Room\u201d\n[|NorthEast|] \u201cChina (Republic, 1949-    ).  Taiwan Room\u201d\n[|Down||||||] 10th floor\n[|Up||||||||] 12th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KST": {
          "displayName": "South",
          "destination": "building_K-KST"
        },
        "building_K-KTA": {
          "displayName": "North",
          "destination": "building_K-KTA"
        },
        "building_K-KGS": {
          "displayName": "East",
          "destination": "building_K-KGS"
        },
        "building_K-KHH": {
          "displayName": "West",
          "destination": "building_K-KHH"
        },
        "building_K-KG": {
          "displayName": "SouthEast",
          "destination": "building_K-KG"
        },
        "building_K-KHK": {
          "displayName": "NorthWest",
          "destination": "building_K-KHK"
        },
        "building_K-KHC": {
          "displayName": "SouthWest",
          "destination": "building_K-KHC"
        },
        "building_K-KNP": {
          "displayName": "NorthEast",
          "destination": "building_K-KNP"
        },
        "down": {
          "displayName": "Down",
          "destination": "10_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "12_building_K"
        }
      }
    },
    "building_K-KLR": {
      "firstVisit": true,
      "displayName": "Khorezmskai\uf04da Sovetskai\uf04da Sot\uf04dsialisticheskai\uf04da",
      "description": "Description for \u201cKhorezmskai\uf04da Sovetskai\uf04da Sot\uf04dsialisticheskai\uf04da Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "12_building_K"
        }
      }
    },
    "building_K-KTZ": {
      "firstVisit": true,
      "displayName": "Zimbabwe",
      "description": "Description for \u201cZimbabwe Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "12_building_K"
        }
      }
    },
    "building_K-KBS": {
      "firstVisit": true,
      "displayName": "Canon law of Eastern Churches",
      "description": "Description for \u201cCanon law of Eastern Churches Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "12_building_K"
        }
      }
    },
    "building_K-KPA": {
      "firstVisit": true,
      "displayName": "Korea.  South Korea",
      "description": "Description for \u201cKorea.  South Korea Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "12_building_K"
        }
      }
    },
    "building_K-KUQ": {
      "firstVisit": true,
      "displayName": "New Zealand",
      "description": "Description for \u201cNew Zealand Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "12_building_K"
        }
      }
    },
    "building_K-KVN": {
      "firstVisit": true,
      "displayName": "Fiji",
      "description": "Description for \u201cFiji Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "12_building_K"
        }
      }
    },
    "building_K-KVW": {
      "firstVisit": true,
      "displayName": "New Caledonia",
      "description": "Description for \u201cNew Caledonia Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "12_building_K"
        }
      }
    },
    "building_K-KFU": {
      "firstVisit": true,
      "displayName": "Law of Utah",
      "description": "Description for \u201cLaw of Utah Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "12_building_K"
        }
      }
    },
    "12_building_K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 12th Floor",
      "description": "You are in the 12th floor. There are 8 rooms:\n\n[|South|||||] \u201cKhorezmskai\uf04da Sovetskai\uf04da Sot\uf04dsialisticheskai\uf04da Room\u201d\n[|North|||||] \u201cZimbabwe Room\u201d\n[|East||||||] \u201cCanon law of Eastern Churches Room\u201d\n[|West||||||] \u201cKorea.  South Korea Room\u201d\n[|SouthEast|] \u201cNew Zealand Room\u201d\n[|NorthWest|] \u201cFiji Room\u201d\n[|SouthWest|] \u201cNew Caledonia Room\u201d\n[|NorthEast|] \u201cLaw of Utah Room\u201d\n[|Down||||||] 11th floor\n[|Up||||||||] 13th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KLR": {
          "displayName": "South",
          "destination": "building_K-KLR"
        },
        "building_K-KTZ": {
          "displayName": "North",
          "destination": "building_K-KTZ"
        },
        "building_K-KBS": {
          "displayName": "East",
          "destination": "building_K-KBS"
        },
        "building_K-KPA": {
          "displayName": "West",
          "destination": "building_K-KPA"
        },
        "building_K-KUQ": {
          "displayName": "SouthEast",
          "destination": "building_K-KUQ"
        },
        "building_K-KVN": {
          "displayName": "NorthWest",
          "destination": "building_K-KVN"
        },
        "building_K-KVW": {
          "displayName": "SouthWest",
          "destination": "building_K-KVW"
        },
        "building_K-KFU": {
          "displayName": "NorthEast",
          "destination": "building_K-KFU"
        },
        "down": {
          "displayName": "Down",
          "destination": "11_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "13_building_K"
        }
      }
    },
    "building_K-KJR": {
      "firstVisit": true,
      "displayName": "Law of Denmark",
      "description": "Description for \u201cLaw of Denmark Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "13_building_K"
        }
      }
    },
    "building_K-KKQ": {
      "firstVisit": true,
      "displayName": "Law of Portugal",
      "description": "Description for \u201cLaw of Portugal Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "13_building_K"
        }
      }
    },
    "building_K-KJS": {
      "firstVisit": true,
      "displayName": "Law of Estonia",
      "description": "Description for \u201cLaw of Estonia Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "13_building_K"
        }
      }
    },
    "building_K-KKZ": {
      "firstVisit": true,
      "displayName": "Law of Yugoslavia",
      "description": "Description for \u201cLaw of Yugoslavia Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "13_building_K"
        }
      }
    },
    "building_K-KJP": {
      "firstVisit": true,
      "displayName": "Law of Czech Republic (1993-        )",
      "description": "Description for \u201cLaw of Czech Republic (1993-        ) Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "13_building_K"
        }
      }
    },
    "building_K-KGB": {
      "firstVisit": true,
      "displayName": "Costa Rica",
      "description": "Description for \u201cCosta Rica Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "13_building_K"
        }
      }
    },
    "building_K-KHW": {
      "firstVisit": true,
      "displayName": "Venezuela",
      "description": "Description for \u201cVenezuela Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "13_building_K"
        }
      }
    },
    "building_K-KGE": {
      "firstVisit": true,
      "displayName": "Honduras",
      "description": "Description for \u201cHonduras Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "13_building_K"
        }
      }
    },
    "13_building_K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 13th Floor",
      "description": "You are in the 13th floor. There are 8 rooms:\n\n[|South|||||] \u201cLaw of Denmark Room\u201d\n[|North|||||] \u201cLaw of Portugal Room\u201d\n[|East||||||] \u201cLaw of Estonia Room\u201d\n[|West||||||] \u201cLaw of Yugoslavia Room\u201d\n[|SouthEast|] \u201cLaw of Czech Republic (1993-        ) Room\u201d\n[|NorthWest|] \u201cCosta Rica Room\u201d\n[|SouthWest|] \u201cVenezuela Room\u201d\n[|NorthEast|] \u201cHonduras Room\u201d\n[|Down||||||] 12th floor\n[|Up||||||||] 14th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KJR": {
          "displayName": "South",
          "destination": "building_K-KJR"
        },
        "building_K-KKQ": {
          "displayName": "North",
          "destination": "building_K-KKQ"
        },
        "building_K-KJS": {
          "displayName": "East",
          "destination": "building_K-KJS"
        },
        "building_K-KKZ": {
          "displayName": "West",
          "destination": "building_K-KKZ"
        },
        "building_K-KJP": {
          "displayName": "SouthEast",
          "destination": "building_K-KJP"
        },
        "building_K-KGB": {
          "displayName": "NorthWest",
          "destination": "building_K-KGB"
        },
        "building_K-KHW": {
          "displayName": "SouthWest",
          "destination": "building_K-KHW"
        },
        "building_K-KGE": {
          "displayName": "NorthEast",
          "destination": "building_K-KGE"
        },
        "down": {
          "displayName": "Down",
          "destination": "12_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "14_building_K"
        }
      }
    },
    "building_K-KGG": {
      "firstVisit": true,
      "displayName": "Nicaragua",
      "description": "Description for \u201cNicaragua Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "14_building_K"
        }
      }
    },
    "building_K-KHF": {
      "firstVisit": true,
      "displayName": "Chile",
      "description": "Description for \u201cChile Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "14_building_K"
        }
      }
    },
    "building_K-KHP": {
      "firstVisit": true,
      "displayName": "Paraguay",
      "description": "Description for \u201cParaguay Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "14_building_K"
        }
      }
    },
    "building_K-KKA": {
      "firstVisit": true,
      "displayName": "Law of East Germany",
      "description": "Description for \u201cLaw of East Germany Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "14_building_K"
        }
      }
    },
    "building_K-KKV": {
      "firstVisit": true,
      "displayName": "Law of Sweden",
      "description": "Description for \u201cLaw of Sweden Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "14_building_K"
        }
      }
    },
    "building_K-KSW": {
      "firstVisit": true,
      "displayName": "Morocco",
      "description": "Description for \u201cMorocco Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "14_building_K"
        }
      }
    },
    "building_K-KM": {
      "firstVisit": true,
      "displayName": "General",
      "description": "Description for \u201cGeneral Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "14_building_K"
        }
      }
    },
    "building_K-KLF": {
      "firstVisit": true,
      "displayName": "Belarus (Republic)",
      "description": "Description for \u201cBelarus (Republic) Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "14_building_K"
        }
      }
    },
    "14_building_K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 14th Floor",
      "description": "You are in the 14th floor. There are 8 rooms:\n\n[|South|||||] \u201cNicaragua Room\u201d\n[|North|||||] \u201cChile Room\u201d\n[|East||||||] \u201cParaguay Room\u201d\n[|West||||||] \u201cLaw of East Germany Room\u201d\n[|SouthEast|] \u201cLaw of Sweden Room\u201d\n[|NorthWest|] \u201cMorocco Room\u201d\n[|SouthWest|] \u201cGeneral Room\u201d\n[|NorthEast|] \u201cBelarus (Republic) Room\u201d\n[|Down||||||] 13th floor\n[|Up||||||||] 15th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KGG": {
          "displayName": "South",
          "destination": "building_K-KGG"
        },
        "building_K-KHF": {
          "displayName": "North",
          "destination": "building_K-KHF"
        },
        "building_K-KHP": {
          "displayName": "East",
          "destination": "building_K-KHP"
        },
        "building_K-KKA": {
          "displayName": "West",
          "destination": "building_K-KKA"
        },
        "building_K-KKV": {
          "displayName": "SouthEast",
          "destination": "building_K-KKV"
        },
        "building_K-KSW": {
          "displayName": "NorthWest",
          "destination": "building_K-KSW"
        },
        "building_K-KM": {
          "displayName": "SouthWest",
          "destination": "building_K-KM"
        },
        "building_K-KLF": {
          "displayName": "NorthEast",
          "destination": "building_K-KLF"
        },
        "down": {
          "displayName": "Down",
          "destination": "13_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "15_building_K"
        }
      }
    },
    "building_K-KH": {
      "firstVisit": true,
      "displayName": "General",
      "description": "Description for \u201cGeneral Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "15_building_K"
        }
      }
    },
    "building_K-KPT": {
      "firstVisit": true,
      "displayName": "Thailand",
      "description": "Description for \u201cThailand Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "15_building_K"
        }
      }
    },
    "building_K-KPM": {
      "firstVisit": true,
      "displayName": "Philippines",
      "description": "Description for \u201cPhilippines Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "15_building_K"
        }
      }
    },
    "building_K-KPV": {
      "firstVisit": true,
      "displayName": "Vietnam",
      "description": "Description for \u201cVietnam Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "15_building_K"
        }
      }
    },
    "building_K-KPP": {
      "firstVisit": true,
      "displayName": "Singapore",
      "description": "Description for \u201cSingapore Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "15_building_K"
        }
      }
    },
    "building_K-KMH": {
      "firstVisit": true,
      "displayName": "Iran",
      "description": "Description for \u201cIran Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "15_building_K"
        }
      }
    },
    "building_K-KSV": {
      "firstVisit": true,
      "displayName": "Mayotte",
      "description": "Description for \u201cMayotte Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "15_building_K"
        }
      }
    },
    "building_K-KSY": {
      "firstVisit": true,
      "displayName": "Namibia",
      "description": "Description for \u201cNamibia Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "15_building_K"
        }
      }
    },
    "15_building_K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 15th Floor",
      "description": "You are in the 15th floor. There are 8 rooms:\n\n[|South|||||] \u201cGeneral Room\u201d\n[|North|||||] \u201cThailand Room\u201d\n[|East||||||] \u201cPhilippines Room\u201d\n[|West||||||] \u201cVietnam Room\u201d\n[|SouthEast|] \u201cSingapore Room\u201d\n[|NorthWest|] \u201cIran Room\u201d\n[|SouthWest|] \u201cMayotte Room\u201d\n[|NorthEast|] \u201cNamibia Room\u201d\n[|Down||||||] 14th floor\n[|Up||||||||] 16th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KH": {
          "displayName": "South",
          "destination": "building_K-KH"
        },
        "building_K-KPT": {
          "displayName": "North",
          "destination": "building_K-KPT"
        },
        "building_K-KPM": {
          "displayName": "East",
          "destination": "building_K-KPM"
        },
        "building_K-KPV": {
          "displayName": "West",
          "destination": "building_K-KPV"
        },
        "building_K-KPP": {
          "displayName": "SouthEast",
          "destination": "building_K-KPP"
        },
        "building_K-KMH": {
          "displayName": "NorthWest",
          "destination": "building_K-KMH"
        },
        "building_K-KSV": {
          "displayName": "SouthWest",
          "destination": "building_K-KSV"
        },
        "building_K-KSY": {
          "displayName": "NorthEast",
          "destination": "building_K-KSY"
        },
        "down": {
          "displayName": "Down",
          "destination": "14_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "16_building_K"
        }
      }
    },
    "building_K-KQK": {
      "firstVisit": true,
      "displayName": "Botswana",
      "description": "Description for \u201cBotswana Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "16_building_K"
        }
      }
    },
    "building_K-KQH": {
      "firstVisit": true,
      "displayName": "Angola",
      "description": "Description for \u201cAngola Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "16_building_K"
        }
      }
    },
    "building_K-KSX": {
      "firstVisit": true,
      "displayName": "Mozambique",
      "description": "Description for \u201cMozambique Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "16_building_K"
        }
      }
    },
    "building_K-KSK": {
      "firstVisit": true,
      "displayName": "Kenya",
      "description": "Description for \u201cKenya Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "16_building_K"
        }
      }
    },
    "building_K-KRU": {
      "firstVisit": true,
      "displayName": "Gabon",
      "description": "Description for \u201cGabon Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "16_building_K"
        }
      }
    },
    "building_K-KSL": {
      "firstVisit": true,
      "displayName": "Lesotho",
      "description": "Description for \u201cLesotho Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "16_building_K"
        }
      }
    },
    "building_K-KRX": {
      "firstVisit": true,
      "displayName": "Ghana",
      "description": "Description for \u201cGhana Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "16_building_K"
        }
      }
    },
    "building_K-KSS": {
      "firstVisit": true,
      "displayName": "Malawi",
      "description": "Description for \u201cMalawi Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "16_building_K"
        }
      }
    },
    "16_building_K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 16th Floor",
      "description": "You are in the 16th floor. There are 8 rooms:\n\n[|South|||||] \u201cBotswana Room\u201d\n[|North|||||] \u201cAngola Room\u201d\n[|East||||||] \u201cMozambique Room\u201d\n[|West||||||] \u201cKenya Room\u201d\n[|SouthEast|] \u201cGabon Room\u201d\n[|NorthWest|] \u201cLesotho Room\u201d\n[|SouthWest|] \u201cGhana Room\u201d\n[|NorthEast|] \u201cMalawi Room\u201d\n[|Down||||||] 15th floor\n[|Up||||||||] 17th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KQK": {
          "displayName": "South",
          "destination": "building_K-KQK"
        },
        "building_K-KQH": {
          "displayName": "North",
          "destination": "building_K-KQH"
        },
        "building_K-KSX": {
          "displayName": "East",
          "destination": "building_K-KSX"
        },
        "building_K-KSK": {
          "displayName": "West",
          "destination": "building_K-KSK"
        },
        "building_K-KRU": {
          "displayName": "SouthEast",
          "destination": "building_K-KRU"
        },
        "building_K-KSL": {
          "displayName": "NorthWest",
          "destination": "building_K-KSL"
        },
        "building_K-KRX": {
          "displayName": "SouthWest",
          "destination": "building_K-KRX"
        },
        "building_K-KSS": {
          "displayName": "NorthEast",
          "destination": "building_K-KSS"
        },
        "down": {
          "displayName": "Down",
          "destination": "15_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "17_building_K"
        }
      }
    },
    "building_K-KTW": {
      "firstVisit": true,
      "displayName": "Uganda",
      "description": "Description for \u201cUganda Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "17_building_K"
        }
      }
    },
    "building_K-KTD": {
      "firstVisit": true,
      "displayName": "Rwanda",
      "description": "Description for \u201cRwanda Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "17_building_K"
        }
      }
    },
    "building_K-KTX": {
      "firstVisit": true,
      "displayName": "Congo (Democratic Republic)",
      "description": "Description for \u201cCongo (Democratic Republic) Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "17_building_K"
        }
      }
    },
    "building_K-KRS": {
      "firstVisit": true,
      "displayName": "French West Africa",
      "description": "Description for \u201cFrench West Africa Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "17_building_K"
        }
      }
    },
    "building_K-KTG": {
      "firstVisit": true,
      "displayName": "Senegal",
      "description": "Description for \u201cSenegal Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "17_building_K"
        }
      }
    },
    "building_K-KKX": {
      "firstVisit": true,
      "displayName": "Law of Turkey",
      "description": "Description for \u201cLaw of Turkey Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "17_building_K"
        }
      }
    },
    "building_K-KLE": {
      "firstVisit": true,
      "displayName": "Azerbaijan",
      "description": "Description for \u201cAzerbaijan Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "17_building_K"
        }
      }
    },
    "building_K-KRM": {
      "firstVisit": true,
      "displayName": "Egypt",
      "description": "Description for \u201cEgypt Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "17_building_K"
        }
      }
    },
    "17_building_K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 17th Floor",
      "description": "You are in the 17th floor. There are 8 rooms:\n\n[|South|||||] \u201cUganda Room\u201d\n[|North|||||] \u201cRwanda Room\u201d\n[|East||||||] \u201cCongo (Democratic Republic) Room\u201d\n[|West||||||] \u201cFrench West Africa Room\u201d\n[|SouthEast|] \u201cSenegal Room\u201d\n[|NorthWest|] \u201cLaw of Turkey Room\u201d\n[|SouthWest|] \u201cAzerbaijan Room\u201d\n[|NorthEast|] \u201cEgypt Room\u201d\n[|Down||||||] 16th floor\n[|Up||||||||] 18th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KTW": {
          "displayName": "South",
          "destination": "building_K-KTW"
        },
        "building_K-KTD": {
          "displayName": "North",
          "destination": "building_K-KTD"
        },
        "building_K-KTX": {
          "displayName": "East",
          "destination": "building_K-KTX"
        },
        "building_K-KRS": {
          "displayName": "West",
          "destination": "building_K-KRS"
        },
        "building_K-KTG": {
          "displayName": "SouthEast",
          "destination": "building_K-KTG"
        },
        "building_K-KKX": {
          "displayName": "NorthWest",
          "destination": "building_K-KKX"
        },
        "building_K-KLE": {
          "displayName": "SouthWest",
          "destination": "building_K-KLE"
        },
        "building_K-KRM": {
          "displayName": "NorthEast",
          "destination": "building_K-KRM"
        },
        "down": {
          "displayName": "Down",
          "destination": "16_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "18_building_K"
        }
      }
    },
    "building_K-KMN": {
      "firstVisit": true,
      "displayName": "Kuwait",
      "description": "Description for \u201cKuwait Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "18_building_K"
        }
      }
    },
    "building_K-KMX": {
      "firstVisit": true,
      "displayName": "Yemen",
      "description": "Description for \u201cYemen Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "18_building_K"
        }
      }
    },
    "building_K-KTQ": {
      "firstVisit": true,
      "displayName": "Sudan",
      "description": "Description for \u201cSudan Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "18_building_K"
        }
      }
    },
    "building_K-KQG": {
      "firstVisit": true,
      "displayName": "Algeria",
      "description": "Description for \u201cAlgeria Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "18_building_K"
        }
      }
    },
    "building_K-KMV": {
      "firstVisit": true,
      "displayName": "United Arab Emirates",
      "description": "Description for \u201cUnited Arab Emirates Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "18_building_K"
        }
      }
    },
    "building_K-KHD": {
      "firstVisit": true,
      "displayName": "Brazil",
      "description": "Description for \u201cBrazil Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "18_building_K"
        }
      }
    },
    "building_K-KHN": {
      "firstVisit": true,
      "displayName": "Guyana",
      "description": "Description for \u201cGuyana Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "18_building_K"
        }
      }
    },
    "building_K-KHU": {
      "firstVisit": true,
      "displayName": "Uruguay",
      "description": "Description for \u201cUruguay Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "18_building_K"
        }
      }
    },
    "18_building_K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 18th Floor",
      "description": "You are in the 18th floor. There are 8 rooms:\n\n[|South|||||] \u201cKuwait Room\u201d\n[|North|||||] \u201cYemen Room\u201d\n[|East||||||] \u201cSudan Room\u201d\n[|West||||||] \u201cAlgeria Room\u201d\n[|SouthEast|] \u201cUnited Arab Emirates Room\u201d\n[|NorthWest|] \u201cBrazil Room\u201d\n[|SouthWest|] \u201cGuyana Room\u201d\n[|NorthEast|] \u201cUruguay Room\u201d\n[|Down||||||] 17th floor\n[|Up||||||||] 19th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KMN": {
          "displayName": "South",
          "destination": "building_K-KMN"
        },
        "building_K-KMX": {
          "displayName": "North",
          "destination": "building_K-KMX"
        },
        "building_K-KTQ": {
          "displayName": "East",
          "destination": "building_K-KTQ"
        },
        "building_K-KQG": {
          "displayName": "West",
          "destination": "building_K-KQG"
        },
        "building_K-KMV": {
          "displayName": "SouthEast",
          "destination": "building_K-KMV"
        },
        "building_K-KHD": {
          "displayName": "NorthWest",
          "destination": "building_K-KHD"
        },
        "building_K-KHN": {
          "displayName": "SouthWest",
          "destination": "building_K-KHN"
        },
        "building_K-KHU": {
          "displayName": "NorthEast",
          "destination": "building_K-KHU"
        },
        "down": {
          "displayName": "Down",
          "destination": "17_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "19_building_K"
        }
      }
    },
    "building_K-KLS": {
      "firstVisit": true,
      "displayName": "Kyrgyzstan",
      "description": "Description for \u201cKyrgyzstan Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "19_building_K"
        }
      }
    },
    "building_K-KSA": {
      "firstVisit": true,
      "displayName": "Guinea",
      "description": "Description for \u201cGuinea Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "19_building_K"
        }
      }
    },
    "building_K-KPF": {
      "firstVisit": true,
      "displayName": "Macao",
      "description": "Description for \u201cMacao Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "19_building_K"
        }
      }
    },
    "building_K-KLD": {
      "firstVisit": true,
      "displayName": "Armenian SSR (to 1991)",
      "description": "Description for \u201cArmenian SSR (to 1991) Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "19_building_K"
        }
      }
    },
    "building_K-KTV": {
      "firstVisit": true,
      "displayName": "Tunisia",
      "description": "Description for \u201cTunisia Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "19_building_K"
        }
      }
    },
    "building_K-KMP": {
      "firstVisit": true,
      "displayName": "Lebanon",
      "description": "Description for \u201cLebanon Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "19_building_K"
        }
      }
    },
    "building_K-KMF": {
      "firstVisit": true,
      "displayName": "Bahrain",
      "description": "Description for \u201cBahrain Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "19_building_K"
        }
      }
    },
    "building_K-KKS": {
      "firstVisit": true,
      "displayName": "Law of Slovenia",
      "description": "Description for \u201cLaw of Slovenia Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "19_building_K"
        }
      }
    },
    "19_building_K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 19th Floor",
      "description": "You are in the 19th floor. There are 8 rooms:\n\n[|South|||||] \u201cKyrgyzstan Room\u201d\n[|North|||||] \u201cGuinea Room\u201d\n[|East||||||] \u201cMacao Room\u201d\n[|West||||||] \u201cArmenian SSR (to 1991) Room\u201d\n[|SouthEast|] \u201cTunisia Room\u201d\n[|NorthWest|] \u201cLebanon Room\u201d\n[|SouthWest|] \u201cBahrain Room\u201d\n[|NorthEast|] \u201cLaw of Slovenia Room\u201d\n[|Down||||||] 18th floor\n[|Up||||||||] 20th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KLS": {
          "displayName": "South",
          "destination": "building_K-KLS"
        },
        "building_K-KSA": {
          "displayName": "North",
          "destination": "building_K-KSA"
        },
        "building_K-KPF": {
          "displayName": "East",
          "destination": "building_K-KPF"
        },
        "building_K-KLD": {
          "displayName": "West",
          "destination": "building_K-KLD"
        },
        "building_K-KTV": {
          "displayName": "SouthEast",
          "destination": "building_K-KTV"
        },
        "building_K-KMP": {
          "displayName": "NorthWest",
          "destination": "building_K-KMP"
        },
        "building_K-KMF": {
          "displayName": "SouthWest",
          "destination": "building_K-KMF"
        },
        "building_K-KKS": {
          "displayName": "NorthEast",
          "destination": "building_K-KKS"
        },
        "down": {
          "displayName": "Down",
          "destination": "18_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "20_building_K"
        }
      }
    },
    "building_K-KJW": {
      "firstVisit": true,
      "displayName": "French regions, provinces, cities, etc.",
      "description": "Description for \u201cFrench regions, provinces, cities, etc. Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "20_building_K"
        }
      }
    },
    "building_K-KJJ": {
      "firstVisit": true,
      "displayName": "Law of Austria",
      "description": "Description for \u201cLaw of Austria Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "20_building_K"
        }
      }
    },
    "building_K-KZD": {
      "firstVisit": true,
      "displayName": "Space law.  Law of outer space",
      "description": "Description for \u201cSpace law.  Law of outer space Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "20_building_K"
        }
      }
    },
    "building_K-KWW": {
      "firstVisit": true,
      "displayName": "Western Samoa",
      "description": "Description for \u201cWestern Samoa Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "20_building_K"
        }
      }
    },
    "building_K-KVP": {
      "firstVisit": true,
      "displayName": "French Polynesia",
      "description": "Description for \u201cFrench Polynesia Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "20_building_K"
        }
      }
    },
    "building_K-KEO": {
      "firstVisit": true,
      "displayName": "Law of Ontario",
      "description": "Description for \u201cLaw of Ontario Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "20_building_K"
        }
      }
    },
    "building_K-KEA": {
      "firstVisit": true,
      "displayName": "Law of Alberta",
      "description": "Description for \u201cLaw of Alberta Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "20_building_K"
        }
      }
    },
    "building_K-KEB": {
      "firstVisit": true,
      "displayName": "Law of British Columbia",
      "description": "Description for \u201cLaw of British Columbia Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "20_building_K"
        }
      }
    },
    "20_building_K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 20th Floor",
      "description": "You are in the 20th floor. There are 8 rooms:\n\n[|South|||||] \u201cFrench regions, provinces, cities, etc. Room\u201d\n[|North|||||] \u201cLaw of Austria Room\u201d\n[|East||||||] \u201cSpace law.  Law of outer space Room\u201d\n[|West||||||] \u201cWestern Samoa Room\u201d\n[|SouthEast|] \u201cFrench Polynesia Room\u201d\n[|NorthWest|] \u201cLaw of Ontario Room\u201d\n[|SouthWest|] \u201cLaw of Alberta Room\u201d\n[|NorthEast|] \u201cLaw of British Columbia Room\u201d\n[|Down||||||] 19th floor\n[|Up||||||||] 21st floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KJW": {
          "displayName": "South",
          "destination": "building_K-KJW"
        },
        "building_K-KJJ": {
          "displayName": "North",
          "destination": "building_K-KJJ"
        },
        "building_K-KZD": {
          "displayName": "East",
          "destination": "building_K-KZD"
        },
        "building_K-KWW": {
          "displayName": "West",
          "destination": "building_K-KWW"
        },
        "building_K-KVP": {
          "displayName": "SouthEast",
          "destination": "building_K-KVP"
        },
        "building_K-KEO": {
          "displayName": "NorthWest",
          "destination": "building_K-KEO"
        },
        "building_K-KEA": {
          "displayName": "SouthWest",
          "destination": "building_K-KEA"
        },
        "building_K-KEB": {
          "displayName": "NorthEast",
          "destination": "building_K-KEB"
        },
        "down": {
          "displayName": "Down",
          "destination": "19_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "21_building_K"
        }
      }
    },
    "building_K-KEQ": {
      "firstVisit": true,
      "displayName": "Law of Qu\u00e9bec",
      "description": "Description for \u201cLaw of Qu\u00e9bec Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "21_building_K"
        }
      }
    },
    "building_K-KWH": {
      "firstVisit": true,
      "displayName": "Papua New Guinea",
      "description": "Description for \u201cPapua New Guinea Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "21_building_K"
        }
      }
    },
    "building_K-KVS": {
      "firstVisit": true,
      "displayName": "Midway Islands",
      "description": "Description for \u201cMidway Islands Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "21_building_K"
        }
      }
    },
    "building_K-KWG": {
      "firstVisit": true,
      "displayName": "Palau",
      "description": "Description for \u201cPalau Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "21_building_K"
        }
      }
    },
    "building_K-KVQ": {
      "firstVisit": true,
      "displayName": "Guam",
      "description": "Description for \u201cGuam Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "21_building_K"
        }
      }
    },
    "building_K-KJN": {
      "firstVisit": true,
      "displayName": "Law of Cyprus",
      "description": "Description for \u201cLaw of Cyprus Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "21_building_K"
        }
      }
    },
    "building_K-KKF": {
      "firstVisit": true,
      "displayName": "Law of Hungary",
      "description": "Description for \u201cLaw of Hungary Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "21_building_K"
        }
      }
    },
    "building_K-KHM": {
      "firstVisit": true,
      "displayName": "French Guiana",
      "description": "Description for \u201cFrench Guiana Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "21_building_K"
        }
      }
    },
    "21_building_K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 21st Floor",
      "description": "You are in the 21st floor. There are 8 rooms:\n\n[|South|||||] \u201cLaw of Qu\u00e9bec Room\u201d\n[|North|||||] \u201cPapua New Guinea Room\u201d\n[|East||||||] \u201cMidway Islands Room\u201d\n[|West||||||] \u201cPalau Room\u201d\n[|SouthEast|] \u201cGuam Room\u201d\n[|NorthWest|] \u201cLaw of Cyprus Room\u201d\n[|SouthWest|] \u201cLaw of Hungary Room\u201d\n[|NorthEast|] \u201cFrench Guiana Room\u201d\n[|Down||||||] 20th floor\n[|Up||||||||] 22nd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KEQ": {
          "displayName": "South",
          "destination": "building_K-KEQ"
        },
        "building_K-KWH": {
          "displayName": "North",
          "destination": "building_K-KWH"
        },
        "building_K-KVS": {
          "displayName": "East",
          "destination": "building_K-KVS"
        },
        "building_K-KWG": {
          "displayName": "West",
          "destination": "building_K-KWG"
        },
        "building_K-KVQ": {
          "displayName": "SouthEast",
          "destination": "building_K-KVQ"
        },
        "building_K-KJN": {
          "displayName": "NorthWest",
          "destination": "building_K-KJN"
        },
        "building_K-KKF": {
          "displayName": "SouthWest",
          "destination": "building_K-KKF"
        },
        "building_K-KHM": {
          "displayName": "NorthEast",
          "destination": "building_K-KHM"
        },
        "down": {
          "displayName": "Down",
          "destination": "20_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "22_building_K"
        }
      }
    },
    "building_K-KKN": {
      "firstVisit": true,
      "displayName": "Law of Norway",
      "description": "Description for \u201cLaw of Norway Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "22_building_K"
        }
      }
    },
    "building_K-KRB": {
      "firstVisit": true,
      "displayName": "Central African Republic",
      "description": "Description for \u201cCentral African Republic Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "22_building_K"
        }
      }
    },
    "building_K-KTU": {
      "firstVisit": true,
      "displayName": "Togo",
      "description": "Description for \u201cTogo Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "22_building_K"
        }
      }
    },
    "building_K-KQT": {
      "firstVisit": true,
      "displayName": "Burkina Faso",
      "description": "Description for \u201cBurkina Faso Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "22_building_K"
        }
      }
    },
    "building_K-KSH": {
      "firstVisit": true,
      "displayName": "C\u00f4te d\u2019Ivoire",
      "description": "Description for \u201cC\u00f4te d\u2019Ivoire Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "22_building_K"
        }
      }
    },
    "building_K-KML": {
      "firstVisit": true,
      "displayName": "Jerusalem",
      "description": "Description for \u201cJerusalem Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "22_building_K"
        }
      }
    },
    "building_K-KMJ": {
      "firstVisit": true,
      "displayName": "Iraq",
      "description": "Description for \u201cIraq Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "22_building_K"
        }
      }
    },
    "building_K-KSP": {
      "firstVisit": true,
      "displayName": "Libya",
      "description": "Description for \u201cLibya Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "22_building_K"
        }
      }
    },
    "22_building_K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 22nd Floor",
      "description": "You are in the 22nd floor. There are 8 rooms:\n\n[|South|||||] \u201cLaw of Norway Room\u201d\n[|North|||||] \u201cCentral African Republic Room\u201d\n[|East||||||] \u201cTogo Room\u201d\n[|West||||||] \u201cBurkina Faso Room\u201d\n[|SouthEast|] \u201cC\u00f4te d\u2019Ivoire Room\u201d\n[|NorthWest|] \u201cJerusalem Room\u201d\n[|SouthWest|] \u201cIraq Room\u201d\n[|NorthEast|] \u201cLibya Room\u201d\n[|Down||||||] 21st floor\n[|Up||||||||] 23rd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KKN": {
          "displayName": "South",
          "destination": "building_K-KKN"
        },
        "building_K-KRB": {
          "displayName": "North",
          "destination": "building_K-KRB"
        },
        "building_K-KTU": {
          "displayName": "East",
          "destination": "building_K-KTU"
        },
        "building_K-KQT": {
          "displayName": "West",
          "destination": "building_K-KQT"
        },
        "building_K-KSH": {
          "displayName": "SouthEast",
          "destination": "building_K-KSH"
        },
        "building_K-KML": {
          "displayName": "NorthWest",
          "destination": "building_K-KML"
        },
        "building_K-KMJ": {
          "displayName": "SouthWest",
          "destination": "building_K-KMJ"
        },
        "building_K-KSP": {
          "displayName": "NorthEast",
          "destination": "building_K-KSP"
        },
        "down": {
          "displayName": "Down",
          "destination": "21_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "23_building_K"
        }
      }
    },
    "building_K-KGH": {
      "firstVisit": true,
      "displayName": "Panama",
      "description": "Description for \u201cPanama Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "23_building_K"
        }
      }
    },
    "building_K-KGQ": {
      "firstVisit": true,
      "displayName": "Dominican Republic",
      "description": "Description for \u201cDominican Republic Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "23_building_K"
        }
      }
    },
    "building_K-KGN": {
      "firstVisit": true,
      "displayName": "Cuba",
      "description": "Description for \u201cCuba Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "23_building_K"
        }
      }
    },
    "building_K-KGC": {
      "firstVisit": true,
      "displayName": "El Salvador",
      "description": "Description for \u201cEl Salvador Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "23_building_K"
        }
      }
    },
    "building_K-KSN": {
      "firstVisit": true,
      "displayName": "Liberia",
      "description": "Description for \u201cLiberia Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "23_building_K"
        }
      }
    },
    "building_K-KSZ": {
      "firstVisit": true,
      "displayName": "Niger",
      "description": "Description for \u201cNiger Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "23_building_K"
        }
      }
    },
    "building_K-KPC": {
      "firstVisit": true,
      "displayName": "Democratic People\u2019s Republic of Korea.  North Korea",
      "description": "Description for \u201cDemocratic People\u2019s Republic of Korea.  North Korea Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "23_building_K"
        }
      }
    },
    "building_K-KQ": {
      "firstVisit": true,
      "displayName": "Law of indigenous peoples",
      "description": "Description for \u201cLaw of indigenous peoples Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "23_building_K"
        }
      }
    },
    "23_building_K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 23rd Floor",
      "description": "You are in the 23rd floor. There are 8 rooms:\n\n[|South|||||] \u201cPanama Room\u201d\n[|North|||||] \u201cDominican Republic Room\u201d\n[|East||||||] \u201cCuba Room\u201d\n[|West||||||] \u201cEl Salvador Room\u201d\n[|SouthEast|] \u201cLiberia Room\u201d\n[|NorthWest|] \u201cNiger Room\u201d\n[|SouthWest|] \u201cDemocratic People\u2019s Republic of Korea.  North Korea Room\u201d\n[|NorthEast|] \u201cLaw of indigenous peoples Room\u201d\n[|Down||||||] 22nd floor\n[|Up||||||||] 24th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KGH": {
          "displayName": "South",
          "destination": "building_K-KGH"
        },
        "building_K-KGQ": {
          "displayName": "North",
          "destination": "building_K-KGQ"
        },
        "building_K-KGN": {
          "displayName": "East",
          "destination": "building_K-KGN"
        },
        "building_K-KGC": {
          "displayName": "West",
          "destination": "building_K-KGC"
        },
        "building_K-KSN": {
          "displayName": "SouthEast",
          "destination": "building_K-KSN"
        },
        "building_K-KSZ": {
          "displayName": "NorthWest",
          "destination": "building_K-KSZ"
        },
        "building_K-KPC": {
          "displayName": "SouthWest",
          "destination": "building_K-KPC"
        },
        "building_K-KQ": {
          "displayName": "NorthEast",
          "destination": "building_K-KQ"
        },
        "down": {
          "displayName": "Down",
          "destination": "22_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "24_building_K"
        }
      }
    },
    "building_K-KWC": {
      "firstVisit": true,
      "displayName": "Northern Mariana Islands",
      "description": "Description for \u201cNorthern Mariana Islands Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "24_building_K"
        }
      }
    },
    "building_K-KNM": {
      "firstVisit": true,
      "displayName": "Cambodia",
      "description": "Description for \u201cCambodia Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "24_building_K"
        }
      }
    },
    "building_K-KBT": {
      "firstVisit": true,
      "displayName": "Canon law of Eastern Rite Churches in Communion with the",
      "description": "Description for \u201cCanon law of Eastern Rite Churches in Communion with the Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "24_building_K"
        }
      }
    },
    "building_K-KJG": {
      "firstVisit": true,
      "displayName": "Law of Albania",
      "description": "Description for \u201cLaw of Albania Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "24_building_K"
        }
      }
    },
    "building_K-KGX": {
      "firstVisit": true,
      "displayName": "Trinidad and Tobago",
      "description": "Description for \u201cTrinidad and Tobago Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "24_building_K"
        }
      }
    },
    "building_K-KKR": {
      "firstVisit": true,
      "displayName": "Law of Romania",
      "description": "Description for \u201cLaw of Romania Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "24_building_K"
        }
      }
    },
    "building_K-KJQ": {
      "firstVisit": true,
      "displayName": "Law of Slovakia (1993-        )",
      "description": "Description for \u201cLaw of Slovakia (1993-        ) Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "24_building_K"
        }
      }
    },
    "building_K-KLM": {
      "firstVisit": true,
      "displayName": "Moldova",
      "description": "Description for \u201cMoldova Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "24_building_K"
        }
      }
    },
    "24_building_K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 24th Floor",
      "description": "You are in the 24th floor. There are 8 rooms:\n\n[|South|||||] \u201cNorthern Mariana Islands Room\u201d\n[|North|||||] \u201cCambodia Room\u201d\n[|East||||||] \u201cCanon law of Eastern Rite Churches in Communion with the Room\u201d\n[|West||||||] \u201cLaw of Albania Room\u201d\n[|SouthEast|] \u201cTrinidad and Tobago Room\u201d\n[|NorthWest|] \u201cLaw of Romania Room\u201d\n[|SouthWest|] \u201cLaw of Slovakia (1993-        ) Room\u201d\n[|NorthEast|] \u201cMoldova Room\u201d\n[|Down||||||] 23rd floor\n[|Up||||||||] 25th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KWC": {
          "displayName": "South",
          "destination": "building_K-KWC"
        },
        "building_K-KNM": {
          "displayName": "North",
          "destination": "building_K-KNM"
        },
        "building_K-KBT": {
          "displayName": "East",
          "destination": "building_K-KBT"
        },
        "building_K-KJG": {
          "displayName": "West",
          "destination": "building_K-KJG"
        },
        "building_K-KGX": {
          "displayName": "SouthEast",
          "destination": "building_K-KGX"
        },
        "building_K-KKR": {
          "displayName": "NorthWest",
          "destination": "building_K-KKR"
        },
        "building_K-KJQ": {
          "displayName": "SouthWest",
          "destination": "building_K-KJQ"
        },
        "building_K-KLM": {
          "displayName": "NorthEast",
          "destination": "building_K-KLM"
        },
        "down": {
          "displayName": "Down",
          "destination": "23_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "25_building_K"
        }
      }
    },
    "building_K-KDE": {
      "firstVisit": true,
      "displayName": "Law of Northern Ireland",
      "description": "Description for \u201cLaw of Northern Ireland Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "25_building_K"
        }
      }
    },
    "building_K-KES": {
      "firstVisit": true,
      "displayName": "Law of Saskatchewan",
      "description": "Description for \u201cLaw of Saskatchewan Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "25_building_K"
        }
      }
    },
    "building_K-KNK": {
      "firstVisit": true,
      "displayName": "Brunei",
      "description": "Description for \u201cBrunei Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "25_building_K"
        }
      }
    },
    "building_K-KPE": {
      "firstVisit": true,
      "displayName": "Laos",
      "description": "Description for \u201cLaos Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "25_building_K"
        }
      }
    },
    "building_K-KPS": {
      "firstVisit": true,
      "displayName": "Sri Lanka",
      "description": "Description for \u201cSri Lanka Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "25_building_K"
        }
      }
    },
    "building_K-KPJ": {
      "firstVisit": true,
      "displayName": "Nepal",
      "description": "Description for \u201cNepal Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "25_building_K"
        }
      }
    },
    "building_K-KNL": {
      "firstVisit": true,
      "displayName": "Burma",
      "description": "Description for \u201cBurma Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "25_building_K"
        }
      }
    },
    "building_K-KNG": {
      "firstVisit": true,
      "displayName": "Bangladesh",
      "description": "Description for \u201cBangladesh Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "25_building_K"
        }
      }
    },
    "25_building_K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 25th Floor",
      "description": "You are in the 25th floor. There are 8 rooms:\n\n[|South|||||] \u201cLaw of Northern Ireland Room\u201d\n[|North|||||] \u201cLaw of Saskatchewan Room\u201d\n[|East||||||] \u201cBrunei Room\u201d\n[|West||||||] \u201cLaos Room\u201d\n[|SouthEast|] \u201cSri Lanka Room\u201d\n[|NorthWest|] \u201cNepal Room\u201d\n[|SouthWest|] \u201cBurma Room\u201d\n[|NorthEast|] \u201cBangladesh Room\u201d\n[|Down||||||] 24th floor\n[|Up||||||||] 26th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KDE": {
          "displayName": "South",
          "destination": "building_K-KDE"
        },
        "building_K-KES": {
          "displayName": "North",
          "destination": "building_K-KES"
        },
        "building_K-KNK": {
          "displayName": "East",
          "destination": "building_K-KNK"
        },
        "building_K-KPE": {
          "displayName": "West",
          "destination": "building_K-KPE"
        },
        "building_K-KPS": {
          "displayName": "SouthEast",
          "destination": "building_K-KPS"
        },
        "building_K-KPJ": {
          "displayName": "NorthWest",
          "destination": "building_K-KPJ"
        },
        "building_K-KNL": {
          "displayName": "SouthWest",
          "destination": "building_K-KNL"
        },
        "building_K-KNG": {
          "displayName": "NorthEast",
          "destination": "building_K-KNG"
        },
        "down": {
          "displayName": "Down",
          "destination": "24_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "26_building_K"
        }
      }
    },
    "building_K-KSE": {
      "firstVisit": true,
      "displayName": "Equatorial Guinea",
      "description": "Description for \u201cEquatorial Guinea Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "26_building_K"
        }
      }
    },
    "building_K-KLT": {
      "firstVisit": true,
      "displayName": "Tajikistan",
      "description": "Description for \u201cTajikistan Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "26_building_K"
        }
      }
    },
    "building_K-KLV": {
      "firstVisit": true,
      "displayName": "Turkmenistan",
      "description": "Description for \u201cTurkmenistan Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "26_building_K"
        }
      }
    },
    "building_K-KRE": {
      "firstVisit": true,
      "displayName": "Comoros",
      "description": "Description for \u201cComoros Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "26_building_K"
        }
      }
    },
    "building_K-KTH": {
      "firstVisit": true,
      "displayName": "Seychelles",
      "description": "Description for \u201cSeychelles Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "26_building_K"
        }
      }
    },
    "building_K-KSR": {
      "firstVisit": true,
      "displayName": "Madagascar",
      "description": "Description for \u201cMadagascar Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "26_building_K"
        }
      }
    },
    "building_K-KQE": {
      "firstVisit": true,
      "displayName": "Regional organization and integration",
      "description": "Description for \u201cRegional organization and integration Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "26_building_K"
        }
      }
    },
    "building_K-KRN": {
      "firstVisit": true,
      "displayName": "Eritrea",
      "description": "Description for \u201cEritrea Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "26_building_K"
        }
      }
    },
    "26_building_K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 26th Floor",
      "description": "You are in the 26th floor. There are 8 rooms:\n\n[|South|||||] \u201cEquatorial Guinea Room\u201d\n[|North|||||] \u201cTajikistan Room\u201d\n[|East||||||] \u201cTurkmenistan Room\u201d\n[|West||||||] \u201cComoros Room\u201d\n[|SouthEast|] \u201cSeychelles Room\u201d\n[|NorthWest|] \u201cMadagascar Room\u201d\n[|SouthWest|] \u201cRegional organization and integration Room\u201d\n[|NorthEast|] \u201cEritrea Room\u201d\n[|Down||||||] 25th floor\n[|Up||||||||] 27th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KSE": {
          "displayName": "South",
          "destination": "building_K-KSE"
        },
        "building_K-KLT": {
          "displayName": "North",
          "destination": "building_K-KLT"
        },
        "building_K-KLV": {
          "displayName": "East",
          "destination": "building_K-KLV"
        },
        "building_K-KRE": {
          "displayName": "West",
          "destination": "building_K-KRE"
        },
        "building_K-KTH": {
          "displayName": "SouthEast",
          "destination": "building_K-KTH"
        },
        "building_K-KSR": {
          "displayName": "NorthWest",
          "destination": "building_K-KSR"
        },
        "building_K-KQE": {
          "displayName": "SouthWest",
          "destination": "building_K-KQE"
        },
        "building_K-KRN": {
          "displayName": "NorthEast",
          "destination": "building_K-KRN"
        },
        "down": {
          "displayName": "Down",
          "destination": "25_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "27_building_K"
        }
      }
    },
    "building_K-KKG": {
      "firstVisit": true,
      "displayName": "Law of Iceland",
      "description": "Description for \u201cLaw of Iceland Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "27_building_K"
        }
      }
    },
    "building_K-KLH": {
      "firstVisit": true,
      "displayName": "Georgia (Republic)",
      "description": "Description for \u201cGeorgia (Republic) Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "27_building_K"
        }
      }
    },
    "building_K-KGA": {
      "firstVisit": true,
      "displayName": "Belize",
      "description": "Description for \u201cBelize Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "27_building_K"
        }
      }
    },
    "building_K-KKI": {
      "firstVisit": true,
      "displayName": "Law of Latvia",
      "description": "Description for \u201cLaw of Latvia Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "27_building_K"
        }
      }
    },
    "building_K-KTF": {
      "firstVisit": true,
      "displayName": "Sao Tome and Principe",
      "description": "Description for \u201cSao Tome and Principe Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "27_building_K"
        }
      }
    },
    "building_K-KJH": {
      "firstVisit": true,
      "displayName": "Law of Andorra",
      "description": "Description for \u201cLaw of Andorra Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "27_building_K"
        }
      }
    },
    "building_K-KWL": {
      "firstVisit": true,
      "displayName": "Solomon Islands",
      "description": "Description for \u201cSolomon Islands Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "27_building_K"
        }
      }
    },
    "building_K-KGW": {
      "firstVisit": true,
      "displayName": "Saint Lucia",
      "description": "Description for \u201cSaint Lucia Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "27_building_K"
        }
      }
    },
    "27_building_K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 27th Floor",
      "description": "You are in the 27th floor. There are 8 rooms:\n\n[|South|||||] \u201cLaw of Iceland Room\u201d\n[|North|||||] \u201cGeorgia (Republic) Room\u201d\n[|East||||||] \u201cBelize Room\u201d\n[|West||||||] \u201cLaw of Latvia Room\u201d\n[|SouthEast|] \u201cSao Tome and Principe Room\u201d\n[|NorthWest|] \u201cLaw of Andorra Room\u201d\n[|SouthWest|] \u201cSolomon Islands Room\u201d\n[|NorthEast|] \u201cSaint Lucia Room\u201d\n[|Down||||||] 26th floor\n[|Up||||||||] 28th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KKG": {
          "displayName": "South",
          "destination": "building_K-KKG"
        },
        "building_K-KLH": {
          "displayName": "North",
          "destination": "building_K-KLH"
        },
        "building_K-KGA": {
          "displayName": "East",
          "destination": "building_K-KGA"
        },
        "building_K-KKI": {
          "displayName": "West",
          "destination": "building_K-KKI"
        },
        "building_K-KTF": {
          "displayName": "SouthEast",
          "destination": "building_K-KTF"
        },
        "building_K-KJH": {
          "displayName": "NorthWest",
          "destination": "building_K-KJH"
        },
        "building_K-KWL": {
          "displayName": "SouthWest",
          "destination": "building_K-KWL"
        },
        "building_K-KGW": {
          "displayName": "NorthEast",
          "destination": "building_K-KGW"
        },
        "down": {
          "displayName": "Down",
          "destination": "26_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "28_building_K"
        }
      }
    },
    "building_K-KGZ": {
      "firstVisit": true,
      "displayName": "Virgin Islands of the United States",
      "description": "Description for \u201cVirgin Islands of the United States Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "28_building_K"
        }
      }
    },
    "building_K-KGR": {
      "firstVisit": true,
      "displayName": "Grenada",
      "description": "Description for \u201cGrenada Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "28_building_K"
        }
      }
    },
    "building_K-KRV": {
      "firstVisit": true,
      "displayName": "Gambia",
      "description": "Description for \u201cGambia Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "28_building_K"
        }
      }
    },
    "building_K-KFZ": {
      "firstVisit": true,
      "displayName": "Laws of the territories.  Laws of the Confederate States of",
      "description": "Description for \u201cLaws of the territories.  Laws of the Confederate States of Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "28_building_K"
        }
      }
    },
    "building_K-KDG": {
      "firstVisit": true,
      "displayName": "Law of Isle of Man.  Channel Islands",
      "description": "Description for \u201cLaw of Isle of Man.  Channel Islands Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "28_building_K"
        }
      }
    },
    "building_K-KGJ": {
      "firstVisit": true,
      "displayName": "General",
      "description": "Description for \u201cGeneral Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "28_building_K"
        }
      }
    },
    "building_K-KLN": {
      "firstVisit": true,
      "displayName": "Russian S.F.S.R. (to 1991)",
      "description": "Description for \u201cRussian S.F.S.R. (to 1991) Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "28_building_K"
        }
      }
    },
    "building_K-KMQ": {
      "firstVisit": true,
      "displayName": "Palestine (to 1948)",
      "description": "Description for \u201cPalestine (to 1948) Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "28_building_K"
        }
      }
    },
    "28_building_K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 28th Floor",
      "description": "You are in the 28th floor. There are 8 rooms:\n\n[|South|||||] \u201cVirgin Islands of the United States Room\u201d\n[|North|||||] \u201cGrenada Room\u201d\n[|East||||||] \u201cGambia Room\u201d\n[|West||||||] \u201cLaws of the territories.  Laws of the Confederate States of Room\u201d\n[|SouthEast|] \u201cLaw of Isle of Man.  Channel Islands Room\u201d\n[|NorthWest|] \u201cGeneral Room\u201d\n[|SouthWest|] \u201cRussian S.F.S.R. (to 1991) Room\u201d\n[|NorthEast|] \u201cPalestine (to 1948) Room\u201d\n[|Down||||||] 27th floor\n[|Up||||||||] 29th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KGZ": {
          "displayName": "South",
          "destination": "building_K-KGZ"
        },
        "building_K-KGR": {
          "displayName": "North",
          "destination": "building_K-KGR"
        },
        "building_K-KRV": {
          "displayName": "East",
          "destination": "building_K-KRV"
        },
        "building_K-KFZ": {
          "displayName": "West",
          "destination": "building_K-KFZ"
        },
        "building_K-KDG": {
          "displayName": "SouthEast",
          "destination": "building_K-KDG"
        },
        "building_K-KGJ": {
          "displayName": "NorthWest",
          "destination": "building_K-KGJ"
        },
        "building_K-KLN": {
          "displayName": "SouthWest",
          "destination": "building_K-KLN"
        },
        "building_K-KMQ": {
          "displayName": "NorthEast",
          "destination": "building_K-KMQ"
        },
        "down": {
          "displayName": "Down",
          "destination": "27_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "29_building_K"
        }
      }
    },
    "building_K-KEY": {
      "firstVisit": true,
      "displayName": "Law of Yukon",
      "description": "Description for \u201cLaw of Yukon Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "29_building_K"
        }
      }
    },
    "building_K-KNV": {
      "firstVisit": true,
      "displayName": "French Indochina.  Indochina (Federation)",
      "description": "Description for \u201cFrench Indochina.  Indochina (Federation) Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "29_building_K"
        }
      }
    },
    "building_K-KMY": {
      "firstVisit": true,
      "displayName": "Yeman (People\u2019s Democratic Republic) (to 1990)",
      "description": "Description for \u201cYeman (People\u2019s Democratic Republic) (to 1990) Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "29_building_K"
        }
      }
    },
    "building_K-KHS": {
      "firstVisit": true,
      "displayName": "Surinam",
      "description": "Description for \u201cSurinam Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "29_building_K"
        }
      }
    },
    "building_K-KMU": {
      "firstVisit": true,
      "displayName": "Syria",
      "description": "Description for \u201cSyria Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "29_building_K"
        }
      }
    },
    "building_K-KKL": {
      "firstVisit": true,
      "displayName": "Law of Montenegro",
      "description": "Description for \u201cLaw of Montenegro Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "29_building_K"
        }
      }
    },
    "building_K-KSG": {
      "firstVisit": true,
      "displayName": "Italian Somaliland",
      "description": "Description for \u201cItalian Somaliland Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "29_building_K"
        }
      }
    },
    "building_K-KEZ": {
      "firstVisit": true,
      "displayName": "Law of Law of cities, towns, etc.",
      "description": "Description for \u201cLaw of Law of cities, towns, etc. Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "29_building_K"
        }
      }
    },
    "29_building_K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 29th Floor",
      "description": "You are in the 29th floor. There are 8 rooms:\n\n[|South|||||] \u201cLaw of Yukon Room\u201d\n[|North|||||] \u201cFrench Indochina.  Indochina (Federation) Room\u201d\n[|East||||||] \u201cYeman (People\u2019s Democratic Republic) (to 1990) Room\u201d\n[|West||||||] \u201cSurinam Room\u201d\n[|SouthEast|] \u201cSyria Room\u201d\n[|NorthWest|] \u201cLaw of Montenegro Room\u201d\n[|SouthWest|] \u201cItalian Somaliland Room\u201d\n[|NorthEast|] \u201cLaw of Law of cities, towns, etc. Room\u201d\n[|Down||||||] 28th floor\n[|Up||||||||] 30th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KEY": {
          "displayName": "South",
          "destination": "building_K-KEY"
        },
        "building_K-KNV": {
          "displayName": "North",
          "destination": "building_K-KNV"
        },
        "building_K-KMY": {
          "displayName": "East",
          "destination": "building_K-KMY"
        },
        "building_K-KHS": {
          "displayName": "West",
          "destination": "building_K-KHS"
        },
        "building_K-KMU": {
          "displayName": "SouthEast",
          "destination": "building_K-KMU"
        },
        "building_K-KKL": {
          "displayName": "NorthWest",
          "destination": "building_K-KKL"
        },
        "building_K-KSG": {
          "displayName": "SouthWest",
          "destination": "building_K-KSG"
        },
        "building_K-KEZ": {
          "displayName": "NorthEast",
          "destination": "building_K-KEZ"
        },
        "down": {
          "displayName": "Down",
          "destination": "28_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "30_building_K"
        }
      }
    },
    "building_K-KEM": {
      "firstVisit": true,
      "displayName": "Law of Manitoba",
      "description": "Description for \u201cLaw of Manitoba Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "30_building_K"
        }
      }
    },
    "building_K-KTK": {
      "firstVisit": true,
      "displayName": "Somalia",
      "description": "Description for \u201cSomalia Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "30_building_K"
        }
      }
    },
    "building_K-KGT": {
      "firstVisit": true,
      "displayName": "Jamaica",
      "description": "Description for \u201cJamaica Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "30_building_K"
        }
      }
    },
    "building_K-KGY": {
      "firstVisit": true,
      "displayName": "Turks and Caicos Islands",
      "description": "Description for \u201cTurks and Caicos Islands Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "30_building_K"
        }
      }
    },
    "building_K-KEP": {
      "firstVisit": true,
      "displayName": "Law of Law of Prince Edward Island",
      "description": "Description for \u201cLaw of Law of Prince Edward Island Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "30_building_K"
        }
      }
    },
    "building_K-KQV": {
      "firstVisit": true,
      "displayName": "Burundi",
      "description": "Description for \u201cBurundi Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "30_building_K"
        }
      }
    },
    "building_K-KWE": {
      "firstVisit": true,
      "displayName": "Pacific Islands (Trust Territory)",
      "description": "Description for \u201cPacific Islands (Trust Territory) Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "30_building_K"
        }
      }
    },
    "building_K-KPW": {
      "firstVisit": true,
      "displayName": "Vietnam (Republic).  South Vietnam",
      "description": "Description for \u201cVietnam (Republic).  South Vietnam Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "30_building_K"
        }
      }
    },
    "30_building_K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 30th Floor",
      "description": "You are in the 30th floor. There are 8 rooms:\n\n[|South|||||] \u201cLaw of Manitoba Room\u201d\n[|North|||||] \u201cSomalia Room\u201d\n[|East||||||] \u201cJamaica Room\u201d\n[|West||||||] \u201cTurks and Caicos Islands Room\u201d\n[|SouthEast|] \u201cLaw of Law of Prince Edward Island Room\u201d\n[|NorthWest|] \u201cBurundi Room\u201d\n[|SouthWest|] \u201cPacific Islands (Trust Territory) Room\u201d\n[|NorthEast|] \u201cVietnam (Republic).  South Vietnam Room\u201d\n[|Down||||||] 29th floor\n[|Up||||||||] 31st floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KEM": {
          "displayName": "South",
          "destination": "building_K-KEM"
        },
        "building_K-KTK": {
          "displayName": "North",
          "destination": "building_K-KTK"
        },
        "building_K-KGT": {
          "displayName": "East",
          "destination": "building_K-KGT"
        },
        "building_K-KGY": {
          "displayName": "West",
          "destination": "building_K-KGY"
        },
        "building_K-KEP": {
          "displayName": "SouthEast",
          "destination": "building_K-KEP"
        },
        "building_K-KQV": {
          "displayName": "NorthWest",
          "destination": "building_K-KQV"
        },
        "building_K-KWE": {
          "displayName": "SouthWest",
          "destination": "building_K-KWE"
        },
        "building_K-KPW": {
          "displayName": "NorthEast",
          "destination": "building_K-KPW"
        },
        "down": {
          "displayName": "Down",
          "destination": "29_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "31_building_K"
        }
      }
    },
    "building_K-KWX": {
      "firstVisit": true,
      "displayName": "Antarctica",
      "description": "Description for \u201cAntarctica Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "31_building_K"
        }
      }
    },
    "building_K-KVH": {
      "firstVisit": true,
      "displayName": "British New Guinea (Territory of Papua)",
      "description": "Description for \u201cBritish New Guinea (Territory of Papua) Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "31_building_K"
        }
      }
    },
    "building_K-KWR": {
      "firstVisit": true,
      "displayName": "Vanuatu",
      "description": "Description for \u201cVanuatu Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "31_building_K"
        }
      }
    },
    "building_K-KWA": {
      "firstVisit": true,
      "displayName": "Niue",
      "description": "Description for \u201cNiue Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "31_building_K"
        }
      }
    },
    "building_K-KNF": {
      "firstVisit": true,
      "displayName": "Afghanistan",
      "description": "Description for \u201cAfghanistan Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "31_building_K"
        }
      }
    },
    "building_K-KRY": {
      "firstVisit": true,
      "displayName": "Gibraltar",
      "description": "Description for \u201cGibraltar Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "31_building_K"
        }
      }
    },
    "building_K-KRC": {
      "firstVisit": true,
      "displayName": "Chad",
      "description": "Description for \u201cChad Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "31_building_K"
        }
      }
    },
    "building_K-KTJ": {
      "firstVisit": true,
      "displayName": "Sierra Leone",
      "description": "Description for \u201cSierra Leone Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "31_building_K"
        }
      }
    },
    "31_building_K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 31st Floor",
      "description": "You are in the 31st floor. There are 8 rooms:\n\n[|South|||||] \u201cAntarctica Room\u201d\n[|North|||||] \u201cBritish New Guinea (Territory of Papua) Room\u201d\n[|East||||||] \u201cVanuatu Room\u201d\n[|West||||||] \u201cNiue Room\u201d\n[|SouthEast|] \u201cAfghanistan Room\u201d\n[|NorthWest|] \u201cGibraltar Room\u201d\n[|SouthWest|] \u201cChad Room\u201d\n[|NorthEast|] \u201cSierra Leone Room\u201d\n[|Down||||||] 30th floor\n[|Up||||||||] 32nd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KWX": {
          "displayName": "South",
          "destination": "building_K-KWX"
        },
        "building_K-KVH": {
          "displayName": "North",
          "destination": "building_K-KVH"
        },
        "building_K-KWR": {
          "displayName": "East",
          "destination": "building_K-KWR"
        },
        "building_K-KWA": {
          "displayName": "West",
          "destination": "building_K-KWA"
        },
        "building_K-KNF": {
          "displayName": "SouthEast",
          "destination": "building_K-KNF"
        },
        "building_K-KRY": {
          "displayName": "NorthWest",
          "destination": "building_K-KRY"
        },
        "building_K-KRC": {
          "displayName": "SouthWest",
          "destination": "building_K-KRC"
        },
        "building_K-KTJ": {
          "displayName": "NorthEast",
          "destination": "building_K-KTJ"
        },
        "down": {
          "displayName": "Down",
          "destination": "30_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "32_building_K"
        }
      }
    },
    "building_K-KTR": {
      "firstVisit": true,
      "displayName": "Swaziland",
      "description": "Description for \u201cSwaziland Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "32_building_K"
        }
      }
    },
    "building_K-KTC": {
      "firstVisit": true,
      "displayName": "R\u00e9union",
      "description": "Description for \u201cR\u00e9union Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "32_building_K"
        }
      }
    },
    "building_K-KRK": {
      "firstVisit": true,
      "displayName": "Djibouti",
      "description": "Description for \u201cDjibouti Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "32_building_K"
        }
      }
    },
    "building_K-KGM": {
      "firstVisit": true,
      "displayName": "Cayman Islands",
      "description": "Description for \u201cCayman Islands Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "32_building_K"
        }
      }
    },
    "building_K-KGP": {
      "firstVisit": true,
      "displayName": "Dominica",
      "description": "Description for \u201cDominica Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "32_building_K"
        }
      }
    },
    "building_K-KRG": {
      "firstVisit": true,
      "displayName": "Congo (Brazzaville)",
      "description": "Description for \u201cCongo (Brazzaville) Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "32_building_K"
        }
      }
    },
    "building_K-KVU": {
      "firstVisit": true,
      "displayName": "Nauru",
      "description": "Description for \u201cNauru Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "32_building_K"
        }
      }
    },
    "building_K-KQJ": {
      "firstVisit": true,
      "displayName": "Benin",
      "description": "Description for \u201cBenin Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "32_building_K"
        }
      }
    },
    "32_building_K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 32nd Floor",
      "description": "You are in the 32nd floor. There are 8 rooms:\n\n[|South|||||] \u201cSwaziland Room\u201d\n[|North|||||] \u201cR\u00e9union Room\u201d\n[|East||||||] \u201cDjibouti Room\u201d\n[|West||||||] \u201cCayman Islands Room\u201d\n[|SouthEast|] \u201cDominica Room\u201d\n[|NorthWest|] \u201cCongo (Brazzaville) Room\u201d\n[|SouthWest|] \u201cNauru Room\u201d\n[|NorthEast|] \u201cBenin Room\u201d\n[|Down||||||] 31st floor\n[|Up||||||||] 33rd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KTR": {
          "displayName": "South",
          "destination": "building_K-KTR"
        },
        "building_K-KTC": {
          "displayName": "North",
          "destination": "building_K-KTC"
        },
        "building_K-KRK": {
          "displayName": "East",
          "destination": "building_K-KRK"
        },
        "building_K-KGM": {
          "displayName": "West",
          "destination": "building_K-KGM"
        },
        "building_K-KGP": {
          "displayName": "SouthEast",
          "destination": "building_K-KGP"
        },
        "building_K-KRG": {
          "displayName": "NorthWest",
          "destination": "building_K-KRG"
        },
        "building_K-KVU": {
          "displayName": "SouthWest",
          "destination": "building_K-KVU"
        },
        "building_K-KQJ": {
          "displayName": "NorthEast",
          "destination": "building_K-KQJ"
        },
        "down": {
          "displayName": "Down",
          "destination": "31_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "33_building_K"
        }
      }
    },
    "building_K-KNE": {
      "firstVisit": true,
      "displayName": "Regional organization and integration",
      "description": "Description for \u201cRegional organization and integration Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "33_building_K"
        }
      }
    },
    "building_K-KMS": {
      "firstVisit": true,
      "displayName": "Qatar",
      "description": "Description for \u201cQatar Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "33_building_K"
        }
      }
    },
    "building_K-KQM": {
      "firstVisit": true,
      "displayName": "British Central Africa Protectorate",
      "description": "Description for \u201cBritish Central Africa Protectorate Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "33_building_K"
        }
      }
    },
    "building_K-KNY": {
      "firstVisit": true,
      "displayName": "Cities, etc.",
      "description": "Description for \u201cCities, etc. Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "33_building_K"
        }
      }
    },
    "building_K-KLP": {
      "firstVisit": true,
      "displayName": "Ukraine",
      "description": "Description for \u201cUkraine Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "33_building_K"
        }
      }
    },
    "building_K-KQX": {
      "firstVisit": true,
      "displayName": "Cape Verde",
      "description": "Description for \u201cCape Verde Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "33_building_K"
        }
      }
    },
    "building_K-KGK": {
      "firstVisit": true,
      "displayName": "Aruba",
      "description": "Description for \u201cAruba Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "33_building_K"
        }
      }
    },
    "building_K-KPH": {
      "firstVisit": true,
      "displayName": "Maldives",
      "description": "Description for \u201cMaldives Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "33_building_K"
        }
      }
    },
    "33_building_K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 33rd Floor",
      "description": "You are in the 33rd floor. There are 8 rooms:\n\n[|South|||||] \u201cRegional organization and integration Room\u201d\n[|North|||||] \u201cQatar Room\u201d\n[|East||||||] \u201cBritish Central Africa Protectorate Room\u201d\n[|West||||||] \u201cCities, etc. Room\u201d\n[|SouthEast|] \u201cUkraine Room\u201d\n[|NorthWest|] \u201cCape Verde Room\u201d\n[|SouthWest|] \u201cAruba Room\u201d\n[|NorthEast|] \u201cMaldives Room\u201d\n[|Down||||||] 32nd floor\n[|Up||||||||] 34th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KNE": {
          "displayName": "South",
          "destination": "building_K-KNE"
        },
        "building_K-KMS": {
          "displayName": "North",
          "destination": "building_K-KMS"
        },
        "building_K-KQM": {
          "displayName": "East",
          "destination": "building_K-KQM"
        },
        "building_K-KNY": {
          "displayName": "West",
          "destination": "building_K-KNY"
        },
        "building_K-KLP": {
          "displayName": "SouthEast",
          "destination": "building_K-KLP"
        },
        "building_K-KQX": {
          "displayName": "NorthWest",
          "destination": "building_K-KQX"
        },
        "building_K-KGK": {
          "displayName": "SouthWest",
          "destination": "building_K-KGK"
        },
        "building_K-KPH": {
          "displayName": "NorthEast",
          "destination": "building_K-KPH"
        },
        "down": {
          "displayName": "Down",
          "destination": "32_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "34_building_K"
        }
      }
    },
    "building_K-KSU": {
      "firstVisit": true,
      "displayName": "Mauritania",
      "description": "Description for \u201cMauritania Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "34_building_K"
        }
      }
    },
    "building_K-KSC": {
      "firstVisit": true,
      "displayName": "Guinea-Bissau",
      "description": "Description for \u201cGuinea-Bissau Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "34_building_K"
        }
      }
    },
    "building_K-KVL": {
      "firstVisit": true,
      "displayName": "Cook Islands",
      "description": "Description for \u201cCook Islands Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "34_building_K"
        }
      }
    },
    "building_K-KWP": {
      "firstVisit": true,
      "displayName": "Tonga",
      "description": "Description for \u201cTonga Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "34_building_K"
        }
      }
    },
    "building_K-KNH": {
      "firstVisit": true,
      "displayName": "Bhutan",
      "description": "Description for \u201cBhutan Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "34_building_K"
        }
      }
    },
    "building_K-KMG": {
      "firstVisit": true,
      "displayName": "Gaza",
      "description": "Description for \u201cGaza Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "34_building_K"
        }
      }
    },
    "building_K-KHL": {
      "firstVisit": true,
      "displayName": "Falkland Islands",
      "description": "Description for \u201cFalkland Islands Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "34_building_K"
        }
      }
    },
    "building_K-KWQ": {
      "firstVisit": true,
      "displayName": "Tuvalu",
      "description": "Description for \u201cTuvalu Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "34_building_K"
        }
      }
    },
    "34_building_K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 34th Floor",
      "description": "You are in the 34th floor. There are 8 rooms:\n\n[|South|||||] \u201cMauritania Room\u201d\n[|North|||||] \u201cGuinea-Bissau Room\u201d\n[|East||||||] \u201cCook Islands Room\u201d\n[|West||||||] \u201cTonga Room\u201d\n[|SouthEast|] \u201cBhutan Room\u201d\n[|NorthWest|] \u201cGaza Room\u201d\n[|SouthWest|] \u201cFalkland Islands Room\u201d\n[|NorthEast|] \u201cTuvalu Room\u201d\n[|Down||||||] 33rd floor\n[|Up||||||||] 35th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KSU": {
          "displayName": "South",
          "destination": "building_K-KSU"
        },
        "building_K-KSC": {
          "displayName": "North",
          "destination": "building_K-KSC"
        },
        "building_K-KVL": {
          "displayName": "East",
          "destination": "building_K-KVL"
        },
        "building_K-KWP": {
          "displayName": "West",
          "destination": "building_K-KWP"
        },
        "building_K-KNH": {
          "displayName": "SouthEast",
          "destination": "building_K-KNH"
        },
        "building_K-KMG": {
          "displayName": "NorthWest",
          "destination": "building_K-KMG"
        },
        "building_K-KHL": {
          "displayName": "SouthWest",
          "destination": "building_K-KHL"
        },
        "building_K-KWQ": {
          "displayName": "NorthEast",
          "destination": "building_K-KWQ"
        },
        "down": {
          "displayName": "Down",
          "destination": "33_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "35_building_K"
        }
      }
    },
    "building_K-KRR": {
      "firstVisit": true,
      "displayName": "French Equatorial Africa",
      "description": "Description for \u201cFrench Equatorial Africa Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "35_building_K"
        }
      }
    },
    "building_K-KVR": {
      "firstVisit": true,
      "displayName": "Kiribati",
      "description": "Description for \u201cKiribati Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "35_building_K"
        }
      }
    },
    "building_K-KU": {
      "firstVisit": true,
      "displayName": "Law of Australian peoples.  Aborigines",
      "description": "Description for \u201cLaw of Australian peoples.  Aborigines Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "35_building_K"
        }
      }
    },
    "35_building_K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 35th Floor",
      "description": "You are in the 35th floor. There are 3 rooms:\n\n[|South|||||] \u201cFrench Equatorial Africa Room\u201d\n[|North|||||] \u201cKiribati Room\u201d\n[|East||||||] \u201cLaw of Australian peoples.  Aborigines Room\u201d\n[|Down||||||] 34th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KRR": {
          "displayName": "South",
          "destination": "building_K-KRR"
        },
        "building_K-KVR": {
          "displayName": "North",
          "destination": "building_K-KVR"
        },
        "building_K-KU": {
          "displayName": "East",
          "destination": "building_K-KU"
        },
        "down": {
          "displayName": "Down",
          "destination": "34_building_K"
        }
      }
    },
    "L": {
      "firstVisit": true,
      "displayName": "\u201cEducation Building\u201d Front Porch",
      "description": "This is a small, one story tall, octagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cEducation\u201d engraved.\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
      "interactables": {},
      "items": {},
      "exits": {
        "MAIN": {
          "displayName": "Main",
          "destination": "MAIN"
        },
        "Building": {
          "displayName": "Enter",
          "destination": "building_L"
        }
      }
    },
    "building_L-LB": {
      "firstVisit": true,
      "displayName": "Theory and practice of education",
      "description": "Description for \u201cTheory and practice of education Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_L"
        }
      }
    },
    "building_L-LT": {
      "firstVisit": true,
      "displayName": "Textbooks",
      "description": "Description for \u201cTextbooks Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_L"
        }
      }
    },
    "building_L-LA": {
      "firstVisit": true,
      "displayName": "History of education",
      "description": "Description for \u201cHistory of education Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_L"
        }
      }
    },
    "building_L-LD": {
      "firstVisit": true,
      "displayName": "United States",
      "description": "Description for \u201cUnited States Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_L"
        }
      }
    },
    "building_L-LC": {
      "firstVisit": true,
      "displayName": "Special aspects of education",
      "description": "Description for \u201cSpecial aspects of education Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_L"
        }
      }
    },
    "building_L-L": {
      "firstVisit": true,
      "displayName": "Education (General)",
      "description": "Description for \u201cEducation (General) Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_L"
        }
      }
    },
    "building_L-LF": {
      "firstVisit": true,
      "displayName": "Individual institutions",
      "description": "Description for \u201cIndividual institutions Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_L"
        }
      }
    },
    "building_L-LG": {
      "firstVisit": true,
      "displayName": "Individual institutions",
      "description": "Description for \u201cIndividual institutions Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_L"
        }
      }
    },
    "building_L": {
      "firstVisit": true,
      "displayName": "\u201cEducation Building\u201d Main Lobby",
      "description": "There are 11 rooms throughout this building in 2 floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] \u201cTheory and practice of education Room\u201d\n[|North|||||] \u201cTextbooks Room\u201d\n[|East||||||] \u201cHistory of education Room\u201d\n[|West||||||] \u201cUnited States Room\u201d\n[|SouthEast|] \u201cSpecial aspects of education Room\u201d\n[|NorthWest|] \u201cEducation (General) Room\u201d\n[|SouthWest|] \u201cIndividual institutions Room\u201d\n[|NorthEast|] \u201cIndividual institutions Room\u201d\n[|Up||||||||] 2nd floor\n[|Exit||||||] \u201cEducation Building\u201d Front Porch",
      "interactables": {},
      "items": {},
      "exits": {
        "L": {
          "displayName": "Exit",
          "destination": "L"
        },
        "up": {
          "displayName": "Up",
          "destination": "2_building_L"
        },
        "L-LB": {
          "displayName": "South",
          "destination": "L-LB"
        },
        "L-LT": {
          "displayName": "North",
          "destination": "L-LT"
        },
        "L-LA": {
          "displayName": "East",
          "destination": "L-LA"
        },
        "L-LD": {
          "displayName": "West",
          "destination": "L-LD"
        },
        "L-LC": {
          "displayName": "SouthEast",
          "destination": "L-LC"
        },
        "L-L": {
          "displayName": "NorthWest",
          "destination": "L-L"
        },
        "L-LF": {
          "displayName": "SouthWest",
          "destination": "L-LF"
        },
        "L-LG": {
          "displayName": "NorthEast",
          "destination": "L-LG"
        }
      }
    },
    "building_L-LJ": {
      "firstVisit": true,
      "displayName": "Student fraternities and societies, United States",
      "description": "Description for \u201cStudent fraternities and societies, United States Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_L"
        }
      }
    },
    "building_L-LE": {
      "firstVisit": true,
      "displayName": "America (except United States)",
      "description": "Description for \u201cAmerica (except United States) Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_L"
        }
      }
    },
    "building_L-LH": {
      "firstVisit": true,
      "displayName": "College and school magazines and papers",
      "description": "Description for \u201cCollege and school magazines and papers Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_L"
        }
      }
    },
    "2_building_L": {
      "firstVisit": true,
      "displayName": "\u201cEducation Building\u201d, 2nd Floor",
      "description": "You are in the 2nd floor. There are 3 rooms:\n\n[|South|||||] \u201cStudent fraternities and societies, United States Room\u201d\n[|North|||||] \u201cAmerica (except United States) Room\u201d\n[|East||||||] \u201cCollege and school magazines and papers Room\u201d\n[|Down||||||] 1st floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_L-LJ": {
          "displayName": "South",
          "destination": "building_L-LJ"
        },
        "building_L-LE": {
          "displayName": "North",
          "destination": "building_L-LE"
        },
        "building_L-LH": {
          "displayName": "East",
          "destination": "building_L-LH"
        },
        "down": {
          "displayName": "Down",
          "destination": "building_L"
        }
      }
    },
    "M": {
      "firstVisit": true,
      "displayName": "\u201cMusic Building\u201d Front Porch",
      "description": "This is a small, one story tall, square-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cMusic\u201d engraved.\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
      "interactables": {},
      "items": {},
      "exits": {
        "MAIN": {
          "displayName": "Main",
          "destination": "MAIN"
        },
        "Building": {
          "displayName": "Enter",
          "destination": "building_M"
        }
      }
    },
    "building_M-ML": {
      "firstVisit": true,
      "displayName": "Literature on music",
      "description": "Description for \u201cLiterature on music Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_M"
        }
      }
    },
    "building_M-MT": {
      "firstVisit": true,
      "displayName": "Instruction and study",
      "description": "Description for \u201cInstruction and study Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_M"
        }
      }
    },
    "building_M-M": {
      "firstVisit": true,
      "displayName": "Music",
      "description": "Description for \u201cMusic Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_M"
        }
      }
    },
    "building_M": {
      "firstVisit": true,
      "displayName": "\u201cMusic Building\u201d Main Lobby",
      "description": "There are 3 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n\n[|South|||||] \u201cLiterature on music Room\u201d\n[|North|||||] \u201cInstruction and study Room\u201d\n[|East||||||] \u201cMusic Room\u201d\n[|Exit||||||] \u201cMusic Building\u201d Front Porch",
      "interactables": {},
      "items": {},
      "exits": {
        "M": {
          "displayName": "Exit",
          "destination": "M"
        },
        "M-ML": {
          "displayName": "South",
          "destination": "M-ML"
        },
        "M-MT": {
          "displayName": "North",
          "destination": "M-MT"
        },
        "M-M": {
          "displayName": "East",
          "destination": "M-M"
        }
      }
    },
    "N": {
      "firstVisit": true,
      "displayName": "\u201cFine Arts Building\u201d Front Porch",
      "description": "This is a small, one story tall, octagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cFine Arts\u201d engraved.\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
      "interactables": {},
      "items": {},
      "exits": {
        "MAIN": {
          "displayName": "Main",
          "destination": "MAIN"
        },
        "Building": {
          "displayName": "Enter",
          "destination": "building_N"
        }
      }
    },
    "building_N-NA": {
      "firstVisit": true,
      "displayName": "Architecture",
      "description": "Description for \u201cArchitecture Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_N"
        }
      }
    },
    "building_N-N": {
      "firstVisit": true,
      "displayName": "Visual arts",
      "description": "Description for \u201cVisual arts Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_N"
        }
      }
    },
    "building_N-NK": {
      "firstVisit": true,
      "displayName": "Decorative arts",
      "description": "Description for \u201cDecorative arts Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_N"
        }
      }
    },
    "building_N-ND": {
      "firstVisit": true,
      "displayName": "Painting",
      "description": "Description for \u201cPainting Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_N"
        }
      }
    },
    "building_N-NC": {
      "firstVisit": true,
      "displayName": "Drawing.    Design.    Illustration",
      "description": "Description for \u201cDrawing.    Design.    Illustration Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_N"
        }
      }
    },
    "building_N-NE": {
      "firstVisit": true,
      "displayName": "Print media",
      "description": "Description for \u201cPrint media Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_N"
        }
      }
    },
    "building_N-NB": {
      "firstVisit": true,
      "displayName": "Sculpture",
      "description": "Description for \u201cSculpture Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_N"
        }
      }
    },
    "building_N-NX": {
      "firstVisit": true,
      "displayName": "Arts in general",
      "description": "Description for \u201cArts in general Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_N"
        }
      }
    },
    "building_N": {
      "firstVisit": true,
      "displayName": "\u201cFine Arts Building\u201d Main Lobby",
      "description": "There are 8 rooms throughout this building. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] \u201cArchitecture Room\u201d\n[|North|||||] \u201cVisual arts Room\u201d\n[|East||||||] \u201cDecorative arts Room\u201d\n[|West||||||] \u201cPainting Room\u201d\n[|SouthEast|] \u201cDrawing.    Design.    Illustration Room\u201d\n[|NorthWest|] \u201cPrint media Room\u201d\n[|SouthWest|] \u201cSculpture Room\u201d\n[|NorthEast|] \u201cArts in general Room\u201d\n[|Exit||||||] \u201cFine Arts Building\u201d Front Porch",
      "interactables": {},
      "items": {},
      "exits": {
        "N": {
          "displayName": "Exit",
          "destination": "N"
        },
        "N-NA": {
          "displayName": "South",
          "destination": "N-NA"
        },
        "N-N": {
          "displayName": "North",
          "destination": "N-N"
        },
        "N-NK": {
          "displayName": "East",
          "destination": "N-NK"
        },
        "N-ND": {
          "displayName": "West",
          "destination": "N-ND"
        },
        "N-NC": {
          "displayName": "SouthEast",
          "destination": "N-NC"
        },
        "N-NE": {
          "displayName": "NorthWest",
          "destination": "N-NE"
        },
        "N-NB": {
          "displayName": "SouthWest",
          "destination": "N-NB"
        },
        "N-NX": {
          "displayName": "NorthEast",
          "destination": "N-NX"
        }
      }
    },
    "P": {
      "firstVisit": true,
      "displayName": "\u201cLanguage and Literature Building\u201d Front Porch",
      "description": "This is a small, one story tall, octagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cLanguage and Literature\u201d engraved.\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
      "interactables": {},
      "items": {},
      "exits": {
        "MAIN": {
          "displayName": "Main",
          "destination": "MAIN"
        },
        "Building": {
          "displayName": "Enter",
          "destination": "building_P"
        }
      }
    },
    "building_P-PZ": {
      "firstVisit": true,
      "displayName": "Fiction and juvenile belles lettres",
      "description": "Description for \u201cFiction and juvenile belles lettres Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_P"
        }
      }
    },
    "building_P-PR": {
      "firstVisit": true,
      "displayName": "English",
      "description": "Description for \u201cEnglish Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_P"
        }
      }
    },
    "building_P-PS": {
      "firstVisit": true,
      "displayName": "American literature",
      "description": "Description for \u201cAmerican literature Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_P"
        }
      }
    },
    "building_P-PQ": {
      "firstVisit": true,
      "displayName": "French literature",
      "description": "Description for \u201cFrench literature Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_P"
        }
      }
    },
    "building_P-PE": {
      "firstVisit": true,
      "displayName": "English",
      "description": "Description for \u201cEnglish Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_P"
        }
      }
    },
    "building_P-PN": {
      "firstVisit": true,
      "displayName": "Literature (General)",
      "description": "Description for \u201cLiterature (General) Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_P"
        }
      }
    },
    "building_P-PT": {
      "firstVisit": true,
      "displayName": "German literature",
      "description": "Description for \u201cGerman literature Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_P"
        }
      }
    },
    "building_P-PA": {
      "firstVisit": true,
      "displayName": "Greek literature",
      "description": "Description for \u201cGreek literature Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_P"
        }
      }
    },
    "building_P": {
      "firstVisit": true,
      "displayName": "\u201cLanguage and Literature Building\u201d Main Lobby",
      "description": "There are 19 rooms throughout this building in 3 floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] \u201cFiction and juvenile belles lettres Room\u201d\n[|North|||||] \u201cEnglish Room\u201d\n[|East||||||] \u201cAmerican literature Room\u201d\n[|West||||||] \u201cFrench literature Room\u201d\n[|SouthEast|] \u201cEnglish Room\u201d\n[|NorthWest|] \u201cLiterature (General) Room\u201d\n[|SouthWest|] \u201cGerman literature Room\u201d\n[|NorthEast|] \u201cGreek literature Room\u201d\n[|Up||||||||] 2nd floor\n[|Exit||||||] \u201cLanguage and Literature Building\u201d Front Porch",
      "interactables": {},
      "items": {},
      "exits": {
        "P": {
          "displayName": "Exit",
          "destination": "P"
        },
        "up": {
          "displayName": "Up",
          "destination": "2_building_P"
        },
        "P-PZ": {
          "displayName": "South",
          "destination": "P-PZ"
        },
        "P-PR": {
          "displayName": "North",
          "destination": "P-PR"
        },
        "P-PS": {
          "displayName": "East",
          "destination": "P-PS"
        },
        "P-PQ": {
          "displayName": "West",
          "destination": "P-PQ"
        },
        "P-PE": {
          "displayName": "SouthEast",
          "destination": "P-PE"
        },
        "P-PN": {
          "displayName": "NorthWest",
          "destination": "P-PN"
        },
        "P-PT": {
          "displayName": "SouthWest",
          "destination": "P-PT"
        },
        "P-PA": {
          "displayName": "NorthEast",
          "destination": "P-PA"
        }
      }
    },
    "building_P-PC": {
      "firstVisit": true,
      "displayName": "Romance",
      "description": "Description for \u201cRomance Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_P"
        }
      }
    },
    "building_P-PK": {
      "firstVisit": true,
      "displayName": "Indo-Iranian philology and literature",
      "description": "Description for \u201cIndo-Iranian philology and literature Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_P"
        }
      }
    },
    "building_P-P": {
      "firstVisit": true,
      "displayName": "Philology.    Linguistics",
      "description": "Description for \u201cPhilology.    Linguistics Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_P"
        }
      }
    },
    "building_P-PF": {
      "firstVisit": true,
      "displayName": "West Germanic",
      "description": "Description for \u201cWest Germanic Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_P"
        }
      }
    },
    "building_P-PJ": {
      "firstVisit": true,
      "displayName": "Oriental philology and literature",
      "description": "Description for \u201cOriental philology and literature Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_P"
        }
      }
    },
    "building_P-PD": {
      "firstVisit": true,
      "displayName": "Germanic",
      "description": "Description for \u201cGermanic Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_P"
        }
      }
    },
    "building_P-PG": {
      "firstVisit": true,
      "displayName": "Slavic.    Baltic.    Albanian",
      "description": "Description for \u201cSlavic.    Baltic.    Albanian Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_P"
        }
      }
    },
    "building_P-PH": {
      "firstVisit": true,
      "displayName": "Uralic.    Basque",
      "description": "Description for \u201cUralic.    Basque Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_P"
        }
      }
    },
    "2_building_P": {
      "firstVisit": true,
      "displayName": "\u201cLanguage and Literature Building\u201d, 2nd Floor",
      "description": "You are in the 2nd floor. There are 8 rooms:\n\n[|South|||||] \u201cRomance Room\u201d\n[|North|||||] \u201cIndo-Iranian philology and literature Room\u201d\n[|East||||||] \u201cPhilology.    Linguistics Room\u201d\n[|West||||||] \u201cWest Germanic Room\u201d\n[|SouthEast|] \u201cOriental philology and literature Room\u201d\n[|NorthWest|] \u201cGermanic Room\u201d\n[|SouthWest|] \u201cSlavic.    Baltic.    Albanian Room\u201d\n[|NorthEast|] \u201cUralic.    Basque Room\u201d\n[|Down||||||] 1st floor\n[|Up||||||||] 3rd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_P-PC": {
          "displayName": "South",
          "destination": "building_P-PC"
        },
        "building_P-PK": {
          "displayName": "North",
          "destination": "building_P-PK"
        },
        "building_P-P": {
          "displayName": "East",
          "destination": "building_P-P"
        },
        "building_P-PF": {
          "displayName": "West",
          "destination": "building_P-PF"
        },
        "building_P-PJ": {
          "displayName": "SouthEast",
          "destination": "building_P-PJ"
        },
        "building_P-PD": {
          "displayName": "NorthWest",
          "destination": "building_P-PD"
        },
        "building_P-PG": {
          "displayName": "SouthWest",
          "destination": "building_P-PG"
        },
        "building_P-PH": {
          "displayName": "NorthEast",
          "destination": "building_P-PH"
        },
        "down": {
          "displayName": "Down",
          "destination": "building_P"
        },
        "up": {
          "displayName": "Up",
          "destination": "3_building_P"
        }
      }
    },
    "building_P-PL": {
      "firstVisit": true,
      "displayName": "Languages of Eastern Asia, Africa, Oceania",
      "description": "Description for \u201cLanguages of Eastern Asia, Africa, Oceania Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_building_P"
        }
      }
    },
    "building_P-PB": {
      "firstVisit": true,
      "displayName": "Modern languages.    Celtic languages",
      "description": "Description for \u201cModern languages.    Celtic languages Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_building_P"
        }
      }
    },
    "building_P-PM": {
      "firstVisit": true,
      "displayName": "Hyperborean, Indian, and artificial languages",
      "description": "Description for \u201cHyperborean, Indian, and artificial languages Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_building_P"
        }
      }
    },
    "3_building_P": {
      "firstVisit": true,
      "displayName": "\u201cLanguage and Literature Building\u201d, 3rd Floor",
      "description": "You are in the 3rd floor. There are 3 rooms:\n\n[|South|||||] \u201cLanguages of Eastern Asia, Africa, Oceania Room\u201d\n[|North|||||] \u201cModern languages.    Celtic languages Room\u201d\n[|East||||||] \u201cHyperborean, Indian, and artificial languages Room\u201d\n[|Down||||||] 2nd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_P-PL": {
          "displayName": "South",
          "destination": "building_P-PL"
        },
        "building_P-PB": {
          "displayName": "North",
          "destination": "building_P-PB"
        },
        "building_P-PM": {
          "displayName": "East",
          "destination": "building_P-PM"
        },
        "down": {
          "displayName": "Down",
          "destination": "2_building_P"
        }
      }
    },
    "Q": {
      "firstVisit": true,
      "displayName": "\u201cScience Building\u201d Front Porch",
      "description": "This is a small, one story tall, octagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cScience\u201d engraved.\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
      "interactables": {},
      "items": {},
      "exits": {
        "MAIN": {
          "displayName": "Main",
          "destination": "MAIN"
        },
        "Building": {
          "displayName": "Enter",
          "destination": "building_Q"
        }
      }
    },
    "building_Q-QR": {
      "firstVisit": true,
      "displayName": "Microbiology",
      "description": "Description for \u201cMicrobiology Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_Q"
        }
      }
    },
    "building_Q-QK": {
      "firstVisit": true,
      "displayName": "Botany",
      "description": "Description for \u201cBotany Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_Q"
        }
      }
    },
    "building_Q-QL": {
      "firstVisit": true,
      "displayName": "Zoology",
      "description": "Description for \u201cZoology Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_Q"
        }
      }
    },
    "building_Q-QB": {
      "firstVisit": true,
      "displayName": "Astronomy",
      "description": "Description for \u201cAstronomy Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_Q"
        }
      }
    },
    "building_Q-QA": {
      "firstVisit": true,
      "displayName": "Mathematics",
      "description": "Description for \u201cMathematics Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_Q"
        }
      }
    },
    "building_Q-Q": {
      "firstVisit": true,
      "displayName": "Science (General)",
      "description": "Description for \u201cScience (General) Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_Q"
        }
      }
    },
    "building_Q-QP": {
      "firstVisit": true,
      "displayName": "Physiology",
      "description": "Description for \u201cPhysiology Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_Q"
        }
      }
    },
    "building_Q-QH": {
      "firstVisit": true,
      "displayName": "Biology (General)",
      "description": "Description for \u201cBiology (General) Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_Q"
        }
      }
    },
    "building_Q": {
      "firstVisit": true,
      "displayName": "\u201cScience Building\u201d Main Lobby",
      "description": "There are 12 rooms throughout this building in 2 floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] \u201cMicrobiology Room\u201d\n[|North|||||] \u201cBotany Room\u201d\n[|East||||||] \u201cZoology Room\u201d\n[|West||||||] \u201cAstronomy Room\u201d\n[|SouthEast|] \u201cMathematics Room\u201d\n[|NorthWest|] \u201cScience (General) Room\u201d\n[|SouthWest|] \u201cPhysiology Room\u201d\n[|NorthEast|] \u201cBiology (General) Room\u201d\n[|Up||||||||] 2nd floor\n[|Exit||||||] \u201cScience Building\u201d Front Porch",
      "interactables": {},
      "items": {},
      "exits": {
        "Q": {
          "displayName": "Exit",
          "destination": "Q"
        },
        "up": {
          "displayName": "Up",
          "destination": "2_building_Q"
        },
        "Q-QR": {
          "displayName": "South",
          "destination": "Q-QR"
        },
        "Q-QK": {
          "displayName": "North",
          "destination": "Q-QK"
        },
        "Q-QL": {
          "displayName": "East",
          "destination": "Q-QL"
        },
        "Q-QB": {
          "displayName": "West",
          "destination": "Q-QB"
        },
        "Q-QA": {
          "displayName": "SouthEast",
          "destination": "Q-QA"
        },
        "Q-Q": {
          "displayName": "NorthWest",
          "destination": "Q-Q"
        },
        "Q-QP": {
          "displayName": "SouthWest",
          "destination": "Q-QP"
        },
        "Q-QH": {
          "displayName": "NorthEast",
          "destination": "Q-QH"
        }
      }
    },
    "building_Q-QD": {
      "firstVisit": true,
      "displayName": "Chemistry",
      "description": "Description for \u201cChemistry Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_Q"
        }
      }
    },
    "building_Q-QE": {
      "firstVisit": true,
      "displayName": "Geology",
      "description": "Description for \u201cGeology Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_Q"
        }
      }
    },
    "building_Q-QC": {
      "firstVisit": true,
      "displayName": "Physics",
      "description": "Description for \u201cPhysics Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_Q"
        }
      }
    },
    "building_Q-QM": {
      "firstVisit": true,
      "displayName": "Human anatomy",
      "description": "Description for \u201cHuman anatomy Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_Q"
        }
      }
    },
    "2_building_Q": {
      "firstVisit": true,
      "displayName": "\u201cScience Building\u201d, 2nd Floor",
      "description": "You are in the 2nd floor. There are 4 rooms:\n\n[|South|||||] \u201cChemistry Room\u201d\n[|North|||||] \u201cGeology Room\u201d\n[|East||||||] \u201cPhysics Room\u201d\n[|West||||||] \u201cHuman anatomy Room\u201d\n[|Down||||||] 1st floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_Q-QD": {
          "displayName": "South",
          "destination": "building_Q-QD"
        },
        "building_Q-QE": {
          "displayName": "North",
          "destination": "building_Q-QE"
        },
        "building_Q-QC": {
          "displayName": "East",
          "destination": "building_Q-QC"
        },
        "building_Q-QM": {
          "displayName": "West",
          "destination": "building_Q-QM"
        },
        "down": {
          "displayName": "Down",
          "destination": "building_Q"
        }
      }
    },
    "R": {
      "firstVisit": true,
      "displayName": "\u201cMedicine Building\u201d Front Porch",
      "description": "This is a small, one story tall, octagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cMedicine\u201d engraved.\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
      "interactables": {},
      "items": {},
      "exits": {
        "MAIN": {
          "displayName": "Main",
          "destination": "MAIN"
        },
        "Building": {
          "displayName": "Enter",
          "destination": "building_R"
        }
      }
    },
    "building_R-RX": {
      "firstVisit": true,
      "displayName": "Homeopathy",
      "description": "Description for \u201cHomeopathy Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_R"
        }
      }
    },
    "building_R-RA": {
      "firstVisit": true,
      "displayName": "Public aspects of medicine",
      "description": "Description for \u201cPublic aspects of medicine Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_R"
        }
      }
    },
    "building_R-RD": {
      "firstVisit": true,
      "displayName": "Surgery",
      "description": "Description for \u201cSurgery Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_R"
        }
      }
    },
    "building_R-RE": {
      "firstVisit": true,
      "displayName": "Ophthalmology",
      "description": "Description for \u201cOphthalmology Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_R"
        }
      }
    },
    "building_R-RC": {
      "firstVisit": true,
      "displayName": "Internal medicine",
      "description": "Description for \u201cInternal medicine Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_R"
        }
      }
    },
    "building_R-RG": {
      "firstVisit": true,
      "displayName": "Gynecology and obstetrics",
      "description": "Description for \u201cGynecology and obstetrics Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_R"
        }
      }
    },
    "building_R-RK": {
      "firstVisit": true,
      "displayName": "Dentistry",
      "description": "Description for \u201cDentistry Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_R"
        }
      }
    },
    "building_R-RJ": {
      "firstVisit": true,
      "displayName": "Pediatrics",
      "description": "Description for \u201cPediatrics Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_R"
        }
      }
    },
    "building_R": {
      "firstVisit": true,
      "displayName": "\u201cMedicine Building\u201d Main Lobby",
      "description": "There are 17 rooms throughout this building in 3 floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] \u201cHomeopathy Room\u201d\n[|North|||||] \u201cPublic aspects of medicine Room\u201d\n[|East||||||] \u201cSurgery Room\u201d\n[|West||||||] \u201cOphthalmology Room\u201d\n[|SouthEast|] \u201cInternal medicine Room\u201d\n[|NorthWest|] \u201cGynecology and obstetrics Room\u201d\n[|SouthWest|] \u201cDentistry Room\u201d\n[|NorthEast|] \u201cPediatrics Room\u201d\n[|Up||||||||] 2nd floor\n[|Exit||||||] \u201cMedicine Building\u201d Front Porch",
      "interactables": {},
      "items": {},
      "exits": {
        "R": {
          "displayName": "Exit",
          "destination": "R"
        },
        "up": {
          "displayName": "Up",
          "destination": "2_building_R"
        },
        "R-RX": {
          "displayName": "South",
          "destination": "R-RX"
        },
        "R-RA": {
          "displayName": "North",
          "destination": "R-RA"
        },
        "R-RD": {
          "displayName": "East",
          "destination": "R-RD"
        },
        "R-RE": {
          "displayName": "West",
          "destination": "R-RE"
        },
        "R-RC": {
          "displayName": "SouthEast",
          "destination": "R-RC"
        },
        "R-RG": {
          "displayName": "NorthWest",
          "destination": "R-RG"
        },
        "R-RK": {
          "displayName": "SouthWest",
          "destination": "R-RK"
        },
        "R-RJ": {
          "displayName": "NorthEast",
          "destination": "R-RJ"
        }
      }
    },
    "building_R-RL": {
      "firstVisit": true,
      "displayName": "Dermatology",
      "description": "Description for \u201cDermatology Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_R"
        }
      }
    },
    "building_R-RS": {
      "firstVisit": true,
      "displayName": "Pharmacy and materia medica",
      "description": "Description for \u201cPharmacy and materia medica Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_R"
        }
      }
    },
    "building_R-RM": {
      "firstVisit": true,
      "displayName": "Therapeutics.    Pharmacology",
      "description": "Description for \u201cTherapeutics.    Pharmacology Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_R"
        }
      }
    },
    "building_R-R": {
      "firstVisit": true,
      "displayName": "Medicine (General)",
      "description": "Description for \u201cMedicine (General) Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_R"
        }
      }
    },
    "building_R-RB": {
      "firstVisit": true,
      "displayName": "Pathology",
      "description": "Description for \u201cPathology Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_R"
        }
      }
    },
    "building_R-RF": {
      "firstVisit": true,
      "displayName": "Otorhinolaryngology",
      "description": "Description for \u201cOtorhinolaryngology Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_R"
        }
      }
    },
    "building_R-RZ": {
      "firstVisit": true,
      "displayName": "Other systems of medicine",
      "description": "Description for \u201cOther systems of medicine Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_R"
        }
      }
    },
    "building_R-RT": {
      "firstVisit": true,
      "displayName": "Nursing",
      "description": "Description for \u201cNursing Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_R"
        }
      }
    },
    "2_building_R": {
      "firstVisit": true,
      "displayName": "\u201cMedicine Building\u201d, 2nd Floor",
      "description": "You are in the 2nd floor. There are 8 rooms:\n\n[|South|||||] \u201cDermatology Room\u201d\n[|North|||||] \u201cPharmacy and materia medica Room\u201d\n[|East||||||] \u201cTherapeutics.    Pharmacology Room\u201d\n[|West||||||] \u201cMedicine (General) Room\u201d\n[|SouthEast|] \u201cPathology Room\u201d\n[|NorthWest|] \u201cOtorhinolaryngology Room\u201d\n[|SouthWest|] \u201cOther systems of medicine Room\u201d\n[|NorthEast|] \u201cNursing Room\u201d\n[|Down||||||] 1st floor\n[|Up||||||||] 3rd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_R-RL": {
          "displayName": "South",
          "destination": "building_R-RL"
        },
        "building_R-RS": {
          "displayName": "North",
          "destination": "building_R-RS"
        },
        "building_R-RM": {
          "displayName": "East",
          "destination": "building_R-RM"
        },
        "building_R-R": {
          "displayName": "West",
          "destination": "building_R-R"
        },
        "building_R-RB": {
          "displayName": "SouthEast",
          "destination": "building_R-RB"
        },
        "building_R-RF": {
          "displayName": "NorthWest",
          "destination": "building_R-RF"
        },
        "building_R-RZ": {
          "displayName": "SouthWest",
          "destination": "building_R-RZ"
        },
        "building_R-RT": {
          "displayName": "NorthEast",
          "destination": "building_R-RT"
        },
        "down": {
          "displayName": "Down",
          "destination": "building_R"
        },
        "up": {
          "displayName": "Up",
          "destination": "3_building_R"
        }
      }
    },
    "building_R-RV": {
      "firstVisit": true,
      "displayName": "Botanic, Thomsonian, and eclectic medicine",
      "description": "Description for \u201cBotanic, Thomsonian, and eclectic medicine Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_building_R"
        }
      }
    },
    "3_building_R": {
      "firstVisit": true,
      "displayName": "\u201cMedicine Building\u201d, 3rd Floor",
      "description": "You are in the 3rd floor. There is 1 room:\n\n[|South|||||] \u201cBotanic, Thomsonian, and eclectic medicine Room\u201d\n[|Down||||||] 2nd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_R-RV": {
          "displayName": "South",
          "destination": "building_R-RV"
        },
        "down": {
          "displayName": "Down",
          "destination": "2_building_R"
        }
      }
    },
    "S": {
      "firstVisit": true,
      "displayName": "\u201cAgriculture Building\u201d Front Porch",
      "description": "This is a small, one story tall, octagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cAgriculture\u201d engraved.\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
      "interactables": {},
      "items": {},
      "exits": {
        "MAIN": {
          "displayName": "Main",
          "destination": "MAIN"
        },
        "Building": {
          "displayName": "Enter",
          "destination": "building_S"
        }
      }
    },
    "building_S-SF": {
      "firstVisit": true,
      "displayName": "Animal culture",
      "description": "Description for \u201cAnimal culture Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_S"
        }
      }
    },
    "building_S-S": {
      "firstVisit": true,
      "displayName": "Agriculture (General)",
      "description": "Description for \u201cAgriculture (General) Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_S"
        }
      }
    },
    "building_S-SH": {
      "firstVisit": true,
      "displayName": "Aquaculture.    Fisheries.    Angling",
      "description": "Description for \u201cAquaculture.    Fisheries.    Angling Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_S"
        }
      }
    },
    "building_S-SB": {
      "firstVisit": true,
      "displayName": "Plant culture",
      "description": "Description for \u201cPlant culture Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_S"
        }
      }
    },
    "building_S-SK": {
      "firstVisit": true,
      "displayName": "Hunting sports",
      "description": "Description for \u201cHunting sports Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_S"
        }
      }
    },
    "building_S-SD": {
      "firstVisit": true,
      "displayName": "Forestry",
      "description": "Description for \u201cForestry Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_S"
        }
      }
    },
    "building_S": {
      "firstVisit": true,
      "displayName": "\u201cAgriculture Building\u201d Main Lobby",
      "description": "There are 6 rooms throughout this building. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] \u201cAnimal culture Room\u201d\n[|North|||||] \u201cAgriculture (General) Room\u201d\n[|East||||||] \u201cAquaculture.    Fisheries.    Angling Room\u201d\n[|West||||||] \u201cPlant culture Room\u201d\n[|SouthEast|] \u201cHunting sports Room\u201d\n[|NorthWest|] \u201cForestry Room\u201d\n[|Exit||||||] \u201cAgriculture Building\u201d Front Porch",
      "interactables": {},
      "items": {},
      "exits": {
        "S": {
          "displayName": "Exit",
          "destination": "S"
        },
        "S-SF": {
          "displayName": "South",
          "destination": "S-SF"
        },
        "S-S": {
          "displayName": "North",
          "destination": "S-S"
        },
        "S-SH": {
          "displayName": "East",
          "destination": "S-SH"
        },
        "S-SB": {
          "displayName": "West",
          "destination": "S-SB"
        },
        "S-SK": {
          "displayName": "SouthEast",
          "destination": "S-SK"
        },
        "S-SD": {
          "displayName": "NorthWest",
          "destination": "S-SD"
        }
      }
    },
    "T": {
      "firstVisit": true,
      "displayName": "\u201cTechnology Building\u201d Front Porch",
      "description": "This is a small, one story tall, octagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cTechnology\u201d engraved.\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
      "interactables": {},
      "items": {},
      "exits": {
        "MAIN": {
          "displayName": "Main",
          "destination": "MAIN"
        },
        "Building": {
          "displayName": "Enter",
          "destination": "building_T"
        }
      }
    },
    "building_T-TN": {
      "firstVisit": true,
      "displayName": "Mining engineering.    Metallurgy",
      "description": "Description for \u201cMining engineering.    Metallurgy Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_T"
        }
      }
    },
    "building_T-TR": {
      "firstVisit": true,
      "displayName": "Photography",
      "description": "Description for \u201cPhotography Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_T"
        }
      }
    },
    "building_T-TC": {
      "firstVisit": true,
      "displayName": "Hydraulic engineering",
      "description": "Description for \u201cHydraulic engineering Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_T"
        }
      }
    },
    "building_T-TD": {
      "firstVisit": true,
      "displayName": "Environmental technology.    Sanitary engineering",
      "description": "Description for \u201cEnvironmental technology.    Sanitary engineering Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_T"
        }
      }
    },
    "building_T-TX": {
      "firstVisit": true,
      "displayName": "Home economics",
      "description": "Description for \u201cHome economics Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_T"
        }
      }
    },
    "building_T-TP": {
      "firstVisit": true,
      "displayName": "Chemical technology",
      "description": "Description for \u201cChemical technology Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_T"
        }
      }
    },
    "building_T-TK": {
      "firstVisit": true,
      "displayName": "Electrical engineering.    Electronics.    Nuclear",
      "description": "Description for \u201cElectrical engineering.    Electronics.    Nuclear Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_T"
        }
      }
    },
    "building_T-TA": {
      "firstVisit": true,
      "displayName": "Engineering (General).    Civil engineering (General)",
      "description": "Description for \u201cEngineering (General).    Civil engineering (General) Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_T"
        }
      }
    },
    "building_T": {
      "firstVisit": true,
      "displayName": "\u201cTechnology Building\u201d Main Lobby",
      "description": "There are 17 rooms throughout this building in 3 floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] \u201cMining engineering.    Metallurgy Room\u201d\n[|North|||||] \u201cPhotography Room\u201d\n[|East||||||] \u201cHydraulic engineering Room\u201d\n[|West||||||] \u201cEnvironmental technology.    Sanitary engineering Room\u201d\n[|SouthEast|] \u201cHome economics Room\u201d\n[|NorthWest|] \u201cChemical technology Room\u201d\n[|SouthWest|] \u201cElectrical engineering.    Electronics.    Nuclear Room\u201d\n[|NorthEast|] \u201cEngineering (General).    Civil engineering (General) Room\u201d\n[|Up||||||||] 2nd floor\n[|Exit||||||] \u201cTechnology Building\u201d Front Porch",
      "interactables": {},
      "items": {},
      "exits": {
        "T": {
          "displayName": "Exit",
          "destination": "T"
        },
        "up": {
          "displayName": "Up",
          "destination": "2_building_T"
        },
        "T-TN": {
          "displayName": "South",
          "destination": "T-TN"
        },
        "T-TR": {
          "displayName": "North",
          "destination": "T-TR"
        },
        "T-TC": {
          "displayName": "East",
          "destination": "T-TC"
        },
        "T-TD": {
          "displayName": "West",
          "destination": "T-TD"
        },
        "T-TX": {
          "displayName": "SouthEast",
          "destination": "T-TX"
        },
        "T-TP": {
          "displayName": "NorthWest",
          "destination": "T-TP"
        },
        "T-TK": {
          "displayName": "SouthWest",
          "destination": "T-TK"
        },
        "T-TA": {
          "displayName": "NorthEast",
          "destination": "T-TA"
        }
      }
    },
    "building_T-TS": {
      "firstVisit": true,
      "displayName": "Manufactures",
      "description": "Description for \u201cManufactures Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_T"
        }
      }
    },
    "building_T-TJ": {
      "firstVisit": true,
      "displayName": "Mechanical engineering and machinery",
      "description": "Description for \u201cMechanical engineering and machinery Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_T"
        }
      }
    },
    "building_T-TT": {
      "firstVisit": true,
      "displayName": "Handicrafts.    Arts and crafts",
      "description": "Description for \u201cHandicrafts.    Arts and crafts Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_T"
        }
      }
    },
    "building_T-T": {
      "firstVisit": true,
      "displayName": "Technology (General)",
      "description": "Description for \u201cTechnology (General) Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_T"
        }
      }
    },
    "building_T-TH": {
      "firstVisit": true,
      "displayName": "Building construction",
      "description": "Description for \u201cBuilding construction Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_T"
        }
      }
    },
    "building_T-TF": {
      "firstVisit": true,
      "displayName": "Railroad engineering and operation",
      "description": "Description for \u201cRailroad engineering and operation Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_T"
        }
      }
    },
    "building_T-TL": {
      "firstVisit": true,
      "displayName": "Motor vehicles.    Aeronautics.    Astronautics",
      "description": "Description for \u201cMotor vehicles.    Aeronautics.    Astronautics Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_T"
        }
      }
    },
    "building_T-TG": {
      "firstVisit": true,
      "displayName": "Bridge engineering",
      "description": "Description for \u201cBridge engineering Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_T"
        }
      }
    },
    "2_building_T": {
      "firstVisit": true,
      "displayName": "\u201cTechnology Building\u201d, 2nd Floor",
      "description": "You are in the 2nd floor. There are 8 rooms:\n\n[|South|||||] \u201cManufactures Room\u201d\n[|North|||||] \u201cMechanical engineering and machinery Room\u201d\n[|East||||||] \u201cHandicrafts.    Arts and crafts Room\u201d\n[|West||||||] \u201cTechnology (General) Room\u201d\n[|SouthEast|] \u201cBuilding construction Room\u201d\n[|NorthWest|] \u201cRailroad engineering and operation Room\u201d\n[|SouthWest|] \u201cMotor vehicles.    Aeronautics.    Astronautics Room\u201d\n[|NorthEast|] \u201cBridge engineering Room\u201d\n[|Down||||||] 1st floor\n[|Up||||||||] 3rd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_T-TS": {
          "displayName": "South",
          "destination": "building_T-TS"
        },
        "building_T-TJ": {
          "displayName": "North",
          "destination": "building_T-TJ"
        },
        "building_T-TT": {
          "displayName": "East",
          "destination": "building_T-TT"
        },
        "building_T-T": {
          "displayName": "West",
          "destination": "building_T-T"
        },
        "building_T-TH": {
          "displayName": "SouthEast",
          "destination": "building_T-TH"
        },
        "building_T-TF": {
          "displayName": "NorthWest",
          "destination": "building_T-TF"
        },
        "building_T-TL": {
          "displayName": "SouthWest",
          "destination": "building_T-TL"
        },
        "building_T-TG": {
          "displayName": "NorthEast",
          "destination": "building_T-TG"
        },
        "down": {
          "displayName": "Down",
          "destination": "building_T"
        },
        "up": {
          "displayName": "Up",
          "destination": "3_building_T"
        }
      }
    },
    "building_T-TE": {
      "firstVisit": true,
      "displayName": "Highway engineering.    Roads and pavements",
      "description": "Description for \u201cHighway engineering.    Roads and pavements Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_building_T"
        }
      }
    },
    "3_building_T": {
      "firstVisit": true,
      "displayName": "\u201cTechnology Building\u201d, 3rd Floor",
      "description": "You are in the 3rd floor. There is 1 room:\n\n[|South|||||] \u201cHighway engineering.    Roads and pavements Room\u201d\n[|Down||||||] 2nd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_T-TE": {
          "displayName": "South",
          "destination": "building_T-TE"
        },
        "down": {
          "displayName": "Down",
          "destination": "2_building_T"
        }
      }
    },
    "U": {
      "firstVisit": true,
      "displayName": "\u201cMilitary Science Building\u201d Front Porch",
      "description": "This is a small, one story tall, octagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cMilitary Science\u201d engraved.\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
      "interactables": {},
      "items": {},
      "exits": {
        "MAIN": {
          "displayName": "Main",
          "destination": "MAIN"
        },
        "Building": {
          "displayName": "Enter",
          "destination": "building_U"
        }
      }
    },
    "building_U-U": {
      "firstVisit": true,
      "displayName": "Military science (General)",
      "description": "Description for \u201cMilitary science (General) Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_U"
        }
      }
    },
    "building_U-UG": {
      "firstVisit": true,
      "displayName": "Air forces.    Air warfare",
      "description": "Description for \u201cAir forces.    Air warfare Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_U"
        }
      }
    },
    "building_U-UA": {
      "firstVisit": true,
      "displayName": "Armies: Organization, distribution, military situation",
      "description": "Description for \u201cArmies: Organization, distribution, military situation Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_U"
        }
      }
    },
    "building_U-UB": {
      "firstVisit": true,
      "displayName": "Military administration",
      "description": "Description for \u201cMilitary administration Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_U"
        }
      }
    },
    "building_U-UD": {
      "firstVisit": true,
      "displayName": "Infantry",
      "description": "Description for \u201cInfantry Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_U"
        }
      }
    },
    "building_U-UF": {
      "firstVisit": true,
      "displayName": "Artillery",
      "description": "Description for \u201cArtillery Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_U"
        }
      }
    },
    "building_U-UC": {
      "firstVisit": true,
      "displayName": "Maintenance and transportation",
      "description": "Description for \u201cMaintenance and transportation Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_U"
        }
      }
    },
    "building_U-UH": {
      "firstVisit": true,
      "displayName": "Other services",
      "description": "Description for \u201cOther services Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_U"
        }
      }
    },
    "building_U": {
      "firstVisit": true,
      "displayName": "\u201cMilitary Science Building\u201d Main Lobby",
      "description": "There are 9 rooms throughout this building in 2 floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] \u201cMilitary science (General) Room\u201d\n[|North|||||] \u201cAir forces.    Air warfare Room\u201d\n[|East||||||] \u201cArmies: Organization, distribution, military situation Room\u201d\n[|West||||||] \u201cMilitary administration Room\u201d\n[|SouthEast|] \u201cInfantry Room\u201d\n[|NorthWest|] \u201cArtillery Room\u201d\n[|SouthWest|] \u201cMaintenance and transportation Room\u201d\n[|NorthEast|] \u201cOther services Room\u201d\n[|Up||||||||] 2nd floor\n[|Exit||||||] \u201cMilitary Science Building\u201d Front Porch",
      "interactables": {},
      "items": {},
      "exits": {
        "U": {
          "displayName": "Exit",
          "destination": "U"
        },
        "up": {
          "displayName": "Up",
          "destination": "2_building_U"
        },
        "U-U": {
          "displayName": "South",
          "destination": "U-U"
        },
        "U-UG": {
          "displayName": "North",
          "destination": "U-UG"
        },
        "U-UA": {
          "displayName": "East",
          "destination": "U-UA"
        },
        "U-UB": {
          "displayName": "West",
          "destination": "U-UB"
        },
        "U-UD": {
          "displayName": "SouthEast",
          "destination": "U-UD"
        },
        "U-UF": {
          "displayName": "NorthWest",
          "destination": "U-UF"
        },
        "U-UC": {
          "displayName": "SouthWest",
          "destination": "U-UC"
        },
        "U-UH": {
          "displayName": "NorthEast",
          "destination": "U-UH"
        }
      }
    },
    "building_U-UE": {
      "firstVisit": true,
      "displayName": "Cavalry.    Armor",
      "description": "Description for \u201cCavalry.    Armor Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_U"
        }
      }
    },
    "2_building_U": {
      "firstVisit": true,
      "displayName": "\u201cMilitary Science Building\u201d, 2nd Floor",
      "description": "You are in the 2nd floor. There is 1 room:\n\n[|South|||||] \u201cCavalry.    Armor Room\u201d\n[|Down||||||] 1st floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_U-UE": {
          "displayName": "South",
          "destination": "building_U-UE"
        },
        "down": {
          "displayName": "Down",
          "destination": "building_U"
        }
      }
    },
    "V": {
      "firstVisit": true,
      "displayName": "\u201cNaval Science Building\u201d Front Porch",
      "description": "This is a small, one story tall, octagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cNaval Science\u201d engraved.\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
      "interactables": {},
      "items": {},
      "exits": {
        "MAIN": {
          "displayName": "Main",
          "destination": "MAIN"
        },
        "Building": {
          "displayName": "Enter",
          "destination": "building_V"
        }
      }
    },
    "building_V-VA": {
      "firstVisit": true,
      "displayName": "Navies: Organization, distribution, naval situation",
      "description": "Description for \u201cNavies: Organization, distribution, naval situation Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_V"
        }
      }
    },
    "building_V-VM": {
      "firstVisit": true,
      "displayName": "Naval architecture.    Shipbuilding.    Marine engineering",
      "description": "Description for \u201cNaval architecture.    Shipbuilding.    Marine engineering Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_V"
        }
      }
    },
    "building_V-VK": {
      "firstVisit": true,
      "displayName": "Navigation.    Merchant marine",
      "description": "Description for \u201cNavigation.    Merchant marine Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_V"
        }
      }
    },
    "building_V-VG": {
      "firstVisit": true,
      "displayName": "Minor services of navies",
      "description": "Description for \u201cMinor services of navies Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_V"
        }
      }
    },
    "building_V-V": {
      "firstVisit": true,
      "displayName": "Naval science (General)",
      "description": "Description for \u201cNaval science (General) Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_V"
        }
      }
    },
    "building_V-VB": {
      "firstVisit": true,
      "displayName": "Naval administration",
      "description": "Description for \u201cNaval administration Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_V"
        }
      }
    },
    "building_V-VE": {
      "firstVisit": true,
      "displayName": "Marines",
      "description": "Description for \u201cMarines Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_V"
        }
      }
    },
    "building_V-VF": {
      "firstVisit": true,
      "displayName": "Naval ordnance",
      "description": "Description for \u201cNaval ordnance Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_V"
        }
      }
    },
    "building_V": {
      "firstVisit": true,
      "displayName": "\u201cNaval Science Building\u201d Main Lobby",
      "description": "There are 10 rooms throughout this building in 2 floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] \u201cNavies: Organization, distribution, naval situation Room\u201d\n[|North|||||] \u201cNaval architecture.    Shipbuilding.    Marine engineering Room\u201d\n[|East||||||] \u201cNavigation.    Merchant marine Room\u201d\n[|West||||||] \u201cMinor services of navies Room\u201d\n[|SouthEast|] \u201cNaval science (General) Room\u201d\n[|NorthWest|] \u201cNaval administration Room\u201d\n[|SouthWest|] \u201cMarines Room\u201d\n[|NorthEast|] \u201cNaval ordnance Room\u201d\n[|Up||||||||] 2nd floor\n[|Exit||||||] \u201cNaval Science Building\u201d Front Porch",
      "interactables": {},
      "items": {},
      "exits": {
        "V": {
          "displayName": "Exit",
          "destination": "V"
        },
        "up": {
          "displayName": "Up",
          "destination": "2_building_V"
        },
        "V-VA": {
          "displayName": "South",
          "destination": "V-VA"
        },
        "V-VM": {
          "displayName": "North",
          "destination": "V-VM"
        },
        "V-VK": {
          "displayName": "East",
          "destination": "V-VK"
        },
        "V-VG": {
          "displayName": "West",
          "destination": "V-VG"
        },
        "V-V": {
          "displayName": "SouthEast",
          "destination": "V-V"
        },
        "V-VB": {
          "displayName": "NorthWest",
          "destination": "V-VB"
        },
        "V-VE": {
          "displayName": "SouthWest",
          "destination": "V-VE"
        },
        "V-VF": {
          "displayName": "NorthEast",
          "destination": "V-VF"
        }
      }
    },
    "building_V-VC": {
      "firstVisit": true,
      "displayName": "Naval maintenance",
      "description": "Description for \u201cNaval maintenance Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_V"
        }
      }
    },
    "building_V-VD": {
      "firstVisit": true,
      "displayName": "Naval personnel",
      "description": "Description for \u201cNaval personnel Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_building_V"
        }
      }
    },
    "2_building_V": {
      "firstVisit": true,
      "displayName": "\u201cNaval Science Building\u201d, 2nd Floor",
      "description": "You are in the 2nd floor. There are 2 rooms:\n\n[|South|||||] \u201cNaval maintenance Room\u201d\n[|North|||||] \u201cNaval personnel Room\u201d\n[|Down||||||] 1st floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_V-VC": {
          "displayName": "South",
          "destination": "building_V-VC"
        },
        "building_V-VD": {
          "displayName": "North",
          "destination": "building_V-VD"
        },
        "down": {
          "displayName": "Down",
          "destination": "building_V"
        }
      }
    },
    "Z": {
      "firstVisit": true,
      "displayName": "\u201cBibliography, Library Science Building\u201d Front Porch",
      "description": "This is a small, one story tall, square-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cBibliography, Library Science\u201d engraved.\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
      "interactables": {},
      "items": {},
      "exits": {
        "MAIN": {
          "displayName": "Main",
          "destination": "MAIN"
        },
        "Building": {
          "displayName": "Enter",
          "destination": "building_Z"
        }
      }
    },
    "building_Z-Z": {
      "firstVisit": true,
      "displayName": "National bibliography",
      "description": "Description for \u201cNational bibliography Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_Z"
        }
      }
    },
    "building_Z-ZA": {
      "firstVisit": true,
      "displayName": "Information resources (General)",
      "description": "Description for \u201cInformation resources (General) Room\u201d. You can exit to the floor foyer.\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "building_Z"
        }
      }
    },
    "building_Z": {
      "firstVisit": true,
      "displayName": "\u201cBibliography, Library Science Building\u201d Main Lobby",
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n\n[|South|||||] \u201cNational bibliography Room\u201d\n[|North|||||] \u201cInformation resources (General) Room\u201d\n[|Exit||||||] \u201cBibliography, Library Science Building\u201d Front Porch",
      "interactables": {},
      "items": {},
      "exits": {
        "Z": {
          "displayName": "Exit",
          "destination": "Z"
        },
        "Z-Z": {
          "displayName": "South",
          "destination": "Z-Z"
        },
        "Z-ZA": {
          "displayName": "North",
          "destination": "Z-ZA"
        }
      }
    }
  }
}

var gameActions = {};

module.exports.gameData = gameData;
module.exports.gameActions = gameActions;

function end() {
  if (gameData.player.lightSource) {
    gameData.map["End"].description = "You found more gold than you can carry.";
  } else {
    gameData.map["End"].description =
      "It is so dark, you can't see anything! You fall down an unseen crevice. Your body is never recovered.";
  }
  gameData.gameOver = true;
}

function useLightSource() {
  gameData.player.lightSource = true;
  return "You click on the light attached to the helmet.";
}
