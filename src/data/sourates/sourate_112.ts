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
          fr: "préposition « bi » + nom commun (m.) sing.",
          en: "preposition « bi » + common noun (m.) sing.",
          es: "preposición « bi » + nombre común (m.) sing.",
        },
      },
      {
        texte: "اللَّهِ",
        couleur: "or",
        transliteration: "Allahi",
        traduction: { fr: "Allah", en: "Allah", es: "Al.lah" },
        grammaire: { fr: "nom propre (m.) sing.", en: "proper noun (m.) sing.", es: "nombre propio (m.) sing." },
      },
      {
        texte: "الرَّحْمَـٰنِ",
        transliteration: "Ar-Rahmani",
        traduction: { fr: "le Tout Miséricordieux", en: "most benevolent", es: "el Clementísimo" },
        grammaire: { fr: "adjectif (m.) sing. déf.", en: "adjective (m.) sing. def.", es: "adjetivo (m.) sing. def." },
      },
      {
        texte: "الرَّحِيمِ",
        transliteration: "Ar-Rahimi",
        traduction: { fr: "le Très Miséricordieux", en: "ever-merciful", es: "el Misericordiosísimo" },
        grammaire: { fr: "adjectif (m.) sing. déf.", en: "adjective (m.) sing. def.", es: "adjetivo (m.) sing. def." },
      },
    ],
    traduction: {
      fr: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux.",
      en: "In the name of Allah, most benevolent, ever-merciful.",
      es: "En el nombre de Al.lah, el Clementísimo, el Misericordiosísimo.",
    },
    audio: ["00:00.0", "00:00.9", "00:01.6", "00:02.7"],
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
        },
      },
      {
        texte: "اللَّهُ",
        couleur: "or",
        transliteration: "Allahu",
        traduction: { fr: "est Allah", en: "is Allah", es: "es Dios" },
        grammaire: {
          fr: "nom propre (m.) sing., nominatif",
          en: "proper noun (m.) sing., nominative",
          es: "nombre propio (m.) sing., nominativo",
        },
      },
      {
        texte: "أَحَدٌ",
        transliteration: "Ahadun",
        traduction: { fr: "Unique", en: "the One, the Unique", es: "uno" },
        grammaire: {
          fr: "nom/adjectif (m.) sing. indéf., nominatif (litt. « un, unique »)",
          en: "noun/adjective (m.) sing. indef., nominative (lit. “one, unique”)",
          es: "nombre/adjetivo (m.) sing. indef., nominativo (lit. « uno, único »)",
        },
      },
    ],
    traduction: {
      fr: "Dis: «Il est Allah, Unique.",
      en: 'SAY: "HE IS God the one the most unique,',
      es: "Di: «Él es Dios, uno.",
    },
    audio: ["00:00.0", "00:00.6", "00:01.8", "00:02.8"],
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
          fr: "nom propre (m.) sing., nominatif",
          en: "proper noun (m.) sing., nominative",
          es: "nombre propio (m.) sing., nominativo",
        },
      },
      {
        texte: "الصَّمَدُ",
        transliteration: "As-Samadu",
        traduction: { fr: "Le Seul à être imploré", en: "the immanently indispensable", es: "eterno" },
        grammaire: {
          fr: "nom commun (m.) sing. déf., nominatif (litt. « Le Suffisant absolu, Celui dont tous dépendent »)",
          en: "common noun (m.) sing. def., nominative (lit. “The Self-Sufficient, upon whom all depend”)",
          es: "nombre común (m.) sing. def., nominativo (lit. « El Autosuficiente, del que todos dependen »)",
        },
      },
    ],
    traduction: {
      fr: "Allah, Le Seul à être imploré pour ce que nous désirons.",
      en: "God the immanently indispensable.",
      es: "Dios, eterno.",
    },
    audio: ["00:00.0", "00:01.6"],
  },
  {
    numero: 3,
    mots: [
      {
        texte: "لَمْ",
        transliteration: "Lam",
        traduction: { fr: "ne...pas", en: "not", es: "no" },
        grammaire: {
          fr: "particule de négation (jussif)",
          en: "negative particle (jussive)",
          es: "partícula de negación (yusivo)",
        },
      },
      {
        texte: "يَلِدْ",
        transliteration: "Yalid",
        traduction: { fr: "Il a engendré", en: "He has begotten", es: "ha engendrado" },
        grammaire: {
          fr: "verbe (v.) inaccompli apocopé (jussif), 3e pers. m. sing. (valeur de passé avec « lam »)",
          en: "verb (v.) apocopated imperfect (jussive), 3rd pers. m. sing. (past value with “lam”)",
          es: "verbo (v.) imperfectivo apocopado (yusivo), 3ª pers. m. sing. (valor de pasado con « lam »)",
        },
      },
      {
        texte: "وَلَمْ",
        transliteration: "Wa lam",
        traduction: { fr: "et ne...pas", en: "and not", es: "ni" },
        grammaire: {
          fr: "conjonction « wa » + particule de négation (jussif)",
          en: "conjunction « wa » + negative particle (jussive)",
          es: "conjunción « wa » + partícula de negación (yusivo)",
        },
      },
      {
        texte: "يُولَدْ",
        transliteration: "Yuwlad",
        traduction: { fr: "Il n'a été engendré", en: "is He begotten", es: "ha sido engendrado" },
        grammaire: {
          fr: "verbe (v.) passif inaccompli apocopé (jussif), 3e pers. m. sing.",
          en: "verb (v.) passive apocopated imperfect (jussive), 3rd pers. m. sing.",
          es: "verbo (v.) pasivo imperfectivo apocopado (yusivo), 3ª pers. m. sing.",
        },
      },
    ],
    traduction: {
      fr: "Il n'a jamais engendré, n'a pas été engendré non plus.",
      en: "He has begotten no one, and is begotten of none.",
      es: "No ha engendrado ni ha sido engendrado",
    },
    audio: ["00:00.0", "00:00.6", "00:01.7", "00:02.8"],
  },
  {
    numero: 4,
    mots: [
      {
        texte: "وَلَمْ",
        transliteration: "Wa lam",
        traduction: { fr: "et jamais", en: "and not", es: "y no" },
        grammaire: {
          fr: "conjonction « wa » + particule de négation (jussif)",
          en: "conjunction « wa » + negative particle (jussive)",
          es: "conjunción « wa » + partícula de negación (yusivo)",
        },
      },
      {
        texte: "يَكُن",
        transliteration: "Yakun",
        traduction: { fr: "n'est", en: "is", es: "hay" },
        grammaire: {
          fr: "verbe (v.) inaccompli apocopé (jussif) de « être », 3e pers. m. sing.",
          en: "verb (v.) apocopated imperfect (jussive) of “to be”, 3rd pers. m. sing.",
          es: "verbo (v.) imperfectivo apocopado (yusivo) de « ser », 3ª pers. m. sing.",
        },
      },
      {
        texte: "لَّهُ",
        transliteration: "Lahu",
        traduction: { fr: "à Lui", en: "to Him", es: "a Él" },
        grammaire: {
          fr: "préposition « li » + pronom suffixe, 3e pers. m. sing.",
          en: "preposition « li » + suffix pronoun, 3rd pers. m. sing.",
          es: "preposición « li » + sufijo pronominal, 3ª pers. m. sing.",
        },
      },
      {
        texte: "كُفُوًا",
        transliteration: "Kufuwan",
        traduction: { fr: "d'égal", en: "comparable", es: "semejante" },
        grammaire: {
          fr: "nom/adjectif (m.) sing. indéf., accusatif",
          en: "noun/adjective (m.) sing. indef., accusative",
          es: "nombre/adjetivo (m.) sing. indef., acusativo",
        },
      },
      {
        texte: "أَحَدٌ",
        transliteration: "Ahadun",
        traduction: { fr: "nul", en: "anyone", es: "otro" },
        grammaire: {
          fr: "nom/pronom (m.) sing. indéf., nominatif (litt. « quelqu'un, personne »)",
          en: "noun/pronoun (m.) sing. indef., nominative (lit. “someone, anyone”)",
          es: "nombre/pronombre (m.) sing. indef., nominativo (lit. « alguien, nadie »)",
        },
      },
    ],
    traduction: {
      fr: "Et nul n'est égal à Lui».",
      en: "There is no one comparable to Him.",
      es: "y no hay otro semejante a Él.»",
    },
    audio: ["00:00.0", "00:01.0", "00:02.0", "00:03.2", "00:04.8"],
  },
];
