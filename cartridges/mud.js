var gameData = {
  "gameOver": false,
  "introText": "\n\nWelcome to the MUD of Babel!\n",
  "outroText": "Thanks For playing!",
  "player": {
    "currentLocation": "MAIN",
    "inventory": {},
    "name": "",
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
      "displayName": "General Works Building Front Porch",
      "description": "This is a small, two story tall, hexagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cGeneral Works\u201d engraved.\n\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
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
    "building_A": {
      "firstVisit": true,
      "displayName": "General Works Building Main Lobby",
      "description": "There are 10 rooms throughout this building in two floors. You are in the first floor. The building is hexagonal-shaped with walls facing South, North, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] Collections.  Series.  Collected works Room\n[|North|||||] Encyclopedias Room\n[|SouthEast|] Dictionaries and other general reference works Room\n[|NorthWest|] History of scholarship and learning.  The humanities Room\n[|SouthWest|] Museums.  Collectors and collecting Room\n[|NorthEast|] Academies and learned societies Room\n[|Up||||||||] 2nd floor\n[|Exit||||||] General Works Building Front Porch",
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
          "displayName": "SouthEast",
          "destination": "building_A-AG"
        },
        "building_A-AZ": {
          "displayName": "NorthWest",
          "destination": "building_A-AZ"
        },
        "building_A-AM": {
          "displayName": "SouthWest",
          "destination": "building_A-AM"
        },
        "building_A-AS": {
          "displayName": "NorthEast",
          "destination": "building_A-AS"
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
          "destination": "2_building_A"
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
          "destination": "2_building_A"
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
      "description": "You are in the 2nd floor. There are four rooms:\n\n[|South|||||] Periodicals Room\n[|North|||||] Yearbooks.  Almanacs.  Directories Room\n[|SouthEast|] Indexes Room\n[|NorthWest|] Newspapers Room\n[|Down||||||] 1st floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_A-AP": {
          "displayName": "South",
          "destination": "building_A-AP"
        },
        "building_A-AY": {
          "displayName": "North",
          "destination": "building_A-AY"
        },
        "building_A-AI": {
          "displayName": "SouthEast",
          "destination": "building_A-AI"
        },
        "building_A-AN": {
          "displayName": "NorthWest",
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
      "displayName": "Philosophy, Psychology, Religion Building Front Porch",
      "description": "This is a small, three story tall, hexagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cPhilosophy, Psychology, Religion\u201d engraved.\n\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
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
    "building_B": {
      "firstVisit": true,
      "displayName": "Philosophy, Psychology, Religion Building Main Lobby",
      "description": "There are 15 rooms throughout this building in three floors. You are in the first floor. The building is hexagonal-shaped with walls facing South, North, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] Practical Theology Room\n[|North|||||] Ethics Room\n[|SouthEast|] Christian Denominations Room\n[|NorthWest|] Psychology Room\n[|SouthWest|] The Bible Room\n[|NorthEast|] Doctrinal Theology Room\n[|Up||||||||] 2nd floor\n[|Exit||||||] Philosophy, Psychology, Religion Building Front Porch",
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
          "displayName": "SouthEast",
          "destination": "building_B-BX"
        },
        "building_B-BF": {
          "displayName": "NorthWest",
          "destination": "building_B-BF"
        },
        "building_B-BS": {
          "displayName": "SouthWest",
          "destination": "building_B-BS"
        },
        "building_B-BT": {
          "displayName": "NorthEast",
          "destination": "building_B-BT"
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
          "destination": "2_building_B"
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
          "destination": "2_building_B"
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
    "2_building_B": {
      "firstVisit": true,
      "displayName": "Philosophy, Psychology, Religion Building, 2nd Floor",
      "description": "You are in the 2nd floor. There are six rooms:\n\n[|South|||||] Philosophy (General) Room\n[|North|||||] Christianity Room\n[|SouthEast|] Religions.  Mythology.  Rationalism Room\n[|NorthWest|] Islam.  Bahai Faith.  Theosophy, etc. Room\n[|SouthWest|] Judaism Room\n[|NorthEast|] Logic Room\n[|Down||||||] 1st floor\n[|Up||||||||] 3rd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_B-B": {
          "displayName": "South",
          "destination": "building_B-B"
        },
        "building_B-BR": {
          "displayName": "North",
          "destination": "building_B-BR"
        },
        "building_B-BL": {
          "displayName": "SouthEast",
          "destination": "building_B-BL"
        },
        "building_B-BP": {
          "displayName": "NorthWest",
          "destination": "building_B-BP"
        },
        "building_B-BM": {
          "displayName": "SouthWest",
          "destination": "building_B-BM"
        },
        "building_B-BC": {
          "displayName": "NorthEast",
          "destination": "building_B-BC"
        },
        "down": {
          "displayName": "Down",
          "destination": "building_B"
        },
        "up": {
          "displayName": "Up",
          "destination": "3_building_B"
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
          "destination": "3_building_B"
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
          "destination": "3_building_B"
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
          "destination": "3_building_B"
        }
      }
    },
    "3_building_B": {
      "firstVisit": true,
      "displayName": "Philosophy, Psychology, Religion Building, 3rd Floor",
      "description": "You are in the 3rd floor. There are three rooms:\n\n[|South|||||] Buddhism Room\n[|North|||||] Speculative philosophy Room\n[|SouthEast|] Aesthetics Room\n[|Down||||||] 2nd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_B-BQ": {
          "displayName": "South",
          "destination": "building_B-BQ"
        },
        "building_B-BD": {
          "displayName": "North",
          "destination": "building_B-BD"
        },
        "building_B-BH": {
          "displayName": "SouthEast",
          "destination": "building_B-BH"
        },
        "down": {
          "displayName": "Down",
          "destination": "2_building_B"
        }
      }
    },
    "C": {
      "firstVisit": true,
      "displayName": "Auxiliary Sciences of History (General) Building Front Porch",
      "description": "This is a small, two story tall, hexagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cAuxiliary Sciences of History (General)\u201d engraved.\n\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
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
    "building_C": {
      "firstVisit": true,
      "displayName": "Auxiliary Sciences of History (General) Building Main Lobby",
      "description": "There are 10 rooms throughout this building in two floors. You are in the first floor. The building is hexagonal-shaped with walls facing South, North, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] Biography Room\n[|North|||||] Genealogy Room\n[|SouthEast|] Heraldry Room\n[|NorthWest|] History of Civilization Room\n[|SouthWest|] Numismatics Room\n[|NorthEast|] Archaeology Room\n[|Up||||||||] 2nd floor\n[|Exit||||||] Auxiliary Sciences of History (General) Building Front Porch",
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
          "displayName": "SouthEast",
          "destination": "building_C-CR"
        },
        "building_C-CB": {
          "displayName": "NorthWest",
          "destination": "building_C-CB"
        },
        "building_C-CJ": {
          "displayName": "SouthWest",
          "destination": "building_C-CJ"
        },
        "building_C-CC": {
          "displayName": "NorthEast",
          "destination": "building_C-CC"
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
          "destination": "2_building_C"
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
          "destination": "2_building_C"
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
      "description": "You are in the 2nd floor. There are four rooms:\n\n[|South|||||] Inscriptions.  Epigraphy Room\n[|North|||||] Diplomatics.  Archives.  Seals Room\n[|SouthEast|] Technical chronology.  Calendar Room\n[|NorthWest|] Auxiliary Sciences of History (General) Room\n[|Down||||||] 1st floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_C-CN": {
          "displayName": "South",
          "destination": "building_C-CN"
        },
        "building_C-CD": {
          "displayName": "North",
          "destination": "building_C-CD"
        },
        "building_C-CE": {
          "displayName": "SouthEast",
          "destination": "building_C-CE"
        },
        "building_C-C": {
          "displayName": "NorthWest",
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
      "displayName": "World History (except American History) Building Front Porch",
      "description": "This is a small, four story tall, hexagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cWorld History (except American History)\u201d engraved.\n\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
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
    "building_D": {
      "firstVisit": true,
      "displayName": "World History (except American History) Building Main Lobby",
      "description": "There are 21 rooms throughout this building in four floors. You are in the first floor. The building is hexagonal-shaped with walls facing South, North, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] History of Asia Room\n[|North|||||] History (General) Room\n[|SouthEast|] History of Great Britain Room\n[|NorthWest|] History of Africa Room\n[|SouthWest|] History of Italy Room\n[|NorthEast|] History of France Room\n[|Up||||||||] 2nd floor\n[|Exit||||||] World History (except American History) Building Front Porch",
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
          "displayName": "SouthEast",
          "destination": "building_D-DA"
        },
        "building_D-DT": {
          "displayName": "NorthWest",
          "destination": "building_D-DT"
        },
        "building_D-DG": {
          "displayName": "SouthWest",
          "destination": "building_D-DG"
        },
        "building_D-DC": {
          "displayName": "NorthEast",
          "destination": "building_D-DC"
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
          "destination": "2_building_D"
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
          "destination": "2_building_D"
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
    "2_building_D": {
      "firstVisit": true,
      "displayName": "World History (except American History) Building, 2nd Floor",
      "description": "You are in the 2nd floor. There are six rooms:\n\n[|South|||||] History of Germany Room\n[|North|||||] History of Low Countries.  Benelux Countries Room\n[|SouthEast|] History of Oceania (South Seas) Room\n[|NorthWest|] History of Russia.  Soviet Union.  Former Soviet Republics Room\n[|SouthWest|] History of the Greco-Roman world Room\n[|NorthEast|] History of Balkan Peninsula Room\n[|Down||||||] 1st floor\n[|Up||||||||] 3rd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_D-DD": {
          "displayName": "South",
          "destination": "building_D-DD"
        },
        "building_D-DH": {
          "displayName": "North",
          "destination": "building_D-DH"
        },
        "building_D-DU": {
          "displayName": "SouthEast",
          "destination": "building_D-DU"
        },
        "building_D-DK": {
          "displayName": "NorthWest",
          "destination": "building_D-DK"
        },
        "building_D-DE": {
          "displayName": "SouthWest",
          "destination": "building_D-DE"
        },
        "building_D-DR": {
          "displayName": "NorthEast",
          "destination": "building_D-DR"
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
    "building_D-DP": {
      "firstVisit": true,
      "displayName": "History of Spain Room",
      "description": "Description for History of Spain Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_building_D"
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
          "destination": "3_building_D"
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
          "destination": "3_building_D"
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
    "3_building_D": {
      "firstVisit": true,
      "displayName": "World History (except American History) Building, 3rd Floor",
      "description": "You are in the 3rd floor. There are six rooms:\n\n[|South|||||] History of Spain Room\n[|North|||||] History of Greece Room\n[|SouthEast|] History of Eastern Europe (General) Room\n[|NorthWest|] History of Austria.  Liechtenstein.  Hungary.  Czechoslovakia Room\n[|SouthWest|] History of Northern Europe.  Scandinavia Room\n[|NorthEast|] History of Switzerland Room\n[|Down||||||] 2nd floor\n[|Up||||||||] 4th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_D-DP": {
          "displayName": "South",
          "destination": "building_D-DP"
        },
        "building_D-DF": {
          "displayName": "North",
          "destination": "building_D-DF"
        },
        "building_D-DJK": {
          "displayName": "SouthEast",
          "destination": "building_D-DJK"
        },
        "building_D-DB": {
          "displayName": "NorthWest",
          "destination": "building_D-DB"
        },
        "building_D-DL": {
          "displayName": "SouthWest",
          "destination": "building_D-DL"
        },
        "building_D-DQ": {
          "displayName": "NorthEast",
          "destination": "building_D-DQ"
        },
        "down": {
          "displayName": "Down",
          "destination": "2_building_D"
        },
        "up": {
          "displayName": "Up",
          "destination": "4_building_D"
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
          "destination": "4_building_D"
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
          "destination": "4_building_D"
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
          "destination": "4_building_D"
        }
      }
    },
    "4_building_D": {
      "firstVisit": true,
      "displayName": "World History (except American History) Building, 4th Floor",
      "description": "You are in the 4th floor. There are three rooms:\n\n[|South|||||] History of Central Europe Room\n[|North|||||] History of Netherlands (Holland) Room\n[|SouthEast|] History of Romanies Room\n[|Down||||||] 3rd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_D-DAW": {
          "displayName": "South",
          "destination": "building_D-DAW"
        },
        "building_D-DJ": {
          "displayName": "North",
          "destination": "building_D-DJ"
        },
        "building_D-DX": {
          "displayName": "SouthEast",
          "destination": "building_D-DX"
        },
        "down": {
          "displayName": "Down",
          "destination": "3_building_D"
        }
      }
    },
    "E": {
      "firstVisit": true,
      "displayName": "American History Building Front Porch",
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
      "description": "There is one room throughout this building. The building is square-shaped with walls facing South, North, SouthEast, NorthWest. The room in this floor is:\n\n[|South|||||] United States Room\n[|Exit||||||] American History Building Front Porch",
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
      "displayName": "Local History of the United States and British, Dutch, French, and Latin America Building Front Porch",
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
      "description": "There is one room throughout this building. The building is square-shaped with walls facing South, North, SouthEast, NorthWest. The room in this floor is:\n\n[|South|||||] Latin America.  Spanish America Room\n[|Exit||||||] Local History of the United States and British, Dutch, French, and Latin America Building Front Porch",
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
      "displayName": "Geography, Anthropology, Recreation Building Front Porch",
      "description": "This is a small, two story tall, hexagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cGeography, Anthropology, Recreation\u201d engraved.\n\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
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
    "building_G": {
      "firstVisit": true,
      "displayName": "Geography, Anthropology, Recreation Building Main Lobby",
      "description": "There are 10 rooms throughout this building in two floors. You are in the first floor. The building is hexagonal-shaped with walls facing South, North, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] Maps Room\n[|North|||||] Recreation.  Leisure Room\n[|SouthEast|] Mathematical geography.  Cartography Room\n[|NorthWest|] Anthropology Room\n[|SouthWest|] Folklore Room\n[|NorthEast|] Manners and customs (General) Room\n[|Up||||||||] 2nd floor\n[|Exit||||||] Geography, Anthropology, Recreation Building Front Porch",
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
          "displayName": "SouthEast",
          "destination": "building_G-GA"
        },
        "building_G-GN": {
          "displayName": "NorthWest",
          "destination": "building_G-GN"
        },
        "building_G-GR": {
          "displayName": "SouthWest",
          "destination": "building_G-GR"
        },
        "building_G-GT": {
          "displayName": "NorthEast",
          "destination": "building_G-GT"
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
          "destination": "2_building_G"
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
          "destination": "2_building_G"
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
      "description": "You are in the 2nd floor. There are four rooms:\n\n[|South|||||] Oceanography Room\n[|North|||||] Physical geography Room\n[|SouthEast|] Environmental sciences Room\n[|NorthWest|] Human ecology.  Anthropogeography Room\n[|Down||||||] 1st floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_G-GC": {
          "displayName": "South",
          "destination": "building_G-GC"
        },
        "building_G-GB": {
          "displayName": "North",
          "destination": "building_G-GB"
        },
        "building_G-GE": {
          "displayName": "SouthEast",
          "destination": "building_G-GE"
        },
        "building_G-GF": {
          "displayName": "NorthWest",
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
      "displayName": "Social Sciences Building Front Porch",
      "description": "This is a small, three story tall, hexagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cSocial Sciences\u201d engraved.\n\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
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
    "building_H": {
      "firstVisit": true,
      "displayName": "Social Sciences Building Main Lobby",
      "description": "There are 16 rooms throughout this building in three floors. You are in the first floor. The building is hexagonal-shaped with walls facing South, North, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] Commerce Room\n[|North|||||] Socialism.  Communism.  Anarchism Room\n[|SouthEast|] Industries.  Land use.  Labor Room\n[|NorthWest|] Finance Room\n[|SouthWest|] Economic theory.  Demography Room\n[|NorthEast|] The Family.  Marriage.  Women Room\n[|Up||||||||] 2nd floor\n[|Exit||||||] Social Sciences Building Front Porch",
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
          "displayName": "SouthEast",
          "destination": "building_H-HD"
        },
        "building_H-HG": {
          "displayName": "NorthWest",
          "destination": "building_H-HG"
        },
        "building_H-HB": {
          "displayName": "SouthWest",
          "destination": "building_H-HB"
        },
        "building_H-HQ": {
          "displayName": "NorthEast",
          "destination": "building_H-HQ"
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
          "destination": "2_building_H"
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
          "destination": "2_building_H"
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
    "2_building_H": {
      "firstVisit": true,
      "displayName": "Social Sciences Building, 2nd Floor",
      "description": "You are in the 2nd floor. There are six rooms:\n\n[|South|||||] Social sciences (General) Room\n[|North|||||] Transportation and communications Room\n[|SouthEast|] Sociology Room\n[|NorthWest|] Public finance Room\n[|SouthWest|] Social history and conditions.  Social problems. Room\n[|NorthEast|] Societies: secret, benevolent, etc. Room\n[|Down||||||] 1st floor\n[|Up||||||||] 3rd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_H-H": {
          "displayName": "South",
          "destination": "building_H-H"
        },
        "building_H-HE": {
          "displayName": "North",
          "destination": "building_H-HE"
        },
        "building_H-HM": {
          "displayName": "SouthEast",
          "destination": "building_H-HM"
        },
        "building_H-HJ": {
          "displayName": "NorthWest",
          "destination": "building_H-HJ"
        },
        "building_H-HN": {
          "displayName": "SouthWest",
          "destination": "building_H-HN"
        },
        "building_H-HS": {
          "displayName": "NorthEast",
          "destination": "building_H-HS"
        },
        "down": {
          "displayName": "Down",
          "destination": "building_H"
        },
        "up": {
          "displayName": "Up",
          "destination": "3_building_H"
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
          "destination": "3_building_H"
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
          "destination": "3_building_H"
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
          "destination": "3_building_H"
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
          "destination": "3_building_H"
        }
      }
    },
    "3_building_H": {
      "firstVisit": true,
      "displayName": "Social Sciences Building, 3rd Floor",
      "description": "You are in the 3rd floor. There are four rooms:\n\n[|South|||||] Social pathology.  Social and public welfare. Room\n[|North|||||] Economic history and conditions Room\n[|SouthEast|] Statistics Room\n[|NorthWest|] Communities.  Classes.  Races Room\n[|Down||||||] 2nd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_H-HV": {
          "displayName": "South",
          "destination": "building_H-HV"
        },
        "building_H-HC": {
          "displayName": "North",
          "destination": "building_H-HC"
        },
        "building_H-HA": {
          "displayName": "SouthEast",
          "destination": "building_H-HA"
        },
        "building_H-HT": {
          "displayName": "NorthWest",
          "destination": "building_H-HT"
        },
        "down": {
          "displayName": "Down",
          "destination": "2_building_H"
        }
      }
    },
    "J": {
      "firstVisit": true,
      "displayName": "Political Science Building Front Porch",
      "description": "This is a small, three story tall, hexagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cPolitical Science\u201d engraved.\n\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
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
    "building_J": {
      "firstVisit": true,
      "displayName": "Political Science Building Main Lobby",
      "description": "There are 13 rooms throughout this building in three floors. You are in the first floor. The building is hexagonal-shaped with walls facing South, North, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] Political institutions and public administration Room\n[|North|||||] Political theory.  The state.  Theories of the state Room\n[|SouthEast|] Political institutions and public administration Room\n[|NorthWest|] Local government.  Municipal government Room\n[|SouthWest|] Colonies and colonization.  Emigration and Room\n[|NorthEast|] Political science (General) Room\n[|Up||||||||] 2nd floor\n[|Exit||||||] Political Science Building Front Porch",
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
          "displayName": "SouthEast",
          "destination": "building_J-JK"
        },
        "building_J-JS": {
          "displayName": "NorthWest",
          "destination": "building_J-JS"
        },
        "building_J-JV": {
          "displayName": "SouthWest",
          "destination": "building_J-JV"
        },
        "building_J-JA": {
          "displayName": "NorthEast",
          "destination": "building_J-JA"
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
          "destination": "2_building_J"
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
          "destination": "2_building_J"
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
    "2_building_J": {
      "firstVisit": true,
      "displayName": "Political Science Building, 2nd Floor",
      "description": "You are in the 2nd floor. There are six rooms:\n\n[|South|||||] International law, see JZ and KZ Room\n[|North|||||] Political institutions and public administration (Europe) Room\n[|SouthEast|] International relations Room\n[|NorthWest|] Political institutions and public administration Room\n[|SouthWest|] General legislative and executive papers Room\n[|NorthEast|] Political institutions and public administration (Asia, Room\n[|Down||||||] 1st floor\n[|Up||||||||] 3rd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_J-JX": {
          "displayName": "South",
          "destination": "building_J-JX"
        },
        "building_J-JN": {
          "displayName": "North",
          "destination": "building_J-JN"
        },
        "building_J-JZ": {
          "displayName": "SouthEast",
          "destination": "building_J-JZ"
        },
        "building_J-JL": {
          "displayName": "NorthWest",
          "destination": "building_J-JL"
        },
        "building_J-J": {
          "displayName": "SouthWest",
          "destination": "building_J-J"
        },
        "building_J-JQ": {
          "displayName": "NorthEast",
          "destination": "building_J-JQ"
        },
        "down": {
          "displayName": "Down",
          "destination": "building_J"
        },
        "up": {
          "displayName": "Up",
          "destination": "3_building_J"
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
          "destination": "3_building_J"
        }
      }
    },
    "3_building_J": {
      "firstVisit": true,
      "displayName": "Political Science Building, 3rd Floor",
      "description": "You are in the 3rd floor. There is one room:\n\n[|South|||||] Political institutions and public administration Room\n[|Down||||||] 2nd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_J-JJ": {
          "displayName": "South",
          "destination": "building_J-JJ"
        },
        "down": {
          "displayName": "Down",
          "destination": "2_building_J"
        }
      }
    },
    "K": {
      "firstVisit": true,
      "displayName": "Law Building Front Porch",
      "description": "This is a tall, 46 story tall, hexagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cLaw\u201d engraved.\n\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
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
    "building_K": {
      "firstVisit": true,
      "displayName": "Law Building Main Lobby",
      "description": "There are 275 rooms throughout this building in 46 floors. You are in the first floor. The building is hexagonal-shaped with walls facing South, North, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] Law of the United States (Federal) Room\n[|North|||||] Law of Washington Room\n[|SouthEast|] Law of Maine Room\n[|NorthWest|] Law of Tennessee Room\n[|SouthWest|] Comparative law.  International uniform law Room\n[|NorthEast|] Law of nations Room\n[|Up||||||||] 2nd floor\n[|Exit||||||] Law Building Front Porch",
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
          "displayName": "SouthEast",
          "destination": "building_K-KFM"
        },
        "building_K-KFT": {
          "displayName": "NorthWest",
          "destination": "building_K-KFT"
        },
        "building_K-K": {
          "displayName": "SouthWest",
          "destination": "building_K-K"
        },
        "building_K-KZ": {
          "displayName": "NorthEast",
          "destination": "building_K-KZ"
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
          "destination": "2_building_K"
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
          "destination": "2_building_K"
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
    "2_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 2nd Floor",
      "description": "You are in the 2nd floor. There are six rooms:\n\n[|South|||||] Law of England and Wales Room\n[|North|||||] Law of Pennsylvania Room\n[|SouthEast|] Law of Idaho Room\n[|NorthWest|] Law of Nebraska Room\n[|SouthWest|] Law of California Room\n[|NorthEast|] Law of Ohio Room\n[|Down||||||] 1st floor\n[|Up||||||||] 3rd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KD": {
          "displayName": "South",
          "destination": "building_K-KD"
        },
        "building_K-KFP": {
          "displayName": "North",
          "destination": "building_K-KFP"
        },
        "building_K-KFI": {
          "displayName": "SouthEast",
          "destination": "building_K-KFI"
        },
        "building_K-KFN": {
          "displayName": "NorthWest",
          "destination": "building_K-KFN"
        },
        "building_K-KFC": {
          "displayName": "SouthWest",
          "destination": "building_K-KFC"
        },
        "building_K-KFO": {
          "displayName": "NorthEast",
          "destination": "building_K-KFO"
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
    "building_K-KFL": {
      "firstVisit": true,
      "displayName": "Law of Louisiana Room",
      "description": "Description for Law of Louisiana Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_building_K"
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
          "destination": "3_building_K"
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
          "destination": "3_building_K"
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
    "3_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 3rd Floor",
      "description": "You are in the 3rd floor. There are six rooms:\n\n[|South|||||] Law of Louisiana Room\n[|North|||||] Law of Alabama Room\n[|SouthEast|] Russia, Soviet Union Room\n[|NorthWest|] Law of Spain Room\n[|SouthWest|] Saudi Arabia Room\n[|NorthEast|] Law of Croatia Room\n[|Down||||||] 2nd floor\n[|Up||||||||] 4th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KFL": {
          "displayName": "South",
          "destination": "building_K-KFL"
        },
        "building_K-KFA": {
          "displayName": "North",
          "destination": "building_K-KFA"
        },
        "building_K-KLA": {
          "displayName": "SouthEast",
          "destination": "building_K-KLA"
        },
        "building_K-KKT": {
          "displayName": "NorthWest",
          "destination": "building_K-KKT"
        },
        "building_K-KMT": {
          "displayName": "SouthWest",
          "destination": "building_K-KMT"
        },
        "building_K-KJM": {
          "displayName": "NorthEast",
          "destination": "building_K-KJM"
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
    "building_K-KBP": {
      "firstVisit": true,
      "displayName": "Islamic law.  Shar\u012b\u02bbah.  Fiqh Room",
      "description": "Description for Islamic law.  Shar\u012b\u02bbah.  Fiqh Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "4_building_K"
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
          "destination": "4_building_K"
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
          "destination": "4_building_K"
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
          "destination": "4_building_K"
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
          "destination": "4_building_K"
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
          "destination": "4_building_K"
        }
      }
    },
    "4_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 4th Floor",
      "description": "You are in the 4th floor. There are six rooms:\n\n[|South|||||] Islamic law.  Shar\u012b\u02bbah.  Fiqh Room\n[|North|||||] History of canon law Room\n[|SouthEast|] Law of the sea Room\n[|NorthWest|] China (People\u2019s Republic, 1949-    ) Room\n[|SouthWest|] Regional organization and integration (Europe) Room\n[|NorthEast|] Law of Vermont Room\n[|Down||||||] 3rd floor\n[|Up||||||||] 5th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KBP": {
          "displayName": "South",
          "destination": "building_K-KBP"
        },
        "building_K-KBR": {
          "displayName": "North",
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
          "destination": "3_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "5_building_K"
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
          "destination": "5_building_K"
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
          "destination": "5_building_K"
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
          "destination": "5_building_K"
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
          "destination": "5_building_K"
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
          "destination": "5_building_K"
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
          "destination": "5_building_K"
        }
      }
    },
    "5_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 5th Floor",
      "description": "You are in the 5th floor. There are six rooms:\n\n[|South|||||] Law of China Room\n[|North|||||] West Bank Room\n[|SouthEast|] Regional comparative and uniform law (Europe) Room\n[|NorthWest|] Israel Room\n[|SouthWest|] South Africa, Republic of Room\n[|NorthEast|] Regional comparative and uniform law Room\n[|Down||||||] 4th floor\n[|Up||||||||] 6th floor",
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
          "displayName": "SouthEast",
          "destination": "building_K-KJC"
        },
        "building_K-KMK": {
          "displayName": "NorthWest",
          "destination": "building_K-KMK"
        },
        "building_K-KTL": {
          "displayName": "SouthWest",
          "destination": "building_K-KTL"
        },
        "building_K-KMC": {
          "displayName": "NorthEast",
          "destination": "building_K-KMC"
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
    "building_K-KEN": {
      "firstVisit": true,
      "displayName": "Law of New Brunswick Room",
      "description": "Description for Law of New Brunswick Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "6_building_K"
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
          "destination": "6_building_K"
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
          "destination": "6_building_K"
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
          "destination": "6_building_K"
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
          "destination": "6_building_K"
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
          "destination": "6_building_K"
        }
      }
    },
    "6_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 6th Floor",
      "description": "You are in the 6th floor. There are six rooms:\n\n[|South|||||] Law of New Brunswick Room\n[|North|||||] Ethiopia Room\n[|SouthEast|] Roman Law Room\n[|NorthWest|] Law of France Room\n[|SouthWest|] Law of the Roman Catholic Church. The Holy See Room\n[|NorthEast|] Russia (Federation, 1992-    ) Room\n[|Down||||||] 5th floor\n[|Up||||||||] 7th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KEN": {
          "displayName": "South",
          "destination": "building_K-KEN"
        },
        "building_K-KRP": {
          "displayName": "North",
          "destination": "building_K-KRP"
        },
        "building_K-KJA": {
          "displayName": "SouthEast",
          "destination": "building_K-KJA"
        },
        "building_K-KJV": {
          "displayName": "NorthWest",
          "destination": "building_K-KJV"
        },
        "building_K-KBU": {
          "displayName": "SouthWest",
          "destination": "building_K-KBU"
        },
        "building_K-KLB": {
          "displayName": "NorthEast",
          "destination": "building_K-KLB"
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
    "building_K-KK": {
      "firstVisit": true,
      "displayName": "Law of Germany Room",
      "description": "Description for Law of Germany Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "7_building_K"
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
          "destination": "7_building_K"
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
          "destination": "7_building_K"
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
          "destination": "7_building_K"
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
          "destination": "7_building_K"
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
          "destination": "7_building_K"
        }
      }
    },
    "7_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 7th Floor",
      "description": "You are in the 7th floor. There are six rooms:\n\n[|South|||||] Law of Germany Room\n[|North|||||] Law of Georgia Room\n[|SouthEast|] Argentina Room\n[|NorthWest|] Uzbekistan Room\n[|SouthWest|] Indonesia Room\n[|NorthEast|] Regional comparative and uniform law Room\n[|Down||||||] 6th floor\n[|Up||||||||] 8th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KK": {
          "displayName": "South",
          "destination": "building_K-KK"
        },
        "building_K-KFG": {
          "displayName": "North",
          "destination": "building_K-KFG"
        },
        "building_K-KHA": {
          "displayName": "SouthEast",
          "destination": "building_K-KHA"
        },
        "building_K-KLW": {
          "displayName": "NorthWest",
          "destination": "building_K-KLW"
        },
        "building_K-KNW": {
          "displayName": "SouthWest",
          "destination": "building_K-KNW"
        },
        "building_K-KQC": {
          "displayName": "NorthEast",
          "destination": "building_K-KQC"
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
    "building_K-KDZ": {
      "firstVisit": true,
      "displayName": "America.  North America Room",
      "description": "Description for America.  North America Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "8_building_K"
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
          "destination": "8_building_K"
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
          "destination": "8_building_K"
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
          "destination": "8_building_K"
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
          "destination": "8_building_K"
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
          "destination": "8_building_K"
        }
      }
    },
    "8_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 8th Floor",
      "description": "You are in the 8th floor. There are six rooms:\n\n[|South|||||] America.  North America Room\n[|North|||||] Law of Kansas Room\n[|SouthEast|] Law of Scotland Room\n[|NorthWest|] Hong Kong Room\n[|SouthWest|] Law of Florida Room\n[|NorthEast|] Jewish law.  Halakah Room\n[|Down||||||] 7th floor\n[|Up||||||||] 9th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KDZ": {
          "displayName": "South",
          "destination": "building_K-KDZ"
        },
        "building_K-KFK": {
          "displayName": "North",
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
          "destination": "7_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "9_building_K"
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
          "destination": "9_building_K"
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
          "destination": "9_building_K"
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
          "destination": "9_building_K"
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
          "destination": "9_building_K"
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
          "destination": "9_building_K"
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
          "destination": "9_building_K"
        }
      }
    },
    "9_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 9th Floor",
      "description": "You are in the 9th floor. There are six rooms:\n\n[|South|||||] History of Law (Europe) Room\n[|North|||||] History of law.  The ancient orient Room\n[|SouthEast|] Law of Canada Room\n[|NorthWest|] Law of Delaware Room\n[|SouthWest|] Law of Ireland (Eire) Room\n[|NorthEast|] Tanzania Room\n[|Down||||||] 8th floor\n[|Up||||||||] 10th floor",
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
          "displayName": "SouthEast",
          "destination": "building_K-KE"
        },
        "building_K-KFD": {
          "displayName": "NorthWest",
          "destination": "building_K-KFD"
        },
        "building_K-KDK": {
          "displayName": "SouthWest",
          "destination": "building_K-KDK"
        },
        "building_K-KTT": {
          "displayName": "NorthEast",
          "destination": "building_K-KTT"
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
    "building_K-KNX": {
      "firstVisit": true,
      "displayName": "Constitutional law Room",
      "description": "Description for Constitutional law Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "10_building_K"
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
          "destination": "10_building_K"
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
          "destination": "10_building_K"
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
          "destination": "10_building_K"
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
          "destination": "10_building_K"
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
          "destination": "10_building_K"
        }
      }
    },
    "10_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 10th Floor",
      "description": "You are in the 10th floor. There are six rooms:\n\n[|South|||||] Constitutional law Room\n[|North|||||] Zambia Room\n[|SouthEast|] Law of South Carolina Room\n[|NorthWest|] Regional comparative and uniform law Room\n[|SouthWest|] Law of Hawaii Room\n[|NorthEast|] Laws of the cities Room\n[|Down||||||] 9th floor\n[|Up||||||||] 11th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KNX": {
          "displayName": "South",
          "destination": "building_K-KNX"
        },
        "building_K-KTY": {
          "displayName": "North",
          "destination": "building_K-KTY"
        },
        "building_K-KFS": {
          "displayName": "SouthEast",
          "destination": "building_K-KFS"
        },
        "building_K-KNC": {
          "displayName": "NorthWest",
          "destination": "building_K-KNC"
        },
        "building_K-KFH": {
          "displayName": "SouthWest",
          "destination": "building_K-KFH"
        },
        "building_K-KFX": {
          "displayName": "NorthEast",
          "destination": "building_K-KFX"
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
    "building_K-KJT": {
      "firstVisit": true,
      "displayName": "Law of Finland Room",
      "description": "Description for Law of Finland Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "11_building_K"
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
          "destination": "11_building_K"
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
          "destination": "11_building_K"
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
          "destination": "11_building_K"
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
          "destination": "11_building_K"
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
          "destination": "11_building_K"
        }
      }
    },
    "11_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 11th Floor",
      "description": "You are in the 11th floor. There are six rooms:\n\n[|South|||||] Law of Finland Room\n[|North|||||] Cameroon Room\n[|SouthEast|] Religious law in general.  Comparative religious law. Room\n[|NorthWest|] British West Indies (General) Room\n[|SouthWest|] Mexico Room\n[|NorthEast|] Pakistan Room\n[|Down||||||] 10th floor\n[|Up||||||||] 12th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KJT": {
          "displayName": "South",
          "destination": "building_K-KJT"
        },
        "building_K-KQW": {
          "displayName": "North",
          "destination": "building_K-KQW"
        },
        "building_K-KB": {
          "displayName": "SouthEast",
          "destination": "building_K-KB"
        },
        "building_K-KGL": {
          "displayName": "NorthWest",
          "destination": "building_K-KGL"
        },
        "building_K-KGF": {
          "displayName": "SouthWest",
          "destination": "building_K-KGF"
        },
        "building_K-KPL": {
          "displayName": "NorthEast",
          "destination": "building_K-KPL"
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
    "building_K-KNS": {
      "firstVisit": true,
      "displayName": "History of law Room",
      "description": "Description for History of law Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "12_building_K"
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
          "destination": "12_building_K"
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
          "destination": "12_building_K"
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
          "destination": "12_building_K"
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
          "destination": "12_building_K"
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
          "destination": "12_building_K"
        }
      }
    },
    "12_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 12th Floor",
      "description": "You are in the 12th floor. There are six rooms:\n\n[|South|||||] History of law Room\n[|North|||||] Law of Rhode Island Room\n[|SouthEast|] Puerto Rico Room\n[|NorthWest|] Law of Switzerland Room\n[|SouthWest|] Law of Greece Room\n[|NorthEast|] Law of Ukraine Room\n[|Down||||||] 11th floor\n[|Up||||||||] 13th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KNS": {
          "displayName": "South",
          "destination": "building_K-KNS"
        },
        "building_K-KFR": {
          "displayName": "North",
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
          "destination": "11_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "13_building_K"
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
          "destination": "13_building_K"
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
          "destination": "13_building_K"
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
          "destination": "13_building_K"
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
          "destination": "13_building_K"
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
          "destination": "13_building_K"
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
          "destination": "13_building_K"
        }
      }
    },
    "13_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 13th Floor",
      "description": "You are in the 13th floor. There are six rooms:\n\n[|South|||||] Law of Poland Room\n[|North|||||] Law of Netherlands Room\n[|SouthEast|] Law of Malta Room\n[|NorthWest|] Law of Bosnia and Hercegovina Room\n[|SouthWest|] Law of Kosovo Room\n[|NorthEast|] Law of Lithuania Room\n[|Down||||||] 12th floor\n[|Up||||||||] 14th floor",
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
          "displayName": "SouthEast",
          "destination": "building_K-KKK"
        },
        "building_K-KJK": {
          "displayName": "NorthWest",
          "destination": "building_K-KJK"
        },
        "building_K-KKH": {
          "displayName": "SouthWest",
          "destination": "building_K-KKH"
        },
        "building_K-KKJ": {
          "displayName": "NorthEast",
          "destination": "building_K-KKJ"
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
    "building_K-KGD": {
      "firstVisit": true,
      "displayName": "Guatemala Room",
      "description": "Description for Guatemala Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "14_building_K"
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
          "destination": "14_building_K"
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
          "destination": "14_building_K"
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
          "destination": "14_building_K"
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
          "destination": "14_building_K"
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
          "destination": "14_building_K"
        }
      }
    },
    "14_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 14th Floor",
      "description": "You are in the 14th floor. There are six rooms:\n\n[|South|||||] Guatemala Room\n[|North|||||] Peru Room\n[|SouthEast|] Mali Room\n[|NorthWest|] Nigeria Room\n[|SouthWest|] Haiti Room\n[|NorthEast|] Colombia Room\n[|Down||||||] 13th floor\n[|Up||||||||] 15th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KGD": {
          "displayName": "South",
          "destination": "building_K-KGD"
        },
        "building_K-KHQ": {
          "displayName": "North",
          "destination": "building_K-KHQ"
        },
        "building_K-KST": {
          "displayName": "SouthEast",
          "destination": "building_K-KST"
        },
        "building_K-KTA": {
          "displayName": "NorthWest",
          "destination": "building_K-KTA"
        },
        "building_K-KGS": {
          "displayName": "SouthWest",
          "destination": "building_K-KGS"
        },
        "building_K-KHH": {
          "displayName": "NorthEast",
          "destination": "building_K-KHH"
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
    "building_K-KG": {
      "firstVisit": true,
      "displayName": "Latin America (General) Room",
      "description": "Description for Latin America (General) Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "15_building_K"
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
          "destination": "15_building_K"
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
          "destination": "15_building_K"
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
          "destination": "15_building_K"
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
          "destination": "15_building_K"
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
          "destination": "15_building_K"
        }
      }
    },
    "15_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 15th Floor",
      "description": "You are in the 15th floor. There are six rooms:\n\n[|South|||||] Latin America (General) Room\n[|North|||||] Ecuador Room\n[|SouthEast|] Bolivia Room\n[|NorthWest|] China (Republic, 1949-    ).  Taiwan Room\n[|SouthWest|] Khorezmskai\uf04da Sovetskai\uf04da Sot\uf04dsialisticheskai\uf04da Room\n[|NorthEast|] Zimbabwe Room\n[|Down||||||] 14th floor\n[|Up||||||||] 16th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KG": {
          "displayName": "South",
          "destination": "building_K-KG"
        },
        "building_K-KHK": {
          "displayName": "North",
          "destination": "building_K-KHK"
        },
        "building_K-KHC": {
          "displayName": "SouthEast",
          "destination": "building_K-KHC"
        },
        "building_K-KNP": {
          "displayName": "NorthWest",
          "destination": "building_K-KNP"
        },
        "building_K-KLR": {
          "displayName": "SouthWest",
          "destination": "building_K-KLR"
        },
        "building_K-KTZ": {
          "displayName": "NorthEast",
          "destination": "building_K-KTZ"
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
    "building_K-KBS": {
      "firstVisit": true,
      "displayName": "Canon law of Eastern Churches Room",
      "description": "Description for Canon law of Eastern Churches Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "16_building_K"
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
          "destination": "16_building_K"
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
          "destination": "16_building_K"
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
          "destination": "16_building_K"
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
          "destination": "16_building_K"
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
          "destination": "16_building_K"
        }
      }
    },
    "16_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 16th Floor",
      "description": "You are in the 16th floor. There are six rooms:\n\n[|South|||||] Canon law of Eastern Churches Room\n[|North|||||] Korea.  South Korea Room\n[|SouthEast|] New Zealand Room\n[|NorthWest|] Fiji Room\n[|SouthWest|] New Caledonia Room\n[|NorthEast|] Law of Utah Room\n[|Down||||||] 15th floor\n[|Up||||||||] 17th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KBS": {
          "displayName": "South",
          "destination": "building_K-KBS"
        },
        "building_K-KPA": {
          "displayName": "North",
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
          "destination": "15_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "17_building_K"
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
          "destination": "17_building_K"
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
          "destination": "17_building_K"
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
          "destination": "17_building_K"
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
          "destination": "17_building_K"
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
          "destination": "17_building_K"
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
          "destination": "17_building_K"
        }
      }
    },
    "17_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 17th Floor",
      "description": "You are in the 17th floor. There are six rooms:\n\n[|South|||||] Law of Denmark Room\n[|North|||||] Law of Portugal Room\n[|SouthEast|] Law of Estonia Room\n[|NorthWest|] Law of Yugoslavia Room\n[|SouthWest|] Law of Czech Republic (1993-        ) Room\n[|NorthEast|] Costa Rica Room\n[|Down||||||] 16th floor\n[|Up||||||||] 18th floor",
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
          "displayName": "SouthEast",
          "destination": "building_K-KJS"
        },
        "building_K-KKZ": {
          "displayName": "NorthWest",
          "destination": "building_K-KKZ"
        },
        "building_K-KJP": {
          "displayName": "SouthWest",
          "destination": "building_K-KJP"
        },
        "building_K-KGB": {
          "displayName": "NorthEast",
          "destination": "building_K-KGB"
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
    "building_K-KHW": {
      "firstVisit": true,
      "displayName": "Venezuela Room",
      "description": "Description for Venezuela Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "18_building_K"
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
          "destination": "18_building_K"
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
          "destination": "18_building_K"
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
          "destination": "18_building_K"
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
          "destination": "18_building_K"
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
          "destination": "18_building_K"
        }
      }
    },
    "18_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 18th Floor",
      "description": "You are in the 18th floor. There are six rooms:\n\n[|South|||||] Venezuela Room\n[|North|||||] Honduras Room\n[|SouthEast|] Nicaragua Room\n[|NorthWest|] Chile Room\n[|SouthWest|] Paraguay Room\n[|NorthEast|] Law of East Germany Room\n[|Down||||||] 17th floor\n[|Up||||||||] 19th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KHW": {
          "displayName": "South",
          "destination": "building_K-KHW"
        },
        "building_K-KGE": {
          "displayName": "North",
          "destination": "building_K-KGE"
        },
        "building_K-KGG": {
          "displayName": "SouthEast",
          "destination": "building_K-KGG"
        },
        "building_K-KHF": {
          "displayName": "NorthWest",
          "destination": "building_K-KHF"
        },
        "building_K-KHP": {
          "displayName": "SouthWest",
          "destination": "building_K-KHP"
        },
        "building_K-KKA": {
          "displayName": "NorthEast",
          "destination": "building_K-KKA"
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
    "building_K-KKV": {
      "firstVisit": true,
      "displayName": "Law of Sweden Room",
      "description": "Description for Law of Sweden Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "19_building_K"
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
          "destination": "19_building_K"
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
          "destination": "19_building_K"
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
          "destination": "19_building_K"
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
          "destination": "19_building_K"
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
          "destination": "19_building_K"
        }
      }
    },
    "19_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 19th Floor",
      "description": "You are in the 19th floor. There are six rooms:\n\n[|South|||||] Law of Sweden Room\n[|North|||||] Morocco Room\n[|SouthEast|] General Room\n[|NorthWest|] Belarus (Republic) Room\n[|SouthWest|] General Room\n[|NorthEast|] Thailand Room\n[|Down||||||] 18th floor\n[|Up||||||||] 20th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KKV": {
          "displayName": "South",
          "destination": "building_K-KKV"
        },
        "building_K-KSW": {
          "displayName": "North",
          "destination": "building_K-KSW"
        },
        "building_K-KM": {
          "displayName": "SouthEast",
          "destination": "building_K-KM"
        },
        "building_K-KLF": {
          "displayName": "NorthWest",
          "destination": "building_K-KLF"
        },
        "building_K-KH": {
          "displayName": "SouthWest",
          "destination": "building_K-KH"
        },
        "building_K-KPT": {
          "displayName": "NorthEast",
          "destination": "building_K-KPT"
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
    "building_K-KPM": {
      "firstVisit": true,
      "displayName": "Philippines Room",
      "description": "Description for Philippines Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "20_building_K"
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
          "destination": "20_building_K"
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
          "destination": "20_building_K"
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
          "destination": "20_building_K"
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
          "destination": "20_building_K"
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
          "destination": "20_building_K"
        }
      }
    },
    "20_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 20th Floor",
      "description": "You are in the 20th floor. There are six rooms:\n\n[|South|||||] Philippines Room\n[|North|||||] Vietnam Room\n[|SouthEast|] Singapore Room\n[|NorthWest|] Iran Room\n[|SouthWest|] Mayotte Room\n[|NorthEast|] Namibia Room\n[|Down||||||] 19th floor\n[|Up||||||||] 21st floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KPM": {
          "displayName": "South",
          "destination": "building_K-KPM"
        },
        "building_K-KPV": {
          "displayName": "North",
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
          "destination": "19_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "21_building_K"
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
          "destination": "21_building_K"
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
          "destination": "21_building_K"
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
          "destination": "21_building_K"
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
          "destination": "21_building_K"
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
          "destination": "21_building_K"
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
          "destination": "21_building_K"
        }
      }
    },
    "21_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 21st Floor",
      "description": "You are in the 21st floor. There are six rooms:\n\n[|South|||||] Botswana Room\n[|North|||||] Angola Room\n[|SouthEast|] Mozambique Room\n[|NorthWest|] Kenya Room\n[|SouthWest|] Gabon Room\n[|NorthEast|] Lesotho Room\n[|Down||||||] 20th floor\n[|Up||||||||] 22nd floor",
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
          "displayName": "SouthEast",
          "destination": "building_K-KSX"
        },
        "building_K-KSK": {
          "displayName": "NorthWest",
          "destination": "building_K-KSK"
        },
        "building_K-KRU": {
          "displayName": "SouthWest",
          "destination": "building_K-KRU"
        },
        "building_K-KSL": {
          "displayName": "NorthEast",
          "destination": "building_K-KSL"
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
    "building_K-KRX": {
      "firstVisit": true,
      "displayName": "Ghana Room",
      "description": "Description for Ghana Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "22_building_K"
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
          "destination": "22_building_K"
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
          "destination": "22_building_K"
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
          "destination": "22_building_K"
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
          "destination": "22_building_K"
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
          "destination": "22_building_K"
        }
      }
    },
    "22_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 22nd Floor",
      "description": "You are in the 22nd floor. There are six rooms:\n\n[|South|||||] Ghana Room\n[|North|||||] Malawi Room\n[|SouthEast|] Uganda Room\n[|NorthWest|] Rwanda Room\n[|SouthWest|] Congo (Democratic Republic) Room\n[|NorthEast|] French West Africa Room\n[|Down||||||] 21st floor\n[|Up||||||||] 23rd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KRX": {
          "displayName": "South",
          "destination": "building_K-KRX"
        },
        "building_K-KSS": {
          "displayName": "North",
          "destination": "building_K-KSS"
        },
        "building_K-KTW": {
          "displayName": "SouthEast",
          "destination": "building_K-KTW"
        },
        "building_K-KTD": {
          "displayName": "NorthWest",
          "destination": "building_K-KTD"
        },
        "building_K-KTX": {
          "displayName": "SouthWest",
          "destination": "building_K-KTX"
        },
        "building_K-KRS": {
          "displayName": "NorthEast",
          "destination": "building_K-KRS"
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
    "building_K-KTG": {
      "firstVisit": true,
      "displayName": "Senegal Room",
      "description": "Description for Senegal Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "23_building_K"
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
          "destination": "23_building_K"
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
          "destination": "23_building_K"
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
          "destination": "23_building_K"
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
          "destination": "23_building_K"
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
          "destination": "23_building_K"
        }
      }
    },
    "23_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 23rd Floor",
      "description": "You are in the 23rd floor. There are six rooms:\n\n[|South|||||] Senegal Room\n[|North|||||] Law of Turkey Room\n[|SouthEast|] Azerbaijan Room\n[|NorthWest|] Egypt Room\n[|SouthWest|] Kuwait Room\n[|NorthEast|] Yemen Room\n[|Down||||||] 22nd floor\n[|Up||||||||] 24th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KTG": {
          "displayName": "South",
          "destination": "building_K-KTG"
        },
        "building_K-KKX": {
          "displayName": "North",
          "destination": "building_K-KKX"
        },
        "building_K-KLE": {
          "displayName": "SouthEast",
          "destination": "building_K-KLE"
        },
        "building_K-KRM": {
          "displayName": "NorthWest",
          "destination": "building_K-KRM"
        },
        "building_K-KMN": {
          "displayName": "SouthWest",
          "destination": "building_K-KMN"
        },
        "building_K-KMX": {
          "displayName": "NorthEast",
          "destination": "building_K-KMX"
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
    "building_K-KTQ": {
      "firstVisit": true,
      "displayName": "Sudan Room",
      "description": "Description for Sudan Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "24_building_K"
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
          "destination": "24_building_K"
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
          "destination": "24_building_K"
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
          "destination": "24_building_K"
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
          "destination": "24_building_K"
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
          "destination": "24_building_K"
        }
      }
    },
    "24_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 24th Floor",
      "description": "You are in the 24th floor. There are six rooms:\n\n[|South|||||] Sudan Room\n[|North|||||] Algeria Room\n[|SouthEast|] United Arab Emirates Room\n[|NorthWest|] Brazil Room\n[|SouthWest|] Guyana Room\n[|NorthEast|] Uruguay Room\n[|Down||||||] 23rd floor\n[|Up||||||||] 25th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KTQ": {
          "displayName": "South",
          "destination": "building_K-KTQ"
        },
        "building_K-KQG": {
          "displayName": "North",
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
          "destination": "23_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "25_building_K"
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
          "destination": "25_building_K"
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
          "destination": "25_building_K"
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
          "destination": "25_building_K"
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
          "destination": "25_building_K"
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
          "destination": "25_building_K"
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
          "destination": "25_building_K"
        }
      }
    },
    "25_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 25th Floor",
      "description": "You are in the 25th floor. There are six rooms:\n\n[|South|||||] Kyrgyzstan Room\n[|North|||||] Guinea Room\n[|SouthEast|] Macao Room\n[|NorthWest|] Armenian SSR (to 1991) Room\n[|SouthWest|] Tunisia Room\n[|NorthEast|] Lebanon Room\n[|Down||||||] 24th floor\n[|Up||||||||] 26th floor",
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
          "displayName": "SouthEast",
          "destination": "building_K-KPF"
        },
        "building_K-KLD": {
          "displayName": "NorthWest",
          "destination": "building_K-KLD"
        },
        "building_K-KTV": {
          "displayName": "SouthWest",
          "destination": "building_K-KTV"
        },
        "building_K-KMP": {
          "displayName": "NorthEast",
          "destination": "building_K-KMP"
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
    "building_K-KMF": {
      "firstVisit": true,
      "displayName": "Bahrain Room",
      "description": "Description for Bahrain Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "26_building_K"
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
          "destination": "26_building_K"
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
          "destination": "26_building_K"
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
          "destination": "26_building_K"
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
          "destination": "26_building_K"
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
          "destination": "26_building_K"
        }
      }
    },
    "26_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 26th Floor",
      "description": "You are in the 26th floor. There are six rooms:\n\n[|South|||||] Bahrain Room\n[|North|||||] Law of Slovenia Room\n[|SouthEast|] French regions, provinces, cities, etc. Room\n[|NorthWest|] Law of Austria Room\n[|SouthWest|] Space law.  Law of outer space Room\n[|NorthEast|] Western Samoa Room\n[|Down||||||] 25th floor\n[|Up||||||||] 27th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KMF": {
          "displayName": "South",
          "destination": "building_K-KMF"
        },
        "building_K-KKS": {
          "displayName": "North",
          "destination": "building_K-KKS"
        },
        "building_K-KJW": {
          "displayName": "SouthEast",
          "destination": "building_K-KJW"
        },
        "building_K-KJJ": {
          "displayName": "NorthWest",
          "destination": "building_K-KJJ"
        },
        "building_K-KZD": {
          "displayName": "SouthWest",
          "destination": "building_K-KZD"
        },
        "building_K-KWW": {
          "displayName": "NorthEast",
          "destination": "building_K-KWW"
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
    "building_K-KVP": {
      "firstVisit": true,
      "displayName": "French Polynesia Room",
      "description": "Description for French Polynesia Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "27_building_K"
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
          "destination": "27_building_K"
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
          "destination": "27_building_K"
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
          "destination": "27_building_K"
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
          "destination": "27_building_K"
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
          "destination": "27_building_K"
        }
      }
    },
    "27_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 27th Floor",
      "description": "You are in the 27th floor. There are six rooms:\n\n[|South|||||] French Polynesia Room\n[|North|||||] Law of Ontario Room\n[|SouthEast|] Law of Alberta Room\n[|NorthWest|] Law of British Columbia Room\n[|SouthWest|] Law of Qu\u00e9bec Room\n[|NorthEast|] Papua New Guinea Room\n[|Down||||||] 26th floor\n[|Up||||||||] 28th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KVP": {
          "displayName": "South",
          "destination": "building_K-KVP"
        },
        "building_K-KEO": {
          "displayName": "North",
          "destination": "building_K-KEO"
        },
        "building_K-KEA": {
          "displayName": "SouthEast",
          "destination": "building_K-KEA"
        },
        "building_K-KEB": {
          "displayName": "NorthWest",
          "destination": "building_K-KEB"
        },
        "building_K-KEQ": {
          "displayName": "SouthWest",
          "destination": "building_K-KEQ"
        },
        "building_K-KWH": {
          "displayName": "NorthEast",
          "destination": "building_K-KWH"
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
    "building_K-KVS": {
      "firstVisit": true,
      "displayName": "Midway Islands Room",
      "description": "Description for Midway Islands Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "28_building_K"
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
          "destination": "28_building_K"
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
          "destination": "28_building_K"
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
          "destination": "28_building_K"
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
          "destination": "28_building_K"
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
          "destination": "28_building_K"
        }
      }
    },
    "28_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 28th Floor",
      "description": "You are in the 28th floor. There are six rooms:\n\n[|South|||||] Midway Islands Room\n[|North|||||] Palau Room\n[|SouthEast|] Guam Room\n[|NorthWest|] Law of Cyprus Room\n[|SouthWest|] Law of Hungary Room\n[|NorthEast|] French Guiana Room\n[|Down||||||] 27th floor\n[|Up||||||||] 29th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KVS": {
          "displayName": "South",
          "destination": "building_K-KVS"
        },
        "building_K-KWG": {
          "displayName": "North",
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
          "destination": "27_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "29_building_K"
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
          "destination": "29_building_K"
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
          "destination": "29_building_K"
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
          "destination": "29_building_K"
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
          "destination": "29_building_K"
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
          "destination": "29_building_K"
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
          "destination": "29_building_K"
        }
      }
    },
    "29_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 29th Floor",
      "description": "You are in the 29th floor. There are six rooms:\n\n[|South|||||] Law of Norway Room\n[|North|||||] Central African Republic Room\n[|SouthEast|] Togo Room\n[|NorthWest|] Burkina Faso Room\n[|SouthWest|] C\u00f4te d\u2019Ivoire Room\n[|NorthEast|] Jerusalem Room\n[|Down||||||] 28th floor\n[|Up||||||||] 30th floor",
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
          "displayName": "SouthEast",
          "destination": "building_K-KTU"
        },
        "building_K-KQT": {
          "displayName": "NorthWest",
          "destination": "building_K-KQT"
        },
        "building_K-KSH": {
          "displayName": "SouthWest",
          "destination": "building_K-KSH"
        },
        "building_K-KML": {
          "displayName": "NorthEast",
          "destination": "building_K-KML"
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
    "building_K-KMJ": {
      "firstVisit": true,
      "displayName": "Iraq Room",
      "description": "Description for Iraq Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "30_building_K"
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
          "destination": "30_building_K"
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
          "destination": "30_building_K"
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
          "destination": "30_building_K"
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
          "destination": "30_building_K"
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
          "destination": "30_building_K"
        }
      }
    },
    "30_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 30th Floor",
      "description": "You are in the 30th floor. There are six rooms:\n\n[|South|||||] Iraq Room\n[|North|||||] Libya Room\n[|SouthEast|] Panama Room\n[|NorthWest|] Dominican Republic Room\n[|SouthWest|] Cuba Room\n[|NorthEast|] El Salvador Room\n[|Down||||||] 29th floor\n[|Up||||||||] 31st floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KMJ": {
          "displayName": "South",
          "destination": "building_K-KMJ"
        },
        "building_K-KSP": {
          "displayName": "North",
          "destination": "building_K-KSP"
        },
        "building_K-KGH": {
          "displayName": "SouthEast",
          "destination": "building_K-KGH"
        },
        "building_K-KGQ": {
          "displayName": "NorthWest",
          "destination": "building_K-KGQ"
        },
        "building_K-KGN": {
          "displayName": "SouthWest",
          "destination": "building_K-KGN"
        },
        "building_K-KGC": {
          "displayName": "NorthEast",
          "destination": "building_K-KGC"
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
    "building_K-KSN": {
      "firstVisit": true,
      "displayName": "Liberia Room",
      "description": "Description for Liberia Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "31_building_K"
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
          "destination": "31_building_K"
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
          "destination": "31_building_K"
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
          "destination": "31_building_K"
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
          "destination": "31_building_K"
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
          "destination": "31_building_K"
        }
      }
    },
    "31_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 31st Floor",
      "description": "You are in the 31st floor. There are six rooms:\n\n[|South|||||] Liberia Room\n[|North|||||] Niger Room\n[|SouthEast|] Democratic People\u2019s Republic of Korea.  North Korea Room\n[|NorthWest|] Law of indigenous peoples Room\n[|SouthWest|] Northern Mariana Islands Room\n[|NorthEast|] Cambodia Room\n[|Down||||||] 30th floor\n[|Up||||||||] 32nd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KSN": {
          "displayName": "South",
          "destination": "building_K-KSN"
        },
        "building_K-KSZ": {
          "displayName": "North",
          "destination": "building_K-KSZ"
        },
        "building_K-KPC": {
          "displayName": "SouthEast",
          "destination": "building_K-KPC"
        },
        "building_K-KQ": {
          "displayName": "NorthWest",
          "destination": "building_K-KQ"
        },
        "building_K-KWC": {
          "displayName": "SouthWest",
          "destination": "building_K-KWC"
        },
        "building_K-KNM": {
          "displayName": "NorthEast",
          "destination": "building_K-KNM"
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
    "building_K-KBT": {
      "firstVisit": true,
      "displayName": "Canon law of Eastern Rite Churches in Communion with the Room",
      "description": "Description for Canon law of Eastern Rite Churches in Communion with the Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "32_building_K"
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
          "destination": "32_building_K"
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
          "destination": "32_building_K"
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
          "destination": "32_building_K"
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
          "destination": "32_building_K"
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
          "destination": "32_building_K"
        }
      }
    },
    "32_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 32nd Floor",
      "description": "You are in the 32nd floor. There are six rooms:\n\n[|South|||||] Canon law of Eastern Rite Churches in Communion with the Room\n[|North|||||] Law of Albania Room\n[|SouthEast|] Trinidad and Tobago Room\n[|NorthWest|] Law of Romania Room\n[|SouthWest|] Law of Slovakia (1993-        ) Room\n[|NorthEast|] Moldova Room\n[|Down||||||] 31st floor\n[|Up||||||||] 33rd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KBT": {
          "displayName": "South",
          "destination": "building_K-KBT"
        },
        "building_K-KJG": {
          "displayName": "North",
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
          "destination": "31_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "33_building_K"
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
          "destination": "33_building_K"
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
          "destination": "33_building_K"
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
          "destination": "33_building_K"
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
          "destination": "33_building_K"
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
          "destination": "33_building_K"
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
          "destination": "33_building_K"
        }
      }
    },
    "33_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 33rd Floor",
      "description": "You are in the 33rd floor. There are six rooms:\n\n[|South|||||] Law of Northern Ireland Room\n[|North|||||] Law of Saskatchewan Room\n[|SouthEast|] Brunei Room\n[|NorthWest|] Laos Room\n[|SouthWest|] Sri Lanka Room\n[|NorthEast|] Nepal Room\n[|Down||||||] 32nd floor\n[|Up||||||||] 34th floor",
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
          "displayName": "SouthEast",
          "destination": "building_K-KNK"
        },
        "building_K-KPE": {
          "displayName": "NorthWest",
          "destination": "building_K-KPE"
        },
        "building_K-KPS": {
          "displayName": "SouthWest",
          "destination": "building_K-KPS"
        },
        "building_K-KPJ": {
          "displayName": "NorthEast",
          "destination": "building_K-KPJ"
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
    "building_K-KNL": {
      "firstVisit": true,
      "displayName": "Burma Room",
      "description": "Description for Burma Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "34_building_K"
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
          "destination": "34_building_K"
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
          "destination": "34_building_K"
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
          "destination": "34_building_K"
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
          "destination": "34_building_K"
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
          "destination": "34_building_K"
        }
      }
    },
    "34_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 34th Floor",
      "description": "You are in the 34th floor. There are six rooms:\n\n[|South|||||] Burma Room\n[|North|||||] Bangladesh Room\n[|SouthEast|] Equatorial Guinea Room\n[|NorthWest|] Tajikistan Room\n[|SouthWest|] Turkmenistan Room\n[|NorthEast|] Comoros Room\n[|Down||||||] 33rd floor\n[|Up||||||||] 35th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KNL": {
          "displayName": "South",
          "destination": "building_K-KNL"
        },
        "building_K-KNG": {
          "displayName": "North",
          "destination": "building_K-KNG"
        },
        "building_K-KSE": {
          "displayName": "SouthEast",
          "destination": "building_K-KSE"
        },
        "building_K-KLT": {
          "displayName": "NorthWest",
          "destination": "building_K-KLT"
        },
        "building_K-KLV": {
          "displayName": "SouthWest",
          "destination": "building_K-KLV"
        },
        "building_K-KRE": {
          "displayName": "NorthEast",
          "destination": "building_K-KRE"
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
    "building_K-KTH": {
      "firstVisit": true,
      "displayName": "Seychelles Room",
      "description": "Description for Seychelles Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "35_building_K"
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
          "destination": "35_building_K"
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
          "destination": "35_building_K"
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
          "destination": "35_building_K"
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
          "destination": "35_building_K"
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
          "destination": "35_building_K"
        }
      }
    },
    "35_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 35th Floor",
      "description": "You are in the 35th floor. There are six rooms:\n\n[|South|||||] Seychelles Room\n[|North|||||] Madagascar Room\n[|SouthEast|] Regional organization and integration Room\n[|NorthWest|] Eritrea Room\n[|SouthWest|] Law of Iceland Room\n[|NorthEast|] Georgia (Republic) Room\n[|Down||||||] 34th floor\n[|Up||||||||] 36th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KTH": {
          "displayName": "South",
          "destination": "building_K-KTH"
        },
        "building_K-KSR": {
          "displayName": "North",
          "destination": "building_K-KSR"
        },
        "building_K-KQE": {
          "displayName": "SouthEast",
          "destination": "building_K-KQE"
        },
        "building_K-KRN": {
          "displayName": "NorthWest",
          "destination": "building_K-KRN"
        },
        "building_K-KKG": {
          "displayName": "SouthWest",
          "destination": "building_K-KKG"
        },
        "building_K-KLH": {
          "displayName": "NorthEast",
          "destination": "building_K-KLH"
        },
        "down": {
          "displayName": "Down",
          "destination": "34_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "36_building_K"
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
          "destination": "36_building_K"
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
          "destination": "36_building_K"
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
          "destination": "36_building_K"
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
          "destination": "36_building_K"
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
          "destination": "36_building_K"
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
          "destination": "36_building_K"
        }
      }
    },
    "36_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 36th Floor",
      "description": "You are in the 36th floor. There are six rooms:\n\n[|South|||||] Belize Room\n[|North|||||] Law of Latvia Room\n[|SouthEast|] Sao Tome and Principe Room\n[|NorthWest|] Law of Andorra Room\n[|SouthWest|] Solomon Islands Room\n[|NorthEast|] Saint Lucia Room\n[|Down||||||] 35th floor\n[|Up||||||||] 37th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KGA": {
          "displayName": "South",
          "destination": "building_K-KGA"
        },
        "building_K-KKI": {
          "displayName": "North",
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
          "destination": "35_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "37_building_K"
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
          "destination": "37_building_K"
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
          "destination": "37_building_K"
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
          "destination": "37_building_K"
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
          "destination": "37_building_K"
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
          "destination": "37_building_K"
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
          "destination": "37_building_K"
        }
      }
    },
    "37_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 37th Floor",
      "description": "You are in the 37th floor. There are six rooms:\n\n[|South|||||] Virgin Islands of the United States Room\n[|North|||||] Grenada Room\n[|SouthEast|] Gambia Room\n[|NorthWest|] Laws of the territories.  Laws of the Confederate States of Room\n[|SouthWest|] Law of Isle of Man.  Channel Islands Room\n[|NorthEast|] General Room\n[|Down||||||] 36th floor\n[|Up||||||||] 38th floor",
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
          "displayName": "SouthEast",
          "destination": "building_K-KRV"
        },
        "building_K-KFZ": {
          "displayName": "NorthWest",
          "destination": "building_K-KFZ"
        },
        "building_K-KDG": {
          "displayName": "SouthWest",
          "destination": "building_K-KDG"
        },
        "building_K-KGJ": {
          "displayName": "NorthEast",
          "destination": "building_K-KGJ"
        },
        "down": {
          "displayName": "Down",
          "destination": "36_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "38_building_K"
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
          "destination": "38_building_K"
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
          "destination": "38_building_K"
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
          "destination": "38_building_K"
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
          "destination": "38_building_K"
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
          "destination": "38_building_K"
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
          "destination": "38_building_K"
        }
      }
    },
    "38_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 38th Floor",
      "description": "You are in the 38th floor. There are six rooms:\n\n[|South|||||] Russian S.F.S.R. (to 1991) Room\n[|North|||||] Palestine (to 1948) Room\n[|SouthEast|] Law of Yukon Room\n[|NorthWest|] French Indochina.  Indochina (Federation) Room\n[|SouthWest|] Yeman (People\u2019s Democratic Republic) (to 1990) Room\n[|NorthEast|] Surinam Room\n[|Down||||||] 37th floor\n[|Up||||||||] 39th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KLN": {
          "displayName": "South",
          "destination": "building_K-KLN"
        },
        "building_K-KMQ": {
          "displayName": "North",
          "destination": "building_K-KMQ"
        },
        "building_K-KEY": {
          "displayName": "SouthEast",
          "destination": "building_K-KEY"
        },
        "building_K-KNV": {
          "displayName": "NorthWest",
          "destination": "building_K-KNV"
        },
        "building_K-KMY": {
          "displayName": "SouthWest",
          "destination": "building_K-KMY"
        },
        "building_K-KHS": {
          "displayName": "NorthEast",
          "destination": "building_K-KHS"
        },
        "down": {
          "displayName": "Down",
          "destination": "37_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "39_building_K"
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
          "destination": "39_building_K"
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
          "destination": "39_building_K"
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
          "destination": "39_building_K"
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
          "destination": "39_building_K"
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
          "destination": "39_building_K"
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
          "destination": "39_building_K"
        }
      }
    },
    "39_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 39th Floor",
      "description": "You are in the 39th floor. There are six rooms:\n\n[|South|||||] Syria Room\n[|North|||||] Law of Montenegro Room\n[|SouthEast|] Italian Somaliland Room\n[|NorthWest|] Law of Law of cities, towns, etc. Room\n[|SouthWest|] Law of Manitoba Room\n[|NorthEast|] Somalia Room\n[|Down||||||] 38th floor\n[|Up||||||||] 40th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KMU": {
          "displayName": "South",
          "destination": "building_K-KMU"
        },
        "building_K-KKL": {
          "displayName": "North",
          "destination": "building_K-KKL"
        },
        "building_K-KSG": {
          "displayName": "SouthEast",
          "destination": "building_K-KSG"
        },
        "building_K-KEZ": {
          "displayName": "NorthWest",
          "destination": "building_K-KEZ"
        },
        "building_K-KEM": {
          "displayName": "SouthWest",
          "destination": "building_K-KEM"
        },
        "building_K-KTK": {
          "displayName": "NorthEast",
          "destination": "building_K-KTK"
        },
        "down": {
          "displayName": "Down",
          "destination": "38_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "40_building_K"
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
          "destination": "40_building_K"
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
          "destination": "40_building_K"
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
          "destination": "40_building_K"
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
          "destination": "40_building_K"
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
          "destination": "40_building_K"
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
          "destination": "40_building_K"
        }
      }
    },
    "40_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 40th Floor",
      "description": "You are in the 40th floor. There are six rooms:\n\n[|South|||||] Jamaica Room\n[|North|||||] Turks and Caicos Islands Room\n[|SouthEast|] Law of Law of Prince Edward Island Room\n[|NorthWest|] Burundi Room\n[|SouthWest|] Pacific Islands (Trust Territory) Room\n[|NorthEast|] Vietnam (Republic).  South Vietnam Room\n[|Down||||||] 39th floor\n[|Up||||||||] 41st floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KGT": {
          "displayName": "South",
          "destination": "building_K-KGT"
        },
        "building_K-KGY": {
          "displayName": "North",
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
          "destination": "39_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "41_building_K"
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
          "destination": "41_building_K"
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
          "destination": "41_building_K"
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
          "destination": "41_building_K"
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
          "destination": "41_building_K"
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
          "destination": "41_building_K"
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
          "destination": "41_building_K"
        }
      }
    },
    "41_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 41st Floor",
      "description": "You are in the 41st floor. There are six rooms:\n\n[|South|||||] Antarctica Room\n[|North|||||] British New Guinea (Territory of Papua) Room\n[|SouthEast|] Vanuatu Room\n[|NorthWest|] Niue Room\n[|SouthWest|] Afghanistan Room\n[|NorthEast|] Gibraltar Room\n[|Down||||||] 40th floor\n[|Up||||||||] 42nd floor",
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
          "displayName": "SouthEast",
          "destination": "building_K-KWR"
        },
        "building_K-KWA": {
          "displayName": "NorthWest",
          "destination": "building_K-KWA"
        },
        "building_K-KNF": {
          "displayName": "SouthWest",
          "destination": "building_K-KNF"
        },
        "building_K-KRY": {
          "displayName": "NorthEast",
          "destination": "building_K-KRY"
        },
        "down": {
          "displayName": "Down",
          "destination": "40_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "42_building_K"
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
          "destination": "42_building_K"
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
          "destination": "42_building_K"
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
          "destination": "42_building_K"
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
          "destination": "42_building_K"
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
          "destination": "42_building_K"
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
          "destination": "42_building_K"
        }
      }
    },
    "42_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 42nd Floor",
      "description": "You are in the 42nd floor. There are six rooms:\n\n[|South|||||] Chad Room\n[|North|||||] Sierra Leone Room\n[|SouthEast|] Swaziland Room\n[|NorthWest|] R\u00e9union Room\n[|SouthWest|] Djibouti Room\n[|NorthEast|] Cayman Islands Room\n[|Down||||||] 41st floor\n[|Up||||||||] 43rd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KRC": {
          "displayName": "South",
          "destination": "building_K-KRC"
        },
        "building_K-KTJ": {
          "displayName": "North",
          "destination": "building_K-KTJ"
        },
        "building_K-KTR": {
          "displayName": "SouthEast",
          "destination": "building_K-KTR"
        },
        "building_K-KTC": {
          "displayName": "NorthWest",
          "destination": "building_K-KTC"
        },
        "building_K-KRK": {
          "displayName": "SouthWest",
          "destination": "building_K-KRK"
        },
        "building_K-KGM": {
          "displayName": "NorthEast",
          "destination": "building_K-KGM"
        },
        "down": {
          "displayName": "Down",
          "destination": "41_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "43_building_K"
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
          "destination": "43_building_K"
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
          "destination": "43_building_K"
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
          "destination": "43_building_K"
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
          "destination": "43_building_K"
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
          "destination": "43_building_K"
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
          "destination": "43_building_K"
        }
      }
    },
    "43_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 43rd Floor",
      "description": "You are in the 43rd floor. There are six rooms:\n\n[|South|||||] Dominica Room\n[|North|||||] Congo (Brazzaville) Room\n[|SouthEast|] Nauru Room\n[|NorthWest|] Benin Room\n[|SouthWest|] Regional organization and integration Room\n[|NorthEast|] Qatar Room\n[|Down||||||] 42nd floor\n[|Up||||||||] 44th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KGP": {
          "displayName": "South",
          "destination": "building_K-KGP"
        },
        "building_K-KRG": {
          "displayName": "North",
          "destination": "building_K-KRG"
        },
        "building_K-KVU": {
          "displayName": "SouthEast",
          "destination": "building_K-KVU"
        },
        "building_K-KQJ": {
          "displayName": "NorthWest",
          "destination": "building_K-KQJ"
        },
        "building_K-KNE": {
          "displayName": "SouthWest",
          "destination": "building_K-KNE"
        },
        "building_K-KMS": {
          "displayName": "NorthEast",
          "destination": "building_K-KMS"
        },
        "down": {
          "displayName": "Down",
          "destination": "42_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "44_building_K"
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
          "destination": "44_building_K"
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
          "destination": "44_building_K"
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
          "destination": "44_building_K"
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
          "destination": "44_building_K"
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
          "destination": "44_building_K"
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
          "destination": "44_building_K"
        }
      }
    },
    "44_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 44th Floor",
      "description": "You are in the 44th floor. There are six rooms:\n\n[|South|||||] British Central Africa Protectorate Room\n[|North|||||] Cities, etc. Room\n[|SouthEast|] Ukraine Room\n[|NorthWest|] Cape Verde Room\n[|SouthWest|] Aruba Room\n[|NorthEast|] Maldives Room\n[|Down||||||] 43rd floor\n[|Up||||||||] 45th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KQM": {
          "displayName": "South",
          "destination": "building_K-KQM"
        },
        "building_K-KNY": {
          "displayName": "North",
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
          "destination": "43_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "45_building_K"
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
          "destination": "45_building_K"
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
          "destination": "45_building_K"
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
          "destination": "45_building_K"
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
          "destination": "45_building_K"
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
          "destination": "45_building_K"
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
          "destination": "45_building_K"
        }
      }
    },
    "45_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 45th Floor",
      "description": "You are in the 45th floor. There are six rooms:\n\n[|South|||||] Mauritania Room\n[|North|||||] Guinea-Bissau Room\n[|SouthEast|] Cook Islands Room\n[|NorthWest|] Tonga Room\n[|SouthWest|] Bhutan Room\n[|NorthEast|] Gaza Room\n[|Down||||||] 44th floor\n[|Up||||||||] 46th floor",
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
          "displayName": "SouthEast",
          "destination": "building_K-KVL"
        },
        "building_K-KWP": {
          "displayName": "NorthWest",
          "destination": "building_K-KWP"
        },
        "building_K-KNH": {
          "displayName": "SouthWest",
          "destination": "building_K-KNH"
        },
        "building_K-KMG": {
          "displayName": "NorthEast",
          "destination": "building_K-KMG"
        },
        "down": {
          "displayName": "Down",
          "destination": "44_building_K"
        },
        "up": {
          "displayName": "Up",
          "destination": "46_building_K"
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
          "destination": "46_building_K"
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
          "destination": "46_building_K"
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
          "destination": "46_building_K"
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
          "destination": "46_building_K"
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
          "destination": "46_building_K"
        }
      }
    },
    "46_building_K": {
      "firstVisit": true,
      "displayName": "Law Building, 46th Floor",
      "description": "You are in the 46th floor. There are five rooms:\n\n[|South|||||] Falkland Islands Room\n[|North|||||] Tuvalu Room\n[|SouthEast|] French Equatorial Africa Room\n[|NorthWest|] Kiribati Room\n[|SouthWest|] Law of Australian peoples.  Aborigines Room\n[|Down||||||] 45th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KHL": {
          "displayName": "South",
          "destination": "building_K-KHL"
        },
        "building_K-KWQ": {
          "displayName": "North",
          "destination": "building_K-KWQ"
        },
        "building_K-KRR": {
          "displayName": "SouthEast",
          "destination": "building_K-KRR"
        },
        "building_K-KVR": {
          "displayName": "NorthWest",
          "destination": "building_K-KVR"
        },
        "building_K-KU": {
          "displayName": "SouthWest",
          "destination": "building_K-KU"
        },
        "down": {
          "displayName": "Down",
          "destination": "45_building_K"
        }
      }
    },
    "L": {
      "firstVisit": true,
      "displayName": "Education Building Front Porch",
      "description": "This is a small, two story tall, hexagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cEducation\u201d engraved.\n\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
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
    "building_L": {
      "firstVisit": true,
      "displayName": "Education Building Main Lobby",
      "description": "There are 11 rooms throughout this building in two floors. You are in the first floor. The building is hexagonal-shaped with walls facing South, North, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] Theory and practice of education Room\n[|North|||||] Textbooks Room\n[|SouthEast|] History of education Room\n[|NorthWest|] United States Room\n[|SouthWest|] Special aspects of education Room\n[|NorthEast|] Education (General) Room\n[|Up||||||||] 2nd floor\n[|Exit||||||] Education Building Front Porch",
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
          "displayName": "SouthEast",
          "destination": "building_L-LA"
        },
        "building_L-LD": {
          "displayName": "NorthWest",
          "destination": "building_L-LD"
        },
        "building_L-LC": {
          "displayName": "SouthWest",
          "destination": "building_L-LC"
        },
        "building_L-L": {
          "displayName": "NorthEast",
          "destination": "building_L-L"
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
          "destination": "2_building_L"
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
          "destination": "2_building_L"
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
      "description": "You are in the 2nd floor. There are five rooms:\n\n[|South|||||] Individual institutions Room\n[|North|||||] Individual institutions Room\n[|SouthEast|] Student fraternities and societies, United States Room\n[|NorthWest|] America (except United States) Room\n[|SouthWest|] College and school magazines and papers Room\n[|Down||||||] 1st floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_L-LF": {
          "displayName": "South",
          "destination": "building_L-LF"
        },
        "building_L-LG": {
          "displayName": "North",
          "destination": "building_L-LG"
        },
        "building_L-LJ": {
          "displayName": "SouthEast",
          "destination": "building_L-LJ"
        },
        "building_L-LE": {
          "displayName": "NorthWest",
          "destination": "building_L-LE"
        },
        "building_L-LH": {
          "displayName": "SouthWest",
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
      "displayName": "Music Building Front Porch",
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
      "description": "There are three rooms throughout this building. The building is square-shaped with walls facing South, North, SouthEast, NorthWest. The rooms in this floor are:\n\n[|South|||||] Literature on music Room\n[|North|||||] Instruction and study Room\n[|SouthEast|] Music Room\n[|Exit||||||] Music Building Front Porch",
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
          "displayName": "SouthEast",
          "destination": "building_M-M"
        }
      }
    },
    "N": {
      "firstVisit": true,
      "displayName": "Fine Arts Building Front Porch",
      "description": "This is a small, two story tall, hexagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cFine Arts\u201d engraved.\n\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
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
    "building_N": {
      "firstVisit": true,
      "displayName": "Fine Arts Building Main Lobby",
      "description": "There are eight rooms throughout this building in two floors. You are in the first floor. The building is hexagonal-shaped with walls facing South, North, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] Architecture Room\n[|North|||||] Visual arts Room\n[|SouthEast|] Decorative arts Room\n[|NorthWest|] Painting Room\n[|SouthWest|] Drawing.    Design.    Illustration Room\n[|NorthEast|] Print media Room\n[|Up||||||||] 2nd floor\n[|Exit||||||] Fine Arts Building Front Porch",
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
          "displayName": "SouthEast",
          "destination": "building_N-NK"
        },
        "building_N-ND": {
          "displayName": "NorthWest",
          "destination": "building_N-ND"
        },
        "building_N-NC": {
          "displayName": "SouthWest",
          "destination": "building_N-NC"
        },
        "building_N-NE": {
          "displayName": "NorthEast",
          "destination": "building_N-NE"
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
          "destination": "2_building_N"
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
          "destination": "2_building_N"
        }
      }
    },
    "2_building_N": {
      "firstVisit": true,
      "displayName": "Fine Arts Building, 2nd Floor",
      "description": "You are in the 2nd floor. There are two rooms:\n\n[|South|||||] Sculpture Room\n[|North|||||] Arts in general Room\n[|Down||||||] 1st floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_N-NB": {
          "displayName": "South",
          "destination": "building_N-NB"
        },
        "building_N-NX": {
          "displayName": "North",
          "destination": "building_N-NX"
        },
        "down": {
          "displayName": "Down",
          "destination": "building_N"
        }
      }
    },
    "P": {
      "firstVisit": true,
      "displayName": "Language and Literature Building Front Porch",
      "description": "This is a small, four story tall, hexagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cLanguage and Literature\u201d engraved.\n\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
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
    "building_P": {
      "firstVisit": true,
      "displayName": "Language and Literature Building Main Lobby",
      "description": "There are 19 rooms throughout this building in four floors. You are in the first floor. The building is hexagonal-shaped with walls facing South, North, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] Fiction and juvenile belles lettres Room\n[|North|||||] English Room\n[|SouthEast|] American literature Room\n[|NorthWest|] French literature Room\n[|SouthWest|] English Room\n[|NorthEast|] Literature (General) Room\n[|Up||||||||] 2nd floor\n[|Exit||||||] Language and Literature Building Front Porch",
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
          "displayName": "SouthEast",
          "destination": "building_P-PS"
        },
        "building_P-PQ": {
          "displayName": "NorthWest",
          "destination": "building_P-PQ"
        },
        "building_P-PE": {
          "displayName": "SouthWest",
          "destination": "building_P-PE"
        },
        "building_P-PN": {
          "displayName": "NorthEast",
          "destination": "building_P-PN"
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
          "destination": "2_building_P"
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
          "destination": "2_building_P"
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
    "2_building_P": {
      "firstVisit": true,
      "displayName": "Language and Literature Building, 2nd Floor",
      "description": "You are in the 2nd floor. There are six rooms:\n\n[|South|||||] German literature Room\n[|North|||||] Greek literature Room\n[|SouthEast|] Romance Room\n[|NorthWest|] Indo-Iranian philology and literature Room\n[|SouthWest|] Philology.    Linguistics Room\n[|NorthEast|] West Germanic Room\n[|Down||||||] 1st floor\n[|Up||||||||] 3rd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_P-PT": {
          "displayName": "South",
          "destination": "building_P-PT"
        },
        "building_P-PA": {
          "displayName": "North",
          "destination": "building_P-PA"
        },
        "building_P-PC": {
          "displayName": "SouthEast",
          "destination": "building_P-PC"
        },
        "building_P-PK": {
          "displayName": "NorthWest",
          "destination": "building_P-PK"
        },
        "building_P-P": {
          "displayName": "SouthWest",
          "destination": "building_P-P"
        },
        "building_P-PF": {
          "displayName": "NorthEast",
          "destination": "building_P-PF"
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
    "building_P-PJ": {
      "firstVisit": true,
      "displayName": "Oriental philology and literature Room",
      "description": "Description for Oriental philology and literature Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_building_P"
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
          "destination": "3_building_P"
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
          "destination": "3_building_P"
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
    "3_building_P": {
      "firstVisit": true,
      "displayName": "Language and Literature Building, 3rd Floor",
      "description": "You are in the 3rd floor. There are six rooms:\n\n[|South|||||] Oriental philology and literature Room\n[|North|||||] Germanic Room\n[|SouthEast|] Slavic.    Baltic.    Albanian Room\n[|NorthWest|] Uralic.    Basque Room\n[|SouthWest|] Languages of Eastern Asia, Africa, Oceania Room\n[|NorthEast|] Modern languages.    Celtic languages Room\n[|Down||||||] 2nd floor\n[|Up||||||||] 4th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_P-PJ": {
          "displayName": "South",
          "destination": "building_P-PJ"
        },
        "building_P-PD": {
          "displayName": "North",
          "destination": "building_P-PD"
        },
        "building_P-PG": {
          "displayName": "SouthEast",
          "destination": "building_P-PG"
        },
        "building_P-PH": {
          "displayName": "NorthWest",
          "destination": "building_P-PH"
        },
        "building_P-PL": {
          "displayName": "SouthWest",
          "destination": "building_P-PL"
        },
        "building_P-PB": {
          "displayName": "NorthEast",
          "destination": "building_P-PB"
        },
        "down": {
          "displayName": "Down",
          "destination": "2_building_P"
        },
        "up": {
          "displayName": "Up",
          "destination": "4_building_P"
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
          "destination": "4_building_P"
        }
      }
    },
    "4_building_P": {
      "firstVisit": true,
      "displayName": "Language and Literature Building, 4th Floor",
      "description": "You are in the 4th floor. There is one room:\n\n[|South|||||] Hyperborean, Indian, and artificial languages Room\n[|Down||||||] 3rd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_P-PM": {
          "displayName": "South",
          "destination": "building_P-PM"
        },
        "down": {
          "displayName": "Down",
          "destination": "3_building_P"
        }
      }
    },
    "Q": {
      "firstVisit": true,
      "displayName": "Science Building Front Porch",
      "description": "This is a small, two story tall, hexagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cScience\u201d engraved.\n\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
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
    "building_Q": {
      "firstVisit": true,
      "displayName": "Science Building Main Lobby",
      "description": "There are 12 rooms throughout this building in two floors. You are in the first floor. The building is hexagonal-shaped with walls facing South, North, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] Microbiology Room\n[|North|||||] Botany Room\n[|SouthEast|] Zoology Room\n[|NorthWest|] Astronomy Room\n[|SouthWest|] Mathematics Room\n[|NorthEast|] Science (General) Room\n[|Up||||||||] 2nd floor\n[|Exit||||||] Science Building Front Porch",
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
          "displayName": "SouthEast",
          "destination": "building_Q-QL"
        },
        "building_Q-QB": {
          "displayName": "NorthWest",
          "destination": "building_Q-QB"
        },
        "building_Q-QA": {
          "displayName": "SouthWest",
          "destination": "building_Q-QA"
        },
        "building_Q-Q": {
          "displayName": "NorthEast",
          "destination": "building_Q-Q"
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
          "destination": "2_building_Q"
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
          "destination": "2_building_Q"
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
      "description": "You are in the 2nd floor. There are six rooms:\n\n[|South|||||] Physiology Room\n[|North|||||] Biology (General) Room\n[|SouthEast|] Chemistry Room\n[|NorthWest|] Geology Room\n[|SouthWest|] Physics Room\n[|NorthEast|] Human anatomy Room\n[|Down||||||] 1st floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_Q-QP": {
          "displayName": "South",
          "destination": "building_Q-QP"
        },
        "building_Q-QH": {
          "displayName": "North",
          "destination": "building_Q-QH"
        },
        "building_Q-QD": {
          "displayName": "SouthEast",
          "destination": "building_Q-QD"
        },
        "building_Q-QE": {
          "displayName": "NorthWest",
          "destination": "building_Q-QE"
        },
        "building_Q-QC": {
          "displayName": "SouthWest",
          "destination": "building_Q-QC"
        },
        "building_Q-QM": {
          "displayName": "NorthEast",
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
      "displayName": "Medicine Building Front Porch",
      "description": "This is a small, three story tall, hexagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cMedicine\u201d engraved.\n\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
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
    "building_R": {
      "firstVisit": true,
      "displayName": "Medicine Building Main Lobby",
      "description": "There are 17 rooms throughout this building in three floors. You are in the first floor. The building is hexagonal-shaped with walls facing South, North, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] Homeopathy Room\n[|North|||||] Public aspects of medicine Room\n[|SouthEast|] Surgery Room\n[|NorthWest|] Ophthalmology Room\n[|SouthWest|] Internal medicine Room\n[|NorthEast|] Gynecology and obstetrics Room\n[|Up||||||||] 2nd floor\n[|Exit||||||] Medicine Building Front Porch",
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
          "displayName": "SouthEast",
          "destination": "building_R-RD"
        },
        "building_R-RE": {
          "displayName": "NorthWest",
          "destination": "building_R-RE"
        },
        "building_R-RC": {
          "displayName": "SouthWest",
          "destination": "building_R-RC"
        },
        "building_R-RG": {
          "displayName": "NorthEast",
          "destination": "building_R-RG"
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
          "destination": "2_building_R"
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
          "destination": "2_building_R"
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
    "2_building_R": {
      "firstVisit": true,
      "displayName": "Medicine Building, 2nd Floor",
      "description": "You are in the 2nd floor. There are six rooms:\n\n[|South|||||] Dentistry Room\n[|North|||||] Pediatrics Room\n[|SouthEast|] Dermatology Room\n[|NorthWest|] Pharmacy and materia medica Room\n[|SouthWest|] Therapeutics.    Pharmacology Room\n[|NorthEast|] Medicine (General) Room\n[|Down||||||] 1st floor\n[|Up||||||||] 3rd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_R-RK": {
          "displayName": "South",
          "destination": "building_R-RK"
        },
        "building_R-RJ": {
          "displayName": "North",
          "destination": "building_R-RJ"
        },
        "building_R-RL": {
          "displayName": "SouthEast",
          "destination": "building_R-RL"
        },
        "building_R-RS": {
          "displayName": "NorthWest",
          "destination": "building_R-RS"
        },
        "building_R-RM": {
          "displayName": "SouthWest",
          "destination": "building_R-RM"
        },
        "building_R-R": {
          "displayName": "NorthEast",
          "destination": "building_R-R"
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
    "building_R-RB": {
      "firstVisit": true,
      "displayName": "Pathology Room",
      "description": "Description for Pathology Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_building_R"
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
          "destination": "3_building_R"
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
          "destination": "3_building_R"
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
      "description": "You are in the 3rd floor. There are five rooms:\n\n[|South|||||] Pathology Room\n[|North|||||] Otorhinolaryngology Room\n[|SouthEast|] Other systems of medicine Room\n[|NorthWest|] Nursing Room\n[|SouthWest|] Botanic, Thomsonian, and eclectic medicine Room\n[|Down||||||] 2nd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_R-RB": {
          "displayName": "South",
          "destination": "building_R-RB"
        },
        "building_R-RF": {
          "displayName": "North",
          "destination": "building_R-RF"
        },
        "building_R-RZ": {
          "displayName": "SouthEast",
          "destination": "building_R-RZ"
        },
        "building_R-RT": {
          "displayName": "NorthWest",
          "destination": "building_R-RT"
        },
        "building_R-RV": {
          "displayName": "SouthWest",
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
      "displayName": "Agriculture Building Front Porch",
      "description": "This is a small, one story tall, hexagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cAgriculture\u201d engraved.\n\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
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
      "description": "There are six rooms throughout this building. The building is hexagonal-shaped with walls facing South, North, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] Animal culture Room\n[|North|||||] Agriculture (General) Room\n[|SouthEast|] Aquaculture.    Fisheries.    Angling Room\n[|NorthWest|] Plant culture Room\n[|SouthWest|] Hunting sports Room\n[|NorthEast|] Forestry Room\n[|Exit||||||] Agriculture Building Front Porch",
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
          "displayName": "SouthEast",
          "destination": "building_S-SH"
        },
        "building_S-SB": {
          "displayName": "NorthWest",
          "destination": "building_S-SB"
        },
        "building_S-SK": {
          "displayName": "SouthWest",
          "destination": "building_S-SK"
        },
        "building_S-SD": {
          "displayName": "NorthEast",
          "destination": "building_S-SD"
        }
      }
    },
    "T": {
      "firstVisit": true,
      "displayName": "Technology Building Front Porch",
      "description": "This is a small, three story tall, hexagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cTechnology\u201d engraved.\n\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
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
    "building_T": {
      "firstVisit": true,
      "displayName": "Technology Building Main Lobby",
      "description": "There are 17 rooms throughout this building in three floors. You are in the first floor. The building is hexagonal-shaped with walls facing South, North, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] Mining engineering.    Metallurgy Room\n[|North|||||] Photography Room\n[|SouthEast|] Hydraulic engineering Room\n[|NorthWest|] Environmental technology.    Sanitary engineering Room\n[|SouthWest|] Home economics Room\n[|NorthEast|] Chemical technology Room\n[|Up||||||||] 2nd floor\n[|Exit||||||] Technology Building Front Porch",
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
          "displayName": "SouthEast",
          "destination": "building_T-TC"
        },
        "building_T-TD": {
          "displayName": "NorthWest",
          "destination": "building_T-TD"
        },
        "building_T-TX": {
          "displayName": "SouthWest",
          "destination": "building_T-TX"
        },
        "building_T-TP": {
          "displayName": "NorthEast",
          "destination": "building_T-TP"
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
          "destination": "2_building_T"
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
          "destination": "2_building_T"
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
    "2_building_T": {
      "firstVisit": true,
      "displayName": "Technology Building, 2nd Floor",
      "description": "You are in the 2nd floor. There are six rooms:\n\n[|South|||||] Electrical engineering.    Electronics.    Nuclear Room\n[|North|||||] Engineering (General).    Civil engineering (General) Room\n[|SouthEast|] Manufactures Room\n[|NorthWest|] Mechanical engineering and machinery Room\n[|SouthWest|] Handicrafts.    Arts and crafts Room\n[|NorthEast|] Technology (General) Room\n[|Down||||||] 1st floor\n[|Up||||||||] 3rd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_T-TK": {
          "displayName": "South",
          "destination": "building_T-TK"
        },
        "building_T-TA": {
          "displayName": "North",
          "destination": "building_T-TA"
        },
        "building_T-TS": {
          "displayName": "SouthEast",
          "destination": "building_T-TS"
        },
        "building_T-TJ": {
          "displayName": "NorthWest",
          "destination": "building_T-TJ"
        },
        "building_T-TT": {
          "displayName": "SouthWest",
          "destination": "building_T-TT"
        },
        "building_T-T": {
          "displayName": "NorthEast",
          "destination": "building_T-T"
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
    "building_T-TH": {
      "firstVisit": true,
      "displayName": "Building construction Room",
      "description": "Description for Building construction Room. You can exit to the floor foyer.\n\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_building_T"
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
          "destination": "3_building_T"
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
          "destination": "3_building_T"
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
      "description": "You are in the 3rd floor. There are five rooms:\n\n[|South|||||] Building construction Room\n[|North|||||] Railroad engineering and operation Room\n[|SouthEast|] Motor vehicles.    Aeronautics.    Astronautics Room\n[|NorthWest|] Bridge engineering Room\n[|SouthWest|] Highway engineering.    Roads and pavements Room\n[|Down||||||] 2nd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_T-TH": {
          "displayName": "South",
          "destination": "building_T-TH"
        },
        "building_T-TF": {
          "displayName": "North",
          "destination": "building_T-TF"
        },
        "building_T-TL": {
          "displayName": "SouthEast",
          "destination": "building_T-TL"
        },
        "building_T-TG": {
          "displayName": "NorthWest",
          "destination": "building_T-TG"
        },
        "building_T-TE": {
          "displayName": "SouthWest",
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
      "displayName": "Military Science Building Front Porch",
      "description": "This is a small, two story tall, hexagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cMilitary Science\u201d engraved.\n\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
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
    "building_U": {
      "firstVisit": true,
      "displayName": "Military Science Building Main Lobby",
      "description": "There are nine rooms throughout this building in two floors. You are in the first floor. The building is hexagonal-shaped with walls facing South, North, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] Military science (General) Room\n[|North|||||] Air forces.    Air warfare Room\n[|SouthEast|] Armies: Organization, distribution, military situation Room\n[|NorthWest|] Military administration Room\n[|SouthWest|] Infantry Room\n[|NorthEast|] Artillery Room\n[|Up||||||||] 2nd floor\n[|Exit||||||] Military Science Building Front Porch",
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
          "displayName": "SouthEast",
          "destination": "building_U-UA"
        },
        "building_U-UB": {
          "displayName": "NorthWest",
          "destination": "building_U-UB"
        },
        "building_U-UD": {
          "displayName": "SouthWest",
          "destination": "building_U-UD"
        },
        "building_U-UF": {
          "displayName": "NorthEast",
          "destination": "building_U-UF"
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
          "destination": "2_building_U"
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
          "destination": "2_building_U"
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
      "description": "You are in the 2nd floor. There are three rooms:\n\n[|South|||||] Maintenance and transportation Room\n[|North|||||] Other services Room\n[|SouthEast|] Cavalry.    Armor Room\n[|Down||||||] 1st floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_U-UC": {
          "displayName": "South",
          "destination": "building_U-UC"
        },
        "building_U-UH": {
          "displayName": "North",
          "destination": "building_U-UH"
        },
        "building_U-UE": {
          "displayName": "SouthEast",
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
      "displayName": "Naval Science Building Front Porch",
      "description": "This is a small, two story tall, hexagonal-shaped, marble and brick building. The entrance has a marble relief above it with the words \u201cNaval Science\u201d engraved.\n\n[|Main||] Main Library Grounds\n[|Enter|] Enter Building",
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
    "building_V": {
      "firstVisit": true,
      "displayName": "Naval Science Building Main Lobby",
      "description": "There are 10 rooms throughout this building in two floors. You are in the first floor. The building is hexagonal-shaped with walls facing South, North, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[|South|||||] Navies: Organization, distribution, naval situation Room\n[|North|||||] Naval architecture.    Shipbuilding.    Marine engineering Room\n[|SouthEast|] Navigation.    Merchant marine Room\n[|NorthWest|] Minor services of navies Room\n[|SouthWest|] Naval science (General) Room\n[|NorthEast|] Naval administration Room\n[|Up||||||||] 2nd floor\n[|Exit||||||] Naval Science Building Front Porch",
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
          "displayName": "SouthEast",
          "destination": "building_V-VK"
        },
        "building_V-VG": {
          "displayName": "NorthWest",
          "destination": "building_V-VG"
        },
        "building_V-V": {
          "displayName": "SouthWest",
          "destination": "building_V-V"
        },
        "building_V-VB": {
          "displayName": "NorthEast",
          "destination": "building_V-VB"
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
          "destination": "2_building_V"
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
          "destination": "2_building_V"
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
      "description": "You are in the 2nd floor. There are four rooms:\n\n[|South|||||] Marines Room\n[|North|||||] Naval ordnance Room\n[|SouthEast|] Naval maintenance Room\n[|NorthWest|] Naval personnel Room\n[|Down||||||] 1st floor",
      "interactables": {},
      "items": {},
      "exits": {
        "building_V-VE": {
          "displayName": "South",
          "destination": "building_V-VE"
        },
        "building_V-VF": {
          "displayName": "North",
          "destination": "building_V-VF"
        },
        "building_V-VC": {
          "displayName": "SouthEast",
          "destination": "building_V-VC"
        },
        "building_V-VD": {
          "displayName": "NorthWest",
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
      "displayName": "Bibliography, Library Science Building Front Porch",
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
      "description": "There are two rooms throughout this building. The building is square-shaped with walls facing South, North, SouthEast, NorthWest. The rooms in this floor are:\n\n[|South|||||] National bibliography Room\n[|North|||||] Information resources (General) Room\n[|Exit||||||] Bibliography, Library Science Building Front Porch",
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
