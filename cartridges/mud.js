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
    "building_A-AC-AC1-195": {
      "firstVisit": true,
      "displayName": "Collections of monographs, essays, etc. shelf",
      "description": "Description for shelf Collections of monographs, essays, etc. in Collections.  Series.  Collected works Room.\n\n[|Entrance||] Collections.  Series.  Collected works Room entrance\n[|Next||||||] Collections.  Series.  Collected works shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_A-AC": {
          "displayName": "Entrance",
          "destination": "building_A-AC"
        },
        "building_A-AC-AC1-999": {
          "displayName": "Next",
          "destination": "building_A-AC-AC1-999"
        }
      }
    },
    "building_A-AC-AC1-999": {
      "firstVisit": true,
      "displayName": "Collections.  Series.  Collected works shelf",
      "description": "Description for shelf Collections.  Series.  Collected works in Collections.  Series.  Collected works Room.\n\n[|Previous||] Collections of monographs, essays, etc. shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_A-AC-AC1-195": {
          "displayName": "Previous",
          "destination": "building_A-AC-AC1-195"
        }
      }
    },
    "building_A-AC": {
      "firstVisit": true,
      "displayName": "Collections.  Series.  Collected works Room entrance",
      "description": "This room has two shelves organized linearly from the entrance towards the back. The first shelf you can see is Collections of monographs, essays, etc.. You can exit to the floor foyer.\n\n[|Shelf|||||] Collections of monographs, essays, etc. shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_A-AC-AC1-195": {
          "displayName": "Shelf",
          "destination": "building_A-AC-AC1-195"
        },
        "building_A": {
          "displayName": "Exit",
          "destination": "building_A"
        }
      }
    },
    "building_A-AE-AE1-90": {
      "firstVisit": true,
      "displayName": "Encyclopedias shelf",
      "description": "Description for shelf Encyclopedias in Encyclopedias Room.\n\n[|Entrance||] Encyclopedias Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_A-AE": {
          "displayName": "Entrance",
          "destination": "building_A-AE"
        }
      }
    },
    "building_A-AE": {
      "firstVisit": true,
      "displayName": "Encyclopedias Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Encyclopedias. You can exit to the floor foyer.\n\n[|Shelf|||||] Encyclopedias shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_A-AE-AE1-90": {
          "displayName": "Shelf",
          "destination": "building_A-AE-AE1-90"
        },
        "building_A": {
          "displayName": "Exit",
          "destination": "building_A"
        }
      }
    },
    "building_A-AG-AG2-600": {
      "firstVisit": true,
      "displayName": "Dictionaries and other general reference works shelf",
      "description": "Description for shelf Dictionaries and other general reference works in Dictionaries and other general reference works Room.\n\n[|Entrance||] Dictionaries and other general reference works Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_A-AG": {
          "displayName": "Entrance",
          "destination": "building_A-AG"
        }
      }
    },
    "building_A-AG": {
      "firstVisit": true,
      "displayName": "Dictionaries and other general reference works Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Dictionaries and other general reference works. You can exit to the floor foyer.\n\n[|Shelf|||||] Dictionaries and other general reference works shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_A-AG-AG2-600": {
          "displayName": "Shelf",
          "destination": "building_A-AG-AG2-600"
        },
        "building_A": {
          "displayName": "Exit",
          "destination": "building_A"
        }
      }
    },
    "building_A-AZ-AZ20-999": {
      "firstVisit": true,
      "displayName": "History of scholarship and learning.  The humanities shelf",
      "description": "Description for shelf History of scholarship and learning.  The humanities in History of scholarship and learning.  The humanities Room.\n\n[|Entrance||] History of scholarship and learning.  The humanities Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_A-AZ": {
          "displayName": "Entrance",
          "destination": "building_A-AZ"
        }
      }
    },
    "building_A-AZ": {
      "firstVisit": true,
      "displayName": "History of scholarship and learning.  The humanities Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is History of scholarship and learning.  The humanities. You can exit to the floor foyer.\n\n[|Shelf|||||] History of scholarship and learning.  The humanities shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_A-AZ-AZ20-999": {
          "displayName": "Shelf",
          "destination": "building_A-AZ-AZ20-999"
        },
        "building_A": {
          "displayName": "Exit",
          "destination": "building_A"
        }
      }
    },
    "building_A-AM-AM1-501": {
      "firstVisit": true,
      "displayName": "Museums.  Collectors and collecting shelf",
      "description": "Description for shelf Museums.  Collectors and collecting in Museums.  Collectors and collecting Room.\n\n[|Entrance||] Museums.  Collectors and collecting Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_A-AM": {
          "displayName": "Entrance",
          "destination": "building_A-AM"
        }
      }
    },
    "building_A-AM": {
      "firstVisit": true,
      "displayName": "Museums.  Collectors and collecting Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Museums.  Collectors and collecting. You can exit to the floor foyer.\n\n[|Shelf|||||] Museums.  Collectors and collecting shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_A-AM-AM1-501": {
          "displayName": "Shelf",
          "destination": "building_A-AM-AM1-501"
        },
        "building_A": {
          "displayName": "Exit",
          "destination": "building_A"
        }
      }
    },
    "building_A-AS-AS1-945": {
      "firstVisit": true,
      "displayName": "Academies and learned societies shelf",
      "description": "Description for shelf Academies and learned societies in Academies and learned societies Room.\n\n[|Entrance||] Academies and learned societies Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_A-AS": {
          "displayName": "Entrance",
          "destination": "building_A-AS"
        }
      }
    },
    "building_A-AS": {
      "firstVisit": true,
      "displayName": "Academies and learned societies Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Academies and learned societies. You can exit to the floor foyer.\n\n[|Shelf|||||] Academies and learned societies shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_A-AS-AS1-945": {
          "displayName": "Shelf",
          "destination": "building_A-AS-AS1-945"
        },
        "building_A": {
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
        },
        "2_building_A": {
          "displayName": "Up",
          "destination": "2_building_A"
        }
      }
    },
    "2_building_A-AP-AP1-271": {
      "firstVisit": true,
      "displayName": "Periodicals shelf",
      "description": "Description for shelf Periodicals in Periodicals Room.\n\n[|Entrance||] Periodicals Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_A-AP": {
          "displayName": "Entrance",
          "destination": "2_building_A-AP"
        }
      }
    },
    "2_building_A-AP": {
      "firstVisit": true,
      "displayName": "Periodicals Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Periodicals. You can exit to the floor foyer.\n\n[|Shelf|||||] Periodicals shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_A-AP-AP1-271": {
          "displayName": "Shelf",
          "destination": "2_building_A-AP-AP1-271"
        },
        "2_building_A": {
          "displayName": "Exit",
          "destination": "2_building_A"
        }
      }
    },
    "2_building_A-AY-AY10-2001": {
      "firstVisit": true,
      "displayName": "Yearbooks.  Almanacs.  Directories shelf",
      "description": "Description for shelf Yearbooks.  Almanacs.  Directories in Yearbooks.  Almanacs.  Directories Room.\n\n[|Entrance||] Yearbooks.  Almanacs.  Directories Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_A-AY": {
          "displayName": "Entrance",
          "destination": "2_building_A-AY"
        }
      }
    },
    "2_building_A-AY": {
      "firstVisit": true,
      "displayName": "Yearbooks.  Almanacs.  Directories Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Yearbooks.  Almanacs.  Directories. You can exit to the floor foyer.\n\n[|Shelf|||||] Yearbooks.  Almanacs.  Directories shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_A-AY-AY10-2001": {
          "displayName": "Shelf",
          "destination": "2_building_A-AY-AY10-2001"
        },
        "2_building_A": {
          "displayName": "Exit",
          "destination": "2_building_A"
        }
      }
    },
    "2_building_A-AI-AI1-21": {
      "firstVisit": true,
      "displayName": "Indexes shelf",
      "description": "Description for shelf Indexes in Indexes Room.\n\n[|Entrance||] Indexes Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_A-AI": {
          "displayName": "Entrance",
          "destination": "2_building_A-AI"
        }
      }
    },
    "2_building_A-AI": {
      "firstVisit": true,
      "displayName": "Indexes Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Indexes. You can exit to the floor foyer.\n\n[|Shelf|||||] Indexes shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_A-AI-AI1-21": {
          "displayName": "Shelf",
          "destination": "2_building_A-AI-AI1-21"
        },
        "2_building_A": {
          "displayName": "Exit",
          "destination": "2_building_A"
        }
      }
    },
    "2_building_A-AN-AN": {
      "firstVisit": true,
      "displayName": "Newspapers shelf",
      "description": "Description for shelf Newspapers in Newspapers Room.\n\n[|Entrance||] Newspapers Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_A-AN": {
          "displayName": "Entrance",
          "destination": "2_building_A-AN"
        }
      }
    },
    "2_building_A-AN": {
      "firstVisit": true,
      "displayName": "Newspapers Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Newspapers. You can exit to the floor foyer.\n\n[|Shelf|||||] Newspapers shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_A-AN-AN": {
          "displayName": "Shelf",
          "destination": "2_building_A-AN-AN"
        },
        "2_building_A": {
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
        "2_building_A-AP": {
          "displayName": "South",
          "destination": "2_building_A-AP"
        },
        "2_building_A-AY": {
          "displayName": "North",
          "destination": "2_building_A-AY"
        },
        "2_building_A-AI": {
          "displayName": "SouthEast",
          "destination": "2_building_A-AI"
        },
        "2_building_A-AN": {
          "displayName": "NorthWest",
          "destination": "2_building_A-AN"
        },
        "building_A": {
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
    "building_B-BV-BV1-5099": {
      "firstVisit": true,
      "displayName": "Practical Theology shelf",
      "description": "Description for shelf Practical Theology in Practical Theology Room.\n\n[|Entrance||] Practical Theology Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_B-BV": {
          "displayName": "Entrance",
          "destination": "building_B-BV"
        }
      }
    },
    "building_B-BV": {
      "firstVisit": true,
      "displayName": "Practical Theology Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Practical Theology. You can exit to the floor foyer.\n\n[|Shelf|||||] Practical Theology shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_B-BV-BV1-5099": {
          "displayName": "Shelf",
          "destination": "building_B-BV-BV1-5099"
        },
        "building_B": {
          "displayName": "Exit",
          "destination": "building_B"
        }
      }
    },
    "building_B-BJ-BJ1801-2195": {
      "firstVisit": true,
      "displayName": "Social usages.  Etiquette shelf",
      "description": "Description for shelf Social usages.  Etiquette in Ethics Room.\n\n[|Entrance||] Ethics Room entrance\n[|Next||||||] Ethics shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_B-BJ": {
          "displayName": "Entrance",
          "destination": "building_B-BJ"
        },
        "building_B-BJ-BJ1-1725": {
          "displayName": "Next",
          "destination": "building_B-BJ-BJ1-1725"
        }
      }
    },
    "building_B-BJ-BJ1-1725": {
      "firstVisit": true,
      "displayName": "Ethics shelf",
      "description": "Description for shelf Ethics in Ethics Room.\n\n[|Previous||] Social usages.  Etiquette shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_B-BJ-BJ1801-2195": {
          "displayName": "Previous",
          "destination": "building_B-BJ-BJ1801-2195"
        }
      }
    },
    "building_B-BJ": {
      "firstVisit": true,
      "displayName": "Ethics Room entrance",
      "description": "This room has two shelves organized linearly from the entrance towards the back. The first shelf you can see is Social usages.  Etiquette. You can exit to the floor foyer.\n\n[|Shelf|||||] Social usages.  Etiquette shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_B-BJ-BJ1801-2195": {
          "displayName": "Shelf",
          "destination": "building_B-BJ-BJ1801-2195"
        },
        "building_B": {
          "displayName": "Exit",
          "destination": "building_B"
        }
      }
    },
    "building_B-BX-BX1-9999": {
      "firstVisit": true,
      "displayName": "Christian Denominations shelf",
      "description": "Description for shelf Christian Denominations in Christian Denominations Room.\n\n[|Entrance||] Christian Denominations Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_B-BX": {
          "displayName": "Entrance",
          "destination": "building_B-BX"
        }
      }
    },
    "building_B-BX": {
      "firstVisit": true,
      "displayName": "Christian Denominations Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Christian Denominations. You can exit to the floor foyer.\n\n[|Shelf|||||] Christian Denominations shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_B-BX-BX1-9999": {
          "displayName": "Shelf",
          "destination": "building_B-BX-BX1-9999"
        },
        "building_B": {
          "displayName": "Exit",
          "destination": "building_B"
        }
      }
    },
    "building_B-BF-BF1-990": {
      "firstVisit": true,
      "displayName": "Psychology shelf",
      "description": "Description for shelf Psychology in Psychology Room.\n\n[|Entrance||] Psychology Room entrance\n[|Next||||||] Parapsychology shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_B-BF": {
          "displayName": "Entrance",
          "destination": "building_B-BF"
        },
        "building_B-BF-BF1001-1389": {
          "displayName": "Next",
          "destination": "building_B-BF-BF1001-1389"
        }
      }
    },
    "building_B-BF-BF1001-1389": {
      "firstVisit": true,
      "displayName": "Parapsychology shelf",
      "description": "Description for shelf Parapsychology in Psychology Room.\n\n[|Previous||] Psychology shelf\n[|Next||||||] Occult sciences shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_B-BF-BF1-990": {
          "displayName": "Previous",
          "destination": "building_B-BF-BF1-990"
        },
        "building_B-BF-BF1404-2055": {
          "displayName": "Next",
          "destination": "building_B-BF-BF1404-2055"
        }
      }
    },
    "building_B-BF-BF1404-2055": {
      "firstVisit": true,
      "displayName": "Occult sciences shelf",
      "description": "Description for shelf Occult sciences in Psychology Room.\n\n[|Previous||] Parapsychology shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_B-BF-BF1001-1389": {
          "displayName": "Previous",
          "destination": "building_B-BF-BF1001-1389"
        }
      }
    },
    "building_B-BF": {
      "firstVisit": true,
      "displayName": "Psychology Room entrance",
      "description": "This room has three shelves organized linearly from the entrance towards the back. The first shelf you can see is Psychology. You can exit to the floor foyer.\n\n[|Shelf|||||] Psychology shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_B-BF-BF1-990": {
          "displayName": "Shelf",
          "destination": "building_B-BF-BF1-990"
        },
        "building_B": {
          "displayName": "Exit",
          "destination": "building_B"
        }
      }
    },
    "building_B-BS-BS1-2970": {
      "firstVisit": true,
      "displayName": "The Bible shelf",
      "description": "Description for shelf The Bible in The Bible Room.\n\n[|Entrance||] The Bible Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_B-BS": {
          "displayName": "Entrance",
          "destination": "building_B-BS"
        }
      }
    },
    "building_B-BS": {
      "firstVisit": true,
      "displayName": "The Bible Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is The Bible. You can exit to the floor foyer.\n\n[|Shelf|||||] The Bible shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_B-BS-BS1-2970": {
          "displayName": "Shelf",
          "destination": "building_B-BS-BS1-2970"
        },
        "building_B": {
          "displayName": "Exit",
          "destination": "building_B"
        }
      }
    },
    "building_B-BT-BT10-1480": {
      "firstVisit": true,
      "displayName": "Doctrinal Theology shelf",
      "description": "Description for shelf Doctrinal Theology in Doctrinal Theology Room.\n\n[|Entrance||] Doctrinal Theology Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_B-BT": {
          "displayName": "Entrance",
          "destination": "building_B-BT"
        }
      }
    },
    "building_B-BT": {
      "firstVisit": true,
      "displayName": "Doctrinal Theology Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Doctrinal Theology. You can exit to the floor foyer.\n\n[|Shelf|||||] Doctrinal Theology shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_B-BT-BT10-1480": {
          "displayName": "Shelf",
          "destination": "building_B-BT-BT10-1480"
        },
        "building_B": {
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
        },
        "2_building_B": {
          "displayName": "Up",
          "destination": "2_building_B"
        }
      }
    },
    "2_building_B-B-B1-5802": {
      "firstVisit": true,
      "displayName": "Philosophy (General) shelf",
      "description": "Description for shelf Philosophy (General) in Philosophy (General) Room.\n\n[|Entrance||] Philosophy (General) Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_B-B": {
          "displayName": "Entrance",
          "destination": "2_building_B-B"
        }
      }
    },
    "2_building_B-B": {
      "firstVisit": true,
      "displayName": "Philosophy (General) Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Philosophy (General). You can exit to the floor foyer.\n\n[|Shelf|||||] Philosophy (General) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_B-B-B1-5802": {
          "displayName": "Shelf",
          "destination": "2_building_B-B-B1-5802"
        },
        "2_building_B": {
          "displayName": "Exit",
          "destination": "2_building_B"
        }
      }
    },
    "2_building_B-BR-BR1-1725": {
      "firstVisit": true,
      "displayName": "Christianity shelf",
      "description": "Description for shelf Christianity in Christianity Room.\n\n[|Entrance||] Christianity Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_B-BR": {
          "displayName": "Entrance",
          "destination": "2_building_B-BR"
        }
      }
    },
    "2_building_B-BR": {
      "firstVisit": true,
      "displayName": "Christianity Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Christianity. You can exit to the floor foyer.\n\n[|Shelf|||||] Christianity shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_B-BR-BR1-1725": {
          "displayName": "Shelf",
          "destination": "2_building_B-BR-BR1-1725"
        },
        "2_building_B": {
          "displayName": "Exit",
          "destination": "2_building_B"
        }
      }
    },
    "2_building_B-BL-BL1-2790": {
      "firstVisit": true,
      "displayName": "Religions.  Mythology.  Rationalism shelf",
      "description": "Description for shelf Religions.  Mythology.  Rationalism in Religions.  Mythology.  Rationalism Room.\n\n[|Entrance||] Religions.  Mythology.  Rationalism Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_B-BL": {
          "displayName": "Entrance",
          "destination": "2_building_B-BL"
        }
      }
    },
    "2_building_B-BL": {
      "firstVisit": true,
      "displayName": "Religions.  Mythology.  Rationalism Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Religions.  Mythology.  Rationalism. You can exit to the floor foyer.\n\n[|Shelf|||||] Religions.  Mythology.  Rationalism shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_B-BL-BL1-2790": {
          "displayName": "Shelf",
          "destination": "2_building_B-BL-BL1-2790"
        },
        "2_building_B": {
          "displayName": "Exit",
          "destination": "2_building_B"
        }
      }
    },
    "2_building_B-BP-BP1-610": {
      "firstVisit": true,
      "displayName": "Islam.  Bahai Faith.  Theosophy, etc. shelf",
      "description": "Description for shelf Islam.  Bahai Faith.  Theosophy, etc. in Islam.  Bahai Faith.  Theosophy, etc. Room.\n\n[|Entrance||] Islam.  Bahai Faith.  Theosophy, etc. Room entrance\n[|Next||||||] General shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_B-BP": {
          "displayName": "Entrance",
          "destination": "2_building_B-BP"
        },
        "2_building_B-BP-BP1-68": {
          "displayName": "Next",
          "destination": "2_building_B-BP-BP1-68"
        }
      }
    },
    "2_building_B-BP-BP1-68": {
      "firstVisit": true,
      "displayName": "General shelf",
      "description": "Description for shelf General in Islam.  Bahai Faith.  Theosophy, etc. Room.\n\n[|Previous||] Islam.  Bahai Faith.  Theosophy, etc. shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_B-BP-BP1-610": {
          "displayName": "Previous",
          "destination": "2_building_B-BP-BP1-610"
        }
      }
    },
    "2_building_B-BP": {
      "firstVisit": true,
      "displayName": "Islam.  Bahai Faith.  Theosophy, etc. Room entrance",
      "description": "This room has two shelves organized linearly from the entrance towards the back. The first shelf you can see is Islam.  Bahai Faith.  Theosophy, etc.. You can exit to the floor foyer.\n\n[|Shelf|||||] Islam.  Bahai Faith.  Theosophy, etc. shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_B-BP-BP1-610": {
          "displayName": "Shelf",
          "destination": "2_building_B-BP-BP1-610"
        },
        "2_building_B": {
          "displayName": "Exit",
          "destination": "2_building_B"
        }
      }
    },
    "2_building_B-BM-BM1-990": {
      "firstVisit": true,
      "displayName": "Judaism shelf",
      "description": "Description for shelf Judaism in Judaism Room.\n\n[|Entrance||] Judaism Room entrance\n[|Next||||||] General shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_B-BM": {
          "displayName": "Entrance",
          "destination": "2_building_B-BM"
        },
        "2_building_B-BM-BM1-449": {
          "displayName": "Next",
          "destination": "2_building_B-BM-BM1-449"
        }
      }
    },
    "2_building_B-BM-BM1-449": {
      "firstVisit": true,
      "displayName": "General shelf",
      "description": "Description for shelf General in Judaism Room.\n\n[|Previous||] Judaism shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_B-BM-BM1-990": {
          "displayName": "Previous",
          "destination": "2_building_B-BM-BM1-990"
        }
      }
    },
    "2_building_B-BM": {
      "firstVisit": true,
      "displayName": "Judaism Room entrance",
      "description": "This room has two shelves organized linearly from the entrance towards the back. The first shelf you can see is Judaism. You can exit to the floor foyer.\n\n[|Shelf|||||] Judaism shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_B-BM-BM1-990": {
          "displayName": "Shelf",
          "destination": "2_building_B-BM-BM1-990"
        },
        "2_building_B": {
          "displayName": "Exit",
          "destination": "2_building_B"
        }
      }
    },
    "2_building_B-BC-BC1-199": {
      "firstVisit": true,
      "displayName": "Logic shelf",
      "description": "Description for shelf Logic in Logic Room.\n\n[|Entrance||] Logic Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_B-BC": {
          "displayName": "Entrance",
          "destination": "2_building_B-BC"
        }
      }
    },
    "2_building_B-BC": {
      "firstVisit": true,
      "displayName": "Logic Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Logic. You can exit to the floor foyer.\n\n[|Shelf|||||] Logic shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_B-BC-BC1-199": {
          "displayName": "Shelf",
          "destination": "2_building_B-BC-BC1-199"
        },
        "2_building_B": {
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
        "2_building_B-B": {
          "displayName": "South",
          "destination": "2_building_B-B"
        },
        "2_building_B-BR": {
          "displayName": "North",
          "destination": "2_building_B-BR"
        },
        "2_building_B-BL": {
          "displayName": "SouthEast",
          "destination": "2_building_B-BL"
        },
        "2_building_B-BP": {
          "displayName": "NorthWest",
          "destination": "2_building_B-BP"
        },
        "2_building_B-BM": {
          "displayName": "SouthWest",
          "destination": "2_building_B-BM"
        },
        "2_building_B-BC": {
          "displayName": "NorthEast",
          "destination": "2_building_B-BC"
        },
        "building_B": {
          "displayName": "Down",
          "destination": "building_B"
        },
        "3_building_B": {
          "displayName": "Up",
          "destination": "3_building_B"
        }
      }
    },
    "3_building_B-BQ-BQ1-9800": {
      "firstVisit": true,
      "displayName": "Buddhism shelf",
      "description": "Description for shelf Buddhism in Buddhism Room.\n\n[|Entrance||] Buddhism Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_B-BQ": {
          "displayName": "Entrance",
          "destination": "3_building_B-BQ"
        }
      }
    },
    "3_building_B-BQ": {
      "firstVisit": true,
      "displayName": "Buddhism Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Buddhism. You can exit to the floor foyer.\n\n[|Shelf|||||] Buddhism shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_B-BQ-BQ1-9800": {
          "displayName": "Shelf",
          "destination": "3_building_B-BQ-BQ1-9800"
        },
        "3_building_B": {
          "displayName": "Exit",
          "destination": "3_building_B"
        }
      }
    },
    "3_building_B-BD-BD10-701": {
      "firstVisit": true,
      "displayName": "Speculative philosophy shelf",
      "description": "Description for shelf Speculative philosophy in Speculative philosophy Room.\n\n[|Entrance||] Speculative philosophy Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_B-BD": {
          "displayName": "Entrance",
          "destination": "3_building_B-BD"
        }
      }
    },
    "3_building_B-BD": {
      "firstVisit": true,
      "displayName": "Speculative philosophy Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Speculative philosophy. You can exit to the floor foyer.\n\n[|Shelf|||||] Speculative philosophy shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_B-BD-BD10-701": {
          "displayName": "Shelf",
          "destination": "3_building_B-BD-BD10-701"
        },
        "3_building_B": {
          "displayName": "Exit",
          "destination": "3_building_B"
        }
      }
    },
    "3_building_B-BH-BH1-301": {
      "firstVisit": true,
      "displayName": "Aesthetics shelf",
      "description": "Description for shelf Aesthetics in Aesthetics Room.\n\n[|Entrance||] Aesthetics Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_B-BH": {
          "displayName": "Entrance",
          "destination": "3_building_B-BH"
        }
      }
    },
    "3_building_B-BH": {
      "firstVisit": true,
      "displayName": "Aesthetics Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Aesthetics. You can exit to the floor foyer.\n\n[|Shelf|||||] Aesthetics shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_B-BH-BH1-301": {
          "displayName": "Shelf",
          "destination": "3_building_B-BH-BH1-301"
        },
        "3_building_B": {
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
        "3_building_B-BQ": {
          "displayName": "South",
          "destination": "3_building_B-BQ"
        },
        "3_building_B-BD": {
          "displayName": "North",
          "destination": "3_building_B-BD"
        },
        "3_building_B-BH": {
          "displayName": "SouthEast",
          "destination": "3_building_B-BH"
        },
        "2_building_B": {
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
    "building_C-CT-CT21-9999": {
      "firstVisit": true,
      "displayName": "Biography shelf",
      "description": "Description for shelf Biography in Biography Room.\n\n[|Entrance||] Biography Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_C-CT": {
          "displayName": "Entrance",
          "destination": "building_C-CT"
        }
      }
    },
    "building_C-CT": {
      "firstVisit": true,
      "displayName": "Biography Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Biography. You can exit to the floor foyer.\n\n[|Shelf|||||] Biography shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_C-CT-CT21-9999": {
          "displayName": "Shelf",
          "destination": "building_C-CT-CT21-9999"
        },
        "building_C": {
          "displayName": "Exit",
          "destination": "building_C"
        }
      }
    },
    "building_C-CS-CS1-3090": {
      "firstVisit": true,
      "displayName": "Genealogy shelf",
      "description": "Description for shelf Genealogy in Genealogy Room.\n\n[|Entrance||] Genealogy Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_C-CS": {
          "displayName": "Entrance",
          "destination": "building_C-CS"
        }
      }
    },
    "building_C-CS": {
      "firstVisit": true,
      "displayName": "Genealogy Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Genealogy. You can exit to the floor foyer.\n\n[|Shelf|||||] Genealogy shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_C-CS-CS1-3090": {
          "displayName": "Shelf",
          "destination": "building_C-CS-CS1-3090"
        },
        "building_C": {
          "displayName": "Exit",
          "destination": "building_C"
        }
      }
    },
    "building_C-CR-CR1-6305": {
      "firstVisit": true,
      "displayName": "Heraldry shelf",
      "description": "Description for shelf Heraldry in Heraldry Room.\n\n[|Entrance||] Heraldry Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_C-CR": {
          "displayName": "Entrance",
          "destination": "building_C-CR"
        }
      }
    },
    "building_C-CR": {
      "firstVisit": true,
      "displayName": "Heraldry Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Heraldry. You can exit to the floor foyer.\n\n[|Shelf|||||] Heraldry shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_C-CR-CR1-6305": {
          "displayName": "Shelf",
          "destination": "building_C-CR-CR1-6305"
        },
        "building_C": {
          "displayName": "Exit",
          "destination": "building_C"
        }
      }
    },
    "building_C-CB-CB3-482": {
      "firstVisit": true,
      "displayName": "History of Civilization shelf",
      "description": "Description for shelf History of Civilization in History of Civilization Room.\n\n[|Entrance||] History of Civilization Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_C-CB": {
          "displayName": "Entrance",
          "destination": "building_C-CB"
        }
      }
    },
    "building_C-CB": {
      "firstVisit": true,
      "displayName": "History of Civilization Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is History of Civilization. You can exit to the floor foyer.\n\n[|Shelf|||||] History of Civilization shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_C-CB-CB3-482": {
          "displayName": "Shelf",
          "destination": "building_C-CB-CB3-482"
        },
        "building_C": {
          "displayName": "Exit",
          "destination": "building_C"
        }
      }
    },
    "building_C-CJ-CJ1-6661": {
      "firstVisit": true,
      "displayName": "Numismatics shelf",
      "description": "Description for shelf Numismatics in Numismatics Room.\n\n[|Entrance||] Numismatics Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_C-CJ": {
          "displayName": "Entrance",
          "destination": "building_C-CJ"
        }
      }
    },
    "building_C-CJ": {
      "firstVisit": true,
      "displayName": "Numismatics Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Numismatics. You can exit to the floor foyer.\n\n[|Shelf|||||] Numismatics shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_C-CJ-CJ1-6661": {
          "displayName": "Shelf",
          "destination": "building_C-CJ-CJ1-6661"
        },
        "building_C": {
          "displayName": "Exit",
          "destination": "building_C"
        }
      }
    },
    "building_C-CC-CC1-960": {
      "firstVisit": true,
      "displayName": "Archaeology shelf",
      "description": "Description for shelf Archaeology in Archaeology Room.\n\n[|Entrance||] Archaeology Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_C-CC": {
          "displayName": "Entrance",
          "destination": "building_C-CC"
        }
      }
    },
    "building_C-CC": {
      "firstVisit": true,
      "displayName": "Archaeology Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Archaeology. You can exit to the floor foyer.\n\n[|Shelf|||||] Archaeology shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_C-CC-CC1-960": {
          "displayName": "Shelf",
          "destination": "building_C-CC-CC1-960"
        },
        "building_C": {
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
        },
        "2_building_C": {
          "displayName": "Up",
          "destination": "2_building_C"
        }
      }
    },
    "2_building_C-CN-CN1-1355": {
      "firstVisit": true,
      "displayName": "Inscriptions.  Epigraphy shelf",
      "description": "Description for shelf Inscriptions.  Epigraphy in Inscriptions.  Epigraphy Room.\n\n[|Entrance||] Inscriptions.  Epigraphy Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_C-CN": {
          "displayName": "Entrance",
          "destination": "2_building_C-CN"
        }
      }
    },
    "2_building_C-CN": {
      "firstVisit": true,
      "displayName": "Inscriptions.  Epigraphy Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Inscriptions.  Epigraphy. You can exit to the floor foyer.\n\n[|Shelf|||||] Inscriptions.  Epigraphy shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_C-CN-CN1-1355": {
          "displayName": "Shelf",
          "destination": "2_building_C-CN-CN1-1355"
        },
        "2_building_C": {
          "displayName": "Exit",
          "destination": "2_building_C"
        }
      }
    },
    "2_building_C-CD-CD1-6471": {
      "firstVisit": true,
      "displayName": "Diplomatics.  Archives.  Seals shelf",
      "description": "Description for shelf Diplomatics.  Archives.  Seals in Diplomatics.  Archives.  Seals Room.\n\n[|Entrance||] Diplomatics.  Archives.  Seals Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_C-CD": {
          "displayName": "Entrance",
          "destination": "2_building_C-CD"
        }
      }
    },
    "2_building_C-CD": {
      "firstVisit": true,
      "displayName": "Diplomatics.  Archives.  Seals Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Diplomatics.  Archives.  Seals. You can exit to the floor foyer.\n\n[|Shelf|||||] Diplomatics.  Archives.  Seals shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_C-CD-CD1-6471": {
          "displayName": "Shelf",
          "destination": "2_building_C-CD-CD1-6471"
        },
        "2_building_C": {
          "displayName": "Exit",
          "destination": "2_building_C"
        }
      }
    },
    "2_building_C-CE-CE1-97": {
      "firstVisit": true,
      "displayName": "Technical chronology.  Calendar shelf",
      "description": "Description for shelf Technical chronology.  Calendar in Technical chronology.  Calendar Room.\n\n[|Entrance||] Technical chronology.  Calendar Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_C-CE": {
          "displayName": "Entrance",
          "destination": "2_building_C-CE"
        }
      }
    },
    "2_building_C-CE": {
      "firstVisit": true,
      "displayName": "Technical chronology.  Calendar Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Technical chronology.  Calendar. You can exit to the floor foyer.\n\n[|Shelf|||||] Technical chronology.  Calendar shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_C-CE-CE1-97": {
          "displayName": "Shelf",
          "destination": "2_building_C-CE-CE1-97"
        },
        "2_building_C": {
          "displayName": "Exit",
          "destination": "2_building_C"
        }
      }
    },
    "2_building_C-C-C1-51": {
      "firstVisit": true,
      "displayName": "Auxiliary Sciences of History (General) shelf",
      "description": "Description for shelf Auxiliary Sciences of History (General) in Auxiliary Sciences of History (General) Room.\n\n[|Entrance||] Auxiliary Sciences of History (General) Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_C-C": {
          "displayName": "Entrance",
          "destination": "2_building_C-C"
        }
      }
    },
    "2_building_C-C": {
      "firstVisit": true,
      "displayName": "Auxiliary Sciences of History (General) Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Auxiliary Sciences of History (General). You can exit to the floor foyer.\n\n[|Shelf|||||] Auxiliary Sciences of History (General) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_C-C-C1-51": {
          "displayName": "Shelf",
          "destination": "2_building_C-C-C1-51"
        },
        "2_building_C": {
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
        "2_building_C-CN": {
          "displayName": "South",
          "destination": "2_building_C-CN"
        },
        "2_building_C-CD": {
          "displayName": "North",
          "destination": "2_building_C-CD"
        },
        "2_building_C-CE": {
          "displayName": "SouthEast",
          "destination": "2_building_C-CE"
        },
        "2_building_C-C": {
          "displayName": "NorthWest",
          "destination": "2_building_C-C"
        },
        "building_C": {
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
    "building_D-DS-DS1-937": {
      "firstVisit": true,
      "displayName": "History of Asia shelf",
      "description": "Description for shelf History of Asia in History of Asia Room.\n\n[|Entrance||] History of Asia Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_D-DS": {
          "displayName": "Entrance",
          "destination": "building_D-DS"
        }
      }
    },
    "building_D-DS": {
      "firstVisit": true,
      "displayName": "History of Asia Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is History of Asia. You can exit to the floor foyer.\n\n[|Shelf|||||] History of Asia shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_D-DS-DS1-937": {
          "displayName": "Shelf",
          "destination": "building_D-DS-DS1-937"
        },
        "building_D": {
          "displayName": "Exit",
          "destination": "building_D"
        }
      }
    },
    "building_D-D-D1-2027": {
      "firstVisit": true,
      "displayName": "History (General) shelf",
      "description": "Description for shelf History (General) in History (General) Room.\n\n[|Entrance||] History (General) Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_D-D": {
          "displayName": "Entrance",
          "destination": "building_D-D"
        }
      }
    },
    "building_D-D": {
      "firstVisit": true,
      "displayName": "History (General) Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is History (General). You can exit to the floor foyer.\n\n[|Shelf|||||] History (General) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_D-D-D1-2027": {
          "displayName": "Shelf",
          "destination": "building_D-D-D1-2027"
        },
        "building_D": {
          "displayName": "Exit",
          "destination": "building_D"
        }
      }
    },
    "building_D-DA-DA1-995": {
      "firstVisit": true,
      "displayName": "History of Great Britain shelf",
      "description": "Description for shelf History of Great Britain in History of Great Britain Room.\n\n[|Entrance||] History of Great Britain Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_D-DA": {
          "displayName": "Entrance",
          "destination": "building_D-DA"
        }
      }
    },
    "building_D-DA": {
      "firstVisit": true,
      "displayName": "History of Great Britain Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is History of Great Britain. You can exit to the floor foyer.\n\n[|Shelf|||||] History of Great Britain shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_D-DA-DA1-995": {
          "displayName": "Shelf",
          "destination": "building_D-DA-DA1-995"
        },
        "building_D": {
          "displayName": "Exit",
          "destination": "building_D"
        }
      }
    },
    "building_D-DT-DT1-3415": {
      "firstVisit": true,
      "displayName": "History of Africa shelf",
      "description": "Description for shelf History of Africa in History of Africa Room.\n\n[|Entrance||] History of Africa Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_D-DT": {
          "displayName": "Entrance",
          "destination": "building_D-DT"
        }
      }
    },
    "building_D-DT": {
      "firstVisit": true,
      "displayName": "History of Africa Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is History of Africa. You can exit to the floor foyer.\n\n[|Shelf|||||] History of Africa shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_D-DT-DT1-3415": {
          "displayName": "Shelf",
          "destination": "building_D-DT-DT1-3415"
        },
        "building_D": {
          "displayName": "Exit",
          "destination": "building_D"
        }
      }
    },
    "building_D-DG-DG11-999": {
      "firstVisit": true,
      "displayName": "History of Italy shelf",
      "description": "Description for shelf History of Italy in History of Italy Room.\n\n[|Entrance||] History of Italy Room entrance\n[|Next||||||] Ancient Italy.  Rome to 476 shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_D-DG": {
          "displayName": "Entrance",
          "destination": "building_D-DG"
        },
        "building_D-DG-DG11-365": {
          "displayName": "Next",
          "destination": "building_D-DG-DG11-365"
        }
      }
    },
    "building_D-DG-DG11-365": {
      "firstVisit": true,
      "displayName": "Ancient Italy.  Rome to 476 shelf",
      "description": "Description for shelf Ancient Italy.  Rome to 476 in History of Italy Room.\n\n[|Previous||] History of Italy shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_D-DG-DG11-999": {
          "displayName": "Previous",
          "destination": "building_D-DG-DG11-999"
        }
      }
    },
    "building_D-DG": {
      "firstVisit": true,
      "displayName": "History of Italy Room entrance",
      "description": "This room has two shelves organized linearly from the entrance towards the back. The first shelf you can see is History of Italy. You can exit to the floor foyer.\n\n[|Shelf|||||] History of Italy shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_D-DG-DG11-999": {
          "displayName": "Shelf",
          "destination": "building_D-DG-DG11-999"
        },
        "building_D": {
          "displayName": "Exit",
          "destination": "building_D"
        }
      }
    },
    "building_D-DC-DC1-947": {
      "firstVisit": true,
      "displayName": "History of France shelf",
      "description": "Description for shelf History of France in History of France Room.\n\n[|Entrance||] History of France Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_D-DC": {
          "displayName": "Entrance",
          "destination": "building_D-DC"
        }
      }
    },
    "building_D-DC": {
      "firstVisit": true,
      "displayName": "History of France Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is History of France. You can exit to the floor foyer.\n\n[|Shelf|||||] History of France shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_D-DC-DC1-947": {
          "displayName": "Shelf",
          "destination": "building_D-DC-DC1-947"
        },
        "building_D": {
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
        },
        "2_building_D": {
          "displayName": "Up",
          "destination": "2_building_D"
        }
      }
    },
    "2_building_D-DD-DD1-905": {
      "firstVisit": true,
      "displayName": "History of Germany shelf",
      "description": "Description for shelf History of Germany in History of Germany Room.\n\n[|Entrance||] History of Germany Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_D-DD": {
          "displayName": "Entrance",
          "destination": "2_building_D-DD"
        }
      }
    },
    "2_building_D-DD": {
      "firstVisit": true,
      "displayName": "History of Germany Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is History of Germany. You can exit to the floor foyer.\n\n[|Shelf|||||] History of Germany shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_D-DD-DD1-905": {
          "displayName": "Shelf",
          "destination": "2_building_D-DD-DD1-905"
        },
        "2_building_D": {
          "displayName": "Exit",
          "destination": "2_building_D"
        }
      }
    },
    "2_building_D-DH-DH1-925": {
      "firstVisit": true,
      "displayName": "History of Low Countries.  Benelux Countries shelf",
      "description": "Description for shelf History of Low Countries.  Benelux Countries in History of Low Countries.  Benelux Countries Room.\n\n[|Entrance||] History of Low Countries.  Benelux Countries Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_D-DH": {
          "displayName": "Entrance",
          "destination": "2_building_D-DH"
        }
      }
    },
    "2_building_D-DH": {
      "firstVisit": true,
      "displayName": "History of Low Countries.  Benelux Countries Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is History of Low Countries.  Benelux Countries. You can exit to the floor foyer.\n\n[|Shelf|||||] History of Low Countries.  Benelux Countries shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_D-DH-DH1-925": {
          "displayName": "Shelf",
          "destination": "2_building_D-DH-DH1-925"
        },
        "2_building_D": {
          "displayName": "Exit",
          "destination": "2_building_D"
        }
      }
    },
    "2_building_D-DU-DU1-950": {
      "firstVisit": true,
      "displayName": "History of Oceania (South Seas) shelf",
      "description": "Description for shelf History of Oceania (South Seas) in History of Oceania (South Seas) Room.\n\n[|Entrance||] History of Oceania (South Seas) Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_D-DU": {
          "displayName": "Entrance",
          "destination": "2_building_D-DU"
        }
      }
    },
    "2_building_D-DU": {
      "firstVisit": true,
      "displayName": "History of Oceania (South Seas) Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is History of Oceania (South Seas). You can exit to the floor foyer.\n\n[|Shelf|||||] History of Oceania (South Seas) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_D-DU-DU1-950": {
          "displayName": "Shelf",
          "destination": "2_building_D-DU-DU1-950"
        },
        "2_building_D": {
          "displayName": "Exit",
          "destination": "2_building_D"
        }
      }
    },
    "2_building_D-DK-DK1-949.5": {
      "firstVisit": true,
      "displayName": "History of Russia.  Soviet Union.  Former Soviet Republics shelf",
      "description": "Description for shelf History of Russia.  Soviet Union.  Former Soviet Republics in History of Russia.  Soviet Union.  Former Soviet Republics Room.\n\n[|Entrance||] History of Russia.  Soviet Union.  Former Soviet Republics Room entrance\n[|Next||||||] History of Poland shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_D-DK": {
          "displayName": "Entrance",
          "destination": "2_building_D-DK"
        },
        "2_building_D-DK-DK4010-4800": {
          "displayName": "Next",
          "destination": "2_building_D-DK-DK4010-4800"
        }
      }
    },
    "2_building_D-DK-DK4010-4800": {
      "firstVisit": true,
      "displayName": "History of Poland shelf",
      "description": "Description for shelf History of Poland in History of Russia.  Soviet Union.  Former Soviet Republics Room.\n\n[|Previous||] History of Russia.  Soviet Union.  Former Soviet Republics shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_D-DK-DK1-949.5": {
          "displayName": "Previous",
          "destination": "2_building_D-DK-DK1-949.5"
        }
      }
    },
    "2_building_D-DK": {
      "firstVisit": true,
      "displayName": "History of Russia.  Soviet Union.  Former Soviet Republics Room entrance",
      "description": "This room has two shelves organized linearly from the entrance towards the back. The first shelf you can see is History of Russia.  Soviet Union.  Former Soviet Republics. You can exit to the floor foyer.\n\n[|Shelf|||||] History of Russia.  Soviet Union.  Former Soviet Republics shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_D-DK-DK1-949.5": {
          "displayName": "Shelf",
          "destination": "2_building_D-DK-DK1-949.5"
        },
        "2_building_D": {
          "displayName": "Exit",
          "destination": "2_building_D"
        }
      }
    },
    "2_building_D-DE-DE1-100": {
      "firstVisit": true,
      "displayName": "History of the Greco-Roman world shelf",
      "description": "Description for shelf History of the Greco-Roman world in History of the Greco-Roman world Room.\n\n[|Entrance||] History of the Greco-Roman world Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_D-DE": {
          "displayName": "Entrance",
          "destination": "2_building_D-DE"
        }
      }
    },
    "2_building_D-DE": {
      "firstVisit": true,
      "displayName": "History of the Greco-Roman world Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is History of the Greco-Roman world. You can exit to the floor foyer.\n\n[|Shelf|||||] History of the Greco-Roman world shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_D-DE-DE1-100": {
          "displayName": "Shelf",
          "destination": "2_building_D-DE-DE1-100"
        },
        "2_building_D": {
          "displayName": "Exit",
          "destination": "2_building_D"
        }
      }
    },
    "2_building_D-DR-DR1-2285": {
      "firstVisit": true,
      "displayName": "History of Balkan Peninsula shelf",
      "description": "Description for shelf History of Balkan Peninsula in History of Balkan Peninsula Room.\n\n[|Entrance||] History of Balkan Peninsula Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_D-DR": {
          "displayName": "Entrance",
          "destination": "2_building_D-DR"
        }
      }
    },
    "2_building_D-DR": {
      "firstVisit": true,
      "displayName": "History of Balkan Peninsula Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is History of Balkan Peninsula. You can exit to the floor foyer.\n\n[|Shelf|||||] History of Balkan Peninsula shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_D-DR-DR1-2285": {
          "displayName": "Shelf",
          "destination": "2_building_D-DR-DR1-2285"
        },
        "2_building_D": {
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
        "2_building_D-DD": {
          "displayName": "South",
          "destination": "2_building_D-DD"
        },
        "2_building_D-DH": {
          "displayName": "North",
          "destination": "2_building_D-DH"
        },
        "2_building_D-DU": {
          "displayName": "SouthEast",
          "destination": "2_building_D-DU"
        },
        "2_building_D-DK": {
          "displayName": "NorthWest",
          "destination": "2_building_D-DK"
        },
        "2_building_D-DE": {
          "displayName": "SouthWest",
          "destination": "2_building_D-DE"
        },
        "2_building_D-DR": {
          "displayName": "NorthEast",
          "destination": "2_building_D-DR"
        },
        "building_D": {
          "displayName": "Down",
          "destination": "building_D"
        },
        "3_building_D": {
          "displayName": "Up",
          "destination": "3_building_D"
        }
      }
    },
    "3_building_D-DP-DP1-402": {
      "firstVisit": true,
      "displayName": "History of Spain shelf",
      "description": "Description for shelf History of Spain in History of Spain Room.\n\n[|Entrance||] History of Spain Room entrance\n[|Next||||||] History of Portugal shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_D-DP": {
          "displayName": "Entrance",
          "destination": "3_building_D-DP"
        },
        "3_building_D-DP-DP501-900.22": {
          "displayName": "Next",
          "destination": "3_building_D-DP-DP501-900.22"
        }
      }
    },
    "3_building_D-DP-DP501-900.22": {
      "firstVisit": true,
      "displayName": "History of Portugal shelf",
      "description": "Description for shelf History of Portugal in History of Spain Room.\n\n[|Previous||] History of Spain shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_D-DP-DP1-402": {
          "displayName": "Previous",
          "destination": "3_building_D-DP-DP1-402"
        }
      }
    },
    "3_building_D-DP": {
      "firstVisit": true,
      "displayName": "History of Spain Room entrance",
      "description": "This room has two shelves organized linearly from the entrance towards the back. The first shelf you can see is History of Spain. You can exit to the floor foyer.\n\n[|Shelf|||||] History of Spain shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_D-DP-DP1-402": {
          "displayName": "Shelf",
          "destination": "3_building_D-DP-DP1-402"
        },
        "3_building_D": {
          "displayName": "Exit",
          "destination": "3_building_D"
        }
      }
    },
    "3_building_D-DF-DF10-951": {
      "firstVisit": true,
      "displayName": "History of Greece shelf",
      "description": "Description for shelf History of Greece in History of Greece Room.\n\n[|Entrance||] History of Greece Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_D-DF": {
          "displayName": "Entrance",
          "destination": "3_building_D-DF"
        }
      }
    },
    "3_building_D-DF": {
      "firstVisit": true,
      "displayName": "History of Greece Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is History of Greece. You can exit to the floor foyer.\n\n[|Shelf|||||] History of Greece shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_D-DF-DF10-951": {
          "displayName": "Shelf",
          "destination": "3_building_D-DF-DF10-951"
        },
        "3_building_D": {
          "displayName": "Exit",
          "destination": "3_building_D"
        }
      }
    },
    "3_building_D-DJK-DJK1-77": {
      "firstVisit": true,
      "displayName": "History of Eastern Europe (General) shelf",
      "description": "Description for shelf History of Eastern Europe (General) in History of Eastern Europe (General) Room.\n\n[|Entrance||] History of Eastern Europe (General) Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_D-DJK": {
          "displayName": "Entrance",
          "destination": "3_building_D-DJK"
        }
      }
    },
    "3_building_D-DJK": {
      "firstVisit": true,
      "displayName": "History of Eastern Europe (General) Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is History of Eastern Europe (General). You can exit to the floor foyer.\n\n[|Shelf|||||] History of Eastern Europe (General) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_D-DJK-DJK1-77": {
          "displayName": "Shelf",
          "destination": "3_building_D-DJK-DJK1-77"
        },
        "3_building_D": {
          "displayName": "Exit",
          "destination": "3_building_D"
        }
      }
    },
    "3_building_D-DB-DB1-3150": {
      "firstVisit": true,
      "displayName": "History of Austria.  Liechtenstein.  Hungary.  Czechoslovakia shelf",
      "description": "Description for shelf History of Austria.  Liechtenstein.  Hungary.  Czechoslovakia in History of Austria.  Liechtenstein.  Hungary.  Czechoslovakia Room.\n\n[|Entrance||] History of Austria.  Liechtenstein.  Hungary.  Czechoslovakia Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_D-DB": {
          "displayName": "Entrance",
          "destination": "3_building_D-DB"
        }
      }
    },
    "3_building_D-DB": {
      "firstVisit": true,
      "displayName": "History of Austria.  Liechtenstein.  Hungary.  Czechoslovakia Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is History of Austria.  Liechtenstein.  Hungary.  Czechoslovakia. You can exit to the floor foyer.\n\n[|Shelf|||||] History of Austria.  Liechtenstein.  Hungary.  Czechoslovakia shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_D-DB-DB1-3150": {
          "displayName": "Shelf",
          "destination": "3_building_D-DB-DB1-3150"
        },
        "3_building_D": {
          "displayName": "Exit",
          "destination": "3_building_D"
        }
      }
    },
    "3_building_D-DL-DL1-1180": {
      "firstVisit": true,
      "displayName": "History of Northern Europe.  Scandinavia shelf",
      "description": "Description for shelf History of Northern Europe.  Scandinavia in History of Northern Europe.  Scandinavia Room.\n\n[|Entrance||] History of Northern Europe.  Scandinavia Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_D-DL": {
          "displayName": "Entrance",
          "destination": "3_building_D-DL"
        }
      }
    },
    "3_building_D-DL": {
      "firstVisit": true,
      "displayName": "History of Northern Europe.  Scandinavia Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is History of Northern Europe.  Scandinavia. You can exit to the floor foyer.\n\n[|Shelf|||||] History of Northern Europe.  Scandinavia shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_D-DL-DL1-1180": {
          "displayName": "Shelf",
          "destination": "3_building_D-DL-DL1-1180"
        },
        "3_building_D": {
          "displayName": "Exit",
          "destination": "3_building_D"
        }
      }
    },
    "3_building_D-DQ-DQ1-851": {
      "firstVisit": true,
      "displayName": "History of Switzerland shelf",
      "description": "Description for shelf History of Switzerland in History of Switzerland Room.\n\n[|Entrance||] History of Switzerland Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_D-DQ": {
          "displayName": "Entrance",
          "destination": "3_building_D-DQ"
        }
      }
    },
    "3_building_D-DQ": {
      "firstVisit": true,
      "displayName": "History of Switzerland Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is History of Switzerland. You can exit to the floor foyer.\n\n[|Shelf|||||] History of Switzerland shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_D-DQ-DQ1-851": {
          "displayName": "Shelf",
          "destination": "3_building_D-DQ-DQ1-851"
        },
        "3_building_D": {
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
        "3_building_D-DP": {
          "displayName": "South",
          "destination": "3_building_D-DP"
        },
        "3_building_D-DF": {
          "displayName": "North",
          "destination": "3_building_D-DF"
        },
        "3_building_D-DJK": {
          "displayName": "SouthEast",
          "destination": "3_building_D-DJK"
        },
        "3_building_D-DB": {
          "displayName": "NorthWest",
          "destination": "3_building_D-DB"
        },
        "3_building_D-DL": {
          "displayName": "SouthWest",
          "destination": "3_building_D-DL"
        },
        "3_building_D-DQ": {
          "displayName": "NorthEast",
          "destination": "3_building_D-DQ"
        },
        "2_building_D": {
          "displayName": "Down",
          "destination": "2_building_D"
        },
        "4_building_D": {
          "displayName": "Up",
          "destination": "4_building_D"
        }
      }
    },
    "4_building_D-DAW-DAW1001-1051": {
      "firstVisit": true,
      "displayName": "History of Central Europe shelf",
      "description": "Description for shelf History of Central Europe in History of Central Europe Room.\n\n[|Entrance||] History of Central Europe Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "4_building_D-DAW": {
          "displayName": "Entrance",
          "destination": "4_building_D-DAW"
        }
      }
    },
    "4_building_D-DAW": {
      "firstVisit": true,
      "displayName": "History of Central Europe Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is History of Central Europe. You can exit to the floor foyer.\n\n[|Shelf|||||] History of Central Europe shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "4_building_D-DAW-DAW1001-1051": {
          "displayName": "Shelf",
          "destination": "4_building_D-DAW-DAW1001-1051"
        },
        "4_building_D": {
          "displayName": "Exit",
          "destination": "4_building_D"
        }
      }
    },
    "4_building_D-DJ-DJ1-500": {
      "firstVisit": true,
      "displayName": "History of Netherlands (Holland) shelf",
      "description": "Description for shelf History of Netherlands (Holland) in History of Netherlands (Holland) Room.\n\n[|Entrance||] History of Netherlands (Holland) Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "4_building_D-DJ": {
          "displayName": "Entrance",
          "destination": "4_building_D-DJ"
        }
      }
    },
    "4_building_D-DJ": {
      "firstVisit": true,
      "displayName": "History of Netherlands (Holland) Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is History of Netherlands (Holland). You can exit to the floor foyer.\n\n[|Shelf|||||] History of Netherlands (Holland) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "4_building_D-DJ-DJ1-500": {
          "displayName": "Shelf",
          "destination": "4_building_D-DJ-DJ1-500"
        },
        "4_building_D": {
          "displayName": "Exit",
          "destination": "4_building_D"
        }
      }
    },
    "4_building_D-DX-DX101-301": {
      "firstVisit": true,
      "displayName": "History of Romanies shelf",
      "description": "Description for shelf History of Romanies in History of Romanies Room.\n\n[|Entrance||] History of Romanies Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "4_building_D-DX": {
          "displayName": "Entrance",
          "destination": "4_building_D-DX"
        }
      }
    },
    "4_building_D-DX": {
      "firstVisit": true,
      "displayName": "History of Romanies Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is History of Romanies. You can exit to the floor foyer.\n\n[|Shelf|||||] History of Romanies shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "4_building_D-DX-DX101-301": {
          "displayName": "Shelf",
          "destination": "4_building_D-DX-DX101-301"
        },
        "4_building_D": {
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
        "4_building_D-DAW": {
          "displayName": "South",
          "destination": "4_building_D-DAW"
        },
        "4_building_D-DJ": {
          "displayName": "North",
          "destination": "4_building_D-DJ"
        },
        "4_building_D-DX": {
          "displayName": "SouthEast",
          "destination": "4_building_D-DX"
        },
        "3_building_D": {
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
    "building_E-E-E151-889": {
      "firstVisit": true,
      "displayName": "United States shelf",
      "description": "Description for shelf United States in United States Room.\n\n[|Entrance||] United States Room entrance\n[|Next||||||] America shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_E-E": {
          "displayName": "Entrance",
          "destination": "building_E-E"
        },
        "building_E-E-E11-143": {
          "displayName": "Next",
          "destination": "building_E-E-E11-143"
        }
      }
    },
    "building_E-E-E11-143": {
      "firstVisit": true,
      "displayName": "America shelf",
      "description": "Description for shelf America in United States Room.\n\n[|Previous||] United States shelf\n[|Next||||||] Twenty-first century shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_E-E-E151-889": {
          "displayName": "Previous",
          "destination": "building_E-E-E151-889"
        },
        "building_E-E-E895-904": {
          "displayName": "Next",
          "destination": "building_E-E-E895-904"
        }
      }
    },
    "building_E-E-E895-904": {
      "firstVisit": true,
      "displayName": "Twenty-first century shelf",
      "description": "Description for shelf Twenty-first century in United States Room.\n\n[|Previous||] America shelf\n[|Next||||||] George W. Bush's administrations, 2001-2009 shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_E-E-E11-143": {
          "displayName": "Previous",
          "destination": "building_E-E-E11-143"
        },
        "building_E-E-E902-906": {
          "displayName": "Next",
          "destination": "building_E-E-E902-906"
        }
      }
    },
    "building_E-E-E902-906": {
      "firstVisit": true,
      "displayName": "George W. Bush's administrations, 2001-2009 shelf",
      "description": "Description for shelf George W. Bush's administrations, 2001-2009 in United States Room.\n\n[|Previous||] Twenty-first century shelf\n[|Next||||||] Barack Obama's administration, 2009- shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_E-E-E895-904": {
          "displayName": "Previous",
          "destination": "building_E-E-E895-904"
        },
        "building_E-E-E907-909": {
          "displayName": "Next",
          "destination": "building_E-E-E907-909"
        }
      }
    },
    "building_E-E-E907-909": {
      "firstVisit": true,
      "displayName": "Barack Obama's administration, 2009- shelf",
      "description": "Description for shelf Barack Obama's administration, 2009- in United States Room.\n\n[|Previous||] George W. Bush's administrations, 2001-2009 shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_E-E-E902-906": {
          "displayName": "Previous",
          "destination": "building_E-E-E902-906"
        }
      }
    },
    "building_E-E": {
      "firstVisit": true,
      "displayName": "United States Room entrance",
      "description": "This room has five shelves organized linearly from the entrance towards the back. The first shelf you can see is United States. You can exit to the floor foyer.\n\n[|Shelf|||||] United States shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_E-E-E151-889": {
          "displayName": "Shelf",
          "destination": "building_E-E-E151-889"
        },
        "building_E": {
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
    "building_F-F-F1-975": {
      "firstVisit": true,
      "displayName": "United States local history shelf",
      "description": "Description for shelf United States local history in Latin America.  Spanish America Room.\n\n[|Entrance||] Latin America.  Spanish America Room entrance\n[|Next||||||] Latin America.  Spanish America shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_F-F": {
          "displayName": "Entrance",
          "destination": "building_F-F"
        },
        "building_F-F-F1201-3799": {
          "displayName": "Next",
          "destination": "building_F-F-F1201-3799"
        }
      }
    },
    "building_F-F-F1201-3799": {
      "firstVisit": true,
      "displayName": "Latin America.  Spanish America shelf",
      "description": "Description for shelf Latin America.  Spanish America in Latin America.  Spanish America Room.\n\n[|Previous||] United States local history shelf\n[|Next||||||] Canada shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_F-F-F1-975": {
          "displayName": "Previous",
          "destination": "building_F-F-F1-975"
        },
        "building_F-F-F1001-1145.2": {
          "displayName": "Next",
          "destination": "building_F-F-F1001-1145.2"
        }
      }
    },
    "building_F-F-F1001-1145.2": {
      "firstVisit": true,
      "displayName": "Canada shelf",
      "description": "Description for shelf Canada in Latin America.  Spanish America Room.\n\n[|Previous||] Latin America.  Spanish America shelf\n[|Next||||||] Mexico shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_F-F-F1201-3799": {
          "displayName": "Previous",
          "destination": "building_F-F-F1201-3799"
        },
        "building_F-F-F1201-1392": {
          "displayName": "Next",
          "destination": "building_F-F-F1201-1392"
        }
      }
    },
    "building_F-F-F1201-1392": {
      "firstVisit": true,
      "displayName": "Mexico shelf",
      "description": "Description for shelf Mexico in Latin America.  Spanish America Room.\n\n[|Previous||] Canada shelf\n[|Next||||||] Saint Pierre and Miquelon shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_F-F-F1001-1145.2": {
          "displayName": "Previous",
          "destination": "building_F-F-F1001-1145.2"
        },
        "building_F-F-F1170": {
          "displayName": "Next",
          "destination": "building_F-F-F1170"
        }
      }
    },
    "building_F-F-F1170": {
      "firstVisit": true,
      "displayName": "Saint Pierre and Miquelon shelf",
      "description": "Description for shelf Saint Pierre and Miquelon in Latin America.  Spanish America Room.\n\n[|Previous||] Mexico shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_F-F-F1201-1392": {
          "displayName": "Previous",
          "destination": "building_F-F-F1201-1392"
        }
      }
    },
    "building_F-F": {
      "firstVisit": true,
      "displayName": "Latin America.  Spanish America Room entrance",
      "description": "This room has five shelves organized linearly from the entrance towards the back. The first shelf you can see is United States local history. You can exit to the floor foyer.\n\n[|Shelf|||||] United States local history shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_F-F-F1-975": {
          "displayName": "Shelf",
          "destination": "building_F-F-F1-975"
        },
        "building_F": {
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
    "building_G-G-G1-922": {
      "firstVisit": true,
      "displayName": "Geography (General) shelf",
      "description": "Description for shelf Geography (General) in Maps Room.\n\n[|Entrance||] Maps Room entrance\n[|Next||||||] Atlases shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_G-G": {
          "displayName": "Entrance",
          "destination": "building_G-G"
        },
        "building_G-G-G1000-3122": {
          "displayName": "Next",
          "destination": "building_G-G-G1000-3122"
        }
      }
    },
    "building_G-G-G1000-3122": {
      "firstVisit": true,
      "displayName": "Atlases shelf",
      "description": "Description for shelf Atlases in Maps Room.\n\n[|Previous||] Geography (General) shelf\n[|Next||||||] Maps shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_G-G-G1-922": {
          "displayName": "Previous",
          "destination": "building_G-G-G1-922"
        },
        "building_G-G-G3180-9980": {
          "displayName": "Next",
          "destination": "building_G-G-G3180-9980"
        }
      }
    },
    "building_G-G-G3180-9980": {
      "firstVisit": true,
      "displayName": "Maps shelf",
      "description": "Description for shelf Maps in Maps Room.\n\n[|Previous||] Atlases shelf\n[|Next||||||] Globes shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_G-G-G1000-3122": {
          "displayName": "Previous",
          "destination": "building_G-G-G1000-3122"
        },
        "building_G-G-G3160-3171": {
          "displayName": "Next",
          "destination": "building_G-G-G3160-3171"
        }
      }
    },
    "building_G-G-G3160-3171": {
      "firstVisit": true,
      "displayName": "Globes shelf",
      "description": "Description for shelf Globes in Maps Room.\n\n[|Previous||] Maps shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_G-G-G3180-9980": {
          "displayName": "Previous",
          "destination": "building_G-G-G3180-9980"
        }
      }
    },
    "building_G-G": {
      "firstVisit": true,
      "displayName": "Maps Room entrance",
      "description": "This room has four shelves organized linearly from the entrance towards the back. The first shelf you can see is Geography (General). You can exit to the floor foyer.\n\n[|Shelf|||||] Geography (General) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_G-G-G1-922": {
          "displayName": "Shelf",
          "destination": "building_G-G-G1-922"
        },
        "building_G": {
          "displayName": "Exit",
          "destination": "building_G"
        }
      }
    },
    "building_G-GV-GV1-1860": {
      "firstVisit": true,
      "displayName": "Recreation.  Leisure shelf",
      "description": "Description for shelf Recreation.  Leisure in Recreation.  Leisure Room.\n\n[|Entrance||] Recreation.  Leisure Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_G-GV": {
          "displayName": "Entrance",
          "destination": "building_G-GV"
        }
      }
    },
    "building_G-GV": {
      "firstVisit": true,
      "displayName": "Recreation.  Leisure Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Recreation.  Leisure. You can exit to the floor foyer.\n\n[|Shelf|||||] Recreation.  Leisure shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_G-GV-GV1-1860": {
          "displayName": "Shelf",
          "destination": "building_G-GV-GV1-1860"
        },
        "building_G": {
          "displayName": "Exit",
          "destination": "building_G"
        }
      }
    },
    "building_G-GA-GA1-1776": {
      "firstVisit": true,
      "displayName": "Mathematical geography.  Cartography shelf",
      "description": "Description for shelf Mathematical geography.  Cartography in Mathematical geography.  Cartography Room.\n\n[|Entrance||] Mathematical geography.  Cartography Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_G-GA": {
          "displayName": "Entrance",
          "destination": "building_G-GA"
        }
      }
    },
    "building_G-GA": {
      "firstVisit": true,
      "displayName": "Mathematical geography.  Cartography Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Mathematical geography.  Cartography. You can exit to the floor foyer.\n\n[|Shelf|||||] Mathematical geography.  Cartography shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_G-GA-GA1-1776": {
          "displayName": "Shelf",
          "destination": "building_G-GA-GA1-1776"
        },
        "building_G": {
          "displayName": "Exit",
          "destination": "building_G"
        }
      }
    },
    "building_G-GN-GN1-890": {
      "firstVisit": true,
      "displayName": "Anthropology shelf",
      "description": "Description for shelf Anthropology in Anthropology Room.\n\n[|Entrance||] Anthropology Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_G-GN": {
          "displayName": "Entrance",
          "destination": "building_G-GN"
        }
      }
    },
    "building_G-GN": {
      "firstVisit": true,
      "displayName": "Anthropology Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Anthropology. You can exit to the floor foyer.\n\n[|Shelf|||||] Anthropology shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_G-GN-GN1-890": {
          "displayName": "Shelf",
          "destination": "building_G-GN-GN1-890"
        },
        "building_G": {
          "displayName": "Exit",
          "destination": "building_G"
        }
      }
    },
    "building_G-GR-GR1-950": {
      "firstVisit": true,
      "displayName": "Folklore shelf",
      "description": "Description for shelf Folklore in Folklore Room.\n\n[|Entrance||] Folklore Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_G-GR": {
          "displayName": "Entrance",
          "destination": "building_G-GR"
        }
      }
    },
    "building_G-GR": {
      "firstVisit": true,
      "displayName": "Folklore Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Folklore. You can exit to the floor foyer.\n\n[|Shelf|||||] Folklore shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_G-GR-GR1-950": {
          "displayName": "Shelf",
          "destination": "building_G-GR-GR1-950"
        },
        "building_G": {
          "displayName": "Exit",
          "destination": "building_G"
        }
      }
    },
    "building_G-GT-GT1-7070": {
      "firstVisit": true,
      "displayName": "Manners and customs (General) shelf",
      "description": "Description for shelf Manners and customs (General) in Manners and customs (General) Room.\n\n[|Entrance||] Manners and customs (General) Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_G-GT": {
          "displayName": "Entrance",
          "destination": "building_G-GT"
        }
      }
    },
    "building_G-GT": {
      "firstVisit": true,
      "displayName": "Manners and customs (General) Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Manners and customs (General). You can exit to the floor foyer.\n\n[|Shelf|||||] Manners and customs (General) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_G-GT-GT1-7070": {
          "displayName": "Shelf",
          "destination": "building_G-GT-GT1-7070"
        },
        "building_G": {
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
        },
        "2_building_G": {
          "displayName": "Up",
          "destination": "2_building_G"
        }
      }
    },
    "2_building_G-GC-GC1-1581": {
      "firstVisit": true,
      "displayName": "Oceanography shelf",
      "description": "Description for shelf Oceanography in Oceanography Room.\n\n[|Entrance||] Oceanography Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_G-GC": {
          "displayName": "Entrance",
          "destination": "2_building_G-GC"
        }
      }
    },
    "2_building_G-GC": {
      "firstVisit": true,
      "displayName": "Oceanography Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Oceanography. You can exit to the floor foyer.\n\n[|Shelf|||||] Oceanography shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_G-GC-GC1-1581": {
          "displayName": "Shelf",
          "destination": "2_building_G-GC-GC1-1581"
        },
        "2_building_G": {
          "displayName": "Exit",
          "destination": "2_building_G"
        }
      }
    },
    "2_building_G-GB-GB3-5030": {
      "firstVisit": true,
      "displayName": "Physical geography shelf",
      "description": "Description for shelf Physical geography in Physical geography Room.\n\n[|Entrance||] Physical geography Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_G-GB": {
          "displayName": "Entrance",
          "destination": "2_building_G-GB"
        }
      }
    },
    "2_building_G-GB": {
      "firstVisit": true,
      "displayName": "Physical geography Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Physical geography. You can exit to the floor foyer.\n\n[|Shelf|||||] Physical geography shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_G-GB-GB3-5030": {
          "displayName": "Shelf",
          "destination": "2_building_G-GB-GB3-5030"
        },
        "2_building_G": {
          "displayName": "Exit",
          "destination": "2_building_G"
        }
      }
    },
    "2_building_G-GE-GE1-350": {
      "firstVisit": true,
      "displayName": "Environmental sciences shelf",
      "description": "Description for shelf Environmental sciences in Environmental sciences Room.\n\n[|Entrance||] Environmental sciences Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_G-GE": {
          "displayName": "Entrance",
          "destination": "2_building_G-GE"
        }
      }
    },
    "2_building_G-GE": {
      "firstVisit": true,
      "displayName": "Environmental sciences Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Environmental sciences. You can exit to the floor foyer.\n\n[|Shelf|||||] Environmental sciences shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_G-GE-GE1-350": {
          "displayName": "Shelf",
          "destination": "2_building_G-GE-GE1-350"
        },
        "2_building_G": {
          "displayName": "Exit",
          "destination": "2_building_G"
        }
      }
    },
    "2_building_G-GF-GF1-900": {
      "firstVisit": true,
      "displayName": "Human ecology.  Anthropogeography shelf",
      "description": "Description for shelf Human ecology.  Anthropogeography in Human ecology.  Anthropogeography Room.\n\n[|Entrance||] Human ecology.  Anthropogeography Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_G-GF": {
          "displayName": "Entrance",
          "destination": "2_building_G-GF"
        }
      }
    },
    "2_building_G-GF": {
      "firstVisit": true,
      "displayName": "Human ecology.  Anthropogeography Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Human ecology.  Anthropogeography. You can exit to the floor foyer.\n\n[|Shelf|||||] Human ecology.  Anthropogeography shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_G-GF-GF1-900": {
          "displayName": "Shelf",
          "destination": "2_building_G-GF-GF1-900"
        },
        "2_building_G": {
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
        "2_building_G-GC": {
          "displayName": "South",
          "destination": "2_building_G-GC"
        },
        "2_building_G-GB": {
          "displayName": "North",
          "destination": "2_building_G-GB"
        },
        "2_building_G-GE": {
          "displayName": "SouthEast",
          "destination": "2_building_G-GE"
        },
        "2_building_G-GF": {
          "displayName": "NorthWest",
          "destination": "2_building_G-GF"
        },
        "building_G": {
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
    "building_H-HF-HF1-6182": {
      "firstVisit": true,
      "displayName": "Commerce shelf",
      "description": "Description for shelf Commerce in Commerce Room.\n\n[|Entrance||] Commerce Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_H-HF": {
          "displayName": "Entrance",
          "destination": "building_H-HF"
        }
      }
    },
    "building_H-HF": {
      "firstVisit": true,
      "displayName": "Commerce Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Commerce. You can exit to the floor foyer.\n\n[|Shelf|||||] Commerce shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_H-HF-HF1-6182": {
          "displayName": "Shelf",
          "destination": "building_H-HF-HF1-6182"
        },
        "building_H": {
          "displayName": "Exit",
          "destination": "building_H"
        }
      }
    },
    "building_H-HX-HX1-970.7": {
      "firstVisit": true,
      "displayName": "Socialism.  Communism.  Anarchism shelf",
      "description": "Description for shelf Socialism.  Communism.  Anarchism in Socialism.  Communism.  Anarchism Room.\n\n[|Entrance||] Socialism.  Communism.  Anarchism Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_H-HX": {
          "displayName": "Entrance",
          "destination": "building_H-HX"
        }
      }
    },
    "building_H-HX": {
      "firstVisit": true,
      "displayName": "Socialism.  Communism.  Anarchism Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Socialism.  Communism.  Anarchism. You can exit to the floor foyer.\n\n[|Shelf|||||] Socialism.  Communism.  Anarchism shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_H-HX-HX1-970.7": {
          "displayName": "Shelf",
          "destination": "building_H-HX-HX1-970.7"
        },
        "building_H": {
          "displayName": "Exit",
          "destination": "building_H"
        }
      }
    },
    "building_H-HD-HD28-9999": {
      "firstVisit": true,
      "displayName": "Industries.  Land use.  Labor shelf",
      "description": "Description for shelf Industries.  Land use.  Labor in Industries.  Land use.  Labor Room.\n\n[|Entrance||] Industries.  Land use.  Labor Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_H-HD": {
          "displayName": "Entrance",
          "destination": "building_H-HD"
        }
      }
    },
    "building_H-HD": {
      "firstVisit": true,
      "displayName": "Industries.  Land use.  Labor Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Industries.  Land use.  Labor. You can exit to the floor foyer.\n\n[|Shelf|||||] Industries.  Land use.  Labor shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_H-HD-HD28-9999": {
          "displayName": "Shelf",
          "destination": "building_H-HD-HD28-9999"
        },
        "building_H": {
          "displayName": "Exit",
          "destination": "building_H"
        }
      }
    },
    "building_H-HG-HG1-9999": {
      "firstVisit": true,
      "displayName": "Finance shelf",
      "description": "Description for shelf Finance in Finance Room.\n\n[|Entrance||] Finance Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_H-HG": {
          "displayName": "Entrance",
          "destination": "building_H-HG"
        }
      }
    },
    "building_H-HG": {
      "firstVisit": true,
      "displayName": "Finance Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Finance. You can exit to the floor foyer.\n\n[|Shelf|||||] Finance shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_H-HG-HG1-9999": {
          "displayName": "Shelf",
          "destination": "building_H-HG-HG1-9999"
        },
        "building_H": {
          "displayName": "Exit",
          "destination": "building_H"
        }
      }
    },
    "building_H-HB-HB1-3840": {
      "firstVisit": true,
      "displayName": "Economic theory.  Demography shelf",
      "description": "Description for shelf Economic theory.  Demography in Economic theory.  Demography Room.\n\n[|Entrance||] Economic theory.  Demography Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_H-HB": {
          "displayName": "Entrance",
          "destination": "building_H-HB"
        }
      }
    },
    "building_H-HB": {
      "firstVisit": true,
      "displayName": "Economic theory.  Demography Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Economic theory.  Demography. You can exit to the floor foyer.\n\n[|Shelf|||||] Economic theory.  Demography shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_H-HB-HB1-3840": {
          "displayName": "Shelf",
          "destination": "building_H-HB-HB1-3840"
        },
        "building_H": {
          "displayName": "Exit",
          "destination": "building_H"
        }
      }
    },
    "building_H-HQ-HQ1-2044": {
      "firstVisit": true,
      "displayName": "The Family.  Marriage.  Women shelf",
      "description": "Description for shelf The Family.  Marriage.  Women in The Family.  Marriage.  Women Room.\n\n[|Entrance||] The Family.  Marriage.  Women Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_H-HQ": {
          "displayName": "Entrance",
          "destination": "building_H-HQ"
        }
      }
    },
    "building_H-HQ": {
      "firstVisit": true,
      "displayName": "The Family.  Marriage.  Women Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is The Family.  Marriage.  Women. You can exit to the floor foyer.\n\n[|Shelf|||||] The Family.  Marriage.  Women shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_H-HQ-HQ1-2044": {
          "displayName": "Shelf",
          "destination": "building_H-HQ-HQ1-2044"
        },
        "building_H": {
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
        },
        "2_building_H": {
          "displayName": "Up",
          "destination": "2_building_H"
        }
      }
    },
    "2_building_H-H-H1-99": {
      "firstVisit": true,
      "displayName": "Social sciences (General) shelf",
      "description": "Description for shelf Social sciences (General) in Social sciences (General) Room.\n\n[|Entrance||] Social sciences (General) Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_H-H": {
          "displayName": "Entrance",
          "destination": "2_building_H-H"
        }
      }
    },
    "2_building_H-H": {
      "firstVisit": true,
      "displayName": "Social sciences (General) Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Social sciences (General). You can exit to the floor foyer.\n\n[|Shelf|||||] Social sciences (General) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_H-H-H1-99": {
          "displayName": "Shelf",
          "destination": "2_building_H-H-H1-99"
        },
        "2_building_H": {
          "displayName": "Exit",
          "destination": "2_building_H"
        }
      }
    },
    "2_building_H-HE-HE1-9990": {
      "firstVisit": true,
      "displayName": "Transportation and communications shelf",
      "description": "Description for shelf Transportation and communications in Transportation and communications Room.\n\n[|Entrance||] Transportation and communications Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_H-HE": {
          "displayName": "Entrance",
          "destination": "2_building_H-HE"
        }
      }
    },
    "2_building_H-HE": {
      "firstVisit": true,
      "displayName": "Transportation and communications Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Transportation and communications. You can exit to the floor foyer.\n\n[|Shelf|||||] Transportation and communications shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_H-HE-HE1-9990": {
          "displayName": "Shelf",
          "destination": "2_building_H-HE-HE1-9990"
        },
        "2_building_H": {
          "displayName": "Exit",
          "destination": "2_building_H"
        }
      }
    },
    "2_building_H-HM-HM1-1281": {
      "firstVisit": true,
      "displayName": "Sociology shelf",
      "description": "Description for shelf Sociology in Sociology Room.\n\n[|Entrance||] Sociology Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_H-HM": {
          "displayName": "Entrance",
          "destination": "2_building_H-HM"
        }
      }
    },
    "2_building_H-HM": {
      "firstVisit": true,
      "displayName": "Sociology Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Sociology. You can exit to the floor foyer.\n\n[|Shelf|||||] Sociology shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_H-HM-HM1-1281": {
          "displayName": "Shelf",
          "destination": "2_building_H-HM-HM1-1281"
        },
        "2_building_H": {
          "displayName": "Exit",
          "destination": "2_building_H"
        }
      }
    },
    "2_building_H-HJ-HJ9-9940": {
      "firstVisit": true,
      "displayName": "Public finance shelf",
      "description": "Description for shelf Public finance in Public finance Room.\n\n[|Entrance||] Public finance Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_H-HJ": {
          "displayName": "Entrance",
          "destination": "2_building_H-HJ"
        }
      }
    },
    "2_building_H-HJ": {
      "firstVisit": true,
      "displayName": "Public finance Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Public finance. You can exit to the floor foyer.\n\n[|Shelf|||||] Public finance shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_H-HJ-HJ9-9940": {
          "displayName": "Shelf",
          "destination": "2_building_H-HJ-HJ9-9940"
        },
        "2_building_H": {
          "displayName": "Exit",
          "destination": "2_building_H"
        }
      }
    },
    "2_building_H-HN-HN1-995": {
      "firstVisit": true,
      "displayName": "Social history and conditions.  Social problems. shelf",
      "description": "Description for shelf Social history and conditions.  Social problems. in Social history and conditions.  Social problems. Room.\n\n[|Entrance||] Social history and conditions.  Social problems. Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_H-HN": {
          "displayName": "Entrance",
          "destination": "2_building_H-HN"
        }
      }
    },
    "2_building_H-HN": {
      "firstVisit": true,
      "displayName": "Social history and conditions.  Social problems. Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Social history and conditions.  Social problems.. You can exit to the floor foyer.\n\n[|Shelf|||||] Social history and conditions.  Social problems. shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_H-HN-HN1-995": {
          "displayName": "Shelf",
          "destination": "2_building_H-HN-HN1-995"
        },
        "2_building_H": {
          "displayName": "Exit",
          "destination": "2_building_H"
        }
      }
    },
    "2_building_H-HS-HS1-3371": {
      "firstVisit": true,
      "displayName": "Societies: secret, benevolent, etc. shelf",
      "description": "Description for shelf Societies: secret, benevolent, etc. in Societies: secret, benevolent, etc. Room.\n\n[|Entrance||] Societies: secret, benevolent, etc. Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_H-HS": {
          "displayName": "Entrance",
          "destination": "2_building_H-HS"
        }
      }
    },
    "2_building_H-HS": {
      "firstVisit": true,
      "displayName": "Societies: secret, benevolent, etc. Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Societies: secret, benevolent, etc.. You can exit to the floor foyer.\n\n[|Shelf|||||] Societies: secret, benevolent, etc. shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_H-HS-HS1-3371": {
          "displayName": "Shelf",
          "destination": "2_building_H-HS-HS1-3371"
        },
        "2_building_H": {
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
        "2_building_H-H": {
          "displayName": "South",
          "destination": "2_building_H-H"
        },
        "2_building_H-HE": {
          "displayName": "North",
          "destination": "2_building_H-HE"
        },
        "2_building_H-HM": {
          "displayName": "SouthEast",
          "destination": "2_building_H-HM"
        },
        "2_building_H-HJ": {
          "displayName": "NorthWest",
          "destination": "2_building_H-HJ"
        },
        "2_building_H-HN": {
          "displayName": "SouthWest",
          "destination": "2_building_H-HN"
        },
        "2_building_H-HS": {
          "displayName": "NorthEast",
          "destination": "2_building_H-HS"
        },
        "building_H": {
          "displayName": "Down",
          "destination": "building_H"
        },
        "3_building_H": {
          "displayName": "Up",
          "destination": "3_building_H"
        }
      }
    },
    "3_building_H-HV-HV1-9960": {
      "firstVisit": true,
      "displayName": "Social pathology.  Social and public welfare. shelf",
      "description": "Description for shelf Social pathology.  Social and public welfare. in Social pathology.  Social and public welfare. Room.\n\n[|Entrance||] Social pathology.  Social and public welfare. Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_H-HV": {
          "displayName": "Entrance",
          "destination": "3_building_H-HV"
        }
      }
    },
    "3_building_H-HV": {
      "firstVisit": true,
      "displayName": "Social pathology.  Social and public welfare. Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Social pathology.  Social and public welfare.. You can exit to the floor foyer.\n\n[|Shelf|||||] Social pathology.  Social and public welfare. shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_H-HV-HV1-9960": {
          "displayName": "Shelf",
          "destination": "3_building_H-HV-HV1-9960"
        },
        "3_building_H": {
          "displayName": "Exit",
          "destination": "3_building_H"
        }
      }
    },
    "3_building_H-HC-HC10-1085": {
      "firstVisit": true,
      "displayName": "Economic history and conditions shelf",
      "description": "Description for shelf Economic history and conditions in Economic history and conditions Room.\n\n[|Entrance||] Economic history and conditions Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_H-HC": {
          "displayName": "Entrance",
          "destination": "3_building_H-HC"
        }
      }
    },
    "3_building_H-HC": {
      "firstVisit": true,
      "displayName": "Economic history and conditions Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Economic history and conditions. You can exit to the floor foyer.\n\n[|Shelf|||||] Economic history and conditions shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_H-HC-HC10-1085": {
          "displayName": "Shelf",
          "destination": "3_building_H-HC-HC10-1085"
        },
        "3_building_H": {
          "displayName": "Exit",
          "destination": "3_building_H"
        }
      }
    },
    "3_building_H-HA-HA1-4737": {
      "firstVisit": true,
      "displayName": "Statistics shelf",
      "description": "Description for shelf Statistics in Statistics Room.\n\n[|Entrance||] Statistics Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_H-HA": {
          "displayName": "Entrance",
          "destination": "3_building_H-HA"
        }
      }
    },
    "3_building_H-HA": {
      "firstVisit": true,
      "displayName": "Statistics Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Statistics. You can exit to the floor foyer.\n\n[|Shelf|||||] Statistics shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_H-HA-HA1-4737": {
          "displayName": "Shelf",
          "destination": "3_building_H-HA-HA1-4737"
        },
        "3_building_H": {
          "displayName": "Exit",
          "destination": "3_building_H"
        }
      }
    },
    "3_building_H-HT-HT51-1595": {
      "firstVisit": true,
      "displayName": "Communities.  Classes.  Races shelf",
      "description": "Description for shelf Communities.  Classes.  Races in Communities.  Classes.  Races Room.\n\n[|Entrance||] Communities.  Classes.  Races Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_H-HT": {
          "displayName": "Entrance",
          "destination": "3_building_H-HT"
        }
      }
    },
    "3_building_H-HT": {
      "firstVisit": true,
      "displayName": "Communities.  Classes.  Races Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Communities.  Classes.  Races. You can exit to the floor foyer.\n\n[|Shelf|||||] Communities.  Classes.  Races shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_H-HT-HT51-1595": {
          "displayName": "Shelf",
          "destination": "3_building_H-HT-HT51-1595"
        },
        "3_building_H": {
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
        "3_building_H-HV": {
          "displayName": "South",
          "destination": "3_building_H-HV"
        },
        "3_building_H-HC": {
          "displayName": "North",
          "destination": "3_building_H-HC"
        },
        "3_building_H-HA": {
          "displayName": "SouthEast",
          "destination": "3_building_H-HA"
        },
        "3_building_H-HT": {
          "displayName": "NorthWest",
          "destination": "3_building_H-HT"
        },
        "2_building_H": {
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
    "building_J-JF-JF20-1177": {
      "firstVisit": true,
      "displayName": "General.  Comparative government shelf",
      "description": "Description for shelf General.  Comparative government in Political institutions and public administration Room.\n\n[|Entrance||] Political institutions and public administration Room entrance\n[|Next||||||] Political institutions and public administration shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_J-JF": {
          "displayName": "Entrance",
          "destination": "building_J-JF"
        },
        "building_J-JF-JF20-2112": {
          "displayName": "Next",
          "destination": "building_J-JF-JF20-2112"
        }
      }
    },
    "building_J-JF-JF20-2112": {
      "firstVisit": true,
      "displayName": "Political institutions and public administration shelf",
      "description": "Description for shelf Political institutions and public administration in Political institutions and public administration Room.\n\n[|Previous||] General.  Comparative government shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_J-JF-JF20-1177": {
          "displayName": "Previous",
          "destination": "building_J-JF-JF20-1177"
        }
      }
    },
    "building_J-JF": {
      "firstVisit": true,
      "displayName": "Political institutions and public administration Room entrance",
      "description": "This room has two shelves organized linearly from the entrance towards the back. The first shelf you can see is General.  Comparative government. You can exit to the floor foyer.\n\n[|Shelf|||||] General.  Comparative government shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_J-JF-JF20-1177": {
          "displayName": "Shelf",
          "destination": "building_J-JF-JF20-1177"
        },
        "building_J": {
          "displayName": "Exit",
          "destination": "building_J"
        }
      }
    },
    "building_J-JC-JC11-605": {
      "firstVisit": true,
      "displayName": "Political theory.  The state.  Theories of the state shelf",
      "description": "Description for shelf Political theory.  The state.  Theories of the state in Political theory.  The state.  Theories of the state Room.\n\n[|Entrance||] Political theory.  The state.  Theories of the state Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_J-JC": {
          "displayName": "Entrance",
          "destination": "building_J-JC"
        }
      }
    },
    "building_J-JC": {
      "firstVisit": true,
      "displayName": "Political theory.  The state.  Theories of the state Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Political theory.  The state.  Theories of the state. You can exit to the floor foyer.\n\n[|Shelf|||||] Political theory.  The state.  Theories of the state shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_J-JC-JC11-605": {
          "displayName": "Shelf",
          "destination": "building_J-JC-JC11-605"
        },
        "building_J": {
          "displayName": "Exit",
          "destination": "building_J"
        }
      }
    },
    "building_J-JK-JK1-9993": {
      "firstVisit": true,
      "displayName": "Political institutions and public administration shelf",
      "description": "Description for shelf Political institutions and public administration in Political institutions and public administration Room.\n\n[|Entrance||] Political institutions and public administration Room entrance\n[|Next||||||] United States shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_J-JK": {
          "displayName": "Entrance",
          "destination": "building_J-JK"
        },
        "building_J-JK-JK1-9593": {
          "displayName": "Next",
          "destination": "building_J-JK-JK1-9593"
        }
      }
    },
    "building_J-JK-JK1-9593": {
      "firstVisit": true,
      "displayName": "United States shelf",
      "description": "Description for shelf United States in Political institutions and public administration Room.\n\n[|Previous||] Political institutions and public administration shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_J-JK-JK1-9993": {
          "displayName": "Previous",
          "destination": "building_J-JK-JK1-9993"
        }
      }
    },
    "building_J-JK": {
      "firstVisit": true,
      "displayName": "Political institutions and public administration Room entrance",
      "description": "This room has two shelves organized linearly from the entrance towards the back. The first shelf you can see is Political institutions and public administration. You can exit to the floor foyer.\n\n[|Shelf|||||] Political institutions and public administration shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_J-JK-JK1-9993": {
          "displayName": "Shelf",
          "destination": "building_J-JK-JK1-9993"
        },
        "building_J": {
          "displayName": "Exit",
          "destination": "building_J"
        }
      }
    },
    "building_J-JS-JS39-8500": {
      "firstVisit": true,
      "displayName": "Local government.  Municipal government shelf",
      "description": "Description for shelf Local government.  Municipal government in Local government.  Municipal government Room.\n\n[|Entrance||] Local government.  Municipal government Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_J-JS": {
          "displayName": "Entrance",
          "destination": "building_J-JS"
        }
      }
    },
    "building_J-JS": {
      "firstVisit": true,
      "displayName": "Local government.  Municipal government Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Local government.  Municipal government. You can exit to the floor foyer.\n\n[|Shelf|||||] Local government.  Municipal government shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_J-JS-JS39-8500": {
          "displayName": "Shelf",
          "destination": "building_J-JS-JS39-8500"
        },
        "building_J": {
          "displayName": "Exit",
          "destination": "building_J"
        }
      }
    },
    "building_J-JV-JV1-9480": {
      "firstVisit": true,
      "displayName": "Colonies and colonization.  Emigration and shelf",
      "description": "Description for shelf Colonies and colonization.  Emigration and in Colonies and colonization.  Emigration and Room.\n\n[|Entrance||] Colonies and colonization.  Emigration and Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_J-JV": {
          "displayName": "Entrance",
          "destination": "building_J-JV"
        }
      }
    },
    "building_J-JV": {
      "firstVisit": true,
      "displayName": "Colonies and colonization.  Emigration and Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Colonies and colonization.  Emigration and. You can exit to the floor foyer.\n\n[|Shelf|||||] Colonies and colonization.  Emigration and shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_J-JV-JV1-9480": {
          "displayName": "Shelf",
          "destination": "building_J-JV-JV1-9480"
        },
        "building_J": {
          "displayName": "Exit",
          "destination": "building_J"
        }
      }
    },
    "building_J-JA-JA1-92": {
      "firstVisit": true,
      "displayName": "Political science (General) shelf",
      "description": "Description for shelf Political science (General) in Political science (General) Room.\n\n[|Entrance||] Political science (General) Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_J-JA": {
          "displayName": "Entrance",
          "destination": "building_J-JA"
        }
      }
    },
    "building_J-JA": {
      "firstVisit": true,
      "displayName": "Political science (General) Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Political science (General). You can exit to the floor foyer.\n\n[|Shelf|||||] Political science (General) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_J-JA-JA1-92": {
          "displayName": "Shelf",
          "destination": "building_J-JA-JA1-92"
        },
        "building_J": {
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
        },
        "2_building_J": {
          "displayName": "Up",
          "destination": "2_building_J"
        }
      }
    },
    "2_building_J-JX-JX1-6650": {
      "firstVisit": true,
      "displayName": "International law, see JZ and KZ shelf",
      "description": "Description for shelf International law, see JZ and KZ in International law, see JZ and KZ Room.\n\n[|Entrance||] International law, see JZ and KZ Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_J-JX": {
          "displayName": "Entrance",
          "destination": "2_building_J-JX"
        }
      }
    },
    "2_building_J-JX": {
      "firstVisit": true,
      "displayName": "International law, see JZ and KZ Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is International law, see JZ and KZ. You can exit to the floor foyer.\n\n[|Shelf|||||] International law, see JZ and KZ shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_J-JX-JX1-6650": {
          "displayName": "Shelf",
          "destination": "2_building_J-JX-JX1-6650"
        },
        "2_building_J": {
          "displayName": "Exit",
          "destination": "2_building_J"
        }
      }
    },
    "2_building_J-JN-JN1-9689": {
      "firstVisit": true,
      "displayName": "Political institutions and public administration (Europe) shelf",
      "description": "Description for shelf Political institutions and public administration (Europe) in Political institutions and public administration (Europe) Room.\n\n[|Entrance||] Political institutions and public administration (Europe) Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_J-JN": {
          "displayName": "Entrance",
          "destination": "2_building_J-JN"
        }
      }
    },
    "2_building_J-JN": {
      "firstVisit": true,
      "displayName": "Political institutions and public administration (Europe) Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Political institutions and public administration (Europe). You can exit to the floor foyer.\n\n[|Shelf|||||] Political institutions and public administration (Europe) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_J-JN-JN1-9689": {
          "displayName": "Shelf",
          "destination": "2_building_J-JN-JN1-9689"
        },
        "2_building_J": {
          "displayName": "Exit",
          "destination": "2_building_J"
        }
      }
    },
    "2_building_J-JZ-JZ5-6530": {
      "firstVisit": true,
      "displayName": "International relations shelf",
      "description": "Description for shelf International relations in International relations Room.\n\n[|Entrance||] International relations Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_J-JZ": {
          "displayName": "Entrance",
          "destination": "2_building_J-JZ"
        }
      }
    },
    "2_building_J-JZ": {
      "firstVisit": true,
      "displayName": "International relations Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is International relations. You can exit to the floor foyer.\n\n[|Shelf|||||] International relations shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_J-JZ-JZ5-6530": {
          "displayName": "Shelf",
          "destination": "2_building_J-JZ-JZ5-6530"
        },
        "2_building_J": {
          "displayName": "Exit",
          "destination": "2_building_J"
        }
      }
    },
    "2_building_J-JL-JL1-3899": {
      "firstVisit": true,
      "displayName": "Political institutions and public administration shelf",
      "description": "Description for shelf Political institutions and public administration in Political institutions and public administration Room.\n\n[|Entrance||] Political institutions and public administration Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_J-JL": {
          "displayName": "Entrance",
          "destination": "2_building_J-JL"
        }
      }
    },
    "2_building_J-JL": {
      "firstVisit": true,
      "displayName": "Political institutions and public administration Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Political institutions and public administration. You can exit to the floor foyer.\n\n[|Shelf|||||] Political institutions and public administration shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_J-JL-JL1-3899": {
          "displayName": "Shelf",
          "destination": "2_building_J-JL-JL1-3899"
        },
        "2_building_J": {
          "displayName": "Exit",
          "destination": "2_building_J"
        }
      }
    },
    "2_building_J-J-J1-981": {
      "firstVisit": true,
      "displayName": "General legislative and executive papers shelf",
      "description": "Description for shelf General legislative and executive papers in General legislative and executive papers Room.\n\n[|Entrance||] General legislative and executive papers Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_J-J": {
          "displayName": "Entrance",
          "destination": "2_building_J-J"
        }
      }
    },
    "2_building_J-J": {
      "firstVisit": true,
      "displayName": "General legislative and executive papers Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is General legislative and executive papers. You can exit to the floor foyer.\n\n[|Shelf|||||] General legislative and executive papers shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_J-J-J1-981": {
          "displayName": "Shelf",
          "destination": "2_building_J-J-J1-981"
        },
        "2_building_J": {
          "displayName": "Exit",
          "destination": "2_building_J"
        }
      }
    },
    "2_building_J-JQ-JQ21-6651": {
      "firstVisit": true,
      "displayName": "Political institutions and public administration (Asia, shelf",
      "description": "Description for shelf Political institutions and public administration (Asia, in Political institutions and public administration (Asia, Room.\n\n[|Entrance||] Political institutions and public administration (Asia, Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_J-JQ": {
          "displayName": "Entrance",
          "destination": "2_building_J-JQ"
        }
      }
    },
    "2_building_J-JQ": {
      "firstVisit": true,
      "displayName": "Political institutions and public administration (Asia, Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Political institutions and public administration (Asia,. You can exit to the floor foyer.\n\n[|Shelf|||||] Political institutions and public administration (Asia, shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_J-JQ-JQ21-6651": {
          "displayName": "Shelf",
          "destination": "2_building_J-JQ-JQ21-6651"
        },
        "2_building_J": {
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
        "2_building_J-JX": {
          "displayName": "South",
          "destination": "2_building_J-JX"
        },
        "2_building_J-JN": {
          "displayName": "North",
          "destination": "2_building_J-JN"
        },
        "2_building_J-JZ": {
          "displayName": "SouthEast",
          "destination": "2_building_J-JZ"
        },
        "2_building_J-JL": {
          "displayName": "NorthWest",
          "destination": "2_building_J-JL"
        },
        "2_building_J-J": {
          "displayName": "SouthWest",
          "destination": "2_building_J-J"
        },
        "2_building_J-JQ": {
          "displayName": "NorthEast",
          "destination": "2_building_J-JQ"
        },
        "building_J": {
          "displayName": "Down",
          "destination": "building_J"
        },
        "3_building_J": {
          "displayName": "Up",
          "destination": "3_building_J"
        }
      }
    },
    "3_building_J-JJ-JJ1000-1019": {
      "firstVisit": true,
      "displayName": "Political institutions and public administration shelf",
      "description": "Description for shelf Political institutions and public administration in Political institutions and public administration Room.\n\n[|Entrance||] Political institutions and public administration Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_J-JJ": {
          "displayName": "Entrance",
          "destination": "3_building_J-JJ"
        }
      }
    },
    "3_building_J-JJ": {
      "firstVisit": true,
      "displayName": "Political institutions and public administration Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Political institutions and public administration. You can exit to the floor foyer.\n\n[|Shelf|||||] Political institutions and public administration shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_J-JJ-JJ1000-1019": {
          "displayName": "Shelf",
          "destination": "3_building_J-JJ-JJ1000-1019"
        },
        "3_building_J": {
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
        "3_building_J-JJ": {
          "displayName": "South",
          "destination": "3_building_J-JJ"
        },
        "2_building_J": {
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
    "building_K-KF-KF1-9827": {
      "firstVisit": true,
      "displayName": "Law of the United States (Federal) shelf",
      "description": "Description for shelf Law of the United States (Federal) in Law of the United States (Federal) Room.\n\n[|Entrance||] Law of the United States (Federal) Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KF": {
          "displayName": "Entrance",
          "destination": "building_K-KF"
        }
      }
    },
    "building_K-KF": {
      "firstVisit": true,
      "displayName": "Law of the United States (Federal) Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of the United States (Federal). You can exit to the floor foyer.\n\n[|Shelf|||||] Law of the United States (Federal) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KF-KF1-9827": {
          "displayName": "Shelf",
          "destination": "building_K-KF-KF1-9827"
        },
        "building_K": {
          "displayName": "Exit",
          "destination": "building_K"
        }
      }
    },
    "building_K-KFW-KFW": {
      "firstVisit": true,
      "displayName": "Law of Washington shelf",
      "description": "Description for shelf Law of Washington in Law of Washington Room.\n\n[|Entrance||] Law of Washington Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KFW": {
          "displayName": "Entrance",
          "destination": "building_K-KFW"
        }
      }
    },
    "building_K-KFW": {
      "firstVisit": true,
      "displayName": "Law of Washington Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Washington. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Washington shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KFW-KFW": {
          "displayName": "Shelf",
          "destination": "building_K-KFW-KFW"
        },
        "building_K": {
          "displayName": "Exit",
          "destination": "building_K"
        }
      }
    },
    "building_K-KFM-KFM": {
      "firstVisit": true,
      "displayName": "Law of Maine shelf",
      "description": "Description for shelf Law of Maine in Law of Maine Room.\n\n[|Entrance||] Law of Maine Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KFM": {
          "displayName": "Entrance",
          "destination": "building_K-KFM"
        }
      }
    },
    "building_K-KFM": {
      "firstVisit": true,
      "displayName": "Law of Maine Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Maine. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Maine shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KFM-KFM": {
          "displayName": "Shelf",
          "destination": "building_K-KFM-KFM"
        },
        "building_K": {
          "displayName": "Exit",
          "destination": "building_K"
        }
      }
    },
    "building_K-KFT-KFT": {
      "firstVisit": true,
      "displayName": "Law of Tennessee shelf",
      "description": "Description for shelf Law of Tennessee in Law of Tennessee Room.\n\n[|Entrance||] Law of Tennessee Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KFT": {
          "displayName": "Entrance",
          "destination": "building_K-KFT"
        }
      }
    },
    "building_K-KFT": {
      "firstVisit": true,
      "displayName": "Law of Tennessee Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Tennessee. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Tennessee shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KFT-KFT": {
          "displayName": "Shelf",
          "destination": "building_K-KFT-KFT"
        },
        "building_K": {
          "displayName": "Exit",
          "destination": "building_K"
        }
      }
    },
    "building_K-K-K520-5582": {
      "firstVisit": true,
      "displayName": "Comparative law.  International uniform law shelf",
      "description": "Description for shelf Comparative law.  International uniform law in Comparative law.  International uniform law Room.\n\n[|Entrance||] Comparative law.  International uniform law Room entrance\n[|Next||||||] Jurisprudence.  Philosophy and theory of law shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-K": {
          "displayName": "Entrance",
          "destination": "building_K-K"
        },
        "building_K-K-K201-487": {
          "displayName": "Next",
          "destination": "building_K-K-K201-487"
        }
      }
    },
    "building_K-K-K201-487": {
      "firstVisit": true,
      "displayName": "Jurisprudence.  Philosophy and theory of law shelf",
      "description": "Description for shelf Jurisprudence.  Philosophy and theory of law in Comparative law.  International uniform law Room.\n\n[|Previous||] Comparative law.  International uniform law shelf\n[|Next||||||] Miscellany shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-K-K520-5582": {
          "displayName": "Previous",
          "destination": "building_K-K-K520-5582"
        },
        "building_K-K-K181-184.7": {
          "displayName": "Next",
          "destination": "building_K-K-K181-184.7"
        }
      }
    },
    "building_K-K-K181-184.7": {
      "firstVisit": true,
      "displayName": "Miscellany shelf",
      "description": "Description for shelf Miscellany in Comparative law.  International uniform law Room.\n\n[|Previous||] Jurisprudence.  Philosophy and theory of law shelf\n[|Next||||||] Private international law.  Conflict of laws shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-K-K201-487": {
          "displayName": "Previous",
          "destination": "building_K-K-K201-487"
        },
        "building_K-K-K7000-7720": {
          "displayName": "Next",
          "destination": "building_K-K-K7000-7720"
        }
      }
    },
    "building_K-K-K7000-7720": {
      "firstVisit": true,
      "displayName": "Private international law.  Conflict of laws shelf",
      "description": "Description for shelf Private international law.  Conflict of laws in Comparative law.  International uniform law Room.\n\n[|Previous||] Miscellany shelf\n[|Next||||||] The legal profession shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-K-K181-184.7": {
          "displayName": "Previous",
          "destination": "building_K-K-K181-184.7"
        },
        "building_K-K-K115-130": {
          "displayName": "Next",
          "destination": "building_K-K-K115-130"
        }
      }
    },
    "building_K-K-K115-130": {
      "firstVisit": true,
      "displayName": "The legal profession shelf",
      "description": "Description for shelf The legal profession in Comparative law.  International uniform law Room.\n\n[|Previous||] Private international law.  Conflict of laws shelf\n[|Next||||||] Law societies.  International bar associations shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-K-K7000-7720": {
          "displayName": "Previous",
          "destination": "building_K-K-K7000-7720"
        },
        "building_K-K-K109-110": {
          "displayName": "Next",
          "destination": "building_K-K-K109-110"
        }
      }
    },
    "building_K-K-K109-110": {
      "firstVisit": true,
      "displayName": "Law societies.  International bar associations shelf",
      "description": "Description for shelf Law societies.  International bar associations in Comparative law.  International uniform law Room.\n\n[|Previous||] The legal profession shelf\n[|Next||||||] Ethnological jurisprudence.  Primitive law shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-K-K115-130": {
          "displayName": "Previous",
          "destination": "building_K-K-K115-130"
        },
        "building_K-K-K190-197": {
          "displayName": "Next",
          "destination": "building_K-K-K190-197"
        }
      }
    },
    "building_K-K-K190-197": {
      "firstVisit": true,
      "displayName": "Ethnological jurisprudence.  Primitive law shelf",
      "description": "Description for shelf Ethnological jurisprudence.  Primitive law in Comparative law.  International uniform law Room.\n\n[|Previous||] Law societies.  International bar associations shelf\n[|Next||||||] History of law shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-K-K109-110": {
          "displayName": "Previous",
          "destination": "building_K-K-K109-110"
        },
        "building_K-K-K140-165": {
          "displayName": "Next",
          "destination": "building_K-K-K140-165"
        }
      }
    },
    "building_K-K-K140-165": {
      "firstVisit": true,
      "displayName": "History of law shelf",
      "description": "Description for shelf History of law in Comparative law.  International uniform law Room.\n\n[|Previous||] Ethnological jurisprudence.  Primitive law shelf\n[|Next||||||] Legal research shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-K-K190-197": {
          "displayName": "Previous",
          "destination": "building_K-K-K190-197"
        },
        "building_K-K-K85-89": {
          "displayName": "Next",
          "destination": "building_K-K-K85-89"
        }
      }
    },
    "building_K-K-K85-89": {
      "firstVisit": true,
      "displayName": "Legal research shelf",
      "description": "Description for shelf Legal research in Comparative law.  International uniform law Room.\n\n[|Previous||] History of law shelf\n[|Next||||||] Maxims.  Quotations shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-K-K140-165": {
          "displayName": "Previous",
          "destination": "building_K-K-K140-165"
        },
        "building_K-K-K58": {
          "displayName": "Next",
          "destination": "building_K-K-K58"
        }
      }
    },
    "building_K-K-K58": {
      "firstVisit": true,
      "displayName": "Maxims.  Quotations shelf",
      "description": "Description for shelf Maxims.  Quotations in Comparative law.  International uniform law Room.\n\n[|Previous||] Legal research shelf\n[|Next||||||] Dictionaries.  Words and phrases shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-K-K85-89": {
          "displayName": "Previous",
          "destination": "building_K-K-K85-89"
        },
        "building_K-K-K50-54": {
          "displayName": "Next",
          "destination": "building_K-K-K50-54"
        }
      }
    },
    "building_K-K-K50-54": {
      "firstVisit": true,
      "displayName": "Dictionaries.  Words and phrases shelf",
      "description": "Description for shelf Dictionaries.  Words and phrases in Comparative law.  International uniform law Room.\n\n[|Previous||] Maxims.  Quotations shelf\n[|Next||||||] Legal aid.  Legal assistance to the poor shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-K-K58": {
          "displayName": "Previous",
          "destination": "building_K-K-K58"
        },
        "building_K-K-K133": {
          "displayName": "Next",
          "destination": "building_K-K-K133"
        }
      }
    },
    "building_K-K-K133": {
      "firstVisit": true,
      "displayName": "Legal aid.  Legal assistance to the poor shelf",
      "description": "Description for shelf Legal aid.  Legal assistance to the poor in Comparative law.  International uniform law Room.\n\n[|Previous||] Dictionaries.  Words and phrases shelf\n[|Next||||||] Encyclopedias shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-K-K50-54": {
          "displayName": "Previous",
          "destination": "building_K-K-K50-54"
        },
        "building_K-K-K48": {
          "displayName": "Next",
          "destination": "building_K-K-K48"
        }
      }
    },
    "building_K-K-K48": {
      "firstVisit": true,
      "displayName": "Encyclopedias shelf",
      "description": "Description for shelf Encyclopedias in Comparative law.  International uniform law Room.\n\n[|Previous||] Legal aid.  Legal assistance to the poor shelf\n[|Next||||||] Bibliography shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-K-K133": {
          "displayName": "Previous",
          "destination": "building_K-K-K133"
        },
        "building_K-K-K37-44": {
          "displayName": "Next",
          "destination": "building_K-K-K37-44"
        }
      }
    },
    "building_K-K-K37-44": {
      "firstVisit": true,
      "displayName": "Bibliography shelf",
      "description": "Description for shelf Bibliography in Comparative law.  International uniform law Room.\n\n[|Previous||] Encyclopedias shelf\n[|Next||||||] Legal education shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-K-K48": {
          "displayName": "Previous",
          "destination": "building_K-K-K48"
        },
        "building_K-K-K100-103": {
          "displayName": "Next",
          "destination": "building_K-K-K100-103"
        }
      }
    },
    "building_K-K-K100-103": {
      "firstVisit": true,
      "displayName": "Legal education shelf",
      "description": "Description for shelf Legal education in Comparative law.  International uniform law Room.\n\n[|Previous||] Bibliography shelf\n[|Next||||||] Periodicals shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-K-K37-44": {
          "displayName": "Previous",
          "destination": "building_K-K-K37-44"
        },
        "building_K-K-K1-36.5": {
          "displayName": "Next",
          "destination": "building_K-K-K1-36.5"
        }
      }
    },
    "building_K-K-K1-36.5": {
      "firstVisit": true,
      "displayName": "Periodicals shelf",
      "description": "Description for shelf Periodicals in Comparative law.  International uniform law Room.\n\n[|Previous||] Legal education shelf\n[|Next||||||] Biography shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-K-K100-103": {
          "displayName": "Previous",
          "destination": "building_K-K-K100-103"
        },
        "building_K-K-K170": {
          "displayName": "Next",
          "destination": "building_K-K-K170"
        }
      }
    },
    "building_K-K-K170": {
      "firstVisit": true,
      "displayName": "Biography shelf",
      "description": "Description for shelf Biography in Comparative law.  International uniform law Room.\n\n[|Previous||] Periodicals shelf\n[|Next||||||] Legal composition and draftsmanship shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-K-K1-36.5": {
          "displayName": "Previous",
          "destination": "building_K-K-K1-36.5"
        },
        "building_K-K-K94": {
          "displayName": "Next",
          "destination": "building_K-K-K94"
        }
      }
    },
    "building_K-K-K94": {
      "firstVisit": true,
      "displayName": "Legal composition and draftsmanship shelf",
      "description": "Description for shelf Legal composition and draftsmanship in Comparative law.  International uniform law Room.\n\n[|Previous||] Biography shelf\n[|Next||||||] Addresses, essays, lectures shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-K-K170": {
          "displayName": "Previous",
          "destination": "building_K-K-K170"
        },
        "building_K-K-K179": {
          "displayName": "Next",
          "destination": "building_K-K-K179"
        }
      }
    },
    "building_K-K-K179": {
      "firstVisit": true,
      "displayName": "Addresses, essays, lectures shelf",
      "description": "Description for shelf Addresses, essays, lectures in Comparative law.  International uniform law Room.\n\n[|Previous||] Legal composition and draftsmanship shelf\n[|Next||||||] Congresses shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-K-K94": {
          "displayName": "Previous",
          "destination": "building_K-K-K94"
        },
        "building_K-K-K175": {
          "displayName": "Next",
          "destination": "building_K-K-K175"
        }
      }
    },
    "building_K-K-K175": {
      "firstVisit": true,
      "displayName": "Congresses shelf",
      "description": "Description for shelf Congresses in Comparative law.  International uniform law Room.\n\n[|Previous||] Addresses, essays, lectures shelf\n[|Next||||||] Collected works (nonserial) shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-K-K179": {
          "displayName": "Previous",
          "destination": "building_K-K-K179"
        },
        "building_K-K-K176-177": {
          "displayName": "Next",
          "destination": "building_K-K-K176-177"
        }
      }
    },
    "building_K-K-K176-177": {
      "firstVisit": true,
      "displayName": "Collected works (nonserial) shelf",
      "description": "Description for shelf Collected works (nonserial) in Comparative law.  International uniform law Room.\n\n[|Previous||] Congresses shelf\n[|Next||||||] Monographic series shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-K-K175": {
          "displayName": "Previous",
          "destination": "building_K-K-K175"
        },
        "building_K-K-K46": {
          "displayName": "Next",
          "destination": "building_K-K-K46"
        }
      }
    },
    "building_K-K-K46": {
      "firstVisit": true,
      "displayName": "Monographic series shelf",
      "description": "Description for shelf Monographic series in Comparative law.  International uniform law Room.\n\n[|Previous||] Collected works (nonserial) shelf\n[|Next||||||] Directories shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-K-K176-177": {
          "displayName": "Previous",
          "destination": "building_K-K-K176-177"
        },
        "building_K-K-K68-70": {
          "displayName": "Next",
          "destination": "building_K-K-K68-70"
        }
      }
    },
    "building_K-K-K68-70": {
      "firstVisit": true,
      "displayName": "Directories shelf",
      "description": "Description for shelf Directories in Comparative law.  International uniform law Room.\n\n[|Previous||] Monographic series shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-K-K46": {
          "displayName": "Previous",
          "destination": "building_K-K-K46"
        }
      }
    },
    "building_K-K": {
      "firstVisit": true,
      "displayName": "Comparative law.  International uniform law Room entrance",
      "description": "This room has 23 shelves organized linearly from the entrance towards the back. The first shelf you can see is Comparative law.  International uniform law. You can exit to the floor foyer.\n\n[|Shelf|||||] Comparative law.  International uniform law shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-K-K520-5582": {
          "displayName": "Shelf",
          "destination": "building_K-K-K520-5582"
        },
        "building_K": {
          "displayName": "Exit",
          "destination": "building_K"
        }
      }
    },
    "building_K-KZ-KZ1-6795": {
      "firstVisit": true,
      "displayName": "Law of nations shelf",
      "description": "Description for shelf Law of nations in Law of nations Room.\n\n[|Entrance||] Law of nations Room entrance\n[|Next||||||] Law of nations shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KZ": {
          "displayName": "Entrance",
          "destination": "building_K-KZ"
        },
        "building_K-KZ-KZ1-7500": {
          "displayName": "Next",
          "destination": "building_K-KZ-KZ1-7500"
        }
      }
    },
    "building_K-KZ-KZ1-7500": {
      "firstVisit": true,
      "displayName": "Law of nations shelf",
      "description": "Description for shelf Law of nations in Law of nations Room.\n\n[|Previous||] Law of nations shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KZ-KZ1-6795": {
          "displayName": "Previous",
          "destination": "building_K-KZ-KZ1-6795"
        }
      }
    },
    "building_K-KZ": {
      "firstVisit": true,
      "displayName": "Law of nations Room entrance",
      "description": "This room has two shelves organized linearly from the entrance towards the back. The first shelf you can see is Law of nations. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of nations shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_K-KZ-KZ1-6795": {
          "displayName": "Shelf",
          "destination": "building_K-KZ-KZ1-6795"
        },
        "building_K": {
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
        },
        "2_building_K": {
          "displayName": "Up",
          "destination": "2_building_K"
        }
      }
    },
    "2_building_K-KD-KD51-9500": {
      "firstVisit": true,
      "displayName": "Law of England and Wales shelf",
      "description": "Description for shelf Law of England and Wales in Law of England and Wales Room.\n\n[|Entrance||] Law of England and Wales Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_K-KD": {
          "displayName": "Entrance",
          "destination": "2_building_K-KD"
        }
      }
    },
    "2_building_K-KD": {
      "firstVisit": true,
      "displayName": "Law of England and Wales Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of England and Wales. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of England and Wales shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_K-KD-KD51-9500": {
          "displayName": "Shelf",
          "destination": "2_building_K-KD-KD51-9500"
        },
        "2_building_K": {
          "displayName": "Exit",
          "destination": "2_building_K"
        }
      }
    },
    "2_building_K-KFP-KFP": {
      "firstVisit": true,
      "displayName": "Law of Pennsylvania shelf",
      "description": "Description for shelf Law of Pennsylvania in Law of Pennsylvania Room.\n\n[|Entrance||] Law of Pennsylvania Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_K-KFP": {
          "displayName": "Entrance",
          "destination": "2_building_K-KFP"
        }
      }
    },
    "2_building_K-KFP": {
      "firstVisit": true,
      "displayName": "Law of Pennsylvania Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Pennsylvania. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Pennsylvania shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_K-KFP-KFP": {
          "displayName": "Shelf",
          "destination": "2_building_K-KFP-KFP"
        },
        "2_building_K": {
          "displayName": "Exit",
          "destination": "2_building_K"
        }
      }
    },
    "2_building_K-KFI-KFI": {
      "firstVisit": true,
      "displayName": "Law of Idaho shelf",
      "description": "Description for shelf Law of Idaho in Law of Idaho Room.\n\n[|Entrance||] Law of Idaho Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_K-KFI": {
          "displayName": "Entrance",
          "destination": "2_building_K-KFI"
        }
      }
    },
    "2_building_K-KFI": {
      "firstVisit": true,
      "displayName": "Law of Idaho Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Idaho. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Idaho shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_K-KFI-KFI": {
          "displayName": "Shelf",
          "destination": "2_building_K-KFI-KFI"
        },
        "2_building_K": {
          "displayName": "Exit",
          "destination": "2_building_K"
        }
      }
    },
    "2_building_K-KFN-KFN": {
      "firstVisit": true,
      "displayName": "Law of Nebraska shelf",
      "description": "Description for shelf Law of Nebraska in Law of Nebraska Room.\n\n[|Entrance||] Law of Nebraska Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_K-KFN": {
          "displayName": "Entrance",
          "destination": "2_building_K-KFN"
        }
      }
    },
    "2_building_K-KFN": {
      "firstVisit": true,
      "displayName": "Law of Nebraska Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Nebraska. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Nebraska shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_K-KFN-KFN": {
          "displayName": "Shelf",
          "destination": "2_building_K-KFN-KFN"
        },
        "2_building_K": {
          "displayName": "Exit",
          "destination": "2_building_K"
        }
      }
    },
    "2_building_K-KFC-KFC": {
      "firstVisit": true,
      "displayName": "Law of California shelf",
      "description": "Description for shelf Law of California in Law of California Room.\n\n[|Entrance||] Law of California Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_K-KFC": {
          "displayName": "Entrance",
          "destination": "2_building_K-KFC"
        }
      }
    },
    "2_building_K-KFC": {
      "firstVisit": true,
      "displayName": "Law of California Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of California. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of California shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_K-KFC-KFC": {
          "displayName": "Shelf",
          "destination": "2_building_K-KFC-KFC"
        },
        "2_building_K": {
          "displayName": "Exit",
          "destination": "2_building_K"
        }
      }
    },
    "2_building_K-KFO-KFO": {
      "firstVisit": true,
      "displayName": "Law of Ohio shelf",
      "description": "Description for shelf Law of Ohio in Law of Ohio Room.\n\n[|Entrance||] Law of Ohio Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_K-KFO": {
          "displayName": "Entrance",
          "destination": "2_building_K-KFO"
        }
      }
    },
    "2_building_K-KFO": {
      "firstVisit": true,
      "displayName": "Law of Ohio Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Ohio. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Ohio shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_K-KFO-KFO": {
          "displayName": "Shelf",
          "destination": "2_building_K-KFO-KFO"
        },
        "2_building_K": {
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
        "2_building_K-KD": {
          "displayName": "South",
          "destination": "2_building_K-KD"
        },
        "2_building_K-KFP": {
          "displayName": "North",
          "destination": "2_building_K-KFP"
        },
        "2_building_K-KFI": {
          "displayName": "SouthEast",
          "destination": "2_building_K-KFI"
        },
        "2_building_K-KFN": {
          "displayName": "NorthWest",
          "destination": "2_building_K-KFN"
        },
        "2_building_K-KFC": {
          "displayName": "SouthWest",
          "destination": "2_building_K-KFC"
        },
        "2_building_K-KFO": {
          "displayName": "NorthEast",
          "destination": "2_building_K-KFO"
        },
        "building_K": {
          "displayName": "Down",
          "destination": "building_K"
        },
        "3_building_K": {
          "displayName": "Up",
          "destination": "3_building_K"
        }
      }
    },
    "3_building_K-KFL-KFL": {
      "firstVisit": true,
      "displayName": "Law of Louisiana shelf",
      "description": "Description for shelf Law of Louisiana in Law of Louisiana Room.\n\n[|Entrance||] Law of Louisiana Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_K-KFL": {
          "displayName": "Entrance",
          "destination": "3_building_K-KFL"
        }
      }
    },
    "3_building_K-KFL": {
      "firstVisit": true,
      "displayName": "Law of Louisiana Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Louisiana. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Louisiana shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_K-KFL-KFL": {
          "displayName": "Shelf",
          "destination": "3_building_K-KFL-KFL"
        },
        "3_building_K": {
          "displayName": "Exit",
          "destination": "3_building_K"
        }
      }
    },
    "3_building_K-KFA-KFA": {
      "firstVisit": true,
      "displayName": "Law of Alabama shelf",
      "description": "Description for shelf Law of Alabama in Law of Alabama Room.\n\n[|Entrance||] Law of Alabama Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_K-KFA": {
          "displayName": "Entrance",
          "destination": "3_building_K-KFA"
        }
      }
    },
    "3_building_K-KFA": {
      "firstVisit": true,
      "displayName": "Law of Alabama Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Alabama. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Alabama shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_K-KFA-KFA": {
          "displayName": "Shelf",
          "destination": "3_building_K-KFA-KFA"
        },
        "3_building_K": {
          "displayName": "Exit",
          "destination": "3_building_K"
        }
      }
    },
    "3_building_K-KLA-KLA1-9999": {
      "firstVisit": true,
      "displayName": "Russia, Soviet Union shelf",
      "description": "Description for shelf Russia, Soviet Union in Russia, Soviet Union Room.\n\n[|Entrance||] Russia, Soviet Union Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_K-KLA": {
          "displayName": "Entrance",
          "destination": "3_building_K-KLA"
        }
      }
    },
    "3_building_K-KLA": {
      "firstVisit": true,
      "displayName": "Russia, Soviet Union Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Russia, Soviet Union. You can exit to the floor foyer.\n\n[|Shelf|||||] Russia, Soviet Union shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_K-KLA-KLA1-9999": {
          "displayName": "Shelf",
          "destination": "3_building_K-KLA-KLA1-9999"
        },
        "3_building_K": {
          "displayName": "Exit",
          "destination": "3_building_K"
        }
      }
    },
    "3_building_K-KKT-KKT": {
      "firstVisit": true,
      "displayName": "Law of Spain shelf",
      "description": "Description for shelf Law of Spain in Law of Spain Room.\n\n[|Entrance||] Law of Spain Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_K-KKT": {
          "displayName": "Entrance",
          "destination": "3_building_K-KKT"
        }
      }
    },
    "3_building_K-KKT": {
      "firstVisit": true,
      "displayName": "Law of Spain Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Spain. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Spain shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_K-KKT-KKT": {
          "displayName": "Shelf",
          "destination": "3_building_K-KKT-KKT"
        },
        "3_building_K": {
          "displayName": "Exit",
          "destination": "3_building_K"
        }
      }
    },
    "3_building_K-KMT-KMT1-4990": {
      "firstVisit": true,
      "displayName": "Saudi Arabia shelf",
      "description": "Description for shelf Saudi Arabia in Saudi Arabia Room.\n\n[|Entrance||] Saudi Arabia Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_K-KMT": {
          "displayName": "Entrance",
          "destination": "3_building_K-KMT"
        }
      }
    },
    "3_building_K-KMT": {
      "firstVisit": true,
      "displayName": "Saudi Arabia Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Saudi Arabia. You can exit to the floor foyer.\n\n[|Shelf|||||] Saudi Arabia shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_K-KMT-KMT1-4990": {
          "displayName": "Shelf",
          "destination": "3_building_K-KMT-KMT1-4990"
        },
        "3_building_K": {
          "displayName": "Exit",
          "destination": "3_building_K"
        }
      }
    },
    "3_building_K-KJM-KJM": {
      "firstVisit": true,
      "displayName": "Law of Croatia shelf",
      "description": "Description for shelf Law of Croatia in Law of Croatia Room.\n\n[|Entrance||] Law of Croatia Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_K-KJM": {
          "displayName": "Entrance",
          "destination": "3_building_K-KJM"
        }
      }
    },
    "3_building_K-KJM": {
      "firstVisit": true,
      "displayName": "Law of Croatia Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Croatia. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Croatia shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_K-KJM-KJM": {
          "displayName": "Shelf",
          "destination": "3_building_K-KJM-KJM"
        },
        "3_building_K": {
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
        "3_building_K-KFL": {
          "displayName": "South",
          "destination": "3_building_K-KFL"
        },
        "3_building_K-KFA": {
          "displayName": "North",
          "destination": "3_building_K-KFA"
        },
        "3_building_K-KLA": {
          "displayName": "SouthEast",
          "destination": "3_building_K-KLA"
        },
        "3_building_K-KKT": {
          "displayName": "NorthWest",
          "destination": "3_building_K-KKT"
        },
        "3_building_K-KMT": {
          "displayName": "SouthWest",
          "destination": "3_building_K-KMT"
        },
        "3_building_K-KJM": {
          "displayName": "NorthEast",
          "destination": "3_building_K-KJM"
        },
        "2_building_K": {
          "displayName": "Down",
          "destination": "2_building_K"
        },
        "4_building_K": {
          "displayName": "Up",
          "destination": "4_building_K"
        }
      }
    },
    "4_building_K-KBP-KBP1-4860": {
      "firstVisit": true,
      "displayName": "Islamic law.  Shar\u012b\u02bbah.  Fiqh shelf",
      "description": "Description for shelf Islamic law.  Shar\u012b\u02bbah.  Fiqh in Islamic law.  Shar\u012b\u02bbah.  Fiqh Room.\n\n[|Entrance||] Islamic law.  Shar\u012b\u02bbah.  Fiqh Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "4_building_K-KBP": {
          "displayName": "Entrance",
          "destination": "4_building_K-KBP"
        }
      }
    },
    "4_building_K-KBP": {
      "firstVisit": true,
      "displayName": "Islamic law.  Shar\u012b\u02bbah.  Fiqh Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Islamic law.  Shar\u012b\u02bbah.  Fiqh. You can exit to the floor foyer.\n\n[|Shelf|||||] Islamic law.  Shar\u012b\u02bbah.  Fiqh shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "4_building_K-KBP-KBP1-4860": {
          "displayName": "Shelf",
          "destination": "4_building_K-KBP-KBP1-4860"
        },
        "4_building_K": {
          "displayName": "Exit",
          "destination": "4_building_K"
        }
      }
    },
    "4_building_K-KBR-KBR2-4090": {
      "firstVisit": true,
      "displayName": "History of canon law shelf",
      "description": "Description for shelf History of canon law in History of canon law Room.\n\n[|Entrance||] History of canon law Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "4_building_K-KBR": {
          "displayName": "Entrance",
          "destination": "4_building_K-KBR"
        }
      }
    },
    "4_building_K-KBR": {
      "firstVisit": true,
      "displayName": "History of canon law Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is History of canon law. You can exit to the floor foyer.\n\n[|Shelf|||||] History of canon law shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "4_building_K-KBR-KBR2-4090": {
          "displayName": "Shelf",
          "destination": "4_building_K-KBR-KBR2-4090"
        },
        "4_building_K": {
          "displayName": "Exit",
          "destination": "4_building_K"
        }
      }
    },
    "4_building_K-KZA-KZA1002-4205": {
      "firstVisit": true,
      "displayName": "Law of the sea shelf",
      "description": "Description for shelf Law of the sea in Law of the sea Room.\n\n[|Entrance||] Law of the sea Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "4_building_K-KZA": {
          "displayName": "Entrance",
          "destination": "4_building_K-KZA"
        }
      }
    },
    "4_building_K-KZA": {
      "firstVisit": true,
      "displayName": "Law of the sea Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of the sea. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of the sea shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "4_building_K-KZA-KZA1002-4205": {
          "displayName": "Shelf",
          "destination": "4_building_K-KZA-KZA1002-4205"
        },
        "4_building_K": {
          "displayName": "Exit",
          "destination": "4_building_K"
        }
      }
    },
    "4_building_K-KNQ-KNQ1-9665": {
      "firstVisit": true,
      "displayName": "China (People\u2019s Republic, 1949-    ) shelf",
      "description": "Description for shelf China (People\u2019s Republic, 1949-    ) in China (People\u2019s Republic, 1949-    ) Room.\n\n[|Entrance||] China (People\u2019s Republic, 1949-    ) Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "4_building_K-KNQ": {
          "displayName": "Entrance",
          "destination": "4_building_K-KNQ"
        }
      }
    },
    "4_building_K-KNQ": {
      "firstVisit": true,
      "displayName": "China (People\u2019s Republic, 1949-    ) Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is China (People\u2019s Republic, 1949-    ). You can exit to the floor foyer.\n\n[|Shelf|||||] China (People\u2019s Republic, 1949-    ) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "4_building_K-KNQ-KNQ1-9665": {
          "displayName": "Shelf",
          "destination": "4_building_K-KNQ-KNQ1-9665"
        },
        "4_building_K": {
          "displayName": "Exit",
          "destination": "4_building_K"
        }
      }
    },
    "4_building_K-KJE-KJE5-9570": {
      "firstVisit": true,
      "displayName": "Regional organization and integration (Europe) shelf",
      "description": "Description for shelf Regional organization and integration (Europe) in Regional organization and integration (Europe) Room.\n\n[|Entrance||] Regional organization and integration (Europe) Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "4_building_K-KJE": {
          "displayName": "Entrance",
          "destination": "4_building_K-KJE"
        }
      }
    },
    "4_building_K-KJE": {
      "firstVisit": true,
      "displayName": "Regional organization and integration (Europe) Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Regional organization and integration (Europe). You can exit to the floor foyer.\n\n[|Shelf|||||] Regional organization and integration (Europe) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "4_building_K-KJE-KJE5-9570": {
          "displayName": "Shelf",
          "destination": "4_building_K-KJE-KJE5-9570"
        },
        "4_building_K": {
          "displayName": "Exit",
          "destination": "4_building_K"
        }
      }
    },
    "4_building_K-KFV-KFV": {
      "firstVisit": true,
      "displayName": "Law of Vermont shelf",
      "description": "Description for shelf Law of Vermont in Law of Vermont Room.\n\n[|Entrance||] Law of Vermont Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "4_building_K-KFV": {
          "displayName": "Entrance",
          "destination": "4_building_K-KFV"
        }
      }
    },
    "4_building_K-KFV": {
      "firstVisit": true,
      "displayName": "Law of Vermont Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Vermont. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Vermont shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "4_building_K-KFV-KFV": {
          "displayName": "Shelf",
          "destination": "4_building_K-KFV-KFV"
        },
        "4_building_K": {
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
        "4_building_K-KBP": {
          "displayName": "South",
          "destination": "4_building_K-KBP"
        },
        "4_building_K-KBR": {
          "displayName": "North",
          "destination": "4_building_K-KBR"
        },
        "4_building_K-KZA": {
          "displayName": "SouthEast",
          "destination": "4_building_K-KZA"
        },
        "4_building_K-KNQ": {
          "displayName": "NorthWest",
          "destination": "4_building_K-KNQ"
        },
        "4_building_K-KJE": {
          "displayName": "SouthWest",
          "destination": "4_building_K-KJE"
        },
        "4_building_K-KFV": {
          "displayName": "NorthEast",
          "destination": "4_building_K-KFV"
        },
        "3_building_K": {
          "displayName": "Down",
          "destination": "3_building_K"
        },
        "5_building_K": {
          "displayName": "Up",
          "destination": "5_building_K"
        }
      }
    },
    "5_building_K-KNN-KNN": {
      "firstVisit": true,
      "displayName": "Law of China shelf",
      "description": "Description for shelf Law of China in Law of China Room.\n\n[|Entrance||] Law of China Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "5_building_K-KNN": {
          "displayName": "Entrance",
          "destination": "5_building_K-KNN"
        }
      }
    },
    "5_building_K-KNN": {
      "firstVisit": true,
      "displayName": "Law of China Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of China. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of China shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "5_building_K-KNN-KNN": {
          "displayName": "Shelf",
          "destination": "5_building_K-KNN-KNN"
        },
        "5_building_K": {
          "displayName": "Exit",
          "destination": "5_building_K"
        }
      }
    },
    "5_building_K-KMM-KMM501-994": {
      "firstVisit": true,
      "displayName": "West Bank shelf",
      "description": "Description for shelf West Bank in West Bank Room.\n\n[|Entrance||] West Bank Room entrance\n[|Next||||||] Jordan shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "5_building_K-KMM": {
          "displayName": "Entrance",
          "destination": "5_building_K-KMM"
        },
        "5_building_K-KMM-KMM1-490": {
          "displayName": "Next",
          "destination": "5_building_K-KMM-KMM1-490"
        }
      }
    },
    "5_building_K-KMM-KMM1-490": {
      "firstVisit": true,
      "displayName": "Jordan shelf",
      "description": "Description for shelf Jordan in West Bank Room.\n\n[|Previous||] West Bank shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "5_building_K-KMM-KMM501-994": {
          "displayName": "Previous",
          "destination": "5_building_K-KMM-KMM501-994"
        }
      }
    },
    "5_building_K-KMM": {
      "firstVisit": true,
      "displayName": "West Bank Room entrance",
      "description": "This room has two shelves organized linearly from the entrance towards the back. The first shelf you can see is West Bank. You can exit to the floor foyer.\n\n[|Shelf|||||] West Bank shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "5_building_K-KMM-KMM501-994": {
          "displayName": "Shelf",
          "destination": "5_building_K-KMM-KMM501-994"
        },
        "5_building_K": {
          "displayName": "Exit",
          "destination": "5_building_K"
        }
      }
    },
    "5_building_K-KJC-KJC2-9799": {
      "firstVisit": true,
      "displayName": "Regional comparative and uniform law (Europe) shelf",
      "description": "Description for shelf Regional comparative and uniform law (Europe) in Regional comparative and uniform law (Europe) Room.\n\n[|Entrance||] Regional comparative and uniform law (Europe) Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "5_building_K-KJC": {
          "displayName": "Entrance",
          "destination": "5_building_K-KJC"
        }
      }
    },
    "5_building_K-KJC": {
      "firstVisit": true,
      "displayName": "Regional comparative and uniform law (Europe) Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Regional comparative and uniform law (Europe). You can exit to the floor foyer.\n\n[|Shelf|||||] Regional comparative and uniform law (Europe) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "5_building_K-KJC-KJC2-9799": {
          "displayName": "Shelf",
          "destination": "5_building_K-KJC-KJC2-9799"
        },
        "5_building_K": {
          "displayName": "Exit",
          "destination": "5_building_K"
        }
      }
    },
    "5_building_K-KMK-KMK1-4990": {
      "firstVisit": true,
      "displayName": "Israel shelf",
      "description": "Description for shelf Israel in Israel Room.\n\n[|Entrance||] Israel Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "5_building_K-KMK": {
          "displayName": "Entrance",
          "destination": "5_building_K-KMK"
        }
      }
    },
    "5_building_K-KMK": {
      "firstVisit": true,
      "displayName": "Israel Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Israel. You can exit to the floor foyer.\n\n[|Shelf|||||] Israel shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "5_building_K-KMK-KMK1-4990": {
          "displayName": "Shelf",
          "destination": "5_building_K-KMK-KMK1-4990"
        },
        "5_building_K": {
          "displayName": "Exit",
          "destination": "5_building_K"
        }
      }
    },
    "5_building_K-KTL-KTL1-9560": {
      "firstVisit": true,
      "displayName": "South Africa, Republic of shelf",
      "description": "Description for shelf South Africa, Republic of in South Africa, Republic of Room.\n\n[|Entrance||] South Africa, Republic of Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "5_building_K-KTL": {
          "displayName": "Entrance",
          "destination": "5_building_K-KTL"
        }
      }
    },
    "5_building_K-KTL": {
      "firstVisit": true,
      "displayName": "South Africa, Republic of Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is South Africa, Republic of. You can exit to the floor foyer.\n\n[|Shelf|||||] South Africa, Republic of shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "5_building_K-KTL-KTL1-9560": {
          "displayName": "Shelf",
          "destination": "5_building_K-KTL-KTL1-9560"
        },
        "5_building_K": {
          "displayName": "Exit",
          "destination": "5_building_K"
        }
      }
    },
    "5_building_K-KMC-KMC1-849": {
      "firstVisit": true,
      "displayName": "Regional comparative and uniform law shelf",
      "description": "Description for shelf Regional comparative and uniform law in Regional comparative and uniform law Room.\n\n[|Entrance||] Regional comparative and uniform law Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "5_building_K-KMC": {
          "displayName": "Entrance",
          "destination": "5_building_K-KMC"
        }
      }
    },
    "5_building_K-KMC": {
      "firstVisit": true,
      "displayName": "Regional comparative and uniform law Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Regional comparative and uniform law. You can exit to the floor foyer.\n\n[|Shelf|||||] Regional comparative and uniform law shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "5_building_K-KMC-KMC1-849": {
          "displayName": "Shelf",
          "destination": "5_building_K-KMC-KMC1-849"
        },
        "5_building_K": {
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
        "5_building_K-KNN": {
          "displayName": "South",
          "destination": "5_building_K-KNN"
        },
        "5_building_K-KMM": {
          "displayName": "North",
          "destination": "5_building_K-KMM"
        },
        "5_building_K-KJC": {
          "displayName": "SouthEast",
          "destination": "5_building_K-KJC"
        },
        "5_building_K-KMK": {
          "displayName": "NorthWest",
          "destination": "5_building_K-KMK"
        },
        "5_building_K-KTL": {
          "displayName": "SouthWest",
          "destination": "5_building_K-KTL"
        },
        "5_building_K-KMC": {
          "displayName": "NorthEast",
          "destination": "5_building_K-KMC"
        },
        "4_building_K": {
          "displayName": "Down",
          "destination": "4_building_K"
        },
        "6_building_K": {
          "displayName": "Up",
          "destination": "6_building_K"
        }
      }
    },
    "6_building_K-KEN-KEN1-599": {
      "firstVisit": true,
      "displayName": "Law of New Brunswick shelf",
      "description": "Description for shelf Law of New Brunswick in Law of New Brunswick Room.\n\n[|Entrance||] Law of New Brunswick Room entrance\n[|Next||||||] Law of Newfoundland and Labrador shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "6_building_K-KEN": {
          "displayName": "Entrance",
          "destination": "6_building_K-KEN"
        },
        "6_building_K-KEN-KEN1201-1799": {
          "displayName": "Next",
          "destination": "6_building_K-KEN-KEN1201-1799"
        }
      }
    },
    "6_building_K-KEN-KEN1201-1799": {
      "firstVisit": true,
      "displayName": "Law of Newfoundland and Labrador shelf",
      "description": "Description for shelf Law of Newfoundland and Labrador in Law of New Brunswick Room.\n\n[|Previous||] Law of New Brunswick shelf\n[|Next||||||] Law of Northwest Territories shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "6_building_K-KEN-KEN1-599": {
          "displayName": "Previous",
          "destination": "6_building_K-KEN-KEN1-599"
        },
        "6_building_K-KEN-KEN5401-5999": {
          "displayName": "Next",
          "destination": "6_building_K-KEN-KEN5401-5999"
        }
      }
    },
    "6_building_K-KEN-KEN5401-5999": {
      "firstVisit": true,
      "displayName": "Law of Northwest Territories shelf",
      "description": "Description for shelf Law of Northwest Territories in Law of New Brunswick Room.\n\n[|Previous||] Law of Newfoundland and Labrador shelf\n[|Next||||||] Law of Nova Scotia shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "6_building_K-KEN-KEN1201-1799": {
          "displayName": "Previous",
          "destination": "6_building_K-KEN-KEN1201-1799"
        },
        "6_building_K-KEN-KEN7401-7999": {
          "displayName": "Next",
          "destination": "6_building_K-KEN-KEN7401-7999"
        }
      }
    },
    "6_building_K-KEN-KEN7401-7999": {
      "firstVisit": true,
      "displayName": "Law of Nova Scotia shelf",
      "description": "Description for shelf Law of Nova Scotia in Law of New Brunswick Room.\n\n[|Previous||] Law of Northwest Territories shelf\n[|Next||||||] Law of Nunavut shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "6_building_K-KEN-KEN5401-5999": {
          "displayName": "Previous",
          "destination": "6_building_K-KEN-KEN5401-5999"
        },
        "6_building_K-KEN-KEN8001-8599": {
          "displayName": "Next",
          "destination": "6_building_K-KEN-KEN8001-8599"
        }
      }
    },
    "6_building_K-KEN-KEN8001-8599": {
      "firstVisit": true,
      "displayName": "Law of Nunavut shelf",
      "description": "Description for shelf Law of Nunavut in Law of New Brunswick Room.\n\n[|Previous||] Law of Nova Scotia shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "6_building_K-KEN-KEN7401-7999": {
          "displayName": "Previous",
          "destination": "6_building_K-KEN-KEN7401-7999"
        }
      }
    },
    "6_building_K-KEN": {
      "firstVisit": true,
      "displayName": "Law of New Brunswick Room entrance",
      "description": "This room has five shelves organized linearly from the entrance towards the back. The first shelf you can see is Law of New Brunswick. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of New Brunswick shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "6_building_K-KEN-KEN1-599": {
          "displayName": "Shelf",
          "destination": "6_building_K-KEN-KEN1-599"
        },
        "6_building_K": {
          "displayName": "Exit",
          "destination": "6_building_K"
        }
      }
    },
    "6_building_K-KRP-KRP1-4990": {
      "firstVisit": true,
      "displayName": "Ethiopia shelf",
      "description": "Description for shelf Ethiopia in Ethiopia Room.\n\n[|Entrance||] Ethiopia Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "6_building_K-KRP": {
          "displayName": "Entrance",
          "destination": "6_building_K-KRP"
        }
      }
    },
    "6_building_K-KRP": {
      "firstVisit": true,
      "displayName": "Ethiopia Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Ethiopia. You can exit to the floor foyer.\n\n[|Shelf|||||] Ethiopia shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "6_building_K-KRP-KRP1-4990": {
          "displayName": "Shelf",
          "destination": "6_building_K-KRP-KRP1-4990"
        },
        "6_building_K": {
          "displayName": "Exit",
          "destination": "6_building_K"
        }
      }
    },
    "6_building_K-KJA-KJA2-3660": {
      "firstVisit": true,
      "displayName": "Roman Law shelf",
      "description": "Description for shelf Roman Law in Roman Law Room.\n\n[|Entrance||] Roman Law Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "6_building_K-KJA": {
          "displayName": "Entrance",
          "destination": "6_building_K-KJA"
        }
      }
    },
    "6_building_K-KJA": {
      "firstVisit": true,
      "displayName": "Roman Law Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Roman Law. You can exit to the floor foyer.\n\n[|Shelf|||||] Roman Law shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "6_building_K-KJA-KJA2-3660": {
          "displayName": "Shelf",
          "destination": "6_building_K-KJA-KJA2-3660"
        },
        "6_building_K": {
          "displayName": "Exit",
          "destination": "6_building_K"
        }
      }
    },
    "6_building_K-KJV-KJV2-9158": {
      "firstVisit": true,
      "displayName": "Law of France shelf",
      "description": "Description for shelf Law of France in Law of France Room.\n\n[|Entrance||] Law of France Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "6_building_K-KJV": {
          "displayName": "Entrance",
          "destination": "6_building_K-KJV"
        }
      }
    },
    "6_building_K-KJV": {
      "firstVisit": true,
      "displayName": "Law of France Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of France. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of France shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "6_building_K-KJV-KJV2-9158": {
          "displayName": "Shelf",
          "destination": "6_building_K-KJV-KJV2-9158"
        },
        "6_building_K": {
          "displayName": "Exit",
          "destination": "6_building_K"
        }
      }
    },
    "6_building_K-KBU-KBU2-4820": {
      "firstVisit": true,
      "displayName": "Law of the Roman Catholic Church. The Holy See shelf",
      "description": "Description for shelf Law of the Roman Catholic Church. The Holy See in Law of the Roman Catholic Church. The Holy See Room.\n\n[|Entrance||] Law of the Roman Catholic Church. The Holy See Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "6_building_K-KBU": {
          "displayName": "Entrance",
          "destination": "6_building_K-KBU"
        }
      }
    },
    "6_building_K-KBU": {
      "firstVisit": true,
      "displayName": "Law of the Roman Catholic Church. The Holy See Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of the Roman Catholic Church. The Holy See. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of the Roman Catholic Church. The Holy See shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "6_building_K-KBU-KBU2-4820": {
          "displayName": "Shelf",
          "destination": "6_building_K-KBU-KBU2-4820"
        },
        "6_building_K": {
          "displayName": "Exit",
          "destination": "6_building_K"
        }
      }
    },
    "6_building_K-KLB-KLB1-5780": {
      "firstVisit": true,
      "displayName": "Russia (Federation, 1992-    ) shelf",
      "description": "Description for shelf Russia (Federation, 1992-    ) in Russia (Federation, 1992-    ) Room.\n\n[|Entrance||] Russia (Federation, 1992-    ) Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "6_building_K-KLB": {
          "displayName": "Entrance",
          "destination": "6_building_K-KLB"
        }
      }
    },
    "6_building_K-KLB": {
      "firstVisit": true,
      "displayName": "Russia (Federation, 1992-    ) Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Russia (Federation, 1992-    ). You can exit to the floor foyer.\n\n[|Shelf|||||] Russia (Federation, 1992-    ) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "6_building_K-KLB-KLB1-5780": {
          "displayName": "Shelf",
          "destination": "6_building_K-KLB-KLB1-5780"
        },
        "6_building_K": {
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
        "6_building_K-KEN": {
          "displayName": "South",
          "destination": "6_building_K-KEN"
        },
        "6_building_K-KRP": {
          "displayName": "North",
          "destination": "6_building_K-KRP"
        },
        "6_building_K-KJA": {
          "displayName": "SouthEast",
          "destination": "6_building_K-KJA"
        },
        "6_building_K-KJV": {
          "displayName": "NorthWest",
          "destination": "6_building_K-KJV"
        },
        "6_building_K-KBU": {
          "displayName": "SouthWest",
          "destination": "6_building_K-KBU"
        },
        "6_building_K-KLB": {
          "displayName": "NorthEast",
          "destination": "6_building_K-KLB"
        },
        "5_building_K": {
          "displayName": "Down",
          "destination": "5_building_K"
        },
        "7_building_K": {
          "displayName": "Up",
          "destination": "7_building_K"
        }
      }
    },
    "7_building_K-KK-KK2-9799.3": {
      "firstVisit": true,
      "displayName": "Law of Germany shelf",
      "description": "Description for shelf Law of Germany in Law of Germany Room.\n\n[|Entrance||] Law of Germany Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "7_building_K-KK": {
          "displayName": "Entrance",
          "destination": "7_building_K-KK"
        }
      }
    },
    "7_building_K-KK": {
      "firstVisit": true,
      "displayName": "Law of Germany Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Germany. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Germany shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "7_building_K-KK-KK2-9799.3": {
          "displayName": "Shelf",
          "destination": "7_building_K-KK-KK2-9799.3"
        },
        "7_building_K": {
          "displayName": "Exit",
          "destination": "7_building_K"
        }
      }
    },
    "7_building_K-KFG-KFG": {
      "firstVisit": true,
      "displayName": "Law of Georgia shelf",
      "description": "Description for shelf Law of Georgia in Law of Georgia Room.\n\n[|Entrance||] Law of Georgia Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "7_building_K-KFG": {
          "displayName": "Entrance",
          "destination": "7_building_K-KFG"
        }
      }
    },
    "7_building_K-KFG": {
      "firstVisit": true,
      "displayName": "Law of Georgia Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Georgia. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Georgia shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "7_building_K-KFG-KFG": {
          "displayName": "Shelf",
          "destination": "7_building_K-KFG-KFG"
        },
        "7_building_K": {
          "displayName": "Exit",
          "destination": "7_building_K"
        }
      }
    },
    "7_building_K-KHA-KHA1-9800": {
      "firstVisit": true,
      "displayName": "Argentina shelf",
      "description": "Description for shelf Argentina in Argentina Room.\n\n[|Entrance||] Argentina Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "7_building_K-KHA": {
          "displayName": "Entrance",
          "destination": "7_building_K-KHA"
        }
      }
    },
    "7_building_K-KHA": {
      "firstVisit": true,
      "displayName": "Argentina Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Argentina. You can exit to the floor foyer.\n\n[|Shelf|||||] Argentina shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "7_building_K-KHA-KHA1-9800": {
          "displayName": "Shelf",
          "destination": "7_building_K-KHA-KHA1-9800"
        },
        "7_building_K": {
          "displayName": "Exit",
          "destination": "7_building_K"
        }
      }
    },
    "7_building_K-KLW-KLW1-490": {
      "firstVisit": true,
      "displayName": "Uzbekistan shelf",
      "description": "Description for shelf Uzbekistan in Uzbekistan Room.\n\n[|Entrance||] Uzbekistan Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "7_building_K-KLW": {
          "displayName": "Entrance",
          "destination": "7_building_K-KLW"
        }
      }
    },
    "7_building_K-KLW": {
      "firstVisit": true,
      "displayName": "Uzbekistan Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Uzbekistan. You can exit to the floor foyer.\n\n[|Shelf|||||] Uzbekistan shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "7_building_K-KLW-KLW1-490": {
          "displayName": "Shelf",
          "destination": "7_building_K-KLW-KLW1-490"
        },
        "7_building_K": {
          "displayName": "Exit",
          "destination": "7_building_K"
        }
      }
    },
    "7_building_K-KNW-KNW1-4990": {
      "firstVisit": true,
      "displayName": "Indonesia shelf",
      "description": "Description for shelf Indonesia in Indonesia Room.\n\n[|Entrance||] Indonesia Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "7_building_K-KNW": {
          "displayName": "Entrance",
          "destination": "7_building_K-KNW"
        }
      }
    },
    "7_building_K-KNW": {
      "firstVisit": true,
      "displayName": "Indonesia Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Indonesia. You can exit to the floor foyer.\n\n[|Shelf|||||] Indonesia shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "7_building_K-KNW-KNW1-4990": {
          "displayName": "Shelf",
          "destination": "7_building_K-KNW-KNW1-4990"
        },
        "7_building_K": {
          "displayName": "Exit",
          "destination": "7_building_K"
        }
      }
    },
    "7_building_K-KQC-KQC1-999": {
      "firstVisit": true,
      "displayName": "Regional comparative and uniform law shelf",
      "description": "Description for shelf Regional comparative and uniform law in Regional comparative and uniform law Room.\n\n[|Entrance||] Regional comparative and uniform law Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "7_building_K-KQC": {
          "displayName": "Entrance",
          "destination": "7_building_K-KQC"
        }
      }
    },
    "7_building_K-KQC": {
      "firstVisit": true,
      "displayName": "Regional comparative and uniform law Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Regional comparative and uniform law. You can exit to the floor foyer.\n\n[|Shelf|||||] Regional comparative and uniform law shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "7_building_K-KQC-KQC1-999": {
          "displayName": "Shelf",
          "destination": "7_building_K-KQC-KQC1-999"
        },
        "7_building_K": {
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
        "7_building_K-KK": {
          "displayName": "South",
          "destination": "7_building_K-KK"
        },
        "7_building_K-KFG": {
          "displayName": "North",
          "destination": "7_building_K-KFG"
        },
        "7_building_K-KHA": {
          "displayName": "SouthEast",
          "destination": "7_building_K-KHA"
        },
        "7_building_K-KLW": {
          "displayName": "NorthWest",
          "destination": "7_building_K-KLW"
        },
        "7_building_K-KNW": {
          "displayName": "SouthWest",
          "destination": "7_building_K-KNW"
        },
        "7_building_K-KQC": {
          "displayName": "NorthEast",
          "destination": "7_building_K-KQC"
        },
        "6_building_K": {
          "displayName": "Down",
          "destination": "6_building_K"
        },
        "8_building_K": {
          "displayName": "Up",
          "destination": "8_building_K"
        }
      }
    },
    "8_building_K-KDZ-KDZ1-4499": {
      "firstVisit": true,
      "displayName": "America.  North America shelf",
      "description": "Description for shelf America.  North America in America.  North America Room.\n\n[|Entrance||] America.  North America Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "8_building_K-KDZ": {
          "displayName": "Entrance",
          "destination": "8_building_K-KDZ"
        }
      }
    },
    "8_building_K-KDZ": {
      "firstVisit": true,
      "displayName": "America.  North America Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is America.  North America. You can exit to the floor foyer.\n\n[|Shelf|||||] America.  North America shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "8_building_K-KDZ-KDZ1-4499": {
          "displayName": "Shelf",
          "destination": "8_building_K-KDZ-KDZ1-4499"
        },
        "8_building_K": {
          "displayName": "Exit",
          "destination": "8_building_K"
        }
      }
    },
    "8_building_K-KFK-KFK": {
      "firstVisit": true,
      "displayName": "Law of Kansas shelf",
      "description": "Description for shelf Law of Kansas in Law of Kansas Room.\n\n[|Entrance||] Law of Kansas Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "8_building_K-KFK": {
          "displayName": "Entrance",
          "destination": "8_building_K-KFK"
        }
      }
    },
    "8_building_K-KFK": {
      "firstVisit": true,
      "displayName": "Law of Kansas Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Kansas. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Kansas shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "8_building_K-KFK-KFK": {
          "displayName": "Shelf",
          "destination": "8_building_K-KFK-KFK"
        },
        "8_building_K": {
          "displayName": "Exit",
          "destination": "8_building_K"
        }
      }
    },
    "8_building_K-KDC-KDC51-990": {
      "firstVisit": true,
      "displayName": "Law of Scotland shelf",
      "description": "Description for shelf Law of Scotland in Law of Scotland Room.\n\n[|Entrance||] Law of Scotland Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "8_building_K-KDC": {
          "displayName": "Entrance",
          "destination": "8_building_K-KDC"
        }
      }
    },
    "8_building_K-KDC": {
      "firstVisit": true,
      "displayName": "Law of Scotland Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Scotland. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Scotland shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "8_building_K-KDC-KDC51-990": {
          "displayName": "Shelf",
          "destination": "8_building_K-KDC-KDC51-990"
        },
        "8_building_K": {
          "displayName": "Exit",
          "destination": "8_building_K"
        }
      }
    },
    "8_building_K-KNR-KNR1-489": {
      "firstVisit": true,
      "displayName": "Hong Kong shelf",
      "description": "Description for shelf Hong Kong in Hong Kong Room.\n\n[|Entrance||] Hong Kong Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "8_building_K-KNR": {
          "displayName": "Entrance",
          "destination": "8_building_K-KNR"
        }
      }
    },
    "8_building_K-KNR": {
      "firstVisit": true,
      "displayName": "Hong Kong Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Hong Kong. You can exit to the floor foyer.\n\n[|Shelf|||||] Hong Kong shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "8_building_K-KNR-KNR1-489": {
          "displayName": "Shelf",
          "destination": "8_building_K-KNR-KNR1-489"
        },
        "8_building_K": {
          "displayName": "Exit",
          "destination": "8_building_K"
        }
      }
    },
    "8_building_K-KFF-KFF": {
      "firstVisit": true,
      "displayName": "Law of Florida shelf",
      "description": "Description for shelf Law of Florida in Law of Florida Room.\n\n[|Entrance||] Law of Florida Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "8_building_K-KFF": {
          "displayName": "Entrance",
          "destination": "8_building_K-KFF"
        }
      }
    },
    "8_building_K-KFF": {
      "firstVisit": true,
      "displayName": "Law of Florida Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Florida. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Florida shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "8_building_K-KFF-KFF": {
          "displayName": "Shelf",
          "destination": "8_building_K-KFF-KFF"
        },
        "8_building_K": {
          "displayName": "Exit",
          "destination": "8_building_K"
        }
      }
    },
    "8_building_K-KBM-KBM1-4855": {
      "firstVisit": true,
      "displayName": "Jewish law.  Halakah shelf",
      "description": "Description for shelf Jewish law.  Halakah in Jewish law.  Halakah Room.\n\n[|Entrance||] Jewish law.  Halakah Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "8_building_K-KBM": {
          "displayName": "Entrance",
          "destination": "8_building_K-KBM"
        }
      }
    },
    "8_building_K-KBM": {
      "firstVisit": true,
      "displayName": "Jewish law.  Halakah Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Jewish law.  Halakah. You can exit to the floor foyer.\n\n[|Shelf|||||] Jewish law.  Halakah shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "8_building_K-KBM-KBM1-4855": {
          "displayName": "Shelf",
          "destination": "8_building_K-KBM-KBM1-4855"
        },
        "8_building_K": {
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
        "8_building_K-KDZ": {
          "displayName": "South",
          "destination": "8_building_K-KDZ"
        },
        "8_building_K-KFK": {
          "displayName": "North",
          "destination": "8_building_K-KFK"
        },
        "8_building_K-KDC": {
          "displayName": "SouthEast",
          "destination": "8_building_K-KDC"
        },
        "8_building_K-KNR": {
          "displayName": "NorthWest",
          "destination": "8_building_K-KNR"
        },
        "8_building_K-KFF": {
          "displayName": "SouthWest",
          "destination": "8_building_K-KFF"
        },
        "8_building_K-KBM": {
          "displayName": "NorthEast",
          "destination": "8_building_K-KBM"
        },
        "7_building_K": {
          "displayName": "Down",
          "destination": "7_building_K"
        },
        "9_building_K": {
          "displayName": "Up",
          "destination": "9_building_K"
        }
      }
    },
    "9_building_K-KJ-KJ2-2000": {
      "firstVisit": true,
      "displayName": "History of Law (Europe) shelf",
      "description": "Description for shelf History of Law (Europe) in History of Law (Europe) Room.\n\n[|Entrance||] History of Law (Europe) Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "9_building_K-KJ": {
          "displayName": "Entrance",
          "destination": "9_building_K-KJ"
        }
      }
    },
    "9_building_K-KJ": {
      "firstVisit": true,
      "displayName": "History of Law (Europe) Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is History of Law (Europe). You can exit to the floor foyer.\n\n[|Shelf|||||] History of Law (Europe) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "9_building_K-KJ-KJ2-2000": {
          "displayName": "Shelf",
          "destination": "9_building_K-KJ-KJ2-2000"
        },
        "9_building_K": {
          "displayName": "Exit",
          "destination": "9_building_K"
        }
      }
    },
    "9_building_K-KL-KL2-9299": {
      "firstVisit": true,
      "displayName": "History of law.  The ancient orient shelf",
      "description": "Description for shelf History of law.  The ancient orient in History of law.  The ancient orient Room.\n\n[|Entrance||] History of law.  The ancient orient Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "9_building_K-KL": {
          "displayName": "Entrance",
          "destination": "9_building_K-KL"
        }
      }
    },
    "9_building_K-KL": {
      "firstVisit": true,
      "displayName": "History of law.  The ancient orient Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is History of law.  The ancient orient. You can exit to the floor foyer.\n\n[|Shelf|||||] History of law.  The ancient orient shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "9_building_K-KL-KL2-9299": {
          "displayName": "Shelf",
          "destination": "9_building_K-KL-KL2-9299"
        },
        "9_building_K": {
          "displayName": "Exit",
          "destination": "9_building_K"
        }
      }
    },
    "9_building_K-KE-KE1-9450": {
      "firstVisit": true,
      "displayName": "Law of Canada shelf",
      "description": "Description for shelf Law of Canada in Law of Canada Room.\n\n[|Entrance||] Law of Canada Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "9_building_K-KE": {
          "displayName": "Entrance",
          "destination": "9_building_K-KE"
        }
      }
    },
    "9_building_K-KE": {
      "firstVisit": true,
      "displayName": "Law of Canada Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Canada. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Canada shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "9_building_K-KE-KE1-9450": {
          "displayName": "Shelf",
          "destination": "9_building_K-KE-KE1-9450"
        },
        "9_building_K": {
          "displayName": "Exit",
          "destination": "9_building_K"
        }
      }
    },
    "9_building_K-KFD-KFD": {
      "firstVisit": true,
      "displayName": "Law of Delaware shelf",
      "description": "Description for shelf Law of Delaware in Law of Delaware Room.\n\n[|Entrance||] Law of Delaware Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "9_building_K-KFD": {
          "displayName": "Entrance",
          "destination": "9_building_K-KFD"
        }
      }
    },
    "9_building_K-KFD": {
      "firstVisit": true,
      "displayName": "Law of Delaware Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Delaware. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Delaware shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "9_building_K-KFD-KFD": {
          "displayName": "Shelf",
          "destination": "9_building_K-KFD-KFD"
        },
        "9_building_K": {
          "displayName": "Exit",
          "destination": "9_building_K"
        }
      }
    },
    "9_building_K-KDK-KDK21-1950": {
      "firstVisit": true,
      "displayName": "Law of Ireland (Eire) shelf",
      "description": "Description for shelf Law of Ireland (Eire) in Law of Ireland (Eire) Room.\n\n[|Entrance||] Law of Ireland (Eire) Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "9_building_K-KDK": {
          "displayName": "Entrance",
          "destination": "9_building_K-KDK"
        }
      }
    },
    "9_building_K-KDK": {
      "firstVisit": true,
      "displayName": "Law of Ireland (Eire) Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Ireland (Eire). You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Ireland (Eire) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "9_building_K-KDK-KDK21-1950": {
          "displayName": "Shelf",
          "destination": "9_building_K-KDK-KDK21-1950"
        },
        "9_building_K": {
          "displayName": "Exit",
          "destination": "9_building_K"
        }
      }
    },
    "9_building_K-KTT-KTT1-9910": {
      "firstVisit": true,
      "displayName": "Tanzania shelf",
      "description": "Description for shelf Tanzania in Tanzania Room.\n\n[|Entrance||] Tanzania Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "9_building_K-KTT": {
          "displayName": "Entrance",
          "destination": "9_building_K-KTT"
        }
      }
    },
    "9_building_K-KTT": {
      "firstVisit": true,
      "displayName": "Tanzania Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Tanzania. You can exit to the floor foyer.\n\n[|Shelf|||||] Tanzania shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "9_building_K-KTT-KTT1-9910": {
          "displayName": "Shelf",
          "destination": "9_building_K-KTT-KTT1-9910"
        },
        "9_building_K": {
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
        "9_building_K-KJ": {
          "displayName": "South",
          "destination": "9_building_K-KJ"
        },
        "9_building_K-KL": {
          "displayName": "North",
          "destination": "9_building_K-KL"
        },
        "9_building_K-KE": {
          "displayName": "SouthEast",
          "destination": "9_building_K-KE"
        },
        "9_building_K-KFD": {
          "displayName": "NorthWest",
          "destination": "9_building_K-KFD"
        },
        "9_building_K-KDK": {
          "displayName": "SouthWest",
          "destination": "9_building_K-KDK"
        },
        "9_building_K-KTT": {
          "displayName": "NorthEast",
          "destination": "9_building_K-KTT"
        },
        "8_building_K": {
          "displayName": "Down",
          "destination": "8_building_K"
        },
        "10_building_K": {
          "displayName": "Up",
          "destination": "10_building_K"
        }
      }
    },
    "10_building_K-KNX-KNX2050-2535": {
      "firstVisit": true,
      "displayName": "Constitutional law shelf",
      "description": "Description for shelf Constitutional law in Constitutional law Room.\n\n[|Entrance||] Constitutional law Room entrance\n[|Next||||||] Administrative and political divisions shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "10_building_K-KNX": {
          "displayName": "Entrance",
          "destination": "10_building_K-KNX"
        },
        "10_building_K-KNX-KNX2920-2935": {
          "displayName": "Next",
          "destination": "10_building_K-KNX-KNX2920-2935"
        }
      }
    },
    "10_building_K-KNX-KNX2920-2935": {
      "firstVisit": true,
      "displayName": "Administrative and political divisions shelf",
      "description": "Description for shelf Administrative and political divisions in Constitutional law Room.\n\n[|Previous||] Constitutional law shelf\n[|Next||||||] By period shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "10_building_K-KNX-KNX2050-2535": {
          "displayName": "Previous",
          "destination": "10_building_K-KNX-KNX2050-2535"
        },
        "10_building_K-KNX-KNX122-224": {
          "displayName": "Next",
          "destination": "10_building_K-KNX-KNX122-224"
        }
      }
    },
    "10_building_K-KNX-KNX122-224": {
      "firstVisit": true,
      "displayName": "By period shelf",
      "description": "Description for shelf By period in Constitutional law Room.\n\n[|Previous||] Administrative and political divisions shelf\n[|Next||||||] Public law shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "10_building_K-KNX-KNX2920-2935": {
          "displayName": "Previous",
          "destination": "10_building_K-KNX-KNX2920-2935"
        },
        "10_building_K-KNX-KNX2000-2020": {
          "displayName": "Next",
          "destination": "10_building_K-KNX-KNX2000-2020"
        }
      }
    },
    "10_building_K-KNX-KNX2000-2020": {
      "firstVisit": true,
      "displayName": "Public law shelf",
      "description": "Description for shelf Public law in Constitutional law Room.\n\n[|Previous||] By period shelf\n[|Next||||||] Regional divisions shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "10_building_K-KNX-KNX122-224": {
          "displayName": "Previous",
          "destination": "10_building_K-KNX-KNX122-224"
        },
        "10_building_K-KNX-KNX474-478.3": {
          "displayName": "Next",
          "destination": "10_building_K-KNX-KNX474-478.3"
        }
      }
    },
    "10_building_K-KNX-KNX474-478.3": {
      "firstVisit": true,
      "displayName": "Regional divisions shelf",
      "description": "Description for shelf Regional divisions in Constitutional law Room.\n\n[|Previous||] Public law shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "10_building_K-KNX-KNX2000-2020": {
          "displayName": "Previous",
          "destination": "10_building_K-KNX-KNX2000-2020"
        }
      }
    },
    "10_building_K-KNX": {
      "firstVisit": true,
      "displayName": "Constitutional law Room entrance",
      "description": "This room has five shelves organized linearly from the entrance towards the back. The first shelf you can see is Constitutional law. You can exit to the floor foyer.\n\n[|Shelf|||||] Constitutional law shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "10_building_K-KNX-KNX2050-2535": {
          "displayName": "Shelf",
          "destination": "10_building_K-KNX-KNX2050-2535"
        },
        "10_building_K": {
          "displayName": "Exit",
          "destination": "10_building_K"
        }
      }
    },
    "10_building_K-KTY-KTY1-490": {
      "firstVisit": true,
      "displayName": "Zambia shelf",
      "description": "Description for shelf Zambia in Zambia Room.\n\n[|Entrance||] Zambia Room entrance\n[|Next||||||] Zanzibar (to 1964) shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "10_building_K-KTY": {
          "displayName": "Entrance",
          "destination": "10_building_K-KTY"
        },
        "10_building_K-KTY-KTY1501-1599": {
          "displayName": "Next",
          "destination": "10_building_K-KTY-KTY1501-1599"
        }
      }
    },
    "10_building_K-KTY-KTY1501-1599": {
      "firstVisit": true,
      "displayName": "Zanzibar (to 1964) shelf",
      "description": "Description for shelf Zanzibar (to 1964) in Zambia Room.\n\n[|Previous||] Zambia shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "10_building_K-KTY-KTY1-490": {
          "displayName": "Previous",
          "destination": "10_building_K-KTY-KTY1-490"
        }
      }
    },
    "10_building_K-KTY": {
      "firstVisit": true,
      "displayName": "Zambia Room entrance",
      "description": "This room has two shelves organized linearly from the entrance towards the back. The first shelf you can see is Zambia. You can exit to the floor foyer.\n\n[|Shelf|||||] Zambia shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "10_building_K-KTY-KTY1-490": {
          "displayName": "Shelf",
          "destination": "10_building_K-KTY-KTY1-490"
        },
        "10_building_K": {
          "displayName": "Exit",
          "destination": "10_building_K"
        }
      }
    },
    "10_building_K-KFS-KFS": {
      "firstVisit": true,
      "displayName": "Law of South Carolina shelf",
      "description": "Description for shelf Law of South Carolina in Law of South Carolina Room.\n\n[|Entrance||] Law of South Carolina Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "10_building_K-KFS": {
          "displayName": "Entrance",
          "destination": "10_building_K-KFS"
        }
      }
    },
    "10_building_K-KFS": {
      "firstVisit": true,
      "displayName": "Law of South Carolina Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of South Carolina. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of South Carolina shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "10_building_K-KFS-KFS": {
          "displayName": "Shelf",
          "destination": "10_building_K-KFS-KFS"
        },
        "10_building_K": {
          "displayName": "Exit",
          "destination": "10_building_K"
        }
      }
    },
    "10_building_K-KNC-KNC1-999": {
      "firstVisit": true,
      "displayName": "Regional comparative and uniform law shelf",
      "description": "Description for shelf Regional comparative and uniform law in Regional comparative and uniform law Room.\n\n[|Entrance||] Regional comparative and uniform law Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "10_building_K-KNC": {
          "displayName": "Entrance",
          "destination": "10_building_K-KNC"
        }
      }
    },
    "10_building_K-KNC": {
      "firstVisit": true,
      "displayName": "Regional comparative and uniform law Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Regional comparative and uniform law. You can exit to the floor foyer.\n\n[|Shelf|||||] Regional comparative and uniform law shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "10_building_K-KNC-KNC1-999": {
          "displayName": "Shelf",
          "destination": "10_building_K-KNC-KNC1-999"
        },
        "10_building_K": {
          "displayName": "Exit",
          "destination": "10_building_K"
        }
      }
    },
    "10_building_K-KFH-KFH": {
      "firstVisit": true,
      "displayName": "Law of Hawaii shelf",
      "description": "Description for shelf Law of Hawaii in Law of Hawaii Room.\n\n[|Entrance||] Law of Hawaii Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "10_building_K-KFH": {
          "displayName": "Entrance",
          "destination": "10_building_K-KFH"
        }
      }
    },
    "10_building_K-KFH": {
      "firstVisit": true,
      "displayName": "Law of Hawaii Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Hawaii. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Hawaii shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "10_building_K-KFH-KFH": {
          "displayName": "Shelf",
          "destination": "10_building_K-KFH-KFH"
        },
        "10_building_K": {
          "displayName": "Exit",
          "destination": "10_building_K"
        }
      }
    },
    "10_building_K-KFX-KFX": {
      "firstVisit": true,
      "displayName": "Laws of the cities shelf",
      "description": "Description for shelf Laws of the cities in Laws of the cities Room.\n\n[|Entrance||] Laws of the cities Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "10_building_K-KFX": {
          "displayName": "Entrance",
          "destination": "10_building_K-KFX"
        }
      }
    },
    "10_building_K-KFX": {
      "firstVisit": true,
      "displayName": "Laws of the cities Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Laws of the cities. You can exit to the floor foyer.\n\n[|Shelf|||||] Laws of the cities shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "10_building_K-KFX-KFX": {
          "displayName": "Shelf",
          "destination": "10_building_K-KFX-KFX"
        },
        "10_building_K": {
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
        "10_building_K-KNX": {
          "displayName": "South",
          "destination": "10_building_K-KNX"
        },
        "10_building_K-KTY": {
          "displayName": "North",
          "destination": "10_building_K-KTY"
        },
        "10_building_K-KFS": {
          "displayName": "SouthEast",
          "destination": "10_building_K-KFS"
        },
        "10_building_K-KNC": {
          "displayName": "NorthWest",
          "destination": "10_building_K-KNC"
        },
        "10_building_K-KFH": {
          "displayName": "SouthWest",
          "destination": "10_building_K-KFH"
        },
        "10_building_K-KFX": {
          "displayName": "NorthEast",
          "destination": "10_building_K-KFX"
        },
        "9_building_K": {
          "displayName": "Down",
          "destination": "9_building_K"
        },
        "11_building_K": {
          "displayName": "Up",
          "destination": "11_building_K"
        }
      }
    },
    "11_building_K-KJT-KJT": {
      "firstVisit": true,
      "displayName": "Law of Finland shelf",
      "description": "Description for shelf Law of Finland in Law of Finland Room.\n\n[|Entrance||] Law of Finland Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "11_building_K-KJT": {
          "displayName": "Entrance",
          "destination": "11_building_K-KJT"
        }
      }
    },
    "11_building_K-KJT": {
      "firstVisit": true,
      "displayName": "Law of Finland Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Finland. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Finland shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "11_building_K-KJT-KJT": {
          "displayName": "Shelf",
          "destination": "11_building_K-KJT-KJT"
        },
        "11_building_K": {
          "displayName": "Exit",
          "destination": "11_building_K"
        }
      }
    },
    "11_building_K-KQW-KQW1-8020": {
      "firstVisit": true,
      "displayName": "Cameroon shelf",
      "description": "Description for shelf Cameroon in Cameroon Room.\n\n[|Entrance||] Cameroon Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "11_building_K-KQW": {
          "displayName": "Entrance",
          "destination": "11_building_K-KQW"
        }
      }
    },
    "11_building_K-KQW": {
      "firstVisit": true,
      "displayName": "Cameroon Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Cameroon. You can exit to the floor foyer.\n\n[|Shelf|||||] Cameroon shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "11_building_K-KQW-KQW1-8020": {
          "displayName": "Shelf",
          "destination": "11_building_K-KQW-KQW1-8020"
        },
        "11_building_K": {
          "displayName": "Exit",
          "destination": "11_building_K"
        }
      }
    },
    "11_building_K-KB-KB1-4855": {
      "firstVisit": true,
      "displayName": "Religious law in general.  Comparative religious law. shelf",
      "description": "Description for shelf Religious law in general.  Comparative religious law. in Religious law in general.  Comparative religious law. Room.\n\n[|Entrance||] Religious law in general.  Comparative religious law. Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "11_building_K-KB": {
          "displayName": "Entrance",
          "destination": "11_building_K-KB"
        }
      }
    },
    "11_building_K-KB": {
      "firstVisit": true,
      "displayName": "Religious law in general.  Comparative religious law. Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Religious law in general.  Comparative religious law.. You can exit to the floor foyer.\n\n[|Shelf|||||] Religious law in general.  Comparative religious law. shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "11_building_K-KB-KB1-4855": {
          "displayName": "Shelf",
          "destination": "11_building_K-KB-KB1-4855"
        },
        "11_building_K": {
          "displayName": "Exit",
          "destination": "11_building_K"
        }
      }
    },
    "11_building_K-KGL-KGL4001-4499": {
      "firstVisit": true,
      "displayName": "British Virgin Islands (General) shelf",
      "description": "Description for shelf British Virgin Islands (General) in British West Indies (General) Room.\n\n[|Entrance||] British West Indies (General) Room entrance\n[|Next||||||] British West Indies (General) shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "11_building_K-KGL": {
          "displayName": "Entrance",
          "destination": "11_building_K-KGL"
        },
        "11_building_K-KGL-KGL5001-5999": {
          "displayName": "Next",
          "destination": "11_building_K-KGL-KGL5001-5999"
        }
      }
    },
    "11_building_K-KGL-KGL5001-5999": {
      "firstVisit": true,
      "displayName": "British West Indies (General) shelf",
      "description": "Description for shelf British West Indies (General) in British West Indies (General) Room.\n\n[|Previous||] British Virgin Islands (General) shelf\n[|Next||||||] Bahamas shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "11_building_K-KGL-KGL4001-4499": {
          "displayName": "Previous",
          "destination": "11_building_K-KGL-KGL4001-4499"
        },
        "11_building_K-KGL-KGL1-499": {
          "displayName": "Next",
          "destination": "11_building_K-KGL-KGL1-499"
        }
      }
    },
    "11_building_K-KGL-KGL1-499": {
      "firstVisit": true,
      "displayName": "Bahamas shelf",
      "description": "Description for shelf Bahamas in British West Indies (General) Room.\n\n[|Previous||] British West Indies (General) shelf\n[|Next||||||] Barbados shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "11_building_K-KGL-KGL5001-5999": {
          "displayName": "Previous",
          "destination": "11_building_K-KGL-KGL5001-5999"
        },
        "11_building_K-KGL-KGL1001-1499": {
          "displayName": "Next",
          "destination": "11_building_K-KGL-KGL1001-1499"
        }
      }
    },
    "11_building_K-KGL-KGL1001-1499": {
      "firstVisit": true,
      "displayName": "Barbados shelf",
      "description": "Description for shelf Barbados in British West Indies (General) Room.\n\n[|Previous||] Bahamas shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "11_building_K-KGL-KGL1-499": {
          "displayName": "Previous",
          "destination": "11_building_K-KGL-KGL1-499"
        }
      }
    },
    "11_building_K-KGL": {
      "firstVisit": true,
      "displayName": "British West Indies (General) Room entrance",
      "description": "This room has four shelves organized linearly from the entrance towards the back. The first shelf you can see is British Virgin Islands (General). You can exit to the floor foyer.\n\n[|Shelf|||||] British Virgin Islands (General) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "11_building_K-KGL-KGL4001-4499": {
          "displayName": "Shelf",
          "destination": "11_building_K-KGL-KGL4001-4499"
        },
        "11_building_K": {
          "displayName": "Exit",
          "destination": "11_building_K"
        }
      }
    },
    "11_building_K-KGF-KGF1-9900": {
      "firstVisit": true,
      "displayName": "Mexico shelf",
      "description": "Description for shelf Mexico in Mexico Room.\n\n[|Entrance||] Mexico Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "11_building_K-KGF": {
          "displayName": "Entrance",
          "destination": "11_building_K-KGF"
        }
      }
    },
    "11_building_K-KGF": {
      "firstVisit": true,
      "displayName": "Mexico Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Mexico. You can exit to the floor foyer.\n\n[|Shelf|||||] Mexico shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "11_building_K-KGF-KGF1-9900": {
          "displayName": "Shelf",
          "destination": "11_building_K-KGF-KGF1-9900"
        },
        "11_building_K": {
          "displayName": "Exit",
          "destination": "11_building_K"
        }
      }
    },
    "11_building_K-KPL-KPL1-4990": {
      "firstVisit": true,
      "displayName": "Pakistan shelf",
      "description": "Description for shelf Pakistan in Pakistan Room.\n\n[|Entrance||] Pakistan Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "11_building_K-KPL": {
          "displayName": "Entrance",
          "destination": "11_building_K-KPL"
        }
      }
    },
    "11_building_K-KPL": {
      "firstVisit": true,
      "displayName": "Pakistan Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Pakistan. You can exit to the floor foyer.\n\n[|Shelf|||||] Pakistan shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "11_building_K-KPL-KPL1-4990": {
          "displayName": "Shelf",
          "destination": "11_building_K-KPL-KPL1-4990"
        },
        "11_building_K": {
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
        "11_building_K-KJT": {
          "displayName": "South",
          "destination": "11_building_K-KJT"
        },
        "11_building_K-KQW": {
          "displayName": "North",
          "destination": "11_building_K-KQW"
        },
        "11_building_K-KB": {
          "displayName": "SouthEast",
          "destination": "11_building_K-KB"
        },
        "11_building_K-KGL": {
          "displayName": "NorthWest",
          "destination": "11_building_K-KGL"
        },
        "11_building_K-KGF": {
          "displayName": "SouthWest",
          "destination": "11_building_K-KGF"
        },
        "11_building_K-KPL": {
          "displayName": "NorthEast",
          "destination": "11_building_K-KPL"
        },
        "10_building_K": {
          "displayName": "Down",
          "destination": "10_building_K"
        },
        "12_building_K": {
          "displayName": "Up",
          "destination": "12_building_K"
        }
      }
    },
    "12_building_K-KNS-KNS1734-1800": {
      "firstVisit": true,
      "displayName": "Constitutional law shelf",
      "description": "Description for shelf Constitutional law in History of law Room.\n\n[|Entrance||] History of law Room entrance\n[|Next||||||] History of law shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "12_building_K-KNS": {
          "displayName": "Entrance",
          "destination": "12_building_K-KNS"
        },
        "12_building_K-KNS-KNS85-292": {
          "displayName": "Next",
          "destination": "12_building_K-KNS-KNS85-292"
        }
      }
    },
    "12_building_K-KNS-KNS85-292": {
      "firstVisit": true,
      "displayName": "History of law shelf",
      "description": "Description for shelf History of law in History of law Room.\n\n[|Previous||] Constitutional law shelf\n[|Next||||||] Indic people.  Ethnic groups shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "12_building_K-KNS-KNS1734-1800": {
          "displayName": "Previous",
          "destination": "12_building_K-KNS-KNS1734-1800"
        },
        "12_building_K-KNS-KNS350-439": {
          "displayName": "Next",
          "destination": "12_building_K-KNS-KNS350-439"
        }
      }
    },
    "12_building_K-KNS-KNS350-439": {
      "firstVisit": true,
      "displayName": "Indic people.  Ethnic groups shelf",
      "description": "Description for shelf Indic people.  Ethnic groups in History of law Room.\n\n[|Previous||] History of law shelf\n[|Next||||||] Law reports and related materials shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "12_building_K-KNS-KNS85-292": {
          "displayName": "Previous",
          "destination": "12_building_K-KNS-KNS85-292"
        },
        "12_building_K-KNS-KNS17.8-25.6": {
          "displayName": "Next",
          "destination": "12_building_K-KNS-KNS17.8-25.6"
        }
      }
    },
    "12_building_K-KNS-KNS17.8-25.6": {
      "firstVisit": true,
      "displayName": "Law reports and related materials shelf",
      "description": "Description for shelf Law reports and related materials in History of law Room.\n\n[|Previous||] Indic people.  Ethnic groups shelf\n[|Next||||||] Public law shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "12_building_K-KNS-KNS350-439": {
          "displayName": "Previous",
          "destination": "12_building_K-KNS-KNS350-439"
        },
        "12_building_K-KNS-KNS1724-1726": {
          "displayName": "Next",
          "destination": "12_building_K-KNS-KNS1724-1726"
        }
      }
    },
    "12_building_K-KNS-KNS1724-1726": {
      "firstVisit": true,
      "displayName": "Public law shelf",
      "description": "Description for shelf Public law in History of law Room.\n\n[|Previous||] Law reports and related materials shelf\n[|Next||||||] Conflict of laws shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "12_building_K-KNS-KNS17.8-25.6": {
          "displayName": "Previous",
          "destination": "12_building_K-KNS-KNS17.8-25.6"
        },
        "12_building_K-KNS-KNS480-481": {
          "displayName": "Next",
          "destination": "12_building_K-KNS-KNS480-481"
        }
      }
    },
    "12_building_K-KNS-KNS480-481": {
      "firstVisit": true,
      "displayName": "Conflict of laws shelf",
      "description": "Description for shelf Conflict of laws in History of law Room.\n\n[|Previous||] Public law shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "12_building_K-KNS-KNS1724-1726": {
          "displayName": "Previous",
          "destination": "12_building_K-KNS-KNS1724-1726"
        }
      }
    },
    "12_building_K-KNS": {
      "firstVisit": true,
      "displayName": "History of law Room entrance",
      "description": "This room has six shelves organized linearly from the entrance towards the back. The first shelf you can see is Constitutional law. You can exit to the floor foyer.\n\n[|Shelf|||||] Constitutional law shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "12_building_K-KNS-KNS1734-1800": {
          "displayName": "Shelf",
          "destination": "12_building_K-KNS-KNS1734-1800"
        },
        "12_building_K": {
          "displayName": "Exit",
          "destination": "12_building_K"
        }
      }
    },
    "12_building_K-KFR-KFR": {
      "firstVisit": true,
      "displayName": "Law of Rhode Island shelf",
      "description": "Description for shelf Law of Rhode Island in Law of Rhode Island Room.\n\n[|Entrance||] Law of Rhode Island Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "12_building_K-KFR": {
          "displayName": "Entrance",
          "destination": "12_building_K-KFR"
        }
      }
    },
    "12_building_K-KFR": {
      "firstVisit": true,
      "displayName": "Law of Rhode Island Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Rhode Island. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Rhode Island shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "12_building_K-KFR-KFR": {
          "displayName": "Shelf",
          "destination": "12_building_K-KFR-KFR"
        },
        "12_building_K": {
          "displayName": "Exit",
          "destination": "12_building_K"
        }
      }
    },
    "12_building_K-KGV-KGV1-8200": {
      "firstVisit": true,
      "displayName": "Puerto Rico shelf",
      "description": "Description for shelf Puerto Rico in Puerto Rico Room.\n\n[|Entrance||] Puerto Rico Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "12_building_K-KGV": {
          "displayName": "Entrance",
          "destination": "12_building_K-KGV"
        }
      }
    },
    "12_building_K-KGV": {
      "firstVisit": true,
      "displayName": "Puerto Rico Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Puerto Rico. You can exit to the floor foyer.\n\n[|Shelf|||||] Puerto Rico shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "12_building_K-KGV-KGV1-8200": {
          "displayName": "Shelf",
          "destination": "12_building_K-KGV-KGV1-8200"
        },
        "12_building_K": {
          "displayName": "Exit",
          "destination": "12_building_K"
        }
      }
    },
    "12_building_K-KKW-KKW": {
      "firstVisit": true,
      "displayName": "Law of Switzerland shelf",
      "description": "Description for shelf Law of Switzerland in Law of Switzerland Room.\n\n[|Entrance||] Law of Switzerland Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "12_building_K-KKW": {
          "displayName": "Entrance",
          "destination": "12_building_K-KKW"
        }
      }
    },
    "12_building_K-KKW": {
      "firstVisit": true,
      "displayName": "Law of Switzerland Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Switzerland. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Switzerland shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "12_building_K-KKW-KKW": {
          "displayName": "Shelf",
          "destination": "12_building_K-KKW-KKW"
        },
        "12_building_K": {
          "displayName": "Exit",
          "destination": "12_building_K"
        }
      }
    },
    "12_building_K-KKE-KKE": {
      "firstVisit": true,
      "displayName": "Law of Greece shelf",
      "description": "Description for shelf Law of Greece in Law of Greece Room.\n\n[|Entrance||] Law of Greece Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "12_building_K-KKE": {
          "displayName": "Entrance",
          "destination": "12_building_K-KKE"
        }
      }
    },
    "12_building_K-KKE": {
      "firstVisit": true,
      "displayName": "Law of Greece Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Greece. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Greece shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "12_building_K-KKE-KKE": {
          "displayName": "Shelf",
          "destination": "12_building_K-KKE-KKE"
        },
        "12_building_K": {
          "displayName": "Exit",
          "destination": "12_building_K"
        }
      }
    },
    "12_building_K-KKY-KKY": {
      "firstVisit": true,
      "displayName": "Law of Ukraine shelf",
      "description": "Description for shelf Law of Ukraine in Law of Ukraine Room.\n\n[|Entrance||] Law of Ukraine Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "12_building_K-KKY": {
          "displayName": "Entrance",
          "destination": "12_building_K-KKY"
        }
      }
    },
    "12_building_K-KKY": {
      "firstVisit": true,
      "displayName": "Law of Ukraine Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Ukraine. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Ukraine shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "12_building_K-KKY-KKY": {
          "displayName": "Shelf",
          "destination": "12_building_K-KKY-KKY"
        },
        "12_building_K": {
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
        "12_building_K-KNS": {
          "displayName": "South",
          "destination": "12_building_K-KNS"
        },
        "12_building_K-KFR": {
          "displayName": "North",
          "destination": "12_building_K-KFR"
        },
        "12_building_K-KGV": {
          "displayName": "SouthEast",
          "destination": "12_building_K-KGV"
        },
        "12_building_K-KKW": {
          "displayName": "NorthWest",
          "destination": "12_building_K-KKW"
        },
        "12_building_K-KKE": {
          "displayName": "SouthWest",
          "destination": "12_building_K-KKE"
        },
        "12_building_K-KKY": {
          "displayName": "NorthEast",
          "destination": "12_building_K-KKY"
        },
        "11_building_K": {
          "displayName": "Down",
          "destination": "11_building_K"
        },
        "13_building_K": {
          "displayName": "Up",
          "destination": "13_building_K"
        }
      }
    },
    "13_building_K-KKP-KKP": {
      "firstVisit": true,
      "displayName": "Law of Poland shelf",
      "description": "Description for shelf Law of Poland in Law of Poland Room.\n\n[|Entrance||] Law of Poland Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "13_building_K-KKP": {
          "displayName": "Entrance",
          "destination": "13_building_K-KKP"
        }
      }
    },
    "13_building_K-KKP": {
      "firstVisit": true,
      "displayName": "Law of Poland Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Poland. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Poland shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "13_building_K-KKP-KKP": {
          "displayName": "Shelf",
          "destination": "13_building_K-KKP-KKP"
        },
        "13_building_K": {
          "displayName": "Exit",
          "destination": "13_building_K"
        }
      }
    },
    "13_building_K-KKM-KKM": {
      "firstVisit": true,
      "displayName": "Law of Netherlands shelf",
      "description": "Description for shelf Law of Netherlands in Law of Netherlands Room.\n\n[|Entrance||] Law of Netherlands Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "13_building_K-KKM": {
          "displayName": "Entrance",
          "destination": "13_building_K-KKM"
        }
      }
    },
    "13_building_K-KKM": {
      "firstVisit": true,
      "displayName": "Law of Netherlands Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Netherlands. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Netherlands shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "13_building_K-KKM-KKM": {
          "displayName": "Shelf",
          "destination": "13_building_K-KKM-KKM"
        },
        "13_building_K": {
          "displayName": "Exit",
          "destination": "13_building_K"
        }
      }
    },
    "13_building_K-KKK-KKK": {
      "firstVisit": true,
      "displayName": "Law of Malta shelf",
      "description": "Description for shelf Law of Malta in Law of Malta Room.\n\n[|Entrance||] Law of Malta Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "13_building_K-KKK": {
          "displayName": "Entrance",
          "destination": "13_building_K-KKK"
        }
      }
    },
    "13_building_K-KKK": {
      "firstVisit": true,
      "displayName": "Law of Malta Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Malta. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Malta shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "13_building_K-KKK-KKK": {
          "displayName": "Shelf",
          "destination": "13_building_K-KKK-KKK"
        },
        "13_building_K": {
          "displayName": "Exit",
          "destination": "13_building_K"
        }
      }
    },
    "13_building_K-KJK-KJK": {
      "firstVisit": true,
      "displayName": "Law of Bosnia and Hercegovina shelf",
      "description": "Description for shelf Law of Bosnia and Hercegovina in Law of Bosnia and Hercegovina Room.\n\n[|Entrance||] Law of Bosnia and Hercegovina Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "13_building_K-KJK": {
          "displayName": "Entrance",
          "destination": "13_building_K-KJK"
        }
      }
    },
    "13_building_K-KJK": {
      "firstVisit": true,
      "displayName": "Law of Bosnia and Hercegovina Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Bosnia and Hercegovina. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Bosnia and Hercegovina shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "13_building_K-KJK-KJK": {
          "displayName": "Shelf",
          "destination": "13_building_K-KJK-KJK"
        },
        "13_building_K": {
          "displayName": "Exit",
          "destination": "13_building_K"
        }
      }
    },
    "13_building_K-KKH-KKH": {
      "firstVisit": true,
      "displayName": "Law of Kosovo shelf",
      "description": "Description for shelf Law of Kosovo in Law of Kosovo Room.\n\n[|Entrance||] Law of Kosovo Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "13_building_K-KKH": {
          "displayName": "Entrance",
          "destination": "13_building_K-KKH"
        }
      }
    },
    "13_building_K-KKH": {
      "firstVisit": true,
      "displayName": "Law of Kosovo Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Kosovo. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Kosovo shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "13_building_K-KKH-KKH": {
          "displayName": "Shelf",
          "destination": "13_building_K-KKH-KKH"
        },
        "13_building_K": {
          "displayName": "Exit",
          "destination": "13_building_K"
        }
      }
    },
    "13_building_K-KKJ-KKJ": {
      "firstVisit": true,
      "displayName": "Law of Lithuania shelf",
      "description": "Description for shelf Law of Lithuania in Law of Lithuania Room.\n\n[|Entrance||] Law of Lithuania Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "13_building_K-KKJ": {
          "displayName": "Entrance",
          "destination": "13_building_K-KKJ"
        }
      }
    },
    "13_building_K-KKJ": {
      "firstVisit": true,
      "displayName": "Law of Lithuania Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Lithuania. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Lithuania shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "13_building_K-KKJ-KKJ": {
          "displayName": "Shelf",
          "destination": "13_building_K-KKJ-KKJ"
        },
        "13_building_K": {
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
        "13_building_K-KKP": {
          "displayName": "South",
          "destination": "13_building_K-KKP"
        },
        "13_building_K-KKM": {
          "displayName": "North",
          "destination": "13_building_K-KKM"
        },
        "13_building_K-KKK": {
          "displayName": "SouthEast",
          "destination": "13_building_K-KKK"
        },
        "13_building_K-KJK": {
          "displayName": "NorthWest",
          "destination": "13_building_K-KJK"
        },
        "13_building_K-KKH": {
          "displayName": "SouthWest",
          "destination": "13_building_K-KKH"
        },
        "13_building_K-KKJ": {
          "displayName": "NorthEast",
          "destination": "13_building_K-KKJ"
        },
        "12_building_K": {
          "displayName": "Down",
          "destination": "12_building_K"
        },
        "14_building_K": {
          "displayName": "Up",
          "destination": "14_building_K"
        }
      }
    },
    "14_building_K-KGD-KGD1-9990": {
      "firstVisit": true,
      "displayName": "Guatemala shelf",
      "description": "Description for shelf Guatemala in Guatemala Room.\n\n[|Entrance||] Guatemala Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "14_building_K-KGD": {
          "displayName": "Entrance",
          "destination": "14_building_K-KGD"
        }
      }
    },
    "14_building_K-KGD": {
      "firstVisit": true,
      "displayName": "Guatemala Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Guatemala. You can exit to the floor foyer.\n\n[|Shelf|||||] Guatemala shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "14_building_K-KGD-KGD1-9990": {
          "displayName": "Shelf",
          "destination": "14_building_K-KGD-KGD1-9990"
        },
        "14_building_K": {
          "displayName": "Exit",
          "destination": "14_building_K"
        }
      }
    },
    "14_building_K-KHQ-KHQ1-9800": {
      "firstVisit": true,
      "displayName": "Peru shelf",
      "description": "Description for shelf Peru in Peru Room.\n\n[|Entrance||] Peru Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "14_building_K-KHQ": {
          "displayName": "Entrance",
          "destination": "14_building_K-KHQ"
        }
      }
    },
    "14_building_K-KHQ": {
      "firstVisit": true,
      "displayName": "Peru Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Peru. You can exit to the floor foyer.\n\n[|Shelf|||||] Peru shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "14_building_K-KHQ-KHQ1-9800": {
          "displayName": "Shelf",
          "destination": "14_building_K-KHQ-KHQ1-9800"
        },
        "14_building_K": {
          "displayName": "Exit",
          "destination": "14_building_K"
        }
      }
    },
    "14_building_K-KST-KST1-490": {
      "firstVisit": true,
      "displayName": "Mali shelf",
      "description": "Description for shelf Mali in Mali Room.\n\n[|Entrance||] Mali Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "14_building_K-KST": {
          "displayName": "Entrance",
          "destination": "14_building_K-KST"
        }
      }
    },
    "14_building_K-KST": {
      "firstVisit": true,
      "displayName": "Mali Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Mali. You can exit to the floor foyer.\n\n[|Shelf|||||] Mali shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "14_building_K-KST-KST1-490": {
          "displayName": "Shelf",
          "destination": "14_building_K-KST-KST1-490"
        },
        "14_building_K": {
          "displayName": "Exit",
          "destination": "14_building_K"
        }
      }
    },
    "14_building_K-KTA-KTA1-9150": {
      "firstVisit": true,
      "displayName": "Nigeria shelf",
      "description": "Description for shelf Nigeria in Nigeria Room.\n\n[|Entrance||] Nigeria Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "14_building_K-KTA": {
          "displayName": "Entrance",
          "destination": "14_building_K-KTA"
        }
      }
    },
    "14_building_K-KTA": {
      "firstVisit": true,
      "displayName": "Nigeria Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Nigeria. You can exit to the floor foyer.\n\n[|Shelf|||||] Nigeria shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "14_building_K-KTA-KTA1-9150": {
          "displayName": "Shelf",
          "destination": "14_building_K-KTA-KTA1-9150"
        },
        "14_building_K": {
          "displayName": "Exit",
          "destination": "14_building_K"
        }
      }
    },
    "14_building_K-KGS-KGS1-9000": {
      "firstVisit": true,
      "displayName": "Haiti shelf",
      "description": "Description for shelf Haiti in Haiti Room.\n\n[|Entrance||] Haiti Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "14_building_K-KGS": {
          "displayName": "Entrance",
          "destination": "14_building_K-KGS"
        }
      }
    },
    "14_building_K-KGS": {
      "firstVisit": true,
      "displayName": "Haiti Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Haiti. You can exit to the floor foyer.\n\n[|Shelf|||||] Haiti shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "14_building_K-KGS-KGS1-9000": {
          "displayName": "Shelf",
          "destination": "14_building_K-KGS-KGS1-9000"
        },
        "14_building_K": {
          "displayName": "Exit",
          "destination": "14_building_K"
        }
      }
    },
    "14_building_K-KHH-KHH1-9900": {
      "firstVisit": true,
      "displayName": "Colombia shelf",
      "description": "Description for shelf Colombia in Colombia Room.\n\n[|Entrance||] Colombia Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "14_building_K-KHH": {
          "displayName": "Entrance",
          "destination": "14_building_K-KHH"
        }
      }
    },
    "14_building_K-KHH": {
      "firstVisit": true,
      "displayName": "Colombia Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Colombia. You can exit to the floor foyer.\n\n[|Shelf|||||] Colombia shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "14_building_K-KHH-KHH1-9900": {
          "displayName": "Shelf",
          "destination": "14_building_K-KHH-KHH1-9900"
        },
        "14_building_K": {
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
        "14_building_K-KGD": {
          "displayName": "South",
          "destination": "14_building_K-KGD"
        },
        "14_building_K-KHQ": {
          "displayName": "North",
          "destination": "14_building_K-KHQ"
        },
        "14_building_K-KST": {
          "displayName": "SouthEast",
          "destination": "14_building_K-KST"
        },
        "14_building_K-KTA": {
          "displayName": "NorthWest",
          "destination": "14_building_K-KTA"
        },
        "14_building_K-KGS": {
          "displayName": "SouthWest",
          "destination": "14_building_K-KGS"
        },
        "14_building_K-KHH": {
          "displayName": "NorthEast",
          "destination": "14_building_K-KHH"
        },
        "13_building_K": {
          "displayName": "Down",
          "destination": "13_building_K"
        },
        "15_building_K": {
          "displayName": "Up",
          "destination": "15_building_K"
        }
      }
    },
    "15_building_K-KG-KG1-999": {
      "firstVisit": true,
      "displayName": "Latin America (General) shelf",
      "description": "Description for shelf Latin America (General) in Latin America (General) Room.\n\n[|Entrance||] Latin America (General) Room entrance\n[|Next||||||] General shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "15_building_K-KG": {
          "displayName": "Entrance",
          "destination": "15_building_K-KG"
        },
        "15_building_K-KG-KG3001-3999": {
          "displayName": "Next",
          "destination": "15_building_K-KG-KG3001-3999"
        }
      }
    },
    "15_building_K-KG-KG3001-3999": {
      "firstVisit": true,
      "displayName": "General shelf",
      "description": "Description for shelf General in Latin America (General) Room.\n\n[|Previous||] Latin America (General) shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "15_building_K-KG-KG1-999": {
          "displayName": "Previous",
          "destination": "15_building_K-KG-KG1-999"
        }
      }
    },
    "15_building_K-KG": {
      "firstVisit": true,
      "displayName": "Latin America (General) Room entrance",
      "description": "This room has two shelves organized linearly from the entrance towards the back. The first shelf you can see is Latin America (General). You can exit to the floor foyer.\n\n[|Shelf|||||] Latin America (General) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "15_building_K-KG-KG1-999": {
          "displayName": "Shelf",
          "destination": "15_building_K-KG-KG1-999"
        },
        "15_building_K": {
          "displayName": "Exit",
          "destination": "15_building_K"
        }
      }
    },
    "15_building_K-KHK-KHK1-9990": {
      "firstVisit": true,
      "displayName": "Ecuador shelf",
      "description": "Description for shelf Ecuador in Ecuador Room.\n\n[|Entrance||] Ecuador Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "15_building_K-KHK": {
          "displayName": "Entrance",
          "destination": "15_building_K-KHK"
        }
      }
    },
    "15_building_K-KHK": {
      "firstVisit": true,
      "displayName": "Ecuador Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Ecuador. You can exit to the floor foyer.\n\n[|Shelf|||||] Ecuador shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "15_building_K-KHK-KHK1-9990": {
          "displayName": "Shelf",
          "destination": "15_building_K-KHK-KHK1-9990"
        },
        "15_building_K": {
          "displayName": "Exit",
          "destination": "15_building_K"
        }
      }
    },
    "15_building_K-KHC-KHC1-8200": {
      "firstVisit": true,
      "displayName": "Bolivia shelf",
      "description": "Description for shelf Bolivia in Bolivia Room.\n\n[|Entrance||] Bolivia Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "15_building_K-KHC": {
          "displayName": "Entrance",
          "destination": "15_building_K-KHC"
        }
      }
    },
    "15_building_K-KHC": {
      "firstVisit": true,
      "displayName": "Bolivia Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Bolivia. You can exit to the floor foyer.\n\n[|Shelf|||||] Bolivia shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "15_building_K-KHC-KHC1-8200": {
          "displayName": "Shelf",
          "destination": "15_building_K-KHC-KHC1-8200"
        },
        "15_building_K": {
          "displayName": "Exit",
          "destination": "15_building_K"
        }
      }
    },
    "15_building_K-KNP-KNP1-599": {
      "firstVisit": true,
      "displayName": "China (Republic, 1949-    ).  Taiwan shelf",
      "description": "Description for shelf China (Republic, 1949-    ).  Taiwan in China (Republic, 1949-    ).  Taiwan Room.\n\n[|Entrance||] China (Republic, 1949-    ).  Taiwan Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "15_building_K-KNP": {
          "displayName": "Entrance",
          "destination": "15_building_K-KNP"
        }
      }
    },
    "15_building_K-KNP": {
      "firstVisit": true,
      "displayName": "China (Republic, 1949-    ).  Taiwan Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is China (Republic, 1949-    ).  Taiwan. You can exit to the floor foyer.\n\n[|Shelf|||||] China (Republic, 1949-    ).  Taiwan shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "15_building_K-KNP-KNP1-599": {
          "displayName": "Shelf",
          "destination": "15_building_K-KNP-KNP1-599"
        },
        "15_building_K": {
          "displayName": "Exit",
          "destination": "15_building_K"
        }
      }
    },
    "15_building_K-KLR-KLR1-490": {
      "firstVisit": true,
      "displayName": "Kazakhstan shelf",
      "description": "Description for shelf Kazakhstan in Khorezmskai\uf04da Sovetskai\uf04da Sot\uf04dsialisticheskai\uf04da Room.\n\n[|Entrance||] Khorezmskai\uf04da Sovetskai\uf04da Sot\uf04dsialisticheskai\uf04da Room entrance\n[|Next||||||] Khorezmskai\uf04da Sovetskai\uf04da Sot\uf04dsialisticheskai\uf04da shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "15_building_K-KLR": {
          "displayName": "Entrance",
          "destination": "15_building_K-KLR"
        },
        "15_building_K-KLR-KLR1001-1499": {
          "displayName": "Next",
          "destination": "15_building_K-KLR-KLR1001-1499"
        }
      }
    },
    "15_building_K-KLR-KLR1001-1499": {
      "firstVisit": true,
      "displayName": "Khorezmskai\uf04da Sovetskai\uf04da Sot\uf04dsialisticheskai\uf04da shelf",
      "description": "Description for shelf Khorezmskai\uf04da Sovetskai\uf04da Sot\uf04dsialisticheskai\uf04da in Khorezmskai\uf04da Sovetskai\uf04da Sot\uf04dsialisticheskai\uf04da Room.\n\n[|Previous||] Kazakhstan shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "15_building_K-KLR-KLR1-490": {
          "displayName": "Previous",
          "destination": "15_building_K-KLR-KLR1-490"
        }
      }
    },
    "15_building_K-KLR": {
      "firstVisit": true,
      "displayName": "Khorezmskai\uf04da Sovetskai\uf04da Sot\uf04dsialisticheskai\uf04da Room entrance",
      "description": "This room has two shelves organized linearly from the entrance towards the back. The first shelf you can see is Kazakhstan. You can exit to the floor foyer.\n\n[|Shelf|||||] Kazakhstan shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "15_building_K-KLR-KLR1-490": {
          "displayName": "Shelf",
          "destination": "15_building_K-KLR-KLR1-490"
        },
        "15_building_K": {
          "displayName": "Exit",
          "destination": "15_building_K"
        }
      }
    },
    "15_building_K-KTZ-KTZ1-490": {
      "firstVisit": true,
      "displayName": "Zimbabwe shelf",
      "description": "Description for shelf Zimbabwe in Zimbabwe Room.\n\n[|Entrance||] Zimbabwe Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "15_building_K-KTZ": {
          "displayName": "Entrance",
          "destination": "15_building_K-KTZ"
        }
      }
    },
    "15_building_K-KTZ": {
      "firstVisit": true,
      "displayName": "Zimbabwe Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Zimbabwe. You can exit to the floor foyer.\n\n[|Shelf|||||] Zimbabwe shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "15_building_K-KTZ-KTZ1-490": {
          "displayName": "Shelf",
          "destination": "15_building_K-KTZ-KTZ1-490"
        },
        "15_building_K": {
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
        "15_building_K-KG": {
          "displayName": "South",
          "destination": "15_building_K-KG"
        },
        "15_building_K-KHK": {
          "displayName": "North",
          "destination": "15_building_K-KHK"
        },
        "15_building_K-KHC": {
          "displayName": "SouthEast",
          "destination": "15_building_K-KHC"
        },
        "15_building_K-KNP": {
          "displayName": "NorthWest",
          "destination": "15_building_K-KNP"
        },
        "15_building_K-KLR": {
          "displayName": "SouthWest",
          "destination": "15_building_K-KLR"
        },
        "15_building_K-KTZ": {
          "displayName": "NorthEast",
          "destination": "15_building_K-KTZ"
        },
        "14_building_K": {
          "displayName": "Down",
          "destination": "14_building_K"
        },
        "16_building_K": {
          "displayName": "Up",
          "destination": "16_building_K"
        }
      }
    },
    "16_building_K-KBS-KBS3-4010": {
      "firstVisit": true,
      "displayName": "Canon law of Eastern Churches shelf",
      "description": "Description for shelf Canon law of Eastern Churches in Canon law of Eastern Churches Room.\n\n[|Entrance||] Canon law of Eastern Churches Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "16_building_K-KBS": {
          "displayName": "Entrance",
          "destination": "16_building_K-KBS"
        }
      }
    },
    "16_building_K-KBS": {
      "firstVisit": true,
      "displayName": "Canon law of Eastern Churches Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Canon law of Eastern Churches. You can exit to the floor foyer.\n\n[|Shelf|||||] Canon law of Eastern Churches shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "16_building_K-KBS-KBS3-4010": {
          "displayName": "Shelf",
          "destination": "16_building_K-KBS-KBS3-4010"
        },
        "16_building_K": {
          "displayName": "Exit",
          "destination": "16_building_K"
        }
      }
    },
    "16_building_K-KPA-KPA1-4990": {
      "firstVisit": true,
      "displayName": "Korea.  South Korea shelf",
      "description": "Description for shelf Korea.  South Korea in Korea.  South Korea Room.\n\n[|Entrance||] Korea.  South Korea Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "16_building_K-KPA": {
          "displayName": "Entrance",
          "destination": "16_building_K-KPA"
        }
      }
    },
    "16_building_K-KPA": {
      "firstVisit": true,
      "displayName": "Korea.  South Korea Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Korea.  South Korea. You can exit to the floor foyer.\n\n[|Shelf|||||] Korea.  South Korea shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "16_building_K-KPA-KPA1-4990": {
          "displayName": "Shelf",
          "destination": "16_building_K-KPA-KPA1-4990"
        },
        "16_building_K": {
          "displayName": "Exit",
          "destination": "16_building_K"
        }
      }
    },
    "16_building_K-KUQ-KUQ1-4990": {
      "firstVisit": true,
      "displayName": "New Zealand shelf",
      "description": "Description for shelf New Zealand in New Zealand Room.\n\n[|Entrance||] New Zealand Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "16_building_K-KUQ": {
          "displayName": "Entrance",
          "destination": "16_building_K-KUQ"
        }
      }
    },
    "16_building_K-KUQ": {
      "firstVisit": true,
      "displayName": "New Zealand Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is New Zealand. You can exit to the floor foyer.\n\n[|Shelf|||||] New Zealand shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "16_building_K-KUQ-KUQ1-4990": {
          "displayName": "Shelf",
          "destination": "16_building_K-KUQ-KUQ1-4990"
        },
        "16_building_K": {
          "displayName": "Exit",
          "destination": "16_building_K"
        }
      }
    },
    "16_building_K-KVN-KVN1-490": {
      "firstVisit": true,
      "displayName": "Fiji shelf",
      "description": "Description for shelf Fiji in Fiji Room.\n\n[|Entrance||] Fiji Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "16_building_K-KVN": {
          "displayName": "Entrance",
          "destination": "16_building_K-KVN"
        }
      }
    },
    "16_building_K-KVN": {
      "firstVisit": true,
      "displayName": "Fiji Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Fiji. You can exit to the floor foyer.\n\n[|Shelf|||||] Fiji shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "16_building_K-KVN-KVN1-490": {
          "displayName": "Shelf",
          "destination": "16_building_K-KVN-KVN1-490"
        },
        "16_building_K": {
          "displayName": "Exit",
          "destination": "16_building_K"
        }
      }
    },
    "16_building_K-KVW-KVW1-490": {
      "firstVisit": true,
      "displayName": "New Caledonia shelf",
      "description": "Description for shelf New Caledonia in New Caledonia Room.\n\n[|Entrance||] New Caledonia Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "16_building_K-KVW": {
          "displayName": "Entrance",
          "destination": "16_building_K-KVW"
        }
      }
    },
    "16_building_K-KVW": {
      "firstVisit": true,
      "displayName": "New Caledonia Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is New Caledonia. You can exit to the floor foyer.\n\n[|Shelf|||||] New Caledonia shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "16_building_K-KVW-KVW1-490": {
          "displayName": "Shelf",
          "destination": "16_building_K-KVW-KVW1-490"
        },
        "16_building_K": {
          "displayName": "Exit",
          "destination": "16_building_K"
        }
      }
    },
    "16_building_K-KFU-KFU": {
      "firstVisit": true,
      "displayName": "Law of Utah shelf",
      "description": "Description for shelf Law of Utah in Law of Utah Room.\n\n[|Entrance||] Law of Utah Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "16_building_K-KFU": {
          "displayName": "Entrance",
          "destination": "16_building_K-KFU"
        }
      }
    },
    "16_building_K-KFU": {
      "firstVisit": true,
      "displayName": "Law of Utah Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Utah. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Utah shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "16_building_K-KFU-KFU": {
          "displayName": "Shelf",
          "destination": "16_building_K-KFU-KFU"
        },
        "16_building_K": {
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
        "16_building_K-KBS": {
          "displayName": "South",
          "destination": "16_building_K-KBS"
        },
        "16_building_K-KPA": {
          "displayName": "North",
          "destination": "16_building_K-KPA"
        },
        "16_building_K-KUQ": {
          "displayName": "SouthEast",
          "destination": "16_building_K-KUQ"
        },
        "16_building_K-KVN": {
          "displayName": "NorthWest",
          "destination": "16_building_K-KVN"
        },
        "16_building_K-KVW": {
          "displayName": "SouthWest",
          "destination": "16_building_K-KVW"
        },
        "16_building_K-KFU": {
          "displayName": "NorthEast",
          "destination": "16_building_K-KFU"
        },
        "15_building_K": {
          "displayName": "Down",
          "destination": "15_building_K"
        },
        "17_building_K": {
          "displayName": "Up",
          "destination": "17_building_K"
        }
      }
    },
    "17_building_K-KJR-KJR": {
      "firstVisit": true,
      "displayName": "Law of Denmark shelf",
      "description": "Description for shelf Law of Denmark in Law of Denmark Room.\n\n[|Entrance||] Law of Denmark Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "17_building_K-KJR": {
          "displayName": "Entrance",
          "destination": "17_building_K-KJR"
        }
      }
    },
    "17_building_K-KJR": {
      "firstVisit": true,
      "displayName": "Law of Denmark Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Denmark. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Denmark shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "17_building_K-KJR-KJR": {
          "displayName": "Shelf",
          "destination": "17_building_K-KJR-KJR"
        },
        "17_building_K": {
          "displayName": "Exit",
          "destination": "17_building_K"
        }
      }
    },
    "17_building_K-KKQ-KKQ": {
      "firstVisit": true,
      "displayName": "Law of Portugal shelf",
      "description": "Description for shelf Law of Portugal in Law of Portugal Room.\n\n[|Entrance||] Law of Portugal Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "17_building_K-KKQ": {
          "displayName": "Entrance",
          "destination": "17_building_K-KKQ"
        }
      }
    },
    "17_building_K-KKQ": {
      "firstVisit": true,
      "displayName": "Law of Portugal Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Portugal. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Portugal shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "17_building_K-KKQ-KKQ": {
          "displayName": "Shelf",
          "destination": "17_building_K-KKQ-KKQ"
        },
        "17_building_K": {
          "displayName": "Exit",
          "destination": "17_building_K"
        }
      }
    },
    "17_building_K-KJS-KJS": {
      "firstVisit": true,
      "displayName": "Law of Estonia shelf",
      "description": "Description for shelf Law of Estonia in Law of Estonia Room.\n\n[|Entrance||] Law of Estonia Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "17_building_K-KJS": {
          "displayName": "Entrance",
          "destination": "17_building_K-KJS"
        }
      }
    },
    "17_building_K-KJS": {
      "firstVisit": true,
      "displayName": "Law of Estonia Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Estonia. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Estonia shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "17_building_K-KJS-KJS": {
          "displayName": "Shelf",
          "destination": "17_building_K-KJS-KJS"
        },
        "17_building_K": {
          "displayName": "Exit",
          "destination": "17_building_K"
        }
      }
    },
    "17_building_K-KKZ-KKZ": {
      "firstVisit": true,
      "displayName": "Law of Yugoslavia shelf",
      "description": "Description for shelf Law of Yugoslavia in Law of Yugoslavia Room.\n\n[|Entrance||] Law of Yugoslavia Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "17_building_K-KKZ": {
          "displayName": "Entrance",
          "destination": "17_building_K-KKZ"
        }
      }
    },
    "17_building_K-KKZ": {
      "firstVisit": true,
      "displayName": "Law of Yugoslavia Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Yugoslavia. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Yugoslavia shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "17_building_K-KKZ-KKZ": {
          "displayName": "Shelf",
          "destination": "17_building_K-KKZ-KKZ"
        },
        "17_building_K": {
          "displayName": "Exit",
          "destination": "17_building_K"
        }
      }
    },
    "17_building_K-KJP-KJP": {
      "firstVisit": true,
      "displayName": "Law of Czech Republic (1993-        ) shelf",
      "description": "Description for shelf Law of Czech Republic (1993-        ) in Law of Czech Republic (1993-        ) Room.\n\n[|Entrance||] Law of Czech Republic (1993-        ) Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "17_building_K-KJP": {
          "displayName": "Entrance",
          "destination": "17_building_K-KJP"
        }
      }
    },
    "17_building_K-KJP": {
      "firstVisit": true,
      "displayName": "Law of Czech Republic (1993-        ) Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Czech Republic (1993-        ). You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Czech Republic (1993-        ) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "17_building_K-KJP-KJP": {
          "displayName": "Shelf",
          "destination": "17_building_K-KJP-KJP"
        },
        "17_building_K": {
          "displayName": "Exit",
          "destination": "17_building_K"
        }
      }
    },
    "17_building_K-KGB-KGB1-9000": {
      "firstVisit": true,
      "displayName": "Costa Rica shelf",
      "description": "Description for shelf Costa Rica in Costa Rica Room.\n\n[|Entrance||] Costa Rica Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "17_building_K-KGB": {
          "displayName": "Entrance",
          "destination": "17_building_K-KGB"
        }
      }
    },
    "17_building_K-KGB": {
      "firstVisit": true,
      "displayName": "Costa Rica Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Costa Rica. You can exit to the floor foyer.\n\n[|Shelf|||||] Costa Rica shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "17_building_K-KGB-KGB1-9000": {
          "displayName": "Shelf",
          "destination": "17_building_K-KGB-KGB1-9000"
        },
        "17_building_K": {
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
        "17_building_K-KJR": {
          "displayName": "South",
          "destination": "17_building_K-KJR"
        },
        "17_building_K-KKQ": {
          "displayName": "North",
          "destination": "17_building_K-KKQ"
        },
        "17_building_K-KJS": {
          "displayName": "SouthEast",
          "destination": "17_building_K-KJS"
        },
        "17_building_K-KKZ": {
          "displayName": "NorthWest",
          "destination": "17_building_K-KKZ"
        },
        "17_building_K-KJP": {
          "displayName": "SouthWest",
          "destination": "17_building_K-KJP"
        },
        "17_building_K-KGB": {
          "displayName": "NorthEast",
          "destination": "17_building_K-KGB"
        },
        "16_building_K": {
          "displayName": "Down",
          "destination": "16_building_K"
        },
        "18_building_K": {
          "displayName": "Up",
          "destination": "18_building_K"
        }
      }
    },
    "18_building_K-KHW-KHW1-9900": {
      "firstVisit": true,
      "displayName": "Venezuela shelf",
      "description": "Description for shelf Venezuela in Venezuela Room.\n\n[|Entrance||] Venezuela Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "18_building_K-KHW": {
          "displayName": "Entrance",
          "destination": "18_building_K-KHW"
        }
      }
    },
    "18_building_K-KHW": {
      "firstVisit": true,
      "displayName": "Venezuela Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Venezuela. You can exit to the floor foyer.\n\n[|Shelf|||||] Venezuela shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "18_building_K-KHW-KHW1-9900": {
          "displayName": "Shelf",
          "destination": "18_building_K-KHW-KHW1-9900"
        },
        "18_building_K": {
          "displayName": "Exit",
          "destination": "18_building_K"
        }
      }
    },
    "18_building_K-KGE-KGE1-9990": {
      "firstVisit": true,
      "displayName": "Honduras shelf",
      "description": "Description for shelf Honduras in Honduras Room.\n\n[|Entrance||] Honduras Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "18_building_K-KGE": {
          "displayName": "Entrance",
          "destination": "18_building_K-KGE"
        }
      }
    },
    "18_building_K-KGE": {
      "firstVisit": true,
      "displayName": "Honduras Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Honduras. You can exit to the floor foyer.\n\n[|Shelf|||||] Honduras shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "18_building_K-KGE-KGE1-9990": {
          "displayName": "Shelf",
          "destination": "18_building_K-KGE-KGE1-9990"
        },
        "18_building_K": {
          "displayName": "Exit",
          "destination": "18_building_K"
        }
      }
    },
    "18_building_K-KGG-KGG1-9800": {
      "firstVisit": true,
      "displayName": "Nicaragua shelf",
      "description": "Description for shelf Nicaragua in Nicaragua Room.\n\n[|Entrance||] Nicaragua Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "18_building_K-KGG": {
          "displayName": "Entrance",
          "destination": "18_building_K-KGG"
        }
      }
    },
    "18_building_K-KGG": {
      "firstVisit": true,
      "displayName": "Nicaragua Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Nicaragua. You can exit to the floor foyer.\n\n[|Shelf|||||] Nicaragua shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "18_building_K-KGG-KGG1-9800": {
          "displayName": "Shelf",
          "destination": "18_building_K-KGG-KGG1-9800"
        },
        "18_building_K": {
          "displayName": "Exit",
          "destination": "18_building_K"
        }
      }
    },
    "18_building_K-KHF-KHF1-9800": {
      "firstVisit": true,
      "displayName": "Chile shelf",
      "description": "Description for shelf Chile in Chile Room.\n\n[|Entrance||] Chile Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "18_building_K-KHF": {
          "displayName": "Entrance",
          "destination": "18_building_K-KHF"
        }
      }
    },
    "18_building_K-KHF": {
      "firstVisit": true,
      "displayName": "Chile Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Chile. You can exit to the floor foyer.\n\n[|Shelf|||||] Chile shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "18_building_K-KHF-KHF1-9800": {
          "displayName": "Shelf",
          "destination": "18_building_K-KHF-KHF1-9800"
        },
        "18_building_K": {
          "displayName": "Exit",
          "destination": "18_building_K"
        }
      }
    },
    "18_building_K-KHP-KHP1-9700": {
      "firstVisit": true,
      "displayName": "Paraguay shelf",
      "description": "Description for shelf Paraguay in Paraguay Room.\n\n[|Entrance||] Paraguay Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "18_building_K-KHP": {
          "displayName": "Entrance",
          "destination": "18_building_K-KHP"
        }
      }
    },
    "18_building_K-KHP": {
      "firstVisit": true,
      "displayName": "Paraguay Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Paraguay. You can exit to the floor foyer.\n\n[|Shelf|||||] Paraguay shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "18_building_K-KHP-KHP1-9700": {
          "displayName": "Shelf",
          "destination": "18_building_K-KHP-KHP1-9700"
        },
        "18_building_K": {
          "displayName": "Exit",
          "destination": "18_building_K"
        }
      }
    },
    "18_building_K-KKA-KKA3-9796": {
      "firstVisit": true,
      "displayName": "Law of East Germany shelf",
      "description": "Description for shelf Law of East Germany in Law of East Germany Room.\n\n[|Entrance||] Law of East Germany Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "18_building_K-KKA": {
          "displayName": "Entrance",
          "destination": "18_building_K-KKA"
        }
      }
    },
    "18_building_K-KKA": {
      "firstVisit": true,
      "displayName": "Law of East Germany Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of East Germany. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of East Germany shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "18_building_K-KKA-KKA3-9796": {
          "displayName": "Shelf",
          "destination": "18_building_K-KKA-KKA3-9796"
        },
        "18_building_K": {
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
        "18_building_K-KHW": {
          "displayName": "South",
          "destination": "18_building_K-KHW"
        },
        "18_building_K-KGE": {
          "displayName": "North",
          "destination": "18_building_K-KGE"
        },
        "18_building_K-KGG": {
          "displayName": "SouthEast",
          "destination": "18_building_K-KGG"
        },
        "18_building_K-KHF": {
          "displayName": "NorthWest",
          "destination": "18_building_K-KHF"
        },
        "18_building_K-KHP": {
          "displayName": "SouthWest",
          "destination": "18_building_K-KHP"
        },
        "18_building_K-KKA": {
          "displayName": "NorthEast",
          "destination": "18_building_K-KKA"
        },
        "17_building_K": {
          "displayName": "Down",
          "destination": "17_building_K"
        },
        "19_building_K": {
          "displayName": "Up",
          "destination": "19_building_K"
        }
      }
    },
    "19_building_K-KKV-KKV": {
      "firstVisit": true,
      "displayName": "Law of Sweden shelf",
      "description": "Description for shelf Law of Sweden in Law of Sweden Room.\n\n[|Entrance||] Law of Sweden Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "19_building_K-KKV": {
          "displayName": "Entrance",
          "destination": "19_building_K-KKV"
        }
      }
    },
    "19_building_K-KKV": {
      "firstVisit": true,
      "displayName": "Law of Sweden Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Sweden. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Sweden shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "19_building_K-KKV-KKV": {
          "displayName": "Shelf",
          "destination": "19_building_K-KKV-KKV"
        },
        "19_building_K": {
          "displayName": "Exit",
          "destination": "19_building_K"
        }
      }
    },
    "19_building_K-KSW-KSW1-4990": {
      "firstVisit": true,
      "displayName": "Morocco shelf",
      "description": "Description for shelf Morocco in Morocco Room.\n\n[|Entrance||] Morocco Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "19_building_K-KSW": {
          "displayName": "Entrance",
          "destination": "19_building_K-KSW"
        }
      }
    },
    "19_building_K-KSW": {
      "firstVisit": true,
      "displayName": "Morocco Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Morocco. You can exit to the floor foyer.\n\n[|Shelf|||||] Morocco shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "19_building_K-KSW-KSW1-4990": {
          "displayName": "Shelf",
          "destination": "19_building_K-KSW-KSW1-4990"
        },
        "19_building_K": {
          "displayName": "Exit",
          "destination": "19_building_K"
        }
      }
    },
    "19_building_K-KM-KM1-999": {
      "firstVisit": true,
      "displayName": "General shelf",
      "description": "Description for shelf General in General Room.\n\n[|Entrance||] General Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "19_building_K-KM": {
          "displayName": "Entrance",
          "destination": "19_building_K-KM"
        }
      }
    },
    "19_building_K-KM": {
      "firstVisit": true,
      "displayName": "General Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is General. You can exit to the floor foyer.\n\n[|Shelf|||||] General shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "19_building_K-KM-KM1-999": {
          "displayName": "Shelf",
          "destination": "19_building_K-KM-KM1-999"
        },
        "19_building_K": {
          "displayName": "Exit",
          "destination": "19_building_K"
        }
      }
    },
    "19_building_K-KLF-KLF1-490": {
      "firstVisit": true,
      "displayName": "Belarus (Republic) shelf",
      "description": "Description for shelf Belarus (Republic) in Belarus (Republic) Room.\n\n[|Entrance||] Belarus (Republic) Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "19_building_K-KLF": {
          "displayName": "Entrance",
          "destination": "19_building_K-KLF"
        }
      }
    },
    "19_building_K-KLF": {
      "firstVisit": true,
      "displayName": "Belarus (Republic) Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Belarus (Republic). You can exit to the floor foyer.\n\n[|Shelf|||||] Belarus (Republic) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "19_building_K-KLF-KLF1-490": {
          "displayName": "Shelf",
          "destination": "19_building_K-KLF-KLF1-490"
        },
        "19_building_K": {
          "displayName": "Exit",
          "destination": "19_building_K"
        }
      }
    },
    "19_building_K-KH-KH1-999": {
      "firstVisit": true,
      "displayName": "General shelf",
      "description": "Description for shelf General in General Room.\n\n[|Entrance||] General Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "19_building_K-KH": {
          "displayName": "Entrance",
          "destination": "19_building_K-KH"
        }
      }
    },
    "19_building_K-KH": {
      "firstVisit": true,
      "displayName": "General Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is General. You can exit to the floor foyer.\n\n[|Shelf|||||] General shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "19_building_K-KH-KH1-999": {
          "displayName": "Shelf",
          "destination": "19_building_K-KH-KH1-999"
        },
        "19_building_K": {
          "displayName": "Exit",
          "destination": "19_building_K"
        }
      }
    },
    "19_building_K-KPT-KPT1-4990": {
      "firstVisit": true,
      "displayName": "Thailand shelf",
      "description": "Description for shelf Thailand in Thailand Room.\n\n[|Entrance||] Thailand Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "19_building_K-KPT": {
          "displayName": "Entrance",
          "destination": "19_building_K-KPT"
        }
      }
    },
    "19_building_K-KPT": {
      "firstVisit": true,
      "displayName": "Thailand Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Thailand. You can exit to the floor foyer.\n\n[|Shelf|||||] Thailand shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "19_building_K-KPT-KPT1-4990": {
          "displayName": "Shelf",
          "destination": "19_building_K-KPT-KPT1-4990"
        },
        "19_building_K": {
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
        "19_building_K-KKV": {
          "displayName": "South",
          "destination": "19_building_K-KKV"
        },
        "19_building_K-KSW": {
          "displayName": "North",
          "destination": "19_building_K-KSW"
        },
        "19_building_K-KM": {
          "displayName": "SouthEast",
          "destination": "19_building_K-KM"
        },
        "19_building_K-KLF": {
          "displayName": "NorthWest",
          "destination": "19_building_K-KLF"
        },
        "19_building_K-KH": {
          "displayName": "SouthWest",
          "destination": "19_building_K-KH"
        },
        "19_building_K-KPT": {
          "displayName": "NorthEast",
          "destination": "19_building_K-KPT"
        },
        "18_building_K": {
          "displayName": "Down",
          "destination": "18_building_K"
        },
        "20_building_K": {
          "displayName": "Up",
          "destination": "20_building_K"
        }
      }
    },
    "20_building_K-KPM-KPM1-4999": {
      "firstVisit": true,
      "displayName": "Philippines shelf",
      "description": "Description for shelf Philippines in Philippines Room.\n\n[|Entrance||] Philippines Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "20_building_K-KPM": {
          "displayName": "Entrance",
          "destination": "20_building_K-KPM"
        }
      }
    },
    "20_building_K-KPM": {
      "firstVisit": true,
      "displayName": "Philippines Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Philippines. You can exit to the floor foyer.\n\n[|Shelf|||||] Philippines shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "20_building_K-KPM-KPM1-4999": {
          "displayName": "Shelf",
          "destination": "20_building_K-KPM-KPM1-4999"
        },
        "20_building_K": {
          "displayName": "Exit",
          "destination": "20_building_K"
        }
      }
    },
    "20_building_K-KPV-KPV1-8094": {
      "firstVisit": true,
      "displayName": "Vietnam shelf",
      "description": "Description for shelf Vietnam in Vietnam Room.\n\n[|Entrance||] Vietnam Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "20_building_K-KPV": {
          "displayName": "Entrance",
          "destination": "20_building_K-KPV"
        }
      }
    },
    "20_building_K-KPV": {
      "firstVisit": true,
      "displayName": "Vietnam Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Vietnam. You can exit to the floor foyer.\n\n[|Shelf|||||] Vietnam shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "20_building_K-KPV-KPV1-8094": {
          "displayName": "Shelf",
          "destination": "20_building_K-KPV-KPV1-8094"
        },
        "20_building_K": {
          "displayName": "Exit",
          "destination": "20_building_K"
        }
      }
    },
    "20_building_K-KPP-KPP1-499": {
      "firstVisit": true,
      "displayName": "Singapore shelf",
      "description": "Description for shelf Singapore in Singapore Room.\n\n[|Entrance||] Singapore Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "20_building_K-KPP": {
          "displayName": "Entrance",
          "destination": "20_building_K-KPP"
        }
      }
    },
    "20_building_K-KPP": {
      "firstVisit": true,
      "displayName": "Singapore Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Singapore. You can exit to the floor foyer.\n\n[|Shelf|||||] Singapore shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "20_building_K-KPP-KPP1-499": {
          "displayName": "Shelf",
          "destination": "20_building_K-KPP-KPP1-499"
        },
        "20_building_K": {
          "displayName": "Exit",
          "destination": "20_building_K"
        }
      }
    },
    "20_building_K-KMH-KMH1-4990": {
      "firstVisit": true,
      "displayName": "Iran shelf",
      "description": "Description for shelf Iran in Iran Room.\n\n[|Entrance||] Iran Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "20_building_K-KMH": {
          "displayName": "Entrance",
          "destination": "20_building_K-KMH"
        }
      }
    },
    "20_building_K-KMH": {
      "firstVisit": true,
      "displayName": "Iran Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Iran. You can exit to the floor foyer.\n\n[|Shelf|||||] Iran shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "20_building_K-KMH-KMH1-4990": {
          "displayName": "Shelf",
          "destination": "20_building_K-KMH-KMH1-4990"
        },
        "20_building_K": {
          "displayName": "Exit",
          "destination": "20_building_K"
        }
      }
    },
    "20_building_K-KSV-KSV1-490": {
      "firstVisit": true,
      "displayName": "Mauritius shelf",
      "description": "Description for shelf Mauritius in Mayotte Room.\n\n[|Entrance||] Mayotte Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "20_building_K-KSV": {
          "displayName": "Entrance",
          "destination": "20_building_K-KSV"
        }
      }
    },
    "20_building_K-KSV": {
      "firstVisit": true,
      "displayName": "Mayotte Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Mauritius. You can exit to the floor foyer.\n\n[|Shelf|||||] Mauritius shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "20_building_K-KSV-KSV1-490": {
          "displayName": "Shelf",
          "destination": "20_building_K-KSV-KSV1-490"
        },
        "20_building_K": {
          "displayName": "Exit",
          "destination": "20_building_K"
        }
      }
    },
    "20_building_K-KSY-KSY1-4990": {
      "firstVisit": true,
      "displayName": "Namibia shelf",
      "description": "Description for shelf Namibia in Namibia Room.\n\n[|Entrance||] Namibia Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "20_building_K-KSY": {
          "displayName": "Entrance",
          "destination": "20_building_K-KSY"
        }
      }
    },
    "20_building_K-KSY": {
      "firstVisit": true,
      "displayName": "Namibia Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Namibia. You can exit to the floor foyer.\n\n[|Shelf|||||] Namibia shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "20_building_K-KSY-KSY1-4990": {
          "displayName": "Shelf",
          "destination": "20_building_K-KSY-KSY1-4990"
        },
        "20_building_K": {
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
        "20_building_K-KPM": {
          "displayName": "South",
          "destination": "20_building_K-KPM"
        },
        "20_building_K-KPV": {
          "displayName": "North",
          "destination": "20_building_K-KPV"
        },
        "20_building_K-KPP": {
          "displayName": "SouthEast",
          "destination": "20_building_K-KPP"
        },
        "20_building_K-KMH": {
          "displayName": "NorthWest",
          "destination": "20_building_K-KMH"
        },
        "20_building_K-KSV": {
          "displayName": "SouthWest",
          "destination": "20_building_K-KSV"
        },
        "20_building_K-KSY": {
          "displayName": "NorthEast",
          "destination": "20_building_K-KSY"
        },
        "19_building_K": {
          "displayName": "Down",
          "destination": "19_building_K"
        },
        "21_building_K": {
          "displayName": "Up",
          "destination": "21_building_K"
        }
      }
    },
    "21_building_K-KQK-KQK1-490": {
      "firstVisit": true,
      "displayName": "Botswana shelf",
      "description": "Description for shelf Botswana in Botswana Room.\n\n[|Entrance||] Botswana Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "21_building_K-KQK": {
          "displayName": "Entrance",
          "destination": "21_building_K-KQK"
        }
      }
    },
    "21_building_K-KQK": {
      "firstVisit": true,
      "displayName": "Botswana Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Botswana. You can exit to the floor foyer.\n\n[|Shelf|||||] Botswana shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "21_building_K-KQK-KQK1-490": {
          "displayName": "Shelf",
          "destination": "21_building_K-KQK-KQK1-490"
        },
        "21_building_K": {
          "displayName": "Exit",
          "destination": "21_building_K"
        }
      }
    },
    "21_building_K-KQH-KQH1-4990": {
      "firstVisit": true,
      "displayName": "Angola shelf",
      "description": "Description for shelf Angola in Angola Room.\n\n[|Entrance||] Angola Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "21_building_K-KQH": {
          "displayName": "Entrance",
          "destination": "21_building_K-KQH"
        }
      }
    },
    "21_building_K-KQH": {
      "firstVisit": true,
      "displayName": "Angola Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Angola. You can exit to the floor foyer.\n\n[|Shelf|||||] Angola shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "21_building_K-KQH-KQH1-4990": {
          "displayName": "Shelf",
          "destination": "21_building_K-KQH-KQH1-4990"
        },
        "21_building_K": {
          "displayName": "Exit",
          "destination": "21_building_K"
        }
      }
    },
    "21_building_K-KSX-KSX1-4990": {
      "firstVisit": true,
      "displayName": "Mozambique shelf",
      "description": "Description for shelf Mozambique in Mozambique Room.\n\n[|Entrance||] Mozambique Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "21_building_K-KSX": {
          "displayName": "Entrance",
          "destination": "21_building_K-KSX"
        }
      }
    },
    "21_building_K-KSX": {
      "firstVisit": true,
      "displayName": "Mozambique Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Mozambique. You can exit to the floor foyer.\n\n[|Shelf|||||] Mozambique shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "21_building_K-KSX-KSX1-4990": {
          "displayName": "Shelf",
          "destination": "21_building_K-KSX-KSX1-4990"
        },
        "21_building_K": {
          "displayName": "Exit",
          "destination": "21_building_K"
        }
      }
    },
    "21_building_K-KSK-KSK1-4990": {
      "firstVisit": true,
      "displayName": "Kenya shelf",
      "description": "Description for shelf Kenya in Kenya Room.\n\n[|Entrance||] Kenya Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "21_building_K-KSK": {
          "displayName": "Entrance",
          "destination": "21_building_K-KSK"
        }
      }
    },
    "21_building_K-KSK": {
      "firstVisit": true,
      "displayName": "Kenya Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Kenya. You can exit to the floor foyer.\n\n[|Shelf|||||] Kenya shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "21_building_K-KSK-KSK1-4990": {
          "displayName": "Shelf",
          "destination": "21_building_K-KSK-KSK1-4990"
        },
        "21_building_K": {
          "displayName": "Exit",
          "destination": "21_building_K"
        }
      }
    },
    "21_building_K-KRU-KRU1-490": {
      "firstVisit": true,
      "displayName": "Gabon shelf",
      "description": "Description for shelf Gabon in Gabon Room.\n\n[|Entrance||] Gabon Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "21_building_K-KRU": {
          "displayName": "Entrance",
          "destination": "21_building_K-KRU"
        }
      }
    },
    "21_building_K-KRU": {
      "firstVisit": true,
      "displayName": "Gabon Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Gabon. You can exit to the floor foyer.\n\n[|Shelf|||||] Gabon shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "21_building_K-KRU-KRU1-490": {
          "displayName": "Shelf",
          "destination": "21_building_K-KRU-KRU1-490"
        },
        "21_building_K": {
          "displayName": "Exit",
          "destination": "21_building_K"
        }
      }
    },
    "21_building_K-KSL-KSL1-490": {
      "firstVisit": true,
      "displayName": "Lesotho shelf",
      "description": "Description for shelf Lesotho in Lesotho Room.\n\n[|Entrance||] Lesotho Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "21_building_K-KSL": {
          "displayName": "Entrance",
          "destination": "21_building_K-KSL"
        }
      }
    },
    "21_building_K-KSL": {
      "firstVisit": true,
      "displayName": "Lesotho Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Lesotho. You can exit to the floor foyer.\n\n[|Shelf|||||] Lesotho shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "21_building_K-KSL-KSL1-490": {
          "displayName": "Shelf",
          "destination": "21_building_K-KSL-KSL1-490"
        },
        "21_building_K": {
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
        "21_building_K-KQK": {
          "displayName": "South",
          "destination": "21_building_K-KQK"
        },
        "21_building_K-KQH": {
          "displayName": "North",
          "destination": "21_building_K-KQH"
        },
        "21_building_K-KSX": {
          "displayName": "SouthEast",
          "destination": "21_building_K-KSX"
        },
        "21_building_K-KSK": {
          "displayName": "NorthWest",
          "destination": "21_building_K-KSK"
        },
        "21_building_K-KRU": {
          "displayName": "SouthWest",
          "destination": "21_building_K-KRU"
        },
        "21_building_K-KSL": {
          "displayName": "NorthEast",
          "destination": "21_building_K-KSL"
        },
        "20_building_K": {
          "displayName": "Down",
          "destination": "20_building_K"
        },
        "22_building_K": {
          "displayName": "Up",
          "destination": "22_building_K"
        }
      }
    },
    "22_building_K-KRX-KRX1-4990": {
      "firstVisit": true,
      "displayName": "Ghana shelf",
      "description": "Description for shelf Ghana in Ghana Room.\n\n[|Entrance||] Ghana Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "22_building_K-KRX": {
          "displayName": "Entrance",
          "destination": "22_building_K-KRX"
        }
      }
    },
    "22_building_K-KRX": {
      "firstVisit": true,
      "displayName": "Ghana Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Ghana. You can exit to the floor foyer.\n\n[|Shelf|||||] Ghana shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "22_building_K-KRX-KRX1-4990": {
          "displayName": "Shelf",
          "destination": "22_building_K-KRX-KRX1-4990"
        },
        "22_building_K": {
          "displayName": "Exit",
          "destination": "22_building_K"
        }
      }
    },
    "22_building_K-KSS-KSS1-490": {
      "firstVisit": true,
      "displayName": "Malawi shelf",
      "description": "Description for shelf Malawi in Malawi Room.\n\n[|Entrance||] Malawi Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "22_building_K-KSS": {
          "displayName": "Entrance",
          "destination": "22_building_K-KSS"
        }
      }
    },
    "22_building_K-KSS": {
      "firstVisit": true,
      "displayName": "Malawi Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Malawi. You can exit to the floor foyer.\n\n[|Shelf|||||] Malawi shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "22_building_K-KSS-KSS1-490": {
          "displayName": "Shelf",
          "destination": "22_building_K-KSS-KSS1-490"
        },
        "22_building_K": {
          "displayName": "Exit",
          "destination": "22_building_K"
        }
      }
    },
    "22_building_K-KTW-KTW1-490": {
      "firstVisit": true,
      "displayName": "Uganda shelf",
      "description": "Description for shelf Uganda in Uganda Room.\n\n[|Entrance||] Uganda Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "22_building_K-KTW": {
          "displayName": "Entrance",
          "destination": "22_building_K-KTW"
        }
      }
    },
    "22_building_K-KTW": {
      "firstVisit": true,
      "displayName": "Uganda Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Uganda. You can exit to the floor foyer.\n\n[|Shelf|||||] Uganda shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "22_building_K-KTW-KTW1-490": {
          "displayName": "Shelf",
          "destination": "22_building_K-KTW-KTW1-490"
        },
        "22_building_K": {
          "displayName": "Exit",
          "destination": "22_building_K"
        }
      }
    },
    "22_building_K-KTD-KTD1-490": {
      "firstVisit": true,
      "displayName": "Rwanda shelf",
      "description": "Description for shelf Rwanda in Rwanda Room.\n\n[|Entrance||] Rwanda Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "22_building_K-KTD": {
          "displayName": "Entrance",
          "destination": "22_building_K-KTD"
        }
      }
    },
    "22_building_K-KTD": {
      "firstVisit": true,
      "displayName": "Rwanda Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Rwanda. You can exit to the floor foyer.\n\n[|Shelf|||||] Rwanda shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "22_building_K-KTD-KTD1-490": {
          "displayName": "Shelf",
          "destination": "22_building_K-KTD-KTD1-490"
        },
        "22_building_K": {
          "displayName": "Exit",
          "destination": "22_building_K"
        }
      }
    },
    "22_building_K-KTX-KTX1-4990": {
      "firstVisit": true,
      "displayName": "Congo (Democratic Republic) shelf",
      "description": "Description for shelf Congo (Democratic Republic) in Congo (Democratic Republic) Room.\n\n[|Entrance||] Congo (Democratic Republic) Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "22_building_K-KTX": {
          "displayName": "Entrance",
          "destination": "22_building_K-KTX"
        }
      }
    },
    "22_building_K-KTX": {
      "firstVisit": true,
      "displayName": "Congo (Democratic Republic) Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Congo (Democratic Republic). You can exit to the floor foyer.\n\n[|Shelf|||||] Congo (Democratic Republic) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "22_building_K-KTX-KTX1-4990": {
          "displayName": "Shelf",
          "destination": "22_building_K-KTX-KTX1-4990"
        },
        "22_building_K": {
          "displayName": "Exit",
          "destination": "22_building_K"
        }
      }
    },
    "22_building_K-KRS-KRS1-499": {
      "firstVisit": true,
      "displayName": "French West Africa shelf",
      "description": "Description for shelf French West Africa in French West Africa Room.\n\n[|Entrance||] French West Africa Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "22_building_K-KRS": {
          "displayName": "Entrance",
          "destination": "22_building_K-KRS"
        }
      }
    },
    "22_building_K-KRS": {
      "firstVisit": true,
      "displayName": "French West Africa Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is French West Africa. You can exit to the floor foyer.\n\n[|Shelf|||||] French West Africa shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "22_building_K-KRS-KRS1-499": {
          "displayName": "Shelf",
          "destination": "22_building_K-KRS-KRS1-499"
        },
        "22_building_K": {
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
        "22_building_K-KRX": {
          "displayName": "South",
          "destination": "22_building_K-KRX"
        },
        "22_building_K-KSS": {
          "displayName": "North",
          "destination": "22_building_K-KSS"
        },
        "22_building_K-KTW": {
          "displayName": "SouthEast",
          "destination": "22_building_K-KTW"
        },
        "22_building_K-KTD": {
          "displayName": "NorthWest",
          "destination": "22_building_K-KTD"
        },
        "22_building_K-KTX": {
          "displayName": "SouthWest",
          "destination": "22_building_K-KTX"
        },
        "22_building_K-KRS": {
          "displayName": "NorthEast",
          "destination": "22_building_K-KRS"
        },
        "21_building_K": {
          "displayName": "Down",
          "destination": "21_building_K"
        },
        "23_building_K": {
          "displayName": "Up",
          "destination": "23_building_K"
        }
      }
    },
    "23_building_K-KTG-KTG1-4990": {
      "firstVisit": true,
      "displayName": "Senegal shelf",
      "description": "Description for shelf Senegal in Senegal Room.\n\n[|Entrance||] Senegal Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "23_building_K-KTG": {
          "displayName": "Entrance",
          "destination": "23_building_K-KTG"
        }
      }
    },
    "23_building_K-KTG": {
      "firstVisit": true,
      "displayName": "Senegal Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Senegal. You can exit to the floor foyer.\n\n[|Shelf|||||] Senegal shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "23_building_K-KTG-KTG1-4990": {
          "displayName": "Shelf",
          "destination": "23_building_K-KTG-KTG1-4990"
        },
        "23_building_K": {
          "displayName": "Exit",
          "destination": "23_building_K"
        }
      }
    },
    "23_building_K-KKX-KKX": {
      "firstVisit": true,
      "displayName": "Law of Turkey shelf",
      "description": "Description for shelf Law of Turkey in Law of Turkey Room.\n\n[|Entrance||] Law of Turkey Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "23_building_K-KKX": {
          "displayName": "Entrance",
          "destination": "23_building_K-KKX"
        }
      }
    },
    "23_building_K-KKX": {
      "firstVisit": true,
      "displayName": "Law of Turkey Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Turkey. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Turkey shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "23_building_K-KKX-KKX": {
          "displayName": "Shelf",
          "destination": "23_building_K-KKX-KKX"
        },
        "23_building_K": {
          "displayName": "Exit",
          "destination": "23_building_K"
        }
      }
    },
    "23_building_K-KLE-KLE1-490": {
      "firstVisit": true,
      "displayName": "Azerbaijan shelf",
      "description": "Description for shelf Azerbaijan in Azerbaijan Room.\n\n[|Entrance||] Azerbaijan Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "23_building_K-KLE": {
          "displayName": "Entrance",
          "destination": "23_building_K-KLE"
        }
      }
    },
    "23_building_K-KLE": {
      "firstVisit": true,
      "displayName": "Azerbaijan Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Azerbaijan. You can exit to the floor foyer.\n\n[|Shelf|||||] Azerbaijan shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "23_building_K-KLE-KLE1-490": {
          "displayName": "Shelf",
          "destination": "23_building_K-KLE-KLE1-490"
        },
        "23_building_K": {
          "displayName": "Exit",
          "destination": "23_building_K"
        }
      }
    },
    "23_building_K-KRM-KRM1-4990": {
      "firstVisit": true,
      "displayName": "Egypt shelf",
      "description": "Description for shelf Egypt in Egypt Room.\n\n[|Entrance||] Egypt Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "23_building_K-KRM": {
          "displayName": "Entrance",
          "destination": "23_building_K-KRM"
        }
      }
    },
    "23_building_K-KRM": {
      "firstVisit": true,
      "displayName": "Egypt Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Egypt. You can exit to the floor foyer.\n\n[|Shelf|||||] Egypt shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "23_building_K-KRM-KRM1-4990": {
          "displayName": "Shelf",
          "destination": "23_building_K-KRM-KRM1-4990"
        },
        "23_building_K": {
          "displayName": "Exit",
          "destination": "23_building_K"
        }
      }
    },
    "23_building_K-KMN-KMN1-499": {
      "firstVisit": true,
      "displayName": "Kuwait shelf",
      "description": "Description for shelf Kuwait in Kuwait Room.\n\n[|Entrance||] Kuwait Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "23_building_K-KMN": {
          "displayName": "Entrance",
          "destination": "23_building_K-KMN"
        }
      }
    },
    "23_building_K-KMN": {
      "firstVisit": true,
      "displayName": "Kuwait Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Kuwait. You can exit to the floor foyer.\n\n[|Shelf|||||] Kuwait shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "23_building_K-KMN-KMN1-499": {
          "displayName": "Shelf",
          "destination": "23_building_K-KMN-KMN1-499"
        },
        "23_building_K": {
          "displayName": "Exit",
          "destination": "23_building_K"
        }
      }
    },
    "23_building_K-KMX-KMX1001-1526": {
      "firstVisit": true,
      "displayName": "Yemen shelf",
      "description": "Description for shelf Yemen in Yemen Room.\n\n[|Entrance||] Yemen Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "23_building_K-KMX": {
          "displayName": "Entrance",
          "destination": "23_building_K-KMX"
        }
      }
    },
    "23_building_K-KMX": {
      "firstVisit": true,
      "displayName": "Yemen Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Yemen. You can exit to the floor foyer.\n\n[|Shelf|||||] Yemen shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "23_building_K-KMX-KMX1001-1526": {
          "displayName": "Shelf",
          "destination": "23_building_K-KMX-KMX1001-1526"
        },
        "23_building_K": {
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
        "23_building_K-KTG": {
          "displayName": "South",
          "destination": "23_building_K-KTG"
        },
        "23_building_K-KKX": {
          "displayName": "North",
          "destination": "23_building_K-KKX"
        },
        "23_building_K-KLE": {
          "displayName": "SouthEast",
          "destination": "23_building_K-KLE"
        },
        "23_building_K-KRM": {
          "displayName": "NorthWest",
          "destination": "23_building_K-KRM"
        },
        "23_building_K-KMN": {
          "displayName": "SouthWest",
          "destination": "23_building_K-KMN"
        },
        "23_building_K-KMX": {
          "displayName": "NorthEast",
          "destination": "23_building_K-KMX"
        },
        "22_building_K": {
          "displayName": "Down",
          "destination": "22_building_K"
        },
        "24_building_K": {
          "displayName": "Up",
          "destination": "24_building_K"
        }
      }
    },
    "24_building_K-KTQ-KTQ1-4990": {
      "firstVisit": true,
      "displayName": "Sudan shelf",
      "description": "Description for shelf Sudan in Sudan Room.\n\n[|Entrance||] Sudan Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "24_building_K-KTQ": {
          "displayName": "Entrance",
          "destination": "24_building_K-KTQ"
        }
      }
    },
    "24_building_K-KTQ": {
      "firstVisit": true,
      "displayName": "Sudan Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Sudan. You can exit to the floor foyer.\n\n[|Shelf|||||] Sudan shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "24_building_K-KTQ-KTQ1-4990": {
          "displayName": "Shelf",
          "destination": "24_building_K-KTQ-KTQ1-4990"
        },
        "24_building_K": {
          "displayName": "Exit",
          "destination": "24_building_K"
        }
      }
    },
    "24_building_K-KQG-KQG1-4999": {
      "firstVisit": true,
      "displayName": "Algeria shelf",
      "description": "Description for shelf Algeria in Algeria Room.\n\n[|Entrance||] Algeria Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "24_building_K-KQG": {
          "displayName": "Entrance",
          "destination": "24_building_K-KQG"
        }
      }
    },
    "24_building_K-KQG": {
      "firstVisit": true,
      "displayName": "Algeria Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Algeria. You can exit to the floor foyer.\n\n[|Shelf|||||] Algeria shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "24_building_K-KQG-KQG1-4999": {
          "displayName": "Shelf",
          "destination": "24_building_K-KQG-KQG1-4999"
        },
        "24_building_K": {
          "displayName": "Exit",
          "destination": "24_building_K"
        }
      }
    },
    "24_building_K-KMV-KMV1-9870": {
      "firstVisit": true,
      "displayName": "United Arab Emirates shelf",
      "description": "Description for shelf United Arab Emirates in United Arab Emirates Room.\n\n[|Entrance||] United Arab Emirates Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "24_building_K-KMV": {
          "displayName": "Entrance",
          "destination": "24_building_K-KMV"
        }
      }
    },
    "24_building_K-KMV": {
      "firstVisit": true,
      "displayName": "United Arab Emirates Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is United Arab Emirates. You can exit to the floor foyer.\n\n[|Shelf|||||] United Arab Emirates shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "24_building_K-KMV-KMV1-9870": {
          "displayName": "Shelf",
          "destination": "24_building_K-KMV-KMV1-9870"
        },
        "24_building_K": {
          "displayName": "Exit",
          "destination": "24_building_K"
        }
      }
    },
    "24_building_K-KHD-KHD1-9900": {
      "firstVisit": true,
      "displayName": "Brazil shelf",
      "description": "Description for shelf Brazil in Brazil Room.\n\n[|Entrance||] Brazil Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "24_building_K-KHD": {
          "displayName": "Entrance",
          "destination": "24_building_K-KHD"
        }
      }
    },
    "24_building_K-KHD": {
      "firstVisit": true,
      "displayName": "Brazil Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Brazil. You can exit to the floor foyer.\n\n[|Shelf|||||] Brazil shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "24_building_K-KHD-KHD1-9900": {
          "displayName": "Shelf",
          "destination": "24_building_K-KHD-KHD1-9900"
        },
        "24_building_K": {
          "displayName": "Exit",
          "destination": "24_building_K"
        }
      }
    },
    "24_building_K-KHN-KHN1-9000": {
      "firstVisit": true,
      "displayName": "Guyana shelf",
      "description": "Description for shelf Guyana in Guyana Room.\n\n[|Entrance||] Guyana Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "24_building_K-KHN": {
          "displayName": "Entrance",
          "destination": "24_building_K-KHN"
        }
      }
    },
    "24_building_K-KHN": {
      "firstVisit": true,
      "displayName": "Guyana Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Guyana. You can exit to the floor foyer.\n\n[|Shelf|||||] Guyana shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "24_building_K-KHN-KHN1-9000": {
          "displayName": "Shelf",
          "destination": "24_building_K-KHN-KHN1-9000"
        },
        "24_building_K": {
          "displayName": "Exit",
          "destination": "24_building_K"
        }
      }
    },
    "24_building_K-KHU-KHU1-9800": {
      "firstVisit": true,
      "displayName": "Uruguay shelf",
      "description": "Description for shelf Uruguay in Uruguay Room.\n\n[|Entrance||] Uruguay Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "24_building_K-KHU": {
          "displayName": "Entrance",
          "destination": "24_building_K-KHU"
        }
      }
    },
    "24_building_K-KHU": {
      "firstVisit": true,
      "displayName": "Uruguay Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Uruguay. You can exit to the floor foyer.\n\n[|Shelf|||||] Uruguay shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "24_building_K-KHU-KHU1-9800": {
          "displayName": "Shelf",
          "destination": "24_building_K-KHU-KHU1-9800"
        },
        "24_building_K": {
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
        "24_building_K-KTQ": {
          "displayName": "South",
          "destination": "24_building_K-KTQ"
        },
        "24_building_K-KQG": {
          "displayName": "North",
          "destination": "24_building_K-KQG"
        },
        "24_building_K-KMV": {
          "displayName": "SouthEast",
          "destination": "24_building_K-KMV"
        },
        "24_building_K-KHD": {
          "displayName": "NorthWest",
          "destination": "24_building_K-KHD"
        },
        "24_building_K-KHN": {
          "displayName": "SouthWest",
          "destination": "24_building_K-KHN"
        },
        "24_building_K-KHU": {
          "displayName": "NorthEast",
          "destination": "24_building_K-KHU"
        },
        "23_building_K": {
          "displayName": "Down",
          "destination": "23_building_K"
        },
        "25_building_K": {
          "displayName": "Up",
          "destination": "25_building_K"
        }
      }
    },
    "25_building_K-KLS-KLS1-490": {
      "firstVisit": true,
      "displayName": "Kyrgyzstan shelf",
      "description": "Description for shelf Kyrgyzstan in Kyrgyzstan Room.\n\n[|Entrance||] Kyrgyzstan Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "25_building_K-KLS": {
          "displayName": "Entrance",
          "destination": "25_building_K-KLS"
        }
      }
    },
    "25_building_K-KLS": {
      "firstVisit": true,
      "displayName": "Kyrgyzstan Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Kyrgyzstan. You can exit to the floor foyer.\n\n[|Shelf|||||] Kyrgyzstan shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "25_building_K-KLS-KLS1-490": {
          "displayName": "Shelf",
          "destination": "25_building_K-KLS-KLS1-490"
        },
        "25_building_K": {
          "displayName": "Exit",
          "destination": "25_building_K"
        }
      }
    },
    "25_building_K-KSA-KSA1-490": {
      "firstVisit": true,
      "displayName": "Guinea shelf",
      "description": "Description for shelf Guinea in Guinea Room.\n\n[|Entrance||] Guinea Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "25_building_K-KSA": {
          "displayName": "Entrance",
          "destination": "25_building_K-KSA"
        }
      }
    },
    "25_building_K-KSA": {
      "firstVisit": true,
      "displayName": "Guinea Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Guinea. You can exit to the floor foyer.\n\n[|Shelf|||||] Guinea shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "25_building_K-KSA-KSA1-490": {
          "displayName": "Shelf",
          "destination": "25_building_K-KSA-KSA1-490"
        },
        "25_building_K": {
          "displayName": "Exit",
          "destination": "25_building_K"
        }
      }
    },
    "25_building_K-KPF-KPF1-489": {
      "firstVisit": true,
      "displayName": "Macao shelf",
      "description": "Description for shelf Macao in Macao Room.\n\n[|Entrance||] Macao Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "25_building_K-KPF": {
          "displayName": "Entrance",
          "destination": "25_building_K-KPF"
        }
      }
    },
    "25_building_K-KPF": {
      "firstVisit": true,
      "displayName": "Macao Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Macao. You can exit to the floor foyer.\n\n[|Shelf|||||] Macao shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "25_building_K-KPF-KPF1-489": {
          "displayName": "Shelf",
          "destination": "25_building_K-KPF-KPF1-489"
        },
        "25_building_K": {
          "displayName": "Exit",
          "destination": "25_building_K"
        }
      }
    },
    "25_building_K-KLD-KLD1-490": {
      "firstVisit": true,
      "displayName": "Armenian SSR (to 1991) shelf",
      "description": "Description for shelf Armenian SSR (to 1991) in Armenian SSR (to 1991) Room.\n\n[|Entrance||] Armenian SSR (to 1991) Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "25_building_K-KLD": {
          "displayName": "Entrance",
          "destination": "25_building_K-KLD"
        }
      }
    },
    "25_building_K-KLD": {
      "firstVisit": true,
      "displayName": "Armenian SSR (to 1991) Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Armenian SSR (to 1991). You can exit to the floor foyer.\n\n[|Shelf|||||] Armenian SSR (to 1991) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "25_building_K-KLD-KLD1-490": {
          "displayName": "Shelf",
          "destination": "25_building_K-KLD-KLD1-490"
        },
        "25_building_K": {
          "displayName": "Exit",
          "destination": "25_building_K"
        }
      }
    },
    "25_building_K-KTV-KTV1-4990": {
      "firstVisit": true,
      "displayName": "Tunisia shelf",
      "description": "Description for shelf Tunisia in Tunisia Room.\n\n[|Entrance||] Tunisia Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "25_building_K-KTV": {
          "displayName": "Entrance",
          "destination": "25_building_K-KTV"
        }
      }
    },
    "25_building_K-KTV": {
      "firstVisit": true,
      "displayName": "Tunisia Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Tunisia. You can exit to the floor foyer.\n\n[|Shelf|||||] Tunisia shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "25_building_K-KTV-KTV1-4990": {
          "displayName": "Shelf",
          "destination": "25_building_K-KTV-KTV1-4990"
        },
        "25_building_K": {
          "displayName": "Exit",
          "destination": "25_building_K"
        }
      }
    },
    "25_building_K-KMP-KMP1-490": {
      "firstVisit": true,
      "displayName": "Lebanon shelf",
      "description": "Description for shelf Lebanon in Lebanon Room.\n\n[|Entrance||] Lebanon Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "25_building_K-KMP": {
          "displayName": "Entrance",
          "destination": "25_building_K-KMP"
        }
      }
    },
    "25_building_K-KMP": {
      "firstVisit": true,
      "displayName": "Lebanon Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Lebanon. You can exit to the floor foyer.\n\n[|Shelf|||||] Lebanon shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "25_building_K-KMP-KMP1-490": {
          "displayName": "Shelf",
          "destination": "25_building_K-KMP-KMP1-490"
        },
        "25_building_K": {
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
        "25_building_K-KLS": {
          "displayName": "South",
          "destination": "25_building_K-KLS"
        },
        "25_building_K-KSA": {
          "displayName": "North",
          "destination": "25_building_K-KSA"
        },
        "25_building_K-KPF": {
          "displayName": "SouthEast",
          "destination": "25_building_K-KPF"
        },
        "25_building_K-KLD": {
          "displayName": "NorthWest",
          "destination": "25_building_K-KLD"
        },
        "25_building_K-KTV": {
          "displayName": "SouthWest",
          "destination": "25_building_K-KTV"
        },
        "25_building_K-KMP": {
          "displayName": "NorthEast",
          "destination": "25_building_K-KMP"
        },
        "24_building_K": {
          "displayName": "Down",
          "destination": "24_building_K"
        },
        "26_building_K": {
          "displayName": "Up",
          "destination": "26_building_K"
        }
      }
    },
    "26_building_K-KMF-KMF1001-1490": {
      "firstVisit": true,
      "displayName": "Bahrain shelf",
      "description": "Description for shelf Bahrain in Bahrain Room.\n\n[|Entrance||] Bahrain Room entrance\n[|Next||||||] Armenia (Republic) shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "26_building_K-KMF": {
          "displayName": "Entrance",
          "destination": "26_building_K-KMF"
        },
        "26_building_K-KMF-KMF1-489": {
          "displayName": "Next",
          "destination": "26_building_K-KMF-KMF1-489"
        }
      }
    },
    "26_building_K-KMF-KMF1-489": {
      "firstVisit": true,
      "displayName": "Armenia (Republic) shelf",
      "description": "Description for shelf Armenia (Republic) in Bahrain Room.\n\n[|Previous||] Bahrain shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "26_building_K-KMF-KMF1001-1490": {
          "displayName": "Previous",
          "destination": "26_building_K-KMF-KMF1001-1490"
        }
      }
    },
    "26_building_K-KMF": {
      "firstVisit": true,
      "displayName": "Bahrain Room entrance",
      "description": "This room has two shelves organized linearly from the entrance towards the back. The first shelf you can see is Bahrain. You can exit to the floor foyer.\n\n[|Shelf|||||] Bahrain shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "26_building_K-KMF-KMF1001-1490": {
          "displayName": "Shelf",
          "destination": "26_building_K-KMF-KMF1001-1490"
        },
        "26_building_K": {
          "displayName": "Exit",
          "destination": "26_building_K"
        }
      }
    },
    "26_building_K-KKS-KKS": {
      "firstVisit": true,
      "displayName": "Law of Slovenia shelf",
      "description": "Description for shelf Law of Slovenia in Law of Slovenia Room.\n\n[|Entrance||] Law of Slovenia Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "26_building_K-KKS": {
          "displayName": "Entrance",
          "destination": "26_building_K-KKS"
        }
      }
    },
    "26_building_K-KKS": {
      "firstVisit": true,
      "displayName": "Law of Slovenia Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Slovenia. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Slovenia shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "26_building_K-KKS-KKS": {
          "displayName": "Shelf",
          "destination": "26_building_K-KKS-KKS"
        },
        "26_building_K": {
          "displayName": "Exit",
          "destination": "26_building_K"
        }
      }
    },
    "26_building_K-KJW-KJW51-9600": {
      "firstVisit": true,
      "displayName": "French regions, provinces, cities, etc. shelf",
      "description": "Description for shelf French regions, provinces, cities, etc. in French regions, provinces, cities, etc. Room.\n\n[|Entrance||] French regions, provinces, cities, etc. Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "26_building_K-KJW": {
          "displayName": "Entrance",
          "destination": "26_building_K-KJW"
        }
      }
    },
    "26_building_K-KJW": {
      "firstVisit": true,
      "displayName": "French regions, provinces, cities, etc. Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is French regions, provinces, cities, etc.. You can exit to the floor foyer.\n\n[|Shelf|||||] French regions, provinces, cities, etc. shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "26_building_K-KJW-KJW51-9600": {
          "displayName": "Shelf",
          "destination": "26_building_K-KJW-KJW51-9600"
        },
        "26_building_K": {
          "displayName": "Exit",
          "destination": "26_building_K"
        }
      }
    },
    "26_building_K-KJJ-KJJ": {
      "firstVisit": true,
      "displayName": "Law of Austria shelf",
      "description": "Description for shelf Law of Austria in Law of Austria Room.\n\n[|Entrance||] Law of Austria Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "26_building_K-KJJ": {
          "displayName": "Entrance",
          "destination": "26_building_K-KJJ"
        }
      }
    },
    "26_building_K-KJJ": {
      "firstVisit": true,
      "displayName": "Law of Austria Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Austria. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Austria shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "26_building_K-KJJ-KJJ": {
          "displayName": "Shelf",
          "destination": "26_building_K-KJJ-KJJ"
        },
        "26_building_K": {
          "displayName": "Exit",
          "destination": "26_building_K"
        }
      }
    },
    "26_building_K-KZD-KZD1002-6715": {
      "firstVisit": true,
      "displayName": "Space law.  Law of outer space shelf",
      "description": "Description for shelf Space law.  Law of outer space in Space law.  Law of outer space Room.\n\n[|Entrance||] Space law.  Law of outer space Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "26_building_K-KZD": {
          "displayName": "Entrance",
          "destination": "26_building_K-KZD"
        }
      }
    },
    "26_building_K-KZD": {
      "firstVisit": true,
      "displayName": "Space law.  Law of outer space Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Space law.  Law of outer space. You can exit to the floor foyer.\n\n[|Shelf|||||] Space law.  Law of outer space shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "26_building_K-KZD-KZD1002-6715": {
          "displayName": "Shelf",
          "destination": "26_building_K-KZD-KZD1002-6715"
        },
        "26_building_K": {
          "displayName": "Exit",
          "destination": "26_building_K"
        }
      }
    },
    "26_building_K-KWW-KWW1-490": {
      "firstVisit": true,
      "displayName": "Western Samoa shelf",
      "description": "Description for shelf Western Samoa in Western Samoa Room.\n\n[|Entrance||] Western Samoa Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "26_building_K-KWW": {
          "displayName": "Entrance",
          "destination": "26_building_K-KWW"
        }
      }
    },
    "26_building_K-KWW": {
      "firstVisit": true,
      "displayName": "Western Samoa Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Western Samoa. You can exit to the floor foyer.\n\n[|Shelf|||||] Western Samoa shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "26_building_K-KWW-KWW1-490": {
          "displayName": "Shelf",
          "destination": "26_building_K-KWW-KWW1-490"
        },
        "26_building_K": {
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
        "26_building_K-KMF": {
          "displayName": "South",
          "destination": "26_building_K-KMF"
        },
        "26_building_K-KKS": {
          "displayName": "North",
          "destination": "26_building_K-KKS"
        },
        "26_building_K-KJW": {
          "displayName": "SouthEast",
          "destination": "26_building_K-KJW"
        },
        "26_building_K-KJJ": {
          "displayName": "NorthWest",
          "destination": "26_building_K-KJJ"
        },
        "26_building_K-KZD": {
          "displayName": "SouthWest",
          "destination": "26_building_K-KZD"
        },
        "26_building_K-KWW": {
          "displayName": "NorthEast",
          "destination": "26_building_K-KWW"
        },
        "25_building_K": {
          "displayName": "Down",
          "destination": "25_building_K"
        },
        "27_building_K": {
          "displayName": "Up",
          "destination": "27_building_K"
        }
      }
    },
    "27_building_K-KVP-KVP1-100": {
      "firstVisit": true,
      "displayName": "French Polynesia shelf",
      "description": "Description for shelf French Polynesia in French Polynesia Room.\n\n[|Entrance||] French Polynesia Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "27_building_K-KVP": {
          "displayName": "Entrance",
          "destination": "27_building_K-KVP"
        }
      }
    },
    "27_building_K-KVP": {
      "firstVisit": true,
      "displayName": "French Polynesia Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is French Polynesia. You can exit to the floor foyer.\n\n[|Shelf|||||] French Polynesia shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "27_building_K-KVP-KVP1-100": {
          "displayName": "Shelf",
          "destination": "27_building_K-KVP-KVP1-100"
        },
        "27_building_K": {
          "displayName": "Exit",
          "destination": "27_building_K"
        }
      }
    },
    "27_building_K-KEO-KEO1-1199.5": {
      "firstVisit": true,
      "displayName": "Law of Ontario shelf",
      "description": "Description for shelf Law of Ontario in Law of Ontario Room.\n\n[|Entrance||] Law of Ontario Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "27_building_K-KEO": {
          "displayName": "Entrance",
          "destination": "27_building_K-KEO"
        }
      }
    },
    "27_building_K-KEO": {
      "firstVisit": true,
      "displayName": "Law of Ontario Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Ontario. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Ontario shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "27_building_K-KEO-KEO1-1199.5": {
          "displayName": "Shelf",
          "destination": "27_building_K-KEO-KEO1-1199.5"
        },
        "27_building_K": {
          "displayName": "Exit",
          "destination": "27_building_K"
        }
      }
    },
    "27_building_K-KEA-KEA": {
      "firstVisit": true,
      "displayName": "Law of Alberta shelf",
      "description": "Description for shelf Law of Alberta in Law of Alberta Room.\n\n[|Entrance||] Law of Alberta Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "27_building_K-KEA": {
          "displayName": "Entrance",
          "destination": "27_building_K-KEA"
        }
      }
    },
    "27_building_K-KEA": {
      "firstVisit": true,
      "displayName": "Law of Alberta Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Alberta. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Alberta shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "27_building_K-KEA-KEA": {
          "displayName": "Shelf",
          "destination": "27_building_K-KEA-KEA"
        },
        "27_building_K": {
          "displayName": "Exit",
          "destination": "27_building_K"
        }
      }
    },
    "27_building_K-KEB-KEB": {
      "firstVisit": true,
      "displayName": "Law of British Columbia shelf",
      "description": "Description for shelf Law of British Columbia in Law of British Columbia Room.\n\n[|Entrance||] Law of British Columbia Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "27_building_K-KEB": {
          "displayName": "Entrance",
          "destination": "27_building_K-KEB"
        }
      }
    },
    "27_building_K-KEB": {
      "firstVisit": true,
      "displayName": "Law of British Columbia Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of British Columbia. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of British Columbia shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "27_building_K-KEB-KEB": {
          "displayName": "Shelf",
          "destination": "27_building_K-KEB-KEB"
        },
        "27_building_K": {
          "displayName": "Exit",
          "destination": "27_building_K"
        }
      }
    },
    "27_building_K-KEQ-KEQ1-1199.5": {
      "firstVisit": true,
      "displayName": "Law of Qu\u00e9bec shelf",
      "description": "Description for shelf Law of Qu\u00e9bec in Law of Qu\u00e9bec Room.\n\n[|Entrance||] Law of Qu\u00e9bec Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "27_building_K-KEQ": {
          "displayName": "Entrance",
          "destination": "27_building_K-KEQ"
        }
      }
    },
    "27_building_K-KEQ": {
      "firstVisit": true,
      "displayName": "Law of Qu\u00e9bec Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Qu\u00e9bec. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Qu\u00e9bec shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "27_building_K-KEQ-KEQ1-1199.5": {
          "displayName": "Shelf",
          "destination": "27_building_K-KEQ-KEQ1-1199.5"
        },
        "27_building_K": {
          "displayName": "Exit",
          "destination": "27_building_K"
        }
      }
    },
    "27_building_K-KWH-KWH1-490": {
      "firstVisit": true,
      "displayName": "Papua New Guinea shelf",
      "description": "Description for shelf Papua New Guinea in Papua New Guinea Room.\n\n[|Entrance||] Papua New Guinea Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "27_building_K-KWH": {
          "displayName": "Entrance",
          "destination": "27_building_K-KWH"
        }
      }
    },
    "27_building_K-KWH": {
      "firstVisit": true,
      "displayName": "Papua New Guinea Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Papua New Guinea. You can exit to the floor foyer.\n\n[|Shelf|||||] Papua New Guinea shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "27_building_K-KWH-KWH1-490": {
          "displayName": "Shelf",
          "destination": "27_building_K-KWH-KWH1-490"
        },
        "27_building_K": {
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
        "27_building_K-KVP": {
          "displayName": "South",
          "destination": "27_building_K-KVP"
        },
        "27_building_K-KEO": {
          "displayName": "North",
          "destination": "27_building_K-KEO"
        },
        "27_building_K-KEA": {
          "displayName": "SouthEast",
          "destination": "27_building_K-KEA"
        },
        "27_building_K-KEB": {
          "displayName": "NorthWest",
          "destination": "27_building_K-KEB"
        },
        "27_building_K-KEQ": {
          "displayName": "SouthWest",
          "destination": "27_building_K-KEQ"
        },
        "27_building_K-KWH": {
          "displayName": "NorthEast",
          "destination": "27_building_K-KWH"
        },
        "26_building_K": {
          "displayName": "Down",
          "destination": "26_building_K"
        },
        "28_building_K": {
          "displayName": "Up",
          "destination": "28_building_K"
        }
      }
    },
    "28_building_K-KVS-KVS501-990": {
      "firstVisit": true,
      "displayName": "Micronesia (Federated States) shelf",
      "description": "Description for shelf Micronesia (Federated States) in Midway Islands Room.\n\n[|Entrance||] Midway Islands Room entrance\n[|Next||||||] Marshall Islands shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "28_building_K-KVS": {
          "displayName": "Entrance",
          "destination": "28_building_K-KVS"
        },
        "28_building_K-KVS-KVS1-490": {
          "displayName": "Next",
          "destination": "28_building_K-KVS-KVS1-490"
        }
      }
    },
    "28_building_K-KVS-KVS1-490": {
      "firstVisit": true,
      "displayName": "Marshall Islands shelf",
      "description": "Description for shelf Marshall Islands in Midway Islands Room.\n\n[|Previous||] Micronesia (Federated States) shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "28_building_K-KVS-KVS501-990": {
          "displayName": "Previous",
          "destination": "28_building_K-KVS-KVS501-990"
        }
      }
    },
    "28_building_K-KVS": {
      "firstVisit": true,
      "displayName": "Midway Islands Room entrance",
      "description": "This room has two shelves organized linearly from the entrance towards the back. The first shelf you can see is Micronesia (Federated States). You can exit to the floor foyer.\n\n[|Shelf|||||] Micronesia (Federated States) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "28_building_K-KVS-KVS501-990": {
          "displayName": "Shelf",
          "destination": "28_building_K-KVS-KVS501-990"
        },
        "28_building_K": {
          "displayName": "Exit",
          "destination": "28_building_K"
        }
      }
    },
    "28_building_K-KWG-KWG1-490": {
      "firstVisit": true,
      "displayName": "Palau shelf",
      "description": "Description for shelf Palau in Palau Room.\n\n[|Entrance||] Palau Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "28_building_K-KWG": {
          "displayName": "Entrance",
          "destination": "28_building_K-KWG"
        }
      }
    },
    "28_building_K-KWG": {
      "firstVisit": true,
      "displayName": "Palau Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Palau. You can exit to the floor foyer.\n\n[|Shelf|||||] Palau shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "28_building_K-KWG-KWG1-490": {
          "displayName": "Shelf",
          "destination": "28_building_K-KWG-KWG1-490"
        },
        "28_building_K": {
          "displayName": "Exit",
          "destination": "28_building_K"
        }
      }
    },
    "28_building_K-KVQ-KVQ1-490": {
      "firstVisit": true,
      "displayName": "Guam shelf",
      "description": "Description for shelf Guam in Guam Room.\n\n[|Entrance||] Guam Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "28_building_K-KVQ": {
          "displayName": "Entrance",
          "destination": "28_building_K-KVQ"
        }
      }
    },
    "28_building_K-KVQ": {
      "firstVisit": true,
      "displayName": "Guam Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Guam. You can exit to the floor foyer.\n\n[|Shelf|||||] Guam shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "28_building_K-KVQ-KVQ1-490": {
          "displayName": "Shelf",
          "destination": "28_building_K-KVQ-KVQ1-490"
        },
        "28_building_K": {
          "displayName": "Exit",
          "destination": "28_building_K"
        }
      }
    },
    "28_building_K-KJN-KJN": {
      "firstVisit": true,
      "displayName": "Law of Cyprus shelf",
      "description": "Description for shelf Law of Cyprus in Law of Cyprus Room.\n\n[|Entrance||] Law of Cyprus Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "28_building_K-KJN": {
          "displayName": "Entrance",
          "destination": "28_building_K-KJN"
        }
      }
    },
    "28_building_K-KJN": {
      "firstVisit": true,
      "displayName": "Law of Cyprus Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Cyprus. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Cyprus shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "28_building_K-KJN-KJN": {
          "displayName": "Shelf",
          "destination": "28_building_K-KJN-KJN"
        },
        "28_building_K": {
          "displayName": "Exit",
          "destination": "28_building_K"
        }
      }
    },
    "28_building_K-KKF-KKF": {
      "firstVisit": true,
      "displayName": "Law of Hungary shelf",
      "description": "Description for shelf Law of Hungary in Law of Hungary Room.\n\n[|Entrance||] Law of Hungary Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "28_building_K-KKF": {
          "displayName": "Entrance",
          "destination": "28_building_K-KKF"
        }
      }
    },
    "28_building_K-KKF": {
      "firstVisit": true,
      "displayName": "Law of Hungary Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Hungary. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Hungary shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "28_building_K-KKF-KKF": {
          "displayName": "Shelf",
          "destination": "28_building_K-KKF-KKF"
        },
        "28_building_K": {
          "displayName": "Exit",
          "destination": "28_building_K"
        }
      }
    },
    "28_building_K-KHM-KHM1-9000": {
      "firstVisit": true,
      "displayName": "French Guiana shelf",
      "description": "Description for shelf French Guiana in French Guiana Room.\n\n[|Entrance||] French Guiana Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "28_building_K-KHM": {
          "displayName": "Entrance",
          "destination": "28_building_K-KHM"
        }
      }
    },
    "28_building_K-KHM": {
      "firstVisit": true,
      "displayName": "French Guiana Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is French Guiana. You can exit to the floor foyer.\n\n[|Shelf|||||] French Guiana shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "28_building_K-KHM-KHM1-9000": {
          "displayName": "Shelf",
          "destination": "28_building_K-KHM-KHM1-9000"
        },
        "28_building_K": {
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
        "28_building_K-KVS": {
          "displayName": "South",
          "destination": "28_building_K-KVS"
        },
        "28_building_K-KWG": {
          "displayName": "North",
          "destination": "28_building_K-KWG"
        },
        "28_building_K-KVQ": {
          "displayName": "SouthEast",
          "destination": "28_building_K-KVQ"
        },
        "28_building_K-KJN": {
          "displayName": "NorthWest",
          "destination": "28_building_K-KJN"
        },
        "28_building_K-KKF": {
          "displayName": "SouthWest",
          "destination": "28_building_K-KKF"
        },
        "28_building_K-KHM": {
          "displayName": "NorthEast",
          "destination": "28_building_K-KHM"
        },
        "27_building_K": {
          "displayName": "Down",
          "destination": "27_building_K"
        },
        "29_building_K": {
          "displayName": "Up",
          "destination": "29_building_K"
        }
      }
    },
    "29_building_K-KKN-KKN": {
      "firstVisit": true,
      "displayName": "Law of Norway shelf",
      "description": "Description for shelf Law of Norway in Law of Norway Room.\n\n[|Entrance||] Law of Norway Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "29_building_K-KKN": {
          "displayName": "Entrance",
          "destination": "29_building_K-KKN"
        }
      }
    },
    "29_building_K-KKN": {
      "firstVisit": true,
      "displayName": "Law of Norway Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Norway. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Norway shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "29_building_K-KKN-KKN": {
          "displayName": "Shelf",
          "destination": "29_building_K-KKN-KKN"
        },
        "29_building_K": {
          "displayName": "Exit",
          "destination": "29_building_K"
        }
      }
    },
    "29_building_K-KRB-KRB1-490": {
      "firstVisit": true,
      "displayName": "Central African Republic shelf",
      "description": "Description for shelf Central African Republic in Central African Republic Room.\n\n[|Entrance||] Central African Republic Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "29_building_K-KRB": {
          "displayName": "Entrance",
          "destination": "29_building_K-KRB"
        }
      }
    },
    "29_building_K-KRB": {
      "firstVisit": true,
      "displayName": "Central African Republic Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Central African Republic. You can exit to the floor foyer.\n\n[|Shelf|||||] Central African Republic shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "29_building_K-KRB-KRB1-490": {
          "displayName": "Shelf",
          "destination": "29_building_K-KRB-KRB1-490"
        },
        "29_building_K": {
          "displayName": "Exit",
          "destination": "29_building_K"
        }
      }
    },
    "29_building_K-KTU-KTU1-490": {
      "firstVisit": true,
      "displayName": "Togo shelf",
      "description": "Description for shelf Togo in Togo Room.\n\n[|Entrance||] Togo Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "29_building_K-KTU": {
          "displayName": "Entrance",
          "destination": "29_building_K-KTU"
        }
      }
    },
    "29_building_K-KTU": {
      "firstVisit": true,
      "displayName": "Togo Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Togo. You can exit to the floor foyer.\n\n[|Shelf|||||] Togo shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "29_building_K-KTU-KTU1-490": {
          "displayName": "Shelf",
          "destination": "29_building_K-KTU-KTU1-490"
        },
        "29_building_K": {
          "displayName": "Exit",
          "destination": "29_building_K"
        }
      }
    },
    "29_building_K-KQT-KQT1-490": {
      "firstVisit": true,
      "displayName": "Burkina Faso shelf",
      "description": "Description for shelf Burkina Faso in Burkina Faso Room.\n\n[|Entrance||] Burkina Faso Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "29_building_K-KQT": {
          "displayName": "Entrance",
          "destination": "29_building_K-KQT"
        }
      }
    },
    "29_building_K-KQT": {
      "firstVisit": true,
      "displayName": "Burkina Faso Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Burkina Faso. You can exit to the floor foyer.\n\n[|Shelf|||||] Burkina Faso shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "29_building_K-KQT-KQT1-490": {
          "displayName": "Shelf",
          "destination": "29_building_K-KQT-KQT1-490"
        },
        "29_building_K": {
          "displayName": "Exit",
          "destination": "29_building_K"
        }
      }
    },
    "29_building_K-KSH-KSH0-4990": {
      "firstVisit": true,
      "displayName": "C\u00f4te d\u2019Ivoire shelf",
      "description": "Description for shelf C\u00f4te d\u2019Ivoire in C\u00f4te d\u2019Ivoire Room.\n\n[|Entrance||] C\u00f4te d\u2019Ivoire Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "29_building_K-KSH": {
          "displayName": "Entrance",
          "destination": "29_building_K-KSH"
        }
      }
    },
    "29_building_K-KSH": {
      "firstVisit": true,
      "displayName": "C\u00f4te d\u2019Ivoire Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is C\u00f4te d\u2019Ivoire. You can exit to the floor foyer.\n\n[|Shelf|||||] C\u00f4te d\u2019Ivoire shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "29_building_K-KSH-KSH0-4990": {
          "displayName": "Shelf",
          "destination": "29_building_K-KSH-KSH0-4990"
        },
        "29_building_K": {
          "displayName": "Exit",
          "destination": "29_building_K"
        }
      }
    },
    "29_building_K-KML-KML1-490": {
      "firstVisit": true,
      "displayName": "Jerusalem shelf",
      "description": "Description for shelf Jerusalem in Jerusalem Room.\n\n[|Entrance||] Jerusalem Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "29_building_K-KML": {
          "displayName": "Entrance",
          "destination": "29_building_K-KML"
        }
      }
    },
    "29_building_K-KML": {
      "firstVisit": true,
      "displayName": "Jerusalem Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Jerusalem. You can exit to the floor foyer.\n\n[|Shelf|||||] Jerusalem shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "29_building_K-KML-KML1-490": {
          "displayName": "Shelf",
          "destination": "29_building_K-KML-KML1-490"
        },
        "29_building_K": {
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
        "29_building_K-KKN": {
          "displayName": "South",
          "destination": "29_building_K-KKN"
        },
        "29_building_K-KRB": {
          "displayName": "North",
          "destination": "29_building_K-KRB"
        },
        "29_building_K-KTU": {
          "displayName": "SouthEast",
          "destination": "29_building_K-KTU"
        },
        "29_building_K-KQT": {
          "displayName": "NorthWest",
          "destination": "29_building_K-KQT"
        },
        "29_building_K-KSH": {
          "displayName": "SouthWest",
          "destination": "29_building_K-KSH"
        },
        "29_building_K-KML": {
          "displayName": "NorthEast",
          "destination": "29_building_K-KML"
        },
        "28_building_K": {
          "displayName": "Down",
          "destination": "28_building_K"
        },
        "30_building_K": {
          "displayName": "Up",
          "destination": "30_building_K"
        }
      }
    },
    "30_building_K-KMJ-KMJ1-4990": {
      "firstVisit": true,
      "displayName": "Iraq shelf",
      "description": "Description for shelf Iraq in Iraq Room.\n\n[|Entrance||] Iraq Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "30_building_K-KMJ": {
          "displayName": "Entrance",
          "destination": "30_building_K-KMJ"
        }
      }
    },
    "30_building_K-KMJ": {
      "firstVisit": true,
      "displayName": "Iraq Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Iraq. You can exit to the floor foyer.\n\n[|Shelf|||||] Iraq shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "30_building_K-KMJ-KMJ1-4990": {
          "displayName": "Shelf",
          "destination": "30_building_K-KMJ-KMJ1-4990"
        },
        "30_building_K": {
          "displayName": "Exit",
          "destination": "30_building_K"
        }
      }
    },
    "30_building_K-KSP-KSP1-4990": {
      "firstVisit": true,
      "displayName": "Libya shelf",
      "description": "Description for shelf Libya in Libya Room.\n\n[|Entrance||] Libya Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "30_building_K-KSP": {
          "displayName": "Entrance",
          "destination": "30_building_K-KSP"
        }
      }
    },
    "30_building_K-KSP": {
      "firstVisit": true,
      "displayName": "Libya Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Libya. You can exit to the floor foyer.\n\n[|Shelf|||||] Libya shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "30_building_K-KSP-KSP1-4990": {
          "displayName": "Shelf",
          "destination": "30_building_K-KSP-KSP1-4990"
        },
        "30_building_K": {
          "displayName": "Exit",
          "destination": "30_building_K"
        }
      }
    },
    "30_building_K-KGH-KGH1-8000": {
      "firstVisit": true,
      "displayName": "Panama shelf",
      "description": "Description for shelf Panama in Panama Room.\n\n[|Entrance||] Panama Room entrance\n[|Next||||||] Panama Canal Zone shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "30_building_K-KGH": {
          "displayName": "Entrance",
          "destination": "30_building_K-KGH"
        },
        "30_building_K-KGH-KGH9001-9499": {
          "displayName": "Next",
          "destination": "30_building_K-KGH-KGH9001-9499"
        }
      }
    },
    "30_building_K-KGH-KGH9001-9499": {
      "firstVisit": true,
      "displayName": "Panama Canal Zone shelf",
      "description": "Description for shelf Panama Canal Zone in Panama Room.\n\n[|Previous||] Panama shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "30_building_K-KGH-KGH1-8000": {
          "displayName": "Previous",
          "destination": "30_building_K-KGH-KGH1-8000"
        }
      }
    },
    "30_building_K-KGH": {
      "firstVisit": true,
      "displayName": "Panama Room entrance",
      "description": "This room has two shelves organized linearly from the entrance towards the back. The first shelf you can see is Panama. You can exit to the floor foyer.\n\n[|Shelf|||||] Panama shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "30_building_K-KGH-KGH1-8000": {
          "displayName": "Shelf",
          "destination": "30_building_K-KGH-KGH1-8000"
        },
        "30_building_K": {
          "displayName": "Exit",
          "destination": "30_building_K"
        }
      }
    },
    "30_building_K-KGQ-KGQ1-9800": {
      "firstVisit": true,
      "displayName": "Dominican Republic shelf",
      "description": "Description for shelf Dominican Republic in Dominican Republic Room.\n\n[|Entrance||] Dominican Republic Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "30_building_K-KGQ": {
          "displayName": "Entrance",
          "destination": "30_building_K-KGQ"
        }
      }
    },
    "30_building_K-KGQ": {
      "firstVisit": true,
      "displayName": "Dominican Republic Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Dominican Republic. You can exit to the floor foyer.\n\n[|Shelf|||||] Dominican Republic shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "30_building_K-KGQ-KGQ1-9800": {
          "displayName": "Shelf",
          "destination": "30_building_K-KGQ-KGQ1-9800"
        },
        "30_building_K": {
          "displayName": "Exit",
          "destination": "30_building_K"
        }
      }
    },
    "30_building_K-KGN-KGN1-9800": {
      "firstVisit": true,
      "displayName": "Cuba shelf",
      "description": "Description for shelf Cuba in Cuba Room.\n\n[|Entrance||] Cuba Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "30_building_K-KGN": {
          "displayName": "Entrance",
          "destination": "30_building_K-KGN"
        }
      }
    },
    "30_building_K-KGN": {
      "firstVisit": true,
      "displayName": "Cuba Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Cuba. You can exit to the floor foyer.\n\n[|Shelf|||||] Cuba shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "30_building_K-KGN-KGN1-9800": {
          "displayName": "Shelf",
          "destination": "30_building_K-KGN-KGN1-9800"
        },
        "30_building_K": {
          "displayName": "Exit",
          "destination": "30_building_K"
        }
      }
    },
    "30_building_K-KGC-KGC1-9800": {
      "firstVisit": true,
      "displayName": "El Salvador shelf",
      "description": "Description for shelf El Salvador in El Salvador Room.\n\n[|Entrance||] El Salvador Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "30_building_K-KGC": {
          "displayName": "Entrance",
          "destination": "30_building_K-KGC"
        }
      }
    },
    "30_building_K-KGC": {
      "firstVisit": true,
      "displayName": "El Salvador Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is El Salvador. You can exit to the floor foyer.\n\n[|Shelf|||||] El Salvador shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "30_building_K-KGC-KGC1-9800": {
          "displayName": "Shelf",
          "destination": "30_building_K-KGC-KGC1-9800"
        },
        "30_building_K": {
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
        "30_building_K-KMJ": {
          "displayName": "South",
          "destination": "30_building_K-KMJ"
        },
        "30_building_K-KSP": {
          "displayName": "North",
          "destination": "30_building_K-KSP"
        },
        "30_building_K-KGH": {
          "displayName": "SouthEast",
          "destination": "30_building_K-KGH"
        },
        "30_building_K-KGQ": {
          "displayName": "NorthWest",
          "destination": "30_building_K-KGQ"
        },
        "30_building_K-KGN": {
          "displayName": "SouthWest",
          "destination": "30_building_K-KGN"
        },
        "30_building_K-KGC": {
          "displayName": "NorthEast",
          "destination": "30_building_K-KGC"
        },
        "29_building_K": {
          "displayName": "Down",
          "destination": "29_building_K"
        },
        "31_building_K": {
          "displayName": "Up",
          "destination": "31_building_K"
        }
      }
    },
    "31_building_K-KSN-KSN1-490": {
      "firstVisit": true,
      "displayName": "Liberia shelf",
      "description": "Description for shelf Liberia in Liberia Room.\n\n[|Entrance||] Liberia Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "31_building_K-KSN": {
          "displayName": "Entrance",
          "destination": "31_building_K-KSN"
        }
      }
    },
    "31_building_K-KSN": {
      "firstVisit": true,
      "displayName": "Liberia Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Liberia. You can exit to the floor foyer.\n\n[|Shelf|||||] Liberia shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "31_building_K-KSN-KSN1-490": {
          "displayName": "Shelf",
          "destination": "31_building_K-KSN-KSN1-490"
        },
        "31_building_K": {
          "displayName": "Exit",
          "destination": "31_building_K"
        }
      }
    },
    "31_building_K-KSZ-KSZ1-490": {
      "firstVisit": true,
      "displayName": "Niger shelf",
      "description": "Description for shelf Niger in Niger Room.\n\n[|Entrance||] Niger Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "31_building_K-KSZ": {
          "displayName": "Entrance",
          "destination": "31_building_K-KSZ"
        }
      }
    },
    "31_building_K-KSZ": {
      "firstVisit": true,
      "displayName": "Niger Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Niger. You can exit to the floor foyer.\n\n[|Shelf|||||] Niger shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "31_building_K-KSZ-KSZ1-490": {
          "displayName": "Shelf",
          "destination": "31_building_K-KSZ-KSZ1-490"
        },
        "31_building_K": {
          "displayName": "Exit",
          "destination": "31_building_K"
        }
      }
    },
    "31_building_K-KPC-KPC1-4990": {
      "firstVisit": true,
      "displayName": "Democratic People\u2019s Republic of Korea.  North Korea shelf",
      "description": "Description for shelf Democratic People\u2019s Republic of Korea.  North Korea in Democratic People\u2019s Republic of Korea.  North Korea Room.\n\n[|Entrance||] Democratic People\u2019s Republic of Korea.  North Korea Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "31_building_K-KPC": {
          "displayName": "Entrance",
          "destination": "31_building_K-KPC"
        }
      }
    },
    "31_building_K-KPC": {
      "firstVisit": true,
      "displayName": "Democratic People\u2019s Republic of Korea.  North Korea Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Democratic People\u2019s Republic of Korea.  North Korea. You can exit to the floor foyer.\n\n[|Shelf|||||] Democratic People\u2019s Republic of Korea.  North Korea shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "31_building_K-KPC-KPC1-4990": {
          "displayName": "Shelf",
          "destination": "31_building_K-KPC-KPC1-4990"
        },
        "31_building_K": {
          "displayName": "Exit",
          "destination": "31_building_K"
        }
      }
    },
    "31_building_K-KQ-KQ2010-9000": {
      "firstVisit": true,
      "displayName": "Law of indigenous peoples shelf",
      "description": "Description for shelf Law of indigenous peoples in Law of indigenous peoples Room.\n\n[|Entrance||] Law of indigenous peoples Room entrance\n[|Next||||||] History of law shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "31_building_K-KQ": {
          "displayName": "Entrance",
          "destination": "31_building_K-KQ"
        },
        "31_building_K-KQ-KQ2-197": {
          "displayName": "Next",
          "destination": "31_building_K-KQ-KQ2-197"
        }
      }
    },
    "31_building_K-KQ-KQ2-197": {
      "firstVisit": true,
      "displayName": "History of law shelf",
      "description": "Description for shelf History of law in Law of indigenous peoples Room.\n\n[|Previous||] Law of indigenous peoples shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "31_building_K-KQ-KQ2010-9000": {
          "displayName": "Previous",
          "destination": "31_building_K-KQ-KQ2010-9000"
        }
      }
    },
    "31_building_K-KQ": {
      "firstVisit": true,
      "displayName": "Law of indigenous peoples Room entrance",
      "description": "This room has two shelves organized linearly from the entrance towards the back. The first shelf you can see is Law of indigenous peoples. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of indigenous peoples shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "31_building_K-KQ-KQ2010-9000": {
          "displayName": "Shelf",
          "destination": "31_building_K-KQ-KQ2010-9000"
        },
        "31_building_K": {
          "displayName": "Exit",
          "destination": "31_building_K"
        }
      }
    },
    "31_building_K-KWC-KWC1-490": {
      "firstVisit": true,
      "displayName": "Northern Mariana Islands shelf",
      "description": "Description for shelf Northern Mariana Islands in Northern Mariana Islands Room.\n\n[|Entrance||] Northern Mariana Islands Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "31_building_K-KWC": {
          "displayName": "Entrance",
          "destination": "31_building_K-KWC"
        }
      }
    },
    "31_building_K-KWC": {
      "firstVisit": true,
      "displayName": "Northern Mariana Islands Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Northern Mariana Islands. You can exit to the floor foyer.\n\n[|Shelf|||||] Northern Mariana Islands shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "31_building_K-KWC-KWC1-490": {
          "displayName": "Shelf",
          "destination": "31_building_K-KWC-KWC1-490"
        },
        "31_building_K": {
          "displayName": "Exit",
          "destination": "31_building_K"
        }
      }
    },
    "31_building_K-KNM-KNM1-4990": {
      "firstVisit": true,
      "displayName": "Cambodia shelf",
      "description": "Description for shelf Cambodia in Cambodia Room.\n\n[|Entrance||] Cambodia Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "31_building_K-KNM": {
          "displayName": "Entrance",
          "destination": "31_building_K-KNM"
        }
      }
    },
    "31_building_K-KNM": {
      "firstVisit": true,
      "displayName": "Cambodia Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Cambodia. You can exit to the floor foyer.\n\n[|Shelf|||||] Cambodia shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "31_building_K-KNM-KNM1-4990": {
          "displayName": "Shelf",
          "destination": "31_building_K-KNM-KNM1-4990"
        },
        "31_building_K": {
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
        "31_building_K-KSN": {
          "displayName": "South",
          "destination": "31_building_K-KSN"
        },
        "31_building_K-KSZ": {
          "displayName": "North",
          "destination": "31_building_K-KSZ"
        },
        "31_building_K-KPC": {
          "displayName": "SouthEast",
          "destination": "31_building_K-KPC"
        },
        "31_building_K-KQ": {
          "displayName": "NorthWest",
          "destination": "31_building_K-KQ"
        },
        "31_building_K-KWC": {
          "displayName": "SouthWest",
          "destination": "31_building_K-KWC"
        },
        "31_building_K-KNM": {
          "displayName": "NorthEast",
          "destination": "31_building_K-KNM"
        },
        "30_building_K": {
          "displayName": "Down",
          "destination": "30_building_K"
        },
        "32_building_K": {
          "displayName": "Up",
          "destination": "32_building_K"
        }
      }
    },
    "32_building_K-KBT-KBT3-4300": {
      "firstVisit": true,
      "displayName": "Canon law of Eastern Rite Churches in Communion with the shelf",
      "description": "Description for shelf Canon law of Eastern Rite Churches in Communion with the in Canon law of Eastern Rite Churches in Communion with the Room.\n\n[|Entrance||] Canon law of Eastern Rite Churches in Communion with the Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "32_building_K-KBT": {
          "displayName": "Entrance",
          "destination": "32_building_K-KBT"
        }
      }
    },
    "32_building_K-KBT": {
      "firstVisit": true,
      "displayName": "Canon law of Eastern Rite Churches in Communion with the Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Canon law of Eastern Rite Churches in Communion with the. You can exit to the floor foyer.\n\n[|Shelf|||||] Canon law of Eastern Rite Churches in Communion with the shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "32_building_K-KBT-KBT3-4300": {
          "displayName": "Shelf",
          "destination": "32_building_K-KBT-KBT3-4300"
        },
        "32_building_K": {
          "displayName": "Exit",
          "destination": "32_building_K"
        }
      }
    },
    "32_building_K-KJG-KJG": {
      "firstVisit": true,
      "displayName": "Law of Albania shelf",
      "description": "Description for shelf Law of Albania in Law of Albania Room.\n\n[|Entrance||] Law of Albania Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "32_building_K-KJG": {
          "displayName": "Entrance",
          "destination": "32_building_K-KJG"
        }
      }
    },
    "32_building_K-KJG": {
      "firstVisit": true,
      "displayName": "Law of Albania Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Albania. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Albania shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "32_building_K-KJG-KJG": {
          "displayName": "Shelf",
          "destination": "32_building_K-KJG-KJG"
        },
        "32_building_K": {
          "displayName": "Exit",
          "destination": "32_building_K"
        }
      }
    },
    "32_building_K-KGX-KGX1-499": {
      "firstVisit": true,
      "displayName": "Trinidad and Tobago shelf",
      "description": "Description for shelf Trinidad and Tobago in Trinidad and Tobago Room.\n\n[|Entrance||] Trinidad and Tobago Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "32_building_K-KGX": {
          "displayName": "Entrance",
          "destination": "32_building_K-KGX"
        }
      }
    },
    "32_building_K-KGX": {
      "firstVisit": true,
      "displayName": "Trinidad and Tobago Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Trinidad and Tobago. You can exit to the floor foyer.\n\n[|Shelf|||||] Trinidad and Tobago shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "32_building_K-KGX-KGX1-499": {
          "displayName": "Shelf",
          "destination": "32_building_K-KGX-KGX1-499"
        },
        "32_building_K": {
          "displayName": "Exit",
          "destination": "32_building_K"
        }
      }
    },
    "32_building_K-KKR-KKR": {
      "firstVisit": true,
      "displayName": "Law of Romania shelf",
      "description": "Description for shelf Law of Romania in Law of Romania Room.\n\n[|Entrance||] Law of Romania Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "32_building_K-KKR": {
          "displayName": "Entrance",
          "destination": "32_building_K-KKR"
        }
      }
    },
    "32_building_K-KKR": {
      "firstVisit": true,
      "displayName": "Law of Romania Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Romania. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Romania shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "32_building_K-KKR-KKR": {
          "displayName": "Shelf",
          "destination": "32_building_K-KKR-KKR"
        },
        "32_building_K": {
          "displayName": "Exit",
          "destination": "32_building_K"
        }
      }
    },
    "32_building_K-KJQ-KJQ": {
      "firstVisit": true,
      "displayName": "Law of Slovakia (1993-        ) shelf",
      "description": "Description for shelf Law of Slovakia (1993-        ) in Law of Slovakia (1993-        ) Room.\n\n[|Entrance||] Law of Slovakia (1993-        ) Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "32_building_K-KJQ": {
          "displayName": "Entrance",
          "destination": "32_building_K-KJQ"
        }
      }
    },
    "32_building_K-KJQ": {
      "firstVisit": true,
      "displayName": "Law of Slovakia (1993-        ) Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Slovakia (1993-        ). You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Slovakia (1993-        ) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "32_building_K-KJQ-KJQ": {
          "displayName": "Shelf",
          "destination": "32_building_K-KJQ-KJQ"
        },
        "32_building_K": {
          "displayName": "Exit",
          "destination": "32_building_K"
        }
      }
    },
    "32_building_K-KLM-KLM1-490": {
      "firstVisit": true,
      "displayName": "Moldova shelf",
      "description": "Description for shelf Moldova in Moldova Room.\n\n[|Entrance||] Moldova Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "32_building_K-KLM": {
          "displayName": "Entrance",
          "destination": "32_building_K-KLM"
        }
      }
    },
    "32_building_K-KLM": {
      "firstVisit": true,
      "displayName": "Moldova Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Moldova. You can exit to the floor foyer.\n\n[|Shelf|||||] Moldova shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "32_building_K-KLM-KLM1-490": {
          "displayName": "Shelf",
          "destination": "32_building_K-KLM-KLM1-490"
        },
        "32_building_K": {
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
        "32_building_K-KBT": {
          "displayName": "South",
          "destination": "32_building_K-KBT"
        },
        "32_building_K-KJG": {
          "displayName": "North",
          "destination": "32_building_K-KJG"
        },
        "32_building_K-KGX": {
          "displayName": "SouthEast",
          "destination": "32_building_K-KGX"
        },
        "32_building_K-KKR": {
          "displayName": "NorthWest",
          "destination": "32_building_K-KKR"
        },
        "32_building_K-KJQ": {
          "displayName": "SouthWest",
          "destination": "32_building_K-KJQ"
        },
        "32_building_K-KLM": {
          "displayName": "NorthEast",
          "destination": "32_building_K-KLM"
        },
        "31_building_K": {
          "displayName": "Down",
          "destination": "31_building_K"
        },
        "33_building_K": {
          "displayName": "Up",
          "destination": "33_building_K"
        }
      }
    },
    "33_building_K-KDE-KDE21-580": {
      "firstVisit": true,
      "displayName": "Law of Northern Ireland shelf",
      "description": "Description for shelf Law of Northern Ireland in Law of Northern Ireland Room.\n\n[|Entrance||] Law of Northern Ireland Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "33_building_K-KDE": {
          "displayName": "Entrance",
          "destination": "33_building_K-KDE"
        }
      }
    },
    "33_building_K-KDE": {
      "firstVisit": true,
      "displayName": "Law of Northern Ireland Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Northern Ireland. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Northern Ireland shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "33_building_K-KDE-KDE21-580": {
          "displayName": "Shelf",
          "destination": "33_building_K-KDE-KDE21-580"
        },
        "33_building_K": {
          "displayName": "Exit",
          "destination": "33_building_K"
        }
      }
    },
    "33_building_K-KES-KES": {
      "firstVisit": true,
      "displayName": "Law of Saskatchewan shelf",
      "description": "Description for shelf Law of Saskatchewan in Law of Saskatchewan Room.\n\n[|Entrance||] Law of Saskatchewan Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "33_building_K-KES": {
          "displayName": "Entrance",
          "destination": "33_building_K-KES"
        }
      }
    },
    "33_building_K-KES": {
      "firstVisit": true,
      "displayName": "Law of Saskatchewan Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Saskatchewan. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Saskatchewan shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "33_building_K-KES-KES": {
          "displayName": "Shelf",
          "destination": "33_building_K-KES-KES"
        },
        "33_building_K": {
          "displayName": "Exit",
          "destination": "33_building_K"
        }
      }
    },
    "33_building_K-KNK-KNK1-490": {
      "firstVisit": true,
      "displayName": "Brunei shelf",
      "description": "Description for shelf Brunei in Brunei Room.\n\n[|Entrance||] Brunei Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "33_building_K-KNK": {
          "displayName": "Entrance",
          "destination": "33_building_K-KNK"
        }
      }
    },
    "33_building_K-KNK": {
      "firstVisit": true,
      "displayName": "Brunei Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Brunei. You can exit to the floor foyer.\n\n[|Shelf|||||] Brunei shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "33_building_K-KNK-KNK1-490": {
          "displayName": "Shelf",
          "destination": "33_building_K-KNK-KNK1-490"
        },
        "33_building_K": {
          "displayName": "Exit",
          "destination": "33_building_K"
        }
      }
    },
    "33_building_K-KPE-KPE1-4990": {
      "firstVisit": true,
      "displayName": "Laos shelf",
      "description": "Description for shelf Laos in Laos Room.\n\n[|Entrance||] Laos Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "33_building_K-KPE": {
          "displayName": "Entrance",
          "destination": "33_building_K-KPE"
        }
      }
    },
    "33_building_K-KPE": {
      "firstVisit": true,
      "displayName": "Laos Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Laos. You can exit to the floor foyer.\n\n[|Shelf|||||] Laos shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "33_building_K-KPE-KPE1-4990": {
          "displayName": "Shelf",
          "destination": "33_building_K-KPE-KPE1-4990"
        },
        "33_building_K": {
          "displayName": "Exit",
          "destination": "33_building_K"
        }
      }
    },
    "33_building_K-KPS-KPS1-4990": {
      "firstVisit": true,
      "displayName": "Sri Lanka shelf",
      "description": "Description for shelf Sri Lanka in Sri Lanka Room.\n\n[|Entrance||] Sri Lanka Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "33_building_K-KPS": {
          "displayName": "Entrance",
          "destination": "33_building_K-KPS"
        }
      }
    },
    "33_building_K-KPS": {
      "firstVisit": true,
      "displayName": "Sri Lanka Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Sri Lanka. You can exit to the floor foyer.\n\n[|Shelf|||||] Sri Lanka shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "33_building_K-KPS-KPS1-4990": {
          "displayName": "Shelf",
          "destination": "33_building_K-KPS-KPS1-4990"
        },
        "33_building_K": {
          "displayName": "Exit",
          "destination": "33_building_K"
        }
      }
    },
    "33_building_K-KPJ-KPJ1-490": {
      "firstVisit": true,
      "displayName": "Nepal shelf",
      "description": "Description for shelf Nepal in Nepal Room.\n\n[|Entrance||] Nepal Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "33_building_K-KPJ": {
          "displayName": "Entrance",
          "destination": "33_building_K-KPJ"
        }
      }
    },
    "33_building_K-KPJ": {
      "firstVisit": true,
      "displayName": "Nepal Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Nepal. You can exit to the floor foyer.\n\n[|Shelf|||||] Nepal shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "33_building_K-KPJ-KPJ1-490": {
          "displayName": "Shelf",
          "destination": "33_building_K-KPJ-KPJ1-490"
        },
        "33_building_K": {
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
        "33_building_K-KDE": {
          "displayName": "South",
          "destination": "33_building_K-KDE"
        },
        "33_building_K-KES": {
          "displayName": "North",
          "destination": "33_building_K-KES"
        },
        "33_building_K-KNK": {
          "displayName": "SouthEast",
          "destination": "33_building_K-KNK"
        },
        "33_building_K-KPE": {
          "displayName": "NorthWest",
          "destination": "33_building_K-KPE"
        },
        "33_building_K-KPS": {
          "displayName": "SouthWest",
          "destination": "33_building_K-KPS"
        },
        "33_building_K-KPJ": {
          "displayName": "NorthEast",
          "destination": "33_building_K-KPJ"
        },
        "32_building_K": {
          "displayName": "Down",
          "destination": "32_building_K"
        },
        "34_building_K": {
          "displayName": "Up",
          "destination": "34_building_K"
        }
      }
    },
    "34_building_K-KNL-KNL1-4990": {
      "firstVisit": true,
      "displayName": "Burma shelf",
      "description": "Description for shelf Burma in Burma Room.\n\n[|Entrance||] Burma Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "34_building_K-KNL": {
          "displayName": "Entrance",
          "destination": "34_building_K-KNL"
        }
      }
    },
    "34_building_K-KNL": {
      "firstVisit": true,
      "displayName": "Burma Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Burma. You can exit to the floor foyer.\n\n[|Shelf|||||] Burma shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "34_building_K-KNL-KNL1-4990": {
          "displayName": "Shelf",
          "destination": "34_building_K-KNL-KNL1-4990"
        },
        "34_building_K": {
          "displayName": "Exit",
          "destination": "34_building_K"
        }
      }
    },
    "34_building_K-KNG-KNG1-4990": {
      "firstVisit": true,
      "displayName": "Bangladesh shelf",
      "description": "Description for shelf Bangladesh in Bangladesh Room.\n\n[|Entrance||] Bangladesh Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "34_building_K-KNG": {
          "displayName": "Entrance",
          "destination": "34_building_K-KNG"
        }
      }
    },
    "34_building_K-KNG": {
      "firstVisit": true,
      "displayName": "Bangladesh Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Bangladesh. You can exit to the floor foyer.\n\n[|Shelf|||||] Bangladesh shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "34_building_K-KNG-KNG1-4990": {
          "displayName": "Shelf",
          "destination": "34_building_K-KNG-KNG1-4990"
        },
        "34_building_K": {
          "displayName": "Exit",
          "destination": "34_building_K"
        }
      }
    },
    "34_building_K-KSE-KSE1-490": {
      "firstVisit": true,
      "displayName": "Equatorial Guinea shelf",
      "description": "Description for shelf Equatorial Guinea in Equatorial Guinea Room.\n\n[|Entrance||] Equatorial Guinea Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "34_building_K-KSE": {
          "displayName": "Entrance",
          "destination": "34_building_K-KSE"
        }
      }
    },
    "34_building_K-KSE": {
      "firstVisit": true,
      "displayName": "Equatorial Guinea Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Equatorial Guinea. You can exit to the floor foyer.\n\n[|Shelf|||||] Equatorial Guinea shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "34_building_K-KSE-KSE1-490": {
          "displayName": "Shelf",
          "destination": "34_building_K-KSE-KSE1-490"
        },
        "34_building_K": {
          "displayName": "Exit",
          "destination": "34_building_K"
        }
      }
    },
    "34_building_K-KLT-KLT1-490": {
      "firstVisit": true,
      "displayName": "Tajikistan shelf",
      "description": "Description for shelf Tajikistan in Tajikistan Room.\n\n[|Entrance||] Tajikistan Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "34_building_K-KLT": {
          "displayName": "Entrance",
          "destination": "34_building_K-KLT"
        }
      }
    },
    "34_building_K-KLT": {
      "firstVisit": true,
      "displayName": "Tajikistan Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Tajikistan. You can exit to the floor foyer.\n\n[|Shelf|||||] Tajikistan shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "34_building_K-KLT-KLT1-490": {
          "displayName": "Shelf",
          "destination": "34_building_K-KLT-KLT1-490"
        },
        "34_building_K": {
          "displayName": "Exit",
          "destination": "34_building_K"
        }
      }
    },
    "34_building_K-KLV-KLV1-490": {
      "firstVisit": true,
      "displayName": "Turkmenistan shelf",
      "description": "Description for shelf Turkmenistan in Turkmenistan Room.\n\n[|Entrance||] Turkmenistan Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "34_building_K-KLV": {
          "displayName": "Entrance",
          "destination": "34_building_K-KLV"
        }
      }
    },
    "34_building_K-KLV": {
      "firstVisit": true,
      "displayName": "Turkmenistan Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Turkmenistan. You can exit to the floor foyer.\n\n[|Shelf|||||] Turkmenistan shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "34_building_K-KLV-KLV1-490": {
          "displayName": "Shelf",
          "destination": "34_building_K-KLV-KLV1-490"
        },
        "34_building_K": {
          "displayName": "Exit",
          "destination": "34_building_K"
        }
      }
    },
    "34_building_K-KRE-KRE1-490": {
      "firstVisit": true,
      "displayName": "Comoros shelf",
      "description": "Description for shelf Comoros in Comoros Room.\n\n[|Entrance||] Comoros Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "34_building_K-KRE": {
          "displayName": "Entrance",
          "destination": "34_building_K-KRE"
        }
      }
    },
    "34_building_K-KRE": {
      "firstVisit": true,
      "displayName": "Comoros Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Comoros. You can exit to the floor foyer.\n\n[|Shelf|||||] Comoros shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "34_building_K-KRE-KRE1-490": {
          "displayName": "Shelf",
          "destination": "34_building_K-KRE-KRE1-490"
        },
        "34_building_K": {
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
        "34_building_K-KNL": {
          "displayName": "South",
          "destination": "34_building_K-KNL"
        },
        "34_building_K-KNG": {
          "displayName": "North",
          "destination": "34_building_K-KNG"
        },
        "34_building_K-KSE": {
          "displayName": "SouthEast",
          "destination": "34_building_K-KSE"
        },
        "34_building_K-KLT": {
          "displayName": "NorthWest",
          "destination": "34_building_K-KLT"
        },
        "34_building_K-KLV": {
          "displayName": "SouthWest",
          "destination": "34_building_K-KLV"
        },
        "34_building_K-KRE": {
          "displayName": "NorthEast",
          "destination": "34_building_K-KRE"
        },
        "33_building_K": {
          "displayName": "Down",
          "destination": "33_building_K"
        },
        "35_building_K": {
          "displayName": "Up",
          "destination": "35_building_K"
        }
      }
    },
    "35_building_K-KTH-KTH1-490": {
      "firstVisit": true,
      "displayName": "Seychelles shelf",
      "description": "Description for shelf Seychelles in Seychelles Room.\n\n[|Entrance||] Seychelles Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "35_building_K-KTH": {
          "displayName": "Entrance",
          "destination": "35_building_K-KTH"
        }
      }
    },
    "35_building_K-KTH": {
      "firstVisit": true,
      "displayName": "Seychelles Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Seychelles. You can exit to the floor foyer.\n\n[|Shelf|||||] Seychelles shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "35_building_K-KTH-KTH1-490": {
          "displayName": "Shelf",
          "destination": "35_building_K-KTH-KTH1-490"
        },
        "35_building_K": {
          "displayName": "Exit",
          "destination": "35_building_K"
        }
      }
    },
    "35_building_K-KSR-KSR1-490": {
      "firstVisit": true,
      "displayName": "Madagascar shelf",
      "description": "Description for shelf Madagascar in Madagascar Room.\n\n[|Entrance||] Madagascar Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "35_building_K-KSR": {
          "displayName": "Entrance",
          "destination": "35_building_K-KSR"
        }
      }
    },
    "35_building_K-KSR": {
      "firstVisit": true,
      "displayName": "Madagascar Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Madagascar. You can exit to the floor foyer.\n\n[|Shelf|||||] Madagascar shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "35_building_K-KSR-KSR1-490": {
          "displayName": "Shelf",
          "destination": "35_building_K-KSR-KSR1-490"
        },
        "35_building_K": {
          "displayName": "Exit",
          "destination": "35_building_K"
        }
      }
    },
    "35_building_K-KQE-KQE10-1249": {
      "firstVisit": true,
      "displayName": "Regional organization and integration shelf",
      "description": "Description for shelf Regional organization and integration in Regional organization and integration Room.\n\n[|Entrance||] Regional organization and integration Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "35_building_K-KQE": {
          "displayName": "Entrance",
          "destination": "35_building_K-KQE"
        }
      }
    },
    "35_building_K-KQE": {
      "firstVisit": true,
      "displayName": "Regional organization and integration Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Regional organization and integration. You can exit to the floor foyer.\n\n[|Shelf|||||] Regional organization and integration shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "35_building_K-KQE-KQE10-1249": {
          "displayName": "Shelf",
          "destination": "35_building_K-KQE-KQE10-1249"
        },
        "35_building_K": {
          "displayName": "Exit",
          "destination": "35_building_K"
        }
      }
    },
    "35_building_K-KRN-KRN1-499": {
      "firstVisit": true,
      "displayName": "Eritrea shelf",
      "description": "Description for shelf Eritrea in Eritrea Room.\n\n[|Entrance||] Eritrea Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "35_building_K-KRN": {
          "displayName": "Entrance",
          "destination": "35_building_K-KRN"
        }
      }
    },
    "35_building_K-KRN": {
      "firstVisit": true,
      "displayName": "Eritrea Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Eritrea. You can exit to the floor foyer.\n\n[|Shelf|||||] Eritrea shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "35_building_K-KRN-KRN1-499": {
          "displayName": "Shelf",
          "destination": "35_building_K-KRN-KRN1-499"
        },
        "35_building_K": {
          "displayName": "Exit",
          "destination": "35_building_K"
        }
      }
    },
    "35_building_K-KKG-KKG": {
      "firstVisit": true,
      "displayName": "Law of Iceland shelf",
      "description": "Description for shelf Law of Iceland in Law of Iceland Room.\n\n[|Entrance||] Law of Iceland Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "35_building_K-KKG": {
          "displayName": "Entrance",
          "destination": "35_building_K-KKG"
        }
      }
    },
    "35_building_K-KKG": {
      "firstVisit": true,
      "displayName": "Law of Iceland Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Iceland. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Iceland shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "35_building_K-KKG-KKG": {
          "displayName": "Shelf",
          "destination": "35_building_K-KKG-KKG"
        },
        "35_building_K": {
          "displayName": "Exit",
          "destination": "35_building_K"
        }
      }
    },
    "35_building_K-KLH-KLH1-490": {
      "firstVisit": true,
      "displayName": "Georgia (Republic) shelf",
      "description": "Description for shelf Georgia (Republic) in Georgia (Republic) Room.\n\n[|Entrance||] Georgia (Republic) Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "35_building_K-KLH": {
          "displayName": "Entrance",
          "destination": "35_building_K-KLH"
        }
      }
    },
    "35_building_K-KLH": {
      "firstVisit": true,
      "displayName": "Georgia (Republic) Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Georgia (Republic). You can exit to the floor foyer.\n\n[|Shelf|||||] Georgia (Republic) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "35_building_K-KLH-KLH1-490": {
          "displayName": "Shelf",
          "destination": "35_building_K-KLH-KLH1-490"
        },
        "35_building_K": {
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
        "35_building_K-KTH": {
          "displayName": "South",
          "destination": "35_building_K-KTH"
        },
        "35_building_K-KSR": {
          "displayName": "North",
          "destination": "35_building_K-KSR"
        },
        "35_building_K-KQE": {
          "displayName": "SouthEast",
          "destination": "35_building_K-KQE"
        },
        "35_building_K-KRN": {
          "displayName": "NorthWest",
          "destination": "35_building_K-KRN"
        },
        "35_building_K-KKG": {
          "displayName": "SouthWest",
          "destination": "35_building_K-KKG"
        },
        "35_building_K-KLH": {
          "displayName": "NorthEast",
          "destination": "35_building_K-KLH"
        },
        "34_building_K": {
          "displayName": "Down",
          "destination": "34_building_K"
        },
        "36_building_K": {
          "displayName": "Up",
          "destination": "36_building_K"
        }
      }
    },
    "36_building_K-KGA-KGA1-9000": {
      "firstVisit": true,
      "displayName": "Belize shelf",
      "description": "Description for shelf Belize in Belize Room.\n\n[|Entrance||] Belize Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "36_building_K-KGA": {
          "displayName": "Entrance",
          "destination": "36_building_K-KGA"
        }
      }
    },
    "36_building_K-KGA": {
      "firstVisit": true,
      "displayName": "Belize Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Belize. You can exit to the floor foyer.\n\n[|Shelf|||||] Belize shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "36_building_K-KGA-KGA1-9000": {
          "displayName": "Shelf",
          "destination": "36_building_K-KGA-KGA1-9000"
        },
        "36_building_K": {
          "displayName": "Exit",
          "destination": "36_building_K"
        }
      }
    },
    "36_building_K-KKI-KKI": {
      "firstVisit": true,
      "displayName": "Law of Latvia shelf",
      "description": "Description for shelf Law of Latvia in Law of Latvia Room.\n\n[|Entrance||] Law of Latvia Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "36_building_K-KKI": {
          "displayName": "Entrance",
          "destination": "36_building_K-KKI"
        }
      }
    },
    "36_building_K-KKI": {
      "firstVisit": true,
      "displayName": "Law of Latvia Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Latvia. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Latvia shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "36_building_K-KKI-KKI": {
          "displayName": "Shelf",
          "destination": "36_building_K-KKI-KKI"
        },
        "36_building_K": {
          "displayName": "Exit",
          "destination": "36_building_K"
        }
      }
    },
    "36_building_K-KTF-KTF1-490": {
      "firstVisit": true,
      "displayName": "Sao Tome and Principe shelf",
      "description": "Description for shelf Sao Tome and Principe in Sao Tome and Principe Room.\n\n[|Entrance||] Sao Tome and Principe Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "36_building_K-KTF": {
          "displayName": "Entrance",
          "destination": "36_building_K-KTF"
        }
      }
    },
    "36_building_K-KTF": {
      "firstVisit": true,
      "displayName": "Sao Tome and Principe Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Sao Tome and Principe. You can exit to the floor foyer.\n\n[|Shelf|||||] Sao Tome and Principe shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "36_building_K-KTF-KTF1-490": {
          "displayName": "Shelf",
          "destination": "36_building_K-KTF-KTF1-490"
        },
        "36_building_K": {
          "displayName": "Exit",
          "destination": "36_building_K"
        }
      }
    },
    "36_building_K-KJH-KJH": {
      "firstVisit": true,
      "displayName": "Law of Andorra shelf",
      "description": "Description for shelf Law of Andorra in Law of Andorra Room.\n\n[|Entrance||] Law of Andorra Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "36_building_K-KJH": {
          "displayName": "Entrance",
          "destination": "36_building_K-KJH"
        }
      }
    },
    "36_building_K-KJH": {
      "firstVisit": true,
      "displayName": "Law of Andorra Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Andorra. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Andorra shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "36_building_K-KJH-KJH": {
          "displayName": "Shelf",
          "destination": "36_building_K-KJH-KJH"
        },
        "36_building_K": {
          "displayName": "Exit",
          "destination": "36_building_K"
        }
      }
    },
    "36_building_K-KWL-KWL2001-2490": {
      "firstVisit": true,
      "displayName": "Solomon Islands shelf",
      "description": "Description for shelf Solomon Islands in Solomon Islands Room.\n\n[|Entrance||] Solomon Islands Room entrance\n[|Next||||||] Pitcairn Island shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "36_building_K-KWL": {
          "displayName": "Entrance",
          "destination": "36_building_K-KWL"
        },
        "36_building_K-KWL-KWL1-489": {
          "displayName": "Next",
          "destination": "36_building_K-KWL-KWL1-489"
        }
      }
    },
    "36_building_K-KWL-KWL1-489": {
      "firstVisit": true,
      "displayName": "Pitcairn Island shelf",
      "description": "Description for shelf Pitcairn Island in Solomon Islands Room.\n\n[|Previous||] Solomon Islands shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "36_building_K-KWL-KWL2001-2490": {
          "displayName": "Previous",
          "destination": "36_building_K-KWL-KWL2001-2490"
        }
      }
    },
    "36_building_K-KWL": {
      "firstVisit": true,
      "displayName": "Solomon Islands Room entrance",
      "description": "This room has two shelves organized linearly from the entrance towards the back. The first shelf you can see is Solomon Islands. You can exit to the floor foyer.\n\n[|Shelf|||||] Solomon Islands shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "36_building_K-KWL-KWL2001-2490": {
          "displayName": "Shelf",
          "destination": "36_building_K-KWL-KWL2001-2490"
        },
        "36_building_K": {
          "displayName": "Exit",
          "destination": "36_building_K"
        }
      }
    },
    "36_building_K-KGW-KGW5001-5499": {
      "firstVisit": true,
      "displayName": "Saint Vincent and the Grenadines shelf",
      "description": "Description for shelf Saint Vincent and the Grenadines in Saint Lucia Room.\n\n[|Entrance||] Saint Lucia Room entrance\n[|Next||||||] Saint Lucia shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "36_building_K-KGW": {
          "displayName": "Entrance",
          "destination": "36_building_K-KGW"
        },
        "36_building_K-KGW-KGW3001-3499": {
          "displayName": "Next",
          "destination": "36_building_K-KGW-KGW3001-3499"
        }
      }
    },
    "36_building_K-KGW-KGW3001-3499": {
      "firstVisit": true,
      "displayName": "Saint Lucia shelf",
      "description": "Description for shelf Saint Lucia in Saint Lucia Room.\n\n[|Previous||] Saint Vincent and the Grenadines shelf\n[|Next||||||] Saint Christopher (Saint Kitts), Nevis, and Anguilla shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "36_building_K-KGW-KGW5001-5499": {
          "displayName": "Previous",
          "destination": "36_building_K-KGW-KGW5001-5499"
        },
        "36_building_K-KGW-KGW2001-2499": {
          "displayName": "Next",
          "destination": "36_building_K-KGW-KGW2001-2499"
        }
      }
    },
    "36_building_K-KGW-KGW2001-2499": {
      "firstVisit": true,
      "displayName": "Saint Christopher (Saint Kitts), Nevis, and Anguilla shelf",
      "description": "Description for shelf Saint Christopher (Saint Kitts), Nevis, and Anguilla in Saint Lucia Room.\n\n[|Previous||] Saint Lucia shelf\n[|Next||||||] Sint Maarten shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "36_building_K-KGW-KGW3001-3499": {
          "displayName": "Previous",
          "destination": "36_building_K-KGW-KGW3001-3499"
        },
        "36_building_K-KGW-KGW8001-8499": {
          "displayName": "Next",
          "destination": "36_building_K-KGW-KGW8001-8499"
        }
      }
    },
    "36_building_K-KGW-KGW8001-8499": {
      "firstVisit": true,
      "displayName": "Sint Maarten shelf",
      "description": "Description for shelf Sint Maarten in Saint Lucia Room.\n\n[|Previous||] Saint Christopher (Saint Kitts), Nevis, and Anguilla shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "36_building_K-KGW-KGW2001-2499": {
          "displayName": "Previous",
          "destination": "36_building_K-KGW-KGW2001-2499"
        }
      }
    },
    "36_building_K-KGW": {
      "firstVisit": true,
      "displayName": "Saint Lucia Room entrance",
      "description": "This room has four shelves organized linearly from the entrance towards the back. The first shelf you can see is Saint Vincent and the Grenadines. You can exit to the floor foyer.\n\n[|Shelf|||||] Saint Vincent and the Grenadines shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "36_building_K-KGW-KGW5001-5499": {
          "displayName": "Shelf",
          "destination": "36_building_K-KGW-KGW5001-5499"
        },
        "36_building_K": {
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
        "36_building_K-KGA": {
          "displayName": "South",
          "destination": "36_building_K-KGA"
        },
        "36_building_K-KKI": {
          "displayName": "North",
          "destination": "36_building_K-KKI"
        },
        "36_building_K-KTF": {
          "displayName": "SouthEast",
          "destination": "36_building_K-KTF"
        },
        "36_building_K-KJH": {
          "displayName": "NorthWest",
          "destination": "36_building_K-KJH"
        },
        "36_building_K-KWL": {
          "displayName": "SouthWest",
          "destination": "36_building_K-KWL"
        },
        "36_building_K-KGW": {
          "displayName": "NorthEast",
          "destination": "36_building_K-KGW"
        },
        "35_building_K": {
          "displayName": "Down",
          "destination": "35_building_K"
        },
        "37_building_K": {
          "displayName": "Up",
          "destination": "37_building_K"
        }
      }
    },
    "37_building_K-KGZ-KGZ1-499": {
      "firstVisit": true,
      "displayName": "Virgin Islands of the United States shelf",
      "description": "Description for shelf Virgin Islands of the United States in Virgin Islands of the United States Room.\n\n[|Entrance||] Virgin Islands of the United States Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "37_building_K-KGZ": {
          "displayName": "Entrance",
          "destination": "37_building_K-KGZ"
        }
      }
    },
    "37_building_K-KGZ": {
      "firstVisit": true,
      "displayName": "Virgin Islands of the United States Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Virgin Islands of the United States. You can exit to the floor foyer.\n\n[|Shelf|||||] Virgin Islands of the United States shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "37_building_K-KGZ-KGZ1-499": {
          "displayName": "Shelf",
          "destination": "37_building_K-KGZ-KGZ1-499"
        },
        "37_building_K": {
          "displayName": "Exit",
          "destination": "37_building_K"
        }
      }
    },
    "37_building_K-KGR-KGR1001-1499": {
      "firstVisit": true,
      "displayName": "Dutch West Indies (General) shelf",
      "description": "Description for shelf Dutch West Indies (General) in Grenada Room.\n\n[|Entrance||] Grenada Room entrance\n[|Next||||||] Grenada shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "37_building_K-KGR": {
          "displayName": "Entrance",
          "destination": "37_building_K-KGR"
        },
        "37_building_K-KGR-KGR4001-4499": {
          "displayName": "Next",
          "destination": "37_building_K-KGR-KGR4001-4499"
        }
      }
    },
    "37_building_K-KGR-KGR4001-4499": {
      "firstVisit": true,
      "displayName": "Grenada shelf",
      "description": "Description for shelf Grenada in Grenada Room.\n\n[|Previous||] Dutch West Indies (General) shelf\n[|Next||||||] Dutch Leeward Islands (General) shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "37_building_K-KGR-KGR1001-1499": {
          "displayName": "Previous",
          "destination": "37_building_K-KGR-KGR1001-1499"
        },
        "37_building_K-KGR-KGR1-499": {
          "displayName": "Next",
          "destination": "37_building_K-KGR-KGR1-499"
        }
      }
    },
    "37_building_K-KGR-KGR1-499": {
      "firstVisit": true,
      "displayName": "Dutch Leeward Islands (General) shelf",
      "description": "Description for shelf Dutch Leeward Islands (General) in Grenada Room.\n\n[|Previous||] Grenada shelf\n[|Next||||||] French West Indies (General) shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "37_building_K-KGR-KGR4001-4499": {
          "displayName": "Previous",
          "destination": "37_building_K-KGR-KGR4001-4499"
        },
        "37_building_K-KGR-KGR3001-3499": {
          "displayName": "Next",
          "destination": "37_building_K-KGR-KGR3001-3499"
        }
      }
    },
    "37_building_K-KGR-KGR3001-3499": {
      "firstVisit": true,
      "displayName": "French West Indies (General) shelf",
      "description": "Description for shelf French West Indies (General) in Grenada Room.\n\n[|Previous||] Dutch Leeward Islands (General) shelf\n[|Next||||||] Guadeloupe shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "37_building_K-KGR-KGR1-499": {
          "displayName": "Previous",
          "destination": "37_building_K-KGR-KGR1-499"
        },
        "37_building_K-KGR-KGR5001-5499": {
          "displayName": "Next",
          "destination": "37_building_K-KGR-KGR5001-5499"
        }
      }
    },
    "37_building_K-KGR-KGR5001-5499": {
      "firstVisit": true,
      "displayName": "Guadeloupe shelf",
      "description": "Description for shelf Guadeloupe in Grenada Room.\n\n[|Previous||] French West Indies (General) shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "37_building_K-KGR-KGR3001-3499": {
          "displayName": "Previous",
          "destination": "37_building_K-KGR-KGR3001-3499"
        }
      }
    },
    "37_building_K-KGR": {
      "firstVisit": true,
      "displayName": "Grenada Room entrance",
      "description": "This room has five shelves organized linearly from the entrance towards the back. The first shelf you can see is Dutch West Indies (General). You can exit to the floor foyer.\n\n[|Shelf|||||] Dutch West Indies (General) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "37_building_K-KGR-KGR1001-1499": {
          "displayName": "Shelf",
          "destination": "37_building_K-KGR-KGR1001-1499"
        },
        "37_building_K": {
          "displayName": "Exit",
          "destination": "37_building_K"
        }
      }
    },
    "37_building_K-KRV-KRV1-489": {
      "firstVisit": true,
      "displayName": "Gambia shelf",
      "description": "Description for shelf Gambia in Gambia Room.\n\n[|Entrance||] Gambia Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "37_building_K-KRV": {
          "displayName": "Entrance",
          "destination": "37_building_K-KRV"
        }
      }
    },
    "37_building_K-KRV": {
      "firstVisit": true,
      "displayName": "Gambia Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Gambia. You can exit to the floor foyer.\n\n[|Shelf|||||] Gambia shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "37_building_K-KRV-KRV1-489": {
          "displayName": "Shelf",
          "destination": "37_building_K-KRV-KRV1-489"
        },
        "37_building_K": {
          "displayName": "Exit",
          "destination": "37_building_K"
        }
      }
    },
    "37_building_K-KFZ-KFZ": {
      "firstVisit": true,
      "displayName": "Laws of the territories.  Laws of the Confederate States of shelf",
      "description": "Description for shelf Laws of the territories.  Laws of the Confederate States of in Laws of the territories.  Laws of the Confederate States of Room.\n\n[|Entrance||] Laws of the territories.  Laws of the Confederate States of Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "37_building_K-KFZ": {
          "displayName": "Entrance",
          "destination": "37_building_K-KFZ"
        }
      }
    },
    "37_building_K-KFZ": {
      "firstVisit": true,
      "displayName": "Laws of the territories.  Laws of the Confederate States of Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Laws of the territories.  Laws of the Confederate States of. You can exit to the floor foyer.\n\n[|Shelf|||||] Laws of the territories.  Laws of the Confederate States of shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "37_building_K-KFZ-KFZ": {
          "displayName": "Shelf",
          "destination": "37_building_K-KFZ-KFZ"
        },
        "37_building_K": {
          "displayName": "Exit",
          "destination": "37_building_K"
        }
      }
    },
    "37_building_K-KDG-KDG21-540": {
      "firstVisit": true,
      "displayName": "Law of Isle of Man.  Channel Islands shelf",
      "description": "Description for shelf Law of Isle of Man.  Channel Islands in Law of Isle of Man.  Channel Islands Room.\n\n[|Entrance||] Law of Isle of Man.  Channel Islands Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "37_building_K-KDG": {
          "displayName": "Entrance",
          "destination": "37_building_K-KDG"
        }
      }
    },
    "37_building_K-KDG": {
      "firstVisit": true,
      "displayName": "Law of Isle of Man.  Channel Islands Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Isle of Man.  Channel Islands. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Isle of Man.  Channel Islands shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "37_building_K-KDG-KDG21-540": {
          "displayName": "Shelf",
          "destination": "37_building_K-KDG-KDG21-540"
        },
        "37_building_K": {
          "displayName": "Exit",
          "destination": "37_building_K"
        }
      }
    },
    "37_building_K-KGJ-KGJ1-999": {
      "firstVisit": true,
      "displayName": "General shelf",
      "description": "Description for shelf General in General Room.\n\n[|Entrance||] General Room entrance\n[|Next||||||] Anguilla shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "37_building_K-KGJ": {
          "displayName": "Entrance",
          "destination": "37_building_K-KGJ"
        },
        "37_building_K-KGJ-KGJ7001-7499": {
          "displayName": "Next",
          "destination": "37_building_K-KGJ-KGJ7001-7499"
        }
      }
    },
    "37_building_K-KGJ-KGJ7001-7499": {
      "firstVisit": true,
      "displayName": "Anguilla shelf",
      "description": "Description for shelf Anguilla in General Room.\n\n[|Previous||] General shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "37_building_K-KGJ-KGJ1-999": {
          "displayName": "Previous",
          "destination": "37_building_K-KGJ-KGJ1-999"
        }
      }
    },
    "37_building_K-KGJ": {
      "firstVisit": true,
      "displayName": "General Room entrance",
      "description": "This room has two shelves organized linearly from the entrance towards the back. The first shelf you can see is General. You can exit to the floor foyer.\n\n[|Shelf|||||] General shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "37_building_K-KGJ-KGJ1-999": {
          "displayName": "Shelf",
          "destination": "37_building_K-KGJ-KGJ1-999"
        },
        "37_building_K": {
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
        "37_building_K-KGZ": {
          "displayName": "South",
          "destination": "37_building_K-KGZ"
        },
        "37_building_K-KGR": {
          "displayName": "North",
          "destination": "37_building_K-KGR"
        },
        "37_building_K-KRV": {
          "displayName": "SouthEast",
          "destination": "37_building_K-KRV"
        },
        "37_building_K-KFZ": {
          "displayName": "NorthWest",
          "destination": "37_building_K-KFZ"
        },
        "37_building_K-KDG": {
          "displayName": "SouthWest",
          "destination": "37_building_K-KDG"
        },
        "37_building_K-KGJ": {
          "displayName": "NorthEast",
          "destination": "37_building_K-KGJ"
        },
        "36_building_K": {
          "displayName": "Down",
          "destination": "36_building_K"
        },
        "38_building_K": {
          "displayName": "Up",
          "destination": "38_building_K"
        }
      }
    },
    "38_building_K-KLN-KLN1-489": {
      "firstVisit": true,
      "displayName": "Russian S.F.S.R. (to 1991) shelf",
      "description": "Description for shelf Russian S.F.S.R. (to 1991) in Russian S.F.S.R. (to 1991) Room.\n\n[|Entrance||] Russian S.F.S.R. (to 1991) Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "38_building_K-KLN": {
          "displayName": "Entrance",
          "destination": "38_building_K-KLN"
        }
      }
    },
    "38_building_K-KLN": {
      "firstVisit": true,
      "displayName": "Russian S.F.S.R. (to 1991) Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Russian S.F.S.R. (to 1991). You can exit to the floor foyer.\n\n[|Shelf|||||] Russian S.F.S.R. (to 1991) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "38_building_K-KLN-KLN1-489": {
          "displayName": "Shelf",
          "destination": "38_building_K-KLN-KLN1-489"
        },
        "38_building_K": {
          "displayName": "Exit",
          "destination": "38_building_K"
        }
      }
    },
    "38_building_K-KMQ-KMQ1001-1499": {
      "firstVisit": true,
      "displayName": "Palestine (to 1948) shelf",
      "description": "Description for shelf Palestine (to 1948) in Palestine (to 1948) Room.\n\n[|Entrance||] Palestine (to 1948) Room entrance\n[|Next||||||] Oman shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "38_building_K-KMQ": {
          "displayName": "Entrance",
          "destination": "38_building_K-KMQ"
        },
        "38_building_K-KMQ-KMQ1-490": {
          "displayName": "Next",
          "destination": "38_building_K-KMQ-KMQ1-490"
        }
      }
    },
    "38_building_K-KMQ-KMQ1-490": {
      "firstVisit": true,
      "displayName": "Oman shelf",
      "description": "Description for shelf Oman in Palestine (to 1948) Room.\n\n[|Previous||] Palestine (to 1948) shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "38_building_K-KMQ-KMQ1001-1499": {
          "displayName": "Previous",
          "destination": "38_building_K-KMQ-KMQ1001-1499"
        }
      }
    },
    "38_building_K-KMQ": {
      "firstVisit": true,
      "displayName": "Palestine (to 1948) Room entrance",
      "description": "This room has two shelves organized linearly from the entrance towards the back. The first shelf you can see is Palestine (to 1948). You can exit to the floor foyer.\n\n[|Shelf|||||] Palestine (to 1948) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "38_building_K-KMQ-KMQ1001-1499": {
          "displayName": "Shelf",
          "destination": "38_building_K-KMQ-KMQ1001-1499"
        },
        "38_building_K": {
          "displayName": "Exit",
          "destination": "38_building_K"
        }
      }
    },
    "38_building_K-KEY-KEY": {
      "firstVisit": true,
      "displayName": "Law of Yukon shelf",
      "description": "Description for shelf Law of Yukon in Law of Yukon Room.\n\n[|Entrance||] Law of Yukon Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "38_building_K-KEY": {
          "displayName": "Entrance",
          "destination": "38_building_K-KEY"
        }
      }
    },
    "38_building_K-KEY": {
      "firstVisit": true,
      "displayName": "Law of Yukon Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Yukon. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Yukon shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "38_building_K-KEY-KEY": {
          "displayName": "Shelf",
          "destination": "38_building_K-KEY-KEY"
        },
        "38_building_K": {
          "displayName": "Exit",
          "destination": "38_building_K"
        }
      }
    },
    "38_building_K-KNV-KNV1-489": {
      "firstVisit": true,
      "displayName": "French Indochina.  Indochina (Federation) shelf",
      "description": "Description for shelf French Indochina.  Indochina (Federation) in French Indochina.  Indochina (Federation) Room.\n\n[|Entrance||] French Indochina.  Indochina (Federation) Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "38_building_K-KNV": {
          "displayName": "Entrance",
          "destination": "38_building_K-KNV"
        }
      }
    },
    "38_building_K-KNV": {
      "firstVisit": true,
      "displayName": "French Indochina.  Indochina (Federation) Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is French Indochina.  Indochina (Federation). You can exit to the floor foyer.\n\n[|Shelf|||||] French Indochina.  Indochina (Federation) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "38_building_K-KNV-KNV1-489": {
          "displayName": "Shelf",
          "destination": "38_building_K-KNV-KNV1-489"
        },
        "38_building_K": {
          "displayName": "Exit",
          "destination": "38_building_K"
        }
      }
    },
    "38_building_K-KMY-KMY1-489": {
      "firstVisit": true,
      "displayName": "Yeman (People\u2019s Democratic Republic) (to 1990) shelf",
      "description": "Description for shelf Yeman (People\u2019s Democratic Republic) (to 1990) in Yeman (People\u2019s Democratic Republic) (to 1990) Room.\n\n[|Entrance||] Yeman (People\u2019s Democratic Republic) (to 1990) Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "38_building_K-KMY": {
          "displayName": "Entrance",
          "destination": "38_building_K-KMY"
        }
      }
    },
    "38_building_K-KMY": {
      "firstVisit": true,
      "displayName": "Yeman (People\u2019s Democratic Republic) (to 1990) Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Yeman (People\u2019s Democratic Republic) (to 1990). You can exit to the floor foyer.\n\n[|Shelf|||||] Yeman (People\u2019s Democratic Republic) (to 1990) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "38_building_K-KMY-KMY1-489": {
          "displayName": "Shelf",
          "destination": "38_building_K-KMY-KMY1-489"
        },
        "38_building_K": {
          "displayName": "Exit",
          "destination": "38_building_K"
        }
      }
    },
    "38_building_K-KHS-KHS1-9000": {
      "firstVisit": true,
      "displayName": "Surinam shelf",
      "description": "Description for shelf Surinam in Surinam Room.\n\n[|Entrance||] Surinam Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "38_building_K-KHS": {
          "displayName": "Entrance",
          "destination": "38_building_K-KHS"
        }
      }
    },
    "38_building_K-KHS": {
      "firstVisit": true,
      "displayName": "Surinam Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Surinam. You can exit to the floor foyer.\n\n[|Shelf|||||] Surinam shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "38_building_K-KHS-KHS1-9000": {
          "displayName": "Shelf",
          "destination": "38_building_K-KHS-KHS1-9000"
        },
        "38_building_K": {
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
        "38_building_K-KLN": {
          "displayName": "South",
          "destination": "38_building_K-KLN"
        },
        "38_building_K-KMQ": {
          "displayName": "North",
          "destination": "38_building_K-KMQ"
        },
        "38_building_K-KEY": {
          "displayName": "SouthEast",
          "destination": "38_building_K-KEY"
        },
        "38_building_K-KNV": {
          "displayName": "NorthWest",
          "destination": "38_building_K-KNV"
        },
        "38_building_K-KMY": {
          "displayName": "SouthWest",
          "destination": "38_building_K-KMY"
        },
        "38_building_K-KHS": {
          "displayName": "NorthEast",
          "destination": "38_building_K-KHS"
        },
        "37_building_K": {
          "displayName": "Down",
          "destination": "37_building_K"
        },
        "39_building_K": {
          "displayName": "Up",
          "destination": "39_building_K"
        }
      }
    },
    "39_building_K-KMU-KMU1-490": {
      "firstVisit": true,
      "displayName": "Syria shelf",
      "description": "Description for shelf Syria in Syria Room.\n\n[|Entrance||] Syria Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "39_building_K-KMU": {
          "displayName": "Entrance",
          "destination": "39_building_K-KMU"
        }
      }
    },
    "39_building_K-KMU": {
      "firstVisit": true,
      "displayName": "Syria Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Syria. You can exit to the floor foyer.\n\n[|Shelf|||||] Syria shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "39_building_K-KMU-KMU1-490": {
          "displayName": "Shelf",
          "destination": "39_building_K-KMU-KMU1-490"
        },
        "39_building_K": {
          "displayName": "Exit",
          "destination": "39_building_K"
        }
      }
    },
    "39_building_K-KKL-KKL": {
      "firstVisit": true,
      "displayName": "Law of Montenegro shelf",
      "description": "Description for shelf Law of Montenegro in Law of Montenegro Room.\n\n[|Entrance||] Law of Montenegro Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "39_building_K-KKL": {
          "displayName": "Entrance",
          "destination": "39_building_K-KKL"
        }
      }
    },
    "39_building_K-KKL": {
      "firstVisit": true,
      "displayName": "Law of Montenegro Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Montenegro. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Montenegro shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "39_building_K-KKL-KKL": {
          "displayName": "Shelf",
          "destination": "39_building_K-KKL-KKL"
        },
        "39_building_K": {
          "displayName": "Exit",
          "destination": "39_building_K"
        }
      }
    },
    "39_building_K-KSG-KSG1001-1499": {
      "firstVisit": true,
      "displayName": "Italian Somaliland shelf",
      "description": "Description for shelf Italian Somaliland in Italian Somaliland Room.\n\n[|Entrance||] Italian Somaliland Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "39_building_K-KSG": {
          "displayName": "Entrance",
          "destination": "39_building_K-KSG"
        }
      }
    },
    "39_building_K-KSG": {
      "firstVisit": true,
      "displayName": "Italian Somaliland Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Italian Somaliland. You can exit to the floor foyer.\n\n[|Shelf|||||] Italian Somaliland shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "39_building_K-KSG-KSG1001-1499": {
          "displayName": "Shelf",
          "destination": "39_building_K-KSG-KSG1001-1499"
        },
        "39_building_K": {
          "displayName": "Exit",
          "destination": "39_building_K"
        }
      }
    },
    "39_building_K-KEZ-KEZ": {
      "firstVisit": true,
      "displayName": "Law of Law of cities, towns, etc. shelf",
      "description": "Description for shelf Law of Law of cities, towns, etc. in Law of Law of cities, towns, etc. Room.\n\n[|Entrance||] Law of Law of cities, towns, etc. Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "39_building_K-KEZ": {
          "displayName": "Entrance",
          "destination": "39_building_K-KEZ"
        }
      }
    },
    "39_building_K-KEZ": {
      "firstVisit": true,
      "displayName": "Law of Law of cities, towns, etc. Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Law of cities, towns, etc.. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Law of cities, towns, etc. shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "39_building_K-KEZ-KEZ": {
          "displayName": "Shelf",
          "destination": "39_building_K-KEZ-KEZ"
        },
        "39_building_K": {
          "displayName": "Exit",
          "destination": "39_building_K"
        }
      }
    },
    "39_building_K-KEM-KEM": {
      "firstVisit": true,
      "displayName": "Law of Manitoba shelf",
      "description": "Description for shelf Law of Manitoba in Law of Manitoba Room.\n\n[|Entrance||] Law of Manitoba Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "39_building_K-KEM": {
          "displayName": "Entrance",
          "destination": "39_building_K-KEM"
        }
      }
    },
    "39_building_K-KEM": {
      "firstVisit": true,
      "displayName": "Law of Manitoba Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Manitoba. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Manitoba shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "39_building_K-KEM-KEM": {
          "displayName": "Shelf",
          "destination": "39_building_K-KEM-KEM"
        },
        "39_building_K": {
          "displayName": "Exit",
          "destination": "39_building_K"
        }
      }
    },
    "39_building_K-KTK-KTK1-490": {
      "firstVisit": true,
      "displayName": "Somalia shelf",
      "description": "Description for shelf Somalia in Somalia Room.\n\n[|Entrance||] Somalia Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "39_building_K-KTK": {
          "displayName": "Entrance",
          "destination": "39_building_K-KTK"
        }
      }
    },
    "39_building_K-KTK": {
      "firstVisit": true,
      "displayName": "Somalia Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Somalia. You can exit to the floor foyer.\n\n[|Shelf|||||] Somalia shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "39_building_K-KTK-KTK1-490": {
          "displayName": "Shelf",
          "destination": "39_building_K-KTK-KTK1-490"
        },
        "39_building_K": {
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
        "39_building_K-KMU": {
          "displayName": "South",
          "destination": "39_building_K-KMU"
        },
        "39_building_K-KKL": {
          "displayName": "North",
          "destination": "39_building_K-KKL"
        },
        "39_building_K-KSG": {
          "displayName": "SouthEast",
          "destination": "39_building_K-KSG"
        },
        "39_building_K-KEZ": {
          "displayName": "NorthWest",
          "destination": "39_building_K-KEZ"
        },
        "39_building_K-KEM": {
          "displayName": "SouthWest",
          "destination": "39_building_K-KEM"
        },
        "39_building_K-KTK": {
          "displayName": "NorthEast",
          "destination": "39_building_K-KTK"
        },
        "38_building_K": {
          "displayName": "Down",
          "destination": "38_building_K"
        },
        "40_building_K": {
          "displayName": "Up",
          "destination": "40_building_K"
        }
      }
    },
    "40_building_K-KGT-KGT1-499": {
      "firstVisit": true,
      "displayName": "Jamaica shelf",
      "description": "Description for shelf Jamaica in Jamaica Room.\n\n[|Entrance||] Jamaica Room entrance\n[|Next||||||] Montserrat shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "40_building_K-KGT": {
          "displayName": "Entrance",
          "destination": "40_building_K-KGT"
        },
        "40_building_K-KGT-KGT2001-2499": {
          "displayName": "Next",
          "destination": "40_building_K-KGT-KGT2001-2499"
        }
      }
    },
    "40_building_K-KGT-KGT2001-2499": {
      "firstVisit": true,
      "displayName": "Montserrat shelf",
      "description": "Description for shelf Montserrat in Jamaica Room.\n\n[|Previous||] Jamaica shelf\n[|Next||||||] Martinique shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "40_building_K-KGT-KGT1-499": {
          "displayName": "Previous",
          "destination": "40_building_K-KGT-KGT1-499"
        },
        "40_building_K-KGT-KGT1001-1499": {
          "displayName": "Next",
          "destination": "40_building_K-KGT-KGT1001-1499"
        }
      }
    },
    "40_building_K-KGT-KGT1001-1499": {
      "firstVisit": true,
      "displayName": "Martinique shelf",
      "description": "Description for shelf Martinique in Jamaica Room.\n\n[|Previous||] Montserrat shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "40_building_K-KGT-KGT2001-2499": {
          "displayName": "Previous",
          "destination": "40_building_K-KGT-KGT2001-2499"
        }
      }
    },
    "40_building_K-KGT": {
      "firstVisit": true,
      "displayName": "Jamaica Room entrance",
      "description": "This room has three shelves organized linearly from the entrance towards the back. The first shelf you can see is Jamaica. You can exit to the floor foyer.\n\n[|Shelf|||||] Jamaica shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "40_building_K-KGT-KGT1-499": {
          "displayName": "Shelf",
          "destination": "40_building_K-KGT-KGT1-499"
        },
        "40_building_K": {
          "displayName": "Exit",
          "destination": "40_building_K"
        }
      }
    },
    "40_building_K-KGY-KGY1-499": {
      "firstVisit": true,
      "displayName": "Turks and Caicos Islands shelf",
      "description": "Description for shelf Turks and Caicos Islands in Turks and Caicos Islands Room.\n\n[|Entrance||] Turks and Caicos Islands Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "40_building_K-KGY": {
          "displayName": "Entrance",
          "destination": "40_building_K-KGY"
        }
      }
    },
    "40_building_K-KGY": {
      "firstVisit": true,
      "displayName": "Turks and Caicos Islands Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Turks and Caicos Islands. You can exit to the floor foyer.\n\n[|Shelf|||||] Turks and Caicos Islands shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "40_building_K-KGY-KGY1-499": {
          "displayName": "Shelf",
          "destination": "40_building_K-KGY-KGY1-499"
        },
        "40_building_K": {
          "displayName": "Exit",
          "destination": "40_building_K"
        }
      }
    },
    "40_building_K-KEP-KEP": {
      "firstVisit": true,
      "displayName": "Law of Law of Prince Edward Island shelf",
      "description": "Description for shelf Law of Law of Prince Edward Island in Law of Law of Prince Edward Island Room.\n\n[|Entrance||] Law of Law of Prince Edward Island Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "40_building_K-KEP": {
          "displayName": "Entrance",
          "destination": "40_building_K-KEP"
        }
      }
    },
    "40_building_K-KEP": {
      "firstVisit": true,
      "displayName": "Law of Law of Prince Edward Island Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Law of Prince Edward Island. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Law of Prince Edward Island shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "40_building_K-KEP-KEP": {
          "displayName": "Shelf",
          "destination": "40_building_K-KEP-KEP"
        },
        "40_building_K": {
          "displayName": "Exit",
          "destination": "40_building_K"
        }
      }
    },
    "40_building_K-KQV-KQV1-490": {
      "firstVisit": true,
      "displayName": "Burundi shelf",
      "description": "Description for shelf Burundi in Burundi Room.\n\n[|Entrance||] Burundi Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "40_building_K-KQV": {
          "displayName": "Entrance",
          "destination": "40_building_K-KQV"
        }
      }
    },
    "40_building_K-KQV": {
      "firstVisit": true,
      "displayName": "Burundi Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Burundi. You can exit to the floor foyer.\n\n[|Shelf|||||] Burundi shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "40_building_K-KQV-KQV1-490": {
          "displayName": "Shelf",
          "destination": "40_building_K-KQV-KQV1-490"
        },
        "40_building_K": {
          "displayName": "Exit",
          "destination": "40_building_K"
        }
      }
    },
    "40_building_K-KWE-KWE1-499": {
      "firstVisit": true,
      "displayName": "Pacific Islands (Trust Territory) shelf",
      "description": "Description for shelf Pacific Islands (Trust Territory) in Pacific Islands (Trust Territory) Room.\n\n[|Entrance||] Pacific Islands (Trust Territory) Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "40_building_K-KWE": {
          "displayName": "Entrance",
          "destination": "40_building_K-KWE"
        }
      }
    },
    "40_building_K-KWE": {
      "firstVisit": true,
      "displayName": "Pacific Islands (Trust Territory) Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Pacific Islands (Trust Territory). You can exit to the floor foyer.\n\n[|Shelf|||||] Pacific Islands (Trust Territory) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "40_building_K-KWE-KWE1-499": {
          "displayName": "Shelf",
          "destination": "40_building_K-KWE-KWE1-499"
        },
        "40_building_K": {
          "displayName": "Exit",
          "destination": "40_building_K"
        }
      }
    },
    "40_building_K-KPW-KPW1-489": {
      "firstVisit": true,
      "displayName": "Vietnam (Republic).  South Vietnam shelf",
      "description": "Description for shelf Vietnam (Republic).  South Vietnam in Vietnam (Republic).  South Vietnam Room.\n\n[|Entrance||] Vietnam (Republic).  South Vietnam Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "40_building_K-KPW": {
          "displayName": "Entrance",
          "destination": "40_building_K-KPW"
        }
      }
    },
    "40_building_K-KPW": {
      "firstVisit": true,
      "displayName": "Vietnam (Republic).  South Vietnam Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Vietnam (Republic).  South Vietnam. You can exit to the floor foyer.\n\n[|Shelf|||||] Vietnam (Republic).  South Vietnam shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "40_building_K-KPW-KPW1-489": {
          "displayName": "Shelf",
          "destination": "40_building_K-KPW-KPW1-489"
        },
        "40_building_K": {
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
        "40_building_K-KGT": {
          "displayName": "South",
          "destination": "40_building_K-KGT"
        },
        "40_building_K-KGY": {
          "displayName": "North",
          "destination": "40_building_K-KGY"
        },
        "40_building_K-KEP": {
          "displayName": "SouthEast",
          "destination": "40_building_K-KEP"
        },
        "40_building_K-KQV": {
          "displayName": "NorthWest",
          "destination": "40_building_K-KQV"
        },
        "40_building_K-KWE": {
          "displayName": "SouthWest",
          "destination": "40_building_K-KWE"
        },
        "40_building_K-KPW": {
          "displayName": "NorthEast",
          "destination": "40_building_K-KPW"
        },
        "39_building_K": {
          "displayName": "Down",
          "destination": "39_building_K"
        },
        "41_building_K": {
          "displayName": "Up",
          "destination": "41_building_K"
        }
      }
    },
    "41_building_K-KWX-KWX1-950": {
      "firstVisit": true,
      "displayName": "Antarctica shelf",
      "description": "Description for shelf Antarctica in Antarctica Room.\n\n[|Entrance||] Antarctica Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "41_building_K-KWX": {
          "displayName": "Entrance",
          "destination": "41_building_K-KWX"
        }
      }
    },
    "41_building_K-KWX": {
      "firstVisit": true,
      "displayName": "Antarctica Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Antarctica. You can exit to the floor foyer.\n\n[|Shelf|||||] Antarctica shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "41_building_K-KWX-KWX1-950": {
          "displayName": "Shelf",
          "destination": "41_building_K-KWX-KWX1-950"
        },
        "41_building_K": {
          "displayName": "Exit",
          "destination": "41_building_K"
        }
      }
    },
    "41_building_K-KVH-KVH1-490": {
      "firstVisit": true,
      "displayName": "American Samoa shelf",
      "description": "Description for shelf American Samoa in British New Guinea (Territory of Papua) Room.\n\n[|Entrance||] British New Guinea (Territory of Papua) Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "41_building_K-KVH": {
          "displayName": "Entrance",
          "destination": "41_building_K-KVH"
        }
      }
    },
    "41_building_K-KVH": {
      "firstVisit": true,
      "displayName": "British New Guinea (Territory of Papua) Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is American Samoa. You can exit to the floor foyer.\n\n[|Shelf|||||] American Samoa shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "41_building_K-KVH-KVH1-490": {
          "displayName": "Shelf",
          "destination": "41_building_K-KVH-KVH1-490"
        },
        "41_building_K": {
          "displayName": "Exit",
          "destination": "41_building_K"
        }
      }
    },
    "41_building_K-KWR-KWR1-490": {
      "firstVisit": true,
      "displayName": "Vanuatu shelf",
      "description": "Description for shelf Vanuatu in Vanuatu Room.\n\n[|Entrance||] Vanuatu Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "41_building_K-KWR": {
          "displayName": "Entrance",
          "destination": "41_building_K-KWR"
        }
      }
    },
    "41_building_K-KWR": {
      "firstVisit": true,
      "displayName": "Vanuatu Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Vanuatu. You can exit to the floor foyer.\n\n[|Shelf|||||] Vanuatu shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "41_building_K-KWR-KWR1-490": {
          "displayName": "Shelf",
          "destination": "41_building_K-KWR-KWR1-490"
        },
        "41_building_K": {
          "displayName": "Exit",
          "destination": "41_building_K"
        }
      }
    },
    "41_building_K-KWA-KWA1-489": {
      "firstVisit": true,
      "displayName": "Niue shelf",
      "description": "Description for shelf Niue in Niue Room.\n\n[|Entrance||] Niue Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "41_building_K-KWA": {
          "displayName": "Entrance",
          "destination": "41_building_K-KWA"
        }
      }
    },
    "41_building_K-KWA": {
      "firstVisit": true,
      "displayName": "Niue Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Niue. You can exit to the floor foyer.\n\n[|Shelf|||||] Niue shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "41_building_K-KWA-KWA1-489": {
          "displayName": "Shelf",
          "destination": "41_building_K-KWA-KWA1-489"
        },
        "41_building_K": {
          "displayName": "Exit",
          "destination": "41_building_K"
        }
      }
    },
    "41_building_K-KNF-KNF1-4990": {
      "firstVisit": true,
      "displayName": "Afghanistan shelf",
      "description": "Description for shelf Afghanistan in Afghanistan Room.\n\n[|Entrance||] Afghanistan Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "41_building_K-KNF": {
          "displayName": "Entrance",
          "destination": "41_building_K-KNF"
        }
      }
    },
    "41_building_K-KNF": {
      "firstVisit": true,
      "displayName": "Afghanistan Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Afghanistan. You can exit to the floor foyer.\n\n[|Shelf|||||] Afghanistan shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "41_building_K-KNF-KNF1-4990": {
          "displayName": "Shelf",
          "destination": "41_building_K-KNF-KNF1-4990"
        },
        "41_building_K": {
          "displayName": "Exit",
          "destination": "41_building_K"
        }
      }
    },
    "41_building_K-KRY-KRY1-499": {
      "firstVisit": true,
      "displayName": "Gibraltar shelf",
      "description": "Description for shelf Gibraltar in Gibraltar Room.\n\n[|Entrance||] Gibraltar Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "41_building_K-KRY": {
          "displayName": "Entrance",
          "destination": "41_building_K-KRY"
        }
      }
    },
    "41_building_K-KRY": {
      "firstVisit": true,
      "displayName": "Gibraltar Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Gibraltar. You can exit to the floor foyer.\n\n[|Shelf|||||] Gibraltar shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "41_building_K-KRY-KRY1-499": {
          "displayName": "Shelf",
          "destination": "41_building_K-KRY-KRY1-499"
        },
        "41_building_K": {
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
        "41_building_K-KWX": {
          "displayName": "South",
          "destination": "41_building_K-KWX"
        },
        "41_building_K-KVH": {
          "displayName": "North",
          "destination": "41_building_K-KVH"
        },
        "41_building_K-KWR": {
          "displayName": "SouthEast",
          "destination": "41_building_K-KWR"
        },
        "41_building_K-KWA": {
          "displayName": "NorthWest",
          "destination": "41_building_K-KWA"
        },
        "41_building_K-KNF": {
          "displayName": "SouthWest",
          "destination": "41_building_K-KNF"
        },
        "41_building_K-KRY": {
          "displayName": "NorthEast",
          "destination": "41_building_K-KRY"
        },
        "40_building_K": {
          "displayName": "Down",
          "destination": "40_building_K"
        },
        "42_building_K": {
          "displayName": "Up",
          "destination": "42_building_K"
        }
      }
    },
    "42_building_K-KRC-KRC1-490": {
      "firstVisit": true,
      "displayName": "Chad shelf",
      "description": "Description for shelf Chad in Chad Room.\n\n[|Entrance||] Chad Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "42_building_K-KRC": {
          "displayName": "Entrance",
          "destination": "42_building_K-KRC"
        }
      }
    },
    "42_building_K-KRC": {
      "firstVisit": true,
      "displayName": "Chad Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Chad. You can exit to the floor foyer.\n\n[|Shelf|||||] Chad shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "42_building_K-KRC-KRC1-490": {
          "displayName": "Shelf",
          "destination": "42_building_K-KRC-KRC1-490"
        },
        "42_building_K": {
          "displayName": "Exit",
          "destination": "42_building_K"
        }
      }
    },
    "42_building_K-KTJ-KTJ1-490": {
      "firstVisit": true,
      "displayName": "Sierra Leone shelf",
      "description": "Description for shelf Sierra Leone in Sierra Leone Room.\n\n[|Entrance||] Sierra Leone Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "42_building_K-KTJ": {
          "displayName": "Entrance",
          "destination": "42_building_K-KTJ"
        }
      }
    },
    "42_building_K-KTJ": {
      "firstVisit": true,
      "displayName": "Sierra Leone Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Sierra Leone. You can exit to the floor foyer.\n\n[|Shelf|||||] Sierra Leone shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "42_building_K-KTJ-KTJ1-490": {
          "displayName": "Shelf",
          "destination": "42_building_K-KTJ-KTJ1-490"
        },
        "42_building_K": {
          "displayName": "Exit",
          "destination": "42_building_K"
        }
      }
    },
    "42_building_K-KTR-KTR1-490": {
      "firstVisit": true,
      "displayName": "Swaziland shelf",
      "description": "Description for shelf Swaziland in Swaziland Room.\n\n[|Entrance||] Swaziland Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "42_building_K-KTR": {
          "displayName": "Entrance",
          "destination": "42_building_K-KTR"
        }
      }
    },
    "42_building_K-KTR": {
      "firstVisit": true,
      "displayName": "Swaziland Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Swaziland. You can exit to the floor foyer.\n\n[|Shelf|||||] Swaziland shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "42_building_K-KTR-KTR1-490": {
          "displayName": "Shelf",
          "destination": "42_building_K-KTR-KTR1-490"
        },
        "42_building_K": {
          "displayName": "Exit",
          "destination": "42_building_K"
        }
      }
    },
    "42_building_K-KTC-KTC1-489": {
      "firstVisit": true,
      "displayName": "R\u00e9union shelf",
      "description": "Description for shelf R\u00e9union in R\u00e9union Room.\n\n[|Entrance||] R\u00e9union Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "42_building_K-KTC": {
          "displayName": "Entrance",
          "destination": "42_building_K-KTC"
        }
      }
    },
    "42_building_K-KTC": {
      "firstVisit": true,
      "displayName": "R\u00e9union Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is R\u00e9union. You can exit to the floor foyer.\n\n[|Shelf|||||] R\u00e9union shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "42_building_K-KTC-KTC1-489": {
          "displayName": "Shelf",
          "destination": "42_building_K-KTC-KTC1-489"
        },
        "42_building_K": {
          "displayName": "Exit",
          "destination": "42_building_K"
        }
      }
    },
    "42_building_K-KRK-KRK1-490": {
      "firstVisit": true,
      "displayName": "Djibouti shelf",
      "description": "Description for shelf Djibouti in Djibouti Room.\n\n[|Entrance||] Djibouti Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "42_building_K-KRK": {
          "displayName": "Entrance",
          "destination": "42_building_K-KRK"
        }
      }
    },
    "42_building_K-KRK": {
      "firstVisit": true,
      "displayName": "Djibouti Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Djibouti. You can exit to the floor foyer.\n\n[|Shelf|||||] Djibouti shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "42_building_K-KRK-KRK1-490": {
          "displayName": "Shelf",
          "destination": "42_building_K-KRK-KRK1-490"
        },
        "42_building_K": {
          "displayName": "Exit",
          "destination": "42_building_K"
        }
      }
    },
    "42_building_K-KGM-KGM0-499": {
      "firstVisit": true,
      "displayName": "Cayman Islands shelf",
      "description": "Description for shelf Cayman Islands in Cayman Islands Room.\n\n[|Entrance||] Cayman Islands Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "42_building_K-KGM": {
          "displayName": "Entrance",
          "destination": "42_building_K-KGM"
        }
      }
    },
    "42_building_K-KGM": {
      "firstVisit": true,
      "displayName": "Cayman Islands Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Cayman Islands. You can exit to the floor foyer.\n\n[|Shelf|||||] Cayman Islands shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "42_building_K-KGM-KGM0-499": {
          "displayName": "Shelf",
          "destination": "42_building_K-KGM-KGM0-499"
        },
        "42_building_K": {
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
        "42_building_K-KRC": {
          "displayName": "South",
          "destination": "42_building_K-KRC"
        },
        "42_building_K-KTJ": {
          "displayName": "North",
          "destination": "42_building_K-KTJ"
        },
        "42_building_K-KTR": {
          "displayName": "SouthEast",
          "destination": "42_building_K-KTR"
        },
        "42_building_K-KTC": {
          "displayName": "NorthWest",
          "destination": "42_building_K-KTC"
        },
        "42_building_K-KRK": {
          "displayName": "SouthWest",
          "destination": "42_building_K-KRK"
        },
        "42_building_K-KGM": {
          "displayName": "NorthEast",
          "destination": "42_building_K-KGM"
        },
        "41_building_K": {
          "displayName": "Down",
          "destination": "41_building_K"
        },
        "43_building_K": {
          "displayName": "Up",
          "destination": "43_building_K"
        }
      }
    },
    "43_building_K-KGP-KGP2001-2499": {
      "firstVisit": true,
      "displayName": "Dominica shelf",
      "description": "Description for shelf Dominica in Dominica Room.\n\n[|Entrance||] Dominica Room entrance\n[|Next||||||] Cura\u00e7ao shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "43_building_K-KGP": {
          "displayName": "Entrance",
          "destination": "43_building_K-KGP"
        },
        "43_building_K-KGP-KGP1-499": {
          "displayName": "Next",
          "destination": "43_building_K-KGP-KGP1-499"
        }
      }
    },
    "43_building_K-KGP-KGP1-499": {
      "firstVisit": true,
      "displayName": "Cura\u00e7ao shelf",
      "description": "Description for shelf Cura\u00e7ao in Dominica Room.\n\n[|Previous||] Dominica shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "43_building_K-KGP-KGP2001-2499": {
          "displayName": "Previous",
          "destination": "43_building_K-KGP-KGP2001-2499"
        }
      }
    },
    "43_building_K-KGP": {
      "firstVisit": true,
      "displayName": "Dominica Room entrance",
      "description": "This room has two shelves organized linearly from the entrance towards the back. The first shelf you can see is Dominica. You can exit to the floor foyer.\n\n[|Shelf|||||] Dominica shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "43_building_K-KGP-KGP2001-2499": {
          "displayName": "Shelf",
          "destination": "43_building_K-KGP-KGP2001-2499"
        },
        "43_building_K": {
          "displayName": "Exit",
          "destination": "43_building_K"
        }
      }
    },
    "43_building_K-KRG-KRG1-490": {
      "firstVisit": true,
      "displayName": "Congo (Brazzaville) shelf",
      "description": "Description for shelf Congo (Brazzaville) in Congo (Brazzaville) Room.\n\n[|Entrance||] Congo (Brazzaville) Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "43_building_K-KRG": {
          "displayName": "Entrance",
          "destination": "43_building_K-KRG"
        }
      }
    },
    "43_building_K-KRG": {
      "firstVisit": true,
      "displayName": "Congo (Brazzaville) Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Congo (Brazzaville). You can exit to the floor foyer.\n\n[|Shelf|||||] Congo (Brazzaville) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "43_building_K-KRG-KRG1-490": {
          "displayName": "Shelf",
          "destination": "43_building_K-KRG-KRG1-490"
        },
        "43_building_K": {
          "displayName": "Exit",
          "destination": "43_building_K"
        }
      }
    },
    "43_building_K-KVU-KVU1-499": {
      "firstVisit": true,
      "displayName": "Nauru shelf",
      "description": "Description for shelf Nauru in Nauru Room.\n\n[|Entrance||] Nauru Room entrance\n[|Next||||||] Netherlands New Guinea (to 1963) shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "43_building_K-KVU": {
          "displayName": "Entrance",
          "destination": "43_building_K-KVU"
        },
        "43_building_K-KVU-KVU1001-1099": {
          "displayName": "Next",
          "destination": "43_building_K-KVU-KVU1001-1099"
        }
      }
    },
    "43_building_K-KVU-KVU1001-1099": {
      "firstVisit": true,
      "displayName": "Netherlands New Guinea (to 1963) shelf",
      "description": "Description for shelf Netherlands New Guinea (to 1963) in Nauru Room.\n\n[|Previous||] Nauru shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "43_building_K-KVU-KVU1-499": {
          "displayName": "Previous",
          "destination": "43_building_K-KVU-KVU1-499"
        }
      }
    },
    "43_building_K-KVU": {
      "firstVisit": true,
      "displayName": "Nauru Room entrance",
      "description": "This room has two shelves organized linearly from the entrance towards the back. The first shelf you can see is Nauru. You can exit to the floor foyer.\n\n[|Shelf|||||] Nauru shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "43_building_K-KVU-KVU1-499": {
          "displayName": "Shelf",
          "destination": "43_building_K-KVU-KVU1-499"
        },
        "43_building_K": {
          "displayName": "Exit",
          "destination": "43_building_K"
        }
      }
    },
    "43_building_K-KQJ-KQJ1-490": {
      "firstVisit": true,
      "displayName": "Benin shelf",
      "description": "Description for shelf Benin in Benin Room.\n\n[|Entrance||] Benin Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "43_building_K-KQJ": {
          "displayName": "Entrance",
          "destination": "43_building_K-KQJ"
        }
      }
    },
    "43_building_K-KQJ": {
      "firstVisit": true,
      "displayName": "Benin Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Benin. You can exit to the floor foyer.\n\n[|Shelf|||||] Benin shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "43_building_K-KQJ-KQJ1-490": {
          "displayName": "Shelf",
          "destination": "43_building_K-KQJ-KQJ1-490"
        },
        "43_building_K": {
          "displayName": "Exit",
          "destination": "43_building_K"
        }
      }
    },
    "43_building_K-KNE-KNE10-499": {
      "firstVisit": true,
      "displayName": "Regional organization and integration shelf",
      "description": "Description for shelf Regional organization and integration in Regional organization and integration Room.\n\n[|Entrance||] Regional organization and integration Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "43_building_K-KNE": {
          "displayName": "Entrance",
          "destination": "43_building_K-KNE"
        }
      }
    },
    "43_building_K-KNE": {
      "firstVisit": true,
      "displayName": "Regional organization and integration Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Regional organization and integration. You can exit to the floor foyer.\n\n[|Shelf|||||] Regional organization and integration shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "43_building_K-KNE-KNE10-499": {
          "displayName": "Shelf",
          "destination": "43_building_K-KNE-KNE10-499"
        },
        "43_building_K": {
          "displayName": "Exit",
          "destination": "43_building_K"
        }
      }
    },
    "43_building_K-KMS-KMS1-490": {
      "firstVisit": true,
      "displayName": "Qatar shelf",
      "description": "Description for shelf Qatar in Qatar Room.\n\n[|Entrance||] Qatar Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "43_building_K-KMS": {
          "displayName": "Entrance",
          "destination": "43_building_K-KMS"
        }
      }
    },
    "43_building_K-KMS": {
      "firstVisit": true,
      "displayName": "Qatar Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Qatar. You can exit to the floor foyer.\n\n[|Shelf|||||] Qatar shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "43_building_K-KMS-KMS1-490": {
          "displayName": "Shelf",
          "destination": "43_building_K-KMS-KMS1-490"
        },
        "43_building_K": {
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
        "43_building_K-KGP": {
          "displayName": "South",
          "destination": "43_building_K-KGP"
        },
        "43_building_K-KRG": {
          "displayName": "North",
          "destination": "43_building_K-KRG"
        },
        "43_building_K-KVU": {
          "displayName": "SouthEast",
          "destination": "43_building_K-KVU"
        },
        "43_building_K-KQJ": {
          "displayName": "NorthWest",
          "destination": "43_building_K-KQJ"
        },
        "43_building_K-KNE": {
          "displayName": "SouthWest",
          "destination": "43_building_K-KNE"
        },
        "43_building_K-KMS": {
          "displayName": "NorthEast",
          "destination": "43_building_K-KMS"
        },
        "42_building_K": {
          "displayName": "Down",
          "destination": "42_building_K"
        },
        "44_building_K": {
          "displayName": "Up",
          "destination": "44_building_K"
        }
      }
    },
    "44_building_K-KQM-KQM1-499": {
      "firstVisit": true,
      "displayName": "British Central Africa Protectorate shelf",
      "description": "Description for shelf British Central Africa Protectorate in British Central Africa Protectorate Room.\n\n[|Entrance||] British Central Africa Protectorate Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "44_building_K-KQM": {
          "displayName": "Entrance",
          "destination": "44_building_K-KQM"
        }
      }
    },
    "44_building_K-KQM": {
      "firstVisit": true,
      "displayName": "British Central Africa Protectorate Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is British Central Africa Protectorate. You can exit to the floor foyer.\n\n[|Shelf|||||] British Central Africa Protectorate shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "44_building_K-KQM-KQM1-499": {
          "displayName": "Shelf",
          "destination": "44_building_K-KQM-KQM1-499"
        },
        "44_building_K": {
          "displayName": "Exit",
          "destination": "44_building_K"
        }
      }
    },
    "44_building_K-KNY-KNY10-220": {
      "firstVisit": true,
      "displayName": "Cities, etc. shelf",
      "description": "Description for shelf Cities, etc. in Cities, etc. Room.\n\n[|Entrance||] Cities, etc. Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "44_building_K-KNY": {
          "displayName": "Entrance",
          "destination": "44_building_K-KNY"
        }
      }
    },
    "44_building_K-KNY": {
      "firstVisit": true,
      "displayName": "Cities, etc. Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Cities, etc.. You can exit to the floor foyer.\n\n[|Shelf|||||] Cities, etc. shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "44_building_K-KNY-KNY10-220": {
          "displayName": "Shelf",
          "destination": "44_building_K-KNY-KNY10-220"
        },
        "44_building_K": {
          "displayName": "Exit",
          "destination": "44_building_K"
        }
      }
    },
    "44_building_K-KLP-KLP1-4989": {
      "firstVisit": true,
      "displayName": "Ukraine shelf",
      "description": "Description for shelf Ukraine in Ukraine Room.\n\n[|Entrance||] Ukraine Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "44_building_K-KLP": {
          "displayName": "Entrance",
          "destination": "44_building_K-KLP"
        }
      }
    },
    "44_building_K-KLP": {
      "firstVisit": true,
      "displayName": "Ukraine Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Ukraine. You can exit to the floor foyer.\n\n[|Shelf|||||] Ukraine shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "44_building_K-KLP-KLP1-4989": {
          "displayName": "Shelf",
          "destination": "44_building_K-KLP-KLP1-4989"
        },
        "44_building_K": {
          "displayName": "Exit",
          "destination": "44_building_K"
        }
      }
    },
    "44_building_K-KQX-KQX1-490": {
      "firstVisit": true,
      "displayName": "Cape Verde shelf",
      "description": "Description for shelf Cape Verde in Cape Verde Room.\n\n[|Entrance||] Cape Verde Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "44_building_K-KQX": {
          "displayName": "Entrance",
          "destination": "44_building_K-KQX"
        }
      }
    },
    "44_building_K-KQX": {
      "firstVisit": true,
      "displayName": "Cape Verde Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Cape Verde. You can exit to the floor foyer.\n\n[|Shelf|||||] Cape Verde shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "44_building_K-KQX-KQX1-490": {
          "displayName": "Shelf",
          "destination": "44_building_K-KQX-KQX1-490"
        },
        "44_building_K": {
          "displayName": "Exit",
          "destination": "44_building_K"
        }
      }
    },
    "44_building_K-KGK-KGK1001-1499": {
      "firstVisit": true,
      "displayName": "Aruba shelf",
      "description": "Description for shelf Aruba in Aruba Room.\n\n[|Entrance||] Aruba Room entrance\n[|Next||||||] Antigua and Barbuda shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "44_building_K-KGK": {
          "displayName": "Entrance",
          "destination": "44_building_K-KGK"
        },
        "44_building_K-KGK-KGK1-499": {
          "displayName": "Next",
          "destination": "44_building_K-KGK-KGK1-499"
        }
      }
    },
    "44_building_K-KGK-KGK1-499": {
      "firstVisit": true,
      "displayName": "Antigua and Barbuda shelf",
      "description": "Description for shelf Antigua and Barbuda in Aruba Room.\n\n[|Previous||] Aruba shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "44_building_K-KGK-KGK1001-1499": {
          "displayName": "Previous",
          "destination": "44_building_K-KGK-KGK1001-1499"
        }
      }
    },
    "44_building_K-KGK": {
      "firstVisit": true,
      "displayName": "Aruba Room entrance",
      "description": "This room has two shelves organized linearly from the entrance towards the back. The first shelf you can see is Aruba. You can exit to the floor foyer.\n\n[|Shelf|||||] Aruba shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "44_building_K-KGK-KGK1001-1499": {
          "displayName": "Shelf",
          "destination": "44_building_K-KGK-KGK1001-1499"
        },
        "44_building_K": {
          "displayName": "Exit",
          "destination": "44_building_K"
        }
      }
    },
    "44_building_K-KPH-KPH5001-5490": {
      "firstVisit": true,
      "displayName": "Maldives shelf",
      "description": "Description for shelf Maldives in Maldives Room.\n\n[|Entrance||] Maldives Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "44_building_K-KPH": {
          "displayName": "Entrance",
          "destination": "44_building_K-KPH"
        }
      }
    },
    "44_building_K-KPH": {
      "firstVisit": true,
      "displayName": "Maldives Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Maldives. You can exit to the floor foyer.\n\n[|Shelf|||||] Maldives shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "44_building_K-KPH-KPH5001-5490": {
          "displayName": "Shelf",
          "destination": "44_building_K-KPH-KPH5001-5490"
        },
        "44_building_K": {
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
        "44_building_K-KQM": {
          "displayName": "South",
          "destination": "44_building_K-KQM"
        },
        "44_building_K-KNY": {
          "displayName": "North",
          "destination": "44_building_K-KNY"
        },
        "44_building_K-KLP": {
          "displayName": "SouthEast",
          "destination": "44_building_K-KLP"
        },
        "44_building_K-KQX": {
          "displayName": "NorthWest",
          "destination": "44_building_K-KQX"
        },
        "44_building_K-KGK": {
          "displayName": "SouthWest",
          "destination": "44_building_K-KGK"
        },
        "44_building_K-KPH": {
          "displayName": "NorthEast",
          "destination": "44_building_K-KPH"
        },
        "43_building_K": {
          "displayName": "Down",
          "destination": "43_building_K"
        },
        "45_building_K": {
          "displayName": "Up",
          "destination": "45_building_K"
        }
      }
    },
    "45_building_K-KSU-KSU1-490": {
      "firstVisit": true,
      "displayName": "Mauritania shelf",
      "description": "Description for shelf Mauritania in Mauritania Room.\n\n[|Entrance||] Mauritania Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "45_building_K-KSU": {
          "displayName": "Entrance",
          "destination": "45_building_K-KSU"
        }
      }
    },
    "45_building_K-KSU": {
      "firstVisit": true,
      "displayName": "Mauritania Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Mauritania. You can exit to the floor foyer.\n\n[|Shelf|||||] Mauritania shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "45_building_K-KSU-KSU1-490": {
          "displayName": "Shelf",
          "destination": "45_building_K-KSU-KSU1-490"
        },
        "45_building_K": {
          "displayName": "Exit",
          "destination": "45_building_K"
        }
      }
    },
    "45_building_K-KSC-KSC1-490": {
      "firstVisit": true,
      "displayName": "Guinea-Bissau shelf",
      "description": "Description for shelf Guinea-Bissau in Guinea-Bissau Room.\n\n[|Entrance||] Guinea-Bissau Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "45_building_K-KSC": {
          "displayName": "Entrance",
          "destination": "45_building_K-KSC"
        }
      }
    },
    "45_building_K-KSC": {
      "firstVisit": true,
      "displayName": "Guinea-Bissau Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Guinea-Bissau. You can exit to the floor foyer.\n\n[|Shelf|||||] Guinea-Bissau shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "45_building_K-KSC-KSC1-490": {
          "displayName": "Shelf",
          "destination": "45_building_K-KSC-KSC1-490"
        },
        "45_building_K": {
          "displayName": "Exit",
          "destination": "45_building_K"
        }
      }
    },
    "45_building_K-KVL-KVL1-489": {
      "firstVisit": true,
      "displayName": "Cook Islands shelf",
      "description": "Description for shelf Cook Islands in Cook Islands Room.\n\n[|Entrance||] Cook Islands Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "45_building_K-KVL": {
          "displayName": "Entrance",
          "destination": "45_building_K-KVL"
        }
      }
    },
    "45_building_K-KVL": {
      "firstVisit": true,
      "displayName": "Cook Islands Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Cook Islands. You can exit to the floor foyer.\n\n[|Shelf|||||] Cook Islands shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "45_building_K-KVL-KVL1-489": {
          "displayName": "Shelf",
          "destination": "45_building_K-KVL-KVL1-489"
        },
        "45_building_K": {
          "displayName": "Exit",
          "destination": "45_building_K"
        }
      }
    },
    "45_building_K-KWP-KWP1-490": {
      "firstVisit": true,
      "displayName": "Tonga shelf",
      "description": "Description for shelf Tonga in Tonga Room.\n\n[|Entrance||] Tonga Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "45_building_K-KWP": {
          "displayName": "Entrance",
          "destination": "45_building_K-KWP"
        }
      }
    },
    "45_building_K-KWP": {
      "firstVisit": true,
      "displayName": "Tonga Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Tonga. You can exit to the floor foyer.\n\n[|Shelf|||||] Tonga shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "45_building_K-KWP-KWP1-490": {
          "displayName": "Shelf",
          "destination": "45_building_K-KWP-KWP1-490"
        },
        "45_building_K": {
          "displayName": "Exit",
          "destination": "45_building_K"
        }
      }
    },
    "45_building_K-KNH-KNH1-490": {
      "firstVisit": true,
      "displayName": "Bhutan shelf",
      "description": "Description for shelf Bhutan in Bhutan Room.\n\n[|Entrance||] Bhutan Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "45_building_K-KNH": {
          "displayName": "Entrance",
          "destination": "45_building_K-KNH"
        }
      }
    },
    "45_building_K-KNH": {
      "firstVisit": true,
      "displayName": "Bhutan Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Bhutan. You can exit to the floor foyer.\n\n[|Shelf|||||] Bhutan shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "45_building_K-KNH-KNH1-490": {
          "displayName": "Shelf",
          "destination": "45_building_K-KNH-KNH1-490"
        },
        "45_building_K": {
          "displayName": "Exit",
          "destination": "45_building_K"
        }
      }
    },
    "45_building_K-KMG-KMG1-489": {
      "firstVisit": true,
      "displayName": "Gaza shelf",
      "description": "Description for shelf Gaza in Gaza Room.\n\n[|Entrance||] Gaza Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "45_building_K-KMG": {
          "displayName": "Entrance",
          "destination": "45_building_K-KMG"
        }
      }
    },
    "45_building_K-KMG": {
      "firstVisit": true,
      "displayName": "Gaza Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Gaza. You can exit to the floor foyer.\n\n[|Shelf|||||] Gaza shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "45_building_K-KMG-KMG1-489": {
          "displayName": "Shelf",
          "destination": "45_building_K-KMG-KMG1-489"
        },
        "45_building_K": {
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
        "45_building_K-KSU": {
          "displayName": "South",
          "destination": "45_building_K-KSU"
        },
        "45_building_K-KSC": {
          "displayName": "North",
          "destination": "45_building_K-KSC"
        },
        "45_building_K-KVL": {
          "displayName": "SouthEast",
          "destination": "45_building_K-KVL"
        },
        "45_building_K-KWP": {
          "displayName": "NorthWest",
          "destination": "45_building_K-KWP"
        },
        "45_building_K-KNH": {
          "displayName": "SouthWest",
          "destination": "45_building_K-KNH"
        },
        "45_building_K-KMG": {
          "displayName": "NorthEast",
          "destination": "45_building_K-KMG"
        },
        "44_building_K": {
          "displayName": "Down",
          "destination": "44_building_K"
        },
        "46_building_K": {
          "displayName": "Up",
          "destination": "46_building_K"
        }
      }
    },
    "46_building_K-KHL-KHL1-9000": {
      "firstVisit": true,
      "displayName": "Falkland Islands shelf",
      "description": "Description for shelf Falkland Islands in Falkland Islands Room.\n\n[|Entrance||] Falkland Islands Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "46_building_K-KHL": {
          "displayName": "Entrance",
          "destination": "46_building_K-KHL"
        }
      }
    },
    "46_building_K-KHL": {
      "firstVisit": true,
      "displayName": "Falkland Islands Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Falkland Islands. You can exit to the floor foyer.\n\n[|Shelf|||||] Falkland Islands shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "46_building_K-KHL-KHL1-9000": {
          "displayName": "Shelf",
          "destination": "46_building_K-KHL-KHL1-9000"
        },
        "46_building_K": {
          "displayName": "Exit",
          "destination": "46_building_K"
        }
      }
    },
    "46_building_K-KWQ-KWQ1-490": {
      "firstVisit": true,
      "displayName": "Tuvalu shelf",
      "description": "Description for shelf Tuvalu in Tuvalu Room.\n\n[|Entrance||] Tuvalu Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "46_building_K-KWQ": {
          "displayName": "Entrance",
          "destination": "46_building_K-KWQ"
        }
      }
    },
    "46_building_K-KWQ": {
      "firstVisit": true,
      "displayName": "Tuvalu Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Tuvalu. You can exit to the floor foyer.\n\n[|Shelf|||||] Tuvalu shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "46_building_K-KWQ-KWQ1-490": {
          "displayName": "Shelf",
          "destination": "46_building_K-KWQ-KWQ1-490"
        },
        "46_building_K": {
          "displayName": "Exit",
          "destination": "46_building_K"
        }
      }
    },
    "46_building_K-KRR-KRR1-499": {
      "firstVisit": true,
      "displayName": "French Equatorial Africa shelf",
      "description": "Description for shelf French Equatorial Africa in French Equatorial Africa Room.\n\n[|Entrance||] French Equatorial Africa Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "46_building_K-KRR": {
          "displayName": "Entrance",
          "destination": "46_building_K-KRR"
        }
      }
    },
    "46_building_K-KRR": {
      "firstVisit": true,
      "displayName": "French Equatorial Africa Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is French Equatorial Africa. You can exit to the floor foyer.\n\n[|Shelf|||||] French Equatorial Africa shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "46_building_K-KRR-KRR1-499": {
          "displayName": "Shelf",
          "destination": "46_building_K-KRR-KRR1-499"
        },
        "46_building_K": {
          "displayName": "Exit",
          "destination": "46_building_K"
        }
      }
    },
    "46_building_K-KVR-KVR1-490": {
      "firstVisit": true,
      "displayName": "Kiribati shelf",
      "description": "Description for shelf Kiribati in Kiribati Room.\n\n[|Entrance||] Kiribati Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "46_building_K-KVR": {
          "displayName": "Entrance",
          "destination": "46_building_K-KVR"
        }
      }
    },
    "46_building_K-KVR": {
      "firstVisit": true,
      "displayName": "Kiribati Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Kiribati. You can exit to the floor foyer.\n\n[|Shelf|||||] Kiribati shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "46_building_K-KVR-KVR1-490": {
          "displayName": "Shelf",
          "destination": "46_building_K-KVR-KVR1-490"
        },
        "46_building_K": {
          "displayName": "Exit",
          "destination": "46_building_K"
        }
      }
    },
    "46_building_K-KU-KU350-399": {
      "firstVisit": true,
      "displayName": "Law of Australian peoples.  Aborigines shelf",
      "description": "Description for shelf Law of Australian peoples.  Aborigines in Law of Australian peoples.  Aborigines Room.\n\n[|Entrance||] Law of Australian peoples.  Aborigines Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "46_building_K-KU": {
          "displayName": "Entrance",
          "destination": "46_building_K-KU"
        }
      }
    },
    "46_building_K-KU": {
      "firstVisit": true,
      "displayName": "Law of Australian peoples.  Aborigines Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Law of Australian peoples.  Aborigines. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Australian peoples.  Aborigines shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "46_building_K-KU-KU350-399": {
          "displayName": "Shelf",
          "destination": "46_building_K-KU-KU350-399"
        },
        "46_building_K": {
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
        "46_building_K-KHL": {
          "displayName": "South",
          "destination": "46_building_K-KHL"
        },
        "46_building_K-KWQ": {
          "displayName": "North",
          "destination": "46_building_K-KWQ"
        },
        "46_building_K-KRR": {
          "displayName": "SouthEast",
          "destination": "46_building_K-KRR"
        },
        "46_building_K-KVR": {
          "displayName": "NorthWest",
          "destination": "46_building_K-KVR"
        },
        "46_building_K-KU": {
          "displayName": "SouthWest",
          "destination": "46_building_K-KU"
        },
        "45_building_K": {
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
    "building_L-LB-LB5-3640": {
      "firstVisit": true,
      "displayName": "Theory and practice of education shelf",
      "description": "Description for shelf Theory and practice of education in Theory and practice of education Room.\n\n[|Entrance||] Theory and practice of education Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_L-LB": {
          "displayName": "Entrance",
          "destination": "building_L-LB"
        }
      }
    },
    "building_L-LB": {
      "firstVisit": true,
      "displayName": "Theory and practice of education Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Theory and practice of education. You can exit to the floor foyer.\n\n[|Shelf|||||] Theory and practice of education shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_L-LB-LB5-3640": {
          "displayName": "Shelf",
          "destination": "building_L-LB-LB5-3640"
        },
        "building_L": {
          "displayName": "Exit",
          "destination": "building_L"
        }
      }
    },
    "building_L-LT-LT6-1001": {
      "firstVisit": true,
      "displayName": "Textbooks shelf",
      "description": "Description for shelf Textbooks in Textbooks Room.\n\n[|Entrance||] Textbooks Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_L-LT": {
          "displayName": "Entrance",
          "destination": "building_L-LT"
        }
      }
    },
    "building_L-LT": {
      "firstVisit": true,
      "displayName": "Textbooks Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Textbooks. You can exit to the floor foyer.\n\n[|Shelf|||||] Textbooks shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_L-LT-LT6-1001": {
          "displayName": "Shelf",
          "destination": "building_L-LT-LT6-1001"
        },
        "building_L": {
          "displayName": "Exit",
          "destination": "building_L"
        }
      }
    },
    "building_L-LA-LA5-2396": {
      "firstVisit": true,
      "displayName": "History of education shelf",
      "description": "Description for shelf History of education in History of education Room.\n\n[|Entrance||] History of education Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_L-LA": {
          "displayName": "Entrance",
          "destination": "building_L-LA"
        }
      }
    },
    "building_L-LA": {
      "firstVisit": true,
      "displayName": "History of education Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is History of education. You can exit to the floor foyer.\n\n[|Shelf|||||] History of education shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_L-LA-LA5-2396": {
          "displayName": "Shelf",
          "destination": "building_L-LA-LA5-2396"
        },
        "building_L": {
          "displayName": "Exit",
          "destination": "building_L"
        }
      }
    },
    "building_L-LD-LD13-7501": {
      "firstVisit": true,
      "displayName": "United States shelf",
      "description": "Description for shelf United States in United States Room.\n\n[|Entrance||] United States Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_L-LD": {
          "displayName": "Entrance",
          "destination": "building_L-LD"
        }
      }
    },
    "building_L-LD": {
      "firstVisit": true,
      "displayName": "United States Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is United States. You can exit to the floor foyer.\n\n[|Shelf|||||] United States shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_L-LD-LD13-7501": {
          "displayName": "Shelf",
          "destination": "building_L-LD-LD13-7501"
        },
        "building_L": {
          "displayName": "Exit",
          "destination": "building_L"
        }
      }
    },
    "building_L-LC-LC8-6691": {
      "firstVisit": true,
      "displayName": "Special aspects of education shelf",
      "description": "Description for shelf Special aspects of education in Special aspects of education Room.\n\n[|Entrance||] Special aspects of education Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_L-LC": {
          "displayName": "Entrance",
          "destination": "building_L-LC"
        }
      }
    },
    "building_L-LC": {
      "firstVisit": true,
      "displayName": "Special aspects of education Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Special aspects of education. You can exit to the floor foyer.\n\n[|Shelf|||||] Special aspects of education shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_L-LC-LC8-6691": {
          "displayName": "Shelf",
          "destination": "building_L-LC-LC8-6691"
        },
        "building_L": {
          "displayName": "Exit",
          "destination": "building_L"
        }
      }
    },
    "building_L-L-L7-991": {
      "firstVisit": true,
      "displayName": "Education (General) shelf",
      "description": "Description for shelf Education (General) in Education (General) Room.\n\n[|Entrance||] Education (General) Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_L-L": {
          "displayName": "Entrance",
          "destination": "building_L-L"
        }
      }
    },
    "building_L-L": {
      "firstVisit": true,
      "displayName": "Education (General) Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Education (General). You can exit to the floor foyer.\n\n[|Shelf|||||] Education (General) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_L-L-L7-991": {
          "displayName": "Shelf",
          "destination": "building_L-L-L7-991"
        },
        "building_L": {
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
        },
        "2_building_L": {
          "displayName": "Up",
          "destination": "2_building_L"
        }
      }
    },
    "2_building_L-LF-LF14-5627": {
      "firstVisit": true,
      "displayName": "Individual institutions shelf",
      "description": "Description for shelf Individual institutions in Individual institutions Room.\n\n[|Entrance||] Individual institutions Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_L-LF": {
          "displayName": "Entrance",
          "destination": "2_building_L-LF"
        }
      }
    },
    "2_building_L-LF": {
      "firstVisit": true,
      "displayName": "Individual institutions Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Individual institutions. You can exit to the floor foyer.\n\n[|Shelf|||||] Individual institutions shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_L-LF-LF14-5627": {
          "displayName": "Shelf",
          "destination": "2_building_L-LF-LF14-5627"
        },
        "2_building_L": {
          "displayName": "Exit",
          "destination": "2_building_L"
        }
      }
    },
    "2_building_L-LG-LG21-961": {
      "firstVisit": true,
      "displayName": "Individual institutions shelf",
      "description": "Description for shelf Individual institutions in Individual institutions Room.\n\n[|Entrance||] Individual institutions Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_L-LG": {
          "displayName": "Entrance",
          "destination": "2_building_L-LG"
        }
      }
    },
    "2_building_L-LG": {
      "firstVisit": true,
      "displayName": "Individual institutions Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Individual institutions. You can exit to the floor foyer.\n\n[|Shelf|||||] Individual institutions shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_L-LG-LG21-961": {
          "displayName": "Shelf",
          "destination": "2_building_L-LG-LG21-961"
        },
        "2_building_L": {
          "displayName": "Exit",
          "destination": "2_building_L"
        }
      }
    },
    "2_building_L-LJ-LJ3-165": {
      "firstVisit": true,
      "displayName": "Student fraternities and societies, United States shelf",
      "description": "Description for shelf Student fraternities and societies, United States in Student fraternities and societies, United States Room.\n\n[|Entrance||] Student fraternities and societies, United States Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_L-LJ": {
          "displayName": "Entrance",
          "destination": "2_building_L-LJ"
        }
      }
    },
    "2_building_L-LJ": {
      "firstVisit": true,
      "displayName": "Student fraternities and societies, United States Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Student fraternities and societies, United States. You can exit to the floor foyer.\n\n[|Shelf|||||] Student fraternities and societies, United States shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_L-LJ-LJ3-165": {
          "displayName": "Shelf",
          "destination": "2_building_L-LJ-LJ3-165"
        },
        "2_building_L": {
          "displayName": "Exit",
          "destination": "2_building_L"
        }
      }
    },
    "2_building_L-LE-LE3-78": {
      "firstVisit": true,
      "displayName": "America (except United States) shelf",
      "description": "Description for shelf America (except United States) in America (except United States) Room.\n\n[|Entrance||] America (except United States) Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_L-LE": {
          "displayName": "Entrance",
          "destination": "2_building_L-LE"
        }
      }
    },
    "2_building_L-LE": {
      "firstVisit": true,
      "displayName": "America (except United States) Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is America (except United States). You can exit to the floor foyer.\n\n[|Shelf|||||] America (except United States) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_L-LE-LE3-78": {
          "displayName": "Shelf",
          "destination": "2_building_L-LE-LE3-78"
        },
        "2_building_L": {
          "displayName": "Exit",
          "destination": "2_building_L"
        }
      }
    },
    "2_building_L-LH-LH1-9": {
      "firstVisit": true,
      "displayName": "College and school magazines and papers shelf",
      "description": "Description for shelf College and school magazines and papers in College and school magazines and papers Room.\n\n[|Entrance||] College and school magazines and papers Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_L-LH": {
          "displayName": "Entrance",
          "destination": "2_building_L-LH"
        }
      }
    },
    "2_building_L-LH": {
      "firstVisit": true,
      "displayName": "College and school magazines and papers Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is College and school magazines and papers. You can exit to the floor foyer.\n\n[|Shelf|||||] College and school magazines and papers shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_L-LH-LH1-9": {
          "displayName": "Shelf",
          "destination": "2_building_L-LH-LH1-9"
        },
        "2_building_L": {
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
        "2_building_L-LF": {
          "displayName": "South",
          "destination": "2_building_L-LF"
        },
        "2_building_L-LG": {
          "displayName": "North",
          "destination": "2_building_L-LG"
        },
        "2_building_L-LJ": {
          "displayName": "SouthEast",
          "destination": "2_building_L-LJ"
        },
        "2_building_L-LE": {
          "displayName": "NorthWest",
          "destination": "2_building_L-LE"
        },
        "2_building_L-LH": {
          "displayName": "SouthWest",
          "destination": "2_building_L-LH"
        },
        "building_L": {
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
    "building_M-ML-ML1-3930": {
      "firstVisit": true,
      "displayName": "Literature on music shelf",
      "description": "Description for shelf Literature on music in Literature on music Room.\n\n[|Entrance||] Literature on music Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_M-ML": {
          "displayName": "Entrance",
          "destination": "building_M-ML"
        }
      }
    },
    "building_M-ML": {
      "firstVisit": true,
      "displayName": "Literature on music Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Literature on music. You can exit to the floor foyer.\n\n[|Shelf|||||] Literature on music shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_M-ML-ML1-3930": {
          "displayName": "Shelf",
          "destination": "building_M-ML-ML1-3930"
        },
        "building_M": {
          "displayName": "Exit",
          "destination": "building_M"
        }
      }
    },
    "building_M-MT-MT1-960": {
      "firstVisit": true,
      "displayName": "Instruction and study shelf",
      "description": "Description for shelf Instruction and study in Instruction and study Room.\n\n[|Entrance||] Instruction and study Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_M-MT": {
          "displayName": "Entrance",
          "destination": "building_M-MT"
        }
      }
    },
    "building_M-MT": {
      "firstVisit": true,
      "displayName": "Instruction and study Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Instruction and study. You can exit to the floor foyer.\n\n[|Shelf|||||] Instruction and study shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_M-MT-MT1-960": {
          "displayName": "Shelf",
          "destination": "building_M-MT-MT1-960"
        },
        "building_M": {
          "displayName": "Exit",
          "destination": "building_M"
        }
      }
    },
    "building_M-M-M1-5000": {
      "firstVisit": true,
      "displayName": "Music shelf",
      "description": "Description for shelf Music in Music Room.\n\n[|Entrance||] Music Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_M-M": {
          "displayName": "Entrance",
          "destination": "building_M-M"
        }
      }
    },
    "building_M-M": {
      "firstVisit": true,
      "displayName": "Music Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Music. You can exit to the floor foyer.\n\n[|Shelf|||||] Music shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_M-M-M1-5000": {
          "displayName": "Shelf",
          "destination": "building_M-M-M1-5000"
        },
        "building_M": {
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
    "building_N-NA-NA1-9428": {
      "firstVisit": true,
      "displayName": "Architecture shelf",
      "description": "Description for shelf Architecture in Architecture Room.\n\n[|Entrance||] Architecture Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_N-NA": {
          "displayName": "Entrance",
          "destination": "building_N-NA"
        }
      }
    },
    "building_N-NA": {
      "firstVisit": true,
      "displayName": "Architecture Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Architecture. You can exit to the floor foyer.\n\n[|Shelf|||||] Architecture shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_N-NA-NA1-9428": {
          "displayName": "Shelf",
          "destination": "building_N-NA-NA1-9428"
        },
        "building_N": {
          "displayName": "Exit",
          "destination": "building_N"
        }
      }
    },
    "building_N-N-N1-9211": {
      "firstVisit": true,
      "displayName": "Visual arts shelf",
      "description": "Description for shelf Visual arts in Visual arts Room.\n\n[|Entrance||] Visual arts Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_N-N": {
          "displayName": "Entrance",
          "destination": "building_N-N"
        }
      }
    },
    "building_N-N": {
      "firstVisit": true,
      "displayName": "Visual arts Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Visual arts. You can exit to the floor foyer.\n\n[|Shelf|||||] Visual arts shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_N-N-N1-9211": {
          "displayName": "Shelf",
          "destination": "building_N-N-N1-9211"
        },
        "building_N": {
          "displayName": "Exit",
          "destination": "building_N"
        }
      }
    },
    "building_N-NK-NK1-9990": {
      "firstVisit": true,
      "displayName": "Decorative arts shelf",
      "description": "Description for shelf Decorative arts in Decorative arts Room.\n\n[|Entrance||] Decorative arts Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_N-NK": {
          "displayName": "Entrance",
          "destination": "building_N-NK"
        }
      }
    },
    "building_N-NK": {
      "firstVisit": true,
      "displayName": "Decorative arts Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Decorative arts. You can exit to the floor foyer.\n\n[|Shelf|||||] Decorative arts shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_N-NK-NK1-9990": {
          "displayName": "Shelf",
          "destination": "building_N-NK-NK1-9990"
        },
        "building_N": {
          "displayName": "Exit",
          "destination": "building_N"
        }
      }
    },
    "building_N-ND-ND25-3416": {
      "firstVisit": true,
      "displayName": "Painting shelf",
      "description": "Description for shelf Painting in Painting Room.\n\n[|Entrance||] Painting Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_N-ND": {
          "displayName": "Entrance",
          "destination": "building_N-ND"
        }
      }
    },
    "building_N-ND": {
      "firstVisit": true,
      "displayName": "Painting Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Painting. You can exit to the floor foyer.\n\n[|Shelf|||||] Painting shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_N-ND-ND25-3416": {
          "displayName": "Shelf",
          "destination": "building_N-ND-ND25-3416"
        },
        "building_N": {
          "displayName": "Exit",
          "destination": "building_N"
        }
      }
    },
    "building_N-NC-NC1-1940": {
      "firstVisit": true,
      "displayName": "Drawing.    Design.    Illustration shelf",
      "description": "Description for shelf Drawing.    Design.    Illustration in Drawing.    Design.    Illustration Room.\n\n[|Entrance||] Drawing.    Design.    Illustration Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_N-NC": {
          "displayName": "Entrance",
          "destination": "building_N-NC"
        }
      }
    },
    "building_N-NC": {
      "firstVisit": true,
      "displayName": "Drawing.    Design.    Illustration Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Drawing.    Design.    Illustration. You can exit to the floor foyer.\n\n[|Shelf|||||] Drawing.    Design.    Illustration shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_N-NC-NC1-1940": {
          "displayName": "Shelf",
          "destination": "building_N-NC-NC1-1940"
        },
        "building_N": {
          "displayName": "Exit",
          "destination": "building_N"
        }
      }
    },
    "building_N-NE-NE1-3002": {
      "firstVisit": true,
      "displayName": "Print media shelf",
      "description": "Description for shelf Print media in Print media Room.\n\n[|Entrance||] Print media Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_N-NE": {
          "displayName": "Entrance",
          "destination": "building_N-NE"
        }
      }
    },
    "building_N-NE": {
      "firstVisit": true,
      "displayName": "Print media Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Print media. You can exit to the floor foyer.\n\n[|Shelf|||||] Print media shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_N-NE-NE1-3002": {
          "displayName": "Shelf",
          "destination": "building_N-NE-NE1-3002"
        },
        "building_N": {
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
        },
        "2_building_N": {
          "displayName": "Up",
          "destination": "2_building_N"
        }
      }
    },
    "2_building_N-NB-NB1-1952": {
      "firstVisit": true,
      "displayName": "Sculpture shelf",
      "description": "Description for shelf Sculpture in Sculpture Room.\n\n[|Entrance||] Sculpture Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_N-NB": {
          "displayName": "Entrance",
          "destination": "2_building_N-NB"
        }
      }
    },
    "2_building_N-NB": {
      "firstVisit": true,
      "displayName": "Sculpture Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Sculpture. You can exit to the floor foyer.\n\n[|Shelf|||||] Sculpture shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_N-NB-NB1-1952": {
          "displayName": "Shelf",
          "destination": "2_building_N-NB-NB1-1952"
        },
        "2_building_N": {
          "displayName": "Exit",
          "destination": "2_building_N"
        }
      }
    },
    "2_building_N-NX-NX1-820": {
      "firstVisit": true,
      "displayName": "Arts in general shelf",
      "description": "Description for shelf Arts in general in Arts in general Room.\n\n[|Entrance||] Arts in general Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_N-NX": {
          "displayName": "Entrance",
          "destination": "2_building_N-NX"
        }
      }
    },
    "2_building_N-NX": {
      "firstVisit": true,
      "displayName": "Arts in general Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Arts in general. You can exit to the floor foyer.\n\n[|Shelf|||||] Arts in general shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_N-NX-NX1-820": {
          "displayName": "Shelf",
          "destination": "2_building_N-NX-NX1-820"
        },
        "2_building_N": {
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
        "2_building_N-NB": {
          "displayName": "South",
          "destination": "2_building_N-NB"
        },
        "2_building_N-NX": {
          "displayName": "North",
          "destination": "2_building_N-NX"
        },
        "building_N": {
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
    "building_P-PZ-PZ1-90": {
      "firstVisit": true,
      "displayName": "Fiction and juvenile belles lettres shelf",
      "description": "Description for shelf Fiction and juvenile belles lettres in Fiction and juvenile belles lettres Room.\n\n[|Entrance||] Fiction and juvenile belles lettres Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_P-PZ": {
          "displayName": "Entrance",
          "destination": "building_P-PZ"
        }
      }
    },
    "building_P-PZ": {
      "firstVisit": true,
      "displayName": "Fiction and juvenile belles lettres Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Fiction and juvenile belles lettres. You can exit to the floor foyer.\n\n[|Shelf|||||] Fiction and juvenile belles lettres shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_P-PZ-PZ1-90": {
          "displayName": "Shelf",
          "destination": "building_P-PZ-PZ1-90"
        },
        "building_P": {
          "displayName": "Exit",
          "destination": "building_P"
        }
      }
    },
    "building_P-PR-PR": {
      "firstVisit": true,
      "displayName": "English shelf",
      "description": "Description for shelf English in English Room.\n\n[|Entrance||] English Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_P-PR": {
          "displayName": "Entrance",
          "destination": "building_P-PR"
        }
      }
    },
    "building_P-PR": {
      "firstVisit": true,
      "displayName": "English Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is English. You can exit to the floor foyer.\n\n[|Shelf|||||] English shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_P-PR-PR": {
          "displayName": "Shelf",
          "destination": "building_P-PR-PR"
        },
        "building_P": {
          "displayName": "Exit",
          "destination": "building_P"
        }
      }
    },
    "building_P-PS-PS1-3576": {
      "firstVisit": true,
      "displayName": "American literature shelf",
      "description": "Description for shelf American literature in American literature Room.\n\n[|Entrance||] American literature Room entrance\n[|Next||||||] Canadian    literature shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_P-PS": {
          "displayName": "Entrance",
          "destination": "building_P-PS"
        },
        "building_P-PS-PS8001-8599": {
          "displayName": "Next",
          "destination": "building_P-PS-PS8001-8599"
        }
      }
    },
    "building_P-PS-PS8001-8599": {
      "firstVisit": true,
      "displayName": "Canadian    literature shelf",
      "description": "Description for shelf Canadian    literature in American literature Room.\n\n[|Previous||] American literature shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_P-PS-PS1-3576": {
          "displayName": "Previous",
          "destination": "building_P-PS-PS1-3576"
        }
      }
    },
    "building_P-PS": {
      "firstVisit": true,
      "displayName": "American literature Room entrance",
      "description": "This room has two shelves organized linearly from the entrance towards the back. The first shelf you can see is American literature. You can exit to the floor foyer.\n\n[|Shelf|||||] American literature shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_P-PS-PS1-3576": {
          "displayName": "Shelf",
          "destination": "building_P-PS-PS1-3576"
        },
        "building_P": {
          "displayName": "Exit",
          "destination": "building_P"
        }
      }
    },
    "building_P-PQ-PQ1-3999": {
      "firstVisit": true,
      "displayName": "French literature shelf",
      "description": "Description for shelf French literature in French literature Room.\n\n[|Entrance||] French literature Room entrance\n[|Next||||||] Italian literature shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_P-PQ": {
          "displayName": "Entrance",
          "destination": "building_P-PQ"
        },
        "building_P-PQ-PQ4001-5999": {
          "displayName": "Next",
          "destination": "building_P-PQ-PQ4001-5999"
        }
      }
    },
    "building_P-PQ-PQ4001-5999": {
      "firstVisit": true,
      "displayName": "Italian literature shelf",
      "description": "Description for shelf Italian literature in French literature Room.\n\n[|Previous||] French literature shelf\n[|Next||||||] Spanish literature shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_P-PQ-PQ1-3999": {
          "displayName": "Previous",
          "destination": "building_P-PQ-PQ1-3999"
        },
        "building_P-PQ-PQ6001-8929": {
          "displayName": "Next",
          "destination": "building_P-PQ-PQ6001-8929"
        }
      }
    },
    "building_P-PQ-PQ6001-8929": {
      "firstVisit": true,
      "displayName": "Spanish literature shelf",
      "description": "Description for shelf Spanish literature in French literature Room.\n\n[|Previous||] Italian literature shelf\n[|Next||||||] History and criticism shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_P-PQ-PQ4001-5999": {
          "displayName": "Previous",
          "destination": "building_P-PQ-PQ4001-5999"
        },
        "building_P-PQ-PQ4001-4199.5": {
          "displayName": "Next",
          "destination": "building_P-PQ-PQ4001-4199.5"
        }
      }
    },
    "building_P-PQ-PQ4001-4199.5": {
      "firstVisit": true,
      "displayName": "History and criticism shelf",
      "description": "Description for shelf History and criticism in French literature Room.\n\n[|Previous||] Spanish literature shelf\n[|Next||||||] History and criticism shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_P-PQ-PQ6001-8929": {
          "displayName": "Previous",
          "destination": "building_P-PQ-PQ6001-8929"
        },
        "building_P-PQ-PQ6001-6168": {
          "displayName": "Next",
          "destination": "building_P-PQ-PQ6001-6168"
        }
      }
    },
    "building_P-PQ-PQ6001-6168": {
      "firstVisit": true,
      "displayName": "History and criticism shelf",
      "description": "Description for shelf History and criticism in French literature Room.\n\n[|Previous||] History and criticism shelf\n[|Next||||||] Portuguese literature shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_P-PQ-PQ4001-4199.5": {
          "displayName": "Previous",
          "destination": "building_P-PQ-PQ4001-4199.5"
        },
        "building_P-PQ-PQ9000-9999": {
          "displayName": "Next",
          "destination": "building_P-PQ-PQ9000-9999"
        }
      }
    },
    "building_P-PQ-PQ9000-9999": {
      "firstVisit": true,
      "displayName": "Portuguese literature shelf",
      "description": "Description for shelf Portuguese literature in French literature Room.\n\n[|Previous||] History and criticism shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_P-PQ-PQ6001-6168": {
          "displayName": "Previous",
          "destination": "building_P-PQ-PQ6001-6168"
        }
      }
    },
    "building_P-PQ": {
      "firstVisit": true,
      "displayName": "French literature Room entrance",
      "description": "This room has six shelves organized linearly from the entrance towards the back. The first shelf you can see is French literature. You can exit to the floor foyer.\n\n[|Shelf|||||] French literature shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_P-PQ-PQ1-3999": {
          "displayName": "Shelf",
          "destination": "building_P-PQ-PQ1-3999"
        },
        "building_P": {
          "displayName": "Exit",
          "destination": "building_P"
        }
      }
    },
    "building_P-PE-PE1-3729": {
      "firstVisit": true,
      "displayName": "English shelf",
      "description": "Description for shelf English in English Room.\n\n[|Entrance||] English Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_P-PE": {
          "displayName": "Entrance",
          "destination": "building_P-PE"
        }
      }
    },
    "building_P-PE": {
      "firstVisit": true,
      "displayName": "English Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is English. You can exit to the floor foyer.\n\n[|Shelf|||||] English shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_P-PE-PE1-3729": {
          "displayName": "Shelf",
          "destination": "building_P-PE-PE1-3729"
        },
        "building_P": {
          "displayName": "Exit",
          "destination": "building_P"
        }
      }
    },
    "building_P-PN-PN1-6790": {
      "firstVisit": true,
      "displayName": "Literature (General) shelf",
      "description": "Description for shelf Literature (General) in Literature (General) Room.\n\n[|Entrance||] Literature (General) Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_P-PN": {
          "displayName": "Entrance",
          "destination": "building_P-PN"
        }
      }
    },
    "building_P-PN": {
      "firstVisit": true,
      "displayName": "Literature (General) Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Literature (General). You can exit to the floor foyer.\n\n[|Shelf|||||] Literature (General) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_P-PN-PN1-6790": {
          "displayName": "Shelf",
          "destination": "building_P-PN-PN1-6790"
        },
        "building_P": {
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
        },
        "2_building_P": {
          "displayName": "Up",
          "destination": "2_building_P"
        }
      }
    },
    "2_building_P-PT-PT1-4897": {
      "firstVisit": true,
      "displayName": "German literature shelf",
      "description": "Description for shelf German literature in German literature Room.\n\n[|Entrance||] German literature Room entrance\n[|Next||||||] Norwegian literature shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_P-PT": {
          "displayName": "Entrance",
          "destination": "2_building_P-PT"
        },
        "2_building_P-PT-PT8301-9155": {
          "displayName": "Next",
          "destination": "2_building_P-PT-PT8301-9155"
        }
      }
    },
    "2_building_P-PT-PT8301-9155": {
      "firstVisit": true,
      "displayName": "Norwegian literature shelf",
      "description": "Description for shelf Norwegian literature in German literature Room.\n\n[|Previous||] German literature shelf\n[|Next||||||] Dutch literature shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_P-PT-PT1-4897": {
          "displayName": "Previous",
          "destination": "2_building_P-PT-PT1-4897"
        },
        "2_building_P-PT-PT5001-5980": {
          "displayName": "Next",
          "destination": "2_building_P-PT-PT5001-5980"
        }
      }
    },
    "2_building_P-PT-PT5001-5980": {
      "firstVisit": true,
      "displayName": "Dutch literature shelf",
      "description": "Description for shelf Dutch literature in German literature Room.\n\n[|Previous||] Norwegian literature shelf\n[|Next||||||] Swedish literature shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_P-PT-PT8301-9155": {
          "displayName": "Previous",
          "destination": "2_building_P-PT-PT8301-9155"
        },
        "2_building_P-PT-PT9201-9999": {
          "displayName": "Next",
          "destination": "2_building_P-PT-PT9201-9999"
        }
      }
    },
    "2_building_P-PT-PT9201-9999": {
      "firstVisit": true,
      "displayName": "Swedish literature shelf",
      "description": "Description for shelf Swedish literature in German literature Room.\n\n[|Previous||] Dutch literature shelf\n[|Next||||||] Old Norse literature: Old Icelandic and Old Norwegian shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_P-PT-PT5001-5980": {
          "displayName": "Previous",
          "destination": "2_building_P-PT-PT5001-5980"
        },
        "2_building_P-PT-PT7101-7338": {
          "displayName": "Next",
          "destination": "2_building_P-PT-PT7101-7338"
        }
      }
    },
    "2_building_P-PT-PT7101-7338": {
      "firstVisit": true,
      "displayName": "Old Norse literature: Old Icelandic and Old Norwegian shelf",
      "description": "Description for shelf Old Norse literature: Old Icelandic and Old Norwegian in German literature Room.\n\n[|Previous||] Swedish literature shelf\n[|Next||||||] Danish literature shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_P-PT-PT9201-9999": {
          "displayName": "Previous",
          "destination": "2_building_P-PT-PT9201-9999"
        },
        "2_building_P-PT-PT7601-8260": {
          "displayName": "Next",
          "destination": "2_building_P-PT-PT7601-8260"
        }
      }
    },
    "2_building_P-PT-PT7601-8260": {
      "firstVisit": true,
      "displayName": "Danish literature shelf",
      "description": "Description for shelf Danish literature in German literature Room.\n\n[|Previous||] Old Norse literature: Old Icelandic and Old Norwegian shelf\n[|Next||||||] Modern Icelandic literature shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_P-PT-PT7101-7338": {
          "displayName": "Previous",
          "destination": "2_building_P-PT-PT7101-7338"
        },
        "2_building_P-PT-PT7351-7550": {
          "displayName": "Next",
          "destination": "2_building_P-PT-PT7351-7550"
        }
      }
    },
    "2_building_P-PT-PT7351-7550": {
      "firstVisit": true,
      "displayName": "Modern Icelandic literature shelf",
      "description": "Description for shelf Modern Icelandic literature in German literature Room.\n\n[|Previous||] Danish literature shelf\n[|Next||||||] Afrikaans literature shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_P-PT-PT7601-8260": {
          "displayName": "Previous",
          "destination": "2_building_P-PT-PT7601-8260"
        },
        "2_building_P-PT-PT6500-6593.36": {
          "displayName": "Next",
          "destination": "2_building_P-PT-PT6500-6593.36"
        }
      }
    },
    "2_building_P-PT-PT6500-6593.36": {
      "firstVisit": true,
      "displayName": "Afrikaans literature shelf",
      "description": "Description for shelf Afrikaans literature in German literature Room.\n\n[|Previous||] Modern Icelandic literature shelf\n[|Next||||||] Flemish literature since 1830 shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_P-PT-PT7351-7550": {
          "displayName": "Previous",
          "destination": "2_building_P-PT-PT7351-7550"
        },
        "2_building_P-PT-PT6000-6467.36": {
          "displayName": "Next",
          "destination": "2_building_P-PT-PT6000-6467.36"
        }
      }
    },
    "2_building_P-PT-PT6000-6467.36": {
      "firstVisit": true,
      "displayName": "Flemish literature since 1830 shelf",
      "description": "Description for shelf Flemish literature since 1830 in German literature Room.\n\n[|Previous||] Afrikaans literature shelf\n[|Next||||||] General shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_P-PT-PT6500-6593.36": {
          "displayName": "Previous",
          "destination": "2_building_P-PT-PT6500-6593.36"
        },
        "2_building_P-PT-PT7001-7099": {
          "displayName": "Next",
          "destination": "2_building_P-PT-PT7001-7099"
        }
      }
    },
    "2_building_P-PT-PT7001-7099": {
      "firstVisit": true,
      "displayName": "General shelf",
      "description": "Description for shelf General in German literature Room.\n\n[|Previous||] Flemish literature since 1830 shelf\n[|Next||||||] Faroese literature shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_P-PT-PT6000-6467.36": {
          "displayName": "Previous",
          "destination": "2_building_P-PT-PT6000-6467.36"
        },
        "2_building_P-PT-PT7581-7599": {
          "displayName": "Next",
          "destination": "2_building_P-PT-PT7581-7599"
        }
      }
    },
    "2_building_P-PT-PT7581-7599": {
      "firstVisit": true,
      "displayName": "Faroese literature shelf",
      "description": "Description for shelf Faroese literature in German literature Room.\n\n[|Previous||] General shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_P-PT-PT7001-7099": {
          "displayName": "Previous",
          "destination": "2_building_P-PT-PT7001-7099"
        }
      }
    },
    "2_building_P-PT": {
      "firstVisit": true,
      "displayName": "German literature Room entrance",
      "description": "This room has 11 shelves organized linearly from the entrance towards the back. The first shelf you can see is German literature. You can exit to the floor foyer.\n\n[|Shelf|||||] German literature shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_P-PT-PT1-4897": {
          "displayName": "Shelf",
          "destination": "2_building_P-PT-PT1-4897"
        },
        "2_building_P": {
          "displayName": "Exit",
          "destination": "2_building_P"
        }
      }
    },
    "2_building_P-PA-PA2001-2915": {
      "firstVisit": true,
      "displayName": "Latin philology and language shelf",
      "description": "Description for shelf Latin philology and language in Greek literature Room.\n\n[|Entrance||] Greek literature Room entrance\n[|Next||||||] Roman literature shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_P-PA": {
          "displayName": "Entrance",
          "destination": "2_building_P-PA"
        },
        "2_building_P-PA-PA6000-6971": {
          "displayName": "Next",
          "destination": "2_building_P-PA-PA6000-6971"
        }
      }
    },
    "2_building_P-PA-PA6000-6971": {
      "firstVisit": true,
      "displayName": "Roman literature shelf",
      "description": "Description for shelf Roman literature in Greek literature Room.\n\n[|Previous||] Latin philology and language shelf\n[|Next||||||] Greek literature shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_P-PA-PA2001-2915": {
          "displayName": "Previous",
          "destination": "2_building_P-PA-PA2001-2915"
        },
        "2_building_P-PA-PA3050-4505": {
          "displayName": "Next",
          "destination": "2_building_P-PA-PA3050-4505"
        }
      }
    },
    "2_building_P-PA-PA3050-4505": {
      "firstVisit": true,
      "displayName": "Greek literature shelf",
      "description": "Description for shelf Greek literature in Greek literature Room.\n\n[|Previous||] Roman literature shelf\n[|Next||||||] Classical philology shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_P-PA-PA6000-6971": {
          "displayName": "Previous",
          "destination": "2_building_P-PA-PA6000-6971"
        },
        "2_building_P-PA-PA1-199": {
          "displayName": "Next",
          "destination": "2_building_P-PA-PA1-199"
        }
      }
    },
    "2_building_P-PA-PA1-199": {
      "firstVisit": true,
      "displayName": "Classical philology shelf",
      "description": "Description for shelf Classical philology in Greek literature Room.\n\n[|Previous||] Greek literature shelf\n[|Next||||||] Greek philology and language shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_P-PA-PA3050-4505": {
          "displayName": "Previous",
          "destination": "2_building_P-PA-PA3050-4505"
        },
        "2_building_P-PA-PA201-899": {
          "displayName": "Next",
          "destination": "2_building_P-PA-PA201-899"
        }
      }
    },
    "2_building_P-PA-PA201-899": {
      "firstVisit": true,
      "displayName": "Greek philology and language shelf",
      "description": "Description for shelf Greek philology and language in Greek literature Room.\n\n[|Previous||] Classical philology shelf\n[|Next||||||] Byzantine and modern Greek literature shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_P-PA-PA1-199": {
          "displayName": "Previous",
          "destination": "2_building_P-PA-PA1-199"
        },
        "2_building_P-PA-PA5000-5660": {
          "displayName": "Next",
          "destination": "2_building_P-PA-PA5000-5660"
        }
      }
    },
    "2_building_P-PA-PA5000-5660": {
      "firstVisit": true,
      "displayName": "Byzantine and modern Greek literature shelf",
      "description": "Description for shelf Byzantine and modern Greek literature in Greek literature Room.\n\n[|Previous||] Greek philology and language shelf\n[|Next||||||] Medieval and modern Latin literature shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_P-PA-PA201-899": {
          "displayName": "Previous",
          "destination": "2_building_P-PA-PA201-899"
        },
        "2_building_P-PA-PA8001-8595": {
          "displayName": "Next",
          "destination": "2_building_P-PA-PA8001-8595"
        }
      }
    },
    "2_building_P-PA-PA8001-8595": {
      "firstVisit": true,
      "displayName": "Medieval and modern Latin literature shelf",
      "description": "Description for shelf Medieval and modern Latin literature in Greek literature Room.\n\n[|Previous||] Byzantine and modern Greek literature shelf\n[|Next||||||] Classical literature shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_P-PA-PA5000-5660": {
          "displayName": "Previous",
          "destination": "2_building_P-PA-PA5000-5660"
        },
        "2_building_P-PA-PA3000-3049": {
          "displayName": "Next",
          "destination": "2_building_P-PA-PA3000-3049"
        }
      }
    },
    "2_building_P-PA-PA3000-3049": {
      "firstVisit": true,
      "displayName": "Classical literature shelf",
      "description": "Description for shelf Classical literature in Greek literature Room.\n\n[|Previous||] Medieval and modern Latin literature shelf\n[|Next||||||] Medieval and modern Greek language shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_P-PA-PA8001-8595": {
          "displayName": "Previous",
          "destination": "2_building_P-PA-PA8001-8595"
        },
        "2_building_P-PA-PA1000-1179": {
          "displayName": "Next",
          "destination": "2_building_P-PA-PA1000-1179"
        }
      }
    },
    "2_building_P-PA-PA1000-1179": {
      "firstVisit": true,
      "displayName": "Medieval and modern Greek language shelf",
      "description": "Description for shelf Medieval and modern Greek language in Greek literature Room.\n\n[|Previous||] Classical literature shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_P-PA-PA3000-3049": {
          "displayName": "Previous",
          "destination": "2_building_P-PA-PA3000-3049"
        }
      }
    },
    "2_building_P-PA": {
      "firstVisit": true,
      "displayName": "Greek literature Room entrance",
      "description": "This room has nine shelves organized linearly from the entrance towards the back. The first shelf you can see is Latin philology and language. You can exit to the floor foyer.\n\n[|Shelf|||||] Latin philology and language shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_P-PA-PA2001-2915": {
          "displayName": "Shelf",
          "destination": "2_building_P-PA-PA2001-2915"
        },
        "2_building_P": {
          "displayName": "Exit",
          "destination": "2_building_P"
        }
      }
    },
    "2_building_P-PC-PC1-5498": {
      "firstVisit": true,
      "displayName": "Romance shelf",
      "description": "Description for shelf Romance in Romance Room.\n\n[|Entrance||] Romance Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_P-PC": {
          "displayName": "Entrance",
          "destination": "2_building_P-PC"
        }
      }
    },
    "2_building_P-PC": {
      "firstVisit": true,
      "displayName": "Romance Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Romance. You can exit to the floor foyer.\n\n[|Shelf|||||] Romance shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_P-PC-PC1-5498": {
          "displayName": "Shelf",
          "destination": "2_building_P-PC-PC1-5498"
        },
        "2_building_P": {
          "displayName": "Exit",
          "destination": "2_building_P"
        }
      }
    },
    "2_building_P-PK-PK1-9601": {
      "firstVisit": true,
      "displayName": "Indo-Iranian philology and literature shelf",
      "description": "Description for shelf Indo-Iranian philology and literature in Indo-Iranian philology and literature Room.\n\n[|Entrance||] Indo-Iranian philology and literature Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_P-PK": {
          "displayName": "Entrance",
          "destination": "2_building_P-PK"
        }
      }
    },
    "2_building_P-PK": {
      "firstVisit": true,
      "displayName": "Indo-Iranian philology and literature Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Indo-Iranian philology and literature. You can exit to the floor foyer.\n\n[|Shelf|||||] Indo-Iranian philology and literature shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_P-PK-PK1-9601": {
          "displayName": "Shelf",
          "destination": "2_building_P-PK-PK1-9601"
        },
        "2_building_P": {
          "displayName": "Exit",
          "destination": "2_building_P"
        }
      }
    },
    "2_building_P-P-P1-1091": {
      "firstVisit": true,
      "displayName": "Philology.    Linguistics shelf",
      "description": "Description for shelf Philology.    Linguistics in Philology.    Linguistics Room.\n\n[|Entrance||] Philology.    Linguistics Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_P-P": {
          "displayName": "Entrance",
          "destination": "2_building_P-P"
        }
      }
    },
    "2_building_P-P": {
      "firstVisit": true,
      "displayName": "Philology.    Linguistics Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Philology.    Linguistics. You can exit to the floor foyer.\n\n[|Shelf|||||] Philology.    Linguistics shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_P-P-P1-1091": {
          "displayName": "Shelf",
          "destination": "2_building_P-P-P1-1091"
        },
        "2_building_P": {
          "displayName": "Exit",
          "destination": "2_building_P"
        }
      }
    },
    "2_building_P-PF-PF1-5999": {
      "firstVisit": true,
      "displayName": "West Germanic shelf",
      "description": "Description for shelf West Germanic in West Germanic Room.\n\n[|Entrance||] West Germanic Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_P-PF": {
          "displayName": "Entrance",
          "destination": "2_building_P-PF"
        }
      }
    },
    "2_building_P-PF": {
      "firstVisit": true,
      "displayName": "West Germanic Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is West Germanic. You can exit to the floor foyer.\n\n[|Shelf|||||] West Germanic shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_P-PF-PF1-5999": {
          "displayName": "Shelf",
          "destination": "2_building_P-PF-PF1-5999"
        },
        "2_building_P": {
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
        "2_building_P-PT": {
          "displayName": "South",
          "destination": "2_building_P-PT"
        },
        "2_building_P-PA": {
          "displayName": "North",
          "destination": "2_building_P-PA"
        },
        "2_building_P-PC": {
          "displayName": "SouthEast",
          "destination": "2_building_P-PC"
        },
        "2_building_P-PK": {
          "displayName": "NorthWest",
          "destination": "2_building_P-PK"
        },
        "2_building_P-P": {
          "displayName": "SouthWest",
          "destination": "2_building_P-P"
        },
        "2_building_P-PF": {
          "displayName": "NorthEast",
          "destination": "2_building_P-PF"
        },
        "building_P": {
          "displayName": "Down",
          "destination": "building_P"
        },
        "3_building_P": {
          "displayName": "Up",
          "destination": "3_building_P"
        }
      }
    },
    "3_building_P-PJ-PJ1-9500": {
      "firstVisit": true,
      "displayName": "Oriental philology and literature shelf",
      "description": "Description for shelf Oriental philology and literature in Oriental philology and literature Room.\n\n[|Entrance||] Oriental philology and literature Room entrance\n[|Next||||||] General shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_P-PJ": {
          "displayName": "Entrance",
          "destination": "3_building_P-PJ"
        },
        "3_building_P-PJ-PJ1-489": {
          "displayName": "Next",
          "destination": "3_building_P-PJ-PJ1-489"
        }
      }
    },
    "3_building_P-PJ-PJ1-489": {
      "firstVisit": true,
      "displayName": "General shelf",
      "description": "Description for shelf General in Oriental philology and literature Room.\n\n[|Previous||] Oriental philology and literature shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_P-PJ-PJ1-9500": {
          "displayName": "Previous",
          "destination": "3_building_P-PJ-PJ1-9500"
        }
      }
    },
    "3_building_P-PJ": {
      "firstVisit": true,
      "displayName": "Oriental philology and literature Room entrance",
      "description": "This room has two shelves organized linearly from the entrance towards the back. The first shelf you can see is Oriental philology and literature. You can exit to the floor foyer.\n\n[|Shelf|||||] Oriental philology and literature shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_P-PJ-PJ1-9500": {
          "displayName": "Shelf",
          "destination": "3_building_P-PJ-PJ1-9500"
        },
        "3_building_P": {
          "displayName": "Exit",
          "destination": "3_building_P"
        }
      }
    },
    "3_building_P-PD-PD1-7159": {
      "firstVisit": true,
      "displayName": "Germanic shelf",
      "description": "Description for shelf Germanic in Germanic Room.\n\n[|Entrance||] Germanic Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_P-PD": {
          "displayName": "Entrance",
          "destination": "3_building_P-PD"
        }
      }
    },
    "3_building_P-PD": {
      "firstVisit": true,
      "displayName": "Germanic Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Germanic. You can exit to the floor foyer.\n\n[|Shelf|||||] Germanic shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_P-PD-PD1-7159": {
          "displayName": "Shelf",
          "destination": "3_building_P-PD-PD1-7159"
        },
        "3_building_P": {
          "displayName": "Exit",
          "destination": "3_building_P"
        }
      }
    },
    "3_building_P-PG-PG1-7925": {
      "firstVisit": true,
      "displayName": "Slavic shelf",
      "description": "Description for shelf Slavic in Slavic.    Baltic.    Albanian Room.\n\n[|Entrance||] Slavic.    Baltic.    Albanian Room entrance\n[|Next||||||] Slavic.    Baltic.    Albanian shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_P-PG": {
          "displayName": "Entrance",
          "destination": "3_building_P-PG"
        },
        "3_building_P-PG-PG1-9665": {
          "displayName": "Next",
          "destination": "3_building_P-PG-PG1-9665"
        }
      }
    },
    "3_building_P-PG-PG1-9665": {
      "firstVisit": true,
      "displayName": "Slavic.    Baltic.    Albanian shelf",
      "description": "Description for shelf Slavic.    Baltic.    Albanian in Slavic.    Baltic.    Albanian Room.\n\n[|Previous||] Slavic shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_P-PG-PG1-7925": {
          "displayName": "Previous",
          "destination": "3_building_P-PG-PG1-7925"
        }
      }
    },
    "3_building_P-PG": {
      "firstVisit": true,
      "displayName": "Slavic.    Baltic.    Albanian Room entrance",
      "description": "This room has two shelves organized linearly from the entrance towards the back. The first shelf you can see is Slavic. You can exit to the floor foyer.\n\n[|Shelf|||||] Slavic shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_P-PG-PG1-7925": {
          "displayName": "Shelf",
          "destination": "3_building_P-PG-PG1-7925"
        },
        "3_building_P": {
          "displayName": "Exit",
          "destination": "3_building_P"
        }
      }
    },
    "3_building_P-PH-PH1-5490": {
      "firstVisit": true,
      "displayName": "Uralic.    Basque shelf",
      "description": "Description for shelf Uralic.    Basque in Uralic.    Basque Room.\n\n[|Entrance||] Uralic.    Basque Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_P-PH": {
          "displayName": "Entrance",
          "destination": "3_building_P-PH"
        }
      }
    },
    "3_building_P-PH": {
      "firstVisit": true,
      "displayName": "Uralic.    Basque Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Uralic.    Basque. You can exit to the floor foyer.\n\n[|Shelf|||||] Uralic.    Basque shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_P-PH-PH1-5490": {
          "displayName": "Shelf",
          "destination": "3_building_P-PH-PH1-5490"
        },
        "3_building_P": {
          "displayName": "Exit",
          "destination": "3_building_P"
        }
      }
    },
    "3_building_P-PL-PL1-8844": {
      "firstVisit": true,
      "displayName": "Languages of Eastern Asia, Africa, Oceania shelf",
      "description": "Description for shelf Languages of Eastern Asia, Africa, Oceania in Languages of Eastern Asia, Africa, Oceania Room.\n\n[|Entrance||] Languages of Eastern Asia, Africa, Oceania Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_P-PL": {
          "displayName": "Entrance",
          "destination": "3_building_P-PL"
        }
      }
    },
    "3_building_P-PL": {
      "firstVisit": true,
      "displayName": "Languages of Eastern Asia, Africa, Oceania Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Languages of Eastern Asia, Africa, Oceania. You can exit to the floor foyer.\n\n[|Shelf|||||] Languages of Eastern Asia, Africa, Oceania shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_P-PL-PL1-8844": {
          "displayName": "Shelf",
          "destination": "3_building_P-PL-PL1-8844"
        },
        "3_building_P": {
          "displayName": "Exit",
          "destination": "3_building_P"
        }
      }
    },
    "3_building_P-PB-PB1-3029": {
      "firstVisit": true,
      "displayName": "Modern languages.    Celtic languages shelf",
      "description": "Description for shelf Modern languages.    Celtic languages in Modern languages.    Celtic languages Room.\n\n[|Entrance||] Modern languages.    Celtic languages Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_P-PB": {
          "displayName": "Entrance",
          "destination": "3_building_P-PB"
        }
      }
    },
    "3_building_P-PB": {
      "firstVisit": true,
      "displayName": "Modern languages.    Celtic languages Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Modern languages.    Celtic languages. You can exit to the floor foyer.\n\n[|Shelf|||||] Modern languages.    Celtic languages shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_P-PB-PB1-3029": {
          "displayName": "Shelf",
          "destination": "3_building_P-PB-PB1-3029"
        },
        "3_building_P": {
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
        "3_building_P-PJ": {
          "displayName": "South",
          "destination": "3_building_P-PJ"
        },
        "3_building_P-PD": {
          "displayName": "North",
          "destination": "3_building_P-PD"
        },
        "3_building_P-PG": {
          "displayName": "SouthEast",
          "destination": "3_building_P-PG"
        },
        "3_building_P-PH": {
          "displayName": "NorthWest",
          "destination": "3_building_P-PH"
        },
        "3_building_P-PL": {
          "displayName": "SouthWest",
          "destination": "3_building_P-PL"
        },
        "3_building_P-PB": {
          "displayName": "NorthEast",
          "destination": "3_building_P-PB"
        },
        "2_building_P": {
          "displayName": "Down",
          "destination": "2_building_P"
        },
        "4_building_P": {
          "displayName": "Up",
          "destination": "4_building_P"
        }
      }
    },
    "4_building_P-PM-PM1-9021": {
      "firstVisit": true,
      "displayName": "Hyperborean, Indian, and artificial languages shelf",
      "description": "Description for shelf Hyperborean, Indian, and artificial languages in Hyperborean, Indian, and artificial languages Room.\n\n[|Entrance||] Hyperborean, Indian, and artificial languages Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "4_building_P-PM": {
          "displayName": "Entrance",
          "destination": "4_building_P-PM"
        }
      }
    },
    "4_building_P-PM": {
      "firstVisit": true,
      "displayName": "Hyperborean, Indian, and artificial languages Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Hyperborean, Indian, and artificial languages. You can exit to the floor foyer.\n\n[|Shelf|||||] Hyperborean, Indian, and artificial languages shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "4_building_P-PM-PM1-9021": {
          "displayName": "Shelf",
          "destination": "4_building_P-PM-PM1-9021"
        },
        "4_building_P": {
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
        "4_building_P-PM": {
          "displayName": "South",
          "destination": "4_building_P-PM"
        },
        "3_building_P": {
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
    "building_Q-QR-QR1-502": {
      "firstVisit": true,
      "displayName": "Microbiology shelf",
      "description": "Description for shelf Microbiology in Microbiology Room.\n\n[|Entrance||] Microbiology Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_Q-QR": {
          "displayName": "Entrance",
          "destination": "building_Q-QR"
        }
      }
    },
    "building_Q-QR": {
      "firstVisit": true,
      "displayName": "Microbiology Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Microbiology. You can exit to the floor foyer.\n\n[|Shelf|||||] Microbiology shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_Q-QR-QR1-502": {
          "displayName": "Shelf",
          "destination": "building_Q-QR-QR1-502"
        },
        "building_Q": {
          "displayName": "Exit",
          "destination": "building_Q"
        }
      }
    },
    "building_Q-QK-QK1-989": {
      "firstVisit": true,
      "displayName": "Botany shelf",
      "description": "Description for shelf Botany in Botany Room.\n\n[|Entrance||] Botany Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_Q-QK": {
          "displayName": "Entrance",
          "destination": "building_Q-QK"
        }
      }
    },
    "building_Q-QK": {
      "firstVisit": true,
      "displayName": "Botany Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Botany. You can exit to the floor foyer.\n\n[|Shelf|||||] Botany shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_Q-QK-QK1-989": {
          "displayName": "Shelf",
          "destination": "building_Q-QK-QK1-989"
        },
        "building_Q": {
          "displayName": "Exit",
          "destination": "building_Q"
        }
      }
    },
    "building_Q-QL-QL1-991": {
      "firstVisit": true,
      "displayName": "Zoology shelf",
      "description": "Description for shelf Zoology in Zoology Room.\n\n[|Entrance||] Zoology Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_Q-QL": {
          "displayName": "Entrance",
          "destination": "building_Q-QL"
        }
      }
    },
    "building_Q-QL": {
      "firstVisit": true,
      "displayName": "Zoology Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Zoology. You can exit to the floor foyer.\n\n[|Shelf|||||] Zoology shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_Q-QL-QL1-991": {
          "displayName": "Shelf",
          "destination": "building_Q-QL-QL1-991"
        },
        "building_Q": {
          "displayName": "Exit",
          "destination": "building_Q"
        }
      }
    },
    "building_Q-QB-QB1-991": {
      "firstVisit": true,
      "displayName": "Astronomy shelf",
      "description": "Description for shelf Astronomy in Astronomy Room.\n\n[|Entrance||] Astronomy Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_Q-QB": {
          "displayName": "Entrance",
          "destination": "building_Q-QB"
        }
      }
    },
    "building_Q-QB": {
      "firstVisit": true,
      "displayName": "Astronomy Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Astronomy. You can exit to the floor foyer.\n\n[|Shelf|||||] Astronomy shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_Q-QB-QB1-991": {
          "displayName": "Shelf",
          "destination": "building_Q-QB-QB1-991"
        },
        "building_Q": {
          "displayName": "Exit",
          "destination": "building_Q"
        }
      }
    },
    "building_Q-QA-QA1-939": {
      "firstVisit": true,
      "displayName": "Mathematics shelf",
      "description": "Description for shelf Mathematics in Mathematics Room.\n\n[|Entrance||] Mathematics Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_Q-QA": {
          "displayName": "Entrance",
          "destination": "building_Q-QA"
        }
      }
    },
    "building_Q-QA": {
      "firstVisit": true,
      "displayName": "Mathematics Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Mathematics. You can exit to the floor foyer.\n\n[|Shelf|||||] Mathematics shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_Q-QA-QA1-939": {
          "displayName": "Shelf",
          "destination": "building_Q-QA-QA1-939"
        },
        "building_Q": {
          "displayName": "Exit",
          "destination": "building_Q"
        }
      }
    },
    "building_Q-Q-Q1-390": {
      "firstVisit": true,
      "displayName": "Science (General) shelf",
      "description": "Description for shelf Science (General) in Science (General) Room.\n\n[|Entrance||] Science (General) Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_Q-Q": {
          "displayName": "Entrance",
          "destination": "building_Q-Q"
        }
      }
    },
    "building_Q-Q": {
      "firstVisit": true,
      "displayName": "Science (General) Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Science (General). You can exit to the floor foyer.\n\n[|Shelf|||||] Science (General) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_Q-Q-Q1-390": {
          "displayName": "Shelf",
          "destination": "building_Q-Q-Q1-390"
        },
        "building_Q": {
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
        },
        "2_building_Q": {
          "displayName": "Up",
          "destination": "2_building_Q"
        }
      }
    },
    "2_building_Q-QP-QP1-981": {
      "firstVisit": true,
      "displayName": "Physiology shelf",
      "description": "Description for shelf Physiology in Physiology Room.\n\n[|Entrance||] Physiology Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_Q-QP": {
          "displayName": "Entrance",
          "destination": "2_building_Q-QP"
        }
      }
    },
    "2_building_Q-QP": {
      "firstVisit": true,
      "displayName": "Physiology Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Physiology. You can exit to the floor foyer.\n\n[|Shelf|||||] Physiology shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_Q-QP-QP1-981": {
          "displayName": "Shelf",
          "destination": "2_building_Q-QP-QP1-981"
        },
        "2_building_Q": {
          "displayName": "Exit",
          "destination": "2_building_Q"
        }
      }
    },
    "2_building_Q-QH-QH1-278.5": {
      "firstVisit": true,
      "displayName": "Natural history (General) shelf",
      "description": "Description for shelf Natural history (General) in Biology (General) Room.\n\n[|Entrance||] Biology (General) Room entrance\n[|Next||||||] Biology (General) shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_Q-QH": {
          "displayName": "Entrance",
          "destination": "2_building_Q-QH"
        },
        "2_building_Q-QH-QH301-705.5": {
          "displayName": "Next",
          "destination": "2_building_Q-QH-QH301-705.5"
        }
      }
    },
    "2_building_Q-QH-QH301-705.5": {
      "firstVisit": true,
      "displayName": "Biology (General) shelf",
      "description": "Description for shelf Biology (General) in Biology (General) Room.\n\n[|Previous||] Natural history (General) shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_Q-QH-QH1-278.5": {
          "displayName": "Previous",
          "destination": "2_building_Q-QH-QH1-278.5"
        }
      }
    },
    "2_building_Q-QH": {
      "firstVisit": true,
      "displayName": "Biology (General) Room entrance",
      "description": "This room has two shelves organized linearly from the entrance towards the back. The first shelf you can see is Natural history (General). You can exit to the floor foyer.\n\n[|Shelf|||||] Natural history (General) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_Q-QH-QH1-278.5": {
          "displayName": "Shelf",
          "destination": "2_building_Q-QH-QH1-278.5"
        },
        "2_building_Q": {
          "displayName": "Exit",
          "destination": "2_building_Q"
        }
      }
    },
    "2_building_Q-QD-QD1-999": {
      "firstVisit": true,
      "displayName": "Chemistry shelf",
      "description": "Description for shelf Chemistry in Chemistry Room.\n\n[|Entrance||] Chemistry Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_Q-QD": {
          "displayName": "Entrance",
          "destination": "2_building_Q-QD"
        }
      }
    },
    "2_building_Q-QD": {
      "firstVisit": true,
      "displayName": "Chemistry Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Chemistry. You can exit to the floor foyer.\n\n[|Shelf|||||] Chemistry shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_Q-QD-QD1-999": {
          "displayName": "Shelf",
          "destination": "2_building_Q-QD-QD1-999"
        },
        "2_building_Q": {
          "displayName": "Exit",
          "destination": "2_building_Q"
        }
      }
    },
    "2_building_Q-QE-QE1-996.5": {
      "firstVisit": true,
      "displayName": "Geology shelf",
      "description": "Description for shelf Geology in Geology Room.\n\n[|Entrance||] Geology Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_Q-QE": {
          "displayName": "Entrance",
          "destination": "2_building_Q-QE"
        }
      }
    },
    "2_building_Q-QE": {
      "firstVisit": true,
      "displayName": "Geology Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Geology. You can exit to the floor foyer.\n\n[|Shelf|||||] Geology shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_Q-QE-QE1-996.5": {
          "displayName": "Shelf",
          "destination": "2_building_Q-QE-QE1-996.5"
        },
        "2_building_Q": {
          "displayName": "Exit",
          "destination": "2_building_Q"
        }
      }
    },
    "2_building_Q-QC-QC1-999": {
      "firstVisit": true,
      "displayName": "Physics shelf",
      "description": "Description for shelf Physics in Physics Room.\n\n[|Entrance||] Physics Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_Q-QC": {
          "displayName": "Entrance",
          "destination": "2_building_Q-QC"
        }
      }
    },
    "2_building_Q-QC": {
      "firstVisit": true,
      "displayName": "Physics Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Physics. You can exit to the floor foyer.\n\n[|Shelf|||||] Physics shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_Q-QC-QC1-999": {
          "displayName": "Shelf",
          "destination": "2_building_Q-QC-QC1-999"
        },
        "2_building_Q": {
          "displayName": "Exit",
          "destination": "2_building_Q"
        }
      }
    },
    "2_building_Q-QM-QM1-695": {
      "firstVisit": true,
      "displayName": "Human anatomy shelf",
      "description": "Description for shelf Human anatomy in Human anatomy Room.\n\n[|Entrance||] Human anatomy Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_Q-QM": {
          "displayName": "Entrance",
          "destination": "2_building_Q-QM"
        }
      }
    },
    "2_building_Q-QM": {
      "firstVisit": true,
      "displayName": "Human anatomy Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Human anatomy. You can exit to the floor foyer.\n\n[|Shelf|||||] Human anatomy shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_Q-QM-QM1-695": {
          "displayName": "Shelf",
          "destination": "2_building_Q-QM-QM1-695"
        },
        "2_building_Q": {
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
        "2_building_Q-QP": {
          "displayName": "South",
          "destination": "2_building_Q-QP"
        },
        "2_building_Q-QH": {
          "displayName": "North",
          "destination": "2_building_Q-QH"
        },
        "2_building_Q-QD": {
          "displayName": "SouthEast",
          "destination": "2_building_Q-QD"
        },
        "2_building_Q-QE": {
          "displayName": "NorthWest",
          "destination": "2_building_Q-QE"
        },
        "2_building_Q-QC": {
          "displayName": "SouthWest",
          "destination": "2_building_Q-QC"
        },
        "2_building_Q-QM": {
          "displayName": "NorthEast",
          "destination": "2_building_Q-QM"
        },
        "building_Q": {
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
    "building_R-RX-RX1-681": {
      "firstVisit": true,
      "displayName": "Homeopathy shelf",
      "description": "Description for shelf Homeopathy in Homeopathy Room.\n\n[|Entrance||] Homeopathy Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_R-RX": {
          "displayName": "Entrance",
          "destination": "building_R-RX"
        }
      }
    },
    "building_R-RX": {
      "firstVisit": true,
      "displayName": "Homeopathy Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Homeopathy. You can exit to the floor foyer.\n\n[|Shelf|||||] Homeopathy shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_R-RX-RX1-681": {
          "displayName": "Shelf",
          "destination": "building_R-RX-RX1-681"
        },
        "building_R": {
          "displayName": "Exit",
          "destination": "building_R"
        }
      }
    },
    "building_R-RA-RA1-1270": {
      "firstVisit": true,
      "displayName": "Public aspects of medicine shelf",
      "description": "Description for shelf Public aspects of medicine in Public aspects of medicine Room.\n\n[|Entrance||] Public aspects of medicine Room entrance\n[|Next||||||] Medicine and the state shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_R-RA": {
          "displayName": "Entrance",
          "destination": "building_R-RA"
        },
        "building_R-RA-RA1-418.5": {
          "displayName": "Next",
          "destination": "building_R-RA-RA1-418.5"
        }
      }
    },
    "building_R-RA-RA1-418.5": {
      "firstVisit": true,
      "displayName": "Medicine and the state shelf",
      "description": "Description for shelf Medicine and the state in Public aspects of medicine Room.\n\n[|Previous||] Public aspects of medicine shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_R-RA-RA1-1270": {
          "displayName": "Previous",
          "destination": "building_R-RA-RA1-1270"
        }
      }
    },
    "building_R-RA": {
      "firstVisit": true,
      "displayName": "Public aspects of medicine Room entrance",
      "description": "This room has two shelves organized linearly from the entrance towards the back. The first shelf you can see is Public aspects of medicine. You can exit to the floor foyer.\n\n[|Shelf|||||] Public aspects of medicine shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_R-RA-RA1-1270": {
          "displayName": "Shelf",
          "destination": "building_R-RA-RA1-1270"
        },
        "building_R": {
          "displayName": "Exit",
          "destination": "building_R"
        }
      }
    },
    "building_R-RD-RD1-811": {
      "firstVisit": true,
      "displayName": "Surgery shelf",
      "description": "Description for shelf Surgery in Surgery Room.\n\n[|Entrance||] Surgery Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_R-RD": {
          "displayName": "Entrance",
          "destination": "building_R-RD"
        }
      }
    },
    "building_R-RD": {
      "firstVisit": true,
      "displayName": "Surgery Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Surgery. You can exit to the floor foyer.\n\n[|Shelf|||||] Surgery shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_R-RD-RD1-811": {
          "displayName": "Shelf",
          "destination": "building_R-RD-RD1-811"
        },
        "building_R": {
          "displayName": "Exit",
          "destination": "building_R"
        }
      }
    },
    "building_R-RE-RE1-994": {
      "firstVisit": true,
      "displayName": "Ophthalmology shelf",
      "description": "Description for shelf Ophthalmology in Ophthalmology Room.\n\n[|Entrance||] Ophthalmology Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_R-RE": {
          "displayName": "Entrance",
          "destination": "building_R-RE"
        }
      }
    },
    "building_R-RE": {
      "firstVisit": true,
      "displayName": "Ophthalmology Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Ophthalmology. You can exit to the floor foyer.\n\n[|Shelf|||||] Ophthalmology shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_R-RE-RE1-994": {
          "displayName": "Shelf",
          "destination": "building_R-RE-RE1-994"
        },
        "building_R": {
          "displayName": "Exit",
          "destination": "building_R"
        }
      }
    },
    "building_R-RC-RC31-1245": {
      "firstVisit": true,
      "displayName": "Internal medicine shelf",
      "description": "Description for shelf Internal medicine in Internal medicine Room.\n\n[|Entrance||] Internal medicine Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_R-RC": {
          "displayName": "Entrance",
          "destination": "building_R-RC"
        }
      }
    },
    "building_R-RC": {
      "firstVisit": true,
      "displayName": "Internal medicine Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Internal medicine. You can exit to the floor foyer.\n\n[|Shelf|||||] Internal medicine shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_R-RC-RC31-1245": {
          "displayName": "Shelf",
          "destination": "building_R-RC-RC31-1245"
        },
        "building_R": {
          "displayName": "Exit",
          "destination": "building_R"
        }
      }
    },
    "building_R-RG-RG1-991": {
      "firstVisit": true,
      "displayName": "Gynecology and obstetrics shelf",
      "description": "Description for shelf Gynecology and obstetrics in Gynecology and obstetrics Room.\n\n[|Entrance||] Gynecology and obstetrics Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_R-RG": {
          "displayName": "Entrance",
          "destination": "building_R-RG"
        }
      }
    },
    "building_R-RG": {
      "firstVisit": true,
      "displayName": "Gynecology and obstetrics Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Gynecology and obstetrics. You can exit to the floor foyer.\n\n[|Shelf|||||] Gynecology and obstetrics shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_R-RG-RG1-991": {
          "displayName": "Shelf",
          "destination": "building_R-RG-RG1-991"
        },
        "building_R": {
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
        },
        "2_building_R": {
          "displayName": "Up",
          "destination": "2_building_R"
        }
      }
    },
    "2_building_R-RK-RK1-715": {
      "firstVisit": true,
      "displayName": "Dentistry shelf",
      "description": "Description for shelf Dentistry in Dentistry Room.\n\n[|Entrance||] Dentistry Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_R-RK": {
          "displayName": "Entrance",
          "destination": "2_building_R-RK"
        }
      }
    },
    "2_building_R-RK": {
      "firstVisit": true,
      "displayName": "Dentistry Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Dentistry. You can exit to the floor foyer.\n\n[|Shelf|||||] Dentistry shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_R-RK-RK1-715": {
          "displayName": "Shelf",
          "destination": "2_building_R-RK-RK1-715"
        },
        "2_building_R": {
          "displayName": "Exit",
          "destination": "2_building_R"
        }
      }
    },
    "2_building_R-RJ-RJ1-570": {
      "firstVisit": true,
      "displayName": "Pediatrics shelf",
      "description": "Description for shelf Pediatrics in Pediatrics Room.\n\n[|Entrance||] Pediatrics Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_R-RJ": {
          "displayName": "Entrance",
          "destination": "2_building_R-RJ"
        }
      }
    },
    "2_building_R-RJ": {
      "firstVisit": true,
      "displayName": "Pediatrics Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Pediatrics. You can exit to the floor foyer.\n\n[|Shelf|||||] Pediatrics shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_R-RJ-RJ1-570": {
          "displayName": "Shelf",
          "destination": "2_building_R-RJ-RJ1-570"
        },
        "2_building_R": {
          "displayName": "Exit",
          "destination": "2_building_R"
        }
      }
    },
    "2_building_R-RL-RL1-803": {
      "firstVisit": true,
      "displayName": "Dermatology shelf",
      "description": "Description for shelf Dermatology in Dermatology Room.\n\n[|Entrance||] Dermatology Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_R-RL": {
          "displayName": "Entrance",
          "destination": "2_building_R-RL"
        }
      }
    },
    "2_building_R-RL": {
      "firstVisit": true,
      "displayName": "Dermatology Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Dermatology. You can exit to the floor foyer.\n\n[|Shelf|||||] Dermatology shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_R-RL-RL1-803": {
          "displayName": "Shelf",
          "destination": "2_building_R-RL-RL1-803"
        },
        "2_building_R": {
          "displayName": "Exit",
          "destination": "2_building_R"
        }
      }
    },
    "2_building_R-RS-RS1-441": {
      "firstVisit": true,
      "displayName": "Pharmacy and materia medica shelf",
      "description": "Description for shelf Pharmacy and materia medica in Pharmacy and materia medica Room.\n\n[|Entrance||] Pharmacy and materia medica Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_R-RS": {
          "displayName": "Entrance",
          "destination": "2_building_R-RS"
        }
      }
    },
    "2_building_R-RS": {
      "firstVisit": true,
      "displayName": "Pharmacy and materia medica Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Pharmacy and materia medica. You can exit to the floor foyer.\n\n[|Shelf|||||] Pharmacy and materia medica shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_R-RS-RS1-441": {
          "displayName": "Shelf",
          "destination": "2_building_R-RS-RS1-441"
        },
        "2_building_R": {
          "displayName": "Exit",
          "destination": "2_building_R"
        }
      }
    },
    "2_building_R-RM-RM1-950": {
      "firstVisit": true,
      "displayName": "Therapeutics.    Pharmacology shelf",
      "description": "Description for shelf Therapeutics.    Pharmacology in Therapeutics.    Pharmacology Room.\n\n[|Entrance||] Therapeutics.    Pharmacology Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_R-RM": {
          "displayName": "Entrance",
          "destination": "2_building_R-RM"
        }
      }
    },
    "2_building_R-RM": {
      "firstVisit": true,
      "displayName": "Therapeutics.    Pharmacology Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Therapeutics.    Pharmacology. You can exit to the floor foyer.\n\n[|Shelf|||||] Therapeutics.    Pharmacology shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_R-RM-RM1-950": {
          "displayName": "Shelf",
          "destination": "2_building_R-RM-RM1-950"
        },
        "2_building_R": {
          "displayName": "Exit",
          "destination": "2_building_R"
        }
      }
    },
    "2_building_R-R-R5-920": {
      "firstVisit": true,
      "displayName": "Medicine (General) shelf",
      "description": "Description for shelf Medicine (General) in Medicine (General) Room.\n\n[|Entrance||] Medicine (General) Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_R-R": {
          "displayName": "Entrance",
          "destination": "2_building_R-R"
        }
      }
    },
    "2_building_R-R": {
      "firstVisit": true,
      "displayName": "Medicine (General) Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Medicine (General). You can exit to the floor foyer.\n\n[|Shelf|||||] Medicine (General) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_R-R-R5-920": {
          "displayName": "Shelf",
          "destination": "2_building_R-R-R5-920"
        },
        "2_building_R": {
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
        "2_building_R-RK": {
          "displayName": "South",
          "destination": "2_building_R-RK"
        },
        "2_building_R-RJ": {
          "displayName": "North",
          "destination": "2_building_R-RJ"
        },
        "2_building_R-RL": {
          "displayName": "SouthEast",
          "destination": "2_building_R-RL"
        },
        "2_building_R-RS": {
          "displayName": "NorthWest",
          "destination": "2_building_R-RS"
        },
        "2_building_R-RM": {
          "displayName": "SouthWest",
          "destination": "2_building_R-RM"
        },
        "2_building_R-R": {
          "displayName": "NorthEast",
          "destination": "2_building_R-R"
        },
        "building_R": {
          "displayName": "Down",
          "destination": "building_R"
        },
        "3_building_R": {
          "displayName": "Up",
          "destination": "3_building_R"
        }
      }
    },
    "3_building_R-RB-RB1-214": {
      "firstVisit": true,
      "displayName": "Pathology shelf",
      "description": "Description for shelf Pathology in Pathology Room.\n\n[|Entrance||] Pathology Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_R-RB": {
          "displayName": "Entrance",
          "destination": "3_building_R-RB"
        }
      }
    },
    "3_building_R-RB": {
      "firstVisit": true,
      "displayName": "Pathology Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Pathology. You can exit to the floor foyer.\n\n[|Shelf|||||] Pathology shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_R-RB-RB1-214": {
          "displayName": "Shelf",
          "destination": "3_building_R-RB-RB1-214"
        },
        "3_building_R": {
          "displayName": "Exit",
          "destination": "3_building_R"
        }
      }
    },
    "3_building_R-RF-RF1-547": {
      "firstVisit": true,
      "displayName": "Otorhinolaryngology shelf",
      "description": "Description for shelf Otorhinolaryngology in Otorhinolaryngology Room.\n\n[|Entrance||] Otorhinolaryngology Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_R-RF": {
          "displayName": "Entrance",
          "destination": "3_building_R-RF"
        }
      }
    },
    "3_building_R-RF": {
      "firstVisit": true,
      "displayName": "Otorhinolaryngology Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Otorhinolaryngology. You can exit to the floor foyer.\n\n[|Shelf|||||] Otorhinolaryngology shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_R-RF-RF1-547": {
          "displayName": "Shelf",
          "destination": "3_building_R-RF-RF1-547"
        },
        "3_building_R": {
          "displayName": "Exit",
          "destination": "3_building_R"
        }
      }
    },
    "3_building_R-RZ-RZ201-999": {
      "firstVisit": true,
      "displayName": "Other systems of medicine shelf",
      "description": "Description for shelf Other systems of medicine in Other systems of medicine Room.\n\n[|Entrance||] Other systems of medicine Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_R-RZ": {
          "displayName": "Entrance",
          "destination": "3_building_R-RZ"
        }
      }
    },
    "3_building_R-RZ": {
      "firstVisit": true,
      "displayName": "Other systems of medicine Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Other systems of medicine. You can exit to the floor foyer.\n\n[|Shelf|||||] Other systems of medicine shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_R-RZ-RZ201-999": {
          "displayName": "Shelf",
          "destination": "3_building_R-RZ-RZ201-999"
        },
        "3_building_R": {
          "displayName": "Exit",
          "destination": "3_building_R"
        }
      }
    },
    "3_building_R-RT-RT1-120": {
      "firstVisit": true,
      "displayName": "Nursing shelf",
      "description": "Description for shelf Nursing in Nursing Room.\n\n[|Entrance||] Nursing Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_R-RT": {
          "displayName": "Entrance",
          "destination": "3_building_R-RT"
        }
      }
    },
    "3_building_R-RT": {
      "firstVisit": true,
      "displayName": "Nursing Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Nursing. You can exit to the floor foyer.\n\n[|Shelf|||||] Nursing shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_R-RT-RT1-120": {
          "displayName": "Shelf",
          "destination": "3_building_R-RT-RT1-120"
        },
        "3_building_R": {
          "displayName": "Exit",
          "destination": "3_building_R"
        }
      }
    },
    "3_building_R-RV-RV1-431": {
      "firstVisit": true,
      "displayName": "Botanic, Thomsonian, and eclectic medicine shelf",
      "description": "Description for shelf Botanic, Thomsonian, and eclectic medicine in Botanic, Thomsonian, and eclectic medicine Room.\n\n[|Entrance||] Botanic, Thomsonian, and eclectic medicine Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_R-RV": {
          "displayName": "Entrance",
          "destination": "3_building_R-RV"
        }
      }
    },
    "3_building_R-RV": {
      "firstVisit": true,
      "displayName": "Botanic, Thomsonian, and eclectic medicine Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Botanic, Thomsonian, and eclectic medicine. You can exit to the floor foyer.\n\n[|Shelf|||||] Botanic, Thomsonian, and eclectic medicine shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_R-RV-RV1-431": {
          "displayName": "Shelf",
          "destination": "3_building_R-RV-RV1-431"
        },
        "3_building_R": {
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
        "3_building_R-RB": {
          "displayName": "South",
          "destination": "3_building_R-RB"
        },
        "3_building_R-RF": {
          "displayName": "North",
          "destination": "3_building_R-RF"
        },
        "3_building_R-RZ": {
          "displayName": "SouthEast",
          "destination": "3_building_R-RZ"
        },
        "3_building_R-RT": {
          "displayName": "NorthWest",
          "destination": "3_building_R-RT"
        },
        "3_building_R-RV": {
          "displayName": "SouthWest",
          "destination": "3_building_R-RV"
        },
        "2_building_R": {
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
    "building_S-SF-SF1-1100": {
      "firstVisit": true,
      "displayName": "Animal culture shelf",
      "description": "Description for shelf Animal culture in Animal culture Room.\n\n[|Entrance||] Animal culture Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_S-SF": {
          "displayName": "Entrance",
          "destination": "building_S-SF"
        }
      }
    },
    "building_S-SF": {
      "firstVisit": true,
      "displayName": "Animal culture Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Animal culture. You can exit to the floor foyer.\n\n[|Shelf|||||] Animal culture shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_S-SF-SF1-1100": {
          "displayName": "Shelf",
          "destination": "building_S-SF-SF1-1100"
        },
        "building_S": {
          "displayName": "Exit",
          "destination": "building_S"
        }
      }
    },
    "building_S-S-S1-972": {
      "firstVisit": true,
      "displayName": "Agriculture (General) shelf",
      "description": "Description for shelf Agriculture (General) in Agriculture (General) Room.\n\n[|Entrance||] Agriculture (General) Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_S-S": {
          "displayName": "Entrance",
          "destination": "building_S-S"
        }
      }
    },
    "building_S-S": {
      "firstVisit": true,
      "displayName": "Agriculture (General) Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Agriculture (General). You can exit to the floor foyer.\n\n[|Shelf|||||] Agriculture (General) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_S-S-S1-972": {
          "displayName": "Shelf",
          "destination": "building_S-S-S1-972"
        },
        "building_S": {
          "displayName": "Exit",
          "destination": "building_S"
        }
      }
    },
    "building_S-SH-SH1-691": {
      "firstVisit": true,
      "displayName": "Aquaculture.    Fisheries.    Angling shelf",
      "description": "Description for shelf Aquaculture.    Fisheries.    Angling in Aquaculture.    Fisheries.    Angling Room.\n\n[|Entrance||] Aquaculture.    Fisheries.    Angling Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_S-SH": {
          "displayName": "Entrance",
          "destination": "building_S-SH"
        }
      }
    },
    "building_S-SH": {
      "firstVisit": true,
      "displayName": "Aquaculture.    Fisheries.    Angling Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Aquaculture.    Fisheries.    Angling. You can exit to the floor foyer.\n\n[|Shelf|||||] Aquaculture.    Fisheries.    Angling shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_S-SH-SH1-691": {
          "displayName": "Shelf",
          "destination": "building_S-SH-SH1-691"
        },
        "building_S": {
          "displayName": "Exit",
          "destination": "building_S"
        }
      }
    },
    "building_S-SB-SB1-1110": {
      "firstVisit": true,
      "displayName": "Plant culture shelf",
      "description": "Description for shelf Plant culture in Plant culture Room.\n\n[|Entrance||] Plant culture Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_S-SB": {
          "displayName": "Entrance",
          "destination": "building_S-SB"
        }
      }
    },
    "building_S-SB": {
      "firstVisit": true,
      "displayName": "Plant culture Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Plant culture. You can exit to the floor foyer.\n\n[|Shelf|||||] Plant culture shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_S-SB-SB1-1110": {
          "displayName": "Shelf",
          "destination": "building_S-SB-SB1-1110"
        },
        "building_S": {
          "displayName": "Exit",
          "destination": "building_S"
        }
      }
    },
    "building_S-SK-SK1-664": {
      "firstVisit": true,
      "displayName": "Hunting sports shelf",
      "description": "Description for shelf Hunting sports in Hunting sports Room.\n\n[|Entrance||] Hunting sports Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_S-SK": {
          "displayName": "Entrance",
          "destination": "building_S-SK"
        }
      }
    },
    "building_S-SK": {
      "firstVisit": true,
      "displayName": "Hunting sports Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Hunting sports. You can exit to the floor foyer.\n\n[|Shelf|||||] Hunting sports shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_S-SK-SK1-664": {
          "displayName": "Shelf",
          "destination": "building_S-SK-SK1-664"
        },
        "building_S": {
          "displayName": "Exit",
          "destination": "building_S"
        }
      }
    },
    "building_S-SD-SD1-669.5": {
      "firstVisit": true,
      "displayName": "Forestry shelf",
      "description": "Description for shelf Forestry in Forestry Room.\n\n[|Entrance||] Forestry Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_S-SD": {
          "displayName": "Entrance",
          "destination": "building_S-SD"
        }
      }
    },
    "building_S-SD": {
      "firstVisit": true,
      "displayName": "Forestry Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Forestry. You can exit to the floor foyer.\n\n[|Shelf|||||] Forestry shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_S-SD-SD1-669.5": {
          "displayName": "Shelf",
          "destination": "building_S-SD-SD1-669.5"
        },
        "building_S": {
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
    "building_T-TN-TN1-997": {
      "firstVisit": true,
      "displayName": "Mining engineering.    Metallurgy shelf",
      "description": "Description for shelf Mining engineering.    Metallurgy in Mining engineering.    Metallurgy Room.\n\n[|Entrance||] Mining engineering.    Metallurgy Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_T-TN": {
          "displayName": "Entrance",
          "destination": "building_T-TN"
        }
      }
    },
    "building_T-TN": {
      "firstVisit": true,
      "displayName": "Mining engineering.    Metallurgy Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Mining engineering.    Metallurgy. You can exit to the floor foyer.\n\n[|Shelf|||||] Mining engineering.    Metallurgy shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_T-TN-TN1-997": {
          "displayName": "Shelf",
          "destination": "building_T-TN-TN1-997"
        },
        "building_T": {
          "displayName": "Exit",
          "destination": "building_T"
        }
      }
    },
    "building_T-TR-TR1-1050": {
      "firstVisit": true,
      "displayName": "Photography shelf",
      "description": "Description for shelf Photography in Photography Room.\n\n[|Entrance||] Photography Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_T-TR": {
          "displayName": "Entrance",
          "destination": "building_T-TR"
        }
      }
    },
    "building_T-TR": {
      "firstVisit": true,
      "displayName": "Photography Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Photography. You can exit to the floor foyer.\n\n[|Shelf|||||] Photography shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_T-TR-TR1-1050": {
          "displayName": "Shelf",
          "destination": "building_T-TR-TR1-1050"
        },
        "building_T": {
          "displayName": "Exit",
          "destination": "building_T"
        }
      }
    },
    "building_T-TC-TC1-978": {
      "firstVisit": true,
      "displayName": "Hydraulic engineering shelf",
      "description": "Description for shelf Hydraulic engineering in Hydraulic engineering Room.\n\n[|Entrance||] Hydraulic engineering Room entrance\n[|Next||||||] Ocean engineering shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_T-TC": {
          "displayName": "Entrance",
          "destination": "building_T-TC"
        },
        "building_T-TC-TC1501-1800": {
          "displayName": "Next",
          "destination": "building_T-TC-TC1501-1800"
        }
      }
    },
    "building_T-TC-TC1501-1800": {
      "firstVisit": true,
      "displayName": "Ocean engineering shelf",
      "description": "Description for shelf Ocean engineering in Hydraulic engineering Room.\n\n[|Previous||] Hydraulic engineering shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_T-TC-TC1-978": {
          "displayName": "Previous",
          "destination": "building_T-TC-TC1-978"
        }
      }
    },
    "building_T-TC": {
      "firstVisit": true,
      "displayName": "Hydraulic engineering Room entrance",
      "description": "This room has two shelves organized linearly from the entrance towards the back. The first shelf you can see is Hydraulic engineering. You can exit to the floor foyer.\n\n[|Shelf|||||] Hydraulic engineering shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_T-TC-TC1-978": {
          "displayName": "Shelf",
          "destination": "building_T-TC-TC1-978"
        },
        "building_T": {
          "displayName": "Exit",
          "destination": "building_T"
        }
      }
    },
    "building_T-TD-TD1-1066": {
      "firstVisit": true,
      "displayName": "Environmental technology.    Sanitary engineering shelf",
      "description": "Description for shelf Environmental technology.    Sanitary engineering in Environmental technology.    Sanitary engineering Room.\n\n[|Entrance||] Environmental technology.    Sanitary engineering Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_T-TD": {
          "displayName": "Entrance",
          "destination": "building_T-TD"
        }
      }
    },
    "building_T-TD": {
      "firstVisit": true,
      "displayName": "Environmental technology.    Sanitary engineering Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Environmental technology.    Sanitary engineering. You can exit to the floor foyer.\n\n[|Shelf|||||] Environmental technology.    Sanitary engineering shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_T-TD-TD1-1066": {
          "displayName": "Shelf",
          "destination": "building_T-TD-TD1-1066"
        },
        "building_T": {
          "displayName": "Exit",
          "destination": "building_T"
        }
      }
    },
    "building_T-TX-TX1-1110": {
      "firstVisit": true,
      "displayName": "Home economics shelf",
      "description": "Description for shelf Home economics in Home economics Room.\n\n[|Entrance||] Home economics Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_T-TX": {
          "displayName": "Entrance",
          "destination": "building_T-TX"
        }
      }
    },
    "building_T-TX": {
      "firstVisit": true,
      "displayName": "Home economics Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Home economics. You can exit to the floor foyer.\n\n[|Shelf|||||] Home economics shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_T-TX-TX1-1110": {
          "displayName": "Shelf",
          "destination": "building_T-TX-TX1-1110"
        },
        "building_T": {
          "displayName": "Exit",
          "destination": "building_T"
        }
      }
    },
    "building_T-TP-TP1-1185": {
      "firstVisit": true,
      "displayName": "Chemical technology shelf",
      "description": "Description for shelf Chemical technology in Chemical technology Room.\n\n[|Entrance||] Chemical technology Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_T-TP": {
          "displayName": "Entrance",
          "destination": "building_T-TP"
        }
      }
    },
    "building_T-TP": {
      "firstVisit": true,
      "displayName": "Chemical technology Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Chemical technology. You can exit to the floor foyer.\n\n[|Shelf|||||] Chemical technology shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_T-TP-TP1-1185": {
          "displayName": "Shelf",
          "destination": "building_T-TP-TP1-1185"
        },
        "building_T": {
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
        },
        "2_building_T": {
          "displayName": "Up",
          "destination": "2_building_T"
        }
      }
    },
    "2_building_T-TK-TK1-9971": {
      "firstVisit": true,
      "displayName": "Electrical engineering.    Electronics.    Nuclear shelf",
      "description": "Description for shelf Electrical engineering.    Electronics.    Nuclear in Electrical engineering.    Electronics.    Nuclear Room.\n\n[|Entrance||] Electrical engineering.    Electronics.    Nuclear Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_T-TK": {
          "displayName": "Entrance",
          "destination": "2_building_T-TK"
        }
      }
    },
    "2_building_T-TK": {
      "firstVisit": true,
      "displayName": "Electrical engineering.    Electronics.    Nuclear Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Electrical engineering.    Electronics.    Nuclear. You can exit to the floor foyer.\n\n[|Shelf|||||] Electrical engineering.    Electronics.    Nuclear shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_T-TK-TK1-9971": {
          "displayName": "Shelf",
          "destination": "2_building_T-TK-TK1-9971"
        },
        "2_building_T": {
          "displayName": "Exit",
          "destination": "2_building_T"
        }
      }
    },
    "2_building_T-TA-TA1-2040": {
      "firstVisit": true,
      "displayName": "Engineering (General).    Civil engineering (General) shelf",
      "description": "Description for shelf Engineering (General).    Civil engineering (General) in Engineering (General).    Civil engineering (General) Room.\n\n[|Entrance||] Engineering (General).    Civil engineering (General) Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_T-TA": {
          "displayName": "Entrance",
          "destination": "2_building_T-TA"
        }
      }
    },
    "2_building_T-TA": {
      "firstVisit": true,
      "displayName": "Engineering (General).    Civil engineering (General) Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Engineering (General).    Civil engineering (General). You can exit to the floor foyer.\n\n[|Shelf|||||] Engineering (General).    Civil engineering (General) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_T-TA-TA1-2040": {
          "displayName": "Shelf",
          "destination": "2_building_T-TA-TA1-2040"
        },
        "2_building_T": {
          "displayName": "Exit",
          "destination": "2_building_T"
        }
      }
    },
    "2_building_T-TS-TS1-2301": {
      "firstVisit": true,
      "displayName": "Manufactures shelf",
      "description": "Description for shelf Manufactures in Manufactures Room.\n\n[|Entrance||] Manufactures Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_T-TS": {
          "displayName": "Entrance",
          "destination": "2_building_T-TS"
        }
      }
    },
    "2_building_T-TS": {
      "firstVisit": true,
      "displayName": "Manufactures Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Manufactures. You can exit to the floor foyer.\n\n[|Shelf|||||] Manufactures shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_T-TS-TS1-2301": {
          "displayName": "Shelf",
          "destination": "2_building_T-TS-TS1-2301"
        },
        "2_building_T": {
          "displayName": "Exit",
          "destination": "2_building_T"
        }
      }
    },
    "2_building_T-TJ-TJ1-1570": {
      "firstVisit": true,
      "displayName": "Mechanical engineering and machinery shelf",
      "description": "Description for shelf Mechanical engineering and machinery in Mechanical engineering and machinery Room.\n\n[|Entrance||] Mechanical engineering and machinery Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_T-TJ": {
          "displayName": "Entrance",
          "destination": "2_building_T-TJ"
        }
      }
    },
    "2_building_T-TJ": {
      "firstVisit": true,
      "displayName": "Mechanical engineering and machinery Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Mechanical engineering and machinery. You can exit to the floor foyer.\n\n[|Shelf|||||] Mechanical engineering and machinery shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_T-TJ-TJ1-1570": {
          "displayName": "Shelf",
          "destination": "2_building_T-TJ-TJ1-1570"
        },
        "2_building_T": {
          "displayName": "Exit",
          "destination": "2_building_T"
        }
      }
    },
    "2_building_T-TT-TT1-999": {
      "firstVisit": true,
      "displayName": "Handicrafts.    Arts and crafts shelf",
      "description": "Description for shelf Handicrafts.    Arts and crafts in Handicrafts.    Arts and crafts Room.\n\n[|Entrance||] Handicrafts.    Arts and crafts Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_T-TT": {
          "displayName": "Entrance",
          "destination": "2_building_T-TT"
        }
      }
    },
    "2_building_T-TT": {
      "firstVisit": true,
      "displayName": "Handicrafts.    Arts and crafts Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Handicrafts.    Arts and crafts. You can exit to the floor foyer.\n\n[|Shelf|||||] Handicrafts.    Arts and crafts shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_T-TT-TT1-999": {
          "displayName": "Shelf",
          "destination": "2_building_T-TT-TT1-999"
        },
        "2_building_T": {
          "displayName": "Exit",
          "destination": "2_building_T"
        }
      }
    },
    "2_building_T-T-T1-995": {
      "firstVisit": true,
      "displayName": "Technology (General) shelf",
      "description": "Description for shelf Technology (General) in Technology (General) Room.\n\n[|Entrance||] Technology (General) Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_T-T": {
          "displayName": "Entrance",
          "destination": "2_building_T-T"
        }
      }
    },
    "2_building_T-T": {
      "firstVisit": true,
      "displayName": "Technology (General) Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Technology (General). You can exit to the floor foyer.\n\n[|Shelf|||||] Technology (General) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_T-T-T1-995": {
          "displayName": "Shelf",
          "destination": "2_building_T-T-T1-995"
        },
        "2_building_T": {
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
        "2_building_T-TK": {
          "displayName": "South",
          "destination": "2_building_T-TK"
        },
        "2_building_T-TA": {
          "displayName": "North",
          "destination": "2_building_T-TA"
        },
        "2_building_T-TS": {
          "displayName": "SouthEast",
          "destination": "2_building_T-TS"
        },
        "2_building_T-TJ": {
          "displayName": "NorthWest",
          "destination": "2_building_T-TJ"
        },
        "2_building_T-TT": {
          "displayName": "SouthWest",
          "destination": "2_building_T-TT"
        },
        "2_building_T-T": {
          "displayName": "NorthEast",
          "destination": "2_building_T-T"
        },
        "building_T": {
          "displayName": "Down",
          "destination": "building_T"
        },
        "3_building_T": {
          "displayName": "Up",
          "destination": "3_building_T"
        }
      }
    },
    "3_building_T-TH-TH1-9745": {
      "firstVisit": true,
      "displayName": "Building construction shelf",
      "description": "Description for shelf Building construction in Building construction Room.\n\n[|Entrance||] Building construction Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_T-TH": {
          "displayName": "Entrance",
          "destination": "3_building_T-TH"
        }
      }
    },
    "3_building_T-TH": {
      "firstVisit": true,
      "displayName": "Building construction Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Building construction. You can exit to the floor foyer.\n\n[|Shelf|||||] Building construction shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_T-TH-TH1-9745": {
          "displayName": "Shelf",
          "destination": "3_building_T-TH-TH1-9745"
        },
        "3_building_T": {
          "displayName": "Exit",
          "destination": "3_building_T"
        }
      }
    },
    "3_building_T-TF-TF1-1620": {
      "firstVisit": true,
      "displayName": "Railroad engineering and operation shelf",
      "description": "Description for shelf Railroad engineering and operation in Railroad engineering and operation Room.\n\n[|Entrance||] Railroad engineering and operation Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_T-TF": {
          "displayName": "Entrance",
          "destination": "3_building_T-TF"
        }
      }
    },
    "3_building_T-TF": {
      "firstVisit": true,
      "displayName": "Railroad engineering and operation Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Railroad engineering and operation. You can exit to the floor foyer.\n\n[|Shelf|||||] Railroad engineering and operation shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_T-TF-TF1-1620": {
          "displayName": "Shelf",
          "destination": "3_building_T-TF-TF1-1620"
        },
        "3_building_T": {
          "displayName": "Exit",
          "destination": "3_building_T"
        }
      }
    },
    "3_building_T-TL-TL1-4050": {
      "firstVisit": true,
      "displayName": "Motor vehicles.    Aeronautics.    Astronautics shelf",
      "description": "Description for shelf Motor vehicles.    Aeronautics.    Astronautics in Motor vehicles.    Aeronautics.    Astronautics Room.\n\n[|Entrance||] Motor vehicles.    Aeronautics.    Astronautics Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_T-TL": {
          "displayName": "Entrance",
          "destination": "3_building_T-TL"
        }
      }
    },
    "3_building_T-TL": {
      "firstVisit": true,
      "displayName": "Motor vehicles.    Aeronautics.    Astronautics Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Motor vehicles.    Aeronautics.    Astronautics. You can exit to the floor foyer.\n\n[|Shelf|||||] Motor vehicles.    Aeronautics.    Astronautics shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_T-TL-TL1-4050": {
          "displayName": "Shelf",
          "destination": "3_building_T-TL-TL1-4050"
        },
        "3_building_T": {
          "displayName": "Exit",
          "destination": "3_building_T"
        }
      }
    },
    "3_building_T-TG-TG1-470": {
      "firstVisit": true,
      "displayName": "Bridge engineering shelf",
      "description": "Description for shelf Bridge engineering in Bridge engineering Room.\n\n[|Entrance||] Bridge engineering Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_T-TG": {
          "displayName": "Entrance",
          "destination": "3_building_T-TG"
        }
      }
    },
    "3_building_T-TG": {
      "firstVisit": true,
      "displayName": "Bridge engineering Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Bridge engineering. You can exit to the floor foyer.\n\n[|Shelf|||||] Bridge engineering shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_T-TG-TG1-470": {
          "displayName": "Shelf",
          "destination": "3_building_T-TG-TG1-470"
        },
        "3_building_T": {
          "displayName": "Exit",
          "destination": "3_building_T"
        }
      }
    },
    "3_building_T-TE-TE1-450": {
      "firstVisit": true,
      "displayName": "Highway engineering.    Roads and pavements shelf",
      "description": "Description for shelf Highway engineering.    Roads and pavements in Highway engineering.    Roads and pavements Room.\n\n[|Entrance||] Highway engineering.    Roads and pavements Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_T-TE": {
          "displayName": "Entrance",
          "destination": "3_building_T-TE"
        }
      }
    },
    "3_building_T-TE": {
      "firstVisit": true,
      "displayName": "Highway engineering.    Roads and pavements Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Highway engineering.    Roads and pavements. You can exit to the floor foyer.\n\n[|Shelf|||||] Highway engineering.    Roads and pavements shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "3_building_T-TE-TE1-450": {
          "displayName": "Shelf",
          "destination": "3_building_T-TE-TE1-450"
        },
        "3_building_T": {
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
        "3_building_T-TH": {
          "displayName": "South",
          "destination": "3_building_T-TH"
        },
        "3_building_T-TF": {
          "displayName": "North",
          "destination": "3_building_T-TF"
        },
        "3_building_T-TL": {
          "displayName": "SouthEast",
          "destination": "3_building_T-TL"
        },
        "3_building_T-TG": {
          "displayName": "NorthWest",
          "destination": "3_building_T-TG"
        },
        "3_building_T-TE": {
          "displayName": "SouthWest",
          "destination": "3_building_T-TE"
        },
        "2_building_T": {
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
    "building_U-U-U1-900": {
      "firstVisit": true,
      "displayName": "Military science (General) shelf",
      "description": "Description for shelf Military science (General) in Military science (General) Room.\n\n[|Entrance||] Military science (General) Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_U-U": {
          "displayName": "Entrance",
          "destination": "building_U-U"
        }
      }
    },
    "building_U-U": {
      "firstVisit": true,
      "displayName": "Military science (General) Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Military science (General). You can exit to the floor foyer.\n\n[|Shelf|||||] Military science (General) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_U-U-U1-900": {
          "displayName": "Shelf",
          "destination": "building_U-U-U1-900"
        },
        "building_U": {
          "displayName": "Exit",
          "destination": "building_U"
        }
      }
    },
    "building_U-UG-UG1-620": {
      "firstVisit": true,
      "displayName": "Military engineering shelf",
      "description": "Description for shelf Military engineering in Air forces.    Air warfare Room.\n\n[|Entrance||] Air forces.    Air warfare Room entrance\n[|Next||||||] Air forces.    Air warfare shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_U-UG": {
          "displayName": "Entrance",
          "destination": "building_U-UG"
        },
        "building_U-UG-UG622-1435": {
          "displayName": "Next",
          "destination": "building_U-UG-UG622-1435"
        }
      }
    },
    "building_U-UG-UG622-1435": {
      "firstVisit": true,
      "displayName": "Air forces.    Air warfare shelf",
      "description": "Description for shelf Air forces.    Air warfare in Air forces.    Air warfare Room.\n\n[|Previous||] Military engineering shelf\n[|Next||||||] Military astronautics.    Space warfare.    Space surveillance shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_U-UG-UG1-620": {
          "displayName": "Previous",
          "destination": "building_U-UG-UG1-620"
        },
        "building_U-UG-UG1500-1530": {
          "displayName": "Next",
          "destination": "building_U-UG-UG1500-1530"
        }
      }
    },
    "building_U-UG-UG1500-1530": {
      "firstVisit": true,
      "displayName": "Military astronautics.    Space warfare.    Space surveillance shelf",
      "description": "Description for shelf Military astronautics.    Space warfare.    Space surveillance in Air forces.    Air warfare Room.\n\n[|Previous||] Air forces.    Air warfare shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_U-UG-UG622-1435": {
          "displayName": "Previous",
          "destination": "building_U-UG-UG622-1435"
        }
      }
    },
    "building_U-UG": {
      "firstVisit": true,
      "displayName": "Air forces.    Air warfare Room entrance",
      "description": "This room has three shelves organized linearly from the entrance towards the back. The first shelf you can see is Military engineering. You can exit to the floor foyer.\n\n[|Shelf|||||] Military engineering shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_U-UG-UG1-620": {
          "displayName": "Shelf",
          "destination": "building_U-UG-UG1-620"
        },
        "building_U": {
          "displayName": "Exit",
          "destination": "building_U"
        }
      }
    },
    "building_U-UA-UA10-997": {
      "firstVisit": true,
      "displayName": "Armies: Organization, distribution, military situation shelf",
      "description": "Description for shelf Armies: Organization, distribution, military situation in Armies: Organization, distribution, military situation Room.\n\n[|Entrance||] Armies: Organization, distribution, military situation Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_U-UA": {
          "displayName": "Entrance",
          "destination": "building_U-UA"
        }
      }
    },
    "building_U-UA": {
      "firstVisit": true,
      "displayName": "Armies: Organization, distribution, military situation Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Armies: Organization, distribution, military situation. You can exit to the floor foyer.\n\n[|Shelf|||||] Armies: Organization, distribution, military situation shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_U-UA-UA10-997": {
          "displayName": "Shelf",
          "destination": "building_U-UA-UA10-997"
        },
        "building_U": {
          "displayName": "Exit",
          "destination": "building_U"
        }
      }
    },
    "building_U-UB-UB1-900": {
      "firstVisit": true,
      "displayName": "Military administration shelf",
      "description": "Description for shelf Military administration in Military administration Room.\n\n[|Entrance||] Military administration Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_U-UB": {
          "displayName": "Entrance",
          "destination": "building_U-UB"
        }
      }
    },
    "building_U-UB": {
      "firstVisit": true,
      "displayName": "Military administration Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Military administration. You can exit to the floor foyer.\n\n[|Shelf|||||] Military administration shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_U-UB-UB1-900": {
          "displayName": "Shelf",
          "destination": "building_U-UB-UB1-900"
        },
        "building_U": {
          "displayName": "Exit",
          "destination": "building_U"
        }
      }
    },
    "building_U-UD-UD1-495": {
      "firstVisit": true,
      "displayName": "Infantry shelf",
      "description": "Description for shelf Infantry in Infantry Room.\n\n[|Entrance||] Infantry Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_U-UD": {
          "displayName": "Entrance",
          "destination": "building_U-UD"
        }
      }
    },
    "building_U-UD": {
      "firstVisit": true,
      "displayName": "Infantry Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Infantry. You can exit to the floor foyer.\n\n[|Shelf|||||] Infantry shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_U-UD-UD1-495": {
          "displayName": "Shelf",
          "destination": "building_U-UD-UD1-495"
        },
        "building_U": {
          "displayName": "Exit",
          "destination": "building_U"
        }
      }
    },
    "building_U-UF-UF1-910": {
      "firstVisit": true,
      "displayName": "Artillery shelf",
      "description": "Description for shelf Artillery in Artillery Room.\n\n[|Entrance||] Artillery Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_U-UF": {
          "displayName": "Entrance",
          "destination": "building_U-UF"
        }
      }
    },
    "building_U-UF": {
      "firstVisit": true,
      "displayName": "Artillery Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Artillery. You can exit to the floor foyer.\n\n[|Shelf|||||] Artillery shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_U-UF-UF1-910": {
          "displayName": "Shelf",
          "destination": "building_U-UF-UF1-910"
        },
        "building_U": {
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
        },
        "2_building_U": {
          "displayName": "Up",
          "destination": "2_building_U"
        }
      }
    },
    "2_building_U-UC-UC10-780": {
      "firstVisit": true,
      "displayName": "Maintenance and transportation shelf",
      "description": "Description for shelf Maintenance and transportation in Maintenance and transportation Room.\n\n[|Entrance||] Maintenance and transportation Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_U-UC": {
          "displayName": "Entrance",
          "destination": "2_building_U-UC"
        }
      }
    },
    "2_building_U-UC": {
      "firstVisit": true,
      "displayName": "Maintenance and transportation Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Maintenance and transportation. You can exit to the floor foyer.\n\n[|Shelf|||||] Maintenance and transportation shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_U-UC-UC10-780": {
          "displayName": "Shelf",
          "destination": "2_building_U-UC-UC10-780"
        },
        "2_building_U": {
          "displayName": "Exit",
          "destination": "2_building_U"
        }
      }
    },
    "2_building_U-UH-UH20-910": {
      "firstVisit": true,
      "displayName": "Other services shelf",
      "description": "Description for shelf Other services in Other services Room.\n\n[|Entrance||] Other services Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_U-UH": {
          "displayName": "Entrance",
          "destination": "2_building_U-UH"
        }
      }
    },
    "2_building_U-UH": {
      "firstVisit": true,
      "displayName": "Other services Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Other services. You can exit to the floor foyer.\n\n[|Shelf|||||] Other services shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_U-UH-UH20-910": {
          "displayName": "Shelf",
          "destination": "2_building_U-UH-UH20-910"
        },
        "2_building_U": {
          "displayName": "Exit",
          "destination": "2_building_U"
        }
      }
    },
    "2_building_U-UE-UE1-500": {
      "firstVisit": true,
      "displayName": "Cavalry.    Armor shelf",
      "description": "Description for shelf Cavalry.    Armor in Cavalry.    Armor Room.\n\n[|Entrance||] Cavalry.    Armor Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_U-UE": {
          "displayName": "Entrance",
          "destination": "2_building_U-UE"
        }
      }
    },
    "2_building_U-UE": {
      "firstVisit": true,
      "displayName": "Cavalry.    Armor Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Cavalry.    Armor. You can exit to the floor foyer.\n\n[|Shelf|||||] Cavalry.    Armor shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_U-UE-UE1-500": {
          "displayName": "Shelf",
          "destination": "2_building_U-UE-UE1-500"
        },
        "2_building_U": {
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
        "2_building_U-UC": {
          "displayName": "South",
          "destination": "2_building_U-UC"
        },
        "2_building_U-UH": {
          "displayName": "North",
          "destination": "2_building_U-UH"
        },
        "2_building_U-UE": {
          "displayName": "SouthEast",
          "destination": "2_building_U-UE"
        },
        "building_U": {
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
    "building_V-VA-VA10-750": {
      "firstVisit": true,
      "displayName": "Navies: Organization, distribution, naval situation shelf",
      "description": "Description for shelf Navies: Organization, distribution, naval situation in Navies: Organization, distribution, naval situation Room.\n\n[|Entrance||] Navies: Organization, distribution, naval situation Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_V-VA": {
          "displayName": "Entrance",
          "destination": "building_V-VA"
        }
      }
    },
    "building_V-VA": {
      "firstVisit": true,
      "displayName": "Navies: Organization, distribution, naval situation Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Navies: Organization, distribution, naval situation. You can exit to the floor foyer.\n\n[|Shelf|||||] Navies: Organization, distribution, naval situation shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_V-VA-VA10-750": {
          "displayName": "Shelf",
          "destination": "building_V-VA-VA10-750"
        },
        "building_V": {
          "displayName": "Exit",
          "destination": "building_V"
        }
      }
    },
    "building_V-VM-VM1-989": {
      "firstVisit": true,
      "displayName": "Naval architecture.    Shipbuilding.    Marine engineering shelf",
      "description": "Description for shelf Naval architecture.    Shipbuilding.    Marine engineering in Naval architecture.    Shipbuilding.    Marine engineering Room.\n\n[|Entrance||] Naval architecture.    Shipbuilding.    Marine engineering Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_V-VM": {
          "displayName": "Entrance",
          "destination": "building_V-VM"
        }
      }
    },
    "building_V-VM": {
      "firstVisit": true,
      "displayName": "Naval architecture.    Shipbuilding.    Marine engineering Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Naval architecture.    Shipbuilding.    Marine engineering. You can exit to the floor foyer.\n\n[|Shelf|||||] Naval architecture.    Shipbuilding.    Marine engineering shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_V-VM-VM1-989": {
          "displayName": "Shelf",
          "destination": "building_V-VM-VM1-989"
        },
        "building_V": {
          "displayName": "Exit",
          "destination": "building_V"
        }
      }
    },
    "building_V-VK-VK1-1661": {
      "firstVisit": true,
      "displayName": "Navigation.    Merchant marine shelf",
      "description": "Description for shelf Navigation.    Merchant marine in Navigation.    Merchant marine Room.\n\n[|Entrance||] Navigation.    Merchant marine Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_V-VK": {
          "displayName": "Entrance",
          "destination": "building_V-VK"
        }
      }
    },
    "building_V-VK": {
      "firstVisit": true,
      "displayName": "Navigation.    Merchant marine Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Navigation.    Merchant marine. You can exit to the floor foyer.\n\n[|Shelf|||||] Navigation.    Merchant marine shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_V-VK-VK1-1661": {
          "displayName": "Shelf",
          "destination": "building_V-VK-VK1-1661"
        },
        "building_V": {
          "displayName": "Exit",
          "destination": "building_V"
        }
      }
    },
    "building_V-VG-VG20-2029": {
      "firstVisit": true,
      "displayName": "Minor services of navies shelf",
      "description": "Description for shelf Minor services of navies in Minor services of navies Room.\n\n[|Entrance||] Minor services of navies Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_V-VG": {
          "displayName": "Entrance",
          "destination": "building_V-VG"
        }
      }
    },
    "building_V-VG": {
      "firstVisit": true,
      "displayName": "Minor services of navies Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Minor services of navies. You can exit to the floor foyer.\n\n[|Shelf|||||] Minor services of navies shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_V-VG-VG20-2029": {
          "displayName": "Shelf",
          "destination": "building_V-VG-VG20-2029"
        },
        "building_V": {
          "displayName": "Exit",
          "destination": "building_V"
        }
      }
    },
    "building_V-V-V1-995": {
      "firstVisit": true,
      "displayName": "Naval science (General) shelf",
      "description": "Description for shelf Naval science (General) in Naval science (General) Room.\n\n[|Entrance||] Naval science (General) Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_V-V": {
          "displayName": "Entrance",
          "destination": "building_V-V"
        }
      }
    },
    "building_V-V": {
      "firstVisit": true,
      "displayName": "Naval science (General) Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Naval science (General). You can exit to the floor foyer.\n\n[|Shelf|||||] Naval science (General) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_V-V-V1-995": {
          "displayName": "Shelf",
          "destination": "building_V-V-V1-995"
        },
        "building_V": {
          "displayName": "Exit",
          "destination": "building_V"
        }
      }
    },
    "building_V-VB-VB15-955": {
      "firstVisit": true,
      "displayName": "Naval administration shelf",
      "description": "Description for shelf Naval administration in Naval administration Room.\n\n[|Entrance||] Naval administration Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_V-VB": {
          "displayName": "Entrance",
          "destination": "building_V-VB"
        }
      }
    },
    "building_V-VB": {
      "firstVisit": true,
      "displayName": "Naval administration Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Naval administration. You can exit to the floor foyer.\n\n[|Shelf|||||] Naval administration shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_V-VB-VB15-955": {
          "displayName": "Shelf",
          "destination": "building_V-VB-VB15-955"
        },
        "building_V": {
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
        },
        "2_building_V": {
          "displayName": "Up",
          "destination": "2_building_V"
        }
      }
    },
    "2_building_V-VE-VE7-500": {
      "firstVisit": true,
      "displayName": "Marines shelf",
      "description": "Description for shelf Marines in Marines Room.\n\n[|Entrance||] Marines Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_V-VE": {
          "displayName": "Entrance",
          "destination": "2_building_V-VE"
        }
      }
    },
    "2_building_V-VE": {
      "firstVisit": true,
      "displayName": "Marines Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Marines. You can exit to the floor foyer.\n\n[|Shelf|||||] Marines shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_V-VE-VE7-500": {
          "displayName": "Shelf",
          "destination": "2_building_V-VE-VE7-500"
        },
        "2_building_V": {
          "displayName": "Exit",
          "destination": "2_building_V"
        }
      }
    },
    "2_building_V-VF-VF1-580": {
      "firstVisit": true,
      "displayName": "Naval ordnance shelf",
      "description": "Description for shelf Naval ordnance in Naval ordnance Room.\n\n[|Entrance||] Naval ordnance Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_V-VF": {
          "displayName": "Entrance",
          "destination": "2_building_V-VF"
        }
      }
    },
    "2_building_V-VF": {
      "firstVisit": true,
      "displayName": "Naval ordnance Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Naval ordnance. You can exit to the floor foyer.\n\n[|Shelf|||||] Naval ordnance shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_V-VF-VF1-580": {
          "displayName": "Shelf",
          "destination": "2_building_V-VF-VF1-580"
        },
        "2_building_V": {
          "displayName": "Exit",
          "destination": "2_building_V"
        }
      }
    },
    "2_building_V-VC-VC10-580": {
      "firstVisit": true,
      "displayName": "Naval maintenance shelf",
      "description": "Description for shelf Naval maintenance in Naval maintenance Room.\n\n[|Entrance||] Naval maintenance Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_V-VC": {
          "displayName": "Entrance",
          "destination": "2_building_V-VC"
        }
      }
    },
    "2_building_V-VC": {
      "firstVisit": true,
      "displayName": "Naval maintenance Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Naval maintenance. You can exit to the floor foyer.\n\n[|Shelf|||||] Naval maintenance shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_V-VC-VC10-580": {
          "displayName": "Shelf",
          "destination": "2_building_V-VC-VC10-580"
        },
        "2_building_V": {
          "displayName": "Exit",
          "destination": "2_building_V"
        }
      }
    },
    "2_building_V-VD-VD7-430": {
      "firstVisit": true,
      "displayName": "Naval personnel shelf",
      "description": "Description for shelf Naval personnel in Naval personnel Room.\n\n[|Entrance||] Naval personnel Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_V-VD": {
          "displayName": "Entrance",
          "destination": "2_building_V-VD"
        }
      }
    },
    "2_building_V-VD": {
      "firstVisit": true,
      "displayName": "Naval personnel Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Naval personnel. You can exit to the floor foyer.\n\n[|Shelf|||||] Naval personnel shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "2_building_V-VD-VD7-430": {
          "displayName": "Shelf",
          "destination": "2_building_V-VD-VD7-430"
        },
        "2_building_V": {
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
        "2_building_V-VE": {
          "displayName": "South",
          "destination": "2_building_V-VE"
        },
        "2_building_V-VF": {
          "displayName": "North",
          "destination": "2_building_V-VF"
        },
        "2_building_V-VC": {
          "displayName": "SouthEast",
          "destination": "2_building_V-VC"
        },
        "2_building_V-VD": {
          "displayName": "NorthWest",
          "destination": "2_building_V-VD"
        },
        "building_V": {
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
    "building_Z-Z-Z1001-1121": {
      "firstVisit": true,
      "displayName": "General bibliography shelf",
      "description": "Description for shelf General bibliography in National bibliography Room.\n\n[|Entrance||] National bibliography Room entrance\n[|Next||||||] Books (General).    Writing.    Paleography shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_Z-Z": {
          "displayName": "Entrance",
          "destination": "building_Z-Z"
        },
        "building_Z-Z-Z4-115.5": {
          "displayName": "Next",
          "destination": "building_Z-Z-Z4-115.5"
        }
      }
    },
    "building_Z-Z-Z4-115.5": {
      "firstVisit": true,
      "displayName": "Books (General).    Writing.    Paleography shelf",
      "description": "Description for shelf Books (General).    Writing.    Paleography in National bibliography Room.\n\n[|Previous||] General bibliography shelf\n[|Next||||||] National bibliography shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_Z-Z-Z1001-1121": {
          "displayName": "Previous",
          "destination": "building_Z-Z-Z1001-1121"
        },
        "building_Z-Z-Z1201-4980": {
          "displayName": "Next",
          "destination": "building_Z-Z-Z1201-4980"
        }
      }
    },
    "building_Z-Z-Z1201-4980": {
      "firstVisit": true,
      "displayName": "National bibliography shelf",
      "description": "Description for shelf National bibliography in National bibliography Room.\n\n[|Previous||] Books (General).    Writing.    Paleography shelf\n[|Next||||||] Book industries and trade shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_Z-Z-Z4-115.5": {
          "displayName": "Previous",
          "destination": "building_Z-Z-Z4-115.5"
        },
        "building_Z-Z-Z116-659": {
          "displayName": "Next",
          "destination": "building_Z-Z-Z116-659"
        }
      }
    },
    "building_Z-Z-Z116-659": {
      "firstVisit": true,
      "displayName": "Book industries and trade shelf",
      "description": "Description for shelf Book industries and trade in National bibliography Room.\n\n[|Previous||] National bibliography shelf\n[|Next||||||] Libraries shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_Z-Z-Z1201-4980": {
          "displayName": "Previous",
          "destination": "building_Z-Z-Z1201-4980"
        },
        "building_Z-Z-Z662-1000.5": {
          "displayName": "Next",
          "destination": "building_Z-Z-Z662-1000.5"
        }
      }
    },
    "building_Z-Z-Z662-1000.5": {
      "firstVisit": true,
      "displayName": "Libraries shelf",
      "description": "Description for shelf Libraries in National bibliography Room.\n\n[|Previous||] Book industries and trade shelf\n[|Next||||||] Personal bibliography shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_Z-Z-Z116-659": {
          "displayName": "Previous",
          "destination": "building_Z-Z-Z116-659"
        },
        "building_Z-Z-Z8001-8999": {
          "displayName": "Next",
          "destination": "building_Z-Z-Z8001-8999"
        }
      }
    },
    "building_Z-Z-Z8001-8999": {
      "firstVisit": true,
      "displayName": "Personal bibliography shelf",
      "description": "Description for shelf Personal bibliography in National bibliography Room.\n\n[|Previous||] Libraries shelf\n[|Next||||||] Subject bibliography shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_Z-Z-Z662-1000.5": {
          "displayName": "Previous",
          "destination": "building_Z-Z-Z662-1000.5"
        },
        "building_Z-Z-Z5051-7999": {
          "displayName": "Next",
          "destination": "building_Z-Z-Z5051-7999"
        }
      }
    },
    "building_Z-Z-Z5051-7999": {
      "firstVisit": true,
      "displayName": "Subject bibliography shelf",
      "description": "Description for shelf Subject bibliography in National bibliography Room.\n\n[|Previous||] Personal bibliography shelf",
      "interactables": {},
      "items": {},
      "exits": {
        "building_Z-Z-Z8001-8999": {
          "displayName": "Previous",
          "destination": "building_Z-Z-Z8001-8999"
        }
      }
    },
    "building_Z-Z": {
      "firstVisit": true,
      "displayName": "National bibliography Room entrance",
      "description": "This room has seven shelves organized linearly from the entrance towards the back. The first shelf you can see is General bibliography. You can exit to the floor foyer.\n\n[|Shelf|||||] General bibliography shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_Z-Z-Z1001-1121": {
          "displayName": "Shelf",
          "destination": "building_Z-Z-Z1001-1121"
        },
        "building_Z": {
          "displayName": "Exit",
          "destination": "building_Z"
        }
      }
    },
    "building_Z-ZA-ZA3038-5190": {
      "firstVisit": true,
      "displayName": "Information resources (General) shelf",
      "description": "Description for shelf Information resources (General) in Information resources (General) Room.\n\n[|Entrance||] Information resources (General) Room entrance",
      "interactables": {},
      "items": {},
      "exits": {
        "building_Z-ZA": {
          "displayName": "Entrance",
          "destination": "building_Z-ZA"
        }
      }
    },
    "building_Z-ZA": {
      "firstVisit": true,
      "displayName": "Information resources (General) Room entrance",
      "description": "This room has one shelf organized linearly from the entrance towards the back. The first shelf you can see is Information resources (General). You can exit to the floor foyer.\n\n[|Shelf|||||] Information resources (General) shelf\n[|Exit||||||] Floor foyer",
      "interactables": {},
      "items": {},
      "exits": {
        "building_Z-ZA-ZA3038-5190": {
          "displayName": "Shelf",
          "destination": "building_Z-ZA-ZA3038-5190"
        },
        "building_Z": {
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
