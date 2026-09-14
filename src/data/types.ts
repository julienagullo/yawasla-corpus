export type Langue = "fr" | "en" | "es";

export type Mot = {
  texte: string;
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
