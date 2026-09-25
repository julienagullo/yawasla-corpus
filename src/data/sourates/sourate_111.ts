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
        texte: "تَبَّتْ",
        transliteration: "Tabbat",
        traduction: { fr: "Que périssent", en: "Destroyed will be", es: "Que perezcan" },
        grammaire: {
          fr: "verbe (v.) accompli, 3e pers. f. sing.",
          en: "verb (v.) perfect, 3rd pers. f. sing.",
          es: "verbo (v.) perfectivo, 3ª pers. f. sing.",
          ar: "فعل ماض، للغائبة المؤنثة المفردة",
        },
        racine: { arabe: "ت ب ب", transliteration: "t-b-b" },
      },
      {
        texte: "يَدَا",
        transliteration: "Yada",
        traduction: { fr: "les deux mains", en: "the hands", es: "las manos" },
        grammaire: {
          fr: "nom commun (f.) duel, nominatif",
          en: "common noun (f.) dual, nominative",
          es: "nombre común (f.) dual, nominativo",
          ar: "اسم (مؤنث) مثنى، مرفوع",
        },
        racine: { arabe: "ي د ي", transliteration: "y-d-y" },
      },
      {
        texte: "أَبِي",
        transliteration: "Abi",
        traduction: { fr: "d'Abu", en: "of Abu", es: "de Abu" },
        grammaire: {
          fr: "nom commun (m.) sing., génitif",
          en: "common noun (m.) sing., genitive",
          es: "nombre común (m.) sing., genitivo",
          ar: "اسم (مذكر) مفرد، مجرور",
        },
        racine: { arabe: "ء ب و", transliteration: "ʾ-b-w" },
      },
      {
        texte: "لَهَبٍ",
        transliteration: "Lahabin",
        traduction: { fr: "Lahab", en: "Lahab", es: "Lahab" },
        grammaire: {
          fr: "nom commun (m.) indéf., génitif",
          en: "common noun (m.) indef., genitive",
          es: "nombre común (m.) indef., genitivo",
          ar: "اسم (مذكر) نكرة، مجرور",
        },
        racine: { arabe: "ل ه ب", transliteration: "l-h-b" },
      },
      {
        texte: "وَتَبَّ",
        transliteration: "Wa tabba",
        traduction: { fr: "et que lui-même périsse", en: "and he himself will perish", es: "y que perezca él" },
        grammaire: {
          fr: "conjonction « wa » + verbe (v.) accompli, 3e pers. m. sing.",
          en: "conjunction « wa » + verb (v.) perfect, 3rd pers. m. sing.",
          es: "conjunción « wa » + verbo (v.) perfectivo, 3ª pers. m. sing.",
          ar: "حرف عطف «وَ» + فعل ماض، للغائب المذكر المفرد",
        },
        racine: { arabe: "ت ب ب", transliteration: "t-b-b" },
      },
    ],
    traduction: {
      fr: "Que périssent les deux mains d'Abû-Lahab et que lui-même périsse.",
      en: "DESTROYED WILL BE the hands of Abu Lahab, and he himself will perish.",
      es: "Que perezcan las manos de Abu Lahab y que perezca él.",
    },
    audio: {
      "al-hussary": ["00:00.0", "00:01.2", "00:03.1", "00:04.1", "00:05.6"],
      "al-houdaifi": ["00:00.0", "00:01.1", "00:03.3", "00:03.9", "00:05.2"]
    },
  },
  {
    numero: 2,
    mots: [
      {
        texte: "مَا",
        transliteration: "Ma",
        traduction: { fr: "ne...pas", en: "of no avail", es: "no" },
        grammaire: {
          fr: "particule de négation",
          en: "negative particle",
          es: "partícula negativa",
          ar: "حرف نفي",
        },
      },
      {
        texte: "أَغْنَىٰ",
        transliteration: "Aghna",
        traduction: { fr: "a servi", en: "shall be", es: "servirá" },
        grammaire: {
          fr: "verbe (v.) accompli, 3e pers. m. sing.",
          en: "verb (v.) perfect, 3rd pers. m. sing.",
          es: "verbo (v.) perfectivo, 3ª pers. m. sing.",
          ar: "فعل ماض، للغائب المذكر المفرد",
        },
        racine: { arabe: "غ ن ي", transliteration: "gh-n-y" },
      },
      {
        texte: "عَنْهُ",
        transliteration: "Anhu",
        traduction: { fr: "à lui", en: "to him", es: "le" },
        grammaire: {
          fr: "préposition + pronom suffixe, 3e pers. m. sing.",
          en: "preposition + pronoun suffix, 3rd pers. m. sing.",
          es: "preposición + sufijo pronominal, 3ª pers. m. sing.",
          ar: "حرف جر + ضمير متصل، للغائب المذكر المفرد",
        },
      },
      {
        texte: "مَالُهُ",
        transliteration: "Maluhu",
        traduction: { fr: "sa fortune", en: "his wealth", es: "su riqueza" },
        grammaire: {
          fr: "nom commun (m.), nominatif + pronom suffixe, 3e pers. m. sing.",
          en: "common noun (m.), nominative + pronoun suffix, 3rd pers. m. sing.",
          es: "nombre común (m.), nominativo + sufijo pronominal, 3ª pers. m. sing.",
          ar: "اسم (مذكر)، مرفوع + ضمير متصل، للغائب المذكر المفرد",
        },
        racine: { arabe: "م و ل", transliteration: "m-w-l" },
      },
      {
        texte: "وَمَا",
        transliteration: "Wa ma",
        traduction: { fr: "ni ce qu'", en: "nor what", es: "ni lo que" },
        grammaire: {
          fr: "conjonction « wa » + pronom relatif",
          en: "conjunction « wa » + relative pronoun",
          es: "conjunción « wa » + pronombre relativo",
          ar: "حرف عطف «وَ» + اسم موصول",
        },
      },
      {
        texte: "كَسَبَ",
        transliteration: "Kasaba",
        traduction: { fr: "il a acquis", en: "he has acquired", es: "obtuvo" },
        grammaire: {
          fr: "verbe (v.) accompli, 3e pers. m. sing.",
          en: "verb (v.) perfect, 3rd pers. m. sing.",
          es: "verbo (v.) perfectivo, 3ª pers. m. sing.",
          ar: "فعل ماض، للغائب المذكر المفرد",
        },
        racine: { arabe: "ك س ب", transliteration: "k-s-b" },
      },
    ],
    traduction: {
      fr: "Sa fortune ne lui sert à rien, ni ce qu'il a acquis.",
      en: "Of no avail shall be his wealth, nor what he has acquired.",
      es: "No le servirá de nada su riqueza ni todo lo que obtuvo.",
    },
    audio: {
      "al-hussary": ["00:00.0", "00:01.8", "00:03.2", "00:04.3", "00:06.4", "00:07.6"],
      "al-houdaifi": ["00:00.0", "00:02.0", "00:02.6", "00:03.2", "00:04.4", "00:05.0"]
    },
  },
  {
    numero: 3,
    mots: [
      {
        texte: "سَيَصْلَىٰ",
        transliteration: "Sa-yasla",
        traduction: { fr: "Il sera brûlé", en: "He will be roasted", es: "Entrará" },
        grammaire: {
          fr: "particule de futur « sa » + verbe (v.) inaccompli, 3e pers. m. sing.",
          en: "future particle « sa » + verb (v.) imperfect, 3rd pers. m. sing.",
          es: "partícula de futuro « sa » + verbo (v.) imperfectivo, 3ª pers. m. sing.",
          ar: "حرف استقبال «سَ» + فعل مضارع، للغائب المذكر المفرد",
        },
        racine: { arabe: "ص ل ي", transliteration: "s-l-y" },
      },
      {
        texte: "نَارًا",
        transliteration: "Naran",
        traduction: { fr: "dans un Feu", en: "in the fire", es: "en un Fuego" },
        grammaire: {
          fr: "nom commun (f.) indéf., accusatif",
          en: "common noun (f.) indef., accusative",
          es: "nombre común (f.) indef., acusativo",
          ar: "اسم (مؤنث) نكرة، منصوب",
        },
        racine: { arabe: "ن و ر", transliteration: "n-w-r" },
      },
      {
        texte: "ذَاتَ",
        transliteration: "Dhata",
        traduction: { fr: "plein de", en: "full of", es: "pleno de" },
        grammaire: {
          fr: "nom commun (f.) sing., accusatif",
          en: "common noun (f.) sing., accusative",
          es: "nombre común (f.) sing., acusativo",
          ar: "اسم (مؤنث) مفرد، منصوب",
        },
      },
      {
        texte: "لَهَبٍ",
        transliteration: "Lahabin",
        traduction: { fr: "flammes", en: "flame", es: "llamas" },
        grammaire: {
          fr: "nom commun (m.) indéf., génitif",
          en: "common noun (m.) indef., genitive",
          es: "nombre común (m.) indef., genitivo",
          ar: "اسم (مذكر) نكرة، مجرور",
        },
        racine: { arabe: "ل ه ب", transliteration: "l-h-b" },
      },
    ],
    traduction: {
      fr: "Il sera brûlé dans un Feu plein de flammes,",
      en: "He will be roasted in the fire,",
      es: "Entrará en un Fuego llameante",
    },
    audio: {
      "al-hussary": ["00:00.0", "00:01.8", "00:03.6", "00:04.5"],
      "al-houdaifi": ["00:00.0", "00:01.4", "00:03.0", "00:03.6"]
    },
  },
  {
    numero: 4,
    mots: [
      {
        texte: "وَامْرَأَتُهُ",
        transliteration: "Wa imra'atuhu",
        traduction: { fr: "et sa femme", en: "And his wife", es: "y también su mujer" },
        grammaire: {
          fr: "conjonction « wa » + nom commun (f.), nominatif + pronom suffixe, 3e pers. m. sing.",
          en: "conjunction « wa » + common noun (f.), nominative + pronoun suffix, 3rd pers. m. sing.",
          es: "conjunción « wa » + nombre común (f.), nominativo + sufijo pronominal, 3ª pers. m. sing.",
          ar: "حرف عطف «وَ» + اسم (مؤنث)، مرفوع + ضمير متصل، للغائب المذكر المفرد",
        },
        racine: { arabe: "م ر ء", transliteration: "m-r-ʾ" },
      },
      {
        texte: "حَمَّالَةَ",
        transliteration: "Hammalata",
        traduction: { fr: "la porteuse", en: "the portress", es: "la portadora" },
        grammaire: {
          fr: "participe actif (f.) sing., accusatif",
          en: "active participle (f.) sing., accusative",
          es: "participio activo (f.) sing., acusativo",
          ar: "اسم فاعل (مؤنث) مفرد، منصوب",
        },
        racine: { arabe: "ح م ل", transliteration: "h-m-l" },
      },
      {
        texte: "الْحَطَبِ",
        transliteration: "Al-Hatabi",
        traduction: { fr: "de bois", en: "of fire wood", es: "de leña" },
        grammaire: {
          fr: "nom commun (m.) déf., génitif",
          en: "common noun (m.) def., genitive",
          es: "nombre común (m.) def., genitivo",
          ar: "اسم (مذكر) معرفة، مجرور",
        },
        racine: { arabe: "ح ط ب", transliteration: "h-t-b" },
      },
    ],
    traduction: {
      fr: "de même sa femme, la porteuse de bois,",
      en: "And his wife, the portress of fire wood,",
      es: "y también su mujer, la portadora de leña,",
    },
    audio: {
      "al-hussary": ["00:00.0", "00:02.6", "00:05.1"],
      "al-houdaifi": ["00:00.0", "00:01.9", "00:03.9"]
    },
  },
  {
    numero: 5,
    mots: [
      {
        texte: "فِي",
        transliteration: "Fi",
        traduction: { fr: "à", en: "around", es: "rodeando" },
        grammaire: {
          fr: "préposition",
          en: "preposition",
          es: "preposición",
          ar: "حرف جر",
        },
      },
      {
        texte: "جِيدِهَا",
        transliteration: "Jidiha",
        traduction: { fr: "son cou", en: "her neck", es: "su cuello" },
        grammaire: {
          fr: "nom commun (m.), génitif + pronom suffixe, 3e pers. f. sing.",
          en: "common noun (m.), genitive + pronoun suffix, 3rd pers. f. sing.",
          es: "nombre común (m.), genitivo + sufijo pronominal, 3ª pers. f. sing.",
          ar: "اسم (مذكر)، مجرور + ضمير متصل، للغائبة المؤنثة المفردة",
        },
        racine: { arabe: "ج ي د", transliteration: "j-y-d" },
      },
      {
        texte: "حَبْلٌ",
        transliteration: "Hablun",
        traduction: { fr: "une corde", en: "a strap", es: "una cuerda" },
        grammaire: {
          fr: "nom commun (m.) indéf., nominatif",
          en: "common noun (m.) indef., nominative",
          es: "nombre común (m.) indef., nominativo",
          ar: "اسم (مذكر) نكرة، مرفوع",
        },
        racine: { arabe: "ح ب ل", transliteration: "h-b-l" },
      },
      {
        texte: "مِّن",
        transliteration: "Min",
        traduction: { fr: "de", en: "of", es: "de" },
        grammaire: {
          fr: "préposition",
          en: "preposition",
          es: "preposición",
          ar: "حرف جر",
        },
      },
      {
        texte: "مَّسَدٍ",
        transliteration: "Masadin",
        traduction: { fr: "fibres", en: "fibre", es: "esparto" },
        grammaire: {
          fr: "nom commun (m.) indéf., génitif",
          en: "common noun (m.) indef., genitive",
          es: "nombre común (m.) indef., genitivo",
          ar: "اسم (مذكر) نكرة، مجرور",
        },
        racine: { arabe: "م س د", transliteration: "m-s-d" },
      },
    ],
    traduction: {
      fr: "à son cou, une corde de fibres.",
      en: "Will have a strap of fibre rope around her neck.",
      es: "con una cuerda de esparto rodeando su cuello.",
    },
    audio: {
      "al-hussary": ["00:00.0", "00:00.6", "00:02.6", "00:04.4", "00:05.6"],
      "al-houdaifi": ["00:00.0", "00:00.6", "00:01.9", "00:03.5", "00:04.5"]
    },
  },
];
