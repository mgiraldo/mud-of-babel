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
    "Plaza-A": {
      "firstVisit": true,
      "displayName": "General Works Plaza",
      "description": "You are in an plaza surrounded by 10 buildings conforming General Works.\nThe buildings are accessible via their classification code, visible above the main door:\n\n[ A-AC  ] (1 story) \u201cCollections.  Series.  Collected works Building\u201d\n[ A-AE  ] (1 story) \u201cEncyclopedias Building\u201d\n[ A-AG  ] (1 story) \u201cDictionaries and other general reference works Building\u201d\n[ A-AZ  ] (1 story) \u201cHistory of scholarship and learning.  The humanities Building\u201d\n[ A-AM  ] (1 story) \u201cMuseums.  Collectors and collecting Building\u201d\n[ A-AS  ] (1 story) \u201cAcademies and learned societies Building\u201d\n[ A-AP  ] (1 story) \u201cPeriodicals Building\u201d\n[ A-AY  ] (1 story) \u201cYearbooks.  Almanacs.  Directories Building\u201d\n[ A-AI  ] (1 story) \u201cIndexes Building\u201d\n[ A-AN  ] (1 story) \u201cNewspapers Building\u201d\n[ Main  ] Main Library Grounds",
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
        },
        "main": {
          "displayName": "Main",
          "destination": "MAIN"
        }
      }
    },
    "A-AC-AC1-195": {
      "firstVisit": true,
      "displayName": "Collections of monographs, essays, etc.",
      "description": "Description for \u201cCollections of monographs, essays, etc. Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
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
      "description": "Description for \u201cCollections.  Series.  Collected works Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
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
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n\n[  South  ] \u201cCollections of monographs, essays, etc. Room\u201d\n[  North  ] \u201cCollections.  Series.  Collected works Room\u201d\n[  Exit   ] General Works Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "A-AC": {
          "displayName": "Exit",
          "destination": "Plaza-A"
        },
        "A-AC-AC1-195": {
          "displayName": "South",
          "destination": "A-AC-AC1-195"
        },
        "A-AC-AC1-999": {
          "displayName": "North",
          "destination": "A-AC-AC1-999"
        }
      }
    },
    "A-AE-AE1-90": {
      "firstVisit": true,
      "displayName": "Encyclopedias",
      "description": "Description for \u201cEncyclopedias Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cEncyclopedias Room\u201d\n[  Exit   ] General Works Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "A-AE": {
          "displayName": "Exit",
          "destination": "Plaza-A"
        },
        "A-AE-AE1-90": {
          "displayName": "South",
          "destination": "A-AE-AE1-90"
        }
      }
    },
    "A-AG-AG2-600": {
      "firstVisit": true,
      "displayName": "Dictionaries and other general reference works",
      "description": "Description for \u201cDictionaries and other general reference works Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cDictionaries and other general reference works Room\u201d\n[  Exit   ] General Works Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "A-AG": {
          "displayName": "Exit",
          "destination": "Plaza-A"
        },
        "A-AG-AG2-600": {
          "displayName": "South",
          "destination": "A-AG-AG2-600"
        }
      }
    },
    "A-AZ-AZ20-999": {
      "firstVisit": true,
      "displayName": "History of scholarship and learning.  The humanities",
      "description": "Description for \u201cHistory of scholarship and learning.  The humanities Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cHistory of scholarship and learning.  The humanities Room\u201d\n[  Exit   ] General Works Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "A-AZ": {
          "displayName": "Exit",
          "destination": "Plaza-A"
        },
        "A-AZ-AZ20-999": {
          "displayName": "South",
          "destination": "A-AZ-AZ20-999"
        }
      }
    },
    "A-AM-AM1-501": {
      "firstVisit": true,
      "displayName": "Museums.  Collectors and collecting",
      "description": "Description for \u201cMuseums.  Collectors and collecting Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cMuseums.  Collectors and collecting Room\u201d\n[  Exit   ] General Works Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "A-AM": {
          "displayName": "Exit",
          "destination": "Plaza-A"
        },
        "A-AM-AM1-501": {
          "displayName": "South",
          "destination": "A-AM-AM1-501"
        }
      }
    },
    "A-AS-AS1-945": {
      "firstVisit": true,
      "displayName": "Academies and learned societies",
      "description": "Description for \u201cAcademies and learned societies Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cAcademies and learned societies Room\u201d\n[  Exit   ] General Works Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "A-AS": {
          "displayName": "Exit",
          "destination": "Plaza-A"
        },
        "A-AS-AS1-945": {
          "displayName": "South",
          "destination": "A-AS-AS1-945"
        }
      }
    },
    "A-AP-AP1-271": {
      "firstVisit": true,
      "displayName": "Periodicals",
      "description": "Description for \u201cPeriodicals Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cPeriodicals Room\u201d\n[  Exit   ] General Works Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "A-AP": {
          "displayName": "Exit",
          "destination": "Plaza-A"
        },
        "A-AP-AP1-271": {
          "displayName": "South",
          "destination": "A-AP-AP1-271"
        }
      }
    },
    "A-AY-AY10-2001": {
      "firstVisit": true,
      "displayName": "Yearbooks.  Almanacs.  Directories",
      "description": "Description for \u201cYearbooks.  Almanacs.  Directories Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cYearbooks.  Almanacs.  Directories Room\u201d\n[  Exit   ] General Works Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "A-AY": {
          "displayName": "Exit",
          "destination": "Plaza-A"
        },
        "A-AY-AY10-2001": {
          "displayName": "South",
          "destination": "A-AY-AY10-2001"
        }
      }
    },
    "A-AI-AI1-21": {
      "firstVisit": true,
      "displayName": "Indexes",
      "description": "Description for \u201cIndexes Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cIndexes Room\u201d\n[  Exit   ] General Works Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "A-AI": {
          "displayName": "Exit",
          "destination": "Plaza-A"
        },
        "A-AI-AI1-21": {
          "displayName": "South",
          "destination": "A-AI-AI1-21"
        }
      }
    },
    "A-AN-AN": {
      "firstVisit": true,
      "displayName": "Newspapers",
      "description": "Description for \u201cNewspapers Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cNewspapers Room\u201d\n[  Exit   ] General Works Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "A-AN": {
          "displayName": "Exit",
          "destination": "Plaza-A"
        },
        "A-AN-AN": {
          "displayName": "South",
          "destination": "A-AN-AN"
        }
      }
    },
    "Plaza-B": {
      "firstVisit": true,
      "displayName": "Philosophy, Psychology, Religion Plaza",
      "description": "You are in an plaza surrounded by 15 buildings conforming Philosophy, Psychology, Religion.\nThe buildings are accessible via their classification code, visible above the main door:\n\n[ B-BV  ] (1 story) \u201cPractical Theology Building\u201d\n[ B-BJ  ] (1 story) \u201cEthics Building\u201d\n[ B-BX  ] (1 story) \u201cChristian Denominations Building\u201d\n[ B-BF  ] (1 story) \u201cPsychology Building\u201d\n[ B-BS  ] (1 story) \u201cThe Bible Building\u201d\n[ B-BT  ] (1 story) \u201cDoctrinal Theology Building\u201d\n[ B-B   ] (1 story) \u201cPhilosophy (General) Building\u201d\n[ B-BR  ] (1 story) \u201cChristianity Building\u201d\n[ B-BL  ] (1 story) \u201cReligions.  Mythology.  Rationalism Building\u201d\n[ B-BP  ] (1 story) \u201cIslam.  Bahai Faith.  Theosophy, etc. Building\u201d\n[ B-BM  ] (1 story) \u201cJudaism Building\u201d\n[ B-BC  ] (1 story) \u201cLogic Building\u201d\n[ B-BQ  ] (1 story) \u201cBuddhism Building\u201d\n[ B-BD  ] (1 story) \u201cSpeculative philosophy Building\u201d\n[ B-BH  ] (1 story) \u201cAesthetics Building\u201d\n[ Main  ] Main Library Grounds",
      "interactables": {},
      "items": {},
      "exits": {
        "B-BV": {
          "displayName": "B-BV",
          "destination": "B-BV"
        },
        "B-BJ": {
          "displayName": "B-BJ",
          "destination": "B-BJ"
        },
        "B-BX": {
          "displayName": "B-BX",
          "destination": "B-BX"
        },
        "B-BF": {
          "displayName": "B-BF",
          "destination": "B-BF"
        },
        "B-BS": {
          "displayName": "B-BS",
          "destination": "B-BS"
        },
        "B-BT": {
          "displayName": "B-BT",
          "destination": "B-BT"
        },
        "B-B": {
          "displayName": "B-B",
          "destination": "B-B"
        },
        "B-BR": {
          "displayName": "B-BR",
          "destination": "B-BR"
        },
        "B-BL": {
          "displayName": "B-BL",
          "destination": "B-BL"
        },
        "B-BP": {
          "displayName": "B-BP",
          "destination": "B-BP"
        },
        "B-BM": {
          "displayName": "B-BM",
          "destination": "B-BM"
        },
        "B-BC": {
          "displayName": "B-BC",
          "destination": "B-BC"
        },
        "B-BQ": {
          "displayName": "B-BQ",
          "destination": "B-BQ"
        },
        "B-BD": {
          "displayName": "B-BD",
          "destination": "B-BD"
        },
        "B-BH": {
          "displayName": "B-BH",
          "destination": "B-BH"
        },
        "main": {
          "displayName": "Main",
          "destination": "MAIN"
        }
      }
    },
    "B-BV-BV1-5099": {
      "firstVisit": true,
      "displayName": "Practical Theology",
      "description": "Description for \u201cPractical Theology Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "B-BV"
        }
      }
    },
    "B-BV": {
      "firstVisit": true,
      "displayName": "\u201cPractical Theology Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cPractical Theology Room\u201d\n[  Exit   ] Philosophy, Psychology, Religion Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "B-BV": {
          "displayName": "Exit",
          "destination": "Plaza-B"
        },
        "B-BV-BV1-5099": {
          "displayName": "South",
          "destination": "B-BV-BV1-5099"
        }
      }
    },
    "B-BJ-BJ1801-2195": {
      "firstVisit": true,
      "displayName": "Social usages.  Etiquette",
      "description": "Description for \u201cSocial usages.  Etiquette Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "B-BJ"
        }
      }
    },
    "B-BJ-BJ1-1725": {
      "firstVisit": true,
      "displayName": "Ethics",
      "description": "Description for \u201cEthics Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "B-BJ"
        }
      }
    },
    "B-BJ": {
      "firstVisit": true,
      "displayName": "\u201cEthics Building\u201d Main Lobby",
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n\n[  South  ] \u201cSocial usages.  Etiquette Room\u201d\n[  North  ] \u201cEthics Room\u201d\n[  Exit   ] Philosophy, Psychology, Religion Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "B-BJ": {
          "displayName": "Exit",
          "destination": "Plaza-B"
        },
        "B-BJ-BJ1801-2195": {
          "displayName": "South",
          "destination": "B-BJ-BJ1801-2195"
        },
        "B-BJ-BJ1-1725": {
          "displayName": "North",
          "destination": "B-BJ-BJ1-1725"
        }
      }
    },
    "B-BX-BX1-9999": {
      "firstVisit": true,
      "displayName": "Christian Denominations",
      "description": "Description for \u201cChristian Denominations Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "B-BX"
        }
      }
    },
    "B-BX": {
      "firstVisit": true,
      "displayName": "\u201cChristian Denominations Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cChristian Denominations Room\u201d\n[  Exit   ] Philosophy, Psychology, Religion Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "B-BX": {
          "displayName": "Exit",
          "destination": "Plaza-B"
        },
        "B-BX-BX1-9999": {
          "displayName": "South",
          "destination": "B-BX-BX1-9999"
        }
      }
    },
    "B-BF-BF1-990": {
      "firstVisit": true,
      "displayName": "Psychology",
      "description": "Description for \u201cPsychology Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "B-BF"
        }
      }
    },
    "B-BF-BF1001-1389": {
      "firstVisit": true,
      "displayName": "Parapsychology",
      "description": "Description for \u201cParapsychology Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "B-BF"
        }
      }
    },
    "B-BF-BF1404-2055": {
      "firstVisit": true,
      "displayName": "Occult sciences",
      "description": "Description for \u201cOccult sciences Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "B-BF"
        }
      }
    },
    "B-BF": {
      "firstVisit": true,
      "displayName": "\u201cPsychology Building\u201d Main Lobby",
      "description": "There are 3 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n\n[  South  ] \u201cPsychology Room\u201d\n[  North  ] \u201cParapsychology Room\u201d\n[  East   ] \u201cOccult sciences Room\u201d\n[  Exit   ] Philosophy, Psychology, Religion Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "B-BF": {
          "displayName": "Exit",
          "destination": "Plaza-B"
        },
        "B-BF-BF1-990": {
          "displayName": "South",
          "destination": "B-BF-BF1-990"
        },
        "B-BF-BF1001-1389": {
          "displayName": "North",
          "destination": "B-BF-BF1001-1389"
        },
        "B-BF-BF1404-2055": {
          "displayName": "East",
          "destination": "B-BF-BF1404-2055"
        }
      }
    },
    "B-BS-BS1-2970": {
      "firstVisit": true,
      "displayName": "The Bible",
      "description": "Description for \u201cThe Bible Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "B-BS"
        }
      }
    },
    "B-BS": {
      "firstVisit": true,
      "displayName": "\u201cThe Bible Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cThe Bible Room\u201d\n[  Exit   ] Philosophy, Psychology, Religion Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "B-BS": {
          "displayName": "Exit",
          "destination": "Plaza-B"
        },
        "B-BS-BS1-2970": {
          "displayName": "South",
          "destination": "B-BS-BS1-2970"
        }
      }
    },
    "B-BT-BT10-1480": {
      "firstVisit": true,
      "displayName": "Doctrinal Theology",
      "description": "Description for \u201cDoctrinal Theology Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "B-BT"
        }
      }
    },
    "B-BT": {
      "firstVisit": true,
      "displayName": "\u201cDoctrinal Theology Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cDoctrinal Theology Room\u201d\n[  Exit   ] Philosophy, Psychology, Religion Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "B-BT": {
          "displayName": "Exit",
          "destination": "Plaza-B"
        },
        "B-BT-BT10-1480": {
          "displayName": "South",
          "destination": "B-BT-BT10-1480"
        }
      }
    },
    "B-B-B1-5802": {
      "firstVisit": true,
      "displayName": "Philosophy (General)",
      "description": "Description for \u201cPhilosophy (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "B-B"
        }
      }
    },
    "B-B": {
      "firstVisit": true,
      "displayName": "\u201cPhilosophy (General) Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cPhilosophy (General) Room\u201d\n[  Exit   ] Philosophy, Psychology, Religion Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "B-B": {
          "displayName": "Exit",
          "destination": "Plaza-B"
        },
        "B-B-B1-5802": {
          "displayName": "South",
          "destination": "B-B-B1-5802"
        }
      }
    },
    "B-BR-BR1-1725": {
      "firstVisit": true,
      "displayName": "Christianity",
      "description": "Description for \u201cChristianity Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "B-BR"
        }
      }
    },
    "B-BR": {
      "firstVisit": true,
      "displayName": "\u201cChristianity Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cChristianity Room\u201d\n[  Exit   ] Philosophy, Psychology, Religion Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "B-BR": {
          "displayName": "Exit",
          "destination": "Plaza-B"
        },
        "B-BR-BR1-1725": {
          "displayName": "South",
          "destination": "B-BR-BR1-1725"
        }
      }
    },
    "B-BL-BL1-2790": {
      "firstVisit": true,
      "displayName": "Religions.  Mythology.  Rationalism",
      "description": "Description for \u201cReligions.  Mythology.  Rationalism Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "B-BL"
        }
      }
    },
    "B-BL": {
      "firstVisit": true,
      "displayName": "\u201cReligions.  Mythology.  Rationalism Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cReligions.  Mythology.  Rationalism Room\u201d\n[  Exit   ] Philosophy, Psychology, Religion Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "B-BL": {
          "displayName": "Exit",
          "destination": "Plaza-B"
        },
        "B-BL-BL1-2790": {
          "displayName": "South",
          "destination": "B-BL-BL1-2790"
        }
      }
    },
    "B-BP-BP1-610": {
      "firstVisit": true,
      "displayName": "Islam.  Bahai Faith.  Theosophy, etc.",
      "description": "Description for \u201cIslam.  Bahai Faith.  Theosophy, etc. Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "B-BP"
        }
      }
    },
    "B-BP-BP1-68": {
      "firstVisit": true,
      "displayName": "General",
      "description": "Description for \u201cGeneral Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "B-BP"
        }
      }
    },
    "B-BP": {
      "firstVisit": true,
      "displayName": "\u201cIslam.  Bahai Faith.  Theosophy, etc. Building\u201d Main Lobby",
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n\n[  South  ] \u201cIslam.  Bahai Faith.  Theosophy, etc. Room\u201d\n[  North  ] \u201cGeneral Room\u201d\n[  Exit   ] Philosophy, Psychology, Religion Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "B-BP": {
          "displayName": "Exit",
          "destination": "Plaza-B"
        },
        "B-BP-BP1-610": {
          "displayName": "South",
          "destination": "B-BP-BP1-610"
        },
        "B-BP-BP1-68": {
          "displayName": "North",
          "destination": "B-BP-BP1-68"
        }
      }
    },
    "B-BM-BM1-990": {
      "firstVisit": true,
      "displayName": "Judaism",
      "description": "Description for \u201cJudaism Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "B-BM"
        }
      }
    },
    "B-BM-BM1-449": {
      "firstVisit": true,
      "displayName": "General",
      "description": "Description for \u201cGeneral Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "B-BM"
        }
      }
    },
    "B-BM": {
      "firstVisit": true,
      "displayName": "\u201cJudaism Building\u201d Main Lobby",
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n\n[  South  ] \u201cJudaism Room\u201d\n[  North  ] \u201cGeneral Room\u201d\n[  Exit   ] Philosophy, Psychology, Religion Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "B-BM": {
          "displayName": "Exit",
          "destination": "Plaza-B"
        },
        "B-BM-BM1-990": {
          "displayName": "South",
          "destination": "B-BM-BM1-990"
        },
        "B-BM-BM1-449": {
          "displayName": "North",
          "destination": "B-BM-BM1-449"
        }
      }
    },
    "B-BC-BC1-199": {
      "firstVisit": true,
      "displayName": "Logic",
      "description": "Description for \u201cLogic Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "B-BC"
        }
      }
    },
    "B-BC": {
      "firstVisit": true,
      "displayName": "\u201cLogic Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLogic Room\u201d\n[  Exit   ] Philosophy, Psychology, Religion Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "B-BC": {
          "displayName": "Exit",
          "destination": "Plaza-B"
        },
        "B-BC-BC1-199": {
          "displayName": "South",
          "destination": "B-BC-BC1-199"
        }
      }
    },
    "B-BQ-BQ1-9800": {
      "firstVisit": true,
      "displayName": "Buddhism",
      "description": "Description for \u201cBuddhism Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "B-BQ"
        }
      }
    },
    "B-BQ": {
      "firstVisit": true,
      "displayName": "\u201cBuddhism Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cBuddhism Room\u201d\n[  Exit   ] Philosophy, Psychology, Religion Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "B-BQ": {
          "displayName": "Exit",
          "destination": "Plaza-B"
        },
        "B-BQ-BQ1-9800": {
          "displayName": "South",
          "destination": "B-BQ-BQ1-9800"
        }
      }
    },
    "B-BD-BD10-701": {
      "firstVisit": true,
      "displayName": "Speculative philosophy",
      "description": "Description for \u201cSpeculative philosophy Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "B-BD"
        }
      }
    },
    "B-BD": {
      "firstVisit": true,
      "displayName": "\u201cSpeculative philosophy Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cSpeculative philosophy Room\u201d\n[  Exit   ] Philosophy, Psychology, Religion Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "B-BD": {
          "displayName": "Exit",
          "destination": "Plaza-B"
        },
        "B-BD-BD10-701": {
          "displayName": "South",
          "destination": "B-BD-BD10-701"
        }
      }
    },
    "B-BH-BH1-301": {
      "firstVisit": true,
      "displayName": "Aesthetics",
      "description": "Description for \u201cAesthetics Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "B-BH"
        }
      }
    },
    "B-BH": {
      "firstVisit": true,
      "displayName": "\u201cAesthetics Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cAesthetics Room\u201d\n[  Exit   ] Philosophy, Psychology, Religion Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "B-BH": {
          "displayName": "Exit",
          "destination": "Plaza-B"
        },
        "B-BH-BH1-301": {
          "displayName": "South",
          "destination": "B-BH-BH1-301"
        }
      }
    },
    "Plaza-C": {
      "firstVisit": true,
      "displayName": "Auxiliary Sciences of History (General) Plaza",
      "description": "You are in an plaza surrounded by 10 buildings conforming Auxiliary Sciences of History (General).\nThe buildings are accessible via their classification code, visible above the main door:\n\n[ C-CT  ] (1 story) \u201cBiography Building\u201d\n[ C-CS  ] (1 story) \u201cGenealogy Building\u201d\n[ C-CR  ] (1 story) \u201cHeraldry Building\u201d\n[ C-CB  ] (1 story) \u201cHistory of Civilization Building\u201d\n[ C-CJ  ] (1 story) \u201cNumismatics Building\u201d\n[ C-CC  ] (1 story) \u201cArchaeology Building\u201d\n[ C-CN  ] (1 story) \u201cInscriptions.  Epigraphy Building\u201d\n[ C-CD  ] (1 story) \u201cDiplomatics.  Archives.  Seals Building\u201d\n[ C-CE  ] (1 story) \u201cTechnical chronology.  Calendar Building\u201d\n[ C-C   ] (1 story) \u201cAuxiliary Sciences of History (General) Building\u201d\n[ Main  ] Main Library Grounds",
      "interactables": {},
      "items": {},
      "exits": {
        "C-CT": {
          "displayName": "C-CT",
          "destination": "C-CT"
        },
        "C-CS": {
          "displayName": "C-CS",
          "destination": "C-CS"
        },
        "C-CR": {
          "displayName": "C-CR",
          "destination": "C-CR"
        },
        "C-CB": {
          "displayName": "C-CB",
          "destination": "C-CB"
        },
        "C-CJ": {
          "displayName": "C-CJ",
          "destination": "C-CJ"
        },
        "C-CC": {
          "displayName": "C-CC",
          "destination": "C-CC"
        },
        "C-CN": {
          "displayName": "C-CN",
          "destination": "C-CN"
        },
        "C-CD": {
          "displayName": "C-CD",
          "destination": "C-CD"
        },
        "C-CE": {
          "displayName": "C-CE",
          "destination": "C-CE"
        },
        "C-C": {
          "displayName": "C-C",
          "destination": "C-C"
        },
        "main": {
          "displayName": "Main",
          "destination": "MAIN"
        }
      }
    },
    "C-CT-CT21-9999": {
      "firstVisit": true,
      "displayName": "Biography",
      "description": "Description for \u201cBiography Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "C-CT"
        }
      }
    },
    "C-CT": {
      "firstVisit": true,
      "displayName": "\u201cBiography Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cBiography Room\u201d\n[  Exit   ] Auxiliary Sciences of History (General) Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "C-CT": {
          "displayName": "Exit",
          "destination": "Plaza-C"
        },
        "C-CT-CT21-9999": {
          "displayName": "South",
          "destination": "C-CT-CT21-9999"
        }
      }
    },
    "C-CS-CS1-3090": {
      "firstVisit": true,
      "displayName": "Genealogy",
      "description": "Description for \u201cGenealogy Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "C-CS"
        }
      }
    },
    "C-CS": {
      "firstVisit": true,
      "displayName": "\u201cGenealogy Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cGenealogy Room\u201d\n[  Exit   ] Auxiliary Sciences of History (General) Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "C-CS": {
          "displayName": "Exit",
          "destination": "Plaza-C"
        },
        "C-CS-CS1-3090": {
          "displayName": "South",
          "destination": "C-CS-CS1-3090"
        }
      }
    },
    "C-CR-CR1-6305": {
      "firstVisit": true,
      "displayName": "Heraldry",
      "description": "Description for \u201cHeraldry Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "C-CR"
        }
      }
    },
    "C-CR": {
      "firstVisit": true,
      "displayName": "\u201cHeraldry Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cHeraldry Room\u201d\n[  Exit   ] Auxiliary Sciences of History (General) Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "C-CR": {
          "displayName": "Exit",
          "destination": "Plaza-C"
        },
        "C-CR-CR1-6305": {
          "displayName": "South",
          "destination": "C-CR-CR1-6305"
        }
      }
    },
    "C-CB-CB3-482": {
      "firstVisit": true,
      "displayName": "History of Civilization",
      "description": "Description for \u201cHistory of Civilization Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "C-CB"
        }
      }
    },
    "C-CB": {
      "firstVisit": true,
      "displayName": "\u201cHistory of Civilization Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cHistory of Civilization Room\u201d\n[  Exit   ] Auxiliary Sciences of History (General) Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "C-CB": {
          "displayName": "Exit",
          "destination": "Plaza-C"
        },
        "C-CB-CB3-482": {
          "displayName": "South",
          "destination": "C-CB-CB3-482"
        }
      }
    },
    "C-CJ-CJ1-6661": {
      "firstVisit": true,
      "displayName": "Numismatics",
      "description": "Description for \u201cNumismatics Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "C-CJ"
        }
      }
    },
    "C-CJ": {
      "firstVisit": true,
      "displayName": "\u201cNumismatics Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cNumismatics Room\u201d\n[  Exit   ] Auxiliary Sciences of History (General) Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "C-CJ": {
          "displayName": "Exit",
          "destination": "Plaza-C"
        },
        "C-CJ-CJ1-6661": {
          "displayName": "South",
          "destination": "C-CJ-CJ1-6661"
        }
      }
    },
    "C-CC-CC1-960": {
      "firstVisit": true,
      "displayName": "Archaeology",
      "description": "Description for \u201cArchaeology Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "C-CC"
        }
      }
    },
    "C-CC": {
      "firstVisit": true,
      "displayName": "\u201cArchaeology Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cArchaeology Room\u201d\n[  Exit   ] Auxiliary Sciences of History (General) Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "C-CC": {
          "displayName": "Exit",
          "destination": "Plaza-C"
        },
        "C-CC-CC1-960": {
          "displayName": "South",
          "destination": "C-CC-CC1-960"
        }
      }
    },
    "C-CN-CN1-1355": {
      "firstVisit": true,
      "displayName": "Inscriptions.  Epigraphy",
      "description": "Description for \u201cInscriptions.  Epigraphy Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "C-CN"
        }
      }
    },
    "C-CN": {
      "firstVisit": true,
      "displayName": "\u201cInscriptions.  Epigraphy Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cInscriptions.  Epigraphy Room\u201d\n[  Exit   ] Auxiliary Sciences of History (General) Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "C-CN": {
          "displayName": "Exit",
          "destination": "Plaza-C"
        },
        "C-CN-CN1-1355": {
          "displayName": "South",
          "destination": "C-CN-CN1-1355"
        }
      }
    },
    "C-CD-CD1-6471": {
      "firstVisit": true,
      "displayName": "Diplomatics.  Archives.  Seals",
      "description": "Description for \u201cDiplomatics.  Archives.  Seals Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "C-CD"
        }
      }
    },
    "C-CD": {
      "firstVisit": true,
      "displayName": "\u201cDiplomatics.  Archives.  Seals Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cDiplomatics.  Archives.  Seals Room\u201d\n[  Exit   ] Auxiliary Sciences of History (General) Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "C-CD": {
          "displayName": "Exit",
          "destination": "Plaza-C"
        },
        "C-CD-CD1-6471": {
          "displayName": "South",
          "destination": "C-CD-CD1-6471"
        }
      }
    },
    "C-CE-CE1-97": {
      "firstVisit": true,
      "displayName": "Technical chronology.  Calendar",
      "description": "Description for \u201cTechnical chronology.  Calendar Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "C-CE"
        }
      }
    },
    "C-CE": {
      "firstVisit": true,
      "displayName": "\u201cTechnical chronology.  Calendar Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cTechnical chronology.  Calendar Room\u201d\n[  Exit   ] Auxiliary Sciences of History (General) Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "C-CE": {
          "displayName": "Exit",
          "destination": "Plaza-C"
        },
        "C-CE-CE1-97": {
          "displayName": "South",
          "destination": "C-CE-CE1-97"
        }
      }
    },
    "C-C-C1-51": {
      "firstVisit": true,
      "displayName": "Auxiliary Sciences of History (General)",
      "description": "Description for \u201cAuxiliary Sciences of History (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "C-C"
        }
      }
    },
    "C-C": {
      "firstVisit": true,
      "displayName": "\u201cAuxiliary Sciences of History (General) Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cAuxiliary Sciences of History (General) Room\u201d\n[  Exit   ] Auxiliary Sciences of History (General) Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "C-C": {
          "displayName": "Exit",
          "destination": "Plaza-C"
        },
        "C-C-C1-51": {
          "displayName": "South",
          "destination": "C-C-C1-51"
        }
      }
    },
    "Plaza-D": {
      "firstVisit": true,
      "displayName": "World History (except American History) Plaza",
      "description": "You are in an plaza surrounded by 21 buildings conforming World History (except American History).\nThe buildings are accessible via their classification code, visible above the main door:\n\n[ D-DS  ] (1 story) \u201cHistory of Asia Building\u201d\n[ D-D   ] (1 story) \u201cHistory (General) Building\u201d\n[ D-DA  ] (1 story) \u201cHistory of Great Britain Building\u201d\n[ D-DT  ] (1 story) \u201cHistory of Africa Building\u201d\n[ D-DG  ] (1 story) \u201cHistory of Italy Building\u201d\n[ D-DC  ] (1 story) \u201cHistory of France Building\u201d\n[ D-DD  ] (1 story) \u201cHistory of Germany Building\u201d\n[ D-DH  ] (1 story) \u201cHistory of Low Countries.  Benelux Countries Building\u201d\n[ D-DU  ] (1 story) \u201cHistory of Oceania (South Seas) Building\u201d\n[ D-DK  ] (1 story) \u201cHistory of Russia.  Soviet Union.  Former Soviet Republics Building\u201d\n[ D-DE  ] (1 story) \u201cHistory of the Greco-Roman world Building\u201d\n[ D-DR  ] (1 story) \u201cHistory of Balkan Peninsula Building\u201d\n[ D-DP  ] (1 story) \u201cHistory of Spain Building\u201d\n[ D-DF  ] (1 story) \u201cHistory of Greece Building\u201d\n[ D-DJK ] (1 story) \u201cHistory of Eastern Europe (General) Building\u201d\n[ D-DB  ] (1 story) \u201cHistory of Austria.  Liechtenstein.  Hungary.  Czechoslovakia Building\u201d\n[ D-DL  ] (1 story) \u201cHistory of Northern Europe.  Scandinavia Building\u201d\n[ D-DQ  ] (1 story) \u201cHistory of Switzerland Building\u201d\n[ D-DAW ] (1 story) \u201cHistory of Central Europe Building\u201d\n[ D-DJ  ] (1 story) \u201cHistory of Netherlands (Holland) Building\u201d\n[ D-DX  ] (1 story) \u201cHistory of Romanies Building\u201d\n[ Main  ] Main Library Grounds",
      "interactables": {},
      "items": {},
      "exits": {
        "D-DS": {
          "displayName": "D-DS",
          "destination": "D-DS"
        },
        "D-D": {
          "displayName": "D-D",
          "destination": "D-D"
        },
        "D-DA": {
          "displayName": "D-DA",
          "destination": "D-DA"
        },
        "D-DT": {
          "displayName": "D-DT",
          "destination": "D-DT"
        },
        "D-DG": {
          "displayName": "D-DG",
          "destination": "D-DG"
        },
        "D-DC": {
          "displayName": "D-DC",
          "destination": "D-DC"
        },
        "D-DD": {
          "displayName": "D-DD",
          "destination": "D-DD"
        },
        "D-DH": {
          "displayName": "D-DH",
          "destination": "D-DH"
        },
        "D-DU": {
          "displayName": "D-DU",
          "destination": "D-DU"
        },
        "D-DK": {
          "displayName": "D-DK",
          "destination": "D-DK"
        },
        "D-DE": {
          "displayName": "D-DE",
          "destination": "D-DE"
        },
        "D-DR": {
          "displayName": "D-DR",
          "destination": "D-DR"
        },
        "D-DP": {
          "displayName": "D-DP",
          "destination": "D-DP"
        },
        "D-DF": {
          "displayName": "D-DF",
          "destination": "D-DF"
        },
        "D-DJK": {
          "displayName": "D-DJK",
          "destination": "D-DJK"
        },
        "D-DB": {
          "displayName": "D-DB",
          "destination": "D-DB"
        },
        "D-DL": {
          "displayName": "D-DL",
          "destination": "D-DL"
        },
        "D-DQ": {
          "displayName": "D-DQ",
          "destination": "D-DQ"
        },
        "D-DAW": {
          "displayName": "D-DAW",
          "destination": "D-DAW"
        },
        "D-DJ": {
          "displayName": "D-DJ",
          "destination": "D-DJ"
        },
        "D-DX": {
          "displayName": "D-DX",
          "destination": "D-DX"
        },
        "main": {
          "displayName": "Main",
          "destination": "MAIN"
        }
      }
    },
    "D-DS-DS1-937": {
      "firstVisit": true,
      "displayName": "History of Asia",
      "description": "Description for \u201cHistory of Asia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "D-DS"
        }
      }
    },
    "D-DS": {
      "firstVisit": true,
      "displayName": "\u201cHistory of Asia Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cHistory of Asia Room\u201d\n[  Exit   ] World History (except American History) Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "D-DS": {
          "displayName": "Exit",
          "destination": "Plaza-D"
        },
        "D-DS-DS1-937": {
          "displayName": "South",
          "destination": "D-DS-DS1-937"
        }
      }
    },
    "D-D-D1-2027": {
      "firstVisit": true,
      "displayName": "History (General)",
      "description": "Description for \u201cHistory (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "D-D"
        }
      }
    },
    "D-D": {
      "firstVisit": true,
      "displayName": "\u201cHistory (General) Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cHistory (General) Room\u201d\n[  Exit   ] World History (except American History) Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "D-D": {
          "displayName": "Exit",
          "destination": "Plaza-D"
        },
        "D-D-D1-2027": {
          "displayName": "South",
          "destination": "D-D-D1-2027"
        }
      }
    },
    "D-DA-DA1-995": {
      "firstVisit": true,
      "displayName": "History of Great Britain",
      "description": "Description for \u201cHistory of Great Britain Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "D-DA"
        }
      }
    },
    "D-DA": {
      "firstVisit": true,
      "displayName": "\u201cHistory of Great Britain Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cHistory of Great Britain Room\u201d\n[  Exit   ] World History (except American History) Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "D-DA": {
          "displayName": "Exit",
          "destination": "Plaza-D"
        },
        "D-DA-DA1-995": {
          "displayName": "South",
          "destination": "D-DA-DA1-995"
        }
      }
    },
    "D-DT-DT1-3415": {
      "firstVisit": true,
      "displayName": "History of Africa",
      "description": "Description for \u201cHistory of Africa Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "D-DT"
        }
      }
    },
    "D-DT": {
      "firstVisit": true,
      "displayName": "\u201cHistory of Africa Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cHistory of Africa Room\u201d\n[  Exit   ] World History (except American History) Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "D-DT": {
          "displayName": "Exit",
          "destination": "Plaza-D"
        },
        "D-DT-DT1-3415": {
          "displayName": "South",
          "destination": "D-DT-DT1-3415"
        }
      }
    },
    "D-DG-DG11-999": {
      "firstVisit": true,
      "displayName": "History of Italy",
      "description": "Description for \u201cHistory of Italy Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "D-DG"
        }
      }
    },
    "D-DG-DG11-365": {
      "firstVisit": true,
      "displayName": "Ancient Italy.  Rome to 476",
      "description": "Description for \u201cAncient Italy.  Rome to 476 Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "D-DG"
        }
      }
    },
    "D-DG": {
      "firstVisit": true,
      "displayName": "\u201cHistory of Italy Building\u201d Main Lobby",
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n\n[  South  ] \u201cHistory of Italy Room\u201d\n[  North  ] \u201cAncient Italy.  Rome to 476 Room\u201d\n[  Exit   ] World History (except American History) Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "D-DG": {
          "displayName": "Exit",
          "destination": "Plaza-D"
        },
        "D-DG-DG11-999": {
          "displayName": "South",
          "destination": "D-DG-DG11-999"
        },
        "D-DG-DG11-365": {
          "displayName": "North",
          "destination": "D-DG-DG11-365"
        }
      }
    },
    "D-DC-DC1-947": {
      "firstVisit": true,
      "displayName": "History of France",
      "description": "Description for \u201cHistory of France Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "D-DC"
        }
      }
    },
    "D-DC": {
      "firstVisit": true,
      "displayName": "\u201cHistory of France Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cHistory of France Room\u201d\n[  Exit   ] World History (except American History) Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "D-DC": {
          "displayName": "Exit",
          "destination": "Plaza-D"
        },
        "D-DC-DC1-947": {
          "displayName": "South",
          "destination": "D-DC-DC1-947"
        }
      }
    },
    "D-DD-DD1-905": {
      "firstVisit": true,
      "displayName": "History of Germany",
      "description": "Description for \u201cHistory of Germany Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "D-DD"
        }
      }
    },
    "D-DD": {
      "firstVisit": true,
      "displayName": "\u201cHistory of Germany Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cHistory of Germany Room\u201d\n[  Exit   ] World History (except American History) Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "D-DD": {
          "displayName": "Exit",
          "destination": "Plaza-D"
        },
        "D-DD-DD1-905": {
          "displayName": "South",
          "destination": "D-DD-DD1-905"
        }
      }
    },
    "D-DH-DH1-925": {
      "firstVisit": true,
      "displayName": "History of Low Countries.  Benelux Countries",
      "description": "Description for \u201cHistory of Low Countries.  Benelux Countries Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "D-DH"
        }
      }
    },
    "D-DH": {
      "firstVisit": true,
      "displayName": "\u201cHistory of Low Countries.  Benelux Countries Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cHistory of Low Countries.  Benelux Countries Room\u201d\n[  Exit   ] World History (except American History) Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "D-DH": {
          "displayName": "Exit",
          "destination": "Plaza-D"
        },
        "D-DH-DH1-925": {
          "displayName": "South",
          "destination": "D-DH-DH1-925"
        }
      }
    },
    "D-DU-DU1-950": {
      "firstVisit": true,
      "displayName": "History of Oceania (South Seas)",
      "description": "Description for \u201cHistory of Oceania (South Seas) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "D-DU"
        }
      }
    },
    "D-DU": {
      "firstVisit": true,
      "displayName": "\u201cHistory of Oceania (South Seas) Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cHistory of Oceania (South Seas) Room\u201d\n[  Exit   ] World History (except American History) Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "D-DU": {
          "displayName": "Exit",
          "destination": "Plaza-D"
        },
        "D-DU-DU1-950": {
          "displayName": "South",
          "destination": "D-DU-DU1-950"
        }
      }
    },
    "D-DK-DK1-949.5": {
      "firstVisit": true,
      "displayName": "History of Russia.  Soviet Union.  Former Soviet Republics",
      "description": "Description for \u201cHistory of Russia.  Soviet Union.  Former Soviet Republics Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "D-DK"
        }
      }
    },
    "D-DK-DK4010-4800": {
      "firstVisit": true,
      "displayName": "History of Poland",
      "description": "Description for \u201cHistory of Poland Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "D-DK"
        }
      }
    },
    "D-DK": {
      "firstVisit": true,
      "displayName": "\u201cHistory of Russia.  Soviet Union.  Former Soviet Republics Building\u201d Main Lobby",
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n\n[  South  ] \u201cHistory of Russia.  Soviet Union.  Former Soviet Republics Room\u201d\n[  North  ] \u201cHistory of Poland Room\u201d\n[  Exit   ] World History (except American History) Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "D-DK": {
          "displayName": "Exit",
          "destination": "Plaza-D"
        },
        "D-DK-DK1-949.5": {
          "displayName": "South",
          "destination": "D-DK-DK1-949.5"
        },
        "D-DK-DK4010-4800": {
          "displayName": "North",
          "destination": "D-DK-DK4010-4800"
        }
      }
    },
    "D-DE-DE1-100": {
      "firstVisit": true,
      "displayName": "History of the Greco-Roman world",
      "description": "Description for \u201cHistory of the Greco-Roman world Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "D-DE"
        }
      }
    },
    "D-DE": {
      "firstVisit": true,
      "displayName": "\u201cHistory of the Greco-Roman world Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cHistory of the Greco-Roman world Room\u201d\n[  Exit   ] World History (except American History) Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "D-DE": {
          "displayName": "Exit",
          "destination": "Plaza-D"
        },
        "D-DE-DE1-100": {
          "displayName": "South",
          "destination": "D-DE-DE1-100"
        }
      }
    },
    "D-DR-DR1-2285": {
      "firstVisit": true,
      "displayName": "History of Balkan Peninsula",
      "description": "Description for \u201cHistory of Balkan Peninsula Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "D-DR"
        }
      }
    },
    "D-DR": {
      "firstVisit": true,
      "displayName": "\u201cHistory of Balkan Peninsula Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cHistory of Balkan Peninsula Room\u201d\n[  Exit   ] World History (except American History) Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "D-DR": {
          "displayName": "Exit",
          "destination": "Plaza-D"
        },
        "D-DR-DR1-2285": {
          "displayName": "South",
          "destination": "D-DR-DR1-2285"
        }
      }
    },
    "D-DP-DP1-402": {
      "firstVisit": true,
      "displayName": "History of Spain",
      "description": "Description for \u201cHistory of Spain Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "D-DP"
        }
      }
    },
    "D-DP-DP501-900.22": {
      "firstVisit": true,
      "displayName": "History of Portugal",
      "description": "Description for \u201cHistory of Portugal Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "D-DP"
        }
      }
    },
    "D-DP": {
      "firstVisit": true,
      "displayName": "\u201cHistory of Spain Building\u201d Main Lobby",
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n\n[  South  ] \u201cHistory of Spain Room\u201d\n[  North  ] \u201cHistory of Portugal Room\u201d\n[  Exit   ] World History (except American History) Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "D-DP": {
          "displayName": "Exit",
          "destination": "Plaza-D"
        },
        "D-DP-DP1-402": {
          "displayName": "South",
          "destination": "D-DP-DP1-402"
        },
        "D-DP-DP501-900.22": {
          "displayName": "North",
          "destination": "D-DP-DP501-900.22"
        }
      }
    },
    "D-DF-DF10-951": {
      "firstVisit": true,
      "displayName": "History of Greece",
      "description": "Description for \u201cHistory of Greece Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "D-DF"
        }
      }
    },
    "D-DF": {
      "firstVisit": true,
      "displayName": "\u201cHistory of Greece Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cHistory of Greece Room\u201d\n[  Exit   ] World History (except American History) Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "D-DF": {
          "displayName": "Exit",
          "destination": "Plaza-D"
        },
        "D-DF-DF10-951": {
          "displayName": "South",
          "destination": "D-DF-DF10-951"
        }
      }
    },
    "D-DJK-DJK1-77": {
      "firstVisit": true,
      "displayName": "History of Eastern Europe (General)",
      "description": "Description for \u201cHistory of Eastern Europe (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "D-DJK"
        }
      }
    },
    "D-DJK": {
      "firstVisit": true,
      "displayName": "\u201cHistory of Eastern Europe (General) Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cHistory of Eastern Europe (General) Room\u201d\n[  Exit   ] World History (except American History) Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "D-DJK": {
          "displayName": "Exit",
          "destination": "Plaza-D"
        },
        "D-DJK-DJK1-77": {
          "displayName": "South",
          "destination": "D-DJK-DJK1-77"
        }
      }
    },
    "D-DB-DB1-3150": {
      "firstVisit": true,
      "displayName": "History of Austria.  Liechtenstein.  Hungary.  Czechoslovakia",
      "description": "Description for \u201cHistory of Austria.  Liechtenstein.  Hungary.  Czechoslovakia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "D-DB"
        }
      }
    },
    "D-DB": {
      "firstVisit": true,
      "displayName": "\u201cHistory of Austria.  Liechtenstein.  Hungary.  Czechoslovakia Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cHistory of Austria.  Liechtenstein.  Hungary.  Czechoslovakia Room\u201d\n[  Exit   ] World History (except American History) Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "D-DB": {
          "displayName": "Exit",
          "destination": "Plaza-D"
        },
        "D-DB-DB1-3150": {
          "displayName": "South",
          "destination": "D-DB-DB1-3150"
        }
      }
    },
    "D-DL-DL1-1180": {
      "firstVisit": true,
      "displayName": "History of Northern Europe.  Scandinavia",
      "description": "Description for \u201cHistory of Northern Europe.  Scandinavia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "D-DL"
        }
      }
    },
    "D-DL": {
      "firstVisit": true,
      "displayName": "\u201cHistory of Northern Europe.  Scandinavia Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cHistory of Northern Europe.  Scandinavia Room\u201d\n[  Exit   ] World History (except American History) Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "D-DL": {
          "displayName": "Exit",
          "destination": "Plaza-D"
        },
        "D-DL-DL1-1180": {
          "displayName": "South",
          "destination": "D-DL-DL1-1180"
        }
      }
    },
    "D-DQ-DQ1-851": {
      "firstVisit": true,
      "displayName": "History of Switzerland",
      "description": "Description for \u201cHistory of Switzerland Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "D-DQ"
        }
      }
    },
    "D-DQ": {
      "firstVisit": true,
      "displayName": "\u201cHistory of Switzerland Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cHistory of Switzerland Room\u201d\n[  Exit   ] World History (except American History) Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "D-DQ": {
          "displayName": "Exit",
          "destination": "Plaza-D"
        },
        "D-DQ-DQ1-851": {
          "displayName": "South",
          "destination": "D-DQ-DQ1-851"
        }
      }
    },
    "D-DAW-DAW1001-1051": {
      "firstVisit": true,
      "displayName": "History of Central Europe",
      "description": "Description for \u201cHistory of Central Europe Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "D-DAW"
        }
      }
    },
    "D-DAW": {
      "firstVisit": true,
      "displayName": "\u201cHistory of Central Europe Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cHistory of Central Europe Room\u201d\n[  Exit   ] World History (except American History) Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "D-DAW": {
          "displayName": "Exit",
          "destination": "Plaza-D"
        },
        "D-DAW-DAW1001-1051": {
          "displayName": "South",
          "destination": "D-DAW-DAW1001-1051"
        }
      }
    },
    "D-DJ-DJ1-500": {
      "firstVisit": true,
      "displayName": "History of Netherlands (Holland)",
      "description": "Description for \u201cHistory of Netherlands (Holland) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "D-DJ"
        }
      }
    },
    "D-DJ": {
      "firstVisit": true,
      "displayName": "\u201cHistory of Netherlands (Holland) Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cHistory of Netherlands (Holland) Room\u201d\n[  Exit   ] World History (except American History) Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "D-DJ": {
          "displayName": "Exit",
          "destination": "Plaza-D"
        },
        "D-DJ-DJ1-500": {
          "displayName": "South",
          "destination": "D-DJ-DJ1-500"
        }
      }
    },
    "D-DX-DX101-301": {
      "firstVisit": true,
      "displayName": "History of Romanies",
      "description": "Description for \u201cHistory of Romanies Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "D-DX"
        }
      }
    },
    "D-DX": {
      "firstVisit": true,
      "displayName": "\u201cHistory of Romanies Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cHistory of Romanies Room\u201d\n[  Exit   ] World History (except American History) Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "D-DX": {
          "displayName": "Exit",
          "destination": "Plaza-D"
        },
        "D-DX-DX101-301": {
          "displayName": "South",
          "destination": "D-DX-DX101-301"
        }
      }
    },
    "Plaza-E": {
      "firstVisit": true,
      "displayName": "American History Plaza",
      "description": "You are in an plaza surrounded by 1 building conforming American History.\nThe building is accessible via its classification code, visible above the main door:\n\n[ E-E   ] (1 story) \u201cUnited States Building\u201d\n[ Main  ] Main Library Grounds",
      "interactables": {},
      "items": {},
      "exits": {
        "E-E": {
          "displayName": "E-E",
          "destination": "E-E"
        },
        "main": {
          "displayName": "Main",
          "destination": "MAIN"
        }
      }
    },
    "E-E-E151-889": {
      "firstVisit": true,
      "displayName": "United States",
      "description": "Description for \u201cUnited States Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "E-E"
        }
      }
    },
    "E-E-E11-143": {
      "firstVisit": true,
      "displayName": "America",
      "description": "Description for \u201cAmerica Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "E-E"
        }
      }
    },
    "E-E-E895-904": {
      "firstVisit": true,
      "displayName": "Twenty-first century",
      "description": "Description for \u201cTwenty-first century Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "E-E"
        }
      }
    },
    "E-E-E902-906": {
      "firstVisit": true,
      "displayName": "George W. Bush's administrations, 2001-2009",
      "description": "Description for \u201cGeorge W. Bush's administrations, 2001-2009 Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "E-E"
        }
      }
    },
    "E-E-E907-909": {
      "firstVisit": true,
      "displayName": "Barack Obama's administration, 2009-",
      "description": "Description for \u201cBarack Obama's administration, 2009- Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "E-E"
        }
      }
    },
    "E-E": {
      "firstVisit": true,
      "displayName": "\u201cUnited States Building\u201d Main Lobby",
      "description": "There are 5 rooms throughout this building. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[  South  ] \u201cUnited States Room\u201d\n[  North  ] \u201cAmerica Room\u201d\n[  East   ] \u201cTwenty-first century Room\u201d\n[  West   ] \u201cGeorge W. Bush's administrations, 2001-2009 Room\u201d\n[SouthEast] \u201cBarack Obama's administration, 2009- Room\u201d\n[  Exit   ] American History Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "E-E": {
          "displayName": "Exit",
          "destination": "Plaza-E"
        },
        "E-E-E151-889": {
          "displayName": "South",
          "destination": "E-E-E151-889"
        },
        "E-E-E11-143": {
          "displayName": "North",
          "destination": "E-E-E11-143"
        },
        "E-E-E895-904": {
          "displayName": "East",
          "destination": "E-E-E895-904"
        },
        "E-E-E902-906": {
          "displayName": "West",
          "destination": "E-E-E902-906"
        },
        "E-E-E907-909": {
          "displayName": "SouthEast",
          "destination": "E-E-E907-909"
        }
      }
    },
    "Plaza-F": {
      "firstVisit": true,
      "displayName": "Local History of the United States and British, Dutch, French, and Latin America Plaza",
      "description": "You are in an plaza surrounded by 1 building conforming Local History of the United States and British, Dutch, French, and Latin America.\nThe building is accessible via its classification code, visible above the main door:\n\n[ F-F   ] (1 story) \u201cLatin America.  Spanish America Building\u201d\n[ Main  ] Main Library Grounds",
      "interactables": {},
      "items": {},
      "exits": {
        "F-F": {
          "displayName": "F-F",
          "destination": "F-F"
        },
        "main": {
          "displayName": "Main",
          "destination": "MAIN"
        }
      }
    },
    "F-F-F1-975": {
      "firstVisit": true,
      "displayName": "United States local history",
      "description": "Description for \u201cUnited States local history Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "F-F"
        }
      }
    },
    "F-F-F1201-3799": {
      "firstVisit": true,
      "displayName": "Latin America.  Spanish America",
      "description": "Description for \u201cLatin America.  Spanish America Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "F-F"
        }
      }
    },
    "F-F-F1001-1145.2": {
      "firstVisit": true,
      "displayName": "Canada",
      "description": "Description for \u201cCanada Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "F-F"
        }
      }
    },
    "F-F-F1201-1392": {
      "firstVisit": true,
      "displayName": "Mexico",
      "description": "Description for \u201cMexico Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "F-F"
        }
      }
    },
    "F-F-F1170": {
      "firstVisit": true,
      "displayName": "Saint Pierre and Miquelon",
      "description": "Description for \u201cSaint Pierre and Miquelon Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "F-F"
        }
      }
    },
    "F-F": {
      "firstVisit": true,
      "displayName": "\u201cLatin America.  Spanish America Building\u201d Main Lobby",
      "description": "There are 5 rooms throughout this building. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[  South  ] \u201cUnited States local history Room\u201d\n[  North  ] \u201cLatin America.  Spanish America Room\u201d\n[  East   ] \u201cCanada Room\u201d\n[  West   ] \u201cMexico Room\u201d\n[SouthEast] \u201cSaint Pierre and Miquelon Room\u201d\n[  Exit   ] Local History of the United States and British, Dutch, French, and Latin America Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "F-F": {
          "displayName": "Exit",
          "destination": "Plaza-F"
        },
        "F-F-F1-975": {
          "displayName": "South",
          "destination": "F-F-F1-975"
        },
        "F-F-F1201-3799": {
          "displayName": "North",
          "destination": "F-F-F1201-3799"
        },
        "F-F-F1001-1145.2": {
          "displayName": "East",
          "destination": "F-F-F1001-1145.2"
        },
        "F-F-F1201-1392": {
          "displayName": "West",
          "destination": "F-F-F1201-1392"
        },
        "F-F-F1170": {
          "displayName": "SouthEast",
          "destination": "F-F-F1170"
        }
      }
    },
    "Plaza-G": {
      "firstVisit": true,
      "displayName": "Geography, Anthropology, Recreation Plaza",
      "description": "You are in an plaza surrounded by 10 buildings conforming Geography, Anthropology, Recreation.\nThe buildings are accessible via their classification code, visible above the main door:\n\n[ G-G   ] (1 story) \u201cMaps Building\u201d\n[ G-GV  ] (1 story) \u201cRecreation.  Leisure Building\u201d\n[ G-GA  ] (1 story) \u201cMathematical geography.  Cartography Building\u201d\n[ G-GN  ] (1 story) \u201cAnthropology Building\u201d\n[ G-GR  ] (1 story) \u201cFolklore Building\u201d\n[ G-GT  ] (1 story) \u201cManners and customs (General) Building\u201d\n[ G-GC  ] (1 story) \u201cOceanography Building\u201d\n[ G-GB  ] (1 story) \u201cPhysical geography Building\u201d\n[ G-GE  ] (1 story) \u201cEnvironmental sciences Building\u201d\n[ G-GF  ] (1 story) \u201cHuman ecology.  Anthropogeography Building\u201d\n[ Main  ] Main Library Grounds",
      "interactables": {},
      "items": {},
      "exits": {
        "G-G": {
          "displayName": "G-G",
          "destination": "G-G"
        },
        "G-GV": {
          "displayName": "G-GV",
          "destination": "G-GV"
        },
        "G-GA": {
          "displayName": "G-GA",
          "destination": "G-GA"
        },
        "G-GN": {
          "displayName": "G-GN",
          "destination": "G-GN"
        },
        "G-GR": {
          "displayName": "G-GR",
          "destination": "G-GR"
        },
        "G-GT": {
          "displayName": "G-GT",
          "destination": "G-GT"
        },
        "G-GC": {
          "displayName": "G-GC",
          "destination": "G-GC"
        },
        "G-GB": {
          "displayName": "G-GB",
          "destination": "G-GB"
        },
        "G-GE": {
          "displayName": "G-GE",
          "destination": "G-GE"
        },
        "G-GF": {
          "displayName": "G-GF",
          "destination": "G-GF"
        },
        "main": {
          "displayName": "Main",
          "destination": "MAIN"
        }
      }
    },
    "G-G-G1-922": {
      "firstVisit": true,
      "displayName": "Geography (General)",
      "description": "Description for \u201cGeography (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "G-G"
        }
      }
    },
    "G-G-G1000-3122": {
      "firstVisit": true,
      "displayName": "Atlases",
      "description": "Description for \u201cAtlases Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "G-G"
        }
      }
    },
    "G-G-G3180-9980": {
      "firstVisit": true,
      "displayName": "Maps",
      "description": "Description for \u201cMaps Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "G-G"
        }
      }
    },
    "G-G-G3160-3171": {
      "firstVisit": true,
      "displayName": "Globes",
      "description": "Description for \u201cGlobes Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "G-G"
        }
      }
    },
    "G-G": {
      "firstVisit": true,
      "displayName": "\u201cMaps Building\u201d Main Lobby",
      "description": "There are 4 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n\n[  South  ] \u201cGeography (General) Room\u201d\n[  North  ] \u201cAtlases Room\u201d\n[  East   ] \u201cMaps Room\u201d\n[  West   ] \u201cGlobes Room\u201d\n[  Exit   ] Geography, Anthropology, Recreation Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "G-G": {
          "displayName": "Exit",
          "destination": "Plaza-G"
        },
        "G-G-G1-922": {
          "displayName": "South",
          "destination": "G-G-G1-922"
        },
        "G-G-G1000-3122": {
          "displayName": "North",
          "destination": "G-G-G1000-3122"
        },
        "G-G-G3180-9980": {
          "displayName": "East",
          "destination": "G-G-G3180-9980"
        },
        "G-G-G3160-3171": {
          "displayName": "West",
          "destination": "G-G-G3160-3171"
        }
      }
    },
    "G-GV-GV1-1860": {
      "firstVisit": true,
      "displayName": "Recreation.  Leisure",
      "description": "Description for \u201cRecreation.  Leisure Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "G-GV"
        }
      }
    },
    "G-GV": {
      "firstVisit": true,
      "displayName": "\u201cRecreation.  Leisure Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cRecreation.  Leisure Room\u201d\n[  Exit   ] Geography, Anthropology, Recreation Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "G-GV": {
          "displayName": "Exit",
          "destination": "Plaza-G"
        },
        "G-GV-GV1-1860": {
          "displayName": "South",
          "destination": "G-GV-GV1-1860"
        }
      }
    },
    "G-GA-GA1-1776": {
      "firstVisit": true,
      "displayName": "Mathematical geography.  Cartography",
      "description": "Description for \u201cMathematical geography.  Cartography Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "G-GA"
        }
      }
    },
    "G-GA": {
      "firstVisit": true,
      "displayName": "\u201cMathematical geography.  Cartography Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cMathematical geography.  Cartography Room\u201d\n[  Exit   ] Geography, Anthropology, Recreation Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "G-GA": {
          "displayName": "Exit",
          "destination": "Plaza-G"
        },
        "G-GA-GA1-1776": {
          "displayName": "South",
          "destination": "G-GA-GA1-1776"
        }
      }
    },
    "G-GN-GN1-890": {
      "firstVisit": true,
      "displayName": "Anthropology",
      "description": "Description for \u201cAnthropology Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "G-GN"
        }
      }
    },
    "G-GN": {
      "firstVisit": true,
      "displayName": "\u201cAnthropology Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cAnthropology Room\u201d\n[  Exit   ] Geography, Anthropology, Recreation Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "G-GN": {
          "displayName": "Exit",
          "destination": "Plaza-G"
        },
        "G-GN-GN1-890": {
          "displayName": "South",
          "destination": "G-GN-GN1-890"
        }
      }
    },
    "G-GR-GR1-950": {
      "firstVisit": true,
      "displayName": "Folklore",
      "description": "Description for \u201cFolklore Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "G-GR"
        }
      }
    },
    "G-GR": {
      "firstVisit": true,
      "displayName": "\u201cFolklore Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cFolklore Room\u201d\n[  Exit   ] Geography, Anthropology, Recreation Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "G-GR": {
          "displayName": "Exit",
          "destination": "Plaza-G"
        },
        "G-GR-GR1-950": {
          "displayName": "South",
          "destination": "G-GR-GR1-950"
        }
      }
    },
    "G-GT-GT1-7070": {
      "firstVisit": true,
      "displayName": "Manners and customs (General)",
      "description": "Description for \u201cManners and customs (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "G-GT"
        }
      }
    },
    "G-GT": {
      "firstVisit": true,
      "displayName": "\u201cManners and customs (General) Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cManners and customs (General) Room\u201d\n[  Exit   ] Geography, Anthropology, Recreation Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "G-GT": {
          "displayName": "Exit",
          "destination": "Plaza-G"
        },
        "G-GT-GT1-7070": {
          "displayName": "South",
          "destination": "G-GT-GT1-7070"
        }
      }
    },
    "G-GC-GC1-1581": {
      "firstVisit": true,
      "displayName": "Oceanography",
      "description": "Description for \u201cOceanography Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "G-GC"
        }
      }
    },
    "G-GC": {
      "firstVisit": true,
      "displayName": "\u201cOceanography Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cOceanography Room\u201d\n[  Exit   ] Geography, Anthropology, Recreation Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "G-GC": {
          "displayName": "Exit",
          "destination": "Plaza-G"
        },
        "G-GC-GC1-1581": {
          "displayName": "South",
          "destination": "G-GC-GC1-1581"
        }
      }
    },
    "G-GB-GB3-5030": {
      "firstVisit": true,
      "displayName": "Physical geography",
      "description": "Description for \u201cPhysical geography Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "G-GB"
        }
      }
    },
    "G-GB": {
      "firstVisit": true,
      "displayName": "\u201cPhysical geography Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cPhysical geography Room\u201d\n[  Exit   ] Geography, Anthropology, Recreation Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "G-GB": {
          "displayName": "Exit",
          "destination": "Plaza-G"
        },
        "G-GB-GB3-5030": {
          "displayName": "South",
          "destination": "G-GB-GB3-5030"
        }
      }
    },
    "G-GE-GE1-350": {
      "firstVisit": true,
      "displayName": "Environmental sciences",
      "description": "Description for \u201cEnvironmental sciences Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "G-GE"
        }
      }
    },
    "G-GE": {
      "firstVisit": true,
      "displayName": "\u201cEnvironmental sciences Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cEnvironmental sciences Room\u201d\n[  Exit   ] Geography, Anthropology, Recreation Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "G-GE": {
          "displayName": "Exit",
          "destination": "Plaza-G"
        },
        "G-GE-GE1-350": {
          "displayName": "South",
          "destination": "G-GE-GE1-350"
        }
      }
    },
    "G-GF-GF1-900": {
      "firstVisit": true,
      "displayName": "Human ecology.  Anthropogeography",
      "description": "Description for \u201cHuman ecology.  Anthropogeography Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "G-GF"
        }
      }
    },
    "G-GF": {
      "firstVisit": true,
      "displayName": "\u201cHuman ecology.  Anthropogeography Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cHuman ecology.  Anthropogeography Room\u201d\n[  Exit   ] Geography, Anthropology, Recreation Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "G-GF": {
          "displayName": "Exit",
          "destination": "Plaza-G"
        },
        "G-GF-GF1-900": {
          "displayName": "South",
          "destination": "G-GF-GF1-900"
        }
      }
    },
    "Plaza-H": {
      "firstVisit": true,
      "displayName": "Social Sciences Plaza",
      "description": "You are in an plaza surrounded by 16 buildings conforming Social Sciences.\nThe buildings are accessible via their classification code, visible above the main door:\n\n[ H-HF  ] (1 story) \u201cCommerce Building\u201d\n[ H-HX  ] (1 story) \u201cSocialism.  Communism.  Anarchism Building\u201d\n[ H-HD  ] (1 story) \u201cIndustries.  Land use.  Labor Building\u201d\n[ H-HG  ] (1 story) \u201cFinance Building\u201d\n[ H-HB  ] (1 story) \u201cEconomic theory.  Demography Building\u201d\n[ H-HQ  ] (1 story) \u201cThe Family.  Marriage.  Women Building\u201d\n[ H-H   ] (1 story) \u201cSocial sciences (General) Building\u201d\n[ H-HE  ] (1 story) \u201cTransportation and communications Building\u201d\n[ H-HM  ] (1 story) \u201cSociology Building\u201d\n[ H-HJ  ] (1 story) \u201cPublic finance Building\u201d\n[ H-HN  ] (1 story) \u201cSocial history and conditions.  Social problems. Building\u201d\n[ H-HS  ] (1 story) \u201cSocieties: secret, benevolent, etc. Building\u201d\n[ H-HV  ] (1 story) \u201cSocial pathology.  Social and public welfare. Building\u201d\n[ H-HC  ] (1 story) \u201cEconomic history and conditions Building\u201d\n[ H-HA  ] (1 story) \u201cStatistics Building\u201d\n[ H-HT  ] (1 story) \u201cCommunities.  Classes.  Races Building\u201d\n[ Main  ] Main Library Grounds",
      "interactables": {},
      "items": {},
      "exits": {
        "H-HF": {
          "displayName": "H-HF",
          "destination": "H-HF"
        },
        "H-HX": {
          "displayName": "H-HX",
          "destination": "H-HX"
        },
        "H-HD": {
          "displayName": "H-HD",
          "destination": "H-HD"
        },
        "H-HG": {
          "displayName": "H-HG",
          "destination": "H-HG"
        },
        "H-HB": {
          "displayName": "H-HB",
          "destination": "H-HB"
        },
        "H-HQ": {
          "displayName": "H-HQ",
          "destination": "H-HQ"
        },
        "H-H": {
          "displayName": "H-H",
          "destination": "H-H"
        },
        "H-HE": {
          "displayName": "H-HE",
          "destination": "H-HE"
        },
        "H-HM": {
          "displayName": "H-HM",
          "destination": "H-HM"
        },
        "H-HJ": {
          "displayName": "H-HJ",
          "destination": "H-HJ"
        },
        "H-HN": {
          "displayName": "H-HN",
          "destination": "H-HN"
        },
        "H-HS": {
          "displayName": "H-HS",
          "destination": "H-HS"
        },
        "H-HV": {
          "displayName": "H-HV",
          "destination": "H-HV"
        },
        "H-HC": {
          "displayName": "H-HC",
          "destination": "H-HC"
        },
        "H-HA": {
          "displayName": "H-HA",
          "destination": "H-HA"
        },
        "H-HT": {
          "displayName": "H-HT",
          "destination": "H-HT"
        },
        "main": {
          "displayName": "Main",
          "destination": "MAIN"
        }
      }
    },
    "H-HF-HF1-6182": {
      "firstVisit": true,
      "displayName": "Commerce",
      "description": "Description for \u201cCommerce Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "H-HF"
        }
      }
    },
    "H-HF": {
      "firstVisit": true,
      "displayName": "\u201cCommerce Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cCommerce Room\u201d\n[  Exit   ] Social Sciences Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "H-HF": {
          "displayName": "Exit",
          "destination": "Plaza-H"
        },
        "H-HF-HF1-6182": {
          "displayName": "South",
          "destination": "H-HF-HF1-6182"
        }
      }
    },
    "H-HX-HX1-970.7": {
      "firstVisit": true,
      "displayName": "Socialism.  Communism.  Anarchism",
      "description": "Description for \u201cSocialism.  Communism.  Anarchism Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "H-HX"
        }
      }
    },
    "H-HX": {
      "firstVisit": true,
      "displayName": "\u201cSocialism.  Communism.  Anarchism Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cSocialism.  Communism.  Anarchism Room\u201d\n[  Exit   ] Social Sciences Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "H-HX": {
          "displayName": "Exit",
          "destination": "Plaza-H"
        },
        "H-HX-HX1-970.7": {
          "displayName": "South",
          "destination": "H-HX-HX1-970.7"
        }
      }
    },
    "H-HD-HD28-9999": {
      "firstVisit": true,
      "displayName": "Industries.  Land use.  Labor",
      "description": "Description for \u201cIndustries.  Land use.  Labor Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "H-HD"
        }
      }
    },
    "H-HD": {
      "firstVisit": true,
      "displayName": "\u201cIndustries.  Land use.  Labor Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cIndustries.  Land use.  Labor Room\u201d\n[  Exit   ] Social Sciences Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "H-HD": {
          "displayName": "Exit",
          "destination": "Plaza-H"
        },
        "H-HD-HD28-9999": {
          "displayName": "South",
          "destination": "H-HD-HD28-9999"
        }
      }
    },
    "H-HG-HG1-9999": {
      "firstVisit": true,
      "displayName": "Finance",
      "description": "Description for \u201cFinance Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "H-HG"
        }
      }
    },
    "H-HG": {
      "firstVisit": true,
      "displayName": "\u201cFinance Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cFinance Room\u201d\n[  Exit   ] Social Sciences Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "H-HG": {
          "displayName": "Exit",
          "destination": "Plaza-H"
        },
        "H-HG-HG1-9999": {
          "displayName": "South",
          "destination": "H-HG-HG1-9999"
        }
      }
    },
    "H-HB-HB1-3840": {
      "firstVisit": true,
      "displayName": "Economic theory.  Demography",
      "description": "Description for \u201cEconomic theory.  Demography Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "H-HB"
        }
      }
    },
    "H-HB": {
      "firstVisit": true,
      "displayName": "\u201cEconomic theory.  Demography Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cEconomic theory.  Demography Room\u201d\n[  Exit   ] Social Sciences Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "H-HB": {
          "displayName": "Exit",
          "destination": "Plaza-H"
        },
        "H-HB-HB1-3840": {
          "displayName": "South",
          "destination": "H-HB-HB1-3840"
        }
      }
    },
    "H-HQ-HQ1-2044": {
      "firstVisit": true,
      "displayName": "The Family.  Marriage.  Women",
      "description": "Description for \u201cThe Family.  Marriage.  Women Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "H-HQ"
        }
      }
    },
    "H-HQ": {
      "firstVisit": true,
      "displayName": "\u201cThe Family.  Marriage.  Women Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cThe Family.  Marriage.  Women Room\u201d\n[  Exit   ] Social Sciences Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "H-HQ": {
          "displayName": "Exit",
          "destination": "Plaza-H"
        },
        "H-HQ-HQ1-2044": {
          "displayName": "South",
          "destination": "H-HQ-HQ1-2044"
        }
      }
    },
    "H-H-H1-99": {
      "firstVisit": true,
      "displayName": "Social sciences (General)",
      "description": "Description for \u201cSocial sciences (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "H-H"
        }
      }
    },
    "H-H": {
      "firstVisit": true,
      "displayName": "\u201cSocial sciences (General) Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cSocial sciences (General) Room\u201d\n[  Exit   ] Social Sciences Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "H-H": {
          "displayName": "Exit",
          "destination": "Plaza-H"
        },
        "H-H-H1-99": {
          "displayName": "South",
          "destination": "H-H-H1-99"
        }
      }
    },
    "H-HE-HE1-9990": {
      "firstVisit": true,
      "displayName": "Transportation and communications",
      "description": "Description for \u201cTransportation and communications Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "H-HE"
        }
      }
    },
    "H-HE": {
      "firstVisit": true,
      "displayName": "\u201cTransportation and communications Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cTransportation and communications Room\u201d\n[  Exit   ] Social Sciences Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "H-HE": {
          "displayName": "Exit",
          "destination": "Plaza-H"
        },
        "H-HE-HE1-9990": {
          "displayName": "South",
          "destination": "H-HE-HE1-9990"
        }
      }
    },
    "H-HM-HM1-1281": {
      "firstVisit": true,
      "displayName": "Sociology",
      "description": "Description for \u201cSociology Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "H-HM"
        }
      }
    },
    "H-HM": {
      "firstVisit": true,
      "displayName": "\u201cSociology Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cSociology Room\u201d\n[  Exit   ] Social Sciences Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "H-HM": {
          "displayName": "Exit",
          "destination": "Plaza-H"
        },
        "H-HM-HM1-1281": {
          "displayName": "South",
          "destination": "H-HM-HM1-1281"
        }
      }
    },
    "H-HJ-HJ9-9940": {
      "firstVisit": true,
      "displayName": "Public finance",
      "description": "Description for \u201cPublic finance Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "H-HJ"
        }
      }
    },
    "H-HJ": {
      "firstVisit": true,
      "displayName": "\u201cPublic finance Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cPublic finance Room\u201d\n[  Exit   ] Social Sciences Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "H-HJ": {
          "displayName": "Exit",
          "destination": "Plaza-H"
        },
        "H-HJ-HJ9-9940": {
          "displayName": "South",
          "destination": "H-HJ-HJ9-9940"
        }
      }
    },
    "H-HN-HN1-995": {
      "firstVisit": true,
      "displayName": "Social history and conditions.  Social problems.",
      "description": "Description for \u201cSocial history and conditions.  Social problems. Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "H-HN"
        }
      }
    },
    "H-HN": {
      "firstVisit": true,
      "displayName": "\u201cSocial history and conditions.  Social problems. Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cSocial history and conditions.  Social problems. Room\u201d\n[  Exit   ] Social Sciences Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "H-HN": {
          "displayName": "Exit",
          "destination": "Plaza-H"
        },
        "H-HN-HN1-995": {
          "displayName": "South",
          "destination": "H-HN-HN1-995"
        }
      }
    },
    "H-HS-HS1-3371": {
      "firstVisit": true,
      "displayName": "Societies: secret, benevolent, etc.",
      "description": "Description for \u201cSocieties: secret, benevolent, etc. Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "H-HS"
        }
      }
    },
    "H-HS": {
      "firstVisit": true,
      "displayName": "\u201cSocieties: secret, benevolent, etc. Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cSocieties: secret, benevolent, etc. Room\u201d\n[  Exit   ] Social Sciences Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "H-HS": {
          "displayName": "Exit",
          "destination": "Plaza-H"
        },
        "H-HS-HS1-3371": {
          "displayName": "South",
          "destination": "H-HS-HS1-3371"
        }
      }
    },
    "H-HV-HV1-9960": {
      "firstVisit": true,
      "displayName": "Social pathology.  Social and public welfare.",
      "description": "Description for \u201cSocial pathology.  Social and public welfare. Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "H-HV"
        }
      }
    },
    "H-HV": {
      "firstVisit": true,
      "displayName": "\u201cSocial pathology.  Social and public welfare. Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cSocial pathology.  Social and public welfare. Room\u201d\n[  Exit   ] Social Sciences Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "H-HV": {
          "displayName": "Exit",
          "destination": "Plaza-H"
        },
        "H-HV-HV1-9960": {
          "displayName": "South",
          "destination": "H-HV-HV1-9960"
        }
      }
    },
    "H-HC-HC10-1085": {
      "firstVisit": true,
      "displayName": "Economic history and conditions",
      "description": "Description for \u201cEconomic history and conditions Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "H-HC"
        }
      }
    },
    "H-HC": {
      "firstVisit": true,
      "displayName": "\u201cEconomic history and conditions Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cEconomic history and conditions Room\u201d\n[  Exit   ] Social Sciences Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "H-HC": {
          "displayName": "Exit",
          "destination": "Plaza-H"
        },
        "H-HC-HC10-1085": {
          "displayName": "South",
          "destination": "H-HC-HC10-1085"
        }
      }
    },
    "H-HA-HA1-4737": {
      "firstVisit": true,
      "displayName": "Statistics",
      "description": "Description for \u201cStatistics Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "H-HA"
        }
      }
    },
    "H-HA": {
      "firstVisit": true,
      "displayName": "\u201cStatistics Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cStatistics Room\u201d\n[  Exit   ] Social Sciences Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "H-HA": {
          "displayName": "Exit",
          "destination": "Plaza-H"
        },
        "H-HA-HA1-4737": {
          "displayName": "South",
          "destination": "H-HA-HA1-4737"
        }
      }
    },
    "H-HT-HT51-1595": {
      "firstVisit": true,
      "displayName": "Communities.  Classes.  Races",
      "description": "Description for \u201cCommunities.  Classes.  Races Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "H-HT"
        }
      }
    },
    "H-HT": {
      "firstVisit": true,
      "displayName": "\u201cCommunities.  Classes.  Races Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cCommunities.  Classes.  Races Room\u201d\n[  Exit   ] Social Sciences Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "H-HT": {
          "displayName": "Exit",
          "destination": "Plaza-H"
        },
        "H-HT-HT51-1595": {
          "displayName": "South",
          "destination": "H-HT-HT51-1595"
        }
      }
    },
    "Plaza-J": {
      "firstVisit": true,
      "displayName": "Political Science Plaza",
      "description": "You are in an plaza surrounded by 13 buildings conforming Political Science.\nThe buildings are accessible via their classification code, visible above the main door:\n\n[ J-JF  ] (1 story) \u201cPolitical institutions and public administration Building\u201d\n[ J-JC  ] (1 story) \u201cPolitical theory.  The state.  Theories of the state Building\u201d\n[ J-JK  ] (1 story) \u201cPolitical institutions and public administration Building\u201d\n[ J-JS  ] (1 story) \u201cLocal government.  Municipal government Building\u201d\n[ J-JV  ] (1 story) \u201cColonies and colonization.  Emigration and Building\u201d\n[ J-JA  ] (1 story) \u201cPolitical science (General) Building\u201d\n[ J-JX  ] (1 story) \u201cInternational law, see JZ and KZ Building\u201d\n[ J-JN  ] (1 story) \u201cPolitical institutions and public administration (Europe) Building\u201d\n[ J-JZ  ] (1 story) \u201cInternational relations Building\u201d\n[ J-JL  ] (1 story) \u201cPolitical institutions and public administration Building\u201d\n[ J-J   ] (1 story) \u201cGeneral legislative and executive papers Building\u201d\n[ J-JQ  ] (1 story) \u201cPolitical institutions and public administration (Asia, Building\u201d\n[ J-JJ  ] (1 story) \u201cPolitical institutions and public administration Building\u201d\n[ Main  ] Main Library Grounds",
      "interactables": {},
      "items": {},
      "exits": {
        "J-JF": {
          "displayName": "J-JF",
          "destination": "J-JF"
        },
        "J-JC": {
          "displayName": "J-JC",
          "destination": "J-JC"
        },
        "J-JK": {
          "displayName": "J-JK",
          "destination": "J-JK"
        },
        "J-JS": {
          "displayName": "J-JS",
          "destination": "J-JS"
        },
        "J-JV": {
          "displayName": "J-JV",
          "destination": "J-JV"
        },
        "J-JA": {
          "displayName": "J-JA",
          "destination": "J-JA"
        },
        "J-JX": {
          "displayName": "J-JX",
          "destination": "J-JX"
        },
        "J-JN": {
          "displayName": "J-JN",
          "destination": "J-JN"
        },
        "J-JZ": {
          "displayName": "J-JZ",
          "destination": "J-JZ"
        },
        "J-JL": {
          "displayName": "J-JL",
          "destination": "J-JL"
        },
        "J-J": {
          "displayName": "J-J",
          "destination": "J-J"
        },
        "J-JQ": {
          "displayName": "J-JQ",
          "destination": "J-JQ"
        },
        "J-JJ": {
          "displayName": "J-JJ",
          "destination": "J-JJ"
        },
        "main": {
          "displayName": "Main",
          "destination": "MAIN"
        }
      }
    },
    "J-JF-JF20-1177": {
      "firstVisit": true,
      "displayName": "General.  Comparative government",
      "description": "Description for \u201cGeneral.  Comparative government Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "J-JF"
        }
      }
    },
    "J-JF-JF20-2112": {
      "firstVisit": true,
      "displayName": "Political institutions and public administration",
      "description": "Description for \u201cPolitical institutions and public administration Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "J-JF"
        }
      }
    },
    "J-JF": {
      "firstVisit": true,
      "displayName": "\u201cPolitical institutions and public administration Building\u201d Main Lobby",
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n\n[  South  ] \u201cGeneral.  Comparative government Room\u201d\n[  North  ] \u201cPolitical institutions and public administration Room\u201d\n[  Exit   ] Political Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "J-JF": {
          "displayName": "Exit",
          "destination": "Plaza-J"
        },
        "J-JF-JF20-1177": {
          "displayName": "South",
          "destination": "J-JF-JF20-1177"
        },
        "J-JF-JF20-2112": {
          "displayName": "North",
          "destination": "J-JF-JF20-2112"
        }
      }
    },
    "J-JC-JC11-605": {
      "firstVisit": true,
      "displayName": "Political theory.  The state.  Theories of the state",
      "description": "Description for \u201cPolitical theory.  The state.  Theories of the state Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "J-JC"
        }
      }
    },
    "J-JC": {
      "firstVisit": true,
      "displayName": "\u201cPolitical theory.  The state.  Theories of the state Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cPolitical theory.  The state.  Theories of the state Room\u201d\n[  Exit   ] Political Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "J-JC": {
          "displayName": "Exit",
          "destination": "Plaza-J"
        },
        "J-JC-JC11-605": {
          "displayName": "South",
          "destination": "J-JC-JC11-605"
        }
      }
    },
    "J-JK-JK1-9993": {
      "firstVisit": true,
      "displayName": "Political institutions and public administration",
      "description": "Description for \u201cPolitical institutions and public administration Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "J-JK"
        }
      }
    },
    "J-JK-JK1-9593": {
      "firstVisit": true,
      "displayName": "United States",
      "description": "Description for \u201cUnited States Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "J-JK"
        }
      }
    },
    "J-JK": {
      "firstVisit": true,
      "displayName": "\u201cPolitical institutions and public administration Building\u201d Main Lobby",
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n\n[  South  ] \u201cPolitical institutions and public administration Room\u201d\n[  North  ] \u201cUnited States Room\u201d\n[  Exit   ] Political Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "J-JK": {
          "displayName": "Exit",
          "destination": "Plaza-J"
        },
        "J-JK-JK1-9993": {
          "displayName": "South",
          "destination": "J-JK-JK1-9993"
        },
        "J-JK-JK1-9593": {
          "displayName": "North",
          "destination": "J-JK-JK1-9593"
        }
      }
    },
    "J-JS-JS39-8500": {
      "firstVisit": true,
      "displayName": "Local government.  Municipal government",
      "description": "Description for \u201cLocal government.  Municipal government Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "J-JS"
        }
      }
    },
    "J-JS": {
      "firstVisit": true,
      "displayName": "\u201cLocal government.  Municipal government Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLocal government.  Municipal government Room\u201d\n[  Exit   ] Political Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "J-JS": {
          "displayName": "Exit",
          "destination": "Plaza-J"
        },
        "J-JS-JS39-8500": {
          "displayName": "South",
          "destination": "J-JS-JS39-8500"
        }
      }
    },
    "J-JV-JV1-9480": {
      "firstVisit": true,
      "displayName": "Colonies and colonization.  Emigration and",
      "description": "Description for \u201cColonies and colonization.  Emigration and Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "J-JV"
        }
      }
    },
    "J-JV": {
      "firstVisit": true,
      "displayName": "\u201cColonies and colonization.  Emigration and Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cColonies and colonization.  Emigration and Room\u201d\n[  Exit   ] Political Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "J-JV": {
          "displayName": "Exit",
          "destination": "Plaza-J"
        },
        "J-JV-JV1-9480": {
          "displayName": "South",
          "destination": "J-JV-JV1-9480"
        }
      }
    },
    "J-JA-JA1-92": {
      "firstVisit": true,
      "displayName": "Political science (General)",
      "description": "Description for \u201cPolitical science (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "J-JA"
        }
      }
    },
    "J-JA": {
      "firstVisit": true,
      "displayName": "\u201cPolitical science (General) Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cPolitical science (General) Room\u201d\n[  Exit   ] Political Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "J-JA": {
          "displayName": "Exit",
          "destination": "Plaza-J"
        },
        "J-JA-JA1-92": {
          "displayName": "South",
          "destination": "J-JA-JA1-92"
        }
      }
    },
    "J-JX-JX1-6650": {
      "firstVisit": true,
      "displayName": "International law, see JZ and KZ",
      "description": "Description for \u201cInternational law, see JZ and KZ Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "J-JX"
        }
      }
    },
    "J-JX": {
      "firstVisit": true,
      "displayName": "\u201cInternational law, see JZ and KZ Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cInternational law, see JZ and KZ Room\u201d\n[  Exit   ] Political Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "J-JX": {
          "displayName": "Exit",
          "destination": "Plaza-J"
        },
        "J-JX-JX1-6650": {
          "displayName": "South",
          "destination": "J-JX-JX1-6650"
        }
      }
    },
    "J-JN-JN1-9689": {
      "firstVisit": true,
      "displayName": "Political institutions and public administration (Europe)",
      "description": "Description for \u201cPolitical institutions and public administration (Europe) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "J-JN"
        }
      }
    },
    "J-JN": {
      "firstVisit": true,
      "displayName": "\u201cPolitical institutions and public administration (Europe) Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cPolitical institutions and public administration (Europe) Room\u201d\n[  Exit   ] Political Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "J-JN": {
          "displayName": "Exit",
          "destination": "Plaza-J"
        },
        "J-JN-JN1-9689": {
          "displayName": "South",
          "destination": "J-JN-JN1-9689"
        }
      }
    },
    "J-JZ-JZ5-6530": {
      "firstVisit": true,
      "displayName": "International relations",
      "description": "Description for \u201cInternational relations Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "J-JZ"
        }
      }
    },
    "J-JZ": {
      "firstVisit": true,
      "displayName": "\u201cInternational relations Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cInternational relations Room\u201d\n[  Exit   ] Political Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "J-JZ": {
          "displayName": "Exit",
          "destination": "Plaza-J"
        },
        "J-JZ-JZ5-6530": {
          "displayName": "South",
          "destination": "J-JZ-JZ5-6530"
        }
      }
    },
    "J-JL-JL1-3899": {
      "firstVisit": true,
      "displayName": "Political institutions and public administration",
      "description": "Description for \u201cPolitical institutions and public administration Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "J-JL"
        }
      }
    },
    "J-JL": {
      "firstVisit": true,
      "displayName": "\u201cPolitical institutions and public administration Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cPolitical institutions and public administration Room\u201d\n[  Exit   ] Political Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "J-JL": {
          "displayName": "Exit",
          "destination": "Plaza-J"
        },
        "J-JL-JL1-3899": {
          "displayName": "South",
          "destination": "J-JL-JL1-3899"
        }
      }
    },
    "J-J-J1-981": {
      "firstVisit": true,
      "displayName": "General legislative and executive papers",
      "description": "Description for \u201cGeneral legislative and executive papers Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "J-J"
        }
      }
    },
    "J-J": {
      "firstVisit": true,
      "displayName": "\u201cGeneral legislative and executive papers Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cGeneral legislative and executive papers Room\u201d\n[  Exit   ] Political Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "J-J": {
          "displayName": "Exit",
          "destination": "Plaza-J"
        },
        "J-J-J1-981": {
          "displayName": "South",
          "destination": "J-J-J1-981"
        }
      }
    },
    "J-JQ-JQ21-6651": {
      "firstVisit": true,
      "displayName": "Political institutions and public administration (Asia,",
      "description": "Description for \u201cPolitical institutions and public administration (Asia, Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "J-JQ"
        }
      }
    },
    "J-JQ": {
      "firstVisit": true,
      "displayName": "\u201cPolitical institutions and public administration (Asia, Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cPolitical institutions and public administration (Asia, Room\u201d\n[  Exit   ] Political Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "J-JQ": {
          "displayName": "Exit",
          "destination": "Plaza-J"
        },
        "J-JQ-JQ21-6651": {
          "displayName": "South",
          "destination": "J-JQ-JQ21-6651"
        }
      }
    },
    "J-JJ-JJ1000-1019": {
      "firstVisit": true,
      "displayName": "Political institutions and public administration",
      "description": "Description for \u201cPolitical institutions and public administration Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "J-JJ"
        }
      }
    },
    "J-JJ": {
      "firstVisit": true,
      "displayName": "\u201cPolitical institutions and public administration Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cPolitical institutions and public administration Room\u201d\n[  Exit   ] Political Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "J-JJ": {
          "displayName": "Exit",
          "destination": "Plaza-J"
        },
        "J-JJ-JJ1000-1019": {
          "displayName": "South",
          "destination": "J-JJ-JJ1000-1019"
        }
      }
    },
    "Plaza-K": {
      "firstVisit": true,
      "displayName": "Law Plaza",
      "description": "You are in an plaza surrounded by 275 buildings conforming Law.\nThe buildings are accessible via their classification code, visible above the main door:\n\n[ K-KF  ] (1 story) \u201cLaw of the United States (Federal) Building\u201d\n[ K-KFW ] (1 story) \u201cLaw of Washington Building\u201d\n[ K-KFM ] (1 story) \u201cLaw of Maine Building\u201d\n[ K-KFT ] (1 story) \u201cLaw of Tennessee Building\u201d\n[ K-K   ] (3 stories) \u201cComparative law.  International uniform law Building\u201d\n[ K-KZ  ] (1 story) \u201cLaw of nations Building\u201d\n[ K-KD  ] (1 story) \u201cLaw of England and Wales Building\u201d\n[ K-KFP ] (1 story) \u201cLaw of Pennsylvania Building\u201d\n[ K-KFI ] (1 story) \u201cLaw of Idaho Building\u201d\n[ K-KFN ] (1 story) \u201cLaw of Nebraska Building\u201d\n[ K-KFC ] (1 story) \u201cLaw of California Building\u201d\n[ K-KFO ] (1 story) \u201cLaw of Ohio Building\u201d\n[ K-KFL ] (1 story) \u201cLaw of Louisiana Building\u201d\n[ K-KFA ] (1 story) \u201cLaw of Alabama Building\u201d\n[ K-KLA ] (1 story) \u201cRussia, Soviet Union Building\u201d\n[ K-KKT ] (1 story) \u201cLaw of Spain Building\u201d\n[ K-KMT ] (1 story) \u201cSaudi Arabia Building\u201d\n[ K-KJM ] (1 story) \u201cLaw of Croatia Building\u201d\n[ K-KBP ] (1 story) \u201cIslamic law.  Shar\u012b\u02bbah.  Fiqh Building\u201d\n[ K-KBR ] (1 story) \u201cHistory of canon law Building\u201d\n[ K-KZA ] (1 story) \u201cLaw of the sea Building\u201d\n[ K-KNQ ] (1 story) \u201cChina (People\u2019s Republic, 1949-    ) Building\u201d\n[ K-KJE ] (1 story) \u201cRegional organization and integration (Europe) Building\u201d\n[ K-KFV ] (1 story) \u201cLaw of Vermont Building\u201d\n[ K-KNN ] (1 story) \u201cLaw of China Building\u201d\n[ K-KMM ] (1 story) \u201cWest Bank Building\u201d\n[ K-KJC ] (1 story) \u201cRegional comparative and uniform law (Europe) Building\u201d\n[ K-KMK ] (1 story) \u201cIsrael Building\u201d\n[ K-KTL ] (1 story) \u201cSouth Africa, Republic of Building\u201d\n[ K-KMC ] (1 story) \u201cRegional comparative and uniform law Building\u201d\n[ K-KEN ] (1 story) \u201cLaw of New Brunswick Building\u201d\n[ K-KRP ] (1 story) \u201cEthiopia Building\u201d\n[ K-KJA ] (1 story) \u201cRoman Law Building\u201d\n[ K-KJV ] (1 story) \u201cLaw of France Building\u201d\n[ K-KBU ] (1 story) \u201cLaw of the Roman Catholic Church. The Holy See Building\u201d\n[ K-KLB ] (1 story) \u201cRussia (Federation, 1992-    ) Building\u201d\n[ K-KK  ] (1 story) \u201cLaw of Germany Building\u201d\n[ K-KFG ] (1 story) \u201cLaw of Georgia Building\u201d\n[ K-KHA ] (1 story) \u201cArgentina Building\u201d\n[ K-KLW ] (1 story) \u201cUzbekistan Building\u201d\n[ K-KNW ] (1 story) \u201cIndonesia Building\u201d\n[ K-KQC ] (1 story) \u201cRegional comparative and uniform law Building\u201d\n[ K-KDZ ] (1 story) \u201cAmerica.  North America Building\u201d\n[ K-KFK ] (1 story) \u201cLaw of Kansas Building\u201d\n[ K-KDC ] (1 story) \u201cLaw of Scotland Building\u201d\n[ K-KNR ] (1 story) \u201cHong Kong Building\u201d\n[ K-KFF ] (1 story) \u201cLaw of Florida Building\u201d\n[ K-KBM ] (1 story) \u201cJewish law.  Halakah Building\u201d\n[ K-KJ  ] (1 story) \u201cHistory of Law (Europe) Building\u201d\n[ K-KL  ] (1 story) \u201cHistory of law.  The ancient orient Building\u201d\n[ K-KE  ] (1 story) \u201cLaw of Canada Building\u201d\n[ K-KFD ] (1 story) \u201cLaw of Delaware Building\u201d\n[ K-KDK ] (1 story) \u201cLaw of Ireland (Eire) Building\u201d\n[ K-KTT ] (1 story) \u201cTanzania Building\u201d\n[ K-KNX ] (1 story) \u201cConstitutional law Building\u201d\n[ K-KTY ] (1 story) \u201cZambia Building\u201d\n[ K-KFS ] (1 story) \u201cLaw of South Carolina Building\u201d\n[ K-KNC ] (1 story) \u201cRegional comparative and uniform law Building\u201d\n[ K-KFH ] (1 story) \u201cLaw of Hawaii Building\u201d\n[ K-KFX ] (1 story) \u201cLaws of the cities Building\u201d\n[ K-KJT ] (1 story) \u201cLaw of Finland Building\u201d\n[ K-KQW ] (1 story) \u201cCameroon Building\u201d\n[ K-KB  ] (1 story) \u201cReligious law in general.  Comparative religious law. Building\u201d\n[ K-KGL ] (1 story) \u201cBritish West Indies (General) Building\u201d\n[ K-KGF ] (1 story) \u201cMexico Building\u201d\n[ K-KPL ] (1 story) \u201cPakistan Building\u201d\n[ K-KNS ] (1 story) \u201cHistory of law Building\u201d\n[ K-KFR ] (1 story) \u201cLaw of Rhode Island Building\u201d\n[ K-KGV ] (1 story) \u201cPuerto Rico Building\u201d\n[ K-KKW ] (1 story) \u201cLaw of Switzerland Building\u201d\n[ K-KKE ] (1 story) \u201cLaw of Greece Building\u201d\n[ K-KKY ] (1 story) \u201cLaw of Ukraine Building\u201d\n[ K-KKP ] (1 story) \u201cLaw of Poland Building\u201d\n[ K-KKM ] (1 story) \u201cLaw of Netherlands Building\u201d\n[ K-KKK ] (1 story) \u201cLaw of Malta Building\u201d\n[ K-KJK ] (1 story) \u201cLaw of Bosnia and Hercegovina Building\u201d\n[ K-KKH ] (1 story) \u201cLaw of Kosovo Building\u201d\n[ K-KKJ ] (1 story) \u201cLaw of Lithuania Building\u201d\n[ K-KGD ] (1 story) \u201cGuatemala Building\u201d\n[ K-KHQ ] (1 story) \u201cPeru Building\u201d\n[ K-KST ] (1 story) \u201cMali Building\u201d\n[ K-KTA ] (1 story) \u201cNigeria Building\u201d\n[ K-KGS ] (1 story) \u201cHaiti Building\u201d\n[ K-KHH ] (1 story) \u201cColombia Building\u201d\n[ K-KG  ] (1 story) \u201cLatin America (General) Building\u201d\n[ K-KHK ] (1 story) \u201cEcuador Building\u201d\n[ K-KHC ] (1 story) \u201cBolivia Building\u201d\n[ K-KNP ] (1 story) \u201cChina (Republic, 1949-    ).  Taiwan Building\u201d\n[ K-KLR ] (1 story) \u201cKhorezmskai\uf04da Sovetskai\uf04da Sot\uf04dsialisticheskai\uf04da Building\u201d\n[ K-KTZ ] (1 story) \u201cZimbabwe Building\u201d\n[ K-KBS ] (1 story) \u201cCanon law of Eastern Churches Building\u201d\n[ K-KPA ] (1 story) \u201cKorea.  South Korea Building\u201d\n[ K-KUQ ] (1 story) \u201cNew Zealand Building\u201d\n[ K-KVN ] (1 story) \u201cFiji Building\u201d\n[ K-KVW ] (1 story) \u201cNew Caledonia Building\u201d\n[ K-KFU ] (1 story) \u201cLaw of Utah Building\u201d\n[ K-KJR ] (1 story) \u201cLaw of Denmark Building\u201d\n[ K-KKQ ] (1 story) \u201cLaw of Portugal Building\u201d\n[ K-KJS ] (1 story) \u201cLaw of Estonia Building\u201d\n[ K-KKZ ] (1 story) \u201cLaw of Yugoslavia Building\u201d\n[ K-KJP ] (1 story) \u201cLaw of Czech Republic (1993-        ) Building\u201d\n[ K-KGB ] (1 story) \u201cCosta Rica Building\u201d\n[ K-KHW ] (1 story) \u201cVenezuela Building\u201d\n[ K-KGE ] (1 story) \u201cHonduras Building\u201d\n[ K-KGG ] (1 story) \u201cNicaragua Building\u201d\n[ K-KHF ] (1 story) \u201cChile Building\u201d\n[ K-KHP ] (1 story) \u201cParaguay Building\u201d\n[ K-KKA ] (1 story) \u201cLaw of East Germany Building\u201d\n[ K-KKV ] (1 story) \u201cLaw of Sweden Building\u201d\n[ K-KSW ] (1 story) \u201cMorocco Building\u201d\n[ K-KM  ] (1 story) \u201cGeneral Building\u201d\n[ K-KLF ] (1 story) \u201cBelarus (Republic) Building\u201d\n[ K-KH  ] (1 story) \u201cGeneral Building\u201d\n[ K-KPT ] (1 story) \u201cThailand Building\u201d\n[ K-KPM ] (1 story) \u201cPhilippines Building\u201d\n[ K-KPV ] (1 story) \u201cVietnam Building\u201d\n[ K-KPP ] (1 story) \u201cSingapore Building\u201d\n[ K-KMH ] (1 story) \u201cIran Building\u201d\n[ K-KSV ] (1 story) \u201cMayotte Building\u201d\n[ K-KSY ] (1 story) \u201cNamibia Building\u201d\n[ K-KQK ] (1 story) \u201cBotswana Building\u201d\n[ K-KQH ] (1 story) \u201cAngola Building\u201d\n[ K-KSX ] (1 story) \u201cMozambique Building\u201d\n[ K-KSK ] (1 story) \u201cKenya Building\u201d\n[ K-KRU ] (1 story) \u201cGabon Building\u201d\n[ K-KSL ] (1 story) \u201cLesotho Building\u201d\n[ K-KRX ] (1 story) \u201cGhana Building\u201d\n[ K-KSS ] (1 story) \u201cMalawi Building\u201d\n[ K-KTW ] (1 story) \u201cUganda Building\u201d\n[ K-KTD ] (1 story) \u201cRwanda Building\u201d\n[ K-KTX ] (1 story) \u201cCongo (Democratic Republic) Building\u201d\n[ K-KRS ] (1 story) \u201cFrench West Africa Building\u201d\n[ K-KTG ] (1 story) \u201cSenegal Building\u201d\n[ K-KKX ] (1 story) \u201cLaw of Turkey Building\u201d\n[ K-KLE ] (1 story) \u201cAzerbaijan Building\u201d\n[ K-KRM ] (1 story) \u201cEgypt Building\u201d\n[ K-KMN ] (1 story) \u201cKuwait Building\u201d\n[ K-KMX ] (1 story) \u201cYemen Building\u201d\n[ K-KTQ ] (1 story) \u201cSudan Building\u201d\n[ K-KQG ] (1 story) \u201cAlgeria Building\u201d\n[ K-KMV ] (1 story) \u201cUnited Arab Emirates Building\u201d\n[ K-KHD ] (1 story) \u201cBrazil Building\u201d\n[ K-KHN ] (1 story) \u201cGuyana Building\u201d\n[ K-KHU ] (1 story) \u201cUruguay Building\u201d\n[ K-KLS ] (1 story) \u201cKyrgyzstan Building\u201d\n[ K-KSA ] (1 story) \u201cGuinea Building\u201d\n[ K-KPF ] (1 story) \u201cMacao Building\u201d\n[ K-KLD ] (1 story) \u201cArmenian SSR (to 1991) Building\u201d\n[ K-KTV ] (1 story) \u201cTunisia Building\u201d\n[ K-KMP ] (1 story) \u201cLebanon Building\u201d\n[ K-KMF ] (1 story) \u201cBahrain Building\u201d\n[ K-KKS ] (1 story) \u201cLaw of Slovenia Building\u201d\n[ K-KJW ] (1 story) \u201cFrench regions, provinces, cities, etc. Building\u201d\n[ K-KJJ ] (1 story) \u201cLaw of Austria Building\u201d\n[ K-KZD ] (1 story) \u201cSpace law.  Law of outer space Building\u201d\n[ K-KWW ] (1 story) \u201cWestern Samoa Building\u201d\n[ K-KVP ] (1 story) \u201cFrench Polynesia Building\u201d\n[ K-KEO ] (1 story) \u201cLaw of Ontario Building\u201d\n[ K-KEA ] (1 story) \u201cLaw of Alberta Building\u201d\n[ K-KEB ] (1 story) \u201cLaw of British Columbia Building\u201d\n[ K-KEQ ] (1 story) \u201cLaw of Qu\u00e9bec Building\u201d\n[ K-KWH ] (1 story) \u201cPapua New Guinea Building\u201d\n[ K-KVS ] (1 story) \u201cMidway Islands Building\u201d\n[ K-KWG ] (1 story) \u201cPalau Building\u201d\n[ K-KVQ ] (1 story) \u201cGuam Building\u201d\n[ K-KJN ] (1 story) \u201cLaw of Cyprus Building\u201d\n[ K-KKF ] (1 story) \u201cLaw of Hungary Building\u201d\n[ K-KHM ] (1 story) \u201cFrench Guiana Building\u201d\n[ K-KKN ] (1 story) \u201cLaw of Norway Building\u201d\n[ K-KRB ] (1 story) \u201cCentral African Republic Building\u201d\n[ K-KTU ] (1 story) \u201cTogo Building\u201d\n[ K-KQT ] (1 story) \u201cBurkina Faso Building\u201d\n[ K-KSH ] (1 story) \u201cC\u00f4te d\u2019Ivoire Building\u201d\n[ K-KML ] (1 story) \u201cJerusalem Building\u201d\n[ K-KMJ ] (1 story) \u201cIraq Building\u201d\n[ K-KSP ] (1 story) \u201cLibya Building\u201d\n[ K-KGH ] (1 story) \u201cPanama Building\u201d\n[ K-KGQ ] (1 story) \u201cDominican Republic Building\u201d\n[ K-KGN ] (1 story) \u201cCuba Building\u201d\n[ K-KGC ] (1 story) \u201cEl Salvador Building\u201d\n[ K-KSN ] (1 story) \u201cLiberia Building\u201d\n[ K-KSZ ] (1 story) \u201cNiger Building\u201d\n[ K-KPC ] (1 story) \u201cDemocratic People\u2019s Republic of Korea.  North Korea Building\u201d\n[ K-KQ  ] (1 story) \u201cLaw of indigenous peoples Building\u201d\n[ K-KWC ] (1 story) \u201cNorthern Mariana Islands Building\u201d\n[ K-KNM ] (1 story) \u201cCambodia Building\u201d\n[ K-KBT ] (1 story) \u201cCanon law of Eastern Rite Churches in Communion with the Building\u201d\n[ K-KJG ] (1 story) \u201cLaw of Albania Building\u201d\n[ K-KGX ] (1 story) \u201cTrinidad and Tobago Building\u201d\n[ K-KKR ] (1 story) \u201cLaw of Romania Building\u201d\n[ K-KJQ ] (1 story) \u201cLaw of Slovakia (1993-        ) Building\u201d\n[ K-KLM ] (1 story) \u201cMoldova Building\u201d\n[ K-KDE ] (1 story) \u201cLaw of Northern Ireland Building\u201d\n[ K-KES ] (1 story) \u201cLaw of Saskatchewan Building\u201d\n[ K-KNK ] (1 story) \u201cBrunei Building\u201d\n[ K-KPE ] (1 story) \u201cLaos Building\u201d\n[ K-KPS ] (1 story) \u201cSri Lanka Building\u201d\n[ K-KPJ ] (1 story) \u201cNepal Building\u201d\n[ K-KNL ] (1 story) \u201cBurma Building\u201d\n[ K-KNG ] (1 story) \u201cBangladesh Building\u201d\n[ K-KSE ] (1 story) \u201cEquatorial Guinea Building\u201d\n[ K-KLT ] (1 story) \u201cTajikistan Building\u201d\n[ K-KLV ] (1 story) \u201cTurkmenistan Building\u201d\n[ K-KRE ] (1 story) \u201cComoros Building\u201d\n[ K-KTH ] (1 story) \u201cSeychelles Building\u201d\n[ K-KSR ] (1 story) \u201cMadagascar Building\u201d\n[ K-KQE ] (1 story) \u201cRegional organization and integration Building\u201d\n[ K-KRN ] (1 story) \u201cEritrea Building\u201d\n[ K-KKG ] (1 story) \u201cLaw of Iceland Building\u201d\n[ K-KLH ] (1 story) \u201cGeorgia (Republic) Building\u201d\n[ K-KGA ] (1 story) \u201cBelize Building\u201d\n[ K-KKI ] (1 story) \u201cLaw of Latvia Building\u201d\n[ K-KTF ] (1 story) \u201cSao Tome and Principe Building\u201d\n[ K-KJH ] (1 story) \u201cLaw of Andorra Building\u201d\n[ K-KWL ] (1 story) \u201cSolomon Islands Building\u201d\n[ K-KGW ] (1 story) \u201cSaint Lucia Building\u201d\n[ K-KGZ ] (1 story) \u201cVirgin Islands of the United States Building\u201d\n[ K-KGR ] (1 story) \u201cGrenada Building\u201d\n[ K-KRV ] (1 story) \u201cGambia Building\u201d\n[ K-KFZ ] (1 story) \u201cLaws of the territories.  Laws of the Confederate States of Building\u201d\n[ K-KDG ] (1 story) \u201cLaw of Isle of Man.  Channel Islands Building\u201d\n[ K-KGJ ] (1 story) \u201cGeneral Building\u201d\n[ K-KLN ] (1 story) \u201cRussian S.F.S.R. (to 1991) Building\u201d\n[ K-KMQ ] (1 story) \u201cPalestine (to 1948) Building\u201d\n[ K-KEY ] (1 story) \u201cLaw of Yukon Building\u201d\n[ K-KNV ] (1 story) \u201cFrench Indochina.  Indochina (Federation) Building\u201d\n[ K-KMY ] (1 story) \u201cYeman (People\u2019s Democratic Republic) (to 1990) Building\u201d\n[ K-KHS ] (1 story) \u201cSurinam Building\u201d\n[ K-KMU ] (1 story) \u201cSyria Building\u201d\n[ K-KKL ] (1 story) \u201cLaw of Montenegro Building\u201d\n[ K-KSG ] (1 story) \u201cItalian Somaliland Building\u201d\n[ K-KEZ ] (1 story) \u201cLaw of Law of cities, towns, etc. Building\u201d\n[ K-KEM ] (1 story) \u201cLaw of Manitoba Building\u201d\n[ K-KTK ] (1 story) \u201cSomalia Building\u201d\n[ K-KGT ] (1 story) \u201cJamaica Building\u201d\n[ K-KGY ] (1 story) \u201cTurks and Caicos Islands Building\u201d\n[ K-KEP ] (1 story) \u201cLaw of Law of Prince Edward Island Building\u201d\n[ K-KQV ] (1 story) \u201cBurundi Building\u201d\n[ K-KWE ] (1 story) \u201cPacific Islands (Trust Territory) Building\u201d\n[ K-KPW ] (1 story) \u201cVietnam (Republic).  South Vietnam Building\u201d\n[ K-KWX ] (1 story) \u201cAntarctica Building\u201d\n[ K-KVH ] (1 story) \u201cBritish New Guinea (Territory of Papua) Building\u201d\n[ K-KWR ] (1 story) \u201cVanuatu Building\u201d\n[ K-KWA ] (1 story) \u201cNiue Building\u201d\n[ K-KNF ] (1 story) \u201cAfghanistan Building\u201d\n[ K-KRY ] (1 story) \u201cGibraltar Building\u201d\n[ K-KRC ] (1 story) \u201cChad Building\u201d\n[ K-KTJ ] (1 story) \u201cSierra Leone Building\u201d\n[ K-KTR ] (1 story) \u201cSwaziland Building\u201d\n[ K-KTC ] (1 story) \u201cR\u00e9union Building\u201d\n[ K-KRK ] (1 story) \u201cDjibouti Building\u201d\n[ K-KGM ] (1 story) \u201cCayman Islands Building\u201d\n[ K-KGP ] (1 story) \u201cDominica Building\u201d\n[ K-KRG ] (1 story) \u201cCongo (Brazzaville) Building\u201d\n[ K-KVU ] (1 story) \u201cNauru Building\u201d\n[ K-KQJ ] (1 story) \u201cBenin Building\u201d\n[ K-KNE ] (1 story) \u201cRegional organization and integration Building\u201d\n[ K-KMS ] (1 story) \u201cQatar Building\u201d\n[ K-KQM ] (1 story) \u201cBritish Central Africa Protectorate Building\u201d\n[ K-KNY ] (1 story) \u201cCities, etc. Building\u201d\n[ K-KLP ] (1 story) \u201cUkraine Building\u201d\n[ K-KQX ] (1 story) \u201cCape Verde Building\u201d\n[ K-KGK ] (1 story) \u201cAruba Building\u201d\n[ K-KPH ] (1 story) \u201cMaldives Building\u201d\n[ K-KSU ] (1 story) \u201cMauritania Building\u201d\n[ K-KSC ] (1 story) \u201cGuinea-Bissau Building\u201d\n[ K-KVL ] (1 story) \u201cCook Islands Building\u201d\n[ K-KWP ] (1 story) \u201cTonga Building\u201d\n[ K-KNH ] (1 story) \u201cBhutan Building\u201d\n[ K-KMG ] (1 story) \u201cGaza Building\u201d\n[ K-KHL ] (1 story) \u201cFalkland Islands Building\u201d\n[ K-KWQ ] (1 story) \u201cTuvalu Building\u201d\n[ K-KRR ] (1 story) \u201cFrench Equatorial Africa Building\u201d\n[ K-KVR ] (1 story) \u201cKiribati Building\u201d\n[ K-KU  ] (1 story) \u201cLaw of Australian peoples.  Aborigines Building\u201d\n[ Main  ] Main Library Grounds",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KF": {
          "displayName": "K-KF",
          "destination": "K-KF"
        },
        "K-KFW": {
          "displayName": "K-KFW",
          "destination": "K-KFW"
        },
        "K-KFM": {
          "displayName": "K-KFM",
          "destination": "K-KFM"
        },
        "K-KFT": {
          "displayName": "K-KFT",
          "destination": "K-KFT"
        },
        "K-K": {
          "displayName": "K-K",
          "destination": "K-K"
        },
        "K-KZ": {
          "displayName": "K-KZ",
          "destination": "K-KZ"
        },
        "K-KD": {
          "displayName": "K-KD",
          "destination": "K-KD"
        },
        "K-KFP": {
          "displayName": "K-KFP",
          "destination": "K-KFP"
        },
        "K-KFI": {
          "displayName": "K-KFI",
          "destination": "K-KFI"
        },
        "K-KFN": {
          "displayName": "K-KFN",
          "destination": "K-KFN"
        },
        "K-KFC": {
          "displayName": "K-KFC",
          "destination": "K-KFC"
        },
        "K-KFO": {
          "displayName": "K-KFO",
          "destination": "K-KFO"
        },
        "K-KFL": {
          "displayName": "K-KFL",
          "destination": "K-KFL"
        },
        "K-KFA": {
          "displayName": "K-KFA",
          "destination": "K-KFA"
        },
        "K-KLA": {
          "displayName": "K-KLA",
          "destination": "K-KLA"
        },
        "K-KKT": {
          "displayName": "K-KKT",
          "destination": "K-KKT"
        },
        "K-KMT": {
          "displayName": "K-KMT",
          "destination": "K-KMT"
        },
        "K-KJM": {
          "displayName": "K-KJM",
          "destination": "K-KJM"
        },
        "K-KBP": {
          "displayName": "K-KBP",
          "destination": "K-KBP"
        },
        "K-KBR": {
          "displayName": "K-KBR",
          "destination": "K-KBR"
        },
        "K-KZA": {
          "displayName": "K-KZA",
          "destination": "K-KZA"
        },
        "K-KNQ": {
          "displayName": "K-KNQ",
          "destination": "K-KNQ"
        },
        "K-KJE": {
          "displayName": "K-KJE",
          "destination": "K-KJE"
        },
        "K-KFV": {
          "displayName": "K-KFV",
          "destination": "K-KFV"
        },
        "K-KNN": {
          "displayName": "K-KNN",
          "destination": "K-KNN"
        },
        "K-KMM": {
          "displayName": "K-KMM",
          "destination": "K-KMM"
        },
        "K-KJC": {
          "displayName": "K-KJC",
          "destination": "K-KJC"
        },
        "K-KMK": {
          "displayName": "K-KMK",
          "destination": "K-KMK"
        },
        "K-KTL": {
          "displayName": "K-KTL",
          "destination": "K-KTL"
        },
        "K-KMC": {
          "displayName": "K-KMC",
          "destination": "K-KMC"
        },
        "K-KEN": {
          "displayName": "K-KEN",
          "destination": "K-KEN"
        },
        "K-KRP": {
          "displayName": "K-KRP",
          "destination": "K-KRP"
        },
        "K-KJA": {
          "displayName": "K-KJA",
          "destination": "K-KJA"
        },
        "K-KJV": {
          "displayName": "K-KJV",
          "destination": "K-KJV"
        },
        "K-KBU": {
          "displayName": "K-KBU",
          "destination": "K-KBU"
        },
        "K-KLB": {
          "displayName": "K-KLB",
          "destination": "K-KLB"
        },
        "K-KK": {
          "displayName": "K-KK",
          "destination": "K-KK"
        },
        "K-KFG": {
          "displayName": "K-KFG",
          "destination": "K-KFG"
        },
        "K-KHA": {
          "displayName": "K-KHA",
          "destination": "K-KHA"
        },
        "K-KLW": {
          "displayName": "K-KLW",
          "destination": "K-KLW"
        },
        "K-KNW": {
          "displayName": "K-KNW",
          "destination": "K-KNW"
        },
        "K-KQC": {
          "displayName": "K-KQC",
          "destination": "K-KQC"
        },
        "K-KDZ": {
          "displayName": "K-KDZ",
          "destination": "K-KDZ"
        },
        "K-KFK": {
          "displayName": "K-KFK",
          "destination": "K-KFK"
        },
        "K-KDC": {
          "displayName": "K-KDC",
          "destination": "K-KDC"
        },
        "K-KNR": {
          "displayName": "K-KNR",
          "destination": "K-KNR"
        },
        "K-KFF": {
          "displayName": "K-KFF",
          "destination": "K-KFF"
        },
        "K-KBM": {
          "displayName": "K-KBM",
          "destination": "K-KBM"
        },
        "K-KJ": {
          "displayName": "K-KJ",
          "destination": "K-KJ"
        },
        "K-KL": {
          "displayName": "K-KL",
          "destination": "K-KL"
        },
        "K-KE": {
          "displayName": "K-KE",
          "destination": "K-KE"
        },
        "K-KFD": {
          "displayName": "K-KFD",
          "destination": "K-KFD"
        },
        "K-KDK": {
          "displayName": "K-KDK",
          "destination": "K-KDK"
        },
        "K-KTT": {
          "displayName": "K-KTT",
          "destination": "K-KTT"
        },
        "K-KNX": {
          "displayName": "K-KNX",
          "destination": "K-KNX"
        },
        "K-KTY": {
          "displayName": "K-KTY",
          "destination": "K-KTY"
        },
        "K-KFS": {
          "displayName": "K-KFS",
          "destination": "K-KFS"
        },
        "K-KNC": {
          "displayName": "K-KNC",
          "destination": "K-KNC"
        },
        "K-KFH": {
          "displayName": "K-KFH",
          "destination": "K-KFH"
        },
        "K-KFX": {
          "displayName": "K-KFX",
          "destination": "K-KFX"
        },
        "K-KJT": {
          "displayName": "K-KJT",
          "destination": "K-KJT"
        },
        "K-KQW": {
          "displayName": "K-KQW",
          "destination": "K-KQW"
        },
        "K-KB": {
          "displayName": "K-KB",
          "destination": "K-KB"
        },
        "K-KGL": {
          "displayName": "K-KGL",
          "destination": "K-KGL"
        },
        "K-KGF": {
          "displayName": "K-KGF",
          "destination": "K-KGF"
        },
        "K-KPL": {
          "displayName": "K-KPL",
          "destination": "K-KPL"
        },
        "K-KNS": {
          "displayName": "K-KNS",
          "destination": "K-KNS"
        },
        "K-KFR": {
          "displayName": "K-KFR",
          "destination": "K-KFR"
        },
        "K-KGV": {
          "displayName": "K-KGV",
          "destination": "K-KGV"
        },
        "K-KKW": {
          "displayName": "K-KKW",
          "destination": "K-KKW"
        },
        "K-KKE": {
          "displayName": "K-KKE",
          "destination": "K-KKE"
        },
        "K-KKY": {
          "displayName": "K-KKY",
          "destination": "K-KKY"
        },
        "K-KKP": {
          "displayName": "K-KKP",
          "destination": "K-KKP"
        },
        "K-KKM": {
          "displayName": "K-KKM",
          "destination": "K-KKM"
        },
        "K-KKK": {
          "displayName": "K-KKK",
          "destination": "K-KKK"
        },
        "K-KJK": {
          "displayName": "K-KJK",
          "destination": "K-KJK"
        },
        "K-KKH": {
          "displayName": "K-KKH",
          "destination": "K-KKH"
        },
        "K-KKJ": {
          "displayName": "K-KKJ",
          "destination": "K-KKJ"
        },
        "K-KGD": {
          "displayName": "K-KGD",
          "destination": "K-KGD"
        },
        "K-KHQ": {
          "displayName": "K-KHQ",
          "destination": "K-KHQ"
        },
        "K-KST": {
          "displayName": "K-KST",
          "destination": "K-KST"
        },
        "K-KTA": {
          "displayName": "K-KTA",
          "destination": "K-KTA"
        },
        "K-KGS": {
          "displayName": "K-KGS",
          "destination": "K-KGS"
        },
        "K-KHH": {
          "displayName": "K-KHH",
          "destination": "K-KHH"
        },
        "K-KG": {
          "displayName": "K-KG",
          "destination": "K-KG"
        },
        "K-KHK": {
          "displayName": "K-KHK",
          "destination": "K-KHK"
        },
        "K-KHC": {
          "displayName": "K-KHC",
          "destination": "K-KHC"
        },
        "K-KNP": {
          "displayName": "K-KNP",
          "destination": "K-KNP"
        },
        "K-KLR": {
          "displayName": "K-KLR",
          "destination": "K-KLR"
        },
        "K-KTZ": {
          "displayName": "K-KTZ",
          "destination": "K-KTZ"
        },
        "K-KBS": {
          "displayName": "K-KBS",
          "destination": "K-KBS"
        },
        "K-KPA": {
          "displayName": "K-KPA",
          "destination": "K-KPA"
        },
        "K-KUQ": {
          "displayName": "K-KUQ",
          "destination": "K-KUQ"
        },
        "K-KVN": {
          "displayName": "K-KVN",
          "destination": "K-KVN"
        },
        "K-KVW": {
          "displayName": "K-KVW",
          "destination": "K-KVW"
        },
        "K-KFU": {
          "displayName": "K-KFU",
          "destination": "K-KFU"
        },
        "K-KJR": {
          "displayName": "K-KJR",
          "destination": "K-KJR"
        },
        "K-KKQ": {
          "displayName": "K-KKQ",
          "destination": "K-KKQ"
        },
        "K-KJS": {
          "displayName": "K-KJS",
          "destination": "K-KJS"
        },
        "K-KKZ": {
          "displayName": "K-KKZ",
          "destination": "K-KKZ"
        },
        "K-KJP": {
          "displayName": "K-KJP",
          "destination": "K-KJP"
        },
        "K-KGB": {
          "displayName": "K-KGB",
          "destination": "K-KGB"
        },
        "K-KHW": {
          "displayName": "K-KHW",
          "destination": "K-KHW"
        },
        "K-KGE": {
          "displayName": "K-KGE",
          "destination": "K-KGE"
        },
        "K-KGG": {
          "displayName": "K-KGG",
          "destination": "K-KGG"
        },
        "K-KHF": {
          "displayName": "K-KHF",
          "destination": "K-KHF"
        },
        "K-KHP": {
          "displayName": "K-KHP",
          "destination": "K-KHP"
        },
        "K-KKA": {
          "displayName": "K-KKA",
          "destination": "K-KKA"
        },
        "K-KKV": {
          "displayName": "K-KKV",
          "destination": "K-KKV"
        },
        "K-KSW": {
          "displayName": "K-KSW",
          "destination": "K-KSW"
        },
        "K-KM": {
          "displayName": "K-KM",
          "destination": "K-KM"
        },
        "K-KLF": {
          "displayName": "K-KLF",
          "destination": "K-KLF"
        },
        "K-KH": {
          "displayName": "K-KH",
          "destination": "K-KH"
        },
        "K-KPT": {
          "displayName": "K-KPT",
          "destination": "K-KPT"
        },
        "K-KPM": {
          "displayName": "K-KPM",
          "destination": "K-KPM"
        },
        "K-KPV": {
          "displayName": "K-KPV",
          "destination": "K-KPV"
        },
        "K-KPP": {
          "displayName": "K-KPP",
          "destination": "K-KPP"
        },
        "K-KMH": {
          "displayName": "K-KMH",
          "destination": "K-KMH"
        },
        "K-KSV": {
          "displayName": "K-KSV",
          "destination": "K-KSV"
        },
        "K-KSY": {
          "displayName": "K-KSY",
          "destination": "K-KSY"
        },
        "K-KQK": {
          "displayName": "K-KQK",
          "destination": "K-KQK"
        },
        "K-KQH": {
          "displayName": "K-KQH",
          "destination": "K-KQH"
        },
        "K-KSX": {
          "displayName": "K-KSX",
          "destination": "K-KSX"
        },
        "K-KSK": {
          "displayName": "K-KSK",
          "destination": "K-KSK"
        },
        "K-KRU": {
          "displayName": "K-KRU",
          "destination": "K-KRU"
        },
        "K-KSL": {
          "displayName": "K-KSL",
          "destination": "K-KSL"
        },
        "K-KRX": {
          "displayName": "K-KRX",
          "destination": "K-KRX"
        },
        "K-KSS": {
          "displayName": "K-KSS",
          "destination": "K-KSS"
        },
        "K-KTW": {
          "displayName": "K-KTW",
          "destination": "K-KTW"
        },
        "K-KTD": {
          "displayName": "K-KTD",
          "destination": "K-KTD"
        },
        "K-KTX": {
          "displayName": "K-KTX",
          "destination": "K-KTX"
        },
        "K-KRS": {
          "displayName": "K-KRS",
          "destination": "K-KRS"
        },
        "K-KTG": {
          "displayName": "K-KTG",
          "destination": "K-KTG"
        },
        "K-KKX": {
          "displayName": "K-KKX",
          "destination": "K-KKX"
        },
        "K-KLE": {
          "displayName": "K-KLE",
          "destination": "K-KLE"
        },
        "K-KRM": {
          "displayName": "K-KRM",
          "destination": "K-KRM"
        },
        "K-KMN": {
          "displayName": "K-KMN",
          "destination": "K-KMN"
        },
        "K-KMX": {
          "displayName": "K-KMX",
          "destination": "K-KMX"
        },
        "K-KTQ": {
          "displayName": "K-KTQ",
          "destination": "K-KTQ"
        },
        "K-KQG": {
          "displayName": "K-KQG",
          "destination": "K-KQG"
        },
        "K-KMV": {
          "displayName": "K-KMV",
          "destination": "K-KMV"
        },
        "K-KHD": {
          "displayName": "K-KHD",
          "destination": "K-KHD"
        },
        "K-KHN": {
          "displayName": "K-KHN",
          "destination": "K-KHN"
        },
        "K-KHU": {
          "displayName": "K-KHU",
          "destination": "K-KHU"
        },
        "K-KLS": {
          "displayName": "K-KLS",
          "destination": "K-KLS"
        },
        "K-KSA": {
          "displayName": "K-KSA",
          "destination": "K-KSA"
        },
        "K-KPF": {
          "displayName": "K-KPF",
          "destination": "K-KPF"
        },
        "K-KLD": {
          "displayName": "K-KLD",
          "destination": "K-KLD"
        },
        "K-KTV": {
          "displayName": "K-KTV",
          "destination": "K-KTV"
        },
        "K-KMP": {
          "displayName": "K-KMP",
          "destination": "K-KMP"
        },
        "K-KMF": {
          "displayName": "K-KMF",
          "destination": "K-KMF"
        },
        "K-KKS": {
          "displayName": "K-KKS",
          "destination": "K-KKS"
        },
        "K-KJW": {
          "displayName": "K-KJW",
          "destination": "K-KJW"
        },
        "K-KJJ": {
          "displayName": "K-KJJ",
          "destination": "K-KJJ"
        },
        "K-KZD": {
          "displayName": "K-KZD",
          "destination": "K-KZD"
        },
        "K-KWW": {
          "displayName": "K-KWW",
          "destination": "K-KWW"
        },
        "K-KVP": {
          "displayName": "K-KVP",
          "destination": "K-KVP"
        },
        "K-KEO": {
          "displayName": "K-KEO",
          "destination": "K-KEO"
        },
        "K-KEA": {
          "displayName": "K-KEA",
          "destination": "K-KEA"
        },
        "K-KEB": {
          "displayName": "K-KEB",
          "destination": "K-KEB"
        },
        "K-KEQ": {
          "displayName": "K-KEQ",
          "destination": "K-KEQ"
        },
        "K-KWH": {
          "displayName": "K-KWH",
          "destination": "K-KWH"
        },
        "K-KVS": {
          "displayName": "K-KVS",
          "destination": "K-KVS"
        },
        "K-KWG": {
          "displayName": "K-KWG",
          "destination": "K-KWG"
        },
        "K-KVQ": {
          "displayName": "K-KVQ",
          "destination": "K-KVQ"
        },
        "K-KJN": {
          "displayName": "K-KJN",
          "destination": "K-KJN"
        },
        "K-KKF": {
          "displayName": "K-KKF",
          "destination": "K-KKF"
        },
        "K-KHM": {
          "displayName": "K-KHM",
          "destination": "K-KHM"
        },
        "K-KKN": {
          "displayName": "K-KKN",
          "destination": "K-KKN"
        },
        "K-KRB": {
          "displayName": "K-KRB",
          "destination": "K-KRB"
        },
        "K-KTU": {
          "displayName": "K-KTU",
          "destination": "K-KTU"
        },
        "K-KQT": {
          "displayName": "K-KQT",
          "destination": "K-KQT"
        },
        "K-KSH": {
          "displayName": "K-KSH",
          "destination": "K-KSH"
        },
        "K-KML": {
          "displayName": "K-KML",
          "destination": "K-KML"
        },
        "K-KMJ": {
          "displayName": "K-KMJ",
          "destination": "K-KMJ"
        },
        "K-KSP": {
          "displayName": "K-KSP",
          "destination": "K-KSP"
        },
        "K-KGH": {
          "displayName": "K-KGH",
          "destination": "K-KGH"
        },
        "K-KGQ": {
          "displayName": "K-KGQ",
          "destination": "K-KGQ"
        },
        "K-KGN": {
          "displayName": "K-KGN",
          "destination": "K-KGN"
        },
        "K-KGC": {
          "displayName": "K-KGC",
          "destination": "K-KGC"
        },
        "K-KSN": {
          "displayName": "K-KSN",
          "destination": "K-KSN"
        },
        "K-KSZ": {
          "displayName": "K-KSZ",
          "destination": "K-KSZ"
        },
        "K-KPC": {
          "displayName": "K-KPC",
          "destination": "K-KPC"
        },
        "K-KQ": {
          "displayName": "K-KQ",
          "destination": "K-KQ"
        },
        "K-KWC": {
          "displayName": "K-KWC",
          "destination": "K-KWC"
        },
        "K-KNM": {
          "displayName": "K-KNM",
          "destination": "K-KNM"
        },
        "K-KBT": {
          "displayName": "K-KBT",
          "destination": "K-KBT"
        },
        "K-KJG": {
          "displayName": "K-KJG",
          "destination": "K-KJG"
        },
        "K-KGX": {
          "displayName": "K-KGX",
          "destination": "K-KGX"
        },
        "K-KKR": {
          "displayName": "K-KKR",
          "destination": "K-KKR"
        },
        "K-KJQ": {
          "displayName": "K-KJQ",
          "destination": "K-KJQ"
        },
        "K-KLM": {
          "displayName": "K-KLM",
          "destination": "K-KLM"
        },
        "K-KDE": {
          "displayName": "K-KDE",
          "destination": "K-KDE"
        },
        "K-KES": {
          "displayName": "K-KES",
          "destination": "K-KES"
        },
        "K-KNK": {
          "displayName": "K-KNK",
          "destination": "K-KNK"
        },
        "K-KPE": {
          "displayName": "K-KPE",
          "destination": "K-KPE"
        },
        "K-KPS": {
          "displayName": "K-KPS",
          "destination": "K-KPS"
        },
        "K-KPJ": {
          "displayName": "K-KPJ",
          "destination": "K-KPJ"
        },
        "K-KNL": {
          "displayName": "K-KNL",
          "destination": "K-KNL"
        },
        "K-KNG": {
          "displayName": "K-KNG",
          "destination": "K-KNG"
        },
        "K-KSE": {
          "displayName": "K-KSE",
          "destination": "K-KSE"
        },
        "K-KLT": {
          "displayName": "K-KLT",
          "destination": "K-KLT"
        },
        "K-KLV": {
          "displayName": "K-KLV",
          "destination": "K-KLV"
        },
        "K-KRE": {
          "displayName": "K-KRE",
          "destination": "K-KRE"
        },
        "K-KTH": {
          "displayName": "K-KTH",
          "destination": "K-KTH"
        },
        "K-KSR": {
          "displayName": "K-KSR",
          "destination": "K-KSR"
        },
        "K-KQE": {
          "displayName": "K-KQE",
          "destination": "K-KQE"
        },
        "K-KRN": {
          "displayName": "K-KRN",
          "destination": "K-KRN"
        },
        "K-KKG": {
          "displayName": "K-KKG",
          "destination": "K-KKG"
        },
        "K-KLH": {
          "displayName": "K-KLH",
          "destination": "K-KLH"
        },
        "K-KGA": {
          "displayName": "K-KGA",
          "destination": "K-KGA"
        },
        "K-KKI": {
          "displayName": "K-KKI",
          "destination": "K-KKI"
        },
        "K-KTF": {
          "displayName": "K-KTF",
          "destination": "K-KTF"
        },
        "K-KJH": {
          "displayName": "K-KJH",
          "destination": "K-KJH"
        },
        "K-KWL": {
          "displayName": "K-KWL",
          "destination": "K-KWL"
        },
        "K-KGW": {
          "displayName": "K-KGW",
          "destination": "K-KGW"
        },
        "K-KGZ": {
          "displayName": "K-KGZ",
          "destination": "K-KGZ"
        },
        "K-KGR": {
          "displayName": "K-KGR",
          "destination": "K-KGR"
        },
        "K-KRV": {
          "displayName": "K-KRV",
          "destination": "K-KRV"
        },
        "K-KFZ": {
          "displayName": "K-KFZ",
          "destination": "K-KFZ"
        },
        "K-KDG": {
          "displayName": "K-KDG",
          "destination": "K-KDG"
        },
        "K-KGJ": {
          "displayName": "K-KGJ",
          "destination": "K-KGJ"
        },
        "K-KLN": {
          "displayName": "K-KLN",
          "destination": "K-KLN"
        },
        "K-KMQ": {
          "displayName": "K-KMQ",
          "destination": "K-KMQ"
        },
        "K-KEY": {
          "displayName": "K-KEY",
          "destination": "K-KEY"
        },
        "K-KNV": {
          "displayName": "K-KNV",
          "destination": "K-KNV"
        },
        "K-KMY": {
          "displayName": "K-KMY",
          "destination": "K-KMY"
        },
        "K-KHS": {
          "displayName": "K-KHS",
          "destination": "K-KHS"
        },
        "K-KMU": {
          "displayName": "K-KMU",
          "destination": "K-KMU"
        },
        "K-KKL": {
          "displayName": "K-KKL",
          "destination": "K-KKL"
        },
        "K-KSG": {
          "displayName": "K-KSG",
          "destination": "K-KSG"
        },
        "K-KEZ": {
          "displayName": "K-KEZ",
          "destination": "K-KEZ"
        },
        "K-KEM": {
          "displayName": "K-KEM",
          "destination": "K-KEM"
        },
        "K-KTK": {
          "displayName": "K-KTK",
          "destination": "K-KTK"
        },
        "K-KGT": {
          "displayName": "K-KGT",
          "destination": "K-KGT"
        },
        "K-KGY": {
          "displayName": "K-KGY",
          "destination": "K-KGY"
        },
        "K-KEP": {
          "displayName": "K-KEP",
          "destination": "K-KEP"
        },
        "K-KQV": {
          "displayName": "K-KQV",
          "destination": "K-KQV"
        },
        "K-KWE": {
          "displayName": "K-KWE",
          "destination": "K-KWE"
        },
        "K-KPW": {
          "displayName": "K-KPW",
          "destination": "K-KPW"
        },
        "K-KWX": {
          "displayName": "K-KWX",
          "destination": "K-KWX"
        },
        "K-KVH": {
          "displayName": "K-KVH",
          "destination": "K-KVH"
        },
        "K-KWR": {
          "displayName": "K-KWR",
          "destination": "K-KWR"
        },
        "K-KWA": {
          "displayName": "K-KWA",
          "destination": "K-KWA"
        },
        "K-KNF": {
          "displayName": "K-KNF",
          "destination": "K-KNF"
        },
        "K-KRY": {
          "displayName": "K-KRY",
          "destination": "K-KRY"
        },
        "K-KRC": {
          "displayName": "K-KRC",
          "destination": "K-KRC"
        },
        "K-KTJ": {
          "displayName": "K-KTJ",
          "destination": "K-KTJ"
        },
        "K-KTR": {
          "displayName": "K-KTR",
          "destination": "K-KTR"
        },
        "K-KTC": {
          "displayName": "K-KTC",
          "destination": "K-KTC"
        },
        "K-KRK": {
          "displayName": "K-KRK",
          "destination": "K-KRK"
        },
        "K-KGM": {
          "displayName": "K-KGM",
          "destination": "K-KGM"
        },
        "K-KGP": {
          "displayName": "K-KGP",
          "destination": "K-KGP"
        },
        "K-KRG": {
          "displayName": "K-KRG",
          "destination": "K-KRG"
        },
        "K-KVU": {
          "displayName": "K-KVU",
          "destination": "K-KVU"
        },
        "K-KQJ": {
          "displayName": "K-KQJ",
          "destination": "K-KQJ"
        },
        "K-KNE": {
          "displayName": "K-KNE",
          "destination": "K-KNE"
        },
        "K-KMS": {
          "displayName": "K-KMS",
          "destination": "K-KMS"
        },
        "K-KQM": {
          "displayName": "K-KQM",
          "destination": "K-KQM"
        },
        "K-KNY": {
          "displayName": "K-KNY",
          "destination": "K-KNY"
        },
        "K-KLP": {
          "displayName": "K-KLP",
          "destination": "K-KLP"
        },
        "K-KQX": {
          "displayName": "K-KQX",
          "destination": "K-KQX"
        },
        "K-KGK": {
          "displayName": "K-KGK",
          "destination": "K-KGK"
        },
        "K-KPH": {
          "displayName": "K-KPH",
          "destination": "K-KPH"
        },
        "K-KSU": {
          "displayName": "K-KSU",
          "destination": "K-KSU"
        },
        "K-KSC": {
          "displayName": "K-KSC",
          "destination": "K-KSC"
        },
        "K-KVL": {
          "displayName": "K-KVL",
          "destination": "K-KVL"
        },
        "K-KWP": {
          "displayName": "K-KWP",
          "destination": "K-KWP"
        },
        "K-KNH": {
          "displayName": "K-KNH",
          "destination": "K-KNH"
        },
        "K-KMG": {
          "displayName": "K-KMG",
          "destination": "K-KMG"
        },
        "K-KHL": {
          "displayName": "K-KHL",
          "destination": "K-KHL"
        },
        "K-KWQ": {
          "displayName": "K-KWQ",
          "destination": "K-KWQ"
        },
        "K-KRR": {
          "displayName": "K-KRR",
          "destination": "K-KRR"
        },
        "K-KVR": {
          "displayName": "K-KVR",
          "destination": "K-KVR"
        },
        "K-KU": {
          "displayName": "K-KU",
          "destination": "K-KU"
        },
        "main": {
          "displayName": "Main",
          "destination": "MAIN"
        }
      }
    },
    "K-KF-KF1-9827": {
      "firstVisit": true,
      "displayName": "Law of the United States (Federal)",
      "description": "Description for \u201cLaw of the United States (Federal) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KF"
        }
      }
    },
    "K-KF": {
      "firstVisit": true,
      "displayName": "\u201cLaw of the United States (Federal) Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of the United States (Federal) Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KF": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KF-KF1-9827": {
          "displayName": "South",
          "destination": "K-KF-KF1-9827"
        }
      }
    },
    "K-KFW-KFW": {
      "firstVisit": true,
      "displayName": "Law of Washington",
      "description": "Description for \u201cLaw of Washington Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KFW"
        }
      }
    },
    "K-KFW": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Washington Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Washington Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KFW": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KFW-KFW": {
          "displayName": "South",
          "destination": "K-KFW-KFW"
        }
      }
    },
    "K-KFM-KFM": {
      "firstVisit": true,
      "displayName": "Law of Maine",
      "description": "Description for \u201cLaw of Maine Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KFM"
        }
      }
    },
    "K-KFM": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Maine Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Maine Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KFM": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KFM-KFM": {
          "displayName": "South",
          "destination": "K-KFM-KFM"
        }
      }
    },
    "K-KFT-KFT": {
      "firstVisit": true,
      "displayName": "Law of Tennessee",
      "description": "Description for \u201cLaw of Tennessee Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KFT"
        }
      }
    },
    "K-KFT": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Tennessee Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Tennessee Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KFT": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KFT-KFT": {
          "displayName": "South",
          "destination": "K-KFT-KFT"
        }
      }
    },
    "K-K-K520-5582": {
      "firstVisit": true,
      "displayName": "Comparative law.  International uniform law",
      "description": "Description for \u201cComparative law.  International uniform law Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-K"
        }
      }
    },
    "K-K-K201-487": {
      "firstVisit": true,
      "displayName": "Jurisprudence.  Philosophy and theory of law",
      "description": "Description for \u201cJurisprudence.  Philosophy and theory of law Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-K"
        }
      }
    },
    "K-K-K181-184.7": {
      "firstVisit": true,
      "displayName": "Miscellany",
      "description": "Description for \u201cMiscellany Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-K"
        }
      }
    },
    "K-K-K7000-7720": {
      "firstVisit": true,
      "displayName": "Private international law.  Conflict of laws",
      "description": "Description for \u201cPrivate international law.  Conflict of laws Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-K"
        }
      }
    },
    "K-K-K115-130": {
      "firstVisit": true,
      "displayName": "The legal profession",
      "description": "Description for \u201cThe legal profession Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-K"
        }
      }
    },
    "K-K-K109-110": {
      "firstVisit": true,
      "displayName": "Law societies.  International bar associations",
      "description": "Description for \u201cLaw societies.  International bar associations Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-K"
        }
      }
    },
    "K-K-K190-197": {
      "firstVisit": true,
      "displayName": "Ethnological jurisprudence.  Primitive law",
      "description": "Description for \u201cEthnological jurisprudence.  Primitive law Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-K"
        }
      }
    },
    "K-K-K140-165": {
      "firstVisit": true,
      "displayName": "History of law",
      "description": "Description for \u201cHistory of law Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-K"
        }
      }
    },
    "K-K": {
      "firstVisit": true,
      "displayName": "\u201cComparative law.  International uniform law Building\u201d Main Lobby",
      "description": "There are 23 rooms throughout this building in 3 floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[  South  ] \u201cComparative law.  International uniform law Room\u201d\n[  North  ] \u201cJurisprudence.  Philosophy and theory of law Room\u201d\n[  East   ] \u201cMiscellany Room\u201d\n[  West   ] \u201cPrivate international law.  Conflict of laws Room\u201d\n[SouthEast] \u201cThe legal profession Room\u201d\n[NorthWest] \u201cLaw societies.  International bar associations Room\u201d\n[SouthWest] \u201cEthnological jurisprudence.  Primitive law Room\u201d\n[NorthEast] \u201cHistory of law Room\u201d\n[  Up     ] 2nd floor\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-K": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "up": {
          "displayName": "Up",
          "destination": "2_K-K"
        },
        "K-K-K520-5582": {
          "displayName": "South",
          "destination": "K-K-K520-5582"
        },
        "K-K-K201-487": {
          "displayName": "North",
          "destination": "K-K-K201-487"
        },
        "K-K-K181-184.7": {
          "displayName": "East",
          "destination": "K-K-K181-184.7"
        },
        "K-K-K7000-7720": {
          "displayName": "West",
          "destination": "K-K-K7000-7720"
        },
        "K-K-K115-130": {
          "displayName": "SouthEast",
          "destination": "K-K-K115-130"
        },
        "K-K-K109-110": {
          "displayName": "NorthWest",
          "destination": "K-K-K109-110"
        },
        "K-K-K190-197": {
          "displayName": "SouthWest",
          "destination": "K-K-K190-197"
        },
        "K-K-K140-165": {
          "displayName": "NorthEast",
          "destination": "K-K-K140-165"
        }
      }
    },
    "K-K-K85-89": {
      "firstVisit": true,
      "displayName": "Legal research",
      "description": "Description for \u201cLegal research Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-K"
        }
      }
    },
    "K-K-K58": {
      "firstVisit": true,
      "displayName": "Maxims.  Quotations",
      "description": "Description for \u201cMaxims.  Quotations Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-K"
        }
      }
    },
    "K-K-K50-54": {
      "firstVisit": true,
      "displayName": "Dictionaries.  Words and phrases",
      "description": "Description for \u201cDictionaries.  Words and phrases Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-K"
        }
      }
    },
    "K-K-K133": {
      "firstVisit": true,
      "displayName": "Legal aid.  Legal assistance to the poor",
      "description": "Description for \u201cLegal aid.  Legal assistance to the poor Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-K"
        }
      }
    },
    "K-K-K48": {
      "firstVisit": true,
      "displayName": "Encyclopedias",
      "description": "Description for \u201cEncyclopedias Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-K"
        }
      }
    },
    "K-K-K37-44": {
      "firstVisit": true,
      "displayName": "Bibliography",
      "description": "Description for \u201cBibliography Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-K"
        }
      }
    },
    "K-K-K100-103": {
      "firstVisit": true,
      "displayName": "Legal education",
      "description": "Description for \u201cLegal education Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-K"
        }
      }
    },
    "K-K-K1-36.5": {
      "firstVisit": true,
      "displayName": "Periodicals",
      "description": "Description for \u201cPeriodicals Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-K"
        }
      }
    },
    "2_K-K": {
      "firstVisit": true,
      "displayName": "\u201cComparative law.  International uniform law Building\u201d, 2nd Floor",
      "description": "You are in the 2nd floor. There are 8 rooms:\n\n[  South  ] \u201cLegal research Room\u201d\n[  North  ] \u201cMaxims.  Quotations Room\u201d\n[  East   ] \u201cDictionaries.  Words and phrases Room\u201d\n[  West   ] \u201cLegal aid.  Legal assistance to the poor Room\u201d\n[SouthEast] \u201cEncyclopedias Room\u201d\n[NorthWest] \u201cBibliography Room\u201d\n[SouthWest] \u201cLegal education Room\u201d\n[NorthEast] \u201cPeriodicals Room\u201d\n[  Down   ] 1st floor\n[  Up     ] 3rd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "K-K-K85-89": {
          "displayName": "South",
          "destination": "K-K-K85-89"
        },
        "K-K-K58": {
          "displayName": "North",
          "destination": "K-K-K58"
        },
        "K-K-K50-54": {
          "displayName": "East",
          "destination": "K-K-K50-54"
        },
        "K-K-K133": {
          "displayName": "West",
          "destination": "K-K-K133"
        },
        "K-K-K48": {
          "displayName": "SouthEast",
          "destination": "K-K-K48"
        },
        "K-K-K37-44": {
          "displayName": "NorthWest",
          "destination": "K-K-K37-44"
        },
        "K-K-K100-103": {
          "displayName": "SouthWest",
          "destination": "K-K-K100-103"
        },
        "K-K-K1-36.5": {
          "displayName": "NorthEast",
          "destination": "K-K-K1-36.5"
        },
        "down": {
          "displayName": "Down",
          "destination": "K-K"
        },
        "up": {
          "displayName": "Up",
          "destination": "3_K-K"
        }
      }
    },
    "K-K-K170": {
      "firstVisit": true,
      "displayName": "Biography",
      "description": "Description for \u201cBiography Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-K"
        }
      }
    },
    "K-K-K94": {
      "firstVisit": true,
      "displayName": "Legal composition and draftsmanship",
      "description": "Description for \u201cLegal composition and draftsmanship Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-K"
        }
      }
    },
    "K-K-K179": {
      "firstVisit": true,
      "displayName": "Addresses, essays, lectures",
      "description": "Description for \u201cAddresses, essays, lectures Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-K"
        }
      }
    },
    "K-K-K175": {
      "firstVisit": true,
      "displayName": "Congresses",
      "description": "Description for \u201cCongresses Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-K"
        }
      }
    },
    "K-K-K176-177": {
      "firstVisit": true,
      "displayName": "Collected works (nonserial)",
      "description": "Description for \u201cCollected works (nonserial) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-K"
        }
      }
    },
    "K-K-K46": {
      "firstVisit": true,
      "displayName": "Monographic series",
      "description": "Description for \u201cMonographic series Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-K"
        }
      }
    },
    "K-K-K68-70": {
      "firstVisit": true,
      "displayName": "Directories",
      "description": "Description for \u201cDirectories Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-K"
        }
      }
    },
    "3_K-K": {
      "firstVisit": true,
      "displayName": "\u201cComparative law.  International uniform law Building\u201d, 3rd Floor",
      "description": "You are in the 3rd floor. There are 7 rooms:\n\n[  South  ] \u201cBiography Room\u201d\n[  North  ] \u201cLegal composition and draftsmanship Room\u201d\n[  East   ] \u201cAddresses, essays, lectures Room\u201d\n[  West   ] \u201cCongresses Room\u201d\n[SouthEast] \u201cCollected works (nonserial) Room\u201d\n[NorthWest] \u201cMonographic series Room\u201d\n[SouthWest] \u201cDirectories Room\u201d\n[  Down   ] 2nd floor",
      "interactables": {},
      "items": {},
      "exits": {
        "K-K-K170": {
          "displayName": "South",
          "destination": "K-K-K170"
        },
        "K-K-K94": {
          "displayName": "North",
          "destination": "K-K-K94"
        },
        "K-K-K179": {
          "displayName": "East",
          "destination": "K-K-K179"
        },
        "K-K-K175": {
          "displayName": "West",
          "destination": "K-K-K175"
        },
        "K-K-K176-177": {
          "displayName": "SouthEast",
          "destination": "K-K-K176-177"
        },
        "K-K-K46": {
          "displayName": "NorthWest",
          "destination": "K-K-K46"
        },
        "K-K-K68-70": {
          "displayName": "SouthWest",
          "destination": "K-K-K68-70"
        },
        "down": {
          "displayName": "Down",
          "destination": "2_K-K"
        }
      }
    },
    "K-KZ-KZ1-6795": {
      "firstVisit": true,
      "displayName": "Law of nations",
      "description": "Description for \u201cLaw of nations Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KZ"
        }
      }
    },
    "K-KZ-KZ1-7500": {
      "firstVisit": true,
      "displayName": "Law of nations",
      "description": "Description for \u201cLaw of nations Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KZ"
        }
      }
    },
    "K-KZ": {
      "firstVisit": true,
      "displayName": "\u201cLaw of nations Building\u201d Main Lobby",
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n\n[  South  ] \u201cLaw of nations Room\u201d\n[  North  ] \u201cLaw of nations Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KZ": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KZ-KZ1-6795": {
          "displayName": "South",
          "destination": "K-KZ-KZ1-6795"
        },
        "K-KZ-KZ1-7500": {
          "displayName": "North",
          "destination": "K-KZ-KZ1-7500"
        }
      }
    },
    "K-KD-KD51-9500": {
      "firstVisit": true,
      "displayName": "Law of England and Wales",
      "description": "Description for \u201cLaw of England and Wales Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KD"
        }
      }
    },
    "K-KD": {
      "firstVisit": true,
      "displayName": "\u201cLaw of England and Wales Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of England and Wales Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KD": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KD-KD51-9500": {
          "displayName": "South",
          "destination": "K-KD-KD51-9500"
        }
      }
    },
    "K-KFP-KFP": {
      "firstVisit": true,
      "displayName": "Law of Pennsylvania",
      "description": "Description for \u201cLaw of Pennsylvania Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KFP"
        }
      }
    },
    "K-KFP": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Pennsylvania Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Pennsylvania Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KFP": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KFP-KFP": {
          "displayName": "South",
          "destination": "K-KFP-KFP"
        }
      }
    },
    "K-KFI-KFI": {
      "firstVisit": true,
      "displayName": "Law of Idaho",
      "description": "Description for \u201cLaw of Idaho Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KFI"
        }
      }
    },
    "K-KFI": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Idaho Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Idaho Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KFI": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KFI-KFI": {
          "displayName": "South",
          "destination": "K-KFI-KFI"
        }
      }
    },
    "K-KFN-KFN": {
      "firstVisit": true,
      "displayName": "Law of Nebraska",
      "description": "Description for \u201cLaw of Nebraska Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KFN"
        }
      }
    },
    "K-KFN": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Nebraska Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Nebraska Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KFN": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KFN-KFN": {
          "displayName": "South",
          "destination": "K-KFN-KFN"
        }
      }
    },
    "K-KFC-KFC": {
      "firstVisit": true,
      "displayName": "Law of California",
      "description": "Description for \u201cLaw of California Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KFC"
        }
      }
    },
    "K-KFC": {
      "firstVisit": true,
      "displayName": "\u201cLaw of California Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of California Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KFC": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KFC-KFC": {
          "displayName": "South",
          "destination": "K-KFC-KFC"
        }
      }
    },
    "K-KFO-KFO": {
      "firstVisit": true,
      "displayName": "Law of Ohio",
      "description": "Description for \u201cLaw of Ohio Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KFO"
        }
      }
    },
    "K-KFO": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Ohio Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Ohio Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KFO": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KFO-KFO": {
          "displayName": "South",
          "destination": "K-KFO-KFO"
        }
      }
    },
    "K-KFL-KFL": {
      "firstVisit": true,
      "displayName": "Law of Louisiana",
      "description": "Description for \u201cLaw of Louisiana Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KFL"
        }
      }
    },
    "K-KFL": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Louisiana Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Louisiana Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KFL": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KFL-KFL": {
          "displayName": "South",
          "destination": "K-KFL-KFL"
        }
      }
    },
    "K-KFA-KFA": {
      "firstVisit": true,
      "displayName": "Law of Alabama",
      "description": "Description for \u201cLaw of Alabama Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KFA"
        }
      }
    },
    "K-KFA": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Alabama Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Alabama Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KFA": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KFA-KFA": {
          "displayName": "South",
          "destination": "K-KFA-KFA"
        }
      }
    },
    "K-KLA-KLA1-9999": {
      "firstVisit": true,
      "displayName": "Russia, Soviet Union",
      "description": "Description for \u201cRussia, Soviet Union Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KLA"
        }
      }
    },
    "K-KLA": {
      "firstVisit": true,
      "displayName": "\u201cRussia, Soviet Union Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cRussia, Soviet Union Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KLA": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KLA-KLA1-9999": {
          "displayName": "South",
          "destination": "K-KLA-KLA1-9999"
        }
      }
    },
    "K-KKT-KKT": {
      "firstVisit": true,
      "displayName": "Law of Spain",
      "description": "Description for \u201cLaw of Spain Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KKT"
        }
      }
    },
    "K-KKT": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Spain Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Spain Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KKT": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KKT-KKT": {
          "displayName": "South",
          "destination": "K-KKT-KKT"
        }
      }
    },
    "K-KMT-KMT1-4990": {
      "firstVisit": true,
      "displayName": "Saudi Arabia",
      "description": "Description for \u201cSaudi Arabia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KMT"
        }
      }
    },
    "K-KMT": {
      "firstVisit": true,
      "displayName": "\u201cSaudi Arabia Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cSaudi Arabia Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KMT": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KMT-KMT1-4990": {
          "displayName": "South",
          "destination": "K-KMT-KMT1-4990"
        }
      }
    },
    "K-KJM-KJM": {
      "firstVisit": true,
      "displayName": "Law of Croatia",
      "description": "Description for \u201cLaw of Croatia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KJM"
        }
      }
    },
    "K-KJM": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Croatia Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Croatia Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KJM": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KJM-KJM": {
          "displayName": "South",
          "destination": "K-KJM-KJM"
        }
      }
    },
    "K-KBP-KBP1-4860": {
      "firstVisit": true,
      "displayName": "Islamic law.  Shar\u012b\u02bbah.  Fiqh",
      "description": "Description for \u201cIslamic law.  Shar\u012b\u02bbah.  Fiqh Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KBP"
        }
      }
    },
    "K-KBP": {
      "firstVisit": true,
      "displayName": "\u201cIslamic law.  Shar\u012b\u02bbah.  Fiqh Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cIslamic law.  Shar\u012b\u02bbah.  Fiqh Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KBP": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KBP-KBP1-4860": {
          "displayName": "South",
          "destination": "K-KBP-KBP1-4860"
        }
      }
    },
    "K-KBR-KBR2-4090": {
      "firstVisit": true,
      "displayName": "History of canon law",
      "description": "Description for \u201cHistory of canon law Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KBR"
        }
      }
    },
    "K-KBR": {
      "firstVisit": true,
      "displayName": "\u201cHistory of canon law Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cHistory of canon law Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KBR": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KBR-KBR2-4090": {
          "displayName": "South",
          "destination": "K-KBR-KBR2-4090"
        }
      }
    },
    "K-KZA-KZA1002-4205": {
      "firstVisit": true,
      "displayName": "Law of the sea",
      "description": "Description for \u201cLaw of the sea Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KZA"
        }
      }
    },
    "K-KZA": {
      "firstVisit": true,
      "displayName": "\u201cLaw of the sea Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of the sea Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KZA": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KZA-KZA1002-4205": {
          "displayName": "South",
          "destination": "K-KZA-KZA1002-4205"
        }
      }
    },
    "K-KNQ-KNQ1-9665": {
      "firstVisit": true,
      "displayName": "China (People\u2019s Republic, 1949-    )",
      "description": "Description for \u201cChina (People\u2019s Republic, 1949-    ) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KNQ"
        }
      }
    },
    "K-KNQ": {
      "firstVisit": true,
      "displayName": "\u201cChina (People\u2019s Republic, 1949-    ) Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cChina (People\u2019s Republic, 1949-    ) Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KNQ": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KNQ-KNQ1-9665": {
          "displayName": "South",
          "destination": "K-KNQ-KNQ1-9665"
        }
      }
    },
    "K-KJE-KJE5-9570": {
      "firstVisit": true,
      "displayName": "Regional organization and integration (Europe)",
      "description": "Description for \u201cRegional organization and integration (Europe) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KJE"
        }
      }
    },
    "K-KJE": {
      "firstVisit": true,
      "displayName": "\u201cRegional organization and integration (Europe) Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cRegional organization and integration (Europe) Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KJE": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KJE-KJE5-9570": {
          "displayName": "South",
          "destination": "K-KJE-KJE5-9570"
        }
      }
    },
    "K-KFV-KFV": {
      "firstVisit": true,
      "displayName": "Law of Vermont",
      "description": "Description for \u201cLaw of Vermont Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KFV"
        }
      }
    },
    "K-KFV": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Vermont Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Vermont Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KFV": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KFV-KFV": {
          "displayName": "South",
          "destination": "K-KFV-KFV"
        }
      }
    },
    "K-KNN-KNN": {
      "firstVisit": true,
      "displayName": "Law of China",
      "description": "Description for \u201cLaw of China Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KNN"
        }
      }
    },
    "K-KNN": {
      "firstVisit": true,
      "displayName": "\u201cLaw of China Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of China Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KNN": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KNN-KNN": {
          "displayName": "South",
          "destination": "K-KNN-KNN"
        }
      }
    },
    "K-KMM-KMM501-994": {
      "firstVisit": true,
      "displayName": "West Bank",
      "description": "Description for \u201cWest Bank Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KMM"
        }
      }
    },
    "K-KMM-KMM1-490": {
      "firstVisit": true,
      "displayName": "Jordan",
      "description": "Description for \u201cJordan Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KMM"
        }
      }
    },
    "K-KMM": {
      "firstVisit": true,
      "displayName": "\u201cWest Bank Building\u201d Main Lobby",
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n\n[  South  ] \u201cWest Bank Room\u201d\n[  North  ] \u201cJordan Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KMM": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KMM-KMM501-994": {
          "displayName": "South",
          "destination": "K-KMM-KMM501-994"
        },
        "K-KMM-KMM1-490": {
          "displayName": "North",
          "destination": "K-KMM-KMM1-490"
        }
      }
    },
    "K-KJC-KJC2-9799": {
      "firstVisit": true,
      "displayName": "Regional comparative and uniform law (Europe)",
      "description": "Description for \u201cRegional comparative and uniform law (Europe) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KJC"
        }
      }
    },
    "K-KJC": {
      "firstVisit": true,
      "displayName": "\u201cRegional comparative and uniform law (Europe) Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cRegional comparative and uniform law (Europe) Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KJC": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KJC-KJC2-9799": {
          "displayName": "South",
          "destination": "K-KJC-KJC2-9799"
        }
      }
    },
    "K-KMK-KMK1-4990": {
      "firstVisit": true,
      "displayName": "Israel",
      "description": "Description for \u201cIsrael Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KMK"
        }
      }
    },
    "K-KMK": {
      "firstVisit": true,
      "displayName": "\u201cIsrael Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cIsrael Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KMK": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KMK-KMK1-4990": {
          "displayName": "South",
          "destination": "K-KMK-KMK1-4990"
        }
      }
    },
    "K-KTL-KTL1-9560": {
      "firstVisit": true,
      "displayName": "South Africa, Republic of",
      "description": "Description for \u201cSouth Africa, Republic of Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KTL"
        }
      }
    },
    "K-KTL": {
      "firstVisit": true,
      "displayName": "\u201cSouth Africa, Republic of Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cSouth Africa, Republic of Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KTL": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KTL-KTL1-9560": {
          "displayName": "South",
          "destination": "K-KTL-KTL1-9560"
        }
      }
    },
    "K-KMC-KMC1-849": {
      "firstVisit": true,
      "displayName": "Regional comparative and uniform law",
      "description": "Description for \u201cRegional comparative and uniform law Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KMC"
        }
      }
    },
    "K-KMC": {
      "firstVisit": true,
      "displayName": "\u201cRegional comparative and uniform law Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cRegional comparative and uniform law Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KMC": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KMC-KMC1-849": {
          "displayName": "South",
          "destination": "K-KMC-KMC1-849"
        }
      }
    },
    "K-KEN-KEN1-599": {
      "firstVisit": true,
      "displayName": "Law of New Brunswick",
      "description": "Description for \u201cLaw of New Brunswick Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KEN"
        }
      }
    },
    "K-KEN-KEN1201-1799": {
      "firstVisit": true,
      "displayName": "Law of Newfoundland and Labrador",
      "description": "Description for \u201cLaw of Newfoundland and Labrador Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KEN"
        }
      }
    },
    "K-KEN-KEN5401-5999": {
      "firstVisit": true,
      "displayName": "Law of Northwest Territories",
      "description": "Description for \u201cLaw of Northwest Territories Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KEN"
        }
      }
    },
    "K-KEN-KEN7401-7999": {
      "firstVisit": true,
      "displayName": "Law of Nova Scotia",
      "description": "Description for \u201cLaw of Nova Scotia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KEN"
        }
      }
    },
    "K-KEN-KEN8001-8599": {
      "firstVisit": true,
      "displayName": "Law of Nunavut",
      "description": "Description for \u201cLaw of Nunavut Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KEN"
        }
      }
    },
    "K-KEN": {
      "firstVisit": true,
      "displayName": "\u201cLaw of New Brunswick Building\u201d Main Lobby",
      "description": "There are 5 rooms throughout this building. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[  South  ] \u201cLaw of New Brunswick Room\u201d\n[  North  ] \u201cLaw of Newfoundland and Labrador Room\u201d\n[  East   ] \u201cLaw of Northwest Territories Room\u201d\n[  West   ] \u201cLaw of Nova Scotia Room\u201d\n[SouthEast] \u201cLaw of Nunavut Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KEN": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KEN-KEN1-599": {
          "displayName": "South",
          "destination": "K-KEN-KEN1-599"
        },
        "K-KEN-KEN1201-1799": {
          "displayName": "North",
          "destination": "K-KEN-KEN1201-1799"
        },
        "K-KEN-KEN5401-5999": {
          "displayName": "East",
          "destination": "K-KEN-KEN5401-5999"
        },
        "K-KEN-KEN7401-7999": {
          "displayName": "West",
          "destination": "K-KEN-KEN7401-7999"
        },
        "K-KEN-KEN8001-8599": {
          "displayName": "SouthEast",
          "destination": "K-KEN-KEN8001-8599"
        }
      }
    },
    "K-KRP-KRP1-4990": {
      "firstVisit": true,
      "displayName": "Ethiopia",
      "description": "Description for \u201cEthiopia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KRP"
        }
      }
    },
    "K-KRP": {
      "firstVisit": true,
      "displayName": "\u201cEthiopia Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cEthiopia Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KRP": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KRP-KRP1-4990": {
          "displayName": "South",
          "destination": "K-KRP-KRP1-4990"
        }
      }
    },
    "K-KJA-KJA2-3660": {
      "firstVisit": true,
      "displayName": "Roman Law",
      "description": "Description for \u201cRoman Law Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KJA"
        }
      }
    },
    "K-KJA": {
      "firstVisit": true,
      "displayName": "\u201cRoman Law Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cRoman Law Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KJA": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KJA-KJA2-3660": {
          "displayName": "South",
          "destination": "K-KJA-KJA2-3660"
        }
      }
    },
    "K-KJV-KJV2-9158": {
      "firstVisit": true,
      "displayName": "Law of France",
      "description": "Description for \u201cLaw of France Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KJV"
        }
      }
    },
    "K-KJV": {
      "firstVisit": true,
      "displayName": "\u201cLaw of France Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of France Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KJV": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KJV-KJV2-9158": {
          "displayName": "South",
          "destination": "K-KJV-KJV2-9158"
        }
      }
    },
    "K-KBU-KBU2-4820": {
      "firstVisit": true,
      "displayName": "Law of the Roman Catholic Church. The Holy See",
      "description": "Description for \u201cLaw of the Roman Catholic Church. The Holy See Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KBU"
        }
      }
    },
    "K-KBU": {
      "firstVisit": true,
      "displayName": "\u201cLaw of the Roman Catholic Church. The Holy See Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of the Roman Catholic Church. The Holy See Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KBU": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KBU-KBU2-4820": {
          "displayName": "South",
          "destination": "K-KBU-KBU2-4820"
        }
      }
    },
    "K-KLB-KLB1-5780": {
      "firstVisit": true,
      "displayName": "Russia (Federation, 1992-    )",
      "description": "Description for \u201cRussia (Federation, 1992-    ) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KLB"
        }
      }
    },
    "K-KLB": {
      "firstVisit": true,
      "displayName": "\u201cRussia (Federation, 1992-    ) Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cRussia (Federation, 1992-    ) Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KLB": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KLB-KLB1-5780": {
          "displayName": "South",
          "destination": "K-KLB-KLB1-5780"
        }
      }
    },
    "K-KK-KK2-9799.3": {
      "firstVisit": true,
      "displayName": "Law of Germany",
      "description": "Description for \u201cLaw of Germany Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KK"
        }
      }
    },
    "K-KK": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Germany Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Germany Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KK": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KK-KK2-9799.3": {
          "displayName": "South",
          "destination": "K-KK-KK2-9799.3"
        }
      }
    },
    "K-KFG-KFG": {
      "firstVisit": true,
      "displayName": "Law of Georgia",
      "description": "Description for \u201cLaw of Georgia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KFG"
        }
      }
    },
    "K-KFG": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Georgia Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Georgia Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KFG": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KFG-KFG": {
          "displayName": "South",
          "destination": "K-KFG-KFG"
        }
      }
    },
    "K-KHA-KHA1-9800": {
      "firstVisit": true,
      "displayName": "Argentina",
      "description": "Description for \u201cArgentina Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KHA"
        }
      }
    },
    "K-KHA": {
      "firstVisit": true,
      "displayName": "\u201cArgentina Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cArgentina Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KHA": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KHA-KHA1-9800": {
          "displayName": "South",
          "destination": "K-KHA-KHA1-9800"
        }
      }
    },
    "K-KLW-KLW1-490": {
      "firstVisit": true,
      "displayName": "Uzbekistan",
      "description": "Description for \u201cUzbekistan Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KLW"
        }
      }
    },
    "K-KLW": {
      "firstVisit": true,
      "displayName": "\u201cUzbekistan Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cUzbekistan Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KLW": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KLW-KLW1-490": {
          "displayName": "South",
          "destination": "K-KLW-KLW1-490"
        }
      }
    },
    "K-KNW-KNW1-4990": {
      "firstVisit": true,
      "displayName": "Indonesia",
      "description": "Description for \u201cIndonesia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KNW"
        }
      }
    },
    "K-KNW": {
      "firstVisit": true,
      "displayName": "\u201cIndonesia Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cIndonesia Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KNW": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KNW-KNW1-4990": {
          "displayName": "South",
          "destination": "K-KNW-KNW1-4990"
        }
      }
    },
    "K-KQC-KQC1-999": {
      "firstVisit": true,
      "displayName": "Regional comparative and uniform law",
      "description": "Description for \u201cRegional comparative and uniform law Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KQC"
        }
      }
    },
    "K-KQC": {
      "firstVisit": true,
      "displayName": "\u201cRegional comparative and uniform law Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cRegional comparative and uniform law Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KQC": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KQC-KQC1-999": {
          "displayName": "South",
          "destination": "K-KQC-KQC1-999"
        }
      }
    },
    "K-KDZ-KDZ1-4499": {
      "firstVisit": true,
      "displayName": "America.  North America",
      "description": "Description for \u201cAmerica.  North America Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KDZ"
        }
      }
    },
    "K-KDZ": {
      "firstVisit": true,
      "displayName": "\u201cAmerica.  North America Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cAmerica.  North America Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KDZ": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KDZ-KDZ1-4499": {
          "displayName": "South",
          "destination": "K-KDZ-KDZ1-4499"
        }
      }
    },
    "K-KFK-KFK": {
      "firstVisit": true,
      "displayName": "Law of Kansas",
      "description": "Description for \u201cLaw of Kansas Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KFK"
        }
      }
    },
    "K-KFK": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Kansas Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Kansas Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KFK": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KFK-KFK": {
          "displayName": "South",
          "destination": "K-KFK-KFK"
        }
      }
    },
    "K-KDC-KDC51-990": {
      "firstVisit": true,
      "displayName": "Law of Scotland",
      "description": "Description for \u201cLaw of Scotland Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KDC"
        }
      }
    },
    "K-KDC": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Scotland Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Scotland Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KDC": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KDC-KDC51-990": {
          "displayName": "South",
          "destination": "K-KDC-KDC51-990"
        }
      }
    },
    "K-KNR-KNR1-489": {
      "firstVisit": true,
      "displayName": "Hong Kong",
      "description": "Description for \u201cHong Kong Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KNR"
        }
      }
    },
    "K-KNR": {
      "firstVisit": true,
      "displayName": "\u201cHong Kong Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cHong Kong Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KNR": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KNR-KNR1-489": {
          "displayName": "South",
          "destination": "K-KNR-KNR1-489"
        }
      }
    },
    "K-KFF-KFF": {
      "firstVisit": true,
      "displayName": "Law of Florida",
      "description": "Description for \u201cLaw of Florida Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KFF"
        }
      }
    },
    "K-KFF": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Florida Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Florida Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KFF": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KFF-KFF": {
          "displayName": "South",
          "destination": "K-KFF-KFF"
        }
      }
    },
    "K-KBM-KBM1-4855": {
      "firstVisit": true,
      "displayName": "Jewish law.  Halakah",
      "description": "Description for \u201cJewish law.  Halakah Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KBM"
        }
      }
    },
    "K-KBM": {
      "firstVisit": true,
      "displayName": "\u201cJewish law.  Halakah Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cJewish law.  Halakah Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KBM": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KBM-KBM1-4855": {
          "displayName": "South",
          "destination": "K-KBM-KBM1-4855"
        }
      }
    },
    "K-KJ-KJ2-2000": {
      "firstVisit": true,
      "displayName": "History of Law (Europe)",
      "description": "Description for \u201cHistory of Law (Europe) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KJ"
        }
      }
    },
    "K-KJ": {
      "firstVisit": true,
      "displayName": "\u201cHistory of Law (Europe) Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cHistory of Law (Europe) Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KJ": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KJ-KJ2-2000": {
          "displayName": "South",
          "destination": "K-KJ-KJ2-2000"
        }
      }
    },
    "K-KL-KL2-9299": {
      "firstVisit": true,
      "displayName": "History of law.  The ancient orient",
      "description": "Description for \u201cHistory of law.  The ancient orient Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KL"
        }
      }
    },
    "K-KL": {
      "firstVisit": true,
      "displayName": "\u201cHistory of law.  The ancient orient Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cHistory of law.  The ancient orient Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KL": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KL-KL2-9299": {
          "displayName": "South",
          "destination": "K-KL-KL2-9299"
        }
      }
    },
    "K-KE-KE1-9450": {
      "firstVisit": true,
      "displayName": "Law of Canada",
      "description": "Description for \u201cLaw of Canada Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KE"
        }
      }
    },
    "K-KE": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Canada Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Canada Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KE": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KE-KE1-9450": {
          "displayName": "South",
          "destination": "K-KE-KE1-9450"
        }
      }
    },
    "K-KFD-KFD": {
      "firstVisit": true,
      "displayName": "Law of Delaware",
      "description": "Description for \u201cLaw of Delaware Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KFD"
        }
      }
    },
    "K-KFD": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Delaware Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Delaware Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KFD": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KFD-KFD": {
          "displayName": "South",
          "destination": "K-KFD-KFD"
        }
      }
    },
    "K-KDK-KDK21-1950": {
      "firstVisit": true,
      "displayName": "Law of Ireland (Eire)",
      "description": "Description for \u201cLaw of Ireland (Eire) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KDK"
        }
      }
    },
    "K-KDK": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Ireland (Eire) Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Ireland (Eire) Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KDK": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KDK-KDK21-1950": {
          "displayName": "South",
          "destination": "K-KDK-KDK21-1950"
        }
      }
    },
    "K-KTT-KTT1-9910": {
      "firstVisit": true,
      "displayName": "Tanzania",
      "description": "Description for \u201cTanzania Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KTT"
        }
      }
    },
    "K-KTT": {
      "firstVisit": true,
      "displayName": "\u201cTanzania Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cTanzania Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KTT": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KTT-KTT1-9910": {
          "displayName": "South",
          "destination": "K-KTT-KTT1-9910"
        }
      }
    },
    "K-KNX-KNX2050-2535": {
      "firstVisit": true,
      "displayName": "Constitutional law",
      "description": "Description for \u201cConstitutional law Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KNX"
        }
      }
    },
    "K-KNX-KNX2920-2935": {
      "firstVisit": true,
      "displayName": "Administrative and political divisions",
      "description": "Description for \u201cAdministrative and political divisions Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KNX"
        }
      }
    },
    "K-KNX-KNX122-224": {
      "firstVisit": true,
      "displayName": "By period",
      "description": "Description for \u201cBy period Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KNX"
        }
      }
    },
    "K-KNX-KNX2000-2020": {
      "firstVisit": true,
      "displayName": "Public law",
      "description": "Description for \u201cPublic law Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KNX"
        }
      }
    },
    "K-KNX-KNX474-478.3": {
      "firstVisit": true,
      "displayName": "Regional divisions",
      "description": "Description for \u201cRegional divisions Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KNX"
        }
      }
    },
    "K-KNX": {
      "firstVisit": true,
      "displayName": "\u201cConstitutional law Building\u201d Main Lobby",
      "description": "There are 5 rooms throughout this building. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[  South  ] \u201cConstitutional law Room\u201d\n[  North  ] \u201cAdministrative and political divisions Room\u201d\n[  East   ] \u201cBy period Room\u201d\n[  West   ] \u201cPublic law Room\u201d\n[SouthEast] \u201cRegional divisions Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KNX": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KNX-KNX2050-2535": {
          "displayName": "South",
          "destination": "K-KNX-KNX2050-2535"
        },
        "K-KNX-KNX2920-2935": {
          "displayName": "North",
          "destination": "K-KNX-KNX2920-2935"
        },
        "K-KNX-KNX122-224": {
          "displayName": "East",
          "destination": "K-KNX-KNX122-224"
        },
        "K-KNX-KNX2000-2020": {
          "displayName": "West",
          "destination": "K-KNX-KNX2000-2020"
        },
        "K-KNX-KNX474-478.3": {
          "displayName": "SouthEast",
          "destination": "K-KNX-KNX474-478.3"
        }
      }
    },
    "K-KTY-KTY1-490": {
      "firstVisit": true,
      "displayName": "Zambia",
      "description": "Description for \u201cZambia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KTY"
        }
      }
    },
    "K-KTY-KTY1501-1599": {
      "firstVisit": true,
      "displayName": "Zanzibar (to 1964)",
      "description": "Description for \u201cZanzibar (to 1964) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KTY"
        }
      }
    },
    "K-KTY": {
      "firstVisit": true,
      "displayName": "\u201cZambia Building\u201d Main Lobby",
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n\n[  South  ] \u201cZambia Room\u201d\n[  North  ] \u201cZanzibar (to 1964) Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KTY": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KTY-KTY1-490": {
          "displayName": "South",
          "destination": "K-KTY-KTY1-490"
        },
        "K-KTY-KTY1501-1599": {
          "displayName": "North",
          "destination": "K-KTY-KTY1501-1599"
        }
      }
    },
    "K-KFS-KFS": {
      "firstVisit": true,
      "displayName": "Law of South Carolina",
      "description": "Description for \u201cLaw of South Carolina Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KFS"
        }
      }
    },
    "K-KFS": {
      "firstVisit": true,
      "displayName": "\u201cLaw of South Carolina Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of South Carolina Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KFS": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KFS-KFS": {
          "displayName": "South",
          "destination": "K-KFS-KFS"
        }
      }
    },
    "K-KNC-KNC1-999": {
      "firstVisit": true,
      "displayName": "Regional comparative and uniform law",
      "description": "Description for \u201cRegional comparative and uniform law Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KNC"
        }
      }
    },
    "K-KNC": {
      "firstVisit": true,
      "displayName": "\u201cRegional comparative and uniform law Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cRegional comparative and uniform law Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KNC": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KNC-KNC1-999": {
          "displayName": "South",
          "destination": "K-KNC-KNC1-999"
        }
      }
    },
    "K-KFH-KFH": {
      "firstVisit": true,
      "displayName": "Law of Hawaii",
      "description": "Description for \u201cLaw of Hawaii Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KFH"
        }
      }
    },
    "K-KFH": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Hawaii Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Hawaii Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KFH": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KFH-KFH": {
          "displayName": "South",
          "destination": "K-KFH-KFH"
        }
      }
    },
    "K-KFX-KFX": {
      "firstVisit": true,
      "displayName": "Laws of the cities",
      "description": "Description for \u201cLaws of the cities Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KFX"
        }
      }
    },
    "K-KFX": {
      "firstVisit": true,
      "displayName": "\u201cLaws of the cities Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaws of the cities Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KFX": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KFX-KFX": {
          "displayName": "South",
          "destination": "K-KFX-KFX"
        }
      }
    },
    "K-KJT-KJT": {
      "firstVisit": true,
      "displayName": "Law of Finland",
      "description": "Description for \u201cLaw of Finland Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KJT"
        }
      }
    },
    "K-KJT": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Finland Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Finland Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KJT": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KJT-KJT": {
          "displayName": "South",
          "destination": "K-KJT-KJT"
        }
      }
    },
    "K-KQW-KQW1-8020": {
      "firstVisit": true,
      "displayName": "Cameroon",
      "description": "Description for \u201cCameroon Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KQW"
        }
      }
    },
    "K-KQW": {
      "firstVisit": true,
      "displayName": "\u201cCameroon Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cCameroon Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KQW": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KQW-KQW1-8020": {
          "displayName": "South",
          "destination": "K-KQW-KQW1-8020"
        }
      }
    },
    "K-KB-KB1-4855": {
      "firstVisit": true,
      "displayName": "Religious law in general.  Comparative religious law.",
      "description": "Description for \u201cReligious law in general.  Comparative religious law. Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KB"
        }
      }
    },
    "K-KB": {
      "firstVisit": true,
      "displayName": "\u201cReligious law in general.  Comparative religious law. Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cReligious law in general.  Comparative religious law. Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KB": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KB-KB1-4855": {
          "displayName": "South",
          "destination": "K-KB-KB1-4855"
        }
      }
    },
    "K-KGL-KGL4001-4499": {
      "firstVisit": true,
      "displayName": "British Virgin Islands (General)",
      "description": "Description for \u201cBritish Virgin Islands (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KGL"
        }
      }
    },
    "K-KGL-KGL5001-5999": {
      "firstVisit": true,
      "displayName": "British West Indies (General)",
      "description": "Description for \u201cBritish West Indies (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KGL"
        }
      }
    },
    "K-KGL-KGL1-499": {
      "firstVisit": true,
      "displayName": "Bahamas",
      "description": "Description for \u201cBahamas Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KGL"
        }
      }
    },
    "K-KGL-KGL1001-1499": {
      "firstVisit": true,
      "displayName": "Barbados",
      "description": "Description for \u201cBarbados Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KGL"
        }
      }
    },
    "K-KGL": {
      "firstVisit": true,
      "displayName": "\u201cBritish West Indies (General) Building\u201d Main Lobby",
      "description": "There are 4 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n\n[  South  ] \u201cBritish Virgin Islands (General) Room\u201d\n[  North  ] \u201cBritish West Indies (General) Room\u201d\n[  East   ] \u201cBahamas Room\u201d\n[  West   ] \u201cBarbados Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KGL": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KGL-KGL4001-4499": {
          "displayName": "South",
          "destination": "K-KGL-KGL4001-4499"
        },
        "K-KGL-KGL5001-5999": {
          "displayName": "North",
          "destination": "K-KGL-KGL5001-5999"
        },
        "K-KGL-KGL1-499": {
          "displayName": "East",
          "destination": "K-KGL-KGL1-499"
        },
        "K-KGL-KGL1001-1499": {
          "displayName": "West",
          "destination": "K-KGL-KGL1001-1499"
        }
      }
    },
    "K-KGF-KGF1-9900": {
      "firstVisit": true,
      "displayName": "Mexico",
      "description": "Description for \u201cMexico Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KGF"
        }
      }
    },
    "K-KGF": {
      "firstVisit": true,
      "displayName": "\u201cMexico Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cMexico Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KGF": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KGF-KGF1-9900": {
          "displayName": "South",
          "destination": "K-KGF-KGF1-9900"
        }
      }
    },
    "K-KPL-KPL1-4990": {
      "firstVisit": true,
      "displayName": "Pakistan",
      "description": "Description for \u201cPakistan Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KPL"
        }
      }
    },
    "K-KPL": {
      "firstVisit": true,
      "displayName": "\u201cPakistan Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cPakistan Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KPL": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KPL-KPL1-4990": {
          "displayName": "South",
          "destination": "K-KPL-KPL1-4990"
        }
      }
    },
    "K-KNS-KNS1734-1800": {
      "firstVisit": true,
      "displayName": "Constitutional law",
      "description": "Description for \u201cConstitutional law Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KNS"
        }
      }
    },
    "K-KNS-KNS85-292": {
      "firstVisit": true,
      "displayName": "History of law",
      "description": "Description for \u201cHistory of law Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KNS"
        }
      }
    },
    "K-KNS-KNS350-439": {
      "firstVisit": true,
      "displayName": "Indic people.  Ethnic groups",
      "description": "Description for \u201cIndic people.  Ethnic groups Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KNS"
        }
      }
    },
    "K-KNS-KNS17.8-25.6": {
      "firstVisit": true,
      "displayName": "Law reports and related materials",
      "description": "Description for \u201cLaw reports and related materials Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KNS"
        }
      }
    },
    "K-KNS-KNS1724-1726": {
      "firstVisit": true,
      "displayName": "Public law",
      "description": "Description for \u201cPublic law Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KNS"
        }
      }
    },
    "K-KNS-KNS480-481": {
      "firstVisit": true,
      "displayName": "Conflict of laws",
      "description": "Description for \u201cConflict of laws Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KNS"
        }
      }
    },
    "K-KNS": {
      "firstVisit": true,
      "displayName": "\u201cHistory of law Building\u201d Main Lobby",
      "description": "There are 6 rooms throughout this building. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[  South  ] \u201cConstitutional law Room\u201d\n[  North  ] \u201cHistory of law Room\u201d\n[  East   ] \u201cIndic people.  Ethnic groups Room\u201d\n[  West   ] \u201cLaw reports and related materials Room\u201d\n[SouthEast] \u201cPublic law Room\u201d\n[NorthWest] \u201cConflict of laws Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KNS": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KNS-KNS1734-1800": {
          "displayName": "South",
          "destination": "K-KNS-KNS1734-1800"
        },
        "K-KNS-KNS85-292": {
          "displayName": "North",
          "destination": "K-KNS-KNS85-292"
        },
        "K-KNS-KNS350-439": {
          "displayName": "East",
          "destination": "K-KNS-KNS350-439"
        },
        "K-KNS-KNS17.8-25.6": {
          "displayName": "West",
          "destination": "K-KNS-KNS17.8-25.6"
        },
        "K-KNS-KNS1724-1726": {
          "displayName": "SouthEast",
          "destination": "K-KNS-KNS1724-1726"
        },
        "K-KNS-KNS480-481": {
          "displayName": "NorthWest",
          "destination": "K-KNS-KNS480-481"
        }
      }
    },
    "K-KFR-KFR": {
      "firstVisit": true,
      "displayName": "Law of Rhode Island",
      "description": "Description for \u201cLaw of Rhode Island Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KFR"
        }
      }
    },
    "K-KFR": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Rhode Island Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Rhode Island Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KFR": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KFR-KFR": {
          "displayName": "South",
          "destination": "K-KFR-KFR"
        }
      }
    },
    "K-KGV-KGV1-8200": {
      "firstVisit": true,
      "displayName": "Puerto Rico",
      "description": "Description for \u201cPuerto Rico Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KGV"
        }
      }
    },
    "K-KGV": {
      "firstVisit": true,
      "displayName": "\u201cPuerto Rico Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cPuerto Rico Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KGV": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KGV-KGV1-8200": {
          "displayName": "South",
          "destination": "K-KGV-KGV1-8200"
        }
      }
    },
    "K-KKW-KKW": {
      "firstVisit": true,
      "displayName": "Law of Switzerland",
      "description": "Description for \u201cLaw of Switzerland Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KKW"
        }
      }
    },
    "K-KKW": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Switzerland Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Switzerland Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KKW": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KKW-KKW": {
          "displayName": "South",
          "destination": "K-KKW-KKW"
        }
      }
    },
    "K-KKE-KKE": {
      "firstVisit": true,
      "displayName": "Law of Greece",
      "description": "Description for \u201cLaw of Greece Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KKE"
        }
      }
    },
    "K-KKE": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Greece Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Greece Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KKE": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KKE-KKE": {
          "displayName": "South",
          "destination": "K-KKE-KKE"
        }
      }
    },
    "K-KKY-KKY": {
      "firstVisit": true,
      "displayName": "Law of Ukraine",
      "description": "Description for \u201cLaw of Ukraine Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KKY"
        }
      }
    },
    "K-KKY": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Ukraine Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Ukraine Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KKY": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KKY-KKY": {
          "displayName": "South",
          "destination": "K-KKY-KKY"
        }
      }
    },
    "K-KKP-KKP": {
      "firstVisit": true,
      "displayName": "Law of Poland",
      "description": "Description for \u201cLaw of Poland Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KKP"
        }
      }
    },
    "K-KKP": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Poland Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Poland Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KKP": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KKP-KKP": {
          "displayName": "South",
          "destination": "K-KKP-KKP"
        }
      }
    },
    "K-KKM-KKM": {
      "firstVisit": true,
      "displayName": "Law of Netherlands",
      "description": "Description for \u201cLaw of Netherlands Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KKM"
        }
      }
    },
    "K-KKM": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Netherlands Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Netherlands Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KKM": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KKM-KKM": {
          "displayName": "South",
          "destination": "K-KKM-KKM"
        }
      }
    },
    "K-KKK-KKK": {
      "firstVisit": true,
      "displayName": "Law of Malta",
      "description": "Description for \u201cLaw of Malta Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KKK"
        }
      }
    },
    "K-KKK": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Malta Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Malta Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KKK": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KKK-KKK": {
          "displayName": "South",
          "destination": "K-KKK-KKK"
        }
      }
    },
    "K-KJK-KJK": {
      "firstVisit": true,
      "displayName": "Law of Bosnia and Hercegovina",
      "description": "Description for \u201cLaw of Bosnia and Hercegovina Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KJK"
        }
      }
    },
    "K-KJK": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Bosnia and Hercegovina Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Bosnia and Hercegovina Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KJK": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KJK-KJK": {
          "displayName": "South",
          "destination": "K-KJK-KJK"
        }
      }
    },
    "K-KKH-KKH": {
      "firstVisit": true,
      "displayName": "Law of Kosovo",
      "description": "Description for \u201cLaw of Kosovo Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KKH"
        }
      }
    },
    "K-KKH": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Kosovo Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Kosovo Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KKH": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KKH-KKH": {
          "displayName": "South",
          "destination": "K-KKH-KKH"
        }
      }
    },
    "K-KKJ-KKJ": {
      "firstVisit": true,
      "displayName": "Law of Lithuania",
      "description": "Description for \u201cLaw of Lithuania Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KKJ"
        }
      }
    },
    "K-KKJ": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Lithuania Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Lithuania Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KKJ": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KKJ-KKJ": {
          "displayName": "South",
          "destination": "K-KKJ-KKJ"
        }
      }
    },
    "K-KGD-KGD1-9990": {
      "firstVisit": true,
      "displayName": "Guatemala",
      "description": "Description for \u201cGuatemala Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KGD"
        }
      }
    },
    "K-KGD": {
      "firstVisit": true,
      "displayName": "\u201cGuatemala Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cGuatemala Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KGD": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KGD-KGD1-9990": {
          "displayName": "South",
          "destination": "K-KGD-KGD1-9990"
        }
      }
    },
    "K-KHQ-KHQ1-9800": {
      "firstVisit": true,
      "displayName": "Peru",
      "description": "Description for \u201cPeru Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KHQ"
        }
      }
    },
    "K-KHQ": {
      "firstVisit": true,
      "displayName": "\u201cPeru Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cPeru Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KHQ": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KHQ-KHQ1-9800": {
          "displayName": "South",
          "destination": "K-KHQ-KHQ1-9800"
        }
      }
    },
    "K-KST-KST1-490": {
      "firstVisit": true,
      "displayName": "Mali",
      "description": "Description for \u201cMali Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KST"
        }
      }
    },
    "K-KST": {
      "firstVisit": true,
      "displayName": "\u201cMali Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cMali Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KST": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KST-KST1-490": {
          "displayName": "South",
          "destination": "K-KST-KST1-490"
        }
      }
    },
    "K-KTA-KTA1-9150": {
      "firstVisit": true,
      "displayName": "Nigeria",
      "description": "Description for \u201cNigeria Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KTA"
        }
      }
    },
    "K-KTA": {
      "firstVisit": true,
      "displayName": "\u201cNigeria Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cNigeria Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KTA": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KTA-KTA1-9150": {
          "displayName": "South",
          "destination": "K-KTA-KTA1-9150"
        }
      }
    },
    "K-KGS-KGS1-9000": {
      "firstVisit": true,
      "displayName": "Haiti",
      "description": "Description for \u201cHaiti Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KGS"
        }
      }
    },
    "K-KGS": {
      "firstVisit": true,
      "displayName": "\u201cHaiti Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cHaiti Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KGS": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KGS-KGS1-9000": {
          "displayName": "South",
          "destination": "K-KGS-KGS1-9000"
        }
      }
    },
    "K-KHH-KHH1-9900": {
      "firstVisit": true,
      "displayName": "Colombia",
      "description": "Description for \u201cColombia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KHH"
        }
      }
    },
    "K-KHH": {
      "firstVisit": true,
      "displayName": "\u201cColombia Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cColombia Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KHH": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KHH-KHH1-9900": {
          "displayName": "South",
          "destination": "K-KHH-KHH1-9900"
        }
      }
    },
    "K-KG-KG1-999": {
      "firstVisit": true,
      "displayName": "Latin America (General)",
      "description": "Description for \u201cLatin America (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KG"
        }
      }
    },
    "K-KG-KG3001-3999": {
      "firstVisit": true,
      "displayName": "General",
      "description": "Description for \u201cGeneral Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KG"
        }
      }
    },
    "K-KG": {
      "firstVisit": true,
      "displayName": "\u201cLatin America (General) Building\u201d Main Lobby",
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n\n[  South  ] \u201cLatin America (General) Room\u201d\n[  North  ] \u201cGeneral Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KG": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KG-KG1-999": {
          "displayName": "South",
          "destination": "K-KG-KG1-999"
        },
        "K-KG-KG3001-3999": {
          "displayName": "North",
          "destination": "K-KG-KG3001-3999"
        }
      }
    },
    "K-KHK-KHK1-9990": {
      "firstVisit": true,
      "displayName": "Ecuador",
      "description": "Description for \u201cEcuador Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KHK"
        }
      }
    },
    "K-KHK": {
      "firstVisit": true,
      "displayName": "\u201cEcuador Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cEcuador Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KHK": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KHK-KHK1-9990": {
          "displayName": "South",
          "destination": "K-KHK-KHK1-9990"
        }
      }
    },
    "K-KHC-KHC1-8200": {
      "firstVisit": true,
      "displayName": "Bolivia",
      "description": "Description for \u201cBolivia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KHC"
        }
      }
    },
    "K-KHC": {
      "firstVisit": true,
      "displayName": "\u201cBolivia Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cBolivia Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KHC": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KHC-KHC1-8200": {
          "displayName": "South",
          "destination": "K-KHC-KHC1-8200"
        }
      }
    },
    "K-KNP-KNP1-599": {
      "firstVisit": true,
      "displayName": "China (Republic, 1949-    ).  Taiwan",
      "description": "Description for \u201cChina (Republic, 1949-    ).  Taiwan Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KNP"
        }
      }
    },
    "K-KNP": {
      "firstVisit": true,
      "displayName": "\u201cChina (Republic, 1949-    ).  Taiwan Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cChina (Republic, 1949-    ).  Taiwan Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KNP": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KNP-KNP1-599": {
          "displayName": "South",
          "destination": "K-KNP-KNP1-599"
        }
      }
    },
    "K-KLR-KLR1-490": {
      "firstVisit": true,
      "displayName": "Kazakhstan",
      "description": "Description for \u201cKazakhstan Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KLR"
        }
      }
    },
    "K-KLR-KLR1001-1499": {
      "firstVisit": true,
      "displayName": "Khorezmskai\uf04da Sovetskai\uf04da Sot\uf04dsialisticheskai\uf04da",
      "description": "Description for \u201cKhorezmskai\uf04da Sovetskai\uf04da Sot\uf04dsialisticheskai\uf04da Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KLR"
        }
      }
    },
    "K-KLR": {
      "firstVisit": true,
      "displayName": "\u201cKhorezmskai\uf04da Sovetskai\uf04da Sot\uf04dsialisticheskai\uf04da Building\u201d Main Lobby",
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n\n[  South  ] \u201cKazakhstan Room\u201d\n[  North  ] \u201cKhorezmskai\uf04da Sovetskai\uf04da Sot\uf04dsialisticheskai\uf04da Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KLR": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KLR-KLR1-490": {
          "displayName": "South",
          "destination": "K-KLR-KLR1-490"
        },
        "K-KLR-KLR1001-1499": {
          "displayName": "North",
          "destination": "K-KLR-KLR1001-1499"
        }
      }
    },
    "K-KTZ-KTZ1-490": {
      "firstVisit": true,
      "displayName": "Zimbabwe",
      "description": "Description for \u201cZimbabwe Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KTZ"
        }
      }
    },
    "K-KTZ": {
      "firstVisit": true,
      "displayName": "\u201cZimbabwe Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cZimbabwe Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KTZ": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KTZ-KTZ1-490": {
          "displayName": "South",
          "destination": "K-KTZ-KTZ1-490"
        }
      }
    },
    "K-KBS-KBS3-4010": {
      "firstVisit": true,
      "displayName": "Canon law of Eastern Churches",
      "description": "Description for \u201cCanon law of Eastern Churches Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KBS"
        }
      }
    },
    "K-KBS": {
      "firstVisit": true,
      "displayName": "\u201cCanon law of Eastern Churches Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cCanon law of Eastern Churches Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KBS": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KBS-KBS3-4010": {
          "displayName": "South",
          "destination": "K-KBS-KBS3-4010"
        }
      }
    },
    "K-KPA-KPA1-4990": {
      "firstVisit": true,
      "displayName": "Korea.  South Korea",
      "description": "Description for \u201cKorea.  South Korea Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KPA"
        }
      }
    },
    "K-KPA": {
      "firstVisit": true,
      "displayName": "\u201cKorea.  South Korea Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cKorea.  South Korea Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KPA": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KPA-KPA1-4990": {
          "displayName": "South",
          "destination": "K-KPA-KPA1-4990"
        }
      }
    },
    "K-KUQ-KUQ1-4990": {
      "firstVisit": true,
      "displayName": "New Zealand",
      "description": "Description for \u201cNew Zealand Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KUQ"
        }
      }
    },
    "K-KUQ": {
      "firstVisit": true,
      "displayName": "\u201cNew Zealand Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cNew Zealand Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KUQ": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KUQ-KUQ1-4990": {
          "displayName": "South",
          "destination": "K-KUQ-KUQ1-4990"
        }
      }
    },
    "K-KVN-KVN1-490": {
      "firstVisit": true,
      "displayName": "Fiji",
      "description": "Description for \u201cFiji Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KVN"
        }
      }
    },
    "K-KVN": {
      "firstVisit": true,
      "displayName": "\u201cFiji Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cFiji Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KVN": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KVN-KVN1-490": {
          "displayName": "South",
          "destination": "K-KVN-KVN1-490"
        }
      }
    },
    "K-KVW-KVW1-490": {
      "firstVisit": true,
      "displayName": "New Caledonia",
      "description": "Description for \u201cNew Caledonia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KVW"
        }
      }
    },
    "K-KVW": {
      "firstVisit": true,
      "displayName": "\u201cNew Caledonia Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cNew Caledonia Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KVW": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KVW-KVW1-490": {
          "displayName": "South",
          "destination": "K-KVW-KVW1-490"
        }
      }
    },
    "K-KFU-KFU": {
      "firstVisit": true,
      "displayName": "Law of Utah",
      "description": "Description for \u201cLaw of Utah Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KFU"
        }
      }
    },
    "K-KFU": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Utah Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Utah Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KFU": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KFU-KFU": {
          "displayName": "South",
          "destination": "K-KFU-KFU"
        }
      }
    },
    "K-KJR-KJR": {
      "firstVisit": true,
      "displayName": "Law of Denmark",
      "description": "Description for \u201cLaw of Denmark Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KJR"
        }
      }
    },
    "K-KJR": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Denmark Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Denmark Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KJR": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KJR-KJR": {
          "displayName": "South",
          "destination": "K-KJR-KJR"
        }
      }
    },
    "K-KKQ-KKQ": {
      "firstVisit": true,
      "displayName": "Law of Portugal",
      "description": "Description for \u201cLaw of Portugal Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KKQ"
        }
      }
    },
    "K-KKQ": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Portugal Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Portugal Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KKQ": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KKQ-KKQ": {
          "displayName": "South",
          "destination": "K-KKQ-KKQ"
        }
      }
    },
    "K-KJS-KJS": {
      "firstVisit": true,
      "displayName": "Law of Estonia",
      "description": "Description for \u201cLaw of Estonia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KJS"
        }
      }
    },
    "K-KJS": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Estonia Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Estonia Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KJS": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KJS-KJS": {
          "displayName": "South",
          "destination": "K-KJS-KJS"
        }
      }
    },
    "K-KKZ-KKZ": {
      "firstVisit": true,
      "displayName": "Law of Yugoslavia",
      "description": "Description for \u201cLaw of Yugoslavia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KKZ"
        }
      }
    },
    "K-KKZ": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Yugoslavia Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Yugoslavia Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KKZ": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KKZ-KKZ": {
          "displayName": "South",
          "destination": "K-KKZ-KKZ"
        }
      }
    },
    "K-KJP-KJP": {
      "firstVisit": true,
      "displayName": "Law of Czech Republic (1993-        )",
      "description": "Description for \u201cLaw of Czech Republic (1993-        ) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KJP"
        }
      }
    },
    "K-KJP": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Czech Republic (1993-        ) Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Czech Republic (1993-        ) Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KJP": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KJP-KJP": {
          "displayName": "South",
          "destination": "K-KJP-KJP"
        }
      }
    },
    "K-KGB-KGB1-9000": {
      "firstVisit": true,
      "displayName": "Costa Rica",
      "description": "Description for \u201cCosta Rica Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KGB"
        }
      }
    },
    "K-KGB": {
      "firstVisit": true,
      "displayName": "\u201cCosta Rica Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cCosta Rica Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KGB": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KGB-KGB1-9000": {
          "displayName": "South",
          "destination": "K-KGB-KGB1-9000"
        }
      }
    },
    "K-KHW-KHW1-9900": {
      "firstVisit": true,
      "displayName": "Venezuela",
      "description": "Description for \u201cVenezuela Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KHW"
        }
      }
    },
    "K-KHW": {
      "firstVisit": true,
      "displayName": "\u201cVenezuela Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cVenezuela Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KHW": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KHW-KHW1-9900": {
          "displayName": "South",
          "destination": "K-KHW-KHW1-9900"
        }
      }
    },
    "K-KGE-KGE1-9990": {
      "firstVisit": true,
      "displayName": "Honduras",
      "description": "Description for \u201cHonduras Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KGE"
        }
      }
    },
    "K-KGE": {
      "firstVisit": true,
      "displayName": "\u201cHonduras Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cHonduras Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KGE": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KGE-KGE1-9990": {
          "displayName": "South",
          "destination": "K-KGE-KGE1-9990"
        }
      }
    },
    "K-KGG-KGG1-9800": {
      "firstVisit": true,
      "displayName": "Nicaragua",
      "description": "Description for \u201cNicaragua Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KGG"
        }
      }
    },
    "K-KGG": {
      "firstVisit": true,
      "displayName": "\u201cNicaragua Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cNicaragua Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KGG": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KGG-KGG1-9800": {
          "displayName": "South",
          "destination": "K-KGG-KGG1-9800"
        }
      }
    },
    "K-KHF-KHF1-9800": {
      "firstVisit": true,
      "displayName": "Chile",
      "description": "Description for \u201cChile Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KHF"
        }
      }
    },
    "K-KHF": {
      "firstVisit": true,
      "displayName": "\u201cChile Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cChile Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KHF": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KHF-KHF1-9800": {
          "displayName": "South",
          "destination": "K-KHF-KHF1-9800"
        }
      }
    },
    "K-KHP-KHP1-9700": {
      "firstVisit": true,
      "displayName": "Paraguay",
      "description": "Description for \u201cParaguay Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KHP"
        }
      }
    },
    "K-KHP": {
      "firstVisit": true,
      "displayName": "\u201cParaguay Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cParaguay Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KHP": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KHP-KHP1-9700": {
          "displayName": "South",
          "destination": "K-KHP-KHP1-9700"
        }
      }
    },
    "K-KKA-KKA3-9796": {
      "firstVisit": true,
      "displayName": "Law of East Germany",
      "description": "Description for \u201cLaw of East Germany Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KKA"
        }
      }
    },
    "K-KKA": {
      "firstVisit": true,
      "displayName": "\u201cLaw of East Germany Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of East Germany Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KKA": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KKA-KKA3-9796": {
          "displayName": "South",
          "destination": "K-KKA-KKA3-9796"
        }
      }
    },
    "K-KKV-KKV": {
      "firstVisit": true,
      "displayName": "Law of Sweden",
      "description": "Description for \u201cLaw of Sweden Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KKV"
        }
      }
    },
    "K-KKV": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Sweden Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Sweden Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KKV": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KKV-KKV": {
          "displayName": "South",
          "destination": "K-KKV-KKV"
        }
      }
    },
    "K-KSW-KSW1-4990": {
      "firstVisit": true,
      "displayName": "Morocco",
      "description": "Description for \u201cMorocco Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KSW"
        }
      }
    },
    "K-KSW": {
      "firstVisit": true,
      "displayName": "\u201cMorocco Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cMorocco Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KSW": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KSW-KSW1-4990": {
          "displayName": "South",
          "destination": "K-KSW-KSW1-4990"
        }
      }
    },
    "K-KM-KM1-999": {
      "firstVisit": true,
      "displayName": "General",
      "description": "Description for \u201cGeneral Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KM"
        }
      }
    },
    "K-KM": {
      "firstVisit": true,
      "displayName": "\u201cGeneral Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cGeneral Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KM": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KM-KM1-999": {
          "displayName": "South",
          "destination": "K-KM-KM1-999"
        }
      }
    },
    "K-KLF-KLF1-490": {
      "firstVisit": true,
      "displayName": "Belarus (Republic)",
      "description": "Description for \u201cBelarus (Republic) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KLF"
        }
      }
    },
    "K-KLF": {
      "firstVisit": true,
      "displayName": "\u201cBelarus (Republic) Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cBelarus (Republic) Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KLF": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KLF-KLF1-490": {
          "displayName": "South",
          "destination": "K-KLF-KLF1-490"
        }
      }
    },
    "K-KH-KH1-999": {
      "firstVisit": true,
      "displayName": "General",
      "description": "Description for \u201cGeneral Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KH"
        }
      }
    },
    "K-KH": {
      "firstVisit": true,
      "displayName": "\u201cGeneral Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cGeneral Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KH": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KH-KH1-999": {
          "displayName": "South",
          "destination": "K-KH-KH1-999"
        }
      }
    },
    "K-KPT-KPT1-4990": {
      "firstVisit": true,
      "displayName": "Thailand",
      "description": "Description for \u201cThailand Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KPT"
        }
      }
    },
    "K-KPT": {
      "firstVisit": true,
      "displayName": "\u201cThailand Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cThailand Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KPT": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KPT-KPT1-4990": {
          "displayName": "South",
          "destination": "K-KPT-KPT1-4990"
        }
      }
    },
    "K-KPM-KPM1-4999": {
      "firstVisit": true,
      "displayName": "Philippines",
      "description": "Description for \u201cPhilippines Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KPM"
        }
      }
    },
    "K-KPM": {
      "firstVisit": true,
      "displayName": "\u201cPhilippines Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cPhilippines Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KPM": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KPM-KPM1-4999": {
          "displayName": "South",
          "destination": "K-KPM-KPM1-4999"
        }
      }
    },
    "K-KPV-KPV1-8094": {
      "firstVisit": true,
      "displayName": "Vietnam",
      "description": "Description for \u201cVietnam Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KPV"
        }
      }
    },
    "K-KPV": {
      "firstVisit": true,
      "displayName": "\u201cVietnam Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cVietnam Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KPV": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KPV-KPV1-8094": {
          "displayName": "South",
          "destination": "K-KPV-KPV1-8094"
        }
      }
    },
    "K-KPP-KPP1-499": {
      "firstVisit": true,
      "displayName": "Singapore",
      "description": "Description for \u201cSingapore Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KPP"
        }
      }
    },
    "K-KPP": {
      "firstVisit": true,
      "displayName": "\u201cSingapore Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cSingapore Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KPP": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KPP-KPP1-499": {
          "displayName": "South",
          "destination": "K-KPP-KPP1-499"
        }
      }
    },
    "K-KMH-KMH1-4990": {
      "firstVisit": true,
      "displayName": "Iran",
      "description": "Description for \u201cIran Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KMH"
        }
      }
    },
    "K-KMH": {
      "firstVisit": true,
      "displayName": "\u201cIran Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cIran Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KMH": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KMH-KMH1-4990": {
          "displayName": "South",
          "destination": "K-KMH-KMH1-4990"
        }
      }
    },
    "K-KSV-KSV1-490": {
      "firstVisit": true,
      "displayName": "Mauritius",
      "description": "Description for \u201cMauritius Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KSV"
        }
      }
    },
    "K-KSV": {
      "firstVisit": true,
      "displayName": "\u201cMayotte Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cMauritius Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KSV": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KSV-KSV1-490": {
          "displayName": "South",
          "destination": "K-KSV-KSV1-490"
        }
      }
    },
    "K-KSY-KSY1-4990": {
      "firstVisit": true,
      "displayName": "Namibia",
      "description": "Description for \u201cNamibia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KSY"
        }
      }
    },
    "K-KSY": {
      "firstVisit": true,
      "displayName": "\u201cNamibia Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cNamibia Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KSY": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KSY-KSY1-4990": {
          "displayName": "South",
          "destination": "K-KSY-KSY1-4990"
        }
      }
    },
    "K-KQK-KQK1-490": {
      "firstVisit": true,
      "displayName": "Botswana",
      "description": "Description for \u201cBotswana Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KQK"
        }
      }
    },
    "K-KQK": {
      "firstVisit": true,
      "displayName": "\u201cBotswana Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cBotswana Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KQK": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KQK-KQK1-490": {
          "displayName": "South",
          "destination": "K-KQK-KQK1-490"
        }
      }
    },
    "K-KQH-KQH1-4990": {
      "firstVisit": true,
      "displayName": "Angola",
      "description": "Description for \u201cAngola Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KQH"
        }
      }
    },
    "K-KQH": {
      "firstVisit": true,
      "displayName": "\u201cAngola Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cAngola Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KQH": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KQH-KQH1-4990": {
          "displayName": "South",
          "destination": "K-KQH-KQH1-4990"
        }
      }
    },
    "K-KSX-KSX1-4990": {
      "firstVisit": true,
      "displayName": "Mozambique",
      "description": "Description for \u201cMozambique Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KSX"
        }
      }
    },
    "K-KSX": {
      "firstVisit": true,
      "displayName": "\u201cMozambique Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cMozambique Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KSX": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KSX-KSX1-4990": {
          "displayName": "South",
          "destination": "K-KSX-KSX1-4990"
        }
      }
    },
    "K-KSK-KSK1-4990": {
      "firstVisit": true,
      "displayName": "Kenya",
      "description": "Description for \u201cKenya Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KSK"
        }
      }
    },
    "K-KSK": {
      "firstVisit": true,
      "displayName": "\u201cKenya Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cKenya Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KSK": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KSK-KSK1-4990": {
          "displayName": "South",
          "destination": "K-KSK-KSK1-4990"
        }
      }
    },
    "K-KRU-KRU1-490": {
      "firstVisit": true,
      "displayName": "Gabon",
      "description": "Description for \u201cGabon Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KRU"
        }
      }
    },
    "K-KRU": {
      "firstVisit": true,
      "displayName": "\u201cGabon Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cGabon Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KRU": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KRU-KRU1-490": {
          "displayName": "South",
          "destination": "K-KRU-KRU1-490"
        }
      }
    },
    "K-KSL-KSL1-490": {
      "firstVisit": true,
      "displayName": "Lesotho",
      "description": "Description for \u201cLesotho Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KSL"
        }
      }
    },
    "K-KSL": {
      "firstVisit": true,
      "displayName": "\u201cLesotho Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLesotho Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KSL": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KSL-KSL1-490": {
          "displayName": "South",
          "destination": "K-KSL-KSL1-490"
        }
      }
    },
    "K-KRX-KRX1-4990": {
      "firstVisit": true,
      "displayName": "Ghana",
      "description": "Description for \u201cGhana Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KRX"
        }
      }
    },
    "K-KRX": {
      "firstVisit": true,
      "displayName": "\u201cGhana Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cGhana Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KRX": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KRX-KRX1-4990": {
          "displayName": "South",
          "destination": "K-KRX-KRX1-4990"
        }
      }
    },
    "K-KSS-KSS1-490": {
      "firstVisit": true,
      "displayName": "Malawi",
      "description": "Description for \u201cMalawi Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KSS"
        }
      }
    },
    "K-KSS": {
      "firstVisit": true,
      "displayName": "\u201cMalawi Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cMalawi Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KSS": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KSS-KSS1-490": {
          "displayName": "South",
          "destination": "K-KSS-KSS1-490"
        }
      }
    },
    "K-KTW-KTW1-490": {
      "firstVisit": true,
      "displayName": "Uganda",
      "description": "Description for \u201cUganda Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KTW"
        }
      }
    },
    "K-KTW": {
      "firstVisit": true,
      "displayName": "\u201cUganda Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cUganda Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KTW": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KTW-KTW1-490": {
          "displayName": "South",
          "destination": "K-KTW-KTW1-490"
        }
      }
    },
    "K-KTD-KTD1-490": {
      "firstVisit": true,
      "displayName": "Rwanda",
      "description": "Description for \u201cRwanda Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KTD"
        }
      }
    },
    "K-KTD": {
      "firstVisit": true,
      "displayName": "\u201cRwanda Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cRwanda Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KTD": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KTD-KTD1-490": {
          "displayName": "South",
          "destination": "K-KTD-KTD1-490"
        }
      }
    },
    "K-KTX-KTX1-4990": {
      "firstVisit": true,
      "displayName": "Congo (Democratic Republic)",
      "description": "Description for \u201cCongo (Democratic Republic) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KTX"
        }
      }
    },
    "K-KTX": {
      "firstVisit": true,
      "displayName": "\u201cCongo (Democratic Republic) Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cCongo (Democratic Republic) Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KTX": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KTX-KTX1-4990": {
          "displayName": "South",
          "destination": "K-KTX-KTX1-4990"
        }
      }
    },
    "K-KRS-KRS1-499": {
      "firstVisit": true,
      "displayName": "French West Africa",
      "description": "Description for \u201cFrench West Africa Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KRS"
        }
      }
    },
    "K-KRS": {
      "firstVisit": true,
      "displayName": "\u201cFrench West Africa Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cFrench West Africa Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KRS": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KRS-KRS1-499": {
          "displayName": "South",
          "destination": "K-KRS-KRS1-499"
        }
      }
    },
    "K-KTG-KTG1-4990": {
      "firstVisit": true,
      "displayName": "Senegal",
      "description": "Description for \u201cSenegal Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KTG"
        }
      }
    },
    "K-KTG": {
      "firstVisit": true,
      "displayName": "\u201cSenegal Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cSenegal Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KTG": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KTG-KTG1-4990": {
          "displayName": "South",
          "destination": "K-KTG-KTG1-4990"
        }
      }
    },
    "K-KKX-KKX": {
      "firstVisit": true,
      "displayName": "Law of Turkey",
      "description": "Description for \u201cLaw of Turkey Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KKX"
        }
      }
    },
    "K-KKX": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Turkey Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Turkey Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KKX": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KKX-KKX": {
          "displayName": "South",
          "destination": "K-KKX-KKX"
        }
      }
    },
    "K-KLE-KLE1-490": {
      "firstVisit": true,
      "displayName": "Azerbaijan",
      "description": "Description for \u201cAzerbaijan Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KLE"
        }
      }
    },
    "K-KLE": {
      "firstVisit": true,
      "displayName": "\u201cAzerbaijan Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cAzerbaijan Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KLE": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KLE-KLE1-490": {
          "displayName": "South",
          "destination": "K-KLE-KLE1-490"
        }
      }
    },
    "K-KRM-KRM1-4990": {
      "firstVisit": true,
      "displayName": "Egypt",
      "description": "Description for \u201cEgypt Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KRM"
        }
      }
    },
    "K-KRM": {
      "firstVisit": true,
      "displayName": "\u201cEgypt Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cEgypt Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KRM": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KRM-KRM1-4990": {
          "displayName": "South",
          "destination": "K-KRM-KRM1-4990"
        }
      }
    },
    "K-KMN-KMN1-499": {
      "firstVisit": true,
      "displayName": "Kuwait",
      "description": "Description for \u201cKuwait Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KMN"
        }
      }
    },
    "K-KMN": {
      "firstVisit": true,
      "displayName": "\u201cKuwait Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cKuwait Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KMN": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KMN-KMN1-499": {
          "displayName": "South",
          "destination": "K-KMN-KMN1-499"
        }
      }
    },
    "K-KMX-KMX1001-1526": {
      "firstVisit": true,
      "displayName": "Yemen",
      "description": "Description for \u201cYemen Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KMX"
        }
      }
    },
    "K-KMX": {
      "firstVisit": true,
      "displayName": "\u201cYemen Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cYemen Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KMX": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KMX-KMX1001-1526": {
          "displayName": "South",
          "destination": "K-KMX-KMX1001-1526"
        }
      }
    },
    "K-KTQ-KTQ1-4990": {
      "firstVisit": true,
      "displayName": "Sudan",
      "description": "Description for \u201cSudan Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KTQ"
        }
      }
    },
    "K-KTQ": {
      "firstVisit": true,
      "displayName": "\u201cSudan Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cSudan Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KTQ": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KTQ-KTQ1-4990": {
          "displayName": "South",
          "destination": "K-KTQ-KTQ1-4990"
        }
      }
    },
    "K-KQG-KQG1-4999": {
      "firstVisit": true,
      "displayName": "Algeria",
      "description": "Description for \u201cAlgeria Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KQG"
        }
      }
    },
    "K-KQG": {
      "firstVisit": true,
      "displayName": "\u201cAlgeria Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cAlgeria Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KQG": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KQG-KQG1-4999": {
          "displayName": "South",
          "destination": "K-KQG-KQG1-4999"
        }
      }
    },
    "K-KMV-KMV1-9870": {
      "firstVisit": true,
      "displayName": "United Arab Emirates",
      "description": "Description for \u201cUnited Arab Emirates Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KMV"
        }
      }
    },
    "K-KMV": {
      "firstVisit": true,
      "displayName": "\u201cUnited Arab Emirates Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cUnited Arab Emirates Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KMV": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KMV-KMV1-9870": {
          "displayName": "South",
          "destination": "K-KMV-KMV1-9870"
        }
      }
    },
    "K-KHD-KHD1-9900": {
      "firstVisit": true,
      "displayName": "Brazil",
      "description": "Description for \u201cBrazil Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KHD"
        }
      }
    },
    "K-KHD": {
      "firstVisit": true,
      "displayName": "\u201cBrazil Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cBrazil Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KHD": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KHD-KHD1-9900": {
          "displayName": "South",
          "destination": "K-KHD-KHD1-9900"
        }
      }
    },
    "K-KHN-KHN1-9000": {
      "firstVisit": true,
      "displayName": "Guyana",
      "description": "Description for \u201cGuyana Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KHN"
        }
      }
    },
    "K-KHN": {
      "firstVisit": true,
      "displayName": "\u201cGuyana Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cGuyana Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KHN": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KHN-KHN1-9000": {
          "displayName": "South",
          "destination": "K-KHN-KHN1-9000"
        }
      }
    },
    "K-KHU-KHU1-9800": {
      "firstVisit": true,
      "displayName": "Uruguay",
      "description": "Description for \u201cUruguay Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KHU"
        }
      }
    },
    "K-KHU": {
      "firstVisit": true,
      "displayName": "\u201cUruguay Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cUruguay Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KHU": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KHU-KHU1-9800": {
          "displayName": "South",
          "destination": "K-KHU-KHU1-9800"
        }
      }
    },
    "K-KLS-KLS1-490": {
      "firstVisit": true,
      "displayName": "Kyrgyzstan",
      "description": "Description for \u201cKyrgyzstan Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KLS"
        }
      }
    },
    "K-KLS": {
      "firstVisit": true,
      "displayName": "\u201cKyrgyzstan Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cKyrgyzstan Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KLS": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KLS-KLS1-490": {
          "displayName": "South",
          "destination": "K-KLS-KLS1-490"
        }
      }
    },
    "K-KSA-KSA1-490": {
      "firstVisit": true,
      "displayName": "Guinea",
      "description": "Description for \u201cGuinea Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KSA"
        }
      }
    },
    "K-KSA": {
      "firstVisit": true,
      "displayName": "\u201cGuinea Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cGuinea Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KSA": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KSA-KSA1-490": {
          "displayName": "South",
          "destination": "K-KSA-KSA1-490"
        }
      }
    },
    "K-KPF-KPF1-489": {
      "firstVisit": true,
      "displayName": "Macao",
      "description": "Description for \u201cMacao Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KPF"
        }
      }
    },
    "K-KPF": {
      "firstVisit": true,
      "displayName": "\u201cMacao Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cMacao Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KPF": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KPF-KPF1-489": {
          "displayName": "South",
          "destination": "K-KPF-KPF1-489"
        }
      }
    },
    "K-KLD-KLD1-490": {
      "firstVisit": true,
      "displayName": "Armenian SSR (to 1991)",
      "description": "Description for \u201cArmenian SSR (to 1991) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KLD"
        }
      }
    },
    "K-KLD": {
      "firstVisit": true,
      "displayName": "\u201cArmenian SSR (to 1991) Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cArmenian SSR (to 1991) Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KLD": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KLD-KLD1-490": {
          "displayName": "South",
          "destination": "K-KLD-KLD1-490"
        }
      }
    },
    "K-KTV-KTV1-4990": {
      "firstVisit": true,
      "displayName": "Tunisia",
      "description": "Description for \u201cTunisia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KTV"
        }
      }
    },
    "K-KTV": {
      "firstVisit": true,
      "displayName": "\u201cTunisia Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cTunisia Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KTV": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KTV-KTV1-4990": {
          "displayName": "South",
          "destination": "K-KTV-KTV1-4990"
        }
      }
    },
    "K-KMP-KMP1-490": {
      "firstVisit": true,
      "displayName": "Lebanon",
      "description": "Description for \u201cLebanon Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KMP"
        }
      }
    },
    "K-KMP": {
      "firstVisit": true,
      "displayName": "\u201cLebanon Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLebanon Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KMP": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KMP-KMP1-490": {
          "displayName": "South",
          "destination": "K-KMP-KMP1-490"
        }
      }
    },
    "K-KMF-KMF1001-1490": {
      "firstVisit": true,
      "displayName": "Bahrain",
      "description": "Description for \u201cBahrain Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KMF"
        }
      }
    },
    "K-KMF-KMF1-489": {
      "firstVisit": true,
      "displayName": "Armenia (Republic)",
      "description": "Description for \u201cArmenia (Republic) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KMF"
        }
      }
    },
    "K-KMF": {
      "firstVisit": true,
      "displayName": "\u201cBahrain Building\u201d Main Lobby",
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n\n[  South  ] \u201cBahrain Room\u201d\n[  North  ] \u201cArmenia (Republic) Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KMF": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KMF-KMF1001-1490": {
          "displayName": "South",
          "destination": "K-KMF-KMF1001-1490"
        },
        "K-KMF-KMF1-489": {
          "displayName": "North",
          "destination": "K-KMF-KMF1-489"
        }
      }
    },
    "K-KKS-KKS": {
      "firstVisit": true,
      "displayName": "Law of Slovenia",
      "description": "Description for \u201cLaw of Slovenia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KKS"
        }
      }
    },
    "K-KKS": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Slovenia Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Slovenia Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KKS": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KKS-KKS": {
          "displayName": "South",
          "destination": "K-KKS-KKS"
        }
      }
    },
    "K-KJW-KJW51-9600": {
      "firstVisit": true,
      "displayName": "French regions, provinces, cities, etc.",
      "description": "Description for \u201cFrench regions, provinces, cities, etc. Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KJW"
        }
      }
    },
    "K-KJW": {
      "firstVisit": true,
      "displayName": "\u201cFrench regions, provinces, cities, etc. Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cFrench regions, provinces, cities, etc. Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KJW": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KJW-KJW51-9600": {
          "displayName": "South",
          "destination": "K-KJW-KJW51-9600"
        }
      }
    },
    "K-KJJ-KJJ": {
      "firstVisit": true,
      "displayName": "Law of Austria",
      "description": "Description for \u201cLaw of Austria Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KJJ"
        }
      }
    },
    "K-KJJ": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Austria Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Austria Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KJJ": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KJJ-KJJ": {
          "displayName": "South",
          "destination": "K-KJJ-KJJ"
        }
      }
    },
    "K-KZD-KZD1002-6715": {
      "firstVisit": true,
      "displayName": "Space law.  Law of outer space",
      "description": "Description for \u201cSpace law.  Law of outer space Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KZD"
        }
      }
    },
    "K-KZD": {
      "firstVisit": true,
      "displayName": "\u201cSpace law.  Law of outer space Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cSpace law.  Law of outer space Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KZD": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KZD-KZD1002-6715": {
          "displayName": "South",
          "destination": "K-KZD-KZD1002-6715"
        }
      }
    },
    "K-KWW-KWW1-490": {
      "firstVisit": true,
      "displayName": "Western Samoa",
      "description": "Description for \u201cWestern Samoa Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KWW"
        }
      }
    },
    "K-KWW": {
      "firstVisit": true,
      "displayName": "\u201cWestern Samoa Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cWestern Samoa Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KWW": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KWW-KWW1-490": {
          "displayName": "South",
          "destination": "K-KWW-KWW1-490"
        }
      }
    },
    "K-KVP-KVP1-100": {
      "firstVisit": true,
      "displayName": "French Polynesia",
      "description": "Description for \u201cFrench Polynesia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KVP"
        }
      }
    },
    "K-KVP": {
      "firstVisit": true,
      "displayName": "\u201cFrench Polynesia Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cFrench Polynesia Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KVP": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KVP-KVP1-100": {
          "displayName": "South",
          "destination": "K-KVP-KVP1-100"
        }
      }
    },
    "K-KEO-KEO1-1199.5": {
      "firstVisit": true,
      "displayName": "Law of Ontario",
      "description": "Description for \u201cLaw of Ontario Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KEO"
        }
      }
    },
    "K-KEO": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Ontario Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Ontario Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KEO": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KEO-KEO1-1199.5": {
          "displayName": "South",
          "destination": "K-KEO-KEO1-1199.5"
        }
      }
    },
    "K-KEA-KEA": {
      "firstVisit": true,
      "displayName": "Law of Alberta",
      "description": "Description for \u201cLaw of Alberta Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KEA"
        }
      }
    },
    "K-KEA": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Alberta Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Alberta Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KEA": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KEA-KEA": {
          "displayName": "South",
          "destination": "K-KEA-KEA"
        }
      }
    },
    "K-KEB-KEB": {
      "firstVisit": true,
      "displayName": "Law of British Columbia",
      "description": "Description for \u201cLaw of British Columbia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KEB"
        }
      }
    },
    "K-KEB": {
      "firstVisit": true,
      "displayName": "\u201cLaw of British Columbia Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of British Columbia Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KEB": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KEB-KEB": {
          "displayName": "South",
          "destination": "K-KEB-KEB"
        }
      }
    },
    "K-KEQ-KEQ1-1199.5": {
      "firstVisit": true,
      "displayName": "Law of Qu\u00e9bec",
      "description": "Description for \u201cLaw of Qu\u00e9bec Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KEQ"
        }
      }
    },
    "K-KEQ": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Qu\u00e9bec Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Qu\u00e9bec Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KEQ": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KEQ-KEQ1-1199.5": {
          "displayName": "South",
          "destination": "K-KEQ-KEQ1-1199.5"
        }
      }
    },
    "K-KWH-KWH1-490": {
      "firstVisit": true,
      "displayName": "Papua New Guinea",
      "description": "Description for \u201cPapua New Guinea Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KWH"
        }
      }
    },
    "K-KWH": {
      "firstVisit": true,
      "displayName": "\u201cPapua New Guinea Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cPapua New Guinea Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KWH": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KWH-KWH1-490": {
          "displayName": "South",
          "destination": "K-KWH-KWH1-490"
        }
      }
    },
    "K-KVS-KVS501-990": {
      "firstVisit": true,
      "displayName": "Micronesia (Federated States)",
      "description": "Description for \u201cMicronesia (Federated States) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KVS"
        }
      }
    },
    "K-KVS-KVS1-490": {
      "firstVisit": true,
      "displayName": "Marshall Islands",
      "description": "Description for \u201cMarshall Islands Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KVS"
        }
      }
    },
    "K-KVS": {
      "firstVisit": true,
      "displayName": "\u201cMidway Islands Building\u201d Main Lobby",
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n\n[  South  ] \u201cMicronesia (Federated States) Room\u201d\n[  North  ] \u201cMarshall Islands Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KVS": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KVS-KVS501-990": {
          "displayName": "South",
          "destination": "K-KVS-KVS501-990"
        },
        "K-KVS-KVS1-490": {
          "displayName": "North",
          "destination": "K-KVS-KVS1-490"
        }
      }
    },
    "K-KWG-KWG1-490": {
      "firstVisit": true,
      "displayName": "Palau",
      "description": "Description for \u201cPalau Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KWG"
        }
      }
    },
    "K-KWG": {
      "firstVisit": true,
      "displayName": "\u201cPalau Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cPalau Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KWG": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KWG-KWG1-490": {
          "displayName": "South",
          "destination": "K-KWG-KWG1-490"
        }
      }
    },
    "K-KVQ-KVQ1-490": {
      "firstVisit": true,
      "displayName": "Guam",
      "description": "Description for \u201cGuam Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KVQ"
        }
      }
    },
    "K-KVQ": {
      "firstVisit": true,
      "displayName": "\u201cGuam Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cGuam Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KVQ": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KVQ-KVQ1-490": {
          "displayName": "South",
          "destination": "K-KVQ-KVQ1-490"
        }
      }
    },
    "K-KJN-KJN": {
      "firstVisit": true,
      "displayName": "Law of Cyprus",
      "description": "Description for \u201cLaw of Cyprus Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KJN"
        }
      }
    },
    "K-KJN": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Cyprus Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Cyprus Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KJN": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KJN-KJN": {
          "displayName": "South",
          "destination": "K-KJN-KJN"
        }
      }
    },
    "K-KKF-KKF": {
      "firstVisit": true,
      "displayName": "Law of Hungary",
      "description": "Description for \u201cLaw of Hungary Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KKF"
        }
      }
    },
    "K-KKF": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Hungary Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Hungary Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KKF": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KKF-KKF": {
          "displayName": "South",
          "destination": "K-KKF-KKF"
        }
      }
    },
    "K-KHM-KHM1-9000": {
      "firstVisit": true,
      "displayName": "French Guiana",
      "description": "Description for \u201cFrench Guiana Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KHM"
        }
      }
    },
    "K-KHM": {
      "firstVisit": true,
      "displayName": "\u201cFrench Guiana Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cFrench Guiana Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KHM": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KHM-KHM1-9000": {
          "displayName": "South",
          "destination": "K-KHM-KHM1-9000"
        }
      }
    },
    "K-KKN-KKN": {
      "firstVisit": true,
      "displayName": "Law of Norway",
      "description": "Description for \u201cLaw of Norway Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KKN"
        }
      }
    },
    "K-KKN": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Norway Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Norway Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KKN": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KKN-KKN": {
          "displayName": "South",
          "destination": "K-KKN-KKN"
        }
      }
    },
    "K-KRB-KRB1-490": {
      "firstVisit": true,
      "displayName": "Central African Republic",
      "description": "Description for \u201cCentral African Republic Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KRB"
        }
      }
    },
    "K-KRB": {
      "firstVisit": true,
      "displayName": "\u201cCentral African Republic Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cCentral African Republic Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KRB": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KRB-KRB1-490": {
          "displayName": "South",
          "destination": "K-KRB-KRB1-490"
        }
      }
    },
    "K-KTU-KTU1-490": {
      "firstVisit": true,
      "displayName": "Togo",
      "description": "Description for \u201cTogo Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KTU"
        }
      }
    },
    "K-KTU": {
      "firstVisit": true,
      "displayName": "\u201cTogo Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cTogo Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KTU": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KTU-KTU1-490": {
          "displayName": "South",
          "destination": "K-KTU-KTU1-490"
        }
      }
    },
    "K-KQT-KQT1-490": {
      "firstVisit": true,
      "displayName": "Burkina Faso",
      "description": "Description for \u201cBurkina Faso Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KQT"
        }
      }
    },
    "K-KQT": {
      "firstVisit": true,
      "displayName": "\u201cBurkina Faso Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cBurkina Faso Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KQT": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KQT-KQT1-490": {
          "displayName": "South",
          "destination": "K-KQT-KQT1-490"
        }
      }
    },
    "K-KSH-KSH0-4990": {
      "firstVisit": true,
      "displayName": "C\u00f4te d\u2019Ivoire",
      "description": "Description for \u201cC\u00f4te d\u2019Ivoire Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KSH"
        }
      }
    },
    "K-KSH": {
      "firstVisit": true,
      "displayName": "\u201cC\u00f4te d\u2019Ivoire Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cC\u00f4te d\u2019Ivoire Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KSH": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KSH-KSH0-4990": {
          "displayName": "South",
          "destination": "K-KSH-KSH0-4990"
        }
      }
    },
    "K-KML-KML1-490": {
      "firstVisit": true,
      "displayName": "Jerusalem",
      "description": "Description for \u201cJerusalem Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KML"
        }
      }
    },
    "K-KML": {
      "firstVisit": true,
      "displayName": "\u201cJerusalem Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cJerusalem Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KML": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KML-KML1-490": {
          "displayName": "South",
          "destination": "K-KML-KML1-490"
        }
      }
    },
    "K-KMJ-KMJ1-4990": {
      "firstVisit": true,
      "displayName": "Iraq",
      "description": "Description for \u201cIraq Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KMJ"
        }
      }
    },
    "K-KMJ": {
      "firstVisit": true,
      "displayName": "\u201cIraq Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cIraq Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KMJ": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KMJ-KMJ1-4990": {
          "displayName": "South",
          "destination": "K-KMJ-KMJ1-4990"
        }
      }
    },
    "K-KSP-KSP1-4990": {
      "firstVisit": true,
      "displayName": "Libya",
      "description": "Description for \u201cLibya Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KSP"
        }
      }
    },
    "K-KSP": {
      "firstVisit": true,
      "displayName": "\u201cLibya Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLibya Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KSP": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KSP-KSP1-4990": {
          "displayName": "South",
          "destination": "K-KSP-KSP1-4990"
        }
      }
    },
    "K-KGH-KGH1-8000": {
      "firstVisit": true,
      "displayName": "Panama",
      "description": "Description for \u201cPanama Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KGH"
        }
      }
    },
    "K-KGH-KGH9001-9499": {
      "firstVisit": true,
      "displayName": "Panama Canal Zone",
      "description": "Description for \u201cPanama Canal Zone Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KGH"
        }
      }
    },
    "K-KGH": {
      "firstVisit": true,
      "displayName": "\u201cPanama Building\u201d Main Lobby",
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n\n[  South  ] \u201cPanama Room\u201d\n[  North  ] \u201cPanama Canal Zone Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KGH": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KGH-KGH1-8000": {
          "displayName": "South",
          "destination": "K-KGH-KGH1-8000"
        },
        "K-KGH-KGH9001-9499": {
          "displayName": "North",
          "destination": "K-KGH-KGH9001-9499"
        }
      }
    },
    "K-KGQ-KGQ1-9800": {
      "firstVisit": true,
      "displayName": "Dominican Republic",
      "description": "Description for \u201cDominican Republic Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KGQ"
        }
      }
    },
    "K-KGQ": {
      "firstVisit": true,
      "displayName": "\u201cDominican Republic Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cDominican Republic Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KGQ": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KGQ-KGQ1-9800": {
          "displayName": "South",
          "destination": "K-KGQ-KGQ1-9800"
        }
      }
    },
    "K-KGN-KGN1-9800": {
      "firstVisit": true,
      "displayName": "Cuba",
      "description": "Description for \u201cCuba Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KGN"
        }
      }
    },
    "K-KGN": {
      "firstVisit": true,
      "displayName": "\u201cCuba Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cCuba Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KGN": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KGN-KGN1-9800": {
          "displayName": "South",
          "destination": "K-KGN-KGN1-9800"
        }
      }
    },
    "K-KGC-KGC1-9800": {
      "firstVisit": true,
      "displayName": "El Salvador",
      "description": "Description for \u201cEl Salvador Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KGC"
        }
      }
    },
    "K-KGC": {
      "firstVisit": true,
      "displayName": "\u201cEl Salvador Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cEl Salvador Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KGC": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KGC-KGC1-9800": {
          "displayName": "South",
          "destination": "K-KGC-KGC1-9800"
        }
      }
    },
    "K-KSN-KSN1-490": {
      "firstVisit": true,
      "displayName": "Liberia",
      "description": "Description for \u201cLiberia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KSN"
        }
      }
    },
    "K-KSN": {
      "firstVisit": true,
      "displayName": "\u201cLiberia Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLiberia Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KSN": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KSN-KSN1-490": {
          "displayName": "South",
          "destination": "K-KSN-KSN1-490"
        }
      }
    },
    "K-KSZ-KSZ1-490": {
      "firstVisit": true,
      "displayName": "Niger",
      "description": "Description for \u201cNiger Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KSZ"
        }
      }
    },
    "K-KSZ": {
      "firstVisit": true,
      "displayName": "\u201cNiger Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cNiger Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KSZ": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KSZ-KSZ1-490": {
          "displayName": "South",
          "destination": "K-KSZ-KSZ1-490"
        }
      }
    },
    "K-KPC-KPC1-4990": {
      "firstVisit": true,
      "displayName": "Democratic People\u2019s Republic of Korea.  North Korea",
      "description": "Description for \u201cDemocratic People\u2019s Republic of Korea.  North Korea Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KPC"
        }
      }
    },
    "K-KPC": {
      "firstVisit": true,
      "displayName": "\u201cDemocratic People\u2019s Republic of Korea.  North Korea Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cDemocratic People\u2019s Republic of Korea.  North Korea Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KPC": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KPC-KPC1-4990": {
          "displayName": "South",
          "destination": "K-KPC-KPC1-4990"
        }
      }
    },
    "K-KQ-KQ2010-9000": {
      "firstVisit": true,
      "displayName": "Law of indigenous peoples",
      "description": "Description for \u201cLaw of indigenous peoples Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KQ"
        }
      }
    },
    "K-KQ-KQ2-197": {
      "firstVisit": true,
      "displayName": "History of law",
      "description": "Description for \u201cHistory of law Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KQ"
        }
      }
    },
    "K-KQ": {
      "firstVisit": true,
      "displayName": "\u201cLaw of indigenous peoples Building\u201d Main Lobby",
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n\n[  South  ] \u201cLaw of indigenous peoples Room\u201d\n[  North  ] \u201cHistory of law Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KQ": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KQ-KQ2010-9000": {
          "displayName": "South",
          "destination": "K-KQ-KQ2010-9000"
        },
        "K-KQ-KQ2-197": {
          "displayName": "North",
          "destination": "K-KQ-KQ2-197"
        }
      }
    },
    "K-KWC-KWC1-490": {
      "firstVisit": true,
      "displayName": "Northern Mariana Islands",
      "description": "Description for \u201cNorthern Mariana Islands Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KWC"
        }
      }
    },
    "K-KWC": {
      "firstVisit": true,
      "displayName": "\u201cNorthern Mariana Islands Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cNorthern Mariana Islands Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KWC": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KWC-KWC1-490": {
          "displayName": "South",
          "destination": "K-KWC-KWC1-490"
        }
      }
    },
    "K-KNM-KNM1-4990": {
      "firstVisit": true,
      "displayName": "Cambodia",
      "description": "Description for \u201cCambodia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KNM"
        }
      }
    },
    "K-KNM": {
      "firstVisit": true,
      "displayName": "\u201cCambodia Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cCambodia Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KNM": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KNM-KNM1-4990": {
          "displayName": "South",
          "destination": "K-KNM-KNM1-4990"
        }
      }
    },
    "K-KBT-KBT3-4300": {
      "firstVisit": true,
      "displayName": "Canon law of Eastern Rite Churches in Communion with the",
      "description": "Description for \u201cCanon law of Eastern Rite Churches in Communion with the Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KBT"
        }
      }
    },
    "K-KBT": {
      "firstVisit": true,
      "displayName": "\u201cCanon law of Eastern Rite Churches in Communion with the Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cCanon law of Eastern Rite Churches in Communion with the Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KBT": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KBT-KBT3-4300": {
          "displayName": "South",
          "destination": "K-KBT-KBT3-4300"
        }
      }
    },
    "K-KJG-KJG": {
      "firstVisit": true,
      "displayName": "Law of Albania",
      "description": "Description for \u201cLaw of Albania Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KJG"
        }
      }
    },
    "K-KJG": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Albania Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Albania Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KJG": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KJG-KJG": {
          "displayName": "South",
          "destination": "K-KJG-KJG"
        }
      }
    },
    "K-KGX-KGX1-499": {
      "firstVisit": true,
      "displayName": "Trinidad and Tobago",
      "description": "Description for \u201cTrinidad and Tobago Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KGX"
        }
      }
    },
    "K-KGX": {
      "firstVisit": true,
      "displayName": "\u201cTrinidad and Tobago Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cTrinidad and Tobago Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KGX": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KGX-KGX1-499": {
          "displayName": "South",
          "destination": "K-KGX-KGX1-499"
        }
      }
    },
    "K-KKR-KKR": {
      "firstVisit": true,
      "displayName": "Law of Romania",
      "description": "Description for \u201cLaw of Romania Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KKR"
        }
      }
    },
    "K-KKR": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Romania Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Romania Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KKR": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KKR-KKR": {
          "displayName": "South",
          "destination": "K-KKR-KKR"
        }
      }
    },
    "K-KJQ-KJQ": {
      "firstVisit": true,
      "displayName": "Law of Slovakia (1993-        )",
      "description": "Description for \u201cLaw of Slovakia (1993-        ) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KJQ"
        }
      }
    },
    "K-KJQ": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Slovakia (1993-        ) Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Slovakia (1993-        ) Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KJQ": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KJQ-KJQ": {
          "displayName": "South",
          "destination": "K-KJQ-KJQ"
        }
      }
    },
    "K-KLM-KLM1-490": {
      "firstVisit": true,
      "displayName": "Moldova",
      "description": "Description for \u201cMoldova Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KLM"
        }
      }
    },
    "K-KLM": {
      "firstVisit": true,
      "displayName": "\u201cMoldova Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cMoldova Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KLM": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KLM-KLM1-490": {
          "displayName": "South",
          "destination": "K-KLM-KLM1-490"
        }
      }
    },
    "K-KDE-KDE21-580": {
      "firstVisit": true,
      "displayName": "Law of Northern Ireland",
      "description": "Description for \u201cLaw of Northern Ireland Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KDE"
        }
      }
    },
    "K-KDE": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Northern Ireland Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Northern Ireland Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KDE": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KDE-KDE21-580": {
          "displayName": "South",
          "destination": "K-KDE-KDE21-580"
        }
      }
    },
    "K-KES-KES": {
      "firstVisit": true,
      "displayName": "Law of Saskatchewan",
      "description": "Description for \u201cLaw of Saskatchewan Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KES"
        }
      }
    },
    "K-KES": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Saskatchewan Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Saskatchewan Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KES": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KES-KES": {
          "displayName": "South",
          "destination": "K-KES-KES"
        }
      }
    },
    "K-KNK-KNK1-490": {
      "firstVisit": true,
      "displayName": "Brunei",
      "description": "Description for \u201cBrunei Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KNK"
        }
      }
    },
    "K-KNK": {
      "firstVisit": true,
      "displayName": "\u201cBrunei Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cBrunei Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KNK": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KNK-KNK1-490": {
          "displayName": "South",
          "destination": "K-KNK-KNK1-490"
        }
      }
    },
    "K-KPE-KPE1-4990": {
      "firstVisit": true,
      "displayName": "Laos",
      "description": "Description for \u201cLaos Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KPE"
        }
      }
    },
    "K-KPE": {
      "firstVisit": true,
      "displayName": "\u201cLaos Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaos Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KPE": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KPE-KPE1-4990": {
          "displayName": "South",
          "destination": "K-KPE-KPE1-4990"
        }
      }
    },
    "K-KPS-KPS1-4990": {
      "firstVisit": true,
      "displayName": "Sri Lanka",
      "description": "Description for \u201cSri Lanka Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KPS"
        }
      }
    },
    "K-KPS": {
      "firstVisit": true,
      "displayName": "\u201cSri Lanka Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cSri Lanka Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KPS": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KPS-KPS1-4990": {
          "displayName": "South",
          "destination": "K-KPS-KPS1-4990"
        }
      }
    },
    "K-KPJ-KPJ1-490": {
      "firstVisit": true,
      "displayName": "Nepal",
      "description": "Description for \u201cNepal Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KPJ"
        }
      }
    },
    "K-KPJ": {
      "firstVisit": true,
      "displayName": "\u201cNepal Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cNepal Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KPJ": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KPJ-KPJ1-490": {
          "displayName": "South",
          "destination": "K-KPJ-KPJ1-490"
        }
      }
    },
    "K-KNL-KNL1-4990": {
      "firstVisit": true,
      "displayName": "Burma",
      "description": "Description for \u201cBurma Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KNL"
        }
      }
    },
    "K-KNL": {
      "firstVisit": true,
      "displayName": "\u201cBurma Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cBurma Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KNL": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KNL-KNL1-4990": {
          "displayName": "South",
          "destination": "K-KNL-KNL1-4990"
        }
      }
    },
    "K-KNG-KNG1-4990": {
      "firstVisit": true,
      "displayName": "Bangladesh",
      "description": "Description for \u201cBangladesh Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KNG"
        }
      }
    },
    "K-KNG": {
      "firstVisit": true,
      "displayName": "\u201cBangladesh Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cBangladesh Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KNG": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KNG-KNG1-4990": {
          "displayName": "South",
          "destination": "K-KNG-KNG1-4990"
        }
      }
    },
    "K-KSE-KSE1-490": {
      "firstVisit": true,
      "displayName": "Equatorial Guinea",
      "description": "Description for \u201cEquatorial Guinea Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KSE"
        }
      }
    },
    "K-KSE": {
      "firstVisit": true,
      "displayName": "\u201cEquatorial Guinea Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cEquatorial Guinea Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KSE": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KSE-KSE1-490": {
          "displayName": "South",
          "destination": "K-KSE-KSE1-490"
        }
      }
    },
    "K-KLT-KLT1-490": {
      "firstVisit": true,
      "displayName": "Tajikistan",
      "description": "Description for \u201cTajikistan Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KLT"
        }
      }
    },
    "K-KLT": {
      "firstVisit": true,
      "displayName": "\u201cTajikistan Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cTajikistan Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KLT": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KLT-KLT1-490": {
          "displayName": "South",
          "destination": "K-KLT-KLT1-490"
        }
      }
    },
    "K-KLV-KLV1-490": {
      "firstVisit": true,
      "displayName": "Turkmenistan",
      "description": "Description for \u201cTurkmenistan Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KLV"
        }
      }
    },
    "K-KLV": {
      "firstVisit": true,
      "displayName": "\u201cTurkmenistan Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cTurkmenistan Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KLV": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KLV-KLV1-490": {
          "displayName": "South",
          "destination": "K-KLV-KLV1-490"
        }
      }
    },
    "K-KRE-KRE1-490": {
      "firstVisit": true,
      "displayName": "Comoros",
      "description": "Description for \u201cComoros Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KRE"
        }
      }
    },
    "K-KRE": {
      "firstVisit": true,
      "displayName": "\u201cComoros Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cComoros Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KRE": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KRE-KRE1-490": {
          "displayName": "South",
          "destination": "K-KRE-KRE1-490"
        }
      }
    },
    "K-KTH-KTH1-490": {
      "firstVisit": true,
      "displayName": "Seychelles",
      "description": "Description for \u201cSeychelles Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KTH"
        }
      }
    },
    "K-KTH": {
      "firstVisit": true,
      "displayName": "\u201cSeychelles Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cSeychelles Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KTH": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KTH-KTH1-490": {
          "displayName": "South",
          "destination": "K-KTH-KTH1-490"
        }
      }
    },
    "K-KSR-KSR1-490": {
      "firstVisit": true,
      "displayName": "Madagascar",
      "description": "Description for \u201cMadagascar Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KSR"
        }
      }
    },
    "K-KSR": {
      "firstVisit": true,
      "displayName": "\u201cMadagascar Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cMadagascar Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KSR": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KSR-KSR1-490": {
          "displayName": "South",
          "destination": "K-KSR-KSR1-490"
        }
      }
    },
    "K-KQE-KQE10-1249": {
      "firstVisit": true,
      "displayName": "Regional organization and integration",
      "description": "Description for \u201cRegional organization and integration Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KQE"
        }
      }
    },
    "K-KQE": {
      "firstVisit": true,
      "displayName": "\u201cRegional organization and integration Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cRegional organization and integration Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KQE": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KQE-KQE10-1249": {
          "displayName": "South",
          "destination": "K-KQE-KQE10-1249"
        }
      }
    },
    "K-KRN-KRN1-499": {
      "firstVisit": true,
      "displayName": "Eritrea",
      "description": "Description for \u201cEritrea Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KRN"
        }
      }
    },
    "K-KRN": {
      "firstVisit": true,
      "displayName": "\u201cEritrea Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cEritrea Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KRN": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KRN-KRN1-499": {
          "displayName": "South",
          "destination": "K-KRN-KRN1-499"
        }
      }
    },
    "K-KKG-KKG": {
      "firstVisit": true,
      "displayName": "Law of Iceland",
      "description": "Description for \u201cLaw of Iceland Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KKG"
        }
      }
    },
    "K-KKG": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Iceland Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Iceland Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KKG": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KKG-KKG": {
          "displayName": "South",
          "destination": "K-KKG-KKG"
        }
      }
    },
    "K-KLH-KLH1-490": {
      "firstVisit": true,
      "displayName": "Georgia (Republic)",
      "description": "Description for \u201cGeorgia (Republic) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KLH"
        }
      }
    },
    "K-KLH": {
      "firstVisit": true,
      "displayName": "\u201cGeorgia (Republic) Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cGeorgia (Republic) Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KLH": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KLH-KLH1-490": {
          "displayName": "South",
          "destination": "K-KLH-KLH1-490"
        }
      }
    },
    "K-KGA-KGA1-9000": {
      "firstVisit": true,
      "displayName": "Belize",
      "description": "Description for \u201cBelize Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KGA"
        }
      }
    },
    "K-KGA": {
      "firstVisit": true,
      "displayName": "\u201cBelize Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cBelize Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KGA": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KGA-KGA1-9000": {
          "displayName": "South",
          "destination": "K-KGA-KGA1-9000"
        }
      }
    },
    "K-KKI-KKI": {
      "firstVisit": true,
      "displayName": "Law of Latvia",
      "description": "Description for \u201cLaw of Latvia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KKI"
        }
      }
    },
    "K-KKI": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Latvia Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Latvia Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KKI": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KKI-KKI": {
          "displayName": "South",
          "destination": "K-KKI-KKI"
        }
      }
    },
    "K-KTF-KTF1-490": {
      "firstVisit": true,
      "displayName": "Sao Tome and Principe",
      "description": "Description for \u201cSao Tome and Principe Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KTF"
        }
      }
    },
    "K-KTF": {
      "firstVisit": true,
      "displayName": "\u201cSao Tome and Principe Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cSao Tome and Principe Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KTF": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KTF-KTF1-490": {
          "displayName": "South",
          "destination": "K-KTF-KTF1-490"
        }
      }
    },
    "K-KJH-KJH": {
      "firstVisit": true,
      "displayName": "Law of Andorra",
      "description": "Description for \u201cLaw of Andorra Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KJH"
        }
      }
    },
    "K-KJH": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Andorra Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Andorra Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KJH": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KJH-KJH": {
          "displayName": "South",
          "destination": "K-KJH-KJH"
        }
      }
    },
    "K-KWL-KWL2001-2490": {
      "firstVisit": true,
      "displayName": "Solomon Islands",
      "description": "Description for \u201cSolomon Islands Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KWL"
        }
      }
    },
    "K-KWL-KWL1-489": {
      "firstVisit": true,
      "displayName": "Pitcairn Island",
      "description": "Description for \u201cPitcairn Island Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KWL"
        }
      }
    },
    "K-KWL": {
      "firstVisit": true,
      "displayName": "\u201cSolomon Islands Building\u201d Main Lobby",
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n\n[  South  ] \u201cSolomon Islands Room\u201d\n[  North  ] \u201cPitcairn Island Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KWL": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KWL-KWL2001-2490": {
          "displayName": "South",
          "destination": "K-KWL-KWL2001-2490"
        },
        "K-KWL-KWL1-489": {
          "displayName": "North",
          "destination": "K-KWL-KWL1-489"
        }
      }
    },
    "K-KGW-KGW5001-5499": {
      "firstVisit": true,
      "displayName": "Saint Vincent and the Grenadines",
      "description": "Description for \u201cSaint Vincent and the Grenadines Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KGW"
        }
      }
    },
    "K-KGW-KGW3001-3499": {
      "firstVisit": true,
      "displayName": "Saint Lucia",
      "description": "Description for \u201cSaint Lucia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KGW"
        }
      }
    },
    "K-KGW-KGW2001-2499": {
      "firstVisit": true,
      "displayName": "Saint Christopher (Saint Kitts), Nevis, and Anguilla",
      "description": "Description for \u201cSaint Christopher (Saint Kitts), Nevis, and Anguilla Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KGW"
        }
      }
    },
    "K-KGW-KGW8001-8499": {
      "firstVisit": true,
      "displayName": "Sint Maarten",
      "description": "Description for \u201cSint Maarten Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KGW"
        }
      }
    },
    "K-KGW": {
      "firstVisit": true,
      "displayName": "\u201cSaint Lucia Building\u201d Main Lobby",
      "description": "There are 4 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n\n[  South  ] \u201cSaint Vincent and the Grenadines Room\u201d\n[  North  ] \u201cSaint Lucia Room\u201d\n[  East   ] \u201cSaint Christopher (Saint Kitts), Nevis, and Anguilla Room\u201d\n[  West   ] \u201cSint Maarten Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KGW": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KGW-KGW5001-5499": {
          "displayName": "South",
          "destination": "K-KGW-KGW5001-5499"
        },
        "K-KGW-KGW3001-3499": {
          "displayName": "North",
          "destination": "K-KGW-KGW3001-3499"
        },
        "K-KGW-KGW2001-2499": {
          "displayName": "East",
          "destination": "K-KGW-KGW2001-2499"
        },
        "K-KGW-KGW8001-8499": {
          "displayName": "West",
          "destination": "K-KGW-KGW8001-8499"
        }
      }
    },
    "K-KGZ-KGZ1-499": {
      "firstVisit": true,
      "displayName": "Virgin Islands of the United States",
      "description": "Description for \u201cVirgin Islands of the United States Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KGZ"
        }
      }
    },
    "K-KGZ": {
      "firstVisit": true,
      "displayName": "\u201cVirgin Islands of the United States Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cVirgin Islands of the United States Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KGZ": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KGZ-KGZ1-499": {
          "displayName": "South",
          "destination": "K-KGZ-KGZ1-499"
        }
      }
    },
    "K-KGR-KGR1001-1499": {
      "firstVisit": true,
      "displayName": "Dutch West Indies (General)",
      "description": "Description for \u201cDutch West Indies (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KGR"
        }
      }
    },
    "K-KGR-KGR4001-4499": {
      "firstVisit": true,
      "displayName": "Grenada",
      "description": "Description for \u201cGrenada Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KGR"
        }
      }
    },
    "K-KGR-KGR1-499": {
      "firstVisit": true,
      "displayName": "Dutch Leeward Islands (General)",
      "description": "Description for \u201cDutch Leeward Islands (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KGR"
        }
      }
    },
    "K-KGR-KGR3001-3499": {
      "firstVisit": true,
      "displayName": "French West Indies (General)",
      "description": "Description for \u201cFrench West Indies (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KGR"
        }
      }
    },
    "K-KGR-KGR5001-5499": {
      "firstVisit": true,
      "displayName": "Guadeloupe",
      "description": "Description for \u201cGuadeloupe Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KGR"
        }
      }
    },
    "K-KGR": {
      "firstVisit": true,
      "displayName": "\u201cGrenada Building\u201d Main Lobby",
      "description": "There are 5 rooms throughout this building. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[  South  ] \u201cDutch West Indies (General) Room\u201d\n[  North  ] \u201cGrenada Room\u201d\n[  East   ] \u201cDutch Leeward Islands (General) Room\u201d\n[  West   ] \u201cFrench West Indies (General) Room\u201d\n[SouthEast] \u201cGuadeloupe Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KGR": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KGR-KGR1001-1499": {
          "displayName": "South",
          "destination": "K-KGR-KGR1001-1499"
        },
        "K-KGR-KGR4001-4499": {
          "displayName": "North",
          "destination": "K-KGR-KGR4001-4499"
        },
        "K-KGR-KGR1-499": {
          "displayName": "East",
          "destination": "K-KGR-KGR1-499"
        },
        "K-KGR-KGR3001-3499": {
          "displayName": "West",
          "destination": "K-KGR-KGR3001-3499"
        },
        "K-KGR-KGR5001-5499": {
          "displayName": "SouthEast",
          "destination": "K-KGR-KGR5001-5499"
        }
      }
    },
    "K-KRV-KRV1-489": {
      "firstVisit": true,
      "displayName": "Gambia",
      "description": "Description for \u201cGambia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KRV"
        }
      }
    },
    "K-KRV": {
      "firstVisit": true,
      "displayName": "\u201cGambia Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cGambia Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KRV": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KRV-KRV1-489": {
          "displayName": "South",
          "destination": "K-KRV-KRV1-489"
        }
      }
    },
    "K-KFZ-KFZ": {
      "firstVisit": true,
      "displayName": "Laws of the territories.  Laws of the Confederate States of",
      "description": "Description for \u201cLaws of the territories.  Laws of the Confederate States of Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KFZ"
        }
      }
    },
    "K-KFZ": {
      "firstVisit": true,
      "displayName": "\u201cLaws of the territories.  Laws of the Confederate States of Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaws of the territories.  Laws of the Confederate States of Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KFZ": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KFZ-KFZ": {
          "displayName": "South",
          "destination": "K-KFZ-KFZ"
        }
      }
    },
    "K-KDG-KDG21-540": {
      "firstVisit": true,
      "displayName": "Law of Isle of Man.  Channel Islands",
      "description": "Description for \u201cLaw of Isle of Man.  Channel Islands Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KDG"
        }
      }
    },
    "K-KDG": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Isle of Man.  Channel Islands Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Isle of Man.  Channel Islands Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KDG": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KDG-KDG21-540": {
          "displayName": "South",
          "destination": "K-KDG-KDG21-540"
        }
      }
    },
    "K-KGJ-KGJ1-999": {
      "firstVisit": true,
      "displayName": "General",
      "description": "Description for \u201cGeneral Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KGJ"
        }
      }
    },
    "K-KGJ-KGJ7001-7499": {
      "firstVisit": true,
      "displayName": "Anguilla",
      "description": "Description for \u201cAnguilla Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KGJ"
        }
      }
    },
    "K-KGJ": {
      "firstVisit": true,
      "displayName": "\u201cGeneral Building\u201d Main Lobby",
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n\n[  South  ] \u201cGeneral Room\u201d\n[  North  ] \u201cAnguilla Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KGJ": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KGJ-KGJ1-999": {
          "displayName": "South",
          "destination": "K-KGJ-KGJ1-999"
        },
        "K-KGJ-KGJ7001-7499": {
          "displayName": "North",
          "destination": "K-KGJ-KGJ7001-7499"
        }
      }
    },
    "K-KLN-KLN1-489": {
      "firstVisit": true,
      "displayName": "Russian S.F.S.R. (to 1991)",
      "description": "Description for \u201cRussian S.F.S.R. (to 1991) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KLN"
        }
      }
    },
    "K-KLN": {
      "firstVisit": true,
      "displayName": "\u201cRussian S.F.S.R. (to 1991) Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cRussian S.F.S.R. (to 1991) Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KLN": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KLN-KLN1-489": {
          "displayName": "South",
          "destination": "K-KLN-KLN1-489"
        }
      }
    },
    "K-KMQ-KMQ1001-1499": {
      "firstVisit": true,
      "displayName": "Palestine (to 1948)",
      "description": "Description for \u201cPalestine (to 1948) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KMQ"
        }
      }
    },
    "K-KMQ-KMQ1-490": {
      "firstVisit": true,
      "displayName": "Oman",
      "description": "Description for \u201cOman Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KMQ"
        }
      }
    },
    "K-KMQ": {
      "firstVisit": true,
      "displayName": "\u201cPalestine (to 1948) Building\u201d Main Lobby",
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n\n[  South  ] \u201cPalestine (to 1948) Room\u201d\n[  North  ] \u201cOman Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KMQ": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KMQ-KMQ1001-1499": {
          "displayName": "South",
          "destination": "K-KMQ-KMQ1001-1499"
        },
        "K-KMQ-KMQ1-490": {
          "displayName": "North",
          "destination": "K-KMQ-KMQ1-490"
        }
      }
    },
    "K-KEY-KEY": {
      "firstVisit": true,
      "displayName": "Law of Yukon",
      "description": "Description for \u201cLaw of Yukon Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KEY"
        }
      }
    },
    "K-KEY": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Yukon Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Yukon Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KEY": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KEY-KEY": {
          "displayName": "South",
          "destination": "K-KEY-KEY"
        }
      }
    },
    "K-KNV-KNV1-489": {
      "firstVisit": true,
      "displayName": "French Indochina.  Indochina (Federation)",
      "description": "Description for \u201cFrench Indochina.  Indochina (Federation) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KNV"
        }
      }
    },
    "K-KNV": {
      "firstVisit": true,
      "displayName": "\u201cFrench Indochina.  Indochina (Federation) Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cFrench Indochina.  Indochina (Federation) Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KNV": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KNV-KNV1-489": {
          "displayName": "South",
          "destination": "K-KNV-KNV1-489"
        }
      }
    },
    "K-KMY-KMY1-489": {
      "firstVisit": true,
      "displayName": "Yeman (People\u2019s Democratic Republic) (to 1990)",
      "description": "Description for \u201cYeman (People\u2019s Democratic Republic) (to 1990) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KMY"
        }
      }
    },
    "K-KMY": {
      "firstVisit": true,
      "displayName": "\u201cYeman (People\u2019s Democratic Republic) (to 1990) Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cYeman (People\u2019s Democratic Republic) (to 1990) Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KMY": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KMY-KMY1-489": {
          "displayName": "South",
          "destination": "K-KMY-KMY1-489"
        }
      }
    },
    "K-KHS-KHS1-9000": {
      "firstVisit": true,
      "displayName": "Surinam",
      "description": "Description for \u201cSurinam Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KHS"
        }
      }
    },
    "K-KHS": {
      "firstVisit": true,
      "displayName": "\u201cSurinam Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cSurinam Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KHS": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KHS-KHS1-9000": {
          "displayName": "South",
          "destination": "K-KHS-KHS1-9000"
        }
      }
    },
    "K-KMU-KMU1-490": {
      "firstVisit": true,
      "displayName": "Syria",
      "description": "Description for \u201cSyria Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KMU"
        }
      }
    },
    "K-KMU": {
      "firstVisit": true,
      "displayName": "\u201cSyria Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cSyria Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KMU": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KMU-KMU1-490": {
          "displayName": "South",
          "destination": "K-KMU-KMU1-490"
        }
      }
    },
    "K-KKL-KKL": {
      "firstVisit": true,
      "displayName": "Law of Montenegro",
      "description": "Description for \u201cLaw of Montenegro Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KKL"
        }
      }
    },
    "K-KKL": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Montenegro Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Montenegro Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KKL": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KKL-KKL": {
          "displayName": "South",
          "destination": "K-KKL-KKL"
        }
      }
    },
    "K-KSG-KSG1001-1499": {
      "firstVisit": true,
      "displayName": "Italian Somaliland",
      "description": "Description for \u201cItalian Somaliland Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KSG"
        }
      }
    },
    "K-KSG": {
      "firstVisit": true,
      "displayName": "\u201cItalian Somaliland Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cItalian Somaliland Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KSG": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KSG-KSG1001-1499": {
          "displayName": "South",
          "destination": "K-KSG-KSG1001-1499"
        }
      }
    },
    "K-KEZ-KEZ": {
      "firstVisit": true,
      "displayName": "Law of Law of cities, towns, etc.",
      "description": "Description for \u201cLaw of Law of cities, towns, etc. Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KEZ"
        }
      }
    },
    "K-KEZ": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Law of cities, towns, etc. Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Law of cities, towns, etc. Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KEZ": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KEZ-KEZ": {
          "displayName": "South",
          "destination": "K-KEZ-KEZ"
        }
      }
    },
    "K-KEM-KEM": {
      "firstVisit": true,
      "displayName": "Law of Manitoba",
      "description": "Description for \u201cLaw of Manitoba Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KEM"
        }
      }
    },
    "K-KEM": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Manitoba Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Manitoba Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KEM": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KEM-KEM": {
          "displayName": "South",
          "destination": "K-KEM-KEM"
        }
      }
    },
    "K-KTK-KTK1-490": {
      "firstVisit": true,
      "displayName": "Somalia",
      "description": "Description for \u201cSomalia Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KTK"
        }
      }
    },
    "K-KTK": {
      "firstVisit": true,
      "displayName": "\u201cSomalia Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cSomalia Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KTK": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KTK-KTK1-490": {
          "displayName": "South",
          "destination": "K-KTK-KTK1-490"
        }
      }
    },
    "K-KGT-KGT1-499": {
      "firstVisit": true,
      "displayName": "Jamaica",
      "description": "Description for \u201cJamaica Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KGT"
        }
      }
    },
    "K-KGT-KGT2001-2499": {
      "firstVisit": true,
      "displayName": "Montserrat",
      "description": "Description for \u201cMontserrat Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KGT"
        }
      }
    },
    "K-KGT-KGT1001-1499": {
      "firstVisit": true,
      "displayName": "Martinique",
      "description": "Description for \u201cMartinique Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KGT"
        }
      }
    },
    "K-KGT": {
      "firstVisit": true,
      "displayName": "\u201cJamaica Building\u201d Main Lobby",
      "description": "There are 3 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n\n[  South  ] \u201cJamaica Room\u201d\n[  North  ] \u201cMontserrat Room\u201d\n[  East   ] \u201cMartinique Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KGT": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KGT-KGT1-499": {
          "displayName": "South",
          "destination": "K-KGT-KGT1-499"
        },
        "K-KGT-KGT2001-2499": {
          "displayName": "North",
          "destination": "K-KGT-KGT2001-2499"
        },
        "K-KGT-KGT1001-1499": {
          "displayName": "East",
          "destination": "K-KGT-KGT1001-1499"
        }
      }
    },
    "K-KGY-KGY1-499": {
      "firstVisit": true,
      "displayName": "Turks and Caicos Islands",
      "description": "Description for \u201cTurks and Caicos Islands Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KGY"
        }
      }
    },
    "K-KGY": {
      "firstVisit": true,
      "displayName": "\u201cTurks and Caicos Islands Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cTurks and Caicos Islands Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KGY": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KGY-KGY1-499": {
          "displayName": "South",
          "destination": "K-KGY-KGY1-499"
        }
      }
    },
    "K-KEP-KEP": {
      "firstVisit": true,
      "displayName": "Law of Law of Prince Edward Island",
      "description": "Description for \u201cLaw of Law of Prince Edward Island Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KEP"
        }
      }
    },
    "K-KEP": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Law of Prince Edward Island Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Law of Prince Edward Island Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KEP": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KEP-KEP": {
          "displayName": "South",
          "destination": "K-KEP-KEP"
        }
      }
    },
    "K-KQV-KQV1-490": {
      "firstVisit": true,
      "displayName": "Burundi",
      "description": "Description for \u201cBurundi Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KQV"
        }
      }
    },
    "K-KQV": {
      "firstVisit": true,
      "displayName": "\u201cBurundi Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cBurundi Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KQV": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KQV-KQV1-490": {
          "displayName": "South",
          "destination": "K-KQV-KQV1-490"
        }
      }
    },
    "K-KWE-KWE1-499": {
      "firstVisit": true,
      "displayName": "Pacific Islands (Trust Territory)",
      "description": "Description for \u201cPacific Islands (Trust Territory) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KWE"
        }
      }
    },
    "K-KWE": {
      "firstVisit": true,
      "displayName": "\u201cPacific Islands (Trust Territory) Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cPacific Islands (Trust Territory) Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KWE": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KWE-KWE1-499": {
          "displayName": "South",
          "destination": "K-KWE-KWE1-499"
        }
      }
    },
    "K-KPW-KPW1-489": {
      "firstVisit": true,
      "displayName": "Vietnam (Republic).  South Vietnam",
      "description": "Description for \u201cVietnam (Republic).  South Vietnam Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KPW"
        }
      }
    },
    "K-KPW": {
      "firstVisit": true,
      "displayName": "\u201cVietnam (Republic).  South Vietnam Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cVietnam (Republic).  South Vietnam Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KPW": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KPW-KPW1-489": {
          "displayName": "South",
          "destination": "K-KPW-KPW1-489"
        }
      }
    },
    "K-KWX-KWX1-950": {
      "firstVisit": true,
      "displayName": "Antarctica",
      "description": "Description for \u201cAntarctica Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KWX"
        }
      }
    },
    "K-KWX": {
      "firstVisit": true,
      "displayName": "\u201cAntarctica Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cAntarctica Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KWX": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KWX-KWX1-950": {
          "displayName": "South",
          "destination": "K-KWX-KWX1-950"
        }
      }
    },
    "K-KVH-KVH1-490": {
      "firstVisit": true,
      "displayName": "American Samoa",
      "description": "Description for \u201cAmerican Samoa Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KVH"
        }
      }
    },
    "K-KVH": {
      "firstVisit": true,
      "displayName": "\u201cBritish New Guinea (Territory of Papua) Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cAmerican Samoa Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KVH": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KVH-KVH1-490": {
          "displayName": "South",
          "destination": "K-KVH-KVH1-490"
        }
      }
    },
    "K-KWR-KWR1-490": {
      "firstVisit": true,
      "displayName": "Vanuatu",
      "description": "Description for \u201cVanuatu Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KWR"
        }
      }
    },
    "K-KWR": {
      "firstVisit": true,
      "displayName": "\u201cVanuatu Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cVanuatu Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KWR": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KWR-KWR1-490": {
          "displayName": "South",
          "destination": "K-KWR-KWR1-490"
        }
      }
    },
    "K-KWA-KWA1-489": {
      "firstVisit": true,
      "displayName": "Niue",
      "description": "Description for \u201cNiue Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KWA"
        }
      }
    },
    "K-KWA": {
      "firstVisit": true,
      "displayName": "\u201cNiue Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cNiue Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KWA": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KWA-KWA1-489": {
          "displayName": "South",
          "destination": "K-KWA-KWA1-489"
        }
      }
    },
    "K-KNF-KNF1-4990": {
      "firstVisit": true,
      "displayName": "Afghanistan",
      "description": "Description for \u201cAfghanistan Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KNF"
        }
      }
    },
    "K-KNF": {
      "firstVisit": true,
      "displayName": "\u201cAfghanistan Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cAfghanistan Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KNF": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KNF-KNF1-4990": {
          "displayName": "South",
          "destination": "K-KNF-KNF1-4990"
        }
      }
    },
    "K-KRY-KRY1-499": {
      "firstVisit": true,
      "displayName": "Gibraltar",
      "description": "Description for \u201cGibraltar Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KRY"
        }
      }
    },
    "K-KRY": {
      "firstVisit": true,
      "displayName": "\u201cGibraltar Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cGibraltar Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KRY": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KRY-KRY1-499": {
          "displayName": "South",
          "destination": "K-KRY-KRY1-499"
        }
      }
    },
    "K-KRC-KRC1-490": {
      "firstVisit": true,
      "displayName": "Chad",
      "description": "Description for \u201cChad Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KRC"
        }
      }
    },
    "K-KRC": {
      "firstVisit": true,
      "displayName": "\u201cChad Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cChad Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KRC": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KRC-KRC1-490": {
          "displayName": "South",
          "destination": "K-KRC-KRC1-490"
        }
      }
    },
    "K-KTJ-KTJ1-490": {
      "firstVisit": true,
      "displayName": "Sierra Leone",
      "description": "Description for \u201cSierra Leone Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KTJ"
        }
      }
    },
    "K-KTJ": {
      "firstVisit": true,
      "displayName": "\u201cSierra Leone Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cSierra Leone Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KTJ": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KTJ-KTJ1-490": {
          "displayName": "South",
          "destination": "K-KTJ-KTJ1-490"
        }
      }
    },
    "K-KTR-KTR1-490": {
      "firstVisit": true,
      "displayName": "Swaziland",
      "description": "Description for \u201cSwaziland Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KTR"
        }
      }
    },
    "K-KTR": {
      "firstVisit": true,
      "displayName": "\u201cSwaziland Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cSwaziland Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KTR": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KTR-KTR1-490": {
          "displayName": "South",
          "destination": "K-KTR-KTR1-490"
        }
      }
    },
    "K-KTC-KTC1-489": {
      "firstVisit": true,
      "displayName": "R\u00e9union",
      "description": "Description for \u201cR\u00e9union Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KTC"
        }
      }
    },
    "K-KTC": {
      "firstVisit": true,
      "displayName": "\u201cR\u00e9union Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cR\u00e9union Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KTC": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KTC-KTC1-489": {
          "displayName": "South",
          "destination": "K-KTC-KTC1-489"
        }
      }
    },
    "K-KRK-KRK1-490": {
      "firstVisit": true,
      "displayName": "Djibouti",
      "description": "Description for \u201cDjibouti Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KRK"
        }
      }
    },
    "K-KRK": {
      "firstVisit": true,
      "displayName": "\u201cDjibouti Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cDjibouti Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KRK": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KRK-KRK1-490": {
          "displayName": "South",
          "destination": "K-KRK-KRK1-490"
        }
      }
    },
    "K-KGM-KGM0-499": {
      "firstVisit": true,
      "displayName": "Cayman Islands",
      "description": "Description for \u201cCayman Islands Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KGM"
        }
      }
    },
    "K-KGM": {
      "firstVisit": true,
      "displayName": "\u201cCayman Islands Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cCayman Islands Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KGM": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KGM-KGM0-499": {
          "displayName": "South",
          "destination": "K-KGM-KGM0-499"
        }
      }
    },
    "K-KGP-KGP2001-2499": {
      "firstVisit": true,
      "displayName": "Dominica",
      "description": "Description for \u201cDominica Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KGP"
        }
      }
    },
    "K-KGP-KGP1-499": {
      "firstVisit": true,
      "displayName": "Cura\u00e7ao",
      "description": "Description for \u201cCura\u00e7ao Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KGP"
        }
      }
    },
    "K-KGP": {
      "firstVisit": true,
      "displayName": "\u201cDominica Building\u201d Main Lobby",
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n\n[  South  ] \u201cDominica Room\u201d\n[  North  ] \u201cCura\u00e7ao Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KGP": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KGP-KGP2001-2499": {
          "displayName": "South",
          "destination": "K-KGP-KGP2001-2499"
        },
        "K-KGP-KGP1-499": {
          "displayName": "North",
          "destination": "K-KGP-KGP1-499"
        }
      }
    },
    "K-KRG-KRG1-490": {
      "firstVisit": true,
      "displayName": "Congo (Brazzaville)",
      "description": "Description for \u201cCongo (Brazzaville) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KRG"
        }
      }
    },
    "K-KRG": {
      "firstVisit": true,
      "displayName": "\u201cCongo (Brazzaville) Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cCongo (Brazzaville) Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KRG": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KRG-KRG1-490": {
          "displayName": "South",
          "destination": "K-KRG-KRG1-490"
        }
      }
    },
    "K-KVU-KVU1-499": {
      "firstVisit": true,
      "displayName": "Nauru",
      "description": "Description for \u201cNauru Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KVU"
        }
      }
    },
    "K-KVU-KVU1001-1099": {
      "firstVisit": true,
      "displayName": "Netherlands New Guinea (to 1963)",
      "description": "Description for \u201cNetherlands New Guinea (to 1963) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KVU"
        }
      }
    },
    "K-KVU": {
      "firstVisit": true,
      "displayName": "\u201cNauru Building\u201d Main Lobby",
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n\n[  South  ] \u201cNauru Room\u201d\n[  North  ] \u201cNetherlands New Guinea (to 1963) Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KVU": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KVU-KVU1-499": {
          "displayName": "South",
          "destination": "K-KVU-KVU1-499"
        },
        "K-KVU-KVU1001-1099": {
          "displayName": "North",
          "destination": "K-KVU-KVU1001-1099"
        }
      }
    },
    "K-KQJ-KQJ1-490": {
      "firstVisit": true,
      "displayName": "Benin",
      "description": "Description for \u201cBenin Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KQJ"
        }
      }
    },
    "K-KQJ": {
      "firstVisit": true,
      "displayName": "\u201cBenin Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cBenin Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KQJ": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KQJ-KQJ1-490": {
          "displayName": "South",
          "destination": "K-KQJ-KQJ1-490"
        }
      }
    },
    "K-KNE-KNE10-499": {
      "firstVisit": true,
      "displayName": "Regional organization and integration",
      "description": "Description for \u201cRegional organization and integration Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KNE"
        }
      }
    },
    "K-KNE": {
      "firstVisit": true,
      "displayName": "\u201cRegional organization and integration Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cRegional organization and integration Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KNE": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KNE-KNE10-499": {
          "displayName": "South",
          "destination": "K-KNE-KNE10-499"
        }
      }
    },
    "K-KMS-KMS1-490": {
      "firstVisit": true,
      "displayName": "Qatar",
      "description": "Description for \u201cQatar Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KMS"
        }
      }
    },
    "K-KMS": {
      "firstVisit": true,
      "displayName": "\u201cQatar Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cQatar Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KMS": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KMS-KMS1-490": {
          "displayName": "South",
          "destination": "K-KMS-KMS1-490"
        }
      }
    },
    "K-KQM-KQM1-499": {
      "firstVisit": true,
      "displayName": "British Central Africa Protectorate",
      "description": "Description for \u201cBritish Central Africa Protectorate Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KQM"
        }
      }
    },
    "K-KQM": {
      "firstVisit": true,
      "displayName": "\u201cBritish Central Africa Protectorate Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cBritish Central Africa Protectorate Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KQM": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KQM-KQM1-499": {
          "displayName": "South",
          "destination": "K-KQM-KQM1-499"
        }
      }
    },
    "K-KNY-KNY10-220": {
      "firstVisit": true,
      "displayName": "Cities, etc.",
      "description": "Description for \u201cCities, etc. Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KNY"
        }
      }
    },
    "K-KNY": {
      "firstVisit": true,
      "displayName": "\u201cCities, etc. Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cCities, etc. Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KNY": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KNY-KNY10-220": {
          "displayName": "South",
          "destination": "K-KNY-KNY10-220"
        }
      }
    },
    "K-KLP-KLP1-4989": {
      "firstVisit": true,
      "displayName": "Ukraine",
      "description": "Description for \u201cUkraine Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KLP"
        }
      }
    },
    "K-KLP": {
      "firstVisit": true,
      "displayName": "\u201cUkraine Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cUkraine Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KLP": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KLP-KLP1-4989": {
          "displayName": "South",
          "destination": "K-KLP-KLP1-4989"
        }
      }
    },
    "K-KQX-KQX1-490": {
      "firstVisit": true,
      "displayName": "Cape Verde",
      "description": "Description for \u201cCape Verde Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KQX"
        }
      }
    },
    "K-KQX": {
      "firstVisit": true,
      "displayName": "\u201cCape Verde Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cCape Verde Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KQX": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KQX-KQX1-490": {
          "displayName": "South",
          "destination": "K-KQX-KQX1-490"
        }
      }
    },
    "K-KGK-KGK1001-1499": {
      "firstVisit": true,
      "displayName": "Aruba",
      "description": "Description for \u201cAruba Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KGK"
        }
      }
    },
    "K-KGK-KGK1-499": {
      "firstVisit": true,
      "displayName": "Antigua and Barbuda",
      "description": "Description for \u201cAntigua and Barbuda Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KGK"
        }
      }
    },
    "K-KGK": {
      "firstVisit": true,
      "displayName": "\u201cAruba Building\u201d Main Lobby",
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n\n[  South  ] \u201cAruba Room\u201d\n[  North  ] \u201cAntigua and Barbuda Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KGK": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KGK-KGK1001-1499": {
          "displayName": "South",
          "destination": "K-KGK-KGK1001-1499"
        },
        "K-KGK-KGK1-499": {
          "displayName": "North",
          "destination": "K-KGK-KGK1-499"
        }
      }
    },
    "K-KPH-KPH5001-5490": {
      "firstVisit": true,
      "displayName": "Maldives",
      "description": "Description for \u201cMaldives Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KPH"
        }
      }
    },
    "K-KPH": {
      "firstVisit": true,
      "displayName": "\u201cMaldives Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cMaldives Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KPH": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KPH-KPH5001-5490": {
          "displayName": "South",
          "destination": "K-KPH-KPH5001-5490"
        }
      }
    },
    "K-KSU-KSU1-490": {
      "firstVisit": true,
      "displayName": "Mauritania",
      "description": "Description for \u201cMauritania Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KSU"
        }
      }
    },
    "K-KSU": {
      "firstVisit": true,
      "displayName": "\u201cMauritania Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cMauritania Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KSU": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KSU-KSU1-490": {
          "displayName": "South",
          "destination": "K-KSU-KSU1-490"
        }
      }
    },
    "K-KSC-KSC1-490": {
      "firstVisit": true,
      "displayName": "Guinea-Bissau",
      "description": "Description for \u201cGuinea-Bissau Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KSC"
        }
      }
    },
    "K-KSC": {
      "firstVisit": true,
      "displayName": "\u201cGuinea-Bissau Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cGuinea-Bissau Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KSC": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KSC-KSC1-490": {
          "displayName": "South",
          "destination": "K-KSC-KSC1-490"
        }
      }
    },
    "K-KVL-KVL1-489": {
      "firstVisit": true,
      "displayName": "Cook Islands",
      "description": "Description for \u201cCook Islands Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KVL"
        }
      }
    },
    "K-KVL": {
      "firstVisit": true,
      "displayName": "\u201cCook Islands Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cCook Islands Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KVL": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KVL-KVL1-489": {
          "displayName": "South",
          "destination": "K-KVL-KVL1-489"
        }
      }
    },
    "K-KWP-KWP1-490": {
      "firstVisit": true,
      "displayName": "Tonga",
      "description": "Description for \u201cTonga Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KWP"
        }
      }
    },
    "K-KWP": {
      "firstVisit": true,
      "displayName": "\u201cTonga Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cTonga Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KWP": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KWP-KWP1-490": {
          "displayName": "South",
          "destination": "K-KWP-KWP1-490"
        }
      }
    },
    "K-KNH-KNH1-490": {
      "firstVisit": true,
      "displayName": "Bhutan",
      "description": "Description for \u201cBhutan Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KNH"
        }
      }
    },
    "K-KNH": {
      "firstVisit": true,
      "displayName": "\u201cBhutan Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cBhutan Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KNH": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KNH-KNH1-490": {
          "displayName": "South",
          "destination": "K-KNH-KNH1-490"
        }
      }
    },
    "K-KMG-KMG1-489": {
      "firstVisit": true,
      "displayName": "Gaza",
      "description": "Description for \u201cGaza Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KMG"
        }
      }
    },
    "K-KMG": {
      "firstVisit": true,
      "displayName": "\u201cGaza Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cGaza Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KMG": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KMG-KMG1-489": {
          "displayName": "South",
          "destination": "K-KMG-KMG1-489"
        }
      }
    },
    "K-KHL-KHL1-9000": {
      "firstVisit": true,
      "displayName": "Falkland Islands",
      "description": "Description for \u201cFalkland Islands Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KHL"
        }
      }
    },
    "K-KHL": {
      "firstVisit": true,
      "displayName": "\u201cFalkland Islands Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cFalkland Islands Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KHL": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KHL-KHL1-9000": {
          "displayName": "South",
          "destination": "K-KHL-KHL1-9000"
        }
      }
    },
    "K-KWQ-KWQ1-490": {
      "firstVisit": true,
      "displayName": "Tuvalu",
      "description": "Description for \u201cTuvalu Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KWQ"
        }
      }
    },
    "K-KWQ": {
      "firstVisit": true,
      "displayName": "\u201cTuvalu Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cTuvalu Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KWQ": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KWQ-KWQ1-490": {
          "displayName": "South",
          "destination": "K-KWQ-KWQ1-490"
        }
      }
    },
    "K-KRR-KRR1-499": {
      "firstVisit": true,
      "displayName": "French Equatorial Africa",
      "description": "Description for \u201cFrench Equatorial Africa Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KRR"
        }
      }
    },
    "K-KRR": {
      "firstVisit": true,
      "displayName": "\u201cFrench Equatorial Africa Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cFrench Equatorial Africa Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KRR": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KRR-KRR1-499": {
          "displayName": "South",
          "destination": "K-KRR-KRR1-499"
        }
      }
    },
    "K-KVR-KVR1-490": {
      "firstVisit": true,
      "displayName": "Kiribati",
      "description": "Description for \u201cKiribati Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KVR"
        }
      }
    },
    "K-KVR": {
      "firstVisit": true,
      "displayName": "\u201cKiribati Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cKiribati Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KVR": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KVR-KVR1-490": {
          "displayName": "South",
          "destination": "K-KVR-KVR1-490"
        }
      }
    },
    "K-KU-KU350-399": {
      "firstVisit": true,
      "displayName": "Law of Australian peoples.  Aborigines",
      "description": "Description for \u201cLaw of Australian peoples.  Aborigines Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "K-KU"
        }
      }
    },
    "K-KU": {
      "firstVisit": true,
      "displayName": "\u201cLaw of Australian peoples.  Aborigines Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLaw of Australian peoples.  Aborigines Room\u201d\n[  Exit   ] Law Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "K-KU": {
          "displayName": "Exit",
          "destination": "Plaza-K"
        },
        "K-KU-KU350-399": {
          "displayName": "South",
          "destination": "K-KU-KU350-399"
        }
      }
    },
    "Plaza-L": {
      "firstVisit": true,
      "displayName": "Education Plaza",
      "description": "You are in an plaza surrounded by 11 buildings conforming Education.\nThe buildings are accessible via their classification code, visible above the main door:\n\n[ L-LB  ] (1 story) \u201cTheory and practice of education Building\u201d\n[ L-LT  ] (1 story) \u201cTextbooks Building\u201d\n[ L-LA  ] (1 story) \u201cHistory of education Building\u201d\n[ L-LD  ] (1 story) \u201cUnited States Building\u201d\n[ L-LC  ] (1 story) \u201cSpecial aspects of education Building\u201d\n[ L-L   ] (1 story) \u201cEducation (General) Building\u201d\n[ L-LF  ] (1 story) \u201cIndividual institutions Building\u201d\n[ L-LG  ] (1 story) \u201cIndividual institutions Building\u201d\n[ L-LJ  ] (1 story) \u201cStudent fraternities and societies, United States Building\u201d\n[ L-LE  ] (1 story) \u201cAmerica (except United States) Building\u201d\n[ L-LH  ] (1 story) \u201cCollege and school magazines and papers Building\u201d\n[ Main  ] Main Library Grounds",
      "interactables": {},
      "items": {},
      "exits": {
        "L-LB": {
          "displayName": "L-LB",
          "destination": "L-LB"
        },
        "L-LT": {
          "displayName": "L-LT",
          "destination": "L-LT"
        },
        "L-LA": {
          "displayName": "L-LA",
          "destination": "L-LA"
        },
        "L-LD": {
          "displayName": "L-LD",
          "destination": "L-LD"
        },
        "L-LC": {
          "displayName": "L-LC",
          "destination": "L-LC"
        },
        "L-L": {
          "displayName": "L-L",
          "destination": "L-L"
        },
        "L-LF": {
          "displayName": "L-LF",
          "destination": "L-LF"
        },
        "L-LG": {
          "displayName": "L-LG",
          "destination": "L-LG"
        },
        "L-LJ": {
          "displayName": "L-LJ",
          "destination": "L-LJ"
        },
        "L-LE": {
          "displayName": "L-LE",
          "destination": "L-LE"
        },
        "L-LH": {
          "displayName": "L-LH",
          "destination": "L-LH"
        },
        "main": {
          "displayName": "Main",
          "destination": "MAIN"
        }
      }
    },
    "L-LB-LB5-3640": {
      "firstVisit": true,
      "displayName": "Theory and practice of education",
      "description": "Description for \u201cTheory and practice of education Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "L-LB"
        }
      }
    },
    "L-LB": {
      "firstVisit": true,
      "displayName": "\u201cTheory and practice of education Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cTheory and practice of education Room\u201d\n[  Exit   ] Education Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "L-LB": {
          "displayName": "Exit",
          "destination": "Plaza-L"
        },
        "L-LB-LB5-3640": {
          "displayName": "South",
          "destination": "L-LB-LB5-3640"
        }
      }
    },
    "L-LT-LT6-1001": {
      "firstVisit": true,
      "displayName": "Textbooks",
      "description": "Description for \u201cTextbooks Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "L-LT"
        }
      }
    },
    "L-LT": {
      "firstVisit": true,
      "displayName": "\u201cTextbooks Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cTextbooks Room\u201d\n[  Exit   ] Education Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "L-LT": {
          "displayName": "Exit",
          "destination": "Plaza-L"
        },
        "L-LT-LT6-1001": {
          "displayName": "South",
          "destination": "L-LT-LT6-1001"
        }
      }
    },
    "L-LA-LA5-2396": {
      "firstVisit": true,
      "displayName": "History of education",
      "description": "Description for \u201cHistory of education Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "L-LA"
        }
      }
    },
    "L-LA": {
      "firstVisit": true,
      "displayName": "\u201cHistory of education Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cHistory of education Room\u201d\n[  Exit   ] Education Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "L-LA": {
          "displayName": "Exit",
          "destination": "Plaza-L"
        },
        "L-LA-LA5-2396": {
          "displayName": "South",
          "destination": "L-LA-LA5-2396"
        }
      }
    },
    "L-LD-LD13-7501": {
      "firstVisit": true,
      "displayName": "United States",
      "description": "Description for \u201cUnited States Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "L-LD"
        }
      }
    },
    "L-LD": {
      "firstVisit": true,
      "displayName": "\u201cUnited States Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cUnited States Room\u201d\n[  Exit   ] Education Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "L-LD": {
          "displayName": "Exit",
          "destination": "Plaza-L"
        },
        "L-LD-LD13-7501": {
          "displayName": "South",
          "destination": "L-LD-LD13-7501"
        }
      }
    },
    "L-LC-LC8-6691": {
      "firstVisit": true,
      "displayName": "Special aspects of education",
      "description": "Description for \u201cSpecial aspects of education Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "L-LC"
        }
      }
    },
    "L-LC": {
      "firstVisit": true,
      "displayName": "\u201cSpecial aspects of education Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cSpecial aspects of education Room\u201d\n[  Exit   ] Education Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "L-LC": {
          "displayName": "Exit",
          "destination": "Plaza-L"
        },
        "L-LC-LC8-6691": {
          "displayName": "South",
          "destination": "L-LC-LC8-6691"
        }
      }
    },
    "L-L-L7-991": {
      "firstVisit": true,
      "displayName": "Education (General)",
      "description": "Description for \u201cEducation (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "L-L"
        }
      }
    },
    "L-L": {
      "firstVisit": true,
      "displayName": "\u201cEducation (General) Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cEducation (General) Room\u201d\n[  Exit   ] Education Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "L-L": {
          "displayName": "Exit",
          "destination": "Plaza-L"
        },
        "L-L-L7-991": {
          "displayName": "South",
          "destination": "L-L-L7-991"
        }
      }
    },
    "L-LF-LF14-5627": {
      "firstVisit": true,
      "displayName": "Individual institutions",
      "description": "Description for \u201cIndividual institutions Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "L-LF"
        }
      }
    },
    "L-LF": {
      "firstVisit": true,
      "displayName": "\u201cIndividual institutions Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cIndividual institutions Room\u201d\n[  Exit   ] Education Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "L-LF": {
          "displayName": "Exit",
          "destination": "Plaza-L"
        },
        "L-LF-LF14-5627": {
          "displayName": "South",
          "destination": "L-LF-LF14-5627"
        }
      }
    },
    "L-LG-LG21-961": {
      "firstVisit": true,
      "displayName": "Individual institutions",
      "description": "Description for \u201cIndividual institutions Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "L-LG"
        }
      }
    },
    "L-LG": {
      "firstVisit": true,
      "displayName": "\u201cIndividual institutions Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cIndividual institutions Room\u201d\n[  Exit   ] Education Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "L-LG": {
          "displayName": "Exit",
          "destination": "Plaza-L"
        },
        "L-LG-LG21-961": {
          "displayName": "South",
          "destination": "L-LG-LG21-961"
        }
      }
    },
    "L-LJ-LJ3-165": {
      "firstVisit": true,
      "displayName": "Student fraternities and societies, United States",
      "description": "Description for \u201cStudent fraternities and societies, United States Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "L-LJ"
        }
      }
    },
    "L-LJ": {
      "firstVisit": true,
      "displayName": "\u201cStudent fraternities and societies, United States Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cStudent fraternities and societies, United States Room\u201d\n[  Exit   ] Education Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "L-LJ": {
          "displayName": "Exit",
          "destination": "Plaza-L"
        },
        "L-LJ-LJ3-165": {
          "displayName": "South",
          "destination": "L-LJ-LJ3-165"
        }
      }
    },
    "L-LE-LE3-78": {
      "firstVisit": true,
      "displayName": "America (except United States)",
      "description": "Description for \u201cAmerica (except United States) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "L-LE"
        }
      }
    },
    "L-LE": {
      "firstVisit": true,
      "displayName": "\u201cAmerica (except United States) Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cAmerica (except United States) Room\u201d\n[  Exit   ] Education Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "L-LE": {
          "displayName": "Exit",
          "destination": "Plaza-L"
        },
        "L-LE-LE3-78": {
          "displayName": "South",
          "destination": "L-LE-LE3-78"
        }
      }
    },
    "L-LH-LH1-9": {
      "firstVisit": true,
      "displayName": "College and school magazines and papers",
      "description": "Description for \u201cCollege and school magazines and papers Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "L-LH"
        }
      }
    },
    "L-LH": {
      "firstVisit": true,
      "displayName": "\u201cCollege and school magazines and papers Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cCollege and school magazines and papers Room\u201d\n[  Exit   ] Education Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "L-LH": {
          "displayName": "Exit",
          "destination": "Plaza-L"
        },
        "L-LH-LH1-9": {
          "displayName": "South",
          "destination": "L-LH-LH1-9"
        }
      }
    },
    "Plaza-M": {
      "firstVisit": true,
      "displayName": "Music Plaza",
      "description": "You are in an plaza surrounded by 3 buildings conforming Music.\nThe buildings are accessible via their classification code, visible above the main door:\n\n[ M-ML  ] (1 story) \u201cLiterature on music Building\u201d\n[ M-MT  ] (1 story) \u201cInstruction and study Building\u201d\n[ M-M   ] (1 story) \u201cMusic Building\u201d\n[ Main  ] Main Library Grounds",
      "interactables": {},
      "items": {},
      "exits": {
        "M-ML": {
          "displayName": "M-ML",
          "destination": "M-ML"
        },
        "M-MT": {
          "displayName": "M-MT",
          "destination": "M-MT"
        },
        "M-M": {
          "displayName": "M-M",
          "destination": "M-M"
        },
        "main": {
          "displayName": "Main",
          "destination": "MAIN"
        }
      }
    },
    "M-ML-ML1-3930": {
      "firstVisit": true,
      "displayName": "Literature on music",
      "description": "Description for \u201cLiterature on music Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "M-ML"
        }
      }
    },
    "M-ML": {
      "firstVisit": true,
      "displayName": "\u201cLiterature on music Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLiterature on music Room\u201d\n[  Exit   ] Music Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "M-ML": {
          "displayName": "Exit",
          "destination": "Plaza-M"
        },
        "M-ML-ML1-3930": {
          "displayName": "South",
          "destination": "M-ML-ML1-3930"
        }
      }
    },
    "M-MT-MT1-960": {
      "firstVisit": true,
      "displayName": "Instruction and study",
      "description": "Description for \u201cInstruction and study Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "M-MT"
        }
      }
    },
    "M-MT": {
      "firstVisit": true,
      "displayName": "\u201cInstruction and study Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cInstruction and study Room\u201d\n[  Exit   ] Music Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "M-MT": {
          "displayName": "Exit",
          "destination": "Plaza-M"
        },
        "M-MT-MT1-960": {
          "displayName": "South",
          "destination": "M-MT-MT1-960"
        }
      }
    },
    "M-M-M1-5000": {
      "firstVisit": true,
      "displayName": "Music",
      "description": "Description for \u201cMusic Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "M-M"
        }
      }
    },
    "M-M": {
      "firstVisit": true,
      "displayName": "\u201cMusic Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cMusic Room\u201d\n[  Exit   ] Music Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "M-M": {
          "displayName": "Exit",
          "destination": "Plaza-M"
        },
        "M-M-M1-5000": {
          "displayName": "South",
          "destination": "M-M-M1-5000"
        }
      }
    },
    "Plaza-N": {
      "firstVisit": true,
      "displayName": "Fine Arts Plaza",
      "description": "You are in an plaza surrounded by 8 buildings conforming Fine Arts.\nThe buildings are accessible via their classification code, visible above the main door:\n\n[ N-NA  ] (1 story) \u201cArchitecture Building\u201d\n[ N-N   ] (1 story) \u201cVisual arts Building\u201d\n[ N-NK  ] (1 story) \u201cDecorative arts Building\u201d\n[ N-ND  ] (1 story) \u201cPainting Building\u201d\n[ N-NC  ] (1 story) \u201cDrawing.    Design.    Illustration Building\u201d\n[ N-NE  ] (1 story) \u201cPrint media Building\u201d\n[ N-NB  ] (1 story) \u201cSculpture Building\u201d\n[ N-NX  ] (1 story) \u201cArts in general Building\u201d\n[ Main  ] Main Library Grounds",
      "interactables": {},
      "items": {},
      "exits": {
        "N-NA": {
          "displayName": "N-NA",
          "destination": "N-NA"
        },
        "N-N": {
          "displayName": "N-N",
          "destination": "N-N"
        },
        "N-NK": {
          "displayName": "N-NK",
          "destination": "N-NK"
        },
        "N-ND": {
          "displayName": "N-ND",
          "destination": "N-ND"
        },
        "N-NC": {
          "displayName": "N-NC",
          "destination": "N-NC"
        },
        "N-NE": {
          "displayName": "N-NE",
          "destination": "N-NE"
        },
        "N-NB": {
          "displayName": "N-NB",
          "destination": "N-NB"
        },
        "N-NX": {
          "displayName": "N-NX",
          "destination": "N-NX"
        },
        "main": {
          "displayName": "Main",
          "destination": "MAIN"
        }
      }
    },
    "N-NA-NA1-9428": {
      "firstVisit": true,
      "displayName": "Architecture",
      "description": "Description for \u201cArchitecture Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "N-NA"
        }
      }
    },
    "N-NA": {
      "firstVisit": true,
      "displayName": "\u201cArchitecture Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cArchitecture Room\u201d\n[  Exit   ] Fine Arts Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "N-NA": {
          "displayName": "Exit",
          "destination": "Plaza-N"
        },
        "N-NA-NA1-9428": {
          "displayName": "South",
          "destination": "N-NA-NA1-9428"
        }
      }
    },
    "N-N-N1-9211": {
      "firstVisit": true,
      "displayName": "Visual arts",
      "description": "Description for \u201cVisual arts Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "N-N"
        }
      }
    },
    "N-N": {
      "firstVisit": true,
      "displayName": "\u201cVisual arts Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cVisual arts Room\u201d\n[  Exit   ] Fine Arts Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "N-N": {
          "displayName": "Exit",
          "destination": "Plaza-N"
        },
        "N-N-N1-9211": {
          "displayName": "South",
          "destination": "N-N-N1-9211"
        }
      }
    },
    "N-NK-NK1-9990": {
      "firstVisit": true,
      "displayName": "Decorative arts",
      "description": "Description for \u201cDecorative arts Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "N-NK"
        }
      }
    },
    "N-NK": {
      "firstVisit": true,
      "displayName": "\u201cDecorative arts Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cDecorative arts Room\u201d\n[  Exit   ] Fine Arts Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "N-NK": {
          "displayName": "Exit",
          "destination": "Plaza-N"
        },
        "N-NK-NK1-9990": {
          "displayName": "South",
          "destination": "N-NK-NK1-9990"
        }
      }
    },
    "N-ND-ND25-3416": {
      "firstVisit": true,
      "displayName": "Painting",
      "description": "Description for \u201cPainting Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "N-ND"
        }
      }
    },
    "N-ND": {
      "firstVisit": true,
      "displayName": "\u201cPainting Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cPainting Room\u201d\n[  Exit   ] Fine Arts Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "N-ND": {
          "displayName": "Exit",
          "destination": "Plaza-N"
        },
        "N-ND-ND25-3416": {
          "displayName": "South",
          "destination": "N-ND-ND25-3416"
        }
      }
    },
    "N-NC-NC1-1940": {
      "firstVisit": true,
      "displayName": "Drawing.    Design.    Illustration",
      "description": "Description for \u201cDrawing.    Design.    Illustration Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "N-NC"
        }
      }
    },
    "N-NC": {
      "firstVisit": true,
      "displayName": "\u201cDrawing.    Design.    Illustration Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cDrawing.    Design.    Illustration Room\u201d\n[  Exit   ] Fine Arts Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "N-NC": {
          "displayName": "Exit",
          "destination": "Plaza-N"
        },
        "N-NC-NC1-1940": {
          "displayName": "South",
          "destination": "N-NC-NC1-1940"
        }
      }
    },
    "N-NE-NE1-3002": {
      "firstVisit": true,
      "displayName": "Print media",
      "description": "Description for \u201cPrint media Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "N-NE"
        }
      }
    },
    "N-NE": {
      "firstVisit": true,
      "displayName": "\u201cPrint media Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cPrint media Room\u201d\n[  Exit   ] Fine Arts Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "N-NE": {
          "displayName": "Exit",
          "destination": "Plaza-N"
        },
        "N-NE-NE1-3002": {
          "displayName": "South",
          "destination": "N-NE-NE1-3002"
        }
      }
    },
    "N-NB-NB1-1952": {
      "firstVisit": true,
      "displayName": "Sculpture",
      "description": "Description for \u201cSculpture Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "N-NB"
        }
      }
    },
    "N-NB": {
      "firstVisit": true,
      "displayName": "\u201cSculpture Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cSculpture Room\u201d\n[  Exit   ] Fine Arts Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "N-NB": {
          "displayName": "Exit",
          "destination": "Plaza-N"
        },
        "N-NB-NB1-1952": {
          "displayName": "South",
          "destination": "N-NB-NB1-1952"
        }
      }
    },
    "N-NX-NX1-820": {
      "firstVisit": true,
      "displayName": "Arts in general",
      "description": "Description for \u201cArts in general Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "N-NX"
        }
      }
    },
    "N-NX": {
      "firstVisit": true,
      "displayName": "\u201cArts in general Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cArts in general Room\u201d\n[  Exit   ] Fine Arts Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "N-NX": {
          "displayName": "Exit",
          "destination": "Plaza-N"
        },
        "N-NX-NX1-820": {
          "displayName": "South",
          "destination": "N-NX-NX1-820"
        }
      }
    },
    "Plaza-P": {
      "firstVisit": true,
      "displayName": "Language and Literature Plaza",
      "description": "You are in an plaza surrounded by 19 buildings conforming Language and Literature.\nThe buildings are accessible via their classification code, visible above the main door:\n\n[ P-PZ  ] (1 story) \u201cFiction and juvenile belles lettres Building\u201d\n[ P-PR  ] (1 story) \u201cEnglish Building\u201d\n[ P-PS  ] (1 story) \u201cAmerican literature Building\u201d\n[ P-PQ  ] (1 story) \u201cFrench literature Building\u201d\n[ P-PE  ] (1 story) \u201cEnglish Building\u201d\n[ P-PN  ] (1 story) \u201cLiterature (General) Building\u201d\n[ P-PT  ] (2 stories) \u201cGerman literature Building\u201d\n[ P-PA  ] (2 stories) \u201cGreek literature Building\u201d\n[ P-PC  ] (1 story) \u201cRomance Building\u201d\n[ P-PK  ] (1 story) \u201cIndo-Iranian philology and literature Building\u201d\n[ P-P   ] (1 story) \u201cPhilology.    Linguistics Building\u201d\n[ P-PF  ] (1 story) \u201cWest Germanic Building\u201d\n[ P-PJ  ] (1 story) \u201cOriental philology and literature Building\u201d\n[ P-PD  ] (1 story) \u201cGermanic Building\u201d\n[ P-PG  ] (1 story) \u201cSlavic.    Baltic.    Albanian Building\u201d\n[ P-PH  ] (1 story) \u201cUralic.    Basque Building\u201d\n[ P-PL  ] (1 story) \u201cLanguages of Eastern Asia, Africa, Oceania Building\u201d\n[ P-PB  ] (1 story) \u201cModern languages.    Celtic languages Building\u201d\n[ P-PM  ] (1 story) \u201cHyperborean, Indian, and artificial languages Building\u201d\n[ Main  ] Main Library Grounds",
      "interactables": {},
      "items": {},
      "exits": {
        "P-PZ": {
          "displayName": "P-PZ",
          "destination": "P-PZ"
        },
        "P-PR": {
          "displayName": "P-PR",
          "destination": "P-PR"
        },
        "P-PS": {
          "displayName": "P-PS",
          "destination": "P-PS"
        },
        "P-PQ": {
          "displayName": "P-PQ",
          "destination": "P-PQ"
        },
        "P-PE": {
          "displayName": "P-PE",
          "destination": "P-PE"
        },
        "P-PN": {
          "displayName": "P-PN",
          "destination": "P-PN"
        },
        "P-PT": {
          "displayName": "P-PT",
          "destination": "P-PT"
        },
        "P-PA": {
          "displayName": "P-PA",
          "destination": "P-PA"
        },
        "P-PC": {
          "displayName": "P-PC",
          "destination": "P-PC"
        },
        "P-PK": {
          "displayName": "P-PK",
          "destination": "P-PK"
        },
        "P-P": {
          "displayName": "P-P",
          "destination": "P-P"
        },
        "P-PF": {
          "displayName": "P-PF",
          "destination": "P-PF"
        },
        "P-PJ": {
          "displayName": "P-PJ",
          "destination": "P-PJ"
        },
        "P-PD": {
          "displayName": "P-PD",
          "destination": "P-PD"
        },
        "P-PG": {
          "displayName": "P-PG",
          "destination": "P-PG"
        },
        "P-PH": {
          "displayName": "P-PH",
          "destination": "P-PH"
        },
        "P-PL": {
          "displayName": "P-PL",
          "destination": "P-PL"
        },
        "P-PB": {
          "displayName": "P-PB",
          "destination": "P-PB"
        },
        "P-PM": {
          "displayName": "P-PM",
          "destination": "P-PM"
        },
        "main": {
          "displayName": "Main",
          "destination": "MAIN"
        }
      }
    },
    "P-PZ-PZ1-90": {
      "firstVisit": true,
      "displayName": "Fiction and juvenile belles lettres",
      "description": "Description for \u201cFiction and juvenile belles lettres Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-PZ"
        }
      }
    },
    "P-PZ": {
      "firstVisit": true,
      "displayName": "\u201cFiction and juvenile belles lettres Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cFiction and juvenile belles lettres Room\u201d\n[  Exit   ] Language and Literature Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "P-PZ": {
          "displayName": "Exit",
          "destination": "Plaza-P"
        },
        "P-PZ-PZ1-90": {
          "displayName": "South",
          "destination": "P-PZ-PZ1-90"
        }
      }
    },
    "P-PR-PR": {
      "firstVisit": true,
      "displayName": "English",
      "description": "Description for \u201cEnglish Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-PR"
        }
      }
    },
    "P-PR": {
      "firstVisit": true,
      "displayName": "\u201cEnglish Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cEnglish Room\u201d\n[  Exit   ] Language and Literature Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "P-PR": {
          "displayName": "Exit",
          "destination": "Plaza-P"
        },
        "P-PR-PR": {
          "displayName": "South",
          "destination": "P-PR-PR"
        }
      }
    },
    "P-PS-PS1-3576": {
      "firstVisit": true,
      "displayName": "American literature",
      "description": "Description for \u201cAmerican literature Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-PS"
        }
      }
    },
    "P-PS-PS8001-8599": {
      "firstVisit": true,
      "displayName": "Canadian    literature",
      "description": "Description for \u201cCanadian    literature Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-PS"
        }
      }
    },
    "P-PS": {
      "firstVisit": true,
      "displayName": "\u201cAmerican literature Building\u201d Main Lobby",
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n\n[  South  ] \u201cAmerican literature Room\u201d\n[  North  ] \u201cCanadian    literature Room\u201d\n[  Exit   ] Language and Literature Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "P-PS": {
          "displayName": "Exit",
          "destination": "Plaza-P"
        },
        "P-PS-PS1-3576": {
          "displayName": "South",
          "destination": "P-PS-PS1-3576"
        },
        "P-PS-PS8001-8599": {
          "displayName": "North",
          "destination": "P-PS-PS8001-8599"
        }
      }
    },
    "P-PQ-PQ1-3999": {
      "firstVisit": true,
      "displayName": "French literature",
      "description": "Description for \u201cFrench literature Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-PQ"
        }
      }
    },
    "P-PQ-PQ4001-5999": {
      "firstVisit": true,
      "displayName": "Italian literature",
      "description": "Description for \u201cItalian literature Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-PQ"
        }
      }
    },
    "P-PQ-PQ6001-8929": {
      "firstVisit": true,
      "displayName": "Spanish literature",
      "description": "Description for \u201cSpanish literature Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-PQ"
        }
      }
    },
    "P-PQ-PQ4001-4199.5": {
      "firstVisit": true,
      "displayName": "History and criticism",
      "description": "Description for \u201cHistory and criticism Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-PQ"
        }
      }
    },
    "P-PQ-PQ6001-6168": {
      "firstVisit": true,
      "displayName": "History and criticism",
      "description": "Description for \u201cHistory and criticism Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-PQ"
        }
      }
    },
    "P-PQ-PQ9000-9999": {
      "firstVisit": true,
      "displayName": "Portuguese literature",
      "description": "Description for \u201cPortuguese literature Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-PQ"
        }
      }
    },
    "P-PQ": {
      "firstVisit": true,
      "displayName": "\u201cFrench literature Building\u201d Main Lobby",
      "description": "There are 6 rooms throughout this building. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[  South  ] \u201cFrench literature Room\u201d\n[  North  ] \u201cItalian literature Room\u201d\n[  East   ] \u201cSpanish literature Room\u201d\n[  West   ] \u201cHistory and criticism Room\u201d\n[SouthEast] \u201cHistory and criticism Room\u201d\n[NorthWest] \u201cPortuguese literature Room\u201d\n[  Exit   ] Language and Literature Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "P-PQ": {
          "displayName": "Exit",
          "destination": "Plaza-P"
        },
        "P-PQ-PQ1-3999": {
          "displayName": "South",
          "destination": "P-PQ-PQ1-3999"
        },
        "P-PQ-PQ4001-5999": {
          "displayName": "North",
          "destination": "P-PQ-PQ4001-5999"
        },
        "P-PQ-PQ6001-8929": {
          "displayName": "East",
          "destination": "P-PQ-PQ6001-8929"
        },
        "P-PQ-PQ4001-4199.5": {
          "displayName": "West",
          "destination": "P-PQ-PQ4001-4199.5"
        },
        "P-PQ-PQ6001-6168": {
          "displayName": "SouthEast",
          "destination": "P-PQ-PQ6001-6168"
        },
        "P-PQ-PQ9000-9999": {
          "displayName": "NorthWest",
          "destination": "P-PQ-PQ9000-9999"
        }
      }
    },
    "P-PE-PE1-3729": {
      "firstVisit": true,
      "displayName": "English",
      "description": "Description for \u201cEnglish Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-PE"
        }
      }
    },
    "P-PE": {
      "firstVisit": true,
      "displayName": "\u201cEnglish Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cEnglish Room\u201d\n[  Exit   ] Language and Literature Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "P-PE": {
          "displayName": "Exit",
          "destination": "Plaza-P"
        },
        "P-PE-PE1-3729": {
          "displayName": "South",
          "destination": "P-PE-PE1-3729"
        }
      }
    },
    "P-PN-PN1-6790": {
      "firstVisit": true,
      "displayName": "Literature (General)",
      "description": "Description for \u201cLiterature (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-PN"
        }
      }
    },
    "P-PN": {
      "firstVisit": true,
      "displayName": "\u201cLiterature (General) Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLiterature (General) Room\u201d\n[  Exit   ] Language and Literature Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "P-PN": {
          "displayName": "Exit",
          "destination": "Plaza-P"
        },
        "P-PN-PN1-6790": {
          "displayName": "South",
          "destination": "P-PN-PN1-6790"
        }
      }
    },
    "P-PT-PT1-4897": {
      "firstVisit": true,
      "displayName": "German literature",
      "description": "Description for \u201cGerman literature Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-PT"
        }
      }
    },
    "P-PT-PT8301-9155": {
      "firstVisit": true,
      "displayName": "Norwegian literature",
      "description": "Description for \u201cNorwegian literature Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-PT"
        }
      }
    },
    "P-PT-PT5001-5980": {
      "firstVisit": true,
      "displayName": "Dutch literature",
      "description": "Description for \u201cDutch literature Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-PT"
        }
      }
    },
    "P-PT-PT9201-9999": {
      "firstVisit": true,
      "displayName": "Swedish literature",
      "description": "Description for \u201cSwedish literature Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-PT"
        }
      }
    },
    "P-PT-PT7101-7338": {
      "firstVisit": true,
      "displayName": "Old Norse literature: Old Icelandic and Old Norwegian",
      "description": "Description for \u201cOld Norse literature: Old Icelandic and Old Norwegian Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-PT"
        }
      }
    },
    "P-PT-PT7601-8260": {
      "firstVisit": true,
      "displayName": "Danish literature",
      "description": "Description for \u201cDanish literature Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-PT"
        }
      }
    },
    "P-PT-PT7351-7550": {
      "firstVisit": true,
      "displayName": "Modern Icelandic literature",
      "description": "Description for \u201cModern Icelandic literature Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-PT"
        }
      }
    },
    "P-PT-PT6500-6593.36": {
      "firstVisit": true,
      "displayName": "Afrikaans literature",
      "description": "Description for \u201cAfrikaans literature Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-PT"
        }
      }
    },
    "P-PT": {
      "firstVisit": true,
      "displayName": "\u201cGerman literature Building\u201d Main Lobby",
      "description": "There are 11 rooms throughout this building in 2 floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[  South  ] \u201cGerman literature Room\u201d\n[  North  ] \u201cNorwegian literature Room\u201d\n[  East   ] \u201cDutch literature Room\u201d\n[  West   ] \u201cSwedish literature Room\u201d\n[SouthEast] \u201cOld Norse literature: Old Icelandic and Old Norwegian Room\u201d\n[NorthWest] \u201cDanish literature Room\u201d\n[SouthWest] \u201cModern Icelandic literature Room\u201d\n[NorthEast] \u201cAfrikaans literature Room\u201d\n[  Up     ] 2nd floor\n[  Exit   ] Language and Literature Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "P-PT": {
          "displayName": "Exit",
          "destination": "Plaza-P"
        },
        "up": {
          "displayName": "Up",
          "destination": "2_P-PT"
        },
        "P-PT-PT1-4897": {
          "displayName": "South",
          "destination": "P-PT-PT1-4897"
        },
        "P-PT-PT8301-9155": {
          "displayName": "North",
          "destination": "P-PT-PT8301-9155"
        },
        "P-PT-PT5001-5980": {
          "displayName": "East",
          "destination": "P-PT-PT5001-5980"
        },
        "P-PT-PT9201-9999": {
          "displayName": "West",
          "destination": "P-PT-PT9201-9999"
        },
        "P-PT-PT7101-7338": {
          "displayName": "SouthEast",
          "destination": "P-PT-PT7101-7338"
        },
        "P-PT-PT7601-8260": {
          "displayName": "NorthWest",
          "destination": "P-PT-PT7601-8260"
        },
        "P-PT-PT7351-7550": {
          "displayName": "SouthWest",
          "destination": "P-PT-PT7351-7550"
        },
        "P-PT-PT6500-6593.36": {
          "displayName": "NorthEast",
          "destination": "P-PT-PT6500-6593.36"
        }
      }
    },
    "P-PT-PT6000-6467.36": {
      "firstVisit": true,
      "displayName": "Flemish literature since 1830",
      "description": "Description for \u201cFlemish literature since 1830 Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-PT"
        }
      }
    },
    "P-PT-PT7001-7099": {
      "firstVisit": true,
      "displayName": "General",
      "description": "Description for \u201cGeneral Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-PT"
        }
      }
    },
    "P-PT-PT7581-7599": {
      "firstVisit": true,
      "displayName": "Faroese literature",
      "description": "Description for \u201cFaroese literature Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-PT"
        }
      }
    },
    "2_P-PT": {
      "firstVisit": true,
      "displayName": "\u201cGerman literature Building\u201d, 2nd Floor",
      "description": "You are in the 2nd floor. There are 3 rooms:\n\n[  South  ] \u201cFlemish literature since 1830 Room\u201d\n[  North  ] \u201cGeneral Room\u201d\n[  East   ] \u201cFaroese literature Room\u201d\n[  Down   ] 1st floor",
      "interactables": {},
      "items": {},
      "exits": {
        "P-PT-PT6000-6467.36": {
          "displayName": "South",
          "destination": "P-PT-PT6000-6467.36"
        },
        "P-PT-PT7001-7099": {
          "displayName": "North",
          "destination": "P-PT-PT7001-7099"
        },
        "P-PT-PT7581-7599": {
          "displayName": "East",
          "destination": "P-PT-PT7581-7599"
        },
        "down": {
          "displayName": "Down",
          "destination": "P-PT"
        }
      }
    },
    "P-PA-PA2001-2915": {
      "firstVisit": true,
      "displayName": "Latin philology and language",
      "description": "Description for \u201cLatin philology and language Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-PA"
        }
      }
    },
    "P-PA-PA6000-6971": {
      "firstVisit": true,
      "displayName": "Roman literature",
      "description": "Description for \u201cRoman literature Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-PA"
        }
      }
    },
    "P-PA-PA3050-4505": {
      "firstVisit": true,
      "displayName": "Greek literature",
      "description": "Description for \u201cGreek literature Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-PA"
        }
      }
    },
    "P-PA-PA1-199": {
      "firstVisit": true,
      "displayName": "Classical philology",
      "description": "Description for \u201cClassical philology Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-PA"
        }
      }
    },
    "P-PA-PA201-899": {
      "firstVisit": true,
      "displayName": "Greek philology and language",
      "description": "Description for \u201cGreek philology and language Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-PA"
        }
      }
    },
    "P-PA-PA5000-5660": {
      "firstVisit": true,
      "displayName": "Byzantine and modern Greek literature",
      "description": "Description for \u201cByzantine and modern Greek literature Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-PA"
        }
      }
    },
    "P-PA-PA8001-8595": {
      "firstVisit": true,
      "displayName": "Medieval and modern Latin literature",
      "description": "Description for \u201cMedieval and modern Latin literature Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-PA"
        }
      }
    },
    "P-PA-PA3000-3049": {
      "firstVisit": true,
      "displayName": "Classical literature",
      "description": "Description for \u201cClassical literature Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-PA"
        }
      }
    },
    "P-PA": {
      "firstVisit": true,
      "displayName": "\u201cGreek literature Building\u201d Main Lobby",
      "description": "There are 9 rooms throughout this building in 2 floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[  South  ] \u201cLatin philology and language Room\u201d\n[  North  ] \u201cRoman literature Room\u201d\n[  East   ] \u201cGreek literature Room\u201d\n[  West   ] \u201cClassical philology Room\u201d\n[SouthEast] \u201cGreek philology and language Room\u201d\n[NorthWest] \u201cByzantine and modern Greek literature Room\u201d\n[SouthWest] \u201cMedieval and modern Latin literature Room\u201d\n[NorthEast] \u201cClassical literature Room\u201d\n[  Up     ] 2nd floor\n[  Exit   ] Language and Literature Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "P-PA": {
          "displayName": "Exit",
          "destination": "Plaza-P"
        },
        "up": {
          "displayName": "Up",
          "destination": "2_P-PA"
        },
        "P-PA-PA2001-2915": {
          "displayName": "South",
          "destination": "P-PA-PA2001-2915"
        },
        "P-PA-PA6000-6971": {
          "displayName": "North",
          "destination": "P-PA-PA6000-6971"
        },
        "P-PA-PA3050-4505": {
          "displayName": "East",
          "destination": "P-PA-PA3050-4505"
        },
        "P-PA-PA1-199": {
          "displayName": "West",
          "destination": "P-PA-PA1-199"
        },
        "P-PA-PA201-899": {
          "displayName": "SouthEast",
          "destination": "P-PA-PA201-899"
        },
        "P-PA-PA5000-5660": {
          "displayName": "NorthWest",
          "destination": "P-PA-PA5000-5660"
        },
        "P-PA-PA8001-8595": {
          "displayName": "SouthWest",
          "destination": "P-PA-PA8001-8595"
        },
        "P-PA-PA3000-3049": {
          "displayName": "NorthEast",
          "destination": "P-PA-PA3000-3049"
        }
      }
    },
    "P-PA-PA1000-1179": {
      "firstVisit": true,
      "displayName": "Medieval and modern Greek language",
      "description": "Description for \u201cMedieval and modern Greek language Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-PA"
        }
      }
    },
    "2_P-PA": {
      "firstVisit": true,
      "displayName": "\u201cGreek literature Building\u201d, 2nd Floor",
      "description": "You are in the 2nd floor. There is 1 room:\n\n[  South  ] \u201cMedieval and modern Greek language Room\u201d\n[  Down   ] 1st floor",
      "interactables": {},
      "items": {},
      "exits": {
        "P-PA-PA1000-1179": {
          "displayName": "South",
          "destination": "P-PA-PA1000-1179"
        },
        "down": {
          "displayName": "Down",
          "destination": "P-PA"
        }
      }
    },
    "P-PC-PC1-5498": {
      "firstVisit": true,
      "displayName": "Romance",
      "description": "Description for \u201cRomance Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-PC"
        }
      }
    },
    "P-PC": {
      "firstVisit": true,
      "displayName": "\u201cRomance Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cRomance Room\u201d\n[  Exit   ] Language and Literature Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "P-PC": {
          "displayName": "Exit",
          "destination": "Plaza-P"
        },
        "P-PC-PC1-5498": {
          "displayName": "South",
          "destination": "P-PC-PC1-5498"
        }
      }
    },
    "P-PK-PK1-9601": {
      "firstVisit": true,
      "displayName": "Indo-Iranian philology and literature",
      "description": "Description for \u201cIndo-Iranian philology and literature Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-PK"
        }
      }
    },
    "P-PK": {
      "firstVisit": true,
      "displayName": "\u201cIndo-Iranian philology and literature Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cIndo-Iranian philology and literature Room\u201d\n[  Exit   ] Language and Literature Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "P-PK": {
          "displayName": "Exit",
          "destination": "Plaza-P"
        },
        "P-PK-PK1-9601": {
          "displayName": "South",
          "destination": "P-PK-PK1-9601"
        }
      }
    },
    "P-P-P1-1091": {
      "firstVisit": true,
      "displayName": "Philology.    Linguistics",
      "description": "Description for \u201cPhilology.    Linguistics Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-P"
        }
      }
    },
    "P-P": {
      "firstVisit": true,
      "displayName": "\u201cPhilology.    Linguistics Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cPhilology.    Linguistics Room\u201d\n[  Exit   ] Language and Literature Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "P-P": {
          "displayName": "Exit",
          "destination": "Plaza-P"
        },
        "P-P-P1-1091": {
          "displayName": "South",
          "destination": "P-P-P1-1091"
        }
      }
    },
    "P-PF-PF1-5999": {
      "firstVisit": true,
      "displayName": "West Germanic",
      "description": "Description for \u201cWest Germanic Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-PF"
        }
      }
    },
    "P-PF": {
      "firstVisit": true,
      "displayName": "\u201cWest Germanic Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cWest Germanic Room\u201d\n[  Exit   ] Language and Literature Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "P-PF": {
          "displayName": "Exit",
          "destination": "Plaza-P"
        },
        "P-PF-PF1-5999": {
          "displayName": "South",
          "destination": "P-PF-PF1-5999"
        }
      }
    },
    "P-PJ-PJ1-9500": {
      "firstVisit": true,
      "displayName": "Oriental philology and literature",
      "description": "Description for \u201cOriental philology and literature Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-PJ"
        }
      }
    },
    "P-PJ-PJ1-489": {
      "firstVisit": true,
      "displayName": "General",
      "description": "Description for \u201cGeneral Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-PJ"
        }
      }
    },
    "P-PJ": {
      "firstVisit": true,
      "displayName": "\u201cOriental philology and literature Building\u201d Main Lobby",
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n\n[  South  ] \u201cOriental philology and literature Room\u201d\n[  North  ] \u201cGeneral Room\u201d\n[  Exit   ] Language and Literature Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "P-PJ": {
          "displayName": "Exit",
          "destination": "Plaza-P"
        },
        "P-PJ-PJ1-9500": {
          "displayName": "South",
          "destination": "P-PJ-PJ1-9500"
        },
        "P-PJ-PJ1-489": {
          "displayName": "North",
          "destination": "P-PJ-PJ1-489"
        }
      }
    },
    "P-PD-PD1-7159": {
      "firstVisit": true,
      "displayName": "Germanic",
      "description": "Description for \u201cGermanic Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-PD"
        }
      }
    },
    "P-PD": {
      "firstVisit": true,
      "displayName": "\u201cGermanic Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cGermanic Room\u201d\n[  Exit   ] Language and Literature Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "P-PD": {
          "displayName": "Exit",
          "destination": "Plaza-P"
        },
        "P-PD-PD1-7159": {
          "displayName": "South",
          "destination": "P-PD-PD1-7159"
        }
      }
    },
    "P-PG-PG1-7925": {
      "firstVisit": true,
      "displayName": "Slavic",
      "description": "Description for \u201cSlavic Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-PG"
        }
      }
    },
    "P-PG-PG1-9665": {
      "firstVisit": true,
      "displayName": "Slavic.    Baltic.    Albanian",
      "description": "Description for \u201cSlavic.    Baltic.    Albanian Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-PG"
        }
      }
    },
    "P-PG": {
      "firstVisit": true,
      "displayName": "\u201cSlavic.    Baltic.    Albanian Building\u201d Main Lobby",
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n\n[  South  ] \u201cSlavic Room\u201d\n[  North  ] \u201cSlavic.    Baltic.    Albanian Room\u201d\n[  Exit   ] Language and Literature Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "P-PG": {
          "displayName": "Exit",
          "destination": "Plaza-P"
        },
        "P-PG-PG1-7925": {
          "displayName": "South",
          "destination": "P-PG-PG1-7925"
        },
        "P-PG-PG1-9665": {
          "displayName": "North",
          "destination": "P-PG-PG1-9665"
        }
      }
    },
    "P-PH-PH1-5490": {
      "firstVisit": true,
      "displayName": "Uralic.    Basque",
      "description": "Description for \u201cUralic.    Basque Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-PH"
        }
      }
    },
    "P-PH": {
      "firstVisit": true,
      "displayName": "\u201cUralic.    Basque Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cUralic.    Basque Room\u201d\n[  Exit   ] Language and Literature Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "P-PH": {
          "displayName": "Exit",
          "destination": "Plaza-P"
        },
        "P-PH-PH1-5490": {
          "displayName": "South",
          "destination": "P-PH-PH1-5490"
        }
      }
    },
    "P-PL-PL1-8844": {
      "firstVisit": true,
      "displayName": "Languages of Eastern Asia, Africa, Oceania",
      "description": "Description for \u201cLanguages of Eastern Asia, Africa, Oceania Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-PL"
        }
      }
    },
    "P-PL": {
      "firstVisit": true,
      "displayName": "\u201cLanguages of Eastern Asia, Africa, Oceania Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cLanguages of Eastern Asia, Africa, Oceania Room\u201d\n[  Exit   ] Language and Literature Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "P-PL": {
          "displayName": "Exit",
          "destination": "Plaza-P"
        },
        "P-PL-PL1-8844": {
          "displayName": "South",
          "destination": "P-PL-PL1-8844"
        }
      }
    },
    "P-PB-PB1-3029": {
      "firstVisit": true,
      "displayName": "Modern languages.    Celtic languages",
      "description": "Description for \u201cModern languages.    Celtic languages Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-PB"
        }
      }
    },
    "P-PB": {
      "firstVisit": true,
      "displayName": "\u201cModern languages.    Celtic languages Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cModern languages.    Celtic languages Room\u201d\n[  Exit   ] Language and Literature Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "P-PB": {
          "displayName": "Exit",
          "destination": "Plaza-P"
        },
        "P-PB-PB1-3029": {
          "displayName": "South",
          "destination": "P-PB-PB1-3029"
        }
      }
    },
    "P-PM-PM1-9021": {
      "firstVisit": true,
      "displayName": "Hyperborean, Indian, and artificial languages",
      "description": "Description for \u201cHyperborean, Indian, and artificial languages Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "P-PM"
        }
      }
    },
    "P-PM": {
      "firstVisit": true,
      "displayName": "\u201cHyperborean, Indian, and artificial languages Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cHyperborean, Indian, and artificial languages Room\u201d\n[  Exit   ] Language and Literature Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "P-PM": {
          "displayName": "Exit",
          "destination": "Plaza-P"
        },
        "P-PM-PM1-9021": {
          "displayName": "South",
          "destination": "P-PM-PM1-9021"
        }
      }
    },
    "Plaza-Q": {
      "firstVisit": true,
      "displayName": "Science Plaza",
      "description": "You are in an plaza surrounded by 12 buildings conforming Science.\nThe buildings are accessible via their classification code, visible above the main door:\n\n[ Q-QR  ] (1 story) \u201cMicrobiology Building\u201d\n[ Q-QK  ] (1 story) \u201cBotany Building\u201d\n[ Q-QL  ] (1 story) \u201cZoology Building\u201d\n[ Q-QB  ] (1 story) \u201cAstronomy Building\u201d\n[ Q-QA  ] (1 story) \u201cMathematics Building\u201d\n[ Q-Q   ] (1 story) \u201cScience (General) Building\u201d\n[ Q-QP  ] (1 story) \u201cPhysiology Building\u201d\n[ Q-QH  ] (1 story) \u201cBiology (General) Building\u201d\n[ Q-QD  ] (1 story) \u201cChemistry Building\u201d\n[ Q-QE  ] (1 story) \u201cGeology Building\u201d\n[ Q-QC  ] (1 story) \u201cPhysics Building\u201d\n[ Q-QM  ] (1 story) \u201cHuman anatomy Building\u201d\n[ Main  ] Main Library Grounds",
      "interactables": {},
      "items": {},
      "exits": {
        "Q-QR": {
          "displayName": "Q-QR",
          "destination": "Q-QR"
        },
        "Q-QK": {
          "displayName": "Q-QK",
          "destination": "Q-QK"
        },
        "Q-QL": {
          "displayName": "Q-QL",
          "destination": "Q-QL"
        },
        "Q-QB": {
          "displayName": "Q-QB",
          "destination": "Q-QB"
        },
        "Q-QA": {
          "displayName": "Q-QA",
          "destination": "Q-QA"
        },
        "Q-Q": {
          "displayName": "Q-Q",
          "destination": "Q-Q"
        },
        "Q-QP": {
          "displayName": "Q-QP",
          "destination": "Q-QP"
        },
        "Q-QH": {
          "displayName": "Q-QH",
          "destination": "Q-QH"
        },
        "Q-QD": {
          "displayName": "Q-QD",
          "destination": "Q-QD"
        },
        "Q-QE": {
          "displayName": "Q-QE",
          "destination": "Q-QE"
        },
        "Q-QC": {
          "displayName": "Q-QC",
          "destination": "Q-QC"
        },
        "Q-QM": {
          "displayName": "Q-QM",
          "destination": "Q-QM"
        },
        "main": {
          "displayName": "Main",
          "destination": "MAIN"
        }
      }
    },
    "Q-QR-QR1-502": {
      "firstVisit": true,
      "displayName": "Microbiology",
      "description": "Description for \u201cMicrobiology Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Q-QR"
        }
      }
    },
    "Q-QR": {
      "firstVisit": true,
      "displayName": "\u201cMicrobiology Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cMicrobiology Room\u201d\n[  Exit   ] Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "Q-QR": {
          "displayName": "Exit",
          "destination": "Plaza-Q"
        },
        "Q-QR-QR1-502": {
          "displayName": "South",
          "destination": "Q-QR-QR1-502"
        }
      }
    },
    "Q-QK-QK1-989": {
      "firstVisit": true,
      "displayName": "Botany",
      "description": "Description for \u201cBotany Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Q-QK"
        }
      }
    },
    "Q-QK": {
      "firstVisit": true,
      "displayName": "\u201cBotany Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cBotany Room\u201d\n[  Exit   ] Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "Q-QK": {
          "displayName": "Exit",
          "destination": "Plaza-Q"
        },
        "Q-QK-QK1-989": {
          "displayName": "South",
          "destination": "Q-QK-QK1-989"
        }
      }
    },
    "Q-QL-QL1-991": {
      "firstVisit": true,
      "displayName": "Zoology",
      "description": "Description for \u201cZoology Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Q-QL"
        }
      }
    },
    "Q-QL": {
      "firstVisit": true,
      "displayName": "\u201cZoology Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cZoology Room\u201d\n[  Exit   ] Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "Q-QL": {
          "displayName": "Exit",
          "destination": "Plaza-Q"
        },
        "Q-QL-QL1-991": {
          "displayName": "South",
          "destination": "Q-QL-QL1-991"
        }
      }
    },
    "Q-QB-QB1-991": {
      "firstVisit": true,
      "displayName": "Astronomy",
      "description": "Description for \u201cAstronomy Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Q-QB"
        }
      }
    },
    "Q-QB": {
      "firstVisit": true,
      "displayName": "\u201cAstronomy Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cAstronomy Room\u201d\n[  Exit   ] Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "Q-QB": {
          "displayName": "Exit",
          "destination": "Plaza-Q"
        },
        "Q-QB-QB1-991": {
          "displayName": "South",
          "destination": "Q-QB-QB1-991"
        }
      }
    },
    "Q-QA-QA1-939": {
      "firstVisit": true,
      "displayName": "Mathematics",
      "description": "Description for \u201cMathematics Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Q-QA"
        }
      }
    },
    "Q-QA": {
      "firstVisit": true,
      "displayName": "\u201cMathematics Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cMathematics Room\u201d\n[  Exit   ] Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "Q-QA": {
          "displayName": "Exit",
          "destination": "Plaza-Q"
        },
        "Q-QA-QA1-939": {
          "displayName": "South",
          "destination": "Q-QA-QA1-939"
        }
      }
    },
    "Q-Q-Q1-390": {
      "firstVisit": true,
      "displayName": "Science (General)",
      "description": "Description for \u201cScience (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Q-Q"
        }
      }
    },
    "Q-Q": {
      "firstVisit": true,
      "displayName": "\u201cScience (General) Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cScience (General) Room\u201d\n[  Exit   ] Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "Q-Q": {
          "displayName": "Exit",
          "destination": "Plaza-Q"
        },
        "Q-Q-Q1-390": {
          "displayName": "South",
          "destination": "Q-Q-Q1-390"
        }
      }
    },
    "Q-QP-QP1-981": {
      "firstVisit": true,
      "displayName": "Physiology",
      "description": "Description for \u201cPhysiology Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Q-QP"
        }
      }
    },
    "Q-QP": {
      "firstVisit": true,
      "displayName": "\u201cPhysiology Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cPhysiology Room\u201d\n[  Exit   ] Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "Q-QP": {
          "displayName": "Exit",
          "destination": "Plaza-Q"
        },
        "Q-QP-QP1-981": {
          "displayName": "South",
          "destination": "Q-QP-QP1-981"
        }
      }
    },
    "Q-QH-QH1-278.5": {
      "firstVisit": true,
      "displayName": "Natural history (General)",
      "description": "Description for \u201cNatural history (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Q-QH"
        }
      }
    },
    "Q-QH-QH301-705.5": {
      "firstVisit": true,
      "displayName": "Biology (General)",
      "description": "Description for \u201cBiology (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Q-QH"
        }
      }
    },
    "Q-QH": {
      "firstVisit": true,
      "displayName": "\u201cBiology (General) Building\u201d Main Lobby",
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n\n[  South  ] \u201cNatural history (General) Room\u201d\n[  North  ] \u201cBiology (General) Room\u201d\n[  Exit   ] Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "Q-QH": {
          "displayName": "Exit",
          "destination": "Plaza-Q"
        },
        "Q-QH-QH1-278.5": {
          "displayName": "South",
          "destination": "Q-QH-QH1-278.5"
        },
        "Q-QH-QH301-705.5": {
          "displayName": "North",
          "destination": "Q-QH-QH301-705.5"
        }
      }
    },
    "Q-QD-QD1-999": {
      "firstVisit": true,
      "displayName": "Chemistry",
      "description": "Description for \u201cChemistry Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Q-QD"
        }
      }
    },
    "Q-QD": {
      "firstVisit": true,
      "displayName": "\u201cChemistry Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cChemistry Room\u201d\n[  Exit   ] Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "Q-QD": {
          "displayName": "Exit",
          "destination": "Plaza-Q"
        },
        "Q-QD-QD1-999": {
          "displayName": "South",
          "destination": "Q-QD-QD1-999"
        }
      }
    },
    "Q-QE-QE1-996.5": {
      "firstVisit": true,
      "displayName": "Geology",
      "description": "Description for \u201cGeology Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Q-QE"
        }
      }
    },
    "Q-QE": {
      "firstVisit": true,
      "displayName": "\u201cGeology Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cGeology Room\u201d\n[  Exit   ] Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "Q-QE": {
          "displayName": "Exit",
          "destination": "Plaza-Q"
        },
        "Q-QE-QE1-996.5": {
          "displayName": "South",
          "destination": "Q-QE-QE1-996.5"
        }
      }
    },
    "Q-QC-QC1-999": {
      "firstVisit": true,
      "displayName": "Physics",
      "description": "Description for \u201cPhysics Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Q-QC"
        }
      }
    },
    "Q-QC": {
      "firstVisit": true,
      "displayName": "\u201cPhysics Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cPhysics Room\u201d\n[  Exit   ] Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "Q-QC": {
          "displayName": "Exit",
          "destination": "Plaza-Q"
        },
        "Q-QC-QC1-999": {
          "displayName": "South",
          "destination": "Q-QC-QC1-999"
        }
      }
    },
    "Q-QM-QM1-695": {
      "firstVisit": true,
      "displayName": "Human anatomy",
      "description": "Description for \u201cHuman anatomy Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Q-QM"
        }
      }
    },
    "Q-QM": {
      "firstVisit": true,
      "displayName": "\u201cHuman anatomy Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cHuman anatomy Room\u201d\n[  Exit   ] Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "Q-QM": {
          "displayName": "Exit",
          "destination": "Plaza-Q"
        },
        "Q-QM-QM1-695": {
          "displayName": "South",
          "destination": "Q-QM-QM1-695"
        }
      }
    },
    "Plaza-R": {
      "firstVisit": true,
      "displayName": "Medicine Plaza",
      "description": "You are in an plaza surrounded by 17 buildings conforming Medicine.\nThe buildings are accessible via their classification code, visible above the main door:\n\n[ R-RX  ] (1 story) \u201cHomeopathy Building\u201d\n[ R-RA  ] (1 story) \u201cPublic aspects of medicine Building\u201d\n[ R-RD  ] (1 story) \u201cSurgery Building\u201d\n[ R-RE  ] (1 story) \u201cOphthalmology Building\u201d\n[ R-RC  ] (1 story) \u201cInternal medicine Building\u201d\n[ R-RG  ] (1 story) \u201cGynecology and obstetrics Building\u201d\n[ R-RK  ] (1 story) \u201cDentistry Building\u201d\n[ R-RJ  ] (1 story) \u201cPediatrics Building\u201d\n[ R-RL  ] (1 story) \u201cDermatology Building\u201d\n[ R-RS  ] (1 story) \u201cPharmacy and materia medica Building\u201d\n[ R-RM  ] (1 story) \u201cTherapeutics.    Pharmacology Building\u201d\n[ R-R   ] (1 story) \u201cMedicine (General) Building\u201d\n[ R-RB  ] (1 story) \u201cPathology Building\u201d\n[ R-RF  ] (1 story) \u201cOtorhinolaryngology Building\u201d\n[ R-RZ  ] (1 story) \u201cOther systems of medicine Building\u201d\n[ R-RT  ] (1 story) \u201cNursing Building\u201d\n[ R-RV  ] (1 story) \u201cBotanic, Thomsonian, and eclectic medicine Building\u201d\n[ Main  ] Main Library Grounds",
      "interactables": {},
      "items": {},
      "exits": {
        "R-RX": {
          "displayName": "R-RX",
          "destination": "R-RX"
        },
        "R-RA": {
          "displayName": "R-RA",
          "destination": "R-RA"
        },
        "R-RD": {
          "displayName": "R-RD",
          "destination": "R-RD"
        },
        "R-RE": {
          "displayName": "R-RE",
          "destination": "R-RE"
        },
        "R-RC": {
          "displayName": "R-RC",
          "destination": "R-RC"
        },
        "R-RG": {
          "displayName": "R-RG",
          "destination": "R-RG"
        },
        "R-RK": {
          "displayName": "R-RK",
          "destination": "R-RK"
        },
        "R-RJ": {
          "displayName": "R-RJ",
          "destination": "R-RJ"
        },
        "R-RL": {
          "displayName": "R-RL",
          "destination": "R-RL"
        },
        "R-RS": {
          "displayName": "R-RS",
          "destination": "R-RS"
        },
        "R-RM": {
          "displayName": "R-RM",
          "destination": "R-RM"
        },
        "R-R": {
          "displayName": "R-R",
          "destination": "R-R"
        },
        "R-RB": {
          "displayName": "R-RB",
          "destination": "R-RB"
        },
        "R-RF": {
          "displayName": "R-RF",
          "destination": "R-RF"
        },
        "R-RZ": {
          "displayName": "R-RZ",
          "destination": "R-RZ"
        },
        "R-RT": {
          "displayName": "R-RT",
          "destination": "R-RT"
        },
        "R-RV": {
          "displayName": "R-RV",
          "destination": "R-RV"
        },
        "main": {
          "displayName": "Main",
          "destination": "MAIN"
        }
      }
    },
    "R-RX-RX1-681": {
      "firstVisit": true,
      "displayName": "Homeopathy",
      "description": "Description for \u201cHomeopathy Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "R-RX"
        }
      }
    },
    "R-RX": {
      "firstVisit": true,
      "displayName": "\u201cHomeopathy Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cHomeopathy Room\u201d\n[  Exit   ] Medicine Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "R-RX": {
          "displayName": "Exit",
          "destination": "Plaza-R"
        },
        "R-RX-RX1-681": {
          "displayName": "South",
          "destination": "R-RX-RX1-681"
        }
      }
    },
    "R-RA-RA1-1270": {
      "firstVisit": true,
      "displayName": "Public aspects of medicine",
      "description": "Description for \u201cPublic aspects of medicine Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "R-RA"
        }
      }
    },
    "R-RA-RA1-418.5": {
      "firstVisit": true,
      "displayName": "Medicine and the state",
      "description": "Description for \u201cMedicine and the state Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "R-RA"
        }
      }
    },
    "R-RA": {
      "firstVisit": true,
      "displayName": "\u201cPublic aspects of medicine Building\u201d Main Lobby",
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n\n[  South  ] \u201cPublic aspects of medicine Room\u201d\n[  North  ] \u201cMedicine and the state Room\u201d\n[  Exit   ] Medicine Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "R-RA": {
          "displayName": "Exit",
          "destination": "Plaza-R"
        },
        "R-RA-RA1-1270": {
          "displayName": "South",
          "destination": "R-RA-RA1-1270"
        },
        "R-RA-RA1-418.5": {
          "displayName": "North",
          "destination": "R-RA-RA1-418.5"
        }
      }
    },
    "R-RD-RD1-811": {
      "firstVisit": true,
      "displayName": "Surgery",
      "description": "Description for \u201cSurgery Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "R-RD"
        }
      }
    },
    "R-RD": {
      "firstVisit": true,
      "displayName": "\u201cSurgery Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cSurgery Room\u201d\n[  Exit   ] Medicine Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "R-RD": {
          "displayName": "Exit",
          "destination": "Plaza-R"
        },
        "R-RD-RD1-811": {
          "displayName": "South",
          "destination": "R-RD-RD1-811"
        }
      }
    },
    "R-RE-RE1-994": {
      "firstVisit": true,
      "displayName": "Ophthalmology",
      "description": "Description for \u201cOphthalmology Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "R-RE"
        }
      }
    },
    "R-RE": {
      "firstVisit": true,
      "displayName": "\u201cOphthalmology Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cOphthalmology Room\u201d\n[  Exit   ] Medicine Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "R-RE": {
          "displayName": "Exit",
          "destination": "Plaza-R"
        },
        "R-RE-RE1-994": {
          "displayName": "South",
          "destination": "R-RE-RE1-994"
        }
      }
    },
    "R-RC-RC31-1245": {
      "firstVisit": true,
      "displayName": "Internal medicine",
      "description": "Description for \u201cInternal medicine Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "R-RC"
        }
      }
    },
    "R-RC": {
      "firstVisit": true,
      "displayName": "\u201cInternal medicine Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cInternal medicine Room\u201d\n[  Exit   ] Medicine Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "R-RC": {
          "displayName": "Exit",
          "destination": "Plaza-R"
        },
        "R-RC-RC31-1245": {
          "displayName": "South",
          "destination": "R-RC-RC31-1245"
        }
      }
    },
    "R-RG-RG1-991": {
      "firstVisit": true,
      "displayName": "Gynecology and obstetrics",
      "description": "Description for \u201cGynecology and obstetrics Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "R-RG"
        }
      }
    },
    "R-RG": {
      "firstVisit": true,
      "displayName": "\u201cGynecology and obstetrics Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cGynecology and obstetrics Room\u201d\n[  Exit   ] Medicine Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "R-RG": {
          "displayName": "Exit",
          "destination": "Plaza-R"
        },
        "R-RG-RG1-991": {
          "displayName": "South",
          "destination": "R-RG-RG1-991"
        }
      }
    },
    "R-RK-RK1-715": {
      "firstVisit": true,
      "displayName": "Dentistry",
      "description": "Description for \u201cDentistry Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "R-RK"
        }
      }
    },
    "R-RK": {
      "firstVisit": true,
      "displayName": "\u201cDentistry Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cDentistry Room\u201d\n[  Exit   ] Medicine Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "R-RK": {
          "displayName": "Exit",
          "destination": "Plaza-R"
        },
        "R-RK-RK1-715": {
          "displayName": "South",
          "destination": "R-RK-RK1-715"
        }
      }
    },
    "R-RJ-RJ1-570": {
      "firstVisit": true,
      "displayName": "Pediatrics",
      "description": "Description for \u201cPediatrics Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "R-RJ"
        }
      }
    },
    "R-RJ": {
      "firstVisit": true,
      "displayName": "\u201cPediatrics Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cPediatrics Room\u201d\n[  Exit   ] Medicine Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "R-RJ": {
          "displayName": "Exit",
          "destination": "Plaza-R"
        },
        "R-RJ-RJ1-570": {
          "displayName": "South",
          "destination": "R-RJ-RJ1-570"
        }
      }
    },
    "R-RL-RL1-803": {
      "firstVisit": true,
      "displayName": "Dermatology",
      "description": "Description for \u201cDermatology Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "R-RL"
        }
      }
    },
    "R-RL": {
      "firstVisit": true,
      "displayName": "\u201cDermatology Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cDermatology Room\u201d\n[  Exit   ] Medicine Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "R-RL": {
          "displayName": "Exit",
          "destination": "Plaza-R"
        },
        "R-RL-RL1-803": {
          "displayName": "South",
          "destination": "R-RL-RL1-803"
        }
      }
    },
    "R-RS-RS1-441": {
      "firstVisit": true,
      "displayName": "Pharmacy and materia medica",
      "description": "Description for \u201cPharmacy and materia medica Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "R-RS"
        }
      }
    },
    "R-RS": {
      "firstVisit": true,
      "displayName": "\u201cPharmacy and materia medica Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cPharmacy and materia medica Room\u201d\n[  Exit   ] Medicine Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "R-RS": {
          "displayName": "Exit",
          "destination": "Plaza-R"
        },
        "R-RS-RS1-441": {
          "displayName": "South",
          "destination": "R-RS-RS1-441"
        }
      }
    },
    "R-RM-RM1-950": {
      "firstVisit": true,
      "displayName": "Therapeutics.    Pharmacology",
      "description": "Description for \u201cTherapeutics.    Pharmacology Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "R-RM"
        }
      }
    },
    "R-RM": {
      "firstVisit": true,
      "displayName": "\u201cTherapeutics.    Pharmacology Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cTherapeutics.    Pharmacology Room\u201d\n[  Exit   ] Medicine Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "R-RM": {
          "displayName": "Exit",
          "destination": "Plaza-R"
        },
        "R-RM-RM1-950": {
          "displayName": "South",
          "destination": "R-RM-RM1-950"
        }
      }
    },
    "R-R-R5-920": {
      "firstVisit": true,
      "displayName": "Medicine (General)",
      "description": "Description for \u201cMedicine (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "R-R"
        }
      }
    },
    "R-R": {
      "firstVisit": true,
      "displayName": "\u201cMedicine (General) Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cMedicine (General) Room\u201d\n[  Exit   ] Medicine Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "R-R": {
          "displayName": "Exit",
          "destination": "Plaza-R"
        },
        "R-R-R5-920": {
          "displayName": "South",
          "destination": "R-R-R5-920"
        }
      }
    },
    "R-RB-RB1-214": {
      "firstVisit": true,
      "displayName": "Pathology",
      "description": "Description for \u201cPathology Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "R-RB"
        }
      }
    },
    "R-RB": {
      "firstVisit": true,
      "displayName": "\u201cPathology Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cPathology Room\u201d\n[  Exit   ] Medicine Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "R-RB": {
          "displayName": "Exit",
          "destination": "Plaza-R"
        },
        "R-RB-RB1-214": {
          "displayName": "South",
          "destination": "R-RB-RB1-214"
        }
      }
    },
    "R-RF-RF1-547": {
      "firstVisit": true,
      "displayName": "Otorhinolaryngology",
      "description": "Description for \u201cOtorhinolaryngology Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "R-RF"
        }
      }
    },
    "R-RF": {
      "firstVisit": true,
      "displayName": "\u201cOtorhinolaryngology Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cOtorhinolaryngology Room\u201d\n[  Exit   ] Medicine Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "R-RF": {
          "displayName": "Exit",
          "destination": "Plaza-R"
        },
        "R-RF-RF1-547": {
          "displayName": "South",
          "destination": "R-RF-RF1-547"
        }
      }
    },
    "R-RZ-RZ201-999": {
      "firstVisit": true,
      "displayName": "Other systems of medicine",
      "description": "Description for \u201cOther systems of medicine Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "R-RZ"
        }
      }
    },
    "R-RZ": {
      "firstVisit": true,
      "displayName": "\u201cOther systems of medicine Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cOther systems of medicine Room\u201d\n[  Exit   ] Medicine Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "R-RZ": {
          "displayName": "Exit",
          "destination": "Plaza-R"
        },
        "R-RZ-RZ201-999": {
          "displayName": "South",
          "destination": "R-RZ-RZ201-999"
        }
      }
    },
    "R-RT-RT1-120": {
      "firstVisit": true,
      "displayName": "Nursing",
      "description": "Description for \u201cNursing Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "R-RT"
        }
      }
    },
    "R-RT": {
      "firstVisit": true,
      "displayName": "\u201cNursing Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cNursing Room\u201d\n[  Exit   ] Medicine Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "R-RT": {
          "displayName": "Exit",
          "destination": "Plaza-R"
        },
        "R-RT-RT1-120": {
          "displayName": "South",
          "destination": "R-RT-RT1-120"
        }
      }
    },
    "R-RV-RV1-431": {
      "firstVisit": true,
      "displayName": "Botanic, Thomsonian, and eclectic medicine",
      "description": "Description for \u201cBotanic, Thomsonian, and eclectic medicine Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "R-RV"
        }
      }
    },
    "R-RV": {
      "firstVisit": true,
      "displayName": "\u201cBotanic, Thomsonian, and eclectic medicine Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cBotanic, Thomsonian, and eclectic medicine Room\u201d\n[  Exit   ] Medicine Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "R-RV": {
          "displayName": "Exit",
          "destination": "Plaza-R"
        },
        "R-RV-RV1-431": {
          "displayName": "South",
          "destination": "R-RV-RV1-431"
        }
      }
    },
    "Plaza-S": {
      "firstVisit": true,
      "displayName": "Agriculture Plaza",
      "description": "You are in an plaza surrounded by 6 buildings conforming Agriculture.\nThe buildings are accessible via their classification code, visible above the main door:\n\n[ S-SF  ] (1 story) \u201cAnimal culture Building\u201d\n[ S-S   ] (1 story) \u201cAgriculture (General) Building\u201d\n[ S-SH  ] (1 story) \u201cAquaculture.    Fisheries.    Angling Building\u201d\n[ S-SB  ] (1 story) \u201cPlant culture Building\u201d\n[ S-SK  ] (1 story) \u201cHunting sports Building\u201d\n[ S-SD  ] (1 story) \u201cForestry Building\u201d\n[ Main  ] Main Library Grounds",
      "interactables": {},
      "items": {},
      "exits": {
        "S-SF": {
          "displayName": "S-SF",
          "destination": "S-SF"
        },
        "S-S": {
          "displayName": "S-S",
          "destination": "S-S"
        },
        "S-SH": {
          "displayName": "S-SH",
          "destination": "S-SH"
        },
        "S-SB": {
          "displayName": "S-SB",
          "destination": "S-SB"
        },
        "S-SK": {
          "displayName": "S-SK",
          "destination": "S-SK"
        },
        "S-SD": {
          "displayName": "S-SD",
          "destination": "S-SD"
        },
        "main": {
          "displayName": "Main",
          "destination": "MAIN"
        }
      }
    },
    "S-SF-SF1-1100": {
      "firstVisit": true,
      "displayName": "Animal culture",
      "description": "Description for \u201cAnimal culture Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "S-SF"
        }
      }
    },
    "S-SF": {
      "firstVisit": true,
      "displayName": "\u201cAnimal culture Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cAnimal culture Room\u201d\n[  Exit   ] Agriculture Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "S-SF": {
          "displayName": "Exit",
          "destination": "Plaza-S"
        },
        "S-SF-SF1-1100": {
          "displayName": "South",
          "destination": "S-SF-SF1-1100"
        }
      }
    },
    "S-S-S1-972": {
      "firstVisit": true,
      "displayName": "Agriculture (General)",
      "description": "Description for \u201cAgriculture (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "S-S"
        }
      }
    },
    "S-S": {
      "firstVisit": true,
      "displayName": "\u201cAgriculture (General) Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cAgriculture (General) Room\u201d\n[  Exit   ] Agriculture Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "S-S": {
          "displayName": "Exit",
          "destination": "Plaza-S"
        },
        "S-S-S1-972": {
          "displayName": "South",
          "destination": "S-S-S1-972"
        }
      }
    },
    "S-SH-SH1-691": {
      "firstVisit": true,
      "displayName": "Aquaculture.    Fisheries.    Angling",
      "description": "Description for \u201cAquaculture.    Fisheries.    Angling Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "S-SH"
        }
      }
    },
    "S-SH": {
      "firstVisit": true,
      "displayName": "\u201cAquaculture.    Fisheries.    Angling Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cAquaculture.    Fisheries.    Angling Room\u201d\n[  Exit   ] Agriculture Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "S-SH": {
          "displayName": "Exit",
          "destination": "Plaza-S"
        },
        "S-SH-SH1-691": {
          "displayName": "South",
          "destination": "S-SH-SH1-691"
        }
      }
    },
    "S-SB-SB1-1110": {
      "firstVisit": true,
      "displayName": "Plant culture",
      "description": "Description for \u201cPlant culture Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "S-SB"
        }
      }
    },
    "S-SB": {
      "firstVisit": true,
      "displayName": "\u201cPlant culture Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cPlant culture Room\u201d\n[  Exit   ] Agriculture Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "S-SB": {
          "displayName": "Exit",
          "destination": "Plaza-S"
        },
        "S-SB-SB1-1110": {
          "displayName": "South",
          "destination": "S-SB-SB1-1110"
        }
      }
    },
    "S-SK-SK1-664": {
      "firstVisit": true,
      "displayName": "Hunting sports",
      "description": "Description for \u201cHunting sports Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "S-SK"
        }
      }
    },
    "S-SK": {
      "firstVisit": true,
      "displayName": "\u201cHunting sports Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cHunting sports Room\u201d\n[  Exit   ] Agriculture Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "S-SK": {
          "displayName": "Exit",
          "destination": "Plaza-S"
        },
        "S-SK-SK1-664": {
          "displayName": "South",
          "destination": "S-SK-SK1-664"
        }
      }
    },
    "S-SD-SD1-669.5": {
      "firstVisit": true,
      "displayName": "Forestry",
      "description": "Description for \u201cForestry Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "S-SD"
        }
      }
    },
    "S-SD": {
      "firstVisit": true,
      "displayName": "\u201cForestry Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cForestry Room\u201d\n[  Exit   ] Agriculture Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "S-SD": {
          "displayName": "Exit",
          "destination": "Plaza-S"
        },
        "S-SD-SD1-669.5": {
          "displayName": "South",
          "destination": "S-SD-SD1-669.5"
        }
      }
    },
    "Plaza-T": {
      "firstVisit": true,
      "displayName": "Technology Plaza",
      "description": "You are in an plaza surrounded by 17 buildings conforming Technology.\nThe buildings are accessible via their classification code, visible above the main door:\n\n[ T-TN  ] (1 story) \u201cMining engineering.    Metallurgy Building\u201d\n[ T-TR  ] (1 story) \u201cPhotography Building\u201d\n[ T-TC  ] (1 story) \u201cHydraulic engineering Building\u201d\n[ T-TD  ] (1 story) \u201cEnvironmental technology.    Sanitary engineering Building\u201d\n[ T-TX  ] (1 story) \u201cHome economics Building\u201d\n[ T-TP  ] (1 story) \u201cChemical technology Building\u201d\n[ T-TK  ] (1 story) \u201cElectrical engineering.    Electronics.    Nuclear Building\u201d\n[ T-TA  ] (1 story) \u201cEngineering (General).    Civil engineering (General) Building\u201d\n[ T-TS  ] (1 story) \u201cManufactures Building\u201d\n[ T-TJ  ] (1 story) \u201cMechanical engineering and machinery Building\u201d\n[ T-TT  ] (1 story) \u201cHandicrafts.    Arts and crafts Building\u201d\n[ T-T   ] (1 story) \u201cTechnology (General) Building\u201d\n[ T-TH  ] (1 story) \u201cBuilding construction Building\u201d\n[ T-TF  ] (1 story) \u201cRailroad engineering and operation Building\u201d\n[ T-TL  ] (1 story) \u201cMotor vehicles.    Aeronautics.    Astronautics Building\u201d\n[ T-TG  ] (1 story) \u201cBridge engineering Building\u201d\n[ T-TE  ] (1 story) \u201cHighway engineering.    Roads and pavements Building\u201d\n[ Main  ] Main Library Grounds",
      "interactables": {},
      "items": {},
      "exits": {
        "T-TN": {
          "displayName": "T-TN",
          "destination": "T-TN"
        },
        "T-TR": {
          "displayName": "T-TR",
          "destination": "T-TR"
        },
        "T-TC": {
          "displayName": "T-TC",
          "destination": "T-TC"
        },
        "T-TD": {
          "displayName": "T-TD",
          "destination": "T-TD"
        },
        "T-TX": {
          "displayName": "T-TX",
          "destination": "T-TX"
        },
        "T-TP": {
          "displayName": "T-TP",
          "destination": "T-TP"
        },
        "T-TK": {
          "displayName": "T-TK",
          "destination": "T-TK"
        },
        "T-TA": {
          "displayName": "T-TA",
          "destination": "T-TA"
        },
        "T-TS": {
          "displayName": "T-TS",
          "destination": "T-TS"
        },
        "T-TJ": {
          "displayName": "T-TJ",
          "destination": "T-TJ"
        },
        "T-TT": {
          "displayName": "T-TT",
          "destination": "T-TT"
        },
        "T-T": {
          "displayName": "T-T",
          "destination": "T-T"
        },
        "T-TH": {
          "displayName": "T-TH",
          "destination": "T-TH"
        },
        "T-TF": {
          "displayName": "T-TF",
          "destination": "T-TF"
        },
        "T-TL": {
          "displayName": "T-TL",
          "destination": "T-TL"
        },
        "T-TG": {
          "displayName": "T-TG",
          "destination": "T-TG"
        },
        "T-TE": {
          "displayName": "T-TE",
          "destination": "T-TE"
        },
        "main": {
          "displayName": "Main",
          "destination": "MAIN"
        }
      }
    },
    "T-TN-TN1-997": {
      "firstVisit": true,
      "displayName": "Mining engineering.    Metallurgy",
      "description": "Description for \u201cMining engineering.    Metallurgy Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "T-TN"
        }
      }
    },
    "T-TN": {
      "firstVisit": true,
      "displayName": "\u201cMining engineering.    Metallurgy Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cMining engineering.    Metallurgy Room\u201d\n[  Exit   ] Technology Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "T-TN": {
          "displayName": "Exit",
          "destination": "Plaza-T"
        },
        "T-TN-TN1-997": {
          "displayName": "South",
          "destination": "T-TN-TN1-997"
        }
      }
    },
    "T-TR-TR1-1050": {
      "firstVisit": true,
      "displayName": "Photography",
      "description": "Description for \u201cPhotography Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "T-TR"
        }
      }
    },
    "T-TR": {
      "firstVisit": true,
      "displayName": "\u201cPhotography Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cPhotography Room\u201d\n[  Exit   ] Technology Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "T-TR": {
          "displayName": "Exit",
          "destination": "Plaza-T"
        },
        "T-TR-TR1-1050": {
          "displayName": "South",
          "destination": "T-TR-TR1-1050"
        }
      }
    },
    "T-TC-TC1-978": {
      "firstVisit": true,
      "displayName": "Hydraulic engineering",
      "description": "Description for \u201cHydraulic engineering Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "T-TC"
        }
      }
    },
    "T-TC-TC1501-1800": {
      "firstVisit": true,
      "displayName": "Ocean engineering",
      "description": "Description for \u201cOcean engineering Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "T-TC"
        }
      }
    },
    "T-TC": {
      "firstVisit": true,
      "displayName": "\u201cHydraulic engineering Building\u201d Main Lobby",
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n\n[  South  ] \u201cHydraulic engineering Room\u201d\n[  North  ] \u201cOcean engineering Room\u201d\n[  Exit   ] Technology Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "T-TC": {
          "displayName": "Exit",
          "destination": "Plaza-T"
        },
        "T-TC-TC1-978": {
          "displayName": "South",
          "destination": "T-TC-TC1-978"
        },
        "T-TC-TC1501-1800": {
          "displayName": "North",
          "destination": "T-TC-TC1501-1800"
        }
      }
    },
    "T-TD-TD1-1066": {
      "firstVisit": true,
      "displayName": "Environmental technology.    Sanitary engineering",
      "description": "Description for \u201cEnvironmental technology.    Sanitary engineering Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "T-TD"
        }
      }
    },
    "T-TD": {
      "firstVisit": true,
      "displayName": "\u201cEnvironmental technology.    Sanitary engineering Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cEnvironmental technology.    Sanitary engineering Room\u201d\n[  Exit   ] Technology Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "T-TD": {
          "displayName": "Exit",
          "destination": "Plaza-T"
        },
        "T-TD-TD1-1066": {
          "displayName": "South",
          "destination": "T-TD-TD1-1066"
        }
      }
    },
    "T-TX-TX1-1110": {
      "firstVisit": true,
      "displayName": "Home economics",
      "description": "Description for \u201cHome economics Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "T-TX"
        }
      }
    },
    "T-TX": {
      "firstVisit": true,
      "displayName": "\u201cHome economics Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cHome economics Room\u201d\n[  Exit   ] Technology Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "T-TX": {
          "displayName": "Exit",
          "destination": "Plaza-T"
        },
        "T-TX-TX1-1110": {
          "displayName": "South",
          "destination": "T-TX-TX1-1110"
        }
      }
    },
    "T-TP-TP1-1185": {
      "firstVisit": true,
      "displayName": "Chemical technology",
      "description": "Description for \u201cChemical technology Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "T-TP"
        }
      }
    },
    "T-TP": {
      "firstVisit": true,
      "displayName": "\u201cChemical technology Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cChemical technology Room\u201d\n[  Exit   ] Technology Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "T-TP": {
          "displayName": "Exit",
          "destination": "Plaza-T"
        },
        "T-TP-TP1-1185": {
          "displayName": "South",
          "destination": "T-TP-TP1-1185"
        }
      }
    },
    "T-TK-TK1-9971": {
      "firstVisit": true,
      "displayName": "Electrical engineering.    Electronics.    Nuclear",
      "description": "Description for \u201cElectrical engineering.    Electronics.    Nuclear Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "T-TK"
        }
      }
    },
    "T-TK": {
      "firstVisit": true,
      "displayName": "\u201cElectrical engineering.    Electronics.    Nuclear Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cElectrical engineering.    Electronics.    Nuclear Room\u201d\n[  Exit   ] Technology Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "T-TK": {
          "displayName": "Exit",
          "destination": "Plaza-T"
        },
        "T-TK-TK1-9971": {
          "displayName": "South",
          "destination": "T-TK-TK1-9971"
        }
      }
    },
    "T-TA-TA1-2040": {
      "firstVisit": true,
      "displayName": "Engineering (General).    Civil engineering (General)",
      "description": "Description for \u201cEngineering (General).    Civil engineering (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "T-TA"
        }
      }
    },
    "T-TA": {
      "firstVisit": true,
      "displayName": "\u201cEngineering (General).    Civil engineering (General) Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cEngineering (General).    Civil engineering (General) Room\u201d\n[  Exit   ] Technology Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "T-TA": {
          "displayName": "Exit",
          "destination": "Plaza-T"
        },
        "T-TA-TA1-2040": {
          "displayName": "South",
          "destination": "T-TA-TA1-2040"
        }
      }
    },
    "T-TS-TS1-2301": {
      "firstVisit": true,
      "displayName": "Manufactures",
      "description": "Description for \u201cManufactures Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "T-TS"
        }
      }
    },
    "T-TS": {
      "firstVisit": true,
      "displayName": "\u201cManufactures Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cManufactures Room\u201d\n[  Exit   ] Technology Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "T-TS": {
          "displayName": "Exit",
          "destination": "Plaza-T"
        },
        "T-TS-TS1-2301": {
          "displayName": "South",
          "destination": "T-TS-TS1-2301"
        }
      }
    },
    "T-TJ-TJ1-1570": {
      "firstVisit": true,
      "displayName": "Mechanical engineering and machinery",
      "description": "Description for \u201cMechanical engineering and machinery Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "T-TJ"
        }
      }
    },
    "T-TJ": {
      "firstVisit": true,
      "displayName": "\u201cMechanical engineering and machinery Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cMechanical engineering and machinery Room\u201d\n[  Exit   ] Technology Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "T-TJ": {
          "displayName": "Exit",
          "destination": "Plaza-T"
        },
        "T-TJ-TJ1-1570": {
          "displayName": "South",
          "destination": "T-TJ-TJ1-1570"
        }
      }
    },
    "T-TT-TT1-999": {
      "firstVisit": true,
      "displayName": "Handicrafts.    Arts and crafts",
      "description": "Description for \u201cHandicrafts.    Arts and crafts Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "T-TT"
        }
      }
    },
    "T-TT": {
      "firstVisit": true,
      "displayName": "\u201cHandicrafts.    Arts and crafts Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cHandicrafts.    Arts and crafts Room\u201d\n[  Exit   ] Technology Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "T-TT": {
          "displayName": "Exit",
          "destination": "Plaza-T"
        },
        "T-TT-TT1-999": {
          "displayName": "South",
          "destination": "T-TT-TT1-999"
        }
      }
    },
    "T-T-T1-995": {
      "firstVisit": true,
      "displayName": "Technology (General)",
      "description": "Description for \u201cTechnology (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "T-T"
        }
      }
    },
    "T-T": {
      "firstVisit": true,
      "displayName": "\u201cTechnology (General) Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cTechnology (General) Room\u201d\n[  Exit   ] Technology Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "T-T": {
          "displayName": "Exit",
          "destination": "Plaza-T"
        },
        "T-T-T1-995": {
          "displayName": "South",
          "destination": "T-T-T1-995"
        }
      }
    },
    "T-TH-TH1-9745": {
      "firstVisit": true,
      "displayName": "Building construction",
      "description": "Description for \u201cBuilding construction Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "T-TH"
        }
      }
    },
    "T-TH": {
      "firstVisit": true,
      "displayName": "\u201cBuilding construction Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cBuilding construction Room\u201d\n[  Exit   ] Technology Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "T-TH": {
          "displayName": "Exit",
          "destination": "Plaza-T"
        },
        "T-TH-TH1-9745": {
          "displayName": "South",
          "destination": "T-TH-TH1-9745"
        }
      }
    },
    "T-TF-TF1-1620": {
      "firstVisit": true,
      "displayName": "Railroad engineering and operation",
      "description": "Description for \u201cRailroad engineering and operation Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "T-TF"
        }
      }
    },
    "T-TF": {
      "firstVisit": true,
      "displayName": "\u201cRailroad engineering and operation Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cRailroad engineering and operation Room\u201d\n[  Exit   ] Technology Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "T-TF": {
          "displayName": "Exit",
          "destination": "Plaza-T"
        },
        "T-TF-TF1-1620": {
          "displayName": "South",
          "destination": "T-TF-TF1-1620"
        }
      }
    },
    "T-TL-TL1-4050": {
      "firstVisit": true,
      "displayName": "Motor vehicles.    Aeronautics.    Astronautics",
      "description": "Description for \u201cMotor vehicles.    Aeronautics.    Astronautics Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "T-TL"
        }
      }
    },
    "T-TL": {
      "firstVisit": true,
      "displayName": "\u201cMotor vehicles.    Aeronautics.    Astronautics Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cMotor vehicles.    Aeronautics.    Astronautics Room\u201d\n[  Exit   ] Technology Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "T-TL": {
          "displayName": "Exit",
          "destination": "Plaza-T"
        },
        "T-TL-TL1-4050": {
          "displayName": "South",
          "destination": "T-TL-TL1-4050"
        }
      }
    },
    "T-TG-TG1-470": {
      "firstVisit": true,
      "displayName": "Bridge engineering",
      "description": "Description for \u201cBridge engineering Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "T-TG"
        }
      }
    },
    "T-TG": {
      "firstVisit": true,
      "displayName": "\u201cBridge engineering Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cBridge engineering Room\u201d\n[  Exit   ] Technology Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "T-TG": {
          "displayName": "Exit",
          "destination": "Plaza-T"
        },
        "T-TG-TG1-470": {
          "displayName": "South",
          "destination": "T-TG-TG1-470"
        }
      }
    },
    "T-TE-TE1-450": {
      "firstVisit": true,
      "displayName": "Highway engineering.    Roads and pavements",
      "description": "Description for \u201cHighway engineering.    Roads and pavements Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "T-TE"
        }
      }
    },
    "T-TE": {
      "firstVisit": true,
      "displayName": "\u201cHighway engineering.    Roads and pavements Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cHighway engineering.    Roads and pavements Room\u201d\n[  Exit   ] Technology Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "T-TE": {
          "displayName": "Exit",
          "destination": "Plaza-T"
        },
        "T-TE-TE1-450": {
          "displayName": "South",
          "destination": "T-TE-TE1-450"
        }
      }
    },
    "Plaza-U": {
      "firstVisit": true,
      "displayName": "Military Science Plaza",
      "description": "You are in an plaza surrounded by 9 buildings conforming Military Science.\nThe buildings are accessible via their classification code, visible above the main door:\n\n[ U-U   ] (1 story) \u201cMilitary science (General) Building\u201d\n[ U-UG  ] (1 story) \u201cAir forces.    Air warfare Building\u201d\n[ U-UA  ] (1 story) \u201cArmies: Organization, distribution, military situation Building\u201d\n[ U-UB  ] (1 story) \u201cMilitary administration Building\u201d\n[ U-UD  ] (1 story) \u201cInfantry Building\u201d\n[ U-UF  ] (1 story) \u201cArtillery Building\u201d\n[ U-UC  ] (1 story) \u201cMaintenance and transportation Building\u201d\n[ U-UH  ] (1 story) \u201cOther services Building\u201d\n[ U-UE  ] (1 story) \u201cCavalry.    Armor Building\u201d\n[ Main  ] Main Library Grounds",
      "interactables": {},
      "items": {},
      "exits": {
        "U-U": {
          "displayName": "U-U",
          "destination": "U-U"
        },
        "U-UG": {
          "displayName": "U-UG",
          "destination": "U-UG"
        },
        "U-UA": {
          "displayName": "U-UA",
          "destination": "U-UA"
        },
        "U-UB": {
          "displayName": "U-UB",
          "destination": "U-UB"
        },
        "U-UD": {
          "displayName": "U-UD",
          "destination": "U-UD"
        },
        "U-UF": {
          "displayName": "U-UF",
          "destination": "U-UF"
        },
        "U-UC": {
          "displayName": "U-UC",
          "destination": "U-UC"
        },
        "U-UH": {
          "displayName": "U-UH",
          "destination": "U-UH"
        },
        "U-UE": {
          "displayName": "U-UE",
          "destination": "U-UE"
        },
        "main": {
          "displayName": "Main",
          "destination": "MAIN"
        }
      }
    },
    "U-U-U1-900": {
      "firstVisit": true,
      "displayName": "Military science (General)",
      "description": "Description for \u201cMilitary science (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "U-U"
        }
      }
    },
    "U-U": {
      "firstVisit": true,
      "displayName": "\u201cMilitary science (General) Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cMilitary science (General) Room\u201d\n[  Exit   ] Military Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "U-U": {
          "displayName": "Exit",
          "destination": "Plaza-U"
        },
        "U-U-U1-900": {
          "displayName": "South",
          "destination": "U-U-U1-900"
        }
      }
    },
    "U-UG-UG1-620": {
      "firstVisit": true,
      "displayName": "Military engineering",
      "description": "Description for \u201cMilitary engineering Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "U-UG"
        }
      }
    },
    "U-UG-UG622-1435": {
      "firstVisit": true,
      "displayName": "Air forces.    Air warfare",
      "description": "Description for \u201cAir forces.    Air warfare Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "U-UG"
        }
      }
    },
    "U-UG-UG1500-1530": {
      "firstVisit": true,
      "displayName": "Military astronautics.    Space warfare.    Space surveillance",
      "description": "Description for \u201cMilitary astronautics.    Space warfare.    Space surveillance Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "U-UG"
        }
      }
    },
    "U-UG": {
      "firstVisit": true,
      "displayName": "\u201cAir forces.    Air warfare Building\u201d Main Lobby",
      "description": "There are 3 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n\n[  South  ] \u201cMilitary engineering Room\u201d\n[  North  ] \u201cAir forces.    Air warfare Room\u201d\n[  East   ] \u201cMilitary astronautics.    Space warfare.    Space surveillance Room\u201d\n[  Exit   ] Military Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "U-UG": {
          "displayName": "Exit",
          "destination": "Plaza-U"
        },
        "U-UG-UG1-620": {
          "displayName": "South",
          "destination": "U-UG-UG1-620"
        },
        "U-UG-UG622-1435": {
          "displayName": "North",
          "destination": "U-UG-UG622-1435"
        },
        "U-UG-UG1500-1530": {
          "displayName": "East",
          "destination": "U-UG-UG1500-1530"
        }
      }
    },
    "U-UA-UA10-997": {
      "firstVisit": true,
      "displayName": "Armies: Organization, distribution, military situation",
      "description": "Description for \u201cArmies: Organization, distribution, military situation Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "U-UA"
        }
      }
    },
    "U-UA": {
      "firstVisit": true,
      "displayName": "\u201cArmies: Organization, distribution, military situation Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cArmies: Organization, distribution, military situation Room\u201d\n[  Exit   ] Military Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "U-UA": {
          "displayName": "Exit",
          "destination": "Plaza-U"
        },
        "U-UA-UA10-997": {
          "displayName": "South",
          "destination": "U-UA-UA10-997"
        }
      }
    },
    "U-UB-UB1-900": {
      "firstVisit": true,
      "displayName": "Military administration",
      "description": "Description for \u201cMilitary administration Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "U-UB"
        }
      }
    },
    "U-UB": {
      "firstVisit": true,
      "displayName": "\u201cMilitary administration Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cMilitary administration Room\u201d\n[  Exit   ] Military Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "U-UB": {
          "displayName": "Exit",
          "destination": "Plaza-U"
        },
        "U-UB-UB1-900": {
          "displayName": "South",
          "destination": "U-UB-UB1-900"
        }
      }
    },
    "U-UD-UD1-495": {
      "firstVisit": true,
      "displayName": "Infantry",
      "description": "Description for \u201cInfantry Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "U-UD"
        }
      }
    },
    "U-UD": {
      "firstVisit": true,
      "displayName": "\u201cInfantry Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cInfantry Room\u201d\n[  Exit   ] Military Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "U-UD": {
          "displayName": "Exit",
          "destination": "Plaza-U"
        },
        "U-UD-UD1-495": {
          "displayName": "South",
          "destination": "U-UD-UD1-495"
        }
      }
    },
    "U-UF-UF1-910": {
      "firstVisit": true,
      "displayName": "Artillery",
      "description": "Description for \u201cArtillery Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "U-UF"
        }
      }
    },
    "U-UF": {
      "firstVisit": true,
      "displayName": "\u201cArtillery Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cArtillery Room\u201d\n[  Exit   ] Military Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "U-UF": {
          "displayName": "Exit",
          "destination": "Plaza-U"
        },
        "U-UF-UF1-910": {
          "displayName": "South",
          "destination": "U-UF-UF1-910"
        }
      }
    },
    "U-UC-UC10-780": {
      "firstVisit": true,
      "displayName": "Maintenance and transportation",
      "description": "Description for \u201cMaintenance and transportation Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "U-UC"
        }
      }
    },
    "U-UC": {
      "firstVisit": true,
      "displayName": "\u201cMaintenance and transportation Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cMaintenance and transportation Room\u201d\n[  Exit   ] Military Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "U-UC": {
          "displayName": "Exit",
          "destination": "Plaza-U"
        },
        "U-UC-UC10-780": {
          "displayName": "South",
          "destination": "U-UC-UC10-780"
        }
      }
    },
    "U-UH-UH20-910": {
      "firstVisit": true,
      "displayName": "Other services",
      "description": "Description for \u201cOther services Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "U-UH"
        }
      }
    },
    "U-UH": {
      "firstVisit": true,
      "displayName": "\u201cOther services Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cOther services Room\u201d\n[  Exit   ] Military Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "U-UH": {
          "displayName": "Exit",
          "destination": "Plaza-U"
        },
        "U-UH-UH20-910": {
          "displayName": "South",
          "destination": "U-UH-UH20-910"
        }
      }
    },
    "U-UE-UE1-500": {
      "firstVisit": true,
      "displayName": "Cavalry.    Armor",
      "description": "Description for \u201cCavalry.    Armor Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "U-UE"
        }
      }
    },
    "U-UE": {
      "firstVisit": true,
      "displayName": "\u201cCavalry.    Armor Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cCavalry.    Armor Room\u201d\n[  Exit   ] Military Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "U-UE": {
          "displayName": "Exit",
          "destination": "Plaza-U"
        },
        "U-UE-UE1-500": {
          "displayName": "South",
          "destination": "U-UE-UE1-500"
        }
      }
    },
    "Plaza-V": {
      "firstVisit": true,
      "displayName": "Naval Science Plaza",
      "description": "You are in an plaza surrounded by 10 buildings conforming Naval Science.\nThe buildings are accessible via their classification code, visible above the main door:\n\n[ V-VA  ] (1 story) \u201cNavies: Organization, distribution, naval situation Building\u201d\n[ V-VM  ] (1 story) \u201cNaval architecture.    Shipbuilding.    Marine engineering Building\u201d\n[ V-VK  ] (1 story) \u201cNavigation.    Merchant marine Building\u201d\n[ V-VG  ] (1 story) \u201cMinor services of navies Building\u201d\n[ V-V   ] (1 story) \u201cNaval science (General) Building\u201d\n[ V-VB  ] (1 story) \u201cNaval administration Building\u201d\n[ V-VE  ] (1 story) \u201cMarines Building\u201d\n[ V-VF  ] (1 story) \u201cNaval ordnance Building\u201d\n[ V-VC  ] (1 story) \u201cNaval maintenance Building\u201d\n[ V-VD  ] (1 story) \u201cNaval personnel Building\u201d\n[ Main  ] Main Library Grounds",
      "interactables": {},
      "items": {},
      "exits": {
        "V-VA": {
          "displayName": "V-VA",
          "destination": "V-VA"
        },
        "V-VM": {
          "displayName": "V-VM",
          "destination": "V-VM"
        },
        "V-VK": {
          "displayName": "V-VK",
          "destination": "V-VK"
        },
        "V-VG": {
          "displayName": "V-VG",
          "destination": "V-VG"
        },
        "V-V": {
          "displayName": "V-V",
          "destination": "V-V"
        },
        "V-VB": {
          "displayName": "V-VB",
          "destination": "V-VB"
        },
        "V-VE": {
          "displayName": "V-VE",
          "destination": "V-VE"
        },
        "V-VF": {
          "displayName": "V-VF",
          "destination": "V-VF"
        },
        "V-VC": {
          "displayName": "V-VC",
          "destination": "V-VC"
        },
        "V-VD": {
          "displayName": "V-VD",
          "destination": "V-VD"
        },
        "main": {
          "displayName": "Main",
          "destination": "MAIN"
        }
      }
    },
    "V-VA-VA10-750": {
      "firstVisit": true,
      "displayName": "Navies: Organization, distribution, naval situation",
      "description": "Description for \u201cNavies: Organization, distribution, naval situation Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "V-VA"
        }
      }
    },
    "V-VA": {
      "firstVisit": true,
      "displayName": "\u201cNavies: Organization, distribution, naval situation Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cNavies: Organization, distribution, naval situation Room\u201d\n[  Exit   ] Naval Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "V-VA": {
          "displayName": "Exit",
          "destination": "Plaza-V"
        },
        "V-VA-VA10-750": {
          "displayName": "South",
          "destination": "V-VA-VA10-750"
        }
      }
    },
    "V-VM-VM1-989": {
      "firstVisit": true,
      "displayName": "Naval architecture.    Shipbuilding.    Marine engineering",
      "description": "Description for \u201cNaval architecture.    Shipbuilding.    Marine engineering Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "V-VM"
        }
      }
    },
    "V-VM": {
      "firstVisit": true,
      "displayName": "\u201cNaval architecture.    Shipbuilding.    Marine engineering Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cNaval architecture.    Shipbuilding.    Marine engineering Room\u201d\n[  Exit   ] Naval Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "V-VM": {
          "displayName": "Exit",
          "destination": "Plaza-V"
        },
        "V-VM-VM1-989": {
          "displayName": "South",
          "destination": "V-VM-VM1-989"
        }
      }
    },
    "V-VK-VK1-1661": {
      "firstVisit": true,
      "displayName": "Navigation.    Merchant marine",
      "description": "Description for \u201cNavigation.    Merchant marine Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "V-VK"
        }
      }
    },
    "V-VK": {
      "firstVisit": true,
      "displayName": "\u201cNavigation.    Merchant marine Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cNavigation.    Merchant marine Room\u201d\n[  Exit   ] Naval Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "V-VK": {
          "displayName": "Exit",
          "destination": "Plaza-V"
        },
        "V-VK-VK1-1661": {
          "displayName": "South",
          "destination": "V-VK-VK1-1661"
        }
      }
    },
    "V-VG-VG20-2029": {
      "firstVisit": true,
      "displayName": "Minor services of navies",
      "description": "Description for \u201cMinor services of navies Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "V-VG"
        }
      }
    },
    "V-VG": {
      "firstVisit": true,
      "displayName": "\u201cMinor services of navies Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cMinor services of navies Room\u201d\n[  Exit   ] Naval Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "V-VG": {
          "displayName": "Exit",
          "destination": "Plaza-V"
        },
        "V-VG-VG20-2029": {
          "displayName": "South",
          "destination": "V-VG-VG20-2029"
        }
      }
    },
    "V-V-V1-995": {
      "firstVisit": true,
      "displayName": "Naval science (General)",
      "description": "Description for \u201cNaval science (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "V-V"
        }
      }
    },
    "V-V": {
      "firstVisit": true,
      "displayName": "\u201cNaval science (General) Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cNaval science (General) Room\u201d\n[  Exit   ] Naval Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "V-V": {
          "displayName": "Exit",
          "destination": "Plaza-V"
        },
        "V-V-V1-995": {
          "displayName": "South",
          "destination": "V-V-V1-995"
        }
      }
    },
    "V-VB-VB15-955": {
      "firstVisit": true,
      "displayName": "Naval administration",
      "description": "Description for \u201cNaval administration Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "V-VB"
        }
      }
    },
    "V-VB": {
      "firstVisit": true,
      "displayName": "\u201cNaval administration Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cNaval administration Room\u201d\n[  Exit   ] Naval Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "V-VB": {
          "displayName": "Exit",
          "destination": "Plaza-V"
        },
        "V-VB-VB15-955": {
          "displayName": "South",
          "destination": "V-VB-VB15-955"
        }
      }
    },
    "V-VE-VE7-500": {
      "firstVisit": true,
      "displayName": "Marines",
      "description": "Description for \u201cMarines Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "V-VE"
        }
      }
    },
    "V-VE": {
      "firstVisit": true,
      "displayName": "\u201cMarines Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cMarines Room\u201d\n[  Exit   ] Naval Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "V-VE": {
          "displayName": "Exit",
          "destination": "Plaza-V"
        },
        "V-VE-VE7-500": {
          "displayName": "South",
          "destination": "V-VE-VE7-500"
        }
      }
    },
    "V-VF-VF1-580": {
      "firstVisit": true,
      "displayName": "Naval ordnance",
      "description": "Description for \u201cNaval ordnance Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "V-VF"
        }
      }
    },
    "V-VF": {
      "firstVisit": true,
      "displayName": "\u201cNaval ordnance Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cNaval ordnance Room\u201d\n[  Exit   ] Naval Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "V-VF": {
          "displayName": "Exit",
          "destination": "Plaza-V"
        },
        "V-VF-VF1-580": {
          "displayName": "South",
          "destination": "V-VF-VF1-580"
        }
      }
    },
    "V-VC-VC10-580": {
      "firstVisit": true,
      "displayName": "Naval maintenance",
      "description": "Description for \u201cNaval maintenance Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "V-VC"
        }
      }
    },
    "V-VC": {
      "firstVisit": true,
      "displayName": "\u201cNaval maintenance Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cNaval maintenance Room\u201d\n[  Exit   ] Naval Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "V-VC": {
          "displayName": "Exit",
          "destination": "Plaza-V"
        },
        "V-VC-VC10-580": {
          "displayName": "South",
          "destination": "V-VC-VC10-580"
        }
      }
    },
    "V-VD-VD7-430": {
      "firstVisit": true,
      "displayName": "Naval personnel",
      "description": "Description for \u201cNaval personnel Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "V-VD"
        }
      }
    },
    "V-VD": {
      "firstVisit": true,
      "displayName": "\u201cNaval personnel Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cNaval personnel Room\u201d\n[  Exit   ] Naval Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "V-VD": {
          "displayName": "Exit",
          "destination": "Plaza-V"
        },
        "V-VD-VD7-430": {
          "displayName": "South",
          "destination": "V-VD-VD7-430"
        }
      }
    },
    "Plaza-Z": {
      "firstVisit": true,
      "displayName": "Bibliography, Library Science Plaza",
      "description": "You are in an plaza surrounded by 2 buildings conforming Bibliography, Library Science.\nThe buildings are accessible via their classification code, visible above the main door:\n\n[ Z-Z   ] (1 story) \u201cNational bibliography Building\u201d\n[ Z-ZA  ] (1 story) \u201cInformation resources (General) Building\u201d\n[ Main  ] Main Library Grounds",
      "interactables": {},
      "items": {},
      "exits": {
        "Z-Z": {
          "displayName": "Z-Z",
          "destination": "Z-Z"
        },
        "Z-ZA": {
          "displayName": "Z-ZA",
          "destination": "Z-ZA"
        },
        "main": {
          "displayName": "Main",
          "destination": "MAIN"
        }
      }
    },
    "Z-Z-Z1001-1121": {
      "firstVisit": true,
      "displayName": "General bibliography",
      "description": "Description for \u201cGeneral bibliography Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Z-Z"
        }
      }
    },
    "Z-Z-Z4-115.5": {
      "firstVisit": true,
      "displayName": "Books (General).    Writing.    Paleography",
      "description": "Description for \u201cBooks (General).    Writing.    Paleography Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Z-Z"
        }
      }
    },
    "Z-Z-Z1201-4980": {
      "firstVisit": true,
      "displayName": "National bibliography",
      "description": "Description for \u201cNational bibliography Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Z-Z"
        }
      }
    },
    "Z-Z-Z116-659": {
      "firstVisit": true,
      "displayName": "Book industries and trade",
      "description": "Description for \u201cBook industries and trade Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Z-Z"
        }
      }
    },
    "Z-Z-Z662-1000.5": {
      "firstVisit": true,
      "displayName": "Libraries",
      "description": "Description for \u201cLibraries Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Z-Z"
        }
      }
    },
    "Z-Z-Z8001-8999": {
      "firstVisit": true,
      "displayName": "Personal bibliography",
      "description": "Description for \u201cPersonal bibliography Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Z-Z"
        }
      }
    },
    "Z-Z-Z5051-7999": {
      "firstVisit": true,
      "displayName": "Subject bibliography",
      "description": "Description for \u201cSubject bibliography Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Z-Z"
        }
      }
    },
    "Z-Z": {
      "firstVisit": true,
      "displayName": "\u201cNational bibliography Building\u201d Main Lobby",
      "description": "There are 7 rooms throughout this building. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n\n[  South  ] \u201cGeneral bibliography Room\u201d\n[  North  ] \u201cBooks (General).    Writing.    Paleography Room\u201d\n[  East   ] \u201cNational bibliography Room\u201d\n[  West   ] \u201cBook industries and trade Room\u201d\n[SouthEast] \u201cLibraries Room\u201d\n[NorthWest] \u201cPersonal bibliography Room\u201d\n[SouthWest] \u201cSubject bibliography Room\u201d\n[  Exit   ] Bibliography, Library Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "Z-Z": {
          "displayName": "Exit",
          "destination": "Plaza-Z"
        },
        "Z-Z-Z1001-1121": {
          "displayName": "South",
          "destination": "Z-Z-Z1001-1121"
        },
        "Z-Z-Z4-115.5": {
          "displayName": "North",
          "destination": "Z-Z-Z4-115.5"
        },
        "Z-Z-Z1201-4980": {
          "displayName": "East",
          "destination": "Z-Z-Z1201-4980"
        },
        "Z-Z-Z116-659": {
          "displayName": "West",
          "destination": "Z-Z-Z116-659"
        },
        "Z-Z-Z662-1000.5": {
          "displayName": "SouthEast",
          "destination": "Z-Z-Z662-1000.5"
        },
        "Z-Z-Z8001-8999": {
          "displayName": "NorthWest",
          "destination": "Z-Z-Z8001-8999"
        },
        "Z-Z-Z5051-7999": {
          "displayName": "SouthWest",
          "destination": "Z-Z-Z5051-7999"
        }
      }
    },
    "Z-ZA-ZA3038-5190": {
      "firstVisit": true,
      "displayName": "Information resources (General)",
      "description": "Description for \u201cInformation resources (General) Room\u201d. You can exit to the floor foyer.\n[  Exit   ] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "Z-ZA"
        }
      }
    },
    "Z-ZA": {
      "firstVisit": true,
      "displayName": "\u201cInformation resources (General) Building\u201d Main Lobby",
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n\n[  South  ] \u201cInformation resources (General) Room\u201d\n[  Exit   ] Bibliography, Library Science Plaza",
      "interactables": {},
      "items": {},
      "exits": {
        "Z-ZA": {
          "displayName": "Exit",
          "destination": "Plaza-Z"
        },
        "Z-ZA-ZA3038-5190": {
          "displayName": "South",
          "destination": "Z-ZA-ZA3038-5190"
        }
      }
    },
    "MAIN": {
      "firstVisit": true,
      "displayName": "Main Library Grounds",
      "description": "You are in an expansive area where 21 smaller roads meet. Each road has a small sign next to it, indicating where it leads:\n\n[Plaza A] \u201cGeneral Works Plaza\u201d (500m)\n[Plaza B] \u201cPhilosophy, Psychology, Religion Plaza\u201d (750m)\n[Plaza C] \u201cAuxiliary Sciences of History (General) Plaza\u201d (500m)\n[Plaza D] \u201cWorld History (except American History) Plaza\u201d (1.05km)\n[Plaza E] \u201cAmerican History Plaza\u201d (50m)\n[Plaza F] \u201cLocal History of the United States and British, Dutch, French, and Latin America Plaza\u201d (50m)\n[Plaza G] \u201cGeography, Anthropology, Recreation Plaza\u201d (500m)\n[Plaza H] \u201cSocial Sciences Plaza\u201d (800m)\n[Plaza J] \u201cPolitical Science Plaza\u201d (650m)\n[Plaza K] \u201cLaw Plaza\u201d (13.75km)\n[Plaza L] \u201cEducation Plaza\u201d (550m)\n[Plaza M] \u201cMusic Plaza\u201d (150m)\n[Plaza N] \u201cFine Arts Plaza\u201d (400m)\n[Plaza P] \u201cLanguage and Literature Plaza\u201d (950m)\n[Plaza Q] \u201cScience Plaza\u201d (600m)\n[Plaza R] \u201cMedicine Plaza\u201d (850m)\n[Plaza S] \u201cAgriculture Plaza\u201d (300m)\n[Plaza T] \u201cTechnology Plaza\u201d (850m)\n[Plaza U] \u201cMilitary Science Plaza\u201d (450m)\n[Plaza V] \u201cNaval Science Plaza\u201d (500m)\n[Plaza Z] \u201cBibliography, Library Science Plaza\u201d (100m)",
      "interactables": {},
      "items": {},
      "exits": {
        "Plaza-A": {
          "displayName": "Plaza A",
          "destination": "Plaza-A"
        },
        "Plaza-B": {
          "displayName": "Plaza B",
          "destination": "Plaza-B"
        },
        "Plaza-C": {
          "displayName": "Plaza C",
          "destination": "Plaza-C"
        },
        "Plaza-D": {
          "displayName": "Plaza D",
          "destination": "Plaza-D"
        },
        "Plaza-E": {
          "displayName": "Plaza E",
          "destination": "Plaza-E"
        },
        "Plaza-F": {
          "displayName": "Plaza F",
          "destination": "Plaza-F"
        },
        "Plaza-G": {
          "displayName": "Plaza G",
          "destination": "Plaza-G"
        },
        "Plaza-H": {
          "displayName": "Plaza H",
          "destination": "Plaza-H"
        },
        "Plaza-J": {
          "displayName": "Plaza J",
          "destination": "Plaza-J"
        },
        "Plaza-K": {
          "displayName": "Plaza K",
          "destination": "Plaza-K"
        },
        "Plaza-L": {
          "displayName": "Plaza L",
          "destination": "Plaza-L"
        },
        "Plaza-M": {
          "displayName": "Plaza M",
          "destination": "Plaza-M"
        },
        "Plaza-N": {
          "displayName": "Plaza N",
          "destination": "Plaza-N"
        },
        "Plaza-P": {
          "displayName": "Plaza P",
          "destination": "Plaza-P"
        },
        "Plaza-Q": {
          "displayName": "Plaza Q",
          "destination": "Plaza-Q"
        },
        "Plaza-R": {
          "displayName": "Plaza R",
          "destination": "Plaza-R"
        },
        "Plaza-S": {
          "displayName": "Plaza S",
          "destination": "Plaza-S"
        },
        "Plaza-T": {
          "displayName": "Plaza T",
          "destination": "Plaza-T"
        },
        "Plaza-U": {
          "displayName": "Plaza U",
          "destination": "Plaza-U"
        },
        "Plaza-V": {
          "displayName": "Plaza V",
          "destination": "Plaza-V"
        },
        "Plaza-Z": {
          "displayName": "Plaza Z",
          "destination": "Plaza-Z"
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
