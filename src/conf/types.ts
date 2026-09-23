export type Langue = "fr" | "en" | "es" | "ar";

// Langues qui traduisent le texte arabe (fr/en/es) : l'arabe n'a rien à se traduire lui-même, donc pas de clé "ar" pour ces champs.
export type LangueTraduction = Exclude<Langue, "ar">;

export type Recitateur = "al-hussary" | "al-houdaifi";

export type Mot = {
  texte: string;
  transliteration: string;
  traduction: Record<LangueTraduction, string>;
  // Analyse grammaticale, y compris en arabe (interface arabe : pas de traduction affichée, seule la grammaire a du sens).
  grammaire: Record<Langue, string>;
  // Clé de style mappée à une classe CSS "mot--<couleur>" dans globals.css (ex. "or" pour Allah) ; omis ou vide = style par défaut.
  couleur?: string;
};

export type Verset = {
  numero: number;
  mots: Mot[];
  traduction: Record<LangueTraduction, string>;
  // Départ ("mm:ss") de chaque mot dans le clip audio du verset, calé à l'oreille, par récitateur (tempo différent d'un récitateur à l'autre) ; clé absente tant que ce récitateur n'a pas d'audio pour ce verset.
  audio?: Partial<Record<Recitateur, string[]>>;
};

export type NomSourate = {
  arabe: string;
  transliteration: string;
  sens?: Record<LangueTraduction, string>;
};
