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
  bientotDisponible: string;
  codeSource: string;
  licenceCode: string;
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
    bientotDisponible: "bientôt disponible",
    codeSource: "Code source",
    licenceCode: "Licence MIT",
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
    bientotDisponible: "coming soon",
    codeSource: "Source code",
    licenceCode: "MIT license",
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
    bientotDisponible: "próximamente",
    codeSource: "Código fuente",
    licenceCode: "Licencia MIT",
  },
  ar: {
    sommaire: "الفهرس",
    changerLangue: "اللغة",
    modeClair: "الوضع الفاتح",
    modeSombre: "الوضع الداكن",
    translitteration: "النقحرة",
    souratePrecedente: "السورة السابقة",
    sourateSuivante: "السورة التالية",
    lecture: "الاستماع إلى التلاوة",
    pause: "إيقاف مؤقت",
    arret: "إيقاف",
    ecouterVerset: "الاستماع إلى هذه الآية",
    aPropos: "حول الموقع",
    sourcesTitre: "المصادر والشكر",
    recitateur: "القارئ",
    bientotDisponible: "قريبًا",
    codeSource: "الكود المصدري",
    licenceCode: "رخصة MIT",
  },
};
