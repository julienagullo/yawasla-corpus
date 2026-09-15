"use client";

import { useInfobulle } from "@/components/Infobulle";
import { useLectureAudio } from "@/components/LectureAudioProvider";
import { aAudio } from "@/conf/audio";
import { LIBELLES } from "@/conf/libelles";
import type { Langue, Verset } from "@/conf/types";

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
  const { versetActif, visible } = useInfobulle();

  if (numero === 0) return null;

  if (!dossier || !aAudio(dossier)) {
    return <span className="mx-1 fs-6 text-muted">({numero})</span>;
  }

  const actif = visible && versetActif === numero;

  return (
    <button
      type="button"
      className={`numero-verset mx-1 fs-6 text-muted ${actif ? "numero-verset--actif" : ""}`}
      title={LIBELLES[langue].ecouterVerset}
      aria-label={LIBELLES[langue].ecouterVerset}
      onMouseDown={(e) => e.preventDefault()}
      onClick={() => jouer(dossier, versets, numero)}
    >
      <span className="numero-verset__numero">({numero})</span>
      <i className="bi bi-play-fill numero-verset__icone" aria-hidden="true" />
    </button>
  );
}
