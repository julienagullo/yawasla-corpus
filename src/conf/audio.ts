import type { Recitateur } from "@/conf/types";

// Dossier "assets/audio/<recitateur>/<id>-<slug>", un mp3 par verset.
// Un tableau par récitateur : chacun avance à son rythme (sourates découpées indépendamment).
const DOSSIERS_AVEC_AUDIO: Record<Recitateur, Set<string>> = {
  "al-hussary": new Set([
    "001-al-fatiha",
    "114-an-nas",
    "113-al-falaq",
    "112-al-ikhlas",
    "111-al-masad",
    "110-an-nasr",
  ]),
  "al-houdaifi": new Set(["001-al-fatiha", "114-an-nas"]),
};

// Ordre d'affichage dans le sélecteur.
export const TOUS_RECITATEURS: Recitateur[] = ["al-hussary", "al-houdaifi"];

// Récitateur choisi tant que le visiteur n'a rien sélectionné (voir RecitateurProvider).
export const RECITATEUR_DEFAUT: Recitateur = "al-hussary";

export function aAudio(recitateur: Recitateur, dossier: string): boolean {
  return DOSSIERS_AVEC_AUDIO[recitateur].has(dossier);
}

export function urlAudioVerset(recitateur: Recitateur, dossier: string, numero: number): string {
  return `/assets/audio/${recitateur}/${dossier}/${String(numero).padStart(2, "0")}.mp3`;
}

// "01:02.5" -> 62.5 (secondes).
export function parseMinutage(mmss: string): number {
  const [minutes, secondes] = mmss.split(":");
  return Number(minutes) * 60 + Number(secondes);
}
