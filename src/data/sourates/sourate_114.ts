import type { Verset } from "@/conf/types";

export const versets: Verset[] = [
  {
    numero: 0,
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
    numero: 1,
    mots: [
      {
        texte: "قُلْ",
        transliteration: "Qul",
        traduction: { fr: "Dis", en: "Say", es: "Di" },
        grammaire: {
          fr: "verbe (v.) impératif, 2e pers. m. sing.",
          en: "verb (v.) imperative, 2nd pers. m. sing.",
          es: "verbo (v.) imperativo, 2ª pers. m. sing.",
          ar: "فعل أمر، للمخاطب المذكر المفرد",
        },
      },
      {
        texte: "أَعُوذُ",
        transliteration: "A'udhu",
        traduction: { fr: "je cherche protection", en: "I seek refuge", es: "me refugio" },
        grammaire: {
          fr: "verbe (v.) inaccompli, 1re pers. sing.",
          en: "verb (v.) imperfect, 1st pers. sing.",
          es: "verbo (v.) imperfectivo, 1ª pers. sing.",
          ar: "فعل مضارع، للمتكلم المفرد",
        },
      },
      {
        texte: "بِرَبِّ",
        transliteration: "Bi rabbi",
        traduction: { fr: "auprès du Seigneur", en: "with the Lord", es: "en el Señor" },
        grammaire: {
          fr: "préposition « bi » + nom commun (m.), génitif",
          en: "preposition « bi » + common noun (m.), genitive",
          es: "preposición « bi » + nombre común (m.), genitivo",
          ar: "حرف جر «بِ» + اسم (مذكر)، مجرور",
        },
      },
      {
        texte: "النَّاسِ",
        transliteration: "An-Nasi",
        traduction: { fr: "des hommes", en: "of men", es: "de los seres humanos" },
        grammaire: {
          fr: "nom commun (m.) plur. déf., génitif",
          en: "common noun (m.) plural def., genitive",
          es: "nombre común (m.) plural def., genitivo",
          ar: "اسم (مذكر) جمع معرفة، مجرور",
        },
      },
    ],
    traduction: {
      fr: "Dis: «Je cherche protection auprès du Seigneur des hommes.",
      en: 'SAY: "I SEEK refuge with the Lord of men,',
      es: "Di: «Me refugio en el Señor de los seres humanos,",
    },
    audio: {
      "al-hussary": ["00:00.0", "00:01.0", "00:02.8", "00:04.4"],
      "al-houdaifi": ["00:00.0", "00:00.7", "00:01.4", "00:03.2"]
    },
  },
  {
    numero: 2,
    mots: [
      {
        texte: "مَلِكِ",
        transliteration: "Maliki",
        traduction: { fr: "Le Souverain", en: "The King", es: "el Rey" },
        grammaire: {
          fr: "nom commun (m.) sing., génitif",
          en: "common noun (m.) sing., genitive",
          es: "nombre común (m.) sing., genitivo",
          ar: "اسم (مذكر) مفرد، مجرور",
        },
      },
      {
        texte: "النَّاسِ",
        transliteration: "An-Nasi",
        traduction: { fr: "des hommes", en: "of men", es: "de los seres humanos" },
        grammaire: {
          fr: "nom commun (m.) plur. déf., génitif",
          en: "common noun (m.) plural def., genitive",
          es: "nombre común (m.) plural def., genitivo",
          ar: "اسم (مذكر) جمع معرفة، مجرور",
        },
      },
    ],
    traduction: {
      fr: "Le Souverain des hommes,",
      en: "The King of men,",
      es: "el Rey de los seres humanos,",
    },
    audio: {
      "al-hussary": ["00:00.0", "00:01.6"],
      "al-houdaifi": ["00:00.0", "00:01.1"]
    },
  },
  {
    numero: 3,
    mots: [
      {
        texte: "إِلَـٰهِ",
        transliteration: "Ilahi",
        traduction: { fr: "Dieu", en: "The God", es: "el dios" },
        grammaire: {
          fr: "nom commun (m.) sing., génitif",
          en: "common noun (m.) sing., genitive",
          es: "nombre común (m.) sing., genitivo",
          ar: "اسم (مذكر) مفرد، مجرور",
        },
      },
      {
        texte: "النَّاسِ",
        transliteration: "An-Nasi",
        traduction: { fr: "des hommes", en: "of men", es: "de los seres humanos" },
        grammaire: {
          fr: "nom commun (m.) plur. déf., génitif",
          en: "common noun (m.) plural def., genitive",
          es: "nombre común (m.) plural def., genitivo",
          ar: "اسم (مذكر) جمع معرفة، مجرور",
        },
      },
    ],
    traduction: {
      fr: "Dieu des hommes,",
      en: "The God of men,",
      es: "el dios de los seres humanos,",
    },
    audio: {
      "al-hussary": ["00:00.0", "00:01.8"],
      "al-houdaifi": ["00:00.0", "00:01.7"]
    },
  },
  {
    numero: 4,
    mots: [
      {
        texte: "مِن",
        transliteration: "Min",
        traduction: { fr: "contre", en: "From", es: "del" },
        grammaire: {
          fr: "préposition",
          en: "preposition",
          es: "preposición",
          ar: "حرف جر",
        },
      },
      {
        texte: "شَرِّ",
        transliteration: "Sharri",
        traduction: { fr: "le mal du", en: "the evil of", es: "mal" },
        grammaire: {
          fr: "nom commun (m.) sing., génitif",
          en: "common noun (m.) sing., genitive",
          es: "nombre común (m.) sing., genitivo",
          ar: "اسم (مذكر) مفرد، مجرور",
        },
      },
      {
        // EN officiel trop paraphrasé pour ce mot (fusionne avec le v.5) : gloss plus fidèle.
        texte: "الْوَسْوَاسِ",
        transliteration: "Al-Waswasi",
        traduction: { fr: "mauvais conseiller", en: "the whisperer", es: "del susurrante" },
        grammaire: {
          fr: "nom commun (m.) sing. déf., génitif",
          en: "common noun (m.) sing. def., genitive",
          es: "nombre común (m.) sing. def., genitivo",
          ar: "اسم (مذكر) مفرد معرفة، مجرور",
        },
      },
      {
        texte: "الْخَنَّاسِ",
        transliteration: "Al-Khannasi",
        traduction: { fr: "furtif", en: "who withdraws", es: "tentador" },
        grammaire: {
          fr: "adjectif (m.) sing. déf., génitif",
          en: "adjective (m.) sing. def., genitive",
          es: "adjetivo (m.) sing. def., genitivo",
          ar: "صفة (مذكر) مفرد معرفة، مجرور",
        },
      },
    ],
    traduction: {
      fr: "contre le mal du mauvais conseiller, furtif,",
      en: "From the evil of him who breathes temptations into the minds of men,",
      es: "del mal del susurrante tentador,",
    },
    audio: {
      "al-hussary": ["00:00.0", "00:01.4", "00:03.0", "00:05.4"],
      "al-houdaifi": ["00:00.0", "00:01.1", "00:02.0", "00:03.0"]
    },
  },
  {
    numero: 5,
    mots: [
      {
        texte: "الَّذِي",
        transliteration: "Alladhi",
        traduction: { fr: "qui", en: "who", es: "el que" },
        grammaire: {
          fr: "pronom relatif (m.) sing.",
          en: "relative pronoun (m.) sing.",
          es: "pronombre relativo (m.) sing.",
          ar: "اسم موصول (مذكر) مفرد",
        },
      },
      {
        texte: "يُوَسْوِسُ",
        transliteration: "Yuwaswisu",
        traduction: { fr: "souffle le mal", en: "suggests evil thoughts", es: "susurra" },
        grammaire: {
          fr: "verbe (v.) inaccompli, 3e pers. m. sing.",
          en: "verb (v.) imperfect, 3rd pers. m. sing.",
          es: "verbo (v.) imperfectivo, 3ª pers. m. sing.",
          ar: "فعل مضارع، للغائب المذكر المفرد",
        },
      },
      {
        texte: "فِي",
        transliteration: "Fi",
        traduction: { fr: "dans", en: "to", es: "en" },
        grammaire: {
          fr: "préposition",
          en: "preposition",
          es: "preposición",
          ar: "حرف جر",
        },
      },
      {
        texte: "صُدُورِ",
        transliteration: "Suduri",
        traduction: { fr: "les poitrines", en: "the hearts", es: "el pecho" },
        grammaire: {
          fr: "nom commun (m.) plur., génitif",
          en: "common noun (m.) plural, genitive",
          es: "nombre común (m.) plural, genitivo",
          ar: "اسم (مذكر) جمع، مجرور",
        },
      },
      {
        texte: "النَّاسِ",
        transliteration: "An-Nasi",
        traduction: { fr: "des hommes", en: "of men", es: "de los seres humanos" },
        grammaire: {
          fr: "nom commun (m.) plur. déf., génitif",
          en: "common noun (m.) plural def., genitive",
          es: "nombre común (m.) plural def., genitivo",
          ar: "اسم (مذكر) جمع معرفة، مجرور",
        },
      },
    ],
    traduction: {
      fr: "qui souffle le mal dans les poitrines des hommes,",
      en: "Who suggests evil thoughts to the hearts of men --",
      es: "el que susurra en el pecho de los seres humanos",
    },
    audio: {
      "al-hussary": ["00:00.0", "00:02.0", "00:04.2", "00:05.0", "00:06.6"],
      "al-houdaifi": ["00:00.0", "00:01.15", "00:02.1", "00:02.9", "00:04.4"]
    },
  },
  {
    numero: 6,
    mots: [
      {
        texte: "مِنَ",
        transliteration: "Mina",
        traduction: { fr: "qu'il (le conseiller) soit", en: "From among", es: "y procede de" },
        grammaire: {
          fr: "préposition",
          en: "preposition",
          es: "preposición",
          ar: "حرف جر",
        },
      },
      {
        texte: "الْجِنَّةِ",
        transliteration: "Al-Jinnati",
        traduction: { fr: "un djinn", en: "the jinns", es: "los genios" },
        grammaire: {
          fr: "nom commun (f.) déf., génitif",
          en: "common noun (f.) def., genitive",
          es: "nombre común (f.) def., genitivo",
          ar: "اسم (مؤنث) معرفة، مجرور",
        },
      },
      {
        texte: "وَالنَّاسِ",
        transliteration: "Wa an-Nasi",
        traduction: { fr: "ou un être humain", en: "and men", es: "y de los seres humanos" },
        grammaire: {
          fr: "conjonction « wa » + nom commun (m.) plur. déf., génitif",
          en: "conjunction « wa » + common noun (m.) plural def., genitive",
          es: "conjunción « wa » + nombre común (m.) plural def., genitivo",
          ar: "حرف عطف «وَ» + اسم (مذكر) جمع معرفة، مجرور",
        },
      },
    ],
    traduction: {
      fr: "qu'il (le conseiller) soit un djinn, ou un être humain».",
      en: "From among the jinns and men.",
      es: "y procede de los genios y de los seres humanos.»",
    },
    audio: {
      "al-hussary": ["00:00.0", "00:01.6", "00:03.8"],
      "al-houdaifi": ["00:00.0", "00:00.9", "00:02.9"]
    },
  },
];
