import type { Langue } from "@/conf/types";

// Sources & remerciements affichés dans le popup "i" de la barre de
// navigation (voir MenuInfo.tsx). Reprend les obligations de licence
// décrites dans CLAUDE.md (attribution + lien obligatoires et visibles).
export const RECITATEUR = "Cheikh Mahmoud Khalil Al-Hussary";

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
    },
  },
  {
    nom: "Quranic Arabic Corpus",
    url: "https://corpus.quran.com",
    description: {
      fr: "Analyse grammaticale mot-à-mot (Kais Dukes)",
      en: "Word-by-word grammatical analysis (Kais Dukes)",
      es: "Análisis gramatical palabra por palabra (Kais Dukes)",
    },
  },
];
