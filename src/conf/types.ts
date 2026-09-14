export type Langue = "fr" | "en" | "es";

export type Mot = {
  texte: string;
  transliteration: string;
  traduction: Record<Langue, string>;
  grammaire: Record<Langue, string>;
};

export type Verset = {
  numero: number;
  mots: Mot[];
  traduction: Record<Langue, string>;
  // Départ ("mm:ss") de chaque mot dans le clip audio du verset (Al-Hussary),
  // un par mot dans `mots`, calé à l'oreille. Absent tant que la sourate n'a
  // pas d'audio découpé.
  audio?: string[];
};

export type NomSourate = {
  arabe: string;
  transliteration: string;
  sens?: Record<Langue, string>;
};
