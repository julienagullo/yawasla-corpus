import type { Langue, Recitateur } from "@/conf/types";

export const NOMS_RECITATEURS: Record<Recitateur, Record<Langue, string>> = {
  "al-hussary": {
    fr: "Cheikh Mahmoud Khalil Al-Hussary",
    en: "Sheikh Mahmoud Khalil Al-Hussary",
    es: "Jeque Mahmoud Khalil Al-Hussary",
    ar: "الشيخ محمود خليل الحصري",
  },
  "al-houdaifi": {
    fr: "Cheikh Ali Al-Houdaifi",
    en: "Sheikh Ali Al-Houdaifi",
    es: "Jeque Ali Al-Houdaifi",
    ar: "الشيخ علي الحذيفي",
  },
};

export const GITHUB_URL = "https://github.com/julienagullo/yawasla-corpus";

export type Source = {
  nom: string;
  url: string;
  description: Record<Langue, string>;
};

export const SOURCES: Source[] = [
  {
    nom: "Tanzil Project",
    url: "https://tanzil.net",
    description: {
      fr: "Texte arabe du Coran et traductions officielles (Hamidullah, Ahmed Ali, Bornez)",
      en: "Quranic Arabic text and official translations (Hamidullah, Ahmed Ali, Bornez)",
      es: "Texto árabe del Corán y traducciones oficiales (Hamidullah, Ahmed Ali, Bornez)",
      ar: "النص العربي للقرآن والترجمات الرسمية (حميد الله، أحمد علي، بورنيز)",
    },
  },
  {
    nom: "Quranic Arabic Corpus",
    url: "https://corpus.quran.com",
    description: {
      fr: "Analyse grammaticale mot-à-mot (Kais Dukes)",
      en: "Word-by-word grammatical analysis (Kais Dukes)",
      es: "Análisis gramatical palabra por palabra (Kais Dukes)",
      ar: "التحليل النحوي والصرفي كلمة بكلمة (كايس ديوكس)",
    },
  },
];
