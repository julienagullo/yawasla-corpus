import type { Verset } from "../types";

// Sources (voir CLAUDE.md) :
// - Texte arabe : quran-simple.xml (Tanzil Project).
// - Traductions officielles : fr.hamidullah.xml, en.ahmedali.xml, es.bornez.xml (Tanzil Project).
// - Grammaire mot-à-mot : quranic-corpus-morphology-0.4.txt (Quranic Arabic Corpus).
// Mot-à-mot : par défaut le mot de la traduction officielle correspondante (FR
// Hamidullah, EN Ahmed Ali, ES Bornez), sauf « envers eux »/« upon them »/
// « sobre ellos » (v.7, x2) où aucune des 3 ne rend le mot arabe séparément.
export const versets: Verset[] = [
  {
    numero: 1,
    mots: [
      {
        texte: "بِسْمِ",
        traduction: { fr: "au nom de", en: "in the name of", es: "en el nombre de" },
        grammaire: {
          fr: "préposition « bi » + nom commun (m.) sing.",
          en: "preposition « bi » + common noun (m.) sing.",
          es: "preposición « bi » + nombre común (m.) sing.",
        },
      },
      {
        texte: "اللَّهِ",
        traduction: { fr: "Allah", en: "Allah", es: "Al.lah" },
        grammaire: { fr: "nom propre (m.) sing.", en: "proper noun (m.) sing.", es: "nombre propio (m.) sing." },
      },
      {
        texte: "الرَّحْمَـٰنِ",
        traduction: { fr: "le Tout Miséricordieux", en: "most benevolent", es: "el Clementísimo" },
        grammaire: { fr: "adjectif (m.) sing. déf.", en: "adjective (m.) sing. def.", es: "adjetivo (m.) sing. def." },
      },
      {
        texte: "الرَّحِيمِ",
        traduction: { fr: "le Très Miséricordieux", en: "ever-merciful", es: "el Misericordiosísimo" },
        grammaire: { fr: "adjectif (m.) sing. déf.", en: "adjective (m.) sing. def.", es: "adjetivo (m.) sing. def." },
      },
    ],
    traduction: {
      fr: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux.",
      en: "In the name of Allah, most benevolent, ever-merciful.",
      es: "En el nombre de Al.lah, el Clementísimo, el Misericordiosísimo.",
    },
  },
  {
    numero: 2,
    mots: [
      {
        texte: "الْحَمْدُ",
        traduction: { fr: "la louange", en: "all praise be", es: "la alabanza es" },
        grammaire: {
          fr: "nom commun (m.) sing. déf.",
          en: "common noun (m.) sing. def.",
          es: "nombre común (m.) sing. def.",
        },
      },
      {
        texte: "لِلَّهِ",
        traduction: { fr: "à Allah", en: "to Allah", es: "para Dios" },
        grammaire: {
          fr: "préposition « li » + nom propre (m.) sing.",
          en: "preposition « li » + proper noun (m.) sing.",
          es: "preposición « li » + nombre propio (m.) sing.",
        },
      },
      {
        texte: "رَبِّ",
        traduction: { fr: "Seigneur de", en: "Lord of", es: "Señor de" },
        grammaire: {
          fr: "nom commun (m.) sing. (état construit)",
          en: "common noun (m.) sing. (construct state)",
          es: "nombre común (m.) sing. (estado constructo)",
        },
      },
      {
        texte: "الْعَالَمِينَ",
        traduction: { fr: "l'univers", en: "all the worlds", es: "los mundos" },
        grammaire: {
          fr: "nom commun (m.) pluriel déf. (litt. « les mondes »)",
          en: "common noun (m.) plural def. (lit. “the worlds”)",
          es: "nombre común (m.) plural def. (lit. « los mundos »)",
        },
      },
    ],
    traduction: {
      fr: "Louange à Allah, Seigneur de l'univers.",
      en: "ALL PRAISE BE to Allah, Lord of all the worlds,",
      es: "La alabanza es para Dios, Señor de los mundos,",
    },
  },
  {
    numero: 3,
    mots: [
      {
        texte: "الرَّحْمَـٰنِ",
        traduction: { fr: "le Tout Miséricordieux", en: "Most beneficent", es: "el Clementísimo con toda la Creación" },
        grammaire: { fr: "adjectif (m.) sing. déf.", en: "adjective (m.) sing. def.", es: "adjetivo (m.) sing. def." },
      },
      {
        texte: "الرَّحِيمِ",
        traduction: { fr: "le Très Miséricordieux", en: "ever-merciful", es: "el Misericordiosísimo con los creyentes" },
        grammaire: { fr: "adjectif (m.) sing. déf.", en: "adjective (m.) sing. def.", es: "adjetivo (m.) sing. def." },
      },
    ],
    traduction: {
      fr: "Le Tout Miséricordieux, le Très Miséricordieux,",
      en: "Most beneficent, ever-merciful,",
      es: "el Clementísimo con toda la Creación, el Misericordiosísimo con los creyentes,",
    },
  },
  {
    numero: 4,
    mots: [
      {
        texte: "مَالِكِ",
        traduction: { fr: "Maître de", en: "King of", es: "Soberano de" },
        grammaire: {
          fr: "nom/participe actif (m.) sing. (état construit)",
          en: "noun/active participle (m.) sing. (construct state)",
          es: "nombre/participio activo (m.) sing. (estado constructo)",
        },
      },
      {
        texte: "يَوْمِ",
        traduction: { fr: "le Jour de", en: "the Day of", es: "el Día de" },
        grammaire: {
          fr: "nom commun (m.) sing. (état construit)",
          en: "common noun (m.) sing. (construct state)",
          es: "nombre común (m.) sing. (estado constructo)",
        },
      },
      {
        texte: "الدِّينِ",
        traduction: { fr: "la rétribution", en: "Judgement", es: "la Recompensa" },
        grammaire: {
          fr: "nom commun (m.) sing. déf. (litt. « la religion/jugement »)",
          en: "common noun (m.) sing. def. (lit. “religion/judgment”)",
          es: "nombre común (m.) sing. def. (lit. « la religión/juicio »)",
        },
      },
    ],
    traduction: {
      fr: "Maître du Jour de la rétribution.",
      en: "King of the Day of Judgement.",
      es: "Soberano del Día de la Recompensa.",
    },
  },
  {
    numero: 5,
    mots: [
      {
        texte: "إِيَّاكَ",
        traduction: { fr: "C'est Toi [Seul] que", en: "You alone", es: "Solamente a Ti" },
        grammaire: {
          fr: "pronom personnel objet, 2e pers. m. sing.",
          en: "personal object pronoun, 2nd pers. m. sing.",
          es: "pronombre personal objeto, 2ª pers. m. sing.",
        },
      },
      {
        texte: "نَعْبُدُ",
        traduction: { fr: "nous adorons", en: "we worship", es: "adoramos" },
        grammaire: {
          fr: "verbe (v.) inaccompli, 1re pers. pluriel",
          en: "verb (v.) imperfect, 1st pers. plural",
          es: "verbo (v.) imperfectivo, 1ª pers. plural",
        },
      },
      {
        texte: "وَإِيَّاكَ",
        traduction: { fr: "et c'est Toi [Seul] dont", en: "and to You alone", es: "y solamente a Ti" },
        grammaire: {
          fr: "conjonction « wa » + pronom personnel objet, 2e pers. m. sing.",
          en: "conjunction « wa » + personal object pronoun, 2nd pers. m. sing.",
          es: "conjunción « wa » + pronombre personal objeto, 2ª pers. m. sing.",
        },
      },
      {
        texte: "نَسْتَعِينُ",
        traduction: { fr: "nous implorons secours", en: "turn for help", es: "pedimos ayuda" },
        grammaire: {
          fr: "verbe (v.) inaccompli, 1re pers. pluriel",
          en: "verb (v.) imperfect, 1st pers. plural",
          es: "verbo (v.) imperfectivo, 1ª pers. plural",
        },
      },
    ],
    traduction: {
      fr: "C'est Toi [Seul] que nous adorons, et c'est Toi [Seul] dont nous implorons secours.",
      en: "You alone we worship, and to You alone turn for help.",
      es: "Solamente a Ti adoramos y solamente a Ti pedimos ayuda.",
    },
  },
  {
    numero: 6,
    mots: [
      {
        texte: "اهْدِنَا",
        traduction: { fr: "Guide-nous", en: "Guide us", es: "Guíanos" },
        grammaire: {
          fr: "verbe (v.) impératif, 2e pers. m. sing. + suffixe « nous »",
          en: "verb (v.) imperative, 2nd pers. m. sing. + suffix “us”",
          es: "verbo (v.) imperativo, 2ª pers. m. sing. + sufijo « nos »",
        },
      },
      {
        texte: "الصِّرَاطَ",
        traduction: { fr: "le chemin", en: "to the path", es: "al camino" },
        grammaire: {
          fr: "nom commun (m.) sing. déf., accusatif",
          en: "common noun (m.) sing. def., accusative",
          es: "nombre común (m.) sing. def., acusativo",
        },
      },
      {
        texte: "الْمُسْتَقِيمَ",
        traduction: { fr: "droit", en: "that is straight", es: "recto" },
        grammaire: {
          fr: "participe actif/adjectif (m.) sing. déf., accusatif",
          en: "active participle/adjective (m.) sing. def., accusative",
          es: "participio activo/adjetivo (m.) sing. def., acusativo",
        },
      },
    ],
    traduction: {
      fr: "Guide-nous dans le droit chemin,",
      en: "Guide us (O Lord) to the path that is straight,",
      es: "Guíanos al camino recto,",
    },
  },
  {
    numero: 7,
    mots: [
      {
        texte: "صِرَاطَ",
        traduction: { fr: "le chemin de", en: "the path of", es: "el camino de" },
        grammaire: {
          fr: "nom commun (m.) sing. (état construit), accusatif",
          en: "common noun (m.) sing. (construct state), accusative",
          es: "nombre común (m.) sing. (estado constructo), acusativo",
        },
      },
      {
        texte: "الَّذِينَ",
        traduction: { fr: "ceux que", en: "those whom", es: "aquellos a quienes" },
        grammaire: {
          fr: "pronom relatif (m.) pluriel",
          en: "relative pronoun (m.) plural",
          es: "pronombre relativo (m.) plural",
        },
      },
      {
        texte: "أَنْعَمْتَ",
        traduction: { fr: "Tu as comblés de faveurs", en: "You have blessed", es: "Tú has agraciado" },
        grammaire: {
          fr: "verbe (v.) accompli, 2e pers. m. sing. + suffixe « tu »",
          en: "verb (v.) perfect, 2nd pers. m. sing. + suffix “you”",
          es: "verbo (v.) perfectivo, 2ª pers. m. sing. + sufijo « tú »",
        },
      },
      {
        texte: "عَلَيْهِمْ",
        traduction: { fr: "envers eux", en: "upon them", es: "sobre ellos" },
        grammaire: {
          fr: "préposition + suffixe pronom, 3e pers. m. pluriel",
          en: "preposition + pronoun suffix, 3rd pers. m. plural",
          es: "preposición + sufijo pronominal, 3ª pers. m. plural",
        },
      },
      {
        texte: "غَيْرِ",
        traduction: { fr: "non pas de", en: "not", es: "no" },
        grammaire: {
          fr: "nom commun (m.) sing. (état construit), génitif",
          en: "common noun (m.) sing. (construct state), genitive",
          es: "nombre común (m.) sing. (estado constructo), genitivo",
        },
      },
      {
        texte: "الْمَغْضُوبِ",
        traduction: {
          fr: "ceux qui ont encouru la colère",
          en: "those who have earned wrath",
          es: "aquellos que han incurrido en la ira",
        },
        grammaire: {
          fr: "participe passif (m.) sing. déf., génitif",
          en: "passive participle (m.) sing. def., genitive",
          es: "participio pasivo (m.) sing. def., genitivo",
        },
      },
      {
        texte: "عَلَيْهِمْ",
        traduction: { fr: "envers eux", en: "upon them", es: "sobre ellos" },
        grammaire: {
          fr: "préposition + suffixe pronom, 3e pers. m. pluriel",
          en: "preposition + pronoun suffix, 3rd pers. m. plural",
          es: "preposición + sufijo pronominal, 3ª pers. m. plural",
        },
      },
      {
        texte: "وَلَا",
        traduction: { fr: "ni", en: "nor", es: "ni" },
        grammaire: {
          fr: "conjonction « wa » + négation",
          en: "conjunction « wa » + negation",
          es: "conjunción « wa » + negación",
        },
      },
      {
        texte: "الضَّالِّينَ",
        traduction: { fr: "des égarés", en: "those who have gone astray", es: "los extraviados" },
        grammaire: {
          fr: "participe actif (m.) pluriel déf., génitif",
          en: "active participle (m.) plural def., genitive",
          es: "participio activo (m.) plural def., genitivo",
        },
      },
    ],
    traduction: {
      fr: "le chemin de ceux que Tu as comblés de faveurs, non pas de ceux qui ont encouru Ta colère, ni des égarés.",
      en: "The path of those You have blessed, Not of those who have earned Your anger, nor those who have gone astray.",
      es: "el camino de aquellos a los que Tú has agraciado; no el de aquellos con los que Tú estás disgustado, ni el de los extraviados.",
    },
  },
];
