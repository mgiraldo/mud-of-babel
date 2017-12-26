var gameData = {
  "commandCounter": 0,
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
      "description": "You are in an plaza surrounded by 21 buildings conforming Main Library Grounds.\nThe buildings are accessible via their classification code, visible above the main door:\n\n[Building A] (2 stories) \u201cGeneral Works Building\u201d\n[Building B] (2 stories) \u201cPhilosophy, Psychology, Religion Building\u201d\n[Building C] (2 stories) \u201cAuxiliary Sciences of History (General) Building\u201d\n[Building D] (3 stories) \u201cWorld History (except American History) Building\u201d\n[Building E] (1 story) \u201cAmerican History Building\u201d\n[Building F] (1 story) \u201cLocal History of the United States and British, Dutch, French, and Latin America Building\u201d\n[Building G] (2 stories) \u201cGeography, Anthropology, Recreation Building\u201d\n[Building H] (2 stories) \u201cSocial Sciences Building\u201d\n[Building J] (2 stories) \u201cPolitical Science Building\u201d\n[Building K] (35 stories) \u201cLaw Building\u201d\n[Building L] (2 stories) \u201cEducation Building\u201d\n[Building M] (1 story) \u201cMusic Building\u201d\n[Building N] (1 story) \u201cFine Arts Building\u201d\n[Building P] (3 stories) \u201cLanguage and Literature Building\u201d\n[Building Q] (2 stories) \u201cScience Building\u201d\n[Building R] (3 stories) \u201cMedicine Building\u201d\n[Building S] (1 story) \u201cAgriculture Building\u201d\n[Building T] (3 stories) \u201cTechnology Building\u201d\n[Building U] (2 stories) \u201cMilitary Science Building\u201d\n[Building V] (2 stories) \u201cNaval Science Building\u201d\n[Building Z] (1 story) \u201cBibliography, Library Science Building\u201d",
      "interactables": {},
      "items": {},
      "exits": {
        "Building A": {
          "displayName": "Building A",
          "destination": "Building A"
        },
        "Building B": {
          "displayName": "Building B",
          "destination": "Building B"
        },
        "Building C": {
          "displayName": "Building C",
          "destination": "Building C"
        },
        "Building D": {
          "displayName": "Building D",
          "destination": "Building D"
        },
        "Building E": {
          "displayName": "Building E",
          "destination": "Building E"
        },
        "Building F": {
          "displayName": "Building F",
          "destination": "Building F"
        },
        "Building G": {
          "displayName": "Building G",
          "destination": "Building G"
        },
        "Building H": {
          "displayName": "Building H",
          "destination": "Building H"
        },
        "Building J": {
          "displayName": "Building J",
          "destination": "Building J"
        },
        "Building K": {
          "displayName": "Building K",
          "destination": "Building K"
        },
        "Building L": {
          "displayName": "Building L",
          "destination": "Building L"
        },
        "Building M": {
          "displayName": "Building M",
          "destination": "Building M"
        },
        "Building N": {
          "displayName": "Building N",
          "destination": "Building N"
        },
        "Building P": {
          "displayName": "Building P",
          "destination": "Building P"
        },
        "Building Q": {
          "displayName": "Building Q",
          "destination": "Building Q"
        },
        "Building R": {
          "displayName": "Building R",
          "destination": "Building R"
        },
        "Building S": {
          "displayName": "Building S",
          "destination": "Building S"
        },
        "Building T": {
          "displayName": "Building T",
          "destination": "Building T"
        },
        "Building U": {
          "displayName": "Building U",
          "destination": "Building U"
        },
        "Building V": {
          "displayName": "Building V",
          "destination": "Building V"
        },
        "Building Z": {
          "displayName": "Building Z",
          "destination": "Building Z"
        }
      }
    },
    "Building A-AC": {
      "firstVisit": true,
      "displayName": "Collections.  Series.  Collected works",
      "description": "Description for \u201cCollections.  Series.  Collected works Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building A"
        }
      }
    },
    "Building A-AE": {
      "firstVisit": true,
      "displayName": "Encyclopedias",
      "description": "Description for \u201cEncyclopedias Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building A"
        }
      }
    },
    "Building A-AG": {
      "firstVisit": true,
      "displayName": "Dictionaries and other general reference works",
      "description": "Description for \u201cDictionaries and other general reference works Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building A"
        }
      }
    },
    "Building A-AZ": {
      "firstVisit": true,
      "displayName": "History of scholarship and learning.  The humanities",
      "description": "Description for \u201cHistory of scholarship and learning.  The humanities Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building A"
        }
      }
    },
    "Building A-AM": {
      "firstVisit": true,
      "displayName": "Museums.  Collectors and collecting",
      "description": "Description for \u201cMuseums.  Collectors and collecting Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building A"
        }
      }
    },
    "Building A-AS": {
      "firstVisit": true,
      "displayName": "Academies and learned societies",
      "description": "Description for \u201cAcademies and learned societies Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building A"
        }
      }
    },
    "Building A-AP": {
      "firstVisit": true,
      "displayName": "Periodicals",
      "description": "Description for \u201cPeriodicals Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building A"
        }
      }
    },
    "Building A-AY": {
      "firstVisit": true,
      "displayName": "Yearbooks.  Almanacs.  Directories",
      "description": "Description for \u201cYearbooks.  Almanacs.  Directories Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building A"
        }
      }
    },
    "Building A": {
      "firstVisit": true,
      "displayName": "\u201cGeneral Works Building\u201d Main Lobby",
      "description": "There are 10 rooms throughout this building in 2 floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[  South  ] \u201cCollections.  Series.  Collected works Room\u201d\n[  North  ] \u201cEncyclopedias Room\u201d\n[  East   ] \u201cDictionaries and other general reference works Room\u201d\n[  West   ] \u201cHistory of scholarship and learning.  The humanities Room\u201d\n[SouthEast] \u201cMuseums.  Collectors and collecting Room\u201d\n[NorthWest] \u201cAcademies and learned societies Room\u201d\n[SouthWest] \u201cPeriodicals Room\u201d\n[NorthEast] \u201cYearbooks.  Almanacs.  Directories Room\u201d\n[  Up     ] 2nd floor\n[  Exit   ] Main Library Grounds Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "Building A": {
          "displayName": "Exit",
          "destination": "MAIN"
        },
        "up": {
          "displayName": "Up",
          "destination": "2_Building A"
        },
        "Building A-AC": {
          "displayName": "South",
          "destination": "Building A-AC"
        },
        "Building A-AE": {
          "displayName": "North",
          "destination": "Building A-AE"
        },
        "Building A-AG": {
          "displayName": "East",
          "destination": "Building A-AG"
        },
        "Building A-AZ": {
          "displayName": "West",
          "destination": "Building A-AZ"
        },
        "Building A-AM": {
          "displayName": "SouthEast",
          "destination": "Building A-AM"
        },
        "Building A-AS": {
          "displayName": "NorthWest",
          "destination": "Building A-AS"
        },
        "Building A-AP": {
          "displayName": "SouthWest",
          "destination": "Building A-AP"
        },
        "Building A-AY": {
          "displayName": "NorthEast",
          "destination": "Building A-AY"
        }
      }
    },
    "Building A-AI": {
      "firstVisit": true,
      "displayName": "Indexes",
      "description": "Description for \u201cIndexes Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building A"
        }
      }
    },
    "Building A-AN": {
      "firstVisit": true,
      "displayName": "Newspapers",
      "description": "Description for \u201cNewspapers Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building A"
        }
      }
    },
    "2_Building A": {
      "firstVisit": true,
      "displayName": "\u201cGeneral Works Building\u201d, 2nd Floor",
      "description": "You are in the 2nd floor. There are 2 rooms:\n\n[  South  ] \u201cIndexes Room\u201d\n[  North  ] \u201cNewspapers Room\u201d\n[  Down   ] 1st floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building A-AI": {
          "displayName": "South",
          "destination": "Building A-AI"
        },
        "Building A-AN": {
          "displayName": "North",
          "destination": "Building A-AN"
        },
        "down": {
          "displayName": "Down",
          "destination": "Building A"
        }
      }
    },
    "Building B-BV": {
      "firstVisit": true,
      "displayName": "Practical Theology",
      "description": "Description for \u201cPractical Theology Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building B"
        }
      }
    },
    "Building B-BJ": {
      "firstVisit": true,
      "displayName": "Ethics",
      "description": "Description for \u201cEthics Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building B"
        }
      }
    },
    "Building B-BX": {
      "firstVisit": true,
      "displayName": "Christian Denominations",
      "description": "Description for \u201cChristian Denominations Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building B"
        }
      }
    },
    "Building B-BF": {
      "firstVisit": true,
      "displayName": "Psychology",
      "description": "Description for \u201cPsychology Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building B"
        }
      }
    },
    "Building B-BS": {
      "firstVisit": true,
      "displayName": "The Bible",
      "description": "Description for \u201cThe Bible Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building B"
        }
      }
    },
    "Building B-BT": {
      "firstVisit": true,
      "displayName": "Doctrinal Theology",
      "description": "Description for \u201cDoctrinal Theology Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building B"
        }
      }
    },
    "Building B-B": {
      "firstVisit": true,
      "displayName": "Philosophy (General)",
      "description": "Description for \u201cPhilosophy (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building B"
        }
      }
    },
    "Building B-BR": {
      "firstVisit": true,
      "displayName": "Christianity",
      "description": "Description for \u201cChristianity Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building B"
        }
      }
    },
    "Building B": {
      "firstVisit": true,
      "displayName": "\u201cPhilosophy, Psychology, Religion Building\u201d Main Lobby",
      "description": "There are 15 rooms throughout this building in 2 floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[  South  ] \u201cPractical Theology Room\u201d\n[  North  ] \u201cEthics Room\u201d\n[  East   ] \u201cChristian Denominations Room\u201d\n[  West   ] \u201cPsychology Room\u201d\n[SouthEast] \u201cThe Bible Room\u201d\n[NorthWest] \u201cDoctrinal Theology Room\u201d\n[SouthWest] \u201cPhilosophy (General) Room\u201d\n[NorthEast] \u201cChristianity Room\u201d\n[  Up     ] 2nd floor\n[  Exit   ] Main Library Grounds Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "Building B": {
          "displayName": "Exit",
          "destination": "MAIN"
        },
        "up": {
          "displayName": "Up",
          "destination": "2_Building B"
        },
        "Building B-BV": {
          "displayName": "South",
          "destination": "Building B-BV"
        },
        "Building B-BJ": {
          "displayName": "North",
          "destination": "Building B-BJ"
        },
        "Building B-BX": {
          "displayName": "East",
          "destination": "Building B-BX"
        },
        "Building B-BF": {
          "displayName": "West",
          "destination": "Building B-BF"
        },
        "Building B-BS": {
          "displayName": "SouthEast",
          "destination": "Building B-BS"
        },
        "Building B-BT": {
          "displayName": "NorthWest",
          "destination": "Building B-BT"
        },
        "Building B-B": {
          "displayName": "SouthWest",
          "destination": "Building B-B"
        },
        "Building B-BR": {
          "displayName": "NorthEast",
          "destination": "Building B-BR"
        }
      }
    },
    "Building B-BL": {
      "firstVisit": true,
      "displayName": "Religions.  Mythology.  Rationalism",
      "description": "Description for \u201cReligions.  Mythology.  Rationalism Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building B"
        }
      }
    },
    "Building B-BP": {
      "firstVisit": true,
      "displayName": "Islam.  Bahai Faith.  Theosophy, etc.",
      "description": "Description for \u201cIslam.  Bahai Faith.  Theosophy, etc. Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building B"
        }
      }
    },
    "Building B-BM": {
      "firstVisit": true,
      "displayName": "Judaism",
      "description": "Description for \u201cJudaism Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building B"
        }
      }
    },
    "Building B-BC": {
      "firstVisit": true,
      "displayName": "Logic",
      "description": "Description for \u201cLogic Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building B"
        }
      }
    },
    "Building B-BQ": {
      "firstVisit": true,
      "displayName": "Buddhism",
      "description": "Description for \u201cBuddhism Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building B"
        }
      }
    },
    "Building B-BD": {
      "firstVisit": true,
      "displayName": "Speculative philosophy",
      "description": "Description for \u201cSpeculative philosophy Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building B"
        }
      }
    },
    "Building B-BH": {
      "firstVisit": true,
      "displayName": "Aesthetics",
      "description": "Description for \u201cAesthetics Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building B"
        }
      }
    },
    "2_Building B": {
      "firstVisit": true,
      "displayName": "\u201cPhilosophy, Psychology, Religion Building\u201d, 2nd Floor",
      "description": "You are in the 2nd floor. There are 7 rooms:\n\n[  South  ] \u201cReligions.  Mythology.  Rationalism Room\u201d\n[  North  ] \u201cIslam.  Bahai Faith.  Theosophy, etc. Room\u201d\n[  East   ] \u201cJudaism Room\u201d\n[  West   ] \u201cLogic Room\u201d\n[SouthEast] \u201cBuddhism Room\u201d\n[NorthWest] \u201cSpeculative philosophy Room\u201d\n[SouthWest] \u201cAesthetics Room\u201d\n[  Down   ] 1st floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building B-BL": {
          "displayName": "South",
          "destination": "Building B-BL"
        },
        "Building B-BP": {
          "displayName": "North",
          "destination": "Building B-BP"
        },
        "Building B-BM": {
          "displayName": "East",
          "destination": "Building B-BM"
        },
        "Building B-BC": {
          "displayName": "West",
          "destination": "Building B-BC"
        },
        "Building B-BQ": {
          "displayName": "SouthEast",
          "destination": "Building B-BQ"
        },
        "Building B-BD": {
          "displayName": "NorthWest",
          "destination": "Building B-BD"
        },
        "Building B-BH": {
          "displayName": "SouthWest",
          "destination": "Building B-BH"
        },
        "down": {
          "displayName": "Down",
          "destination": "Building B"
        }
      }
    },
    "Building C-CT": {
      "firstVisit": true,
      "displayName": "Biography",
      "description": "Description for \u201cBiography Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building C"
        }
      }
    },
    "Building C-CS": {
      "firstVisit": true,
      "displayName": "Genealogy",
      "description": "Description for \u201cGenealogy Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building C"
        }
      }
    },
    "Building C-CR": {
      "firstVisit": true,
      "displayName": "Heraldry",
      "description": "Description for \u201cHeraldry Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building C"
        }
      }
    },
    "Building C-CB": {
      "firstVisit": true,
      "displayName": "History of Civilization",
      "description": "Description for \u201cHistory of Civilization Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building C"
        }
      }
    },
    "Building C-CJ": {
      "firstVisit": true,
      "displayName": "Numismatics",
      "description": "Description for \u201cNumismatics Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building C"
        }
      }
    },
    "Building C-CC": {
      "firstVisit": true,
      "displayName": "Archaeology",
      "description": "Description for \u201cArchaeology Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building C"
        }
      }
    },
    "Building C-CN": {
      "firstVisit": true,
      "displayName": "Inscriptions.  Epigraphy",
      "description": "Description for \u201cInscriptions.  Epigraphy Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building C"
        }
      }
    },
    "Building C-CD": {
      "firstVisit": true,
      "displayName": "Diplomatics.  Archives.  Seals",
      "description": "Description for \u201cDiplomatics.  Archives.  Seals Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building C"
        }
      }
    },
    "Building C": {
      "firstVisit": true,
      "displayName": "\u201cAuxiliary Sciences of History (General) Building\u201d Main Lobby",
      "description": "There are 10 rooms throughout this building in 2 floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[  South  ] \u201cBiography Room\u201d\n[  North  ] \u201cGenealogy Room\u201d\n[  East   ] \u201cHeraldry Room\u201d\n[  West   ] \u201cHistory of Civilization Room\u201d\n[SouthEast] \u201cNumismatics Room\u201d\n[NorthWest] \u201cArchaeology Room\u201d\n[SouthWest] \u201cInscriptions.  Epigraphy Room\u201d\n[NorthEast] \u201cDiplomatics.  Archives.  Seals Room\u201d\n[  Up     ] 2nd floor\n[  Exit   ] Main Library Grounds Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "Building C": {
          "displayName": "Exit",
          "destination": "MAIN"
        },
        "up": {
          "displayName": "Up",
          "destination": "2_Building C"
        },
        "Building C-CT": {
          "displayName": "South",
          "destination": "Building C-CT"
        },
        "Building C-CS": {
          "displayName": "North",
          "destination": "Building C-CS"
        },
        "Building C-CR": {
          "displayName": "East",
          "destination": "Building C-CR"
        },
        "Building C-CB": {
          "displayName": "West",
          "destination": "Building C-CB"
        },
        "Building C-CJ": {
          "displayName": "SouthEast",
          "destination": "Building C-CJ"
        },
        "Building C-CC": {
          "displayName": "NorthWest",
          "destination": "Building C-CC"
        },
        "Building C-CN": {
          "displayName": "SouthWest",
          "destination": "Building C-CN"
        },
        "Building C-CD": {
          "displayName": "NorthEast",
          "destination": "Building C-CD"
        }
      }
    },
    "Building C-CE": {
      "firstVisit": true,
      "displayName": "Technical chronology.  Calendar",
      "description": "Description for \u201cTechnical chronology.  Calendar Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building C"
        }
      }
    },
    "Building C-C": {
      "firstVisit": true,
      "displayName": "Auxiliary Sciences of History (General)",
      "description": "Description for \u201cAuxiliary Sciences of History (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building C"
        }
      }
    },
    "2_Building C": {
      "firstVisit": true,
      "displayName": "\u201cAuxiliary Sciences of History (General) Building\u201d, 2nd Floor",
      "description": "You are in the 2nd floor. There are 2 rooms:\n\n[  South  ] \u201cTechnical chronology.  Calendar Room\u201d\n[  North  ] \u201cAuxiliary Sciences of History (General) Room\u201d\n[  Down   ] 1st floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building C-CE": {
          "displayName": "South",
          "destination": "Building C-CE"
        },
        "Building C-C": {
          "displayName": "North",
          "destination": "Building C-C"
        },
        "down": {
          "displayName": "Down",
          "destination": "Building C"
        }
      }
    },
    "Building D-DS": {
      "firstVisit": true,
      "displayName": "History of Asia",
      "description": "Description for \u201cHistory of Asia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building D"
        }
      }
    },
    "Building D-D": {
      "firstVisit": true,
      "displayName": "History (General)",
      "description": "Description for \u201cHistory (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building D"
        }
      }
    },
    "Building D-DA": {
      "firstVisit": true,
      "displayName": "History of Great Britain",
      "description": "Description for \u201cHistory of Great Britain Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building D"
        }
      }
    },
    "Building D-DT": {
      "firstVisit": true,
      "displayName": "History of Africa",
      "description": "Description for \u201cHistory of Africa Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building D"
        }
      }
    },
    "Building D-DG": {
      "firstVisit": true,
      "displayName": "History of Italy",
      "description": "Description for \u201cHistory of Italy Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building D"
        }
      }
    },
    "Building D-DC": {
      "firstVisit": true,
      "displayName": "History of France",
      "description": "Description for \u201cHistory of France Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building D"
        }
      }
    },
    "Building D-DD": {
      "firstVisit": true,
      "displayName": "History of Germany",
      "description": "Description for \u201cHistory of Germany Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building D"
        }
      }
    },
    "Building D-DH": {
      "firstVisit": true,
      "displayName": "History of Low Countries.  Benelux Countries",
      "description": "Description for \u201cHistory of Low Countries.  Benelux Countries Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building D"
        }
      }
    },
    "Building D": {
      "firstVisit": true,
      "displayName": "\u201cWorld History (except American History) Building\u201d Main Lobby",
      "description": "There are 21 rooms throughout this building in 3 floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[  South  ] \u201cHistory of Asia Room\u201d\n[  North  ] \u201cHistory (General) Room\u201d\n[  East   ] \u201cHistory of Great Britain Room\u201d\n[  West   ] \u201cHistory of Africa Room\u201d\n[SouthEast] \u201cHistory of Italy Room\u201d\n[NorthWest] \u201cHistory of France Room\u201d\n[SouthWest] \u201cHistory of Germany Room\u201d\n[NorthEast] \u201cHistory of Low Countries.  Benelux Countries Room\u201d\n[  Up     ] 2nd floor\n[  Exit   ] Main Library Grounds Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "Building D": {
          "displayName": "Exit",
          "destination": "MAIN"
        },
        "up": {
          "displayName": "Up",
          "destination": "2_Building D"
        },
        "Building D-DS": {
          "displayName": "South",
          "destination": "Building D-DS"
        },
        "Building D-D": {
          "displayName": "North",
          "destination": "Building D-D"
        },
        "Building D-DA": {
          "displayName": "East",
          "destination": "Building D-DA"
        },
        "Building D-DT": {
          "displayName": "West",
          "destination": "Building D-DT"
        },
        "Building D-DG": {
          "displayName": "SouthEast",
          "destination": "Building D-DG"
        },
        "Building D-DC": {
          "displayName": "NorthWest",
          "destination": "Building D-DC"
        },
        "Building D-DD": {
          "displayName": "SouthWest",
          "destination": "Building D-DD"
        },
        "Building D-DH": {
          "displayName": "NorthEast",
          "destination": "Building D-DH"
        }
      }
    },
    "Building D-DU": {
      "firstVisit": true,
      "displayName": "History of Oceania (South Seas)",
      "description": "Description for \u201cHistory of Oceania (South Seas) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building D"
        }
      }
    },
    "Building D-DK": {
      "firstVisit": true,
      "displayName": "History of Russia.  Soviet Union.  Former Soviet Republics",
      "description": "Description for \u201cHistory of Russia.  Soviet Union.  Former Soviet Republics Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building D"
        }
      }
    },
    "Building D-DE": {
      "firstVisit": true,
      "displayName": "History of the Greco-Roman world",
      "description": "Description for \u201cHistory of the Greco-Roman world Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building D"
        }
      }
    },
    "Building D-DR": {
      "firstVisit": true,
      "displayName": "History of Balkan Peninsula",
      "description": "Description for \u201cHistory of Balkan Peninsula Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building D"
        }
      }
    },
    "Building D-DP": {
      "firstVisit": true,
      "displayName": "History of Spain",
      "description": "Description for \u201cHistory of Spain Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building D"
        }
      }
    },
    "Building D-DF": {
      "firstVisit": true,
      "displayName": "History of Greece",
      "description": "Description for \u201cHistory of Greece Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building D"
        }
      }
    },
    "Building D-DJK": {
      "firstVisit": true,
      "displayName": "History of Eastern Europe (General)",
      "description": "Description for \u201cHistory of Eastern Europe (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building D"
        }
      }
    },
    "Building D-DB": {
      "firstVisit": true,
      "displayName": "History of Austria.  Liechtenstein.  Hungary.  Czechoslovakia",
      "description": "Description for \u201cHistory of Austria.  Liechtenstein.  Hungary.  Czechoslovakia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building D"
        }
      }
    },
    "2_Building D": {
      "firstVisit": true,
      "displayName": "\u201cWorld History (except American History) Building\u201d, 2nd Floor",
      "description": "You are in the 2nd floor. There are 8 rooms:\n\n[  South  ] \u201cHistory of Oceania (South Seas) Room\u201d\n[  North  ] \u201cHistory of Russia.  Soviet Union.  Former Soviet Republics Room\u201d\n[  East   ] \u201cHistory of the Greco-Roman world Room\u201d\n[  West   ] \u201cHistory of Balkan Peninsula Room\u201d\n[SouthEast] \u201cHistory of Spain Room\u201d\n[NorthWest] \u201cHistory of Greece Room\u201d\n[SouthWest] \u201cHistory of Eastern Europe (General) Room\u201d\n[NorthEast] \u201cHistory of Austria.  Liechtenstein.  Hungary.  Czechoslovakia Room\u201d\n[  Down   ] 1st floor\n[  Up     ] 3rd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building D-DU": {
          "displayName": "South",
          "destination": "Building D-DU"
        },
        "Building D-DK": {
          "displayName": "North",
          "destination": "Building D-DK"
        },
        "Building D-DE": {
          "displayName": "East",
          "destination": "Building D-DE"
        },
        "Building D-DR": {
          "displayName": "West",
          "destination": "Building D-DR"
        },
        "Building D-DP": {
          "displayName": "SouthEast",
          "destination": "Building D-DP"
        },
        "Building D-DF": {
          "displayName": "NorthWest",
          "destination": "Building D-DF"
        },
        "Building D-DJK": {
          "displayName": "SouthWest",
          "destination": "Building D-DJK"
        },
        "Building D-DB": {
          "displayName": "NorthEast",
          "destination": "Building D-DB"
        },
        "down": {
          "displayName": "Down",
          "destination": "Building D"
        },
        "up": {
          "displayName": "Up",
          "destination": "3_Building D"
        }
      }
    },
    "Building D-DL": {
      "firstVisit": true,
      "displayName": "History of Northern Europe.  Scandinavia",
      "description": "Description for \u201cHistory of Northern Europe.  Scandinavia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_Building D"
        }
      }
    },
    "Building D-DQ": {
      "firstVisit": true,
      "displayName": "History of Switzerland",
      "description": "Description for \u201cHistory of Switzerland Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_Building D"
        }
      }
    },
    "Building D-DAW": {
      "firstVisit": true,
      "displayName": "History of Central Europe",
      "description": "Description for \u201cHistory of Central Europe Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_Building D"
        }
      }
    },
    "Building D-DJ": {
      "firstVisit": true,
      "displayName": "History of Netherlands (Holland)",
      "description": "Description for \u201cHistory of Netherlands (Holland) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_Building D"
        }
      }
    },
    "Building D-DX": {
      "firstVisit": true,
      "displayName": "History of Romanies",
      "description": "Description for \u201cHistory of Romanies Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_Building D"
        }
      }
    },
    "3_Building D": {
      "firstVisit": true,
      "displayName": "\u201cWorld History (except American History) Building\u201d, 3rd Floor",
      "description": "You are in the 3rd floor. There are 5 rooms:\n\n[  South  ] \u201cHistory of Northern Europe.  Scandinavia Room\u201d\n[  North  ] \u201cHistory of Switzerland Room\u201d\n[  East   ] \u201cHistory of Central Europe Room\u201d\n[  West   ] \u201cHistory of Netherlands (Holland) Room\u201d\n[SouthEast] \u201cHistory of Romanies Room\u201d\n[  Down   ] 2nd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building D-DL": {
          "displayName": "South",
          "destination": "Building D-DL"
        },
        "Building D-DQ": {
          "displayName": "North",
          "destination": "Building D-DQ"
        },
        "Building D-DAW": {
          "displayName": "East",
          "destination": "Building D-DAW"
        },
        "Building D-DJ": {
          "displayName": "West",
          "destination": "Building D-DJ"
        },
        "Building D-DX": {
          "displayName": "SouthEast",
          "destination": "Building D-DX"
        },
        "down": {
          "displayName": "Down",
          "destination": "2_Building D"
        }
      }
    },
    "Building E-E": {
      "firstVisit": true,
      "displayName": "United States",
      "description": "Description for \u201cUnited States Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building E"
        }
      }
    },
    "Building E": {
      "firstVisit": true,
      "displayName": "\u201cAmerican History Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cUnited States Room\u201d\n[  Exit   ] Main Library Grounds Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "Building E": {
          "displayName": "Exit",
          "destination": "MAIN"
        },
        "Building E-E": {
          "displayName": "South",
          "destination": "Building E-E"
        }
      }
    },
    "Building F-F": {
      "firstVisit": true,
      "displayName": "Latin America.  Spanish America",
      "description": "Description for \u201cLatin America.  Spanish America Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building F"
        }
      }
    },
    "Building F": {
      "firstVisit": true,
      "displayName": "\u201cLocal History of the United States and British, Dutch, French, and Latin America Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLatin America.  Spanish America Room\u201d\n[  Exit   ] Main Library Grounds Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "Building F": {
          "displayName": "Exit",
          "destination": "MAIN"
        },
        "Building F-F": {
          "displayName": "South",
          "destination": "Building F-F"
        }
      }
    },
    "Building G-G": {
      "firstVisit": true,
      "displayName": "Maps",
      "description": "Description for \u201cMaps Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building G"
        }
      }
    },
    "Building G-GV": {
      "firstVisit": true,
      "displayName": "Recreation.  Leisure",
      "description": "Description for \u201cRecreation.  Leisure Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building G"
        }
      }
    },
    "Building G-GA": {
      "firstVisit": true,
      "displayName": "Mathematical geography.  Cartography",
      "description": "Description for \u201cMathematical geography.  Cartography Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building G"
        }
      }
    },
    "Building G-GN": {
      "firstVisit": true,
      "displayName": "Anthropology",
      "description": "Description for \u201cAnthropology Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building G"
        }
      }
    },
    "Building G-GR": {
      "firstVisit": true,
      "displayName": "Folklore",
      "description": "Description for \u201cFolklore Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building G"
        }
      }
    },
    "Building G-GT": {
      "firstVisit": true,
      "displayName": "Manners and customs (General)",
      "description": "Description for \u201cManners and customs (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building G"
        }
      }
    },
    "Building G-GC": {
      "firstVisit": true,
      "displayName": "Oceanography",
      "description": "Description for \u201cOceanography Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building G"
        }
      }
    },
    "Building G-GB": {
      "firstVisit": true,
      "displayName": "Physical geography",
      "description": "Description for \u201cPhysical geography Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building G"
        }
      }
    },
    "Building G": {
      "firstVisit": true,
      "displayName": "\u201cGeography, Anthropology, Recreation Building\u201d Main Lobby",
      "description": "There are 10 rooms throughout this building in 2 floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[  South  ] \u201cMaps Room\u201d\n[  North  ] \u201cRecreation.  Leisure Room\u201d\n[  East   ] \u201cMathematical geography.  Cartography Room\u201d\n[  West   ] \u201cAnthropology Room\u201d\n[SouthEast] \u201cFolklore Room\u201d\n[NorthWest] \u201cManners and customs (General) Room\u201d\n[SouthWest] \u201cOceanography Room\u201d\n[NorthEast] \u201cPhysical geography Room\u201d\n[  Up     ] 2nd floor\n[  Exit   ] Main Library Grounds Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "Building G": {
          "displayName": "Exit",
          "destination": "MAIN"
        },
        "up": {
          "displayName": "Up",
          "destination": "2_Building G"
        },
        "Building G-G": {
          "displayName": "South",
          "destination": "Building G-G"
        },
        "Building G-GV": {
          "displayName": "North",
          "destination": "Building G-GV"
        },
        "Building G-GA": {
          "displayName": "East",
          "destination": "Building G-GA"
        },
        "Building G-GN": {
          "displayName": "West",
          "destination": "Building G-GN"
        },
        "Building G-GR": {
          "displayName": "SouthEast",
          "destination": "Building G-GR"
        },
        "Building G-GT": {
          "displayName": "NorthWest",
          "destination": "Building G-GT"
        },
        "Building G-GC": {
          "displayName": "SouthWest",
          "destination": "Building G-GC"
        },
        "Building G-GB": {
          "displayName": "NorthEast",
          "destination": "Building G-GB"
        }
      }
    },
    "Building G-GE": {
      "firstVisit": true,
      "displayName": "Environmental sciences",
      "description": "Description for \u201cEnvironmental sciences Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building G"
        }
      }
    },
    "Building G-GF": {
      "firstVisit": true,
      "displayName": "Human ecology.  Anthropogeography",
      "description": "Description for \u201cHuman ecology.  Anthropogeography Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building G"
        }
      }
    },
    "2_Building G": {
      "firstVisit": true,
      "displayName": "\u201cGeography, Anthropology, Recreation Building\u201d, 2nd Floor",
      "description": "You are in the 2nd floor. There are 2 rooms:\n\n[  South  ] \u201cEnvironmental sciences Room\u201d\n[  North  ] \u201cHuman ecology.  Anthropogeography Room\u201d\n[  Down   ] 1st floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building G-GE": {
          "displayName": "South",
          "destination": "Building G-GE"
        },
        "Building G-GF": {
          "displayName": "North",
          "destination": "Building G-GF"
        },
        "down": {
          "displayName": "Down",
          "destination": "Building G"
        }
      }
    },
    "Building H-HF": {
      "firstVisit": true,
      "displayName": "Commerce",
      "description": "Description for \u201cCommerce Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building H"
        }
      }
    },
    "Building H-HX": {
      "firstVisit": true,
      "displayName": "Socialism.  Communism.  Anarchism",
      "description": "Description for \u201cSocialism.  Communism.  Anarchism Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building H"
        }
      }
    },
    "Building H-HD": {
      "firstVisit": true,
      "displayName": "Industries.  Land use.  Labor",
      "description": "Description for \u201cIndustries.  Land use.  Labor Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building H"
        }
      }
    },
    "Building H-HG": {
      "firstVisit": true,
      "displayName": "Finance",
      "description": "Description for \u201cFinance Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building H"
        }
      }
    },
    "Building H-HB": {
      "firstVisit": true,
      "displayName": "Economic theory.  Demography",
      "description": "Description for \u201cEconomic theory.  Demography Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building H"
        }
      }
    },
    "Building H-HQ": {
      "firstVisit": true,
      "displayName": "The Family.  Marriage.  Women",
      "description": "Description for \u201cThe Family.  Marriage.  Women Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building H"
        }
      }
    },
    "Building H-H": {
      "firstVisit": true,
      "displayName": "Social sciences (General)",
      "description": "Description for \u201cSocial sciences (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building H"
        }
      }
    },
    "Building H-HE": {
      "firstVisit": true,
      "displayName": "Transportation and communications",
      "description": "Description for \u201cTransportation and communications Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building H"
        }
      }
    },
    "Building H": {
      "firstVisit": true,
      "displayName": "\u201cSocial Sciences Building\u201d Main Lobby",
      "description": "There are 16 rooms throughout this building in 2 floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[  South  ] \u201cCommerce Room\u201d\n[  North  ] \u201cSocialism.  Communism.  Anarchism Room\u201d\n[  East   ] \u201cIndustries.  Land use.  Labor Room\u201d\n[  West   ] \u201cFinance Room\u201d\n[SouthEast] \u201cEconomic theory.  Demography Room\u201d\n[NorthWest] \u201cThe Family.  Marriage.  Women Room\u201d\n[SouthWest] \u201cSocial sciences (General) Room\u201d\n[NorthEast] \u201cTransportation and communications Room\u201d\n[  Up     ] 2nd floor\n[  Exit   ] Main Library Grounds Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "Building H": {
          "displayName": "Exit",
          "destination": "MAIN"
        },
        "up": {
          "displayName": "Up",
          "destination": "2_Building H"
        },
        "Building H-HF": {
          "displayName": "South",
          "destination": "Building H-HF"
        },
        "Building H-HX": {
          "displayName": "North",
          "destination": "Building H-HX"
        },
        "Building H-HD": {
          "displayName": "East",
          "destination": "Building H-HD"
        },
        "Building H-HG": {
          "displayName": "West",
          "destination": "Building H-HG"
        },
        "Building H-HB": {
          "displayName": "SouthEast",
          "destination": "Building H-HB"
        },
        "Building H-HQ": {
          "displayName": "NorthWest",
          "destination": "Building H-HQ"
        },
        "Building H-H": {
          "displayName": "SouthWest",
          "destination": "Building H-H"
        },
        "Building H-HE": {
          "displayName": "NorthEast",
          "destination": "Building H-HE"
        }
      }
    },
    "Building H-HM": {
      "firstVisit": true,
      "displayName": "Sociology",
      "description": "Description for \u201cSociology Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building H"
        }
      }
    },
    "Building H-HJ": {
      "firstVisit": true,
      "displayName": "Public finance",
      "description": "Description for \u201cPublic finance Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building H"
        }
      }
    },
    "Building H-HN": {
      "firstVisit": true,
      "displayName": "Social history and conditions.  Social problems.",
      "description": "Description for \u201cSocial history and conditions.  Social problems. Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building H"
        }
      }
    },
    "Building H-HS": {
      "firstVisit": true,
      "displayName": "Societies: secret, benevolent, etc.",
      "description": "Description for \u201cSocieties: secret, benevolent, etc. Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building H"
        }
      }
    },
    "Building H-HV": {
      "firstVisit": true,
      "displayName": "Social pathology.  Social and public welfare.",
      "description": "Description for \u201cSocial pathology.  Social and public welfare. Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building H"
        }
      }
    },
    "Building H-HC": {
      "firstVisit": true,
      "displayName": "Economic history and conditions",
      "description": "Description for \u201cEconomic history and conditions Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building H"
        }
      }
    },
    "Building H-HA": {
      "firstVisit": true,
      "displayName": "Statistics",
      "description": "Description for \u201cStatistics Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building H"
        }
      }
    },
    "Building H-HT": {
      "firstVisit": true,
      "displayName": "Communities.  Classes.  Races",
      "description": "Description for \u201cCommunities.  Classes.  Races Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building H"
        }
      }
    },
    "2_Building H": {
      "firstVisit": true,
      "displayName": "\u201cSocial Sciences Building\u201d, 2nd Floor",
      "description": "You are in the 2nd floor. There are 8 rooms:\n\n[  South  ] \u201cSociology Room\u201d\n[  North  ] \u201cPublic finance Room\u201d\n[  East   ] \u201cSocial history and conditions.  Social problems. Room\u201d\n[  West   ] \u201cSocieties: secret, benevolent, etc. Room\u201d\n[SouthEast] \u201cSocial pathology.  Social and public welfare. Room\u201d\n[NorthWest] \u201cEconomic history and conditions Room\u201d\n[SouthWest] \u201cStatistics Room\u201d\n[NorthEast] \u201cCommunities.  Classes.  Races Room\u201d\n[  Down   ] 1st floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building H-HM": {
          "displayName": "South",
          "destination": "Building H-HM"
        },
        "Building H-HJ": {
          "displayName": "North",
          "destination": "Building H-HJ"
        },
        "Building H-HN": {
          "displayName": "East",
          "destination": "Building H-HN"
        },
        "Building H-HS": {
          "displayName": "West",
          "destination": "Building H-HS"
        },
        "Building H-HV": {
          "displayName": "SouthEast",
          "destination": "Building H-HV"
        },
        "Building H-HC": {
          "displayName": "NorthWest",
          "destination": "Building H-HC"
        },
        "Building H-HA": {
          "displayName": "SouthWest",
          "destination": "Building H-HA"
        },
        "Building H-HT": {
          "displayName": "NorthEast",
          "destination": "Building H-HT"
        },
        "down": {
          "displayName": "Down",
          "destination": "Building H"
        }
      }
    },
    "Building J-JF": {
      "firstVisit": true,
      "displayName": "Political institutions and public administration",
      "description": "Description for \u201cPolitical institutions and public administration Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building J"
        }
      }
    },
    "Building J-JC": {
      "firstVisit": true,
      "displayName": "Political theory.  The state.  Theories of the state",
      "description": "Description for \u201cPolitical theory.  The state.  Theories of the state Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building J"
        }
      }
    },
    "Building J-JK": {
      "firstVisit": true,
      "displayName": "Political institutions and public administration",
      "description": "Description for \u201cPolitical institutions and public administration Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building J"
        }
      }
    },
    "Building J-JS": {
      "firstVisit": true,
      "displayName": "Local government.  Municipal government",
      "description": "Description for \u201cLocal government.  Municipal government Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building J"
        }
      }
    },
    "Building J-JV": {
      "firstVisit": true,
      "displayName": "Colonies and colonization.  Emigration and",
      "description": "Description for \u201cColonies and colonization.  Emigration and Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building J"
        }
      }
    },
    "Building J-JA": {
      "firstVisit": true,
      "displayName": "Political science (General)",
      "description": "Description for \u201cPolitical science (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building J"
        }
      }
    },
    "Building J-JX": {
      "firstVisit": true,
      "displayName": "International law, see JZ and KZ",
      "description": "Description for \u201cInternational law, see JZ and KZ Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building J"
        }
      }
    },
    "Building J-JN": {
      "firstVisit": true,
      "displayName": "Political institutions and public administration (Europe)",
      "description": "Description for \u201cPolitical institutions and public administration (Europe) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building J"
        }
      }
    },
    "Building J": {
      "firstVisit": true,
      "displayName": "\u201cPolitical Science Building\u201d Main Lobby",
      "description": "There are 13 rooms throughout this building in 2 floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[  South  ] \u201cPolitical institutions and public administration Room\u201d\n[  North  ] \u201cPolitical theory.  The state.  Theories of the state Room\u201d\n[  East   ] \u201cPolitical institutions and public administration Room\u201d\n[  West   ] \u201cLocal government.  Municipal government Room\u201d\n[SouthEast] \u201cColonies and colonization.  Emigration and Room\u201d\n[NorthWest] \u201cPolitical science (General) Room\u201d\n[SouthWest] \u201cInternational law, see JZ and KZ Room\u201d\n[NorthEast] \u201cPolitical institutions and public administration (Europe) Room\u201d\n[  Up     ] 2nd floor\n[  Exit   ] Main Library Grounds Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "Building J": {
          "displayName": "Exit",
          "destination": "MAIN"
        },
        "up": {
          "displayName": "Up",
          "destination": "2_Building J"
        },
        "Building J-JF": {
          "displayName": "South",
          "destination": "Building J-JF"
        },
        "Building J-JC": {
          "displayName": "North",
          "destination": "Building J-JC"
        },
        "Building J-JK": {
          "displayName": "East",
          "destination": "Building J-JK"
        },
        "Building J-JS": {
          "displayName": "West",
          "destination": "Building J-JS"
        },
        "Building J-JV": {
          "displayName": "SouthEast",
          "destination": "Building J-JV"
        },
        "Building J-JA": {
          "displayName": "NorthWest",
          "destination": "Building J-JA"
        },
        "Building J-JX": {
          "displayName": "SouthWest",
          "destination": "Building J-JX"
        },
        "Building J-JN": {
          "displayName": "NorthEast",
          "destination": "Building J-JN"
        }
      }
    },
    "Building J-JZ": {
      "firstVisit": true,
      "displayName": "International relations",
      "description": "Description for \u201cInternational relations Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building J"
        }
      }
    },
    "Building J-JL": {
      "firstVisit": true,
      "displayName": "Political institutions and public administration",
      "description": "Description for \u201cPolitical institutions and public administration Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building J"
        }
      }
    },
    "Building J-J": {
      "firstVisit": true,
      "displayName": "General legislative and executive papers",
      "description": "Description for \u201cGeneral legislative and executive papers Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building J"
        }
      }
    },
    "Building J-JQ": {
      "firstVisit": true,
      "displayName": "Political institutions and public administration (Asia,",
      "description": "Description for \u201cPolitical institutions and public administration (Asia, Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building J"
        }
      }
    },
    "Building J-JJ": {
      "firstVisit": true,
      "displayName": "Political institutions and public administration",
      "description": "Description for \u201cPolitical institutions and public administration Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building J"
        }
      }
    },
    "2_Building J": {
      "firstVisit": true,
      "displayName": "\u201cPolitical Science Building\u201d, 2nd Floor",
      "description": "You are in the 2nd floor. There are 5 rooms:\n\n[  South  ] \u201cInternational relations Room\u201d\n[  North  ] \u201cPolitical institutions and public administration Room\u201d\n[  East   ] \u201cGeneral legislative and executive papers Room\u201d\n[  West   ] \u201cPolitical institutions and public administration (Asia, Room\u201d\n[SouthEast] \u201cPolitical institutions and public administration Room\u201d\n[  Down   ] 1st floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building J-JZ": {
          "displayName": "South",
          "destination": "Building J-JZ"
        },
        "Building J-JL": {
          "displayName": "North",
          "destination": "Building J-JL"
        },
        "Building J-J": {
          "displayName": "East",
          "destination": "Building J-J"
        },
        "Building J-JQ": {
          "displayName": "West",
          "destination": "Building J-JQ"
        },
        "Building J-JJ": {
          "displayName": "SouthEast",
          "destination": "Building J-JJ"
        },
        "down": {
          "displayName": "Down",
          "destination": "Building J"
        }
      }
    },
    "Building K-KF": {
      "firstVisit": true,
      "displayName": "Law of the United States (Federal)",
      "description": "Description for \u201cLaw of the United States (Federal) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building K"
        }
      }
    },
    "Building K-KFW": {
      "firstVisit": true,
      "displayName": "Law of Washington",
      "description": "Description for \u201cLaw of Washington Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building K"
        }
      }
    },
    "Building K-KFM": {
      "firstVisit": true,
      "displayName": "Law of Maine",
      "description": "Description for \u201cLaw of Maine Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building K"
        }
      }
    },
    "Building K-KFT": {
      "firstVisit": true,
      "displayName": "Law of Tennessee",
      "description": "Description for \u201cLaw of Tennessee Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building K"
        }
      }
    },
    "Building K-K": {
      "firstVisit": true,
      "displayName": "Comparative law.  International uniform law",
      "description": "Description for \u201cComparative law.  International uniform law Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building K"
        }
      }
    },
    "Building K-KZ": {
      "firstVisit": true,
      "displayName": "Law of nations",
      "description": "Description for \u201cLaw of nations Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building K"
        }
      }
    },
    "Building K-KD": {
      "firstVisit": true,
      "displayName": "Law of England and Wales",
      "description": "Description for \u201cLaw of England and Wales Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building K"
        }
      }
    },
    "Building K-KFP": {
      "firstVisit": true,
      "displayName": "Law of Pennsylvania",
      "description": "Description for \u201cLaw of Pennsylvania Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building K"
        }
      }
    },
    "Building K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d Main Lobby",
      "description": "There are 275 rooms throughout this building in 35 floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[  South  ] \u201cLaw of the United States (Federal) Room\u201d\n[  North  ] \u201cLaw of Washington Room\u201d\n[  East   ] \u201cLaw of Maine Room\u201d\n[  West   ] \u201cLaw of Tennessee Room\u201d\n[SouthEast] \u201cComparative law.  International uniform law Room\u201d\n[NorthWest] \u201cLaw of nations Room\u201d\n[SouthWest] \u201cLaw of England and Wales Room\u201d\n[NorthEast] \u201cLaw of Pennsylvania Room\u201d\n[  Up     ] 2nd floor\n[  Exit   ] Main Library Grounds Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "Building K": {
          "displayName": "Exit",
          "destination": "MAIN"
        },
        "up": {
          "displayName": "Up",
          "destination": "2_Building K"
        },
        "Building K-KF": {
          "displayName": "South",
          "destination": "Building K-KF"
        },
        "Building K-KFW": {
          "displayName": "North",
          "destination": "Building K-KFW"
        },
        "Building K-KFM": {
          "displayName": "East",
          "destination": "Building K-KFM"
        },
        "Building K-KFT": {
          "displayName": "West",
          "destination": "Building K-KFT"
        },
        "Building K-K": {
          "displayName": "SouthEast",
          "destination": "Building K-K"
        },
        "Building K-KZ": {
          "displayName": "NorthWest",
          "destination": "Building K-KZ"
        },
        "Building K-KD": {
          "displayName": "SouthWest",
          "destination": "Building K-KD"
        },
        "Building K-KFP": {
          "displayName": "NorthEast",
          "destination": "Building K-KFP"
        }
      }
    },
    "Building K-KFI": {
      "firstVisit": true,
      "displayName": "Law of Idaho",
      "description": "Description for \u201cLaw of Idaho Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building K"
        }
      }
    },
    "Building K-KFN": {
      "firstVisit": true,
      "displayName": "Law of Nebraska",
      "description": "Description for \u201cLaw of Nebraska Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building K"
        }
      }
    },
    "Building K-KFC": {
      "firstVisit": true,
      "displayName": "Law of California",
      "description": "Description for \u201cLaw of California Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building K"
        }
      }
    },
    "Building K-KFO": {
      "firstVisit": true,
      "displayName": "Law of Ohio",
      "description": "Description for \u201cLaw of Ohio Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building K"
        }
      }
    },
    "Building K-KFL": {
      "firstVisit": true,
      "displayName": "Law of Louisiana",
      "description": "Description for \u201cLaw of Louisiana Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building K"
        }
      }
    },
    "Building K-KFA": {
      "firstVisit": true,
      "displayName": "Law of Alabama",
      "description": "Description for \u201cLaw of Alabama Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building K"
        }
      }
    },
    "Building K-KLA": {
      "firstVisit": true,
      "displayName": "Russia, Soviet Union",
      "description": "Description for \u201cRussia, Soviet Union Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building K"
        }
      }
    },
    "Building K-KKT": {
      "firstVisit": true,
      "displayName": "Law of Spain",
      "description": "Description for \u201cLaw of Spain Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building K"
        }
      }
    },
    "2_Building K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 2nd Floor",
      "description": "You are in the 2nd floor. There are 8 rooms:\n\n[  South  ] \u201cLaw of Idaho Room\u201d\n[  North  ] \u201cLaw of Nebraska Room\u201d\n[  East   ] \u201cLaw of California Room\u201d\n[  West   ] \u201cLaw of Ohio Room\u201d\n[SouthEast] \u201cLaw of Louisiana Room\u201d\n[NorthWest] \u201cLaw of Alabama Room\u201d\n[SouthWest] \u201cRussia, Soviet Union Room\u201d\n[NorthEast] \u201cLaw of Spain Room\u201d\n[  Down   ] 1st floor\n[  Up     ] 3rd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building K-KFI": {
          "displayName": "South",
          "destination": "Building K-KFI"
        },
        "Building K-KFN": {
          "displayName": "North",
          "destination": "Building K-KFN"
        },
        "Building K-KFC": {
          "displayName": "East",
          "destination": "Building K-KFC"
        },
        "Building K-KFO": {
          "displayName": "West",
          "destination": "Building K-KFO"
        },
        "Building K-KFL": {
          "displayName": "SouthEast",
          "destination": "Building K-KFL"
        },
        "Building K-KFA": {
          "displayName": "NorthWest",
          "destination": "Building K-KFA"
        },
        "Building K-KLA": {
          "displayName": "SouthWest",
          "destination": "Building K-KLA"
        },
        "Building K-KKT": {
          "displayName": "NorthEast",
          "destination": "Building K-KKT"
        },
        "down": {
          "displayName": "Down",
          "destination": "Building K"
        },
        "up": {
          "displayName": "Up",
          "destination": "3_Building K"
        }
      }
    },
    "Building K-KMT": {
      "firstVisit": true,
      "displayName": "Saudi Arabia",
      "description": "Description for \u201cSaudi Arabia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_Building K"
        }
      }
    },
    "Building K-KJM": {
      "firstVisit": true,
      "displayName": "Law of Croatia",
      "description": "Description for \u201cLaw of Croatia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_Building K"
        }
      }
    },
    "Building K-KBP": {
      "firstVisit": true,
      "displayName": "Islamic law.  Shar\u012b\u02bbah.  Fiqh",
      "description": "Description for \u201cIslamic law.  Shar\u012b\u02bbah.  Fiqh Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_Building K"
        }
      }
    },
    "Building K-KBR": {
      "firstVisit": true,
      "displayName": "History of canon law",
      "description": "Description for \u201cHistory of canon law Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_Building K"
        }
      }
    },
    "Building K-KZA": {
      "firstVisit": true,
      "displayName": "Law of the sea",
      "description": "Description for \u201cLaw of the sea Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_Building K"
        }
      }
    },
    "Building K-KNQ": {
      "firstVisit": true,
      "displayName": "China (People\u2019s Republic, 1949-    )",
      "description": "Description for \u201cChina (People\u2019s Republic, 1949-    ) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_Building K"
        }
      }
    },
    "Building K-KJE": {
      "firstVisit": true,
      "displayName": "Regional organization and integration (Europe)",
      "description": "Description for \u201cRegional organization and integration (Europe) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_Building K"
        }
      }
    },
    "Building K-KFV": {
      "firstVisit": true,
      "displayName": "Law of Vermont",
      "description": "Description for \u201cLaw of Vermont Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_Building K"
        }
      }
    },
    "3_Building K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 3rd Floor",
      "description": "You are in the 3rd floor. There are 8 rooms:\n\n[  South  ] \u201cSaudi Arabia Room\u201d\n[  North  ] \u201cLaw of Croatia Room\u201d\n[  East   ] \u201cIslamic law.  Shar\u012b\u02bbah.  Fiqh Room\u201d\n[  West   ] \u201cHistory of canon law Room\u201d\n[SouthEast] \u201cLaw of the sea Room\u201d\n[NorthWest] \u201cChina (People\u2019s Republic, 1949-    ) Room\u201d\n[SouthWest] \u201cRegional organization and integration (Europe) Room\u201d\n[NorthEast] \u201cLaw of Vermont Room\u201d\n[  Down   ] 2nd floor\n[  Up     ] 4th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building K-KMT": {
          "displayName": "South",
          "destination": "Building K-KMT"
        },
        "Building K-KJM": {
          "displayName": "North",
          "destination": "Building K-KJM"
        },
        "Building K-KBP": {
          "displayName": "East",
          "destination": "Building K-KBP"
        },
        "Building K-KBR": {
          "displayName": "West",
          "destination": "Building K-KBR"
        },
        "Building K-KZA": {
          "displayName": "SouthEast",
          "destination": "Building K-KZA"
        },
        "Building K-KNQ": {
          "displayName": "NorthWest",
          "destination": "Building K-KNQ"
        },
        "Building K-KJE": {
          "displayName": "SouthWest",
          "destination": "Building K-KJE"
        },
        "Building K-KFV": {
          "displayName": "NorthEast",
          "destination": "Building K-KFV"
        },
        "down": {
          "displayName": "Down",
          "destination": "2_Building K"
        },
        "up": {
          "displayName": "Up",
          "destination": "4_Building K"
        }
      }
    },
    "Building K-KNN": {
      "firstVisit": true,
      "displayName": "Law of China",
      "description": "Description for \u201cLaw of China Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "4_Building K"
        }
      }
    },
    "Building K-KMM": {
      "firstVisit": true,
      "displayName": "West Bank",
      "description": "Description for \u201cWest Bank Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "4_Building K"
        }
      }
    },
    "Building K-KJC": {
      "firstVisit": true,
      "displayName": "Regional comparative and uniform law (Europe)",
      "description": "Description for \u201cRegional comparative and uniform law (Europe) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "4_Building K"
        }
      }
    },
    "Building K-KMK": {
      "firstVisit": true,
      "displayName": "Israel",
      "description": "Description for \u201cIsrael Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "4_Building K"
        }
      }
    },
    "Building K-KTL": {
      "firstVisit": true,
      "displayName": "South Africa, Republic of",
      "description": "Description for \u201cSouth Africa, Republic of Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "4_Building K"
        }
      }
    },
    "Building K-KMC": {
      "firstVisit": true,
      "displayName": "Regional comparative and uniform law",
      "description": "Description for \u201cRegional comparative and uniform law Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "4_Building K"
        }
      }
    },
    "Building K-KEN": {
      "firstVisit": true,
      "displayName": "Law of New Brunswick",
      "description": "Description for \u201cLaw of New Brunswick Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "4_Building K"
        }
      }
    },
    "Building K-KRP": {
      "firstVisit": true,
      "displayName": "Ethiopia",
      "description": "Description for \u201cEthiopia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "4_Building K"
        }
      }
    },
    "4_Building K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 4th Floor",
      "description": "You are in the 4th floor. There are 8 rooms:\n\n[  South  ] \u201cLaw of China Room\u201d\n[  North  ] \u201cWest Bank Room\u201d\n[  East   ] \u201cRegional comparative and uniform law (Europe) Room\u201d\n[  West   ] \u201cIsrael Room\u201d\n[SouthEast] \u201cSouth Africa, Republic of Room\u201d\n[NorthWest] \u201cRegional comparative and uniform law Room\u201d\n[SouthWest] \u201cLaw of New Brunswick Room\u201d\n[NorthEast] \u201cEthiopia Room\u201d\n[  Down   ] 3rd floor\n[  Up     ] 5th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building K-KNN": {
          "displayName": "South",
          "destination": "Building K-KNN"
        },
        "Building K-KMM": {
          "displayName": "North",
          "destination": "Building K-KMM"
        },
        "Building K-KJC": {
          "displayName": "East",
          "destination": "Building K-KJC"
        },
        "Building K-KMK": {
          "displayName": "West",
          "destination": "Building K-KMK"
        },
        "Building K-KTL": {
          "displayName": "SouthEast",
          "destination": "Building K-KTL"
        },
        "Building K-KMC": {
          "displayName": "NorthWest",
          "destination": "Building K-KMC"
        },
        "Building K-KEN": {
          "displayName": "SouthWest",
          "destination": "Building K-KEN"
        },
        "Building K-KRP": {
          "displayName": "NorthEast",
          "destination": "Building K-KRP"
        },
        "down": {
          "displayName": "Down",
          "destination": "3_Building K"
        },
        "up": {
          "displayName": "Up",
          "destination": "5_Building K"
        }
      }
    },
    "Building K-KJA": {
      "firstVisit": true,
      "displayName": "Roman Law",
      "description": "Description for \u201cRoman Law Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "5_Building K"
        }
      }
    },
    "Building K-KJV": {
      "firstVisit": true,
      "displayName": "Law of France",
      "description": "Description for \u201cLaw of France Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "5_Building K"
        }
      }
    },
    "Building K-KBU": {
      "firstVisit": true,
      "displayName": "Law of the Roman Catholic Church. The Holy See",
      "description": "Description for \u201cLaw of the Roman Catholic Church. The Holy See Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "5_Building K"
        }
      }
    },
    "Building K-KLB": {
      "firstVisit": true,
      "displayName": "Russia (Federation, 1992-    )",
      "description": "Description for \u201cRussia (Federation, 1992-    ) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "5_Building K"
        }
      }
    },
    "Building K-KK": {
      "firstVisit": true,
      "displayName": "Law of Germany",
      "description": "Description for \u201cLaw of Germany Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "5_Building K"
        }
      }
    },
    "Building K-KFG": {
      "firstVisit": true,
      "displayName": "Law of Georgia",
      "description": "Description for \u201cLaw of Georgia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "5_Building K"
        }
      }
    },
    "Building K-KHA": {
      "firstVisit": true,
      "displayName": "Argentina",
      "description": "Description for \u201cArgentina Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "5_Building K"
        }
      }
    },
    "Building K-KLW": {
      "firstVisit": true,
      "displayName": "Uzbekistan",
      "description": "Description for \u201cUzbekistan Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "5_Building K"
        }
      }
    },
    "5_Building K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 5th Floor",
      "description": "You are in the 5th floor. There are 8 rooms:\n\n[  South  ] \u201cRoman Law Room\u201d\n[  North  ] \u201cLaw of France Room\u201d\n[  East   ] \u201cLaw of the Roman Catholic Church. The Holy See Room\u201d\n[  West   ] \u201cRussia (Federation, 1992-    ) Room\u201d\n[SouthEast] \u201cLaw of Germany Room\u201d\n[NorthWest] \u201cLaw of Georgia Room\u201d\n[SouthWest] \u201cArgentina Room\u201d\n[NorthEast] \u201cUzbekistan Room\u201d\n[  Down   ] 4th floor\n[  Up     ] 6th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building K-KJA": {
          "displayName": "South",
          "destination": "Building K-KJA"
        },
        "Building K-KJV": {
          "displayName": "North",
          "destination": "Building K-KJV"
        },
        "Building K-KBU": {
          "displayName": "East",
          "destination": "Building K-KBU"
        },
        "Building K-KLB": {
          "displayName": "West",
          "destination": "Building K-KLB"
        },
        "Building K-KK": {
          "displayName": "SouthEast",
          "destination": "Building K-KK"
        },
        "Building K-KFG": {
          "displayName": "NorthWest",
          "destination": "Building K-KFG"
        },
        "Building K-KHA": {
          "displayName": "SouthWest",
          "destination": "Building K-KHA"
        },
        "Building K-KLW": {
          "displayName": "NorthEast",
          "destination": "Building K-KLW"
        },
        "down": {
          "displayName": "Down",
          "destination": "4_Building K"
        },
        "up": {
          "displayName": "Up",
          "destination": "6_Building K"
        }
      }
    },
    "Building K-KNW": {
      "firstVisit": true,
      "displayName": "Indonesia",
      "description": "Description for \u201cIndonesia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "6_Building K"
        }
      }
    },
    "Building K-KQC": {
      "firstVisit": true,
      "displayName": "Regional comparative and uniform law",
      "description": "Description for \u201cRegional comparative and uniform law Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "6_Building K"
        }
      }
    },
    "Building K-KDZ": {
      "firstVisit": true,
      "displayName": "America.  North America",
      "description": "Description for \u201cAmerica.  North America Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "6_Building K"
        }
      }
    },
    "Building K-KFK": {
      "firstVisit": true,
      "displayName": "Law of Kansas",
      "description": "Description for \u201cLaw of Kansas Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "6_Building K"
        }
      }
    },
    "Building K-KDC": {
      "firstVisit": true,
      "displayName": "Law of Scotland",
      "description": "Description for \u201cLaw of Scotland Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "6_Building K"
        }
      }
    },
    "Building K-KNR": {
      "firstVisit": true,
      "displayName": "Hong Kong",
      "description": "Description for \u201cHong Kong Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "6_Building K"
        }
      }
    },
    "Building K-KFF": {
      "firstVisit": true,
      "displayName": "Law of Florida",
      "description": "Description for \u201cLaw of Florida Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "6_Building K"
        }
      }
    },
    "Building K-KBM": {
      "firstVisit": true,
      "displayName": "Jewish law.  Halakah",
      "description": "Description for \u201cJewish law.  Halakah Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "6_Building K"
        }
      }
    },
    "6_Building K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 6th Floor",
      "description": "You are in the 6th floor. There are 8 rooms:\n\n[  South  ] \u201cIndonesia Room\u201d\n[  North  ] \u201cRegional comparative and uniform law Room\u201d\n[  East   ] \u201cAmerica.  North America Room\u201d\n[  West   ] \u201cLaw of Kansas Room\u201d\n[SouthEast] \u201cLaw of Scotland Room\u201d\n[NorthWest] \u201cHong Kong Room\u201d\n[SouthWest] \u201cLaw of Florida Room\u201d\n[NorthEast] \u201cJewish law.  Halakah Room\u201d\n[  Down   ] 5th floor\n[  Up     ] 7th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building K-KNW": {
          "displayName": "South",
          "destination": "Building K-KNW"
        },
        "Building K-KQC": {
          "displayName": "North",
          "destination": "Building K-KQC"
        },
        "Building K-KDZ": {
          "displayName": "East",
          "destination": "Building K-KDZ"
        },
        "Building K-KFK": {
          "displayName": "West",
          "destination": "Building K-KFK"
        },
        "Building K-KDC": {
          "displayName": "SouthEast",
          "destination": "Building K-KDC"
        },
        "Building K-KNR": {
          "displayName": "NorthWest",
          "destination": "Building K-KNR"
        },
        "Building K-KFF": {
          "displayName": "SouthWest",
          "destination": "Building K-KFF"
        },
        "Building K-KBM": {
          "displayName": "NorthEast",
          "destination": "Building K-KBM"
        },
        "down": {
          "displayName": "Down",
          "destination": "5_Building K"
        },
        "up": {
          "displayName": "Up",
          "destination": "7_Building K"
        }
      }
    },
    "Building K-KJ": {
      "firstVisit": true,
      "displayName": "History of Law (Europe)",
      "description": "Description for \u201cHistory of Law (Europe) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "7_Building K"
        }
      }
    },
    "Building K-KL": {
      "firstVisit": true,
      "displayName": "History of law.  The ancient orient",
      "description": "Description for \u201cHistory of law.  The ancient orient Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "7_Building K"
        }
      }
    },
    "Building K-KE": {
      "firstVisit": true,
      "displayName": "Law of Canada",
      "description": "Description for \u201cLaw of Canada Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "7_Building K"
        }
      }
    },
    "Building K-KFD": {
      "firstVisit": true,
      "displayName": "Law of Delaware",
      "description": "Description for \u201cLaw of Delaware Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "7_Building K"
        }
      }
    },
    "Building K-KDK": {
      "firstVisit": true,
      "displayName": "Law of Ireland (Eire)",
      "description": "Description for \u201cLaw of Ireland (Eire) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "7_Building K"
        }
      }
    },
    "Building K-KTT": {
      "firstVisit": true,
      "displayName": "Tanzania",
      "description": "Description for \u201cTanzania Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "7_Building K"
        }
      }
    },
    "Building K-KNX": {
      "firstVisit": true,
      "displayName": "Constitutional law",
      "description": "Description for \u201cConstitutional law Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "7_Building K"
        }
      }
    },
    "Building K-KTY": {
      "firstVisit": true,
      "displayName": "Zambia",
      "description": "Description for \u201cZambia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "7_Building K"
        }
      }
    },
    "7_Building K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 7th Floor",
      "description": "You are in the 7th floor. There are 8 rooms:\n\n[  South  ] \u201cHistory of Law (Europe) Room\u201d\n[  North  ] \u201cHistory of law.  The ancient orient Room\u201d\n[  East   ] \u201cLaw of Canada Room\u201d\n[  West   ] \u201cLaw of Delaware Room\u201d\n[SouthEast] \u201cLaw of Ireland (Eire) Room\u201d\n[NorthWest] \u201cTanzania Room\u201d\n[SouthWest] \u201cConstitutional law Room\u201d\n[NorthEast] \u201cZambia Room\u201d\n[  Down   ] 6th floor\n[  Up     ] 8th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building K-KJ": {
          "displayName": "South",
          "destination": "Building K-KJ"
        },
        "Building K-KL": {
          "displayName": "North",
          "destination": "Building K-KL"
        },
        "Building K-KE": {
          "displayName": "East",
          "destination": "Building K-KE"
        },
        "Building K-KFD": {
          "displayName": "West",
          "destination": "Building K-KFD"
        },
        "Building K-KDK": {
          "displayName": "SouthEast",
          "destination": "Building K-KDK"
        },
        "Building K-KTT": {
          "displayName": "NorthWest",
          "destination": "Building K-KTT"
        },
        "Building K-KNX": {
          "displayName": "SouthWest",
          "destination": "Building K-KNX"
        },
        "Building K-KTY": {
          "displayName": "NorthEast",
          "destination": "Building K-KTY"
        },
        "down": {
          "displayName": "Down",
          "destination": "6_Building K"
        },
        "up": {
          "displayName": "Up",
          "destination": "8_Building K"
        }
      }
    },
    "Building K-KFS": {
      "firstVisit": true,
      "displayName": "Law of South Carolina",
      "description": "Description for \u201cLaw of South Carolina Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "8_Building K"
        }
      }
    },
    "Building K-KNC": {
      "firstVisit": true,
      "displayName": "Regional comparative and uniform law",
      "description": "Description for \u201cRegional comparative and uniform law Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "8_Building K"
        }
      }
    },
    "Building K-KFH": {
      "firstVisit": true,
      "displayName": "Law of Hawaii",
      "description": "Description for \u201cLaw of Hawaii Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "8_Building K"
        }
      }
    },
    "Building K-KFX": {
      "firstVisit": true,
      "displayName": "Laws of the cities",
      "description": "Description for \u201cLaws of the cities Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "8_Building K"
        }
      }
    },
    "Building K-KJT": {
      "firstVisit": true,
      "displayName": "Law of Finland",
      "description": "Description for \u201cLaw of Finland Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "8_Building K"
        }
      }
    },
    "Building K-KQW": {
      "firstVisit": true,
      "displayName": "Cameroon",
      "description": "Description for \u201cCameroon Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "8_Building K"
        }
      }
    },
    "Building K-KB": {
      "firstVisit": true,
      "displayName": "Religious law in general.  Comparative religious law.",
      "description": "Description for \u201cReligious law in general.  Comparative religious law. Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "8_Building K"
        }
      }
    },
    "Building K-KGL": {
      "firstVisit": true,
      "displayName": "British West Indies (General)",
      "description": "Description for \u201cBritish West Indies (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "8_Building K"
        }
      }
    },
    "8_Building K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 8th Floor",
      "description": "You are in the 8th floor. There are 8 rooms:\n\n[  South  ] \u201cLaw of South Carolina Room\u201d\n[  North  ] \u201cRegional comparative and uniform law Room\u201d\n[  East   ] \u201cLaw of Hawaii Room\u201d\n[  West   ] \u201cLaws of the cities Room\u201d\n[SouthEast] \u201cLaw of Finland Room\u201d\n[NorthWest] \u201cCameroon Room\u201d\n[SouthWest] \u201cReligious law in general.  Comparative religious law. Room\u201d\n[NorthEast] \u201cBritish West Indies (General) Room\u201d\n[  Down   ] 7th floor\n[  Up     ] 9th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building K-KFS": {
          "displayName": "South",
          "destination": "Building K-KFS"
        },
        "Building K-KNC": {
          "displayName": "North",
          "destination": "Building K-KNC"
        },
        "Building K-KFH": {
          "displayName": "East",
          "destination": "Building K-KFH"
        },
        "Building K-KFX": {
          "displayName": "West",
          "destination": "Building K-KFX"
        },
        "Building K-KJT": {
          "displayName": "SouthEast",
          "destination": "Building K-KJT"
        },
        "Building K-KQW": {
          "displayName": "NorthWest",
          "destination": "Building K-KQW"
        },
        "Building K-KB": {
          "displayName": "SouthWest",
          "destination": "Building K-KB"
        },
        "Building K-KGL": {
          "displayName": "NorthEast",
          "destination": "Building K-KGL"
        },
        "down": {
          "displayName": "Down",
          "destination": "7_Building K"
        },
        "up": {
          "displayName": "Up",
          "destination": "9_Building K"
        }
      }
    },
    "Building K-KGF": {
      "firstVisit": true,
      "displayName": "Mexico",
      "description": "Description for \u201cMexico Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "9_Building K"
        }
      }
    },
    "Building K-KPL": {
      "firstVisit": true,
      "displayName": "Pakistan",
      "description": "Description for \u201cPakistan Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "9_Building K"
        }
      }
    },
    "Building K-KNS": {
      "firstVisit": true,
      "displayName": "History of law",
      "description": "Description for \u201cHistory of law Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "9_Building K"
        }
      }
    },
    "Building K-KFR": {
      "firstVisit": true,
      "displayName": "Law of Rhode Island",
      "description": "Description for \u201cLaw of Rhode Island Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "9_Building K"
        }
      }
    },
    "Building K-KGV": {
      "firstVisit": true,
      "displayName": "Puerto Rico",
      "description": "Description for \u201cPuerto Rico Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "9_Building K"
        }
      }
    },
    "Building K-KKW": {
      "firstVisit": true,
      "displayName": "Law of Switzerland",
      "description": "Description for \u201cLaw of Switzerland Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "9_Building K"
        }
      }
    },
    "Building K-KKE": {
      "firstVisit": true,
      "displayName": "Law of Greece",
      "description": "Description for \u201cLaw of Greece Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "9_Building K"
        }
      }
    },
    "Building K-KKY": {
      "firstVisit": true,
      "displayName": "Law of Ukraine",
      "description": "Description for \u201cLaw of Ukraine Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "9_Building K"
        }
      }
    },
    "9_Building K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 9th Floor",
      "description": "You are in the 9th floor. There are 8 rooms:\n\n[  South  ] \u201cMexico Room\u201d\n[  North  ] \u201cPakistan Room\u201d\n[  East   ] \u201cHistory of law Room\u201d\n[  West   ] \u201cLaw of Rhode Island Room\u201d\n[SouthEast] \u201cPuerto Rico Room\u201d\n[NorthWest] \u201cLaw of Switzerland Room\u201d\n[SouthWest] \u201cLaw of Greece Room\u201d\n[NorthEast] \u201cLaw of Ukraine Room\u201d\n[  Down   ] 8th floor\n[  Up     ] 10th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building K-KGF": {
          "displayName": "South",
          "destination": "Building K-KGF"
        },
        "Building K-KPL": {
          "displayName": "North",
          "destination": "Building K-KPL"
        },
        "Building K-KNS": {
          "displayName": "East",
          "destination": "Building K-KNS"
        },
        "Building K-KFR": {
          "displayName": "West",
          "destination": "Building K-KFR"
        },
        "Building K-KGV": {
          "displayName": "SouthEast",
          "destination": "Building K-KGV"
        },
        "Building K-KKW": {
          "displayName": "NorthWest",
          "destination": "Building K-KKW"
        },
        "Building K-KKE": {
          "displayName": "SouthWest",
          "destination": "Building K-KKE"
        },
        "Building K-KKY": {
          "displayName": "NorthEast",
          "destination": "Building K-KKY"
        },
        "down": {
          "displayName": "Down",
          "destination": "8_Building K"
        },
        "up": {
          "displayName": "Up",
          "destination": "10_Building K"
        }
      }
    },
    "Building K-KKP": {
      "firstVisit": true,
      "displayName": "Law of Poland",
      "description": "Description for \u201cLaw of Poland Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "10_Building K"
        }
      }
    },
    "Building K-KKM": {
      "firstVisit": true,
      "displayName": "Law of Netherlands",
      "description": "Description for \u201cLaw of Netherlands Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "10_Building K"
        }
      }
    },
    "Building K-KKK": {
      "firstVisit": true,
      "displayName": "Law of Malta",
      "description": "Description for \u201cLaw of Malta Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "10_Building K"
        }
      }
    },
    "Building K-KJK": {
      "firstVisit": true,
      "displayName": "Law of Bosnia and Hercegovina",
      "description": "Description for \u201cLaw of Bosnia and Hercegovina Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "10_Building K"
        }
      }
    },
    "Building K-KKH": {
      "firstVisit": true,
      "displayName": "Law of Kosovo",
      "description": "Description for \u201cLaw of Kosovo Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "10_Building K"
        }
      }
    },
    "Building K-KKJ": {
      "firstVisit": true,
      "displayName": "Law of Lithuania",
      "description": "Description for \u201cLaw of Lithuania Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "10_Building K"
        }
      }
    },
    "Building K-KGD": {
      "firstVisit": true,
      "displayName": "Guatemala",
      "description": "Description for \u201cGuatemala Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "10_Building K"
        }
      }
    },
    "Building K-KHQ": {
      "firstVisit": true,
      "displayName": "Peru",
      "description": "Description for \u201cPeru Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "10_Building K"
        }
      }
    },
    "10_Building K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 10th Floor",
      "description": "You are in the 10th floor. There are 8 rooms:\n\n[  South  ] \u201cLaw of Poland Room\u201d\n[  North  ] \u201cLaw of Netherlands Room\u201d\n[  East   ] \u201cLaw of Malta Room\u201d\n[  West   ] \u201cLaw of Bosnia and Hercegovina Room\u201d\n[SouthEast] \u201cLaw of Kosovo Room\u201d\n[NorthWest] \u201cLaw of Lithuania Room\u201d\n[SouthWest] \u201cGuatemala Room\u201d\n[NorthEast] \u201cPeru Room\u201d\n[  Down   ] 9th floor\n[  Up     ] 11th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building K-KKP": {
          "displayName": "South",
          "destination": "Building K-KKP"
        },
        "Building K-KKM": {
          "displayName": "North",
          "destination": "Building K-KKM"
        },
        "Building K-KKK": {
          "displayName": "East",
          "destination": "Building K-KKK"
        },
        "Building K-KJK": {
          "displayName": "West",
          "destination": "Building K-KJK"
        },
        "Building K-KKH": {
          "displayName": "SouthEast",
          "destination": "Building K-KKH"
        },
        "Building K-KKJ": {
          "displayName": "NorthWest",
          "destination": "Building K-KKJ"
        },
        "Building K-KGD": {
          "displayName": "SouthWest",
          "destination": "Building K-KGD"
        },
        "Building K-KHQ": {
          "displayName": "NorthEast",
          "destination": "Building K-KHQ"
        },
        "down": {
          "displayName": "Down",
          "destination": "9_Building K"
        },
        "up": {
          "displayName": "Up",
          "destination": "11_Building K"
        }
      }
    },
    "Building K-KST": {
      "firstVisit": true,
      "displayName": "Mali",
      "description": "Description for \u201cMali Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "11_Building K"
        }
      }
    },
    "Building K-KTA": {
      "firstVisit": true,
      "displayName": "Nigeria",
      "description": "Description for \u201cNigeria Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "11_Building K"
        }
      }
    },
    "Building K-KGS": {
      "firstVisit": true,
      "displayName": "Haiti",
      "description": "Description for \u201cHaiti Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "11_Building K"
        }
      }
    },
    "Building K-KHH": {
      "firstVisit": true,
      "displayName": "Colombia",
      "description": "Description for \u201cColombia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "11_Building K"
        }
      }
    },
    "Building K-KG": {
      "firstVisit": true,
      "displayName": "Latin America (General)",
      "description": "Description for \u201cLatin America (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "11_Building K"
        }
      }
    },
    "Building K-KHK": {
      "firstVisit": true,
      "displayName": "Ecuador",
      "description": "Description for \u201cEcuador Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "11_Building K"
        }
      }
    },
    "Building K-KHC": {
      "firstVisit": true,
      "displayName": "Bolivia",
      "description": "Description for \u201cBolivia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "11_Building K"
        }
      }
    },
    "Building K-KNP": {
      "firstVisit": true,
      "displayName": "China (Republic, 1949-    ).  Taiwan",
      "description": "Description for \u201cChina (Republic, 1949-    ).  Taiwan Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "11_Building K"
        }
      }
    },
    "11_Building K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 11th Floor",
      "description": "You are in the 11th floor. There are 8 rooms:\n\n[  South  ] \u201cMali Room\u201d\n[  North  ] \u201cNigeria Room\u201d\n[  East   ] \u201cHaiti Room\u201d\n[  West   ] \u201cColombia Room\u201d\n[SouthEast] \u201cLatin America (General) Room\u201d\n[NorthWest] \u201cEcuador Room\u201d\n[SouthWest] \u201cBolivia Room\u201d\n[NorthEast] \u201cChina (Republic, 1949-    ).  Taiwan Room\u201d\n[  Down   ] 10th floor\n[  Up     ] 12th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building K-KST": {
          "displayName": "South",
          "destination": "Building K-KST"
        },
        "Building K-KTA": {
          "displayName": "North",
          "destination": "Building K-KTA"
        },
        "Building K-KGS": {
          "displayName": "East",
          "destination": "Building K-KGS"
        },
        "Building K-KHH": {
          "displayName": "West",
          "destination": "Building K-KHH"
        },
        "Building K-KG": {
          "displayName": "SouthEast",
          "destination": "Building K-KG"
        },
        "Building K-KHK": {
          "displayName": "NorthWest",
          "destination": "Building K-KHK"
        },
        "Building K-KHC": {
          "displayName": "SouthWest",
          "destination": "Building K-KHC"
        },
        "Building K-KNP": {
          "displayName": "NorthEast",
          "destination": "Building K-KNP"
        },
        "down": {
          "displayName": "Down",
          "destination": "10_Building K"
        },
        "up": {
          "displayName": "Up",
          "destination": "12_Building K"
        }
      }
    },
    "Building K-KLR": {
      "firstVisit": true,
      "displayName": "Khorezmskai\uf04da Sovetskai\uf04da Sot\uf04dsialisticheskai\uf04da",
      "description": "Description for \u201cKhorezmskai\uf04da Sovetskai\uf04da Sot\uf04dsialisticheskai\uf04da Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "12_Building K"
        }
      }
    },
    "Building K-KTZ": {
      "firstVisit": true,
      "displayName": "Zimbabwe",
      "description": "Description for \u201cZimbabwe Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "12_Building K"
        }
      }
    },
    "Building K-KBS": {
      "firstVisit": true,
      "displayName": "Canon law of Eastern Churches",
      "description": "Description for \u201cCanon law of Eastern Churches Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "12_Building K"
        }
      }
    },
    "Building K-KPA": {
      "firstVisit": true,
      "displayName": "Korea.  South Korea",
      "description": "Description for \u201cKorea.  South Korea Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "12_Building K"
        }
      }
    },
    "Building K-KUQ": {
      "firstVisit": true,
      "displayName": "New Zealand",
      "description": "Description for \u201cNew Zealand Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "12_Building K"
        }
      }
    },
    "Building K-KVN": {
      "firstVisit": true,
      "displayName": "Fiji",
      "description": "Description for \u201cFiji Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "12_Building K"
        }
      }
    },
    "Building K-KVW": {
      "firstVisit": true,
      "displayName": "New Caledonia",
      "description": "Description for \u201cNew Caledonia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "12_Building K"
        }
      }
    },
    "Building K-KFU": {
      "firstVisit": true,
      "displayName": "Law of Utah",
      "description": "Description for \u201cLaw of Utah Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "12_Building K"
        }
      }
    },
    "12_Building K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 12th Floor",
      "description": "You are in the 12th floor. There are 8 rooms:\n\n[  South  ] \u201cKhorezmskai\uf04da Sovetskai\uf04da Sot\uf04dsialisticheskai\uf04da Room\u201d\n[  North  ] \u201cZimbabwe Room\u201d\n[  East   ] \u201cCanon law of Eastern Churches Room\u201d\n[  West   ] \u201cKorea.  South Korea Room\u201d\n[SouthEast] \u201cNew Zealand Room\u201d\n[NorthWest] \u201cFiji Room\u201d\n[SouthWest] \u201cNew Caledonia Room\u201d\n[NorthEast] \u201cLaw of Utah Room\u201d\n[  Down   ] 11th floor\n[  Up     ] 13th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building K-KLR": {
          "displayName": "South",
          "destination": "Building K-KLR"
        },
        "Building K-KTZ": {
          "displayName": "North",
          "destination": "Building K-KTZ"
        },
        "Building K-KBS": {
          "displayName": "East",
          "destination": "Building K-KBS"
        },
        "Building K-KPA": {
          "displayName": "West",
          "destination": "Building K-KPA"
        },
        "Building K-KUQ": {
          "displayName": "SouthEast",
          "destination": "Building K-KUQ"
        },
        "Building K-KVN": {
          "displayName": "NorthWest",
          "destination": "Building K-KVN"
        },
        "Building K-KVW": {
          "displayName": "SouthWest",
          "destination": "Building K-KVW"
        },
        "Building K-KFU": {
          "displayName": "NorthEast",
          "destination": "Building K-KFU"
        },
        "down": {
          "displayName": "Down",
          "destination": "11_Building K"
        },
        "up": {
          "displayName": "Up",
          "destination": "13_Building K"
        }
      }
    },
    "Building K-KJR": {
      "firstVisit": true,
      "displayName": "Law of Denmark",
      "description": "Description for \u201cLaw of Denmark Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "13_Building K"
        }
      }
    },
    "Building K-KKQ": {
      "firstVisit": true,
      "displayName": "Law of Portugal",
      "description": "Description for \u201cLaw of Portugal Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "13_Building K"
        }
      }
    },
    "Building K-KJS": {
      "firstVisit": true,
      "displayName": "Law of Estonia",
      "description": "Description for \u201cLaw of Estonia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "13_Building K"
        }
      }
    },
    "Building K-KKZ": {
      "firstVisit": true,
      "displayName": "Law of Yugoslavia",
      "description": "Description for \u201cLaw of Yugoslavia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "13_Building K"
        }
      }
    },
    "Building K-KJP": {
      "firstVisit": true,
      "displayName": "Law of Czech Republic (1993-        )",
      "description": "Description for \u201cLaw of Czech Republic (1993-        ) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "13_Building K"
        }
      }
    },
    "Building K-KGB": {
      "firstVisit": true,
      "displayName": "Costa Rica",
      "description": "Description for \u201cCosta Rica Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "13_Building K"
        }
      }
    },
    "Building K-KHW": {
      "firstVisit": true,
      "displayName": "Venezuela",
      "description": "Description for \u201cVenezuela Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "13_Building K"
        }
      }
    },
    "Building K-KGE": {
      "firstVisit": true,
      "displayName": "Honduras",
      "description": "Description for \u201cHonduras Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "13_Building K"
        }
      }
    },
    "13_Building K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 13th Floor",
      "description": "You are in the 13th floor. There are 8 rooms:\n\n[  South  ] \u201cLaw of Denmark Room\u201d\n[  North  ] \u201cLaw of Portugal Room\u201d\n[  East   ] \u201cLaw of Estonia Room\u201d\n[  West   ] \u201cLaw of Yugoslavia Room\u201d\n[SouthEast] \u201cLaw of Czech Republic (1993-        ) Room\u201d\n[NorthWest] \u201cCosta Rica Room\u201d\n[SouthWest] \u201cVenezuela Room\u201d\n[NorthEast] \u201cHonduras Room\u201d\n[  Down   ] 12th floor\n[  Up     ] 14th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building K-KJR": {
          "displayName": "South",
          "destination": "Building K-KJR"
        },
        "Building K-KKQ": {
          "displayName": "North",
          "destination": "Building K-KKQ"
        },
        "Building K-KJS": {
          "displayName": "East",
          "destination": "Building K-KJS"
        },
        "Building K-KKZ": {
          "displayName": "West",
          "destination": "Building K-KKZ"
        },
        "Building K-KJP": {
          "displayName": "SouthEast",
          "destination": "Building K-KJP"
        },
        "Building K-KGB": {
          "displayName": "NorthWest",
          "destination": "Building K-KGB"
        },
        "Building K-KHW": {
          "displayName": "SouthWest",
          "destination": "Building K-KHW"
        },
        "Building K-KGE": {
          "displayName": "NorthEast",
          "destination": "Building K-KGE"
        },
        "down": {
          "displayName": "Down",
          "destination": "12_Building K"
        },
        "up": {
          "displayName": "Up",
          "destination": "14_Building K"
        }
      }
    },
    "Building K-KGG": {
      "firstVisit": true,
      "displayName": "Nicaragua",
      "description": "Description for \u201cNicaragua Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "14_Building K"
        }
      }
    },
    "Building K-KHF": {
      "firstVisit": true,
      "displayName": "Chile",
      "description": "Description for \u201cChile Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "14_Building K"
        }
      }
    },
    "Building K-KHP": {
      "firstVisit": true,
      "displayName": "Paraguay",
      "description": "Description for \u201cParaguay Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "14_Building K"
        }
      }
    },
    "Building K-KKA": {
      "firstVisit": true,
      "displayName": "Law of East Germany",
      "description": "Description for \u201cLaw of East Germany Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "14_Building K"
        }
      }
    },
    "Building K-KKV": {
      "firstVisit": true,
      "displayName": "Law of Sweden",
      "description": "Description for \u201cLaw of Sweden Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "14_Building K"
        }
      }
    },
    "Building K-KSW": {
      "firstVisit": true,
      "displayName": "Morocco",
      "description": "Description for \u201cMorocco Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "14_Building K"
        }
      }
    },
    "Building K-KM": {
      "firstVisit": true,
      "displayName": "General",
      "description": "Description for \u201cGeneral Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "14_Building K"
        }
      }
    },
    "Building K-KLF": {
      "firstVisit": true,
      "displayName": "Belarus (Republic)",
      "description": "Description for \u201cBelarus (Republic) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "14_Building K"
        }
      }
    },
    "14_Building K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 14th Floor",
      "description": "You are in the 14th floor. There are 8 rooms:\n\n[  South  ] \u201cNicaragua Room\u201d\n[  North  ] \u201cChile Room\u201d\n[  East   ] \u201cParaguay Room\u201d\n[  West   ] \u201cLaw of East Germany Room\u201d\n[SouthEast] \u201cLaw of Sweden Room\u201d\n[NorthWest] \u201cMorocco Room\u201d\n[SouthWest] \u201cGeneral Room\u201d\n[NorthEast] \u201cBelarus (Republic) Room\u201d\n[  Down   ] 13th floor\n[  Up     ] 15th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building K-KGG": {
          "displayName": "South",
          "destination": "Building K-KGG"
        },
        "Building K-KHF": {
          "displayName": "North",
          "destination": "Building K-KHF"
        },
        "Building K-KHP": {
          "displayName": "East",
          "destination": "Building K-KHP"
        },
        "Building K-KKA": {
          "displayName": "West",
          "destination": "Building K-KKA"
        },
        "Building K-KKV": {
          "displayName": "SouthEast",
          "destination": "Building K-KKV"
        },
        "Building K-KSW": {
          "displayName": "NorthWest",
          "destination": "Building K-KSW"
        },
        "Building K-KM": {
          "displayName": "SouthWest",
          "destination": "Building K-KM"
        },
        "Building K-KLF": {
          "displayName": "NorthEast",
          "destination": "Building K-KLF"
        },
        "down": {
          "displayName": "Down",
          "destination": "13_Building K"
        },
        "up": {
          "displayName": "Up",
          "destination": "15_Building K"
        }
      }
    },
    "Building K-KH": {
      "firstVisit": true,
      "displayName": "General",
      "description": "Description for \u201cGeneral Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "15_Building K"
        }
      }
    },
    "Building K-KPT": {
      "firstVisit": true,
      "displayName": "Thailand",
      "description": "Description for \u201cThailand Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "15_Building K"
        }
      }
    },
    "Building K-KPM": {
      "firstVisit": true,
      "displayName": "Philippines",
      "description": "Description for \u201cPhilippines Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "15_Building K"
        }
      }
    },
    "Building K-KPV": {
      "firstVisit": true,
      "displayName": "Vietnam",
      "description": "Description for \u201cVietnam Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "15_Building K"
        }
      }
    },
    "Building K-KPP": {
      "firstVisit": true,
      "displayName": "Singapore",
      "description": "Description for \u201cSingapore Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "15_Building K"
        }
      }
    },
    "Building K-KMH": {
      "firstVisit": true,
      "displayName": "Iran",
      "description": "Description for \u201cIran Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "15_Building K"
        }
      }
    },
    "Building K-KSV": {
      "firstVisit": true,
      "displayName": "Mayotte",
      "description": "Description for \u201cMayotte Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "15_Building K"
        }
      }
    },
    "Building K-KSY": {
      "firstVisit": true,
      "displayName": "Namibia",
      "description": "Description for \u201cNamibia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "15_Building K"
        }
      }
    },
    "15_Building K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 15th Floor",
      "description": "You are in the 15th floor. There are 8 rooms:\n\n[  South  ] \u201cGeneral Room\u201d\n[  North  ] \u201cThailand Room\u201d\n[  East   ] \u201cPhilippines Room\u201d\n[  West   ] \u201cVietnam Room\u201d\n[SouthEast] \u201cSingapore Room\u201d\n[NorthWest] \u201cIran Room\u201d\n[SouthWest] \u201cMayotte Room\u201d\n[NorthEast] \u201cNamibia Room\u201d\n[  Down   ] 14th floor\n[  Up     ] 16th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building K-KH": {
          "displayName": "South",
          "destination": "Building K-KH"
        },
        "Building K-KPT": {
          "displayName": "North",
          "destination": "Building K-KPT"
        },
        "Building K-KPM": {
          "displayName": "East",
          "destination": "Building K-KPM"
        },
        "Building K-KPV": {
          "displayName": "West",
          "destination": "Building K-KPV"
        },
        "Building K-KPP": {
          "displayName": "SouthEast",
          "destination": "Building K-KPP"
        },
        "Building K-KMH": {
          "displayName": "NorthWest",
          "destination": "Building K-KMH"
        },
        "Building K-KSV": {
          "displayName": "SouthWest",
          "destination": "Building K-KSV"
        },
        "Building K-KSY": {
          "displayName": "NorthEast",
          "destination": "Building K-KSY"
        },
        "down": {
          "displayName": "Down",
          "destination": "14_Building K"
        },
        "up": {
          "displayName": "Up",
          "destination": "16_Building K"
        }
      }
    },
    "Building K-KQK": {
      "firstVisit": true,
      "displayName": "Botswana",
      "description": "Description for \u201cBotswana Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "16_Building K"
        }
      }
    },
    "Building K-KQH": {
      "firstVisit": true,
      "displayName": "Angola",
      "description": "Description for \u201cAngola Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "16_Building K"
        }
      }
    },
    "Building K-KSX": {
      "firstVisit": true,
      "displayName": "Mozambique",
      "description": "Description for \u201cMozambique Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "16_Building K"
        }
      }
    },
    "Building K-KSK": {
      "firstVisit": true,
      "displayName": "Kenya",
      "description": "Description for \u201cKenya Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "16_Building K"
        }
      }
    },
    "Building K-KRU": {
      "firstVisit": true,
      "displayName": "Gabon",
      "description": "Description for \u201cGabon Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "16_Building K"
        }
      }
    },
    "Building K-KSL": {
      "firstVisit": true,
      "displayName": "Lesotho",
      "description": "Description for \u201cLesotho Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "16_Building K"
        }
      }
    },
    "Building K-KRX": {
      "firstVisit": true,
      "displayName": "Ghana",
      "description": "Description for \u201cGhana Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "16_Building K"
        }
      }
    },
    "Building K-KSS": {
      "firstVisit": true,
      "displayName": "Malawi",
      "description": "Description for \u201cMalawi Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "16_Building K"
        }
      }
    },
    "16_Building K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 16th Floor",
      "description": "You are in the 16th floor. There are 8 rooms:\n\n[  South  ] \u201cBotswana Room\u201d\n[  North  ] \u201cAngola Room\u201d\n[  East   ] \u201cMozambique Room\u201d\n[  West   ] \u201cKenya Room\u201d\n[SouthEast] \u201cGabon Room\u201d\n[NorthWest] \u201cLesotho Room\u201d\n[SouthWest] \u201cGhana Room\u201d\n[NorthEast] \u201cMalawi Room\u201d\n[  Down   ] 15th floor\n[  Up     ] 17th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building K-KQK": {
          "displayName": "South",
          "destination": "Building K-KQK"
        },
        "Building K-KQH": {
          "displayName": "North",
          "destination": "Building K-KQH"
        },
        "Building K-KSX": {
          "displayName": "East",
          "destination": "Building K-KSX"
        },
        "Building K-KSK": {
          "displayName": "West",
          "destination": "Building K-KSK"
        },
        "Building K-KRU": {
          "displayName": "SouthEast",
          "destination": "Building K-KRU"
        },
        "Building K-KSL": {
          "displayName": "NorthWest",
          "destination": "Building K-KSL"
        },
        "Building K-KRX": {
          "displayName": "SouthWest",
          "destination": "Building K-KRX"
        },
        "Building K-KSS": {
          "displayName": "NorthEast",
          "destination": "Building K-KSS"
        },
        "down": {
          "displayName": "Down",
          "destination": "15_Building K"
        },
        "up": {
          "displayName": "Up",
          "destination": "17_Building K"
        }
      }
    },
    "Building K-KTW": {
      "firstVisit": true,
      "displayName": "Uganda",
      "description": "Description for \u201cUganda Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "17_Building K"
        }
      }
    },
    "Building K-KTD": {
      "firstVisit": true,
      "displayName": "Rwanda",
      "description": "Description for \u201cRwanda Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "17_Building K"
        }
      }
    },
    "Building K-KTX": {
      "firstVisit": true,
      "displayName": "Congo (Democratic Republic)",
      "description": "Description for \u201cCongo (Democratic Republic) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "17_Building K"
        }
      }
    },
    "Building K-KRS": {
      "firstVisit": true,
      "displayName": "French West Africa",
      "description": "Description for \u201cFrench West Africa Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "17_Building K"
        }
      }
    },
    "Building K-KTG": {
      "firstVisit": true,
      "displayName": "Senegal",
      "description": "Description for \u201cSenegal Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "17_Building K"
        }
      }
    },
    "Building K-KKX": {
      "firstVisit": true,
      "displayName": "Law of Turkey",
      "description": "Description for \u201cLaw of Turkey Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "17_Building K"
        }
      }
    },
    "Building K-KLE": {
      "firstVisit": true,
      "displayName": "Azerbaijan",
      "description": "Description for \u201cAzerbaijan Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "17_Building K"
        }
      }
    },
    "Building K-KRM": {
      "firstVisit": true,
      "displayName": "Egypt",
      "description": "Description for \u201cEgypt Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "17_Building K"
        }
      }
    },
    "17_Building K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 17th Floor",
      "description": "You are in the 17th floor. There are 8 rooms:\n\n[  South  ] \u201cUganda Room\u201d\n[  North  ] \u201cRwanda Room\u201d\n[  East   ] \u201cCongo (Democratic Republic) Room\u201d\n[  West   ] \u201cFrench West Africa Room\u201d\n[SouthEast] \u201cSenegal Room\u201d\n[NorthWest] \u201cLaw of Turkey Room\u201d\n[SouthWest] \u201cAzerbaijan Room\u201d\n[NorthEast] \u201cEgypt Room\u201d\n[  Down   ] 16th floor\n[  Up     ] 18th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building K-KTW": {
          "displayName": "South",
          "destination": "Building K-KTW"
        },
        "Building K-KTD": {
          "displayName": "North",
          "destination": "Building K-KTD"
        },
        "Building K-KTX": {
          "displayName": "East",
          "destination": "Building K-KTX"
        },
        "Building K-KRS": {
          "displayName": "West",
          "destination": "Building K-KRS"
        },
        "Building K-KTG": {
          "displayName": "SouthEast",
          "destination": "Building K-KTG"
        },
        "Building K-KKX": {
          "displayName": "NorthWest",
          "destination": "Building K-KKX"
        },
        "Building K-KLE": {
          "displayName": "SouthWest",
          "destination": "Building K-KLE"
        },
        "Building K-KRM": {
          "displayName": "NorthEast",
          "destination": "Building K-KRM"
        },
        "down": {
          "displayName": "Down",
          "destination": "16_Building K"
        },
        "up": {
          "displayName": "Up",
          "destination": "18_Building K"
        }
      }
    },
    "Building K-KMN": {
      "firstVisit": true,
      "displayName": "Kuwait",
      "description": "Description for \u201cKuwait Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "18_Building K"
        }
      }
    },
    "Building K-KMX": {
      "firstVisit": true,
      "displayName": "Yemen",
      "description": "Description for \u201cYemen Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "18_Building K"
        }
      }
    },
    "Building K-KTQ": {
      "firstVisit": true,
      "displayName": "Sudan",
      "description": "Description for \u201cSudan Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "18_Building K"
        }
      }
    },
    "Building K-KQG": {
      "firstVisit": true,
      "displayName": "Algeria",
      "description": "Description for \u201cAlgeria Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "18_Building K"
        }
      }
    },
    "Building K-KMV": {
      "firstVisit": true,
      "displayName": "United Arab Emirates",
      "description": "Description for \u201cUnited Arab Emirates Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "18_Building K"
        }
      }
    },
    "Building K-KHD": {
      "firstVisit": true,
      "displayName": "Brazil",
      "description": "Description for \u201cBrazil Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "18_Building K"
        }
      }
    },
    "Building K-KHN": {
      "firstVisit": true,
      "displayName": "Guyana",
      "description": "Description for \u201cGuyana Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "18_Building K"
        }
      }
    },
    "Building K-KHU": {
      "firstVisit": true,
      "displayName": "Uruguay",
      "description": "Description for \u201cUruguay Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "18_Building K"
        }
      }
    },
    "18_Building K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 18th Floor",
      "description": "You are in the 18th floor. There are 8 rooms:\n\n[  South  ] \u201cKuwait Room\u201d\n[  North  ] \u201cYemen Room\u201d\n[  East   ] \u201cSudan Room\u201d\n[  West   ] \u201cAlgeria Room\u201d\n[SouthEast] \u201cUnited Arab Emirates Room\u201d\n[NorthWest] \u201cBrazil Room\u201d\n[SouthWest] \u201cGuyana Room\u201d\n[NorthEast] \u201cUruguay Room\u201d\n[  Down   ] 17th floor\n[  Up     ] 19th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building K-KMN": {
          "displayName": "South",
          "destination": "Building K-KMN"
        },
        "Building K-KMX": {
          "displayName": "North",
          "destination": "Building K-KMX"
        },
        "Building K-KTQ": {
          "displayName": "East",
          "destination": "Building K-KTQ"
        },
        "Building K-KQG": {
          "displayName": "West",
          "destination": "Building K-KQG"
        },
        "Building K-KMV": {
          "displayName": "SouthEast",
          "destination": "Building K-KMV"
        },
        "Building K-KHD": {
          "displayName": "NorthWest",
          "destination": "Building K-KHD"
        },
        "Building K-KHN": {
          "displayName": "SouthWest",
          "destination": "Building K-KHN"
        },
        "Building K-KHU": {
          "displayName": "NorthEast",
          "destination": "Building K-KHU"
        },
        "down": {
          "displayName": "Down",
          "destination": "17_Building K"
        },
        "up": {
          "displayName": "Up",
          "destination": "19_Building K"
        }
      }
    },
    "Building K-KLS": {
      "firstVisit": true,
      "displayName": "Kyrgyzstan",
      "description": "Description for \u201cKyrgyzstan Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "19_Building K"
        }
      }
    },
    "Building K-KSA": {
      "firstVisit": true,
      "displayName": "Guinea",
      "description": "Description for \u201cGuinea Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "19_Building K"
        }
      }
    },
    "Building K-KPF": {
      "firstVisit": true,
      "displayName": "Macao",
      "description": "Description for \u201cMacao Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "19_Building K"
        }
      }
    },
    "Building K-KLD": {
      "firstVisit": true,
      "displayName": "Armenian SSR (to 1991)",
      "description": "Description for \u201cArmenian SSR (to 1991) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "19_Building K"
        }
      }
    },
    "Building K-KTV": {
      "firstVisit": true,
      "displayName": "Tunisia",
      "description": "Description for \u201cTunisia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "19_Building K"
        }
      }
    },
    "Building K-KMP": {
      "firstVisit": true,
      "displayName": "Lebanon",
      "description": "Description for \u201cLebanon Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "19_Building K"
        }
      }
    },
    "Building K-KMF": {
      "firstVisit": true,
      "displayName": "Bahrain",
      "description": "Description for \u201cBahrain Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "19_Building K"
        }
      }
    },
    "Building K-KKS": {
      "firstVisit": true,
      "displayName": "Law of Slovenia",
      "description": "Description for \u201cLaw of Slovenia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "19_Building K"
        }
      }
    },
    "19_Building K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 19th Floor",
      "description": "You are in the 19th floor. There are 8 rooms:\n\n[  South  ] \u201cKyrgyzstan Room\u201d\n[  North  ] \u201cGuinea Room\u201d\n[  East   ] \u201cMacao Room\u201d\n[  West   ] \u201cArmenian SSR (to 1991) Room\u201d\n[SouthEast] \u201cTunisia Room\u201d\n[NorthWest] \u201cLebanon Room\u201d\n[SouthWest] \u201cBahrain Room\u201d\n[NorthEast] \u201cLaw of Slovenia Room\u201d\n[  Down   ] 18th floor\n[  Up     ] 20th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building K-KLS": {
          "displayName": "South",
          "destination": "Building K-KLS"
        },
        "Building K-KSA": {
          "displayName": "North",
          "destination": "Building K-KSA"
        },
        "Building K-KPF": {
          "displayName": "East",
          "destination": "Building K-KPF"
        },
        "Building K-KLD": {
          "displayName": "West",
          "destination": "Building K-KLD"
        },
        "Building K-KTV": {
          "displayName": "SouthEast",
          "destination": "Building K-KTV"
        },
        "Building K-KMP": {
          "displayName": "NorthWest",
          "destination": "Building K-KMP"
        },
        "Building K-KMF": {
          "displayName": "SouthWest",
          "destination": "Building K-KMF"
        },
        "Building K-KKS": {
          "displayName": "NorthEast",
          "destination": "Building K-KKS"
        },
        "down": {
          "displayName": "Down",
          "destination": "18_Building K"
        },
        "up": {
          "displayName": "Up",
          "destination": "20_Building K"
        }
      }
    },
    "Building K-KJW": {
      "firstVisit": true,
      "displayName": "French regions, provinces, cities, etc.",
      "description": "Description for \u201cFrench regions, provinces, cities, etc. Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "20_Building K"
        }
      }
    },
    "Building K-KJJ": {
      "firstVisit": true,
      "displayName": "Law of Austria",
      "description": "Description for \u201cLaw of Austria Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "20_Building K"
        }
      }
    },
    "Building K-KZD": {
      "firstVisit": true,
      "displayName": "Space law.  Law of outer space",
      "description": "Description for \u201cSpace law.  Law of outer space Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "20_Building K"
        }
      }
    },
    "Building K-KWW": {
      "firstVisit": true,
      "displayName": "Western Samoa",
      "description": "Description for \u201cWestern Samoa Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "20_Building K"
        }
      }
    },
    "Building K-KVP": {
      "firstVisit": true,
      "displayName": "French Polynesia",
      "description": "Description for \u201cFrench Polynesia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "20_Building K"
        }
      }
    },
    "Building K-KEO": {
      "firstVisit": true,
      "displayName": "Law of Ontario",
      "description": "Description for \u201cLaw of Ontario Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "20_Building K"
        }
      }
    },
    "Building K-KEA": {
      "firstVisit": true,
      "displayName": "Law of Alberta",
      "description": "Description for \u201cLaw of Alberta Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "20_Building K"
        }
      }
    },
    "Building K-KEB": {
      "firstVisit": true,
      "displayName": "Law of British Columbia",
      "description": "Description for \u201cLaw of British Columbia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "20_Building K"
        }
      }
    },
    "20_Building K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 20th Floor",
      "description": "You are in the 20th floor. There are 8 rooms:\n\n[  South  ] \u201cFrench regions, provinces, cities, etc. Room\u201d\n[  North  ] \u201cLaw of Austria Room\u201d\n[  East   ] \u201cSpace law.  Law of outer space Room\u201d\n[  West   ] \u201cWestern Samoa Room\u201d\n[SouthEast] \u201cFrench Polynesia Room\u201d\n[NorthWest] \u201cLaw of Ontario Room\u201d\n[SouthWest] \u201cLaw of Alberta Room\u201d\n[NorthEast] \u201cLaw of British Columbia Room\u201d\n[  Down   ] 19th floor\n[  Up     ] 21st floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building K-KJW": {
          "displayName": "South",
          "destination": "Building K-KJW"
        },
        "Building K-KJJ": {
          "displayName": "North",
          "destination": "Building K-KJJ"
        },
        "Building K-KZD": {
          "displayName": "East",
          "destination": "Building K-KZD"
        },
        "Building K-KWW": {
          "displayName": "West",
          "destination": "Building K-KWW"
        },
        "Building K-KVP": {
          "displayName": "SouthEast",
          "destination": "Building K-KVP"
        },
        "Building K-KEO": {
          "displayName": "NorthWest",
          "destination": "Building K-KEO"
        },
        "Building K-KEA": {
          "displayName": "SouthWest",
          "destination": "Building K-KEA"
        },
        "Building K-KEB": {
          "displayName": "NorthEast",
          "destination": "Building K-KEB"
        },
        "down": {
          "displayName": "Down",
          "destination": "19_Building K"
        },
        "up": {
          "displayName": "Up",
          "destination": "21_Building K"
        }
      }
    },
    "Building K-KEQ": {
      "firstVisit": true,
      "displayName": "Law of Qu\u00e9bec",
      "description": "Description for \u201cLaw of Qu\u00e9bec Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "21_Building K"
        }
      }
    },
    "Building K-KWH": {
      "firstVisit": true,
      "displayName": "Papua New Guinea",
      "description": "Description for \u201cPapua New Guinea Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "21_Building K"
        }
      }
    },
    "Building K-KVS": {
      "firstVisit": true,
      "displayName": "Midway Islands",
      "description": "Description for \u201cMidway Islands Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "21_Building K"
        }
      }
    },
    "Building K-KWG": {
      "firstVisit": true,
      "displayName": "Palau",
      "description": "Description for \u201cPalau Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "21_Building K"
        }
      }
    },
    "Building K-KVQ": {
      "firstVisit": true,
      "displayName": "Guam",
      "description": "Description for \u201cGuam Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "21_Building K"
        }
      }
    },
    "Building K-KJN": {
      "firstVisit": true,
      "displayName": "Law of Cyprus",
      "description": "Description for \u201cLaw of Cyprus Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "21_Building K"
        }
      }
    },
    "Building K-KKF": {
      "firstVisit": true,
      "displayName": "Law of Hungary",
      "description": "Description for \u201cLaw of Hungary Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "21_Building K"
        }
      }
    },
    "Building K-KHM": {
      "firstVisit": true,
      "displayName": "French Guiana",
      "description": "Description for \u201cFrench Guiana Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "21_Building K"
        }
      }
    },
    "21_Building K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 21st Floor",
      "description": "You are in the 21st floor. There are 8 rooms:\n\n[  South  ] \u201cLaw of Qu\u00e9bec Room\u201d\n[  North  ] \u201cPapua New Guinea Room\u201d\n[  East   ] \u201cMidway Islands Room\u201d\n[  West   ] \u201cPalau Room\u201d\n[SouthEast] \u201cGuam Room\u201d\n[NorthWest] \u201cLaw of Cyprus Room\u201d\n[SouthWest] \u201cLaw of Hungary Room\u201d\n[NorthEast] \u201cFrench Guiana Room\u201d\n[  Down   ] 20th floor\n[  Up     ] 22nd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building K-KEQ": {
          "displayName": "South",
          "destination": "Building K-KEQ"
        },
        "Building K-KWH": {
          "displayName": "North",
          "destination": "Building K-KWH"
        },
        "Building K-KVS": {
          "displayName": "East",
          "destination": "Building K-KVS"
        },
        "Building K-KWG": {
          "displayName": "West",
          "destination": "Building K-KWG"
        },
        "Building K-KVQ": {
          "displayName": "SouthEast",
          "destination": "Building K-KVQ"
        },
        "Building K-KJN": {
          "displayName": "NorthWest",
          "destination": "Building K-KJN"
        },
        "Building K-KKF": {
          "displayName": "SouthWest",
          "destination": "Building K-KKF"
        },
        "Building K-KHM": {
          "displayName": "NorthEast",
          "destination": "Building K-KHM"
        },
        "down": {
          "displayName": "Down",
          "destination": "20_Building K"
        },
        "up": {
          "displayName": "Up",
          "destination": "22_Building K"
        }
      }
    },
    "Building K-KKN": {
      "firstVisit": true,
      "displayName": "Law of Norway",
      "description": "Description for \u201cLaw of Norway Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "22_Building K"
        }
      }
    },
    "Building K-KRB": {
      "firstVisit": true,
      "displayName": "Central African Republic",
      "description": "Description for \u201cCentral African Republic Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "22_Building K"
        }
      }
    },
    "Building K-KTU": {
      "firstVisit": true,
      "displayName": "Togo",
      "description": "Description for \u201cTogo Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "22_Building K"
        }
      }
    },
    "Building K-KQT": {
      "firstVisit": true,
      "displayName": "Burkina Faso",
      "description": "Description for \u201cBurkina Faso Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "22_Building K"
        }
      }
    },
    "Building K-KSH": {
      "firstVisit": true,
      "displayName": "C\u00f4te d\u2019Ivoire",
      "description": "Description for \u201cC\u00f4te d\u2019Ivoire Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "22_Building K"
        }
      }
    },
    "Building K-KML": {
      "firstVisit": true,
      "displayName": "Jerusalem",
      "description": "Description for \u201cJerusalem Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "22_Building K"
        }
      }
    },
    "Building K-KMJ": {
      "firstVisit": true,
      "displayName": "Iraq",
      "description": "Description for \u201cIraq Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "22_Building K"
        }
      }
    },
    "Building K-KSP": {
      "firstVisit": true,
      "displayName": "Libya",
      "description": "Description for \u201cLibya Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "22_Building K"
        }
      }
    },
    "22_Building K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 22nd Floor",
      "description": "You are in the 22nd floor. There are 8 rooms:\n\n[  South  ] \u201cLaw of Norway Room\u201d\n[  North  ] \u201cCentral African Republic Room\u201d\n[  East   ] \u201cTogo Room\u201d\n[  West   ] \u201cBurkina Faso Room\u201d\n[SouthEast] \u201cC\u00f4te d\u2019Ivoire Room\u201d\n[NorthWest] \u201cJerusalem Room\u201d\n[SouthWest] \u201cIraq Room\u201d\n[NorthEast] \u201cLibya Room\u201d\n[  Down   ] 21st floor\n[  Up     ] 23rd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building K-KKN": {
          "displayName": "South",
          "destination": "Building K-KKN"
        },
        "Building K-KRB": {
          "displayName": "North",
          "destination": "Building K-KRB"
        },
        "Building K-KTU": {
          "displayName": "East",
          "destination": "Building K-KTU"
        },
        "Building K-KQT": {
          "displayName": "West",
          "destination": "Building K-KQT"
        },
        "Building K-KSH": {
          "displayName": "SouthEast",
          "destination": "Building K-KSH"
        },
        "Building K-KML": {
          "displayName": "NorthWest",
          "destination": "Building K-KML"
        },
        "Building K-KMJ": {
          "displayName": "SouthWest",
          "destination": "Building K-KMJ"
        },
        "Building K-KSP": {
          "displayName": "NorthEast",
          "destination": "Building K-KSP"
        },
        "down": {
          "displayName": "Down",
          "destination": "21_Building K"
        },
        "up": {
          "displayName": "Up",
          "destination": "23_Building K"
        }
      }
    },
    "Building K-KGH": {
      "firstVisit": true,
      "displayName": "Panama",
      "description": "Description for \u201cPanama Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "23_Building K"
        }
      }
    },
    "Building K-KGQ": {
      "firstVisit": true,
      "displayName": "Dominican Republic",
      "description": "Description for \u201cDominican Republic Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "23_Building K"
        }
      }
    },
    "Building K-KGN": {
      "firstVisit": true,
      "displayName": "Cuba",
      "description": "Description for \u201cCuba Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "23_Building K"
        }
      }
    },
    "Building K-KGC": {
      "firstVisit": true,
      "displayName": "El Salvador",
      "description": "Description for \u201cEl Salvador Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "23_Building K"
        }
      }
    },
    "Building K-KSN": {
      "firstVisit": true,
      "displayName": "Liberia",
      "description": "Description for \u201cLiberia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "23_Building K"
        }
      }
    },
    "Building K-KSZ": {
      "firstVisit": true,
      "displayName": "Niger",
      "description": "Description for \u201cNiger Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "23_Building K"
        }
      }
    },
    "Building K-KPC": {
      "firstVisit": true,
      "displayName": "Democratic People\u2019s Republic of Korea.  North Korea",
      "description": "Description for \u201cDemocratic People\u2019s Republic of Korea.  North Korea Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "23_Building K"
        }
      }
    },
    "Building K-KQ": {
      "firstVisit": true,
      "displayName": "Law of indigenous peoples",
      "description": "Description for \u201cLaw of indigenous peoples Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "23_Building K"
        }
      }
    },
    "23_Building K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 23rd Floor",
      "description": "You are in the 23rd floor. There are 8 rooms:\n\n[  South  ] \u201cPanama Room\u201d\n[  North  ] \u201cDominican Republic Room\u201d\n[  East   ] \u201cCuba Room\u201d\n[  West   ] \u201cEl Salvador Room\u201d\n[SouthEast] \u201cLiberia Room\u201d\n[NorthWest] \u201cNiger Room\u201d\n[SouthWest] \u201cDemocratic People\u2019s Republic of Korea.  North Korea Room\u201d\n[NorthEast] \u201cLaw of indigenous peoples Room\u201d\n[  Down   ] 22nd floor\n[  Up     ] 24th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building K-KGH": {
          "displayName": "South",
          "destination": "Building K-KGH"
        },
        "Building K-KGQ": {
          "displayName": "North",
          "destination": "Building K-KGQ"
        },
        "Building K-KGN": {
          "displayName": "East",
          "destination": "Building K-KGN"
        },
        "Building K-KGC": {
          "displayName": "West",
          "destination": "Building K-KGC"
        },
        "Building K-KSN": {
          "displayName": "SouthEast",
          "destination": "Building K-KSN"
        },
        "Building K-KSZ": {
          "displayName": "NorthWest",
          "destination": "Building K-KSZ"
        },
        "Building K-KPC": {
          "displayName": "SouthWest",
          "destination": "Building K-KPC"
        },
        "Building K-KQ": {
          "displayName": "NorthEast",
          "destination": "Building K-KQ"
        },
        "down": {
          "displayName": "Down",
          "destination": "22_Building K"
        },
        "up": {
          "displayName": "Up",
          "destination": "24_Building K"
        }
      }
    },
    "Building K-KWC": {
      "firstVisit": true,
      "displayName": "Northern Mariana Islands",
      "description": "Description for \u201cNorthern Mariana Islands Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "24_Building K"
        }
      }
    },
    "Building K-KNM": {
      "firstVisit": true,
      "displayName": "Cambodia",
      "description": "Description for \u201cCambodia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "24_Building K"
        }
      }
    },
    "Building K-KBT": {
      "firstVisit": true,
      "displayName": "Canon law of Eastern Rite Churches in Communion with the",
      "description": "Description for \u201cCanon law of Eastern Rite Churches in Communion with the Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "24_Building K"
        }
      }
    },
    "Building K-KJG": {
      "firstVisit": true,
      "displayName": "Law of Albania",
      "description": "Description for \u201cLaw of Albania Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "24_Building K"
        }
      }
    },
    "Building K-KGX": {
      "firstVisit": true,
      "displayName": "Trinidad and Tobago",
      "description": "Description for \u201cTrinidad and Tobago Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "24_Building K"
        }
      }
    },
    "Building K-KKR": {
      "firstVisit": true,
      "displayName": "Law of Romania",
      "description": "Description for \u201cLaw of Romania Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "24_Building K"
        }
      }
    },
    "Building K-KJQ": {
      "firstVisit": true,
      "displayName": "Law of Slovakia (1993-        )",
      "description": "Description for \u201cLaw of Slovakia (1993-        ) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "24_Building K"
        }
      }
    },
    "Building K-KLM": {
      "firstVisit": true,
      "displayName": "Moldova",
      "description": "Description for \u201cMoldova Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "24_Building K"
        }
      }
    },
    "24_Building K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 24th Floor",
      "description": "You are in the 24th floor. There are 8 rooms:\n\n[  South  ] \u201cNorthern Mariana Islands Room\u201d\n[  North  ] \u201cCambodia Room\u201d\n[  East   ] \u201cCanon law of Eastern Rite Churches in Communion with the Room\u201d\n[  West   ] \u201cLaw of Albania Room\u201d\n[SouthEast] \u201cTrinidad and Tobago Room\u201d\n[NorthWest] \u201cLaw of Romania Room\u201d\n[SouthWest] \u201cLaw of Slovakia (1993-        ) Room\u201d\n[NorthEast] \u201cMoldova Room\u201d\n[  Down   ] 23rd floor\n[  Up     ] 25th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building K-KWC": {
          "displayName": "South",
          "destination": "Building K-KWC"
        },
        "Building K-KNM": {
          "displayName": "North",
          "destination": "Building K-KNM"
        },
        "Building K-KBT": {
          "displayName": "East",
          "destination": "Building K-KBT"
        },
        "Building K-KJG": {
          "displayName": "West",
          "destination": "Building K-KJG"
        },
        "Building K-KGX": {
          "displayName": "SouthEast",
          "destination": "Building K-KGX"
        },
        "Building K-KKR": {
          "displayName": "NorthWest",
          "destination": "Building K-KKR"
        },
        "Building K-KJQ": {
          "displayName": "SouthWest",
          "destination": "Building K-KJQ"
        },
        "Building K-KLM": {
          "displayName": "NorthEast",
          "destination": "Building K-KLM"
        },
        "down": {
          "displayName": "Down",
          "destination": "23_Building K"
        },
        "up": {
          "displayName": "Up",
          "destination": "25_Building K"
        }
      }
    },
    "Building K-KDE": {
      "firstVisit": true,
      "displayName": "Law of Northern Ireland",
      "description": "Description for \u201cLaw of Northern Ireland Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "25_Building K"
        }
      }
    },
    "Building K-KES": {
      "firstVisit": true,
      "displayName": "Law of Saskatchewan",
      "description": "Description for \u201cLaw of Saskatchewan Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "25_Building K"
        }
      }
    },
    "Building K-KNK": {
      "firstVisit": true,
      "displayName": "Brunei",
      "description": "Description for \u201cBrunei Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "25_Building K"
        }
      }
    },
    "Building K-KPE": {
      "firstVisit": true,
      "displayName": "Laos",
      "description": "Description for \u201cLaos Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "25_Building K"
        }
      }
    },
    "Building K-KPS": {
      "firstVisit": true,
      "displayName": "Sri Lanka",
      "description": "Description for \u201cSri Lanka Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "25_Building K"
        }
      }
    },
    "Building K-KPJ": {
      "firstVisit": true,
      "displayName": "Nepal",
      "description": "Description for \u201cNepal Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "25_Building K"
        }
      }
    },
    "Building K-KNL": {
      "firstVisit": true,
      "displayName": "Burma",
      "description": "Description for \u201cBurma Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "25_Building K"
        }
      }
    },
    "Building K-KNG": {
      "firstVisit": true,
      "displayName": "Bangladesh",
      "description": "Description for \u201cBangladesh Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "25_Building K"
        }
      }
    },
    "25_Building K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 25th Floor",
      "description": "You are in the 25th floor. There are 8 rooms:\n\n[  South  ] \u201cLaw of Northern Ireland Room\u201d\n[  North  ] \u201cLaw of Saskatchewan Room\u201d\n[  East   ] \u201cBrunei Room\u201d\n[  West   ] \u201cLaos Room\u201d\n[SouthEast] \u201cSri Lanka Room\u201d\n[NorthWest] \u201cNepal Room\u201d\n[SouthWest] \u201cBurma Room\u201d\n[NorthEast] \u201cBangladesh Room\u201d\n[  Down   ] 24th floor\n[  Up     ] 26th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building K-KDE": {
          "displayName": "South",
          "destination": "Building K-KDE"
        },
        "Building K-KES": {
          "displayName": "North",
          "destination": "Building K-KES"
        },
        "Building K-KNK": {
          "displayName": "East",
          "destination": "Building K-KNK"
        },
        "Building K-KPE": {
          "displayName": "West",
          "destination": "Building K-KPE"
        },
        "Building K-KPS": {
          "displayName": "SouthEast",
          "destination": "Building K-KPS"
        },
        "Building K-KPJ": {
          "displayName": "NorthWest",
          "destination": "Building K-KPJ"
        },
        "Building K-KNL": {
          "displayName": "SouthWest",
          "destination": "Building K-KNL"
        },
        "Building K-KNG": {
          "displayName": "NorthEast",
          "destination": "Building K-KNG"
        },
        "down": {
          "displayName": "Down",
          "destination": "24_Building K"
        },
        "up": {
          "displayName": "Up",
          "destination": "26_Building K"
        }
      }
    },
    "Building K-KSE": {
      "firstVisit": true,
      "displayName": "Equatorial Guinea",
      "description": "Description for \u201cEquatorial Guinea Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "26_Building K"
        }
      }
    },
    "Building K-KLT": {
      "firstVisit": true,
      "displayName": "Tajikistan",
      "description": "Description for \u201cTajikistan Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "26_Building K"
        }
      }
    },
    "Building K-KLV": {
      "firstVisit": true,
      "displayName": "Turkmenistan",
      "description": "Description for \u201cTurkmenistan Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "26_Building K"
        }
      }
    },
    "Building K-KRE": {
      "firstVisit": true,
      "displayName": "Comoros",
      "description": "Description for \u201cComoros Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "26_Building K"
        }
      }
    },
    "Building K-KTH": {
      "firstVisit": true,
      "displayName": "Seychelles",
      "description": "Description for \u201cSeychelles Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "26_Building K"
        }
      }
    },
    "Building K-KSR": {
      "firstVisit": true,
      "displayName": "Madagascar",
      "description": "Description for \u201cMadagascar Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "26_Building K"
        }
      }
    },
    "Building K-KQE": {
      "firstVisit": true,
      "displayName": "Regional organization and integration",
      "description": "Description for \u201cRegional organization and integration Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "26_Building K"
        }
      }
    },
    "Building K-KRN": {
      "firstVisit": true,
      "displayName": "Eritrea",
      "description": "Description for \u201cEritrea Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "26_Building K"
        }
      }
    },
    "26_Building K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 26th Floor",
      "description": "You are in the 26th floor. There are 8 rooms:\n\n[  South  ] \u201cEquatorial Guinea Room\u201d\n[  North  ] \u201cTajikistan Room\u201d\n[  East   ] \u201cTurkmenistan Room\u201d\n[  West   ] \u201cComoros Room\u201d\n[SouthEast] \u201cSeychelles Room\u201d\n[NorthWest] \u201cMadagascar Room\u201d\n[SouthWest] \u201cRegional organization and integration Room\u201d\n[NorthEast] \u201cEritrea Room\u201d\n[  Down   ] 25th floor\n[  Up     ] 27th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building K-KSE": {
          "displayName": "South",
          "destination": "Building K-KSE"
        },
        "Building K-KLT": {
          "displayName": "North",
          "destination": "Building K-KLT"
        },
        "Building K-KLV": {
          "displayName": "East",
          "destination": "Building K-KLV"
        },
        "Building K-KRE": {
          "displayName": "West",
          "destination": "Building K-KRE"
        },
        "Building K-KTH": {
          "displayName": "SouthEast",
          "destination": "Building K-KTH"
        },
        "Building K-KSR": {
          "displayName": "NorthWest",
          "destination": "Building K-KSR"
        },
        "Building K-KQE": {
          "displayName": "SouthWest",
          "destination": "Building K-KQE"
        },
        "Building K-KRN": {
          "displayName": "NorthEast",
          "destination": "Building K-KRN"
        },
        "down": {
          "displayName": "Down",
          "destination": "25_Building K"
        },
        "up": {
          "displayName": "Up",
          "destination": "27_Building K"
        }
      }
    },
    "Building K-KKG": {
      "firstVisit": true,
      "displayName": "Law of Iceland",
      "description": "Description for \u201cLaw of Iceland Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "27_Building K"
        }
      }
    },
    "Building K-KLH": {
      "firstVisit": true,
      "displayName": "Georgia (Republic)",
      "description": "Description for \u201cGeorgia (Republic) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "27_Building K"
        }
      }
    },
    "Building K-KGA": {
      "firstVisit": true,
      "displayName": "Belize",
      "description": "Description for \u201cBelize Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "27_Building K"
        }
      }
    },
    "Building K-KKI": {
      "firstVisit": true,
      "displayName": "Law of Latvia",
      "description": "Description for \u201cLaw of Latvia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "27_Building K"
        }
      }
    },
    "Building K-KTF": {
      "firstVisit": true,
      "displayName": "Sao Tome and Principe",
      "description": "Description for \u201cSao Tome and Principe Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "27_Building K"
        }
      }
    },
    "Building K-KJH": {
      "firstVisit": true,
      "displayName": "Law of Andorra",
      "description": "Description for \u201cLaw of Andorra Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "27_Building K"
        }
      }
    },
    "Building K-KWL": {
      "firstVisit": true,
      "displayName": "Solomon Islands",
      "description": "Description for \u201cSolomon Islands Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "27_Building K"
        }
      }
    },
    "Building K-KGW": {
      "firstVisit": true,
      "displayName": "Saint Lucia",
      "description": "Description for \u201cSaint Lucia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "27_Building K"
        }
      }
    },
    "27_Building K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 27th Floor",
      "description": "You are in the 27th floor. There are 8 rooms:\n\n[  South  ] \u201cLaw of Iceland Room\u201d\n[  North  ] \u201cGeorgia (Republic) Room\u201d\n[  East   ] \u201cBelize Room\u201d\n[  West   ] \u201cLaw of Latvia Room\u201d\n[SouthEast] \u201cSao Tome and Principe Room\u201d\n[NorthWest] \u201cLaw of Andorra Room\u201d\n[SouthWest] \u201cSolomon Islands Room\u201d\n[NorthEast] \u201cSaint Lucia Room\u201d\n[  Down   ] 26th floor\n[  Up     ] 28th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building K-KKG": {
          "displayName": "South",
          "destination": "Building K-KKG"
        },
        "Building K-KLH": {
          "displayName": "North",
          "destination": "Building K-KLH"
        },
        "Building K-KGA": {
          "displayName": "East",
          "destination": "Building K-KGA"
        },
        "Building K-KKI": {
          "displayName": "West",
          "destination": "Building K-KKI"
        },
        "Building K-KTF": {
          "displayName": "SouthEast",
          "destination": "Building K-KTF"
        },
        "Building K-KJH": {
          "displayName": "NorthWest",
          "destination": "Building K-KJH"
        },
        "Building K-KWL": {
          "displayName": "SouthWest",
          "destination": "Building K-KWL"
        },
        "Building K-KGW": {
          "displayName": "NorthEast",
          "destination": "Building K-KGW"
        },
        "down": {
          "displayName": "Down",
          "destination": "26_Building K"
        },
        "up": {
          "displayName": "Up",
          "destination": "28_Building K"
        }
      }
    },
    "Building K-KGZ": {
      "firstVisit": true,
      "displayName": "Virgin Islands of the United States",
      "description": "Description for \u201cVirgin Islands of the United States Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "28_Building K"
        }
      }
    },
    "Building K-KGR": {
      "firstVisit": true,
      "displayName": "Grenada",
      "description": "Description for \u201cGrenada Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "28_Building K"
        }
      }
    },
    "Building K-KRV": {
      "firstVisit": true,
      "displayName": "Gambia",
      "description": "Description for \u201cGambia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "28_Building K"
        }
      }
    },
    "Building K-KFZ": {
      "firstVisit": true,
      "displayName": "Laws of the territories.  Laws of the Confederate States of",
      "description": "Description for \u201cLaws of the territories.  Laws of the Confederate States of Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "28_Building K"
        }
      }
    },
    "Building K-KDG": {
      "firstVisit": true,
      "displayName": "Law of Isle of Man.  Channel Islands",
      "description": "Description for \u201cLaw of Isle of Man.  Channel Islands Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "28_Building K"
        }
      }
    },
    "Building K-KGJ": {
      "firstVisit": true,
      "displayName": "General",
      "description": "Description for \u201cGeneral Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "28_Building K"
        }
      }
    },
    "Building K-KLN": {
      "firstVisit": true,
      "displayName": "Russian S.F.S.R. (to 1991)",
      "description": "Description for \u201cRussian S.F.S.R. (to 1991) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "28_Building K"
        }
      }
    },
    "Building K-KMQ": {
      "firstVisit": true,
      "displayName": "Palestine (to 1948)",
      "description": "Description for \u201cPalestine (to 1948) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "28_Building K"
        }
      }
    },
    "28_Building K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 28th Floor",
      "description": "You are in the 28th floor. There are 8 rooms:\n\n[  South  ] \u201cVirgin Islands of the United States Room\u201d\n[  North  ] \u201cGrenada Room\u201d\n[  East   ] \u201cGambia Room\u201d\n[  West   ] \u201cLaws of the territories.  Laws of the Confederate States of Room\u201d\n[SouthEast] \u201cLaw of Isle of Man.  Channel Islands Room\u201d\n[NorthWest] \u201cGeneral Room\u201d\n[SouthWest] \u201cRussian S.F.S.R. (to 1991) Room\u201d\n[NorthEast] \u201cPalestine (to 1948) Room\u201d\n[  Down   ] 27th floor\n[  Up     ] 29th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building K-KGZ": {
          "displayName": "South",
          "destination": "Building K-KGZ"
        },
        "Building K-KGR": {
          "displayName": "North",
          "destination": "Building K-KGR"
        },
        "Building K-KRV": {
          "displayName": "East",
          "destination": "Building K-KRV"
        },
        "Building K-KFZ": {
          "displayName": "West",
          "destination": "Building K-KFZ"
        },
        "Building K-KDG": {
          "displayName": "SouthEast",
          "destination": "Building K-KDG"
        },
        "Building K-KGJ": {
          "displayName": "NorthWest",
          "destination": "Building K-KGJ"
        },
        "Building K-KLN": {
          "displayName": "SouthWest",
          "destination": "Building K-KLN"
        },
        "Building K-KMQ": {
          "displayName": "NorthEast",
          "destination": "Building K-KMQ"
        },
        "down": {
          "displayName": "Down",
          "destination": "27_Building K"
        },
        "up": {
          "displayName": "Up",
          "destination": "29_Building K"
        }
      }
    },
    "Building K-KEY": {
      "firstVisit": true,
      "displayName": "Law of Yukon",
      "description": "Description for \u201cLaw of Yukon Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "29_Building K"
        }
      }
    },
    "Building K-KNV": {
      "firstVisit": true,
      "displayName": "French Indochina.  Indochina (Federation)",
      "description": "Description for \u201cFrench Indochina.  Indochina (Federation) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "29_Building K"
        }
      }
    },
    "Building K-KMY": {
      "firstVisit": true,
      "displayName": "Yeman (People\u2019s Democratic Republic) (to 1990)",
      "description": "Description for \u201cYeman (People\u2019s Democratic Republic) (to 1990) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "29_Building K"
        }
      }
    },
    "Building K-KHS": {
      "firstVisit": true,
      "displayName": "Surinam",
      "description": "Description for \u201cSurinam Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "29_Building K"
        }
      }
    },
    "Building K-KMU": {
      "firstVisit": true,
      "displayName": "Syria",
      "description": "Description for \u201cSyria Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "29_Building K"
        }
      }
    },
    "Building K-KKL": {
      "firstVisit": true,
      "displayName": "Law of Montenegro",
      "description": "Description for \u201cLaw of Montenegro Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "29_Building K"
        }
      }
    },
    "Building K-KSG": {
      "firstVisit": true,
      "displayName": "Italian Somaliland",
      "description": "Description for \u201cItalian Somaliland Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "29_Building K"
        }
      }
    },
    "Building K-KEZ": {
      "firstVisit": true,
      "displayName": "Law of Law of cities, towns, etc.",
      "description": "Description for \u201cLaw of Law of cities, towns, etc. Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "29_Building K"
        }
      }
    },
    "29_Building K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 29th Floor",
      "description": "You are in the 29th floor. There are 8 rooms:\n\n[  South  ] \u201cLaw of Yukon Room\u201d\n[  North  ] \u201cFrench Indochina.  Indochina (Federation) Room\u201d\n[  East   ] \u201cYeman (People\u2019s Democratic Republic) (to 1990) Room\u201d\n[  West   ] \u201cSurinam Room\u201d\n[SouthEast] \u201cSyria Room\u201d\n[NorthWest] \u201cLaw of Montenegro Room\u201d\n[SouthWest] \u201cItalian Somaliland Room\u201d\n[NorthEast] \u201cLaw of Law of cities, towns, etc. Room\u201d\n[  Down   ] 28th floor\n[  Up     ] 30th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building K-KEY": {
          "displayName": "South",
          "destination": "Building K-KEY"
        },
        "Building K-KNV": {
          "displayName": "North",
          "destination": "Building K-KNV"
        },
        "Building K-KMY": {
          "displayName": "East",
          "destination": "Building K-KMY"
        },
        "Building K-KHS": {
          "displayName": "West",
          "destination": "Building K-KHS"
        },
        "Building K-KMU": {
          "displayName": "SouthEast",
          "destination": "Building K-KMU"
        },
        "Building K-KKL": {
          "displayName": "NorthWest",
          "destination": "Building K-KKL"
        },
        "Building K-KSG": {
          "displayName": "SouthWest",
          "destination": "Building K-KSG"
        },
        "Building K-KEZ": {
          "displayName": "NorthEast",
          "destination": "Building K-KEZ"
        },
        "down": {
          "displayName": "Down",
          "destination": "28_Building K"
        },
        "up": {
          "displayName": "Up",
          "destination": "30_Building K"
        }
      }
    },
    "Building K-KEM": {
      "firstVisit": true,
      "displayName": "Law of Manitoba",
      "description": "Description for \u201cLaw of Manitoba Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "30_Building K"
        }
      }
    },
    "Building K-KTK": {
      "firstVisit": true,
      "displayName": "Somalia",
      "description": "Description for \u201cSomalia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "30_Building K"
        }
      }
    },
    "Building K-KGT": {
      "firstVisit": true,
      "displayName": "Jamaica",
      "description": "Description for \u201cJamaica Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "30_Building K"
        }
      }
    },
    "Building K-KGY": {
      "firstVisit": true,
      "displayName": "Turks and Caicos Islands",
      "description": "Description for \u201cTurks and Caicos Islands Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "30_Building K"
        }
      }
    },
    "Building K-KEP": {
      "firstVisit": true,
      "displayName": "Law of Law of Prince Edward Island",
      "description": "Description for \u201cLaw of Law of Prince Edward Island Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "30_Building K"
        }
      }
    },
    "Building K-KQV": {
      "firstVisit": true,
      "displayName": "Burundi",
      "description": "Description for \u201cBurundi Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "30_Building K"
        }
      }
    },
    "Building K-KWE": {
      "firstVisit": true,
      "displayName": "Pacific Islands (Trust Territory)",
      "description": "Description for \u201cPacific Islands (Trust Territory) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "30_Building K"
        }
      }
    },
    "Building K-KPW": {
      "firstVisit": true,
      "displayName": "Vietnam (Republic).  South Vietnam",
      "description": "Description for \u201cVietnam (Republic).  South Vietnam Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "30_Building K"
        }
      }
    },
    "30_Building K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 30th Floor",
      "description": "You are in the 30th floor. There are 8 rooms:\n\n[  South  ] \u201cLaw of Manitoba Room\u201d\n[  North  ] \u201cSomalia Room\u201d\n[  East   ] \u201cJamaica Room\u201d\n[  West   ] \u201cTurks and Caicos Islands Room\u201d\n[SouthEast] \u201cLaw of Law of Prince Edward Island Room\u201d\n[NorthWest] \u201cBurundi Room\u201d\n[SouthWest] \u201cPacific Islands (Trust Territory) Room\u201d\n[NorthEast] \u201cVietnam (Republic).  South Vietnam Room\u201d\n[  Down   ] 29th floor\n[  Up     ] 31st floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building K-KEM": {
          "displayName": "South",
          "destination": "Building K-KEM"
        },
        "Building K-KTK": {
          "displayName": "North",
          "destination": "Building K-KTK"
        },
        "Building K-KGT": {
          "displayName": "East",
          "destination": "Building K-KGT"
        },
        "Building K-KGY": {
          "displayName": "West",
          "destination": "Building K-KGY"
        },
        "Building K-KEP": {
          "displayName": "SouthEast",
          "destination": "Building K-KEP"
        },
        "Building K-KQV": {
          "displayName": "NorthWest",
          "destination": "Building K-KQV"
        },
        "Building K-KWE": {
          "displayName": "SouthWest",
          "destination": "Building K-KWE"
        },
        "Building K-KPW": {
          "displayName": "NorthEast",
          "destination": "Building K-KPW"
        },
        "down": {
          "displayName": "Down",
          "destination": "29_Building K"
        },
        "up": {
          "displayName": "Up",
          "destination": "31_Building K"
        }
      }
    },
    "Building K-KWX": {
      "firstVisit": true,
      "displayName": "Antarctica",
      "description": "Description for \u201cAntarctica Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "31_Building K"
        }
      }
    },
    "Building K-KVH": {
      "firstVisit": true,
      "displayName": "British New Guinea (Territory of Papua)",
      "description": "Description for \u201cBritish New Guinea (Territory of Papua) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "31_Building K"
        }
      }
    },
    "Building K-KWR": {
      "firstVisit": true,
      "displayName": "Vanuatu",
      "description": "Description for \u201cVanuatu Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "31_Building K"
        }
      }
    },
    "Building K-KWA": {
      "firstVisit": true,
      "displayName": "Niue",
      "description": "Description for \u201cNiue Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "31_Building K"
        }
      }
    },
    "Building K-KNF": {
      "firstVisit": true,
      "displayName": "Afghanistan",
      "description": "Description for \u201cAfghanistan Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "31_Building K"
        }
      }
    },
    "Building K-KRY": {
      "firstVisit": true,
      "displayName": "Gibraltar",
      "description": "Description for \u201cGibraltar Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "31_Building K"
        }
      }
    },
    "Building K-KRC": {
      "firstVisit": true,
      "displayName": "Chad",
      "description": "Description for \u201cChad Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "31_Building K"
        }
      }
    },
    "Building K-KTJ": {
      "firstVisit": true,
      "displayName": "Sierra Leone",
      "description": "Description for \u201cSierra Leone Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "31_Building K"
        }
      }
    },
    "31_Building K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 31st Floor",
      "description": "You are in the 31st floor. There are 8 rooms:\n\n[  South  ] \u201cAntarctica Room\u201d\n[  North  ] \u201cBritish New Guinea (Territory of Papua) Room\u201d\n[  East   ] \u201cVanuatu Room\u201d\n[  West   ] \u201cNiue Room\u201d\n[SouthEast] \u201cAfghanistan Room\u201d\n[NorthWest] \u201cGibraltar Room\u201d\n[SouthWest] \u201cChad Room\u201d\n[NorthEast] \u201cSierra Leone Room\u201d\n[  Down   ] 30th floor\n[  Up     ] 32nd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building K-KWX": {
          "displayName": "South",
          "destination": "Building K-KWX"
        },
        "Building K-KVH": {
          "displayName": "North",
          "destination": "Building K-KVH"
        },
        "Building K-KWR": {
          "displayName": "East",
          "destination": "Building K-KWR"
        },
        "Building K-KWA": {
          "displayName": "West",
          "destination": "Building K-KWA"
        },
        "Building K-KNF": {
          "displayName": "SouthEast",
          "destination": "Building K-KNF"
        },
        "Building K-KRY": {
          "displayName": "NorthWest",
          "destination": "Building K-KRY"
        },
        "Building K-KRC": {
          "displayName": "SouthWest",
          "destination": "Building K-KRC"
        },
        "Building K-KTJ": {
          "displayName": "NorthEast",
          "destination": "Building K-KTJ"
        },
        "down": {
          "displayName": "Down",
          "destination": "30_Building K"
        },
        "up": {
          "displayName": "Up",
          "destination": "32_Building K"
        }
      }
    },
    "Building K-KTR": {
      "firstVisit": true,
      "displayName": "Swaziland",
      "description": "Description for \u201cSwaziland Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "32_Building K"
        }
      }
    },
    "Building K-KTC": {
      "firstVisit": true,
      "displayName": "R\u00e9union",
      "description": "Description for \u201cR\u00e9union Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "32_Building K"
        }
      }
    },
    "Building K-KRK": {
      "firstVisit": true,
      "displayName": "Djibouti",
      "description": "Description for \u201cDjibouti Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "32_Building K"
        }
      }
    },
    "Building K-KGM": {
      "firstVisit": true,
      "displayName": "Cayman Islands",
      "description": "Description for \u201cCayman Islands Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "32_Building K"
        }
      }
    },
    "Building K-KGP": {
      "firstVisit": true,
      "displayName": "Dominica",
      "description": "Description for \u201cDominica Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "32_Building K"
        }
      }
    },
    "Building K-KRG": {
      "firstVisit": true,
      "displayName": "Congo (Brazzaville)",
      "description": "Description for \u201cCongo (Brazzaville) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "32_Building K"
        }
      }
    },
    "Building K-KVU": {
      "firstVisit": true,
      "displayName": "Nauru",
      "description": "Description for \u201cNauru Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "32_Building K"
        }
      }
    },
    "Building K-KQJ": {
      "firstVisit": true,
      "displayName": "Benin",
      "description": "Description for \u201cBenin Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "32_Building K"
        }
      }
    },
    "32_Building K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 32nd Floor",
      "description": "You are in the 32nd floor. There are 8 rooms:\n\n[  South  ] \u201cSwaziland Room\u201d\n[  North  ] \u201cR\u00e9union Room\u201d\n[  East   ] \u201cDjibouti Room\u201d\n[  West   ] \u201cCayman Islands Room\u201d\n[SouthEast] \u201cDominica Room\u201d\n[NorthWest] \u201cCongo (Brazzaville) Room\u201d\n[SouthWest] \u201cNauru Room\u201d\n[NorthEast] \u201cBenin Room\u201d\n[  Down   ] 31st floor\n[  Up     ] 33rd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building K-KTR": {
          "displayName": "South",
          "destination": "Building K-KTR"
        },
        "Building K-KTC": {
          "displayName": "North",
          "destination": "Building K-KTC"
        },
        "Building K-KRK": {
          "displayName": "East",
          "destination": "Building K-KRK"
        },
        "Building K-KGM": {
          "displayName": "West",
          "destination": "Building K-KGM"
        },
        "Building K-KGP": {
          "displayName": "SouthEast",
          "destination": "Building K-KGP"
        },
        "Building K-KRG": {
          "displayName": "NorthWest",
          "destination": "Building K-KRG"
        },
        "Building K-KVU": {
          "displayName": "SouthWest",
          "destination": "Building K-KVU"
        },
        "Building K-KQJ": {
          "displayName": "NorthEast",
          "destination": "Building K-KQJ"
        },
        "down": {
          "displayName": "Down",
          "destination": "31_Building K"
        },
        "up": {
          "displayName": "Up",
          "destination": "33_Building K"
        }
      }
    },
    "Building K-KNE": {
      "firstVisit": true,
      "displayName": "Regional organization and integration",
      "description": "Description for \u201cRegional organization and integration Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "33_Building K"
        }
      }
    },
    "Building K-KMS": {
      "firstVisit": true,
      "displayName": "Qatar",
      "description": "Description for \u201cQatar Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "33_Building K"
        }
      }
    },
    "Building K-KQM": {
      "firstVisit": true,
      "displayName": "British Central Africa Protectorate",
      "description": "Description for \u201cBritish Central Africa Protectorate Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "33_Building K"
        }
      }
    },
    "Building K-KNY": {
      "firstVisit": true,
      "displayName": "Cities, etc.",
      "description": "Description for \u201cCities, etc. Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "33_Building K"
        }
      }
    },
    "Building K-KLP": {
      "firstVisit": true,
      "displayName": "Ukraine",
      "description": "Description for \u201cUkraine Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "33_Building K"
        }
      }
    },
    "Building K-KQX": {
      "firstVisit": true,
      "displayName": "Cape Verde",
      "description": "Description for \u201cCape Verde Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "33_Building K"
        }
      }
    },
    "Building K-KGK": {
      "firstVisit": true,
      "displayName": "Aruba",
      "description": "Description for \u201cAruba Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "33_Building K"
        }
      }
    },
    "Building K-KPH": {
      "firstVisit": true,
      "displayName": "Maldives",
      "description": "Description for \u201cMaldives Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "33_Building K"
        }
      }
    },
    "33_Building K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 33rd Floor",
      "description": "You are in the 33rd floor. There are 8 rooms:\n\n[  South  ] \u201cRegional organization and integration Room\u201d\n[  North  ] \u201cQatar Room\u201d\n[  East   ] \u201cBritish Central Africa Protectorate Room\u201d\n[  West   ] \u201cCities, etc. Room\u201d\n[SouthEast] \u201cUkraine Room\u201d\n[NorthWest] \u201cCape Verde Room\u201d\n[SouthWest] \u201cAruba Room\u201d\n[NorthEast] \u201cMaldives Room\u201d\n[  Down   ] 32nd floor\n[  Up     ] 34th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building K-KNE": {
          "displayName": "South",
          "destination": "Building K-KNE"
        },
        "Building K-KMS": {
          "displayName": "North",
          "destination": "Building K-KMS"
        },
        "Building K-KQM": {
          "displayName": "East",
          "destination": "Building K-KQM"
        },
        "Building K-KNY": {
          "displayName": "West",
          "destination": "Building K-KNY"
        },
        "Building K-KLP": {
          "displayName": "SouthEast",
          "destination": "Building K-KLP"
        },
        "Building K-KQX": {
          "displayName": "NorthWest",
          "destination": "Building K-KQX"
        },
        "Building K-KGK": {
          "displayName": "SouthWest",
          "destination": "Building K-KGK"
        },
        "Building K-KPH": {
          "displayName": "NorthEast",
          "destination": "Building K-KPH"
        },
        "down": {
          "displayName": "Down",
          "destination": "32_Building K"
        },
        "up": {
          "displayName": "Up",
          "destination": "34_Building K"
        }
      }
    },
    "Building K-KSU": {
      "firstVisit": true,
      "displayName": "Mauritania",
      "description": "Description for \u201cMauritania Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "34_Building K"
        }
      }
    },
    "Building K-KSC": {
      "firstVisit": true,
      "displayName": "Guinea-Bissau",
      "description": "Description for \u201cGuinea-Bissau Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "34_Building K"
        }
      }
    },
    "Building K-KVL": {
      "firstVisit": true,
      "displayName": "Cook Islands",
      "description": "Description for \u201cCook Islands Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "34_Building K"
        }
      }
    },
    "Building K-KWP": {
      "firstVisit": true,
      "displayName": "Tonga",
      "description": "Description for \u201cTonga Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "34_Building K"
        }
      }
    },
    "Building K-KNH": {
      "firstVisit": true,
      "displayName": "Bhutan",
      "description": "Description for \u201cBhutan Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "34_Building K"
        }
      }
    },
    "Building K-KMG": {
      "firstVisit": true,
      "displayName": "Gaza",
      "description": "Description for \u201cGaza Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "34_Building K"
        }
      }
    },
    "Building K-KHL": {
      "firstVisit": true,
      "displayName": "Falkland Islands",
      "description": "Description for \u201cFalkland Islands Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "34_Building K"
        }
      }
    },
    "Building K-KWQ": {
      "firstVisit": true,
      "displayName": "Tuvalu",
      "description": "Description for \u201cTuvalu Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "34_Building K"
        }
      }
    },
    "34_Building K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 34th Floor",
      "description": "You are in the 34th floor. There are 8 rooms:\n\n[  South  ] \u201cMauritania Room\u201d\n[  North  ] \u201cGuinea-Bissau Room\u201d\n[  East   ] \u201cCook Islands Room\u201d\n[  West   ] \u201cTonga Room\u201d\n[SouthEast] \u201cBhutan Room\u201d\n[NorthWest] \u201cGaza Room\u201d\n[SouthWest] \u201cFalkland Islands Room\u201d\n[NorthEast] \u201cTuvalu Room\u201d\n[  Down   ] 33rd floor\n[  Up     ] 35th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building K-KSU": {
          "displayName": "South",
          "destination": "Building K-KSU"
        },
        "Building K-KSC": {
          "displayName": "North",
          "destination": "Building K-KSC"
        },
        "Building K-KVL": {
          "displayName": "East",
          "destination": "Building K-KVL"
        },
        "Building K-KWP": {
          "displayName": "West",
          "destination": "Building K-KWP"
        },
        "Building K-KNH": {
          "displayName": "SouthEast",
          "destination": "Building K-KNH"
        },
        "Building K-KMG": {
          "displayName": "NorthWest",
          "destination": "Building K-KMG"
        },
        "Building K-KHL": {
          "displayName": "SouthWest",
          "destination": "Building K-KHL"
        },
        "Building K-KWQ": {
          "displayName": "NorthEast",
          "destination": "Building K-KWQ"
        },
        "down": {
          "displayName": "Down",
          "destination": "33_Building K"
        },
        "up": {
          "displayName": "Up",
          "destination": "35_Building K"
        }
      }
    },
    "Building K-KRR": {
      "firstVisit": true,
      "displayName": "French Equatorial Africa",
      "description": "Description for \u201cFrench Equatorial Africa Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "35_Building K"
        }
      }
    },
    "Building K-KVR": {
      "firstVisit": true,
      "displayName": "Kiribati",
      "description": "Description for \u201cKiribati Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "35_Building K"
        }
      }
    },
    "Building K-KU": {
      "firstVisit": true,
      "displayName": "Law of Australian peoples.  Aborigines",
      "description": "Description for \u201cLaw of Australian peoples.  Aborigines Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "35_Building K"
        }
      }
    },
    "35_Building K": {
      "firstVisit": true,
      "displayName": "\u201cLaw Building\u201d, 35th Floor",
      "description": "You are in the 35th floor. There are 3 rooms:\n\n[  South  ] \u201cFrench Equatorial Africa Room\u201d\n[  North  ] \u201cKiribati Room\u201d\n[  East   ] \u201cLaw of Australian peoples.  Aborigines Room\u201d\n[  Down   ] 34th floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building K-KRR": {
          "displayName": "South",
          "destination": "Building K-KRR"
        },
        "Building K-KVR": {
          "displayName": "North",
          "destination": "Building K-KVR"
        },
        "Building K-KU": {
          "displayName": "East",
          "destination": "Building K-KU"
        },
        "down": {
          "displayName": "Down",
          "destination": "34_Building K"
        }
      }
    },
    "Building L-LB": {
      "firstVisit": true,
      "displayName": "Theory and practice of education",
      "description": "Description for \u201cTheory and practice of education Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building L"
        }
      }
    },
    "Building L-LT": {
      "firstVisit": true,
      "displayName": "Textbooks",
      "description": "Description for \u201cTextbooks Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building L"
        }
      }
    },
    "Building L-LA": {
      "firstVisit": true,
      "displayName": "History of education",
      "description": "Description for \u201cHistory of education Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building L"
        }
      }
    },
    "Building L-LD": {
      "firstVisit": true,
      "displayName": "United States",
      "description": "Description for \u201cUnited States Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building L"
        }
      }
    },
    "Building L-LC": {
      "firstVisit": true,
      "displayName": "Special aspects of education",
      "description": "Description for \u201cSpecial aspects of education Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building L"
        }
      }
    },
    "Building L-L": {
      "firstVisit": true,
      "displayName": "Education (General)",
      "description": "Description for \u201cEducation (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building L"
        }
      }
    },
    "Building L-LF": {
      "firstVisit": true,
      "displayName": "Individual institutions",
      "description": "Description for \u201cIndividual institutions Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building L"
        }
      }
    },
    "Building L-LG": {
      "firstVisit": true,
      "displayName": "Individual institutions",
      "description": "Description for \u201cIndividual institutions Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building L"
        }
      }
    },
    "Building L": {
      "firstVisit": true,
      "displayName": "\u201cEducation Building\u201d Main Lobby",
      "description": "There are 11 rooms throughout this building in 2 floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[  South  ] \u201cTheory and practice of education Room\u201d\n[  North  ] \u201cTextbooks Room\u201d\n[  East   ] \u201cHistory of education Room\u201d\n[  West   ] \u201cUnited States Room\u201d\n[SouthEast] \u201cSpecial aspects of education Room\u201d\n[NorthWest] \u201cEducation (General) Room\u201d\n[SouthWest] \u201cIndividual institutions Room\u201d\n[NorthEast] \u201cIndividual institutions Room\u201d\n[  Up     ] 2nd floor\n[  Exit   ] Main Library Grounds Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "Building L": {
          "displayName": "Exit",
          "destination": "MAIN"
        },
        "up": {
          "displayName": "Up",
          "destination": "2_Building L"
        },
        "Building L-LB": {
          "displayName": "South",
          "destination": "Building L-LB"
        },
        "Building L-LT": {
          "displayName": "North",
          "destination": "Building L-LT"
        },
        "Building L-LA": {
          "displayName": "East",
          "destination": "Building L-LA"
        },
        "Building L-LD": {
          "displayName": "West",
          "destination": "Building L-LD"
        },
        "Building L-LC": {
          "displayName": "SouthEast",
          "destination": "Building L-LC"
        },
        "Building L-L": {
          "displayName": "NorthWest",
          "destination": "Building L-L"
        },
        "Building L-LF": {
          "displayName": "SouthWest",
          "destination": "Building L-LF"
        },
        "Building L-LG": {
          "displayName": "NorthEast",
          "destination": "Building L-LG"
        }
      }
    },
    "Building L-LJ": {
      "firstVisit": true,
      "displayName": "Student fraternities and societies, United States",
      "description": "Description for \u201cStudent fraternities and societies, United States Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building L"
        }
      }
    },
    "Building L-LE": {
      "firstVisit": true,
      "displayName": "America (except United States)",
      "description": "Description for \u201cAmerica (except United States) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building L"
        }
      }
    },
    "Building L-LH": {
      "firstVisit": true,
      "displayName": "College and school magazines and papers",
      "description": "Description for \u201cCollege and school magazines and papers Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building L"
        }
      }
    },
    "2_Building L": {
      "firstVisit": true,
      "displayName": "\u201cEducation Building\u201d, 2nd Floor",
      "description": "You are in the 2nd floor. There are 3 rooms:\n\n[  South  ] \u201cStudent fraternities and societies, United States Room\u201d\n[  North  ] \u201cAmerica (except United States) Room\u201d\n[  East   ] \u201cCollege and school magazines and papers Room\u201d\n[  Down   ] 1st floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building L-LJ": {
          "displayName": "South",
          "destination": "Building L-LJ"
        },
        "Building L-LE": {
          "displayName": "North",
          "destination": "Building L-LE"
        },
        "Building L-LH": {
          "displayName": "East",
          "destination": "Building L-LH"
        },
        "down": {
          "displayName": "Down",
          "destination": "Building L"
        }
      }
    },
    "Building M-ML": {
      "firstVisit": true,
      "displayName": "Literature on music",
      "description": "Description for \u201cLiterature on music Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building M"
        }
      }
    },
    "Building M-MT": {
      "firstVisit": true,
      "displayName": "Instruction and study",
      "description": "Description for \u201cInstruction and study Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building M"
        }
      }
    },
    "Building M-M": {
      "firstVisit": true,
      "displayName": "Music",
      "description": "Description for \u201cMusic Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building M"
        }
      }
    },
    "Building M": {
      "firstVisit": true,
      "displayName": "\u201cMusic Building\u201d Main Lobby",
      "description": "There are 3 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n\n[  South  ] \u201cLiterature on music Room\u201d\n[  North  ] \u201cInstruction and study Room\u201d\n[  East   ] \u201cMusic Room\u201d\n[  Exit   ] Main Library Grounds Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "Building M": {
          "displayName": "Exit",
          "destination": "MAIN"
        },
        "Building M-ML": {
          "displayName": "South",
          "destination": "Building M-ML"
        },
        "Building M-MT": {
          "displayName": "North",
          "destination": "Building M-MT"
        },
        "Building M-M": {
          "displayName": "East",
          "destination": "Building M-M"
        }
      }
    },
    "Building N-NA": {
      "firstVisit": true,
      "displayName": "Architecture",
      "description": "Description for \u201cArchitecture Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building N"
        }
      }
    },
    "Building N-N": {
      "firstVisit": true,
      "displayName": "Visual arts",
      "description": "Description for \u201cVisual arts Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building N"
        }
      }
    },
    "Building N-NK": {
      "firstVisit": true,
      "displayName": "Decorative arts",
      "description": "Description for \u201cDecorative arts Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building N"
        }
      }
    },
    "Building N-ND": {
      "firstVisit": true,
      "displayName": "Painting",
      "description": "Description for \u201cPainting Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building N"
        }
      }
    },
    "Building N-NC": {
      "firstVisit": true,
      "displayName": "Drawing.    Design.    Illustration",
      "description": "Description for \u201cDrawing.    Design.    Illustration Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building N"
        }
      }
    },
    "Building N-NE": {
      "firstVisit": true,
      "displayName": "Print media",
      "description": "Description for \u201cPrint media Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building N"
        }
      }
    },
    "Building N-NB": {
      "firstVisit": true,
      "displayName": "Sculpture",
      "description": "Description for \u201cSculpture Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building N"
        }
      }
    },
    "Building N-NX": {
      "firstVisit": true,
      "displayName": "Arts in general",
      "description": "Description for \u201cArts in general Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building N"
        }
      }
    },
    "Building N": {
      "firstVisit": true,
      "displayName": "\u201cFine Arts Building\u201d Main Lobby",
      "description": "There are 8 rooms throughout this building. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[  South  ] \u201cArchitecture Room\u201d\n[  North  ] \u201cVisual arts Room\u201d\n[  East   ] \u201cDecorative arts Room\u201d\n[  West   ] \u201cPainting Room\u201d\n[SouthEast] \u201cDrawing.    Design.    Illustration Room\u201d\n[NorthWest] \u201cPrint media Room\u201d\n[SouthWest] \u201cSculpture Room\u201d\n[NorthEast] \u201cArts in general Room\u201d\n[  Exit   ] Main Library Grounds Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "Building N": {
          "displayName": "Exit",
          "destination": "MAIN"
        },
        "Building N-NA": {
          "displayName": "South",
          "destination": "Building N-NA"
        },
        "Building N-N": {
          "displayName": "North",
          "destination": "Building N-N"
        },
        "Building N-NK": {
          "displayName": "East",
          "destination": "Building N-NK"
        },
        "Building N-ND": {
          "displayName": "West",
          "destination": "Building N-ND"
        },
        "Building N-NC": {
          "displayName": "SouthEast",
          "destination": "Building N-NC"
        },
        "Building N-NE": {
          "displayName": "NorthWest",
          "destination": "Building N-NE"
        },
        "Building N-NB": {
          "displayName": "SouthWest",
          "destination": "Building N-NB"
        },
        "Building N-NX": {
          "displayName": "NorthEast",
          "destination": "Building N-NX"
        }
      }
    },
    "Building P-PZ": {
      "firstVisit": true,
      "displayName": "Fiction and juvenile belles lettres",
      "description": "Description for \u201cFiction and juvenile belles lettres Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building P"
        }
      }
    },
    "Building P-PR": {
      "firstVisit": true,
      "displayName": "English",
      "description": "Description for \u201cEnglish Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building P"
        }
      }
    },
    "Building P-PS": {
      "firstVisit": true,
      "displayName": "American literature",
      "description": "Description for \u201cAmerican literature Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building P"
        }
      }
    },
    "Building P-PQ": {
      "firstVisit": true,
      "displayName": "French literature",
      "description": "Description for \u201cFrench literature Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building P"
        }
      }
    },
    "Building P-PE": {
      "firstVisit": true,
      "displayName": "English",
      "description": "Description for \u201cEnglish Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building P"
        }
      }
    },
    "Building P-PN": {
      "firstVisit": true,
      "displayName": "Literature (General)",
      "description": "Description for \u201cLiterature (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building P"
        }
      }
    },
    "Building P-PT": {
      "firstVisit": true,
      "displayName": "German literature",
      "description": "Description for \u201cGerman literature Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building P"
        }
      }
    },
    "Building P-PA": {
      "firstVisit": true,
      "displayName": "Greek literature",
      "description": "Description for \u201cGreek literature Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building P"
        }
      }
    },
    "Building P": {
      "firstVisit": true,
      "displayName": "\u201cLanguage and Literature Building\u201d Main Lobby",
      "description": "There are 19 rooms throughout this building in 3 floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[  South  ] \u201cFiction and juvenile belles lettres Room\u201d\n[  North  ] \u201cEnglish Room\u201d\n[  East   ] \u201cAmerican literature Room\u201d\n[  West   ] \u201cFrench literature Room\u201d\n[SouthEast] \u201cEnglish Room\u201d\n[NorthWest] \u201cLiterature (General) Room\u201d\n[SouthWest] \u201cGerman literature Room\u201d\n[NorthEast] \u201cGreek literature Room\u201d\n[  Up     ] 2nd floor\n[  Exit   ] Main Library Grounds Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "Building P": {
          "displayName": "Exit",
          "destination": "MAIN"
        },
        "up": {
          "displayName": "Up",
          "destination": "2_Building P"
        },
        "Building P-PZ": {
          "displayName": "South",
          "destination": "Building P-PZ"
        },
        "Building P-PR": {
          "displayName": "North",
          "destination": "Building P-PR"
        },
        "Building P-PS": {
          "displayName": "East",
          "destination": "Building P-PS"
        },
        "Building P-PQ": {
          "displayName": "West",
          "destination": "Building P-PQ"
        },
        "Building P-PE": {
          "displayName": "SouthEast",
          "destination": "Building P-PE"
        },
        "Building P-PN": {
          "displayName": "NorthWest",
          "destination": "Building P-PN"
        },
        "Building P-PT": {
          "displayName": "SouthWest",
          "destination": "Building P-PT"
        },
        "Building P-PA": {
          "displayName": "NorthEast",
          "destination": "Building P-PA"
        }
      }
    },
    "Building P-PC": {
      "firstVisit": true,
      "displayName": "Romance",
      "description": "Description for \u201cRomance Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building P"
        }
      }
    },
    "Building P-PK": {
      "firstVisit": true,
      "displayName": "Indo-Iranian philology and literature",
      "description": "Description for \u201cIndo-Iranian philology and literature Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building P"
        }
      }
    },
    "Building P-P": {
      "firstVisit": true,
      "displayName": "Philology.    Linguistics",
      "description": "Description for \u201cPhilology.    Linguistics Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building P"
        }
      }
    },
    "Building P-PF": {
      "firstVisit": true,
      "displayName": "West Germanic",
      "description": "Description for \u201cWest Germanic Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building P"
        }
      }
    },
    "Building P-PJ": {
      "firstVisit": true,
      "displayName": "Oriental philology and literature",
      "description": "Description for \u201cOriental philology and literature Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building P"
        }
      }
    },
    "Building P-PD": {
      "firstVisit": true,
      "displayName": "Germanic",
      "description": "Description for \u201cGermanic Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building P"
        }
      }
    },
    "Building P-PG": {
      "firstVisit": true,
      "displayName": "Slavic.    Baltic.    Albanian",
      "description": "Description for \u201cSlavic.    Baltic.    Albanian Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building P"
        }
      }
    },
    "Building P-PH": {
      "firstVisit": true,
      "displayName": "Uralic.    Basque",
      "description": "Description for \u201cUralic.    Basque Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building P"
        }
      }
    },
    "2_Building P": {
      "firstVisit": true,
      "displayName": "\u201cLanguage and Literature Building\u201d, 2nd Floor",
      "description": "You are in the 2nd floor. There are 8 rooms:\n\n[  South  ] \u201cRomance Room\u201d\n[  North  ] \u201cIndo-Iranian philology and literature Room\u201d\n[  East   ] \u201cPhilology.    Linguistics Room\u201d\n[  West   ] \u201cWest Germanic Room\u201d\n[SouthEast] \u201cOriental philology and literature Room\u201d\n[NorthWest] \u201cGermanic Room\u201d\n[SouthWest] \u201cSlavic.    Baltic.    Albanian Room\u201d\n[NorthEast] \u201cUralic.    Basque Room\u201d\n[  Down   ] 1st floor\n[  Up     ] 3rd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building P-PC": {
          "displayName": "South",
          "destination": "Building P-PC"
        },
        "Building P-PK": {
          "displayName": "North",
          "destination": "Building P-PK"
        },
        "Building P-P": {
          "displayName": "East",
          "destination": "Building P-P"
        },
        "Building P-PF": {
          "displayName": "West",
          "destination": "Building P-PF"
        },
        "Building P-PJ": {
          "displayName": "SouthEast",
          "destination": "Building P-PJ"
        },
        "Building P-PD": {
          "displayName": "NorthWest",
          "destination": "Building P-PD"
        },
        "Building P-PG": {
          "displayName": "SouthWest",
          "destination": "Building P-PG"
        },
        "Building P-PH": {
          "displayName": "NorthEast",
          "destination": "Building P-PH"
        },
        "down": {
          "displayName": "Down",
          "destination": "Building P"
        },
        "up": {
          "displayName": "Up",
          "destination": "3_Building P"
        }
      }
    },
    "Building P-PL": {
      "firstVisit": true,
      "displayName": "Languages of Eastern Asia, Africa, Oceania",
      "description": "Description for \u201cLanguages of Eastern Asia, Africa, Oceania Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_Building P"
        }
      }
    },
    "Building P-PB": {
      "firstVisit": true,
      "displayName": "Modern languages.    Celtic languages",
      "description": "Description for \u201cModern languages.    Celtic languages Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_Building P"
        }
      }
    },
    "Building P-PM": {
      "firstVisit": true,
      "displayName": "Hyperborean, Indian, and artificial languages",
      "description": "Description for \u201cHyperborean, Indian, and artificial languages Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_Building P"
        }
      }
    },
    "3_Building P": {
      "firstVisit": true,
      "displayName": "\u201cLanguage and Literature Building\u201d, 3rd Floor",
      "description": "You are in the 3rd floor. There are 3 rooms:\n\n[  South  ] \u201cLanguages of Eastern Asia, Africa, Oceania Room\u201d\n[  North  ] \u201cModern languages.    Celtic languages Room\u201d\n[  East   ] \u201cHyperborean, Indian, and artificial languages Room\u201d\n[  Down   ] 2nd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building P-PL": {
          "displayName": "South",
          "destination": "Building P-PL"
        },
        "Building P-PB": {
          "displayName": "North",
          "destination": "Building P-PB"
        },
        "Building P-PM": {
          "displayName": "East",
          "destination": "Building P-PM"
        },
        "down": {
          "displayName": "Down",
          "destination": "2_Building P"
        }
      }
    },
    "Building Q-QR": {
      "firstVisit": true,
      "displayName": "Microbiology",
      "description": "Description for \u201cMicrobiology Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building Q"
        }
      }
    },
    "Building Q-QK": {
      "firstVisit": true,
      "displayName": "Botany",
      "description": "Description for \u201cBotany Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building Q"
        }
      }
    },
    "Building Q-QL": {
      "firstVisit": true,
      "displayName": "Zoology",
      "description": "Description for \u201cZoology Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building Q"
        }
      }
    },
    "Building Q-QB": {
      "firstVisit": true,
      "displayName": "Astronomy",
      "description": "Description for \u201cAstronomy Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building Q"
        }
      }
    },
    "Building Q-QA": {
      "firstVisit": true,
      "displayName": "Mathematics",
      "description": "Description for \u201cMathematics Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building Q"
        }
      }
    },
    "Building Q-Q": {
      "firstVisit": true,
      "displayName": "Science (General)",
      "description": "Description for \u201cScience (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building Q"
        }
      }
    },
    "Building Q-QP": {
      "firstVisit": true,
      "displayName": "Physiology",
      "description": "Description for \u201cPhysiology Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building Q"
        }
      }
    },
    "Building Q-QH": {
      "firstVisit": true,
      "displayName": "Biology (General)",
      "description": "Description for \u201cBiology (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building Q"
        }
      }
    },
    "Building Q": {
      "firstVisit": true,
      "displayName": "\u201cScience Building\u201d Main Lobby",
      "description": "There are 12 rooms throughout this building in 2 floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[  South  ] \u201cMicrobiology Room\u201d\n[  North  ] \u201cBotany Room\u201d\n[  East   ] \u201cZoology Room\u201d\n[  West   ] \u201cAstronomy Room\u201d\n[SouthEast] \u201cMathematics Room\u201d\n[NorthWest] \u201cScience (General) Room\u201d\n[SouthWest] \u201cPhysiology Room\u201d\n[NorthEast] \u201cBiology (General) Room\u201d\n[  Up     ] 2nd floor\n[  Exit   ] Main Library Grounds Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "Building Q": {
          "displayName": "Exit",
          "destination": "MAIN"
        },
        "up": {
          "displayName": "Up",
          "destination": "2_Building Q"
        },
        "Building Q-QR": {
          "displayName": "South",
          "destination": "Building Q-QR"
        },
        "Building Q-QK": {
          "displayName": "North",
          "destination": "Building Q-QK"
        },
        "Building Q-QL": {
          "displayName": "East",
          "destination": "Building Q-QL"
        },
        "Building Q-QB": {
          "displayName": "West",
          "destination": "Building Q-QB"
        },
        "Building Q-QA": {
          "displayName": "SouthEast",
          "destination": "Building Q-QA"
        },
        "Building Q-Q": {
          "displayName": "NorthWest",
          "destination": "Building Q-Q"
        },
        "Building Q-QP": {
          "displayName": "SouthWest",
          "destination": "Building Q-QP"
        },
        "Building Q-QH": {
          "displayName": "NorthEast",
          "destination": "Building Q-QH"
        }
      }
    },
    "Building Q-QD": {
      "firstVisit": true,
      "displayName": "Chemistry",
      "description": "Description for \u201cChemistry Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building Q"
        }
      }
    },
    "Building Q-QE": {
      "firstVisit": true,
      "displayName": "Geology",
      "description": "Description for \u201cGeology Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building Q"
        }
      }
    },
    "Building Q-QC": {
      "firstVisit": true,
      "displayName": "Physics",
      "description": "Description for \u201cPhysics Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building Q"
        }
      }
    },
    "Building Q-QM": {
      "firstVisit": true,
      "displayName": "Human anatomy",
      "description": "Description for \u201cHuman anatomy Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building Q"
        }
      }
    },
    "2_Building Q": {
      "firstVisit": true,
      "displayName": "\u201cScience Building\u201d, 2nd Floor",
      "description": "You are in the 2nd floor. There are 4 rooms:\n\n[  South  ] \u201cChemistry Room\u201d\n[  North  ] \u201cGeology Room\u201d\n[  East   ] \u201cPhysics Room\u201d\n[  West   ] \u201cHuman anatomy Room\u201d\n[  Down   ] 1st floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building Q-QD": {
          "displayName": "South",
          "destination": "Building Q-QD"
        },
        "Building Q-QE": {
          "displayName": "North",
          "destination": "Building Q-QE"
        },
        "Building Q-QC": {
          "displayName": "East",
          "destination": "Building Q-QC"
        },
        "Building Q-QM": {
          "displayName": "West",
          "destination": "Building Q-QM"
        },
        "down": {
          "displayName": "Down",
          "destination": "Building Q"
        }
      }
    },
    "Building R-RX": {
      "firstVisit": true,
      "displayName": "Homeopathy",
      "description": "Description for \u201cHomeopathy Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building R"
        }
      }
    },
    "Building R-RA": {
      "firstVisit": true,
      "displayName": "Public aspects of medicine",
      "description": "Description for \u201cPublic aspects of medicine Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building R"
        }
      }
    },
    "Building R-RD": {
      "firstVisit": true,
      "displayName": "Surgery",
      "description": "Description for \u201cSurgery Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building R"
        }
      }
    },
    "Building R-RE": {
      "firstVisit": true,
      "displayName": "Ophthalmology",
      "description": "Description for \u201cOphthalmology Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building R"
        }
      }
    },
    "Building R-RC": {
      "firstVisit": true,
      "displayName": "Internal medicine",
      "description": "Description for \u201cInternal medicine Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building R"
        }
      }
    },
    "Building R-RG": {
      "firstVisit": true,
      "displayName": "Gynecology and obstetrics",
      "description": "Description for \u201cGynecology and obstetrics Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building R"
        }
      }
    },
    "Building R-RK": {
      "firstVisit": true,
      "displayName": "Dentistry",
      "description": "Description for \u201cDentistry Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building R"
        }
      }
    },
    "Building R-RJ": {
      "firstVisit": true,
      "displayName": "Pediatrics",
      "description": "Description for \u201cPediatrics Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building R"
        }
      }
    },
    "Building R": {
      "firstVisit": true,
      "displayName": "\u201cMedicine Building\u201d Main Lobby",
      "description": "There are 17 rooms throughout this building in 3 floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[  South  ] \u201cHomeopathy Room\u201d\n[  North  ] \u201cPublic aspects of medicine Room\u201d\n[  East   ] \u201cSurgery Room\u201d\n[  West   ] \u201cOphthalmology Room\u201d\n[SouthEast] \u201cInternal medicine Room\u201d\n[NorthWest] \u201cGynecology and obstetrics Room\u201d\n[SouthWest] \u201cDentistry Room\u201d\n[NorthEast] \u201cPediatrics Room\u201d\n[  Up     ] 2nd floor\n[  Exit   ] Main Library Grounds Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "Building R": {
          "displayName": "Exit",
          "destination": "MAIN"
        },
        "up": {
          "displayName": "Up",
          "destination": "2_Building R"
        },
        "Building R-RX": {
          "displayName": "South",
          "destination": "Building R-RX"
        },
        "Building R-RA": {
          "displayName": "North",
          "destination": "Building R-RA"
        },
        "Building R-RD": {
          "displayName": "East",
          "destination": "Building R-RD"
        },
        "Building R-RE": {
          "displayName": "West",
          "destination": "Building R-RE"
        },
        "Building R-RC": {
          "displayName": "SouthEast",
          "destination": "Building R-RC"
        },
        "Building R-RG": {
          "displayName": "NorthWest",
          "destination": "Building R-RG"
        },
        "Building R-RK": {
          "displayName": "SouthWest",
          "destination": "Building R-RK"
        },
        "Building R-RJ": {
          "displayName": "NorthEast",
          "destination": "Building R-RJ"
        }
      }
    },
    "Building R-RL": {
      "firstVisit": true,
      "displayName": "Dermatology",
      "description": "Description for \u201cDermatology Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building R"
        }
      }
    },
    "Building R-RS": {
      "firstVisit": true,
      "displayName": "Pharmacy and materia medica",
      "description": "Description for \u201cPharmacy and materia medica Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building R"
        }
      }
    },
    "Building R-RM": {
      "firstVisit": true,
      "displayName": "Therapeutics.    Pharmacology",
      "description": "Description for \u201cTherapeutics.    Pharmacology Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building R"
        }
      }
    },
    "Building R-R": {
      "firstVisit": true,
      "displayName": "Medicine (General)",
      "description": "Description for \u201cMedicine (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building R"
        }
      }
    },
    "Building R-RB": {
      "firstVisit": true,
      "displayName": "Pathology",
      "description": "Description for \u201cPathology Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building R"
        }
      }
    },
    "Building R-RF": {
      "firstVisit": true,
      "displayName": "Otorhinolaryngology",
      "description": "Description for \u201cOtorhinolaryngology Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building R"
        }
      }
    },
    "Building R-RZ": {
      "firstVisit": true,
      "displayName": "Other systems of medicine",
      "description": "Description for \u201cOther systems of medicine Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building R"
        }
      }
    },
    "Building R-RT": {
      "firstVisit": true,
      "displayName": "Nursing",
      "description": "Description for \u201cNursing Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building R"
        }
      }
    },
    "2_Building R": {
      "firstVisit": true,
      "displayName": "\u201cMedicine Building\u201d, 2nd Floor",
      "description": "You are in the 2nd floor. There are 8 rooms:\n\n[  South  ] \u201cDermatology Room\u201d\n[  North  ] \u201cPharmacy and materia medica Room\u201d\n[  East   ] \u201cTherapeutics.    Pharmacology Room\u201d\n[  West   ] \u201cMedicine (General) Room\u201d\n[SouthEast] \u201cPathology Room\u201d\n[NorthWest] \u201cOtorhinolaryngology Room\u201d\n[SouthWest] \u201cOther systems of medicine Room\u201d\n[NorthEast] \u201cNursing Room\u201d\n[  Down   ] 1st floor\n[  Up     ] 3rd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building R-RL": {
          "displayName": "South",
          "destination": "Building R-RL"
        },
        "Building R-RS": {
          "displayName": "North",
          "destination": "Building R-RS"
        },
        "Building R-RM": {
          "displayName": "East",
          "destination": "Building R-RM"
        },
        "Building R-R": {
          "displayName": "West",
          "destination": "Building R-R"
        },
        "Building R-RB": {
          "displayName": "SouthEast",
          "destination": "Building R-RB"
        },
        "Building R-RF": {
          "displayName": "NorthWest",
          "destination": "Building R-RF"
        },
        "Building R-RZ": {
          "displayName": "SouthWest",
          "destination": "Building R-RZ"
        },
        "Building R-RT": {
          "displayName": "NorthEast",
          "destination": "Building R-RT"
        },
        "down": {
          "displayName": "Down",
          "destination": "Building R"
        },
        "up": {
          "displayName": "Up",
          "destination": "3_Building R"
        }
      }
    },
    "Building R-RV": {
      "firstVisit": true,
      "displayName": "Botanic, Thomsonian, and eclectic medicine",
      "description": "Description for \u201cBotanic, Thomsonian, and eclectic medicine Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_Building R"
        }
      }
    },
    "3_Building R": {
      "firstVisit": true,
      "displayName": "\u201cMedicine Building\u201d, 3rd Floor",
      "description": "You are in the 3rd floor. There is 1 room:\n\n[  South  ] \u201cBotanic, Thomsonian, and eclectic medicine Room\u201d\n[  Down   ] 2nd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building R-RV": {
          "displayName": "South",
          "destination": "Building R-RV"
        },
        "down": {
          "displayName": "Down",
          "destination": "2_Building R"
        }
      }
    },
    "Building S-SF": {
      "firstVisit": true,
      "displayName": "Animal culture",
      "description": "Description for \u201cAnimal culture Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building S"
        }
      }
    },
    "Building S-S": {
      "firstVisit": true,
      "displayName": "Agriculture (General)",
      "description": "Description for \u201cAgriculture (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building S"
        }
      }
    },
    "Building S-SH": {
      "firstVisit": true,
      "displayName": "Aquaculture.    Fisheries.    Angling",
      "description": "Description for \u201cAquaculture.    Fisheries.    Angling Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building S"
        }
      }
    },
    "Building S-SB": {
      "firstVisit": true,
      "displayName": "Plant culture",
      "description": "Description for \u201cPlant culture Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building S"
        }
      }
    },
    "Building S-SK": {
      "firstVisit": true,
      "displayName": "Hunting sports",
      "description": "Description for \u201cHunting sports Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building S"
        }
      }
    },
    "Building S-SD": {
      "firstVisit": true,
      "displayName": "Forestry",
      "description": "Description for \u201cForestry Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building S"
        }
      }
    },
    "Building S": {
      "firstVisit": true,
      "displayName": "\u201cAgriculture Building\u201d Main Lobby",
      "description": "There are 6 rooms throughout this building. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[  South  ] \u201cAnimal culture Room\u201d\n[  North  ] \u201cAgriculture (General) Room\u201d\n[  East   ] \u201cAquaculture.    Fisheries.    Angling Room\u201d\n[  West   ] \u201cPlant culture Room\u201d\n[SouthEast] \u201cHunting sports Room\u201d\n[NorthWest] \u201cForestry Room\u201d\n[  Exit   ] Main Library Grounds Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "Building S": {
          "displayName": "Exit",
          "destination": "MAIN"
        },
        "Building S-SF": {
          "displayName": "South",
          "destination": "Building S-SF"
        },
        "Building S-S": {
          "displayName": "North",
          "destination": "Building S-S"
        },
        "Building S-SH": {
          "displayName": "East",
          "destination": "Building S-SH"
        },
        "Building S-SB": {
          "displayName": "West",
          "destination": "Building S-SB"
        },
        "Building S-SK": {
          "displayName": "SouthEast",
          "destination": "Building S-SK"
        },
        "Building S-SD": {
          "displayName": "NorthWest",
          "destination": "Building S-SD"
        }
      }
    },
    "Building T-TN": {
      "firstVisit": true,
      "displayName": "Mining engineering.    Metallurgy",
      "description": "Description for \u201cMining engineering.    Metallurgy Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building T"
        }
      }
    },
    "Building T-TR": {
      "firstVisit": true,
      "displayName": "Photography",
      "description": "Description for \u201cPhotography Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building T"
        }
      }
    },
    "Building T-TC": {
      "firstVisit": true,
      "displayName": "Hydraulic engineering",
      "description": "Description for \u201cHydraulic engineering Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building T"
        }
      }
    },
    "Building T-TD": {
      "firstVisit": true,
      "displayName": "Environmental technology.    Sanitary engineering",
      "description": "Description for \u201cEnvironmental technology.    Sanitary engineering Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building T"
        }
      }
    },
    "Building T-TX": {
      "firstVisit": true,
      "displayName": "Home economics",
      "description": "Description for \u201cHome economics Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building T"
        }
      }
    },
    "Building T-TP": {
      "firstVisit": true,
      "displayName": "Chemical technology",
      "description": "Description for \u201cChemical technology Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building T"
        }
      }
    },
    "Building T-TK": {
      "firstVisit": true,
      "displayName": "Electrical engineering.    Electronics.    Nuclear",
      "description": "Description for \u201cElectrical engineering.    Electronics.    Nuclear Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building T"
        }
      }
    },
    "Building T-TA": {
      "firstVisit": true,
      "displayName": "Engineering (General).    Civil engineering (General)",
      "description": "Description for \u201cEngineering (General).    Civil engineering (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building T"
        }
      }
    },
    "Building T": {
      "firstVisit": true,
      "displayName": "\u201cTechnology Building\u201d Main Lobby",
      "description": "There are 17 rooms throughout this building in 3 floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[  South  ] \u201cMining engineering.    Metallurgy Room\u201d\n[  North  ] \u201cPhotography Room\u201d\n[  East   ] \u201cHydraulic engineering Room\u201d\n[  West   ] \u201cEnvironmental technology.    Sanitary engineering Room\u201d\n[SouthEast] \u201cHome economics Room\u201d\n[NorthWest] \u201cChemical technology Room\u201d\n[SouthWest] \u201cElectrical engineering.    Electronics.    Nuclear Room\u201d\n[NorthEast] \u201cEngineering (General).    Civil engineering (General) Room\u201d\n[  Up     ] 2nd floor\n[  Exit   ] Main Library Grounds Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "Building T": {
          "displayName": "Exit",
          "destination": "MAIN"
        },
        "up": {
          "displayName": "Up",
          "destination": "2_Building T"
        },
        "Building T-TN": {
          "displayName": "South",
          "destination": "Building T-TN"
        },
        "Building T-TR": {
          "displayName": "North",
          "destination": "Building T-TR"
        },
        "Building T-TC": {
          "displayName": "East",
          "destination": "Building T-TC"
        },
        "Building T-TD": {
          "displayName": "West",
          "destination": "Building T-TD"
        },
        "Building T-TX": {
          "displayName": "SouthEast",
          "destination": "Building T-TX"
        },
        "Building T-TP": {
          "displayName": "NorthWest",
          "destination": "Building T-TP"
        },
        "Building T-TK": {
          "displayName": "SouthWest",
          "destination": "Building T-TK"
        },
        "Building T-TA": {
          "displayName": "NorthEast",
          "destination": "Building T-TA"
        }
      }
    },
    "Building T-TS": {
      "firstVisit": true,
      "displayName": "Manufactures",
      "description": "Description for \u201cManufactures Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building T"
        }
      }
    },
    "Building T-TJ": {
      "firstVisit": true,
      "displayName": "Mechanical engineering and machinery",
      "description": "Description for \u201cMechanical engineering and machinery Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building T"
        }
      }
    },
    "Building T-TT": {
      "firstVisit": true,
      "displayName": "Handicrafts.    Arts and crafts",
      "description": "Description for \u201cHandicrafts.    Arts and crafts Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building T"
        }
      }
    },
    "Building T-T": {
      "firstVisit": true,
      "displayName": "Technology (General)",
      "description": "Description for \u201cTechnology (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building T"
        }
      }
    },
    "Building T-TH": {
      "firstVisit": true,
      "displayName": "Building construction",
      "description": "Description for \u201cBuilding construction Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building T"
        }
      }
    },
    "Building T-TF": {
      "firstVisit": true,
      "displayName": "Railroad engineering and operation",
      "description": "Description for \u201cRailroad engineering and operation Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building T"
        }
      }
    },
    "Building T-TL": {
      "firstVisit": true,
      "displayName": "Motor vehicles.    Aeronautics.    Astronautics",
      "description": "Description for \u201cMotor vehicles.    Aeronautics.    Astronautics Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building T"
        }
      }
    },
    "Building T-TG": {
      "firstVisit": true,
      "displayName": "Bridge engineering",
      "description": "Description for \u201cBridge engineering Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building T"
        }
      }
    },
    "2_Building T": {
      "firstVisit": true,
      "displayName": "\u201cTechnology Building\u201d, 2nd Floor",
      "description": "You are in the 2nd floor. There are 8 rooms:\n\n[  South  ] \u201cManufactures Room\u201d\n[  North  ] \u201cMechanical engineering and machinery Room\u201d\n[  East   ] \u201cHandicrafts.    Arts and crafts Room\u201d\n[  West   ] \u201cTechnology (General) Room\u201d\n[SouthEast] \u201cBuilding construction Room\u201d\n[NorthWest] \u201cRailroad engineering and operation Room\u201d\n[SouthWest] \u201cMotor vehicles.    Aeronautics.    Astronautics Room\u201d\n[NorthEast] \u201cBridge engineering Room\u201d\n[  Down   ] 1st floor\n[  Up     ] 3rd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building T-TS": {
          "displayName": "South",
          "destination": "Building T-TS"
        },
        "Building T-TJ": {
          "displayName": "North",
          "destination": "Building T-TJ"
        },
        "Building T-TT": {
          "displayName": "East",
          "destination": "Building T-TT"
        },
        "Building T-T": {
          "displayName": "West",
          "destination": "Building T-T"
        },
        "Building T-TH": {
          "displayName": "SouthEast",
          "destination": "Building T-TH"
        },
        "Building T-TF": {
          "displayName": "NorthWest",
          "destination": "Building T-TF"
        },
        "Building T-TL": {
          "displayName": "SouthWest",
          "destination": "Building T-TL"
        },
        "Building T-TG": {
          "displayName": "NorthEast",
          "destination": "Building T-TG"
        },
        "down": {
          "displayName": "Down",
          "destination": "Building T"
        },
        "up": {
          "displayName": "Up",
          "destination": "3_Building T"
        }
      }
    },
    "Building T-TE": {
      "firstVisit": true,
      "displayName": "Highway engineering.    Roads and pavements",
      "description": "Description for \u201cHighway engineering.    Roads and pavements Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_Building T"
        }
      }
    },
    "3_Building T": {
      "firstVisit": true,
      "displayName": "\u201cTechnology Building\u201d, 3rd Floor",
      "description": "You are in the 3rd floor. There is 1 room:\n\n[  South  ] \u201cHighway engineering.    Roads and pavements Room\u201d\n[  Down   ] 2nd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building T-TE": {
          "displayName": "South",
          "destination": "Building T-TE"
        },
        "down": {
          "displayName": "Down",
          "destination": "2_Building T"
        }
      }
    },
    "Building U-U": {
      "firstVisit": true,
      "displayName": "Military science (General)",
      "description": "Description for \u201cMilitary science (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building U"
        }
      }
    },
    "Building U-UG": {
      "firstVisit": true,
      "displayName": "Air forces.    Air warfare",
      "description": "Description for \u201cAir forces.    Air warfare Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building U"
        }
      }
    },
    "Building U-UA": {
      "firstVisit": true,
      "displayName": "Armies: Organization, distribution, military situation",
      "description": "Description for \u201cArmies: Organization, distribution, military situation Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building U"
        }
      }
    },
    "Building U-UB": {
      "firstVisit": true,
      "displayName": "Military administration",
      "description": "Description for \u201cMilitary administration Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building U"
        }
      }
    },
    "Building U-UD": {
      "firstVisit": true,
      "displayName": "Infantry",
      "description": "Description for \u201cInfantry Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building U"
        }
      }
    },
    "Building U-UF": {
      "firstVisit": true,
      "displayName": "Artillery",
      "description": "Description for \u201cArtillery Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building U"
        }
      }
    },
    "Building U-UC": {
      "firstVisit": true,
      "displayName": "Maintenance and transportation",
      "description": "Description for \u201cMaintenance and transportation Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building U"
        }
      }
    },
    "Building U-UH": {
      "firstVisit": true,
      "displayName": "Other services",
      "description": "Description for \u201cOther services Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building U"
        }
      }
    },
    "Building U": {
      "firstVisit": true,
      "displayName": "\u201cMilitary Science Building\u201d Main Lobby",
      "description": "There are 9 rooms throughout this building in 2 floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[  South  ] \u201cMilitary science (General) Room\u201d\n[  North  ] \u201cAir forces.    Air warfare Room\u201d\n[  East   ] \u201cArmies: Organization, distribution, military situation Room\u201d\n[  West   ] \u201cMilitary administration Room\u201d\n[SouthEast] \u201cInfantry Room\u201d\n[NorthWest] \u201cArtillery Room\u201d\n[SouthWest] \u201cMaintenance and transportation Room\u201d\n[NorthEast] \u201cOther services Room\u201d\n[  Up     ] 2nd floor\n[  Exit   ] Main Library Grounds Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "Building U": {
          "displayName": "Exit",
          "destination": "MAIN"
        },
        "up": {
          "displayName": "Up",
          "destination": "2_Building U"
        },
        "Building U-U": {
          "displayName": "South",
          "destination": "Building U-U"
        },
        "Building U-UG": {
          "displayName": "North",
          "destination": "Building U-UG"
        },
        "Building U-UA": {
          "displayName": "East",
          "destination": "Building U-UA"
        },
        "Building U-UB": {
          "displayName": "West",
          "destination": "Building U-UB"
        },
        "Building U-UD": {
          "displayName": "SouthEast",
          "destination": "Building U-UD"
        },
        "Building U-UF": {
          "displayName": "NorthWest",
          "destination": "Building U-UF"
        },
        "Building U-UC": {
          "displayName": "SouthWest",
          "destination": "Building U-UC"
        },
        "Building U-UH": {
          "displayName": "NorthEast",
          "destination": "Building U-UH"
        }
      }
    },
    "Building U-UE": {
      "firstVisit": true,
      "displayName": "Cavalry.    Armor",
      "description": "Description for \u201cCavalry.    Armor Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building U"
        }
      }
    },
    "2_Building U": {
      "firstVisit": true,
      "displayName": "\u201cMilitary Science Building\u201d, 2nd Floor",
      "description": "You are in the 2nd floor. There is 1 room:\n\n[  South  ] \u201cCavalry.    Armor Room\u201d\n[  Down   ] 1st floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building U-UE": {
          "displayName": "South",
          "destination": "Building U-UE"
        },
        "down": {
          "displayName": "Down",
          "destination": "Building U"
        }
      }
    },
    "Building V-VA": {
      "firstVisit": true,
      "displayName": "Navies: Organization, distribution, naval situation",
      "description": "Description for \u201cNavies: Organization, distribution, naval situation Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building V"
        }
      }
    },
    "Building V-VM": {
      "firstVisit": true,
      "displayName": "Naval architecture.    Shipbuilding.    Marine engineering",
      "description": "Description for \u201cNaval architecture.    Shipbuilding.    Marine engineering Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building V"
        }
      }
    },
    "Building V-VK": {
      "firstVisit": true,
      "displayName": "Navigation.    Merchant marine",
      "description": "Description for \u201cNavigation.    Merchant marine Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building V"
        }
      }
    },
    "Building V-VG": {
      "firstVisit": true,
      "displayName": "Minor services of navies",
      "description": "Description for \u201cMinor services of navies Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building V"
        }
      }
    },
    "Building V-V": {
      "firstVisit": true,
      "displayName": "Naval science (General)",
      "description": "Description for \u201cNaval science (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building V"
        }
      }
    },
    "Building V-VB": {
      "firstVisit": true,
      "displayName": "Naval administration",
      "description": "Description for \u201cNaval administration Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building V"
        }
      }
    },
    "Building V-VE": {
      "firstVisit": true,
      "displayName": "Marines",
      "description": "Description for \u201cMarines Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building V"
        }
      }
    },
    "Building V-VF": {
      "firstVisit": true,
      "displayName": "Naval ordnance",
      "description": "Description for \u201cNaval ordnance Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building V"
        }
      }
    },
    "Building V": {
      "firstVisit": true,
      "displayName": "\u201cNaval Science Building\u201d Main Lobby",
      "description": "There are 10 rooms throughout this building in 2 floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[  South  ] \u201cNavies: Organization, distribution, naval situation Room\u201d\n[  North  ] \u201cNaval architecture.    Shipbuilding.    Marine engineering Room\u201d\n[  East   ] \u201cNavigation.    Merchant marine Room\u201d\n[  West   ] \u201cMinor services of navies Room\u201d\n[SouthEast] \u201cNaval science (General) Room\u201d\n[NorthWest] \u201cNaval administration Room\u201d\n[SouthWest] \u201cMarines Room\u201d\n[NorthEast] \u201cNaval ordnance Room\u201d\n[  Up     ] 2nd floor\n[  Exit   ] Main Library Grounds Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "Building V": {
          "displayName": "Exit",
          "destination": "MAIN"
        },
        "up": {
          "displayName": "Up",
          "destination": "2_Building V"
        },
        "Building V-VA": {
          "displayName": "South",
          "destination": "Building V-VA"
        },
        "Building V-VM": {
          "displayName": "North",
          "destination": "Building V-VM"
        },
        "Building V-VK": {
          "displayName": "East",
          "destination": "Building V-VK"
        },
        "Building V-VG": {
          "displayName": "West",
          "destination": "Building V-VG"
        },
        "Building V-V": {
          "displayName": "SouthEast",
          "destination": "Building V-V"
        },
        "Building V-VB": {
          "displayName": "NorthWest",
          "destination": "Building V-VB"
        },
        "Building V-VE": {
          "displayName": "SouthWest",
          "destination": "Building V-VE"
        },
        "Building V-VF": {
          "displayName": "NorthEast",
          "destination": "Building V-VF"
        }
      }
    },
    "Building V-VC": {
      "firstVisit": true,
      "displayName": "Naval maintenance",
      "description": "Description for \u201cNaval maintenance Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building V"
        }
      }
    },
    "Building V-VD": {
      "firstVisit": true,
      "displayName": "Naval personnel",
      "description": "Description for \u201cNaval personnel Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_Building V"
        }
      }
    },
    "2_Building V": {
      "firstVisit": true,
      "displayName": "\u201cNaval Science Building\u201d, 2nd Floor",
      "description": "You are in the 2nd floor. There are 2 rooms:\n\n[  South  ] \u201cNaval maintenance Room\u201d\n[  North  ] \u201cNaval personnel Room\u201d\n[  Down   ] 1st floor",
      "interactables": {},
      "items": {},
      "exits": {
        "Building V-VC": {
          "displayName": "South",
          "destination": "Building V-VC"
        },
        "Building V-VD": {
          "displayName": "North",
          "destination": "Building V-VD"
        },
        "down": {
          "displayName": "Down",
          "destination": "Building V"
        }
      }
    },
    "Building Z-Z": {
      "firstVisit": true,
      "displayName": "National bibliography",
      "description": "Description for \u201cNational bibliography Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building Z"
        }
      }
    },
    "Building Z-ZA": {
      "firstVisit": true,
      "displayName": "Information resources (General)",
      "description": "Description for \u201cInformation resources (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Building Z"
        }
      }
    },
    "Building Z": {
      "firstVisit": true,
      "displayName": "\u201cBibliography, Library Science Building\u201d Main Lobby",
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n\n[  South  ] \u201cNational bibliography Room\u201d\n[  North  ] \u201cInformation resources (General) Room\u201d\n[  Exit   ] Main Library Grounds Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "Building Z": {
          "displayName": "Exit",
          "destination": "MAIN"
        },
        "Building Z-Z": {
          "displayName": "South",
          "destination": "Building Z-Z"
        },
        "Building Z-ZA": {
          "displayName": "North",
          "destination": "Building Z-ZA"
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
