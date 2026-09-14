"use client";

import { useLectureAudio } from "@/components/LectureAudioProvider";
import { aAudio } from "@/conf/audio";
import { LIBELLES } from "@/conf/libelles";
import type { Langue, Verset } from "@/conf/types";

// "(n)" à côté du verset : simple texte si pas d'audio pour cette sourate,
// bouton cliquable (démarre/saute la lecture à ce verset) sinon. Rien pour
// le verset 0 (Bismillah) : les savants ne la comptent pas comme un verset,
// donc pas de numéro affiché (elle reste lue/surlignée normalement).
export default function NumeroVerset({
  numero,
  dossier,
  versets,
  langue,
}: {
  numero: number;
  dossier?: string;
  versets: Verset[];
  langue: Langue;
}) {
  const { jouer } = useLectureAudio();

  if (numero === 0) return null;

  if (!dossier || !aAudio(dossier)) {
    return <span className="mx-1 fs-6 text-muted">({numero})</span>;
  }

  return (
    <button
      type="button"
      className="numero-verset mx-1 fs-6 text-muted"
      title={LIBELLES[langue].ecouterVerset}
      aria-label={LIBELLES[langue].ecouterVerset}
      // Pas de focus au clic souris : sinon un espace ultérieur (play/pause)
      // réactive nativement CE bouton et relance ce verset au lieu de
      // basculer la lecture. Le focus clavier (Tab) n'est pas concerné.
      onMouseDown={(e) => e.preventDefault()}
      onClick={() => jouer(dossier, versets, numero)}
    >
      <span className="numero-verset__numero">({numero})</span>
      <i className="bi bi-play-fill numero-verset__icone" aria-hidden="true" />
    </button>
  );
}
