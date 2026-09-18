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
        texte: "إِذَا",
        transliteration: "Idha",
        traduction: { fr: "Lorsque", en: "WHEN", es: "Cuando" },
        grammaire: { fr: "particule temporelle", en: "temporal particle", es: "partícula temporal" },
      },
      {
        texte: "جَاءَ",
        transliteration: "Ja'a",
        traduction: { fr: "vient", en: "arrives", es: "llegue" },
        grammaire: {
          fr: "verbe (v.) accompli, 3e pers. m. sing. (valeur de futur après « idhā »)",
          en: "verb (v.) perfect, 3rd pers. m. sing. (future value after « idhā »)",
          es: "verbo (v.) perfectivo, 3ª pers. m. sing. (valor de futuro tras « idhā »)",
        },
      },
      {
        texte: "نَصْرُ",
        transliteration: "Nasru",
        traduction: { fr: "le secours d'", en: "THE HELP of", es: "el auxilio de" },
        grammaire: {
          fr: "nom commun (m.) sing. (état construit), nominatif",
          en: "common noun (m.) sing. (construct state), nominative",
          es: "nombre común (m.) sing. (estado constructo), nominativo",
        },
      },
      {
        texte: "اللَّهِ",
        couleur: "or",
        transliteration: "Allahi",
        traduction: { fr: "Allah", en: "Allah", es: "Al.lah" },
        grammaire: {
          fr: "nom propre (m.) sing., génitif",
          en: "proper noun (m.) sing., genitive",
          es: "nombre propio (m.) sing., genitivo",
        },
      },
      {
        texte: "وَالْفَتْحُ",
        transliteration: "Wa al-Fathu",
        traduction: { fr: "ainsi que la victoire", en: "and victory", es: "y la victoria" },
        grammaire: {
          fr: "conjonction « wa » + nom commun (m.) sing. déf., nominatif",
          en: "conjunction « wa » + common noun (m.) sing. def., nominative",
          es: "conjunción « wa » + nombre común (m.) sing. def., nominativo",
        },
      },
    ],
    traduction: {
      fr: "Lorsque vient le secours d'Allah ainsi que la victoire,",
      en: "WHEN THE HELP of God arrives and victory,",
      es: "Cuando llegue el auxilio de Dios y la victoria",
    },
    audio: ["00:00.0", "00:01.0", "00:02.8", "00:04.4", "00:05.6"],
  },
  {
    numero: 2,
    mots: [
      {
        texte: "وَرَأَيْتَ",
        transliteration: "Wa ra'ayta",
        traduction: { fr: "et que tu vois", en: "And you see", es: "y veas" },
        grammaire: {
          fr: "conjonction « wa » + verbe (v.) accompli, 2e pers. m. sing. (valeur de présent après « idhā »)",
          en: "conjunction « wa » + verb (v.) perfect, 2nd pers. m. sing. (present value after « idhā »)",
          es: "conjunción « wa » + verbo (v.) perfectivo, 2ª pers. m. sing. (valor de presente tras « idhā »)",
        },
      },
      {
        texte: "النَّاسَ",
        transliteration: "An-Nasa",
        traduction: { fr: "les gens", en: "men", es: "a los seres humanos" },
        grammaire: {
          fr: "nom commun (m.) plur. déf., accusatif",
          en: "common noun (m.) pl. def., accusative",
          es: "nombre común (m.) pl. def., acusativo",
        },
      },
      {
        texte: "يَدْخُلُونَ",
        transliteration: "Yadkhuluna",
        traduction: { fr: "entrer", en: "enter", es: "entrando" },
        grammaire: {
          fr: "verbe (v.) inaccompli, 3e pers. m. plur.",
          en: "verb (v.) imperfect, 3rd pers. m. pl.",
          es: "verbo (v.) imperfectivo, 3ª pers. m. pl.",
        },
      },
      {
        texte: "فِي",
        transliteration: "Fi",
        traduction: { fr: "dans", en: "in", es: "en" },
        grammaire: { fr: "préposition", en: "preposition", es: "preposición" },
      },
      {
        texte: "دِينِ",
        transliteration: "Dini",
        traduction: { fr: "la religion d'", en: "discipline", es: "la religión de" },
        grammaire: {
          fr: "nom commun (m.) sing. (état construit), génitif",
          en: "common noun (m.) sing. (construct state), genitive",
          es: "nombre común (m.) sing. (estado constructo), genitivo",
        },
      },
      {
        texte: "اللَّهِ",
        couleur: "or",
        transliteration: "Allahi",
        traduction: { fr: "Allah", en: "Allah", es: "Al.lah" },
        grammaire: {
          fr: "nom propre (m.) sing., génitif",
          en: "proper noun (m.) sing., genitive",
          es: "nombre propio (m.) sing., genitivo",
        },
      },
      {
        texte: "أَفْوَاجًا",
        transliteration: "Afwajan",
        traduction: { fr: "en foule", en: "horde on horde", es: "en oleadas sucesivas" },
        grammaire: {
          fr: "nom commun (m.) plur. indéf., accusatif (valeur adverbiale, litt. « par troupes »)",
          en: "common noun (m.) pl. indef., accusative (adverbial value, lit. “in troops”)",
          es: "nombre común (m.) pl. indef., acusativo (valor adverbial, lit. « en tropas »)",
        },
      },
    ],
    traduction: {
      fr: "et que tu vois les gens entrer en foule dans la religion d'Allah,",
      en: "And you see men enter God's discipline horde on horde,",
      es: "y veas a los seres humanos entrando en la religión de Dios en oleadas sucesivas,",
    },
    audio: ["00:00.0", "00:01.8", "00:03.4", "00:05.5", "00:06.4", "00:07.6", "00:09.0"],
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
          en: "resultative particle « fa » + verb (v.) imperative, 2nd pers. m. sing.",
          es: "partícula de resultado « fa » + verbo (v.) imperativo, 2ª pers. m. sing.",
        },
      },
      {
        texte: "بِحَمْدِ",
        transliteration: "Bi hamdi",
        traduction: { fr: "par la louange", en: "with the praise of", es: "con alabanzas" },
        grammaire: {
          fr: "préposition « bi » + nom commun (m.) sing., génitif",
          en: "preposition « bi » + common noun (m.) sing., genitive",
          es: "preposición « bi » + nombre común (m.) sing., genitivo",
        },
      },
      {
        texte: "رَبِّكَ",
        transliteration: "Rabbika",
        traduction: { fr: "de ton Seigneur", en: "your Lord", es: "a tu Señor" },
        grammaire: {
          fr: "nom commun (m.) sing. + pronom suffixe, 2e pers. m. sing., génitif",
          en: "common noun (m.) sing. + suffix pronoun, 2nd pers. m. sing., genitive",
          es: "nombre común (m.) sing. + sufijo pronominal, 2ª pers. m. sing., genitivo",
        },
      },
      {
        texte: "وَاسْتَغْفِرْهُ ۚ",
        transliteration: "Wa istaghfirhu",
        traduction: { fr: "et implore Son pardon", en: "and seek His forgiveness", es: "y busca Su perdón" },
        grammaire: {
          fr: "conjonction « wa » + verbe (v.) impératif, 2e pers. m. sing. + pronom suffixe, 3e pers. m. sing.",
          en: "conjunction « wa » + verb (v.) imperative, 2nd pers. m. sing. + suffix pronoun, 3rd pers. m. sing.",
          es: "conjunción « wa » + verbo (v.) imperativo, 2ª pers. m. sing. + sufijo pronominal, 3ª pers. m. sing.",
        },
      },
      {
        texte: "إِنَّهُ",
        transliteration: "Innahu",
        traduction: { fr: "Car, Lui", en: "Verily He", es: "En verdad, Él" },
        grammaire: {
          fr: "particule d'emphase « inna » (rection à l'accusatif) + pronom suffixe, 3e pers. m. sing.",
          en: "emphatic particle « inna » (accusative-governing) + suffix pronoun, 3rd pers. m. sing.",
          es: "partícula enfática « inna » (rige acusativo) + sufijo pronominal, 3ª pers. m. sing.",
        },
      },
      {
        texte: "كَانَ",
        transliteration: "Kana",
        traduction: { fr: "est", en: "is", es: "es" },
        grammaire: {
          fr: "verbe (v.) « être » accompli, 3e pers. m. sing. (valeur durative : « est/demeure toujours »)",
          en: "verb (v.) “to be” perfect, 3rd pers. m. sing. (durative value: “is/remains always”)",
          es: "verbo (v.) « ser » perfectivo, 3ª pers. m. sing. (valor durativo: « es/permanece siempre »)",
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
          fr: "nom commun (m.) sing. indéf., accusatif (forme intensive, attribut de « kāna », l'un des noms d'Allah)",
          en: "common noun (m.) sing. indef., accusative (intensive form, predicate of « kāna », one of Allah's names)",
          es: "nombre común (m.) sing. indef., acusativo (forma intensiva, atributo de « kāna », uno de los nombres de Allah)",
        },
      },
    ],
    traduction: {
      fr: "alors, par la louange, célèbre la gloire de ton Seigneur et implore Son pardon. Car c'est Lui le grand Accueillant au repentir.",
      en: "Then glorify your Lord and seek His forgiveness. Verily He is relenting.",
      es: "glorifica con alabanzas a tu Señor y busca Su perdón. En verdad, Él acepta al que se arrepiente.",
    },
    audio: ["00:00.0", "00:01.5", "00:02.9", "00:04.8", "00:08.5", "00:10.7", "00:12.0"],
  },
];
