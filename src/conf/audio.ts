// Un seul récitateur (Al-Hussary) ; dossier "assets/audio/<id>-<slug>", un mp3 par verset.
const DOSSIERS_AVEC_AUDIO = new Set([
  "001-al-fatiha",
  "114-an-nas",
  "113-al-falaq",
  "112-al-ikhlas",
  "111-al-masad",
  "110-an-nasr",
]);

export function aAudio(dossier: string): boolean {
  return DOSSIERS_AVEC_AUDIO.has(dossier);
}

export function urlAudioVerset(dossier: string, numero: number): string {
  return `/assets/audio/${dossier}/${String(numero).padStart(2, "0")}.mp3`;
}

// "01:02.5" -> 62.5 (secondes).
export function parseMinutage(mmss: string): number {
  const [minutes, secondes] = mmss.split(":");
  return Number(minutes) * 60 + Number(secondes);
}
