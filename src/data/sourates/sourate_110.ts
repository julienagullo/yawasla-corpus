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
        texte: "إِذَا",
        transliteration: "Idha",
        traduction: { fr: "Lorsque", en: "WHEN", es: "Cuando" },
        grammaire: {
          fr: "adverbe de temps",
          en: "time adverb",
          es: "adverbio de tiempo",
          ar: "ظرف زمان",
        },
      },
      {
        texte: "جَاءَ",
        transliteration: "Ja'a",
        traduction: { fr: "vient", en: "arrives", es: "llegue" },
        grammaire: {
          fr: "verbe (v.) accompli, 3e pers. m. sing.",
          en: "verb (v.) perfect, 3rd pers. m. sing.",
          es: "verbo (v.) perfectivo, 3ª pers. m. sing.",
          ar: "فعل ماض، للغائب المذكر المفرد",
        },
      },
      {
        texte: "نَصْرُ",
        transliteration: "Nasru",
        traduction: { fr: "le secours d'", en: "THE HELP of", es: "el auxilio de" },
        grammaire: {
          fr: "nom commun (m.), nominatif",
          en: "common noun (m.), nominative",
          es: "nombre común (m.), nominativo",
          ar: "اسم (مذكر)، مرفوع",
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
        texte: "وَالْفَتْحُ",
        transliteration: "Wa al-Fathu",
        traduction: { fr: "ainsi que la victoire", en: "and victory", es: "y la victoria" },
        grammaire: {
          fr: "conjonction « wa » + nom commun (m.) déf., nominatif",
          en: "conjunction « wa » + common noun (m.) def., nominative",
          es: "conjunción « wa » + nombre común (m.) def., nominativo",
          ar: "حرف عطف «وَ» + اسم (مذكر) معرفة، مرفوع",
        },
      },
    ],
    traduction: {
      fr: "Lorsque vient le secours d'Allah ainsi que la victoire,",
      en: "WHEN THE HELP of God arrives and victory,",
      es: "Cuando llegue el auxilio de Dios y la victoria",
    },
    audio: {
      "al-hussary": ["00:00.0", "00:01.0", "00:02.8", "00:04.4", "00:05.6"],
      "al-houdaifi": ["00:00.0", "00:00.8", "00:03.4", "00:04.1", "00:04.8"]
    },
  },
  {
    numero: 2,
    mots: [
      {
        texte: "وَرَأَيْتَ",
        transliteration: "Wa ra'ayta",
        traduction: { fr: "et que tu vois", en: "And you see", es: "y veas" },
        grammaire: {
          fr: "conjonction « wa » + verbe (v.) accompli, 2e pers. m. sing. + pronom suffixe, 2e pers. m. sing.",
          en: "conjunction « wa » + verb (v.) perfect, 2nd pers. m. sing. + pronoun suffix, 2nd pers. m. sing.",
          es: "conjunción « wa » + verbo (v.) perfectivo, 2ª pers. m. sing. + sufijo pronominal, 2ª pers. m. sing.",
          ar: "حرف عطف «وَ» + فعل ماض، للمخاطب المذكر المفرد + ضمير متصل، للمخاطب المذكر المفرد",
        },
      },
      {
        texte: "النَّاسَ",
        transliteration: "An-Nasa",
        traduction: { fr: "les gens", en: "men", es: "a los seres humanos" },
        grammaire: {
          fr: "nom commun (m.) plur. déf., accusatif",
          en: "common noun (m.) plural def., accusative",
          es: "nombre común (m.) plural def., acusativo",
          ar: "اسم (مذكر) جمع معرفة، منصوب",
        },
      },
      {
        texte: "يَدْخُلُونَ",
        transliteration: "Yadkhuluna",
        traduction: { fr: "entrer", en: "enter", es: "entrando" },
        grammaire: {
          fr: "verbe (v.) inaccompli, 3e pers. m. plur. + pronom suffixe, 3e pers. m. plur.",
          en: "verb (v.) imperfect, 3rd pers. m. plural + pronoun suffix, 3rd pers. m. plural",
          es: "verbo (v.) imperfectivo, 3ª pers. m. plural + sufijo pronominal, 3ª pers. m. plural",
          ar: "فعل مضارع، للغائبين (جمع مذكر) + ضمير متصل، للغائبين (جمع مذكر)",
        },
      },
      {
        texte: "فِي",
        transliteration: "Fi",
        traduction: { fr: "dans", en: "in", es: "en" },
        grammaire: {
          fr: "préposition",
          en: "preposition",
          es: "preposición",
          ar: "حرف جر",
        },
      },
      {
        texte: "دِينِ",
        transliteration: "Dini",
        traduction: { fr: "la religion d'", en: "discipline", es: "la religión de" },
        grammaire: {
          fr: "nom commun, génitif",
          en: "common noun, genitive",
          es: "nombre común, genitivo",
          ar: "اسم، مجرور",
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
        texte: "أَفْوَاجًا",
        transliteration: "Afwajan",
        traduction: { fr: "en foule", en: "horde on horde", es: "en oleadas sucesivas" },
        grammaire: {
          fr: "nom commun plur. indéf., accusatif",
          en: "common noun plural indef., accusative",
          es: "nombre común plural indef., acusativo",
          ar: "اسم جمع نكرة، منصوب",
        },
      },
    ],
    traduction: {
      fr: "et que tu vois les gens entrer en foule dans la religion d'Allah,",
      en: "And you see men enter God's discipline horde on horde,",
      es: "y veas a los seres humanos entrando en la religión de Dios en oleadas sucesivas,",
    },
    audio: {
      "al-hussary": ["00:00.0", "00:01.8", "00:03.4", "00:05.5", "00:06.4", "00:07.6", "00:09.0"],
      "al-houdaifi": ["00:00.0", "00:02.2", "00:02.8", "00:03.8", "00:04.4", "00:05.1", "00:05.7"]
    },
  },
  {
    numero: 3,
    mots: [
      {
        texte: "فَسَبِّحْ",
        transliteration: "Fa sabbih",
        traduction: { fr: "alors, célèbre la gloire", en: "Then glorify", es: "glorifica" },
        grammaire: {
          fr: "particule de résultat « fa » + verbe (v.) impératif, 2e pers. m. sing.",
          en: "result particle « fa » + verb (v.) imperative, 2nd pers. m. sing.",
          es: "partícula de resultado « fa » + verbo (v.) imperativo, 2ª pers. m. sing.",
          ar: "حرف واقع في جواب الشرط «فَ» + فعل أمر، للمخاطب المذكر المفرد",
        },
      },
      {
        texte: "بِحَمْدِ",
        transliteration: "Bi hamdi",
        traduction: { fr: "par la louange", en: "with the praise of", es: "con alabanzas" },
        grammaire: {
          fr: "préposition « bi » + nom commun (m.), génitif",
          en: "preposition « bi » + common noun (m.), genitive",
          es: "preposición « bi » + nombre común (m.), genitivo",
          ar: "حرف جر «بِ» + اسم (مذكر)، مجرور",
        },
      },
      {
        texte: "رَبِّكَ",
        transliteration: "Rabbika",
        traduction: { fr: "de ton Seigneur", en: "your Lord", es: "a tu Señor" },
        grammaire: {
          fr: "nom commun (m.), génitif + pronom suffixe, 2e pers. m. sing.",
          en: "common noun (m.), genitive + pronoun suffix, 2nd pers. m. sing.",
          es: "nombre común (m.), genitivo + sufijo pronominal, 2ª pers. m. sing.",
          ar: "اسم (مذكر)، مجرور + ضمير متصل، للمخاطب المذكر المفرد",
        },
      },
      {
        texte: "وَاسْتَغْفِرْهُ ۚ",
        transliteration: "Wa istaghfirhu",
        traduction: { fr: "et implore Son pardon", en: "and seek His forgiveness", es: "y busca Su perdón" },
        grammaire: {
          fr: "conjonction « wa » + verbe (v.) impératif, 2e pers. m. sing. + pronom suffixe, 3e pers. m. sing.",
          en: "conjunction « wa » + verb (v.) imperative, 2nd pers. m. sing. + pronoun suffix, 3rd pers. m. sing.",
          es: "conjunción « wa » + verbo (v.) imperativo, 2ª pers. m. sing. + sufijo pronominal, 3ª pers. m. sing.",
          ar: "حرف عطف «وَ» + فعل أمر، للمخاطب المذكر المفرد + ضمير متصل، للغائب المذكر المفرد",
        },
      },
      {
        texte: "إِنَّهُ",
        transliteration: "Innahu",
        traduction: { fr: "Car, Lui", en: "Verily He", es: "En verdad, Él" },
        grammaire: {
          fr: "particule d'accusatif + pronom suffixe, 3e pers. m. sing.",
          en: "accusative particle + pronoun suffix, 3rd pers. m. sing.",
          es: "partícula de acusativo + sufijo pronominal, 3ª pers. m. sing.",
          ar: "حرف نصب + ضمير متصل، للغائب المذكر المفرد",
        },
      },
      {
        texte: "كَانَ",
        transliteration: "Kana",
        traduction: { fr: "est", en: "is", es: "es" },
        grammaire: {
          fr: "verbe (v.) accompli (famille de « kāna »), 3e pers. m. sing.",
          en: "verb (v.) perfect (kāna family), 3rd pers. m. sing.",
          es: "verbo (v.) perfectivo (familia de « kāna »), 3ª pers. m. sing.",
          ar: "فعل ماض ناقص، للغائب المذكر المفرد",
        },
      },
      {
        texte: "تَوَّابًا",
        transliteration: "Tawwaban",
        traduction: {
          fr: "le grand Accueillant au repentir",
          en: "relenting",
          es: "quien acepta siempre el arrepentimiento",
        },
        grammaire: {
          fr: "participe actif (m.) sing. indéf., accusatif",
          en: "active participle (m.) sing. indef., accusative",
          es: "participio activo (m.) sing. indef., acusativo",
          ar: "اسم فاعل (مذكر) مفرد نكرة، منصوب",
        },
      },
    ],
    traduction: {
      fr: "alors, par la louange, célèbre la gloire de ton Seigneur et implore Son pardon. Car c'est Lui le grand Accueillant au repentir.",
      en: "Then glorify your Lord and seek His forgiveness. Verily He is relenting.",
      es: "glorifica con alabanzas a tu Señor y busca Su perdón. En verdad, Él acepta al que se arrepiente.",
    },
    audio: {
      "al-hussary": ["00:00.0", "00:01.5", "00:03.0", "00:04.8", "00:08.5", "00:10.7", "00:12.0"],
      "al-houdaifi": ["00:00.0", "00:01.0", "00:01.9", "00:03.0", "00:05.2", "00:06.8", "00:07.5"]
    },
  },
];
