import type { Langue } from "@/conf/types";

type Libelles = {
  sommaire: string;
  changerLangue: string;
  modeClair: string;
  modeSombre: string;
  translitteration: string;
  souratePrecedente: string;
  sourateSuivante: string;
  lecture: string;
  pause: string;
  arret: string;
  ecouterVerset: string;
  aPropos: string;
  sourcesTitre: string;
  recitateur: string;
};

export const LIBELLES: Record<Langue, Libelles> = {
  fr: {
    sommaire: "Sommaire",
    changerLangue: "Langue",
    modeClair: "Mode clair",
    modeSombre: "Mode sombre",
    translitteration: "Translittération",
    souratePrecedente: "Sourate précédente",
    sourateSuivante: "Sourate suivante",
    lecture: "Écouter la récitation",
    pause: "Mettre en pause",
    arret: "Arrêter",
    ecouterVerset: "Écouter ce verset",
    aPropos: "À propos",
    sourcesTitre: "Sources & remerciements",
    recitateur: "Récitateur",
  },
  en: {
    sommaire: "Contents",
    changerLangue: "Language",
    modeClair: "Light mode",
    modeSombre: "Dark mode",
    translitteration: "Transliteration",
    souratePrecedente: "Previous surah",
    sourateSuivante: "Next surah",
    lecture: "Listen to the recitation",
    pause: "Pause",
    arret: "Stop",
    ecouterVerset: "Listen to this verse",
    aPropos: "About",
    sourcesTitre: "Sources & credits",
    recitateur: "Reciter",
  },
  es: {
    sommaire: "Índice",
    changerLangue: "Idioma",
    modeClair: "Modo claro",
    modeSombre: "Modo oscuro",
    translitteration: "Transliteración",
    souratePrecedente: "Sura anterior",
    sourateSuivante: "Sura siguiente",
    lecture: "Escuchar la recitación",
    pause: "Pausar",
    arret: "Detener",
    ecouterVerset: "Escuchar este versículo",
    aPropos: "Acerca de",
    sourcesTitre: "Fuentes y agradecimientos",
    recitateur: "Recitador",
  },
};
