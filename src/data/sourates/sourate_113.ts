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
        racine: { arabe: "س م و", transliteration: "s-m-w" },
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
        racine: { arabe: "ء ل ه", transliteration: "ʾ-l-h" },
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
        racine: { arabe: "ر ح م", transliteration: "r-h-m" },
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
        racine: { arabe: "ر ح م", transliteration: "r-h-m" },
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
        racine: { arabe: "ق و ل", transliteration: "q-w-l" },
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
        racine: { arabe: "ع و ذ", transliteration: "ʿ-w-dh" },
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
        racine: { arabe: "ر ب ب", transliteration: "r-b-b" },
      },
      {
        texte: "الْفَلَقِ",
        transliteration: "Al-Falaqi",
        traduction: { fr: "de l'aube naissante", en: "of rising day", es: "del alba" },
        grammaire: {
          fr: "nom commun (m.) déf., génitif",
          en: "common noun (m.) def., genitive",
          es: "nombre común (m.) def., genitivo",
          ar: "اسم (مذكر) معرفة، مجرور",
        },
        racine: { arabe: "ف ل ق", transliteration: "f-l-q" },
      },
    ],
    traduction: {
      fr: "Dis: «Je cherche protection auprès du Seigneur de l'aube naissante,",
      en: 'SAY: "I SEEK refuge with the Lord of rising day',
      es: "Di: «Me refugio en el Señor del alba",
    },
    audio: {
      "al-hussary": ["00:00.0", "00:00.6", "00:01.9", "00:03.4"],
      "al-houdaifi": ["00:00.0", "00:00.8", "00:01.4", "00:02.5"]
    },
  },
  {
    numero: 2,
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
        traduction: { fr: "le mal de", en: "the evil of", es: "mal" },
        grammaire: {
          fr: "nom commun (m.) sing., génitif",
          en: "common noun (m.) sing., genitive",
          es: "nombre común (m.) sing., genitivo",
          ar: "اسم (مذكر) مفرد، مجرور",
        },
        racine: { arabe: "ش ر ر", transliteration: "sh-r-r" },
      },
      {
        texte: "مَا",
        transliteration: "Ma",
        traduction: { fr: "ce qu'", en: "what", es: "lo que" },
        grammaire: {
          fr: "pronom relatif",
          en: "relative pronoun",
          es: "pronombre relativo",
          ar: "اسم موصول",
        },
      },
      {
        texte: "خَلَقَ",
        transliteration: "Khalaqa",
        traduction: { fr: "Il a créé", en: "He has created", es: "Él ha creado" },
        grammaire: {
          fr: "verbe (v.) accompli, 3e pers. m. sing.",
          en: "verb (v.) perfect, 3rd pers. m. sing.",
          es: "verbo (v.) perfectivo, 3ª pers. m. sing.",
          ar: "فعل ماض، للغائب المذكر المفرد",
        },
        racine: { arabe: "خ ل ق", transliteration: "kh-l-q" },
      },
    ],
    traduction: {
      fr: "contre le mal des êtres qu'Il a créés,",
      en: "From the evil of what He has created,",
      es: "del mal de lo que Él ha creado",
    },
    audio: {
      "al-hussary": ["00:00.0", "00:00.8", "00:02.0", "00:02.9"],
      "al-houdaifi": ["00:00.0", "00:01.3", "00:01.9", "00:02.5"]
    },
  },
  {
    numero: 3,
    mots: [
      {
        texte: "وَمِن",
        transliteration: "Wa min",
        traduction: { fr: "et contre", en: "And", es: "y del" },
        grammaire: {
          fr: "conjonction « wa » + préposition",
          en: "conjunction « wa » + preposition",
          es: "conjunción « wa » + preposición",
          ar: "حرف عطف «وَ» + حرف جر",
        },
      },
      {
        texte: "شَرِّ",
        transliteration: "Sharri",
        traduction: { fr: "le mal de", en: "the evil of", es: "mal" },
        grammaire: {
          fr: "nom commun (m.) sing., génitif",
          en: "common noun (m.) sing., genitive",
          es: "nombre común (m.) sing., genitivo",
          ar: "اسم (مذكر) مفرد، مجرور",
        },
        racine: { arabe: "ش ر ر", transliteration: "sh-r-r" },
      },
      {
        texte: "غَاسِقٍ",
        transliteration: "Ghasiqin",
        traduction: { fr: "l'obscurité", en: "evening darkness", es: "la oscuridad" },
        grammaire: {
          fr: "participe actif (m.) indéf., génitif",
          en: "active participle (m.) indef., genitive",
          es: "participio activo (m.) indef., genitivo",
          ar: "اسم فاعل (مذكر) نكرة، مجرور",
        },
        racine: { arabe: "غ س ق", transliteration: "gh-s-q" },
      },
      {
        texte: "إِذَا",
        transliteration: "Idha",
        traduction: { fr: "quand", en: "when", es: "cuando" },
        grammaire: {
          fr: "adverbe de temps",
          en: "time adverb",
          es: "adverbio de tiempo",
          ar: "ظرف زمان",
        },
      },
      {
        texte: "وَقَبَ",
        transliteration: "Waqaba",
        traduction: { fr: "elle s'approfondit", en: "it overspreads", es: "se extiende" },
        grammaire: {
          fr: "verbe (v.) accompli, 3e pers. m. sing.",
          en: "verb (v.) perfect, 3rd pers. m. sing.",
          es: "verbo (v.) perfectivo, 3ª pers. m. sing.",
          ar: "فعل ماض، للغائب المذكر المفرد",
        },
        racine: { arabe: "و ق ب", transliteration: "w-q-b" },
      },
    ],
    traduction: {
      fr: "contre le mal de l'obscurité quand elle s'approfondit,",
      en: "And the evil of evening darkness when it overspreads,",
      es: "y del mal de la oscuridad de la noche cuando se extiende",
    },
    audio: {
      "al-hussary": ["00:00.0", "00:01.2", "00:02.2", "00:04.4", "00:05.6"],
      "al-houdaifi": ["00:00.0", "00:01.55", "00:02.1", "00:03.3", "00:04.0"]
    },
  },
  {
    numero: 4,
    mots: [
      {
        texte: "وَمِن",
        transliteration: "Wa min",
        traduction: { fr: "et contre", en: "From", es: "y del" },
        grammaire: {
          fr: "conjonction « wa » + préposition",
          en: "conjunction « wa » + preposition",
          es: "conjunción « wa » + preposición",
          ar: "حرف عطف «وَ» + حرف جر",
        },
      },
      {
        texte: "شَرِّ",
        transliteration: "Sharri",
        traduction: { fr: "le mal de", en: "the evil of", es: "mal" },
        grammaire: {
          fr: "nom commun (m.) sing., génitif",
          en: "common noun (m.) sing., genitive",
          es: "nombre común (m.) sing., genitivo",
          ar: "اسم (مذكر) مفرد، مجرور",
        },
        racine: { arabe: "ش ر ر", transliteration: "sh-r-r" },
      },
      {
        texte: "النَّفَّاثَاتِ",
        transliteration: "An-Naffathati",
        traduction: { fr: "celles qui soufflent [les sorcières]", en: "sorceresses who blow", es: "las sopladoras" },
        grammaire: {
          fr: "nom commun (f.) plur. déf., génitif",
          en: "common noun (f.) plural def., genitive",
          es: "nombre común (f.) plural def., genitivo",
          ar: "اسم (مؤنث) جمع معرفة، مجرور",
        },
        racine: { arabe: "ن ف ث", transliteration: "n-f-th" },
      },
      {
        texte: "فِي",
        transliteration: "Fi",
        traduction: { fr: "sur", en: "on", es: "de" },
        grammaire: {
          fr: "préposition",
          en: "preposition",
          es: "preposición",
          ar: "حرف جر",
        },
      },
      {
        texte: "الْعُقَدِ",
        transliteration: "Al-'Uqadi",
        traduction: { fr: "les nœuds", en: "knots", es: "nudos" },
        grammaire: {
          fr: "nom commun (m.) plur. déf., génitif",
          en: "common noun (m.) plural def., genitive",
          es: "nombre común (m.) plural def., genitivo",
          ar: "اسم (مذكر) جمع معرفة، مجرور",
        },
        racine: { arabe: "ع ق د", transliteration: "ʿ-q-d" },
      },
    ],
    traduction: {
      fr: "contre le mal de celles qui soufflent [les sorcières] sur les nœuds,",
      en: "From the evil of sorceresses who blow incantations on knots,",
      es: "y del mal de las sopladoras de nudos",
    },
    audio: {
      "al-hussary": ["00:00.0", "00:01.2", "00:03.0", "00:06.0", "00:06.8"],
      "al-houdaifi": ["00:00.0", "00:01.4", "00:02.8", "00:04.4", "00:05.0"]
    },
  },
  {
    numero: 5,
    mots: [
      {
        texte: "وَمِن",
        transliteration: "Wa min",
        traduction: { fr: "et contre", en: "From", es: "y del" },
        grammaire: {
          fr: "conjonction « wa » + préposition",
          en: "conjunction « wa » + preposition",
          es: "conjunción « wa » + preposición",
          ar: "حرف عطف «وَ» + حرف جر",
        },
      },
      {
        texte: "شَرِّ",
        transliteration: "Sharri",
        traduction: { fr: "le mal de", en: "the evil of", es: "mal" },
        grammaire: {
          fr: "nom commun (m.) sing., génitif",
          en: "common noun (m.) sing., genitive",
          es: "nombre común (m.) sing., genitivo",
          ar: "اسم (مذكر) مفرد، مجرور",
        },
        racine: { arabe: "ش ر ر", transliteration: "sh-r-r" },
      },
      {
        texte: "حَاسِدٍ",
        transliteration: "Hasidin",
        traduction: { fr: "l'envieux", en: "the envier", es: "el envidioso" },
        grammaire: {
          fr: "participe actif (m.) indéf., génitif",
          en: "active participle (m.) indef., genitive",
          es: "participio activo (m.) indef., genitivo",
          ar: "اسم فاعل (مذكر) نكرة، مجرور",
        },
        racine: { arabe: "ح س د", transliteration: "h-s-d" },
      },
      {
        texte: "إِذَا",
        transliteration: "Idha",
        traduction: { fr: "quand", en: "when", es: "cuando" },
        grammaire: {
          fr: "adverbe de temps",
          en: "time adverb",
          es: "adverbio de tiempo",
          ar: "ظرف زمان",
        },
      },
      {
        texte: "حَسَدَ",
        transliteration: "Hasada",
        traduction: { fr: "il envie»", en: "he envies", es: "envidia" },
        grammaire: {
          fr: "verbe (v.) accompli, 3e pers. m. sing.",
          en: "verb (v.) perfect, 3rd pers. m. sing.",
          es: "verbo (v.) perfectivo, 3ª pers. m. sing.",
          ar: "فعل ماض، للغائب المذكر المفرد",
        },
        racine: { arabe: "ح س د", transliteration: "h-s-d" },
      },
    ],
    traduction: {
      fr: "et contre le mal de l'envieux quand il envie».",
      en: "From the evil of the envier when he envies.",
      es: "y del mal del envidioso cuando envidia.»",
    },
    audio: {
      "al-hussary": ["00:00.0", "00:01.2", "00:02.2", "00:04.2", "00:05.4"],
      "al-houdaifi": ["00:00.0", "00:01.4", "00:02.1", "00:03.1", "00:03.7"]
    },
  },
];
