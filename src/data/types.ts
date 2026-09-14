export type Langue = "fr" | "en" | "es";

export type Mot = {
  texte: string;
  // Translittération phonétique (identique quelle que soit la langue
  // d'affichage — ce n'est pas une traduction, juste une lecture).
  transliteration: string;
  traduction: Record<Langue, string>;
  grammaire: Record<Langue, string>;
};

export type Verset = {
  numero: number;
  mots: Mot[];
  // Traduction officielle du verset, dans les 3 langues.
  traduction: Record<Langue, string>;
};

export type NomSourate = {
  arabe: string;
  transliteration: string;
  sens?: Record<Langue, string>;
};
