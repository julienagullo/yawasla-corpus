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
        texte: "تَبَّتْ",
        transliteration: "Tabbat",
        traduction: { fr: "Que périssent", en: "Destroyed will be", es: "Que perezcan" },
        grammaire: {
          fr: "verbe (v.) accompli, 3e pers. f. sing. (accord avec le duel féminin « les deux mains »), valeur de malédiction",
          en: "verb (v.) perfect, 3rd pers. f. sing. (agreeing with the feminine dual “the two hands”), value of a curse",
          es: "verbo (v.) perfectivo, 3ª pers. f. sing. (concuerda con el dual femenino « las dos manos »), valor de maldición",
        },
      },
      {
        texte: "يَدَا",
        transliteration: "Yada",
        traduction: { fr: "les deux mains", en: "the hands", es: "las manos" },
        grammaire: {
          fr: "nom commun (f.) duel (état construit), nominatif",
          en: "common noun (f.) dual (construct state), nominative",
          es: "nombre común (f.) dual (estado constructo), nominativo",
        },
      },
      {
        texte: "أَبِي",
        transliteration: "Abi",
        traduction: { fr: "d'Abu", en: "of Abu", es: "de Abu" },
        grammaire: {
          fr: "nom commun (m.) sing. (état construit), génitif",
          en: "common noun (m.) sing. (construct state), genitive",
          es: "nombre común (m.) sing. (estado constructo), genitivo",
        },
      },
      {
        texte: "لَهَبٍ",
        transliteration: "Lahabin",
        traduction: { fr: "Lahab", en: "Lahab", es: "Lahab" },
        grammaire: {
          fr: "nom propre (m.) sing. indéf., génitif (litt. « la flamme », surnom)",
          en: "proper noun (m.) sing. indef., genitive (lit. “the flame”, nickname)",
          es: "nombre propio (m.) sing. indef., genitivo (lit. « la llama », apodo)",
        },
      },
      {
        texte: "وَتَبَّ",
        transliteration: "Wa tabba",
        traduction: { fr: "et que lui-même périsse", en: "and he himself will perish", es: "y que perezca él" },
        grammaire: {
          fr: "conjonction « wa » + verbe (v.) accompli, 3e pers. m. sing.",
          en: "conjunction « wa » + verb (v.) perfect, 3rd pers. m. sing.",
          es: "conjunción « wa » + verbo (v.) perfectivo, 3ª pers. m. sing.",
        },
      },
    ],
    traduction: {
      fr: "Que périssent les deux mains d'Abû-Lahab et que lui-même périsse.",
      en: "DESTROYED WILL BE the hands of Abu Lahab, and he himself will perish.",
      es: "Que perezcan las manos de Abu Lahab y que perezca él.",
    },
    audio: ["00:00.0", "00:01.2", "00:02.9", "00:04.1", "00:05.6"],
  },
  {
    numero: 2,
    mots: [
      {
        texte: "مَا",
        transliteration: "Ma",
        traduction: { fr: "ne...pas", en: "of no avail", es: "no" },
        grammaire: { fr: "particule de négation", en: "negative particle", es: "partícula de negación" },
      },
      {
        texte: "أَغْنَىٰ",
        transliteration: "Aghna",
        traduction: { fr: "n'a servi", en: "shall be", es: "servirá" },
        grammaire: {
          fr: "verbe (v.) accompli, 3e pers. m. sing.",
          en: "verb (v.) perfect, 3rd pers. m. sing.",
          es: "verbo (v.) perfectivo, 3ª pers. m. sing.",
        },
      },
      {
        texte: "عَنْهُ",
        transliteration: "Anhu",
        traduction: { fr: "à lui", en: "to him", es: "le" },
        grammaire: {
          fr: "préposition « ‘an » + pronom suffixe, 3e pers. m. sing.",
          en: "preposition « ‘an » + suffix pronoun, 3rd pers. m. sing.",
          es: "preposición « ‘an » + sufijo pronominal, 3ª pers. m. sing.",
        },
      },
      {
        texte: "مَالُهُ",
        transliteration: "Maluhu",
        traduction: { fr: "sa fortune", en: "his wealth", es: "su riqueza" },
        grammaire: {
          fr: "nom commun (m.) sing. + pronom suffixe, 3e pers. m. sing., nominatif",
          en: "common noun (m.) sing. + suffix pronoun, 3rd pers. m. sing., nominative",
          es: "nombre común (m.) sing. + sufijo pronominal, 3ª pers. m. sing., nominativo",
        },
      },
      {
        texte: "وَمَا",
        transliteration: "Wa ma",
        traduction: { fr: "ni ce qu'", en: "nor what", es: "ni lo que" },
        grammaire: {
          fr: "conjonction « wa » + pronom relatif",
          en: "conjunction « wa » + relative pronoun",
          es: "conjunción « wa » + pronombre relativo",
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
        },
      },
    ],
    traduction: {
      fr: "Sa fortune ne lui sert à rien, ni ce qu'il a acquis.",
      en: "Of no avail shall be his wealth, nor what he has acquired.",
      es: "No le servirá de nada su riqueza ni todo lo que obtuvo.",
    },
    audio: ["00:00.0", "00:01.6", "00:03.2", "00:04.3", "00:06.4", "00:07.6"],
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
        },
      },
      {
        texte: "نَارًا",
        transliteration: "Naran",
        traduction: { fr: "dans un Feu", en: "in the fire", es: "en un Fuego" },
        grammaire: {
          fr: "nom commun (f.) sing. indéf., accusatif",
          en: "common noun (f.) sing. indef., accusative",
          es: "nombre común (f.) sing. indef., acusativo",
        },
      },
      {
        texte: "ذَاتَ",
        transliteration: "Dhata",
        traduction: { fr: "plein de", en: "full of", es: "pleno de" },
        grammaire: {
          fr: "nom commun (f.) sing. (état construit), accusatif (litt. « possédant, pourvue de »)",
          en: "common noun (f.) sing. (construct state), accusative (lit. “possessing”)",
          es: "nombre común (f.) sing. (estado constructo), acusativo (lit. « que posee »)",
        },
      },
      {
        texte: "لَهَبٍ",
        transliteration: "Lahabin",
        traduction: { fr: "flammes", en: "flame", es: "llamas" },
        grammaire: {
          fr: "nom commun (m.) sing. indéf., génitif",
          en: "common noun (m.) sing. indef., genitive",
          es: "nombre común (m.) sing. indef., genitivo",
        },
      },
    ],
    traduction: {
      fr: "Il sera brûlé dans un Feu plein de flammes,",
      en: "He will be roasted in the fire,",
      es: "Entrará en un Fuego llameante",
    },
    audio: ["00:00.0", "00:01.8", "00:03.4", "00:04.5"],
  },
  {
    numero: 4,
    mots: [
      {
        texte: "وَامْرَأَتُهُ",
        transliteration: "Wa imra'atuhu",
        traduction: { fr: "et sa femme", en: "And his wife", es: "y también su mujer" },
        grammaire: {
          fr: "conjonction « wa » + nom commun (f.) sing. + pronom suffixe, 3e pers. m. sing., nominatif",
          en: "conjunction « wa » + common noun (f.) sing. + suffix pronoun, 3rd pers. m. sing., nominative",
          es: "conjunción « wa » + nombre común (f.) sing. + sufijo pronominal, 3ª pers. m. sing., nominativo",
        },
      },
      {
        texte: "حَمَّالَةَ",
        transliteration: "Hammalata",
        traduction: { fr: "la porteuse", en: "the portress", es: "la portadora" },
        grammaire: {
          fr: "participe actif (f.) sing., accusatif (forme intensive, litt. « grande porteuse »)",
          en: "active participle (f.) sing., accusative (intensive form, lit. “great carrier”)",
          es: "participio activo (f.) sing., acusativo (forma intensiva, lit. « gran portadora »)",
        },
      },
      {
        texte: "الْحَطَبِ",
        transliteration: "Al-Hatabi",
        traduction: { fr: "de bois", en: "of fire wood", es: "de leña" },
        grammaire: {
          fr: "nom commun (m.) sing. déf., génitif",
          en: "common noun (m.) sing. def., genitive",
          es: "nombre común (m.) sing. def., genitivo",
        },
      },
    ],
    traduction: {
      fr: "de même sa femme, la porteuse de bois,",
      en: "And his wife, the portress of fire wood,",
      es: "y también su mujer, la portadora de leña,",
    },
    audio: ["00:00.0", "00:02.6", "00:05.1"],
  },
  {
    numero: 5,
    mots: [
      {
        texte: "فِي",
        transliteration: "Fi",
        traduction: { fr: "à", en: "around", es: "rodeando" },
        grammaire: { fr: "préposition", en: "preposition", es: "preposición" },
      },
      {
        texte: "جِيدِهَا",
        transliteration: "Jidiha",
        traduction: { fr: "son cou", en: "her neck", es: "su cuello" },
        grammaire: {
          fr: "nom commun (m.) sing. + pronom suffixe, 3e pers. f. sing., génitif",
          en: "common noun (m.) sing. + suffix pronoun, 3rd pers. f. sing., genitive",
          es: "nombre común (m.) sing. + sufijo pronominal, 3ª pers. f. sing., genitivo",
        },
      },
      {
        texte: "حَبْلٌ",
        transliteration: "Hablun",
        traduction: { fr: "une corde", en: "a strap", es: "una cuerda" },
        grammaire: {
          fr: "nom commun (m.) sing. indéf., nominatif",
          en: "common noun (m.) sing. indef., nominative",
          es: "nombre común (m.) sing. indef., nominativo",
        },
      },
      {
        texte: "مِّن",
        transliteration: "Min",
        traduction: { fr: "de", en: "of", es: "de" },
        grammaire: { fr: "préposition", en: "preposition", es: "preposición" },
      },
      {
        texte: "مَّسَدٍ",
        transliteration: "Masadin",
        traduction: { fr: "fibres", en: "fibre", es: "esparto" },
        grammaire: {
          fr: "nom commun (m.) sing. indéf., génitif (litt. « fibres de palmier tressées »)",
          en: "common noun (m.) sing. indef., genitive (lit. “twisted palm fibre”)",
          es: "nombre común (m.) sing. indef., genitivo (lit. « fibra de palmera trenzada »)",
        },
      },
    ],
    traduction: {
      fr: "à son cou, une corde de fibres.",
      en: "Will have a strap of fibre rope around her neck.",
      es: "con una cuerda de esparto rodeando su cuello.",
    },
    audio: ["00:00.0", "00:00.6", "00:02.6", "00:04.4", "00:05.6"],
  },
];
