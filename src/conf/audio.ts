import type { Recitateur, Verset } from "@/conf/types";

export const TOUS_RECITATEURS: Recitateur[] = ["al-hussary", "al-houdaifi"];

export const RECITATEUR_DEFAUT: Recitateur = "al-hussary";

// Un récitateur est disponible pour une sourate dès que ses versets ont des minutages pour lui.
export function aAudio(recitateur: Recitateur, versets: Verset[]): boolean {
  return versets.some((v) => v.audio?.[recitateur]);
}

export function urlAudioVerset(recitateur: Recitateur, dossier: string, numero: number): string {
  return `/assets/audio/${recitateur}/${dossier}/${String(numero).padStart(2, "0")}.mp3`;
}

// "01:02.5" -> 62.5 (secondes).
export function parseMinutage(mmss: string): number {
  const [minutes, secondes] = mmss.split(":");
  return Number(minutes) * 60 + Number(secondes);
}
