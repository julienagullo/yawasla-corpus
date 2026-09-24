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
        texte: "هُوَ",
        transliteration: "Huwa",
        traduction: { fr: "Il", en: "He", es: "Él" },
        grammaire: {
          fr: "pronom personnel, 3e pers. m. sing.",
          en: "personal pronoun, 3rd pers. m. sing.",
          es: "pronombre personal, 3ª pers. m. sing.",
          ar: "ضمير منفصل، للغائب المذكر المفرد",
        },
      },
      {
        texte: "اللَّهُ",
        couleur: "or",
        transliteration: "Allahu",
        traduction: { fr: "est Allah", en: "is Allah", es: "es Dios" },
        grammaire: {
          fr: "nom propre, nominatif",
          en: "proper noun, nominative",
          es: "nombre propio, nominativo",
          ar: "اسم علم، مرفوع",
        },
      },
      {
        texte: "أَحَدٌ",
        transliteration: "Ahadun",
        traduction: { fr: "Unique", en: "the One, the Unique", es: "uno" },
        grammaire: {
          fr: "nom commun (m.) indéf., nominatif",
          en: "common noun (m.) indef., nominative",
          es: "nombre común (m.) indef., nominativo",
          ar: "اسم (مذكر) نكرة، مرفوع",
        },
      },
    ],
    traduction: {
      fr: "Dis: «Il est Allah, Unique.",
      en: 'SAY: "HE IS God the one the most unique,',
      es: "Di: «Él es Dios, uno.",
    },
    audio: {
      "al-hussary": ["00:00.0", "00:00.6", "00:01.8", "00:02.8"],
      "al-houdaifi": ["00:00.0", "00:00.6", "00:01.2", "00:02.0"]
    },
  },
  {
    numero: 2,
    mots: [
      {
        texte: "اللَّهُ",
        couleur: "or",
        transliteration: "Allahu",
        traduction: { fr: "Allah", en: "God", es: "Dios" },
        grammaire: {
          fr: "nom propre, nominatif",
          en: "proper noun, nominative",
          es: "nombre propio, nominativo",
          ar: "اسم علم، مرفوع",
        },
      },
      {
        texte: "الصَّمَدُ",
        transliteration: "As-Samadu",
        traduction: { fr: "Le Seul à être imploré", en: "the immanently indispensable", es: "eterno" },
        grammaire: {
          fr: "nom commun (m.) sing. déf., nominatif",
          en: "common noun (m.) sing. def., nominative",
          es: "nombre común (m.) sing. def., nominativo",
          ar: "اسم (مذكر) مفرد معرفة، مرفوع",
        },
      },
    ],
    traduction: {
      fr: "Allah, Le Seul à être imploré pour ce que nous désirons.",
      en: "God the immanently indispensable.",
      es: "Dios, eterno.",
    },
    audio: {
      "al-hussary": ["00:00.0", "00:01.6"],
      "al-houdaifi": ["00:00.0", "00:01.4"]
    },
  },
  {
    numero: 3,
    mots: [
      {
        texte: "لَمْ",
        transliteration: "Lam",
        traduction: { fr: "ne...pas", en: "not", es: "no" },
        grammaire: {
          fr: "particule de négation",
          en: "negative particle",
          es: "partícula negativa",
          ar: "حرف نفي",
        },
      },
      {
        texte: "يَلِدْ",
        transliteration: "Yalid",
        traduction: { fr: "Il a engendré", en: "He has begotten", es: "ha engendrado" },
        grammaire: {
          fr: "verbe (v.) inaccompli apocopé (jussif), 3e pers. m. sing.",
          en: "verb (v.) imperfect jussive, 3rd pers. m. sing.",
          es: "verbo (v.) imperfectivo yusivo, 3ª pers. m. sing.",
          ar: "فعل مضارع مجزوم، للغائب المذكر المفرد",
        },
      },
      {
        texte: "وَلَمْ",
        transliteration: "Wa lam",
        traduction: { fr: "et ne...pas", en: "and not", es: "ni" },
        grammaire: {
          fr: "conjonction « wa » + particule de négation",
          en: "conjunction « wa » + negative particle",
          es: "conjunción « wa » + partícula negativa",
          ar: "حرف عطف «وَ» + حرف نفي",
        },
      },
      {
        texte: "يُولَدْ",
        transliteration: "Yuwlad",
        traduction: { fr: "Il a été engendré", en: "is He begotten", es: "ha sido engendrado" },
        grammaire: {
          fr: "verbe (v.) passif inaccompli apocopé (jussif), 3e pers. m. sing.",
          en: "verb (v.) passive imperfect jussive, 3rd pers. m. sing.",
          es: "verbo (v.) pasivo imperfectivo yusivo, 3ª pers. m. sing.",
          ar: "فعل مضارع مبني للمجهول مجزوم، للغائب المذكر المفرد",
        },
      },
    ],
    traduction: {
      fr: "Il n'a jamais engendré, n'a pas été engendré non plus.",
      en: "He has begotten no one, and is begotten of none.",
      es: "No ha engendrado ni ha sido engendrado",
    },
    audio: {
      "al-hussary": ["00:00.0", "00:00.6", "00:01.7", "00:02.8"],
      "al-houdaifi": ["00:00.0", "00:00.6", "00:01.3", "00:02.0"]
    },
  },
  {
    numero: 4,
    mots: [
      {
        texte: "وَلَمْ",
        transliteration: "Wa lam",
        traduction: { fr: "et jamais", en: "and not", es: "y no" },
        grammaire: {
          fr: "conjonction « wa » + particule de négation",
          en: "conjunction « wa » + negative particle",
          es: "conjunción « wa » + partícula negativa",
          ar: "حرف عطف «وَ» + حرف نفي",
        },
      },
      {
        texte: "يَكُن",
        transliteration: "Yakun",
        traduction: { fr: "est", en: "is", es: "hay" },
        grammaire: {
          fr: "verbe (v.) inaccompli apocopé (jussif) (famille de « kāna »), 3e pers. m. sing.",
          en: "verb (v.) imperfect jussive (kāna family), 3rd pers. m. sing.",
          es: "verbo (v.) imperfectivo yusivo (familia de « kāna »), 3ª pers. m. sing.",
          ar: "فعل مضارع ناقص مجزوم، للغائب المذكر المفرد",
        },
      },
      {
        texte: "لَّهُ",
        transliteration: "Lahu",
        traduction: { fr: "à Lui", en: "to Him", es: "a Él" },
        grammaire: {
          fr: "préposition « li » + pronom suffixe, 3e pers. m. sing.",
          en: "preposition « li » + pronoun suffix, 3rd pers. m. sing.",
          es: "preposición « li » + sufijo pronominal, 3ª pers. m. sing.",
          ar: "حرف جر «لِ» + ضمير متصل، للغائب المذكر المفرد",
        },
      },
      {
        texte: "كُفُوًا",
        transliteration: "Kufuwan",
        traduction: { fr: "d'égal", en: "comparable", es: "semejante" },
        grammaire: {
          fr: "nom commun (m.) indéf., accusatif",
          en: "common noun (m.) indef., accusative",
          es: "nombre común (m.) indef., acusativo",
          ar: "اسم (مذكر) نكرة، منصوب",
        },
      },
      {
        texte: "أَحَدٌ",
        transliteration: "Ahadun",
        traduction: { fr: "quelqu'un", en: "anyone", es: "otro" },
        grammaire: {
          fr: "nom commun (m.) indéf., nominatif",
          en: "common noun (m.) indef., nominative",
          es: "nombre común (m.) indef., nominativo",
          ar: "اسم (مذكر) نكرة، مرفوع",
        },
      },
    ],
    traduction: {
      fr: "Et nul n'est égal à Lui».",
      en: "There is no one comparable to Him.",
      es: "y no hay otro semejante a Él.»",
    },
    audio: {
      "al-hussary": ["00:00.0", "00:01.0", "00:02.0", "00:03.2", "00:04.8"],
      "al-houdaifi": ["00:00.0", "00:00.7", "00:01.4", "00:02.3", "00:03.1"]
    },
  },
];
