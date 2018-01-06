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
      "description": "There are two rows of books in this shelf. The \u201cAmerican and English\u201d section. The \u201cOther languages\u201d section.\n\n[|Entrance||] Collections.  Series.  Collected works Room entrance\n[|Next||||||] Collections.  Series.  Collected works shelf",
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
      "description": "There are three rows of books in this shelf. The \u201cPamphlet collections\u201d section. The \u201cInaugural and program dissertations\u201d section. The \u201cScrapbooks\u201d section.\n\n[|Previous||] Collections of monographs, essays, etc. shelf",
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
      "description": "This room has two shelves organized linearly from the entrance towards the back. You can see the Collections of monographs, essays, etc. shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Collections of monographs, essays, etc. shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There is one row of books in this shelf. The \u201cBy language\u201d section.\n\n[|Entrance||] Encyclopedias Room entrance",
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
      "description": "This room has one shelf. You can see the Encyclopedias shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Encyclopedias shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Dictionaries and other general reference works Room entrance",
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
      "description": "This room has one shelf. You can see the Dictionaries and other general reference works shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Dictionaries and other general reference works shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are four rows of books in this shelf. The \u201cHistory\u201d section. The \u201cPhilosophy.  Theory\u201d section. The \u201cBy region or country\u201d section. The \u201cEvaluation\u201d section.\n\n[|Entrance||] History of scholarship and learning.  The humanities Room entrance",
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
      "description": "This room has one shelf. You can see the History of scholarship and learning.  The humanities shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] History of scholarship and learning.  The humanities shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are three rows of books in this shelf. The \u201cBy country\u201d section. The \u201cCollectors and collecting\u201d section. The \u201cMuseology.  Museum methods, technique, etc.\u201d section.\n\n[|Entrance||] Museums.  Collectors and collecting Room entrance",
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
      "description": "This room has one shelf. You can see the Museums.  Collectors and collecting shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Museums.  Collectors and collecting shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are two rows of books in this shelf. The \u201cBy region or country\u201d section. The \u201cInternational associations, congresses, conferences, etc.\u201d section.\n\n[|Entrance||] Academies and learned societies Room entrance",
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
      "description": "This room has one shelf. You can see the Academies and learned societies shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Academies and learned societies shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are three rows of books in this shelf. The \u201cJuvenile periodicals\u201d section. The \u201cHumorous periodicals\u201d section. The \u201cPeriodicals for women\u201d section.\n\n[|Entrance||] Periodicals Room entrance",
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
      "description": "This room has one shelf. You can see the Periodicals shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Periodicals shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are three rows of books in this shelf. The \u201cAlmanacs\u201d section. The \u201cAnnuals\u201d section. The \u201cDirectories\u201d section.\n\n[|Entrance||] Yearbooks.  Almanacs.  Directories Room entrance",
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
      "description": "This room has one shelf. You can see the Yearbooks.  Almanacs.  Directories shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Yearbooks.  Almanacs.  Directories shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Indexes Room entrance",
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
      "description": "This room has one shelf. You can see the Indexes shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Indexes shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Newspapers Room entrance",
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
      "description": "This room has one shelf. You can see the Newspapers shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Newspapers shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are six rows of books in this shelf. The \u201cPastoral theology\u201d section with books about Preaching.  Homiletics, Personal life of the clergy, Practical church work.  Social work.  Work of the layman, and Education. The \u201cMissions\u201d section with books about Missions in individual countries, Special churches, and Special types of missions. The \u201cEvangelism.  Revivals\u201d section. The \u201cEcclesiastical theology\u201d section with books about Religious education (General), Sacraments.  Ordinances, Church management.  Efficiency, The Church, Church finance.  Church property, Parish.  Congregation.  The local church, Ministry.  Clergy.  Religious vocations, Religious societies, associations, etc., City churches, Social life, recreation, etc., in the church, Church and state, Mass media and telecommunication in religion, Shrines.  Holy places, Church polity, and The rural church.  The church and country life. The \u201cPractical religion.  The Christian life\u201d section with books about Works of meditation and devotion, Religious duties, Moral theology, Works of consolation and cheer, Mysticism, Asceticism, Conversion literature, and Quietism. The \u201cWorship (Public and private)\u201d section with books about Times and seasons.  The Church year, Hymnology, Prayer, Liturgy and ritual, Christian symbols and symbolism, and Family worship.\n\n[|Entrance||] Practical Theology Room entrance",
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
      "description": "This room has one shelf. You can see the Practical Theology shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Practical Theology shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are three rows of books in this shelf. The \u201cEtiquette of entertaining\u201d section. The \u201cEtiquette of travel\u201d section. The \u201cTelephone etiquette\u201d section.\n\n[|Entrance||] Ethics Room entrance\n[|Next||||||] Ethics shelf",
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
      "description": "There are 10 rows of books in this shelf. The \u201cIndividual ethics.  Character.  Virtue\u201d section. The \u201cHistory and general works\u201d section. The \u201cReligious ethics\u201d section. The \u201cEvolutionary and genetic ethics\u201d section. The \u201cEthics of social groups, classes, etc.  Professional ethics\u201d section. The \u201cFeminist ethics\u201d section. The \u201cCommunist ethics\u201d section. The \u201cSocialist ethics\u201d section. The \u201cPositivist ethics\u201d section. The \u201cTotalitarian ethics\u201d section.\n\n[|Previous||] Social usages.  Etiquette shelf",
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
      "description": "This room has two shelves organized linearly from the entrance towards the back. You can see the Social usages.  Etiquette shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Social usages.  Etiquette shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are five rows of books in this shelf. The \u201cProtestantism\u201d section with books about Other Protestant denominations, Protestant Episcopal Church in the United States, Church of England, Post-Reformation, General, Pre-Reformation, Anglican Communion (General), Church of Ireland, Church of England outside of Great Britain, Church in Wales, Episcopal Church in Scotland, Reformed Episcopal Church, and Protestant Episcopal Church outside the United States. The \u201cCatholic Church\u201d section with books about Biography and portraits, Creeds and catechisms, History, Monasticism.  Religious orders, Practical religion.  Christian life, Liturgy and ritual, Theology.  Doctrine.  Dogmatics, Sacraments, Meditations.  Devotional readings.  Spiritual exercises, etc., Government and organization, Churches, cathedrals, abbeys (as parish churches), etc., Relics.  Shrines.  Pilgrimages.  Processions, Forms of worship.  Catholic practice, Periodicals.  Societies, councils, congresses, etc., Collective, Study and teaching, Saints.  Hagiology, General collected works, Sermons, Religious life.  Religious state, Dictionaries.  Encyclopedias, Sacramentals, Catholic Church and other churches, Eastern churches in communion with Rome., Controversial works, Dissenting sects other than Protestant, Documents, Catholic Church and the state, Directories.  Yearbooks, and Images. The \u201cOrthodox Eastern Church\u201d section with books about General and Divisions of the church. The \u201cChurch unity.  Ecumenical movement.\u201d section. The \u201cEastern churches.  Oriental churches\u201d section with books about Armenian Church, Coptic Church, General, St. Thomas Christians.  Malabar Christians., Syrian or Jacobite Church, Nestorian, Chaldean, or East Syrian Church, Ethiopic or Abyssinian Church, and Maronite Church.\n\n[|Entrance||] Christian Denominations Room entrance",
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
      "description": "This room has one shelf. You can see the Christian Denominations shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Christian Denominations shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 24 rows of books in this shelf. The \u201cNew Thought.  Menticulture, etc.\u201d section. The \u201cThe hand.  Palmistry\u201d section. The \u201cConsciousness.  Cognition\u201d section. The \u201cDevelopmental psychology\u201d section. The \u201cSensation.  Aesthesiology\u201d section. The \u201cAffection.  Feeling.  Emotion\u201d section. The \u201cDifferential psychology.  Individuality.  Self\u201d section. The \u201cApplied psychology\u201d section. The \u201cPersonality\u201d section. The \u201cPsychoanalysis\u201d section. The \u201cGenetic psychology\u201d section. The \u201cPhilosophy.  Relation to other topics\u201d section. The \u201cWill.  Volition.  Choice.  Control\u201d section. The \u201cComparative psychology.  Animal and human psychology\u201d section. The \u201cMotivation\u201d section. The \u201cPsychotropic drugs and other substances\u201d section. The \u201cExperimental psychology\u201d section. The \u201cPsychological tests and testing\u201d section. The \u201cPsychology of sex.  Sexual behavior\u201d section. The \u201cTemperament.  Character\u201d section. The \u201cPhysiognomy.  Phrenology\u201d section. The \u201cGraphology.  Study of handwriting\u201d section. The \u201cClass psychology\u201d section. The \u201cGestalt psychology\u201d section.\n\n[|Entrance||] Psychology Room entrance\n[|Next||||||] Parapsychology shelf",
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
      "description": "There are five rows of books in this shelf. The \u201cSpiritualism\u201d section. The \u201cHypnotism.  Suggestion.  Mesmerism.  Subliminal projection\u201d section. The \u201cPsychic research.  Psychology of the conscious\u201d section. The \u201cHallucinations.  Sleep.  Dreaming.  Visions\u201d section. The \u201cTelepathy.  Mind reading.  Thought transference\u201d section.\n\n[|Previous||] Psychology shelf\n[|Next||||||] Occult sciences shelf",
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
      "description": "There are nine rows of books in this shelf. The \u201cMagic.  Hermetics.  Necromancy\u201d section. The \u201cWitchcraft\u201d section. The \u201cGhosts.  Apparitions.  Hauntings\u201d section. The \u201cAstrology\u201d section. The \u201cHuman-alien encounters.  Contact between humans and\u201d section. The \u201cOracles.  Sibyls.  Divinations\u201d section. The \u201cFortune-telling\u201d section. The \u201cSeers.  Prophets.  Prophecies\u201d section. The \u201cDemonology.  Satanism.  Possession\u201d section.\n\n[|Previous||] Parapsychology shelf",
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
      "description": "This room has three shelves organized linearly from the entrance towards the back. You can see the Psychology shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Psychology shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are five rows of books in this shelf. The \u201cModern texts and versions\u201d section with books about Non-European languages, English, and Other European languages. The \u201cWorks about the Bible\u201d section with books about Study and teaching, Men, women, and children of the Bible, Bible stories.  Paraphrases of Bible stories., Criticism and interpretation, Prophecy, Bible and science, The Bible as literature, and Bible and social sciences. The \u201cOld Testament\u201d section with books about Special parts of the Old Testament, Works about the Old Testament, Early versions, Selections.  Quotations, and Modern texts and versions. The \u201cNew Testament\u201d section with books about Works about the New Testament, Special parts of the New Testament, Early texts and versions, Modern texts and versions, and Selections.  Quotations. The \u201cEarly versions\u201d section.\n\n[|Entrance||] The Bible Room entrance",
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
      "description": "This room has one shelf. You can see the The Bible shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] The Bible shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 15 rows of books in this shelf. The \u201cEschatology.  Last things\u201d section. The \u201cChristology\u201d section with books about Life of Christ, Relics, and Miracles.  Apparitions.  Shrines, sanctuaries,. The \u201cSalvation.  Soteriology\u201d section. The \u201cGod\u201d section with books about Holy Spirit.  The Paraclete, Divine attributes, Doctrine of the Trinity, and Revelation. The \u201cCreeds, confessions, covenants, etc.\u201d section. The \u201cFuture state.  Future life\u201d section. The \u201cApologetics.  Evidences of Christianity\u201d section. The \u201cCreation\u201d section. The \u201cMary, Mother of Jesus Christ.  Mariology\u201d section with books about Miracles.  Apparitions.  Shrines, sanctuaries,. The \u201cInvisible world (saints, demons, etc.)\u201d section. The \u201cDivine law.  Moral government\u201d section. The \u201cDoctrine and dogma\u201d section. The \u201cJudaism\u201d section. The \u201cHistory of specific doctrines and movements.\u201d section. The \u201cCatechisms\u201d section.\n\n[|Entrance||] Doctrinal Theology Room entrance",
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
      "description": "This room has one shelf. You can see the Doctrinal Theology shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Doctrinal Theology shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are two rows of books in this shelf. The \u201cBy period\u201d section with books about Modern, Ancient, Medieval, and Renaissance. The \u201cGeneral works\u201d section.\n\n[|Entrance||] Philosophy (General) Room entrance",
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
      "description": "This room has one shelf. You can see the Philosophy (General) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Philosophy (General) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 10 rows of books in this shelf. The \u201cHistory\u201d section with books about By period and By region or country. The \u201cEarly Christian literature.  Fathers of the Church, etc.\u201d section. The \u201cChristianity in relation to special subjects\u201d section. The \u201cBiography\u201d section. The \u201cPersecution.  Martyrs\u201d section. The \u201cTolerance and toleration\u201d section. The \u201cChristian antiquities.  Archaeology.  Museums\u201d section. The \u201cLiberalism\u201d section. The \u201cSacrilege (History)\u201d section. The \u201cDissent\u201d section.\n\n[|Entrance||] Christianity Room entrance",
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
      "description": "This room has one shelf. You can see the Christianity shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Christianity shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 18 rows of books in this shelf. The \u201cReligion (General)\u201d section. The \u201cEschatology\u201d section. The \u201cRationalism\u201d section. The \u201cNatural theology\u201d section with books about Religion and science, Nature and attributes of Deity, General, Theism, Creation.  Theory of the earth, Monotheism, Pantheism, Dualism, and Polytheism. The \u201cReligions of the world\u201d section. The \u201cHistory and principles of religions\u201d section with books about African, American, Asian.  Oriental, European.  Occidental, Pacific Ocean islands.  Oceania, Arctic regions, Indo-European.  Aryan, Mediterranean region, and Ural-Altaic. The \u201cReligious doctrines (General)\u201d section with books about Nature worship, Other, Women in comparative religion, Worship of human beings, Sex worship.  Phallicism, and Origins of religion. The \u201cReligious life\u201d section. The \u201cBiography\u201d section. The \u201cWorship.  Cultus\u201d section. The \u201cThe myth.  Comparative mythology\u201d section. The \u201cPhilosophy of religion.  Psychology of religion.  Religion\u201d section. The \u201cThe soul\u201d section. The \u201cClassification of religions\u201d section. The \u201cReligions in relation to one another\u201d section. The \u201cSacred books (General)\u201d section. The \u201cReligious organization\u201d section. The \u201cUnity and plurality\u201d section.\n\n[|Entrance||] Religions.  Mythology.  Rationalism Room entrance",
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
      "description": "This room has one shelf. You can see the Religions.  Mythology.  Rationalism shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Religions.  Mythology.  Rationalism shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 19 rows of books in this shelf. The \u201cBahai Faith\u201d section. The \u201cThe practice of Islam\u201d section with books about Islamic religious life, Special days and seasons, fasts, feasts,, Jihad (Holy War), The five duties of a Moslem.  Pillars of Islam, Shrines, sacred places, etc., and Religious ceremonies, rites, etc.. The \u201cOther beliefs and movements\u201d section. The \u201cIslam\u201d section. The \u201cTheosophy\u201d section. The \u201cDogma (\u02bbAq\u0101\u0313id)\u201d section. The \u201cBiography\u201d section with books about Muammad, Prophet, d. 632. The \u201cERROR, could not find\u201d section. The \u201cBranches, sects, etc.\u201d section with books about Black Muslims, Shiites, Nurculuk, and Moorish Science Temple of America. The \u201cGeneral\u201d section. The \u201cIslamic sociology\u201d section. The \u201cRelation of Islam to other religions\u201d section. The \u201cKoran\u201d section with books about Works about the Koran and Special parts and chapters. The \u201cAnthroposophy\u201d section. The \u201cSacred books\u201d section with books about Koran, Hadith literature.  Traditions.  Sunna, and Koranic and other Islamic legends. The \u201cIslamic literature\u201d section. The \u201cMissionary work of Islam\u201d section. The \u201cHeresy, heresies, heretics\u201d section. The \u201cBenevolent work.  Social work.  Welfare work, etc.\u201d section.\n\n[|Entrance||] Islam.  Bahai Faith.  Theosophy, etc. Room entrance\n[|Next||||||] General shelf",
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
      "description": "There is one row of books in this shelf. The \u201cStudy and teaching\u201d section.\n\n[|Previous||] Islam.  Bahai Faith.  Theosophy, etc. shelf",
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
      "description": "This room has two shelves organized linearly from the entrance towards the back. You can see the Islam.  Bahai Faith.  Theosophy, etc. shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Islam.  Bahai Faith.  Theosophy, etc. shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 13 rows of books in this shelf. The \u201cPractical Judaism\u201d section with books about Jewish way of life.  Spiritual life.  Mysticism.  Personal, Liturgy and ritual, Priests, rabbis, etc., Festivals and fasts, Rites and customs, Preaching.  Homiletics, Congregations.  Synagogues, Forms of worship, and The tabernacle.  The temple. The \u201cSources of Jewish religion.  Rabbinical literature\u201d section with books about Talmudic literature, Halacha, Cabala, Jewish tradition, and Midrash. The \u201cDogmatic Judaism\u201d section. The \u201cRelation of Judaism to special subject fields\u201d section with books about Religions. The \u201cBiography\u201d section. The \u201cGeneral\u201d section. The \u201cPrinciples of Judaism (General)\u201d section. The \u201cPre-Talmudic Jewish literature (non-Biblical)\u201d section. The \u201cSamaritans\u201d section. The \u201cControversial works against the Jews\u201d section. The \u201cJewish works against Christianity and Islam\u201d section. The \u201cApologetics\u201d section. The \u201cHeresy, heresies\u201d section.\n\n[|Entrance||] Judaism Room entrance\n[|Next||||||] General shelf",
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
      "description": "There is one row of books in this shelf. The \u201cHistory\u201d section with books about By region or country.\n\n[|Previous||] Judaism shelf",
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
      "description": "This room has two shelves organized linearly from the entrance towards the back. You can see the Judaism shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Judaism shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are three rows of books in this shelf. The \u201cGeneral works\u201d section. The \u201cSpecial topics\u201d section. The \u201cHistory\u201d section with books about By period.\n\n[|Entrance||] Logic Room entrance",
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
      "description": "This room has one shelf. You can see the Logic shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Logic shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 30 rows of books in this shelf. The \u201cTripit.aka (Canonical literature)\u201d section. The \u201cModifications, schools, etc.\u201d section with books about Special modifications, sects, etc., Tibetan Buddhism (Lamaism), Bonpo (Sect), Mahayana Buddhism, and Therav\u0101da (Hinayana) Buddhism. The \u201cDoctrinal and systematic Buddhism\u201d section with books about Special doctrines and Special topics and relations to special subjects. The \u201cGeneral works\u201d section. The \u201cBiography\u201d section with books about Individual and Collective. The \u201cPractice of Buddhism.  Forms of worship\u201d section with books about Religious life, Altar, liturgical objects, ornaments, memorials, etc., Festivals.  Days and seasons, Buddhist ministry.  Priesthood.  Organization, Ceremonies and rites.  Ceremonial rules, Symbols and symbolism, Hymns.  Chants.  Recitations, Temple.  Temple organization, and Vestments, altar cloths, etc.. The \u201cHistory\u201d section. The \u201cBuddhist pantheon\u201d section. The \u201cGeneral collections.  Collected works\u201d section. The \u201cBuddhist literature\u201d section. The \u201cTerminology\u201d section. The \u201cMonasteries.  Temples.  Shrines.  Sites\u201d section. The \u201cMonasticism and monastic life  Sagha (Order)\u201d section. The \u201cBenevolent work.  Social work.  Welfare work, etc.\u201d section. The \u201cAntiquities.  Archaeology\u201d section with books about Literary discoveries and Inscriptions, etc.. The \u201cPilgrims and pilgrimages\u201d section. The \u201cSocieties, councils, associations, clubs, etc.\u201d section. The \u201cFolklore\u201d section. The \u201cDictionaries (General)\u201d section. The \u201cRelation to other religious and philosophical systems\u201d section. The \u201cQuestions and answers.  Maxims (General)\u201d section. The \u201cMissionary work\u201d section. The \u201cReligious education (General)\u201d section. The \u201cCongresses.  Conferences (General)\u201d section. The \u201cPersecutions\u201d section. The \u201cDirectories (General)\u201d section. The \u201cEncyclopedias (General)\u201d section. The \u201cPeriodicals.  Yearbooks (General)\u201d section. The \u201cResearch\u201d section. The \u201cAsceticism.  Hermits.  Wayfaring life\u201d section.\n\n[|Entrance||] Buddhism Room entrance",
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
      "description": "This room has one shelf. You can see the Buddhism shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Buddhism shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are six rows of books in this shelf. The \u201cOntology\u201d section. The \u201cEpistemology.  Theory of knowledge\u201d section. The \u201cGeneral philosophical works\u201d section. The \u201cMetaphysics\u201d section. The \u201cCosmology\u201d section. The \u201cMethodology\u201d section.\n\n[|Entrance||] Speculative philosophy Room entrance",
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
      "description": "This room has one shelf. You can see the Speculative philosophy shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Speculative philosophy shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are two rows of books in this shelf. The \u201cHistory\u201d section. The \u201cSpecial topics\u201d section.\n\n[|Entrance||] Aesthetics Room entrance",
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
      "description": "This room has one shelf. You can see the Aesthetics shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Aesthetics shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are five rows of books in this shelf. The \u201cNational biography\u201d section. The \u201cBiography.  By subject\u201d section with books about Biography of women (Collective), Other miscellaneous groups, Academicians.  Scholars. Savants, and Blank books for personal records, diaries, etc.. The \u201cGeneral collective biography\u201d section with books about Portraits. The \u201cBiography as an art or literary form\u201d section. The \u201cHistory of biographical literature.  Lives of biographers\u201d section.\n\n[|Entrance||] Biography Room entrance",
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
      "description": "This room has one shelf. You can see the Biography shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Biography shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are four rows of books in this shelf. The \u201cBy region or country\u201d section. The \u201cPersonal and family names\u201d section. The \u201cFamily history covering more than one country\u201d section. The \u201cGenealogical lists, etc., covering more than one country\u201d section.\n\n[|Entrance||] Genealogy Room entrance",
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
      "description": "This room has one shelf. You can see the Genealogy shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Genealogy shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are eight rows of books in this shelf. The \u201cFlags, banners, and standards\u201d section. The \u201cChivalry and knighthood (Orders, decorations, etc.)\u201d section with books about Ceremonials, pageants, tournaments, etc., Duels and dueling, and Orders, etc.. The \u201cPublic and official heraldry\u201d section. The \u201cFamily heraldry\u201d section. The \u201cTitles of honor, rank, precedence, etc.\u201d section. The \u201cRoyalty.  Insignia.  Regalia, crown and coronets, etc.\u201d section. The \u201cCrests, monograms, devices, badges, mottoes, etc.\u201d section. The \u201cEcclesiastical and sacred heraldry\u201d section.\n\n[|Entrance||] Heraldry Room entrance",
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
      "description": "This room has one shelf. You can see the Heraldry shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Heraldry shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are five rows of books in this shelf. The \u201cCivilization and race\u201d section. The \u201cBy period\u201d section. The \u201cRelation to special topics\u201d section with books about Technology, War and civilization, Geography and civilization, and Water and civilization. The \u201cForecasts of future progress\u201d section. The \u201cTerrestrial evidence of interplanetary voyages\u201d section.\n\n[|Entrance||] History of Civilization Room entrance",
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
      "description": "This room has one shelf. You can see the History of Civilization shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] History of Civilization shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are four rows of books in this shelf. The \u201cMedieval and modern\u201d section. The \u201cCoins\u201d section. The \u201cTokens\u201d section with books about By region or country, By period, and Special uses of tokens. The \u201cMedals and medallions\u201d section with books about By region or country, Medieval and modern, and Ancient.\n\n[|Entrance||] Numismatics Room entrance",
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
      "description": "This room has one shelf. You can see the Numismatics shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Numismatics shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are nine rows of books in this shelf. The \u201cStudy and teaching.  Research\u201d section. The \u201cPhilosophy.  Theory\u201d section with books about Methodology. The \u201cPreservation, restoration, and conservation of\u201d section. The \u201cBells.  Campanology.  Cowbells\u201d section. The \u201cCrosses\u201d section. The \u201cHill figures\u201d section. The \u201cForgeries of antiquities\u201d section. The \u201cLanterns of the dead\u201d section. The \u201cBoundary stones\u201d section.\n\n[|Entrance||] Archaeology Room entrance",
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
      "description": "This room has one shelf. You can see the Archaeology shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Archaeology shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are six rows of books in this shelf. The \u201cAncient inscriptions\u201d section. The \u201cEarly Christian inscriptions\u201d section. The \u201cBy region or country\u201d section. The \u201cBy language\u201d section. The \u201cModern inscriptions (General)\u201d section. The \u201cMedieval inscriptions (General)\u201d section.\n\n[|Entrance||] Inscriptions.  Epigraphy Room entrance",
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
      "description": "This room has one shelf. You can see the Inscriptions.  Epigraphy shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Inscriptions.  Epigraphy shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are five rows of books in this shelf. The \u201cArchives\u201d section with books about History and statistics. The \u201cCollection of documents, facsimiles, etc., for study\u201d section. The \u201cSeals\u201d section with books about Modern, Ancient, and Medieval. The \u201cDiplomatics\u201d section. The \u201cFormularies\u201d section.\n\n[|Entrance||] Diplomatics.  Archives.  Seals Room entrance",
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
      "description": "This room has one shelf. You can see the Diplomatics.  Archives.  Seals shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Diplomatics.  Archives.  Seals shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are three rows of books in this shelf. The \u201cMedieval and modern\u201d section. The \u201cAncient\u201d section. The \u201cPerpetual calendars.  Century calendars, etc.\u201d section.\n\n[|Entrance||] Technical chronology.  Calendar Room entrance",
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
      "description": "This room has one shelf. You can see the Technical chronology.  Calendar shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Technical chronology.  Calendar shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Auxiliary Sciences of History (General) Room entrance",
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
      "description": "This room has one shelf. You can see the Auxiliary Sciences of History (General) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Auxiliary Sciences of History (General) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 38 rows of books in this shelf. The \u201cChina\u201d section with books about History, Local history and description, Taiwan, Outer Mongolia.  Mongolian People's Republic, and Ethnography. The \u201cPhilippines\u201d section with books about History, Local history and description, and Ethnography. The \u201cIsrael (Palestine).  The Jews\u201d section with books about Jews outside of Palestine, History, Ethnography.  Tribes of Israel, Jerusalem, and Antiquities. The \u201cJapan\u201d section with books about Local history and description and History. The \u201cIndia (Bharat)\u201d section with books about History, Local history and description, and Ethnography.  Sects. The \u201cMiddle East.  Southwestern Asia.  Ancient Orient.\u201d section with books about History, Local history and description, and Ethnography. The \u201cEast Asia.  The Far East\u201d section with books about Relation of individual countries to East Asia. The \u201cIran (Persia)\u201d section with books about History, Ethnography, Local history and description, and Antiquities. The \u201cIndonesia (Dutch East Indies)\u201d section with books about Ethnography, Sumatra, History, Borneo.  Kalimantan, Indonesia, Timor, Celebes.  Sulawesi, Moluccas.  Maluku, and Java. The \u201cKorea\u201d section with books about History, Democratic People's Republic, 1948-, and Local history and description. The \u201cSoutheast Asia\u201d section with books about French Indochina, History, and Burma. The \u201cMalaysia.  Malay Peninsula.  Straits Settlements\u201d section with books about Local history and description, History, and Ethnography. The \u201cIraq (Assyria, Babylonia, Mesopotamia)\u201d section with books about History, Ethnography, and Antiquities. The \u201cJordan.  Transjordan\u201d section with books about History and Ethnography. The \u201cArabian Peninsula.  Saudi Arabia\u201d section with books about Local history and description, History, and Ethnography. The \u201cEthnography\u201d section. The \u201cPakistan\u201d section with books about History, Local history and description, and Ethnography. The \u201cSouthern Asia.  Indian Ocean Region\u201d section with books about Islands of the Indian Ocean. The \u201cSingapore\u201d section. The \u201cThailand (Siam)\u201d section with books about History, Ethnography, and Local history and description. The \u201cArab countries\u201d section with books about History and Ethnography. The \u201cAfghanistan\u201d section with books about History, Local history and description, and Ethnography. The \u201cHistory\u201d section. The \u201cThe Islamic World\u201d section. The \u201cArmenia\u201d section with books about History. The \u201cSyria\u201d section with books about History, Provinces, regions, cities, etc., and Ethnography. The \u201cNepal\u201d section. The \u201cLebanon (Phenicia)\u201d section with books about History and Ethnography. The \u201cSri Lanka\u201d section with books about History and Ethnography. The \u201cBhutan\u201d section. The \u201cBangladesh.  East Pakistan\u201d section with books about History, Local history and description, and Ethnography. The \u201cCentral Asia\u201d section. The \u201cAsia Minor\u201d section. The \u201cDescription and travel\u201d section. The \u201cGoa.  Portuguese in India\u201d section. The \u201cBrunei\u201d section. The \u201cAntiquities\u201d section. The \u201cMalay Archipelago\u201d section.\n\n[|Entrance||] History of Asia Room entrance",
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
      "description": "This room has one shelf. You can see the History of Asia shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] History of Asia shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 14 rows of books in this shelf. The \u201cGeneral\u201d section. The \u201cEurope (General)\u201d section with books about Description and travel and History. The \u201cAncient history\u201d section. The \u201cMedieval history\u201d section with books about Crusades, Later medieval.  11th-15th centuries, Migrations, and Latin Kingdom of Jerusalem.  Latin Orient, 1099-1291. The \u201cModern history, 1453-\u201d section with books about 1789-, 1453-1648, 1601-1715.  17th century, and 1715-1789.  18th century. The \u201cWorld War II (1939-1945)\u201d section. The \u201cPost-war history (1945-    )\u201d section. The \u201cDeveloping countries\u201d section. The \u201cPolitical and diplomatic history\u201d section. The \u201cWorld War I (1914-1918)\u201d section. The \u201cMilitary and naval history\u201d section. The \u201cPeriod between World Wars (1919-1939)\u201d section. The \u201cMedieval and modern history, 476-\u201d section. The \u201cEastern Hemisphere\u201d section.\n\n[|Entrance||] History (General) Room entrance",
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
      "description": "This room has one shelf. You can see the History (General) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] History (General) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are five rows of books in this shelf. The \u201cEngland\u201d section with books about Description and travel.  Guidebooks, History, Local history and description, and General. The \u201cScotland\u201d section with books about Local history and description, History, Description and travel, and General. The \u201cIreland\u201d section with books about Local history and description, History, General, Description and travel, and Modern, 1603-. The \u201cWales\u201d section with books about General, Description and travel, Local history and description, and History. The \u201cBritish Empire.  Commonwealth of Nations.  The\u201d section.\n\n[|Entrance||] History of Great Britain Room entrance",
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
      "description": "This room has one shelf. You can see the History of Great Britain shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] History of Great Britain shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 22 rows of books in this shelf. The \u201cEgypt\u201d section with books about Antiquities, History, Local history and description, Local antiquities, and Ethnography. The \u201cHistory\u201d section. The \u201cMaghrib.  Barbary States\u201d section with books about Algeria, Sahara, Morocco, Tunisia (Tunis), and Libya. The \u201cZimbabwe.  Southern Rhodesia\u201d section with books about Local history and description, History, and Ethnography. The \u201cEastern Africa\u201d section with books about Ethiopia (Abyssinia), East Africa.  British East Africa, Kenya, Somalia.  Somaliland and adjacent territory, Uganda, Rwanda.  Ruanda-Urundi, Burundi, Tanzania.  Tanganyika.  German East Africa, Djibouti.  French Territory of the Afars and Issas., Islands (East African coast), Eritrea, History, and Northeast Africa. The \u201cSudan.  Anglo-Egyptian Sudan\u201d section with books about Ethnography, History, Local history and description, and Antiquities. The \u201cCentral Sub-Saharan Africa\u201d section. The \u201cSouth Africa\u201d section with books about History, Ethnography, Cape Province.  Cape of Good Hope, Transvaal.  South African Republic, KwaZulu-Natal.  Natal, and Orange Free State.  Oranje Vrystaat. The \u201cSouthern Africa\u201d section with books about Ethnography, History, and Local history and description. The \u201cWest Africa.  West Coast\u201d section with books about British West Africa, French West Africa.  French Sahara.  West Sahara., Cameroon (Cameroun, Kamerun), Congo (Kongo) River region, Portuguese-speaking West Africa, Liberia, Zaire.  Congo (Democratic Republic).  Belgian Congo, Spanish West Africa, Togo.  Togoland, Islands, Lower Guinea, and Upper Guinea. The \u201cZambia.  Northern Rhodesia\u201d section with books about Ethnography, History, and Local history and description. The \u201cAngola\u201d section with books about History, Local history and description, and Ethnography. The \u201cMozambique\u201d section with books about History, Local history and description, and Ethnography. The \u201cNamibia.  South-West Africa\u201d section with books about Ethnography, History, and Local history and description. The \u201cBotswana.  Bechuanaland\u201d section with books about Ethnography and History. The \u201cEthnography\u201d section. The \u201cMalawi.  Nyasaland\u201d section with books about Ethnography, History, and Local history and description. The \u201cNorth Africa\u201d section with books about History. The \u201cDescription and travel\u201d section. The \u201cLesotho.  Basutoland\u201d section with books about History, Local history and description, and Ethnography. The \u201cNorthwest Africa\u201d section. The \u201cSwaziland\u201d section with books about History, Ethnography, and Local history and description.\n\n[|Entrance||] History of Africa Room entrance",
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
      "description": "This room has one shelf. You can see the History of Africa shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] History of Africa shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are seven rows of books in this shelf. The \u201cSouthern Italy\u201d section with books about Naples.  Kingdom of the Two Sicilies, Sicily, General, and Sicily and Malta. The \u201cAncient Italy.  Rome to 476\u201d section. The \u201cOther cities (non-metropolitan), provinces, etc., A-Z\u201d section. The \u201cMedieval and modern Italy, 476-\u201d section with books about General, History, Antiquities.  Social life and customs.  Ethnography, and Description and travel. The \u201cNorthern Italy\u201d section with books about Venice, Genoa, Milan.  Lombardy, Piedmont.  Savoy, and General. The \u201cCentral Italy\u201d section with books about Rome (Modern city), Tuscany.  Florence, Papal States (States of the Church).  Holy See.  Vatican, and General. The \u201cMalta.  Maltese Islands\u201d section.\n\n[|Entrance||] History of Italy Room entrance\n[|Next||||||] Ancient Italy.  Rome to 476 shelf",
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
      "description": "There are two rows of books in this shelf. The \u201cHistory\u201d section with books about General and By period. The \u201cLocal history and description\u201d section with books about Rome (City) to 476, Regions in Italy, A-Z, Other cities, towns, etc., A-Z, and Regions outside of Italy, A-Z.\n\n[|Previous||] History of Italy shelf",
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
      "description": "This room has two shelves organized linearly from the entrance towards the back. You can see the History of Italy shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] History of Italy shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are eight rows of books in this shelf. The \u201cHistory\u201d section with books about By period, General, Early and medieval to 1515, and Military, naval, and political history.  Foreign relations. The \u201cLocal history and description\u201d section with books about Paris, Regions, provinces, departments, etc., A-Z, Other cities, towns, etc., A-Z, and North, East, etc. France. The \u201cDescription and travel\u201d section. The \u201cGeneral\u201d section. The \u201cAntiquities.  Social life and customs.  Ethnography\u201d section. The \u201cMonaco\u201d section. The \u201cAndorra\u201d section. The \u201cModern, 1515-\u201d section with books about 21st century.\n\n[|Entrance||] History of France Room entrance",
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
      "description": "This room has one shelf. You can see the History of France shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] History of France shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are eight rows of books in this shelf. The \u201cHistory\u201d section with books about By period, General, and Military, naval, and political history.  Foreign relations. The \u201cLocal history and description\u201d section with books about States, provinces, regions, etc., A-Z, Berlin, Other cities, towns, etc., A-Z, Bonn, and North and Central, Northeast, etc. Germany. The \u201cGeneral\u201d section. The \u201cPrussia\u201d section with books about History, General, Antiquities.  Social life and customs.  Ethnography, and Description and travel. The \u201cEast Germany\u201d section. The \u201cAntiquities.  Social life and customs.  Ethnography\u201d section. The \u201cWest Germany\u201d section. The \u201cDescription and travel\u201d section.\n\n[|Entrance||] History of Germany Room entrance",
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
      "description": "This room has one shelf. You can see the History of Germany shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] History of Germany shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are six rows of books in this shelf. The \u201cHistory\u201d section with books about By period, General, and Military, naval, and political history.  Foreign relations. The \u201cBelgium\u201d section with books about Local history and description, History, Antiquities.  Social life and customs.  Ethnography, Description and travel, and General. The \u201cLuxembourg\u201d section. The \u201cGeneral\u201d section. The \u201cDescription and travel\u201d section. The \u201cAntiquities.  Social life and customs.  Ethnography\u201d section.\n\n[|Entrance||] History of Low Countries.  Benelux Countries Room entrance",
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
      "description": "This room has one shelf. You can see the History of Low Countries.  Benelux Countries shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] History of Low Countries.  Benelux Countries shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are seven rows of books in this shelf. The \u201cSmaller island groups\u201d section with books about Hawaiian Islands.  Hawaii, New Guinea, and Samoan Islands. The \u201cAustralia\u201d section with books about Queensland, Ethnography, New South Wales, History, Victoria, Western Australia, Tasmania.  Van Diemen's Land, South Australia, Australian Capital Territory.  Canberra, Central Australia, Northern Territory of Australia, and Northern Australia. The \u201cNew Zealand\u201d section with books about Ethnography, Local history and description, and History. The \u201cHistory\u201d section. The \u201cPolynesia (General)\u201d section. The \u201cMicronesia (General)\u201d section. The \u201cMelanesia (General)\u201d section.\n\n[|Entrance||] History of Oceania (South Seas) Room entrance",
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
      "description": "This room has one shelf. You can see the History of Oceania (South Seas) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] History of Oceania (South Seas) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are four rows of books in this shelf. The \u201cHistory\u201d section with books about House of Romanov, 1613-1917, Soviet regime, 1918-1991, Revolution, 1917-1921, Early to 1613, and 1991-. The \u201cLocal history and description\u201d section with books about Russia (Federation).  Russian S.F.S.R., Ukraine, Soviet Central Asia.  West Turkestan, Southern Soviet Union, Baltic States, Siberia, Kazakhstan.  Kazakh S.S.R., Lithuania, Latvia, Georgia (Republic).  Georgian S.S.R.  Georgian, Estonia, Belarus.  Byelorussian S.S.R.  White Russia, Moldova.  Moldovian S.S.R.  Bessarabia, Turkmenistan.  Turkmen S.S.R.  Turkmenia, Uzbekistan.  Uzbek S.S.R., Azerbaijan.  Azerbaijan S.S.R., Kyrgyzstan.  Kirghiz S.S.R.  Kirghizia, Armenia (Republic).  Armenian S.S.R., and Tajikistan.  Tajik S.S.R.  Tadzhikistan. The \u201cEthnography\u201d section. The \u201cRegions not limited to one Republic, A-Z\u201d section.\n\n[|Entrance||] History of Russia.  Soviet Union.  Former Soviet Republics Room entrance\n[|Next||||||] History of Poland shelf",
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
      "description": "There are three rows of books in this shelf. The \u201cHistory\u201d section with books about To 1795, 1795-1918.  19th century (General), 1918-1945, 1945-1989.  People's Republic, and 1989-. The \u201cLocal history and description\u201d section with books about Warsaw (Warszawa), Gdansk (Danzig), and Krakow (Cracow). The \u201cEthnography\u201d section.\n\n[|Previous||] History of Russia.  Soviet Union.  Former Soviet Republics shelf",
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
      "description": "This room has two shelves organized linearly from the entrance towards the back. You can see the History of Russia.  Soviet Union.  Former Soviet Republics shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] History of Russia.  Soviet Union.  Former Soviet Republics shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are four rows of books in this shelf. The \u201cAntiquities.  Civilization.  Culture.  Ethnography\u201d section. The \u201cHistory\u201d section. The \u201cGeneral\u201d section. The \u201cGeography\u201d section.\n\n[|Entrance||] History of the Greco-Roman world Room entrance",
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
      "description": "This room has one shelf. You can see the History of the Greco-Roman world shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] History of the Greco-Roman world shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 10 rows of books in this shelf. The \u201cYugoslavia\u201d section with books about Local history and description, History, Antiquities.  Social life and customs.  Ethnography, Description and travel, and General. The \u201cRomania\u201d section with books about Description and travel, History, Local history and description, General, and Antiquities.  Social life and customs.  Ethnography. The \u201cTurkey\u201d section with books about History, Description and travel, Antiquities.  Social life and customs.  Ethnography, Local history and description (European Turkey), and General. The \u201cAntiquities.  Social life and customs.  Ethnography\u201d section. The \u201cHistory.  Balkan War, 1912-1913\u201d section. The \u201cAlbania\u201d section with books about History, Local history and description, Antiquities.  Social life and customs.  Ethnography, Description and travel, and General. The \u201cBulgaria\u201d section with books about General, History, Local history and description, Antiquities.  Social life and customs.  Ethnography, and Description and travel. The \u201cThrace\u201d section. The \u201cGeneral\u201d section. The \u201cDescription and travel\u201d section.\n\n[|Entrance||] History of Balkan Peninsula Room entrance",
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
      "description": "This room has one shelf. You can see the History of Balkan Peninsula shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] History of Balkan Peninsula shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are five rows of books in this shelf. The \u201cHistory\u201d section with books about By period, Military, naval, and political history.  Foreign relations, and General. The \u201cGeneral\u201d section. The \u201cLocal history and description\u201d section with books about Provinces, regions, ets., A-Z, Other cities, towns, etc., A-Z, Madrid, and Northern, Northwestern, Southern Spain. The \u201cDescription and travel\u201d section. The \u201cAntiquities.  Social life and customs.  Ethnography\u201d section.\n\n[|Entrance||] History of Spain Room entrance\n[|Next||||||] History of Portugal shelf",
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
      "description": "There are five rows of books in this shelf. The \u201cDescription and travel\u201d section. The \u201cHistory\u201d section with books about By period, General, and Military, naval, and political history.  Foreign relations. The \u201cLocal history and description\u201d section with books about Other cities, towns, etc., A-Z, Lisbon, and Provinces, regions, etc., A-Z. The \u201cAntiquities.  Social life and customs.  Ethnography\u201d section. The \u201cGeneral\u201d section.\n\n[|Previous||] History of Spain shelf",
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
      "description": "This room has two shelves organized linearly from the entrance towards the back. You can see the History of Spain shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] History of Spain shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are five rows of books in this shelf. The \u201cAntiquities.  Civilization.  Culture.  Ethnography\u201d section. The \u201cModern Greece\u201d section with books about General, Social life and customs.  Ethnography, Local history and description, History, and Description and travel. The \u201cMedieval Greece.  Byzantine Empire, 323-1453\u201d section with books about History, Antiquities.  Social life and customs.  Ethnography, General, and Military history.  Political history.  Empire and papacy. The \u201cAncient Greece\u201d section. The \u201cHistory\u201d section with books about By period and General.\n\n[|Entrance||] History of Greece Room entrance",
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
      "description": "This room has one shelf. You can see the History of Greece shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] History of Greece shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are three rows of books in this shelf. The \u201cHistory\u201d section. The \u201cEthnography\u201d section with books about Slavic peoples (General). The \u201cLocal history and description\u201d section with books about Danube River Valley, Black Sea region, Carpathian Mountain region, and Pannonia.\n\n[|Entrance||] History of Eastern Europe (General) Room entrance",
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
      "description": "This room has one shelf. You can see the History of Eastern Europe (General) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] History of Eastern Europe (General) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are six rows of books in this shelf. The \u201cHungary\u201d section with books about History, Description and travel.  Antiquities.  Ethnography, General, and Local history and description. The \u201cCzechoslovakia\u201d section with books about History, General.  Description and travel.  Antiquities.  Social, Slovakia, Local history and description of Czech lands, and Ethnography. The \u201cAustria.  Austro-Hungarian Empire\u201d section. The \u201cHistory\u201d section with books about Military, naval, and political history.  Foreign relations, General, and By period. The \u201cLocal history and description\u201d section with books about Vienna, Provinces, regions, etc., and Other cities, towns, etc., A-Z. The \u201cLiechtenstein\u201d section.\n\n[|Entrance||] History of Austria.  Liechtenstein.  Hungary.  Czechoslovakia Room entrance",
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
      "description": "This room has one shelf. You can see the History of Austria.  Liechtenstein.  Hungary.  Czechoslovakia shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] History of Austria.  Liechtenstein.  Hungary.  Czechoslovakia shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are nine rows of books in this shelf. The \u201cNorway\u201d section with books about General, Local history and description, History, Antiquities.  Social life and customs.  Ethnography, and Description and travel. The \u201cHistory\u201d section with books about By period, General, and Military, naval, and political history.  Foreign relations. The \u201cSweden\u201d section with books about Local history and description, General, History, Antiquities.  Social life and customs.  Ethnography, and Description and travel. The \u201cFinland\u201d section with books about Description and travel, History, General, Antiquities.  Social life and customs.  Ethnography, and Local history and description. The \u201cDenmark\u201d section with books about Local history and description, History, Antiquities.  Social life and customs.  Ethnography, Description and travel, and General. The \u201cGeneral\u201d section. The \u201cAntiquities.  Social life and customs.  Ethnography\u201d section. The \u201cIceland\u201d section with books about Local history and description, General.  Description and travel, etc., and History. The \u201cDescription and travel\u201d section.\n\n[|Entrance||] History of Northern Europe.  Scandinavia Room entrance",
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
      "description": "This room has one shelf. You can see the History of Northern Europe.  Scandinavia shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] History of Northern Europe.  Scandinavia shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are five rows of books in this shelf. The \u201cGeneral\u201d section. The \u201cHistory\u201d section with books about Military and political history.  Foreign relations, By period, and General. The \u201cLocal history and description\u201d section with books about Alps, Cities, towns, etc., A-Z, Cantons (and cantonal capitals), and Regions, peaks, etc., A-Z. The \u201cAntiquities.  Social life and customs.  Ethnography\u201d section. The \u201cDescription and travel\u201d section.\n\n[|Entrance||] History of Switzerland Room entrance",
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
      "description": "This room has one shelf. You can see the History of Switzerland shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] History of Switzerland shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are two rows of books in this shelf. The \u201cHistory\u201d section. The \u201cGeneral\u201d section.\n\n[|Entrance||] History of Central Europe Room entrance",
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
      "description": "This room has one shelf. You can see the History of Central Europe shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] History of Central Europe shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are five rows of books in this shelf. The \u201cLocal history and description\u201d section with books about Amsterdam. The \u201cHistory\u201d section with books about By period, Military, naval, and political history, etc.  Foreign relations, and General. The \u201cAntiquities.  Social life and customs.  Ethnography\u201d section. The \u201cDescription and travel\u201d section. The \u201cGeneral\u201d section.\n\n[|Entrance||] History of Netherlands (Holland) Room entrance",
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
      "description": "This room has one shelf. You can see the History of Netherlands (Holland) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] History of Netherlands (Holland) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] History of Romanies Room entrance",
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
      "description": "This room has one shelf. You can see the History of Romanies shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] History of Romanies shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 11 rows of books in this shelf. The \u201cHistory\u201d section with books about General, Military history, Naval history, Diplomatic history.  Foreign and general relations., Historical geography, Historiography, and Political history. The \u201cRevolution to the Civil War, 1775/1783-1861\u201d section with books about Slavery in the United States.  Antislavery, By period, General, Political history, Biography (Late eighteenth century), and Collected works of American statesmen. The \u201cGeneral\u201d section. The \u201cCivil War period, 1861-1865\u201d section with books about The Civil War, 1861-1865 and Lincoln's administrations, 1861-April 15, 1865. The \u201cLate nineteenth century, 1865-1900\u201d section with books about McKinley's first administration, 1897-1901, Biography, Hayes' administration, 1877-1881, Arthur's administration, September 19, 1881-1885, Grant's administrations, 1869-1877, Cleveland's first administration, 1885-1889, Benjamin Harrison's administration, 1889-1893, Johnson's administration, April 15, 1865-1869, General, Collected works of American statesmen, Cleveland's second administration, 1893-1897, Diplomatic history.  Foreign and general, and Garfield's administration, March 4-September. The \u201cThe Revolution, 1775-1783\u201d section. The \u201cElements in the population\u201d section with books about Afro-Americans. The \u201cLater twentieth century, 1961-2000\u201d section with books about Biography (General), Clinton's administrations, 1993-2001, Kennedy's administration, 1961-November 22, 1963, Diplomatic history.  Foreign and general, Carter's administration, 1977-1981, Johnson's administrations, November 22, 1963-1969, Ford's administration, August 9, 1974-1977, Reagan's administrations, 1981-1989, Nixon's administrations, 1969-August 9, 1974, George H.W. Bush's administration, 1989-1993, General, Political history, and Sources and documents. The \u201cTwentieth century\u201d section with books about General, Theodore Roosevelt's administrations,, 1919-1933.  Harding-Coolidge-Hoover era.  \"The, Taft's administration, 1909-1913, Eisenhower's administrations, 1953-1961, Franklin Delano Roosevelt's administrations,, Wilson's administrations, 1913-1921, Truman's administrations, April 12, 1945-1953, and McKinley's second administration, March 4-. The \u201cColonial history (1607-1775)\u201d section with books about By period and General. The \u201cGeneral\u201d section with books about Political history.\n\n[|Entrance||] United States Room entrance\n[|Next||||||] America shelf",
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
      "description": "There are six rows of books in this shelf. The \u201cIndians of North America\u201d section with books about Indian tribes and cultures and Indian wars. The \u201cPre-Columbian America.  The Indians\u201d section. The \u201cDiscovery of America and early explorations\u201d section with books about Columbus, Post-Columbian period.  El Dorado, and Pre-Columbian period. The \u201cNorth America\u201d section. The \u201cGeneral\u201d section. The \u201cDescriptive accounts of America.  Earliest to 1810\u201d section.\n\n[|Previous||] United States shelf\n[|Next||||||] Twenty-first century shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] America shelf\n[|Next||||||] George W. Bush's administrations, 2001-2009 shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Twenty-first century shelf\n[|Next||||||] Barack Obama's administration, 2009- shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] George W. Bush's administrations, 2001-2009 shelf",
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
      "description": "This room has five shelves organized linearly from the entrance towards the back. You can see the United States shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] United States shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 70 rows of books in this shelf. The \u201cKansas\u201d section. The \u201cMaryland\u201d section. The \u201cNew Hampshire\u201d section. The \u201cIllinois\u201d section. The \u201cAlaska\u201d section with books about Bering Sea and Aleutian Islands. The \u201cLouisiana\u201d section. The \u201cMassachusetts\u201d section. The \u201cIowa\u201d section. The \u201cVirginia\u201d section. The \u201cTennessee\u201d section. The \u201cTexas\u201d section. The \u201cMissouri\u201d section. The \u201cWisconsin\u201d section. The \u201cColorado\u201d section. The \u201cPennsylvania\u201d section. The \u201cThe West.  Trans-Mississippi Region.  Great Plains\u201d section. The \u201cOregon\u201d section. The \u201cOhio\u201d section. The \u201cConnecticut\u201d section. The \u201cUtah\u201d section. The \u201cNew Jersey\u201d section. The \u201cThe South.  South Atlantic States\u201d section. The \u201cMontana\u201d section. The \u201cNew York\u201d section. The \u201cWyoming\u201d section. The \u201cMinnesota\u201d section. The \u201cCalifornia\u201d section. The \u201cMississippi River and Valley.  Middle West\u201d section. The \u201cGeorgia\u201d section. The \u201cNevada\u201d section. The \u201cSouth Carolina\u201d section. The \u201cIdaho\u201d section. The \u201cDistrict of Columbia.  Washington\u201d section. The \u201cRocky Mountains.  Yellowstone National Park\u201d section. The \u201cFlorida\u201d section. The \u201cNew England\u201d section. The \u201cThe Northwest\u201d section. The \u201cNew Southwest.  Colorado River, Canyon, and Valley\u201d section. The \u201cMichigan\u201d section. The \u201cPacific Northwest.  Columbia River and Valley.\u201d section. The \u201cArkansas\u201d section. The \u201cArizona\u201d section. The \u201cAlabama\u201d section. The \u201cOklahoma\u201d section. The \u201cNorth Carolina\u201d section. The \u201cKentucky\u201d section. The \u201cIndiana\u201d section. The \u201cThe Lake region.  Great Lakes\u201d section. The \u201cMississippi\u201d section. The \u201cAtlantic coast.  Middle Atlantic States\u201d section. The \u201cMaine\u201d section. The \u201cSouth Dakota\u201d section. The \u201cWashington\u201d section. The \u201cNew Mexico\u201d section. The \u201cMissouri River and Valley\u201d section. The \u201cThe territories of the United States (General)\u201d section. The \u201cPacific States\u201d section. The \u201cVermont\u201d section. The \u201cNebraska\u201d section. The \u201cRhode Island\u201d section. The \u201cWest Virginia\u201d section. The \u201cOld Southwest.  Lower Mississippi Valley\u201d section. The \u201cNorth Dakota\u201d section. The \u201cOhio River and Valley\u201d section. The \u201cDelaware\u201d section. The \u201cOld Northwest.  Northwest Territory\u201d section. The \u201cGulf States.  West Florida\u201d section. The \u201cInsular possessions of the United States (General)\u201d section. The \u201cCentral American, West Indian, and other countries\u201d section. The \u201cCascade Range\u201d section.\n\n[|Entrance||] Latin America.  Spanish America Room entrance\n[|Next||||||] Latin America.  Spanish America shelf",
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
      "description": "There are 17 rows of books in this shelf. The \u201cWest Indies\u201d section. The \u201cCaribbean area.  Caribbean Sea\u201d section. The \u201cCentral America\u201d section with books about Mayas. The \u201cSouth America\u201d section with books about General, Brazil, Colombia, Peru, Argentina, Venezuela, French Guiana, Chile, Bolivia, Uruguay, Paraguay, Guyana.  British Guiana, Ecuador, Falkland Islands, Surinam, and Guiana. The \u201cMexico\u201d section. The \u201cGuatemala\u201d section. The \u201cGreater Antilles\u201d section with books about Haiti (Island).  Hispaniola, Cuba, Puerto Rico, Jamaica, and Navassa. The \u201cLesser Antilles\u201d section with books about Individual islands, British West Indies, Virgin Islands of the United States, Netherlands West Indies.  Dutch West Indies, French West Indies, Leeward islands, Islands along Venezuela coast, and Windward Islands. The \u201cSalvador (El Salvador)\u201d section. The \u201cBahamas\u201d section. The \u201cNicaragua\u201d section. The \u201cCosta Rica\u201d section. The \u201cLatin America (General)\u201d section. The \u201cBelize\u201d section. The \u201cPanama\u201d section with books about Canal Zone.  Panama Canal. The \u201cHonduras\u201d section. The \u201cBermudas\u201d section.\n\n[|Previous||] United States local history shelf\n[|Next||||||] Canada shelf",
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
      "description": "There are 22 rows of books in this shelf. The \u201cGeneral\u201d section. The \u201cCanadian Northwest.  Northwest Territories\u201d section. The \u201cOntario\u201d section. The \u201cBritish Columbia\u201d section. The \u201cSaskatchewan\u201d section. The \u201cQuebec\u201d section. The \u201cAlberta\u201d section. The \u201cNew Brunswick\u201d section. The \u201cYukon\u201d section. The \u201cManitoba\u201d section. The \u201cNova Scotia.  Acadia\u201d section. The \u201cNewfoundland\u201d section with books about Labrador. The \u201cPrince Edward Island\u201d section. The \u201cMaritime provinces.  Atlantic coast of Canada\u201d section. The \u201cArctic regions\u201d section. The \u201cRocky Mountains of Canada\u201d section. The \u201cNunavut\u201d section. The \u201cThe Labrador Peninsula\u201d section. The \u201cMackenzie\u201d section. The \u201cKeewatin\u201d section. The \u201cSt. Lawrence Gulf, River and Valley (General)\u201d section. The \u201cFranklin\u201d section.\n\n[|Previous||] Latin America.  Spanish America shelf\n[|Next||||||] Mexico shelf",
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
      "description": "There is one row of books in this shelf. The \u201cAntiquities.  Indians\u201d section.\n\n[|Previous||] Canada shelf\n[|Next||||||] Saint Pierre and Miquelon shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Mexico shelf",
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
      "description": "This room has five shelves organized linearly from the entrance towards the back. You can see the United States local history shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] United States local history shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 15 rows of books in this shelf. The \u201cSpecial voyages and travels\u201d section. The \u201cTravel.  Voyages and travels (General)\u201d section with books about Travel and state.  Tourism. The \u201cArctic and Antarctic regions\u201d section. The \u201cAdventures, shipwrecks, buried treasure, etc.\u201d section. The \u201cHistory of geography\u201d section. The \u201cPhilosophy.  Relation to other topics.  Methodology\u201d section. The \u201cSeafaring life, ocean travel, etc.\u201d section. The \u201cHistory of discoveries, explorations, and travel\u201d section. The \u201cGeographers\u201d section. The \u201cToponymy\u201d section. The \u201cGreat cities of the world\u201d section. The \u201cAerial geography\u201d section. The \u201cHistorical geography\u201d section. The \u201cNorthern and Southern Hemispheres\u201d section. The \u201cTropics (General)\u201d section.\n\n[|Entrance||] Maps Room entrance\n[|Next||||||] Atlases shelf",
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
      "description": "There are five rows of books in this shelf. The \u201cBy region or country\u201d section with books about Eastern Hemisphere.  Eurasia, Africa, etc., America.  Western Hemisphere, Oceans (General), and Antarctica. The \u201cWorld atlases.  Atlases of the Earth\u201d section. The \u201cAmerica.  Western Hemisphere\u201d section with books about North America. The \u201cNorthern and Southern Hemispheres\u201d section. The \u201cAtlases of the moon, planets, etc.\u201d section.\n\n[|Previous||] Geography (General) shelf\n[|Next||||||] Maps shelf",
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
      "description": "There are three rows of books in this shelf. The \u201cBy region or country\u201d section with books about Eastern Hemisphere.  Eurasia, Africa, etc.. The \u201cAmerica.  Western Hemisphere\u201d section with books about North America. The \u201cWorld.  Earth\u201d section.\n\n[|Previous||] Atlases shelf\n[|Next||||||] Globes shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Maps shelf",
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
      "description": "This room has four shelves organized linearly from the entrance towards the back. You can see the Geography (General) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Geography (General) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are eight rows of books in this shelf. The \u201cGames and amusements\u201d section with books about Indoor games and amusements, Children's games and amusements, Parties.  Party games and stunts, Parlor magic and tricks, Darts, and Hobbies (General). The \u201cDancing\u201d section. The \u201cPhysical education and training\u201d section with books about Gymnastics.  Gymnastic exercises, School and college athletics.  Intramural, Physical education facilities.  Sports facilities, Physical measurements.  Physical tests, etc., and Nudism.  Sunbathing. The \u201cSports\u201d section with books about Ball games: Baseball, football, golf, etc., Cycling.  Bicycling.  Motorcycling, Track and field athletics, Water sports: Canoeing, sailing, yachting, scuba, Winter sports: Ice hockey, skiing, bobsledding,, Athletic contests.  Sports events, Coaching, Fighting sports: Bullfighting, boxing, fencing, etc., Automobile travel.  Motoring.  Automobile racing, Wrestling, Shooting.  Archery, Professionalism in sports.  Professional sports (General), Athletic and sporting goods, supplies, etc., Air sports: Airplane flying, kiteflying, bungee jumping, etc., and Umpires.  Sports officiating. The \u201cOutdoor life.  Outdoor recreation\u201d section with books about Hiking.  Pedestrian tours, Mountaineering, Camping, Caving.  Spelunking, and Orienteering.  Wilderness survival. The \u201cCircuses, spectacles, etc.\u201d section. The \u201cRecreation leadership.  Administration of recreation services\u201d section. The \u201cRecreational areas and facilities.  Recreation centers\u201d section.\n\n[|Entrance||] Recreation.  Leisure Room entrance",
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
      "description": "This room has one shelf. You can see the Recreation.  Leisure shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Recreation.  Leisure shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are two rows of books in this shelf. The \u201cCartography\u201d section with books about Maps.  By region or country, Map drawing, modeling, printing, reading, etc., Collections of maps, globes, etc.  Map libraries, Globe making.  Globes, Cadastral mapping, Projection, World maps, general atlases, etc., Aerial cartography, Statistical mapping, and Cartographers. The \u201cSurveys (General)\u201d section.\n\n[|Entrance||] Mathematical geography.  Cartography Room entrance",
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
      "description": "This room has one shelf. You can see the Mathematical geography.  Cartography shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Mathematical geography.  Cartography shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are three rows of books in this shelf. The \u201cEthnology.  Social and cultural anthropology\u201d section with books about Ethnic groups and races, Cultural traits, customs, and institutions, Collected ethnographies, Culture and cultural processes, and Applied anthropology. The \u201cPhysical anthropology.  Somatology\u201d section with books about Human evolution, Anthropometry, Man as an animal.  Simian traits versus human traits, Human variation, Race (General), and Medical anthropology. The \u201cPrehistoric archaeology\u201d section.\n\n[|Entrance||] Anthropology Room entrance",
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
      "description": "This room has one shelf. You can see the Anthropology shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Anthropology shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are four rows of books in this shelf. The \u201cBy region or country\u201d section. The \u201cBy subject\u201d section with books about Animals, plants, and minerals, Folklore relating to private life, Medicine.  Folk medicine, Cosmic phenomena, weather lore, Supernatural beings, demonology, fairies, ghosts,, Geographical topics, Occupations, Mythical places, Signs and symbols, Costume, jewelry, and Transportation, travel, commerce, etc.. The \u201cFolk literature (General)\u201d section. The \u201cFolk beliefs, superstitions, etc. (General)\u201d section.\n\n[|Entrance||] Folklore Room entrance",
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
      "description": "This room has one shelf. You can see the Folklore shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Folklore shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are eight rows of books in this shelf. The \u201cCostume.  Dress.  Fashion\u201d section. The \u201cCustoms relative to public and social life\u201d section. The \u201cCustoms relative to private life\u201d section. The \u201cHuman body and its parts.  Personal beauty\u201d section. The \u201cCustoms relative to special classes\u201d section with books about By occupation and By birth, rank, etc.. The \u201cHouses.  Dwellings\u201d section. The \u201cCustoms relative to transportation and travel\u201d section. The \u201cChurches and church going\u201d section.\n\n[|Entrance||] Manners and customs (General) Room entrance",
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
      "description": "This room has one shelf. You can see the Manners and customs (General) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Manners and customs (General) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 13 rows of books in this shelf. The \u201cMarine resources.  Applied oceanography\u201d section. The \u201cDynamics of the ocean\u201d section with books about Currents, Waves, Tides, Ocean circulation, and Water masses and oceanic mixing. The \u201cOcean-atmosphere interaction\u201d section. The \u201cMarine pollution.  Sea water pollution\u201d section. The \u201cOceanography.  By region\u201d section. The \u201cEstuarine oceanography\u201d section. The \u201cUnderwater exploration\u201d section. The \u201cChemical oceanography\u201d section. The \u201cMarine sediments\u201d section. The \u201cPhysical oceanography\u201d section with books about Temperature, Density, and Optical oceanography. The \u201cSubmarine topography\u201d section. The \u201cOceanographic expeditions\u201d section. The \u201cSeawater\u201d section.\n\n[|Entrance||] Oceanography Room entrance",
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
      "description": "This room has one shelf. You can see the Oceanography shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Oceanography shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are three rows of books in this shelf. The \u201cHydrology.  Water\u201d section with books about Ground and surface waters. The \u201cGeomorphology.  Landforms.  Terrain\u201d section with books about Coasts, Other natural landforms: Floodplains, caves,, Islands, Mountains.  Orography, Reefs, Slopes, and Climatic geomorphology. The \u201cNatural disasters\u201d section.\n\n[|Entrance||] Physical geography Room entrance",
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
      "description": "This room has one shelf. You can see the Physical geography shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Physical geography shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are four rows of books in this shelf. The \u201cEnvironmental policy\u201d section. The \u201cEnvironmental management\u201d section. The \u201cEnvironmentalism.  Green movement\u201d section. The \u201cEnvironmental education\u201d section.\n\n[|Entrance||] Environmental sciences Room entrance",
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
      "description": "This room has one shelf. You can see the Environmental sciences shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Environmental sciences shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are four rows of books in this shelf. The \u201cBy region or country\u201d section. The \u201cSettlements\u201d section with books about Cities.  Urban geography and Rural settlements.  Rural geography. The \u201cEnvironmental influences on humans\u201d section. The \u201cHuman influences on the environment\u201d section.\n\n[|Entrance||] Human ecology.  Anthropogeography Room entrance",
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
      "description": "This room has one shelf. You can see the Human ecology.  Anthropogeography shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Human ecology.  Anthropogeography shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are seven rows of books in this shelf. The \u201cBusiness\u201d section with books about Vocational guidance.  Career devlopment, Accounting.  Bookkeeping, Department stores.  Mail order business., Canvassing.  Peddling, Marketing.  Distribution of products, Personnel management.  Employment, Office equipment and supplies, Office management, Industrial psychology, Advertising, Business ethics, Business communication, Purchasing.  Selling.  Sales personnel.  Sales, Secondhand trade, Retail trade, Business mathematics.  Commercial arithmetic, Business records management, Markets.  Fairs, Wholesale trade, Shipment of goods.  Delivery of goods, Shopping centers.  Shopping malls, Warehouses.  Storage, and Black market. The \u201cBy region or country\u201d section. The \u201cBoards of trade.  Chambers of commerce.\u201d section. The \u201cTariff.  Free trade.  Protectionism\u201d section. The \u201cCommodities.  Commercial products\u201d section. The \u201cCommercial geography.  Economic geography\u201d section. The \u201cBalance of trade\u201d section.\n\n[|Entrance||] Commerce Room entrance",
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
      "description": "This room has one shelf. You can see the Commerce shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Commerce shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are three rows of books in this shelf. The \u201cCommunism/socialism in relation to special\u201d section. The \u201cUtopias.  The ideal state\u201d section. The \u201cCommunism: Utopian socialism, collective\u201d section.\n\n[|Entrance||] Socialism.  Communism.  Anarchism Room entrance",
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
      "description": "This room has one shelf. You can see the Socialism.  Communism.  Anarchism shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Socialism.  Communism.  Anarchism shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 20 rows of books in this shelf. The \u201cIndustry\u201d section with books about Corporations, Cooperation.  Cooperative societies, Industrial policy.  The state and industrial, Small and medium-sized businesses, artisans,, Home labor.  Home-based businesses, Large industry.  Factory system.  Big business, Trade associations, Contracting.  Letting of contracts, Industrialization, Sweatshops, and Rural industries. The \u201cLabor.  Work.  Working class\u201d section with books about Classes of labor, By region or country, Industrial hygiene. Industrial welfare, By industry or trade, Trade unions.  Labor unions.  Workers', Labor disputes.  Strikes and lockouts, Social insurance.  Social security.  Pension, Labor market.  Labor supply.  Labor demand, Industrial sociology.  Social conditions of, Vocational rehabilitation.  Employment of, Wages, Hours of labor, Labor systems, Industrial relations, Labor policy.  Labor and the state, Industrial arbitration.  Mediation  and, Employee participation in management., Professions (General).  Professional employees, Cost and standard of living, Employers' associations, and Labor in politics.  Political activity of the. The \u201cLand use\u201d section with books about Real estate business, Land reform.  Agrarian reform, Small holdings.  Peasant proprietors., Communal ownership, Landlord and peasant, Large holdings, Consolidation of land holdings, Nationalization (Agrarian socialism), and Municipal ownership. The \u201cManagement.  Industrial management\u201d section. The \u201cOther\u201d section. The \u201cSpecial industries and trades\u201d section with books about Miscellaneous industries and trades, Mechanical industries, Manufacturing industries, Agricultural industries, Mineral industries.  Metal trade, Chemical industries, Construction industry, Energy industries.  Energy policy.  Fuel trade, and Pharmaceutical industry. The \u201cIndustrial productivity\u201d section. The \u201cWork groups.  Team work in industry.\u201d section. The \u201cCosts\u201d section. The \u201cCapital.  Capital investments\u201d section. The \u201cTechnological innovations.  Automation\u201d section. The \u201cSocial responsibility of business\u201d section. The \u201cAgriculture\u201d section with books about Utilization and culture of special classes of, Agricultural classes, Cooperative agriculture, Collective farms, Agricultural associations, societies, etc., Government owned and operated farms.  State, Size of farms, Irrigation, International cooperation, Sharecropping, Gleaning, and Reclamation of agricultural land.  Melioration. The \u201cEconomic growth, development, planning\u201d section. The \u201cRisk in industry.  Risk management\u201d section. The \u201cCrisis management.  Emergency management.\u201d section. The \u201cDelegation of authority.  Decentralization.\u201d section. The \u201cStandardization.  Simplification.  Waste\u201d section. The \u201cCompetition\u201d section. The \u201cLocation of industry\u201d section.\n\n[|Entrance||] Industries.  Land use.  Labor Room entrance",
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
      "description": "This room has one shelf. You can see the Industries.  Land use.  Labor shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Industries.  Land use.  Labor shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 11 rows of books in this shelf. The \u201cBanking\u201d section with books about Special classes of banks and financial, By region or country, Electronic funds transfers, Accounting.  Bookkeeping, Bank mergers, Interest rates.  Interest tables, Insurance of deposits.  Deposit insurance, Bank loans.  Bank credit.  Commercial loans, Bank accounts.  Bank deposits.  Deposit, Acceptances, Banks and the state.  State supervision of, Drafts.  Checks, Bank reserves.  Bank liquidity.  Loan loss, Discount, Data processing, and Bank stocks.  Banking as an investment. The \u201cMoney\u201d section with books about By region or country, Paper money, Precious metals.  Bullion, Counterfeiting, Bimetallism, Legal tender, Small coins, International coinage, and Mints.  Assaying. The \u201cInsurance\u201d section with books about Fire insurance, Life insurance, Insurance business.  Insurance management, Other insurance, Health insurance, By region or country, Business insurance, Casualty insurance, Accident insurance, Government policy.  State supervision, Government insurance, and Insurance for professions.  Malpractice. The \u201cFinance management.  Business finance.\u201d section. The \u201cCredit.  Debt.  Loans\u201d section. The \u201cPersonal finance\u201d section. The \u201cInvestment, capital formation, speculation\u201d section with books about By region or country, Speculation, Stock exchanges, Foreign investments, Investment companies.  Investment trusts., Stockbrokers.  Security dealers.  Investment, and Government securities.  Industrial securities.. The \u201cForeign exchange.  International finance.\u201d section. The \u201cTrust services.  Trust companies\u201d section. The \u201cLotteries\u201d section. The \u201cLiquidity\u201d section.\n\n[|Entrance||] Finance Room entrance",
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
      "description": "This room has one shelf. You can see the Finance shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Finance shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 12 rows of books in this shelf. The \u201cBusiness cycles.  Economic fluctuations\u201d section. The \u201cHistory of economics.  History of economic\u201d section. The \u201cIncome.  Factor shares\u201d section with books about Interest, Entrepreneurship.  Risk and uncertainty., and Profit. The \u201cEconomics as a science.  Relation to other\u201d section. The \u201cConsumption.  Demand\u201d section. The \u201cDemography.  Population.  Vital events\u201d section. The \u201cCapital.  Capitalism\u201d section. The \u201cCompetition.  Production.  Wealth\u201d section. The \u201cMethodology\u201d section with books about Mathematical economics.  Quantitative methods. The \u201cPrice\u201d section. The \u201cWelfare theory\u201d section. The \u201cValue.  Utility\u201d section.\n\n[|Entrance||] Economic theory.  Demography Room entrance",
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
      "description": "This room has one shelf. You can see the Economic theory.  Demography shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Economic theory.  Demography shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are nine rows of books in this shelf. The \u201cThe family.  Marriage.  Home\u201d section with books about Children.  Child development, Aged.  Gerontology (Social aspects)., Divorce, Youth.  Adolescents.  Teenagers, Adulthood, Parents.  Parenthood, Family size, Man-woman relationships.  Courtship.  Dating, Single people, Eugenics, Adultery, Young men and women, Widows and widowers.  Widowhood, Polygamy, Illegitimacy.  Unmarried mothers, Temporary marriage.  Trial marriage., Free love, The state and marriage, Matrimonial bureaus.  Marriage brokerage, The church and marriage, Desertion, Breach of promise, Matrimonial advertisements, and Polyandry. The \u201cWomen.  Feminism\u201d section with books about Women's clubs. The \u201cSexual life\u201d section with books about Sexual behavior and attitudes.  Sexuality, Prostitution, Homosexuality.  Lesbianism, Sex instruction and sexual ethics, Bisexuality, Sexual deviations, Masturbation, Transexualism, Emasculation.  Eunuchs, etc., Sadism.  Masochism.  Fetishism, etc., and Transvestism. The \u201cMen\u201d section. The \u201cSex role\u201d section. The \u201cThanatology.  Death.  Dying\u201d section. The \u201cErotica\u201d section. The \u201cLife style\u201d section. The \u201cLife skills.  Coping skills.  Everyday living\u201d section.\n\n[|Entrance||] The Family.  Marriage.  Women Room entrance",
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
      "description": "This room has one shelf. You can see the The Family.  Marriage.  Women shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] The Family.  Marriage.  Women shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Social sciences (General) Room entrance",
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
      "description": "This room has one shelf. You can see the Social sciences (General) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Social sciences (General) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 21 rows of books in this shelf. The \u201cTelecommunication industry.  Telegraph\u201d section with books about Wireless telegraph.  Radiotelegraphy. The \u201cPostal service.  Stamps.  Philately\u201d section. The \u201cStage lines\u201d section. The \u201cWater transportation\u201d section with books about Shipping and Waterways. The \u201cAir transportation.  Airlines\u201d section. The \u201cRailroads.  Rapid transit systems\u201d section. The \u201cExpress service\u201d section. The \u201cFerries\u201d section. The \u201cTelephone industry\u201d section. The \u201cAutomotive transportation\u201d section. The \u201cTraffic engineering.  Roads and highways.\u201d section with books about Traffic surveys (General), Bridges, and Tunnels.  Vehicular tunnels. The \u201cUrban transportation\u201d section. The \u201cMessenger service\u201d section. The \u201cCellular telephone services industry.  Wireless\u201d section. The \u201cFreight (General)\u201d section. The \u201cRadio and television broadcasting\u201d section. The \u201cPassenger traffic (General)\u201d section. The \u201cTransportation geography.  Trade routes\u201d section. The \u201cArtificial satellite telecommunications\u201d section. The \u201cSignaling\u201d section. The \u201cPneumatic service\u201d section.\n\n[|Entrance||] Transportation and communications Room entrance",
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
      "description": "This room has one shelf. You can see the Transportation and communications shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Transportation and communications shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 12 rows of books in this shelf. The \u201cThese are obsolete numbers no longer used\u201d section. The \u201cGroups and organizations\u201d section with books about Organizational sociology.  Organization theory and Community. The \u201cSocial change\u201d section. The \u201cHistory of sociology.  History of sociological\u201d section with books about Schools of sociology.  Schools of social thought. The \u201cSocial psychology\u201d section with books about Social perception.  Social cognition, Social influence.  Social pressure, and Interpersonal relations.  Social behavior. The \u201cTheory.  Method.  Relations to other subjects\u201d section. The \u201cCulture\u201d section. The \u201cSocial control\u201d section. The \u201cSocial systems\u201d section. The \u201cDeviant behavior.  Social deviance\u201d section. The \u201cSocial structure\u201d section. The \u201cSocial institutions\u201d section.\n\n[|Entrance||] Sociology Room entrance",
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
      "description": "This room has one shelf. You can see the Sociology shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Sociology shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 10 rows of books in this shelf. The \u201cRevenue.  Taxation.  Internal revenue\u201d section with books about By region or country, Administrative fees.  User charges., Income tax, Property tax, Revenue from sources other than taxation, Tax incidence.  Tax shifting.  Tax equity, Inflation and taxation, Progressive taxation, Tax exemption, Direct taxation, Capitation.  Poll tax, Taxation of government property, and Tax revenue estimating. The \u201cPublic debts\u201d section with books about By region or country and Sinking funds.  Amortization. The \u201cCustoms administration\u201d section. The \u201cExpenditures.  Government spending\u201d section. The \u201cLocal finance.  Municipal finance\u201d section. The \u201cIncome and expenditure.  Budget\u201d section. The \u201cBy region or country\u201d section. The \u201cPublic accounting.  Auditing\u201d section. The \u201cHistory\u201d section. The \u201cPeriodicals.  Serials.  By region or country\u201d section.\n\n[|Entrance||] Public finance Room entrance",
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
      "description": "This room has one shelf. You can see the Public finance shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Public finance shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are three rows of books in this shelf. The \u201cBy region or country\u201d section. The \u201cCommunity centers.  Social centers\u201d section. The \u201cThe church and social problems\u201d section.\n\n[|Entrance||] Social history and conditions.  Social problems. Room entrance",
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
      "description": "This room has one shelf. You can see the Social history and conditions.  Social problems. shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Social history and conditions.  Social problems. shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are seven rows of books in this shelf. The \u201cClubs.  Clubs and societies for special classes\u201d section. The \u201cOther societies.  By classes\u201d section with books about Religious societies, Race societies, Political and \"patriotic\" societies, Benevolent and \"friendly\" societies and, and Occupation societies. The \u201cFreemasons\u201d section. The \u201cSecret societies\u201d section. The \u201cOdd Fellows\u201d section. The \u201cKnights of Pythias\u201d section. The \u201cOther societies\u201d section.\n\n[|Entrance||] Societies: secret, benevolent, etc. Room entrance",
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
      "description": "This room has one shelf. You can see the Societies: secret, benevolent, etc. shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Societies: secret, benevolent, etc. shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 20 rows of books in this shelf. The \u201cProtection, assistance and relief\u201d section with books about Poor in cities.  Slums, Special classes, Protection of animals.  Animal rights.  Animal, Special classes.  By race or ethnic group, Immigrants, Animal experimentation.  Anti-vivisection, Mendicancy.  Vagabondism.  Tramps., and Special classes.  By occupation. The \u201cCriminology\u201d section with books about Crimes and offenses, Crimes and criminal classes, Victims of crimes.  Victimology, Criminal anthropology, and Criminal classes. The \u201cAlcoholism.  Intemperance.  Temperance reform\u201d section. The \u201cCriminal justice administration\u201d section with books about Police.  Detectves.  Constabulary, Penology.  Prisons.  Corrections, Gun control, By region or country, Prevention of crime, methods, etc., Private security services, and Social work with delinquents and criminals. The \u201cBy region or country\u201d section. The \u201cSocial service.  Social work.  Charity\u201d section. The \u201cSpecial classes\u201d section with books about Children, Young adults.  Youth.  Teenagers, Aged, and Women. The \u201cDrug habits.  Drug abuse\u201d section. The \u201cWomen and charity\u201d section. The \u201cTobacco habit\u201d section. The \u201cEmergency management\u201d section with books about Relief in case of disasters. The \u201cFree professional services\u201d section. The \u201cRefugee problems\u201d section. The \u201cInternational social work\u201d section. The \u201cAccidents.  Prevention of accidents\u201d section. The \u201cThe church and charity\u201d section. The \u201cDegeneration\u201d section. The \u201cLife saving\u201d section. The \u201cSelf-help groups\u201d section. The \u201cCharity fairs, bazaars, etc.\u201d section.\n\n[|Entrance||] Social pathology.  Social and public welfare. Room entrance",
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
      "description": "This room has one shelf. You can see the Social pathology.  Social and public welfare. shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Social pathology.  Social and public welfare. shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are three rows of books in this shelf. The \u201cBy region or country\u201d section. The \u201cSpecial topics\u201d section. The \u201cEconomic geography of the oceans (General)\u201d section.\n\n[|Entrance||] Economic history and conditions Room entrance",
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
      "description": "This room has one shelf. You can see the Economic history and conditions shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Economic history and conditions shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are four rows of books in this shelf. The \u201cTheory and method of social science statistics\u201d section. The \u201cStatistical services.  Statistical bureaus\u201d section. The \u201cStatistical data\u201d section with books about Universal statistics and By region or country. The \u201cRegistration of vital events.  Vital\u201d section.\n\n[|Entrance||] Statistics Room entrance",
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
      "description": "This room has one shelf. You can see the Statistics shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Statistics shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are five rows of books in this shelf. The \u201cUrban groups.  The city.  Urban sociology\u201d section with books about Urbanization.  City and country, Regional planning, Suburban cities and towns, City planning, Urban renewal.  Urban redevelopment, Metropolitan areas, Regional economics.  Space in economics, The city as an economic factor.  City, City population, Garden cities.  \"The city beautiful\", Mental and moral life, Effect of city life, and Recreation.  Amusements. The \u201cRaces\u201d section. The \u201cClasses\u201d section with books about Slavery, Caste system, Classes arising from occupation, Classes arising from birth, Serfdom, Freedmen, and Origin of social classes. The \u201cHuman settlements.  Communities\u201d section. The \u201cRural groups.  Rural sociology\u201d section.\n\n[|Entrance||] Communities.  Classes.  Races Room entrance",
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
      "description": "This room has one shelf. You can see the Communities.  Classes.  Races shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Communities.  Classes.  Races shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There is one row of books in this shelf. The \u201cOrgans and functions of government\u201d section with books about Legislation.  Legislative process.  Law-making, Executive.  Heads of state, and Parliamentary government.\n\n[|Entrance||] Political institutions and public administration Room entrance\n[|Next||||||] Political institutions and public administration shelf",
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
      "description": "There are two rows of books in this shelf. The \u201cGeneral.  Comparative government\u201d section. The \u201cPublic administration\u201d section with books about Political parties and Civil service.\n\n[|Previous||] General.  Comparative government shelf",
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
      "description": "This room has two shelves organized linearly from the entrance towards the back. You can see the General.  Comparative government shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] General.  Comparative government shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 13 rows of books in this shelf. The \u201cModern state\u201d section with books about Thomas Paine. The \u201cPurpose, functions, and relations of the state\u201d section. The \u201cForms of the state\u201d section. The \u201cNationalism.  Nation state\u201d section. The \u201cAncient state\u201d section. The \u201cPolitical geography\u201d section. The \u201cSymbolism\u201d section. The \u201cConsensus.  Consent of the governed\u201d section. The \u201cSovereignty\u201d section. The \u201cMedieval state\u201d section. The \u201cIslamic state\u201d section. The \u201cPatriotism\u201d section. The \u201cOriental state\u201d section.\n\n[|Entrance||] Political theory.  The state.  Theories of the state Room entrance",
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
      "description": "This room has one shelf. You can see the Political theory.  The state.  Theories of the state shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Political theory.  The state.  Theories of the state shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are two rows of books in this shelf. The \u201cUnited States\u201d section. The \u201cConfederate States of America\u201d section.\n\n[|Entrance||] Political institutions and public administration Room entrance\n[|Next||||||] United States shelf",
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
      "description": "There are two rows of books in this shelf. The \u201cGovernment.  Public administration\u201d section with books about Executive branch, Congress.  Legislative branch, and Capital.  Public buildings.  Government. The \u201cPolitical rights.  Practical politics\u201d section with books about Suffrage, Electoral system, and Citizenship.\n\n[|Previous||] Political institutions and public administration shelf",
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
      "description": "This room has two shelves organized linearly from the entrance towards the back. You can see the Political institutions and public administration shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Political institutions and public administration shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 16 rows of books in this shelf. The \u201cEurope\u201d section. The \u201cUnited States\u201d section. The \u201cExecutive branch.  Mayor\u201d section. The \u201cSouth America\u201d section. The \u201cHistory\u201d section. The \u201cAfrica\u201d section. The \u201cAsia\u201d section with books about Islamic countries and Arab countries. The \u201cCentral America\u201d section. The \u201cWest Indies.  Caribbean Area\u201d section. The \u201cMexico\u201d section. The \u201cCanada\u201d section. The \u201cElections.  Local elections.  Municipal elections\u201d section. The \u201cAustralia.  New Zealand.  Pacific Ocean islands\u201d section. The \u201cLocal government other than municipal\u201d section. The \u201cIndian Ocean islands\u201d section. The \u201cAtlantic Ocean islands\u201d section.\n\n[|Entrance||] Local government.  Municipal government Room entrance",
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
      "description": "This room has one shelf. You can see the Local government.  Municipal government shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Local government.  Municipal government shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are six rows of books in this shelf. The \u201cColonizing nations\u201d section. The \u201cHistory\u201d section. The \u201cEmigration and immigration.  International\u201d section with books about Canada, Latin America, etc., United States, Europe, Asia, Immigration, Africa, Emigration, History, Australia.  New Zealand, Pacific Ocean islands, Arab countries, Periodicals.  Serials, Atlantic Ocean islands, and Indian Ocean islands. The \u201cColonies and colonization\u201d section. The \u201cAdministration\u201d section. The \u201cSocieties\u201d section.\n\n[|Entrance||] Colonies and colonization.  Emigration and Room entrance",
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
      "description": "This room has one shelf. You can see the Colonies and colonization.  Emigration and shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Colonies and colonization.  Emigration and shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are eight rows of books in this shelf. The \u201cTheory.  Relations to other subjects\u201d section. The \u201cHistory\u201d section. The \u201cCongresses\u201d section. The \u201cDictionaries and encyclopedias\u201d section. The \u201cStudy and teaching.  Research\u201d section. The \u201cCollective biography of political scientists\u201d section. The \u201cPeriodicals\u201d section. The \u201cSocieties\u201d section.\n\n[|Entrance||] Political science (General) Room entrance",
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
      "description": "This room has one shelf. You can see the Political science (General) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Political science (General) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are seven rows of books in this shelf. The \u201cDiplomacy\u201d section. The \u201cCollections, cases, etc.  By country\u201d section. The \u201cInternational arbitration, organization, etc.\u201d section. The \u201cInternational law\u201d section. The \u201cForeign relations\u201d section. The \u201cCollections.  Documents.  Cases\u201d section. The \u201cCodification of international law\u201d section.\n\n[|Entrance||] International law, see JZ and KZ Room entrance",
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
      "description": "This room has one shelf. You can see the International law, see JZ and KZ shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] International law, see JZ and KZ shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 32 rows of books in this shelf. The \u201cSwitzerland\u201d section. The \u201cGeneral\u201d section. The \u201cFrance\u201d section. The \u201cRussia (Federation)\u201d section. The \u201cGreat Britain\u201d section with books about Scotland. The \u201cPoland\u201d section. The \u201cScandinavia.  Northern Europe\u201d section. The \u201cGermany\u201d section. The \u201cSpain\u201d section. The \u201cUkraine\u201d section. The \u201cItaly\u201d section. The \u201cSoviet Union.  Russia.  Former Soviet Republics\u201d section. The \u201cCzech Republic.  Czechoslovakia\u201d section. The \u201cNorway\u201d section. The \u201cGreece\u201d section. The \u201cAustria-Hungary.  Austria.  Hungary\u201d section. The \u201cBalkan States\u201d section. The \u201cFinland\u201d section. The \u201cPortugal\u201d section. The \u201cSweden\u201d section. The \u201cBelgium\u201d section. The \u201cNetherlands\u201d section. The \u201cDenmark\u201d section. The \u201cEstonia\u201d section. The \u201cBelarus\u201d section. The \u201cLithuania\u201d section. The \u201cIreland\u201d section. The \u201cSlovakia\u201d section. The \u201cIceland\u201d section. The \u201cMoldova\u201d section. The \u201cLatvia\u201d section. The \u201cGreenland\u201d section.\n\n[|Entrance||] Political institutions and public administration (Europe) Room entrance",
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
      "description": "This room has one shelf. You can see the Political institutions and public administration (Europe) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Political institutions and public administration (Europe) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 11 rows of books in this shelf. The \u201cScope of international relations. Political theory.\u201d section with books about Scope of international relations with regard to, Diplomatic and consular service, and By period. The \u201cRelation to other disciplines and topics\u201d section. The \u201cPromotion of peace.  Peaceful change\u201d section with books about Pacific settlement of international disputes, International security.  Disarmament.  Global survival, Societies, associations, academies, institutes, etc.,, and Congresses and conferences. The \u201cInternational organizations and associations\u201d section with books about Intergovernmental organizations.  IGOs and Political non-governmental organizations.. The \u201cThe armed conflict.  War and order\u201d section. The \u201cSources\u201d section with books about By region or country. The \u201cNon-military coercion\u201d section. The \u201cState territory and its parts\u201d section with books about International waters and Boundaries. The \u201cSocieties, associations, academies, institutes, etc.,\u201d section. The \u201cNeutrality.  Non-participation in wars.  Norms of\u201d section. The \u201cHumanitarian aspects of war\u201d section.\n\n[|Entrance||] International relations Room entrance",
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
      "description": "This room has one shelf. You can see the International relations shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] International relations shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are five rows of books in this shelf. The \u201cWest Indies.  Caribbean Area\u201d section. The \u201cCentral America\u201d section. The \u201cSouth America\u201d section. The \u201cMexico\u201d section. The \u201cCanada\u201d section.\n\n[|Entrance||] Political institutions and public administration Room entrance",
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
      "description": "This room has one shelf. You can see the Political institutions and public administration shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Political institutions and public administration shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are three rows of books in this shelf. The \u201cUnited States\u201d section with books about Presidents' messages and other executive. The \u201cOther regions and countries\u201d section. The \u201cGazettes\u201d section.\n\n[|Entrance||] General legislative and executive papers Room entrance",
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
      "description": "This room has one shelf. You can see the General legislative and executive papers shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] General legislative and executive papers shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are five rows of books in this shelf. The \u201cAsia\u201d section. The \u201cAfrica\u201d section. The \u201cAustralia.  New Zealand.  Pacific Ocean islands\u201d section. The \u201cMiddle East\u201d section with books about Arab countries and Islamic countries. The \u201cAtlantic Ocean islands\u201d section.\n\n[|Entrance||] Political institutions and public administration (Asia, Room entrance",
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
      "description": "This room has one shelf. You can see the Political institutions and public administration (Asia, shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Political institutions and public administration (Asia, shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Political institutions and public administration Room entrance",
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
      "description": "This room has one shelf. You can see the Political institutions and public administration shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Political institutions and public administration shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 80 rows of books in this shelf. The \u201cPersons\u201d section with books about Domestic relations.  Family law and General.  Status.  Capacity. The \u201cCourts.  Procedure\u201d section with books about Civil procedure, Court organization and procedure, and Administration of justice.  Organization of the judiciary. The \u201cInsolvency and bankruptcy.  Creditors' rights\u201d section. The \u201cLaw reports and related materials\u201d section. The \u201cAssociations\u201d section with books about Corporations.  Juristic persons, General, and Unincorporated associations. The \u201cIntellectual property\u201d section with books about Patent law and trademarks, Copyright, General, Author and publisher.  The publishing contract, and Design protection. The \u201cProperty\u201d section with books about Real property.  Land law, Personal property, and General.  Ownership. The \u201cSuccession upon death\u201d section. The \u201cCriminal law\u201d section. The \u201cGeneral and comprehensive works\u201d section. The \u201cArbitration and award.  Commercial arbitration\u201d section. The \u201cPublic property.  Public restraints on private property\u201d section with books about Homesteads, Roads, Public land law, Housing.  Slum clearance.  City redevelopment, Regional and city planning.  Zoning.  Building, Government property, Water resources.  Watersheds.  Rivers.  Lakes., Conservation of natural resources, Eminent domain, Indian lands, Bridges, Weather control.  Meteorology.  Weather stations, Public works, and General. The \u201cContracts\u201d section with books about General and comprehensive works, Particular contracts, General principles, and Government contracts. The \u201cConflict of laws\u201d section. The \u201cConcepts applying to several branches of law\u201d section. The \u201cTrusts and trustees\u201d section. The \u201cConstitutional law\u201d section with books about Public policy.  Police power, Church and state, Individual and state, Constitutional history of the United States, Organs of the government, General works, Foreign relations, Separation of powers.  Delegation of powers, National territory.  Noncontiguous territories, Sources, Structure of government.  Federal and state, State constitutions (Collections), Works on legislative history of the Constitution, Texts of the Constitution, Amending process, Sources and relationships of law, and Particular amendments. The \u201cCivil trials\u201d section. The \u201cCriminal trials\u201d section. The \u201cCriminal procedure\u201d section. The \u201cIndians\u201d section. The \u201cSocial legislation\u201d section with books about Labor law, Social insurance, Public welfare.  Public assistance, Human reproduction, General, and Disaster relief. The \u201cLegal education\u201d section. The \u201cTorts\u201d section. The \u201cLegal composition and draftsmanship\u201d section. The \u201cPublic safety\u201d section with books about Weapons.  Firearms.  Munitions, Hazardous articles and processes, Fire prevention and control.  Explosives, and Accident control. The \u201cHistory\u201d section. The \u201cPublic finance\u201d section with books about National revenue, State and local finance, Budget.  Government expenditures, Money.  Currency.  Coinage, General, Expenditure control.  Public auditing and accounting, and Public debts.  Loans.  Bond issues. The \u201cCriticism. Legal reform. General administration of justice\u201d section. The \u201cNational defense.  Military law\u201d section with books about The military establishment.  Armed Forces, Comprehensive.  General, War veterans, Other defense and intelligence agencies, and Civil defense. The \u201cJurisprudence and philosophy of American law\u201d section. The \u201cThe legal profession\u201d section. The \u201cEducation\u201d section. The \u201cControl of social activities\u201d section with books about Sports.  Prizefighting.  Horse racing, Lotteries, Amusements, and General. The \u201cJuvenile criminal law and procedure\u201d section. The \u201cCollections\u201d section. The \u201cRegulation of industry, trade, and commerce.\u201d section with books about Trade and commerce, The professions, Transportation and communication, Manufacturing industries, Trade regulation.  Control of trade practices, General and comprehensive, Public utilities, Primary production.  Extractive industries, Food processing industries, and Construction and building industry.  Contractors. The \u201cPublic health.  Sanitation\u201d section. The \u201cNegotiated settlement.  Compromise\u201d section. The \u201cGeneral principles and concepts\u201d section. The \u201cAdministrative organization and procedure\u201d section. The \u201cLegal research.  Legal bibliography\u201d section. The \u201cEstate planning\u201d section. The \u201cMedical legislation\u201d section with books about Veterinary medicine and hygiene and Eugenics.  Sterilization. The \u201cFood.  Drugs.  Cosmetics\u201d section. The \u201cLocal government\u201d section. The \u201cUnfair competition\u201d section. The \u201cLaw dictionaries.  Words and phrases\u201d section. The \u201cBibliography\u201d section. The \u201cScience and the arts.  Research\u201d section with books about The arts, General, Libraries and library services, Historical buildings and monuments, Particular branches and subjects, Museums and galleries, and Archives.  Historical documents. The \u201cForm books\u201d section. The \u201cAgency\u201d section. The \u201cCommunity legal services.  Legal aid\u201d section. The \u201cCongressional documents\u201d section. The \u201cEquity\u201d section. The \u201cDirectories\u201d section. The \u201cCivil service.  Government officials and employees\u201d section. The \u201cLawyer referral services\u201d section. The \u201cJudicial statistics\u201d section. The \u201cEconomic policy\u201d section. The \u201cRestitution.  Quasi contracts.  Unjust enrichment\u201d section. The \u201cCommon law in the United States\u201d section. The \u201cStatutes and administrative regulations\u201d section. The \u201cLegal maxims.  Quotations\u201d section. The \u201cEncyclopedias\u201d section. The \u201cAlcohol.  Alcoholic beverages.  Prohibition\u201d section. The \u201cGovernment measures in time of war, national emergency,\u201d section. The \u201cPolice and power of the police\u201d section. The \u201cUniform state law\u201d section. The \u201cSociety and bar association journals\u201d section. The \u201cCommemorative medals\u201d section. The \u201cLaw reporting\u201d section. The \u201cLaw societies\u201d section. The \u201cPrevention of cruelty to animals\u201d section. The \u201cCompensation to victims of crime.  Reparation\u201d section. The \u201cRetroactive law.  Intertemporal law\u201d section. The \u201cCongresses\u201d section. The \u201cPeriodicals\u201d section. The \u201cNational emblem.  Flag.  Seal.  Seat of government.\u201d section. The \u201cPatriotic customs and observances\u201d section.\n\n[|Entrance||] Law of the United States (Federal) Room entrance",
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
      "description": "This room has one shelf. You can see the Law of the United States (Federal) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of the United States (Federal) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Washington Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Washington shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Washington shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Maine Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Maine shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Maine shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Tennessee Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Tennessee shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Tennessee shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 35 rows of books in this shelf. The \u201cCivil law\u201d section with books about Persons, Property, Obligations, Trusts and trustees, and Succession upon death. The \u201cPublic property.  Public restraint on private\u201d section. The \u201cConstitutional law\u201d section with books about Individual and state, The state, Organs of government, Church and state, Constitutional principles, Foreign relations administration, National territory, Form and structure of government, Constitutional history, Constitutional courts and procedure, and Public policy. The \u201cRegulation of industry, trade, and commerce.\u201d section with books about Trade regulations.  Control of trade practices, Trade and commerce, Professions and occupations, Transportation and communication, Primary production.  Extractive industries, Manufacturing industries, Food processing industries, and Public utilities. The \u201cCourts.  Procedure\u201d section with books about Court organization and procedure and Civil procedure. The \u201cEconomic constitution, policy, planning, and\u201d section. The \u201cControl of social activities\u201d section. The \u201cCommercial law\u201d section with books about Commercial contracts, Business associations, Insolvency and bankruptcy.  Creditors' rights, Maritime law, The merchant.  Business enterprises, Insurance, and Commercial agency. The \u201cSocial legislation\u201d section with books about Labor law, Public welfare.  Public assistance, and Social insurance. The \u201cEnvironmental law\u201d section. The \u201cIntellectual property\u201d section with books about Copyright and Industrial property. The \u201cMedical legislation\u201d section. The \u201cCriminal law and procedure\u201d section with books about Criminal procedure, Criminal law, and Juvenile criminal law and procedure. The \u201cNegotiated settlement.  Compromise\u201d section. The \u201cPublic finance\u201d section with books about National revenue and State and local finance. The \u201cPublic health\u201d section. The \u201cLegal systems compared\u201d section. The \u201cAdministrative law\u201d section with books about The administrative process and Administrative organization. The \u201cArbitration and award\u201d section. The \u201cNational defense.  Military law\u201d section with books about The military establishment.  Armed forces and Military criminal law and procedure. The \u201cPublic law\u201d section. The \u201cConcepts applying to several branches of law\u201d section. The \u201cScience and arts.  Research\u201d section. The \u201cPrivate law\u201d section with books about Unification. The \u201cEducation\u201d section. The \u201cCivil service.  Government officials and\u201d section. The \u201cFood.  Drugs.  Cosmetics\u201d section. The \u201cCompensation to victims of crime.  Reparation\u201d section. The \u201cGovernment measures in time of war, national\u201d section. The \u201cPublic safety\u201d section. The \u201cTrials\u201d section. The \u201cColonial law\u201d section. The \u201cVeterinary laws.  Veterinary medicine and\u201d section. The \u201cAlcohol.  Alcoholic beverages\u201d section. The \u201cRegional divisions.  Interregional comparative\u201d section.\n\n[|Entrance||] Comparative law.  International uniform law Room entrance\n[|Next||||||] Jurisprudence.  Philosophy and theory of law shelf",
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
      "description": "There are 10 rows of books in this shelf. The \u201cSchools of legal theory\u201d section with books about Natural law, Sociology of law.  Sociological jurisprudence, Positivism, and Historical jurisprudence. The \u201cUniversality and non-universality of law\u201d section. The \u201cThe concept of law\u201d section. The \u201cMethodology\u201d section. The \u201cRelation of law to other topics\u201d section. The \u201cInterpretation and construction of law.  Lacunae\u201d section. The \u201cClassification of law.  Typology\u201d section. The \u201cSources of law\u201d section. The \u201cActs and events\u201d section. The \u201cHistory\u201d section.\n\n[|Previous||] Comparative law.  International uniform law shelf\n[|Next||||||] Miscellany shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Jurisprudence.  Philosophy and theory of law shelf\n[|Next||||||] Private international law.  Conflict of laws shelf",
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
      "description": "There are 14 rows of books in this shelf. The \u201cObligations\u201d section with books about Contracts, Torts, and Restitution.  Quasi contracts.  Unjust. The \u201cCivil procedure.  International civil procedure\u201d section. The \u201cCommercial law\u201d section with books about Commercial contracts, Maritime law, Insolvency and bankruptcy.  Creditors' rights, Insurance, and Business associations.  Business corporations. The \u201cPersons\u201d section with books about Domestic relations.  Family law, Natural persons, and Juristic persons.  Associations. The \u201cArbitration and award\u201d section. The \u201cProperty\u201d section. The \u201cSuccession upon death\u201d section. The \u201cChoice of law\u201d section. The \u201cInternational unification, approximation, and\u201d section. The \u201cIntellectual property\u201d section with books about Copyright and Industrial property. The \u201cSocial legislation\u201d section. The \u201cRetroactive law.  Intertemporal law\u201d section. The \u201cTrust and trustees\u201d section. The \u201cJuristic acts\u201d section.\n\n[|Previous||] Miscellany shelf\n[|Next||||||] The legal profession shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Private international law.  Conflict of laws shelf\n[|Next||||||] Law societies.  International bar associations shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] The legal profession shelf\n[|Next||||||] Ethnological jurisprudence.  Primitive law shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Law societies.  International bar associations shelf\n[|Next||||||] History of law shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Ethnological jurisprudence.  Primitive law shelf\n[|Next||||||] Legal research shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] History of law shelf\n[|Next||||||] Maxims.  Quotations shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Legal research shelf\n[|Next||||||] Dictionaries.  Words and phrases shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Maxims.  Quotations shelf\n[|Next||||||] Legal aid.  Legal assistance to the poor shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Dictionaries.  Words and phrases shelf\n[|Next||||||] Encyclopedias shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Legal aid.  Legal assistance to the poor shelf\n[|Next||||||] Bibliography shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Encyclopedias shelf\n[|Next||||||] Legal education shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Bibliography shelf\n[|Next||||||] Periodicals shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Legal education shelf\n[|Next||||||] Biography shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Periodicals shelf\n[|Next||||||] Legal composition and draftsmanship shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Biography shelf\n[|Next||||||] Addresses, essays, lectures shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Legal composition and draftsmanship shelf\n[|Next||||||] Congresses shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Addresses, essays, lectures shelf\n[|Next||||||] Collected works (nonserial) shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Congresses shelf\n[|Next||||||] Monographic series shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Collected works (nonserial) shelf\n[|Next||||||] Directories shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Monographic series shelf",
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
      "description": "This room has 23 shelves organized linearly from the entrance towards the back. You can see the Comparative law.  International uniform law shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Comparative law.  International uniform law shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are nine rows of books in this shelf. The \u201cEarly/Medieval development to ca. 1900.\u201d section with books about Publicists.  Writers on public international law and Peace of Westphalia to the French. The \u201cThe international legal community and members\u201d section with books about Subjects of the law of nations. The \u201cInternational law of peace and peace enforcement\u201d section with books about Pacific settlement of international, The system of collective security, and Military pact systems for collective self-defense. The \u201cSources.  Fontes juris gentium\u201d section with books about By region or country, Judicial decisions and arbitral awards, and Treaties and other international agreements. The \u201c20th century\u201d section with books about Publicists.  Writers on public international law. The \u201cEnforced settlement of international disputes\u201d section with books about Law of war and neutrality.  Jus belli, Non-military coercion, and Threat of force. The \u201cTrials\u201d section with books about Trials of international crimes. The \u201cTheory and principles\u201d section with books about Domain of the law of nations. The \u201cSocieties, etc.\u201d section with books about National.\n\n[|Entrance||] Law of nations Room entrance\n[|Next||||||] Law of nations shelf",
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
      "description": "There are two rows of books in this shelf. The \u201cLaw of nations\u201d section. The \u201cInternational criminal law and procedure\u201d section with books about International criminal law, International criminal courts, and Victims of crimes.\n\n[|Previous||] Law of nations shelf",
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
      "description": "This room has two shelves organized linearly from the entrance towards the back. You can see the Law of nations shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of nations shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 71 rows of books in this shelf. The \u201cGeneral and comprehensive works\u201d section. The \u201cControl of social activities\u201d section with books about Sports.  Prizefighting.  Horseracing, Lotteries.  Games of chance.  Betting, and Amusements. The \u201cRegulation of industry, trade, and commerce.\u201d section with books about The professions, General.  Comprehensive, Construction and building industry.  Contractors, Transportation and communication, Trade regulation.  Control of trade practices, Food processing industries.  Agricultural, Public utilities, Trade and commerce, Primary production.  Extractive industries., and Manufacturing industries. The \u201cContracts\u201d section with books about Particular contracts, Government contracts.  Public contracts., General principles, and General and comprehensive works. The \u201cTorts (Extracontractual liability)\u201d section. The \u201cConstitutional law\u201d section with books about History, Constitutional principles, Individual and state, General works, Organs of the government, Control of individuals, and Foreign relations. The \u201cTrials\u201d section with books about Criminal trials and judicial investigations and Civil trials. The \u201cCommon law\u201d section. The \u201cLaw reports and related materials\u201d section. The \u201cNational defense.  Military law\u201d section with books about Comprehensive.  General, The military establishment.  Armed Forces, Civil defense, and War veterans. The \u201cMedical legislation\u201d section. The \u201cCriminal procedure\u201d section. The \u201cCourts.  Procedure\u201d section with books about Administration of justice.  Courts and procedure, Civil procedure, Administration of justice.  Courts and procedure, and History. The \u201cCollections\u201d section. The \u201cLaw of Wales\u201d section. The \u201cPersons\u201d section with books about General.  Status.  Capacity and Domestic relations.  Family law. The \u201cLocal government\u201d section. The \u201cAdministrative organization and procedure\u201d section. The \u201cSocial legislation\u201d section with books about Public welfare.  Public assistance.  Poor laws, Labor law, and Social insurance. The \u201cConflict of laws\u201d section. The \u201cHistory\u201d section. The \u201cEcclesiastical law.  Csanon law of the Church of\u201d section. The \u201cProperty\u201d section with books about Real property.  Land law, Personal property, and General.  Ownership.  Possession. The \u201cAssociations\u201d section with books about Corporations.  Juristic persons and Unincorporated associations. The \u201cPublic health.  Sanitation.  Environmental pollution\u201d section. The \u201cThe legal profession\u201d section. The \u201cLaw reporting.  Law reporters\u201d section. The \u201cCommunity legal services.  Legal aid\u201d section. The \u201cPublic finance\u201d section with books about General.  History, Expenditure control.  Public auditing and accounting, Local finance, National revenue, Public debts.  Loans.  Bond issues, Money.  Currency.  Banknotes.  Coinage, Foreign exchange regulations, and Budget.  Government expenditures. The \u201cEducation\u201d section. The \u201cCriminal law\u201d section. The \u201cPublic safety\u201d section with books about Weapons.  Firearms.  Munitions, Hazardous articles and processes, and Fire prevention and control.  Explosives. The \u201cLegal research.  Legal bibliography\u201d section. The \u201cConstitutional and administrative law\u201d section. The \u201cCriticism. Legal reform. General administration\u201d section. The \u201cLaw dictionaries.  Words and phrases\u201d section. The \u201cFood.  Drugs.  Cosmetics\u201d section. The \u201cTrusts and trustees\u201d section. The \u201cScience and the arts.  Research\u201d section with books about Archives.  Historical documents, Libraries, Performing arts, and Museums and galleries. The \u201cInsolvency and bankruptcy.  Creditors' rights\u201d section. The \u201cLocal laws\u201d section with books about Cities, boroughs, and towns, etc., England, and Wales. The \u201cSuccession upon death\u201d section. The \u201cArbitration and award.  Commercial arbitration\u201d section. The \u201cEquity\u201d section. The \u201cLegislation\u201d section with books about Statues, Subordinate (Delegated legislation), and Prerogative legislation. The \u201cLegal maxims.  Quotations\u201d section. The \u201cLegal education\u201d section. The \u201cCommonwealth and Empire\u201d section. The \u201cGeneral principles and concepts\u201d section. The \u201cVeterinary laws.  Veterinary hygiene\u201d section. The \u201cDirectories\u201d section. The \u201cConcepts applying to several branches of law\u201d section. The \u201cAgency\u201d section. The \u201cForm books\u201d section. The \u201cJurisprudence and philosophy of English law\u201d section. The \u201cDecorations of honor.  Awards of honor.\u201d section. The \u201cPrivate (Civil) law\u201d section. The \u201cLaw societies\u201d section. The \u201cLegal composition and draftsmanship\u201d section. The \u201cBibliography\u201d section. The \u201cRestitution.  Quasi contracts.  Unjust enrichment\u201d section. The \u201cNational emblem.  Seals\u201d section. The \u201cGovernment measures in time of war, national emergency,\u201d section. The \u201cAlcohol.  Alcoholic beverages.  Liquor laws\u201d section. The \u201cEncyclopedias\u201d section. The \u201cPrevention of cruelty to animals\u201d section. The \u201cJudicial statistics\u201d section. The \u201cCompensation to victims of crime.  Reparation\u201d section. The \u201cEconomic policy.  Economic planning\u201d section. The \u201cCongresses\u201d section. The \u201cEstate planning\u201d section.\n\n[|Entrance||] Law of England and Wales Room entrance",
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
      "description": "This room has one shelf. You can see the Law of England and Wales shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of England and Wales shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Pennsylvania Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Pennsylvania shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Pennsylvania shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Idaho Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Idaho shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Idaho shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Nebraska Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Nebraska shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Nebraska shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of California Room entrance",
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
      "description": "This room has one shelf. You can see the Law of California shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of California shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Ohio Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Ohio shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Ohio shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Louisiana Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Louisiana shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Louisiana shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Alabama Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Alabama shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Alabama shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are four rows of books in this shelf. The \u201cHistory of law\u201d section with books about By period. The \u201cRegional division.  Subregions\u201d section. The \u201cConstitutional law\u201d section. The \u201cPublic law\u201d section.\n\n[|Entrance||] Russia, Soviet Union Room entrance",
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
      "description": "This room has one shelf. You can see the Russia, Soviet Union shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Russia, Soviet Union shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Spain Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Spain shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Spain shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Saudi Arabia Room entrance",
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
      "description": "This room has one shelf. You can see the Saudi Arabia shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Saudi Arabia shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Croatia Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Croatia shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Croatia shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 17 rows of books in this shelf. The \u201cSchools of thought. Islamic legal schools. Madh\u0101hib\u201d section. The \u201cUs.\u016bl al-fiqh. Jurisprudence and theory of law. Science of\u201d section. The \u201cFur\u016b\u02bb al-fiqh. Substantive law. Branches of law\u201d section with books about Particular genres, Mu\u02bb\u0101mal\u0101t, Ah.w\u0101l shakhs.\u012byah, Criminal law and procedure, Courts and procedure, Government measures in time of war, national emergency,, Public finance, General concepts, Military law, Public law. The state and Islam, Constitution of the state. Constitutional law, Social laws and legislation, Cultural affairs, Medical legislation, Economic law, Government and administration. Siy\u0101sah. Administrative, Labor laws and legislation, Police and public safety, Public health, Civil service. Employees of communal agencies, Public property. Government property, Intellectual and industrial property, Environmental law, Transportation and communication, Birth control. Family planning, Professions. Intelligentsia, and Animal protection. Animal welfare. Animal rights. The \u201cObservances and practice of Islam\u201d section. The \u201cHistory, development and application of Islamic law\u201d section. The \u201cBiography\u201d section. The \u201cLaw reform. Criticism. Tanz.\u012bm\u201d section. The \u201cCongresses. Conferences\u201d section. The \u201cGeneral works\u201d section. The \u201cLegal education. Study and teaching\u201d section. The \u201cConflict of laws. Tan\u0101zu\u0313 al-qaw\u0101n\u012bn\u201d section. The \u201cBibliography\u201d section. The \u201cEncyclopedias. Dictionaries\u201d section. The \u201cDirectories\u201d section. The \u201cLegal research\u201d section. The \u201cMaxims. Quotations\u201d section. The \u201cMonographic series\u201d section.\n\n[|Entrance||] Islamic law.  Shar\u012b\u02bbah.  Fiqh Room entrance",
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
      "description": "This room has one shelf. You can see the Islamic law.  Shar\u012b\u02bbah.  Fiqh shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Islamic law.  Shar\u012b\u02bbah.  Fiqh shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 26 rows of books in this shelf. The \u201cSources\u201d section. The \u201cGeneral works\u201d section. The \u201cChurch and state relationships. De relationibus inter\u201d section. The \u201cJudiciary. Ecclesiastical courts and procedure. De\u201d section. The \u201cPenal (Criminal) law. De lege poenali\u201d section. The \u201cSacraments. Administration of sacraments. De sacramentis\u201d section. The \u201cChurch property. Church economics and finance.\u201d section. The \u201cOfficial acts of the Holy See\u201d section. The \u201cCanonical jurisprudence. Canonical science\u201d section. The \u201cConstitution of the Church\u201d section. The \u201cDecisions of ecclesiastical tribunals and courts, and related\u201d section. The \u201cIus ecclesiasticum privatum\u201d section. The \u201cProverbia. Legal maxims. Brocardica juris. Regulae juris\u201d section. The \u201cFormularies. Clauses and forms. Formularia\u201d section. The \u201cBibliography\u201d section. The \u201cLegal education. Study and teaching\u201d section. The \u201cGeneral concepts and principles, A-Z\u201d section. The \u201cEncyclopedias. Law dictionaries. Terms and phrases.\u201d section. The \u201cTrials\u201d section. The \u201cSocial work of the Church. Public welfare. Caritas\u201d section. The \u201cOther acts of divine worship. De ceteris actibus Cultus Divini\u201d section. The \u201cInfluence of other legal systems on Canon law\u201d section. The \u201cLegal research. Legal bibliography. Methods of bibliographic\u201d section. The \u201cCanon law and other disciplines or subjects\u201d section. The \u201cThe teaching office of the church. Magisterium. De ecclesiae\u201d section. The \u201cAuxiliary sciences\u201d section.\n\n[|Entrance||] History of canon law Room entrance",
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
      "description": "This room has one shelf. You can see the History of canon law shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] History of canon law shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are four rows of books in this shelf. The \u201cConcepts and principles\u201d section with books about Mare liberum doctrine and Mare clausum doctrine. The \u201cMaritime boundaries\u201d section with books about Continental shelf. The \u201cTreaties and other international agreements\u201d section. The \u201cIntergovernmental congresses and conferences\u201d section.\n\n[|Entrance||] Law of the sea Room entrance",
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
      "description": "This room has one shelf. You can see the Law of the sea shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of the sea shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] China (People\u2019s Republic, 1949-    ) Room entrance",
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
      "description": "This room has one shelf. You can see the China (People\u2019s Republic, 1949-    ) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] China (People\u2019s Republic, 1949-    ) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are two rows of books in this shelf. The \u201cThe European Communities.    Community law\u201d section with books about Organization law.    Constitution of the European, Courts and procedure, Economic law, Intellectual and industrial property, Labor law, Medical legislation, Financial provisions, Transportation.    Common transportation policy, Environmental law, Administrative law and process, Social legislation, Regulation of industry, trade, and commerce, Criminal law, Communication.    Mass media.    Information, Public health, Commercial law, Theory and methodology of uniform law, Civil law, Police and public safety, Public property.    Public restraint on private property, Criminal courts and procedure, Private law, Cultural affairs, Military law.    Defense, Civil service, Official acts, Professions, and Community measures in time of war, emergency, or. The \u201cRegional organization other than the European\u201d section with books about Western European Union, European Fund, European Payment Union, Benelux Economic Union, European Free Trade Association, Council for Mutual Economic Assistance (COMECON), and Council of Europe.\n\n[|Entrance||] Regional organization and integration (Europe) Room entrance",
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
      "description": "This room has one shelf. You can see the Regional organization and integration (Europe) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Regional organization and integration (Europe) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Vermont Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Vermont shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Vermont shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are five rows of books in this shelf. The \u201cBy period\u201d section. The \u201cSources\u201d section. The \u201cLegal profession\u201d section. The \u201cProvinces (Sheng)\u201d section. The \u201cLegal education\u201d section.\n\n[|Entrance||] Law of China Room entrance",
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
      "description": "This room has one shelf. You can see the Law of China shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of China shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] West Bank Room entrance\n[|Next||||||] Jordan shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] West Bank shelf",
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
      "description": "This room has two shelves organized linearly from the entrance towards the back. You can see the West Bank shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] West Bank shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 36 rows of books in this shelf. The \u201cCourts and procedure\u201d section with books about The legal profession, The administration of justice, Civil procedure, Noncontentious jurisdiction, and Courts. The \u201cEnvironmental law\u201d section. The \u201cIntellectual and industrial property\u201d section with books about Patent law and trademarks, Copyright, Unfair competition, and Author and publisher. The \u201cPhilosophy, jurisprudence, and theory of European law\u201d section. The \u201cCultural affairs.    Education\u201d section. The \u201cCivil law\u201d section with books about Obligations.    Contracts, Concepts and principles, Law of things.    Property, Family law.    Domestic relations, and Inheritance and succession. The \u201cRegional divisions.    Subregions\u201d section with books about Northern Europe.    Scandinavia, Eastern Europe, Southern Europe, Central Europe, and Southeastern Europe.    Balkan Peninsula. The \u201cCommercial law\u201d section with books about Banking.    Stock exchange, Business associations, Maritime law, Insurance law, Negotiable instruments, and Freight forwarders and carriers. The \u201cCriminal law\u201d section with books about Individual offenses and Punishment. The \u201cPublic health.    Medical legislation\u201d section. The \u201cConstitutional law\u201d section with books about Individual and state, Constitutional history.    Feudal law, Organs of government, and Foreign relations. The \u201cCriminal courts and procedure\u201d section with books about Execution of sentence and Victimology. The \u201cLabor law\u201d section with books about Labor contract and employment, Collective bargaining and labor agreements, Wages, Labor-management relations, and Protection of labor. The \u201cEconomic law\u201d section with books about Regulation of industry, trade, and commerce, Government control and policy, Competition rules, and Energy policy.    Power supply. The \u201cCommunication.    mass media\u201d section. The \u201cAdministrative law\u201d section. The \u201cSocial insurance\u201d section with books about Social security, Workers compensation, Health insurance, and Unemployment insurance. The \u201cPublic property.    Domaine public.    Public restraint on\u201d section. The \u201cPrivate international law\u201d section. The \u201cPolice and public safety\u201d section. The \u201cTransportation\u201d section. The \u201cPress law\u201d section. The \u201cPublic finance\u201d section with books about National revenue, Tax and customs crimes and delinquency, Money, Foreign exchange regulation, Tax and customs courts and procedure, State and local finance, and International capital movement regulation. The \u201cSocial legislation\u201d section with books about European Social Charter and Social reform and policies. The \u201cPublic law.    The State\u201d section. The \u201cInsolvency.    Bankruptcy\u201d section. The \u201cSecular ecclesiastical law\u201d section. The \u201cNational defense.    Military law\u201d section. The \u201cCivil service\u201d section. The \u201cLegal systems compared\u201d section. The \u201cGovernment measures in time of war, national\u201d section. The \u201cPrivate law\u201d section. The \u201cProfessions\u201d section. The \u201cBirth control.    Family planning.    Population control\u201d section. The \u201cSocial services.    Public welfare\u201d section. The \u201cSocial courts and procedure\u201d section.\n\n[|Entrance||] Regional comparative and uniform law (Europe) Room entrance",
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
      "description": "This room has one shelf. You can see the Regional comparative and uniform law (Europe) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Regional comparative and uniform law (Europe) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Israel Room entrance",
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
      "description": "This room has one shelf. You can see the Israel shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Israel shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] South Africa, Republic of Room entrance",
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
      "description": "This room has one shelf. You can see the South Africa, Republic of shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] South Africa, Republic of shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Regional comparative and uniform law Room entrance",
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
      "description": "This room has one shelf. You can see the Regional comparative and uniform law shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Regional comparative and uniform law shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of New Brunswick Room entrance\n[|Next||||||] Law of Newfoundland and Labrador shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Law of New Brunswick shelf\n[|Next||||||] Law of Northwest Territories shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Law of Newfoundland and Labrador shelf\n[|Next||||||] Law of Nova Scotia shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Law of Northwest Territories shelf\n[|Next||||||] Law of Nunavut shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Law of Nova Scotia shelf",
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
      "description": "This room has five shelves organized linearly from the entrance towards the back. You can see the Law of New Brunswick shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of New Brunswick shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Ethiopia Room entrance",
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
      "description": "This room has one shelf. You can see the Ethiopia shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Ethiopia shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are five rows of books in this shelf. The \u201cSources\u201d section with books about Pre-Justinian periods, Consilia.    Legal (advisory) opinions, Post-Justinian periods, Justinian, 527-565 A.D., and Orient.    Byzantine empire. The \u201cPublic law\u201d section with books about Constitutional law, Administrative organization and process, Public finance, Foreign relations.    Ius gentium, The military establishment, and State and religion. The \u201cCriminal law and procedure\u201d section. The \u201cPrivate law and procedure\u201d section with books about Civil procedure.    Arbitration.    Bankruptcy, Persons, Family law, Obligations.    Contracts, Law of things.    Res, and Inheritance.    Succession upon death. The \u201cRoman law compared with other legal systems\u201d section.\n\n[|Entrance||] Roman Law Room entrance",
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
      "description": "This room has one shelf. You can see the Roman Law shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Roman Law shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 51 rows of books in this shelf. The \u201cCourts and procedure\u201d section with books about Courts, Civil procedure, Procedure in general, Negotiated settlement, Minist\u00e8re de la justice, and Non-contentious jurisdiction.    Ex parte. The \u201cThe legal profession\u201d section. The \u201cPhilosophy and theory of French law\u201d section. The \u201cCommercial law\u201d section with books about Commercial maritime law, Commercial transactions and contracts, Business associations, Insolvency, Insurance, Commercial courts and procedure, Business interprises and merchants, Chambers of commerce, and Commercial register. The \u201cAdministrative law\u201d section with books about Administrative courts and procedure, Civil service.    Local civil service, Administrative organization.    Administrative, Administrative process.    Administrative acts., and Government liability. The \u201cConstitutional law\u201d section with books about Organs of government, Individual and state, Secular ecclesiastical law, Constitutional history, and Constitutional principles. The \u201cCivil law\u201d section with books about Property, Security, Persons, Choses in action.    Obligations, Evidence, Succession upon death, Juristic facts and acts, and Gratuities. The \u201cCriminal law\u201d section with books about Criminal offense, Individual offenses, Punishment.    Measures of rehabilitation and, and Criminal liability.    Guilt. The \u201cTransportation\u201d section with books about Water transportation.    Administrative maritime, Air law.    Civil aviation, Transport by land.    Road transport, and Railroads. The \u201cMedical law\u201d section with books about Biomedical engineering, The health professions.    Hospitals, medical, and Pharmaceutical law.    Drugs. The \u201cSocial legislation\u201d section with books about Labor law, Social services.    Public welfare, and Social insurance.    Social security. The \u201cParticular industrial and trade lines\u201d section with books about Building and construction industry, Food processing industries.    Food products, Publishing.    Printing.    Book trade, Power production and supply.    Energy policy, and Manufacturing industries. The \u201cIntellectual and industrial property\u201d section with books about Patent law, Copyright, and Author and publisher. The \u201cEnvironmental law.    Environmental pollution\u201d section. The \u201cEconomic law\u201d section with books about Government control and policy and Regulation of industry and trade. The \u201cPublic property.    Public restraint on\u201d section with books about Water resources, Public servitudes, Eminent domain.    Expropriation., Roads and highways, and Public land law. The \u201cTrials\u201d section. The \u201cHistory\u201d section with books about Biography, Sources, and Auxiliary sciences. The \u201cWorks on diverse aspects of a special subject\u201d section. The \u201cPrimary production\u201d section with books about Agricultural law, Mining.    Quarrying, and Fisheries and fishing. The \u201cCriminal courts and procedure\u201d section with books about Execution of sentence, Victimology, Trial.    Proceedings at juvenile courts, and Court organization. The \u201cPolice and public safety\u201d section with books about Control of social activities, Public safety, and Disaster control. The \u201cPublic health\u201d section with books about Burial and cemetary laws, Mental health, and Contagious and infectious diseases. The \u201cLegal research.    Legal bibliography\u201d section. The \u201cPrivate international law\u201d section with books about Status of aliens in France, Conflict of laws, Conflict of jurisdictions, and Nationality. The \u201cRegional planning.    City planning and\u201d section. The \u201cPrivate law\u201d section. The \u201cOverseas France\u201d section. The \u201cAddresses, essays, lectures\u201d section. The \u201cCommunication.    Mass media\u201d section with books about Press law, Radio and television communications, and Information services. The \u201cPublic finance\u201d section with books about National revenue, Budget.    Government expenditures, Tax and customs crimes and delinquency, and Departmental and communal finance.    Local. The \u201cPublic works\u201d section. The \u201cPublic law\u201d section with books about The state. The \u201cLegal education\u201d section. The \u201cCultural affairs\u201d section with books about Education, Science and the arts.    Public collections., and Educational, scientific, and cultural. The \u201cProfessions\u201d section. The \u201cLegislation\u201d section. The \u201cLaw dictionaries.    Terms and phrases\u201d section. The \u201cEncyclopedias\u201d section. The \u201cGeneral works.    Treatises\u201d section. The \u201cNational defense.    Military law\u201d section with books about The armed forces, Military criminal law and procedure, and Civil defense. The \u201cBy period\u201d section. The \u201cVeterinary medicine and hygiene\u201d section. The \u201cConcepts applying to several branches of law\u201d section. The \u201cBibliography\u201d section. The \u201cPopular works.    Civics\u201d section. The \u201cGovernment measures in time of war, national\u201d section. The \u201cJudicial statistics\u201d section. The \u201cLaw reform.    Criticism\u201d section. The \u201cCourt decisions and related materials\u201d section. The \u201cDirectories\u201d section.\n\n[|Entrance||] Law of France Room entrance",
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
      "description": "This room has one shelf. You can see the Law of France shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of France shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 29 rows of books in this shelf. The \u201cCanonical jurisprudence. Theory and science of canon law\u201d section. The \u201cGeneral norms and principles. De normis generalibus\u201d section. The \u201cThe codes of canon law\u201d section. The \u201cChurch property. Church economics and finance\u201d section. The \u201cConstitution of the Church\u201d section. The \u201cSacraments. Administration of sacraments. De sacramentis\u201d section. The \u201cSanctions in the Church. Criminal law. De sanctionibus in\u201d section. The \u201cGeneral works\u201d section. The \u201cTrials\u201d section. The \u201cLegal education. Study and teaching\u201d section. The \u201cCourts and procedure. De processibus\u201d section. The \u201cThe teaching office of the Church. Magisterium. De\u201d section. The \u201cEncyclopedias\u201d section. The \u201cLaw reform and policies. Criticism\u201d section. The \u201cChurch and state relationships. De relationibus inter\u201d section. The \u201cOfficial acts of the Holy See\u201d section. The \u201cLocal Church government\u201d section. The \u201cBibliography\u201d section. The \u201cDecisions of ecclesiastical tribunals and courts, and related\u201d section. The \u201cConferences. Symposia\u201d section. The \u201cSocial work of the Church. Public welfare. Caritas\u201d section. The \u201cCanon law and other disciplines or subjects\u201d section. The \u201cCollections. Compilations. Selections\u201d section. The \u201cDictionaries. Terms and phrases. Vocabularies\u201d section. The \u201cInfluence of other legal systems on canon law\u201d section. The \u201cOther acts of divine worship. De ceteris actibus Cultus Divini\u201d section. The \u201cSocieties. Associations. Academies, etc.\u201d section. The \u201cAcademies. Institutes\u201d section. The \u201cWorks on diverse aspects of a particular subject and falling\u201d section.\n\n[|Entrance||] Law of the Roman Catholic Church. The Holy See Room entrance",
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
      "description": "This room has one shelf. You can see the Law of the Roman Catholic Church. The Holy See shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of the Roman Catholic Church. The Holy See shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Russia (Federation, 1992-    ) Room entrance",
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
      "description": "This room has one shelf. You can see the Russia (Federation, 1992-    ) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Russia (Federation, 1992-    ) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 50 rows of books in this shelf. The \u201cConstitutional law\u201d section with books about Constitutional history, Federalism.  Intergovernmental relations, Organs of government.  Representation, Individual and state, Sources.  Constitutions, Sources and relationships of the law, Constitutional courts and procedure, Constitutional principles, and Foreign relations. The \u201cCivil law\u201d section with books about Concepts and principles, Domestic relations.  Family law, Obligations, Property.  Law of things, and Inheritance.  Succession upon death. The \u201cCommercial law\u201d section with books about Commercial transactions, Business associations, Commercial registers, and Merchant and business enterprise. The \u201cCultural affairs\u201d section with books about Education, Science and the arts.  Public collections, and Physical education.  Sports. The \u201cSocial legislation\u201d section with books about Social insurance, Social services.  Public welfare, and Social courts and procedure. The \u201cCriminal law\u201d section with books about Criminal offense, Individual offenses, and Punishment. The \u201cCriminal courts and procedure\u201d section with books about Trial.  Proceedings at juvenile courts, Execution of sentence, Victimology, Court organization, and Administration of criminal justice. The \u201cPhilosophy, jurisprudence, and theory of German law\u201d section. The \u201cMedical legislation\u201d section with books about Biomedical engineering, The health professions.  Hospitals, institutions,, Eugenics.  Sterilization and castration, and Veterinary medicine. The \u201cPublic property.  Public restraint on private property\u201d section with books about Public land law, Roads and highways.  Water resources.  National, and Government property. The \u201cEconomic law\u201d section with books about Regulation of industry, trade, and commerce, Energy policy.  Power supply, Government control and policy, Economic constitution, Criminal provisions, and Corporate representation of industry, trade, and. The \u201cJudicial statistics\u201d section. The \u201cPublic health\u201d section with books about Drug laws and Contagious and infectious diseases. The \u201cPolice and public safety\u201d section with books about Public safety, Control of individuals.  Control of social activities., Police measures.  Police information system, Police magistrates, and Police force. The \u201cCommunication.  Mass media\u201d section with books about Radio and television communication, Postal services.  Telecommunication, and Press law. The \u201cEnvironmental law\u201d section with books about Environmental pollution and Wilderness preservation. The \u201cIntellectual and industrial property\u201d section with books about Patent law and trademarks, Unfair competition, and Copyright. The \u201cHistory of law\u201d section with books about Holy Roman Empire and its constitution, Biography, Private law, Sources, Criminal law and procedure, Judiciary.  Court organization and procedure, Auxiliary sciences, and Secular ecclesiastical law. The \u201cAdministrative law\u201d section with books about Administrative process.  Administrative acts, Administrative courts and procedure, Administrative organization, and Indemnification for acts performed by government. The \u201cLabor law\u201d section with books about Labor contract and employment, Protection of labor.  Labor law for particular industries, Wages, Labor-management relations, Labor courts and procedure, Labor supply.  Manpower control, Corporate representation.  Unions.  Employers', and Collective bargaining and labor agreements. The \u201cCourts and procedure\u201d section with books about Civil procedure.  Arbitration, Procedure in general, The legal profession, Insolvency.  Execution.  Bankruptcy.  Debtors relief, Noncontentious jurisdiction, The administration of justice, Judicial assistance.  Foreign judgments, Costs, and Courts. The \u201cPublic finance\u201d section with books about National revenue, State and local finance, Tax and customs courts and procedure, Tax and customs crimes and delinquency, Budget.  Government expenditure.  Public debts, and Money.  Currency.  Coinage.  Bank notes. The \u201cPublic law\u201d section with books about The State. The \u201cCivil service\u201d section with books about Labor law and collective labor law, Allowances, Municipal civil service, Conditions of employment, Tenure, and State civil service. The \u201cWorks on diverse aspects of a particular subject and\u201d section. The \u201cLaw dictionaries.  Terms and phrases\u201d section. The \u201cNational defense.  Military law\u201d section with books about Military criminal law and procedure.  Military discipline, The Armed Forces.  The Air Force, and German participation in NATO. The \u201cPrivate international law.  Conflict of laws\u201d section. The \u201cSecular ecclesiastical law\u201d section. The \u201cTransportation\u201d section with books about Road traffic.  Traffic regulations and enforcement, Water transportation.  Navigation and pilotage, Railroads, Aviation.  Space law, and Pipelines. The \u201cTrials\u201d section. The \u201cAddresses, essays, lectures\u201d section. The \u201cProfessions\u201d section. The \u201cGovernment measures in time of war, national emergency,\u201d section with books about 1945-, 1919-1933.  Weimar Republic, 1933-1945.  Third Reich, and 1871-1918.  Empire of 1871. The \u201cLaw reform.  Criticism\u201d section. The \u201cLegal education\u201d section. The \u201cPrivate law\u201d section. The \u201cIntertemporal law.  Retroactive law\u201d section. The \u201cConcepts applying to several branches of the law\u201d section. The \u201cGeneral works.  Treatises\u201d section. The \u201cLegal research.  Legal bibliography\u201d section. The \u201cManuals and other works for particular groups of users\u201d section. The \u201cBirth control\u201d section. The \u201cBibliography\u201d section. The \u201cRechtsanwaltskammern (Bar associations)\u201d section. The \u201cLegislation\u201d section. The \u201cCollected works\u201d section. The \u201cCourt decisions and related material\u201d section. The \u201cDirectories\u201d section. The \u201cOfficial gazettes\u201d section.\n\n[|Entrance||] Law of Germany Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Germany shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Germany shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Georgia Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Georgia shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Georgia shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Argentina Room entrance",
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
      "description": "This room has one shelf. You can see the Argentina shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Argentina shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Uzbekistan Room entrance",
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
      "description": "This room has one shelf. You can see the Uzbekistan shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Uzbekistan shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Indonesia Room entrance",
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
      "description": "This room has one shelf. You can see the Indonesia shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Indonesia shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Regional comparative and uniform law Room entrance",
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
      "description": "This room has one shelf. You can see the Regional comparative and uniform law shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Regional comparative and uniform law shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are four rows of books in this shelf. The \u201cGeneral\u201d section. The \u201cOrganization of American States (OAS)\u201d section. The \u201cGreenland\u201d section. The \u201cBermuda\u201d section.\n\n[|Entrance||] America.  North America Room entrance",
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
      "description": "This room has one shelf. You can see the America.  North America shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] America.  North America shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Kansas Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Kansas shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Kansas shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Scotland Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Scotland shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Scotland shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Hong Kong Room entrance",
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
      "description": "This room has one shelf. You can see the Hong Kong shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Hong Kong shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Florida Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Florida shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Florida shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are three rows of books in this shelf. The \u201cMishpat Ivri\u201d section with books about Dinei mamonot, Criminal law and procedure, Domestic relations. Family law, Courts and procedure, Constitutional law. Constitutional principles of the Jewish, General works, Medical legislation, Persons, Economic law, Public finance, The concept of Jewish law, Social laws and legislation, Inheritance and succession, Birth control. Family planning, Sources of Jewish law (Mishpat Ivri), Concepts applying to several branches of the law, A-Z, Public law. The state and the Jewish community. Kehillah, Environmental law, Gifts. Charitable gifts. Donations, Assistance in emergencies, Community defense. Military law, Public property. Communal property. Restraints on private, Bibliography, Private law, Civil service. Employees of communal agencies, and Cultural affairs. The \u201cH.oshen mishpat. law (General)\u201d section. The \u201cEven ha-\u02bbezer law (General)\u201d section.\n\n[|Entrance||] Jewish law.  Halakah Room entrance",
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
      "description": "This room has one shelf. You can see the Jewish law.  Halakah shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Jewish law.  Halakah shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are four rows of books in this shelf. The \u201cGeneral\u201d section. The \u201cGermanic law\u201d section with books about Criminal law and procedure, Germanic nations and their constitution, Private law, Sources, Courts and procedure, and Industry and trade. The \u201cThe Celts\u201d section. The \u201cSlavic nations.    Slavic law\u201d section with books about Sources.\n\n[|Entrance||] History of Law (Europe) Room entrance",
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
      "description": "This room has one shelf. You can see the History of Law (Europe) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] History of Law (Europe) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are nine rows of books in this shelf. The \u201cGreek law\u201d section. The \u201cAncient legal systems compared\u201d section. The \u201cEgypt\u201d section. The \u201cMesopotamia.  Assyro-Babylonian law\u201d section with books about Assyria and Sumer. The \u201cHittite law\u201d section. The \u201cGeneral\u201d section. The \u201cBabylonia\u201d section. The \u201cSources\u201d section. The \u201cPersia\u201d section.\n\n[|Entrance||] History of law.  The ancient orient Room entrance",
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
      "description": "This room has one shelf. You can see the History of law.  The ancient orient shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] History of law.  The ancient orient shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 53 rows of books in this shelf. The \u201cSocial law and legislation\u201d section. The \u201cConstitutional law\u201d section with books about Individual and state.  Civil and political rights, Structure of government, Organs of the government, Amending process, Public policy.  Police power, and Church and state. The \u201cContracts\u201d section with books about Loan of money, Contract for work and labor, Banking, Insurance, Secured transactions, Carriers.  Carriage of goods and passengers, Sale of goods, Negotiable instruments, Investments, Government contracts, and Contract of service.  Master and servant. The \u201cNative peoples.  Indians.  Inuit\u201d section. The \u201cCriminal law.  Criminal procedure\u201d section. The \u201cCourts.  Procedure\u201d section with books about Civil procedure, Administration of justice, and Court organization and procedure. The \u201cMedical legislation\u201d section. The \u201cAdministrative organization and procedure\u201d section. The \u201cEducation\u201d section. The \u201cTrials\u201d section with books about Criminal trials and Civil trials. The \u201cThe legal profession\u201d section with books about Practice of law and The organized bar.  Law societies.  Bar. The \u201cPolice and power of the police\u201d section. The \u201cAssociations\u201d section with books about Corporations.  Juristic persons and Unincorporated associations. The \u201cPublic property.  Public restraints on private property\u201d section with books about Public land law, Regional and city planning, and Water resources. The \u201cInsolvency and bankruptcy.  Creditors' rights\u201d section. The \u201cTorts (Extracontractual liability)\u201d section with books about Compensation to victims of crime.  Reparation. The \u201cRegulation of industry, trade, and commerce.\u201d section with books about Trade and commerce, Trade regulation.  Control of trade practices., Primary production.  Extractive industries, Transportation and communication, The professions, Public utilities, Construction and building industry.  Contractors, Manufacturing industries, and Food processing industries. The \u201cControl of social activities\u201d section. The \u201cPersons\u201d section with books about Natural persons and Domestic relations.  Family law. The \u201cIntellectual property\u201d section. The \u201cProperty\u201d section with books about Real property.  Land law and Personal property. The \u201cAgency\u201d section. The \u201cTrusts and trustees\u201d section. The \u201cCommunity legal services.  Legal aid\u201d section. The \u201cCriticism. Law reform\u201d section. The \u201cPublic finance\u201d section. The \u201cLegal research.  Legal bibliography\u201d section. The \u201cNegotiated settlement.  Compromise\u201d section. The \u201cPublic health.  Sanitation.  Environmental\u201d section. The \u201cSuccession upon death\u201d section. The \u201cBibliography\u201d section. The \u201cDirectories\u201d section. The \u201cLegal education\u201d section. The \u201cPrivate (Civil) law\u201d section. The \u201cNational defense.  Military law\u201d section. The \u201cFood.  Drugs.  Cosmetics\u201d section. The \u201cLocal government\u201d section. The \u201cJuvenile criminal law and procedure\u201d section. The \u201cLaw reports and related materials\u201d section. The \u201cPublic law in general\u201d section. The \u201cConflict of laws\u201d section. The \u201cScience and the arts.  Research\u201d section. The \u201cJurisprudence and philosophy of Canadian law\u201d section. The \u201cPublic service.  Government officials and employees\u201d section. The \u201cGovernment measures in time of war, national emergency,\u201d section. The \u201cEconomic policy.  Economic planning.  Economic\u201d section. The \u201cPublic safety\u201d section. The \u201cSubordinate [Delegated] legislation\u201d section. The \u201cArbitration and award\u201d section. The \u201cLaw reporting\u201d section. The \u201cStatutes\u201d section. The \u201cRestitution.  Quasi contracts.  Unjust enrichment\u201d section. The \u201cJudicial statistics\u201d section.\n\n[|Entrance||] Law of Canada Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Canada shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Canada shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Delaware Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Delaware shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Delaware shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Ireland (Eire) Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Ireland (Eire) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Ireland (Eire) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Tanzania Room entrance",
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
      "description": "This room has one shelf. You can see the Tanzania shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Tanzania shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Constitutional law Room entrance\n[|Next||||||] Administrative and political divisions shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Constitutional law shelf\n[|Next||||||] By period shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Administrative and political divisions shelf\n[|Next||||||] Public law shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] By period shelf\n[|Next||||||] Regional divisions shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Public law shelf",
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
      "description": "This room has five shelves organized linearly from the entrance towards the back. You can see the Constitutional law shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Constitutional law shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Zambia Room entrance\n[|Next||||||] Zanzibar (to 1964) shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Zambia shelf",
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
      "description": "This room has two shelves organized linearly from the entrance towards the back. You can see the Zambia shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Zambia shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of South Carolina Room entrance",
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
      "description": "This room has one shelf. You can see the Law of South Carolina shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of South Carolina shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Regional comparative and uniform law Room entrance",
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
      "description": "This room has one shelf. You can see the Regional comparative and uniform law shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Regional comparative and uniform law shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Hawaii Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Hawaii shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Hawaii shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Laws of the cities Room entrance",
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
      "description": "This room has one shelf. You can see the Laws of the cities shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Laws of the cities shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Finland Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Finland shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Finland shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Cameroon Room entrance",
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
      "description": "This room has one shelf. You can see the Cameroon shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Cameroon shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are eight rows of books in this shelf. The \u201cLegal systems compared\u201d section. The \u201cEncyclopedias.  Law dictionaries.  Terms and phrases.\u201d section. The \u201cInterdisciplinary discussion of subjects\u201d section with books about Domestic relations. Family law, Obligations. Contracts and transactions, Property. Res in commercio, Criminal law and procedure, Persons, Constitutions and religion. Constitutional and, Private international law. Conflict of laws, Courts and procedure, Inheritance and succession, Cultural affairs, Medical legislation, and Economic law. The \u201cGeneral works.  Treatises\u201d section. The \u201cProverbia.  Legal maxims.  Brocardica juris.  Regulae juris.\u201d section. The \u201cAuxiliary sciences\u201d section. The \u201cConferences.  Symposia\u201d section. The \u201cPeriodicals\u201d section.\n\n[|Entrance||] Religious law in general.  Comparative religious law. Room entrance",
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
      "description": "This room has one shelf. You can see the Religious law in general.  Comparative religious law. shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Religious law in general.  Comparative religious law. shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] British West Indies (General) Room entrance\n[|Next||||||] British West Indies (General) shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] British Virgin Islands (General) shelf\n[|Next||||||] Bahamas shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] British West Indies (General) shelf\n[|Next||||||] Barbados shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Bahamas shelf",
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
      "description": "This room has four shelves organized linearly from the entrance towards the back. You can see the British Virgin Islands (General) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] British Virgin Islands (General) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Mexico Room entrance",
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
      "description": "This room has one shelf. You can see the Mexico shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Mexico shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Pakistan Room entrance",
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
      "description": "This room has one shelf. You can see the Pakistan shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Pakistan shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] History of law Room entrance\n[|Next||||||] History of law shelf",
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
      "description": "There is one row of books in this shelf. The \u201cBy period\u201d section.\n\n[|Previous||] Constitutional law shelf\n[|Next||||||] Indic people.  Ethnic groups shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] History of law shelf\n[|Next||||||] Law reports and related materials shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Indic people.  Ethnic groups shelf\n[|Next||||||] Public law shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Law reports and related materials shelf\n[|Next||||||] Conflict of laws shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Public law shelf",
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
      "description": "This room has six shelves organized linearly from the entrance towards the back. You can see the Constitutional law shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Constitutional law shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Rhode Island Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Rhode Island shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Rhode Island shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Puerto Rico Room entrance",
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
      "description": "This room has one shelf. You can see the Puerto Rico shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Puerto Rico shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Switzerland Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Switzerland shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Switzerland shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Greece Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Greece shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Greece shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Ukraine Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Ukraine shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Ukraine shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Poland Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Poland shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Poland shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Netherlands Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Netherlands shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Netherlands shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Malta Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Malta shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Malta shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Bosnia and Hercegovina Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Bosnia and Hercegovina shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Bosnia and Hercegovina shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Kosovo Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Kosovo shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Kosovo shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Lithuania Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Lithuania shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Lithuania shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Guatemala Room entrance",
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
      "description": "This room has one shelf. You can see the Guatemala shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Guatemala shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Peru Room entrance",
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
      "description": "This room has one shelf. You can see the Peru shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Peru shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Mali Room entrance",
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
      "description": "This room has one shelf. You can see the Mali shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Mali shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Nigeria Room entrance",
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
      "description": "This room has one shelf. You can see the Nigeria shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Nigeria shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Haiti Room entrance",
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
      "description": "This room has one shelf. You can see the Haiti shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Haiti shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Colombia Room entrance",
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
      "description": "This room has one shelf. You can see the Colombia shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Colombia shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Latin America (General) Room entrance\n[|Next||||||] General shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Latin America (General) shelf",
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
      "description": "This room has two shelves organized linearly from the entrance towards the back. You can see the Latin America (General) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Latin America (General) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Ecuador Room entrance",
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
      "description": "This room has one shelf. You can see the Ecuador shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Ecuador shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Bolivia Room entrance",
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
      "description": "This room has one shelf. You can see the Bolivia shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Bolivia shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] China (Republic, 1949-    ).  Taiwan Room entrance",
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
      "description": "This room has one shelf. You can see the China (Republic, 1949-    ).  Taiwan shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] China (Republic, 1949-    ).  Taiwan shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Khorezmskai\uf04da Sovetskai\uf04da Sot\uf04dsialisticheskai\uf04da Room entrance\n[|Next||||||] Khorezmskai\uf04da Sovetskai\uf04da Sot\uf04dsialisticheskai\uf04da shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Kazakhstan shelf",
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
      "description": "This room has two shelves organized linearly from the entrance towards the back. You can see the Kazakhstan shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Kazakhstan shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Zimbabwe Room entrance",
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
      "description": "This room has one shelf. You can see the Zimbabwe shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Zimbabwe shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are five rows of books in this shelf. The \u201cOrthodox Eastern Church\u201d section with books about Autocephalous churches and General. The \u201cHistory\u201d section with books about Sources and General works. The \u201cGeneral (Comparative)\u201d section. The \u201cPre-Chalcedonian churches\u201d section. The \u201cEncyclopedias. Law dictionaries\u201d section.\n\n[|Entrance||] Canon law of Eastern Churches Room entrance",
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
      "description": "This room has one shelf. You can see the Canon law of Eastern Churches shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Canon law of Eastern Churches shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Korea.  South Korea Room entrance",
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
      "description": "This room has one shelf. You can see the Korea.  South Korea shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Korea.  South Korea shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] New Zealand Room entrance",
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
      "description": "This room has one shelf. You can see the New Zealand shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] New Zealand shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Fiji Room entrance",
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
      "description": "This room has one shelf. You can see the Fiji shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Fiji shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] New Caledonia Room entrance",
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
      "description": "This room has one shelf. You can see the New Caledonia shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] New Caledonia shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Utah Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Utah shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Utah shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Denmark Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Denmark shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Denmark shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Portugal Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Portugal shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Portugal shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Estonia Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Estonia shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Estonia shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Yugoslavia Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Yugoslavia shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Yugoslavia shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Czech Republic (1993-        ) Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Czech Republic (1993-        ) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Czech Republic (1993-        ) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Costa Rica Room entrance",
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
      "description": "This room has one shelf. You can see the Costa Rica shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Costa Rica shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Venezuela Room entrance",
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
      "description": "This room has one shelf. You can see the Venezuela shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Venezuela shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Honduras Room entrance",
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
      "description": "This room has one shelf. You can see the Honduras shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Honduras shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Nicaragua Room entrance",
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
      "description": "This room has one shelf. You can see the Nicaragua shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Nicaragua shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Chile Room entrance",
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
      "description": "This room has one shelf. You can see the Chile shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Chile shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Paraguay Room entrance",
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
      "description": "This room has one shelf. You can see the Paraguay shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Paraguay shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of East Germany Room entrance",
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
      "description": "This room has one shelf. You can see the Law of East Germany shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of East Germany shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Sweden Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Sweden shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Sweden shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Morocco Room entrance",
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
      "description": "This room has one shelf. You can see the Morocco shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Morocco shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] General Room entrance",
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
      "description": "This room has one shelf. You can see the General shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] General shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Belarus (Republic) Room entrance",
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
      "description": "This room has one shelf. You can see the Belarus (Republic) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Belarus (Republic) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] General Room entrance",
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
      "description": "This room has one shelf. You can see the General shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] General shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Thailand Room entrance",
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
      "description": "This room has one shelf. You can see the Thailand shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Thailand shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Philippines Room entrance",
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
      "description": "This room has one shelf. You can see the Philippines shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Philippines shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Vietnam Room entrance",
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
      "description": "This room has one shelf. You can see the Vietnam shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Vietnam shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Singapore Room entrance",
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
      "description": "This room has one shelf. You can see the Singapore shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Singapore shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Iran Room entrance",
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
      "description": "This room has one shelf. You can see the Iran shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Iran shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Mayotte Room entrance",
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
      "description": "This room has one shelf. You can see the Mauritius shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Mauritius shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Namibia Room entrance",
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
      "description": "This room has one shelf. You can see the Namibia shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Namibia shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Botswana Room entrance",
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
      "description": "This room has one shelf. You can see the Botswana shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Botswana shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Angola Room entrance",
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
      "description": "This room has one shelf. You can see the Angola shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Angola shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Mozambique Room entrance",
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
      "description": "This room has one shelf. You can see the Mozambique shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Mozambique shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Kenya Room entrance",
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
      "description": "This room has one shelf. You can see the Kenya shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Kenya shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Gabon Room entrance",
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
      "description": "This room has one shelf. You can see the Gabon shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Gabon shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Lesotho Room entrance",
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
      "description": "This room has one shelf. You can see the Lesotho shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Lesotho shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Ghana Room entrance",
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
      "description": "This room has one shelf. You can see the Ghana shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Ghana shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Malawi Room entrance",
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
      "description": "This room has one shelf. You can see the Malawi shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Malawi shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Uganda Room entrance",
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
      "description": "This room has one shelf. You can see the Uganda shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Uganda shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Rwanda Room entrance",
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
      "description": "This room has one shelf. You can see the Rwanda shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Rwanda shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Congo (Democratic Republic) Room entrance",
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
      "description": "This room has one shelf. You can see the Congo (Democratic Republic) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Congo (Democratic Republic) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] French West Africa Room entrance",
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
      "description": "This room has one shelf. You can see the French West Africa shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] French West Africa shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Senegal Room entrance",
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
      "description": "This room has one shelf. You can see the Senegal shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Senegal shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Turkey Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Turkey shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Turkey shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Azerbaijan Room entrance",
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
      "description": "This room has one shelf. You can see the Azerbaijan shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Azerbaijan shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Egypt Room entrance",
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
      "description": "This room has one shelf. You can see the Egypt shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Egypt shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Kuwait Room entrance",
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
      "description": "This room has one shelf. You can see the Kuwait shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Kuwait shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Yemen Room entrance",
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
      "description": "This room has one shelf. You can see the Yemen shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Yemen shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Sudan Room entrance",
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
      "description": "This room has one shelf. You can see the Sudan shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Sudan shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Algeria Room entrance",
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
      "description": "This room has one shelf. You can see the Algeria shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Algeria shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] United Arab Emirates Room entrance",
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
      "description": "This room has one shelf. You can see the United Arab Emirates shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] United Arab Emirates shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Brazil Room entrance",
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
      "description": "This room has one shelf. You can see the Brazil shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Brazil shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Guyana Room entrance",
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
      "description": "This room has one shelf. You can see the Guyana shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Guyana shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Uruguay Room entrance",
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
      "description": "This room has one shelf. You can see the Uruguay shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Uruguay shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Kyrgyzstan Room entrance",
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
      "description": "This room has one shelf. You can see the Kyrgyzstan shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Kyrgyzstan shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Guinea Room entrance",
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
      "description": "This room has one shelf. You can see the Guinea shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Guinea shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Macao Room entrance",
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
      "description": "This room has one shelf. You can see the Macao shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Macao shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Armenian SSR (to 1991) Room entrance",
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
      "description": "This room has one shelf. You can see the Armenian SSR (to 1991) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Armenian SSR (to 1991) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Tunisia Room entrance",
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
      "description": "This room has one shelf. You can see the Tunisia shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Tunisia shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Lebanon Room entrance",
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
      "description": "This room has one shelf. You can see the Lebanon shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Lebanon shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Bahrain Room entrance\n[|Next||||||] Armenia (Republic) shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Bahrain shelf",
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
      "description": "This room has two shelves organized linearly from the entrance towards the back. You can see the Bahrain shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Bahrain shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Slovenia Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Slovenia shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Slovenia shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] French regions, provinces, cities, etc. Room entrance",
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
      "description": "This room has one shelf. You can see the French regions, provinces, cities, etc. shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] French regions, provinces, cities, etc. shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Austria Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Austria shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Austria shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are five rows of books in this shelf. The \u201cPeaceful uses of outer space\u201d section with books about Public order in space and outer space, Liability for accidents, and Space resources. The \u201cConcepts and principles.  Theory\u201d section with books about Regulated use theory. The \u201cTreaties and other international agreements\u201d section. The \u201cUn-peaceful uses of outer space\u201d section. The \u201cBoundaries\u201d section.\n\n[|Entrance||] Space law.  Law of outer space Room entrance",
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
      "description": "This room has one shelf. You can see the Space law.  Law of outer space shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Space law.  Law of outer space shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Western Samoa Room entrance",
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
      "description": "This room has one shelf. You can see the Western Samoa shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Western Samoa shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] French Polynesia Room entrance",
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
      "description": "This room has one shelf. You can see the French Polynesia shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] French Polynesia shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 26 rows of books in this shelf. The \u201cSocial law and legislation\u201d section. The \u201cEducation\u201d section. The \u201cProperty\u201d section. The \u201cCourts.  Procedure\u201d section. The \u201cLegislation\u201d section. The \u201cPublic finance\u201d section. The \u201cSuccession upon death\u201d section. The \u201cLocal government\u201d section. The \u201cLaw reports and related materials\u201d section. The \u201cContracts\u201d section. The \u201cAssociations\u201d section. The \u201cRegulation of industry, trade, and commerce.\u201d section. The \u201cCriminal law\u201d section. The \u201cPersons\u201d section. The \u201cScience and the arts.  Research\u201d section. The \u201cPublic property\u201d section. The \u201cThe legal profession\u201d section. The \u201cConstitutional law\u201d section. The \u201cTorts (Extracontractual liability)\u201d section. The \u201cLegal research.  Legal bibliography\u201d section. The \u201cJuvenile criminal law and procedure\u201d section. The \u201cPublic health\u201d section. The \u201cMedical legislation\u201d section. The \u201cTrusts and trustees\u201d section. The \u201cPublic safety\u201d section. The \u201cPublic service\u201d section.\n\n[|Entrance||] Law of Ontario Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Ontario shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Ontario shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Alberta Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Alberta shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Alberta shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of British Columbia Room entrance",
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
      "description": "This room has one shelf. You can see the Law of British Columbia shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of British Columbia shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 28 rows of books in this shelf. The \u201cCourts.  Procedure\u201d section with books about Civil procedure, Administration of justice.  Organization of the, and Court organization and procedure. The \u201cSocial law and legislation\u201d section. The \u201cAdministrative law\u201d section with books about Medical legislation, Public health.  Sanitation.  Environmental pollution, Administrative functions, Administrative organization, The professions, Education, Public property.  Public restraints on private property, Police and power of the police, Public safety, Science and the arts.  Research, Public service.  Government officials and employees, Alcohol.  Liquor laws, and Control of individuals. The \u201cRegulation of industry, trade, and commerce\u201d section with books about Trade regulation.  Control of trade practices., Primary production.  Extractive industries, Transportation and communication.  Carriers, Construction and building industry.  Contractors, Trade and commerce, Food processing industries, and Public utilities. The \u201cCivil law\u201d section with books about Obligations, Property, Succession and gifts, and Persons. The \u201cAssociations\u201d section. The \u201cCriminal law.  Criminal procedure\u201d section. The \u201cCompensation to victims of crime.  Reparation\u201d section. The \u201cConstitutional law\u201d section. The \u201cPublic finance\u201d section. The \u201cThe legal profession\u201d section with books about Lawyers and Notaries. The \u201cLaw reports and related materials\u201d section. The \u201cConflict of laws.  Private international law\u201d section. The \u201cLegislation\u201d section. The \u201cNative peoples.  Indians.  Inuit\u201d section. The \u201cCommercial law.  Mercantile transactions\u201d section. The \u201cPublic law in general\u201d section. The \u201cLaw reform.  Criticism\u201d section. The \u201cInsurance\u201d section. The \u201cNegotiable instruments\u201d section. The \u201cInsolvency and bankruptcy\u201d section. The \u201cLegal research.  Legal bibliography\u201d section. The \u201cMilitary law\u201d section. The \u201cIntellectual and industrial property\u201d section. The \u201cEconomic policy.  Economic planning.  Economic\u201d section. The \u201cCommunity legal services.  Legal aid\u201d section. The \u201cBanking\u201d section. The \u201cInvestments\u201d section.\n\n[|Entrance||] Law of Qu\u00e9bec Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Qu\u00e9bec shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Qu\u00e9bec shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Papua New Guinea Room entrance",
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
      "description": "This room has one shelf. You can see the Papua New Guinea shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Papua New Guinea shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Midway Islands Room entrance\n[|Next||||||] Marshall Islands shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Micronesia (Federated States) shelf",
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
      "description": "This room has two shelves organized linearly from the entrance towards the back. You can see the Micronesia (Federated States) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Micronesia (Federated States) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Palau Room entrance",
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
      "description": "This room has one shelf. You can see the Palau shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Palau shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Guam Room entrance",
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
      "description": "This room has one shelf. You can see the Guam shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Guam shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Cyprus Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Cyprus shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Cyprus shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Hungary Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Hungary shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Hungary shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] French Guiana Room entrance",
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
      "description": "This room has one shelf. You can see the French Guiana shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] French Guiana shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Norway Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Norway shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Norway shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Central African Republic Room entrance",
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
      "description": "This room has one shelf. You can see the Central African Republic shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Central African Republic shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Togo Room entrance",
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
      "description": "This room has one shelf. You can see the Togo shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Togo shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Burkina Faso Room entrance",
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
      "description": "This room has one shelf. You can see the Burkina Faso shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Burkina Faso shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] C\u00f4te d\u2019Ivoire Room entrance",
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
      "description": "This room has one shelf. You can see the C\u00f4te d\u2019Ivoire shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] C\u00f4te d\u2019Ivoire shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Jerusalem Room entrance",
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
      "description": "This room has one shelf. You can see the Jerusalem shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Jerusalem shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Iraq Room entrance",
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
      "description": "This room has one shelf. You can see the Iraq shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Iraq shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Libya Room entrance",
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
      "description": "This room has one shelf. You can see the Libya shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Libya shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Panama Room entrance\n[|Next||||||] Panama Canal Zone shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Panama shelf",
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
      "description": "This room has two shelves organized linearly from the entrance towards the back. You can see the Panama shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Panama shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Dominican Republic Room entrance",
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
      "description": "This room has one shelf. You can see the Dominican Republic shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Dominican Republic shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Cuba Room entrance",
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
      "description": "This room has one shelf. You can see the Cuba shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Cuba shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] El Salvador Room entrance",
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
      "description": "This room has one shelf. You can see the El Salvador shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] El Salvador shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Liberia Room entrance",
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
      "description": "This room has one shelf. You can see the Liberia shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Liberia shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Niger Room entrance",
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
      "description": "This room has one shelf. You can see the Niger shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Niger shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Democratic People\u2019s Republic of Korea.  North Korea Room entrance",
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
      "description": "This room has one shelf. You can see the Democratic People\u2019s Republic of Korea.  North Korea shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Democratic People\u2019s Republic of Korea.  North Korea shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of indigenous peoples Room entrance\n[|Next||||||] History of law shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Law of indigenous peoples shelf",
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
      "description": "This room has two shelves organized linearly from the entrance towards the back. You can see the Law of indigenous peoples shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of indigenous peoples shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Northern Mariana Islands Room entrance",
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
      "description": "This room has one shelf. You can see the Northern Mariana Islands shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Northern Mariana Islands shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Cambodia Room entrance",
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
      "description": "This room has one shelf. You can see the Cambodia shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Cambodia shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are five rows of books in this shelf. The \u201cOfficial acts. Documents\u201d section. The \u201cGeneral (Comparative)\u201d section. The \u201cIndividual churches sui juris and ritual traditions\u201d section with books about Churches of the Constantinopolitan (Byzantine) rite and Churches of the Chaldean (East-Syrian) rite. The \u201cBibliography\u201d section. The \u201cCongresses. Conferences\u201d section.\n\n[|Entrance||] Canon law of Eastern Rite Churches in Communion with the Room entrance",
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
      "description": "This room has one shelf. You can see the Canon law of Eastern Rite Churches in Communion with the shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Canon law of Eastern Rite Churches in Communion with the shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Albania Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Albania shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Albania shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Trinidad and Tobago Room entrance",
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
      "description": "This room has one shelf. You can see the Trinidad and Tobago shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Trinidad and Tobago shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Romania Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Romania shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Romania shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Slovakia (1993-        ) Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Slovakia (1993-        ) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Slovakia (1993-        ) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Moldova Room entrance",
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
      "description": "This room has one shelf. You can see the Moldova shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Moldova shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Northern Ireland Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Northern Ireland shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Northern Ireland shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Saskatchewan Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Saskatchewan shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Saskatchewan shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Brunei Room entrance",
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
      "description": "This room has one shelf. You can see the Brunei shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Brunei shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Laos Room entrance",
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
      "description": "This room has one shelf. You can see the Laos shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Laos shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Sri Lanka Room entrance",
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
      "description": "This room has one shelf. You can see the Sri Lanka shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Sri Lanka shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Nepal Room entrance",
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
      "description": "This room has one shelf. You can see the Nepal shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Nepal shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Burma Room entrance",
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
      "description": "This room has one shelf. You can see the Burma shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Burma shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Bangladesh Room entrance",
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
      "description": "This room has one shelf. You can see the Bangladesh shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Bangladesh shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Equatorial Guinea Room entrance",
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
      "description": "This room has one shelf. You can see the Equatorial Guinea shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Equatorial Guinea shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Tajikistan Room entrance",
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
      "description": "This room has one shelf. You can see the Tajikistan shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Tajikistan shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Turkmenistan Room entrance",
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
      "description": "This room has one shelf. You can see the Turkmenistan shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Turkmenistan shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Comoros Room entrance",
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
      "description": "This room has one shelf. You can see the Comoros shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Comoros shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Seychelles Room entrance",
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
      "description": "This room has one shelf. You can see the Seychelles shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Seychelles shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Madagascar Room entrance",
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
      "description": "This room has one shelf. You can see the Madagascar shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Madagascar shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Regional organization and integration Room entrance",
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
      "description": "This room has one shelf. You can see the Regional organization and integration shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Regional organization and integration shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Eritrea Room entrance",
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
      "description": "This room has one shelf. You can see the Eritrea shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Eritrea shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Iceland Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Iceland shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Iceland shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Georgia (Republic) Room entrance",
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
      "description": "This room has one shelf. You can see the Georgia (Republic) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Georgia (Republic) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Belize Room entrance",
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
      "description": "This room has one shelf. You can see the Belize shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Belize shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Latvia Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Latvia shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Latvia shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Sao Tome and Principe Room entrance",
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
      "description": "This room has one shelf. You can see the Sao Tome and Principe shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Sao Tome and Principe shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Andorra Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Andorra shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Andorra shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Solomon Islands Room entrance\n[|Next||||||] Pitcairn Island shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Solomon Islands shelf",
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
      "description": "This room has two shelves organized linearly from the entrance towards the back. You can see the Solomon Islands shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Solomon Islands shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Saint Lucia Room entrance\n[|Next||||||] Saint Lucia shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Saint Vincent and the Grenadines shelf\n[|Next||||||] Saint Christopher (Saint Kitts), Nevis, and Anguilla shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Saint Lucia shelf\n[|Next||||||] Sint Maarten shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Saint Christopher (Saint Kitts), Nevis, and Anguilla shelf",
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
      "description": "This room has four shelves organized linearly from the entrance towards the back. You can see the Saint Vincent and the Grenadines shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Saint Vincent and the Grenadines shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Virgin Islands of the United States Room entrance",
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
      "description": "This room has one shelf. You can see the Virgin Islands of the United States shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Virgin Islands of the United States shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Grenada Room entrance\n[|Next||||||] Grenada shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Dutch West Indies (General) shelf\n[|Next||||||] Dutch Leeward Islands (General) shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Grenada shelf\n[|Next||||||] French West Indies (General) shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Dutch Leeward Islands (General) shelf\n[|Next||||||] Guadeloupe shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] French West Indies (General) shelf",
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
      "description": "This room has five shelves organized linearly from the entrance towards the back. You can see the Dutch West Indies (General) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Dutch West Indies (General) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Gambia Room entrance",
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
      "description": "This room has one shelf. You can see the Gambia shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Gambia shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Laws of the territories.  Laws of the Confederate States of Room entrance",
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
      "description": "This room has one shelf. You can see the Laws of the territories.  Laws of the Confederate States of shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Laws of the territories.  Laws of the Confederate States of shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Isle of Man.  Channel Islands Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Isle of Man.  Channel Islands shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Isle of Man.  Channel Islands shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] General Room entrance\n[|Next||||||] Anguilla shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] General shelf",
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
      "description": "This room has two shelves organized linearly from the entrance towards the back. You can see the General shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] General shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Russian S.F.S.R. (to 1991) Room entrance",
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
      "description": "This room has one shelf. You can see the Russian S.F.S.R. (to 1991) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Russian S.F.S.R. (to 1991) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Palestine (to 1948) Room entrance\n[|Next||||||] Oman shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Palestine (to 1948) shelf",
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
      "description": "This room has two shelves organized linearly from the entrance towards the back. You can see the Palestine (to 1948) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Palestine (to 1948) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Yukon Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Yukon shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Yukon shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] French Indochina.  Indochina (Federation) Room entrance",
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
      "description": "This room has one shelf. You can see the French Indochina.  Indochina (Federation) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] French Indochina.  Indochina (Federation) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Yeman (People\u2019s Democratic Republic) (to 1990) Room entrance",
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
      "description": "This room has one shelf. You can see the Yeman (People\u2019s Democratic Republic) (to 1990) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Yeman (People\u2019s Democratic Republic) (to 1990) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Surinam Room entrance",
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
      "description": "This room has one shelf. You can see the Surinam shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Surinam shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Syria Room entrance",
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
      "description": "This room has one shelf. You can see the Syria shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Syria shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Montenegro Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Montenegro shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Montenegro shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Italian Somaliland Room entrance",
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
      "description": "This room has one shelf. You can see the Italian Somaliland shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Italian Somaliland shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Law of cities, towns, etc. Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Law of cities, towns, etc. shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Law of cities, towns, etc. shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Manitoba Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Manitoba shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Manitoba shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Somalia Room entrance",
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
      "description": "This room has one shelf. You can see the Somalia shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Somalia shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Jamaica Room entrance\n[|Next||||||] Montserrat shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Jamaica shelf\n[|Next||||||] Martinique shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Montserrat shelf",
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
      "description": "This room has three shelves organized linearly from the entrance towards the back. You can see the Jamaica shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Jamaica shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Turks and Caicos Islands Room entrance",
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
      "description": "This room has one shelf. You can see the Turks and Caicos Islands shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Turks and Caicos Islands shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Law of Prince Edward Island Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Law of Prince Edward Island shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Law of Prince Edward Island shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Burundi Room entrance",
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
      "description": "This room has one shelf. You can see the Burundi shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Burundi shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Pacific Islands (Trust Territory) Room entrance",
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
      "description": "This room has one shelf. You can see the Pacific Islands (Trust Territory) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Pacific Islands (Trust Territory) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Vietnam (Republic).  South Vietnam Room entrance",
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
      "description": "This room has one shelf. You can see the Vietnam (Republic).  South Vietnam shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Vietnam (Republic).  South Vietnam shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There is one row of books in this shelf. The \u201cAntarctic Treaty System\u201d section.\n\n[|Entrance||] Antarctica Room entrance",
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
      "description": "This room has one shelf. You can see the Antarctica shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Antarctica shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] British New Guinea (Territory of Papua) Room entrance",
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
      "description": "This room has one shelf. You can see the American Samoa shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] American Samoa shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Vanuatu Room entrance",
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
      "description": "This room has one shelf. You can see the Vanuatu shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Vanuatu shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Niue Room entrance",
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
      "description": "This room has one shelf. You can see the Niue shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Niue shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Afghanistan Room entrance",
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
      "description": "This room has one shelf. You can see the Afghanistan shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Afghanistan shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Gibraltar Room entrance",
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
      "description": "This room has one shelf. You can see the Gibraltar shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Gibraltar shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Chad Room entrance",
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
      "description": "This room has one shelf. You can see the Chad shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Chad shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Sierra Leone Room entrance",
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
      "description": "This room has one shelf. You can see the Sierra Leone shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Sierra Leone shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Swaziland Room entrance",
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
      "description": "This room has one shelf. You can see the Swaziland shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Swaziland shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] R\u00e9union Room entrance",
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
      "description": "This room has one shelf. You can see the R\u00e9union shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] R\u00e9union shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Djibouti Room entrance",
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
      "description": "This room has one shelf. You can see the Djibouti shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Djibouti shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Cayman Islands Room entrance",
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
      "description": "This room has one shelf. You can see the Cayman Islands shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Cayman Islands shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Dominica Room entrance\n[|Next||||||] Cura\u00e7ao shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Dominica shelf",
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
      "description": "This room has two shelves organized linearly from the entrance towards the back. You can see the Dominica shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Dominica shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Congo (Brazzaville) Room entrance",
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
      "description": "This room has one shelf. You can see the Congo (Brazzaville) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Congo (Brazzaville) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Nauru Room entrance\n[|Next||||||] Netherlands New Guinea (to 1963) shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Nauru shelf",
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
      "description": "This room has two shelves organized linearly from the entrance towards the back. You can see the Nauru shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Nauru shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Benin Room entrance",
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
      "description": "This room has one shelf. You can see the Benin shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Benin shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Regional organization and integration Room entrance",
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
      "description": "This room has one shelf. You can see the Regional organization and integration shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Regional organization and integration shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Qatar Room entrance",
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
      "description": "This room has one shelf. You can see the Qatar shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Qatar shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] British Central Africa Protectorate Room entrance",
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
      "description": "This room has one shelf. You can see the British Central Africa Protectorate shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] British Central Africa Protectorate shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Cities, etc. Room entrance",
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
      "description": "This room has one shelf. You can see the Cities, etc. shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Cities, etc. shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Ukraine Room entrance",
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
      "description": "This room has one shelf. You can see the Ukraine shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Ukraine shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Cape Verde Room entrance",
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
      "description": "This room has one shelf. You can see the Cape Verde shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Cape Verde shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Aruba Room entrance\n[|Next||||||] Antigua and Barbuda shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Aruba shelf",
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
      "description": "This room has two shelves organized linearly from the entrance towards the back. You can see the Aruba shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Aruba shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Maldives Room entrance",
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
      "description": "This room has one shelf. You can see the Maldives shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Maldives shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Mauritania Room entrance",
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
      "description": "This room has one shelf. You can see the Mauritania shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Mauritania shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Guinea-Bissau Room entrance",
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
      "description": "This room has one shelf. You can see the Guinea-Bissau shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Guinea-Bissau shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Cook Islands Room entrance",
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
      "description": "This room has one shelf. You can see the Cook Islands shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Cook Islands shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Tonga Room entrance",
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
      "description": "This room has one shelf. You can see the Tonga shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Tonga shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Bhutan Room entrance",
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
      "description": "This room has one shelf. You can see the Bhutan shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Bhutan shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Gaza Room entrance",
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
      "description": "This room has one shelf. You can see the Gaza shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Gaza shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Falkland Islands Room entrance",
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
      "description": "This room has one shelf. You can see the Falkland Islands shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Falkland Islands shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Tuvalu Room entrance",
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
      "description": "This room has one shelf. You can see the Tuvalu shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Tuvalu shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] French Equatorial Africa Room entrance",
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
      "description": "This room has one shelf. You can see the French Equatorial Africa shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] French Equatorial Africa shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Kiribati Room entrance",
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
      "description": "This room has one shelf. You can see the Kiribati shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Kiribati shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Law of Australian peoples.  Aborigines Room entrance",
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
      "description": "This room has one shelf. You can see the Law of Australian peoples.  Aborigines shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Law of Australian peoples.  Aborigines shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 20 rows of books in this shelf. The \u201cKindergarten\u201d section. The \u201cSchool hygiene.    School health services\u201d section. The \u201cSchool architecture and equipment.    School physical\u201d section. The \u201cEducation and training of teachers and\u201d section with books about State teachers colleges, Professional aspects of teaching and school, Certification of teachers, and Teacher training in universities and colleges. The \u201cElementary or public school education\u201d section. The \u201cSystems of individual educators and writers\u201d section. The \u201cSecondary education.    High schools\u201d section. The \u201cHigher education\u201d section with books about Supervision and administration.    Business, Teaching personnel, Institutions of higher education, Curriculum, Graduate education, Admissions and entrance requirements, Student financial aid, College examinations, Trade unions, Academic degrees, and Endowments, trusts, etc.. The \u201cTeaching (Principles and practice)\u201d section with books about Reading (General). The \u201cEducational psychology\u201d section. The \u201cSchool administration and organization\u201d section with books about School management and discipline, Teaching personnel, Administrative personnel, and Trade unions. The \u201cGeneral\u201d section. The \u201cEarly childhood education\u201d section. The \u201cPreschool education.    Nursery schools\u201d section. The \u201cPrimary education\u201d section. The \u201cChild study\u201d section. The \u201cSchool life.    Student manners and customs\u201d section. The \u201cSpecial days\u201d section. The \u201cHygiene in universities and colleges\u201d section. The \u201cEducational consultants and consulting\u201d section.\n\n[|Entrance||] Theory and practice of education Room entrance",
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
      "description": "This room has one shelf. You can see the Theory and practice of education shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Theory and practice of education shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Textbooks Room entrance",
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
      "description": "This room has one shelf. You can see the Textbooks shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Textbooks shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are six rows of books in this shelf. The \u201cUnited States\u201d section. The \u201cBiography\u201d section. The \u201cGeneral\u201d section. The \u201cHigher education\u201d section. The \u201cOther regions or countries\u201d section. The \u201cBy period\u201d section.\n\n[|Entrance||] History of education Room entrance",
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
      "description": "This room has one shelf. You can see the History of education shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] History of education shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are three rows of books in this shelf. The \u201cUniversities.    Colleges\u201d section. The \u201cSecondary and elementary schools\u201d section. The \u201cCommunity colleges.    Junior colleges\u201d section.\n\n[|Entrance||] United States Room entrance",
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
      "description": "This room has one shelf. You can see the United States shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] United States shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 13 rows of books in this shelf. The \u201cEducation of special classes of persons\u201d section with books about Blacks.    African Americans, Exceptional children and youth.    Special, Other special classes, Latin Americans.    Hispanic Americans, Women, Immigrants or ethnic and linguistic minorities., Education in developing countries, Boys, Student-athletes, Asians, Jews, Children of immigrants (First generation), Romanies.    Gypsies, Asian Americans.    Asians in the United States, Lapps, and Gays.    Lesbians.    Bisexuals. The \u201cEducation extension.    Adult education.    Continuing\u201d section with books about Lyceums and lecture courses.    Forums, Distance education, Radio and television extension courses., Reading circles and correspondence clubs, University extension, Aged education, Vacation schools.    Summer schools, Correspondence schools, and Evening schools. The \u201cTypes of education\u201d section with books about Career education, Competency based education, Multicultural education (General), Political education, Professional education, Vocational education (General), Humanistic education.    Liberal education, Cooperative education, Industrial education (General), Basic education.    Basic skills education, Community education, Communist education, and Collective education. The \u201cInclusive education\u201d section. The \u201cSocial aspects of education\u201d section with books about Community and the school, Higher education and the state, Educational sociology, Education and the state, Attendance.    Dropouts, Foundations, endowments, funds, Literacy.    Illiteracy, Economic aspects of education, Compulsory education, Demographic aspects of education, and Taxation of schools and colleges. The \u201cMoral and religious education\u201d section with books about Moral education.    Character building and Religion and education.    Education under. The \u201cForms of education\u201d section. The \u201cPrivate school education\u201d section with books about Preparatory schools.    Preparatory school. The \u201cSelf-education.    Self-culture\u201d section. The \u201cNonformal education\u201d section. The \u201cFundamental education\u201d section. The \u201cTraveling educational exhibits\u201d section. The \u201cEducation and travel\u201d section.\n\n[|Entrance||] Special aspects of education Room entrance",
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
      "description": "This room has one shelf. You can see the Special aspects of education shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Special aspects of education shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are seven rows of books in this shelf. The \u201cDirectories of educational institutions\u201d section. The \u201cOfficial documents, reports, etc.\u201d section. The \u201cCongresses\u201d section. The \u201cPeriodicals.    Societies\u201d section. The \u201cEducational exhibitions and museums\u201d section. The \u201cYearbooks\u201d section. The \u201cSchool fairs\u201d section.\n\n[|Entrance||] Education (General) Room entrance",
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
      "description": "This room has one shelf. You can see the Education (General) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Education (General) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 29 rows of books in this shelf. The \u201cGreat Britain\u201d section. The \u201cGermany\u201d section. The \u201cEstonia\u201d section. The \u201cCzech Republic\u201d section. The \u201cTurkey and the Baltic states\u201d section. The \u201cSpain\u201d section. The \u201cAustria\u201d section. The \u201cFrance\u201d section. The \u201cGreece\u201d section. The \u201cRussia (Federation)\u201d section. The \u201cNorway\u201d section. The \u201cSwitzerland\u201d section. The \u201cSweden\u201d section. The \u201cItaly\u201d section. The \u201cFinland\u201d section. The \u201cPoland\u201d section. The \u201cUkraine\u201d section. The \u201cHungary\u201d section. The \u201cIceland\u201d section. The \u201cBelgium\u201d section. The \u201cNetherlands\u201d section. The \u201cDenmark\u201d section. The \u201cPortugal\u201d section. The \u201cLithuania\u201d section. The \u201cLatvia\u201d section. The \u201cBelarus\u201d section. The \u201cFaroe Islands\u201d section. The \u201cSlovakia\u201d section. The \u201cMoldova\u201d section.\n\n[|Entrance||] Individual institutions Room entrance",
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
      "description": "This room has one shelf. You can see the Individual institutions shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Individual institutions shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 33 rows of books in this shelf. The \u201cTaiwan\u201d section. The \u201cJapan\u201d section. The \u201cPhilippines\u201d section. The \u201cIndonesia\u201d section. The \u201cIndia.    Pakistan.    Bangladesh.    Burma.    Sri\u201d section. The \u201cAfrica\u201d section with books about German Africa (Former), South Africa, Natal, West Africa, Portuguese Africa (Former), Zaire, Sudan, Liberia, Transvaal, Algeria and Tunisia, Egypt, Uganda, Kenya, Tanzania, Zambia, Ethiopia, Orange Free State, Morocco, Mali, Malawi, Zimbabwe, Libya, Ivory Coast, Zululand, Burundi, Swaziland, Senegal, Rwanda, Italian Africa (Former), Madagascar, Botswana, French Equatorial Africa.    French Congo, and Lesotho. The \u201cChina\u201d section. The \u201cFormer Soviet republics in Asia\u201d section. The \u201cAustralia\u201d section. The \u201cPacific islands\u201d section. The \u201cArmenia (Republic)\u201d section. The \u201cNew Zealand\u201d section. The \u201cMalaysia\u201d section. The \u201cSyria\u201d section. The \u201cLebanon\u201d section. The \u201cIsrael.    Palestine\u201d section. The \u201cIndochina\u201d section. The \u201cKorea\u201d section. The \u201cIran\u201d section. The \u201cOther\u201d section. The \u201cPapua-New Guinea (Ter.)\u201d section. The \u201cIraq\u201d section. The \u201cAsia\u201d section. The \u201cIndian Ocean islands\u201d section. The \u201cAfghanistan\u201d section. The \u201cKuwait\u201d section. The \u201cJordan\u201d section. The \u201cAzerbaijan\u201d section. The \u201cYeman (Yemen Arab Republic)\u201d section. The \u201cQatar\u201d section. The \u201cGeorgia (Republic)\u201d section. The \u201cSaudi Arabia\u201d section. The \u201cBahrain\u201d section.\n\n[|Entrance||] Individual institutions Room entrance",
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
      "description": "This room has one shelf. You can see the Individual institutions shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Individual institutions shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Student fraternities and societies, United States Room entrance",
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
      "description": "This room has one shelf. You can see the Student fraternities and societies, United States shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Student fraternities and societies, United States shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are five rows of books in this shelf. The \u201cWest Indies\u201d section. The \u201cSouth America\u201d section with books about Peru, Chile, Brazil, Argentina, Venezuela, Bolivia, Colombia, Ecuador, Uruguay, Paraguay, and Guianas. The \u201cMexico\u201d section. The \u201cCanada\u201d section. The \u201cCentral America\u201d section.\n\n[|Entrance||] America (except United States) Room entrance",
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
      "description": "This room has one shelf. You can see the America (except United States) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] America (except United States) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] College and school magazines and papers Room entrance",
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
      "description": "This room has one shelf. You can see the College and school magazines and papers shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] College and school magazines and papers shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 21 rows of books in this shelf. The \u201cLiterature for children\u201d section. The \u201cHistory and criticism\u201d section with books about Biography, Vocal music, Popular music, By region or country, Instruments and instrumental music, By period, Folk, national, and ethnic music, Composition and performance, Music on particular topics, Program music, General works, Dance music, and Musical journalism. The \u201cDictionaries. Encyclopedias\u201d section. The \u201cMusic as a profession. Vocational guidance\u201d section. The \u201cPhilosophical  and  societal  aspects  of  music.  Physics\u201d section with books about Social and political aspects of music, Moral influence of music.    Therapeutic use of music, Psychology, Aesthetics, General works, Criticism, Physics and acoustics, Religious aspects of music, Physiological aspects of music, and Music in the workplace. The \u201cBibliography\u201d section. The \u201cAspects of the field of music as a whole\u201d section. The \u201cMusic trade\u201d section. The \u201cLibrettos. Texts. Scenarios\u201d section. The \u201cDirectories. Almanacs\u201d section. The \u201cMusic librarianship\u201d section. The \u201cMusical research\u201d section. The \u201cMusic printing and publishing\u201d section. The \u201cFestivals. Congresses\u201d section. The \u201cSocieties and other organizations\u201d section. The \u201cManuscript studies and manuscripts\u201d section. The \u201cPeriodicals. Serials\u201d section. The \u201cInstitutions\u201d section. The \u201cSpecial collections\u201d section. The \u201cPrograms\u201d section. The \u201cCirculars and advertisements\u201d section.\n\n[|Entrance||] Literature on music Room entrance",
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
      "description": "This room has one shelf. You can see the Literature on music shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Literature on music shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 27 rows of books in this shelf. The \u201cAnalysis and appreciation of musical works\u201d section. The \u201cSinging and vocal technique\u201d section with books about Vocal techniques for children. The \u201cInterpretation\u201d section. The \u201cComposition. Elements and techniques of music\u201d section. The \u201cSchool music\u201d section with books about Elementary schools. Junior high schools. High and Kindergarten. The \u201cInstrumental techniques\u201d section with books about Plucked instruments, Keyboard instruments, Wind instruments, Ensembles, Percussion and other instruments, Instrumental techniques for children, Stringed instruments. Bowed stringed instruments, and Motion picture accompanying. The \u201cNotation\u201d section. The \u201cImprovisation. Accompaniment. Transposition\u201d section. The \u201cAdministration and instruction of vocal groups\u201d section. The \u201cMusic theory\u201d section. The \u201cGeneral works\u201d section. The \u201cConducting. Score reading and playing\u201d section. The \u201cHistory\u201d section. The \u201cMusic theory for children\u201d section. The \u201cPrinted pedagogical aids\u201d section with books about Teachers= and supervisors= manuals, etc., Examinations, exercises, etc., and Charts, diagrams, etc.. The \u201cSystems and methods\u201d section. The \u201cMusical theater\u201d section. The \u201cMemorizing\u201d section. The \u201cInstrumentation and orchestration\u201d section. The \u201cEmbellishment\u201d section. The \u201cMusic to accompany instruction in ballet, folk dancing,\u201d section. The \u201cTuning\u201d section. The \u201cAudio-visual aids\u201d section. The \u201cCommunity music\u201d section. The \u201cMusic in colleges and universities\u201d section. The \u201cMusic in the theater\u201d section. The \u201cMusic in special education\u201d section.\n\n[|Entrance||] Instruction and study Room entrance",
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
      "description": "This room has one shelf. You can see the Instruction and study shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Instruction and study shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are six rows of books in this shelf. The \u201cVocal music\u201d section with books about Sacred vocal music, Secular vocal music, and Collections. The \u201cMusical sources\u201d section. The \u201cInstrumental music\u201d section with books about One solo instrument, Two or more solo instruments, Instrumental music for children, String orchestra, Orchestra, Aleatory music. Electronic music. Mixed media, and Motion picture music. The \u201cMiscellaneous\u201d section. The \u201cCollected works of individual composers\u201d section. The \u201cMusic printed or copied in manuscript before 1700\u201d section.\n\n[|Entrance||] Music Room entrance",
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
      "description": "This room has one shelf. You can see the Music shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Music shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 13 rows of books in this shelf. The \u201cSpecial classes of buildings\u201d section with books about Classed by use, Public buildings, Classed by material, and Classed by form. The \u201cArchitectural drawing and design\u201d section. The \u201cHistory\u201d section. The \u201cAesthetics of cities.    City planning and beautifying\u201d section. The \u201cCompetitions\u201d section. The \u201cGeneral works\u201d section. The \u201cStudy and teaching.    Research\u201d section. The \u201cArchitecture as a profession\u201d section. The \u201cDetails and decoration\u201d section. The \u201cArchitectural criticism\u201d section. The \u201cGeneral\u201d section. The \u201cArchitecture and the state\u201d section. The \u201cMuseums.    Exhibitions\u201d section.\n\n[|Entrance||] Architecture Room entrance",
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
      "description": "This room has one shelf. You can see the Architecture shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Architecture shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 14 rows of books in this shelf. The \u201cHistory\u201d section. The \u201cStudy and teaching.    Research\u201d section. The \u201cPrivate collections and collectors\u201d section. The \u201cArt museums, galleries, etc.\u201d section. The \u201cGeneral\u201d section. The \u201cExhibitions\u201d section. The \u201cSpecial subjects of art\u201d section. The \u201cTheory.    Philosophy.    Aesthetics of the visual arts\u201d section. The \u201cGeneral works\u201d section. The \u201cArt studios, materials, etc.\u201d section. The \u201cArt as a profession.    Artists\u201d section. The \u201cArt and the state.    Public art\u201d section. The \u201cEconomics of art\u201d section. The \u201cExamination and conservation of works of art\u201d section.\n\n[|Entrance||] Visual arts Room entrance",
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
      "description": "This room has one shelf. You can see the Visual arts shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Visual arts shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 12 rows of books in this shelf. The \u201cOther arts and art industries\u201d section with books about Ceramics, Glass, Costume, Metalwork, Textiles, Woodwork, and Glyptic arts. The \u201cRugs and carpets\u201d section. The \u201cFurniture\u201d section. The \u201cInterior decoration.    House decoration\u201d section with books about General.    History, etc., Church decoration, and Decorative painting. The \u201cDecoration and ornament.    Design\u201d section with books about General works, History, Special subjects for design, and General. The \u201cWallpapers\u201d section. The \u201cHistory\u201d section. The \u201cArts and crafts movement\u201d section. The \u201cGeneral\u201d section. The \u201cReligious art\u201d section. The \u201cUpholstery.    Drapery\u201d section. The \u201cTapestries\u201d section.\n\n[|Entrance||] Decorative arts Room entrance",
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
      "description": "This room has one shelf. You can see the Decorative arts shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Decorative arts shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 10 rows of books in this shelf. The \u201cHistory\u201d section. The \u201cSpecial subjects\u201d section with books about Other subjects, Landscape painting, Flowers.    Fruit.    Trees, Portraits, Human figure, Animals.    Birds, Still life, Marine painting, and Sports.    Hunting, fishing, etc.. The \u201cWatercolor painting\u201d section. The \u201cTechnique and materials\u201d section. The \u201cMural painting\u201d section. The \u201cIlluminating of manuscripts and books\u201d section. The \u201cExamination and conservation of paintings\u201d section. The \u201cGeneral works\u201d section. The \u201cGeneral\u201d section. The \u201cStudy and teaching\u201d section.\n\n[|Entrance||] Painting Room entrance",
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
      "description": "This room has one shelf. You can see the Painting shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Painting shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 16 rows of books in this shelf. The \u201cPictorial humor, caricature, etc.\u201d section. The \u201cTechnique\u201d section. The \u201cCommercial art.    Advertising art\u201d section. The \u201cSpecial subjects\u201d section. The \u201cIllustration\u201d section. The \u201cPosters\u201d section. The \u201cHistory of drawing\u201d section. The \u201cGraphic art materials\u201d section. The \u201cStudy and teaching\u201d section. The \u201cGreeting cards, postcards, invitations, book jackets, etc.\u201d section. The \u201cPrinted ephemera.    Imagerie populaire\u201d section. The \u201cGeneral\u201d section. The \u201cGeneral works\u201d section. The \u201cConservation and restoration of drawings\u201d section. The \u201cCompetitions\u201d section. The \u201cCopying, enlarging, and reduction of drawings\u201d section.\n\n[|Entrance||] Drawing.    Design.    Illustration Room entrance",
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
      "description": "This room has one shelf. You can see the Drawing.    Design.    Illustration shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Drawing.    Design.    Illustration shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 15 rows of books in this shelf. The \u201cPrintmaking and engraving\u201d section. The \u201cEtching and aquatint\u201d section with books about History, Special subjects, General, General works, and Dry point. The \u201cWood engraving\u201d section with books about History, Japanese prints, General, Linoleum block prints, General works, Other materials used in relief printing, Fish prints, and Potato prints. The \u201cHistory of printmaking\u201d section. The \u201cSerigraphy\u201d section. The \u201cSpecial subjects\u201d section. The \u201cLithography\u201d section. The \u201cPrinting of engravings\u201d section. The \u201cMonotype (Printmaking)\u201d section. The \u201cMetal engraving\u201d section with books about History, Color prints, General, Copper engraving, and General works. The \u201cEquipment\u201d section. The \u201cLumiprints\u201d section. The \u201cCompetitions\u201d section. The \u201cCopying art.    Copying machine art\u201d section. The \u201cCollected works\u201d section.\n\n[|Entrance||] Print media Room entrance",
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
      "description": "This room has one shelf. You can see the Print media shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Print media shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 11 rows of books in this shelf. The \u201cHistory\u201d section. The \u201cSpecial forms\u201d section with books about Sepulchral monuments, Sculptural monuments, Portrait sculpture, Equestrian statues, and Religious monuments and shrines. The \u201cSpecial materials\u201d section. The \u201cGeneral works\u201d section. The \u201cSpecial subjects\u201d section. The \u201cDesigns and technique\u201d section. The \u201cMobiles, color, sculpture gardens, etc.\u201d section. The \u201cRestoration of sculptures\u201d section. The \u201cStudy and teaching\u201d section. The \u201cGeneral\u201d section. The \u201cCompetitions\u201d section.\n\n[|Entrance||] Sculpture Room entrance",
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
      "description": "This room has one shelf. You can see the Sculpture shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Sculpture shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 10 rows of books in this shelf. The \u201cHistory of the arts\u201d section. The \u201cGeneral\u201d section. The \u201cSpecial subjects, characters, persons, religious arts, etc.\u201d section. The \u201cAdministration of the arts\u201d section. The \u201cStudy and teaching.    Research\u201d section. The \u201cPatronage of the arts\u201d section. The \u201cArts centers and facilities\u201d section. The \u201cExhibitions\u201d section. The \u201cVoluntarism in the arts\u201d section. The \u201cCompetitions\u201d section.\n\n[|Entrance||] Arts in general Room entrance",
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
      "description": "This room has one shelf. You can see the Arts in general shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Arts in general shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are two rows of books in this shelf. The \u201cFiction in English\u201d section. The \u201cJuvenile belles lettres\u201d section.\n\n[|Entrance||] Fiction and juvenile belles lettres Room entrance",
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
      "description": "This room has one shelf. You can see the Fiction and juvenile belles lettres shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Fiction and juvenile belles lettres shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There is one row of books in this shelf. The \u201cEnglish literature\u201d section with books about English literature: Provincial, local, etc., 1900-1960, 19th century, 1770/1800-1890/1900, By period, 17th and 18th centuries (1640-1770), English renaissance (1500-1640), Anglo-Norman period.    Early English.    Middle, Collections of English literature, Anglo-Saxon literature, Wit and humor, Poetry, 1961-2000, Prose, Drama, Literary history and criticism, Relations to other literatures and countries, Women authors, 2001-, Criticism, Diaries, Folk literature, Letters, Essays, and Oratory.\n\n[|Entrance||] English Room entrance",
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
      "description": "This room has one shelf. You can see the English shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] English shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 17 rows of books in this shelf. The \u201cIndividual authors\u201d section with books about 19th century, 1900-1960, Colonial period (17th and 18th centuries), and 1961-. The \u201cCollections of American literature\u201d section with books about Drama, By region, Poetry, Prose (General), Oratory, By period, Essays, and Letters. The \u201cJuvenile literature (General)\u201d section. The \u201cTreatment of special subjects, classes\u201d section. The \u201cBy period\u201d section with books about 20th century, 19th century, 17th-18th centuries, and 21st century. The \u201cPoetry\u201d section. The \u201cBiography, memoirs, letters, etc.\u201d section. The \u201cProse\u201d section with books about Prose fiction. The \u201cWomen authors\u201d section. The \u201cSpecial regions, states, etc.\u201d section with books about West and Central, South, and North. The \u201cDrama\u201d section. The \u201cWit and humor.    Satire\u201d section. The \u201cFolk literature\u201d section. The \u201cEssays\u201d section. The \u201cOratory\u201d section. The \u201cDiaries\u201d section. The \u201cLetters\u201d section.\n\n[|Entrance||] American literature Room entrance\n[|Next||||||] Canadian    literature shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] American literature shelf",
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
      "description": "This room has two shelves organized linearly from the entrance towards the back. You can see the American literature shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] American literature shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 11 rows of books in this shelf. The \u201cModern literature\u201d section with books about 19th century, 1900-1960, 18th century, 17th century, 1961-2000, 16th century, and 2001-. The \u201cHistory and criticism\u201d section. The \u201cCollections\u201d section with books about Prose, Poetry, General, and Drama. The \u201cProse and prose fiction\u201d section. The \u201cOld French literature\u201d section with books about (14th-) 15th century (to ca. 1525), To 1350/1400, and Collections. The \u201cProvincial, local, colonial, etc.\u201d section. The \u201cDrama\u201d section. The \u201cPoetry\u201d section. The \u201cGeneral\u201d section. The \u201cFolk literature\u201d section. The \u201cJuvenile literature\u201d section.\n\n[|Entrance||] French literature Room entrance\n[|Next||||||] Italian literature shelf",
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
      "description": "There are nine rows of books in this shelf. The \u201cIndividual authors and works to 1400\u201d section. The \u201cIndividual authors, 1400-1700\u201d section. The \u201cIndividual authors, 1961-2000\u201d section. The \u201cHistory and criticism\u201d section. The \u201cCollections\u201d section with books about Prose, Poetry, Drama, General, and Translations. The \u201cIndividual authors, 1900-1960\u201d section. The \u201cRegional, provincial, local, etc.\u201d section. The \u201cIndividual authors, 1701-1900\u201d section. The \u201cIndividual authors, 2001-\u201d section.\n\n[|Previous||] French literature shelf\n[|Next||||||] Spanish literature shelf",
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
      "description": "There are eight rows of books in this shelf. The \u201cIndividual authors, 1868-1960\u201d section. The \u201cIndividual authors, 1700-ca. 1868\u201d section. The \u201cProvincial, local, colonial, etc.\u201d section with books about Spanish America. The \u201cHistory and criticism\u201d section. The \u201cCollections\u201d section with books about Prose, Translations, General, Poetry, and Drama. The \u201cIndividual authors and works to 1700\u201d section. The \u201cIndividual authors, 1961-2000\u201d section. The \u201cIndividual authors, 2001-\u201d section.\n\n[|Previous||] Italian literature shelf\n[|Next||||||] History and criticism shelf",
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
      "description": "There are six rows of books in this shelf. The \u201cEarly to 1500\u201d section. The \u201cDrama\u201d section. The \u201cPoetry\u201d section. The \u201cJuvenile literature (General)\u201d section. The \u201cProse\u201d section. The \u201cFolk literature\u201d section.\n\n[|Previous||] Spanish literature shelf\n[|Next||||||] History and criticism shelf",
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
      "description": "There is one row of books in this shelf. The \u201cPoetry\u201d section.\n\n[|Previous||] History and criticism shelf\n[|Next||||||] Portuguese literature shelf",
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
      "description": "There are 15 rows of books in this shelf. The \u201cIndividual authors, 1701-1960\u201d section. The \u201cProvincial, local, colonial, etc.\u201d section with books about Brazil. The \u201cIndividual authors, 1961-2000\u201d section. The \u201cIndividual authors and works, 1500-1700\u201d section. The \u201cGeneral\u201d section. The \u201cSpecial periods\u201d section. The \u201cPoetry\u201d section. The \u201cCollections\u201d section with books about Poetry, General, Translations, Drama, and Prose. The \u201cIndividual authors and works to 1500\u201d section. The \u201cProse\u201d section. The \u201cFolk literature\u201d section. The \u201cIndividual authors, 2001-\u201d section. The \u201cDrama\u201d section. The \u201cJuvenile literature (General)\u201d section. The \u201cHistory and criticism\u201d section.\n\n[|Previous||] History and criticism shelf",
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
      "description": "This room has six shelves organized linearly from the entrance towards the back. You can see the French literature shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] French literature shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are six rows of books in this shelf. The \u201cModern English\u201d section. The \u201cDialects.    Provincialisms, etc.\u201d section. The \u201cAnglo-Saxon.    Old English\u201d section. The \u201cSlang.    Argot, etc.\u201d section. The \u201cMiddle English\u201d section. The \u201cEarly Modern English\u201d section.\n\n[|Entrance||] English Room entrance",
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
      "description": "This room has one shelf. You can see the English shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] English shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 19 rows of books in this shelf. The \u201cDrama\u201d section with books about Dramatic representation.    The theater, Motion pictures, Broadcasting, Nonbroadcast video recordings, Special types, Technique of dramatic composition, History, and Relation to, and treatment of, special. The \u201cLiterary history\u201d section with books about By period, Folk literature, Juvenile literature, Collections, Biography, Jewish literature in various languages, Comparative literature, Romance literature, Black literature (General), Special relations, movements, and, and Germanic literature. The \u201cOratory.    Elocution, etc.\u201d section with books about Recitations (in English), Debating, Recitations in foreign languages, and Study and teaching. The \u201cAuthorship\u201d section with books about Technique.    Literary composition, etc. and Translating as a literary pursuit. The \u201cCollections of general literature\u201d section with books about Wit and humor, Drama, Proverbs, Riddles, acrostics, charades,, German, Aphorisms.    Apothegms, Essays, Quotations, Comic books, strips, etc., Anecdotes.    Table talk, Toasts, Orations, Fiction, Maxims, Sayings, bon mots, etc., Epitaphs, Emblems, devices, Thoughts, Letters, Epigrams, Ana, Anacreontic literature, Mottoes, Literary extracts.    Commonplace books, Special classes of authors, and Paradoxes. The \u201cPoetry\u201d section with books about Relations to, and treatment of,, Epic poetry, Theory, philosophy, relations, etc., History and criticism, Lyric poetry, and Folk poetry. The \u201cTheory.    Philosophy.    Esthetics\u201d section. The \u201cProse.    Prose fiction\u201d section with books about Technique.    Authorship, Special kinds of fiction.    Fiction genres, History, and Philosophy, theory, etc.. The \u201cJournalism.    The periodical press, etc.\u201d section with books about By region or country, Technique.    Practical journalism, Magazines and other periodicals, Relation to the state.    Government and, The Jewish press, and Amateur journalism. The \u201cCriticism\u201d section. The \u201cThe performing arts.    Show business\u201d section with books about Centers for the performing arts. The \u201cStudy and teaching\u201d section. The \u201cDiaries\u201d section. The \u201cThe monologue\u201d section. The \u201cLetters (Literary history)\u201d section. The \u201cPeriodicals\u201d section. The \u201cSocieties\u201d section. The \u201cEssays (Literary history)\u201d section. The \u201cThe dialogue\u201d section.\n\n[|Entrance||] Literature (General) Room entrance",
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
      "description": "This room has one shelf. You can see the Literature (General) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Literature (General) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are eight rows of books in this shelf. The \u201cProvincial, local, colonial, etc.\u201d section with books about East Germany. The \u201cIndividual authors or works\u201d section with books about 1700-ca. 1860/70, 1860/70-1960, 1961-2000, Middle High German, ca. 1050-1450/1500, and 1500-ca. 1700. The \u201cCollections\u201d section with books about Poetry, Middle High German, Prose, General, Drama, and Early to 1950.    Old and Middle High German. The \u201cHistory of German literature\u201d section with books about Modern, Prose, Drama, Poetry, and Medieval. The \u201cLiterary history and criticism\u201d section. The \u201cFolk literature\u201d section with books about Faust legend. The \u201cLow German literature\u201d section. The \u201c2001-\u201d section.\n\n[|Entrance||] German literature Room entrance\n[|Next||||||] Norwegian literature shelf",
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
      "description": "There are seven rows of books in this shelf. The \u201cProvincial, local, foreign\u201d section. The \u201cIndividual authors or works\u201d section with books about 19th century, 1900-1960, 1961-2000, 16th-18th centuries, and 2001-. The \u201cCollections\u201d section with books about Poetry, Prose, and Drama. The \u201cLiterary history and criticism\u201d section. The \u201cLandsmaal or New Norwegian\u201d section with books about Individual authors, Literary history and criticism, and Collections. The \u201cFolk literature\u201d section. The \u201cJuvenile literature (General)\u201d section.\n\n[|Previous||] German literature shelf\n[|Next||||||] Dutch literature shelf",
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
      "description": "There are 12 rows of books in this shelf. The \u201cIndividual authors or works\u201d section with books about 1961-2000, 16th-18th centuries, 1800-1960, and Medieval. The \u201cSpecial periods\u201d section. The \u201cProse\u201d section. The \u201cJuvenile literature (General)\u201d section. The \u201cCollections\u201d section with books about Poetry, Prose, Special periods, Drama, Translations, and General. The \u201cPoetry\u201d section. The \u201cProvincial, local, foreign\u201d section. The \u201cDrama\u201d section. The \u201cGeneral\u201d section. The \u201cFolk literature\u201d section. The \u201cLiterary history and criticism\u201d section. The \u201c2001-\u201d section.\n\n[|Previous||] Norwegian literature shelf\n[|Next||||||] Swedish literature shelf",
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
      "description": "There are 10 rows of books in this shelf. The \u201cIndividual authors or works\u201d section with books about 1961-2000, 1900-1960, 19th century, Medieval, 16th-18th centuries, and 2001-. The \u201cPoetry\u201d section. The \u201cSpecial periods\u201d section. The \u201cProvincial, local, foreign\u201d section. The \u201cJuvenile literature (General)\u201d section. The \u201cLiterary history and criticism\u201d section. The \u201cProse\u201d section. The \u201cCollections\u201d section with books about Translations, Drama, Poetry, and Prose. The \u201cFolk literature\u201d section. The \u201cDrama\u201d section.\n\n[|Previous||] Dutch literature shelf\n[|Next||||||] Old Norse literature: Old Icelandic and Old Norwegian shelf",
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
      "description": "There are seven rows of books in this shelf. The \u201cIndividual sagas and historical works\u201d section. The \u201cLiterary history and criticism\u201d section. The \u201cCollections\u201d section with books about Poetry and Prose. The \u201cScientific and learned literature\u201d section. The \u201cProse\u201d section with books about Sagas. The \u201cIndividual authors or works before 1540\u201d section. The \u201cReligious works\u201d section.\n\n[|Previous||] Swedish literature shelf\n[|Next||||||] Danish literature shelf",
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
      "description": "There are six rows of books in this shelf. The \u201cIndividual authors or works\u201d section with books about 1961-2000, 19th century, 1900-1960, 16th-18th centuries, Medieval, and 2001-. The \u201cLiterary history and criticism\u201d section. The \u201cCollections\u201d section with books about Prose, Poetry, and Drama. The \u201cProvincial, local, foreign\u201d section. The \u201cFolk literature\u201d section. The \u201cJuvenile literature (General)\u201d section.\n\n[|Previous||] Old Norse literature: Old Icelandic and Old Norwegian shelf\n[|Next||||||] Modern Icelandic literature shelf",
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
      "description": "There are seven rows of books in this shelf. The \u201cIndividual authors or works\u201d section with books about 19th-20th centuries and 16th-18th centuries. The \u201cLiterary history and criticism\u201d section. The \u201cCollections\u201d section. The \u201cFolk literature\u201d section. The \u201cJuvenile literature (General)\u201d section. The \u201cProvincial, local, foreign\u201d section. The \u201c21st century\u201d section.\n\n[|Previous||] Danish literature shelf\n[|Next||||||] Afrikaans literature shelf",
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
      "description": "There are four rows of books in this shelf. The \u201cIndividual authors or works\u201d section. The \u201cCollections\u201d section. The \u201cLiterary history and criticism\u201d section. The \u201cFolk literature\u201d section.\n\n[|Previous||] Modern Icelandic literature shelf\n[|Next||||||] Flemish literature since 1830 shelf",
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
      "description": "There are five rows of books in this shelf. The \u201cIndividual authors or works\u201d section. The \u201cLiterary history and criticism\u201d section. The \u201cCollections\u201d section. The \u201cFolk literature\u201d section. The \u201cJuvenile literature (General)\u201d section.\n\n[|Previous||] Afrikaans literature shelf\n[|Next||||||] General shelf",
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
      "description": "There are three rows of books in this shelf. The \u201cLiterary history and criticism\u201d section. The \u201cFolk literature\u201d section. The \u201cCollections\u201d section.\n\n[|Previous||] Flemish literature since 1830 shelf\n[|Next||||||] Faroese literature shelf",
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
      "description": "There are three rows of books in this shelf. The \u201cCollections\u201d section. The \u201cLiterary history and criticism\u201d section. The \u201cIndividual authors or works\u201d section.\n\n[|Previous||] General shelf",
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
      "description": "This room has 11 shelves organized linearly from the entrance towards the back. You can see the German literature shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] German literature shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Greek literature Room entrance\n[|Next||||||] Roman literature shelf",
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
      "description": "There are five rows of books in this shelf. The \u201cCollections\u201d section. The \u201cIndividual authors\u201d section with books about Ovid, Vergilius Maro, Publius (Virgil), Horace, Plautus, Titus Maccius, Cicero, Marcus Tullius, Lucretius Carus, Titus, Seneca, Lucius Annaeus, Tacitus, Cornelius, Pliny, the Elder, Terentius Apher, Publius (Terence), Caesar, Julius, and Martial. The \u201cLiterary history\u201d section. The \u201cCriticism, interpretation, etc.\u201d section. The \u201cTranslations\u201d section.\n\n[|Previous||] Latin philology and language shelf\n[|Next||||||] Greek literature shelf",
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
      "description": "There are five rows of books in this shelf. The \u201cIndividual authors\u201d section with books about Demosthenes, Plato, Euripedes, Homer, Aristotle, Sophocles, Aeschylus, Xenophon, Thucydides, Plutarch, and Aesop. The \u201cTranslations\u201d section. The \u201cLiterary history\u201d section. The \u201cCriticism, interpretation, etc.\u201d section. The \u201cCollections\u201d section.\n\n[|Previous||] Roman literature shelf\n[|Next||||||] Classical philology shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Greek literature shelf\n[|Next||||||] Greek philology and language shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Classical philology shelf\n[|Next||||||] Byzantine and modern Greek literature shelf",
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
      "description": "There is one row of books in this shelf. The \u201cIndividual authors\u201d section.\n\n[|Previous||] Greek philology and language shelf\n[|Next||||||] Medieval and modern Latin literature shelf",
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
      "description": "There is one row of books in this shelf. The \u201cIndividual authors\u201d section.\n\n[|Previous||] Byzantine and modern Greek literature shelf\n[|Next||||||] Classical literature shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Medieval and modern Latin literature shelf\n[|Next||||||] Medieval and modern Greek language shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Classical literature shelf",
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
      "description": "This room has nine shelves organized linearly from the entrance towards the back. You can see the Latin philology and language shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Latin philology and language shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are nine rows of books in this shelf. The \u201cSpanish\u201d section. The \u201cFrench\u201d section with books about Dialects.    Provincialisms and Slang.    Argot. The \u201cItalian\u201d section. The \u201cPortuguese\u201d section. The \u201cCatalan\u201d section. The \u201cGeneral\u201d section. The \u201cRomanian\u201d section. The \u201cRaeto-Romance\u201d section. The \u201cSardinian\u201d section.\n\n[|Entrance||] Romance Room entrance",
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
      "description": "This room has one shelf. You can see the Romance shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Romance shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are seven rows of books in this shelf. The \u201cIranian philology and literature\u201d section with books about New Persian, Afghan (Pashto, Pushto, Pushtu, etc.), General, Avestan, Old Persian, and Middle Iranian languages. The \u201cIndo-Aryan literature\u201d section with books about General, Modern Indo-Aryan literature, Sanskrit, Prakrit literature, and Pali literature. The \u201cArmenian\u201d section with books about Literature and Language. The \u201cIndo-Aryan languages\u201d section with books about Modern Indo-Aryan languages, Sanskrit, Vedic, General, Apabhram. s\u00b4a, Prakrit, Pali, and Middle Indo-Aryan dialects. The \u201cCaucasian languages\u201d section with books about Georgian. The \u201cDardic (Pisacha)\u201d section with books about Nuristani (Kafiri) group, Kohistani, and Kashmiri. The \u201cGeneral\u201d section.\n\n[|Entrance||] Indo-Iranian philology and literature Room entrance",
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
      "description": "This room has one shelf. You can see the Indo-Iranian philology and literature shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Indo-Iranian philology and literature shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are eight rows of books in this shelf. The \u201cLanguage.    Linguistic theory.    Comparative grammar\u201d section with books about Science of language (Linguistics), Comparative grammar, Discourse analysis, Translating and interpreting, Semantics, Style.    Composition.    Rhetoric, Language acquisition, Linguistic geography, Lexicology, Etymology, and Lexicography. The \u201cCommunication.    Mass media\u201d section with books about Oral communication.    Speech and Interpersonal communication. The \u201cGeneral\u201d section. The \u201cComputational linguistics.    Natural language processing\u201d section. The \u201cSemiotics.    Signs and symbols\u201d section. The \u201cIndo-European (Indo-Germanic) philology\u201d section. The \u201cNonverbal communication\u201d section. The \u201cExtinct ancient or medieval languages\u201d section.\n\n[|Entrance||] Philology.    Linguistics Room entrance",
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
      "description": "This room has one shelf. You can see the Philology.    Linguistics shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Philology.    Linguistics shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are four rows of books in this shelf. The \u201cGerman\u201d section with books about Dialects.    Provincialism, etc., Old High German, Slang.    Argot, etc., Early Modern German, Middle High German, and Old Saxon. The \u201cDutch\u201d section. The \u201cFriesian\u201d section. The \u201cFlemish\u201d section.\n\n[|Entrance||] West Germanic Room entrance",
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
      "description": "This room has one shelf. You can see the West Germanic shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] West Germanic shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 17 rows of books in this shelf. The \u201cEgyptology\u201d section with books about Literature.    Inscriptions, Egyptian writing and its decipherment, and Language. The \u201cArabic\u201d section with books about Arabic literature and Language. The \u201cHebrew\u201d section with books about Literature, Language (Biblical and modern), Other languages used by Jews, and Medieval Hebrew. The \u201cWest and North Semitic languages\u201d section with books about Phoenician-Punic. The \u201cLibyco-Berber languages.    Berber languages\u201d section with books about Berber languages and Libyan group. The \u201cAramaic\u201d section with books about West Aramaic and East Aramaic. The \u201cEthiopian languages\u201d section with books about Amharic and Ethiopic (Geez). The \u201cSumerian\u201d section. The \u201cAssyriology.    Akkadian\u201d section with books about Literature.    Inscriptions and Language. The \u201cSyriac\u201d section with books about Language, Literature, and Neo-Syriac dialects (Modern Syriac). The \u201cGeneral\u201d section. The \u201cSpecial groups\u201d section with books about Islamic and Christian Oriental. The \u201cCoptic\u201d section. The \u201cCushitic languages\u201d section. The \u201cAfroasiatic languages\u201d section. The \u201cSemitic philology and literature\u201d section. The \u201cSouth Semitic languages\u201d section.\n\n[|Entrance||] Oriental philology and literature Room entrance\n[|Next||||||] General shelf",
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
      "description": "There is one row of books in this shelf. The \u201cLanguages\u201d section.\n\n[|Previous||] Oriental philology and literature shelf",
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
      "description": "This room has two shelves organized linearly from the entrance towards the back. You can see the Oriental philology and literature shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Oriental philology and literature shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are three rows of books in this shelf. The \u201cGeneral\u201d section. The \u201cNorth Germanic.    Scandinavian\u201d section with books about Modern Icelandic, Danish, Norwegian, Swedish, and Old Norse.    Old Icelandic and Old. The \u201cOld Germanic dialects\u201d section with books about Gothic.\n\n[|Entrance||] Germanic Room entrance",
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
      "description": "This room has one shelf. You can see the Germanic shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Germanic shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are seven rows of books in this shelf. The \u201cRussian literature\u201d section with books about Individual authors and works, Collections, Outside the Russian Federation, Provincial, local, etc., and Special subjects. The \u201cCzech\u201d section. The \u201cPolish\u201d section. The \u201cUkrainian\u201d section. The \u201cLechitic dialects\u201d section. The \u201cSlovak\u201d section. The \u201cCarpatho-Rusyn\u201d section.\n\n[|Entrance||] Slavic.    Baltic.    Albanian Room entrance\n[|Next||||||] Slavic.    Baltic.    Albanian shelf",
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
      "description": "There are nine rows of books in this shelf. The \u201cRussian literature\u201d section with books about History and criticism and Drama. The \u201cBaltic\u201d section with books about Lithuanian, Latvian, and Old Prussian. The \u201cSlavic\u201d section. The \u201cSlovenian\u201d section. The \u201cAlbanian\u201d section. The \u201cRussian language\u201d section. The \u201cSlavic literature (General)\u201d section. The \u201cChurch Slavic\u201d section. The \u201cMacedonian\u201d section.\n\n[|Previous||] Slavic shelf",
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
      "description": "This room has two shelves organized linearly from the entrance towards the back. You can see the Slavic shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Slavic shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are eight rows of books in this shelf. The \u201cBasque\u201d section. The \u201cHungarian\u201d section. The \u201cFinnish\u201d section. The \u201cOther Finnic languages and dialects\u201d section with books about Estonian, Mordvin, Permic, Sami, Udmurt, Mari, Karelian, Livonian, Votic, Veps, Ludic, Ingrian, and Olonets. The \u201cGeneral\u201d section. The \u201cUgric languages\u201d section. The \u201cFinnic.    Baltic-Finnic\u201d section. The \u201cSamoyedic languages\u201d section.\n\n[|Entrance||] Uralic.    Basque Room entrance",
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
      "description": "This room has one shelf. You can see the Uralic.    Basque shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Uralic.    Basque shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 19 rows of books in this shelf. The \u201cChinese language and literature\u201d section with books about Chinese literature and Chinese language. The \u201cJapanese language and literature\u201d section with books about Japanese literature and Japanese language. The \u201cAfrican languages and literature\u201d section with books about Literature, Special languages (alphabetically), Languages.    By region or country, Languages, and Special families of languages. The \u201cKorean language and literature\u201d section with books about Korean language and Korean literature. The \u201cSino-Tibetan languages\u201d section with books about Tibeto-Burman languages. The \u201cUral-Altaic languages\u201d section. The \u201cLanguages of Oceania\u201d section with books about Polynesian languages, Taiwan languages, Austronesian, Papuan, and Australian languages, Philippine languages, Papuan languages, Micronesian and Melanesian languages, and Australian languages. The \u201cAustroasiatic languages\u201d section with books about Mon-Khmer (Mon-Anam) languages, Munda languages (Kolarian languages), Chamic languages, and Nicobarese. The \u201cTai languages\u201d section. The \u201cDravidian languages\u201d section. The \u201cNon-Chinese languages of China\u201d section. The \u201cNon-Aryan languages of India and Southeastern Asia in\u201d section. The \u201cFar Eastern languages and literature\u201d section. The \u201cMiao-Yao languages\u201d section. The \u201cAinu\u201d section. The \u201cKaren languages\u201d section. The \u201cSingapore literature\u201d section. The \u201cLanguages of the Montagnards\u201d section. The \u201cMalaysian literature\u201d section.\n\n[|Entrance||] Languages of Eastern Asia, Africa, Oceania Room entrance",
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
      "description": "This room has one shelf. You can see the Languages of Eastern Asia, Africa, Oceania shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Languages of Eastern Asia, Africa, Oceania shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are two rows of books in this shelf. The \u201cCeltic languages and literature\u201d section with books about Irish, Brittanic group, Gaelic (Scottish Gaelic, Erse), Manx, and Goidelic.    Gaelic. The \u201cModern languages\u201d section.\n\n[|Entrance||] Modern languages.    Celtic languages Room entrance",
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
      "description": "This room has one shelf. You can see the Modern languages.    Celtic languages shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Modern languages.    Celtic languages shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are four rows of books in this shelf. The \u201cIndian languages\u201d section with books about Special languages of the United States and Canada, Languages of South America and the West Indies, Languages of Mexico and Central America, Languages of the United States, and Languages of Canada. The \u201cMixed languages\u201d section with books about Creole languages. The \u201cArtificial languages--Universal languages\u201d section with books about Esperanto, Picture languages, and Secret languages. The \u201cHyperborean languages of Arctic Asia and America\u201d section.\n\n[|Entrance||] Hyperborean, Indian, and artificial languages Room entrance",
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
      "description": "This room has one shelf. You can see the Hyperborean, Indian, and artificial languages shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Hyperborean, Indian, and artificial languages shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are seven rows of books in this shelf. The \u201cGeneral\u201d section. The \u201cImmunology\u201d section. The \u201cMicrobial ecology\u201d section. The \u201cVirology\u201d section. The \u201cBacteria\u201d section. The \u201cMicroorganisms in the animal body\u201d section. The \u201cCyanobacteria\u201d section.\n\n[|Entrance||] Microbiology Room entrance",
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
      "description": "This room has one shelf. You can see the Microbiology shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Microbiology shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are six rows of books in this shelf. The \u201cGeneral\u201d section. The \u201cPlant physiology\u201d section. The \u201cSpermatophyta.    Phanerogams\u201d section with books about Gymnosperms and Angiosperms. The \u201cCryptogams\u201d section. The \u201cPlant ecology\u201d section. The \u201cPlant anatomy\u201d section.\n\n[|Entrance||] Botany Room entrance",
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
      "description": "This room has one shelf. You can see the Botany shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Botany shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are seven rows of books in this shelf. The \u201cAnimal behavior\u201d section with books about Stories and anecdotes. The \u201cChordates.    Vertebrates\u201d section with books about Birds, Mammals, Reptiles and amphibians, and Fishes. The \u201cGeneral\u201d section. The \u201cInvertebrates\u201d section with books about Insects. The \u201cEmbryology\u201d section. The \u201cAnatomy\u201d section. The \u201cMorphology\u201d section.\n\n[|Entrance||] Zoology Room entrance",
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
      "description": "This room has one shelf. You can see the Zoology shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Zoology shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are nine rows of books in this shelf. The \u201cGeneral\u201d section. The \u201cDescriptive astronomy\u201d section with books about Solar system and Stars. The \u201cGeodesy\u201d section. The \u201cCosmogony.    Cosmology\u201d section. The \u201cPractical and spherical astronomy\u201d section. The \u201cAstrophysics\u201d section. The \u201cNon-optical methods of astronomy\u201d section. The \u201cTheoretical astronomy and celestial mechanics\u201d section. The \u201cAstrogeology\u201d section.\n\n[|Entrance||] Astronomy Room entrance",
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
      "description": "This room has one shelf. You can see the Astronomy shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Astronomy shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are nine rows of books in this shelf. The \u201cGeometry.    Trigonometry.    Topology\u201d section. The \u201cAnalysis\u201d section. The \u201cElementary mathematics.    Arithmetic\u201d section. The \u201cGeneral\u201d section. The \u201cAlgebra\u201d section. The \u201cAnalytic mechanics\u201d section. The \u201cInstruments and machines\u201d section with books about Calculating machines. The \u201cProbabilities.    Mathematical statistics\u201d section. The \u201cTables\u201d section.\n\n[|Entrance||] Mathematics Room entrance",
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
      "description": "This room has one shelf. You can see the Mathematics shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Mathematics shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are two rows of books in this shelf. The \u201cGeneral\u201d section. The \u201cCybernetics\u201d section with books about Information theory.\n\n[|Entrance||] Science (General) Room entrance",
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
      "description": "This room has one shelf. You can see the Science (General) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Science (General) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are four rows of books in this shelf. The \u201cGeneral\u201d section. The \u201cNeurophysiology and neuropsychology\u201d section. The \u201cAnimal biochemistry\u201d section. The \u201cExperimental pharmacology\u201d section.\n\n[|Entrance||] Physiology Room entrance",
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
      "description": "This room has one shelf. You can see the Physiology shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Physiology shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are two rows of books in this shelf. The \u201cGeneral\u201d section. The \u201cMicroscopy\u201d section.\n\n[|Entrance||] Biology (General) Room entrance\n[|Next||||||] Biology (General) shelf",
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
      "description": "There are seven rows of books in this shelf. The \u201cEvolution\u201d section. The \u201cCytology\u201d section. The \u201cEcology\u201d section. The \u201cGenetics\u201d section. The \u201cLife\u201d section. The \u201cReproduction\u201d section. The \u201cEconomic biology\u201d section.\n\n[|Previous||] Natural history (General) shelf",
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
      "description": "This room has two shelves organized linearly from the entrance towards the back. You can see the Natural history (General) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Natural history (General) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are six rows of books in this shelf. The \u201cPhysical and theoretical chemistry\u201d section with books about Photochemistry and Radiation chemistry. The \u201cGeneral\u201d section. The \u201cInorganic chemistry\u201d section. The \u201cOrganic chemistry\u201d section with books about Biochemistry. The \u201cCrystallography\u201d section. The \u201cAnalytical chemistry\u201d section.\n\n[|Entrance||] Chemistry Room entrance",
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
      "description": "This room has one shelf. You can see the Chemistry shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Chemistry shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are eight rows of books in this shelf. The \u201cGeneral\u201d section. The \u201cPetrology\u201d section. The \u201cPaleozoology\u201d section. The \u201cDynamic and structural geology\u201d section with books about Volcanoes and earthquakes and Structural geology. The \u201cPaleontology\u201d section. The \u201cStratigraphy\u201d section. The \u201cMineralogy\u201d section. The \u201cPaleobotany\u201d section.\n\n[|Entrance||] Geology Room entrance",
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
      "description": "This room has one shelf. You can see the Geology shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Geology shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 13 rows of books in this shelf. The \u201cElectricity and magnetism\u201d section with books about Electricity, Magnetism, and Electric discharge. The \u201cOptics.    Light\u201d section with books about Spectroscopy. The \u201cGeneral\u201d section. The \u201cHeat\u201d section with books about Thermodynamics. The \u201cAtomic physics.    Constitution and properties of matter\u201d section. The \u201cMeteorology.    Climatology\u201d section with books about Climatology and weather and Meteorological optics. The \u201cAcoustics.    Sound\u201d section. The \u201cDescriptive and experimental mechanics\u201d section. The \u201cRadiation physics (General)\u201d section. The \u201cAtomic  energy.\u201d section with books about Elementary particle physics and Radioactivity and radioactive substances. The \u201cGeophysics.    Cosmic physics\u201d section. The \u201cWeights and measures\u201d section. The \u201cGeomagnetism\u201d section.\n\n[|Entrance||] Physics Room entrance",
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
      "description": "This room has one shelf. You can see the Physics shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Physics shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are four rows of books in this shelf. The \u201cGeneral\u201d section. The \u201cHuman embryology\u201d section. The \u201cHuman and comparative histology\u201d section. The \u201cRegional anatomy\u201d section.\n\n[|Entrance||] Human anatomy Room entrance",
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
      "description": "This room has one shelf. You can see the Human anatomy shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Human anatomy shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are two rows of books in this shelf. The \u201cMateria medica and therapeutics\u201d section. The \u201cDiseases, treatment, etc.\u201d section.\n\n[|Entrance||] Homeopathy Room entrance",
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
      "description": "This room has one shelf. You can see the Homeopathy shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Homeopathy shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are six rows of books in this shelf. The \u201cPublic health.    Hygiene.    Preventive medicine\u201d section with books about Personal health and hygiene, Disease (Communicable and noninfectious) and public, Mental health.    Mental illness prevention, Epidemics.    Epidemiology.    Quarantine.    Disinfection, Transmission of disease, Environmental health, Parks, public baths, public carriers, buildings, etc., Study and teaching.    Research, Emergency medical services, Immunity and immunization in relation to public health, Home health care services, War and public health, Food and food supply in relation to public health, Rural health and hygiene.    Rural health services, Disposal of the dead.    Undertaking.    Burial.    Cremation., and Public health laboratories, institutes, etc.. The \u201cForensic medicine.    Medical jurisprudence.    Legal medicine\u201d section. The \u201cMedicine and the state\u201d section. The \u201cMedical centers.    Hospitals.    Dispensaries.    Clinics\u201d section. The \u201cToxicology.    Poisons\u201d section. The \u201cMedical geography.    Climatology.    Meteorology\u201d section.\n\n[|Entrance||] Public aspects of medicine Room entrance\n[|Next||||||] Medicine and the state shelf",
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
      "description": "There are seven rows of books in this shelf. The \u201cMedicine and society.    Social medicine.    Medical sociology\u201d section. The \u201cRegulation of medical practice.    Evaluation and\u201d section. The \u201cProvisions for personal medical care.    Medical care plans\u201d section. The \u201cHealth status indicators.    Medical statistics and surveys\u201d section. The \u201cMedical economics.    Economics of medical care.\u201d section. The \u201cRegulation of medical education.    Licensure\u201d section. The \u201cRegistration of physicians, pharmacists, etc.\u201d section.\n\n[|Previous||] Public aspects of medicine shelf",
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
      "description": "This room has two shelves organized linearly from the entrance towards the back. You can see the Public aspects of medicine shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Public aspects of medicine shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 22 rows of books in this shelf. The \u201cOrthopedic surgery\u201d section with books about Physical rehabilitation. The \u201cSurgical pathology\u201d section. The \u201cGeneral works\u201d section. The \u201cOperative surgery.    Technique of surgical operations\u201d section. The \u201cAsepsis and antisepsis.    Sterilization (Operative)\u201d section. The \u201cFractures (General)\u201d section. The \u201cAnesthesiology\u201d section. The \u201cSurgery by region, system, or organ\u201d section. The \u201cOperating rooms and theaters.    Instruments, apparatus, and\u201d section. The \u201cProsthesis.    Artificial organs\u201d section. The \u201cTransplantation of organs, tissues, etc.\u201d section. The \u201cEmergency surgery.    Wounds and injuries\u201d section. The \u201cSurgery in childhood, adolescence, pregnancy, old age\u201d section. The \u201cPlastic surgery.    Reparative surgery\u201d section. The \u201cNeoplasms.    Tumors.    Oncology\u201d section. The \u201cSurgical complications\u201d section. The \u201cSurgical therapeutics.    Preoperative and postoperative care\u201d section. The \u201cDiseases of the locomotor system (Surgical treatment)\u201d section. The \u201cMilitary and naval surgery\u201d section. The \u201cSurgical shock.    Traumatic shock\u201d section. The \u201cSurgical nursing\u201d section. The \u201cReparative processes after operations (Physiological)\u201d section.\n\n[|Entrance||] Surgery Room entrance",
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
      "description": "This room has one shelf. You can see the Surgery shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Surgery shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 10 rows of books in this shelf. The \u201cParticular diseases of the eye\u201d section. The \u201cRefraction and errors of refraction and accommodation\u201d section. The \u201cArtificial eyes and other prostheses\u201d section. The \u201cExamination.    Diagnosis\u201d section. The \u201cOptometry.    Opticians.    Eyeglasses\u201d section. The \u201cOcular therapeutics\u201d section. The \u201cEye surgery\u201d section. The \u201cColor vision tests, charts, etc.\u201d section. The \u201cEye banks\u201d section. The \u201cOphthalmic nursing\u201d section.\n\n[|Entrance||] Ophthalmology Room entrance",
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
      "description": "This room has one shelf. You can see the Ophthalmology shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Ophthalmology shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 12 rows of books in this shelf. The \u201cNeurosciences.    Biological psychiatry.    Neuropsychiatry\u201d section with books about Neurology.    Diseases of the nervous system and Psychiatry. The \u201cSpecialties of internal medicine\u201d section with books about Diseases of the genitourinary system.    Urology, Immunologic diseases.    Allergy, Diseases of the digestive system.    Gastroenterology, Diseases of the endocrine glands.    Clinical endocrinology, Diseases of the musculoskeletal system, Diseases of the circulatory (Cardiovascular) system, Diseases of the connective tissues, Diseases of the blood and blood-forming organs, Diseases of the respiratory system, Metabolic diseases, and Nutritional diseases.    Deficiency diseases. The \u201cExamination.    Diagnosis\u201d section. The \u201cNeoplasms.    Tumors.    Oncology\u201d section. The \u201cSpecial situations and conditions\u201d section with books about Industrial medicine.    Industrial hygiene, Geriatrics, Sports medicine, Military medicine.    Naval medicine, Transportation medicine, Arctic medicine.    Tropical medicine, and Submarine medicine. The \u201cInfectious and parasitic diseases\u201d section. The \u201cTuberculosis\u201d section. The \u201cPopular medicine\u201d section. The \u201cMedical emergencies.    Critical care.    Intensive care.\u201d section. The \u201cPsychosomatic medicine\u201d section. The \u201cDisease due to physical and chemical agents\u201d section. The \u201cConstitutional diseases (General)\u201d section.\n\n[|Entrance||] Internal medicine Room entrance",
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
      "description": "This room has one shelf. You can see the Internal medicine shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Internal medicine shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are eight rows of books in this shelf. The \u201cAbnormalities and diseases of the female genital organs\u201d section. The \u201cObstetrics\u201d section with books about Maternal care.    Prenatal care services, Obstetric operations.    Operative obstetrics, The embryo and fetus, Pregnancy, Puerperal state, and Labor.    Parturition. The \u201cDiseases of the breast\u201d section. The \u201cConception.    Artificial insemination.    Contraception\u201d section. The \u201cFunctional and systemic disorders.    Endocrine gynecology\u201d section. The \u201cOperative gynecology\u201d section. The \u201cUrogynecology and obstetric urology.    Urogynecologic\u201d section. The \u201cSterilization of women\u201d section.\n\n[|Entrance||] Gynecology and obstetrics Room entrance",
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
      "description": "This room has one shelf. You can see the Gynecology and obstetrics shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Gynecology and obstetrics shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are eight rows of books in this shelf. The \u201cProsthetic dentistry.    Prosthodontics\u201d section. The \u201cOrthodontics\u201d section. The \u201cOral surgery\u201d section. The \u201cOral and dental anatomy and physiology\u201d section. The \u201cOral and dental medicine.    Pathology.    Diseases\u201d section. The \u201cOperative dentistry.    Restorative dentistry\u201d section. The \u201cPractice of dentistry.    Dental economics\u201d section. The \u201cPreventive dentistry\u201d section.\n\n[|Entrance||] Dentistry Room entrance",
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
      "description": "This room has one shelf. You can see the Dentistry shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Dentistry shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 14 rows of books in this shelf. The \u201cNutrition and feeding of children and adolescents\u201d section. The \u201cDiseases of children and adolescents\u201d section with books about Mental disorders.    Child psychiatry. The \u201cNursing of children.    Pediatric nursing\u201d section. The \u201cTherapeutics\u201d section. The \u201cExamination.    Diagnosis\u201d section. The \u201cPhysiology of children and adolescents\u201d section. The \u201cChild health.    Child health services\u201d section. The \u201cPremature infants\u201d section. The \u201cNewborn infants\u201d section. The \u201cImmunization of children (General)\u201d section. The \u201cSupposed prenatal influence.    Prenatal culture.    Stirpiculture\u201d section. The \u201cInfant and neonatal morbidity and mortality\u201d section. The \u201cHospital care\u201d section. The \u201cGenetic aspects\u201d section.\n\n[|Entrance||] Pediatrics Room entrance",
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
      "description": "This room has one shelf. You can see the Pediatrics shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Pediatrics shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 11 rows of books in this shelf. The \u201cHyperemias, inflammations, and infections of the skin\u201d section. The \u201cDiseases due to parasites\u201d section. The \u201cAtrophies.    Hypertrophies\u201d section. The \u201cCare and hygiene\u201d section. The \u201cDiseases of the glands, hair, nails\u201d section. The \u201cTherapeutics\u201d section. The \u201cChronic ulcer of the skin.    Bedsores\u201d section. The \u201cDiseases due to psychosomatic and nerve disorders.\u201d section. The \u201cPathological anatomy\u201d section. The \u201cCongenital disorders of the skin.    Nevi.    Moles\u201d section. The \u201cPigmentations.    Albinism\u201d section.\n\n[|Entrance||] Dermatology Room entrance",
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
      "description": "This room has one shelf. You can see the Dermatology shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Dermatology shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are four rows of books in this shelf. The \u201cMateria medica\u201d section with books about Pharmaceutical supplies, Pharmaceutical chemistry, Pharmaceutical technology, Pharmacognosy.    Pharmaceutical substances (Plant,, Pharmaceutical dosage forms, Assay methods.    Standardization.    Analysis, Microscopical examination of drugs, and Commercial preparations.    Patent medicines. The \u201cPharmacopoeias\u201d section. The \u201cFormularies.    Collected prescriptions\u201d section. The \u201cDispensatories\u201d section.\n\n[|Entrance||] Pharmacy and materia medica Room entrance",
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
      "description": "This room has one shelf. You can see the Pharmacy and materia medica shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Pharmacy and materia medica shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 16 rows of books in this shelf. The \u201cNonprescription drugs.    Patent medicines\u201d section. The \u201cDiet therapy.    Dietary cookbooks\u201d section. The \u201cPhysical medicine.    Physical therapy\u201d section. The \u201cEndocrinotherapy.    Organotherapy\u201d section. The \u201cDrugs and their actions\u201d section. The \u201cRehabilitation therapy\u201d section. The \u201cAdministration of drugs and other therapeutic agents\u201d section. The \u201cImmunotherapy.    Serotherapy\u201d section. The \u201cChemotherapy\u201d section. The \u201cOther therapeutic procedures\u201d section. The \u201cAntibiotic therapy.    Antibiotics\u201d section. The \u201cRehabilitation technology\u201d section. The \u201cDrug prescribing\u201d section. The \u201cVitamin therapy\u201d section. The \u201cPrescription writing\u201d section. The \u201cMisuse of therapeutic drugs.    Medication errors\u201d section.\n\n[|Entrance||] Therapeutics.    Pharmacology Room entrance",
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
      "description": "This room has one shelf. You can see the Therapeutics.    Pharmacology shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Therapeutics.    Pharmacology shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 16 rows of books in this shelf. The \u201cGeneral works\u201d section. The \u201cHistory of medicine.    Medical expeditions\u201d section. The \u201cMedical philosophy.    Medical ethics\u201d section. The \u201cMedical education.    Medical schools.    Research\u201d section. The \u201cMedicine as a profession.    Physicians\u201d section. The \u201cComputer applications to medicine.    Medical informatics\u201d section. The \u201cMedical records\u201d section. The \u201cMedical physics.    Medical radiology.    Nuclear medicine\u201d section. The \u201cMedical personnel and the public.    Physician and the public\u201d section. The \u201cPractice of medicine.    Medical practice economics\u201d section. The \u201cMedicine and disease in relation to psychology.\u201d section. The \u201cMedical technology\u201d section. The \u201cBiomedical engineering.    Electronics.    Instrumentation\u201d section. The \u201cMissionary medicine.    Medical missionaries\u201d section. The \u201cMedicine and the humanities.    Medicine and disease\u201d section. The \u201cDirectories\u201d section.\n\n[|Entrance||] Medicine (General) Room entrance",
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
      "description": "This room has one shelf. You can see the Medicine (General) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Medicine (General) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are six rows of books in this shelf. The \u201cPathological anatomy and histology\u201d section. The \u201cClinical pathology.    Laboratory technique\u201d section. The \u201cTheories of disease.    Etiology.    Pathogenesis\u201d section. The \u201cManifestations of disease\u201d section. The \u201cGeneral works\u201d section. The \u201cPost-mortem examination.    Autopsies\u201d section.\n\n[|Entrance||] Pathology Room entrance",
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
      "description": "This room has one shelf. You can see the Pathology shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Pathology shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are three rows of books in this shelf. The \u201cRhinology.    Diseases of the nose, accessory sinuses,\u201d section. The \u201cLaryngology.    Diseases of the throat\u201d section. The \u201cOtology.    Diseases of the ear\u201d section.\n\n[|Entrance||] Otorhinolaryngology Room entrance",
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
      "description": "This room has one shelf. You can see the Otorhinolaryngology shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Otorhinolaryngology shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are five rows of books in this shelf. The \u201cMental healing\u201d section. The \u201cMiscellaneous systems and treatments\u201d section. The \u201cOsteopathy\u201d section. The \u201cChiropractic\u201d section. The \u201cOsteo-magnetics, neuropathy, etc., A-Z\u201d section.\n\n[|Entrance||] Other systems of medicine Room entrance",
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
      "description": "This room has one shelf. You can see the Other systems of medicine shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Other systems of medicine shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There is one row of books in this shelf. The \u201cSpecialties in nursing\u201d section.\n\n[|Entrance||] Nursing Room entrance",
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
      "description": "This room has one shelf. You can see the Nursing shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Nursing shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Botanic, Thomsonian, and eclectic medicine Room entrance",
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
      "description": "This room has one shelf. You can see the Botanic, Thomsonian, and eclectic medicine shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Botanic, Thomsonian, and eclectic medicine shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 35 rows of books in this shelf. The \u201cVeterinary medicine\u201d section with books about Diseases of special classes of animals, Veterinary surgery, Special preclinical sciences, Veterinary medicine of special organs, regions, and, Veterinary pharmacology, Communicable diseases of animals (General), Veterinary acupuncture, Veterinary parasitology, Veterinary microbiology, bacteriology, virology, mycology, Predatory animals and their control, Other diseases and conditions, Veterinary epidemiology.    Epizootiology, Veterinary orthopedics, and Veterinary physical medicine. The \u201cBreeding and breeds\u201d section. The \u201cCattle\u201d section with books about Dairy processing.    Dairy products and Dairying. The \u201cPets\u201d section with books about Rabbits and hares, Dogs.    Dog racing, Fishes.    Aquariums, Cats, and Other animals. The \u201cDonkeys\u201d section. The \u201cBirds.    Cage birds\u201d section. The \u201cHorses\u201d section with books about Horsemanship.    Riding, Racing, Horse sports.    Horse shows, Draft horses, Feral horses.    Wild horses, Ponies, and Driving. The \u201cPoultry.    Eggs\u201d section. The \u201cSwine\u201d section. The \u201cSheep.    Wool\u201d section. The \u201cGoats\u201d section. The \u201cSericulture.    Silk culture\u201d section. The \u201cFeeds and feeding.    Animal nutrition\u201d section. The \u201cSmall animal culture\u201d section. The \u201cRangelands.    Range management.    Grazing\u201d section. The \u201cBee culture\u201d section. The \u201cLaboratory animals\u201d section. The \u201cHistory\u201d section. The \u201cExhibitions\u201d section. The \u201cEconomic zoology\u201d section. The \u201cHousing and environmental control\u201d section. The \u201cWorking animals\u201d section. The \u201cBrands and branding, and other means of identifying\u201d section. The \u201cGame birds\u201d section. The \u201cFur-bearing animals\u201d section. The \u201cCost, yield, and profit.    Accounting\u201d section. The \u201cAcclimatization\u201d section. The \u201cLac-insects\u201d section. The \u201cOrnamental birds\u201d section. The \u201cEquipment and supplies\u201d section. The \u201cMules\u201d section. The \u201cInsect rearing\u201d section. The \u201cZoo animals\u201d section. The \u201cTransportation\u201d section. The \u201cReptiles\u201d section.\n\n[|Entrance||] Animal culture Room entrance",
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
      "description": "This room has one shelf. You can see the Animal culture shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Animal culture shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 20 rows of books in this shelf. The \u201cConservation of natural resources\u201d section. The \u201cAgricultural education\u201d section with books about Exhibitions.    Fairs, Agricultural extension work, Research.    Experimentation, and Historic farms. The \u201cHistory\u201d section. The \u201cFertilizers and improvement of the soil\u201d section. The \u201cSoils.    Soil science\u201d section. The \u201cSoil conservation and protection\u201d section. The \u201cFarm economics.    Farm management.    Agricultural\u201d section. The \u201cFarm machinery and farm engineering\u201d section. The \u201cAgricultural meteorology.    Crops and climate\u201d section. The \u201cAgriculture and the environment\u201d section. The \u201cMelioration: Improvement, reclamation, fertilization,\u201d section with books about Special classes of lands and reclamation methods and Organic farming.    Organiculture. The \u201cAgricultural physics\u201d section. The \u201cMethods and systems of culture.    Cropping systems\u201d section. The \u201cAgricultural ecology (General)\u201d section. The \u201cAgricultural chemistry.    Agricultural chemicals\u201d section. The \u201cDocuments and other collections\u201d section. The \u201cAgricultural missions, voyages, etc.\u201d section. The \u201cAgricultural structures.    Farm buildings\u201d section. The \u201cPlant growing media.    Potting soils\u201d section. The \u201cAgricultural conservation\u201d section.\n\n[|Entrance||] Agriculture (General) Room entrance",
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
      "description": "This room has one shelf. You can see the Agriculture (General) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Agriculture (General) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are four rows of books in this shelf. The \u201cAquaculture\u201d section with books about Fish culture, By region or country, Frogs, leeches, etc., and Mariculture. The \u201cFisheries\u201d section with books about By region or country, Whaling, Fishery management.    Fishery policy, Fishery processing, Fishery oceanography.    Fishery meteorology, Economic aspects.    Finance, Shellfish fisheries.    Shellfish culture, Fishery for individual species, By oceans and seas, Fishery technology, Methods and gear.    Catching of fish, Fishery resources.    Fishery conservation, Seagrasses, Navigation, Seal fisheries.    Fur sealing, Porpoises.    Dolphins, Packing, transportation, and storage, Exploratory fishing, Algae culture, Sponge fisheries, Fishery research vessels, Sea otter, Safety measures, and Fishing port facilities. The \u201cAngling\u201d section. The \u201cSeafood gathering\u201d section.\n\n[|Entrance||] Aquaculture.    Fisheries.    Angling Room entrance",
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
      "description": "This room has one shelf. You can see the Aquaculture.    Fisheries.    Angling shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Aquaculture.    Fisheries.    Angling shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 26 rows of books in this shelf. The \u201cFlowers and flower culture.    Ornamental plants\u201d section with books about Greenhouses and greenhouse culture, Classes of plants, Container gardening, Indoor gardening and houseplants, Culture of individual plants, Flower arrangement and decoration, Marketing.    Cut flower industry.    Florists, Bonkei.    Tray landscapes, Flower shows.    Exhibitions, Preservation and reproduction of flowers, fruits, etc., Horticultural service industry, Roof gardening.    Balcony gardening, Plant propagation, Forcing, and Care and preparation of cut flowers and ornamental plants. The \u201cField crops\u201d section. The \u201cGardens and gardening\u201d section. The \u201cLandscape gardening.    Landscape architecture\u201d section. The \u201cPropagation\u201d section. The \u201cVegetables\u201d section. The \u201cPests and diseases\u201d section with books about Pest control and treatment of diseases.    Plant protection, Individual or types of plants or trees, Plant pathology, Weeds, parasitic plants, etc., Economic entomology, and Poisonous plants. The \u201cParks and public reservations\u201d section. The \u201cSeeds.    Seed technology\u201d section. The \u201cEconomic zoology applied to crops.    Agricultural zoology\u201d section. The \u201cFruit and fruit culture\u201d section with books about Berries and small fruits, Nuts, and Grape culture.    Viticulture. The \u201cHorticulture.    Horticultural crops\u201d section. The \u201cGrowth regulators\u201d section. The \u201cFood crops\u201d section. The \u201cMethods for special areas\u201d section. The \u201cEconomic botany\u201d section. The \u201cTraining and pruning\u201d section. The \u201cNurseries.    Nursery industry\u201d section. The \u201cHarvesting, curing, storage\u201d section. The \u201cHistory\u201d section. The \u201cForcing\u201d section. The \u201cHorticultural voyages, etc.\u201d section. The \u201cIrrigation farming\u201d section. The \u201cArtificial light gardening\u201d section. The \u201cHydroponics.    Soilless agriculture\u201d section. The \u201cTree crops\u201d section.\n\n[|Entrance||] Plant culture Room entrance",
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
      "description": "This room has one shelf. You can see the Plant culture shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Plant culture shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 11 rows of books in this shelf. The \u201cBy country\u201d section. The \u201cWildlife management.    Game protection\u201d section. The \u201cBird hunting.    Fowling\u201d section. The \u201cBig game\u201d section. The \u201cSpecial methods and types of hunting\u201d section with books about Fox hunting, Coursing, and Ferreting. The \u201cShooting\u201d section. The \u201cWild animal trade\u201d section. The \u201cWildlife-related recreation\u201d section. The \u201cOther game\u201d section. The \u201cVarmint hunting (General)\u201d section. The \u201cPredator hunting\u201d section.\n\n[|Entrance||] Hunting sports Room entrance",
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
      "description": "This room has one shelf. You can see the Hunting sports shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Hunting sports shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 13 rows of books in this shelf. The \u201cAdministration.    Policy\u201d section. The \u201cConservation and protection\u201d section. The \u201cSylviculture\u201d section. The \u201cHistory of forestry.    Forest conditions\u201d section. The \u201cExploitation and utilization\u201d section. The \u201cForestry education\u201d section. The \u201cForest meteorology.    Forest microclimatology\u201d section. The \u201cDocuments\u201d section. The \u201cForestry machinery and engineering\u201d section. The \u201cVoyages, etc.\u201d section. The \u201cForest soils\u201d section. The \u201cForest roads\u201d section. The \u201cTools and implements\u201d section.\n\n[|Entrance||] Forestry Room entrance",
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
      "description": "This room has one shelf. You can see the Forestry shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Forestry shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are seven rows of books in this shelf. The \u201cNonmetallic minerals\u201d section. The \u201cOre deposits and mining of particular metals\u201d section. The \u201cMineral deposits.    Metallic ore deposits.\u201d section. The \u201cBuilding and ornamental stones\u201d section. The \u201cMetallurgy\u201d section. The \u201cPractical mining operations.    Safety measures\u201d section. The \u201cMine transportation, haulage and hoisting.\u201d section.\n\n[|Entrance||] Mining engineering.    Metallurgy Room entrance",
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
      "description": "This room has one shelf. You can see the Mining engineering.    Metallurgy shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Mining engineering.    Metallurgy shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are nine rows of books in this shelf. The \u201cColor photography\u201d section. The \u201cPhotographic processing.    Darkroom technique\u201d section. The \u201cApplied photography\u201d section. The \u201cCinematography.    Motion pictures\u201d section. The \u201cLighting\u201d section. The \u201cStudio and laboratory\u201d section. The \u201cCameras\u201d section. The \u201cPhotomechanical processes\u201d section. The \u201cTransparencies.    Diapositives\u201d section.\n\n[|Entrance||] Photography Room entrance",
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
      "description": "This room has one shelf. You can see the Photography shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Photography shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are eight rows of books in this shelf. The \u201cTechnical hydraulics\u201d section. The \u201cRiver, lake, and water-supply engineering\u201d section. The \u201cCanals and inland navigation.    Waterways\u201d section. The \u201cDams.    Barrages\u201d section. The \u201cRiver protective works.    Regulation.\u201d section. The \u201cGeneral preliminary operations.    Dredging.\u201d section. The \u201cHarbors and coast protective works.    Coastal\u201d section. The \u201cIrrigation engineering.    Reclamation of\u201d section.\n\n[|Entrance||] Hydraulic engineering Room entrance\n[|Next||||||] Ocean engineering shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Hydraulic engineering shelf",
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
      "description": "This room has two shelves organized linearly from the entrance towards the back. You can see the Hydraulic engineering shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Hydraulic engineering shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 13 rows of books in this shelf. The \u201cIndustrial and factory sanitation\u201d section with books about Industrial and factory wastes. The \u201cWater supply for domestic and industrial purposes\u201d section with books about Water purification.    Water treatment and, Water pollution, and Water distribution systems. The \u201cSewage collection and disposal systems.\u201d section. The \u201cHazardous substances and their disposal\u201d section. The \u201cEnvironmental pollution\u201d section. The \u201cMunicipal refuse.    Solid wastes\u201d section. The \u201cEnvironmental effects of industries and plants\u201d section. The \u201cEnvironmental protection\u201d section. The \u201cSpecial types of environment\u201d section. The \u201cStreet cleaning.    Litter and its removal\u201d section. The \u201cRural and farm sanitary engineering\u201d section. The \u201cMunicipal engineering\u201d section. The \u201cLow temperature sanitary engineering\u201d section.\n\n[|Entrance||] Environmental technology.    Sanitary engineering Room entrance",
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
      "description": "This room has one shelf. You can see the Environmental technology.    Sanitary engineering shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Environmental technology.    Sanitary engineering shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are nine rows of books in this shelf. The \u201cThe house\u201d section. The \u201cHospitality industry.    Hotels, clubs,\u201d section. The \u201cCooking\u201d section. The \u201cNutrition.    Foods and food supply\u201d section. The \u201cTaverns, barrooms, saloons\u201d section. The \u201cDining-room service\u201d section. The \u201cERROR, could not find\u201d section. The \u201cBuilding operation and housekeeping\u201d section. The \u201cMobile home living\u201d section.\n\n[|Entrance||] Home economics Room entrance",
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
      "description": "This room has one shelf. You can see the Home economics shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Home economics shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 17 rows of books in this shelf. The \u201cPaints, pigments, varnishes, etc.\u201d section. The \u201cLow temperature engineering.    Cryogenic\u201d section. The \u201cOils, fats, and waxes\u201d section with books about Petroleum refining.    Petroleum products. The \u201cFuel\u201d section. The \u201cPolymers and polymer manufacture\u201d section. The \u201cClay industries.    Ceramics.    Glass\u201d section. The \u201cBiotechnology\u201d section. The \u201cChemical engineering\u201d section. The \u201cFood processing and manufacture\u201d section. The \u201cFermentation industries.    Beverages.    Alcohol\u201d section. The \u201cTextile bleaching, dyeing, printing, etc.\u201d section. The \u201cChemicals: Manufacture, use, etc.\u201d section. The \u201cExplosives and pyrotechnics\u201d section. The \u201cCement industries\u201d section. The \u201cGas industry\u201d section. The \u201cIlluminating industries (Nonelectric)\u201d section. The \u201cIndustrial electrochemistry\u201d section.\n\n[|Entrance||] Chemical technology Room entrance",
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
      "description": "This room has one shelf. You can see the Chemical technology shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Chemical technology shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 13 rows of books in this shelf. The \u201cTelecommunication\u201d section. The \u201cElectronics\u201d section with books about Computer engineering.    Computer hardware and Photoelectronic devices (General). The \u201cNuclear engineering.    Atomic power\u201d section. The \u201cProduction of electric energy or power.\u201d section. The \u201cElectric lighting\u201d section. The \u201cDynamoelectric machinery and auxiliaries\u201d section. The \u201cElectric apparatus and materials.    Electric\u201d section. The \u201cApplications of electric power\u201d section. The \u201cDistribution or transmission of electric power\u201d section. The \u201cProduction of electricity by direct energy\u201d section. The \u201cElectric heating\u201d section. The \u201cElectricity for amateurs.    Amateur\u201d section. The \u201cElectric meters\u201d section.\n\n[|Entrance||] Electrical engineering.    Electronics.    Nuclear Room entrance",
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
      "description": "This room has one shelf. You can see the Electrical engineering.    Electronics.    Nuclear shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Electrical engineering.    Electronics.    Nuclear shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 23 rows of books in this shelf. The \u201cSurveying\u201d section. The \u201cMaterials of engineering and construction.\u201d section. The \u201cHuman engineering\u201d section. The \u201cEarthwork.    Foundations\u201d section. The \u201cEngineering instruments, meters, etc.\u201d section. The \u201cApplied optics.    Photonics\u201d section. The \u201cSystems engineering\u201d section. The \u201cStructural engineering (General)\u201d section. The \u201cEngineering mathematics.    Engineering analysis\u201d section. The \u201cTransportation engineering\u201d section. The \u201cEngineering geology.    Rock mechanics.    Soil\u201d section. The \u201cMechanics of engineering.    Applied mechanics\u201d section. The \u201cTunneling.    Tunnels\u201d section. The \u201cEngineering design\u201d section. The \u201cEngineering economy\u201d section. The \u201cManagement of engineering works\u201d section. The \u201cPlasma engineering\u201d section. The \u201cEnvironmental engineering\u201d section. The \u201cAcoustics in engineering.    Acoustical\u201d section. The \u201cEngineering machinery, tools, and implements\u201d section. The \u201cEngineering meteorology\u201d section. The \u201cBioengineering\u201d section. The \u201cDisasters and engineering\u201d section.\n\n[|Entrance||] Engineering (General).    Civil engineering (General) Room entrance",
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
      "description": "This room has one shelf. You can see the Engineering (General).    Civil engineering (General) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Engineering (General).    Civil engineering (General) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 14 rows of books in this shelf. The \u201cAnimal products\u201d section. The \u201cRubber industry\u201d section. The \u201cTextile industries\u201d section. The \u201cMetal manufactures.    Metalworking\u201d section. The \u201cPaper manufacture and trade\u201d section. The \u201cProduction management.    Operations\u201d section. The \u201cPackaging\u201d section. The \u201cTobacco industry\u201d section. The \u201cWood technology.    Lumber\u201d section with books about Wood products.    Furniture and Chemical processing of wood. The \u201cLeather industries.    Tanning\u201d section. The \u201cCereals and grain.    Milling industry\u201d section. The \u201cFurs\u201d section. The \u201cStonework\u201d section. The \u201cAnimal feeds and feed mills.    Pet food industry\u201d section.\n\n[|Entrance||] Manufactures Room entrance",
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
      "description": "This room has one shelf. You can see the Manufactures shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Manufactures shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 22 rows of books in this shelf. The \u201cMachinery exclusive of prime movers\u201d section. The \u201cControl engineering systems.    Automatic\u201d section. The \u201cSteam engineering\u201d section with books about Locomotives. The \u201cMiscellaneous motors and engines\u201d section. The \u201cMachine shops and machine shop practice\u201d section. The \u201cMechanical movements\u201d section. The \u201cPower resources\u201d section. The \u201cHoisting and conveying machinery\u201d section. The \u201cMechanical devices and figures.    Automata.\u201d section. The \u201cMachine design and drawing\u201d section. The \u201cTurbines.    Turbomachines (General)\u201d section. The \u201cMechanics applied to machinery.    Dynamics\u201d section. The \u201cHydraulic machinery\u201d section. The \u201cHeat engines\u201d section. The \u201cRenewable energy sources\u201d section. The \u201cEnergy conservation\u201d section. The \u201cMachine construction (General)\u201d section. The \u201cPneumatic machinery\u201d section. The \u201cAgricultural machinery.    Farm machinery\u201d section. The \u201cSewing machines\u201d section. The \u201cVacuum technology\u201d section. The \u201cLifting and pressing machinery\u201d section.\n\n[|Entrance||] Mechanical engineering and machinery Room entrance",
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
      "description": "This room has one shelf. You can see the Mechanical engineering and machinery shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Mechanical engineering and machinery shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 11 rows of books in this shelf. The \u201cLaundry work\u201d section. The \u201cClothing manufacture.    Dressmaking.    Tailoring\u201d section. The \u201cHome arts.    Homecrafts\u201d section. The \u201cMetalworking\u201d section. The \u201cArticles for children\u201d section. The \u201cHairdressing.    Beauty culture.    Barbers' work\u201d section. The \u201cWoodworking.    Furniture making.    Upholstering\u201d section. The \u201cSoft home furnishings\u201d section. The \u201cPainting.    Wood finishing\u201d section. The \u201cLathework.    Turning\u201d section. The \u201cManual training.    School shops\u201d section.\n\n[|Entrance||] Handicrafts.    Arts and crafts Room entrance",
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
      "description": "This room has one shelf. You can see the Handicrafts.    Arts and crafts shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Handicrafts.    Arts and crafts shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 10 rows of books in this shelf. The \u201cMechanical drawing.    Engineering graphics\u201d section. The \u201cIndustrial engineering.    Management\u201d section with books about Information technology, Human engineering in industry.    Man-, Production capacity.    Manufacturing capacity, Applied mathematics.    Quantitative methods, Automation, Work measurement.    Methods engineering, Standardization, and Managerial control systems. The \u201cIndustrial safety.    Industrial accident\u201d section. The \u201cTechnological change\u201d section. The \u201cTechnical education.    Technical schools\u201d section. The \u201cCommunication of technical information\u201d section. The \u201cPatents.    Trademarks\u201d section. The \u201cIndustrial research.    Research and development\u201d section. The \u201cExhibitions.    Trade shows.    World's fairs\u201d section. The \u201cIndustrial directories\u201d section.\n\n[|Entrance||] Technology (General) Room entrance",
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
      "description": "This room has one shelf. You can see the Technology (General) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Technology (General) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 13 rows of books in this shelf. The \u201cSystems of building construction\u201d section. The \u201cDetails in building design and construction\u201d section. The \u201cConstruction by phase of the work (Building trades)\u201d section. The \u201cProtection of buildings\u201d section. The \u201cBuildings: Construction with reference to use\u201d section. The \u201cHeating and ventilation.    Air conditioning\u201d section. The \u201cArchitectural engineering.    Structural\u201d section. The \u201cPlumbing and pipefitting\u201d section. The \u201cIllumination.    Lighting\u201d section. The \u201cMaintenance and repair\u201d section. The \u201cDecoration and decorative furnishings\u201d section. The \u201cEnvironmental engineering of buildings.\u201d section. The \u201cConstruction equipment in building\u201d section.\n\n[|Entrance||] Building construction Room entrance",
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
      "description": "This room has one shelf. You can see the Building construction shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Building construction shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are six rows of books in this shelf. The \u201cRailway construction\u201d section. The \u201cElectric railways\u201d section. The \u201cRailway equipment and supplies\u201d section. The \u201cLocal and light railways\u201d section with books about Elevated railways and subways. The \u201cHigh speed ground transporation\u201d section. The \u201cRailway operation and management\u201d section.\n\n[|Entrance||] Railroad engineering and operation Room entrance",
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
      "description": "This room has one shelf. You can see the Railroad engineering and operation shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Railroad engineering and operation shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are four rows of books in this shelf. The \u201cMotor vehicles.    Cycles\u201d section. The \u201cAstronautics.    Space travel\u201d section. The \u201cAeronautics.    Aeronautical engineering\u201d section. The \u201cRocket propulsion.    Rockets\u201d section.\n\n[|Entrance||] Motor vehicles.    Aeronautics.    Astronautics Room entrance",
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
      "description": "This room has one shelf. You can see the Motor vehicles.    Aeronautics.    Astronautics shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Motor vehicles.    Aeronautics.    Astronautics shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Entrance||] Bridge engineering Room entrance",
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
      "description": "This room has one shelf. You can see the Bridge engineering shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Bridge engineering shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are eight rows of books in this shelf. The \u201cPavements and paved roads\u201d section. The \u201cConstruction details\u201d section. The \u201cHighway design.    Interchanges and intersections\u201d section. The \u201cPedestrian facilities\u201d section with books about Curbs.    Curbstones and Sidewalks.    Footpaths.    Flagging. The \u201cLocation engineering\u201d section. The \u201cRoadside development.    Landscaping\u201d section. The \u201cMaterials for roadmaking\u201d section. The \u201cStreets\u201d section.\n\n[|Entrance||] Highway engineering.    Roads and pavements Room entrance",
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
      "description": "This room has one shelf. You can see the Highway engineering.    Roads and pavements shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Highway engineering.    Roads and pavements shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 19 rows of books in this shelf. The \u201cWar.    Philosophy.    Military sociology\u201d section. The \u201cHistory of military science\u201d section. The \u201cHistory of arms and armor\u201d section. The \u201cMilitary education and training\u201d section. The \u201cMilitary planning\u201d section. The \u201cAtomic warfare.    Atomic weapons\u201d section. The \u201cCommando tactics\u201d section. The \u201cTactics\u201d section. The \u201cStrategy\u201d section. The \u201cMilitary life, manners and customs, antiquities, etc.\u201d section. The \u201cWar games\u201d section. The \u201cJoint operations.    Combined operations\u201d section. The \u201cLogistics\u201d section. The \u201cAmphibious warfare\u201d section. The \u201cPhysical training of soldiers\u201d section. The \u201cArtillery and rifle ranges\u201d section. The \u201cManeuvers (combined arms)\u201d section. The \u201cArmy clubs\u201d section. The \u201cHistoriography\u201d section.\n\n[|Entrance||] Military science (General) Room entrance",
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
      "description": "This room has one shelf. You can see the Military science (General) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Military science (General) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 12 rows of books in this shelf. The \u201cAttack and defense.    Siege warfare\u201d section. The \u201cField engineering\u201d section. The \u201cFortification\u201d section. The \u201cLand mines, etc.\u201d section. The \u201cMilitary telegraphy and telephony\u201d section. The \u201cMilitary motor vehicles\u201d section. The \u201cMilitary surveying, topography, and    mapping\u201d section. The \u201cBridges\u201d section. The \u201cMilitary signaling\u201d section. The \u201cTechnical troops and other special corps\u201d section. The \u201cTactics and regulations\u201d section. The \u201cTunnels\u201d section.\n\n[|Entrance||] Air forces.    Air warfare Room entrance\n[|Next||||||] Air forces.    Air warfare shelf",
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
      "description": "There are nine rows of books in this shelf. The \u201cBy region or country\u201d section. The \u201cEquipment and supplies\u201d section. The \u201cTactics\u201d section. The \u201cAerial reconnaissance\u201d section. The \u201cEducation and training\u201d section. The \u201cOrganization.    Personnel management\u201d section. The \u201cMilitary aeronautical research\u201d section. The \u201cAir defenses\u201d section. The \u201cAir bases\u201d section.\n\n[|Previous||] Military engineering shelf\n[|Next||||||] Military astronautics.    Space warfare.    Space surveillance shelf",
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
      "description": "There is one row of books in this shelf. The \u201cBy region or country\u201d section.\n\n[|Previous||] Air forces.    Air warfare shelf",
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
      "description": "This room has three shelves organized linearly from the entrance towards the back. You can see the Military engineering shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Military engineering shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are eight rows of books in this shelf. The \u201cBy region or country\u201d section. The \u201cMilitary communication\u201d section. The \u201cMilitary geography\u201d section. The \u201cCivil defense\u201d section. The \u201cPlans for attack and defense\u201d section. The \u201cRoutes of travel.    Distances\u201d section. The \u201cMobilization\u201d section. The \u201cWar damage in industry.    Industrial defense\u201d section.\n\n[|Entrance||] Armies: Organization, distribution, military situation Room entrance",
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
      "description": "This room has one shelf. You can see the Armies: Organization, distribution, military situation shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Armies: Organization, distribution, military situation shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 16 rows of books in this shelf. The \u201cProvision for veterans\u201d section. The \u201cIntelligence\u201d section. The \u201cMinorities, women, etc. in armed forces\u201d section. The \u201cEnlistment, recruiting, etc.\u201d section. The \u201cCivilian personnel departments\u201d section. The \u201cWarrant officers.    Noncommissioned officers\u201d section. The \u201cRetired military personnel\u201d section. The \u201cCompulsory service.    Conscription and exemption\u201d section. The \u201cOfficers\u201d section. The \u201cRecords, returns, muster rolls, etc.\u201d section. The \u201cPsychological warfare.    Propaganda\u201d section. The \u201cMilitary pensions, etc.\u201d section. The \u201cSoldiers' and sailors' homes\u201d section. The \u201cSabotage\u201d section. The \u201cFurloughs\u201d section. The \u201cAdjutant generals' offices\u201d section.\n\n[|Entrance||] Military administration Room entrance",
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
      "description": "This room has one shelf. You can see the Military administration shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Military administration shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 10 rows of books in this shelf. The \u201cAirborne troops.    Parachute troops\u201d section. The \u201cTactics.    Maneuvers.    Drill regulations\u201d section. The \u201cSmall arms.    Swords, etc.\u201d section. The \u201cFiring.    Military sharpshooting\u201d section. The \u201cManual of arms\u201d section. The \u201cBayonet drill\u201d section. The \u201cSki troops\u201d section. The \u201cMounted infantry\u201d section. The \u201cMountain troops\u201d section. The \u201cAirmobile operations\u201d section.\n\n[|Entrance||] Infantry Room entrance",
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
      "description": "This room has one shelf. You can see the Infantry shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Infantry shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 12 rows of books in this shelf. The \u201cOrdnance material (Ordnance proper)\u201d section. The \u201cWeapons systems\u201d section. The \u201cBallistics.    Velocities and motions of projectiles\u201d section. The \u201cField artillery\u201d section. The \u201cSeacoast artillery\u201d section. The \u201cOrdnance and small arms\u201d section. The \u201cTactics.    Maneuvers.    Drill regulations\u201d section. The \u201cArsenals, magazines, armories, etc.\u201d section. The \u201cSiege artillery\u201d section. The \u201cArtillery instruments.    Fire control, etc.\u201d section. The \u201cGarrison artillery\u201d section. The \u201cHowitzer artillery.    Mortar batteries\u201d section.\n\n[|Entrance||] Artillery Room entrance",
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
      "description": "This room has one shelf. You can see the Artillery shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Artillery shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are eight rows of books in this shelf. The \u201cTransportation\u201d section. The \u201cClothing and equipment\u201d section. The \u201cSupplies and stores\u201d section. The \u201cOrganization of the service.    By region or country\u201d section. The \u201cBarracks.    Quarters.    Camps\u201d section. The \u201cSubsistence\u201d section. The \u201cHorses.    Mules.    Remount service\u201d section. The \u201cEquipage.    Field kits\u201d section.\n\n[|Entrance||] Maintenance and transportation Room entrance",
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
      "description": "This room has one shelf. You can see the Maintenance and transportation shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Maintenance and transportation shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are seven rows of books in this shelf. The \u201cMedical and sanitary services\u201d section. The \u201cMilitary hygiene and sanitation\u201d section. The \u201cCare of sick and wounded.    Relief societies\u201d section. The \u201cChaplains\u201d section. The \u201cRecreation and information services\u201d section. The \u201cPublic relations.    Press.    War correspondents\u201d section. The \u201cMilitary social work.    Social welfare services\u201d section.\n\n[|Entrance||] Other services Room entrance",
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
      "description": "This room has one shelf. You can see the Other services shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Other services shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are four rows of books in this shelf. The \u201cHorse cavalry\u201d section. The \u201cTactics.    Maneuvers.    Drill regulations\u201d section. The \u201cHorses\u201d section. The \u201cArmored cavalry\u201d section.\n\n[|Entrance||] Cavalry.    Armor Room entrance",
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
      "description": "This room has one shelf. You can see the Cavalry.    Armor shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Cavalry.    Armor shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are two rows of books in this shelf. The \u201cUnited States\u201d section. The \u201cOther regions or countries\u201d section.\n\n[|Entrance||] Navies: Organization, distribution, naval situation Room entrance",
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
      "description": "This room has one shelf. You can see the Navies: Organization, distribution, naval situation shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Navies: Organization, distribution, naval situation shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are six rows of books in this shelf. The \u201cSpecial types of vessels\u201d section. The \u201cHistory\u201d section. The \u201cMarine engineering\u201d section with books about ERROR, could not find. The \u201cShipbuilding industry.    Shipyards\u201d section. The \u201cStudy and teaching\u201d section. The \u201cContracts and specifications\u201d section.\n\n[|Entrance||] Naval architecture.    Shipbuilding.    Marine engineering Room entrance",
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
      "description": "This room has one shelf. You can see the Naval architecture.    Shipbuilding.    Marine engineering shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Naval architecture.    Shipbuilding.    Marine engineering shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 14 rows of books in this shelf. The \u201cLighthouse service\u201d section. The \u201cStudy and teaching\u201d section. The \u201cScience of navigation\u201d section. The \u201cHistory, conditions, etc.\u201d section. The \u201cNautical instruments\u201d section. The \u201cSailing directions.    Pilot guides\u201d section. The \u201cSaving of life and property\u201d section. The \u201cShipwrecks and fires\u201d section. The \u201cSignaling\u201d section. The \u201cIcebreaking operations\u201d section. The \u201cMarine hydrography.    Hydrographic surveying\u201d section. The \u201cHarbors.    Ports\u201d section. The \u201cPilots and pilotage\u201d section. The \u201cTide and current tables\u201d section.\n\n[|Entrance||] Navigation.    Merchant marine Room entrance",
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
      "description": "This room has one shelf. You can see the Navigation.    Merchant marine shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Navigation.    Merchant marine shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are eight rows of books in this shelf. The \u201cNaval aviation\u201d section. The \u201cCoast guard and coast signal service\u201d section. The \u201cMedical service\u201d section. The \u201cNaval communication by telegraphy, telephone, etc.\u201d section. The \u201cChaplains\u201d section. The \u201cRecreation and information service\u201d section. The \u201cPublic relations.    Press.    War    correspondents\u201d section. The \u201cSocial work.    Social welfare services\u201d section.\n\n[|Entrance||] Minor services of navies Room entrance",
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
      "description": "This room has one shelf. You can see the Minor services of navies shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Minor services of navies shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are 11 rows of books in this shelf. The \u201cWar vessels: Construction, armament, etc.\u201d section. The \u201cHistory and antiquities of naval science\u201d section. The \u201cNaval education\u201d section. The \u201cNaval life, manners and customs, antiquities, etc.\u201d section. The \u201cNaval research\u201d section. The \u201cStrategy\u201d section. The \u201cTactics\u201d section. The \u201cSubmarine warfare\u201d section. The \u201cMilitary oceanography\u201d section. The \u201cAutomation in the naval sciences\u201d section. The \u201cNavy clubs\u201d section.\n\n[|Entrance||] Naval science (General) Room entrance",
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
      "description": "This room has one shelf. You can see the Naval science (General) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Naval science (General) shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are six rows of books in this shelf. The \u201cOfficers\u201d section. The \u201cBy region or country\u201d section. The \u201cCivil department\u201d section. The \u201cEnlisted personnel\u201d section. The \u201cMinorities, women, etc. in navies\u201d section. The \u201cWarrant officers\u201d section.\n\n[|Entrance||] Naval administration Room entrance",
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
      "description": "This room has one shelf. You can see the Naval administration shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Naval administration shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are five rows of books in this shelf. The \u201cBy region or country\u201d section. The \u201cDrill regulations\u201d section. The \u201cShooting\u201d section. The \u201cTraining camps\u201d section. The \u201cBarracks, quarters, etc.\u201d section.\n\n[|Entrance||] Marines Room entrance",
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
      "description": "This room has one shelf. You can see the Marines shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Marines shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are five rows of books in this shelf. The \u201cOrdnance and arms (General)\u201d section. The \u201cNaval weapons systems\u201d section. The \u201cOrdnance instructions and drill books\u201d section. The \u201cBy region or country\u201d section. The \u201cOrdnance material (Ordnance proper)\u201d section.\n\n[|Entrance||] Naval ordnance Room entrance",
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
      "description": "This room has one shelf. You can see the Naval ordnance shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Naval ordnance shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are six rows of books in this shelf. The \u201cSupplies and stores\u201d section. The \u201cClothing and equipment\u201d section. The \u201cEquipment of vessels, supplies, allowances, etc.\u201d section. The \u201cOrganization of service\u201d section. The \u201cSubsistence.    Provisioning\u201d section. The \u201cNavy yards and stations.    Shore facilities\u201d section.\n\n[|Entrance||] Naval maintenance Room entrance",
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
      "description": "This room has one shelf. You can see the Naval maintenance shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Naval maintenance shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are five rows of books in this shelf. The \u201cBy region or country\u201d section. The \u201cSmall arms\u201d section. The \u201cDrill regulations\u201d section. The \u201cShooting\u201d section. The \u201cSmall boat service\u201d section.\n\n[|Entrance||] Naval personnel Room entrance",
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
      "description": "This room has one shelf. You can see the Naval personnel shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Naval personnel shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are nine rows of books in this shelf. The \u201cBooksellers' general catalogs of modern books\u201d section. The \u201cChoice of books.    Books and reading.    Book reviews\u201d section. The \u201cBooks for special classes of persons, institutions, etc.\u201d section. The \u201cBest books\u201d section. The \u201cIntroduction to bibliography. Theory, philosophy,\u201d section. The \u201cSpecial classes of books\u201d section. The \u201cGeneral bibliographies\u201d section. The \u201cAnonyms and pseudonyms\u201d section. The \u201cBiography of bibliographers\u201d section.\n\n[|Entrance||] National bibliography Room entrance\n[|Next||||||] Books (General).    Writing.    Paleography shelf",
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
      "description": "There are three rows of books in this shelf. The \u201cWriting\u201d section with books about Shorthand.    Stenography.    Phonography, Typewriters.    Typewriting.    Keyboards.    Keyboarding, Calligraphy.    Penmanship, Word processing, Cryptography.    Ciphers.    Invisible writing, Autographs.    Signatures, and Duplicating processes.    Copying services. The \u201cHistory of books and bookmaking\u201d section. The \u201cManuscripts.    Paleography\u201d section.\n\n[|Previous||] General bibliography shelf\n[|Next||||||] National bibliography shelf",
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
      "description": "There are six rows of books in this shelf. The \u201cAmerica\u201d section. The \u201cAfrica\u201d section. The \u201cEurope\u201d section. The \u201cAustralia.    Oceania\u201d section. The \u201cAsia\u201d section. The \u201cEastern Hemisphere\u201d section.\n\n[|Previous||] Books (General).    Writing.    Paleography shelf\n[|Next||||||] Book industries and trade shelf",
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
      "description": "There are 12 rows of books in this shelf. The \u201cPractical printing\u201d section. The \u201cHistory\u201d section. The \u201cBookselling and publishing\u201d section. The \u201cFreedom of the press.    Censorship\u201d section. The \u201cBookbinding.    Book decoration\u201d section. The \u201cPaper.    Watermarks, etc.\u201d section. The \u201cPrinters and printing establishments\u201d section with books about Medallic history of printing.    Tokens. The \u201cPrinting\u201d section. The \u201cCopyright\u201d section. The \u201cIncunabula.    Block books\u201d section. The \u201cPrinter's marks, mottoes, etc.\u201d section. The \u201cRepresentation or reproduction of books, documents,\u201d section.\n\n[|Previous||] National bibliography shelf\n[|Next||||||] Libraries shelf",
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
      "description": "There are nine rows of books in this shelf. The \u201cLibrary reports.    History.    Statistics\u201d section. The \u201cBook collecting\u201d section. The \u201cLibraries (General)\u201d section. The \u201cLibrary science.    Information science\u201d section with books about Personnel, Library buildings.    Library architecture, The collections.    The books, Classes of libraries, Library administration and organization.    Constitution, Finance.    Insurance, Automation, Library information networks, Library education.    Research, Reproduction of library materials.    Storage media of, Trustees.    Library boards, committees, etc., Library communication systems, Supplies.    Shelving.    Bookstacks, Branches.    Delivery stations.    Bookmobiles, and Library service agencies. The \u201cThe collections.    The books\u201d section with books about Libraries in relation to special topics. The \u201cCollections\u201d section. The \u201cPrivate libraries\u201d section. The \u201cLibrary catalogs and bulletins\u201d section. The \u201cBooksellers' catalogs\u201d section.\n\n[|Previous||] Book industries and trade shelf\n[|Next||||||] Personal bibliography shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Libraries shelf\n[|Next||||||] Subject bibliography shelf",
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
      "description": "There are 0 rows of books in this shelf. \n\n[|Previous||] Personal bibliography shelf",
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
      "description": "This room has seven shelves organized linearly from the entrance towards the back. You can see the General bibliography shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] General bibliography shelf\n[|Exit||||||] Floor foyer",
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
      "description": "There are five rows of books in this shelf. The \u201cInformation services. Information centers\u201d section. The \u201cInformation in specific formats or media\u201d section with books about Electronic information resources, Motion pictures. Video recordings, Pictures. Photographs, and Sound recordings. The \u201cElectronic information resources\u201d section with books about Computer network resources. The \u201cGovernment information\u201d section. The \u201cInformation superhighway\u201d section.\n\n[|Entrance||] Information resources (General) Room entrance",
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
      "description": "This room has one shelf. You can see the Information resources (General) shelf in front of you. You can exit to the floor foyer.\n\n[|Shelf|||||] Information resources (General) shelf\n[|Exit||||||] Floor foyer",
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
