var gameData = {
  "commandCounter": 0,
  "gameOver": false,
  "introText": "\n\nWelcome to the MUD of Babel!\n",
  "outroText": "Thanks For playing!",
  "player": {
    "currentLocation": "Plaza-K",
    "inventory": {},
    "lightSource": false
  },
  "map": {
    "Plaza-K": {
      "firstVisit": true,
      "displayName": "Law Plaza",
      "description": "You are in an expansive plaza surrounded by 275 buildings conforming Law.\nThe buildings are accessible via their classification code, visible above the main door:\n[ K-KF ] \u201cLaw of the United States (Federal) Building\u201d\n[ K-KFW] \u201cLaw of Washington Building\u201d\n[ K-KFM] \u201cLaw of Maine Building\u201d\n[ K-KFT] \u201cLaw of Tennessee Building\u201d\n[ K-K  ] \u201cComparative law.  International uniform law Building\u201d\n[ K-KZ ] \u201cLaw of nations Building\u201d\n[ K-KD ] \u201cLaw of England and Wales Building\u201d\n[ K-KFP] \u201cLaw of Pennsylvania Building\u201d\n[ K-KFI] \u201cLaw of Idaho Building\u201d\n[ K-KFN] \u201cLaw of Nebraska Building\u201d\n[ K-KFC] \u201cLaw of California Building\u201d\n[ K-KFO] \u201cLaw of Ohio Building\u201d\n[ K-KFL] \u201cLaw of Louisiana Building\u201d\n[ K-KFA] \u201cLaw of Alabama Building\u201d\n[ K-KLA] \u201cRussia, Soviet Union Building\u201d\n[ K-KKT] \u201cLaw of Spain Building\u201d\n[ K-KMT] \u201cSaudi Arabia Building\u201d\n[ K-KJM] \u201cLaw of Croatia Building\u201d\n[ K-KBP] \u201cIslamic law.  Shar\u012b\u02bbah.  Fiqh Building\u201d\n[ K-KBR] \u201cHistory of canon law Building\u201d\n[ K-KZA] \u201cLaw of the sea Building\u201d\n[ K-KNQ] \u201cChina (People\u2019s Republic, 1949-    ) Building\u201d\n[ K-KJE] \u201cRegional organization and integration (Europe) Building\u201d\n[ K-KFV] \u201cLaw of Vermont Building\u201d\n[ K-KNN] \u201cLaw of China Building\u201d\n[ K-KMM] \u201cWest Bank Building\u201d\n[ K-KJC] \u201cRegional comparative and uniform law (Europe) Building\u201d\n[ K-KMK] \u201cIsrael Building\u201d\n[ K-KTL] \u201cSouth Africa, Republic of Building\u201d\n[ K-KMC] \u201cRegional comparative and uniform law Building\u201d\n[ K-KEN] \u201cLaw of New Brunswick Building\u201d\n[ K-KRP] \u201cEthiopia Building\u201d\n[ K-KJA] \u201cRoman Law Building\u201d\n[ K-KJV] \u201cLaw of France Building\u201d\n[ K-KBU] \u201cLaw of the Roman Catholic Church. The Holy See Building\u201d\n[ K-KLB] \u201cRussia (Federation, 1992-    ) Building\u201d\n[ K-KK ] \u201cLaw of Germany Building\u201d\n[ K-KFG] \u201cLaw of Georgia Building\u201d\n[ K-KHA] \u201cArgentina Building\u201d\n[ K-KLW] \u201cUzbekistan Building\u201d\n[ K-KNW] \u201cIndonesia Building\u201d\n[ K-KQC] \u201cRegional comparative and uniform law Building\u201d\n[ K-KDZ] \u201cAmerica.  North America Building\u201d\n[ K-KFK] \u201cLaw of Kansas Building\u201d\n[ K-KDC] \u201cLaw of Scotland Building\u201d\n[ K-KNR] \u201cHong Kong Building\u201d\n[ K-KFF] \u201cLaw of Florida Building\u201d\n[ K-KBM] \u201cJewish law.  Halakah Building\u201d\n[ K-KJ ] \u201cHistory of Law (Europe) Building\u201d\n[ K-KL ] \u201cHistory of law.  The ancient orient Building\u201d\n[ K-KE ] \u201cLaw of Canada Building\u201d\n[ K-KFD] \u201cLaw of Delaware Building\u201d\n[ K-KDK] \u201cLaw of Ireland (Eire) Building\u201d\n[ K-KTT] \u201cTanzania Building\u201d\n[ K-KNX] \u201cConstitutional law Building\u201d\n[ K-KTY] \u201cZambia Building\u201d\n[ K-KFS] \u201cLaw of South Carolina Building\u201d\n[ K-KNC] \u201cRegional comparative and uniform law Building\u201d\n[ K-KFH] \u201cLaw of Hawaii Building\u201d\n[ K-KFX] \u201cLaws of the cities Building\u201d\n[ K-KJT] \u201cLaw of Finland Building\u201d\n[ K-KQW] \u201cCameroon Building\u201d\n[ K-KB ] \u201cReligious law in general.  Comparative religious law. Building\u201d\n[ K-KGL] \u201cBritish West Indies (General) Building\u201d\n[ K-KGF] \u201cMexico Building\u201d\n[ K-KPL] \u201cPakistan Building\u201d\n[ K-KNS] \u201cHistory of law Building\u201d\n[ K-KFR] \u201cLaw of Rhode Island Building\u201d\n[ K-KGV] \u201cPuerto Rico Building\u201d\n[ K-KKW] \u201cLaw of Switzerland Building\u201d\n[ K-KKE] \u201cLaw of Greece Building\u201d\n[ K-KKY] \u201cLaw of Ukraine Building\u201d\n[ K-KKP] \u201cLaw of Poland Building\u201d\n[ K-KKM] \u201cLaw of Netherlands Building\u201d\n[ K-KKK] \u201cLaw of Malta Building\u201d\n[ K-KJK] \u201cLaw of Bosnia and Hercegovina Building\u201d\n[ K-KKH] \u201cLaw of Kosovo Building\u201d\n[ K-KKJ] \u201cLaw of Lithuania Building\u201d\n[ K-KGD] \u201cGuatemala Building\u201d\n[ K-KHQ] \u201cPeru Building\u201d\n[ K-KST] \u201cMali Building\u201d\n[ K-KTA] \u201cNigeria Building\u201d\n[ K-KGS] \u201cHaiti Building\u201d\n[ K-KHH] \u201cColombia Building\u201d\n[ K-KG ] \u201cLatin America (General) Building\u201d\n[ K-KHK] \u201cEcuador Building\u201d\n[ K-KHC] \u201cBolivia Building\u201d\n[ K-KNP] \u201cChina (Republic, 1949-    ).  Taiwan Building\u201d\n[ K-KLR] \u201cKhorezmskai\uf04da Sovetskai\uf04da Sot\uf04dsialisticheskai\uf04da Building\u201d\n[ K-KTZ] \u201cZimbabwe Building\u201d\n[ K-KBS] \u201cCanon law of Eastern Churches Building\u201d\n[ K-KPA] \u201cKorea.  South Korea Building\u201d\n[ K-KUQ] \u201cNew Zealand Building\u201d\n[ K-KVN] \u201cFiji Building\u201d\n[ K-KVW] \u201cNew Caledonia Building\u201d\n[ K-KFU] \u201cLaw of Utah Building\u201d\n[ K-KJR] \u201cLaw of Denmark Building\u201d\n[ K-KKQ] \u201cLaw of Portugal Building\u201d\n[ K-KJS] \u201cLaw of Estonia Building\u201d\n[ K-KKZ] \u201cLaw of Yugoslavia Building\u201d\n[ K-KJP] \u201cLaw of Czech Republic (1993-        ) Building\u201d\n[ K-KGB] \u201cCosta Rica Building\u201d\n[ K-KHW] \u201cVenezuela Building\u201d\n[ K-KGE] \u201cHonduras Building\u201d\n[ K-KGG] \u201cNicaragua Building\u201d\n[ K-KHF] \u201cChile Building\u201d\n[ K-KHP] \u201cParaguay Building\u201d\n[ K-KKA] \u201cLaw of East Germany Building\u201d\n[ K-KKV] \u201cLaw of Sweden Building\u201d\n[ K-KSW] \u201cMorocco Building\u201d\n[ K-KM ] \u201cGeneral Building\u201d\n[ K-KLF] \u201cBelarus (Republic) Building\u201d\n[ K-KH ] \u201cGeneral Building\u201d\n[ K-KPT] \u201cThailand Building\u201d\n[ K-KPM] \u201cPhilippines Building\u201d\n[ K-KPV] \u201cVietnam Building\u201d\n[ K-KPP] \u201cSingapore Building\u201d\n[ K-KMH] \u201cIran Building\u201d\n[ K-KSV] \u201cMayotte Building\u201d\n[ K-KSY] \u201cNamibia Building\u201d\n[ K-KQK] \u201cBotswana Building\u201d\n[ K-KQH] \u201cAngola Building\u201d\n[ K-KSX] \u201cMozambique Building\u201d\n[ K-KSK] \u201cKenya Building\u201d\n[ K-KRU] \u201cGabon Building\u201d\n[ K-KSL] \u201cLesotho Building\u201d\n[ K-KRX] \u201cGhana Building\u201d\n[ K-KSS] \u201cMalawi Building\u201d\n[ K-KTW] \u201cUganda Building\u201d\n[ K-KTD] \u201cRwanda Building\u201d\n[ K-KTX] \u201cCongo (Democratic Republic) Building\u201d\n[ K-KRS] \u201cFrench West Africa Building\u201d\n[ K-KTG] \u201cSenegal Building\u201d\n[ K-KKX] \u201cLaw of Turkey Building\u201d\n[ K-KLE] \u201cAzerbaijan Building\u201d\n[ K-KRM] \u201cEgypt Building\u201d\n[ K-KMN] \u201cKuwait Building\u201d\n[ K-KMX] \u201cYemen Building\u201d\n[ K-KTQ] \u201cSudan Building\u201d\n[ K-KQG] \u201cAlgeria Building\u201d\n[ K-KMV] \u201cUnited Arab Emirates Building\u201d\n[ K-KHD] \u201cBrazil Building\u201d\n[ K-KHN] \u201cGuyana Building\u201d\n[ K-KHU] \u201cUruguay Building\u201d\n[ K-KLS] \u201cKyrgyzstan Building\u201d\n[ K-KSA] \u201cGuinea Building\u201d\n[ K-KPF] \u201cMacao Building\u201d\n[ K-KLD] \u201cArmenian SSR (to 1991) Building\u201d\n[ K-KTV] \u201cTunisia Building\u201d\n[ K-KMP] \u201cLebanon Building\u201d\n[ K-KMF] \u201cBahrain Building\u201d\n[ K-KKS] \u201cLaw of Slovenia Building\u201d\n[ K-KJW] \u201cFrench regions, provinces, cities, etc. Building\u201d\n[ K-KJJ] \u201cLaw of Austria Building\u201d\n[ K-KZD] \u201cSpace law.  Law of outer space Building\u201d\n[ K-KWW] \u201cWestern Samoa Building\u201d\n[ K-KVP] \u201cFrench Polynesia Building\u201d\n[ K-KEO] \u201cLaw of Ontario Building\u201d\n[ K-KEA] \u201cLaw of Alberta Building\u201d\n[ K-KEB] \u201cLaw of British Columbia Building\u201d\n[ K-KEQ] \u201cLaw of Qu\u00e9bec Building\u201d\n[ K-KWH] \u201cPapua New Guinea Building\u201d\n[ K-KVS] \u201cMidway Islands Building\u201d\n[ K-KWG] \u201cPalau Building\u201d\n[ K-KVQ] \u201cGuam Building\u201d\n[ K-KJN] \u201cLaw of Cyprus Building\u201d\n[ K-KKF] \u201cLaw of Hungary Building\u201d\n[ K-KHM] \u201cFrench Guiana Building\u201d\n[ K-KKN] \u201cLaw of Norway Building\u201d\n[ K-KRB] \u201cCentral African Republic Building\u201d\n[ K-KTU] \u201cTogo Building\u201d\n[ K-KQT] \u201cBurkina Faso Building\u201d\n[ K-KSH] \u201cC\u00f4te d\u2019Ivoire Building\u201d\n[ K-KML] \u201cJerusalem Building\u201d\n[ K-KMJ] \u201cIraq Building\u201d\n[ K-KSP] \u201cLibya Building\u201d\n[ K-KGH] \u201cPanama Building\u201d\n[ K-KGQ] \u201cDominican Republic Building\u201d\n[ K-KGN] \u201cCuba Building\u201d\n[ K-KGC] \u201cEl Salvador Building\u201d\n[ K-KSN] \u201cLiberia Building\u201d\n[ K-KSZ] \u201cNiger Building\u201d\n[ K-KPC] \u201cDemocratic People\u2019s Republic of Korea.  North Korea Building\u201d\n[ K-KQ ] \u201cLaw of indigenous peoples Building\u201d\n[ K-KWC] \u201cNorthern Mariana Islands Building\u201d\n[ K-KNM] \u201cCambodia Building\u201d\n[ K-KBT] \u201cCanon law of Eastern Rite Churches in Communion with the Building\u201d\n[ K-KJG] \u201cLaw of Albania Building\u201d\n[ K-KGX] \u201cTrinidad and Tobago Building\u201d\n[ K-KKR] \u201cLaw of Romania Building\u201d\n[ K-KJQ] \u201cLaw of Slovakia (1993-        ) Building\u201d\n[ K-KLM] \u201cMoldova Building\u201d\n[ K-KDE] \u201cLaw of Northern Ireland Building\u201d\n[ K-KES] \u201cLaw of Saskatchewan Building\u201d\n[ K-KNK] \u201cBrunei Building\u201d\n[ K-KPE] \u201cLaos Building\u201d\n[ K-KPS] \u201cSri Lanka Building\u201d\n[ K-KPJ] \u201cNepal Building\u201d\n[ K-KNL] \u201cBurma Building\u201d\n[ K-KNG] \u201cBangladesh Building\u201d\n[ K-KSE] \u201cEquatorial Guinea Building\u201d\n[ K-KLT] \u201cTajikistan Building\u201d\n[ K-KLV] \u201cTurkmenistan Building\u201d\n[ K-KRE] \u201cComoros Building\u201d\n[ K-KTH] \u201cSeychelles Building\u201d\n[ K-KSR] \u201cMadagascar Building\u201d\n[ K-KQE] \u201cRegional organization and integration Building\u201d\n[ K-KRN] \u201cEritrea Building\u201d\n[ K-KKG] \u201cLaw of Iceland Building\u201d\n[ K-KLH] \u201cGeorgia (Republic) Building\u201d\n[ K-KGA] \u201cBelize Building\u201d\n[ K-KKI] \u201cLaw of Latvia Building\u201d\n[ K-KTF] \u201cSao Tome and Principe Building\u201d\n[ K-KJH] \u201cLaw of Andorra Building\u201d\n[ K-KWL] \u201cSolomon Islands Building\u201d\n[ K-KGW] \u201cSaint Lucia Building\u201d\n[ K-KGZ] \u201cVirgin Islands of the United States Building\u201d\n[ K-KGR] \u201cGrenada Building\u201d\n[ K-KRV] \u201cGambia Building\u201d\n[ K-KFZ] \u201cLaws of the territories.  Laws of the Confederate States of Building\u201d\n[ K-KDG] \u201cLaw of Isle of Man.  Channel Islands Building\u201d\n[ K-KGJ] \u201cGeneral Building\u201d\n[ K-KLN] \u201cRussian S.F.S.R. (to 1991) Building\u201d\n[ K-KMQ] \u201cPalestine (to 1948) Building\u201d\n[ K-KEY] \u201cLaw of Yukon Building\u201d\n[ K-KNV] \u201cFrench Indochina.  Indochina (Federation) Building\u201d\n[ K-KMY] \u201cYeman (People\u2019s Democratic Republic) (to 1990) Building\u201d\n[ K-KHS] \u201cSurinam Building\u201d\n[ K-KMU] \u201cSyria Building\u201d\n[ K-KKL] \u201cLaw of Montenegro Building\u201d\n[ K-KSG] \u201cItalian Somaliland Building\u201d\n[ K-KEZ] \u201cLaw of Law of cities, towns, etc. Building\u201d\n[ K-KEM] \u201cLaw of Manitoba Building\u201d\n[ K-KTK] \u201cSomalia Building\u201d\n[ K-KGT] \u201cJamaica Building\u201d\n[ K-KGY] \u201cTurks and Caicos Islands Building\u201d\n[ K-KEP] \u201cLaw of Law of Prince Edward Island Building\u201d\n[ K-KQV] \u201cBurundi Building\u201d\n[ K-KWE] \u201cPacific Islands (Trust Territory) Building\u201d\n[ K-KPW] \u201cVietnam (Republic).  South Vietnam Building\u201d\n[ K-KWX] \u201cAntarctica Building\u201d\n[ K-KVH] \u201cBritish New Guinea (Territory of Papua) Building\u201d\n[ K-KWR] \u201cVanuatu Building\u201d\n[ K-KWA] \u201cNiue Building\u201d\n[ K-KNF] \u201cAfghanistan Building\u201d\n[ K-KRY] \u201cGibraltar Building\u201d\n[ K-KRC] \u201cChad Building\u201d\n[ K-KTJ] \u201cSierra Leone Building\u201d\n[ K-KTR] \u201cSwaziland Building\u201d\n[ K-KTC] \u201cR\u00e9union Building\u201d\n[ K-KRK] \u201cDjibouti Building\u201d\n[ K-KGM] \u201cCayman Islands Building\u201d\n[ K-KGP] \u201cDominica Building\u201d\n[ K-KRG] \u201cCongo (Brazzaville) Building\u201d\n[ K-KVU] \u201cNauru Building\u201d\n[ K-KQJ] \u201cBenin Building\u201d\n[ K-KNE] \u201cRegional organization and integration Building\u201d\n[ K-KMS] \u201cQatar Building\u201d\n[ K-KQM] \u201cBritish Central Africa Protectorate Building\u201d\n[ K-KNY] \u201cCities, etc. Building\u201d\n[ K-KLP] \u201cUkraine Building\u201d\n[ K-KQX] \u201cCape Verde Building\u201d\n[ K-KGK] \u201cAruba Building\u201d\n[ K-KPH] \u201cMaldives Building\u201d\n[ K-KSU] \u201cMauritania Building\u201d\n[ K-KSC] \u201cGuinea-Bissau Building\u201d\n[ K-KVL] \u201cCook Islands Building\u201d\n[ K-KWP] \u201cTonga Building\u201d\n[ K-KNH] \u201cBhutan Building\u201d\n[ K-KMG] \u201cGaza Building\u201d\n[ K-KHL] \u201cFalkland Islands Building\u201d\n[ K-KWQ] \u201cTuvalu Building\u201d\n[ K-KRR] \u201cFrench Equatorial Africa Building\u201d\n[ K-KVR] \u201cKiribati Building\u201d\n[ K-KU ] \u201cLaw of Australian peoples.  Aborigines Building\u201d.",
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
        }
      }
    },
    "K-KF-KF1-9827": {
      "firstVisit": true,
      "displayName": "Law of the United States (Federal)",
      "description": "Description for \u201cLaw of the United States (Federal) Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of the United States (Federal) Room\u201d.",
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
      "description": "Description for \u201cLaw of Washington Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Washington Room\u201d.",
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
      "description": "Description for \u201cLaw of Maine Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Maine Room\u201d.",
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
      "description": "Description for \u201cLaw of Tennessee Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Tennessee Room\u201d.",
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
      "description": "Description for \u201cComparative law.  International uniform law Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cJurisprudence.  Philosophy and theory of law Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cMiscellany Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cPrivate international law.  Conflict of laws Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cThe legal profession Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cLaw societies.  International bar associations Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cEthnological jurisprudence.  Primitive law Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cHistory of law Room\u201d. You can exit to the floor foyer.",
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
      "description": "There are 23 rooms throughout this building in 3 floors. You are in the first floor. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n[  South  ] \u201cComparative law.  International uniform law Room\u201d\n[  North  ] \u201cJurisprudence.  Philosophy and theory of law Room\u201d\n[  East   ] \u201cMiscellany Room\u201d\n[  West   ] \u201cPrivate international law.  Conflict of laws Room\u201d\n[SouthEast] \u201cThe legal profession Room\u201d\n[NorthWest] \u201cLaw societies.  International bar associations Room\u201d\n[SouthWest] \u201cEthnological jurisprudence.  Primitive law Room\u201d\n[NorthEast] \u201cHistory of law Room\u201d.",
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
      "description": "Description for \u201cLegal research Room\u201d. You can exit to the floor foyer.",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_K-K"
        }
      }
    },
    "K-K-K58": {
      "firstVisit": true,
      "displayName": "Maxims.  Quotations",
      "description": "Description for \u201cMaxims.  Quotations Room\u201d. You can exit to the floor foyer.",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_K-K"
        }
      }
    },
    "K-K-K50-54": {
      "firstVisit": true,
      "displayName": "Dictionaries.  Words and phrases",
      "description": "Description for \u201cDictionaries.  Words and phrases Room\u201d. You can exit to the floor foyer.",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_K-K"
        }
      }
    },
    "K-K-K133": {
      "firstVisit": true,
      "displayName": "Legal aid.  Legal assistance to the poor",
      "description": "Description for \u201cLegal aid.  Legal assistance to the poor Room\u201d. You can exit to the floor foyer.",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_K-K"
        }
      }
    },
    "K-K-K48": {
      "firstVisit": true,
      "displayName": "Encyclopedias",
      "description": "Description for \u201cEncyclopedias Room\u201d. You can exit to the floor foyer.",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_K-K"
        }
      }
    },
    "K-K-K37-44": {
      "firstVisit": true,
      "displayName": "Bibliography",
      "description": "Description for \u201cBibliography Room\u201d. You can exit to the floor foyer.",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_K-K"
        }
      }
    },
    "K-K-K100-103": {
      "firstVisit": true,
      "displayName": "Legal education",
      "description": "Description for \u201cLegal education Room\u201d. You can exit to the floor foyer.",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_K-K"
        }
      }
    },
    "K-K-K1-36.5": {
      "firstVisit": true,
      "displayName": "Periodicals",
      "description": "Description for \u201cPeriodicals Room\u201d. You can exit to the floor foyer.",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "2_K-K"
        }
      }
    },
    "2_K-K": {
      "firstVisit": true,
      "displayName": "\u201cComparative law.  International uniform law Building\u201d, 2nd Floor",
      "description": "You are in the 2nd floor. There are 8 rooms:\n[South    ] \u201cLegal research Room\u201d\n[North    ] \u201cMaxims.  Quotations Room\u201d\n[East     ] \u201cDictionaries.  Words and phrases Room\u201d\n[West     ] \u201cLegal aid.  Legal assistance to the poor Room\u201d\n[SouthEast] \u201cEncyclopedias Room\u201d\n[NorthWest] \u201cBibliography Room\u201d\n[SouthWest] \u201cLegal education Room\u201d\n[NorthEast] \u201cPeriodicals Room\u201d.",
      "interactables": {},
      "items": {},
      "exits": {
        "down": {
          "displayName": "Down",
          "destination": "1_K-K"
        },
        "up": {
          "displayName": "Up",
          "destination": "3_K-K"
        },
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
        }
      }
    },
    "K-K-K170": {
      "firstVisit": true,
      "displayName": "Biography",
      "description": "Description for \u201cBiography Room\u201d. You can exit to the floor foyer.",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_K-K"
        }
      }
    },
    "K-K-K94": {
      "firstVisit": true,
      "displayName": "Legal composition and draftsmanship",
      "description": "Description for \u201cLegal composition and draftsmanship Room\u201d. You can exit to the floor foyer.",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_K-K"
        }
      }
    },
    "K-K-K179": {
      "firstVisit": true,
      "displayName": "Addresses, essays, lectures",
      "description": "Description for \u201cAddresses, essays, lectures Room\u201d. You can exit to the floor foyer.",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_K-K"
        }
      }
    },
    "K-K-K175": {
      "firstVisit": true,
      "displayName": "Congresses",
      "description": "Description for \u201cCongresses Room\u201d. You can exit to the floor foyer.",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_K-K"
        }
      }
    },
    "K-K-K176-177": {
      "firstVisit": true,
      "displayName": "Collected works (nonserial)",
      "description": "Description for \u201cCollected works (nonserial) Room\u201d. You can exit to the floor foyer.",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_K-K"
        }
      }
    },
    "K-K-K46": {
      "firstVisit": true,
      "displayName": "Monographic series",
      "description": "Description for \u201cMonographic series Room\u201d. You can exit to the floor foyer.",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_K-K"
        }
      }
    },
    "K-K-K68-70": {
      "firstVisit": true,
      "displayName": "Directories",
      "description": "Description for \u201cDirectories Room\u201d. You can exit to the floor foyer.",
      "interactables": {},
      "items": {},
      "exits": {
        "exit": {
          "displayName": "Exit",
          "destination": "3_K-K"
        }
      }
    },
    "3_K-K": {
      "firstVisit": true,
      "displayName": "\u201cComparative law.  International uniform law Building\u201d, 3rd Floor",
      "description": "You are in the 3rd floor. There are 7 rooms:\n[South    ] \u201cBiography Room\u201d\n[North    ] \u201cLegal composition and draftsmanship Room\u201d\n[East     ] \u201cAddresses, essays, lectures Room\u201d\n[West     ] \u201cCongresses Room\u201d\n[SouthEast] \u201cCollected works (nonserial) Room\u201d\n[NorthWest] \u201cMonographic series Room\u201d\n[SouthWest] \u201cDirectories Room\u201d.",
      "interactables": {},
      "items": {},
      "exits": {
        "down": {
          "displayName": "Down",
          "destination": "2_K-K"
        },
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
        }
      }
    },
    "K-KZ-KZ1-6795": {
      "firstVisit": true,
      "displayName": "Law of nations",
      "description": "Description for \u201cLaw of nations Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cLaw of nations Room\u201d. You can exit to the floor foyer.",
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
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n[  South  ] \u201cLaw of nations Room\u201d\n[  North  ] \u201cLaw of nations Room\u201d.",
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
      "description": "Description for \u201cLaw of England and Wales Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of England and Wales Room\u201d.",
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
      "description": "Description for \u201cLaw of Pennsylvania Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Pennsylvania Room\u201d.",
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
      "description": "Description for \u201cLaw of Idaho Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Idaho Room\u201d.",
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
      "description": "Description for \u201cLaw of Nebraska Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Nebraska Room\u201d.",
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
      "description": "Description for \u201cLaw of California Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of California Room\u201d.",
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
      "description": "Description for \u201cLaw of Ohio Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Ohio Room\u201d.",
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
      "description": "Description for \u201cLaw of Louisiana Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Louisiana Room\u201d.",
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
      "description": "Description for \u201cLaw of Alabama Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Alabama Room\u201d.",
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
      "description": "Description for \u201cRussia, Soviet Union Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cRussia, Soviet Union Room\u201d.",
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
      "description": "Description for \u201cLaw of Spain Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Spain Room\u201d.",
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
      "description": "Description for \u201cSaudi Arabia Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cSaudi Arabia Room\u201d.",
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
      "description": "Description for \u201cLaw of Croatia Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Croatia Room\u201d.",
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
      "description": "Description for \u201cIslamic law.  Shar\u012b\u02bbah.  Fiqh Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cIslamic law.  Shar\u012b\u02bbah.  Fiqh Room\u201d.",
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
      "description": "Description for \u201cHistory of canon law Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cHistory of canon law Room\u201d.",
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
      "description": "Description for \u201cLaw of the sea Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of the sea Room\u201d.",
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
      "description": "Description for \u201cChina (People\u2019s Republic, 1949-    ) Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cChina (People\u2019s Republic, 1949-    ) Room\u201d.",
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
      "description": "Description for \u201cRegional organization and integration (Europe) Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cRegional organization and integration (Europe) Room\u201d.",
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
      "description": "Description for \u201cLaw of Vermont Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Vermont Room\u201d.",
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
      "description": "Description for \u201cLaw of China Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of China Room\u201d.",
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
      "description": "Description for \u201cWest Bank Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cJordan Room\u201d. You can exit to the floor foyer.",
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
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n[  South  ] \u201cWest Bank Room\u201d\n[  North  ] \u201cJordan Room\u201d.",
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
      "description": "Description for \u201cRegional comparative and uniform law (Europe) Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cRegional comparative and uniform law (Europe) Room\u201d.",
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
      "description": "Description for \u201cIsrael Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cIsrael Room\u201d.",
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
      "description": "Description for \u201cSouth Africa, Republic of Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cSouth Africa, Republic of Room\u201d.",
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
      "description": "Description for \u201cRegional comparative and uniform law Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cRegional comparative and uniform law Room\u201d.",
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
      "description": "Description for \u201cLaw of New Brunswick Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cLaw of Newfoundland and Labrador Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cLaw of Northwest Territories Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cLaw of Nova Scotia Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cLaw of Nunavut Room\u201d. You can exit to the floor foyer.",
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
      "description": "There are 5 rooms throughout this building. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n[  South  ] \u201cLaw of New Brunswick Room\u201d\n[  North  ] \u201cLaw of Newfoundland and Labrador Room\u201d\n[  East   ] \u201cLaw of Northwest Territories Room\u201d\n[  West   ] \u201cLaw of Nova Scotia Room\u201d\n[SouthEast] \u201cLaw of Nunavut Room\u201d.",
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
      "description": "Description for \u201cEthiopia Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cEthiopia Room\u201d.",
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
      "description": "Description for \u201cRoman Law Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cRoman Law Room\u201d.",
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
      "description": "Description for \u201cLaw of France Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of France Room\u201d.",
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
      "description": "Description for \u201cLaw of the Roman Catholic Church. The Holy See Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of the Roman Catholic Church. The Holy See Room\u201d.",
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
      "description": "Description for \u201cRussia (Federation, 1992-    ) Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cRussia (Federation, 1992-    ) Room\u201d.",
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
      "description": "Description for \u201cLaw of Germany Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Germany Room\u201d.",
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
      "description": "Description for \u201cLaw of Georgia Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Georgia Room\u201d.",
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
      "description": "Description for \u201cArgentina Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cArgentina Room\u201d.",
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
      "description": "Description for \u201cUzbekistan Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cUzbekistan Room\u201d.",
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
      "description": "Description for \u201cIndonesia Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cIndonesia Room\u201d.",
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
      "description": "Description for \u201cRegional comparative and uniform law Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cRegional comparative and uniform law Room\u201d.",
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
      "description": "Description for \u201cAmerica.  North America Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cAmerica.  North America Room\u201d.",
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
      "description": "Description for \u201cLaw of Kansas Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Kansas Room\u201d.",
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
      "description": "Description for \u201cLaw of Scotland Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Scotland Room\u201d.",
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
      "description": "Description for \u201cHong Kong Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cHong Kong Room\u201d.",
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
      "description": "Description for \u201cLaw of Florida Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Florida Room\u201d.",
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
      "description": "Description for \u201cJewish law.  Halakah Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cJewish law.  Halakah Room\u201d.",
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
      "description": "Description for \u201cHistory of Law (Europe) Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cHistory of Law (Europe) Room\u201d.",
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
      "description": "Description for \u201cHistory of law.  The ancient orient Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cHistory of law.  The ancient orient Room\u201d.",
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
      "description": "Description for \u201cLaw of Canada Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Canada Room\u201d.",
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
      "description": "Description for \u201cLaw of Delaware Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Delaware Room\u201d.",
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
      "description": "Description for \u201cLaw of Ireland (Eire) Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Ireland (Eire) Room\u201d.",
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
      "description": "Description for \u201cTanzania Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cTanzania Room\u201d.",
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
      "description": "Description for \u201cConstitutional law Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cAdministrative and political divisions Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cBy period Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cPublic law Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cRegional divisions Room\u201d. You can exit to the floor foyer.",
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
      "description": "There are 5 rooms throughout this building. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n[  South  ] \u201cConstitutional law Room\u201d\n[  North  ] \u201cAdministrative and political divisions Room\u201d\n[  East   ] \u201cBy period Room\u201d\n[  West   ] \u201cPublic law Room\u201d\n[SouthEast] \u201cRegional divisions Room\u201d.",
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
      "description": "Description for \u201cZambia Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cZanzibar (to 1964) Room\u201d. You can exit to the floor foyer.",
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
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n[  South  ] \u201cZambia Room\u201d\n[  North  ] \u201cZanzibar (to 1964) Room\u201d.",
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
      "description": "Description for \u201cLaw of South Carolina Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of South Carolina Room\u201d.",
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
      "description": "Description for \u201cRegional comparative and uniform law Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cRegional comparative and uniform law Room\u201d.",
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
      "description": "Description for \u201cLaw of Hawaii Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Hawaii Room\u201d.",
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
      "description": "Description for \u201cLaws of the cities Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaws of the cities Room\u201d.",
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
      "description": "Description for \u201cLaw of Finland Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Finland Room\u201d.",
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
      "description": "Description for \u201cCameroon Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cCameroon Room\u201d.",
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
      "description": "Description for \u201cReligious law in general.  Comparative religious law. Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cReligious law in general.  Comparative religious law. Room\u201d.",
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
      "description": "Description for \u201cBritish Virgin Islands (General) Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cBritish West Indies (General) Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cBahamas Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cBarbados Room\u201d. You can exit to the floor foyer.",
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
      "description": "There are 4 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n[  South  ] \u201cBritish Virgin Islands (General) Room\u201d\n[  North  ] \u201cBritish West Indies (General) Room\u201d\n[  East   ] \u201cBahamas Room\u201d\n[  West   ] \u201cBarbados Room\u201d.",
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
      "description": "Description for \u201cMexico Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cMexico Room\u201d.",
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
      "description": "Description for \u201cPakistan Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cPakistan Room\u201d.",
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
      "description": "Description for \u201cConstitutional law Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cHistory of law Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cIndic people.  Ethnic groups Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cLaw reports and related materials Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cPublic law Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cConflict of laws Room\u201d. You can exit to the floor foyer.",
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
      "description": "There are 6 rooms throughout this building. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n[  South  ] \u201cConstitutional law Room\u201d\n[  North  ] \u201cHistory of law Room\u201d\n[  East   ] \u201cIndic people.  Ethnic groups Room\u201d\n[  West   ] \u201cLaw reports and related materials Room\u201d\n[SouthEast] \u201cPublic law Room\u201d\n[NorthWest] \u201cConflict of laws Room\u201d.",
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
      "description": "Description for \u201cLaw of Rhode Island Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Rhode Island Room\u201d.",
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
      "description": "Description for \u201cPuerto Rico Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cPuerto Rico Room\u201d.",
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
      "description": "Description for \u201cLaw of Switzerland Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Switzerland Room\u201d.",
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
      "description": "Description for \u201cLaw of Greece Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Greece Room\u201d.",
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
      "description": "Description for \u201cLaw of Ukraine Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Ukraine Room\u201d.",
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
      "description": "Description for \u201cLaw of Poland Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Poland Room\u201d.",
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
      "description": "Description for \u201cLaw of Netherlands Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Netherlands Room\u201d.",
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
      "description": "Description for \u201cLaw of Malta Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Malta Room\u201d.",
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
      "description": "Description for \u201cLaw of Bosnia and Hercegovina Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Bosnia and Hercegovina Room\u201d.",
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
      "description": "Description for \u201cLaw of Kosovo Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Kosovo Room\u201d.",
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
      "description": "Description for \u201cLaw of Lithuania Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Lithuania Room\u201d.",
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
      "description": "Description for \u201cGuatemala Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cGuatemala Room\u201d.",
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
      "description": "Description for \u201cPeru Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cPeru Room\u201d.",
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
      "description": "Description for \u201cMali Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cMali Room\u201d.",
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
      "description": "Description for \u201cNigeria Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cNigeria Room\u201d.",
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
      "description": "Description for \u201cHaiti Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cHaiti Room\u201d.",
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
      "description": "Description for \u201cColombia Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cColombia Room\u201d.",
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
      "description": "Description for \u201cLatin America (General) Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cGeneral Room\u201d. You can exit to the floor foyer.",
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
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n[  South  ] \u201cLatin America (General) Room\u201d\n[  North  ] \u201cGeneral Room\u201d.",
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
      "description": "Description for \u201cEcuador Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cEcuador Room\u201d.",
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
      "description": "Description for \u201cBolivia Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cBolivia Room\u201d.",
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
      "description": "Description for \u201cChina (Republic, 1949-    ).  Taiwan Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cChina (Republic, 1949-    ).  Taiwan Room\u201d.",
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
      "description": "Description for \u201cKazakhstan Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cKhorezmskai\uf04da Sovetskai\uf04da Sot\uf04dsialisticheskai\uf04da Room\u201d. You can exit to the floor foyer.",
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
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n[  South  ] \u201cKazakhstan Room\u201d\n[  North  ] \u201cKhorezmskai\uf04da Sovetskai\uf04da Sot\uf04dsialisticheskai\uf04da Room\u201d.",
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
      "description": "Description for \u201cZimbabwe Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cZimbabwe Room\u201d.",
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
      "description": "Description for \u201cCanon law of Eastern Churches Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cCanon law of Eastern Churches Room\u201d.",
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
      "description": "Description for \u201cKorea.  South Korea Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cKorea.  South Korea Room\u201d.",
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
      "description": "Description for \u201cNew Zealand Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cNew Zealand Room\u201d.",
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
      "description": "Description for \u201cFiji Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cFiji Room\u201d.",
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
      "description": "Description for \u201cNew Caledonia Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cNew Caledonia Room\u201d.",
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
      "description": "Description for \u201cLaw of Utah Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Utah Room\u201d.",
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
      "description": "Description for \u201cLaw of Denmark Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Denmark Room\u201d.",
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
      "description": "Description for \u201cLaw of Portugal Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Portugal Room\u201d.",
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
      "description": "Description for \u201cLaw of Estonia Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Estonia Room\u201d.",
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
      "description": "Description for \u201cLaw of Yugoslavia Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Yugoslavia Room\u201d.",
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
      "description": "Description for \u201cLaw of Czech Republic (1993-        ) Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Czech Republic (1993-        ) Room\u201d.",
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
      "description": "Description for \u201cCosta Rica Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cCosta Rica Room\u201d.",
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
      "description": "Description for \u201cVenezuela Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cVenezuela Room\u201d.",
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
      "description": "Description for \u201cHonduras Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cHonduras Room\u201d.",
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
      "description": "Description for \u201cNicaragua Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cNicaragua Room\u201d.",
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
      "description": "Description for \u201cChile Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cChile Room\u201d.",
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
      "description": "Description for \u201cParaguay Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cParaguay Room\u201d.",
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
      "description": "Description for \u201cLaw of East Germany Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of East Germany Room\u201d.",
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
      "description": "Description for \u201cLaw of Sweden Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Sweden Room\u201d.",
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
      "description": "Description for \u201cMorocco Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cMorocco Room\u201d.",
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
      "description": "Description for \u201cGeneral Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cGeneral Room\u201d.",
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
      "description": "Description for \u201cBelarus (Republic) Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cBelarus (Republic) Room\u201d.",
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
      "description": "Description for \u201cGeneral Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cGeneral Room\u201d.",
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
      "description": "Description for \u201cThailand Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cThailand Room\u201d.",
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
      "description": "Description for \u201cPhilippines Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cPhilippines Room\u201d.",
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
      "description": "Description for \u201cVietnam Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cVietnam Room\u201d.",
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
      "description": "Description for \u201cSingapore Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cSingapore Room\u201d.",
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
      "description": "Description for \u201cIran Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cIran Room\u201d.",
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
      "description": "Description for \u201cMauritius Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cMauritius Room\u201d.",
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
      "description": "Description for \u201cNamibia Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cNamibia Room\u201d.",
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
      "description": "Description for \u201cBotswana Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cBotswana Room\u201d.",
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
      "description": "Description for \u201cAngola Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cAngola Room\u201d.",
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
      "description": "Description for \u201cMozambique Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cMozambique Room\u201d.",
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
      "description": "Description for \u201cKenya Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cKenya Room\u201d.",
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
      "description": "Description for \u201cGabon Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cGabon Room\u201d.",
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
      "description": "Description for \u201cLesotho Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLesotho Room\u201d.",
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
      "description": "Description for \u201cGhana Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cGhana Room\u201d.",
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
      "description": "Description for \u201cMalawi Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cMalawi Room\u201d.",
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
      "description": "Description for \u201cUganda Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cUganda Room\u201d.",
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
      "description": "Description for \u201cRwanda Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cRwanda Room\u201d.",
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
      "description": "Description for \u201cCongo (Democratic Republic) Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cCongo (Democratic Republic) Room\u201d.",
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
      "description": "Description for \u201cFrench West Africa Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cFrench West Africa Room\u201d.",
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
      "description": "Description for \u201cSenegal Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cSenegal Room\u201d.",
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
      "description": "Description for \u201cLaw of Turkey Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Turkey Room\u201d.",
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
      "description": "Description for \u201cAzerbaijan Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cAzerbaijan Room\u201d.",
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
      "description": "Description for \u201cEgypt Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cEgypt Room\u201d.",
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
      "description": "Description for \u201cKuwait Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cKuwait Room\u201d.",
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
      "description": "Description for \u201cYemen Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cYemen Room\u201d.",
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
      "description": "Description for \u201cSudan Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cSudan Room\u201d.",
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
      "description": "Description for \u201cAlgeria Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cAlgeria Room\u201d.",
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
      "description": "Description for \u201cUnited Arab Emirates Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cUnited Arab Emirates Room\u201d.",
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
      "description": "Description for \u201cBrazil Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cBrazil Room\u201d.",
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
      "description": "Description for \u201cGuyana Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cGuyana Room\u201d.",
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
      "description": "Description for \u201cUruguay Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cUruguay Room\u201d.",
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
      "description": "Description for \u201cKyrgyzstan Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cKyrgyzstan Room\u201d.",
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
      "description": "Description for \u201cGuinea Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cGuinea Room\u201d.",
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
      "description": "Description for \u201cMacao Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cMacao Room\u201d.",
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
      "description": "Description for \u201cArmenian SSR (to 1991) Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cArmenian SSR (to 1991) Room\u201d.",
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
      "description": "Description for \u201cTunisia Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cTunisia Room\u201d.",
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
      "description": "Description for \u201cLebanon Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLebanon Room\u201d.",
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
      "description": "Description for \u201cBahrain Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cArmenia (Republic) Room\u201d. You can exit to the floor foyer.",
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
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n[  South  ] \u201cBahrain Room\u201d\n[  North  ] \u201cArmenia (Republic) Room\u201d.",
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
      "description": "Description for \u201cLaw of Slovenia Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Slovenia Room\u201d.",
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
      "description": "Description for \u201cFrench regions, provinces, cities, etc. Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cFrench regions, provinces, cities, etc. Room\u201d.",
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
      "description": "Description for \u201cLaw of Austria Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Austria Room\u201d.",
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
      "description": "Description for \u201cSpace law.  Law of outer space Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cSpace law.  Law of outer space Room\u201d.",
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
      "description": "Description for \u201cWestern Samoa Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cWestern Samoa Room\u201d.",
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
      "description": "Description for \u201cFrench Polynesia Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cFrench Polynesia Room\u201d.",
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
      "description": "Description for \u201cLaw of Ontario Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Ontario Room\u201d.",
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
      "description": "Description for \u201cLaw of Alberta Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Alberta Room\u201d.",
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
      "description": "Description for \u201cLaw of British Columbia Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of British Columbia Room\u201d.",
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
      "description": "Description for \u201cLaw of Qu\u00e9bec Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Qu\u00e9bec Room\u201d.",
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
      "description": "Description for \u201cPapua New Guinea Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cPapua New Guinea Room\u201d.",
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
      "description": "Description for \u201cMicronesia (Federated States) Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cMarshall Islands Room\u201d. You can exit to the floor foyer.",
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
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n[  South  ] \u201cMicronesia (Federated States) Room\u201d\n[  North  ] \u201cMarshall Islands Room\u201d.",
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
      "description": "Description for \u201cPalau Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cPalau Room\u201d.",
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
      "description": "Description for \u201cGuam Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cGuam Room\u201d.",
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
      "description": "Description for \u201cLaw of Cyprus Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Cyprus Room\u201d.",
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
      "description": "Description for \u201cLaw of Hungary Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Hungary Room\u201d.",
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
      "description": "Description for \u201cFrench Guiana Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cFrench Guiana Room\u201d.",
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
      "description": "Description for \u201cLaw of Norway Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Norway Room\u201d.",
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
      "description": "Description for \u201cCentral African Republic Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cCentral African Republic Room\u201d.",
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
      "description": "Description for \u201cTogo Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cTogo Room\u201d.",
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
      "description": "Description for \u201cBurkina Faso Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cBurkina Faso Room\u201d.",
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
      "description": "Description for \u201cC\u00f4te d\u2019Ivoire Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cC\u00f4te d\u2019Ivoire Room\u201d.",
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
      "description": "Description for \u201cJerusalem Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cJerusalem Room\u201d.",
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
      "description": "Description for \u201cIraq Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cIraq Room\u201d.",
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
      "description": "Description for \u201cLibya Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLibya Room\u201d.",
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
      "description": "Description for \u201cPanama Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cPanama Canal Zone Room\u201d. You can exit to the floor foyer.",
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
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n[  South  ] \u201cPanama Room\u201d\n[  North  ] \u201cPanama Canal Zone Room\u201d.",
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
      "description": "Description for \u201cDominican Republic Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cDominican Republic Room\u201d.",
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
      "description": "Description for \u201cCuba Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cCuba Room\u201d.",
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
      "description": "Description for \u201cEl Salvador Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cEl Salvador Room\u201d.",
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
      "description": "Description for \u201cLiberia Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLiberia Room\u201d.",
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
      "description": "Description for \u201cNiger Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cNiger Room\u201d.",
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
      "description": "Description for \u201cDemocratic People\u2019s Republic of Korea.  North Korea Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cDemocratic People\u2019s Republic of Korea.  North Korea Room\u201d.",
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
      "description": "Description for \u201cLaw of indigenous peoples Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cHistory of law Room\u201d. You can exit to the floor foyer.",
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
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n[  South  ] \u201cLaw of indigenous peoples Room\u201d\n[  North  ] \u201cHistory of law Room\u201d.",
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
      "description": "Description for \u201cNorthern Mariana Islands Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cNorthern Mariana Islands Room\u201d.",
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
      "description": "Description for \u201cCambodia Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cCambodia Room\u201d.",
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
      "description": "Description for \u201cCanon law of Eastern Rite Churches in Communion with the Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cCanon law of Eastern Rite Churches in Communion with the Room\u201d.",
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
      "description": "Description for \u201cLaw of Albania Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Albania Room\u201d.",
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
      "description": "Description for \u201cTrinidad and Tobago Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cTrinidad and Tobago Room\u201d.",
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
      "description": "Description for \u201cLaw of Romania Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Romania Room\u201d.",
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
      "description": "Description for \u201cLaw of Slovakia (1993-        ) Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Slovakia (1993-        ) Room\u201d.",
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
      "description": "Description for \u201cMoldova Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cMoldova Room\u201d.",
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
      "description": "Description for \u201cLaw of Northern Ireland Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Northern Ireland Room\u201d.",
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
      "description": "Description for \u201cLaw of Saskatchewan Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Saskatchewan Room\u201d.",
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
      "description": "Description for \u201cBrunei Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cBrunei Room\u201d.",
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
      "description": "Description for \u201cLaos Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaos Room\u201d.",
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
      "description": "Description for \u201cSri Lanka Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cSri Lanka Room\u201d.",
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
      "description": "Description for \u201cNepal Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cNepal Room\u201d.",
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
      "description": "Description for \u201cBurma Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cBurma Room\u201d.",
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
      "description": "Description for \u201cBangladesh Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cBangladesh Room\u201d.",
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
      "description": "Description for \u201cEquatorial Guinea Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cEquatorial Guinea Room\u201d.",
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
      "description": "Description for \u201cTajikistan Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cTajikistan Room\u201d.",
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
      "description": "Description for \u201cTurkmenistan Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cTurkmenistan Room\u201d.",
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
      "description": "Description for \u201cComoros Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cComoros Room\u201d.",
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
      "description": "Description for \u201cSeychelles Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cSeychelles Room\u201d.",
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
      "description": "Description for \u201cMadagascar Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cMadagascar Room\u201d.",
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
      "description": "Description for \u201cRegional organization and integration Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cRegional organization and integration Room\u201d.",
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
      "description": "Description for \u201cEritrea Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cEritrea Room\u201d.",
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
      "description": "Description for \u201cLaw of Iceland Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Iceland Room\u201d.",
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
      "description": "Description for \u201cGeorgia (Republic) Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cGeorgia (Republic) Room\u201d.",
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
      "description": "Description for \u201cBelize Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cBelize Room\u201d.",
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
      "description": "Description for \u201cLaw of Latvia Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Latvia Room\u201d.",
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
      "description": "Description for \u201cSao Tome and Principe Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cSao Tome and Principe Room\u201d.",
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
      "description": "Description for \u201cLaw of Andorra Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Andorra Room\u201d.",
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
      "description": "Description for \u201cSolomon Islands Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cPitcairn Island Room\u201d. You can exit to the floor foyer.",
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
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n[  South  ] \u201cSolomon Islands Room\u201d\n[  North  ] \u201cPitcairn Island Room\u201d.",
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
      "description": "Description for \u201cSaint Vincent and the Grenadines Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cSaint Lucia Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cSaint Christopher (Saint Kitts), Nevis, and Anguilla Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cSint Maarten Room\u201d. You can exit to the floor foyer.",
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
      "description": "There are 4 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n[  South  ] \u201cSaint Vincent and the Grenadines Room\u201d\n[  North  ] \u201cSaint Lucia Room\u201d\n[  East   ] \u201cSaint Christopher (Saint Kitts), Nevis, and Anguilla Room\u201d\n[  West   ] \u201cSint Maarten Room\u201d.",
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
      "description": "Description for \u201cVirgin Islands of the United States Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cVirgin Islands of the United States Room\u201d.",
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
      "description": "Description for \u201cDutch West Indies (General) Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cGrenada Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cDutch Leeward Islands (General) Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cFrench West Indies (General) Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cGuadeloupe Room\u201d. You can exit to the floor foyer.",
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
      "description": "There are 5 rooms throughout this building. The building is octagonal-shaped with walls facing South, North, East, West, SouthEast, NorthWest, SouthWest, NorthEast. The rooms in this floor are:\n[  South  ] \u201cDutch West Indies (General) Room\u201d\n[  North  ] \u201cGrenada Room\u201d\n[  East   ] \u201cDutch Leeward Islands (General) Room\u201d\n[  West   ] \u201cFrench West Indies (General) Room\u201d\n[SouthEast] \u201cGuadeloupe Room\u201d.",
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
      "description": "Description for \u201cGambia Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cGambia Room\u201d.",
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
      "description": "Description for \u201cLaws of the territories.  Laws of the Confederate States of Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaws of the territories.  Laws of the Confederate States of Room\u201d.",
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
      "description": "Description for \u201cLaw of Isle of Man.  Channel Islands Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Isle of Man.  Channel Islands Room\u201d.",
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
      "description": "Description for \u201cGeneral Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cAnguilla Room\u201d. You can exit to the floor foyer.",
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
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n[  South  ] \u201cGeneral Room\u201d\n[  North  ] \u201cAnguilla Room\u201d.",
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
      "description": "Description for \u201cRussian S.F.S.R. (to 1991) Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cRussian S.F.S.R. (to 1991) Room\u201d.",
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
      "description": "Description for \u201cPalestine (to 1948) Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cOman Room\u201d. You can exit to the floor foyer.",
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
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n[  South  ] \u201cPalestine (to 1948) Room\u201d\n[  North  ] \u201cOman Room\u201d.",
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
      "description": "Description for \u201cLaw of Yukon Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Yukon Room\u201d.",
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
      "description": "Description for \u201cFrench Indochina.  Indochina (Federation) Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cFrench Indochina.  Indochina (Federation) Room\u201d.",
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
      "description": "Description for \u201cYeman (People\u2019s Democratic Republic) (to 1990) Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cYeman (People\u2019s Democratic Republic) (to 1990) Room\u201d.",
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
      "description": "Description for \u201cSurinam Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cSurinam Room\u201d.",
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
      "description": "Description for \u201cSyria Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cSyria Room\u201d.",
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
      "description": "Description for \u201cLaw of Montenegro Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Montenegro Room\u201d.",
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
      "description": "Description for \u201cItalian Somaliland Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cItalian Somaliland Room\u201d.",
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
      "description": "Description for \u201cLaw of Law of cities, towns, etc. Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Law of cities, towns, etc. Room\u201d.",
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
      "description": "Description for \u201cLaw of Manitoba Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Manitoba Room\u201d.",
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
      "description": "Description for \u201cSomalia Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cSomalia Room\u201d.",
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
      "description": "Description for \u201cJamaica Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cMontserrat Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cMartinique Room\u201d. You can exit to the floor foyer.",
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
      "description": "There are 3 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n[  South  ] \u201cJamaica Room\u201d\n[  North  ] \u201cMontserrat Room\u201d\n[  East   ] \u201cMartinique Room\u201d.",
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
      "description": "Description for \u201cTurks and Caicos Islands Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cTurks and Caicos Islands Room\u201d.",
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
      "description": "Description for \u201cLaw of Law of Prince Edward Island Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Law of Prince Edward Island Room\u201d.",
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
      "description": "Description for \u201cBurundi Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cBurundi Room\u201d.",
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
      "description": "Description for \u201cPacific Islands (Trust Territory) Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cPacific Islands (Trust Territory) Room\u201d.",
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
      "description": "Description for \u201cVietnam (Republic).  South Vietnam Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cVietnam (Republic).  South Vietnam Room\u201d.",
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
      "description": "Description for \u201cAntarctica Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cAntarctica Room\u201d.",
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
      "description": "Description for \u201cAmerican Samoa Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cAmerican Samoa Room\u201d.",
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
      "description": "Description for \u201cVanuatu Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cVanuatu Room\u201d.",
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
      "description": "Description for \u201cNiue Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cNiue Room\u201d.",
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
      "description": "Description for \u201cAfghanistan Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cAfghanistan Room\u201d.",
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
      "description": "Description for \u201cGibraltar Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cGibraltar Room\u201d.",
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
      "description": "Description for \u201cChad Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cChad Room\u201d.",
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
      "description": "Description for \u201cSierra Leone Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cSierra Leone Room\u201d.",
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
      "description": "Description for \u201cSwaziland Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cSwaziland Room\u201d.",
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
      "description": "Description for \u201cR\u00e9union Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cR\u00e9union Room\u201d.",
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
      "description": "Description for \u201cDjibouti Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cDjibouti Room\u201d.",
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
      "description": "Description for \u201cCayman Islands Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cCayman Islands Room\u201d.",
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
      "description": "Description for \u201cDominica Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cCura\u00e7ao Room\u201d. You can exit to the floor foyer.",
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
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n[  South  ] \u201cDominica Room\u201d\n[  North  ] \u201cCura\u00e7ao Room\u201d.",
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
      "description": "Description for \u201cCongo (Brazzaville) Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cCongo (Brazzaville) Room\u201d.",
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
      "description": "Description for \u201cNauru Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cNetherlands New Guinea (to 1963) Room\u201d. You can exit to the floor foyer.",
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
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n[  South  ] \u201cNauru Room\u201d\n[  North  ] \u201cNetherlands New Guinea (to 1963) Room\u201d.",
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
      "description": "Description for \u201cBenin Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cBenin Room\u201d.",
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
      "description": "Description for \u201cRegional organization and integration Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cRegional organization and integration Room\u201d.",
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
      "description": "Description for \u201cQatar Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cQatar Room\u201d.",
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
      "description": "Description for \u201cBritish Central Africa Protectorate Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cBritish Central Africa Protectorate Room\u201d.",
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
      "description": "Description for \u201cCities, etc. Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cCities, etc. Room\u201d.",
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
      "description": "Description for \u201cUkraine Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cUkraine Room\u201d.",
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
      "description": "Description for \u201cCape Verde Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cCape Verde Room\u201d.",
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
      "description": "Description for \u201cAruba Room\u201d. You can exit to the floor foyer.",
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
      "description": "Description for \u201cAntigua and Barbuda Room\u201d. You can exit to the floor foyer.",
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
      "description": "There are 2 rooms throughout this building. The building is square-shaped with walls facing South, North, East, West. The rooms in this floor are:\n[  South  ] \u201cAruba Room\u201d\n[  North  ] \u201cAntigua and Barbuda Room\u201d.",
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
      "description": "Description for \u201cMaldives Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cMaldives Room\u201d.",
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
      "description": "Description for \u201cMauritania Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cMauritania Room\u201d.",
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
      "description": "Description for \u201cGuinea-Bissau Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cGuinea-Bissau Room\u201d.",
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
      "description": "Description for \u201cCook Islands Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cCook Islands Room\u201d.",
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
      "description": "Description for \u201cTonga Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cTonga Room\u201d.",
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
      "description": "Description for \u201cBhutan Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cBhutan Room\u201d.",
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
      "description": "Description for \u201cGaza Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cGaza Room\u201d.",
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
      "description": "Description for \u201cFalkland Islands Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cFalkland Islands Room\u201d.",
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
      "description": "Description for \u201cTuvalu Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cTuvalu Room\u201d.",
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
      "description": "Description for \u201cFrench Equatorial Africa Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cFrench Equatorial Africa Room\u201d.",
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
      "description": "Description for \u201cKiribati Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cKiribati Room\u201d.",
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
      "description": "Description for \u201cLaw of Australian peoples.  Aborigines Room\u201d. You can exit to the floor foyer.",
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
      "description": "There is 1 room throughout this building. The building is square-shaped with walls facing South, North, East, West. The room in this floor is:\n[  South  ] \u201cLaw of Australian peoples.  Aborigines Room\u201d.",
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
