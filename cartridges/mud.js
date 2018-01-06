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
      "description": "There are two rows of books in this shelf. The American and English section. The Other languages section.\n\n[|Entrance||] Collections.  Series.  Collected works Room entrance\n[|Next||||||] Collections.  Series.  Collected works shelf",
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
      "description": "There are three rows of books in this shelf. The Pamphlet collections section. The Inaugural and program dissertations section. The Scrapbooks section.\n\n[|Previous||] Collections of monographs, essays, etc. shelf",
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
      "description": "There is one row of books in this shelf. The By language section.\n\n[|Entrance||] Encyclopedias Room entrance",
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
      "description": "There are four rows of books in this shelf. The History section. The Philosophy.  Theory section. The By region or country section. The Evaluation section.\n\n[|Entrance||] History of scholarship and learning.  The humanities Room entrance",
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
      "description": "There are three rows of books in this shelf. The By country section. The Collectors and collecting section. The Museology.  Museum methods, technique, etc. section.\n\n[|Entrance||] Museums.  Collectors and collecting Room entrance",
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
      "description": "There are two rows of books in this shelf. The By region or country section. The International associations, congresses, conferences, etc. section.\n\n[|Entrance||] Academies and learned societies Room entrance",
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
      "description": "There are three rows of books in this shelf. The Juvenile periodicals section. The Humorous periodicals section. The Periodicals for women section.\n\n[|Entrance||] Periodicals Room entrance",
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
      "description": "There are three rows of books in this shelf. The Almanacs section. The Annuals section. The Directories section.\n\n[|Entrance||] Yearbooks.  Almanacs.  Directories Room entrance",
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
      "description": "There are six rows of books in this shelf. The Pastoral theology section with books about Preaching.  Homiletics, Personal life of the clergy, Practical church work.  Social work.  Work of the layman, and Education. The Missions section with books about Missions in individual countries, Special churches, and Special types of missions. The Evangelism.  Revivals section. The Ecclesiastical theology section with books about Religious education (General), Sacraments.  Ordinances, Church management.  Efficiency, The Church, Church finance.  Church property, Parish.  Congregation.  The local church, Ministry.  Clergy.  Religious vocations, Religious societies, associations, etc., City churches, Social life, recreation, etc., in the church, Church and state, Mass media and telecommunication in religion, Shrines.  Holy places, Church polity, and The rural church.  The church and country life. The Practical religion.  The Christian life section with books about Works of meditation and devotion, Religious duties, Moral theology, Works of consolation and cheer, Mysticism, Asceticism, Conversion literature, and Quietism. The Worship (Public and private) section with books about Times and seasons.  The Church year, Hymnology, Prayer, Liturgy and ritual, Christian symbols and symbolism, and Family worship.\n\n[|Entrance||] Practical Theology Room entrance",
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
      "description": "There are three rows of books in this shelf. The Etiquette of entertaining section. The Etiquette of travel section. The Telephone etiquette section.\n\n[|Entrance||] Ethics Room entrance\n[|Next||||||] Ethics shelf",
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
      "description": "There are 10 rows of books in this shelf. The Individual ethics.  Character.  Virtue section. The History and general works section. The Religious ethics section. The Evolutionary and genetic ethics section. The Ethics of social groups, classes, etc.  Professional ethics section. The Feminist ethics section. The Communist ethics section. The Socialist ethics section. The Positivist ethics section. The Totalitarian ethics section.\n\n[|Previous||] Social usages.  Etiquette shelf",
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
      "description": "There are five rows of books in this shelf. The Protestantism section with books about Other Protestant denominations, Protestant Episcopal Church in the United States, Church of England, Post-Reformation, General, Pre-Reformation, Anglican Communion (General), Church of Ireland, Church of England outside of Great Britain, Church in Wales, Episcopal Church in Scotland, Reformed Episcopal Church, and Protestant Episcopal Church outside the United States. The Catholic Church section with books about Biography and portraits, Creeds and catechisms, History, Monasticism.  Religious orders, Practical religion.  Christian life, Liturgy and ritual, Theology.  Doctrine.  Dogmatics, Sacraments, Meditations.  Devotional readings.  Spiritual exercises, etc., Government and organization, Churches, cathedrals, abbeys (as parish churches), etc., Relics.  Shrines.  Pilgrimages.  Processions, Forms of worship.  Catholic practice, Periodicals.  Societies, councils, congresses, etc., Collective, Study and teaching, Saints.  Hagiology, General collected works, Sermons, Religious life.  Religious state, Dictionaries.  Encyclopedias, Sacramentals, Catholic Church and other churches, Eastern churches in communion with Rome., Controversial works, Dissenting sects other than Protestant, Documents, Catholic Church and the state, Directories.  Yearbooks, and Images. The Orthodox Eastern Church section with books about General and Divisions of the church. The Church unity.  Ecumenical movement. section. The Eastern churches.  Oriental churches section with books about Armenian Church, Coptic Church, General, St. Thomas Christians.  Malabar Christians., Syrian or Jacobite Church, Nestorian, Chaldean, or East Syrian Church, Ethiopic or Abyssinian Church, and Maronite Church.\n\n[|Entrance||] Christian Denominations Room entrance",
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
      "description": "There are 24 rows of books in this shelf. The New Thought.  Menticulture, etc. section. The The hand.  Palmistry section. The Consciousness.  Cognition section. The Developmental psychology section. The Sensation.  Aesthesiology section. The Affection.  Feeling.  Emotion section. The Differential psychology.  Individuality.  Self section. The Applied psychology section. The Personality section. The Psychoanalysis section. The Genetic psychology section. The Philosophy.  Relation to other topics section. The Will.  Volition.  Choice.  Control section. The Comparative psychology.  Animal and human psychology section. The Motivation section. The Psychotropic drugs and other substances section. The Experimental psychology section. The Psychological tests and testing section. The Psychology of sex.  Sexual behavior section. The Temperament.  Character section. The Physiognomy.  Phrenology section. The Graphology.  Study of handwriting section. The Class psychology section. The Gestalt psychology section.\n\n[|Entrance||] Psychology Room entrance\n[|Next||||||] Parapsychology shelf",
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
      "description": "There are five rows of books in this shelf. The Spiritualism section. The Hypnotism.  Suggestion.  Mesmerism.  Subliminal projection section. The Psychic research.  Psychology of the conscious section. The Hallucinations.  Sleep.  Dreaming.  Visions section. The Telepathy.  Mind reading.  Thought transference section.\n\n[|Previous||] Psychology shelf\n[|Next||||||] Occult sciences shelf",
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
      "description": "There are nine rows of books in this shelf. The Magic.  Hermetics.  Necromancy section. The Witchcraft section. The Ghosts.  Apparitions.  Hauntings section. The Astrology section. The Human-alien encounters.  Contact between humans and section. The Oracles.  Sibyls.  Divinations section. The Fortune-telling section. The Seers.  Prophets.  Prophecies section. The Demonology.  Satanism.  Possession section.\n\n[|Previous||] Parapsychology shelf",
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
      "description": "There are five rows of books in this shelf. The Modern texts and versions section with books about Non-European languages, English, and Other European languages. The Works about the Bible section with books about Study and teaching, Men, women, and children of the Bible, Bible stories.  Paraphrases of Bible stories., Criticism and interpretation, Prophecy, Bible and science, The Bible as literature, and Bible and social sciences. The Old Testament section with books about Special parts of the Old Testament, Works about the Old Testament, Early versions, Selections.  Quotations, and Modern texts and versions. The New Testament section with books about Works about the New Testament, Special parts of the New Testament, Early texts and versions, Modern texts and versions, and Selections.  Quotations. The Early versions section.\n\n[|Entrance||] The Bible Room entrance",
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
      "description": "There are 15 rows of books in this shelf. The Eschatology.  Last things section. The Christology section with books about Life of Christ, Relics, and Miracles.  Apparitions.  Shrines, sanctuaries,. The Salvation.  Soteriology section. The God section with books about Holy Spirit.  The Paraclete, Divine attributes, Doctrine of the Trinity, and Revelation. The Creeds, confessions, covenants, etc. section. The Future state.  Future life section. The Apologetics.  Evidences of Christianity section. The Creation section. The Mary, Mother of Jesus Christ.  Mariology section with books about Miracles.  Apparitions.  Shrines, sanctuaries,. The Invisible world (saints, demons, etc.) section. The Divine law.  Moral government section. The Doctrine and dogma section. The Judaism section. The History of specific doctrines and movements. section. The Catechisms section.\n\n[|Entrance||] Doctrinal Theology Room entrance",
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
      "description": "There are two rows of books in this shelf. The By period section with books about Modern, Ancient, Medieval, and Renaissance. The General works section.\n\n[|Entrance||] Philosophy (General) Room entrance",
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
      "description": "There are 10 rows of books in this shelf. The History section with books about By period and By region or country. The Early Christian literature.  Fathers of the Church, etc. section. The Christianity in relation to special subjects section. The Biography section. The Persecution.  Martyrs section. The Tolerance and toleration section. The Christian antiquities.  Archaeology.  Museums section. The Liberalism section. The Sacrilege (History) section. The Dissent section.\n\n[|Entrance||] Christianity Room entrance",
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
      "description": "There are 18 rows of books in this shelf. The Religion (General) section. The Eschatology section. The Rationalism section. The Natural theology section with books about Religion and science, Nature and attributes of Deity, General, Theism, Creation.  Theory of the earth, Monotheism, Pantheism, Dualism, and Polytheism. The Religions of the world section. The History and principles of religions section with books about African, American, Asian.  Oriental, European.  Occidental, Pacific Ocean islands.  Oceania, Arctic regions, Indo-European.  Aryan, Mediterranean region, and Ural-Altaic. The Religious doctrines (General) section with books about Nature worship, Other, Women in comparative religion, Worship of human beings, Sex worship.  Phallicism, and Origins of religion. The Religious life section. The Biography section. The Worship.  Cultus section. The The myth.  Comparative mythology section. The Philosophy of religion.  Psychology of religion.  Religion section. The The soul section. The Classification of religions section. The Religions in relation to one another section. The Sacred books (General) section. The Religious organization section. The Unity and plurality section.\n\n[|Entrance||] Religions.  Mythology.  Rationalism Room entrance",
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
      "description": "There are 19 rows of books in this shelf. The Bahai Faith section. The The practice of Islam section with books about Islamic religious life, Special days and seasons, fasts, feasts,, Jihad (Holy War), The five duties of a Moslem.  Pillars of Islam, Shrines, sacred places, etc., and Religious ceremonies, rites, etc.. The Other beliefs and movements section. The Islam section. The Theosophy section. The Dogma (\u02bbAq\u0101\u0313id) section. The Biography section with books about Muammad, Prophet, d. 632. The ERROR, could not find section. The Branches, sects, etc. section with books about Black Muslims, Shiites, Nurculuk, and Moorish Science Temple of America. The General section. The Islamic sociology section. The Relation of Islam to other religions section. The Koran section with books about Works about the Koran and Special parts and chapters. The Anthroposophy section. The Sacred books section with books about Koran, Hadith literature.  Traditions.  Sunna, and Koranic and other Islamic legends. The Islamic literature section. The Missionary work of Islam section. The Heresy, heresies, heretics section. The Benevolent work.  Social work.  Welfare work, etc. section.\n\n[|Entrance||] Islam.  Bahai Faith.  Theosophy, etc. Room entrance\n[|Next||||||] General shelf",
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
      "description": "There is one row of books in this shelf. The Study and teaching section.\n\n[|Previous||] Islam.  Bahai Faith.  Theosophy, etc. shelf",
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
      "description": "There are 13 rows of books in this shelf. The Practical Judaism section with books about Jewish way of life.  Spiritual life.  Mysticism.  Personal, Liturgy and ritual, Priests, rabbis, etc., Festivals and fasts, Rites and customs, Preaching.  Homiletics, Congregations.  Synagogues, Forms of worship, and The tabernacle.  The temple. The Sources of Jewish religion.  Rabbinical literature section with books about Talmudic literature, Halacha, Cabala, Jewish tradition, and Midrash. The Dogmatic Judaism section. The Relation of Judaism to special subject fields section with books about Religions. The Biography section. The General section. The Principles of Judaism (General) section. The Pre-Talmudic Jewish literature (non-Biblical) section. The Samaritans section. The Controversial works against the Jews section. The Jewish works against Christianity and Islam section. The Apologetics section. The Heresy, heresies section.\n\n[|Entrance||] Judaism Room entrance\n[|Next||||||] General shelf",
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
      "description": "There is one row of books in this shelf. The History section with books about By region or country.\n\n[|Previous||] Judaism shelf",
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
      "description": "There are three rows of books in this shelf. The General works section. The Special topics section. The History section with books about By period.\n\n[|Entrance||] Logic Room entrance",
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
      "description": "There are 30 rows of books in this shelf. The Tripit.aka (Canonical literature) section. The Modifications, schools, etc. section with books about Special modifications, sects, etc., Tibetan Buddhism (Lamaism), Bonpo (Sect), Mahayana Buddhism, and Therav\u0101da (Hinayana) Buddhism. The Doctrinal and systematic Buddhism section with books about Special doctrines and Special topics and relations to special subjects. The General works section. The Biography section with books about Individual and Collective. The Practice of Buddhism.  Forms of worship section with books about Religious life, Altar, liturgical objects, ornaments, memorials, etc., Festivals.  Days and seasons, Buddhist ministry.  Priesthood.  Organization, Ceremonies and rites.  Ceremonial rules, Symbols and symbolism, Hymns.  Chants.  Recitations, Temple.  Temple organization, and Vestments, altar cloths, etc.. The History section. The Buddhist pantheon section. The General collections.  Collected works section. The Buddhist literature section. The Terminology section. The Monasteries.  Temples.  Shrines.  Sites section. The Monasticism and monastic life  Sagha (Order) section. The Benevolent work.  Social work.  Welfare work, etc. section. The Antiquities.  Archaeology section with books about Literary discoveries and Inscriptions, etc.. The Pilgrims and pilgrimages section. The Societies, councils, associations, clubs, etc. section. The Folklore section. The Dictionaries (General) section. The Relation to other religious and philosophical systems section. The Questions and answers.  Maxims (General) section. The Missionary work section. The Religious education (General) section. The Congresses.  Conferences (General) section. The Persecutions section. The Directories (General) section. The Encyclopedias (General) section. The Periodicals.  Yearbooks (General) section. The Research section. The Asceticism.  Hermits.  Wayfaring life section.\n\n[|Entrance||] Buddhism Room entrance",
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
      "description": "There are six rows of books in this shelf. The Ontology section. The Epistemology.  Theory of knowledge section. The General philosophical works section. The Metaphysics section. The Cosmology section. The Methodology section.\n\n[|Entrance||] Speculative philosophy Room entrance",
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
      "description": "There are two rows of books in this shelf. The History section. The Special topics section.\n\n[|Entrance||] Aesthetics Room entrance",
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
      "description": "There are five rows of books in this shelf. The National biography section. The Biography.  By subject section with books about Biography of women (Collective), Other miscellaneous groups, Academicians.  Scholars. Savants, and Blank books for personal records, diaries, etc.. The General collective biography section with books about Portraits. The Biography as an art or literary form section. The History of biographical literature.  Lives of biographers section.\n\n[|Entrance||] Biography Room entrance",
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
      "description": "There are four rows of books in this shelf. The By region or country section. The Personal and family names section. The Family history covering more than one country section. The Genealogical lists, etc., covering more than one country section.\n\n[|Entrance||] Genealogy Room entrance",
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
      "description": "There are eight rows of books in this shelf. The Flags, banners, and standards section. The Chivalry and knighthood (Orders, decorations, etc.) section with books about Ceremonials, pageants, tournaments, etc., Duels and dueling, and Orders, etc.. The Public and official heraldry section. The Family heraldry section. The Titles of honor, rank, precedence, etc. section. The Royalty.  Insignia.  Regalia, crown and coronets, etc. section. The Crests, monograms, devices, badges, mottoes, etc. section. The Ecclesiastical and sacred heraldry section.\n\n[|Entrance||] Heraldry Room entrance",
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
      "description": "There are five rows of books in this shelf. The Civilization and race section. The By period section. The Relation to special topics section with books about Technology, War and civilization, Geography and civilization, and Water and civilization. The Forecasts of future progress section. The Terrestrial evidence of interplanetary voyages section.\n\n[|Entrance||] History of Civilization Room entrance",
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
      "description": "There are four rows of books in this shelf. The Medieval and modern section. The Coins section. The Tokens section with books about By region or country, By period, and Special uses of tokens. The Medals and medallions section with books about By region or country, Medieval and modern, and Ancient.\n\n[|Entrance||] Numismatics Room entrance",
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
      "description": "There are nine rows of books in this shelf. The Study and teaching.  Research section. The Philosophy.  Theory section with books about Methodology. The Preservation, restoration, and conservation of section. The Bells.  Campanology.  Cowbells section. The Crosses section. The Hill figures section. The Forgeries of antiquities section. The Lanterns of the dead section. The Boundary stones section.\n\n[|Entrance||] Archaeology Room entrance",
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
      "description": "There are six rows of books in this shelf. The Ancient inscriptions section. The Early Christian inscriptions section. The By region or country section. The By language section. The Modern inscriptions (General) section. The Medieval inscriptions (General) section.\n\n[|Entrance||] Inscriptions.  Epigraphy Room entrance",
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
      "description": "There are five rows of books in this shelf. The Archives section with books about History and statistics. The Collection of documents, facsimiles, etc., for study section. The Seals section with books about Modern, Ancient, and Medieval. The Diplomatics section. The Formularies section.\n\n[|Entrance||] Diplomatics.  Archives.  Seals Room entrance",
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
      "description": "There are three rows of books in this shelf. The Medieval and modern section. The Ancient section. The Perpetual calendars.  Century calendars, etc. section.\n\n[|Entrance||] Technical chronology.  Calendar Room entrance",
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
      "description": "There are 38 rows of books in this shelf. The China section with books about History, Local history and description, Taiwan, Outer Mongolia.  Mongolian People's Republic, and Ethnography. The Philippines section with books about History, Local history and description, and Ethnography. The Israel (Palestine).  The Jews section with books about Jews outside of Palestine, History, Ethnography.  Tribes of Israel, Jerusalem, and Antiquities. The Japan section with books about Local history and description and History. The India (Bharat) section with books about History, Local history and description, and Ethnography.  Sects. The Middle East.  Southwestern Asia.  Ancient Orient. section with books about History, Local history and description, and Ethnography. The East Asia.  The Far East section with books about Relation of individual countries to East Asia. The Iran (Persia) section with books about History, Ethnography, Local history and description, and Antiquities. The Indonesia (Dutch East Indies) section with books about Ethnography, Sumatra, History, Borneo.  Kalimantan, Indonesia, Timor, Celebes.  Sulawesi, Moluccas.  Maluku, and Java. The Korea section with books about History, Democratic People's Republic, 1948-, and Local history and description. The Southeast Asia section with books about French Indochina, History, and Burma. The Malaysia.  Malay Peninsula.  Straits Settlements section with books about Local history and description, History, and Ethnography. The Iraq (Assyria, Babylonia, Mesopotamia) section with books about History, Ethnography, and Antiquities. The Jordan.  Transjordan section with books about History and Ethnography. The Arabian Peninsula.  Saudi Arabia section with books about Local history and description, History, and Ethnography. The Ethnography section. The Pakistan section with books about History, Local history and description, and Ethnography. The Southern Asia.  Indian Ocean Region section with books about Islands of the Indian Ocean. The Singapore section. The Thailand (Siam) section with books about History, Ethnography, and Local history and description. The Arab countries section with books about History and Ethnography. The Afghanistan section with books about History, Local history and description, and Ethnography. The History section. The The Islamic World section. The Armenia section with books about History. The Syria section with books about History, Provinces, regions, cities, etc., and Ethnography. The Nepal section. The Lebanon (Phenicia) section with books about History and Ethnography. The Sri Lanka section with books about History and Ethnography. The Bhutan section. The Bangladesh.  East Pakistan section with books about History, Local history and description, and Ethnography. The Central Asia section. The Asia Minor section. The Description and travel section. The Goa.  Portuguese in India section. The Brunei section. The Antiquities section. The Malay Archipelago section.\n\n[|Entrance||] History of Asia Room entrance",
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
      "description": "There are 14 rows of books in this shelf. The General section. The Europe (General) section with books about Description and travel and History. The Ancient history section. The Medieval history section with books about Crusades, Later medieval.  11th-15th centuries, Migrations, and Latin Kingdom of Jerusalem.  Latin Orient, 1099-1291. The Modern history, 1453- section with books about 1789-, 1453-1648, 1601-1715.  17th century, and 1715-1789.  18th century. The World War II (1939-1945) section. The Post-war history (1945-    ) section. The Developing countries section. The Political and diplomatic history section. The World War I (1914-1918) section. The Military and naval history section. The Period between World Wars (1919-1939) section. The Medieval and modern history, 476- section. The Eastern Hemisphere section.\n\n[|Entrance||] History (General) Room entrance",
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
      "description": "There are five rows of books in this shelf. The England section with books about Description and travel.  Guidebooks, History, Local history and description, and General. The Scotland section with books about Local history and description, History, Description and travel, and General. The Ireland section with books about Local history and description, History, General, Description and travel, and Modern, 1603-. The Wales section with books about General, Description and travel, Local history and description, and History. The British Empire.  Commonwealth of Nations.  The section.\n\n[|Entrance||] History of Great Britain Room entrance",
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
      "description": "There are 22 rows of books in this shelf. The Egypt section with books about Antiquities, History, Local history and description, Local antiquities, and Ethnography. The History section. The Maghrib.  Barbary States section with books about Algeria, Sahara, Morocco, Tunisia (Tunis), and Libya. The Zimbabwe.  Southern Rhodesia section with books about Local history and description, History, and Ethnography. The Eastern Africa section with books about Ethiopia (Abyssinia), East Africa.  British East Africa, Kenya, Somalia.  Somaliland and adjacent territory, Uganda, Rwanda.  Ruanda-Urundi, Burundi, Tanzania.  Tanganyika.  German East Africa, Djibouti.  French Territory of the Afars and Issas., Islands (East African coast), Eritrea, History, and Northeast Africa. The Sudan.  Anglo-Egyptian Sudan section with books about Ethnography, History, Local history and description, and Antiquities. The Central Sub-Saharan Africa section. The South Africa section with books about History, Ethnography, Cape Province.  Cape of Good Hope, Transvaal.  South African Republic, KwaZulu-Natal.  Natal, and Orange Free State.  Oranje Vrystaat. The Southern Africa section with books about Ethnography, History, and Local history and description. The West Africa.  West Coast section with books about British West Africa, French West Africa.  French Sahara.  West Sahara., Cameroon (Cameroun, Kamerun), Congo (Kongo) River region, Portuguese-speaking West Africa, Liberia, Zaire.  Congo (Democratic Republic).  Belgian Congo, Spanish West Africa, Togo.  Togoland, Islands, Lower Guinea, and Upper Guinea. The Zambia.  Northern Rhodesia section with books about Ethnography, History, and Local history and description. The Angola section with books about History, Local history and description, and Ethnography. The Mozambique section with books about History, Local history and description, and Ethnography. The Namibia.  South-West Africa section with books about Ethnography, History, and Local history and description. The Botswana.  Bechuanaland section with books about Ethnography and History. The Ethnography section. The Malawi.  Nyasaland section with books about Ethnography, History, and Local history and description. The North Africa section with books about History. The Description and travel section. The Lesotho.  Basutoland section with books about History, Local history and description, and Ethnography. The Northwest Africa section. The Swaziland section with books about History, Ethnography, and Local history and description.\n\n[|Entrance||] History of Africa Room entrance",
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
      "description": "There are seven rows of books in this shelf. The Southern Italy section with books about Naples.  Kingdom of the Two Sicilies, Sicily, General, and Sicily and Malta. The Ancient Italy.  Rome to 476 section. The Other cities (non-metropolitan), provinces, etc., A-Z section. The Medieval and modern Italy, 476- section with books about General, History, Antiquities.  Social life and customs.  Ethnography, and Description and travel. The Northern Italy section with books about Venice, Genoa, Milan.  Lombardy, Piedmont.  Savoy, and General. The Central Italy section with books about Rome (Modern city), Tuscany.  Florence, Papal States (States of the Church).  Holy See.  Vatican, and General. The Malta.  Maltese Islands section.\n\n[|Entrance||] History of Italy Room entrance\n[|Next||||||] Ancient Italy.  Rome to 476 shelf",
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
      "description": "There are two rows of books in this shelf. The History section with books about General and By period. The Local history and description section with books about Rome (City) to 476, Regions in Italy, A-Z, Other cities, towns, etc., A-Z, and Regions outside of Italy, A-Z.\n\n[|Previous||] History of Italy shelf",
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
      "description": "There are eight rows of books in this shelf. The History section with books about By period, General, Early and medieval to 1515, and Military, naval, and political history.  Foreign relations. The Local history and description section with books about Paris, Regions, provinces, departments, etc., A-Z, Other cities, towns, etc., A-Z, and North, East, etc. France. The Description and travel section. The General section. The Antiquities.  Social life and customs.  Ethnography section. The Monaco section. The Andorra section. The Modern, 1515- section with books about 21st century.\n\n[|Entrance||] History of France Room entrance",
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
      "description": "There are eight rows of books in this shelf. The History section with books about By period, General, and Military, naval, and political history.  Foreign relations. The Local history and description section with books about States, provinces, regions, etc., A-Z, Berlin, Other cities, towns, etc., A-Z, Bonn, and North and Central, Northeast, etc. Germany. The General section. The Prussia section with books about History, General, Antiquities.  Social life and customs.  Ethnography, and Description and travel. The East Germany section. The Antiquities.  Social life and customs.  Ethnography section. The West Germany section. The Description and travel section.\n\n[|Entrance||] History of Germany Room entrance",
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
      "description": "There are six rows of books in this shelf. The History section with books about By period, General, and Military, naval, and political history.  Foreign relations. The Belgium section with books about Local history and description, History, Antiquities.  Social life and customs.  Ethnography, Description and travel, and General. The Luxembourg section. The General section. The Description and travel section. The Antiquities.  Social life and customs.  Ethnography section.\n\n[|Entrance||] History of Low Countries.  Benelux Countries Room entrance",
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
      "description": "There are seven rows of books in this shelf. The Smaller island groups section with books about Hawaiian Islands.  Hawaii, New Guinea, and Samoan Islands. The Australia section with books about Queensland, Ethnography, New South Wales, History, Victoria, Western Australia, Tasmania.  Van Diemen's Land, South Australia, Australian Capital Territory.  Canberra, Central Australia, Northern Territory of Australia, and Northern Australia. The New Zealand section with books about Ethnography, Local history and description, and History. The History section. The Polynesia (General) section. The Micronesia (General) section. The Melanesia (General) section.\n\n[|Entrance||] History of Oceania (South Seas) Room entrance",
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
      "description": "There are four rows of books in this shelf. The History section with books about House of Romanov, 1613-1917, Soviet regime, 1918-1991, Revolution, 1917-1921, Early to 1613, and 1991-. The Local history and description section with books about Russia (Federation).  Russian S.F.S.R., Ukraine, Soviet Central Asia.  West Turkestan, Southern Soviet Union, Baltic States, Siberia, Kazakhstan.  Kazakh S.S.R., Lithuania, Latvia, Georgia (Republic).  Georgian S.S.R.  Georgian, Estonia, Belarus.  Byelorussian S.S.R.  White Russia, Moldova.  Moldovian S.S.R.  Bessarabia, Turkmenistan.  Turkmen S.S.R.  Turkmenia, Uzbekistan.  Uzbek S.S.R., Azerbaijan.  Azerbaijan S.S.R., Kyrgyzstan.  Kirghiz S.S.R.  Kirghizia, Armenia (Republic).  Armenian S.S.R., and Tajikistan.  Tajik S.S.R.  Tadzhikistan. The Ethnography section. The Regions not limited to one Republic, A-Z section.\n\n[|Entrance||] History of Russia.  Soviet Union.  Former Soviet Republics Room entrance\n[|Next||||||] History of Poland shelf",
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
      "description": "There are three rows of books in this shelf. The History section with books about To 1795, 1795-1918.  19th century (General), 1918-1945, 1945-1989.  People's Republic, and 1989-. The Local history and description section with books about Warsaw (Warszawa), Gdansk (Danzig), and Krakow (Cracow). The Ethnography section.\n\n[|Previous||] History of Russia.  Soviet Union.  Former Soviet Republics shelf",
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
      "description": "There are four rows of books in this shelf. The Antiquities.  Civilization.  Culture.  Ethnography section. The History section. The General section. The Geography section.\n\n[|Entrance||] History of the Greco-Roman world Room entrance",
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
      "description": "There are 10 rows of books in this shelf. The Yugoslavia section with books about Local history and description, History, Antiquities.  Social life and customs.  Ethnography, Description and travel, and General. The Romania section with books about Description and travel, History, Local history and description, General, and Antiquities.  Social life and customs.  Ethnography. The Turkey section with books about History, Description and travel, Antiquities.  Social life and customs.  Ethnography, Local history and description (European Turkey), and General. The Antiquities.  Social life and customs.  Ethnography section. The History.  Balkan War, 1912-1913 section. The Albania section with books about History, Local history and description, Antiquities.  Social life and customs.  Ethnography, Description and travel, and General. The Bulgaria section with books about General, History, Local history and description, Antiquities.  Social life and customs.  Ethnography, and Description and travel. The Thrace section. The General section. The Description and travel section.\n\n[|Entrance||] History of Balkan Peninsula Room entrance",
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
      "description": "There are five rows of books in this shelf. The History section with books about By period, Military, naval, and political history.  Foreign relations, and General. The General section. The Local history and description section with books about Provinces, regions, ets., A-Z, Other cities, towns, etc., A-Z, Madrid, and Northern, Northwestern, Southern Spain. The Description and travel section. The Antiquities.  Social life and customs.  Ethnography section.\n\n[|Entrance||] History of Spain Room entrance\n[|Next||||||] History of Portugal shelf",
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
      "description": "There are five rows of books in this shelf. The Description and travel section. The History section with books about By period, General, and Military, naval, and political history.  Foreign relations. The Local history and description section with books about Other cities, towns, etc., A-Z, Lisbon, and Provinces, regions, etc., A-Z. The Antiquities.  Social life and customs.  Ethnography section. The General section.\n\n[|Previous||] History of Spain shelf",
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
      "description": "There are five rows of books in this shelf. The Antiquities.  Civilization.  Culture.  Ethnography section. The Modern Greece section with books about General, Social life and customs.  Ethnography, Local history and description, History, and Description and travel. The Medieval Greece.  Byzantine Empire, 323-1453 section with books about History, Antiquities.  Social life and customs.  Ethnography, General, and Military history.  Political history.  Empire and papacy. The Ancient Greece section. The History section with books about By period and General.\n\n[|Entrance||] History of Greece Room entrance",
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
      "description": "There are three rows of books in this shelf. The History section. The Ethnography section with books about Slavic peoples (General). The Local history and description section with books about Danube River Valley, Black Sea region, Carpathian Mountain region, and Pannonia.\n\n[|Entrance||] History of Eastern Europe (General) Room entrance",
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
      "description": "There are six rows of books in this shelf. The Hungary section with books about History, Description and travel.  Antiquities.  Ethnography, General, and Local history and description. The Czechoslovakia section with books about History, General.  Description and travel.  Antiquities.  Social, Slovakia, Local history and description of Czech lands, and Ethnography. The Austria.  Austro-Hungarian Empire section. The History section with books about Military, naval, and political history.  Foreign relations, General, and By period. The Local history and description section with books about Vienna, Provinces, regions, etc., and Other cities, towns, etc., A-Z. The Liechtenstein section.\n\n[|Entrance||] History of Austria.  Liechtenstein.  Hungary.  Czechoslovakia Room entrance",
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
      "description": "There are nine rows of books in this shelf. The Norway section with books about General, Local history and description, History, Antiquities.  Social life and customs.  Ethnography, and Description and travel. The History section with books about By period, General, and Military, naval, and political history.  Foreign relations. The Sweden section with books about Local history and description, General, History, Antiquities.  Social life and customs.  Ethnography, and Description and travel. The Finland section with books about Description and travel, History, General, Antiquities.  Social life and customs.  Ethnography, and Local history and description. The Denmark section with books about Local history and description, History, Antiquities.  Social life and customs.  Ethnography, Description and travel, and General. The General section. The Antiquities.  Social life and customs.  Ethnography section. The Iceland section with books about Local history and description, General.  Description and travel, etc., and History. The Description and travel section.\n\n[|Entrance||] History of Northern Europe.  Scandinavia Room entrance",
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
      "description": "There are five rows of books in this shelf. The General section. The History section with books about Military and political history.  Foreign relations, By period, and General. The Local history and description section with books about Alps, Cities, towns, etc., A-Z, Cantons (and cantonal capitals), and Regions, peaks, etc., A-Z. The Antiquities.  Social life and customs.  Ethnography section. The Description and travel section.\n\n[|Entrance||] History of Switzerland Room entrance",
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
      "description": "There are two rows of books in this shelf. The History section. The General section.\n\n[|Entrance||] History of Central Europe Room entrance",
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
      "description": "There are five rows of books in this shelf. The Local history and description section with books about Amsterdam. The History section with books about By period, Military, naval, and political history, etc.  Foreign relations, and General. The Antiquities.  Social life and customs.  Ethnography section. The Description and travel section. The General section.\n\n[|Entrance||] History of Netherlands (Holland) Room entrance",
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
      "description": "There are 11 rows of books in this shelf. The History section with books about General, Military history, Naval history, Diplomatic history.  Foreign and general relations., Historical geography, Historiography, and Political history. The Revolution to the Civil War, 1775/1783-1861 section with books about Slavery in the United States.  Antislavery, By period, General, Political history, Biography (Late eighteenth century), and Collected works of American statesmen. The General section. The Civil War period, 1861-1865 section with books about The Civil War, 1861-1865 and Lincoln's administrations, 1861-April 15, 1865. The Late nineteenth century, 1865-1900 section with books about McKinley's first administration, 1897-1901, Biography, Hayes' administration, 1877-1881, Arthur's administration, September 19, 1881-1885, Grant's administrations, 1869-1877, Cleveland's first administration, 1885-1889, Benjamin Harrison's administration, 1889-1893, Johnson's administration, April 15, 1865-1869, General, Collected works of American statesmen, Cleveland's second administration, 1893-1897, Diplomatic history.  Foreign and general, and Garfield's administration, March 4-September. The The Revolution, 1775-1783 section. The Elements in the population section with books about Afro-Americans. The Later twentieth century, 1961-2000 section with books about Biography (General), Clinton's administrations, 1993-2001, Kennedy's administration, 1961-November 22, 1963, Diplomatic history.  Foreign and general, Carter's administration, 1977-1981, Johnson's administrations, November 22, 1963-1969, Ford's administration, August 9, 1974-1977, Reagan's administrations, 1981-1989, Nixon's administrations, 1969-August 9, 1974, George H.W. Bush's administration, 1989-1993, General, Political history, and Sources and documents. The Twentieth century section with books about General, Theodore Roosevelt's administrations,, 1919-1933.  Harding-Coolidge-Hoover era.  \"The, Taft's administration, 1909-1913, Eisenhower's administrations, 1953-1961, Franklin Delano Roosevelt's administrations,, Wilson's administrations, 1913-1921, Truman's administrations, April 12, 1945-1953, and McKinley's second administration, March 4-. The Colonial history (1607-1775) section with books about By period and General. The General section with books about Political history.\n\n[|Entrance||] United States Room entrance\n[|Next||||||] America shelf",
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
      "description": "There are six rows of books in this shelf. The Indians of North America section with books about Indian tribes and cultures and Indian wars. The Pre-Columbian America.  The Indians section. The Discovery of America and early explorations section with books about Columbus, Post-Columbian period.  El Dorado, and Pre-Columbian period. The North America section. The General section. The Descriptive accounts of America.  Earliest to 1810 section.\n\n[|Previous||] United States shelf\n[|Next||||||] Twenty-first century shelf",
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
      "description": "There are 70 rows of books in this shelf. The Kansas section. The Maryland section. The New Hampshire section. The Illinois section. The Alaska section with books about Bering Sea and Aleutian Islands. The Louisiana section. The Massachusetts section. The Iowa section. The Virginia section. The Tennessee section. The Texas section. The Missouri section. The Wisconsin section. The Colorado section. The Pennsylvania section. The The West.  Trans-Mississippi Region.  Great Plains section. The Oregon section. The Ohio section. The Connecticut section. The Utah section. The New Jersey section. The The South.  South Atlantic States section. The Montana section. The New York section. The Wyoming section. The Minnesota section. The California section. The Mississippi River and Valley.  Middle West section. The Georgia section. The Nevada section. The South Carolina section. The Idaho section. The District of Columbia.  Washington section. The Rocky Mountains.  Yellowstone National Park section. The Florida section. The New England section. The The Northwest section. The New Southwest.  Colorado River, Canyon, and Valley section. The Michigan section. The Pacific Northwest.  Columbia River and Valley. section. The Arkansas section. The Arizona section. The Alabama section. The Oklahoma section. The North Carolina section. The Kentucky section. The Indiana section. The The Lake region.  Great Lakes section. The Mississippi section. The Atlantic coast.  Middle Atlantic States section. The Maine section. The South Dakota section. The Washington section. The New Mexico section. The Missouri River and Valley section. The The territories of the United States (General) section. The Pacific States section. The Vermont section. The Nebraska section. The Rhode Island section. The West Virginia section. The Old Southwest.  Lower Mississippi Valley section. The North Dakota section. The Ohio River and Valley section. The Delaware section. The Old Northwest.  Northwest Territory section. The Gulf States.  West Florida section. The Insular possessions of the United States (General) section. The Central American, West Indian, and other countries section. The Cascade Range section.\n\n[|Entrance||] Latin America.  Spanish America Room entrance\n[|Next||||||] Latin America.  Spanish America shelf",
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
      "description": "There are 17 rows of books in this shelf. The West Indies section. The Caribbean area.  Caribbean Sea section. The Central America section with books about Mayas. The South America section with books about General, Brazil, Colombia, Peru, Argentina, Venezuela, French Guiana, Chile, Bolivia, Uruguay, Paraguay, Guyana.  British Guiana, Ecuador, Falkland Islands, Surinam, and Guiana. The Mexico section. The Guatemala section. The Greater Antilles section with books about Haiti (Island).  Hispaniola, Cuba, Puerto Rico, Jamaica, and Navassa. The Lesser Antilles section with books about Individual islands, British West Indies, Virgin Islands of the United States, Netherlands West Indies.  Dutch West Indies, French West Indies, Leeward islands, Islands along Venezuela coast, and Windward Islands. The Salvador (El Salvador) section. The Bahamas section. The Nicaragua section. The Costa Rica section. The Latin America (General) section. The Belize section. The Panama section with books about Canal Zone.  Panama Canal. The Honduras section. The Bermudas section.\n\n[|Previous||] United States local history shelf\n[|Next||||||] Canada shelf",
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
      "description": "There are 22 rows of books in this shelf. The General section. The Canadian Northwest.  Northwest Territories section. The Ontario section. The British Columbia section. The Saskatchewan section. The Quebec section. The Alberta section. The New Brunswick section. The Yukon section. The Manitoba section. The Nova Scotia.  Acadia section. The Newfoundland section with books about Labrador. The Prince Edward Island section. The Maritime provinces.  Atlantic coast of Canada section. The Arctic regions section. The Rocky Mountains of Canada section. The Nunavut section. The The Labrador Peninsula section. The Mackenzie section. The Keewatin section. The St. Lawrence Gulf, River and Valley (General) section. The Franklin section.\n\n[|Previous||] Latin America.  Spanish America shelf\n[|Next||||||] Mexico shelf",
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
      "description": "There is one row of books in this shelf. The Antiquities.  Indians section.\n\n[|Previous||] Canada shelf\n[|Next||||||] Saint Pierre and Miquelon shelf",
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
      "description": "There are 15 rows of books in this shelf. The Special voyages and travels section. The Travel.  Voyages and travels (General) section with books about Travel and state.  Tourism. The Arctic and Antarctic regions section. The Adventures, shipwrecks, buried treasure, etc. section. The History of geography section. The Philosophy.  Relation to other topics.  Methodology section. The Seafaring life, ocean travel, etc. section. The History of discoveries, explorations, and travel section. The Geographers section. The Toponymy section. The Great cities of the world section. The Aerial geography section. The Historical geography section. The Northern and Southern Hemispheres section. The Tropics (General) section.\n\n[|Entrance||] Maps Room entrance\n[|Next||||||] Atlases shelf",
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
      "description": "There are five rows of books in this shelf. The By region or country section with books about Eastern Hemisphere.  Eurasia, Africa, etc., America.  Western Hemisphere, Oceans (General), and Antarctica. The World atlases.  Atlases of the Earth section. The America.  Western Hemisphere section with books about North America. The Northern and Southern Hemispheres section. The Atlases of the moon, planets, etc. section.\n\n[|Previous||] Geography (General) shelf\n[|Next||||||] Maps shelf",
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
      "description": "There are three rows of books in this shelf. The By region or country section with books about Eastern Hemisphere.  Eurasia, Africa, etc.. The America.  Western Hemisphere section with books about North America. The World.  Earth section.\n\n[|Previous||] Atlases shelf\n[|Next||||||] Globes shelf",
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
      "description": "There are eight rows of books in this shelf. The Games and amusements section with books about Indoor games and amusements, Children's games and amusements, Parties.  Party games and stunts, Parlor magic and tricks, Darts, and Hobbies (General). The Dancing section. The Physical education and training section with books about Gymnastics.  Gymnastic exercises, School and college athletics.  Intramural, Physical education facilities.  Sports facilities, Physical measurements.  Physical tests, etc., and Nudism.  Sunbathing. The Sports section with books about Ball games: Baseball, football, golf, etc., Cycling.  Bicycling.  Motorcycling, Track and field athletics, Water sports: Canoeing, sailing, yachting, scuba, Winter sports: Ice hockey, skiing, bobsledding,, Athletic contests.  Sports events, Coaching, Fighting sports: Bullfighting, boxing, fencing, etc., Automobile travel.  Motoring.  Automobile racing, Wrestling, Shooting.  Archery, Professionalism in sports.  Professional sports (General), Athletic and sporting goods, supplies, etc., Air sports: Airplane flying, kiteflying, bungee jumping, etc., and Umpires.  Sports officiating. The Outdoor life.  Outdoor recreation section with books about Hiking.  Pedestrian tours, Mountaineering, Camping, Caving.  Spelunking, and Orienteering.  Wilderness survival. The Circuses, spectacles, etc. section. The Recreation leadership.  Administration of recreation services section. The Recreational areas and facilities.  Recreation centers section.\n\n[|Entrance||] Recreation.  Leisure Room entrance",
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
      "description": "There are two rows of books in this shelf. The Cartography section with books about Maps.  By region or country, Map drawing, modeling, printing, reading, etc., Collections of maps, globes, etc.  Map libraries, Globe making.  Globes, Cadastral mapping, Projection, World maps, general atlases, etc., Aerial cartography, Statistical mapping, and Cartographers. The Surveys (General) section.\n\n[|Entrance||] Mathematical geography.  Cartography Room entrance",
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
      "description": "There are three rows of books in this shelf. The Ethnology.  Social and cultural anthropology section with books about Ethnic groups and races, Cultural traits, customs, and institutions, Collected ethnographies, Culture and cultural processes, and Applied anthropology. The Physical anthropology.  Somatology section with books about Human evolution, Anthropometry, Man as an animal.  Simian traits versus human traits, Human variation, Race (General), and Medical anthropology. The Prehistoric archaeology section.\n\n[|Entrance||] Anthropology Room entrance",
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
      "description": "There are four rows of books in this shelf. The By region or country section. The By subject section with books about Animals, plants, and minerals, Folklore relating to private life, Medicine.  Folk medicine, Cosmic phenomena, weather lore, Supernatural beings, demonology, fairies, ghosts,, Geographical topics, Occupations, Mythical places, Signs and symbols, Costume, jewelry, and Transportation, travel, commerce, etc.. The Folk literature (General) section. The Folk beliefs, superstitions, etc. (General) section.\n\n[|Entrance||] Folklore Room entrance",
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
      "description": "There are eight rows of books in this shelf. The Costume.  Dress.  Fashion section. The Customs relative to public and social life section. The Customs relative to private life section. The Human body and its parts.  Personal beauty section. The Customs relative to special classes section with books about By occupation and By birth, rank, etc.. The Houses.  Dwellings section. The Customs relative to transportation and travel section. The Churches and church going section.\n\n[|Entrance||] Manners and customs (General) Room entrance",
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
      "description": "There are 13 rows of books in this shelf. The Marine resources.  Applied oceanography section. The Dynamics of the ocean section with books about Currents, Waves, Tides, Ocean circulation, and Water masses and oceanic mixing. The Ocean-atmosphere interaction section. The Marine pollution.  Sea water pollution section. The Oceanography.  By region section. The Estuarine oceanography section. The Underwater exploration section. The Chemical oceanography section. The Marine sediments section. The Physical oceanography section with books about Temperature, Density, and Optical oceanography. The Submarine topography section. The Oceanographic expeditions section. The Seawater section.\n\n[|Entrance||] Oceanography Room entrance",
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
      "description": "There are three rows of books in this shelf. The Hydrology.  Water section with books about Ground and surface waters. The Geomorphology.  Landforms.  Terrain section with books about Coasts, Other natural landforms: Floodplains, caves,, Islands, Mountains.  Orography, Reefs, Slopes, and Climatic geomorphology. The Natural disasters section.\n\n[|Entrance||] Physical geography Room entrance",
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
      "description": "There are four rows of books in this shelf. The Environmental policy section. The Environmental management section. The Environmentalism.  Green movement section. The Environmental education section.\n\n[|Entrance||] Environmental sciences Room entrance",
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
      "description": "There are four rows of books in this shelf. The By region or country section. The Settlements section with books about Cities.  Urban geography and Rural settlements.  Rural geography. The Environmental influences on humans section. The Human influences on the environment section.\n\n[|Entrance||] Human ecology.  Anthropogeography Room entrance",
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
      "description": "There are seven rows of books in this shelf. The Business section with books about Vocational guidance.  Career devlopment, Accounting.  Bookkeeping, Department stores.  Mail order business., Canvassing.  Peddling, Marketing.  Distribution of products, Personnel management.  Employment, Office equipment and supplies, Office management, Industrial psychology, Advertising, Business ethics, Business communication, Purchasing.  Selling.  Sales personnel.  Sales, Secondhand trade, Retail trade, Business mathematics.  Commercial arithmetic, Business records management, Markets.  Fairs, Wholesale trade, Shipment of goods.  Delivery of goods, Shopping centers.  Shopping malls, Warehouses.  Storage, and Black market. The By region or country section. The Boards of trade.  Chambers of commerce. section. The Tariff.  Free trade.  Protectionism section. The Commodities.  Commercial products section. The Commercial geography.  Economic geography section. The Balance of trade section.\n\n[|Entrance||] Commerce Room entrance",
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
      "description": "There are three rows of books in this shelf. The Communism/socialism in relation to special section. The Utopias.  The ideal state section. The Communism: Utopian socialism, collective section.\n\n[|Entrance||] Socialism.  Communism.  Anarchism Room entrance",
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
      "description": "There are 20 rows of books in this shelf. The Industry section with books about Corporations, Cooperation.  Cooperative societies, Industrial policy.  The state and industrial, Small and medium-sized businesses, artisans,, Home labor.  Home-based businesses, Large industry.  Factory system.  Big business, Trade associations, Contracting.  Letting of contracts, Industrialization, Sweatshops, and Rural industries. The Labor.  Work.  Working class section with books about Classes of labor, By region or country, Industrial hygiene. Industrial welfare, By industry or trade, Trade unions.  Labor unions.  Workers', Labor disputes.  Strikes and lockouts, Social insurance.  Social security.  Pension, Labor market.  Labor supply.  Labor demand, Industrial sociology.  Social conditions of, Vocational rehabilitation.  Employment of, Wages, Hours of labor, Labor systems, Industrial relations, Labor policy.  Labor and the state, Industrial arbitration.  Mediation  and, Employee participation in management., Professions (General).  Professional employees, Cost and standard of living, Employers' associations, and Labor in politics.  Political activity of the. The Land use section with books about Real estate business, Land reform.  Agrarian reform, Small holdings.  Peasant proprietors., Communal ownership, Landlord and peasant, Large holdings, Consolidation of land holdings, Nationalization (Agrarian socialism), and Municipal ownership. The Management.  Industrial management section. The Other section. The Special industries and trades section with books about Miscellaneous industries and trades, Mechanical industries, Manufacturing industries, Agricultural industries, Mineral industries.  Metal trade, Chemical industries, Construction industry, Energy industries.  Energy policy.  Fuel trade, and Pharmaceutical industry. The Industrial productivity section. The Work groups.  Team work in industry. section. The Costs section. The Capital.  Capital investments section. The Technological innovations.  Automation section. The Social responsibility of business section. The Agriculture section with books about Utilization and culture of special classes of, Agricultural classes, Cooperative agriculture, Collective farms, Agricultural associations, societies, etc., Government owned and operated farms.  State, Size of farms, Irrigation, International cooperation, Sharecropping, Gleaning, and Reclamation of agricultural land.  Melioration. The Economic growth, development, planning section. The Risk in industry.  Risk management section. The Crisis management.  Emergency management. section. The Delegation of authority.  Decentralization. section. The Standardization.  Simplification.  Waste section. The Competition section. The Location of industry section.\n\n[|Entrance||] Industries.  Land use.  Labor Room entrance",
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
      "description": "There are 11 rows of books in this shelf. The Banking section with books about Special classes of banks and financial, By region or country, Electronic funds transfers, Accounting.  Bookkeeping, Bank mergers, Interest rates.  Interest tables, Insurance of deposits.  Deposit insurance, Bank loans.  Bank credit.  Commercial loans, Bank accounts.  Bank deposits.  Deposit, Acceptances, Banks and the state.  State supervision of, Drafts.  Checks, Bank reserves.  Bank liquidity.  Loan loss, Discount, Data processing, and Bank stocks.  Banking as an investment. The Money section with books about By region or country, Paper money, Precious metals.  Bullion, Counterfeiting, Bimetallism, Legal tender, Small coins, International coinage, and Mints.  Assaying. The Insurance section with books about Fire insurance, Life insurance, Insurance business.  Insurance management, Other insurance, Health insurance, By region or country, Business insurance, Casualty insurance, Accident insurance, Government policy.  State supervision, Government insurance, and Insurance for professions.  Malpractice. The Finance management.  Business finance. section. The Credit.  Debt.  Loans section. The Personal finance section. The Investment, capital formation, speculation section with books about By region or country, Speculation, Stock exchanges, Foreign investments, Investment companies.  Investment trusts., Stockbrokers.  Security dealers.  Investment, and Government securities.  Industrial securities.. The Foreign exchange.  International finance. section. The Trust services.  Trust companies section. The Lotteries section. The Liquidity section.\n\n[|Entrance||] Finance Room entrance",
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
      "description": "There are 12 rows of books in this shelf. The Business cycles.  Economic fluctuations section. The History of economics.  History of economic section. The Income.  Factor shares section with books about Interest, Entrepreneurship.  Risk and uncertainty., and Profit. The Economics as a science.  Relation to other section. The Consumption.  Demand section. The Demography.  Population.  Vital events section. The Capital.  Capitalism section. The Competition.  Production.  Wealth section. The Methodology section with books about Mathematical economics.  Quantitative methods. The Price section. The Welfare theory section. The Value.  Utility section.\n\n[|Entrance||] Economic theory.  Demography Room entrance",
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
      "description": "There are nine rows of books in this shelf. The The family.  Marriage.  Home section with books about Children.  Child development, Aged.  Gerontology (Social aspects)., Divorce, Youth.  Adolescents.  Teenagers, Adulthood, Parents.  Parenthood, Family size, Man-woman relationships.  Courtship.  Dating, Single people, Eugenics, Adultery, Young men and women, Widows and widowers.  Widowhood, Polygamy, Illegitimacy.  Unmarried mothers, Temporary marriage.  Trial marriage., Free love, The state and marriage, Matrimonial bureaus.  Marriage brokerage, The church and marriage, Desertion, Breach of promise, Matrimonial advertisements, and Polyandry. The Women.  Feminism section with books about Women's clubs. The Sexual life section with books about Sexual behavior and attitudes.  Sexuality, Prostitution, Homosexuality.  Lesbianism, Sex instruction and sexual ethics, Bisexuality, Sexual deviations, Masturbation, Transexualism, Emasculation.  Eunuchs, etc., Sadism.  Masochism.  Fetishism, etc., and Transvestism. The Men section. The Sex role section. The Thanatology.  Death.  Dying section. The Erotica section. The Life style section. The Life skills.  Coping skills.  Everyday living section.\n\n[|Entrance||] The Family.  Marriage.  Women Room entrance",
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
      "description": "There are 21 rows of books in this shelf. The Telecommunication industry.  Telegraph section with books about Wireless telegraph.  Radiotelegraphy. The Postal service.  Stamps.  Philately section. The Stage lines section. The Water transportation section with books about Shipping and Waterways. The Air transportation.  Airlines section. The Railroads.  Rapid transit systems section. The Express service section. The Ferries section. The Telephone industry section. The Automotive transportation section. The Traffic engineering.  Roads and highways. section with books about Traffic surveys (General), Bridges, and Tunnels.  Vehicular tunnels. The Urban transportation section. The Messenger service section. The Cellular telephone services industry.  Wireless section. The Freight (General) section. The Radio and television broadcasting section. The Passenger traffic (General) section. The Transportation geography.  Trade routes section. The Artificial satellite telecommunications section. The Signaling section. The Pneumatic service section.\n\n[|Entrance||] Transportation and communications Room entrance",
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
      "description": "There are 12 rows of books in this shelf. The These are obsolete numbers no longer used section. The Groups and organizations section with books about Organizational sociology.  Organization theory and Community. The Social change section. The History of sociology.  History of sociological section with books about Schools of sociology.  Schools of social thought. The Social psychology section with books about Social perception.  Social cognition, Social influence.  Social pressure, and Interpersonal relations.  Social behavior. The Theory.  Method.  Relations to other subjects section. The Culture section. The Social control section. The Social systems section. The Deviant behavior.  Social deviance section. The Social structure section. The Social institutions section.\n\n[|Entrance||] Sociology Room entrance",
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
      "description": "There are 10 rows of books in this shelf. The Revenue.  Taxation.  Internal revenue section with books about By region or country, Administrative fees.  User charges., Income tax, Property tax, Revenue from sources other than taxation, Tax incidence.  Tax shifting.  Tax equity, Inflation and taxation, Progressive taxation, Tax exemption, Direct taxation, Capitation.  Poll tax, Taxation of government property, and Tax revenue estimating. The Public debts section with books about By region or country and Sinking funds.  Amortization. The Customs administration section. The Expenditures.  Government spending section. The Local finance.  Municipal finance section. The Income and expenditure.  Budget section. The By region or country section. The Public accounting.  Auditing section. The History section. The Periodicals.  Serials.  By region or country section.\n\n[|Entrance||] Public finance Room entrance",
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
      "description": "There are three rows of books in this shelf. The By region or country section. The Community centers.  Social centers section. The The church and social problems section.\n\n[|Entrance||] Social history and conditions.  Social problems. Room entrance",
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
      "description": "There are seven rows of books in this shelf. The Clubs.  Clubs and societies for special classes section. The Other societies.  By classes section with books about Religious societies, Race societies, Political and \"patriotic\" societies, Benevolent and \"friendly\" societies and, and Occupation societies. The Freemasons section. The Secret societies section. The Odd Fellows section. The Knights of Pythias section. The Other societies section.\n\n[|Entrance||] Societies: secret, benevolent, etc. Room entrance",
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
      "description": "There are 20 rows of books in this shelf. The Protection, assistance and relief section with books about Poor in cities.  Slums, Special classes, Protection of animals.  Animal rights.  Animal, Special classes.  By race or ethnic group, Immigrants, Animal experimentation.  Anti-vivisection, Mendicancy.  Vagabondism.  Tramps., and Special classes.  By occupation. The Criminology section with books about Crimes and offenses, Crimes and criminal classes, Victims of crimes.  Victimology, Criminal anthropology, and Criminal classes. The Alcoholism.  Intemperance.  Temperance reform section. The Criminal justice administration section with books about Police.  Detectves.  Constabulary, Penology.  Prisons.  Corrections, Gun control, By region or country, Prevention of crime, methods, etc., Private security services, and Social work with delinquents and criminals. The By region or country section. The Social service.  Social work.  Charity section. The Special classes section with books about Children, Young adults.  Youth.  Teenagers, Aged, and Women. The Drug habits.  Drug abuse section. The Women and charity section. The Tobacco habit section. The Emergency management section with books about Relief in case of disasters. The Free professional services section. The Refugee problems section. The International social work section. The Accidents.  Prevention of accidents section. The The church and charity section. The Degeneration section. The Life saving section. The Self-help groups section. The Charity fairs, bazaars, etc. section.\n\n[|Entrance||] Social pathology.  Social and public welfare. Room entrance",
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
      "description": "There are three rows of books in this shelf. The By region or country section. The Special topics section. The Economic geography of the oceans (General) section.\n\n[|Entrance||] Economic history and conditions Room entrance",
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
      "description": "There are four rows of books in this shelf. The Theory and method of social science statistics section. The Statistical services.  Statistical bureaus section. The Statistical data section with books about Universal statistics and By region or country. The Registration of vital events.  Vital section.\n\n[|Entrance||] Statistics Room entrance",
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
      "description": "There are five rows of books in this shelf. The Urban groups.  The city.  Urban sociology section with books about Urbanization.  City and country, Regional planning, Suburban cities and towns, City planning, Urban renewal.  Urban redevelopment, Metropolitan areas, Regional economics.  Space in economics, The city as an economic factor.  City, City population, Garden cities.  \"The city beautiful\", Mental and moral life, Effect of city life, and Recreation.  Amusements. The Races section. The Classes section with books about Slavery, Caste system, Classes arising from occupation, Classes arising from birth, Serfdom, Freedmen, and Origin of social classes. The Human settlements.  Communities section. The Rural groups.  Rural sociology section.\n\n[|Entrance||] Communities.  Classes.  Races Room entrance",
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
      "description": "There is one row of books in this shelf. The Organs and functions of government section with books about Legislation.  Legislative process.  Law-making, Executive.  Heads of state, and Parliamentary government.\n\n[|Entrance||] Political institutions and public administration Room entrance\n[|Next||||||] Political institutions and public administration shelf",
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
      "description": "There are two rows of books in this shelf. The General.  Comparative government section. The Public administration section with books about Political parties and Civil service.\n\n[|Previous||] General.  Comparative government shelf",
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
      "description": "There are 13 rows of books in this shelf. The Modern state section with books about Thomas Paine. The Purpose, functions, and relations of the state section. The Forms of the state section. The Nationalism.  Nation state section. The Ancient state section. The Political geography section. The Symbolism section. The Consensus.  Consent of the governed section. The Sovereignty section. The Medieval state section. The Islamic state section. The Patriotism section. The Oriental state section.\n\n[|Entrance||] Political theory.  The state.  Theories of the state Room entrance",
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
      "description": "There are two rows of books in this shelf. The United States section. The Confederate States of America section.\n\n[|Entrance||] Political institutions and public administration Room entrance\n[|Next||||||] United States shelf",
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
      "description": "There are two rows of books in this shelf. The Government.  Public administration section with books about Executive branch, Congress.  Legislative branch, and Capital.  Public buildings.  Government. The Political rights.  Practical politics section with books about Suffrage, Electoral system, and Citizenship.\n\n[|Previous||] Political institutions and public administration shelf",
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
      "description": "There are 16 rows of books in this shelf. The Europe section. The United States section. The Executive branch.  Mayor section. The South America section. The History section. The Africa section. The Asia section with books about Islamic countries and Arab countries. The Central America section. The West Indies.  Caribbean Area section. The Mexico section. The Canada section. The Elections.  Local elections.  Municipal elections section. The Australia.  New Zealand.  Pacific Ocean islands section. The Local government other than municipal section. The Indian Ocean islands section. The Atlantic Ocean islands section.\n\n[|Entrance||] Local government.  Municipal government Room entrance",
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
      "description": "There are six rows of books in this shelf. The Colonizing nations section. The History section. The Emigration and immigration.  International section with books about Canada, Latin America, etc., United States, Europe, Asia, Immigration, Africa, Emigration, History, Australia.  New Zealand, Pacific Ocean islands, Arab countries, Periodicals.  Serials, Atlantic Ocean islands, and Indian Ocean islands. The Colonies and colonization section. The Administration section. The Societies section.\n\n[|Entrance||] Colonies and colonization.  Emigration and Room entrance",
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
      "description": "There are eight rows of books in this shelf. The Theory.  Relations to other subjects section. The History section. The Congresses section. The Dictionaries and encyclopedias section. The Study and teaching.  Research section. The Collective biography of political scientists section. The Periodicals section. The Societies section.\n\n[|Entrance||] Political science (General) Room entrance",
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
      "description": "There are seven rows of books in this shelf. The Diplomacy section. The Collections, cases, etc.  By country section. The International arbitration, organization, etc. section. The International law section. The Foreign relations section. The Collections.  Documents.  Cases section. The Codification of international law section.\n\n[|Entrance||] International law, see JZ and KZ Room entrance",
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
      "description": "There are 32 rows of books in this shelf. The Switzerland section. The General section. The France section. The Russia (Federation) section. The Great Britain section with books about Scotland. The Poland section. The Scandinavia.  Northern Europe section. The Germany section. The Spain section. The Ukraine section. The Italy section. The Soviet Union.  Russia.  Former Soviet Republics section. The Czech Republic.  Czechoslovakia section. The Norway section. The Greece section. The Austria-Hungary.  Austria.  Hungary section. The Balkan States section. The Finland section. The Portugal section. The Sweden section. The Belgium section. The Netherlands section. The Denmark section. The Estonia section. The Belarus section. The Lithuania section. The Ireland section. The Slovakia section. The Iceland section. The Moldova section. The Latvia section. The Greenland section.\n\n[|Entrance||] Political institutions and public administration (Europe) Room entrance",
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
      "description": "There are 11 rows of books in this shelf. The Scope of international relations. Political theory. section with books about Scope of international relations with regard to, Diplomatic and consular service, and By period. The Relation to other disciplines and topics section. The Promotion of peace.  Peaceful change section with books about Pacific settlement of international disputes, International security.  Disarmament.  Global survival, Societies, associations, academies, institutes, etc.,, and Congresses and conferences. The International organizations and associations section with books about Intergovernmental organizations.  IGOs and Political non-governmental organizations.. The The armed conflict.  War and order section. The Sources section with books about By region or country. The Non-military coercion section. The State territory and its parts section with books about International waters and Boundaries. The Societies, associations, academies, institutes, etc., section. The Neutrality.  Non-participation in wars.  Norms of section. The Humanitarian aspects of war section.\n\n[|Entrance||] International relations Room entrance",
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
      "description": "There are five rows of books in this shelf. The West Indies.  Caribbean Area section. The Central America section. The South America section. The Mexico section. The Canada section.\n\n[|Entrance||] Political institutions and public administration Room entrance",
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
      "description": "There are three rows of books in this shelf. The United States section with books about Presidents' messages and other executive. The Other regions and countries section. The Gazettes section.\n\n[|Entrance||] General legislative and executive papers Room entrance",
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
      "description": "There are five rows of books in this shelf. The Asia section. The Africa section. The Australia.  New Zealand.  Pacific Ocean islands section. The Middle East section with books about Arab countries and Islamic countries. The Atlantic Ocean islands section.\n\n[|Entrance||] Political institutions and public administration (Asia, Room entrance",
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
      "description": "There are 80 rows of books in this shelf. The Persons section with books about Domestic relations.  Family law and General.  Status.  Capacity. The Courts.  Procedure section with books about Civil procedure, Court organization and procedure, and Administration of justice.  Organization of the judiciary. The Insolvency and bankruptcy.  Creditors' rights section. The Law reports and related materials section. The Associations section with books about Corporations.  Juristic persons, General, and Unincorporated associations. The Intellectual property section with books about Patent law and trademarks, Copyright, General, Author and publisher.  The publishing contract, and Design protection. The Property section with books about Real property.  Land law, Personal property, and General.  Ownership. The Succession upon death section. The Criminal law section. The General and comprehensive works section. The Arbitration and award.  Commercial arbitration section. The Public property.  Public restraints on private property section with books about Homesteads, Roads, Public land law, Housing.  Slum clearance.  City redevelopment, Regional and city planning.  Zoning.  Building, Government property, Water resources.  Watersheds.  Rivers.  Lakes., Conservation of natural resources, Eminent domain, Indian lands, Bridges, Weather control.  Meteorology.  Weather stations, Public works, and General. The Contracts section with books about General and comprehensive works, Particular contracts, General principles, and Government contracts. The Conflict of laws section. The Concepts applying to several branches of law section. The Trusts and trustees section. The Constitutional law section with books about Public policy.  Police power, Church and state, Individual and state, Constitutional history of the United States, Organs of the government, General works, Foreign relations, Separation of powers.  Delegation of powers, National territory.  Noncontiguous territories, Sources, Structure of government.  Federal and state, State constitutions (Collections), Works on legislative history of the Constitution, Texts of the Constitution, Amending process, Sources and relationships of law, and Particular amendments. The Civil trials section. The Criminal trials section. The Criminal procedure section. The Indians section. The Social legislation section with books about Labor law, Social insurance, Public welfare.  Public assistance, Human reproduction, General, and Disaster relief. The Legal education section. The Torts section. The Legal composition and draftsmanship section. The Public safety section with books about Weapons.  Firearms.  Munitions, Hazardous articles and processes, Fire prevention and control.  Explosives, and Accident control. The History section. The Public finance section with books about National revenue, State and local finance, Budget.  Government expenditures, Money.  Currency.  Coinage, General, Expenditure control.  Public auditing and accounting, and Public debts.  Loans.  Bond issues. The Criticism. Legal reform. General administration of justice section. The National defense.  Military law section with books about The military establishment.  Armed Forces, Comprehensive.  General, War veterans, Other defense and intelligence agencies, and Civil defense. The Jurisprudence and philosophy of American law section. The The legal profession section. The Education section. The Control of social activities section with books about Sports.  Prizefighting.  Horse racing, Lotteries, Amusements, and General. The Juvenile criminal law and procedure section. The Collections section. The Regulation of industry, trade, and commerce. section with books about Trade and commerce, The professions, Transportation and communication, Manufacturing industries, Trade regulation.  Control of trade practices, General and comprehensive, Public utilities, Primary production.  Extractive industries, Food processing industries, and Construction and building industry.  Contractors. The Public health.  Sanitation section. The Negotiated settlement.  Compromise section. The General principles and concepts section. The Administrative organization and procedure section. The Legal research.  Legal bibliography section. The Estate planning section. The Medical legislation section with books about Veterinary medicine and hygiene and Eugenics.  Sterilization. The Food.  Drugs.  Cosmetics section. The Local government section. The Unfair competition section. The Law dictionaries.  Words and phrases section. The Bibliography section. The Science and the arts.  Research section with books about The arts, General, Libraries and library services, Historical buildings and monuments, Particular branches and subjects, Museums and galleries, and Archives.  Historical documents. The Form books section. The Agency section. The Community legal services.  Legal aid section. The Congressional documents section. The Equity section. The Directories section. The Civil service.  Government officials and employees section. The Lawyer referral services section. The Judicial statistics section. The Economic policy section. The Restitution.  Quasi contracts.  Unjust enrichment section. The Common law in the United States section. The Statutes and administrative regulations section. The Legal maxims.  Quotations section. The Encyclopedias section. The Alcohol.  Alcoholic beverages.  Prohibition section. The Government measures in time of war, national emergency, section. The Police and power of the police section. The Uniform state law section. The Society and bar association journals section. The Commemorative medals section. The Law reporting section. The Law societies section. The Prevention of cruelty to animals section. The Compensation to victims of crime.  Reparation section. The Retroactive law.  Intertemporal law section. The Congresses section. The Periodicals section. The National emblem.  Flag.  Seal.  Seat of government. section. The Patriotic customs and observances section.\n\n[|Entrance||] Law of the United States (Federal) Room entrance",
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
      "description": "There are 35 rows of books in this shelf. The Civil law section with books about Persons, Property, Obligations, Trusts and trustees, and Succession upon death. The Public property.  Public restraint on private section. The Constitutional law section with books about Individual and state, The state, Organs of government, Church and state, Constitutional principles, Foreign relations administration, National territory, Form and structure of government, Constitutional history, Constitutional courts and procedure, and Public policy. The Regulation of industry, trade, and commerce. section with books about Trade regulations.  Control of trade practices, Trade and commerce, Professions and occupations, Transportation and communication, Primary production.  Extractive industries, Manufacturing industries, Food processing industries, and Public utilities. The Courts.  Procedure section with books about Court organization and procedure and Civil procedure. The Economic constitution, policy, planning, and section. The Control of social activities section. The Commercial law section with books about Commercial contracts, Business associations, Insolvency and bankruptcy.  Creditors' rights, Maritime law, The merchant.  Business enterprises, Insurance, and Commercial agency. The Social legislation section with books about Labor law, Public welfare.  Public assistance, and Social insurance. The Environmental law section. The Intellectual property section with books about Copyright and Industrial property. The Medical legislation section. The Criminal law and procedure section with books about Criminal procedure, Criminal law, and Juvenile criminal law and procedure. The Negotiated settlement.  Compromise section. The Public finance section with books about National revenue and State and local finance. The Public health section. The Legal systems compared section. The Administrative law section with books about The administrative process and Administrative organization. The Arbitration and award section. The National defense.  Military law section with books about The military establishment.  Armed forces and Military criminal law and procedure. The Public law section. The Concepts applying to several branches of law section. The Science and arts.  Research section. The Private law section with books about Unification. The Education section. The Civil service.  Government officials and section. The Food.  Drugs.  Cosmetics section. The Compensation to victims of crime.  Reparation section. The Government measures in time of war, national section. The Public safety section. The Trials section. The Colonial law section. The Veterinary laws.  Veterinary medicine and section. The Alcohol.  Alcoholic beverages section. The Regional divisions.  Interregional comparative section.\n\n[|Entrance||] Comparative law.  International uniform law Room entrance\n[|Next||||||] Jurisprudence.  Philosophy and theory of law shelf",
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
      "description": "There are 10 rows of books in this shelf. The Schools of legal theory section with books about Natural law, Sociology of law.  Sociological jurisprudence, Positivism, and Historical jurisprudence. The Universality and non-universality of law section. The The concept of law section. The Methodology section. The Relation of law to other topics section. The Interpretation and construction of law.  Lacunae section. The Classification of law.  Typology section. The Sources of law section. The Acts and events section. The History section.\n\n[|Previous||] Comparative law.  International uniform law shelf\n[|Next||||||] Miscellany shelf",
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
      "description": "There are 14 rows of books in this shelf. The Obligations section with books about Contracts, Torts, and Restitution.  Quasi contracts.  Unjust. The Civil procedure.  International civil procedure section. The Commercial law section with books about Commercial contracts, Maritime law, Insolvency and bankruptcy.  Creditors' rights, Insurance, and Business associations.  Business corporations. The Persons section with books about Domestic relations.  Family law, Natural persons, and Juristic persons.  Associations. The Arbitration and award section. The Property section. The Succession upon death section. The Choice of law section. The International unification, approximation, and section. The Intellectual property section with books about Copyright and Industrial property. The Social legislation section. The Retroactive law.  Intertemporal law section. The Trust and trustees section. The Juristic acts section.\n\n[|Previous||] Miscellany shelf\n[|Next||||||] The legal profession shelf",
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
      "description": "There are nine rows of books in this shelf. The Early/Medieval development to ca. 1900. section with books about Publicists.  Writers on public international law and Peace of Westphalia to the French. The The international legal community and members section with books about Subjects of the law of nations. The International law of peace and peace enforcement section with books about Pacific settlement of international, The system of collective security, and Military pact systems for collective self-defense. The Sources.  Fontes juris gentium section with books about By region or country, Judicial decisions and arbitral awards, and Treaties and other international agreements. The 20th century section with books about Publicists.  Writers on public international law. The Enforced settlement of international disputes section with books about Law of war and neutrality.  Jus belli, Non-military coercion, and Threat of force. The Trials section with books about Trials of international crimes. The Theory and principles section with books about Domain of the law of nations. The Societies, etc. section with books about National.\n\n[|Entrance||] Law of nations Room entrance\n[|Next||||||] Law of nations shelf",
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
      "description": "There are two rows of books in this shelf. The Law of nations section. The International criminal law and procedure section with books about International criminal law, International criminal courts, and Victims of crimes.\n\n[|Previous||] Law of nations shelf",
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
      "description": "There are 71 rows of books in this shelf. The General and comprehensive works section. The Control of social activities section with books about Sports.  Prizefighting.  Horseracing, Lotteries.  Games of chance.  Betting, and Amusements. The Regulation of industry, trade, and commerce. section with books about The professions, General.  Comprehensive, Construction and building industry.  Contractors, Transportation and communication, Trade regulation.  Control of trade practices, Food processing industries.  Agricultural, Public utilities, Trade and commerce, Primary production.  Extractive industries., and Manufacturing industries. The Contracts section with books about Particular contracts, Government contracts.  Public contracts., General principles, and General and comprehensive works. The Torts (Extracontractual liability) section. The Constitutional law section with books about History, Constitutional principles, Individual and state, General works, Organs of the government, Control of individuals, and Foreign relations. The Trials section with books about Criminal trials and judicial investigations and Civil trials. The Common law section. The Law reports and related materials section. The National defense.  Military law section with books about Comprehensive.  General, The military establishment.  Armed Forces, Civil defense, and War veterans. The Medical legislation section. The Criminal procedure section. The Courts.  Procedure section with books about Administration of justice.  Courts and procedure, Civil procedure, Administration of justice.  Courts and procedure, and History. The Collections section. The Law of Wales section. The Persons section with books about General.  Status.  Capacity and Domestic relations.  Family law. The Local government section. The Administrative organization and procedure section. The Social legislation section with books about Public welfare.  Public assistance.  Poor laws, Labor law, and Social insurance. The Conflict of laws section. The History section. The Ecclesiastical law.  Csanon law of the Church of section. The Property section with books about Real property.  Land law, Personal property, and General.  Ownership.  Possession. The Associations section with books about Corporations.  Juristic persons and Unincorporated associations. The Public health.  Sanitation.  Environmental pollution section. The The legal profession section. The Law reporting.  Law reporters section. The Community legal services.  Legal aid section. The Public finance section with books about General.  History, Expenditure control.  Public auditing and accounting, Local finance, National revenue, Public debts.  Loans.  Bond issues, Money.  Currency.  Banknotes.  Coinage, Foreign exchange regulations, and Budget.  Government expenditures. The Education section. The Criminal law section. The Public safety section with books about Weapons.  Firearms.  Munitions, Hazardous articles and processes, and Fire prevention and control.  Explosives. The Legal research.  Legal bibliography section. The Constitutional and administrative law section. The Criticism. Legal reform. General administration section. The Law dictionaries.  Words and phrases section. The Food.  Drugs.  Cosmetics section. The Trusts and trustees section. The Science and the arts.  Research section with books about Archives.  Historical documents, Libraries, Performing arts, and Museums and galleries. The Insolvency and bankruptcy.  Creditors' rights section. The Local laws section with books about Cities, boroughs, and towns, etc., England, and Wales. The Succession upon death section. The Arbitration and award.  Commercial arbitration section. The Equity section. The Legislation section with books about Statues, Subordinate (Delegated legislation), and Prerogative legislation. The Legal maxims.  Quotations section. The Legal education section. The Commonwealth and Empire section. The General principles and concepts section. The Veterinary laws.  Veterinary hygiene section. The Directories section. The Concepts applying to several branches of law section. The Agency section. The Form books section. The Jurisprudence and philosophy of English law section. The Decorations of honor.  Awards of honor. section. The Private (Civil) law section. The Law societies section. The Legal composition and draftsmanship section. The Bibliography section. The Restitution.  Quasi contracts.  Unjust enrichment section. The National emblem.  Seals section. The Government measures in time of war, national emergency, section. The Alcohol.  Alcoholic beverages.  Liquor laws section. The Encyclopedias section. The Prevention of cruelty to animals section. The Judicial statistics section. The Compensation to victims of crime.  Reparation section. The Economic policy.  Economic planning section. The Congresses section. The Estate planning section.\n\n[|Entrance||] Law of England and Wales Room entrance",
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
      "description": "There are four rows of books in this shelf. The History of law section with books about By period. The Regional division.  Subregions section. The Constitutional law section. The Public law section.\n\n[|Entrance||] Russia, Soviet Union Room entrance",
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
      "description": "There are 17 rows of books in this shelf. The Schools of thought. Islamic legal schools. Madh\u0101hib section. The Us.\u016bl al-fiqh. Jurisprudence and theory of law. Science of section. The Fur\u016b\u02bb al-fiqh. Substantive law. Branches of law section with books about Particular genres, Mu\u02bb\u0101mal\u0101t, Ah.w\u0101l shakhs.\u012byah, Criminal law and procedure, Courts and procedure, Government measures in time of war, national emergency,, Public finance, General concepts, Military law, Public law. The state and Islam, Constitution of the state. Constitutional law, Social laws and legislation, Cultural affairs, Medical legislation, Economic law, Government and administration. Siy\u0101sah. Administrative, Labor laws and legislation, Police and public safety, Public health, Civil service. Employees of communal agencies, Public property. Government property, Intellectual and industrial property, Environmental law, Transportation and communication, Birth control. Family planning, Professions. Intelligentsia, and Animal protection. Animal welfare. Animal rights. The Observances and practice of Islam section. The History, development and application of Islamic law section. The Biography section. The Law reform. Criticism. Tanz.\u012bm section. The Congresses. Conferences section. The General works section. The Legal education. Study and teaching section. The Conflict of laws. Tan\u0101zu\u0313 al-qaw\u0101n\u012bn section. The Bibliography section. The Encyclopedias. Dictionaries section. The Directories section. The Legal research section. The Maxims. Quotations section. The Monographic series section.\n\n[|Entrance||] Islamic law.  Shar\u012b\u02bbah.  Fiqh Room entrance",
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
      "description": "There are 26 rows of books in this shelf. The Sources section. The General works section. The Church and state relationships. De relationibus inter section. The Judiciary. Ecclesiastical courts and procedure. De section. The Penal (Criminal) law. De lege poenali section. The Sacraments. Administration of sacraments. De sacramentis section. The Church property. Church economics and finance. section. The Official acts of the Holy See section. The Canonical jurisprudence. Canonical science section. The Constitution of the Church section. The Decisions of ecclesiastical tribunals and courts, and related section. The Ius ecclesiasticum privatum section. The Proverbia. Legal maxims. Brocardica juris. Regulae juris section. The Formularies. Clauses and forms. Formularia section. The Bibliography section. The Legal education. Study and teaching section. The General concepts and principles, A-Z section. The Encyclopedias. Law dictionaries. Terms and phrases. section. The Trials section. The Social work of the Church. Public welfare. Caritas section. The Other acts of divine worship. De ceteris actibus Cultus Divini section. The Influence of other legal systems on Canon law section. The Legal research. Legal bibliography. Methods of bibliographic section. The Canon law and other disciplines or subjects section. The The teaching office of the church. Magisterium. De ecclesiae section. The Auxiliary sciences section.\n\n[|Entrance||] History of canon law Room entrance",
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
      "description": "There are four rows of books in this shelf. The Concepts and principles section with books about Mare liberum doctrine and Mare clausum doctrine. The Maritime boundaries section with books about Continental shelf. The Treaties and other international agreements section. The Intergovernmental congresses and conferences section.\n\n[|Entrance||] Law of the sea Room entrance",
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
      "description": "There are two rows of books in this shelf. The The European Communities.    Community law section with books about Organization law.    Constitution of the European, Courts and procedure, Economic law, Intellectual and industrial property, Labor law, Medical legislation, Financial provisions, Transportation.    Common transportation policy, Environmental law, Administrative law and process, Social legislation, Regulation of industry, trade, and commerce, Criminal law, Communication.    Mass media.    Information, Public health, Commercial law, Theory and methodology of uniform law, Civil law, Police and public safety, Public property.    Public restraint on private property, Criminal courts and procedure, Private law, Cultural affairs, Military law.    Defense, Civil service, Official acts, Professions, and Community measures in time of war, emergency, or. The Regional organization other than the European section with books about Western European Union, European Fund, European Payment Union, Benelux Economic Union, European Free Trade Association, Council for Mutual Economic Assistance (COMECON), and Council of Europe.\n\n[|Entrance||] Regional organization and integration (Europe) Room entrance",
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
      "description": "There are five rows of books in this shelf. The By period section. The Sources section. The Legal profession section. The Provinces (Sheng) section. The Legal education section.\n\n[|Entrance||] Law of China Room entrance",
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
      "description": "There are 36 rows of books in this shelf. The Courts and procedure section with books about The legal profession, The administration of justice, Civil procedure, Noncontentious jurisdiction, and Courts. The Environmental law section. The Intellectual and industrial property section with books about Patent law and trademarks, Copyright, Unfair competition, and Author and publisher. The Philosophy, jurisprudence, and theory of European law section. The Cultural affairs.    Education section. The Civil law section with books about Obligations.    Contracts, Concepts and principles, Law of things.    Property, Family law.    Domestic relations, and Inheritance and succession. The Regional divisions.    Subregions section with books about Northern Europe.    Scandinavia, Eastern Europe, Southern Europe, Central Europe, and Southeastern Europe.    Balkan Peninsula. The Commercial law section with books about Banking.    Stock exchange, Business associations, Maritime law, Insurance law, Negotiable instruments, and Freight forwarders and carriers. The Criminal law section with books about Individual offenses and Punishment. The Public health.    Medical legislation section. The Constitutional law section with books about Individual and state, Constitutional history.    Feudal law, Organs of government, and Foreign relations. The Criminal courts and procedure section with books about Execution of sentence and Victimology. The Labor law section with books about Labor contract and employment, Collective bargaining and labor agreements, Wages, Labor-management relations, and Protection of labor. The Economic law section with books about Regulation of industry, trade, and commerce, Government control and policy, Competition rules, and Energy policy.    Power supply. The Communication.    mass media section. The Administrative law section. The Social insurance section with books about Social security, Workers compensation, Health insurance, and Unemployment insurance. The Public property.    Domaine public.    Public restraint on section. The Private international law section. The Police and public safety section. The Transportation section. The Press law section. The Public finance section with books about National revenue, Tax and customs crimes and delinquency, Money, Foreign exchange regulation, Tax and customs courts and procedure, State and local finance, and International capital movement regulation. The Social legislation section with books about European Social Charter and Social reform and policies. The Public law.    The State section. The Insolvency.    Bankruptcy section. The Secular ecclesiastical law section. The National defense.    Military law section. The Civil service section. The Legal systems compared section. The Government measures in time of war, national section. The Private law section. The Professions section. The Birth control.    Family planning.    Population control section. The Social services.    Public welfare section. The Social courts and procedure section.\n\n[|Entrance||] Regional comparative and uniform law (Europe) Room entrance",
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
      "description": "There are five rows of books in this shelf. The Sources section with books about Pre-Justinian periods, Consilia.    Legal (advisory) opinions, Post-Justinian periods, Justinian, 527-565 A.D., and Orient.    Byzantine empire. The Public law section with books about Constitutional law, Administrative organization and process, Public finance, Foreign relations.    Ius gentium, The military establishment, and State and religion. The Criminal law and procedure section. The Private law and procedure section with books about Civil procedure.    Arbitration.    Bankruptcy, Persons, Family law, Obligations.    Contracts, Law of things.    Res, and Inheritance.    Succession upon death. The Roman law compared with other legal systems section.\n\n[|Entrance||] Roman Law Room entrance",
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
      "description": "There are 51 rows of books in this shelf. The Courts and procedure section with books about Courts, Civil procedure, Procedure in general, Negotiated settlement, Minist\u00e8re de la justice, and Non-contentious jurisdiction.    Ex parte. The The legal profession section. The Philosophy and theory of French law section. The Commercial law section with books about Commercial maritime law, Commercial transactions and contracts, Business associations, Insolvency, Insurance, Commercial courts and procedure, Business interprises and merchants, Chambers of commerce, and Commercial register. The Administrative law section with books about Administrative courts and procedure, Civil service.    Local civil service, Administrative organization.    Administrative, Administrative process.    Administrative acts., and Government liability. The Constitutional law section with books about Organs of government, Individual and state, Secular ecclesiastical law, Constitutional history, and Constitutional principles. The Civil law section with books about Property, Security, Persons, Choses in action.    Obligations, Evidence, Succession upon death, Juristic facts and acts, and Gratuities. The Criminal law section with books about Criminal offense, Individual offenses, Punishment.    Measures of rehabilitation and, and Criminal liability.    Guilt. The Transportation section with books about Water transportation.    Administrative maritime, Air law.    Civil aviation, Transport by land.    Road transport, and Railroads. The Medical law section with books about Biomedical engineering, The health professions.    Hospitals, medical, and Pharmaceutical law.    Drugs. The Social legislation section with books about Labor law, Social services.    Public welfare, and Social insurance.    Social security. The Particular industrial and trade lines section with books about Building and construction industry, Food processing industries.    Food products, Publishing.    Printing.    Book trade, Power production and supply.    Energy policy, and Manufacturing industries. The Intellectual and industrial property section with books about Patent law, Copyright, and Author and publisher. The Environmental law.    Environmental pollution section. The Economic law section with books about Government control and policy and Regulation of industry and trade. The Public property.    Public restraint on section with books about Water resources, Public servitudes, Eminent domain.    Expropriation., Roads and highways, and Public land law. The Trials section. The History section with books about Biography, Sources, and Auxiliary sciences. The Works on diverse aspects of a special subject section. The Primary production section with books about Agricultural law, Mining.    Quarrying, and Fisheries and fishing. The Criminal courts and procedure section with books about Execution of sentence, Victimology, Trial.    Proceedings at juvenile courts, and Court organization. The Police and public safety section with books about Control of social activities, Public safety, and Disaster control. The Public health section with books about Burial and cemetary laws, Mental health, and Contagious and infectious diseases. The Legal research.    Legal bibliography section. The Private international law section with books about Status of aliens in France, Conflict of laws, Conflict of jurisdictions, and Nationality. The Regional planning.    City planning and section. The Private law section. The Overseas France section. The Addresses, essays, lectures section. The Communication.    Mass media section with books about Press law, Radio and television communications, and Information services. The Public finance section with books about National revenue, Budget.    Government expenditures, Tax and customs crimes and delinquency, and Departmental and communal finance.    Local. The Public works section. The Public law section with books about The state. The Legal education section. The Cultural affairs section with books about Education, Science and the arts.    Public collections., and Educational, scientific, and cultural. The Professions section. The Legislation section. The Law dictionaries.    Terms and phrases section. The Encyclopedias section. The General works.    Treatises section. The National defense.    Military law section with books about The armed forces, Military criminal law and procedure, and Civil defense. The By period section. The Veterinary medicine and hygiene section. The Concepts applying to several branches of law section. The Bibliography section. The Popular works.    Civics section. The Government measures in time of war, national section. The Judicial statistics section. The Law reform.    Criticism section. The Court decisions and related materials section. The Directories section.\n\n[|Entrance||] Law of France Room entrance",
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
      "description": "There are 29 rows of books in this shelf. The Canonical jurisprudence. Theory and science of canon law section. The General norms and principles. De normis generalibus section. The The codes of canon law section. The Church property. Church economics and finance section. The Constitution of the Church section. The Sacraments. Administration of sacraments. De sacramentis section. The Sanctions in the Church. Criminal law. De sanctionibus in section. The General works section. The Trials section. The Legal education. Study and teaching section. The Courts and procedure. De processibus section. The The teaching office of the Church. Magisterium. De section. The Encyclopedias section. The Law reform and policies. Criticism section. The Church and state relationships. De relationibus inter section. The Official acts of the Holy See section. The Local Church government section. The Bibliography section. The Decisions of ecclesiastical tribunals and courts, and related section. The Conferences. Symposia section. The Social work of the Church. Public welfare. Caritas section. The Canon law and other disciplines or subjects section. The Collections. Compilations. Selections section. The Dictionaries. Terms and phrases. Vocabularies section. The Influence of other legal systems on canon law section. The Other acts of divine worship. De ceteris actibus Cultus Divini section. The Societies. Associations. Academies, etc. section. The Academies. Institutes section. The Works on diverse aspects of a particular subject and falling section.\n\n[|Entrance||] Law of the Roman Catholic Church. The Holy See Room entrance",
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
      "description": "There are 50 rows of books in this shelf. The Constitutional law section with books about Constitutional history, Federalism.  Intergovernmental relations, Organs of government.  Representation, Individual and state, Sources.  Constitutions, Sources and relationships of the law, Constitutional courts and procedure, Constitutional principles, and Foreign relations. The Civil law section with books about Concepts and principles, Domestic relations.  Family law, Obligations, Property.  Law of things, and Inheritance.  Succession upon death. The Commercial law section with books about Commercial transactions, Business associations, Commercial registers, and Merchant and business enterprise. The Cultural affairs section with books about Education, Science and the arts.  Public collections, and Physical education.  Sports. The Social legislation section with books about Social insurance, Social services.  Public welfare, and Social courts and procedure. The Criminal law section with books about Criminal offense, Individual offenses, and Punishment. The Criminal courts and procedure section with books about Trial.  Proceedings at juvenile courts, Execution of sentence, Victimology, Court organization, and Administration of criminal justice. The Philosophy, jurisprudence, and theory of German law section. The Medical legislation section with books about Biomedical engineering, The health professions.  Hospitals, institutions,, Eugenics.  Sterilization and castration, and Veterinary medicine. The Public property.  Public restraint on private property section with books about Public land law, Roads and highways.  Water resources.  National, and Government property. The Economic law section with books about Regulation of industry, trade, and commerce, Energy policy.  Power supply, Government control and policy, Economic constitution, Criminal provisions, and Corporate representation of industry, trade, and. The Judicial statistics section. The Public health section with books about Drug laws and Contagious and infectious diseases. The Police and public safety section with books about Public safety, Control of individuals.  Control of social activities., Police measures.  Police information system, Police magistrates, and Police force. The Communication.  Mass media section with books about Radio and television communication, Postal services.  Telecommunication, and Press law. The Environmental law section with books about Environmental pollution and Wilderness preservation. The Intellectual and industrial property section with books about Patent law and trademarks, Unfair competition, and Copyright. The History of law section with books about Holy Roman Empire and its constitution, Biography, Private law, Sources, Criminal law and procedure, Judiciary.  Court organization and procedure, Auxiliary sciences, and Secular ecclesiastical law. The Administrative law section with books about Administrative process.  Administrative acts, Administrative courts and procedure, Administrative organization, and Indemnification for acts performed by government. The Labor law section with books about Labor contract and employment, Protection of labor.  Labor law for particular industries, Wages, Labor-management relations, Labor courts and procedure, Labor supply.  Manpower control, Corporate representation.  Unions.  Employers', and Collective bargaining and labor agreements. The Courts and procedure section with books about Civil procedure.  Arbitration, Procedure in general, The legal profession, Insolvency.  Execution.  Bankruptcy.  Debtors relief, Noncontentious jurisdiction, The administration of justice, Judicial assistance.  Foreign judgments, Costs, and Courts. The Public finance section with books about National revenue, State and local finance, Tax and customs courts and procedure, Tax and customs crimes and delinquency, Budget.  Government expenditure.  Public debts, and Money.  Currency.  Coinage.  Bank notes. The Public law section with books about The State. The Civil service section with books about Labor law and collective labor law, Allowances, Municipal civil service, Conditions of employment, Tenure, and State civil service. The Works on diverse aspects of a particular subject and section. The Law dictionaries.  Terms and phrases section. The National defense.  Military law section with books about Military criminal law and procedure.  Military discipline, The Armed Forces.  The Air Force, and German participation in NATO. The Private international law.  Conflict of laws section. The Secular ecclesiastical law section. The Transportation section with books about Road traffic.  Traffic regulations and enforcement, Water transportation.  Navigation and pilotage, Railroads, Aviation.  Space law, and Pipelines. The Trials section. The Addresses, essays, lectures section. The Professions section. The Government measures in time of war, national emergency, section with books about 1945-, 1919-1933.  Weimar Republic, 1933-1945.  Third Reich, and 1871-1918.  Empire of 1871. The Law reform.  Criticism section. The Legal education section. The Private law section. The Intertemporal law.  Retroactive law section. The Concepts applying to several branches of the law section. The General works.  Treatises section. The Legal research.  Legal bibliography section. The Manuals and other works for particular groups of users section. The Birth control section. The Bibliography section. The Rechtsanwaltskammern (Bar associations) section. The Legislation section. The Collected works section. The Court decisions and related material section. The Directories section. The Official gazettes section.\n\n[|Entrance||] Law of Germany Room entrance",
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
      "description": "There are four rows of books in this shelf. The General section. The Organization of American States (OAS) section. The Greenland section. The Bermuda section.\n\n[|Entrance||] America.  North America Room entrance",
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
      "description": "There are three rows of books in this shelf. The Mishpat Ivri section with books about Dinei mamonot, Criminal law and procedure, Domestic relations. Family law, Courts and procedure, Constitutional law. Constitutional principles of the Jewish, General works, Medical legislation, Persons, Economic law, Public finance, The concept of Jewish law, Social laws and legislation, Inheritance and succession, Birth control. Family planning, Sources of Jewish law (Mishpat Ivri), Concepts applying to several branches of the law, A-Z, Public law. The state and the Jewish community. Kehillah, Environmental law, Gifts. Charitable gifts. Donations, Assistance in emergencies, Community defense. Military law, Public property. Communal property. Restraints on private, Bibliography, Private law, Civil service. Employees of communal agencies, and Cultural affairs. The H.oshen mishpat. law (General) section. The Even ha-\u02bbezer law (General) section.\n\n[|Entrance||] Jewish law.  Halakah Room entrance",
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
      "description": "There are four rows of books in this shelf. The General section. The Germanic law section with books about Criminal law and procedure, Germanic nations and their constitution, Private law, Sources, Courts and procedure, and Industry and trade. The The Celts section. The Slavic nations.    Slavic law section with books about Sources.\n\n[|Entrance||] History of Law (Europe) Room entrance",
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
      "description": "There are nine rows of books in this shelf. The Greek law section. The Ancient legal systems compared section. The Egypt section. The Mesopotamia.  Assyro-Babylonian law section with books about Assyria and Sumer. The Hittite law section. The General section. The Babylonia section. The Sources section. The Persia section.\n\n[|Entrance||] History of law.  The ancient orient Room entrance",
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
      "description": "There are 53 rows of books in this shelf. The Social law and legislation section. The Constitutional law section with books about Individual and state.  Civil and political rights, Structure of government, Organs of the government, Amending process, Public policy.  Police power, and Church and state. The Contracts section with books about Loan of money, Contract for work and labor, Banking, Insurance, Secured transactions, Carriers.  Carriage of goods and passengers, Sale of goods, Negotiable instruments, Investments, Government contracts, and Contract of service.  Master and servant. The Native peoples.  Indians.  Inuit section. The Criminal law.  Criminal procedure section. The Courts.  Procedure section with books about Civil procedure, Administration of justice, and Court organization and procedure. The Medical legislation section. The Administrative organization and procedure section. The Education section. The Trials section with books about Criminal trials and Civil trials. The The legal profession section with books about Practice of law and The organized bar.  Law societies.  Bar. The Police and power of the police section. The Associations section with books about Corporations.  Juristic persons and Unincorporated associations. The Public property.  Public restraints on private property section with books about Public land law, Regional and city planning, and Water resources. The Insolvency and bankruptcy.  Creditors' rights section. The Torts (Extracontractual liability) section with books about Compensation to victims of crime.  Reparation. The Regulation of industry, trade, and commerce. section with books about Trade and commerce, Trade regulation.  Control of trade practices., Primary production.  Extractive industries, Transportation and communication, The professions, Public utilities, Construction and building industry.  Contractors, Manufacturing industries, and Food processing industries. The Control of social activities section. The Persons section with books about Natural persons and Domestic relations.  Family law. The Intellectual property section. The Property section with books about Real property.  Land law and Personal property. The Agency section. The Trusts and trustees section. The Community legal services.  Legal aid section. The Criticism. Law reform section. The Public finance section. The Legal research.  Legal bibliography section. The Negotiated settlement.  Compromise section. The Public health.  Sanitation.  Environmental section. The Succession upon death section. The Bibliography section. The Directories section. The Legal education section. The Private (Civil) law section. The National defense.  Military law section. The Food.  Drugs.  Cosmetics section. The Local government section. The Juvenile criminal law and procedure section. The Law reports and related materials section. The Public law in general section. The Conflict of laws section. The Science and the arts.  Research section. The Jurisprudence and philosophy of Canadian law section. The Public service.  Government officials and employees section. The Government measures in time of war, national emergency, section. The Economic policy.  Economic planning.  Economic section. The Public safety section. The Subordinate [Delegated] legislation section. The Arbitration and award section. The Law reporting section. The Statutes section. The Restitution.  Quasi contracts.  Unjust enrichment section. The Judicial statistics section.\n\n[|Entrance||] Law of Canada Room entrance",
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
      "description": "There are eight rows of books in this shelf. The Legal systems compared section. The Encyclopedias.  Law dictionaries.  Terms and phrases. section. The Interdisciplinary discussion of subjects section with books about Domestic relations. Family law, Obligations. Contracts and transactions, Property. Res in commercio, Criminal law and procedure, Persons, Constitutions and religion. Constitutional and, Private international law. Conflict of laws, Courts and procedure, Inheritance and succession, Cultural affairs, Medical legislation, and Economic law. The General works.  Treatises section. The Proverbia.  Legal maxims.  Brocardica juris.  Regulae juris. section. The Auxiliary sciences section. The Conferences.  Symposia section. The Periodicals section.\n\n[|Entrance||] Religious law in general.  Comparative religious law. Room entrance",
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
      "description": "There is one row of books in this shelf. The By period section.\n\n[|Previous||] Constitutional law shelf\n[|Next||||||] Indic people.  Ethnic groups shelf",
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
      "description": "There are five rows of books in this shelf. The Orthodox Eastern Church section with books about Autocephalous churches and General. The History section with books about Sources and General works. The General (Comparative) section. The Pre-Chalcedonian churches section. The Encyclopedias. Law dictionaries section.\n\n[|Entrance||] Canon law of Eastern Churches Room entrance",
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
      "description": "There are five rows of books in this shelf. The Peaceful uses of outer space section with books about Public order in space and outer space, Liability for accidents, and Space resources. The Concepts and principles.  Theory section with books about Regulated use theory. The Treaties and other international agreements section. The Un-peaceful uses of outer space section. The Boundaries section.\n\n[|Entrance||] Space law.  Law of outer space Room entrance",
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
      "description": "There are 26 rows of books in this shelf. The Social law and legislation section. The Education section. The Property section. The Courts.  Procedure section. The Legislation section. The Public finance section. The Succession upon death section. The Local government section. The Law reports and related materials section. The Contracts section. The Associations section. The Regulation of industry, trade, and commerce. section. The Criminal law section. The Persons section. The Science and the arts.  Research section. The Public property section. The The legal profession section. The Constitutional law section. The Torts (Extracontractual liability) section. The Legal research.  Legal bibliography section. The Juvenile criminal law and procedure section. The Public health section. The Medical legislation section. The Trusts and trustees section. The Public safety section. The Public service section.\n\n[|Entrance||] Law of Ontario Room entrance",
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
      "description": "There are 28 rows of books in this shelf. The Courts.  Procedure section with books about Civil procedure, Administration of justice.  Organization of the, and Court organization and procedure. The Social law and legislation section. The Administrative law section with books about Medical legislation, Public health.  Sanitation.  Environmental pollution, Administrative functions, Administrative organization, The professions, Education, Public property.  Public restraints on private property, Police and power of the police, Public safety, Science and the arts.  Research, Public service.  Government officials and employees, Alcohol.  Liquor laws, and Control of individuals. The Regulation of industry, trade, and commerce section with books about Trade regulation.  Control of trade practices., Primary production.  Extractive industries, Transportation and communication.  Carriers, Construction and building industry.  Contractors, Trade and commerce, Food processing industries, and Public utilities. The Civil law section with books about Obligations, Property, Succession and gifts, and Persons. The Associations section. The Criminal law.  Criminal procedure section. The Compensation to victims of crime.  Reparation section. The Constitutional law section. The Public finance section. The The legal profession section with books about Lawyers and Notaries. The Law reports and related materials section. The Conflict of laws.  Private international law section. The Legislation section. The Native peoples.  Indians.  Inuit section. The Commercial law.  Mercantile transactions section. The Public law in general section. The Law reform.  Criticism section. The Insurance section. The Negotiable instruments section. The Insolvency and bankruptcy section. The Legal research.  Legal bibliography section. The Military law section. The Intellectual and industrial property section. The Economic policy.  Economic planning.  Economic section. The Community legal services.  Legal aid section. The Banking section. The Investments section.\n\n[|Entrance||] Law of Qu\u00e9bec Room entrance",
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
      "description": "There are five rows of books in this shelf. The Official acts. Documents section. The General (Comparative) section. The Individual churches sui juris and ritual traditions section with books about Churches of the Constantinopolitan (Byzantine) rite and Churches of the Chaldean (East-Syrian) rite. The Bibliography section. The Congresses. Conferences section.\n\n[|Entrance||] Canon law of Eastern Rite Churches in Communion with the Room entrance",
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
      "description": "There is one row of books in this shelf. The Antarctic Treaty System section.\n\n[|Entrance||] Antarctica Room entrance",
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
      "description": "There are 20 rows of books in this shelf. The Kindergarten section. The School hygiene.    School health services section. The School architecture and equipment.    School physical section. The Education and training of teachers and section with books about State teachers colleges, Professional aspects of teaching and school, Certification of teachers, and Teacher training in universities and colleges. The Elementary or public school education section. The Systems of individual educators and writers section. The Secondary education.    High schools section. The Higher education section with books about Supervision and administration.    Business, Teaching personnel, Institutions of higher education, Curriculum, Graduate education, Admissions and entrance requirements, Student financial aid, College examinations, Trade unions, Academic degrees, and Endowments, trusts, etc.. The Teaching (Principles and practice) section with books about Reading (General). The Educational psychology section. The School administration and organization section with books about School management and discipline, Teaching personnel, Administrative personnel, and Trade unions. The General section. The Early childhood education section. The Preschool education.    Nursery schools section. The Primary education section. The Child study section. The School life.    Student manners and customs section. The Special days section. The Hygiene in universities and colleges section. The Educational consultants and consulting section.\n\n[|Entrance||] Theory and practice of education Room entrance",
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
      "description": "There are six rows of books in this shelf. The United States section. The Biography section. The General section. The Higher education section. The Other regions or countries section. The By period section.\n\n[|Entrance||] History of education Room entrance",
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
      "description": "There are three rows of books in this shelf. The Universities.    Colleges section. The Secondary and elementary schools section. The Community colleges.    Junior colleges section.\n\n[|Entrance||] United States Room entrance",
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
      "description": "There are 13 rows of books in this shelf. The Education of special classes of persons section with books about Blacks.    African Americans, Exceptional children and youth.    Special, Other special classes, Latin Americans.    Hispanic Americans, Women, Immigrants or ethnic and linguistic minorities., Education in developing countries, Boys, Student-athletes, Asians, Jews, Children of immigrants (First generation), Romanies.    Gypsies, Asian Americans.    Asians in the United States, Lapps, and Gays.    Lesbians.    Bisexuals. The Education extension.    Adult education.    Continuing section with books about Lyceums and lecture courses.    Forums, Distance education, Radio and television extension courses., Reading circles and correspondence clubs, University extension, Aged education, Vacation schools.    Summer schools, Correspondence schools, and Evening schools. The Types of education section with books about Career education, Competency based education, Multicultural education (General), Political education, Professional education, Vocational education (General), Humanistic education.    Liberal education, Cooperative education, Industrial education (General), Basic education.    Basic skills education, Community education, Communist education, and Collective education. The Inclusive education section. The Social aspects of education section with books about Community and the school, Higher education and the state, Educational sociology, Education and the state, Attendance.    Dropouts, Foundations, endowments, funds, Literacy.    Illiteracy, Economic aspects of education, Compulsory education, Demographic aspects of education, and Taxation of schools and colleges. The Moral and religious education section with books about Moral education.    Character building and Religion and education.    Education under. The Forms of education section. The Private school education section with books about Preparatory schools.    Preparatory school. The Self-education.    Self-culture section. The Nonformal education section. The Fundamental education section. The Traveling educational exhibits section. The Education and travel section.\n\n[|Entrance||] Special aspects of education Room entrance",
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
      "description": "There are seven rows of books in this shelf. The Directories of educational institutions section. The Official documents, reports, etc. section. The Congresses section. The Periodicals.    Societies section. The Educational exhibitions and museums section. The Yearbooks section. The School fairs section.\n\n[|Entrance||] Education (General) Room entrance",
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
      "description": "There are 29 rows of books in this shelf. The Great Britain section. The Germany section. The Estonia section. The Czech Republic section. The Turkey and the Baltic states section. The Spain section. The Austria section. The France section. The Greece section. The Russia (Federation) section. The Norway section. The Switzerland section. The Sweden section. The Italy section. The Finland section. The Poland section. The Ukraine section. The Hungary section. The Iceland section. The Belgium section. The Netherlands section. The Denmark section. The Portugal section. The Lithuania section. The Latvia section. The Belarus section. The Faroe Islands section. The Slovakia section. The Moldova section.\n\n[|Entrance||] Individual institutions Room entrance",
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
      "description": "There are 33 rows of books in this shelf. The Taiwan section. The Japan section. The Philippines section. The Indonesia section. The India.    Pakistan.    Bangladesh.    Burma.    Sri section. The Africa section with books about German Africa (Former), South Africa, Natal, West Africa, Portuguese Africa (Former), Zaire, Sudan, Liberia, Transvaal, Algeria and Tunisia, Egypt, Uganda, Kenya, Tanzania, Zambia, Ethiopia, Orange Free State, Morocco, Mali, Malawi, Zimbabwe, Libya, Ivory Coast, Zululand, Burundi, Swaziland, Senegal, Rwanda, Italian Africa (Former), Madagascar, Botswana, French Equatorial Africa.    French Congo, and Lesotho. The China section. The Former Soviet republics in Asia section. The Australia section. The Pacific islands section. The Armenia (Republic) section. The New Zealand section. The Malaysia section. The Syria section. The Lebanon section. The Israel.    Palestine section. The Indochina section. The Korea section. The Iran section. The Other section. The Papua-New Guinea (Ter.) section. The Iraq section. The Asia section. The Indian Ocean islands section. The Afghanistan section. The Kuwait section. The Jordan section. The Azerbaijan section. The Yeman (Yemen Arab Republic) section. The Qatar section. The Georgia (Republic) section. The Saudi Arabia section. The Bahrain section.\n\n[|Entrance||] Individual institutions Room entrance",
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
      "description": "There are five rows of books in this shelf. The West Indies section. The South America section with books about Peru, Chile, Brazil, Argentina, Venezuela, Bolivia, Colombia, Ecuador, Uruguay, Paraguay, and Guianas. The Mexico section. The Canada section. The Central America section.\n\n[|Entrance||] America (except United States) Room entrance",
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
      "description": "There are 21 rows of books in this shelf. The Literature for children section. The History and criticism section with books about Biography, Vocal music, Popular music, By region or country, Instruments and instrumental music, By period, Folk, national, and ethnic music, Composition and performance, Music on particular topics, Program music, General works, Dance music, and Musical journalism. The Dictionaries. Encyclopedias section. The Music as a profession. Vocational guidance section. The Philosophical  and  societal  aspects  of  music.  Physics section with books about Social and political aspects of music, Moral influence of music.    Therapeutic use of music, Psychology, Aesthetics, General works, Criticism, Physics and acoustics, Religious aspects of music, Physiological aspects of music, and Music in the workplace. The Bibliography section. The Aspects of the field of music as a whole section. The Music trade section. The Librettos. Texts. Scenarios section. The Directories. Almanacs section. The Music librarianship section. The Musical research section. The Music printing and publishing section. The Festivals. Congresses section. The Societies and other organizations section. The Manuscript studies and manuscripts section. The Periodicals. Serials section. The Institutions section. The Special collections section. The Programs section. The Circulars and advertisements section.\n\n[|Entrance||] Literature on music Room entrance",
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
      "description": "There are 27 rows of books in this shelf. The Analysis and appreciation of musical works section. The Singing and vocal technique section with books about Vocal techniques for children. The Interpretation section. The Composition. Elements and techniques of music section. The School music section with books about Elementary schools. Junior high schools. High and Kindergarten. The Instrumental techniques section with books about Plucked instruments, Keyboard instruments, Wind instruments, Ensembles, Percussion and other instruments, Instrumental techniques for children, Stringed instruments. Bowed stringed instruments, and Motion picture accompanying. The Notation section. The Improvisation. Accompaniment. Transposition section. The Administration and instruction of vocal groups section. The Music theory section. The General works section. The Conducting. Score reading and playing section. The History section. The Music theory for children section. The Printed pedagogical aids section with books about Teachers= and supervisors= manuals, etc., Examinations, exercises, etc., and Charts, diagrams, etc.. The Systems and methods section. The Musical theater section. The Memorizing section. The Instrumentation and orchestration section. The Embellishment section. The Music to accompany instruction in ballet, folk dancing, section. The Tuning section. The Audio-visual aids section. The Community music section. The Music in colleges and universities section. The Music in the theater section. The Music in special education section.\n\n[|Entrance||] Instruction and study Room entrance",
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
      "description": "There are six rows of books in this shelf. The Vocal music section with books about Sacred vocal music, Secular vocal music, and Collections. The Musical sources section. The Instrumental music section with books about One solo instrument, Two or more solo instruments, Instrumental music for children, String orchestra, Orchestra, Aleatory music. Electronic music. Mixed media, and Motion picture music. The Miscellaneous section. The Collected works of individual composers section. The Music printed or copied in manuscript before 1700 section.\n\n[|Entrance||] Music Room entrance",
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
      "description": "There are 13 rows of books in this shelf. The Special classes of buildings section with books about Classed by use, Public buildings, Classed by material, and Classed by form. The Architectural drawing and design section. The History section. The Aesthetics of cities.    City planning and beautifying section. The Competitions section. The General works section. The Study and teaching.    Research section. The Architecture as a profession section. The Details and decoration section. The Architectural criticism section. The General section. The Architecture and the state section. The Museums.    Exhibitions section.\n\n[|Entrance||] Architecture Room entrance",
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
      "description": "There are 14 rows of books in this shelf. The History section. The Study and teaching.    Research section. The Private collections and collectors section. The Art museums, galleries, etc. section. The General section. The Exhibitions section. The Special subjects of art section. The Theory.    Philosophy.    Aesthetics of the visual arts section. The General works section. The Art studios, materials, etc. section. The Art as a profession.    Artists section. The Art and the state.    Public art section. The Economics of art section. The Examination and conservation of works of art section.\n\n[|Entrance||] Visual arts Room entrance",
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
      "description": "There are 12 rows of books in this shelf. The Other arts and art industries section with books about Ceramics, Glass, Costume, Metalwork, Textiles, Woodwork, and Glyptic arts. The Rugs and carpets section. The Furniture section. The Interior decoration.    House decoration section with books about General.    History, etc., Church decoration, and Decorative painting. The Decoration and ornament.    Design section with books about General works, History, Special subjects for design, and General. The Wallpapers section. The History section. The Arts and crafts movement section. The General section. The Religious art section. The Upholstery.    Drapery section. The Tapestries section.\n\n[|Entrance||] Decorative arts Room entrance",
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
      "description": "There are 10 rows of books in this shelf. The History section. The Special subjects section with books about Other subjects, Landscape painting, Flowers.    Fruit.    Trees, Portraits, Human figure, Animals.    Birds, Still life, Marine painting, and Sports.    Hunting, fishing, etc.. The Watercolor painting section. The Technique and materials section. The Mural painting section. The Illuminating of manuscripts and books section. The Examination and conservation of paintings section. The General works section. The General section. The Study and teaching section.\n\n[|Entrance||] Painting Room entrance",
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
      "description": "There are 16 rows of books in this shelf. The Pictorial humor, caricature, etc. section. The Technique section. The Commercial art.    Advertising art section. The Special subjects section. The Illustration section. The Posters section. The History of drawing section. The Graphic art materials section. The Study and teaching section. The Greeting cards, postcards, invitations, book jackets, etc. section. The Printed ephemera.    Imagerie populaire section. The General section. The General works section. The Conservation and restoration of drawings section. The Competitions section. The Copying, enlarging, and reduction of drawings section.\n\n[|Entrance||] Drawing.    Design.    Illustration Room entrance",
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
      "description": "There are 15 rows of books in this shelf. The Printmaking and engraving section. The Etching and aquatint section with books about History, Special subjects, General, General works, and Dry point. The Wood engraving section with books about History, Japanese prints, General, Linoleum block prints, General works, Other materials used in relief printing, Fish prints, and Potato prints. The History of printmaking section. The Serigraphy section. The Special subjects section. The Lithography section. The Printing of engravings section. The Monotype (Printmaking) section. The Metal engraving section with books about History, Color prints, General, Copper engraving, and General works. The Equipment section. The Lumiprints section. The Competitions section. The Copying art.    Copying machine art section. The Collected works section.\n\n[|Entrance||] Print media Room entrance",
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
      "description": "There are 11 rows of books in this shelf. The History section. The Special forms section with books about Sepulchral monuments, Sculptural monuments, Portrait sculpture, Equestrian statues, and Religious monuments and shrines. The Special materials section. The General works section. The Special subjects section. The Designs and technique section. The Mobiles, color, sculpture gardens, etc. section. The Restoration of sculptures section. The Study and teaching section. The General section. The Competitions section.\n\n[|Entrance||] Sculpture Room entrance",
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
      "description": "There are 10 rows of books in this shelf. The History of the arts section. The General section. The Special subjects, characters, persons, religious arts, etc. section. The Administration of the arts section. The Study and teaching.    Research section. The Patronage of the arts section. The Arts centers and facilities section. The Exhibitions section. The Voluntarism in the arts section. The Competitions section.\n\n[|Entrance||] Arts in general Room entrance",
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
      "description": "There are two rows of books in this shelf. The Fiction in English section. The Juvenile belles lettres section.\n\n[|Entrance||] Fiction and juvenile belles lettres Room entrance",
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
      "description": "There is one row of books in this shelf. The English literature section with books about English literature: Provincial, local, etc., 1900-1960, 19th century, 1770/1800-1890/1900, By period, 17th and 18th centuries (1640-1770), English renaissance (1500-1640), Anglo-Norman period.    Early English.    Middle, Collections of English literature, Anglo-Saxon literature, Wit and humor, Poetry, 1961-2000, Prose, Drama, Literary history and criticism, Relations to other literatures and countries, Women authors, 2001-, Criticism, Diaries, Folk literature, Letters, Essays, and Oratory.\n\n[|Entrance||] English Room entrance",
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
      "description": "There are 17 rows of books in this shelf. The Individual authors section with books about 19th century, 1900-1960, Colonial period (17th and 18th centuries), and 1961-. The Collections of American literature section with books about Drama, By region, Poetry, Prose (General), Oratory, By period, Essays, and Letters. The Juvenile literature (General) section. The Treatment of special subjects, classes section. The By period section with books about 20th century, 19th century, 17th-18th centuries, and 21st century. The Poetry section. The Biography, memoirs, letters, etc. section. The Prose section with books about Prose fiction. The Women authors section. The Special regions, states, etc. section with books about West and Central, South, and North. The Drama section. The Wit and humor.    Satire section. The Folk literature section. The Essays section. The Oratory section. The Diaries section. The Letters section.\n\n[|Entrance||] American literature Room entrance\n[|Next||||||] Canadian    literature shelf",
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
      "description": "There are 11 rows of books in this shelf. The Modern literature section with books about 19th century, 1900-1960, 18th century, 17th century, 1961-2000, 16th century, and 2001-. The History and criticism section. The Collections section with books about Prose, Poetry, General, and Drama. The Prose and prose fiction section. The Old French literature section with books about (14th-) 15th century (to ca. 1525), To 1350/1400, and Collections. The Provincial, local, colonial, etc. section. The Drama section. The Poetry section. The General section. The Folk literature section. The Juvenile literature section.\n\n[|Entrance||] French literature Room entrance\n[|Next||||||] Italian literature shelf",
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
      "description": "There are nine rows of books in this shelf. The Individual authors and works to 1400 section. The Individual authors, 1400-1700 section. The Individual authors, 1961-2000 section. The History and criticism section. The Collections section with books about Prose, Poetry, Drama, General, and Translations. The Individual authors, 1900-1960 section. The Regional, provincial, local, etc. section. The Individual authors, 1701-1900 section. The Individual authors, 2001- section.\n\n[|Previous||] French literature shelf\n[|Next||||||] Spanish literature shelf",
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
      "description": "There are eight rows of books in this shelf. The Individual authors, 1868-1960 section. The Individual authors, 1700-ca. 1868 section. The Provincial, local, colonial, etc. section with books about Spanish America. The History and criticism section. The Collections section with books about Prose, Translations, General, Poetry, and Drama. The Individual authors and works to 1700 section. The Individual authors, 1961-2000 section. The Individual authors, 2001- section.\n\n[|Previous||] Italian literature shelf\n[|Next||||||] History and criticism shelf",
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
      "description": "There are six rows of books in this shelf. The Early to 1500 section. The Drama section. The Poetry section. The Juvenile literature (General) section. The Prose section. The Folk literature section.\n\n[|Previous||] Spanish literature shelf\n[|Next||||||] History and criticism shelf",
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
      "description": "There is one row of books in this shelf. The Poetry section.\n\n[|Previous||] History and criticism shelf\n[|Next||||||] Portuguese literature shelf",
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
      "description": "There are 15 rows of books in this shelf. The Individual authors, 1701-1960 section. The Provincial, local, colonial, etc. section with books about Brazil. The Individual authors, 1961-2000 section. The Individual authors and works, 1500-1700 section. The General section. The Special periods section. The Poetry section. The Collections section with books about Poetry, General, Translations, Drama, and Prose. The Individual authors and works to 1500 section. The Prose section. The Folk literature section. The Individual authors, 2001- section. The Drama section. The Juvenile literature (General) section. The History and criticism section.\n\n[|Previous||] History and criticism shelf",
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
      "description": "There are six rows of books in this shelf. The Modern English section. The Dialects.    Provincialisms, etc. section. The Anglo-Saxon.    Old English section. The Slang.    Argot, etc. section. The Middle English section. The Early Modern English section.\n\n[|Entrance||] English Room entrance",
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
      "description": "There are 19 rows of books in this shelf. The Drama section with books about Dramatic representation.    The theater, Motion pictures, Broadcasting, Nonbroadcast video recordings, Special types, Technique of dramatic composition, History, and Relation to, and treatment of, special. The Literary history section with books about By period, Folk literature, Juvenile literature, Collections, Biography, Jewish literature in various languages, Comparative literature, Romance literature, Black literature (General), Special relations, movements, and, and Germanic literature. The Oratory.    Elocution, etc. section with books about Recitations (in English), Debating, Recitations in foreign languages, and Study and teaching. The Authorship section with books about Technique.    Literary composition, etc. and Translating as a literary pursuit. The Collections of general literature section with books about Wit and humor, Drama, Proverbs, Riddles, acrostics, charades,, German, Aphorisms.    Apothegms, Essays, Quotations, Comic books, strips, etc., Anecdotes.    Table talk, Toasts, Orations, Fiction, Maxims, Sayings, bon mots, etc., Epitaphs, Emblems, devices, Thoughts, Letters, Epigrams, Ana, Anacreontic literature, Mottoes, Literary extracts.    Commonplace books, Special classes of authors, and Paradoxes. The Poetry section with books about Relations to, and treatment of,, Epic poetry, Theory, philosophy, relations, etc., History and criticism, Lyric poetry, and Folk poetry. The Theory.    Philosophy.    Esthetics section. The Prose.    Prose fiction section with books about Technique.    Authorship, Special kinds of fiction.    Fiction genres, History, and Philosophy, theory, etc.. The Journalism.    The periodical press, etc. section with books about By region or country, Technique.    Practical journalism, Magazines and other periodicals, Relation to the state.    Government and, The Jewish press, and Amateur journalism. The Criticism section. The The performing arts.    Show business section with books about Centers for the performing arts. The Study and teaching section. The Diaries section. The The monologue section. The Letters (Literary history) section. The Periodicals section. The Societies section. The Essays (Literary history) section. The The dialogue section.\n\n[|Entrance||] Literature (General) Room entrance",
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
      "description": "There are eight rows of books in this shelf. The Provincial, local, colonial, etc. section with books about East Germany. The Individual authors or works section with books about 1700-ca. 1860/70, 1860/70-1960, 1961-2000, Middle High German, ca. 1050-1450/1500, and 1500-ca. 1700. The Collections section with books about Poetry, Middle High German, Prose, General, Drama, and Early to 1950.    Old and Middle High German. The History of German literature section with books about Modern, Prose, Drama, Poetry, and Medieval. The Literary history and criticism section. The Folk literature section with books about Faust legend. The Low German literature section. The 2001- section.\n\n[|Entrance||] German literature Room entrance\n[|Next||||||] Norwegian literature shelf",
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
      "description": "There are seven rows of books in this shelf. The Provincial, local, foreign section. The Individual authors or works section with books about 19th century, 1900-1960, 1961-2000, 16th-18th centuries, and 2001-. The Collections section with books about Poetry, Prose, and Drama. The Literary history and criticism section. The Landsmaal or New Norwegian section with books about Individual authors, Literary history and criticism, and Collections. The Folk literature section. The Juvenile literature (General) section.\n\n[|Previous||] German literature shelf\n[|Next||||||] Dutch literature shelf",
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
      "description": "There are 12 rows of books in this shelf. The Individual authors or works section with books about 1961-2000, 16th-18th centuries, 1800-1960, and Medieval. The Special periods section. The Prose section. The Juvenile literature (General) section. The Collections section with books about Poetry, Prose, Special periods, Drama, Translations, and General. The Poetry section. The Provincial, local, foreign section. The Drama section. The General section. The Folk literature section. The Literary history and criticism section. The 2001- section.\n\n[|Previous||] Norwegian literature shelf\n[|Next||||||] Swedish literature shelf",
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
      "description": "There are 10 rows of books in this shelf. The Individual authors or works section with books about 1961-2000, 1900-1960, 19th century, Medieval, 16th-18th centuries, and 2001-. The Poetry section. The Special periods section. The Provincial, local, foreign section. The Juvenile literature (General) section. The Literary history and criticism section. The Prose section. The Collections section with books about Translations, Drama, Poetry, and Prose. The Folk literature section. The Drama section.\n\n[|Previous||] Dutch literature shelf\n[|Next||||||] Old Norse literature: Old Icelandic and Old Norwegian shelf",
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
      "description": "There are seven rows of books in this shelf. The Individual sagas and historical works section. The Literary history and criticism section. The Collections section with books about Poetry and Prose. The Scientific and learned literature section. The Prose section with books about Sagas. The Individual authors or works before 1540 section. The Religious works section.\n\n[|Previous||] Swedish literature shelf\n[|Next||||||] Danish literature shelf",
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
      "description": "There are six rows of books in this shelf. The Individual authors or works section with books about 1961-2000, 19th century, 1900-1960, 16th-18th centuries, Medieval, and 2001-. The Literary history and criticism section. The Collections section with books about Prose, Poetry, and Drama. The Provincial, local, foreign section. The Folk literature section. The Juvenile literature (General) section.\n\n[|Previous||] Old Norse literature: Old Icelandic and Old Norwegian shelf\n[|Next||||||] Modern Icelandic literature shelf",
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
      "description": "There are seven rows of books in this shelf. The Individual authors or works section with books about 19th-20th centuries and 16th-18th centuries. The Literary history and criticism section. The Collections section. The Folk literature section. The Juvenile literature (General) section. The Provincial, local, foreign section. The 21st century section.\n\n[|Previous||] Danish literature shelf\n[|Next||||||] Afrikaans literature shelf",
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
      "description": "There are four rows of books in this shelf. The Individual authors or works section. The Collections section. The Literary history and criticism section. The Folk literature section.\n\n[|Previous||] Modern Icelandic literature shelf\n[|Next||||||] Flemish literature since 1830 shelf",
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
      "description": "There are five rows of books in this shelf. The Individual authors or works section. The Literary history and criticism section. The Collections section. The Folk literature section. The Juvenile literature (General) section.\n\n[|Previous||] Afrikaans literature shelf\n[|Next||||||] General shelf",
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
      "description": "There are three rows of books in this shelf. The Literary history and criticism section. The Folk literature section. The Collections section.\n\n[|Previous||] Flemish literature since 1830 shelf\n[|Next||||||] Faroese literature shelf",
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
      "description": "There are three rows of books in this shelf. The Collections section. The Literary history and criticism section. The Individual authors or works section.\n\n[|Previous||] General shelf",
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
      "description": "There are five rows of books in this shelf. The Collections section. The Individual authors section with books about Ovid, Vergilius Maro, Publius (Virgil), Horace, Plautus, Titus Maccius, Cicero, Marcus Tullius, Lucretius Carus, Titus, Seneca, Lucius Annaeus, Tacitus, Cornelius, Pliny, the Elder, Terentius Apher, Publius (Terence), Caesar, Julius, and Martial. The Literary history section. The Criticism, interpretation, etc. section. The Translations section.\n\n[|Previous||] Latin philology and language shelf\n[|Next||||||] Greek literature shelf",
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
      "description": "There are five rows of books in this shelf. The Individual authors section with books about Demosthenes, Plato, Euripedes, Homer, Aristotle, Sophocles, Aeschylus, Xenophon, Thucydides, Plutarch, and Aesop. The Translations section. The Literary history section. The Criticism, interpretation, etc. section. The Collections section.\n\n[|Previous||] Roman literature shelf\n[|Next||||||] Classical philology shelf",
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
      "description": "There is one row of books in this shelf. The Individual authors section.\n\n[|Previous||] Greek philology and language shelf\n[|Next||||||] Medieval and modern Latin literature shelf",
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
      "description": "There is one row of books in this shelf. The Individual authors section.\n\n[|Previous||] Byzantine and modern Greek literature shelf\n[|Next||||||] Classical literature shelf",
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
      "description": "There are nine rows of books in this shelf. The Spanish section. The French section with books about Dialects.    Provincialisms and Slang.    Argot. The Italian section. The Portuguese section. The Catalan section. The General section. The Romanian section. The Raeto-Romance section. The Sardinian section.\n\n[|Entrance||] Romance Room entrance",
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
      "description": "There are seven rows of books in this shelf. The Iranian philology and literature section with books about New Persian, Afghan (Pashto, Pushto, Pushtu, etc.), General, Avestan, Old Persian, and Middle Iranian languages. The Indo-Aryan literature section with books about General, Modern Indo-Aryan literature, Sanskrit, Prakrit literature, and Pali literature. The Armenian section with books about Literature and Language. The Indo-Aryan languages section with books about Modern Indo-Aryan languages, Sanskrit, Vedic, General, Apabhram. s\u00b4a, Prakrit, Pali, and Middle Indo-Aryan dialects. The Caucasian languages section with books about Georgian. The Dardic (Pisacha) section with books about Nuristani (Kafiri) group, Kohistani, and Kashmiri. The General section.\n\n[|Entrance||] Indo-Iranian philology and literature Room entrance",
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
      "description": "There are eight rows of books in this shelf. The Language.    Linguistic theory.    Comparative grammar section with books about Science of language (Linguistics), Comparative grammar, Discourse analysis, Translating and interpreting, Semantics, Style.    Composition.    Rhetoric, Language acquisition, Linguistic geography, Lexicology, Etymology, and Lexicography. The Communication.    Mass media section with books about Oral communication.    Speech and Interpersonal communication. The General section. The Computational linguistics.    Natural language processing section. The Semiotics.    Signs and symbols section. The Indo-European (Indo-Germanic) philology section. The Nonverbal communication section. The Extinct ancient or medieval languages section.\n\n[|Entrance||] Philology.    Linguistics Room entrance",
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
      "description": "There are four rows of books in this shelf. The German section with books about Dialects.    Provincialism, etc., Old High German, Slang.    Argot, etc., Early Modern German, Middle High German, and Old Saxon. The Dutch section. The Friesian section. The Flemish section.\n\n[|Entrance||] West Germanic Room entrance",
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
      "description": "There are 17 rows of books in this shelf. The Egyptology section with books about Literature.    Inscriptions, Egyptian writing and its decipherment, and Language. The Arabic section with books about Arabic literature and Language. The Hebrew section with books about Literature, Language (Biblical and modern), Other languages used by Jews, and Medieval Hebrew. The West and North Semitic languages section with books about Phoenician-Punic. The Libyco-Berber languages.    Berber languages section with books about Berber languages and Libyan group. The Aramaic section with books about West Aramaic and East Aramaic. The Ethiopian languages section with books about Amharic and Ethiopic (Geez). The Sumerian section. The Assyriology.    Akkadian section with books about Literature.    Inscriptions and Language. The Syriac section with books about Language, Literature, and Neo-Syriac dialects (Modern Syriac). The General section. The Special groups section with books about Islamic and Christian Oriental. The Coptic section. The Cushitic languages section. The Afroasiatic languages section. The Semitic philology and literature section. The South Semitic languages section.\n\n[|Entrance||] Oriental philology and literature Room entrance\n[|Next||||||] General shelf",
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
      "description": "There is one row of books in this shelf. The Languages section.\n\n[|Previous||] Oriental philology and literature shelf",
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
      "description": "There are three rows of books in this shelf. The General section. The North Germanic.    Scandinavian section with books about Modern Icelandic, Danish, Norwegian, Swedish, and Old Norse.    Old Icelandic and Old. The Old Germanic dialects section with books about Gothic.\n\n[|Entrance||] Germanic Room entrance",
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
      "description": "There are seven rows of books in this shelf. The Russian literature section with books about Individual authors and works, Collections, Outside the Russian Federation, Provincial, local, etc., and Special subjects. The Czech section. The Polish section. The Ukrainian section. The Lechitic dialects section. The Slovak section. The Carpatho-Rusyn section.\n\n[|Entrance||] Slavic.    Baltic.    Albanian Room entrance\n[|Next||||||] Slavic.    Baltic.    Albanian shelf",
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
      "description": "There are nine rows of books in this shelf. The Russian literature section with books about History and criticism and Drama. The Baltic section with books about Lithuanian, Latvian, and Old Prussian. The Slavic section. The Slovenian section. The Albanian section. The Russian language section. The Slavic literature (General) section. The Church Slavic section. The Macedonian section.\n\n[|Previous||] Slavic shelf",
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
      "description": "There are eight rows of books in this shelf. The Basque section. The Hungarian section. The Finnish section. The Other Finnic languages and dialects section with books about Estonian, Mordvin, Permic, Sami, Udmurt, Mari, Karelian, Livonian, Votic, Veps, Ludic, Ingrian, and Olonets. The General section. The Ugric languages section. The Finnic.    Baltic-Finnic section. The Samoyedic languages section.\n\n[|Entrance||] Uralic.    Basque Room entrance",
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
      "description": "There are 19 rows of books in this shelf. The Chinese language and literature section with books about Chinese literature and Chinese language. The Japanese language and literature section with books about Japanese literature and Japanese language. The African languages and literature section with books about Literature, Special languages (alphabetically), Languages.    By region or country, Languages, and Special families of languages. The Korean language and literature section with books about Korean language and Korean literature. The Sino-Tibetan languages section with books about Tibeto-Burman languages. The Ural-Altaic languages section. The Languages of Oceania section with books about Polynesian languages, Taiwan languages, Austronesian, Papuan, and Australian languages, Philippine languages, Papuan languages, Micronesian and Melanesian languages, and Australian languages. The Austroasiatic languages section with books about Mon-Khmer (Mon-Anam) languages, Munda languages (Kolarian languages), Chamic languages, and Nicobarese. The Tai languages section. The Dravidian languages section. The Non-Chinese languages of China section. The Non-Aryan languages of India and Southeastern Asia in section. The Far Eastern languages and literature section. The Miao-Yao languages section. The Ainu section. The Karen languages section. The Singapore literature section. The Languages of the Montagnards section. The Malaysian literature section.\n\n[|Entrance||] Languages of Eastern Asia, Africa, Oceania Room entrance",
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
      "description": "There are two rows of books in this shelf. The Celtic languages and literature section with books about Irish, Brittanic group, Gaelic (Scottish Gaelic, Erse), Manx, and Goidelic.    Gaelic. The Modern languages section.\n\n[|Entrance||] Modern languages.    Celtic languages Room entrance",
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
      "description": "There are four rows of books in this shelf. The Indian languages section with books about Special languages of the United States and Canada, Languages of South America and the West Indies, Languages of Mexico and Central America, Languages of the United States, and Languages of Canada. The Mixed languages section with books about Creole languages. The Artificial languages--Universal languages section with books about Esperanto, Picture languages, and Secret languages. The Hyperborean languages of Arctic Asia and America section.\n\n[|Entrance||] Hyperborean, Indian, and artificial languages Room entrance",
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
      "description": "There are seven rows of books in this shelf. The General section. The Immunology section. The Microbial ecology section. The Virology section. The Bacteria section. The Microorganisms in the animal body section. The Cyanobacteria section.\n\n[|Entrance||] Microbiology Room entrance",
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
      "description": "There are six rows of books in this shelf. The General section. The Plant physiology section. The Spermatophyta.    Phanerogams section with books about Gymnosperms and Angiosperms. The Cryptogams section. The Plant ecology section. The Plant anatomy section.\n\n[|Entrance||] Botany Room entrance",
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
      "description": "There are seven rows of books in this shelf. The Animal behavior section with books about Stories and anecdotes. The Chordates.    Vertebrates section with books about Birds, Mammals, Reptiles and amphibians, and Fishes. The General section. The Invertebrates section with books about Insects. The Embryology section. The Anatomy section. The Morphology section.\n\n[|Entrance||] Zoology Room entrance",
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
      "description": "There are nine rows of books in this shelf. The General section. The Descriptive astronomy section with books about Solar system and Stars. The Geodesy section. The Cosmogony.    Cosmology section. The Practical and spherical astronomy section. The Astrophysics section. The Non-optical methods of astronomy section. The Theoretical astronomy and celestial mechanics section. The Astrogeology section.\n\n[|Entrance||] Astronomy Room entrance",
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
      "description": "There are nine rows of books in this shelf. The Geometry.    Trigonometry.    Topology section. The Analysis section. The Elementary mathematics.    Arithmetic section. The General section. The Algebra section. The Analytic mechanics section. The Instruments and machines section with books about Calculating machines. The Probabilities.    Mathematical statistics section. The Tables section.\n\n[|Entrance||] Mathematics Room entrance",
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
      "description": "There are two rows of books in this shelf. The General section. The Cybernetics section with books about Information theory.\n\n[|Entrance||] Science (General) Room entrance",
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
      "description": "There are four rows of books in this shelf. The General section. The Neurophysiology and neuropsychology section. The Animal biochemistry section. The Experimental pharmacology section.\n\n[|Entrance||] Physiology Room entrance",
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
      "description": "There are two rows of books in this shelf. The General section. The Microscopy section.\n\n[|Entrance||] Biology (General) Room entrance\n[|Next||||||] Biology (General) shelf",
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
      "description": "There are seven rows of books in this shelf. The Evolution section. The Cytology section. The Ecology section. The Genetics section. The Life section. The Reproduction section. The Economic biology section.\n\n[|Previous||] Natural history (General) shelf",
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
      "description": "There are six rows of books in this shelf. The Physical and theoretical chemistry section with books about Photochemistry and Radiation chemistry. The General section. The Inorganic chemistry section. The Organic chemistry section with books about Biochemistry. The Crystallography section. The Analytical chemistry section.\n\n[|Entrance||] Chemistry Room entrance",
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
      "description": "There are eight rows of books in this shelf. The General section. The Petrology section. The Paleozoology section. The Dynamic and structural geology section with books about Volcanoes and earthquakes and Structural geology. The Paleontology section. The Stratigraphy section. The Mineralogy section. The Paleobotany section.\n\n[|Entrance||] Geology Room entrance",
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
      "description": "There are 13 rows of books in this shelf. The Electricity and magnetism section with books about Electricity, Magnetism, and Electric discharge. The Optics.    Light section with books about Spectroscopy. The General section. The Heat section with books about Thermodynamics. The Atomic physics.    Constitution and properties of matter section. The Meteorology.    Climatology section with books about Climatology and weather and Meteorological optics. The Acoustics.    Sound section. The Descriptive and experimental mechanics section. The Radiation physics (General) section. The Atomic  energy. section with books about Elementary particle physics and Radioactivity and radioactive substances. The Geophysics.    Cosmic physics section. The Weights and measures section. The Geomagnetism section.\n\n[|Entrance||] Physics Room entrance",
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
      "description": "There are four rows of books in this shelf. The General section. The Human embryology section. The Human and comparative histology section. The Regional anatomy section.\n\n[|Entrance||] Human anatomy Room entrance",
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
      "description": "There are two rows of books in this shelf. The Materia medica and therapeutics section. The Diseases, treatment, etc. section.\n\n[|Entrance||] Homeopathy Room entrance",
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
      "description": "There are six rows of books in this shelf. The Public health.    Hygiene.    Preventive medicine section with books about Personal health and hygiene, Disease (Communicable and noninfectious) and public, Mental health.    Mental illness prevention, Epidemics.    Epidemiology.    Quarantine.    Disinfection, Transmission of disease, Environmental health, Parks, public baths, public carriers, buildings, etc., Study and teaching.    Research, Emergency medical services, Immunity and immunization in relation to public health, Home health care services, War and public health, Food and food supply in relation to public health, Rural health and hygiene.    Rural health services, Disposal of the dead.    Undertaking.    Burial.    Cremation., and Public health laboratories, institutes, etc.. The Forensic medicine.    Medical jurisprudence.    Legal medicine section. The Medicine and the state section. The Medical centers.    Hospitals.    Dispensaries.    Clinics section. The Toxicology.    Poisons section. The Medical geography.    Climatology.    Meteorology section.\n\n[|Entrance||] Public aspects of medicine Room entrance\n[|Next||||||] Medicine and the state shelf",
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
      "description": "There are seven rows of books in this shelf. The Medicine and society.    Social medicine.    Medical sociology section. The Regulation of medical practice.    Evaluation and section. The Provisions for personal medical care.    Medical care plans section. The Health status indicators.    Medical statistics and surveys section. The Medical economics.    Economics of medical care. section. The Regulation of medical education.    Licensure section. The Registration of physicians, pharmacists, etc. section.\n\n[|Previous||] Public aspects of medicine shelf",
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
      "description": "There are 22 rows of books in this shelf. The Orthopedic surgery section with books about Physical rehabilitation. The Surgical pathology section. The General works section. The Operative surgery.    Technique of surgical operations section. The Asepsis and antisepsis.    Sterilization (Operative) section. The Fractures (General) section. The Anesthesiology section. The Surgery by region, system, or organ section. The Operating rooms and theaters.    Instruments, apparatus, and section. The Prosthesis.    Artificial organs section. The Transplantation of organs, tissues, etc. section. The Emergency surgery.    Wounds and injuries section. The Surgery in childhood, adolescence, pregnancy, old age section. The Plastic surgery.    Reparative surgery section. The Neoplasms.    Tumors.    Oncology section. The Surgical complications section. The Surgical therapeutics.    Preoperative and postoperative care section. The Diseases of the locomotor system (Surgical treatment) section. The Military and naval surgery section. The Surgical shock.    Traumatic shock section. The Surgical nursing section. The Reparative processes after operations (Physiological) section.\n\n[|Entrance||] Surgery Room entrance",
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
      "description": "There are 10 rows of books in this shelf. The Particular diseases of the eye section. The Refraction and errors of refraction and accommodation section. The Artificial eyes and other prostheses section. The Examination.    Diagnosis section. The Optometry.    Opticians.    Eyeglasses section. The Ocular therapeutics section. The Eye surgery section. The Color vision tests, charts, etc. section. The Eye banks section. The Ophthalmic nursing section.\n\n[|Entrance||] Ophthalmology Room entrance",
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
      "description": "There are 12 rows of books in this shelf. The Neurosciences.    Biological psychiatry.    Neuropsychiatry section with books about Neurology.    Diseases of the nervous system and Psychiatry. The Specialties of internal medicine section with books about Diseases of the genitourinary system.    Urology, Immunologic diseases.    Allergy, Diseases of the digestive system.    Gastroenterology, Diseases of the endocrine glands.    Clinical endocrinology, Diseases of the musculoskeletal system, Diseases of the circulatory (Cardiovascular) system, Diseases of the connective tissues, Diseases of the blood and blood-forming organs, Diseases of the respiratory system, Metabolic diseases, and Nutritional diseases.    Deficiency diseases. The Examination.    Diagnosis section. The Neoplasms.    Tumors.    Oncology section. The Special situations and conditions section with books about Industrial medicine.    Industrial hygiene, Geriatrics, Sports medicine, Military medicine.    Naval medicine, Transportation medicine, Arctic medicine.    Tropical medicine, and Submarine medicine. The Infectious and parasitic diseases section. The Tuberculosis section. The Popular medicine section. The Medical emergencies.    Critical care.    Intensive care. section. The Psychosomatic medicine section. The Disease due to physical and chemical agents section. The Constitutional diseases (General) section.\n\n[|Entrance||] Internal medicine Room entrance",
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
      "description": "There are eight rows of books in this shelf. The Abnormalities and diseases of the female genital organs section. The Obstetrics section with books about Maternal care.    Prenatal care services, Obstetric operations.    Operative obstetrics, The embryo and fetus, Pregnancy, Puerperal state, and Labor.    Parturition. The Diseases of the breast section. The Conception.    Artificial insemination.    Contraception section. The Functional and systemic disorders.    Endocrine gynecology section. The Operative gynecology section. The Urogynecology and obstetric urology.    Urogynecologic section. The Sterilization of women section.\n\n[|Entrance||] Gynecology and obstetrics Room entrance",
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
      "description": "There are eight rows of books in this shelf. The Prosthetic dentistry.    Prosthodontics section. The Orthodontics section. The Oral surgery section. The Oral and dental anatomy and physiology section. The Oral and dental medicine.    Pathology.    Diseases section. The Operative dentistry.    Restorative dentistry section. The Practice of dentistry.    Dental economics section. The Preventive dentistry section.\n\n[|Entrance||] Dentistry Room entrance",
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
      "description": "There are 14 rows of books in this shelf. The Nutrition and feeding of children and adolescents section. The Diseases of children and adolescents section with books about Mental disorders.    Child psychiatry. The Nursing of children.    Pediatric nursing section. The Therapeutics section. The Examination.    Diagnosis section. The Physiology of children and adolescents section. The Child health.    Child health services section. The Premature infants section. The Newborn infants section. The Immunization of children (General) section. The Supposed prenatal influence.    Prenatal culture.    Stirpiculture section. The Infant and neonatal morbidity and mortality section. The Hospital care section. The Genetic aspects section.\n\n[|Entrance||] Pediatrics Room entrance",
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
      "description": "There are 11 rows of books in this shelf. The Hyperemias, inflammations, and infections of the skin section. The Diseases due to parasites section. The Atrophies.    Hypertrophies section. The Care and hygiene section. The Diseases of the glands, hair, nails section. The Therapeutics section. The Chronic ulcer of the skin.    Bedsores section. The Diseases due to psychosomatic and nerve disorders. section. The Pathological anatomy section. The Congenital disorders of the skin.    Nevi.    Moles section. The Pigmentations.    Albinism section.\n\n[|Entrance||] Dermatology Room entrance",
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
      "description": "There are four rows of books in this shelf. The Materia medica section with books about Pharmaceutical supplies, Pharmaceutical chemistry, Pharmaceutical technology, Pharmacognosy.    Pharmaceutical substances (Plant,, Pharmaceutical dosage forms, Assay methods.    Standardization.    Analysis, Microscopical examination of drugs, and Commercial preparations.    Patent medicines. The Pharmacopoeias section. The Formularies.    Collected prescriptions section. The Dispensatories section.\n\n[|Entrance||] Pharmacy and materia medica Room entrance",
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
      "description": "There are 16 rows of books in this shelf. The Nonprescription drugs.    Patent medicines section. The Diet therapy.    Dietary cookbooks section. The Physical medicine.    Physical therapy section. The Endocrinotherapy.    Organotherapy section. The Drugs and their actions section. The Rehabilitation therapy section. The Administration of drugs and other therapeutic agents section. The Immunotherapy.    Serotherapy section. The Chemotherapy section. The Other therapeutic procedures section. The Antibiotic therapy.    Antibiotics section. The Rehabilitation technology section. The Drug prescribing section. The Vitamin therapy section. The Prescription writing section. The Misuse of therapeutic drugs.    Medication errors section.\n\n[|Entrance||] Therapeutics.    Pharmacology Room entrance",
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
      "description": "There are 16 rows of books in this shelf. The General works section. The History of medicine.    Medical expeditions section. The Medical philosophy.    Medical ethics section. The Medical education.    Medical schools.    Research section. The Medicine as a profession.    Physicians section. The Computer applications to medicine.    Medical informatics section. The Medical records section. The Medical physics.    Medical radiology.    Nuclear medicine section. The Medical personnel and the public.    Physician and the public section. The Practice of medicine.    Medical practice economics section. The Medicine and disease in relation to psychology. section. The Medical technology section. The Biomedical engineering.    Electronics.    Instrumentation section. The Missionary medicine.    Medical missionaries section. The Medicine and the humanities.    Medicine and disease section. The Directories section.\n\n[|Entrance||] Medicine (General) Room entrance",
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
      "description": "There are six rows of books in this shelf. The Pathological anatomy and histology section. The Clinical pathology.    Laboratory technique section. The Theories of disease.    Etiology.    Pathogenesis section. The Manifestations of disease section. The General works section. The Post-mortem examination.    Autopsies section.\n\n[|Entrance||] Pathology Room entrance",
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
      "description": "There are three rows of books in this shelf. The Rhinology.    Diseases of the nose, accessory sinuses, section. The Laryngology.    Diseases of the throat section. The Otology.    Diseases of the ear section.\n\n[|Entrance||] Otorhinolaryngology Room entrance",
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
      "description": "There are five rows of books in this shelf. The Mental healing section. The Miscellaneous systems and treatments section. The Osteopathy section. The Chiropractic section. The Osteo-magnetics, neuropathy, etc., A-Z section.\n\n[|Entrance||] Other systems of medicine Room entrance",
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
      "description": "There is one row of books in this shelf. The Specialties in nursing section.\n\n[|Entrance||] Nursing Room entrance",
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
      "description": "There are 35 rows of books in this shelf. The Veterinary medicine section with books about Diseases of special classes of animals, Veterinary surgery, Special preclinical sciences, Veterinary medicine of special organs, regions, and, Veterinary pharmacology, Communicable diseases of animals (General), Veterinary acupuncture, Veterinary parasitology, Veterinary microbiology, bacteriology, virology, mycology, Predatory animals and their control, Other diseases and conditions, Veterinary epidemiology.    Epizootiology, Veterinary orthopedics, and Veterinary physical medicine. The Breeding and breeds section. The Cattle section with books about Dairy processing.    Dairy products and Dairying. The Pets section with books about Rabbits and hares, Dogs.    Dog racing, Fishes.    Aquariums, Cats, and Other animals. The Donkeys section. The Birds.    Cage birds section. The Horses section with books about Horsemanship.    Riding, Racing, Horse sports.    Horse shows, Draft horses, Feral horses.    Wild horses, Ponies, and Driving. The Poultry.    Eggs section. The Swine section. The Sheep.    Wool section. The Goats section. The Sericulture.    Silk culture section. The Feeds and feeding.    Animal nutrition section. The Small animal culture section. The Rangelands.    Range management.    Grazing section. The Bee culture section. The Laboratory animals section. The History section. The Exhibitions section. The Economic zoology section. The Housing and environmental control section. The Working animals section. The Brands and branding, and other means of identifying section. The Game birds section. The Fur-bearing animals section. The Cost, yield, and profit.    Accounting section. The Acclimatization section. The Lac-insects section. The Ornamental birds section. The Equipment and supplies section. The Mules section. The Insect rearing section. The Zoo animals section. The Transportation section. The Reptiles section.\n\n[|Entrance||] Animal culture Room entrance",
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
      "description": "There are 20 rows of books in this shelf. The Conservation of natural resources section. The Agricultural education section with books about Exhibitions.    Fairs, Agricultural extension work, Research.    Experimentation, and Historic farms. The History section. The Fertilizers and improvement of the soil section. The Soils.    Soil science section. The Soil conservation and protection section. The Farm economics.    Farm management.    Agricultural section. The Farm machinery and farm engineering section. The Agricultural meteorology.    Crops and climate section. The Agriculture and the environment section. The Melioration: Improvement, reclamation, fertilization, section with books about Special classes of lands and reclamation methods and Organic farming.    Organiculture. The Agricultural physics section. The Methods and systems of culture.    Cropping systems section. The Agricultural ecology (General) section. The Agricultural chemistry.    Agricultural chemicals section. The Documents and other collections section. The Agricultural missions, voyages, etc. section. The Agricultural structures.    Farm buildings section. The Plant growing media.    Potting soils section. The Agricultural conservation section.\n\n[|Entrance||] Agriculture (General) Room entrance",
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
      "description": "There are four rows of books in this shelf. The Aquaculture section with books about Fish culture, By region or country, Frogs, leeches, etc., and Mariculture. The Fisheries section with books about By region or country, Whaling, Fishery management.    Fishery policy, Fishery processing, Fishery oceanography.    Fishery meteorology, Economic aspects.    Finance, Shellfish fisheries.    Shellfish culture, Fishery for individual species, By oceans and seas, Fishery technology, Methods and gear.    Catching of fish, Fishery resources.    Fishery conservation, Seagrasses, Navigation, Seal fisheries.    Fur sealing, Porpoises.    Dolphins, Packing, transportation, and storage, Exploratory fishing, Algae culture, Sponge fisheries, Fishery research vessels, Sea otter, Safety measures, and Fishing port facilities. The Angling section. The Seafood gathering section.\n\n[|Entrance||] Aquaculture.    Fisheries.    Angling Room entrance",
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
      "description": "There are 26 rows of books in this shelf. The Flowers and flower culture.    Ornamental plants section with books about Greenhouses and greenhouse culture, Classes of plants, Container gardening, Indoor gardening and houseplants, Culture of individual plants, Flower arrangement and decoration, Marketing.    Cut flower industry.    Florists, Bonkei.    Tray landscapes, Flower shows.    Exhibitions, Preservation and reproduction of flowers, fruits, etc., Horticultural service industry, Roof gardening.    Balcony gardening, Plant propagation, Forcing, and Care and preparation of cut flowers and ornamental plants. The Field crops section. The Gardens and gardening section. The Landscape gardening.    Landscape architecture section. The Propagation section. The Vegetables section. The Pests and diseases section with books about Pest control and treatment of diseases.    Plant protection, Individual or types of plants or trees, Plant pathology, Weeds, parasitic plants, etc., Economic entomology, and Poisonous plants. The Parks and public reservations section. The Seeds.    Seed technology section. The Economic zoology applied to crops.    Agricultural zoology section. The Fruit and fruit culture section with books about Berries and small fruits, Nuts, and Grape culture.    Viticulture. The Horticulture.    Horticultural crops section. The Growth regulators section. The Food crops section. The Methods for special areas section. The Economic botany section. The Training and pruning section. The Nurseries.    Nursery industry section. The Harvesting, curing, storage section. The History section. The Forcing section. The Horticultural voyages, etc. section. The Irrigation farming section. The Artificial light gardening section. The Hydroponics.    Soilless agriculture section. The Tree crops section.\n\n[|Entrance||] Plant culture Room entrance",
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
      "description": "There are 11 rows of books in this shelf. The By country section. The Wildlife management.    Game protection section. The Bird hunting.    Fowling section. The Big game section. The Special methods and types of hunting section with books about Fox hunting, Coursing, and Ferreting. The Shooting section. The Wild animal trade section. The Wildlife-related recreation section. The Other game section. The Varmint hunting (General) section. The Predator hunting section.\n\n[|Entrance||] Hunting sports Room entrance",
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
      "description": "There are 13 rows of books in this shelf. The Administration.    Policy section. The Conservation and protection section. The Sylviculture section. The History of forestry.    Forest conditions section. The Exploitation and utilization section. The Forestry education section. The Forest meteorology.    Forest microclimatology section. The Documents section. The Forestry machinery and engineering section. The Voyages, etc. section. The Forest soils section. The Forest roads section. The Tools and implements section.\n\n[|Entrance||] Forestry Room entrance",
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
      "description": "There are seven rows of books in this shelf. The Nonmetallic minerals section. The Ore deposits and mining of particular metals section. The Mineral deposits.    Metallic ore deposits. section. The Building and ornamental stones section. The Metallurgy section. The Practical mining operations.    Safety measures section. The Mine transportation, haulage and hoisting. section.\n\n[|Entrance||] Mining engineering.    Metallurgy Room entrance",
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
      "description": "There are nine rows of books in this shelf. The Color photography section. The Photographic processing.    Darkroom technique section. The Applied photography section. The Cinematography.    Motion pictures section. The Lighting section. The Studio and laboratory section. The Cameras section. The Photomechanical processes section. The Transparencies.    Diapositives section.\n\n[|Entrance||] Photography Room entrance",
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
      "description": "There are eight rows of books in this shelf. The Technical hydraulics section. The River, lake, and water-supply engineering section. The Canals and inland navigation.    Waterways section. The Dams.    Barrages section. The River protective works.    Regulation. section. The General preliminary operations.    Dredging. section. The Harbors and coast protective works.    Coastal section. The Irrigation engineering.    Reclamation of section.\n\n[|Entrance||] Hydraulic engineering Room entrance\n[|Next||||||] Ocean engineering shelf",
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
      "description": "There are 13 rows of books in this shelf. The Industrial and factory sanitation section with books about Industrial and factory wastes. The Water supply for domestic and industrial purposes section with books about Water purification.    Water treatment and, Water pollution, and Water distribution systems. The Sewage collection and disposal systems. section. The Hazardous substances and their disposal section. The Environmental pollution section. The Municipal refuse.    Solid wastes section. The Environmental effects of industries and plants section. The Environmental protection section. The Special types of environment section. The Street cleaning.    Litter and its removal section. The Rural and farm sanitary engineering section. The Municipal engineering section. The Low temperature sanitary engineering section.\n\n[|Entrance||] Environmental technology.    Sanitary engineering Room entrance",
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
      "description": "There are nine rows of books in this shelf. The The house section. The Hospitality industry.    Hotels, clubs, section. The Cooking section. The Nutrition.    Foods and food supply section. The Taverns, barrooms, saloons section. The Dining-room service section. The ERROR, could not find section. The Building operation and housekeeping section. The Mobile home living section.\n\n[|Entrance||] Home economics Room entrance",
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
      "description": "There are 17 rows of books in this shelf. The Paints, pigments, varnishes, etc. section. The Low temperature engineering.    Cryogenic section. The Oils, fats, and waxes section with books about Petroleum refining.    Petroleum products. The Fuel section. The Polymers and polymer manufacture section. The Clay industries.    Ceramics.    Glass section. The Biotechnology section. The Chemical engineering section. The Food processing and manufacture section. The Fermentation industries.    Beverages.    Alcohol section. The Textile bleaching, dyeing, printing, etc. section. The Chemicals: Manufacture, use, etc. section. The Explosives and pyrotechnics section. The Cement industries section. The Gas industry section. The Illuminating industries (Nonelectric) section. The Industrial electrochemistry section.\n\n[|Entrance||] Chemical technology Room entrance",
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
      "description": "There are 13 rows of books in this shelf. The Telecommunication section. The Electronics section with books about Computer engineering.    Computer hardware and Photoelectronic devices (General). The Nuclear engineering.    Atomic power section. The Production of electric energy or power. section. The Electric lighting section. The Dynamoelectric machinery and auxiliaries section. The Electric apparatus and materials.    Electric section. The Applications of electric power section. The Distribution or transmission of electric power section. The Production of electricity by direct energy section. The Electric heating section. The Electricity for amateurs.    Amateur section. The Electric meters section.\n\n[|Entrance||] Electrical engineering.    Electronics.    Nuclear Room entrance",
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
      "description": "There are 23 rows of books in this shelf. The Surveying section. The Materials of engineering and construction. section. The Human engineering section. The Earthwork.    Foundations section. The Engineering instruments, meters, etc. section. The Applied optics.    Photonics section. The Systems engineering section. The Structural engineering (General) section. The Engineering mathematics.    Engineering analysis section. The Transportation engineering section. The Engineering geology.    Rock mechanics.    Soil section. The Mechanics of engineering.    Applied mechanics section. The Tunneling.    Tunnels section. The Engineering design section. The Engineering economy section. The Management of engineering works section. The Plasma engineering section. The Environmental engineering section. The Acoustics in engineering.    Acoustical section. The Engineering machinery, tools, and implements section. The Engineering meteorology section. The Bioengineering section. The Disasters and engineering section.\n\n[|Entrance||] Engineering (General).    Civil engineering (General) Room entrance",
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
      "description": "There are 14 rows of books in this shelf. The Animal products section. The Rubber industry section. The Textile industries section. The Metal manufactures.    Metalworking section. The Paper manufacture and trade section. The Production management.    Operations section. The Packaging section. The Tobacco industry section. The Wood technology.    Lumber section with books about Wood products.    Furniture and Chemical processing of wood. The Leather industries.    Tanning section. The Cereals and grain.    Milling industry section. The Furs section. The Stonework section. The Animal feeds and feed mills.    Pet food industry section.\n\n[|Entrance||] Manufactures Room entrance",
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
      "description": "There are 22 rows of books in this shelf. The Machinery exclusive of prime movers section. The Control engineering systems.    Automatic section. The Steam engineering section with books about Locomotives. The Miscellaneous motors and engines section. The Machine shops and machine shop practice section. The Mechanical movements section. The Power resources section. The Hoisting and conveying machinery section. The Mechanical devices and figures.    Automata. section. The Machine design and drawing section. The Turbines.    Turbomachines (General) section. The Mechanics applied to machinery.    Dynamics section. The Hydraulic machinery section. The Heat engines section. The Renewable energy sources section. The Energy conservation section. The Machine construction (General) section. The Pneumatic machinery section. The Agricultural machinery.    Farm machinery section. The Sewing machines section. The Vacuum technology section. The Lifting and pressing machinery section.\n\n[|Entrance||] Mechanical engineering and machinery Room entrance",
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
      "description": "There are 11 rows of books in this shelf. The Laundry work section. The Clothing manufacture.    Dressmaking.    Tailoring section. The Home arts.    Homecrafts section. The Metalworking section. The Articles for children section. The Hairdressing.    Beauty culture.    Barbers' work section. The Woodworking.    Furniture making.    Upholstering section. The Soft home furnishings section. The Painting.    Wood finishing section. The Lathework.    Turning section. The Manual training.    School shops section.\n\n[|Entrance||] Handicrafts.    Arts and crafts Room entrance",
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
      "description": "There are 10 rows of books in this shelf. The Mechanical drawing.    Engineering graphics section. The Industrial engineering.    Management section with books about Information technology, Human engineering in industry.    Man-, Production capacity.    Manufacturing capacity, Applied mathematics.    Quantitative methods, Automation, Work measurement.    Methods engineering, Standardization, and Managerial control systems. The Industrial safety.    Industrial accident section. The Technological change section. The Technical education.    Technical schools section. The Communication of technical information section. The Patents.    Trademarks section. The Industrial research.    Research and development section. The Exhibitions.    Trade shows.    World's fairs section. The Industrial directories section.\n\n[|Entrance||] Technology (General) Room entrance",
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
      "description": "There are 13 rows of books in this shelf. The Systems of building construction section. The Details in building design and construction section. The Construction by phase of the work (Building trades) section. The Protection of buildings section. The Buildings: Construction with reference to use section. The Heating and ventilation.    Air conditioning section. The Architectural engineering.    Structural section. The Plumbing and pipefitting section. The Illumination.    Lighting section. The Maintenance and repair section. The Decoration and decorative furnishings section. The Environmental engineering of buildings. section. The Construction equipment in building section.\n\n[|Entrance||] Building construction Room entrance",
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
      "description": "There are six rows of books in this shelf. The Railway construction section. The Electric railways section. The Railway equipment and supplies section. The Local and light railways section with books about Elevated railways and subways. The High speed ground transporation section. The Railway operation and management section.\n\n[|Entrance||] Railroad engineering and operation Room entrance",
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
      "description": "There are four rows of books in this shelf. The Motor vehicles.    Cycles section. The Astronautics.    Space travel section. The Aeronautics.    Aeronautical engineering section. The Rocket propulsion.    Rockets section.\n\n[|Entrance||] Motor vehicles.    Aeronautics.    Astronautics Room entrance",
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
      "description": "There are eight rows of books in this shelf. The Pavements and paved roads section. The Construction details section. The Highway design.    Interchanges and intersections section. The Pedestrian facilities section with books about Curbs.    Curbstones and Sidewalks.    Footpaths.    Flagging. The Location engineering section. The Roadside development.    Landscaping section. The Materials for roadmaking section. The Streets section.\n\n[|Entrance||] Highway engineering.    Roads and pavements Room entrance",
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
      "description": "There are 19 rows of books in this shelf. The War.    Philosophy.    Military sociology section. The History of military science section. The History of arms and armor section. The Military education and training section. The Military planning section. The Atomic warfare.    Atomic weapons section. The Commando tactics section. The Tactics section. The Strategy section. The Military life, manners and customs, antiquities, etc. section. The War games section. The Joint operations.    Combined operations section. The Logistics section. The Amphibious warfare section. The Physical training of soldiers section. The Artillery and rifle ranges section. The Maneuvers (combined arms) section. The Army clubs section. The Historiography section.\n\n[|Entrance||] Military science (General) Room entrance",
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
      "description": "There are 12 rows of books in this shelf. The Attack and defense.    Siege warfare section. The Field engineering section. The Fortification section. The Land mines, etc. section. The Military telegraphy and telephony section. The Military motor vehicles section. The Military surveying, topography, and    mapping section. The Bridges section. The Military signaling section. The Technical troops and other special corps section. The Tactics and regulations section. The Tunnels section.\n\n[|Entrance||] Air forces.    Air warfare Room entrance\n[|Next||||||] Air forces.    Air warfare shelf",
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
      "description": "There are nine rows of books in this shelf. The By region or country section. The Equipment and supplies section. The Tactics section. The Aerial reconnaissance section. The Education and training section. The Organization.    Personnel management section. The Military aeronautical research section. The Air defenses section. The Air bases section.\n\n[|Previous||] Military engineering shelf\n[|Next||||||] Military astronautics.    Space warfare.    Space surveillance shelf",
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
      "description": "There is one row of books in this shelf. The By region or country section.\n\n[|Previous||] Air forces.    Air warfare shelf",
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
      "description": "There are eight rows of books in this shelf. The By region or country section. The Military communication section. The Military geography section. The Civil defense section. The Plans for attack and defense section. The Routes of travel.    Distances section. The Mobilization section. The War damage in industry.    Industrial defense section.\n\n[|Entrance||] Armies: Organization, distribution, military situation Room entrance",
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
      "description": "There are 16 rows of books in this shelf. The Provision for veterans section. The Intelligence section. The Minorities, women, etc. in armed forces section. The Enlistment, recruiting, etc. section. The Civilian personnel departments section. The Warrant officers.    Noncommissioned officers section. The Retired military personnel section. The Compulsory service.    Conscription and exemption section. The Officers section. The Records, returns, muster rolls, etc. section. The Psychological warfare.    Propaganda section. The Military pensions, etc. section. The Soldiers' and sailors' homes section. The Sabotage section. The Furloughs section. The Adjutant generals' offices section.\n\n[|Entrance||] Military administration Room entrance",
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
      "description": "There are 10 rows of books in this shelf. The Airborne troops.    Parachute troops section. The Tactics.    Maneuvers.    Drill regulations section. The Small arms.    Swords, etc. section. The Firing.    Military sharpshooting section. The Manual of arms section. The Bayonet drill section. The Ski troops section. The Mounted infantry section. The Mountain troops section. The Airmobile operations section.\n\n[|Entrance||] Infantry Room entrance",
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
      "description": "There are 12 rows of books in this shelf. The Ordnance material (Ordnance proper) section. The Weapons systems section. The Ballistics.    Velocities and motions of projectiles section. The Field artillery section. The Seacoast artillery section. The Ordnance and small arms section. The Tactics.    Maneuvers.    Drill regulations section. The Arsenals, magazines, armories, etc. section. The Siege artillery section. The Artillery instruments.    Fire control, etc. section. The Garrison artillery section. The Howitzer artillery.    Mortar batteries section.\n\n[|Entrance||] Artillery Room entrance",
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
      "description": "There are eight rows of books in this shelf. The Transportation section. The Clothing and equipment section. The Supplies and stores section. The Organization of the service.    By region or country section. The Barracks.    Quarters.    Camps section. The Subsistence section. The Horses.    Mules.    Remount service section. The Equipage.    Field kits section.\n\n[|Entrance||] Maintenance and transportation Room entrance",
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
      "description": "There are seven rows of books in this shelf. The Medical and sanitary services section. The Military hygiene and sanitation section. The Care of sick and wounded.    Relief societies section. The Chaplains section. The Recreation and information services section. The Public relations.    Press.    War correspondents section. The Military social work.    Social welfare services section.\n\n[|Entrance||] Other services Room entrance",
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
      "description": "There are four rows of books in this shelf. The Horse cavalry section. The Tactics.    Maneuvers.    Drill regulations section. The Horses section. The Armored cavalry section.\n\n[|Entrance||] Cavalry.    Armor Room entrance",
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
      "description": "There are two rows of books in this shelf. The United States section. The Other regions or countries section.\n\n[|Entrance||] Navies: Organization, distribution, naval situation Room entrance",
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
      "description": "There are six rows of books in this shelf. The Special types of vessels section. The History section. The Marine engineering section with books about ERROR, could not find. The Shipbuilding industry.    Shipyards section. The Study and teaching section. The Contracts and specifications section.\n\n[|Entrance||] Naval architecture.    Shipbuilding.    Marine engineering Room entrance",
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
      "description": "There are 14 rows of books in this shelf. The Lighthouse service section. The Study and teaching section. The Science of navigation section. The History, conditions, etc. section. The Nautical instruments section. The Sailing directions.    Pilot guides section. The Saving of life and property section. The Shipwrecks and fires section. The Signaling section. The Icebreaking operations section. The Marine hydrography.    Hydrographic surveying section. The Harbors.    Ports section. The Pilots and pilotage section. The Tide and current tables section.\n\n[|Entrance||] Navigation.    Merchant marine Room entrance",
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
      "description": "There are eight rows of books in this shelf. The Naval aviation section. The Coast guard and coast signal service section. The Medical service section. The Naval communication by telegraphy, telephone, etc. section. The Chaplains section. The Recreation and information service section. The Public relations.    Press.    War    correspondents section. The Social work.    Social welfare services section.\n\n[|Entrance||] Minor services of navies Room entrance",
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
      "description": "There are 11 rows of books in this shelf. The War vessels: Construction, armament, etc. section. The History and antiquities of naval science section. The Naval education section. The Naval life, manners and customs, antiquities, etc. section. The Naval research section. The Strategy section. The Tactics section. The Submarine warfare section. The Military oceanography section. The Automation in the naval sciences section. The Navy clubs section.\n\n[|Entrance||] Naval science (General) Room entrance",
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
      "description": "There are six rows of books in this shelf. The Officers section. The By region or country section. The Civil department section. The Enlisted personnel section. The Minorities, women, etc. in navies section. The Warrant officers section.\n\n[|Entrance||] Naval administration Room entrance",
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
      "description": "There are five rows of books in this shelf. The By region or country section. The Drill regulations section. The Shooting section. The Training camps section. The Barracks, quarters, etc. section.\n\n[|Entrance||] Marines Room entrance",
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
      "description": "There are five rows of books in this shelf. The Ordnance and arms (General) section. The Naval weapons systems section. The Ordnance instructions and drill books section. The By region or country section. The Ordnance material (Ordnance proper) section.\n\n[|Entrance||] Naval ordnance Room entrance",
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
      "description": "There are six rows of books in this shelf. The Supplies and stores section. The Clothing and equipment section. The Equipment of vessels, supplies, allowances, etc. section. The Organization of service section. The Subsistence.    Provisioning section. The Navy yards and stations.    Shore facilities section.\n\n[|Entrance||] Naval maintenance Room entrance",
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
      "description": "There are five rows of books in this shelf. The By region or country section. The Small arms section. The Drill regulations section. The Shooting section. The Small boat service section.\n\n[|Entrance||] Naval personnel Room entrance",
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
      "description": "There are nine rows of books in this shelf. The Booksellers' general catalogs of modern books section. The Choice of books.    Books and reading.    Book reviews section. The Books for special classes of persons, institutions, etc. section. The Best books section. The Introduction to bibliography. Theory, philosophy, section. The Special classes of books section. The General bibliographies section. The Anonyms and pseudonyms section. The Biography of bibliographers section.\n\n[|Entrance||] National bibliography Room entrance\n[|Next||||||] Books (General).    Writing.    Paleography shelf",
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
      "description": "There are three rows of books in this shelf. The Writing section with books about Shorthand.    Stenography.    Phonography, Typewriters.    Typewriting.    Keyboards.    Keyboarding, Calligraphy.    Penmanship, Word processing, Cryptography.    Ciphers.    Invisible writing, Autographs.    Signatures, and Duplicating processes.    Copying services. The History of books and bookmaking section. The Manuscripts.    Paleography section.\n\n[|Previous||] General bibliography shelf\n[|Next||||||] National bibliography shelf",
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
      "description": "There are six rows of books in this shelf. The America section. The Africa section. The Europe section. The Australia.    Oceania section. The Asia section. The Eastern Hemisphere section.\n\n[|Previous||] Books (General).    Writing.    Paleography shelf\n[|Next||||||] Book industries and trade shelf",
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
      "description": "There are 12 rows of books in this shelf. The Practical printing section. The History section. The Bookselling and publishing section. The Freedom of the press.    Censorship section. The Bookbinding.    Book decoration section. The Paper.    Watermarks, etc. section. The Printers and printing establishments section with books about Medallic history of printing.    Tokens. The Printing section. The Copyright section. The Incunabula.    Block books section. The Printer's marks, mottoes, etc. section. The Representation or reproduction of books, documents, section.\n\n[|Previous||] National bibliography shelf\n[|Next||||||] Libraries shelf",
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
      "description": "There are nine rows of books in this shelf. The Library reports.    History.    Statistics section. The Book collecting section. The Libraries (General) section. The Library science.    Information science section with books about Personnel, Library buildings.    Library architecture, The collections.    The books, Classes of libraries, Library administration and organization.    Constitution, Finance.    Insurance, Automation, Library information networks, Library education.    Research, Reproduction of library materials.    Storage media of, Trustees.    Library boards, committees, etc., Library communication systems, Supplies.    Shelving.    Bookstacks, Branches.    Delivery stations.    Bookmobiles, and Library service agencies. The The collections.    The books section with books about Libraries in relation to special topics. The Collections section. The Private libraries section. The Library catalogs and bulletins section. The Booksellers' catalogs section.\n\n[|Previous||] Book industries and trade shelf\n[|Next||||||] Personal bibliography shelf",
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
      "description": "There are five rows of books in this shelf. The Information services. Information centers section. The Information in specific formats or media section with books about Electronic information resources, Motion pictures. Video recordings, Pictures. Photographs, and Sound recordings. The Electronic information resources section with books about Computer network resources. The Government information section. The Information superhighway section.\n\n[|Entrance||] Information resources (General) Room entrance",
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
