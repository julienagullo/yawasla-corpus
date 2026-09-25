export type Langue = "fr" | "en" | "es" | "ar";

// Langues qui traduisent le texte arabe (fr/en/es) : l'arabe n'a rien à se traduire lui-même, donc pas de clé "ar" pour ces champs.
export type LangueTraduction = Exclude<Langue, "ar">;

export type Recitateur = "al-hussary" | "al-houdaifi";

export type Mot = {
  texte: string;
  transliteration: string;
  traduction: Record<LangueTraduction, string>;
  grammaire: Record<Langue, string>;
  // Généré par scripts/grammaire.mjs ; absent pour les mots sans racine (particules, pronoms...).
  racine?: { arabe: string; transliteration: string };
  couleur?: string;
};

export type Verset = {
  numero: number;
  mots: Mot[];
  traduction: Record<LangueTraduction, string>;
  // Départ ("mm:ss") de chaque mot dans le clip audio du verset ; clé absente tant que ce récitateur n'a pas d'audio pour ce verset.
  audio?: Partial<Record<Recitateur, string[]>>;
};

export type NomSourate = {
  arabe: string;
  transliteration: string;
  sens?: Record<LangueTraduction, string>;
};
