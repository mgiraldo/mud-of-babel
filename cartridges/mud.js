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
      "description": "You are in an plaza surrounded by 21 buildings conforming Main Library Grounds.\nThe buildings are accessible via their classification code, visible above the main door:\n\n[|A|] General Works Building\n[|B|] Philosophy, Psychology, Religion Building\n[|C|] Auxiliary Sciences of History (General) Building\n[|D|] World History (except American History) Building\n[|E|] American History Building\n[|F|] Local History of the United States and British, Dutch, French, and Latin America Building\n[|G|] Geography, Anthropology, Recreation Building\n[|H|] Social Sciences Building\n[|J|] Political Science Building\n[|K|] Law Building\n[|L|] Education Building\n[|M|] Music Building\n[|N|] Fine Arts Building\n[|P|] Language and Literature Building\n[|Q|] Science Building\n[|R|] Medicine Building\n[|S|] Agriculture Building\n[|T|] Technology Building\n[|U|] Military Science Building\n[|V|] Naval Science Building\n[|Z|] Bibliography, Library Science Building",
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
      "description": "This is a small, one story tall, octagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cGeneral Works\u201d engraved.\n\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
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
      "displayName": "Collections.  Series.  Collected works Room",
      "description": "Description for Collections.  Series.  Collected works Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Encyclopedias Room",
      "description": "Description for Encyclopedias Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Dictionaries and other general reference works Room",
      "description": "Description for Dictionaries and other general reference works Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "History of scholarship and learning.  The humanities Room",
      "description": "Description for History of scholarship and learning.  The humanities Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Museums.  Collectors and collecting Room",
      "description": "Description for Museums.  Collectors and collecting Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Academies and learned societies Room",
      "description": "Description for Academies and learned societies Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Periodicals Room",
      "description": "Description for Periodicals Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Yearbooks.  Almanacs.  Directories Room",
      "description": "Description for Yearbooks.  Almanacs.  Directories Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "General Works Building Main Lobby",
      "description": "There are 10 rooms throughout this building in two floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] Collections.  Series.  Collected works Room\n[|North|||||] Encyclopedias Room\n[|East||||||] Dictionaries and other general reference works Room\n[|West||||||] History of scholarship and learning.  The humanities Room\n[|SouthEast|] Museums.  Collectors and collecting Room\n[|NorthWest|] Academies and learned societies Room\n[|SouthWest|] Periodicals Room\n[|NorthEast|] Yearbooks.  Almanacs.  Directories Room\n[|Up||||||||] 2nd floor\n[|Exit||||||] General Works Building Front Porch",
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
        "building_A-AC": {
          "displayName": "South",
          "destination": "building_A-AC"
        },
        "building_A-AE": {
          "displayName": "North",
          "destination": "building_A-AE"
        },
        "building_A-AG": {
          "displayName": "East",
          "destination": "building_A-AG"
        },
        "building_A-AZ": {
          "displayName": "West",
          "destination": "building_A-AZ"
        },
        "building_A-AM": {
          "displayName": "SouthEast",
          "destination": "building_A-AM"
        },
        "building_A-AS": {
          "displayName": "NorthWest",
          "destination": "building_A-AS"
        },
        "building_A-AP": {
          "displayName": "SouthWest",
          "destination": "building_A-AP"
        },
        "building_A-AY": {
          "displayName": "NorthEast",
          "destination": "building_A-AY"
        }
      }
    },
    "building_A-AI": {
      "firstVisit": true,
      "displayName": "Indexes Room",
      "description": "Description for Indexes Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Newspapers Room",
      "description": "Description for Newspapers Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "General Works Building, 2nd Floor",
      "description": "You are in the 2nd floor. There are two rooms:\n\n[|South|||||] \u201cIndexes Room\u201d\n[|North|||||] \u201cNewspapers Room\u201d\n[|Down||||||] 1st floor",
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
      "description": "This is a small, one story tall, octagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cPhilosophy, Psychology, Religion\u201d engraved.\n\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
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
      "displayName": "Practical Theology Room",
      "description": "Description for Practical Theology Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Ethics Room",
      "description": "Description for Ethics Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Christian Denominations Room",
      "description": "Description for Christian Denominations Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Psychology Room",
      "description": "Description for Psychology Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "The Bible Room",
      "description": "Description for The Bible Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Doctrinal Theology Room",
      "description": "Description for Doctrinal Theology Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Philosophy (General) Room",
      "description": "Description for Philosophy (General) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Christianity Room",
      "description": "Description for Christianity Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Philosophy, Psychology, Religion Building Main Lobby",
      "description": "There are 15 rooms throughout this building in two floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] Practical Theology Room\n[|North|||||] Ethics Room\n[|East||||||] Christian Denominations Room\n[|West||||||] Psychology Room\n[|SouthEast|] The Bible Room\n[|NorthWest|] Doctrinal Theology Room\n[|SouthWest|] Philosophy (General) Room\n[|NorthEast|] Christianity Room\n[|Up||||||||] 2nd floor\n[|Exit||||||] Philosophy, Psychology, Religion Building Front Porch",
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
        "building_B-BV": {
          "displayName": "South",
          "destination": "building_B-BV"
        },
        "building_B-BJ": {
          "displayName": "North",
          "destination": "building_B-BJ"
        },
        "building_B-BX": {
          "displayName": "East",
          "destination": "building_B-BX"
        },
        "building_B-BF": {
          "displayName": "West",
          "destination": "building_B-BF"
        },
        "building_B-BS": {
          "displayName": "SouthEast",
          "destination": "building_B-BS"
        },
        "building_B-BT": {
          "displayName": "NorthWest",
          "destination": "building_B-BT"
        },
        "building_B-B": {
          "displayName": "SouthWest",
          "destination": "building_B-B"
        },
        "building_B-BR": {
          "displayName": "NorthEast",
          "destination": "building_B-BR"
        }
      }
    },
    "building_B-BL": {
      "firstVisit": true,
      "displayName": "Religions.  Mythology.  Rationalism Room",
      "description": "Description for Religions.  Mythology.  Rationalism Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Islam.  Bahai Faith.  Theosophy, etc. Room",
      "description": "Description for Islam.  Bahai Faith.  Theosophy, etc. Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Judaism Room",
      "description": "Description for Judaism Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Logic Room",
      "description": "Description for Logic Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Buddhism Room",
      "description": "Description for Buddhism Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Speculative philosophy Room",
      "description": "Description for Speculative philosophy Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Aesthetics Room",
      "description": "Description for Aesthetics Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Philosophy, Psychology, Religion Building, 2nd Floor",
      "description": "You are in the 2nd floor. There are seven rooms:\n\n[|South|||||] \u201cReligions.  Mythology.  Rationalism Room\u201d\n[|North|||||] \u201cIslam.  Bahai Faith.  Theosophy, etc. Room\u201d\n[|East||||||] \u201cJudaism Room\u201d\n[|West||||||] \u201cLogic Room\u201d\n[|SouthEast|] \u201cBuddhism Room\u201d\n[|NorthWest|] \u201cSpeculative philosophy Room\u201d\n[|SouthWest|] \u201cAesthetics Room\u201d\n[|Down||||||] 1st floor",
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
      "description": "This is a small, one story tall, octagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cAuxiliary Sciences of History (General)\u201d engraved.\n\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
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
      "displayName": "Biography Room",
      "description": "Description for Biography Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Genealogy Room",
      "description": "Description for Genealogy Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Heraldry Room",
      "description": "Description for Heraldry Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "History of Civilization Room",
      "description": "Description for History of Civilization Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Numismatics Room",
      "description": "Description for Numismatics Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Archaeology Room",
      "description": "Description for Archaeology Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Inscriptions.  Epigraphy Room",
      "description": "Description for Inscriptions.  Epigraphy Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Diplomatics.  Archives.  Seals Room",
      "description": "Description for Diplomatics.  Archives.  Seals Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Auxiliary Sciences of History (General) Building Main Lobby",
      "description": "There are 10 rooms throughout this building in two floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] Biography Room\n[|North|||||] Genealogy Room\n[|East||||||] Heraldry Room\n[|West||||||] History of Civilization Room\n[|SouthEast|] Numismatics Room\n[|NorthWest|] Archaeology Room\n[|SouthWest|] Inscriptions.  Epigraphy Room\n[|NorthEast|] Diplomatics.  Archives.  Seals Room\n[|Up||||||||] 2nd floor\n[|Exit||||||] Auxiliary Sciences of History (General) Building Front Porch",
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
        "building_C-CT": {
          "displayName": "South",
          "destination": "building_C-CT"
        },
        "building_C-CS": {
          "displayName": "North",
          "destination": "building_C-CS"
        },
        "building_C-CR": {
          "displayName": "East",
          "destination": "building_C-CR"
        },
        "building_C-CB": {
          "displayName": "West",
          "destination": "building_C-CB"
        },
        "building_C-CJ": {
          "displayName": "SouthEast",
          "destination": "building_C-CJ"
        },
        "building_C-CC": {
          "displayName": "NorthWest",
          "destination": "building_C-CC"
        },
        "building_C-CN": {
          "displayName": "SouthWest",
          "destination": "building_C-CN"
        },
        "building_C-CD": {
          "displayName": "NorthEast",
          "destination": "building_C-CD"
        }
      }
    },
    "building_C-CE": {
      "firstVisit": true,
      "displayName": "Technical chronology.  Calendar Room",
      "description": "Description for Technical chronology.  Calendar Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Auxiliary Sciences of History (General) Room",
      "description": "Description for Auxiliary Sciences of History (General) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Auxiliary Sciences of History (General) Building, 2nd Floor",
      "description": "You are in the 2nd floor. There are two rooms:\n\n[|South|||||] \u201cTechnical chronology.  Calendar Room\u201d\n[|North|||||] \u201cAuxiliary Sciences of History (General) Room\u201d\n[|Down||||||] 1st floor",
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
      "description": "This is a small, one story tall, octagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cWorld History (except American History)\u201d engraved.\n\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
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
      "displayName": "History of Asia Room",
      "description": "Description for History of Asia Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "History (General) Room",
      "description": "Description for History (General) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "History of Great Britain Room",
      "description": "Description for History of Great Britain Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "History of Africa Room",
      "description": "Description for History of Africa Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "History of Italy Room",
      "description": "Description for History of Italy Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "History of France Room",
      "description": "Description for History of France Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "History of Germany Room",
      "description": "Description for History of Germany Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "History of Low Countries.  Benelux Countries Room",
      "description": "Description for History of Low Countries.  Benelux Countries Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "World History (except American History) Building Main Lobby",
      "description": "There are 21 rooms throughout this building in three floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] History of Asia Room\n[|North|||||] History (General) Room\n[|East||||||] History of Great Britain Room\n[|West||||||] History of Africa Room\n[|SouthEast|] History of Italy Room\n[|NorthWest|] History of France Room\n[|SouthWest|] History of Germany Room\n[|NorthEast|] History of Low Countries.  Benelux Countries Room\n[|Up||||||||] 2nd floor\n[|Exit||||||] World History (except American History) Building Front Porch",
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
        "building_D-DS": {
          "displayName": "South",
          "destination": "building_D-DS"
        },
        "building_D-D": {
          "displayName": "North",
          "destination": "building_D-D"
        },
        "building_D-DA": {
          "displayName": "East",
          "destination": "building_D-DA"
        },
        "building_D-DT": {
          "displayName": "West",
          "destination": "building_D-DT"
        },
        "building_D-DG": {
          "displayName": "SouthEast",
          "destination": "building_D-DG"
        },
        "building_D-DC": {
          "displayName": "NorthWest",
          "destination": "building_D-DC"
        },
        "building_D-DD": {
          "displayName": "SouthWest",
          "destination": "building_D-DD"
        },
        "building_D-DH": {
          "displayName": "NorthEast",
          "destination": "building_D-DH"
        }
      }
    },
    "building_D-DU": {
      "firstVisit": true,
      "displayName": "History of Oceania (South Seas) Room",
      "description": "Description for History of Oceania (South Seas) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "History of Russia.  Soviet Union.  Former Soviet Republics Room",
      "description": "Description for History of Russia.  Soviet Union.  Former Soviet Republics Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "History of the Greco-Roman world Room",
      "description": "Description for History of the Greco-Roman world Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "History of Balkan Peninsula Room",
      "description": "Description for History of Balkan Peninsula Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "History of Spain Room",
      "description": "Description for History of Spain Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "History of Greece Room",
      "description": "Description for History of Greece Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "History of Eastern Europe (General) Room",
      "description": "Description for History of Eastern Europe (General) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "History of Austria.  Liechtenstein.  Hungary.  Czechoslovakia Room",
      "description": "Description for History of Austria.  Liechtenstein.  Hungary.  Czechoslovakia Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "World History (except American History) Building, 2nd Floor",
      "description": "You are in the 2nd floor. There are eight rooms:\n\n[|South|||||] \u201cHistory of Oceania (South Seas) Room\u201d\n[|North|||||] \u201cHistory of Russia.  Soviet Union.  Former Soviet Republics Room\u201d\n[|East||||||] \u201cHistory of the Greco-Roman world Room\u201d\n[|West||||||] \u201cHistory of Balkan Peninsula Room\u201d\n[|SouthEast|] \u201cHistory of Spain Room\u201d\n[|NorthWest|] \u201cHistory of Greece Room\u201d\n[|SouthWest|] \u201cHistory of Eastern Europe (General) Room\u201d\n[|NorthEast|] \u201cHistory of Austria.  Liechtenstein.  Hungary.  Czechoslovakia Room\u201d\n[|Down||||||] 1st floor\n[|Up||||||||] 3rd floor",
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
      "displayName": "History of Northern Europe.  Scandinavia Room",
      "description": "Description for History of Northern Europe.  Scandinavia Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "History of Switzerland Room",
      "description": "Description for History of Switzerland Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "History of Central Europe Room",
      "description": "Description for History of Central Europe Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "History of Netherlands (Holland) Room",
      "description": "Description for History of Netherlands (Holland) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "History of Romanies Room",
      "description": "Description for History of Romanies Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "World History (except American History) Building, 3rd Floor",
      "description": "You are in the 3rd floor. There are five rooms:\n\n[|South|||||] \u201cHistory of Northern Europe.  Scandinavia Room\u201d\n[|North|||||] \u201cHistory of Switzerland Room\u201d\n[|East||||||] \u201cHistory of Central Europe Room\u201d\n[|West||||||] \u201cHistory of Netherlands (Holland) Room\u201d\n[|SouthEast|] \u201cHistory of Romanies Room\u201d\n[|Down||||||] 2nd floor",
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
      "description": "This is a small, one story tall, square-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cAmerican History\u201d engraved.\n\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
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
      "displayName": "United States Room",
      "description": "Description for United States Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "American History Building Main Lobby",
      "description": "There is one room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[|South|||||] United States Room\n[|Exit||||||] American History Building Front Porch",
      "interactables": {},
      "items": {},
      "exits": {
        "E": {
          "displayName": "Exit",
          "destination": "E"
        },
        "building_E-E": {
          "displayName": "South",
          "destination": "building_E-E"
        }
      }
    },
    "F": {
      "firstVisit": true,
      "displayName": "\u201cLocal History of the United States and British, Dutch, French, and Latin America Building\u201d Front Porch",
      "description": "This is a small, one story tall, square-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cLocal History of the United States and British, Dutch, French, and Latin America\u201d engraved.\n\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
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
      "displayName": "Latin America.  Spanish America Room",
      "description": "Description for Latin America.  Spanish America Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Local History of the United States and British, Dutch, French, and Latin America Building Main Lobby",
      "description": "There is one room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[|South|||||] Latin America.  Spanish America Room\n[|Exit||||||] Local History of the United States and British, Dutch, French, and Latin America Building Front Porch",
      "interactables": {},
      "items": {},
      "exits": {
        "F": {
          "displayName": "Exit",
          "destination": "F"
        },
        "building_F-F": {
          "displayName": "South",
          "destination": "building_F-F"
        }
      }
    },
    "G": {
      "firstVisit": true,
      "displayName": "\u201cGeography, Anthropology, Recreation Building\u201d Front Porch",
      "description": "This is a small, one story tall, octagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cGeography, Anthropology, Recreation\u201d engraved.\n\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
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
      "displayName": "Maps Room",
      "description": "Description for Maps Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Recreation.  Leisure Room",
      "description": "Description for Recreation.  Leisure Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Mathematical geography.  Cartography Room",
      "description": "Description for Mathematical geography.  Cartography Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Anthropology Room",
      "description": "Description for Anthropology Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Folklore Room",
      "description": "Description for Folklore Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Manners and customs (General) Room",
      "description": "Description for Manners and customs (General) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Oceanography Room",
      "description": "Description for Oceanography Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Physical geography Room",
      "description": "Description for Physical geography Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Geography, Anthropology, Recreation Building Main Lobby",
      "description": "There are 10 rooms throughout this building in two floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] Maps Room\n[|North|||||] Recreation.  Leisure Room\n[|East||||||] Mathematical geography.  Cartography Room\n[|West||||||] Anthropology Room\n[|SouthEast|] Folklore Room\n[|NorthWest|] Manners and customs (General) Room\n[|SouthWest|] Oceanography Room\n[|NorthEast|] Physical geography Room\n[|Up||||||||] 2nd floor\n[|Exit||||||] Geography, Anthropology, Recreation Building Front Porch",
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
        "building_G-G": {
          "displayName": "South",
          "destination": "building_G-G"
        },
        "building_G-GV": {
          "displayName": "North",
          "destination": "building_G-GV"
        },
        "building_G-GA": {
          "displayName": "East",
          "destination": "building_G-GA"
        },
        "building_G-GN": {
          "displayName": "West",
          "destination": "building_G-GN"
        },
        "building_G-GR": {
          "displayName": "SouthEast",
          "destination": "building_G-GR"
        },
        "building_G-GT": {
          "displayName": "NorthWest",
          "destination": "building_G-GT"
        },
        "building_G-GC": {
          "displayName": "SouthWest",
          "destination": "building_G-GC"
        },
        "building_G-GB": {
          "displayName": "NorthEast",
          "destination": "building_G-GB"
        }
      }
    },
    "building_G-GE": {
      "firstVisit": true,
      "displayName": "Environmental sciences Room",
      "description": "Description for Environmental sciences Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Human ecology.  Anthropogeography Room",
      "description": "Description for Human ecology.  Anthropogeography Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Geography, Anthropology, Recreation Building, 2nd Floor",
      "description": "You are in the 2nd floor. There are two rooms:\n\n[|South|||||] \u201cEnvironmental sciences Room\u201d\n[|North|||||] \u201cHuman ecology.  Anthropogeography Room\u201d\n[|Down||||||] 1st floor",
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
      "description": "This is a small, one story tall, octagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cSocial Sciences\u201d engraved.\n\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
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
      "displayName": "Commerce Room",
      "description": "Description for Commerce Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Socialism.  Communism.  Anarchism Room",
      "description": "Description for Socialism.  Communism.  Anarchism Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Industries.  Land use.  Labor Room",
      "description": "Description for Industries.  Land use.  Labor Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Finance Room",
      "description": "Description for Finance Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Economic theory.  Demography Room",
      "description": "Description for Economic theory.  Demography Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "The Family.  Marriage.  Women Room",
      "description": "Description for The Family.  Marriage.  Women Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Social sciences (General) Room",
      "description": "Description for Social sciences (General) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Transportation and communications Room",
      "description": "Description for Transportation and communications Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Social Sciences Building Main Lobby",
      "description": "There are 16 rooms throughout this building in two floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] Commerce Room\n[|North|||||] Socialism.  Communism.  Anarchism Room\n[|East||||||] Industries.  Land use.  Labor Room\n[|West||||||] Finance Room\n[|SouthEast|] Economic theory.  Demography Room\n[|NorthWest|] The Family.  Marriage.  Women Room\n[|SouthWest|] Social sciences (General) Room\n[|NorthEast|] Transportation and communications Room\n[|Up||||||||] 2nd floor\n[|Exit||||||] Social Sciences Building Front Porch",
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
        "building_H-HF": {
          "displayName": "South",
          "destination": "building_H-HF"
        },
        "building_H-HX": {
          "displayName": "North",
          "destination": "building_H-HX"
        },
        "building_H-HD": {
          "displayName": "East",
          "destination": "building_H-HD"
        },
        "building_H-HG": {
          "displayName": "West",
          "destination": "building_H-HG"
        },
        "building_H-HB": {
          "displayName": "SouthEast",
          "destination": "building_H-HB"
        },
        "building_H-HQ": {
          "displayName": "NorthWest",
          "destination": "building_H-HQ"
        },
        "building_H-H": {
          "displayName": "SouthWest",
          "destination": "building_H-H"
        },
        "building_H-HE": {
          "displayName": "NorthEast",
          "destination": "building_H-HE"
        }
      }
    },
    "building_H-HM": {
      "firstVisit": true,
      "displayName": "Sociology Room",
      "description": "Description for Sociology Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Public finance Room",
      "description": "Description for Public finance Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Social history and conditions.  Social problems. Room",
      "description": "Description for Social history and conditions.  Social problems. Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Societies: secret, benevolent, etc. Room",
      "description": "Description for Societies: secret, benevolent, etc. Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Social pathology.  Social and public welfare. Room",
      "description": "Description for Social pathology.  Social and public welfare. Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Economic history and conditions Room",
      "description": "Description for Economic history and conditions Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Statistics Room",
      "description": "Description for Statistics Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Communities.  Classes.  Races Room",
      "description": "Description for Communities.  Classes.  Races Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Social Sciences Building, 2nd Floor",
      "description": "You are in the 2nd floor. There are eight rooms:\n\n[|South|||||] \u201cSociology Room\u201d\n[|North|||||] \u201cPublic finance Room\u201d\n[|East||||||] \u201cSocial history and conditions.  Social problems. Room\u201d\n[|West||||||] \u201cSocieties: secret, benevolent, etc. Room\u201d\n[|SouthEast|] \u201cSocial pathology.  Social and public welfare. Room\u201d\n[|NorthWest|] \u201cEconomic history and conditions Room\u201d\n[|SouthWest|] \u201cStatistics Room\u201d\n[|NorthEast|] \u201cCommunities.  Classes.  Races Room\u201d\n[|Down||||||] 1st floor",
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
      "description": "This is a small, one story tall, octagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cPolitical Science\u201d engraved.\n\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
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
      "displayName": "Political institutions and public administration Room",
      "description": "Description for Political institutions and public administration Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Political theory.  The state.  Theories of the state Room",
      "description": "Description for Political theory.  The state.  Theories of the state Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Political institutions and public administration Room",
      "description": "Description for Political institutions and public administration Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Local government.  Municipal government Room",
      "description": "Description for Local government.  Municipal government Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Colonies and colonization.  Emigration and Room",
      "description": "Description for Colonies and colonization.  Emigration and Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Political science (General) Room",
      "description": "Description for Political science (General) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "International law, see JZ and KZ Room",
      "description": "Description for International law, see JZ and KZ Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Political institutions and public administration (Europe) Room",
      "description": "Description for Political institutions and public administration (Europe) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Political Science Building Main Lobby",
      "description": "There are 13 rooms throughout this building in two floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] Political institutions and public administration Room\n[|North|||||] Political theory.  The state.  Theories of the state Room\n[|East||||||] Political institutions and public administration Room\n[|West||||||] Local government.  Municipal government Room\n[|SouthEast|] Colonies and colonization.  Emigration and Room\n[|NorthWest|] Political science (General) Room\n[|SouthWest|] International law, see JZ and KZ Room\n[|NorthEast|] Political institutions and public administration (Europe) Room\n[|Up||||||||] 2nd floor\n[|Exit||||||] Political Science Building Front Porch",
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
        "building_J-JF": {
          "displayName": "South",
          "destination": "building_J-JF"
        },
        "building_J-JC": {
          "displayName": "North",
          "destination": "building_J-JC"
        },
        "building_J-JK": {
          "displayName": "East",
          "destination": "building_J-JK"
        },
        "building_J-JS": {
          "displayName": "West",
          "destination": "building_J-JS"
        },
        "building_J-JV": {
          "displayName": "SouthEast",
          "destination": "building_J-JV"
        },
        "building_J-JA": {
          "displayName": "NorthWest",
          "destination": "building_J-JA"
        },
        "building_J-JX": {
          "displayName": "SouthWest",
          "destination": "building_J-JX"
        },
        "building_J-JN": {
          "displayName": "NorthEast",
          "destination": "building_J-JN"
        }
      }
    },
    "building_J-JZ": {
      "firstVisit": true,
      "displayName": "International relations Room",
      "description": "Description for International relations Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Political institutions and public administration Room",
      "description": "Description for Political institutions and public administration Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "General legislative and executive papers Room",
      "description": "Description for General legislative and executive papers Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Political institutions and public administration (Asia, Room",
      "description": "Description for Political institutions and public administration (Asia, Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Political institutions and public administration Room",
      "description": "Description for Political institutions and public administration Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Political Science Building, 2nd Floor",
      "description": "You are in the 2nd floor. There are five rooms:\n\n[|South|||||] \u201cInternational relations Room\u201d\n[|North|||||] \u201cPolitical institutions and public administration Room\u201d\n[|East||||||] \u201cGeneral legislative and executive papers Room\u201d\n[|West||||||] \u201cPolitical institutions and public administration (Asia, Room\u201d\n[|SouthEast|] \u201cPolitical institutions and public administration Room\u201d\n[|Down||||||] 1st floor",
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
      "description": "This is a small, one story tall, octagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cLaw\u201d engraved.\n\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
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
      "displayName": "Law of the United States (Federal) Room",
      "description": "Description for Law of the United States (Federal) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Washington Room",
      "description": "Description for Law of Washington Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Maine Room",
      "description": "Description for Law of Maine Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Tennessee Room",
      "description": "Description for Law of Tennessee Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Comparative law.  International uniform law Room",
      "description": "Description for Comparative law.  International uniform law Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of nations Room",
      "description": "Description for Law of nations Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of England and Wales Room",
      "description": "Description for Law of England and Wales Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Pennsylvania Room",
      "description": "Description for Law of Pennsylvania Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law Building Main Lobby",
      "description": "There are 275 rooms throughout this building in 35 floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] Law of the United States (Federal) Room\n[|North|||||] Law of Washington Room\n[|East||||||] Law of Maine Room\n[|West||||||] Law of Tennessee Room\n[|SouthEast|] Comparative law.  International uniform law Room\n[|NorthWest|] Law of nations Room\n[|SouthWest|] Law of England and Wales Room\n[|NorthEast|] Law of Pennsylvania Room\n[|Up||||||||] 2nd floor\n[|Exit||||||] Law Building Front Porch",
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
        "building_K-KF": {
          "displayName": "South",
          "destination": "building_K-KF"
        },
        "building_K-KFW": {
          "displayName": "North",
          "destination": "building_K-KFW"
        },
        "building_K-KFM": {
          "displayName": "East",
          "destination": "building_K-KFM"
        },
        "building_K-KFT": {
          "displayName": "West",
          "destination": "building_K-KFT"
        },
        "building_K-K": {
          "displayName": "SouthEast",
          "destination": "building_K-K"
        },
        "building_K-KZ": {
          "displayName": "NorthWest",
          "destination": "building_K-KZ"
        },
        "building_K-KD": {
          "displayName": "SouthWest",
          "destination": "building_K-KD"
        },
        "building_K-KFP": {
          "displayName": "NorthEast",
          "destination": "building_K-KFP"
        }
      }
    },
    "building_K-KFI": {
      "firstVisit": true,
      "displayName": "Law of Idaho Room",
      "description": "Description for Law of Idaho Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Nebraska Room",
      "description": "Description for Law of Nebraska Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of California Room",
      "description": "Description for Law of California Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Ohio Room",
      "description": "Description for Law of Ohio Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Louisiana Room",
      "description": "Description for Law of Louisiana Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Alabama Room",
      "description": "Description for Law of Alabama Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Russia, Soviet Union Room",
      "description": "Description for Russia, Soviet Union Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Spain Room",
      "description": "Description for Law of Spain Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law Building, 2nd Floor",
      "description": "You are in the 2nd floor. There are eight rooms:\n\n[|South|||||] \u201cLaw of Idaho Room\u201d\n[|North|||||] \u201cLaw of Nebraska Room\u201d\n[|East||||||] \u201cLaw of California Room\u201d\n[|West||||||] \u201cLaw of Ohio Room\u201d\n[|SouthEast|] \u201cLaw of Louisiana Room\u201d\n[|NorthWest|] \u201cLaw of Alabama Room\u201d\n[|SouthWest|] \u201cRussia, Soviet Union Room\u201d\n[|NorthEast|] \u201cLaw of Spain Room\u201d\n[|Down||||||] 1st floor\n[|Up||||||||] 3rd floor",
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
      "displayName": "Saudi Arabia Room",
      "description": "Description for Saudi Arabia Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Croatia Room",
      "description": "Description for Law of Croatia Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Islamic law.  Shar\u012b\u02bbah.  Fiqh Room",
      "description": "Description for Islamic law.  Shar\u012b\u02bbah.  Fiqh Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "History of canon law Room",
      "description": "Description for History of canon law Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of the sea Room",
      "description": "Description for Law of the sea Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "China (People\u2019s Republic, 1949-    ) Room",
      "description": "Description for China (People\u2019s Republic, 1949-    ) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Regional organization and integration (Europe) Room",
      "description": "Description for Regional organization and integration (Europe) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Vermont Room",
      "description": "Description for Law of Vermont Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law Building, 3rd Floor",
      "description": "You are in the 3rd floor. There are eight rooms:\n\n[|South|||||] \u201cSaudi Arabia Room\u201d\n[|North|||||] \u201cLaw of Croatia Room\u201d\n[|East||||||] \u201cIslamic law.  Shar\u012b\u02bbah.  Fiqh Room\u201d\n[|West||||||] \u201cHistory of canon law Room\u201d\n[|SouthEast|] \u201cLaw of the sea Room\u201d\n[|NorthWest|] \u201cChina (People\u2019s Republic, 1949-    ) Room\u201d\n[|SouthWest|] \u201cRegional organization and integration (Europe) Room\u201d\n[|NorthEast|] \u201cLaw of Vermont Room\u201d\n[|Down||||||] 2nd floor\n[|Up||||||||] 4th floor",
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
      "displayName": "Law of China Room",
      "description": "Description for Law of China Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "West Bank Room",
      "description": "Description for West Bank Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Regional comparative and uniform law (Europe) Room",
      "description": "Description for Regional comparative and uniform law (Europe) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Israel Room",
      "description": "Description for Israel Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "South Africa, Republic of Room",
      "description": "Description for South Africa, Republic of Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Regional comparative and uniform law Room",
      "description": "Description for Regional comparative and uniform law Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of New Brunswick Room",
      "description": "Description for Law of New Brunswick Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Ethiopia Room",
      "description": "Description for Ethiopia Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law Building, 4th Floor",
      "description": "You are in the 4th floor. There are eight rooms:\n\n[|South|||||] \u201cLaw of China Room\u201d\n[|North|||||] \u201cWest Bank Room\u201d\n[|East||||||] \u201cRegional comparative and uniform law (Europe) Room\u201d\n[|West||||||] \u201cIsrael Room\u201d\n[|SouthEast|] \u201cSouth Africa, Republic of Room\u201d\n[|NorthWest|] \u201cRegional comparative and uniform law Room\u201d\n[|SouthWest|] \u201cLaw of New Brunswick Room\u201d\n[|NorthEast|] \u201cEthiopia Room\u201d\n[|Down||||||] 3rd floor\n[|Up||||||||] 5th floor",
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
      "displayName": "Roman Law Room",
      "description": "Description for Roman Law Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of France Room",
      "description": "Description for Law of France Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of the Roman Catholic Church. The Holy See Room",
      "description": "Description for Law of the Roman Catholic Church. The Holy See Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Russia (Federation, 1992-    ) Room",
      "description": "Description for Russia (Federation, 1992-    ) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Germany Room",
      "description": "Description for Law of Germany Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Georgia Room",
      "description": "Description for Law of Georgia Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Argentina Room",
      "description": "Description for Argentina Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Uzbekistan Room",
      "description": "Description for Uzbekistan Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law Building, 5th Floor",
      "description": "You are in the 5th floor. There are eight rooms:\n\n[|South|||||] \u201cRoman Law Room\u201d\n[|North|||||] \u201cLaw of France Room\u201d\n[|East||||||] \u201cLaw of the Roman Catholic Church. The Holy See Room\u201d\n[|West||||||] \u201cRussia (Federation, 1992-    ) Room\u201d\n[|SouthEast|] \u201cLaw of Germany Room\u201d\n[|NorthWest|] \u201cLaw of Georgia Room\u201d\n[|SouthWest|] \u201cArgentina Room\u201d\n[|NorthEast|] \u201cUzbekistan Room\u201d\n[|Down||||||] 4th floor\n[|Up||||||||] 6th floor",
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
      "displayName": "Indonesia Room",
      "description": "Description for Indonesia Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Regional comparative and uniform law Room",
      "description": "Description for Regional comparative and uniform law Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "America.  North America Room",
      "description": "Description for America.  North America Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Kansas Room",
      "description": "Description for Law of Kansas Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Scotland Room",
      "description": "Description for Law of Scotland Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Hong Kong Room",
      "description": "Description for Hong Kong Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Florida Room",
      "description": "Description for Law of Florida Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Jewish law.  Halakah Room",
      "description": "Description for Jewish law.  Halakah Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law Building, 6th Floor",
      "description": "You are in the 6th floor. There are eight rooms:\n\n[|South|||||] \u201cIndonesia Room\u201d\n[|North|||||] \u201cRegional comparative and uniform law Room\u201d\n[|East||||||] \u201cAmerica.  North America Room\u201d\n[|West||||||] \u201cLaw of Kansas Room\u201d\n[|SouthEast|] \u201cLaw of Scotland Room\u201d\n[|NorthWest|] \u201cHong Kong Room\u201d\n[|SouthWest|] \u201cLaw of Florida Room\u201d\n[|NorthEast|] \u201cJewish law.  Halakah Room\u201d\n[|Down||||||] 5th floor\n[|Up||||||||] 7th floor",
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
      "displayName": "History of Law (Europe) Room",
      "description": "Description for History of Law (Europe) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "History of law.  The ancient orient Room",
      "description": "Description for History of law.  The ancient orient Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Canada Room",
      "description": "Description for Law of Canada Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Delaware Room",
      "description": "Description for Law of Delaware Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Ireland (Eire) Room",
      "description": "Description for Law of Ireland (Eire) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Tanzania Room",
      "description": "Description for Tanzania Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Constitutional law Room",
      "description": "Description for Constitutional law Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Zambia Room",
      "description": "Description for Zambia Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law Building, 7th Floor",
      "description": "You are in the 7th floor. There are eight rooms:\n\n[|South|||||] \u201cHistory of Law (Europe) Room\u201d\n[|North|||||] \u201cHistory of law.  The ancient orient Room\u201d\n[|East||||||] \u201cLaw of Canada Room\u201d\n[|West||||||] \u201cLaw of Delaware Room\u201d\n[|SouthEast|] \u201cLaw of Ireland (Eire) Room\u201d\n[|NorthWest|] \u201cTanzania Room\u201d\n[|SouthWest|] \u201cConstitutional law Room\u201d\n[|NorthEast|] \u201cZambia Room\u201d\n[|Down||||||] 6th floor\n[|Up||||||||] 8th floor",
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
      "displayName": "Law of South Carolina Room",
      "description": "Description for Law of South Carolina Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Regional comparative and uniform law Room",
      "description": "Description for Regional comparative and uniform law Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Hawaii Room",
      "description": "Description for Law of Hawaii Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Laws of the cities Room",
      "description": "Description for Laws of the cities Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Finland Room",
      "description": "Description for Law of Finland Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Cameroon Room",
      "description": "Description for Cameroon Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Religious law in general.  Comparative religious law. Room",
      "description": "Description for Religious law in general.  Comparative religious law. Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "British West Indies (General) Room",
      "description": "Description for British West Indies (General) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law Building, 8th Floor",
      "description": "You are in the 8th floor. There are eight rooms:\n\n[|South|||||] \u201cLaw of South Carolina Room\u201d\n[|North|||||] \u201cRegional comparative and uniform law Room\u201d\n[|East||||||] \u201cLaw of Hawaii Room\u201d\n[|West||||||] \u201cLaws of the cities Room\u201d\n[|SouthEast|] \u201cLaw of Finland Room\u201d\n[|NorthWest|] \u201cCameroon Room\u201d\n[|SouthWest|] \u201cReligious law in general.  Comparative religious law. Room\u201d\n[|NorthEast|] \u201cBritish West Indies (General) Room\u201d\n[|Down||||||] 7th floor\n[|Up||||||||] 9th floor",
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
      "displayName": "Mexico Room",
      "description": "Description for Mexico Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Pakistan Room",
      "description": "Description for Pakistan Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "History of law Room",
      "description": "Description for History of law Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Rhode Island Room",
      "description": "Description for Law of Rhode Island Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Puerto Rico Room",
      "description": "Description for Puerto Rico Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Switzerland Room",
      "description": "Description for Law of Switzerland Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Greece Room",
      "description": "Description for Law of Greece Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Ukraine Room",
      "description": "Description for Law of Ukraine Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law Building, 9th Floor",
      "description": "You are in the 9th floor. There are eight rooms:\n\n[|South|||||] \u201cMexico Room\u201d\n[|North|||||] \u201cPakistan Room\u201d\n[|East||||||] \u201cHistory of law Room\u201d\n[|West||||||] \u201cLaw of Rhode Island Room\u201d\n[|SouthEast|] \u201cPuerto Rico Room\u201d\n[|NorthWest|] \u201cLaw of Switzerland Room\u201d\n[|SouthWest|] \u201cLaw of Greece Room\u201d\n[|NorthEast|] \u201cLaw of Ukraine Room\u201d\n[|Down||||||] 8th floor\n[|Up||||||||] 10th floor",
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
      "displayName": "Law of Poland Room",
      "description": "Description for Law of Poland Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Netherlands Room",
      "description": "Description for Law of Netherlands Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Malta Room",
      "description": "Description for Law of Malta Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Bosnia and Hercegovina Room",
      "description": "Description for Law of Bosnia and Hercegovina Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Kosovo Room",
      "description": "Description for Law of Kosovo Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Lithuania Room",
      "description": "Description for Law of Lithuania Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Guatemala Room",
      "description": "Description for Guatemala Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Peru Room",
      "description": "Description for Peru Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law Building, 10th Floor",
      "description": "You are in the 10th floor. There are eight rooms:\n\n[|South|||||] \u201cLaw of Poland Room\u201d\n[|North|||||] \u201cLaw of Netherlands Room\u201d\n[|East||||||] \u201cLaw of Malta Room\u201d\n[|West||||||] \u201cLaw of Bosnia and Hercegovina Room\u201d\n[|SouthEast|] \u201cLaw of Kosovo Room\u201d\n[|NorthWest|] \u201cLaw of Lithuania Room\u201d\n[|SouthWest|] \u201cGuatemala Room\u201d\n[|NorthEast|] \u201cPeru Room\u201d\n[|Down||||||] 9th floor\n[|Up||||||||] 11th floor",
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
      "displayName": "Mali Room",
      "description": "Description for Mali Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Nigeria Room",
      "description": "Description for Nigeria Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Haiti Room",
      "description": "Description for Haiti Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Colombia Room",
      "description": "Description for Colombia Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Latin America (General) Room",
      "description": "Description for Latin America (General) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Ecuador Room",
      "description": "Description for Ecuador Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Bolivia Room",
      "description": "Description for Bolivia Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "China (Republic, 1949-    ).  Taiwan Room",
      "description": "Description for China (Republic, 1949-    ).  Taiwan Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law Building, 11th Floor",
      "description": "You are in the 11th floor. There are eight rooms:\n\n[|South|||||] \u201cMali Room\u201d\n[|North|||||] \u201cNigeria Room\u201d\n[|East||||||] \u201cHaiti Room\u201d\n[|West||||||] \u201cColombia Room\u201d\n[|SouthEast|] \u201cLatin America (General) Room\u201d\n[|NorthWest|] \u201cEcuador Room\u201d\n[|SouthWest|] \u201cBolivia Room\u201d\n[|NorthEast|] \u201cChina (Republic, 1949-    ).  Taiwan Room\u201d\n[|Down||||||] 10th floor\n[|Up||||||||] 12th floor",
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
      "displayName": "Khorezmskai\uf04da Sovetskai\uf04da Sot\uf04dsialisticheskai\uf04da Room",
      "description": "Description for Khorezmskai\uf04da Sovetskai\uf04da Sot\uf04dsialisticheskai\uf04da Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Zimbabwe Room",
      "description": "Description for Zimbabwe Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Canon law of Eastern Churches Room",
      "description": "Description for Canon law of Eastern Churches Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Korea.  South Korea Room",
      "description": "Description for Korea.  South Korea Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "New Zealand Room",
      "description": "Description for New Zealand Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Fiji Room",
      "description": "Description for Fiji Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "New Caledonia Room",
      "description": "Description for New Caledonia Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Utah Room",
      "description": "Description for Law of Utah Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law Building, 12th Floor",
      "description": "You are in the 12th floor. There are eight rooms:\n\n[|South|||||] \u201cKhorezmskai\uf04da Sovetskai\uf04da Sot\uf04dsialisticheskai\uf04da Room\u201d\n[|North|||||] \u201cZimbabwe Room\u201d\n[|East||||||] \u201cCanon law of Eastern Churches Room\u201d\n[|West||||||] \u201cKorea.  South Korea Room\u201d\n[|SouthEast|] \u201cNew Zealand Room\u201d\n[|NorthWest|] \u201cFiji Room\u201d\n[|SouthWest|] \u201cNew Caledonia Room\u201d\n[|NorthEast|] \u201cLaw of Utah Room\u201d\n[|Down||||||] 11th floor\n[|Up||||||||] 13th floor",
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
      "displayName": "Law of Denmark Room",
      "description": "Description for Law of Denmark Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Portugal Room",
      "description": "Description for Law of Portugal Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Estonia Room",
      "description": "Description for Law of Estonia Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Yugoslavia Room",
      "description": "Description for Law of Yugoslavia Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Czech Republic (1993-        ) Room",
      "description": "Description for Law of Czech Republic (1993-        ) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Costa Rica Room",
      "description": "Description for Costa Rica Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Venezuela Room",
      "description": "Description for Venezuela Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Honduras Room",
      "description": "Description for Honduras Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law Building, 13th Floor",
      "description": "You are in the 13th floor. There are eight rooms:\n\n[|South|||||] \u201cLaw of Denmark Room\u201d\n[|North|||||] \u201cLaw of Portugal Room\u201d\n[|East||||||] \u201cLaw of Estonia Room\u201d\n[|West||||||] \u201cLaw of Yugoslavia Room\u201d\n[|SouthEast|] \u201cLaw of Czech Republic (1993-        ) Room\u201d\n[|NorthWest|] \u201cCosta Rica Room\u201d\n[|SouthWest|] \u201cVenezuela Room\u201d\n[|NorthEast|] \u201cHonduras Room\u201d\n[|Down||||||] 12th floor\n[|Up||||||||] 14th floor",
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
      "displayName": "Nicaragua Room",
      "description": "Description for Nicaragua Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Chile Room",
      "description": "Description for Chile Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Paraguay Room",
      "description": "Description for Paraguay Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of East Germany Room",
      "description": "Description for Law of East Germany Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Sweden Room",
      "description": "Description for Law of Sweden Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Morocco Room",
      "description": "Description for Morocco Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "General Room",
      "description": "Description for General Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Belarus (Republic) Room",
      "description": "Description for Belarus (Republic) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law Building, 14th Floor",
      "description": "You are in the 14th floor. There are eight rooms:\n\n[|South|||||] \u201cNicaragua Room\u201d\n[|North|||||] \u201cChile Room\u201d\n[|East||||||] \u201cParaguay Room\u201d\n[|West||||||] \u201cLaw of East Germany Room\u201d\n[|SouthEast|] \u201cLaw of Sweden Room\u201d\n[|NorthWest|] \u201cMorocco Room\u201d\n[|SouthWest|] \u201cGeneral Room\u201d\n[|NorthEast|] \u201cBelarus (Republic) Room\u201d\n[|Down||||||] 13th floor\n[|Up||||||||] 15th floor",
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
      "displayName": "General Room",
      "description": "Description for General Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Thailand Room",
      "description": "Description for Thailand Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Philippines Room",
      "description": "Description for Philippines Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Vietnam Room",
      "description": "Description for Vietnam Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Singapore Room",
      "description": "Description for Singapore Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Iran Room",
      "description": "Description for Iran Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Mayotte Room",
      "description": "Description for Mayotte Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Namibia Room",
      "description": "Description for Namibia Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law Building, 15th Floor",
      "description": "You are in the 15th floor. There are eight rooms:\n\n[|South|||||] \u201cGeneral Room\u201d\n[|North|||||] \u201cThailand Room\u201d\n[|East||||||] \u201cPhilippines Room\u201d\n[|West||||||] \u201cVietnam Room\u201d\n[|SouthEast|] \u201cSingapore Room\u201d\n[|NorthWest|] \u201cIran Room\u201d\n[|SouthWest|] \u201cMayotte Room\u201d\n[|NorthEast|] \u201cNamibia Room\u201d\n[|Down||||||] 14th floor\n[|Up||||||||] 16th floor",
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
      "displayName": "Botswana Room",
      "description": "Description for Botswana Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Angola Room",
      "description": "Description for Angola Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Mozambique Room",
      "description": "Description for Mozambique Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Kenya Room",
      "description": "Description for Kenya Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Gabon Room",
      "description": "Description for Gabon Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Lesotho Room",
      "description": "Description for Lesotho Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Ghana Room",
      "description": "Description for Ghana Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Malawi Room",
      "description": "Description for Malawi Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law Building, 16th Floor",
      "description": "You are in the 16th floor. There are eight rooms:\n\n[|South|||||] \u201cBotswana Room\u201d\n[|North|||||] \u201cAngola Room\u201d\n[|East||||||] \u201cMozambique Room\u201d\n[|West||||||] \u201cKenya Room\u201d\n[|SouthEast|] \u201cGabon Room\u201d\n[|NorthWest|] \u201cLesotho Room\u201d\n[|SouthWest|] \u201cGhana Room\u201d\n[|NorthEast|] \u201cMalawi Room\u201d\n[|Down||||||] 15th floor\n[|Up||||||||] 17th floor",
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
      "displayName": "Uganda Room",
      "description": "Description for Uganda Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Rwanda Room",
      "description": "Description for Rwanda Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Congo (Democratic Republic) Room",
      "description": "Description for Congo (Democratic Republic) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "French West Africa Room",
      "description": "Description for French West Africa Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Senegal Room",
      "description": "Description for Senegal Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Turkey Room",
      "description": "Description for Law of Turkey Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Azerbaijan Room",
      "description": "Description for Azerbaijan Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Egypt Room",
      "description": "Description for Egypt Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law Building, 17th Floor",
      "description": "You are in the 17th floor. There are eight rooms:\n\n[|South|||||] \u201cUganda Room\u201d\n[|North|||||] \u201cRwanda Room\u201d\n[|East||||||] \u201cCongo (Democratic Republic) Room\u201d\n[|West||||||] \u201cFrench West Africa Room\u201d\n[|SouthEast|] \u201cSenegal Room\u201d\n[|NorthWest|] \u201cLaw of Turkey Room\u201d\n[|SouthWest|] \u201cAzerbaijan Room\u201d\n[|NorthEast|] \u201cEgypt Room\u201d\n[|Down||||||] 16th floor\n[|Up||||||||] 18th floor",
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
      "displayName": "Kuwait Room",
      "description": "Description for Kuwait Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Yemen Room",
      "description": "Description for Yemen Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Sudan Room",
      "description": "Description for Sudan Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Algeria Room",
      "description": "Description for Algeria Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "United Arab Emirates Room",
      "description": "Description for United Arab Emirates Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Brazil Room",
      "description": "Description for Brazil Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Guyana Room",
      "description": "Description for Guyana Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Uruguay Room",
      "description": "Description for Uruguay Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law Building, 18th Floor",
      "description": "You are in the 18th floor. There are eight rooms:\n\n[|South|||||] \u201cKuwait Room\u201d\n[|North|||||] \u201cYemen Room\u201d\n[|East||||||] \u201cSudan Room\u201d\n[|West||||||] \u201cAlgeria Room\u201d\n[|SouthEast|] \u201cUnited Arab Emirates Room\u201d\n[|NorthWest|] \u201cBrazil Room\u201d\n[|SouthWest|] \u201cGuyana Room\u201d\n[|NorthEast|] \u201cUruguay Room\u201d\n[|Down||||||] 17th floor\n[|Up||||||||] 19th floor",
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
      "displayName": "Kyrgyzstan Room",
      "description": "Description for Kyrgyzstan Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Guinea Room",
      "description": "Description for Guinea Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Macao Room",
      "description": "Description for Macao Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Armenian SSR (to 1991) Room",
      "description": "Description for Armenian SSR (to 1991) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Tunisia Room",
      "description": "Description for Tunisia Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Lebanon Room",
      "description": "Description for Lebanon Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Bahrain Room",
      "description": "Description for Bahrain Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Slovenia Room",
      "description": "Description for Law of Slovenia Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law Building, 19th Floor",
      "description": "You are in the 19th floor. There are eight rooms:\n\n[|South|||||] \u201cKyrgyzstan Room\u201d\n[|North|||||] \u201cGuinea Room\u201d\n[|East||||||] \u201cMacao Room\u201d\n[|West||||||] \u201cArmenian SSR (to 1991) Room\u201d\n[|SouthEast|] \u201cTunisia Room\u201d\n[|NorthWest|] \u201cLebanon Room\u201d\n[|SouthWest|] \u201cBahrain Room\u201d\n[|NorthEast|] \u201cLaw of Slovenia Room\u201d\n[|Down||||||] 18th floor\n[|Up||||||||] 20th floor",
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
      "displayName": "French regions, provinces, cities, etc. Room",
      "description": "Description for French regions, provinces, cities, etc. Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Austria Room",
      "description": "Description for Law of Austria Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Space law.  Law of outer space Room",
      "description": "Description for Space law.  Law of outer space Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Western Samoa Room",
      "description": "Description for Western Samoa Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "French Polynesia Room",
      "description": "Description for French Polynesia Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Ontario Room",
      "description": "Description for Law of Ontario Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Alberta Room",
      "description": "Description for Law of Alberta Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of British Columbia Room",
      "description": "Description for Law of British Columbia Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law Building, 20th Floor",
      "description": "You are in the 20th floor. There are eight rooms:\n\n[|South|||||] \u201cFrench regions, provinces, cities, etc. Room\u201d\n[|North|||||] \u201cLaw of Austria Room\u201d\n[|East||||||] \u201cSpace law.  Law of outer space Room\u201d\n[|West||||||] \u201cWestern Samoa Room\u201d\n[|SouthEast|] \u201cFrench Polynesia Room\u201d\n[|NorthWest|] \u201cLaw of Ontario Room\u201d\n[|SouthWest|] \u201cLaw of Alberta Room\u201d\n[|NorthEast|] \u201cLaw of British Columbia Room\u201d\n[|Down||||||] 19th floor\n[|Up||||||||] 21st floor",
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
      "displayName": "Law of Qu\u00e9bec Room",
      "description": "Description for Law of Qu\u00e9bec Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Papua New Guinea Room",
      "description": "Description for Papua New Guinea Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Midway Islands Room",
      "description": "Description for Midway Islands Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Palau Room",
      "description": "Description for Palau Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Guam Room",
      "description": "Description for Guam Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Cyprus Room",
      "description": "Description for Law of Cyprus Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Hungary Room",
      "description": "Description for Law of Hungary Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "French Guiana Room",
      "description": "Description for French Guiana Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law Building, 21st Floor",
      "description": "You are in the 21st floor. There are eight rooms:\n\n[|South|||||] \u201cLaw of Qu\u00e9bec Room\u201d\n[|North|||||] \u201cPapua New Guinea Room\u201d\n[|East||||||] \u201cMidway Islands Room\u201d\n[|West||||||] \u201cPalau Room\u201d\n[|SouthEast|] \u201cGuam Room\u201d\n[|NorthWest|] \u201cLaw of Cyprus Room\u201d\n[|SouthWest|] \u201cLaw of Hungary Room\u201d\n[|NorthEast|] \u201cFrench Guiana Room\u201d\n[|Down||||||] 20th floor\n[|Up||||||||] 22nd floor",
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
      "displayName": "Law of Norway Room",
      "description": "Description for Law of Norway Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Central African Republic Room",
      "description": "Description for Central African Republic Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Togo Room",
      "description": "Description for Togo Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Burkina Faso Room",
      "description": "Description for Burkina Faso Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "C\u00f4te d\u2019Ivoire Room",
      "description": "Description for C\u00f4te d\u2019Ivoire Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Jerusalem Room",
      "description": "Description for Jerusalem Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Iraq Room",
      "description": "Description for Iraq Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Libya Room",
      "description": "Description for Libya Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law Building, 22nd Floor",
      "description": "You are in the 22nd floor. There are eight rooms:\n\n[|South|||||] \u201cLaw of Norway Room\u201d\n[|North|||||] \u201cCentral African Republic Room\u201d\n[|East||||||] \u201cTogo Room\u201d\n[|West||||||] \u201cBurkina Faso Room\u201d\n[|SouthEast|] \u201cC\u00f4te d\u2019Ivoire Room\u201d\n[|NorthWest|] \u201cJerusalem Room\u201d\n[|SouthWest|] \u201cIraq Room\u201d\n[|NorthEast|] \u201cLibya Room\u201d\n[|Down||||||] 21st floor\n[|Up||||||||] 23rd floor",
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
      "displayName": "Panama Room",
      "description": "Description for Panama Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Dominican Republic Room",
      "description": "Description for Dominican Republic Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Cuba Room",
      "description": "Description for Cuba Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "El Salvador Room",
      "description": "Description for El Salvador Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Liberia Room",
      "description": "Description for Liberia Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Niger Room",
      "description": "Description for Niger Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Democratic People\u2019s Republic of Korea.  North Korea Room",
      "description": "Description for Democratic People\u2019s Republic of Korea.  North Korea Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of indigenous peoples Room",
      "description": "Description for Law of indigenous peoples Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law Building, 23rd Floor",
      "description": "You are in the 23rd floor. There are eight rooms:\n\n[|South|||||] \u201cPanama Room\u201d\n[|North|||||] \u201cDominican Republic Room\u201d\n[|East||||||] \u201cCuba Room\u201d\n[|West||||||] \u201cEl Salvador Room\u201d\n[|SouthEast|] \u201cLiberia Room\u201d\n[|NorthWest|] \u201cNiger Room\u201d\n[|SouthWest|] \u201cDemocratic People\u2019s Republic of Korea.  North Korea Room\u201d\n[|NorthEast|] \u201cLaw of indigenous peoples Room\u201d\n[|Down||||||] 22nd floor\n[|Up||||||||] 24th floor",
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
      "displayName": "Northern Mariana Islands Room",
      "description": "Description for Northern Mariana Islands Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Cambodia Room",
      "description": "Description for Cambodia Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Canon law of Eastern Rite Churches in Communion with the Room",
      "description": "Description for Canon law of Eastern Rite Churches in Communion with the Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Albania Room",
      "description": "Description for Law of Albania Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Trinidad and Tobago Room",
      "description": "Description for Trinidad and Tobago Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Romania Room",
      "description": "Description for Law of Romania Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Slovakia (1993-        ) Room",
      "description": "Description for Law of Slovakia (1993-        ) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Moldova Room",
      "description": "Description for Moldova Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law Building, 24th Floor",
      "description": "You are in the 24th floor. There are eight rooms:\n\n[|South|||||] \u201cNorthern Mariana Islands Room\u201d\n[|North|||||] \u201cCambodia Room\u201d\n[|East||||||] \u201cCanon law of Eastern Rite Churches in Communion with the Room\u201d\n[|West||||||] \u201cLaw of Albania Room\u201d\n[|SouthEast|] \u201cTrinidad and Tobago Room\u201d\n[|NorthWest|] \u201cLaw of Romania Room\u201d\n[|SouthWest|] \u201cLaw of Slovakia (1993-        ) Room\u201d\n[|NorthEast|] \u201cMoldova Room\u201d\n[|Down||||||] 23rd floor\n[|Up||||||||] 25th floor",
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
      "displayName": "Law of Northern Ireland Room",
      "description": "Description for Law of Northern Ireland Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Saskatchewan Room",
      "description": "Description for Law of Saskatchewan Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Brunei Room",
      "description": "Description for Brunei Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Laos Room",
      "description": "Description for Laos Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Sri Lanka Room",
      "description": "Description for Sri Lanka Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Nepal Room",
      "description": "Description for Nepal Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Burma Room",
      "description": "Description for Burma Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Bangladesh Room",
      "description": "Description for Bangladesh Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law Building, 25th Floor",
      "description": "You are in the 25th floor. There are eight rooms:\n\n[|South|||||] \u201cLaw of Northern Ireland Room\u201d\n[|North|||||] \u201cLaw of Saskatchewan Room\u201d\n[|East||||||] \u201cBrunei Room\u201d\n[|West||||||] \u201cLaos Room\u201d\n[|SouthEast|] \u201cSri Lanka Room\u201d\n[|NorthWest|] \u201cNepal Room\u201d\n[|SouthWest|] \u201cBurma Room\u201d\n[|NorthEast|] \u201cBangladesh Room\u201d\n[|Down||||||] 24th floor\n[|Up||||||||] 26th floor",
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
      "displayName": "Equatorial Guinea Room",
      "description": "Description for Equatorial Guinea Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Tajikistan Room",
      "description": "Description for Tajikistan Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Turkmenistan Room",
      "description": "Description for Turkmenistan Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Comoros Room",
      "description": "Description for Comoros Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Seychelles Room",
      "description": "Description for Seychelles Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Madagascar Room",
      "description": "Description for Madagascar Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Regional organization and integration Room",
      "description": "Description for Regional organization and integration Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Eritrea Room",
      "description": "Description for Eritrea Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law Building, 26th Floor",
      "description": "You are in the 26th floor. There are eight rooms:\n\n[|South|||||] \u201cEquatorial Guinea Room\u201d\n[|North|||||] \u201cTajikistan Room\u201d\n[|East||||||] \u201cTurkmenistan Room\u201d\n[|West||||||] \u201cComoros Room\u201d\n[|SouthEast|] \u201cSeychelles Room\u201d\n[|NorthWest|] \u201cMadagascar Room\u201d\n[|SouthWest|] \u201cRegional organization and integration Room\u201d\n[|NorthEast|] \u201cEritrea Room\u201d\n[|Down||||||] 25th floor\n[|Up||||||||] 27th floor",
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
      "displayName": "Law of Iceland Room",
      "description": "Description for Law of Iceland Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Georgia (Republic) Room",
      "description": "Description for Georgia (Republic) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Belize Room",
      "description": "Description for Belize Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Latvia Room",
      "description": "Description for Law of Latvia Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Sao Tome and Principe Room",
      "description": "Description for Sao Tome and Principe Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Andorra Room",
      "description": "Description for Law of Andorra Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Solomon Islands Room",
      "description": "Description for Solomon Islands Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Saint Lucia Room",
      "description": "Description for Saint Lucia Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law Building, 27th Floor",
      "description": "You are in the 27th floor. There are eight rooms:\n\n[|South|||||] \u201cLaw of Iceland Room\u201d\n[|North|||||] \u201cGeorgia (Republic) Room\u201d\n[|East||||||] \u201cBelize Room\u201d\n[|West||||||] \u201cLaw of Latvia Room\u201d\n[|SouthEast|] \u201cSao Tome and Principe Room\u201d\n[|NorthWest|] \u201cLaw of Andorra Room\u201d\n[|SouthWest|] \u201cSolomon Islands Room\u201d\n[|NorthEast|] \u201cSaint Lucia Room\u201d\n[|Down||||||] 26th floor\n[|Up||||||||] 28th floor",
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
      "displayName": "Virgin Islands of the United States Room",
      "description": "Description for Virgin Islands of the United States Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Grenada Room",
      "description": "Description for Grenada Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Gambia Room",
      "description": "Description for Gambia Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Laws of the territories.  Laws of the Confederate States of Room",
      "description": "Description for Laws of the territories.  Laws of the Confederate States of Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Isle of Man.  Channel Islands Room",
      "description": "Description for Law of Isle of Man.  Channel Islands Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "General Room",
      "description": "Description for General Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Russian S.F.S.R. (to 1991) Room",
      "description": "Description for Russian S.F.S.R. (to 1991) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Palestine (to 1948) Room",
      "description": "Description for Palestine (to 1948) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law Building, 28th Floor",
      "description": "You are in the 28th floor. There are eight rooms:\n\n[|South|||||] \u201cVirgin Islands of the United States Room\u201d\n[|North|||||] \u201cGrenada Room\u201d\n[|East||||||] \u201cGambia Room\u201d\n[|West||||||] \u201cLaws of the territories.  Laws of the Confederate States of Room\u201d\n[|SouthEast|] \u201cLaw of Isle of Man.  Channel Islands Room\u201d\n[|NorthWest|] \u201cGeneral Room\u201d\n[|SouthWest|] \u201cRussian S.F.S.R. (to 1991) Room\u201d\n[|NorthEast|] \u201cPalestine (to 1948) Room\u201d\n[|Down||||||] 27th floor\n[|Up||||||||] 29th floor",
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
      "displayName": "Law of Yukon Room",
      "description": "Description for Law of Yukon Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "French Indochina.  Indochina (Federation) Room",
      "description": "Description for French Indochina.  Indochina (Federation) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Yeman (People\u2019s Democratic Republic) (to 1990) Room",
      "description": "Description for Yeman (People\u2019s Democratic Republic) (to 1990) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Surinam Room",
      "description": "Description for Surinam Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Syria Room",
      "description": "Description for Syria Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Montenegro Room",
      "description": "Description for Law of Montenegro Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Italian Somaliland Room",
      "description": "Description for Italian Somaliland Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Law of cities, towns, etc. Room",
      "description": "Description for Law of Law of cities, towns, etc. Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law Building, 29th Floor",
      "description": "You are in the 29th floor. There are eight rooms:\n\n[|South|||||] \u201cLaw of Yukon Room\u201d\n[|North|||||] \u201cFrench Indochina.  Indochina (Federation) Room\u201d\n[|East||||||] \u201cYeman (People\u2019s Democratic Republic) (to 1990) Room\u201d\n[|West||||||] \u201cSurinam Room\u201d\n[|SouthEast|] \u201cSyria Room\u201d\n[|NorthWest|] \u201cLaw of Montenegro Room\u201d\n[|SouthWest|] \u201cItalian Somaliland Room\u201d\n[|NorthEast|] \u201cLaw of Law of cities, towns, etc. Room\u201d\n[|Down||||||] 28th floor\n[|Up||||||||] 30th floor",
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
      "displayName": "Law of Manitoba Room",
      "description": "Description for Law of Manitoba Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Somalia Room",
      "description": "Description for Somalia Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Jamaica Room",
      "description": "Description for Jamaica Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Turks and Caicos Islands Room",
      "description": "Description for Turks and Caicos Islands Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Law of Prince Edward Island Room",
      "description": "Description for Law of Law of Prince Edward Island Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Burundi Room",
      "description": "Description for Burundi Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Pacific Islands (Trust Territory) Room",
      "description": "Description for Pacific Islands (Trust Territory) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Vietnam (Republic).  South Vietnam Room",
      "description": "Description for Vietnam (Republic).  South Vietnam Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law Building, 30th Floor",
      "description": "You are in the 30th floor. There are eight rooms:\n\n[|South|||||] \u201cLaw of Manitoba Room\u201d\n[|North|||||] \u201cSomalia Room\u201d\n[|East||||||] \u201cJamaica Room\u201d\n[|West||||||] \u201cTurks and Caicos Islands Room\u201d\n[|SouthEast|] \u201cLaw of Law of Prince Edward Island Room\u201d\n[|NorthWest|] \u201cBurundi Room\u201d\n[|SouthWest|] \u201cPacific Islands (Trust Territory) Room\u201d\n[|NorthEast|] \u201cVietnam (Republic).  South Vietnam Room\u201d\n[|Down||||||] 29th floor\n[|Up||||||||] 31st floor",
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
      "displayName": "Antarctica Room",
      "description": "Description for Antarctica Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "British New Guinea (Territory of Papua) Room",
      "description": "Description for British New Guinea (Territory of Papua) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Vanuatu Room",
      "description": "Description for Vanuatu Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Niue Room",
      "description": "Description for Niue Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Afghanistan Room",
      "description": "Description for Afghanistan Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Gibraltar Room",
      "description": "Description for Gibraltar Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Chad Room",
      "description": "Description for Chad Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Sierra Leone Room",
      "description": "Description for Sierra Leone Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law Building, 31st Floor",
      "description": "You are in the 31st floor. There are eight rooms:\n\n[|South|||||] \u201cAntarctica Room\u201d\n[|North|||||] \u201cBritish New Guinea (Territory of Papua) Room\u201d\n[|East||||||] \u201cVanuatu Room\u201d\n[|West||||||] \u201cNiue Room\u201d\n[|SouthEast|] \u201cAfghanistan Room\u201d\n[|NorthWest|] \u201cGibraltar Room\u201d\n[|SouthWest|] \u201cChad Room\u201d\n[|NorthEast|] \u201cSierra Leone Room\u201d\n[|Down||||||] 30th floor\n[|Up||||||||] 32nd floor",
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
      "displayName": "Swaziland Room",
      "description": "Description for Swaziland Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "R\u00e9union Room",
      "description": "Description for R\u00e9union Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Djibouti Room",
      "description": "Description for Djibouti Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Cayman Islands Room",
      "description": "Description for Cayman Islands Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Dominica Room",
      "description": "Description for Dominica Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Congo (Brazzaville) Room",
      "description": "Description for Congo (Brazzaville) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Nauru Room",
      "description": "Description for Nauru Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Benin Room",
      "description": "Description for Benin Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law Building, 32nd Floor",
      "description": "You are in the 32nd floor. There are eight rooms:\n\n[|South|||||] \u201cSwaziland Room\u201d\n[|North|||||] \u201cR\u00e9union Room\u201d\n[|East||||||] \u201cDjibouti Room\u201d\n[|West||||||] \u201cCayman Islands Room\u201d\n[|SouthEast|] \u201cDominica Room\u201d\n[|NorthWest|] \u201cCongo (Brazzaville) Room\u201d\n[|SouthWest|] \u201cNauru Room\u201d\n[|NorthEast|] \u201cBenin Room\u201d\n[|Down||||||] 31st floor\n[|Up||||||||] 33rd floor",
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
      "displayName": "Regional organization and integration Room",
      "description": "Description for Regional organization and integration Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Qatar Room",
      "description": "Description for Qatar Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "British Central Africa Protectorate Room",
      "description": "Description for British Central Africa Protectorate Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Cities, etc. Room",
      "description": "Description for Cities, etc. Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Ukraine Room",
      "description": "Description for Ukraine Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Cape Verde Room",
      "description": "Description for Cape Verde Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Aruba Room",
      "description": "Description for Aruba Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Maldives Room",
      "description": "Description for Maldives Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law Building, 33rd Floor",
      "description": "You are in the 33rd floor. There are eight rooms:\n\n[|South|||||] \u201cRegional organization and integration Room\u201d\n[|North|||||] \u201cQatar Room\u201d\n[|East||||||] \u201cBritish Central Africa Protectorate Room\u201d\n[|West||||||] \u201cCities, etc. Room\u201d\n[|SouthEast|] \u201cUkraine Room\u201d\n[|NorthWest|] \u201cCape Verde Room\u201d\n[|SouthWest|] \u201cAruba Room\u201d\n[|NorthEast|] \u201cMaldives Room\u201d\n[|Down||||||] 32nd floor\n[|Up||||||||] 34th floor",
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
      "displayName": "Mauritania Room",
      "description": "Description for Mauritania Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Guinea-Bissau Room",
      "description": "Description for Guinea-Bissau Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Cook Islands Room",
      "description": "Description for Cook Islands Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Tonga Room",
      "description": "Description for Tonga Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Bhutan Room",
      "description": "Description for Bhutan Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Gaza Room",
      "description": "Description for Gaza Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Falkland Islands Room",
      "description": "Description for Falkland Islands Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Tuvalu Room",
      "description": "Description for Tuvalu Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law Building, 34th Floor",
      "description": "You are in the 34th floor. There are eight rooms:\n\n[|South|||||] \u201cMauritania Room\u201d\n[|North|||||] \u201cGuinea-Bissau Room\u201d\n[|East||||||] \u201cCook Islands Room\u201d\n[|West||||||] \u201cTonga Room\u201d\n[|SouthEast|] \u201cBhutan Room\u201d\n[|NorthWest|] \u201cGaza Room\u201d\n[|SouthWest|] \u201cFalkland Islands Room\u201d\n[|NorthEast|] \u201cTuvalu Room\u201d\n[|Down||||||] 33rd floor\n[|Up||||||||] 35th floor",
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
      "displayName": "French Equatorial Africa Room",
      "description": "Description for French Equatorial Africa Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Kiribati Room",
      "description": "Description for Kiribati Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law of Australian peoples.  Aborigines Room",
      "description": "Description for Law of Australian peoples.  Aborigines Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Law Building, 35th Floor",
      "description": "You are in the 35th floor. There are three rooms:\n\n[|South|||||] \u201cFrench Equatorial Africa Room\u201d\n[|North|||||] \u201cKiribati Room\u201d\n[|East||||||] \u201cLaw of Australian peoples.  Aborigines Room\u201d\n[|Down||||||] 34th floor",
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
      "description": "This is a small, one story tall, octagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cEducation\u201d engraved.\n\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
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
      "displayName": "Theory and practice of education Room",
      "description": "Description for Theory and practice of education Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Textbooks Room",
      "description": "Description for Textbooks Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "History of education Room",
      "description": "Description for History of education Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "United States Room",
      "description": "Description for United States Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Special aspects of education Room",
      "description": "Description for Special aspects of education Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Education (General) Room",
      "description": "Description for Education (General) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Individual institutions Room",
      "description": "Description for Individual institutions Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Individual institutions Room",
      "description": "Description for Individual institutions Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Education Building Main Lobby",
      "description": "There are 11 rooms throughout this building in two floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] Theory and practice of education Room\n[|North|||||] Textbooks Room\n[|East||||||] History of education Room\n[|West||||||] United States Room\n[|SouthEast|] Special aspects of education Room\n[|NorthWest|] Education (General) Room\n[|SouthWest|] Individual institutions Room\n[|NorthEast|] Individual institutions Room\n[|Up||||||||] 2nd floor\n[|Exit||||||] Education Building Front Porch",
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
        "building_L-LB": {
          "displayName": "South",
          "destination": "building_L-LB"
        },
        "building_L-LT": {
          "displayName": "North",
          "destination": "building_L-LT"
        },
        "building_L-LA": {
          "displayName": "East",
          "destination": "building_L-LA"
        },
        "building_L-LD": {
          "displayName": "West",
          "destination": "building_L-LD"
        },
        "building_L-LC": {
          "displayName": "SouthEast",
          "destination": "building_L-LC"
        },
        "building_L-L": {
          "displayName": "NorthWest",
          "destination": "building_L-L"
        },
        "building_L-LF": {
          "displayName": "SouthWest",
          "destination": "building_L-LF"
        },
        "building_L-LG": {
          "displayName": "NorthEast",
          "destination": "building_L-LG"
        }
      }
    },
    "building_L-LJ": {
      "firstVisit": true,
      "displayName": "Student fraternities and societies, United States Room",
      "description": "Description for Student fraternities and societies, United States Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "America (except United States) Room",
      "description": "Description for America (except United States) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "College and school magazines and papers Room",
      "description": "Description for College and school magazines and papers Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Education Building, 2nd Floor",
      "description": "You are in the 2nd floor. There are three rooms:\n\n[|South|||||] \u201cStudent fraternities and societies, United States Room\u201d\n[|North|||||] \u201cAmerica (except United States) Room\u201d\n[|East||||||] \u201cCollege and school magazines and papers Room\u201d\n[|Down||||||] 1st floor",
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
      "description": "This is a small, one story tall, square-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cMusic\u201d engraved.\n\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
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
      "displayName": "Literature on music Room",
      "description": "Description for Literature on music Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Instruction and study Room",
      "description": "Description for Instruction and study Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Music Room",
      "description": "Description for Music Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Music Building Main Lobby",
      "description": "There are three rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n\n[|South|||||] Literature on music Room\n[|North|||||] Instruction and study Room\n[|East||||||] Music Room\n[|Exit||||||] Music Building Front Porch",
      "interactables": {},
      "items": {},
      "exits": {
        "M": {
          "displayName": "Exit",
          "destination": "M"
        },
        "building_M-ML": {
          "displayName": "South",
          "destination": "building_M-ML"
        },
        "building_M-MT": {
          "displayName": "North",
          "destination": "building_M-MT"
        },
        "building_M-M": {
          "displayName": "East",
          "destination": "building_M-M"
        }
      }
    },
    "N": {
      "firstVisit": true,
      "displayName": "\u201cFine Arts Building\u201d Front Porch",
      "description": "This is a small, one story tall, octagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cFine Arts\u201d engraved.\n\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
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
      "displayName": "Architecture Room",
      "description": "Description for Architecture Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Visual arts Room",
      "description": "Description for Visual arts Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Decorative arts Room",
      "description": "Description for Decorative arts Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Painting Room",
      "description": "Description for Painting Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Drawing.    Design.    Illustration Room",
      "description": "Description for Drawing.    Design.    Illustration Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Print media Room",
      "description": "Description for Print media Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Sculpture Room",
      "description": "Description for Sculpture Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Arts in general Room",
      "description": "Description for Arts in general Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Fine Arts Building Main Lobby",
      "description": "There are eight rooms throughout this building. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] Architecture Room\n[|North|||||] Visual arts Room\n[|East||||||] Decorative arts Room\n[|West||||||] Painting Room\n[|SouthEast|] Drawing.    Design.    Illustration Room\n[|NorthWest|] Print media Room\n[|SouthWest|] Sculpture Room\n[|NorthEast|] Arts in general Room\n[|Exit||||||] Fine Arts Building Front Porch",
      "interactables": {},
      "items": {},
      "exits": {
        "N": {
          "displayName": "Exit",
          "destination": "N"
        },
        "building_N-NA": {
          "displayName": "South",
          "destination": "building_N-NA"
        },
        "building_N-N": {
          "displayName": "North",
          "destination": "building_N-N"
        },
        "building_N-NK": {
          "displayName": "East",
          "destination": "building_N-NK"
        },
        "building_N-ND": {
          "displayName": "West",
          "destination": "building_N-ND"
        },
        "building_N-NC": {
          "displayName": "SouthEast",
          "destination": "building_N-NC"
        },
        "building_N-NE": {
          "displayName": "NorthWest",
          "destination": "building_N-NE"
        },
        "building_N-NB": {
          "displayName": "SouthWest",
          "destination": "building_N-NB"
        },
        "building_N-NX": {
          "displayName": "NorthEast",
          "destination": "building_N-NX"
        }
      }
    },
    "P": {
      "firstVisit": true,
      "displayName": "\u201cLanguage and Literature Building\u201d Front Porch",
      "description": "This is a small, one story tall, octagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cLanguage and Literature\u201d engraved.\n\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
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
      "displayName": "Fiction and juvenile belles lettres Room",
      "description": "Description for Fiction and juvenile belles lettres Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "English Room",
      "description": "Description for English Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "American literature Room",
      "description": "Description for American literature Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "French literature Room",
      "description": "Description for French literature Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "English Room",
      "description": "Description for English Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Literature (General) Room",
      "description": "Description for Literature (General) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "German literature Room",
      "description": "Description for German literature Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Greek literature Room",
      "description": "Description for Greek literature Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Language and Literature Building Main Lobby",
      "description": "There are 19 rooms throughout this building in three floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] Fiction and juvenile belles lettres Room\n[|North|||||] English Room\n[|East||||||] American literature Room\n[|West||||||] French literature Room\n[|SouthEast|] English Room\n[|NorthWest|] Literature (General) Room\n[|SouthWest|] German literature Room\n[|NorthEast|] Greek literature Room\n[|Up||||||||] 2nd floor\n[|Exit||||||] Language and Literature Building Front Porch",
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
        "building_P-PZ": {
          "displayName": "South",
          "destination": "building_P-PZ"
        },
        "building_P-PR": {
          "displayName": "North",
          "destination": "building_P-PR"
        },
        "building_P-PS": {
          "displayName": "East",
          "destination": "building_P-PS"
        },
        "building_P-PQ": {
          "displayName": "West",
          "destination": "building_P-PQ"
        },
        "building_P-PE": {
          "displayName": "SouthEast",
          "destination": "building_P-PE"
        },
        "building_P-PN": {
          "displayName": "NorthWest",
          "destination": "building_P-PN"
        },
        "building_P-PT": {
          "displayName": "SouthWest",
          "destination": "building_P-PT"
        },
        "building_P-PA": {
          "displayName": "NorthEast",
          "destination": "building_P-PA"
        }
      }
    },
    "building_P-PC": {
      "firstVisit": true,
      "displayName": "Romance Room",
      "description": "Description for Romance Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Indo-Iranian philology and literature Room",
      "description": "Description for Indo-Iranian philology and literature Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Philology.    Linguistics Room",
      "description": "Description for Philology.    Linguistics Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "West Germanic Room",
      "description": "Description for West Germanic Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Oriental philology and literature Room",
      "description": "Description for Oriental philology and literature Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Germanic Room",
      "description": "Description for Germanic Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Slavic.    Baltic.    Albanian Room",
      "description": "Description for Slavic.    Baltic.    Albanian Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Uralic.    Basque Room",
      "description": "Description for Uralic.    Basque Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Language and Literature Building, 2nd Floor",
      "description": "You are in the 2nd floor. There are eight rooms:\n\n[|South|||||] \u201cRomance Room\u201d\n[|North|||||] \u201cIndo-Iranian philology and literature Room\u201d\n[|East||||||] \u201cPhilology.    Linguistics Room\u201d\n[|West||||||] \u201cWest Germanic Room\u201d\n[|SouthEast|] \u201cOriental philology and literature Room\u201d\n[|NorthWest|] \u201cGermanic Room\u201d\n[|SouthWest|] \u201cSlavic.    Baltic.    Albanian Room\u201d\n[|NorthEast|] \u201cUralic.    Basque Room\u201d\n[|Down||||||] 1st floor\n[|Up||||||||] 3rd floor",
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
      "displayName": "Languages of Eastern Asia, Africa, Oceania Room",
      "description": "Description for Languages of Eastern Asia, Africa, Oceania Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Modern languages.    Celtic languages Room",
      "description": "Description for Modern languages.    Celtic languages Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Hyperborean, Indian, and artificial languages Room",
      "description": "Description for Hyperborean, Indian, and artificial languages Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Language and Literature Building, 3rd Floor",
      "description": "You are in the 3rd floor. There are three rooms:\n\n[|South|||||] \u201cLanguages of Eastern Asia, Africa, Oceania Room\u201d\n[|North|||||] \u201cModern languages.    Celtic languages Room\u201d\n[|East||||||] \u201cHyperborean, Indian, and artificial languages Room\u201d\n[|Down||||||] 2nd floor",
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
      "description": "This is a small, one story tall, octagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cScience\u201d engraved.\n\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
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
      "displayName": "Microbiology Room",
      "description": "Description for Microbiology Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Botany Room",
      "description": "Description for Botany Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Zoology Room",
      "description": "Description for Zoology Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Astronomy Room",
      "description": "Description for Astronomy Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Mathematics Room",
      "description": "Description for Mathematics Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Science (General) Room",
      "description": "Description for Science (General) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Physiology Room",
      "description": "Description for Physiology Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Biology (General) Room",
      "description": "Description for Biology (General) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Science Building Main Lobby",
      "description": "There are 12 rooms throughout this building in two floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] Microbiology Room\n[|North|||||] Botany Room\n[|East||||||] Zoology Room\n[|West||||||] Astronomy Room\n[|SouthEast|] Mathematics Room\n[|NorthWest|] Science (General) Room\n[|SouthWest|] Physiology Room\n[|NorthEast|] Biology (General) Room\n[|Up||||||||] 2nd floor\n[|Exit||||||] Science Building Front Porch",
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
        "building_Q-QR": {
          "displayName": "South",
          "destination": "building_Q-QR"
        },
        "building_Q-QK": {
          "displayName": "North",
          "destination": "building_Q-QK"
        },
        "building_Q-QL": {
          "displayName": "East",
          "destination": "building_Q-QL"
        },
        "building_Q-QB": {
          "displayName": "West",
          "destination": "building_Q-QB"
        },
        "building_Q-QA": {
          "displayName": "SouthEast",
          "destination": "building_Q-QA"
        },
        "building_Q-Q": {
          "displayName": "NorthWest",
          "destination": "building_Q-Q"
        },
        "building_Q-QP": {
          "displayName": "SouthWest",
          "destination": "building_Q-QP"
        },
        "building_Q-QH": {
          "displayName": "NorthEast",
          "destination": "building_Q-QH"
        }
      }
    },
    "building_Q-QD": {
      "firstVisit": true,
      "displayName": "Chemistry Room",
      "description": "Description for Chemistry Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Geology Room",
      "description": "Description for Geology Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Physics Room",
      "description": "Description for Physics Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Human anatomy Room",
      "description": "Description for Human anatomy Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Science Building, 2nd Floor",
      "description": "You are in the 2nd floor. There are four rooms:\n\n[|South|||||] \u201cChemistry Room\u201d\n[|North|||||] \u201cGeology Room\u201d\n[|East||||||] \u201cPhysics Room\u201d\n[|West||||||] \u201cHuman anatomy Room\u201d\n[|Down||||||] 1st floor",
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
      "description": "This is a small, one story tall, octagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cMedicine\u201d engraved.\n\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
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
      "displayName": "Homeopathy Room",
      "description": "Description for Homeopathy Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Public aspects of medicine Room",
      "description": "Description for Public aspects of medicine Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Surgery Room",
      "description": "Description for Surgery Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Ophthalmology Room",
      "description": "Description for Ophthalmology Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Internal medicine Room",
      "description": "Description for Internal medicine Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Gynecology and obstetrics Room",
      "description": "Description for Gynecology and obstetrics Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Dentistry Room",
      "description": "Description for Dentistry Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Pediatrics Room",
      "description": "Description for Pediatrics Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Medicine Building Main Lobby",
      "description": "There are 17 rooms throughout this building in three floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] Homeopathy Room\n[|North|||||] Public aspects of medicine Room\n[|East||||||] Surgery Room\n[|West||||||] Ophthalmology Room\n[|SouthEast|] Internal medicine Room\n[|NorthWest|] Gynecology and obstetrics Room\n[|SouthWest|] Dentistry Room\n[|NorthEast|] Pediatrics Room\n[|Up||||||||] 2nd floor\n[|Exit||||||] Medicine Building Front Porch",
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
        "building_R-RX": {
          "displayName": "South",
          "destination": "building_R-RX"
        },
        "building_R-RA": {
          "displayName": "North",
          "destination": "building_R-RA"
        },
        "building_R-RD": {
          "displayName": "East",
          "destination": "building_R-RD"
        },
        "building_R-RE": {
          "displayName": "West",
          "destination": "building_R-RE"
        },
        "building_R-RC": {
          "displayName": "SouthEast",
          "destination": "building_R-RC"
        },
        "building_R-RG": {
          "displayName": "NorthWest",
          "destination": "building_R-RG"
        },
        "building_R-RK": {
          "displayName": "SouthWest",
          "destination": "building_R-RK"
        },
        "building_R-RJ": {
          "displayName": "NorthEast",
          "destination": "building_R-RJ"
        }
      }
    },
    "building_R-RL": {
      "firstVisit": true,
      "displayName": "Dermatology Room",
      "description": "Description for Dermatology Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Pharmacy and materia medica Room",
      "description": "Description for Pharmacy and materia medica Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Therapeutics.    Pharmacology Room",
      "description": "Description for Therapeutics.    Pharmacology Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Medicine (General) Room",
      "description": "Description for Medicine (General) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Pathology Room",
      "description": "Description for Pathology Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Otorhinolaryngology Room",
      "description": "Description for Otorhinolaryngology Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Other systems of medicine Room",
      "description": "Description for Other systems of medicine Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Nursing Room",
      "description": "Description for Nursing Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Medicine Building, 2nd Floor",
      "description": "You are in the 2nd floor. There are eight rooms:\n\n[|South|||||] \u201cDermatology Room\u201d\n[|North|||||] \u201cPharmacy and materia medica Room\u201d\n[|East||||||] \u201cTherapeutics.    Pharmacology Room\u201d\n[|West||||||] \u201cMedicine (General) Room\u201d\n[|SouthEast|] \u201cPathology Room\u201d\n[|NorthWest|] \u201cOtorhinolaryngology Room\u201d\n[|SouthWest|] \u201cOther systems of medicine Room\u201d\n[|NorthEast|] \u201cNursing Room\u201d\n[|Down||||||] 1st floor\n[|Up||||||||] 3rd floor",
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
      "displayName": "Botanic, Thomsonian, and eclectic medicine Room",
      "description": "Description for Botanic, Thomsonian, and eclectic medicine Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Medicine Building, 3rd Floor",
      "description": "You are in the 3rd floor. There is one room:\n\n[|South|||||] \u201cBotanic, Thomsonian, and eclectic medicine Room\u201d\n[|Down||||||] 2nd floor",
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
      "description": "This is a small, one story tall, octagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cAgriculture\u201d engraved.\n\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
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
      "displayName": "Animal culture Room",
      "description": "Description for Animal culture Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Agriculture (General) Room",
      "description": "Description for Agriculture (General) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Aquaculture.    Fisheries.    Angling Room",
      "description": "Description for Aquaculture.    Fisheries.    Angling Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Plant culture Room",
      "description": "Description for Plant culture Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Hunting sports Room",
      "description": "Description for Hunting sports Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Forestry Room",
      "description": "Description for Forestry Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Agriculture Building Main Lobby",
      "description": "There are six rooms throughout this building. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] Animal culture Room\n[|North|||||] Agriculture (General) Room\n[|East||||||] Aquaculture.    Fisheries.    Angling Room\n[|West||||||] Plant culture Room\n[|SouthEast|] Hunting sports Room\n[|NorthWest|] Forestry Room\n[|Exit||||||] Agriculture Building Front Porch",
      "interactables": {},
      "items": {},
      "exits": {
        "S": {
          "displayName": "Exit",
          "destination": "S"
        },
        "building_S-SF": {
          "displayName": "South",
          "destination": "building_S-SF"
        },
        "building_S-S": {
          "displayName": "North",
          "destination": "building_S-S"
        },
        "building_S-SH": {
          "displayName": "East",
          "destination": "building_S-SH"
        },
        "building_S-SB": {
          "displayName": "West",
          "destination": "building_S-SB"
        },
        "building_S-SK": {
          "displayName": "SouthEast",
          "destination": "building_S-SK"
        },
        "building_S-SD": {
          "displayName": "NorthWest",
          "destination": "building_S-SD"
        }
      }
    },
    "T": {
      "firstVisit": true,
      "displayName": "\u201cTechnology Building\u201d Front Porch",
      "description": "This is a small, one story tall, octagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cTechnology\u201d engraved.\n\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
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
      "displayName": "Mining engineering.    Metallurgy Room",
      "description": "Description for Mining engineering.    Metallurgy Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Photography Room",
      "description": "Description for Photography Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Hydraulic engineering Room",
      "description": "Description for Hydraulic engineering Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Environmental technology.    Sanitary engineering Room",
      "description": "Description for Environmental technology.    Sanitary engineering Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Home economics Room",
      "description": "Description for Home economics Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Chemical technology Room",
      "description": "Description for Chemical technology Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Electrical engineering.    Electronics.    Nuclear Room",
      "description": "Description for Electrical engineering.    Electronics.    Nuclear Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Engineering (General).    Civil engineering (General) Room",
      "description": "Description for Engineering (General).    Civil engineering (General) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Technology Building Main Lobby",
      "description": "There are 17 rooms throughout this building in three floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] Mining engineering.    Metallurgy Room\n[|North|||||] Photography Room\n[|East||||||] Hydraulic engineering Room\n[|West||||||] Environmental technology.    Sanitary engineering Room\n[|SouthEast|] Home economics Room\n[|NorthWest|] Chemical technology Room\n[|SouthWest|] Electrical engineering.    Electronics.    Nuclear Room\n[|NorthEast|] Engineering (General).    Civil engineering (General) Room\n[|Up||||||||] 2nd floor\n[|Exit||||||] Technology Building Front Porch",
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
        "building_T-TN": {
          "displayName": "South",
          "destination": "building_T-TN"
        },
        "building_T-TR": {
          "displayName": "North",
          "destination": "building_T-TR"
        },
        "building_T-TC": {
          "displayName": "East",
          "destination": "building_T-TC"
        },
        "building_T-TD": {
          "displayName": "West",
          "destination": "building_T-TD"
        },
        "building_T-TX": {
          "displayName": "SouthEast",
          "destination": "building_T-TX"
        },
        "building_T-TP": {
          "displayName": "NorthWest",
          "destination": "building_T-TP"
        },
        "building_T-TK": {
          "displayName": "SouthWest",
          "destination": "building_T-TK"
        },
        "building_T-TA": {
          "displayName": "NorthEast",
          "destination": "building_T-TA"
        }
      }
    },
    "building_T-TS": {
      "firstVisit": true,
      "displayName": "Manufactures Room",
      "description": "Description for Manufactures Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Mechanical engineering and machinery Room",
      "description": "Description for Mechanical engineering and machinery Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Handicrafts.    Arts and crafts Room",
      "description": "Description for Handicrafts.    Arts and crafts Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Technology (General) Room",
      "description": "Description for Technology (General) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Building construction Room",
      "description": "Description for Building construction Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Railroad engineering and operation Room",
      "description": "Description for Railroad engineering and operation Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Motor vehicles.    Aeronautics.    Astronautics Room",
      "description": "Description for Motor vehicles.    Aeronautics.    Astronautics Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Bridge engineering Room",
      "description": "Description for Bridge engineering Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Technology Building, 2nd Floor",
      "description": "You are in the 2nd floor. There are eight rooms:\n\n[|South|||||] \u201cManufactures Room\u201d\n[|North|||||] \u201cMechanical engineering and machinery Room\u201d\n[|East||||||] \u201cHandicrafts.    Arts and crafts Room\u201d\n[|West||||||] \u201cTechnology (General) Room\u201d\n[|SouthEast|] \u201cBuilding construction Room\u201d\n[|NorthWest|] \u201cRailroad engineering and operation Room\u201d\n[|SouthWest|] \u201cMotor vehicles.    Aeronautics.    Astronautics Room\u201d\n[|NorthEast|] \u201cBridge engineering Room\u201d\n[|Down||||||] 1st floor\n[|Up||||||||] 3rd floor",
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
      "displayName": "Highway engineering.    Roads and pavements Room",
      "description": "Description for Highway engineering.    Roads and pavements Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Technology Building, 3rd Floor",
      "description": "You are in the 3rd floor. There is one room:\n\n[|South|||||] \u201cHighway engineering.    Roads and pavements Room\u201d\n[|Down||||||] 2nd floor",
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
      "description": "This is a small, one story tall, octagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cMilitary Science\u201d engraved.\n\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
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
      "displayName": "Military science (General) Room",
      "description": "Description for Military science (General) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Air forces.    Air warfare Room",
      "description": "Description for Air forces.    Air warfare Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Armies: Organization, distribution, military situation Room",
      "description": "Description for Armies: Organization, distribution, military situation Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Military administration Room",
      "description": "Description for Military administration Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Infantry Room",
      "description": "Description for Infantry Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Artillery Room",
      "description": "Description for Artillery Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Maintenance and transportation Room",
      "description": "Description for Maintenance and transportation Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Other services Room",
      "description": "Description for Other services Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Military Science Building Main Lobby",
      "description": "There are nine rooms throughout this building in two floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] Military science (General) Room\n[|North|||||] Air forces.    Air warfare Room\n[|East||||||] Armies: Organization, distribution, military situation Room\n[|West||||||] Military administration Room\n[|SouthEast|] Infantry Room\n[|NorthWest|] Artillery Room\n[|SouthWest|] Maintenance and transportation Room\n[|NorthEast|] Other services Room\n[|Up||||||||] 2nd floor\n[|Exit||||||] Military Science Building Front Porch",
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
        "building_U-U": {
          "displayName": "South",
          "destination": "building_U-U"
        },
        "building_U-UG": {
          "displayName": "North",
          "destination": "building_U-UG"
        },
        "building_U-UA": {
          "displayName": "East",
          "destination": "building_U-UA"
        },
        "building_U-UB": {
          "displayName": "West",
          "destination": "building_U-UB"
        },
        "building_U-UD": {
          "displayName": "SouthEast",
          "destination": "building_U-UD"
        },
        "building_U-UF": {
          "displayName": "NorthWest",
          "destination": "building_U-UF"
        },
        "building_U-UC": {
          "displayName": "SouthWest",
          "destination": "building_U-UC"
        },
        "building_U-UH": {
          "displayName": "NorthEast",
          "destination": "building_U-UH"
        }
      }
    },
    "building_U-UE": {
      "firstVisit": true,
      "displayName": "Cavalry.    Armor Room",
      "description": "Description for Cavalry.    Armor Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Military Science Building, 2nd Floor",
      "description": "You are in the 2nd floor. There is one room:\n\n[|South|||||] \u201cCavalry.    Armor Room\u201d\n[|Down||||||] 1st floor",
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
      "description": "This is a small, one story tall, octagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cNaval Science\u201d engraved.\n\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
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
      "displayName": "Navies: Organization, distribution, naval situation Room",
      "description": "Description for Navies: Organization, distribution, naval situation Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Naval architecture.    Shipbuilding.    Marine engineering Room",
      "description": "Description for Naval architecture.    Shipbuilding.    Marine engineering Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Navigation.    Merchant marine Room",
      "description": "Description for Navigation.    Merchant marine Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Minor services of navies Room",
      "description": "Description for Minor services of navies Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Naval science (General) Room",
      "description": "Description for Naval science (General) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Naval administration Room",
      "description": "Description for Naval administration Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Marines Room",
      "description": "Description for Marines Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Naval ordnance Room",
      "description": "Description for Naval ordnance Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Naval Science Building Main Lobby",
      "description": "There are 10 rooms throughout this building in two floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] Navies: Organization, distribution, naval situation Room\n[|North|||||] Naval architecture.    Shipbuilding.    Marine engineering Room\n[|East||||||] Navigation.    Merchant marine Room\n[|West||||||] Minor services of navies Room\n[|SouthEast|] Naval science (General) Room\n[|NorthWest|] Naval administration Room\n[|SouthWest|] Marines Room\n[|NorthEast|] Naval ordnance Room\n[|Up||||||||] 2nd floor\n[|Exit||||||] Naval Science Building Front Porch",
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
        "building_V-VA": {
          "displayName": "South",
          "destination": "building_V-VA"
        },
        "building_V-VM": {
          "displayName": "North",
          "destination": "building_V-VM"
        },
        "building_V-VK": {
          "displayName": "East",
          "destination": "building_V-VK"
        },
        "building_V-VG": {
          "displayName": "West",
          "destination": "building_V-VG"
        },
        "building_V-V": {
          "displayName": "SouthEast",
          "destination": "building_V-V"
        },
        "building_V-VB": {
          "displayName": "NorthWest",
          "destination": "building_V-VB"
        },
        "building_V-VE": {
          "displayName": "SouthWest",
          "destination": "building_V-VE"
        },
        "building_V-VF": {
          "displayName": "NorthEast",
          "destination": "building_V-VF"
        }
      }
    },
    "building_V-VC": {
      "firstVisit": true,
      "displayName": "Naval maintenance Room",
      "description": "Description for Naval maintenance Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Naval personnel Room",
      "description": "Description for Naval personnel Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Naval Science Building, 2nd Floor",
      "description": "You are in the 2nd floor. There are two rooms:\n\n[|South|||||] \u201cNaval maintenance Room\u201d\n[|North|||||] \u201cNaval personnel Room\u201d\n[|Down||||||] 1st floor",
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
      "description": "This is a small, one story tall, square-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cBibliography, Library Science\u201d engraved.\n\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
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
      "displayName": "National bibliography Room",
      "description": "Description for National bibliography Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Information resources (General) Room",
      "description": "Description for Information resources (General) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
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
      "displayName": "Bibliography, Library Science Building Main Lobby",
      "description": "There are two rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n\n[|South|||||] National bibliography Room\n[|North|||||] Information resources (General) Room\n[|Exit||||||] Bibliography, Library Science Building Front Porch",
      "interactables": {},
      "items": {},
      "exits": {
        "Z": {
          "displayName": "Exit",
          "destination": "Z"
        },
        "building_Z-Z": {
          "displayName": "South",
          "destination": "building_Z-Z"
        },
        "building_Z-ZA": {
          "displayName": "North",
          "destination": "building_Z-ZA"
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
