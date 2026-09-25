import type { Verset } from "@/conf/types";

export const versets: Verset[] = [
  {
    numero: 1,
    mots: [
      {
        texte: "بِسْمِ",
        transliteration: "Bismi",
        traduction: { fr: "Au nom de", en: "In the name of", es: "En el nombre de" },
        grammaire: {
          fr: "préposition « bi » + nom commun (m.), génitif",
          en: "preposition « bi » + common noun (m.), genitive",
          es: "preposición « bi » + nombre común (m.), genitivo",
          ar: "حرف جر «بِ» + اسم (مذكر)، مجرور",
        },
      },
      {
        texte: "اللَّهِ",
        couleur: "or",
        transliteration: "Allahi",
        traduction: { fr: "Allah", en: "Allah", es: "Al.lah" },
        grammaire: {
          fr: "nom propre, génitif",
          en: "proper noun, genitive",
          es: "nombre propio, genitivo",
          ar: "اسم علم، مجرور",
        },
      },
      {
        texte: "الرَّحْمَـٰنِ",
        transliteration: "Ar-Rahmani",
        traduction: { fr: "le Tout Miséricordieux", en: "most benevolent", es: "el Clementísimo" },
        grammaire: {
          fr: "adjectif (m.) sing. déf., génitif",
          en: "adjective (m.) sing. def., genitive",
          es: "adjetivo (m.) sing. def., genitivo",
          ar: "صفة (مذكر) مفرد معرفة، مجرور",
        },
      },
      {
        texte: "الرَّحِيمِ",
        transliteration: "Ar-Rahimi",
        traduction: { fr: "le Très Miséricordieux", en: "ever-merciful", es: "el Misericordiosísimo" },
        grammaire: {
          fr: "adjectif (m.) sing. déf., génitif",
          en: "adjective (m.) sing. def., genitive",
          es: "adjetivo (m.) sing. def., genitivo",
          ar: "صفة (مذكر) مفرد معرفة، مجرور",
        },
      },
    ],
    traduction: {
      fr: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux.",
      en: "In the name of Allah, most benevolent, ever-merciful.",
      es: "En el nombre de Al.lah, el Clementísimo, el Misericordiosísimo.",
    },
    audio: {
      "al-hussary": ["00:00.0", "00:01.0", "00:01.6", "00:02.7"],
      "al-houdaifi": ["00:00.0", "00:01.0", "00:01.6", "00:02.6"]
    },
  },
  {
    numero: 2,
    mots: [
      {
        texte: "الْحَمْدُ",
        transliteration: "Al-Hamdu",
        traduction: { fr: "La louange", en: "All praise be", es: "La alabanza es" },
        grammaire: {
          fr: "nom commun (m.) déf., nominatif",
          en: "common noun (m.) def., nominative",
          es: "nombre común (m.) def., nominativo",
          ar: "اسم (مذكر) معرفة، مرفوع",
        },
      },
      {
        texte: "لِلَّهِ",
        transliteration: "Lillahi",
        traduction: { fr: "à Allah", en: "to Allah", es: "para Dios" },
        grammaire: {
          fr: "préposition « li » + nom propre, génitif",
          en: "preposition « li » + proper noun, genitive",
          es: "preposición « li » + nombre propio, genitivo",
          ar: "حرف جر «لِ» + اسم علم، مجرور",
        },
      },
      {
        texte: "رَبِّ",
        transliteration: "Rabbi",
        traduction: { fr: "Seigneur de", en: "Lord of", es: "Señor de" },
        grammaire: {
          fr: "nom commun (m.), génitif",
          en: "common noun (m.), genitive",
          es: "nombre común (m.), genitivo",
          ar: "اسم (مذكر)، مجرور",
        },
      },
      {
        texte: "الْعَالَمِينَ",
        transliteration: "Al-'Alamin",
        traduction: { fr: "l'univers", en: "all the worlds", es: "los mundos" },
        grammaire: {
          fr: "nom commun (m.) plur. déf., génitif",
          en: "common noun (m.) plural def., genitive",
          es: "nombre común (m.) plural def., genitivo",
          ar: "اسم (مذكر) جمع معرفة، مجرور",
        },
      },
    ],
    traduction: {
      fr: "Louange à Allah, Seigneur de l'univers.",
      en: "ALL PRAISE BE to Allah, Lord of all the worlds,",
      es: "La alabanza es para Dios, Señor de los mundos,",
    },
    audio: {
      "al-hussary": ["00:00.0", "00:01.2", "00:02.0", "00:02.9"],
      "al-houdaifi": ["00:00.0", "00:01.0", "00:02.0", "00:02.7"]
    },
  },
  {
    numero: 3,
    mots: [
      {
        texte: "الرَّحْمَـٰنِ",
        transliteration: "Ar-Rahmani",
        traduction: { fr: "Le Tout Miséricordieux", en: "Most beneficent", es: "El Clementísimo con toda la Creación" },
        grammaire: {
          fr: "adjectif (m.) sing. déf., génitif",
          en: "adjective (m.) sing. def., genitive",
          es: "adjetivo (m.) sing. def., genitivo",
          ar: "صفة (مذكر) مفرد معرفة، مجرور",
        },
      },
      {
        texte: "الرَّحِيمِ",
        transliteration: "Ar-Rahimi",
        traduction: { fr: "le Très Miséricordieux", en: "ever-merciful", es: "el Misericordiosísimo con los creyentes" },
        grammaire: {
          fr: "adjectif (m.) sing. déf., génitif",
          en: "adjective (m.) sing. def., genitive",
          es: "adjetivo (m.) sing. def., genitivo",
          ar: "صفة (مذكر) مفرد معرفة، مجرور",
        },
      },
    ],
    traduction: {
      fr: "Le Tout Miséricordieux, le Très Miséricordieux,",
      en: "Most beneficent, ever-merciful,",
      es: "el Clementísimo con toda la Creación, el Misericordiosísimo con los creyentes,",
    },
    audio: {
      "al-hussary": ["00:00.0", "00:01.4"],
      "al-houdaifi": ["00:00.0", "00:01.5"]
    },
  },
  {
    numero: 4,
    mots: [
      {
        texte: "مَالِكِ",
        transliteration: "Maliki",
        traduction: { fr: "Maître de", en: "King of", es: "Soberano de" },
        grammaire: {
          fr: "participe actif (m.), génitif",
          en: "active participle (m.), genitive",
          es: "participio activo (m.), genitivo",
          ar: "اسم فاعل (مذكر)، مجرور",
        },
      },
      {
        texte: "يَوْمِ",
        transliteration: "Yawmi",
        traduction: { fr: "le Jour de", en: "the Day of", es: "el Día de" },
        grammaire: {
          fr: "nom commun (m.), génitif",
          en: "common noun (m.), genitive",
          es: "nombre común (m.), genitivo",
          ar: "اسم (مذكر)، مجرور",
        },
      },
      {
        texte: "الدِّينِ",
        transliteration: "Ad-Din",
        traduction: { fr: "la rétribution", en: "Judgement", es: "la Recompensa" },
        grammaire: {
          fr: "nom commun (m.) déf., génitif",
          en: "common noun (m.) def., genitive",
          es: "nombre común (m.) def., genitivo",
          ar: "اسم (مذكر) معرفة، مجرور",
        },
      },
    ],
    traduction: {
      fr: "Maître du Jour de la rétribution.",
      en: "King of the Day of Judgement.",
      es: "Soberano del Día de la Recompensa.",
    },
    audio: {
      "al-hussary": ["00:00.0", "00:01.0", "00:01.8"],
      "al-houdaifi": ["00:00.0", "00:01.1", "00:02.0"]
    },
  },
  {
    numero: 5,
    mots: [
      {
        texte: "إِيَّاكَ",
        transliteration: "Iyyaka",
        traduction: { fr: "C'est Toi [Seul] que", en: "You alone", es: "Solamente a Ti" },
        grammaire: {
          fr: "pronom personnel, 2e pers. m. sing.",
          en: "personal pronoun, 2nd pers. m. sing.",
          es: "pronombre personal, 2ª pers. m. sing.",
          ar: "ضمير منفصل، للمخاطب المذكر المفرد",
        },
      },
      {
        texte: "نَعْبُدُ",
        transliteration: "Na'budu",
        traduction: { fr: "nous adorons", en: "we worship", es: "adoramos" },
        grammaire: {
          fr: "verbe (v.) inaccompli, 1re pers. plur.",
          en: "verb (v.) imperfect, 1st pers. plural",
          es: "verbo (v.) imperfectivo, 1ª pers. plural",
          ar: "فعل مضارع، للمتكلمين (جمع)",
        },
      },
      {
        texte: "وَإِيَّاكَ",
        transliteration: "Wa iyyaka",
        traduction: { fr: "et c'est Toi [Seul] dont", en: "and to You alone", es: "y solamente a Ti" },
        grammaire: {
          fr: "conjonction « wa » + pronom personnel, 2e pers. m. sing.",
          en: "conjunction « wa » + personal pronoun, 2nd pers. m. sing.",
          es: "conjunción « wa » + pronombre personal, 2ª pers. m. sing.",
          ar: "حرف عطف «وَ» + ضمير منفصل، للمخاطب المذكر المفرد",
        },
      },
      {
        texte: "نَسْتَعِينُ",
        transliteration: "Nasta'in",
        traduction: { fr: "nous implorons secours", en: "turn for help", es: "pedimos ayuda" },
        grammaire: {
          fr: "verbe (v.) inaccompli, 1re pers. plur.",
          en: "verb (v.) imperfect, 1st pers. plural",
          es: "verbo (v.) imperfectivo, 1ª pers. plural",
          ar: "فعل مضارع، للمتكلمين (جمع)",
        },
      },
    ],
    traduction: {
      fr: "C'est Toi [Seul] que nous adorons, et c'est Toi [Seul] dont nous implorons secours.",
      en: "You alone we worship, and to You alone turn for help.",
      es: "Solamente a Ti adoramos y solamente a Ti pedimos ayuda.",
    },
    audio: {
      "al-hussary": ["00:00.0", "00:01.55", "00:02.3", "00:03.4"],
      "al-houdaifi": ["00:00.0", "00:01.35", "00:02.3", "00:03.2"]
    },
  },
  {
    numero: 6,
    mots: [
      {
        texte: "اهْدِنَا",
        transliteration: "Ihdina",
        traduction: { fr: "Guide-nous", en: "Guide us", es: "Guíanos" },
        grammaire: {
          fr: "verbe (v.) impératif, 2e pers. m. sing. + pronom suffixe, 1re pers. plur.",
          en: "verb (v.) imperative, 2nd pers. m. sing. + pronoun suffix, 1st pers. plural",
          es: "verbo (v.) imperativo, 2ª pers. m. sing. + sufijo pronominal, 1ª pers. plural",
          ar: "فعل أمر، للمخاطب المذكر المفرد + ضمير متصل، للمتكلمين (جمع)",
        },
      },
      {
        texte: "الصِّرَاطَ",
        transliteration: "As-Sirata",
        traduction: { fr: "le chemin", en: "to the path", es: "al camino" },
        grammaire: {
          fr: "nom commun (m.) déf., accusatif",
          en: "common noun (m.) def., accusative",
          es: "nombre común (m.) def., acusativo",
          ar: "اسم (مذكر) معرفة، منصوب",
        },
      },
      {
        texte: "الْمُسْتَقِيمَ",
        transliteration: "Al-Mustaqim",
        traduction: { fr: "droit", en: "that is straight", es: "recto" },
        grammaire: {
          fr: "participe actif (m.) déf., accusatif",
          en: "active participle (m.) def., accusative",
          es: "participio activo (m.) def., acusativo",
          ar: "اسم فاعل (مذكر) معرفة، منصوب",
        },
      },
    ],
    traduction: {
      fr: "Guide-nous dans le droit chemin,",
      en: "Guide us (O Lord) to the path that is straight,",
      es: "Guíanos al camino recto,",
    },
    audio: {
      "al-hussary": ["00:00.0", "00:01.3", "00:02.2"],
      "al-houdaifi": ["00:00.0", "00:01.3", "00:02.3"]
    },
  },
  {
    numero: 7,
    mots: [
      {
        texte: "صِرَاطَ",
        transliteration: "Sirata",
        traduction: { fr: "Le chemin de", en: "The path of", es: "El camino de" },
        grammaire: {
          fr: "nom commun (m.), accusatif",
          en: "common noun (m.), accusative",
          es: "nombre común (m.), acusativo",
          ar: "اسم (مذكر)، منصوب",
        },
      },
      {
        texte: "الَّذِينَ",
        transliteration: "Alladhina",
        traduction: { fr: "ceux que", en: "those whom", es: "aquellos a quienes" },
        grammaire: {
          fr: "pronom relatif (m.) plur.",
          en: "relative pronoun (m.) plural",
          es: "pronombre relativo (m.) plural",
          ar: "اسم موصول (مذكر) جمع",
        },
      },
      {
        texte: "أَنْعَمْتَ",
        transliteration: "An'amta",
        traduction: { fr: "Tu as comblés de faveurs", en: "You have blessed", es: "Tú has agraciado" },
        grammaire: {
          fr: "verbe (v.) accompli, 2e pers. m. sing. + pronom suffixe, 2e pers. m. sing.",
          en: "verb (v.) perfect, 2nd pers. m. sing. + pronoun suffix, 2nd pers. m. sing.",
          es: "verbo (v.) perfectivo, 2ª pers. m. sing. + sufijo pronominal, 2ª pers. m. sing.",
          ar: "فعل ماض، للمخاطب المذكر المفرد + ضمير متصل، للمخاطب المذكر المفرد",
        },
      },
      {
        texte: "عَلَيْهِمْ",
        transliteration: "'Alayhim",
        traduction: { fr: "envers eux", en: "upon them", es: "sobre ellos" },
        grammaire: {
          fr: "préposition + pronom suffixe, 3e pers. m. plur.",
          en: "preposition + pronoun suffix, 3rd pers. m. plural",
          es: "preposición + sufijo pronominal, 3ª pers. m. plural",
          ar: "حرف جر + ضمير متصل، للغائبين (جمع مذكر)",
        },
      },
      {
        texte: "غَيْرِ",
        transliteration: "Ghayri",
        traduction: { fr: "non pas de", en: "not", es: "no" },
        grammaire: {
          fr: "nom commun (m.), génitif",
          en: "common noun (m.), genitive",
          es: "nombre común (m.), genitivo",
          ar: "اسم (مذكر)، مجرور",
        },
      },
      {
        texte: "الْمَغْضُوبِ",
        transliteration: "Al-Maghdubi",
        traduction: {
          fr: "ceux qui ont encouru la colère",
          en: "those who have earned wrath",
          es: "aquellos que han incurrido en la ira",
        },
        grammaire: {
          fr: "participe passif (m.) déf., génitif",
          en: "passive participle (m.) def., genitive",
          es: "participio pasivo (m.) def., genitivo",
          ar: "اسم مفعول (مذكر) معرفة، مجرور",
        },
      },
      {
        texte: "عَلَيْهِمْ",
        transliteration: "'Alayhim",
        traduction: { fr: "envers eux", en: "upon them", es: "sobre ellos" },
        grammaire: {
          fr: "préposition + pronom suffixe, 3e pers. m. plur.",
          en: "preposition + pronoun suffix, 3rd pers. m. plural",
          es: "preposición + sufijo pronominal, 3ª pers. m. plural",
          ar: "حرف جر + ضمير متصل، للغائبين (جمع مذكر)",
        },
      },
      {
        texte: "وَلَا",
        transliteration: "Wa la",
        traduction: { fr: "ni", en: "nor", es: "ni" },
        grammaire: {
          fr: "conjonction « wa » + particule de négation",
          en: "conjunction « wa » + negative particle",
          es: "conjunción « wa » + partícula negativa",
          ar: "حرف عطف «وَ» + حرف نفي",
        },
      },
      {
        texte: "الضَّالِّينَ",
        transliteration: "Ad-Dallin",
        traduction: { fr: "des égarés", en: "those who have gone astray", es: "los extraviados" },
        grammaire: {
          fr: "participe actif (m.) plur. déf., génitif",
          en: "active participle (m.) plural def., genitive",
          es: "participio activo (m.) plural def., genitivo",
          ar: "اسم فاعل (مذكر) جمع معرفة، مجرور",
        },
      },
    ],
    traduction: {
      fr: "le chemin de ceux que Tu as comblés de faveurs, non pas de ceux qui ont encouru Ta colère, ni des égarés.",
      en: "The path of those You have blessed, Not of those who have earned Your anger, nor those who have gone astray.",
      es: "el camino de aquellos a los que Tú has agraciado; no el de aquellos con los que Tú estás disgustado, ni el de los extraviados.",
    },
    audio: {
      "al-hussary": ["00:00.0", "00:01.2", "00:02.1", "00:03.2", "00:04.0", "00:05.0", "00:06.1", "00:07.1", "00:08.2"],
      "al-houdaifi": ["00:00.0", "00:01.1", "00:02.1", "00:03.1", "00:04.0", "00:04.9", "00:06.0", "00:07.0", "00:07.9"]
    },
  },
];
