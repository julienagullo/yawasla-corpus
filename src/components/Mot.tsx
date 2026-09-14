"use client";

import { useRef } from "react";
import type { Mot as MotType } from "@/conf/types";
import { useInfobulle } from "@/components/Infobulle";
import { useLectureAudio } from "@/components/LectureAudioProvider";

// Click en plus du hover : mobile first, pas de vrai survol au doigt.
// `dossier`/`verset`/`index` optionnels : uniquement pour comparer au mot en
// cours de récitation (absents tant que la sourate n'a pas d'audio).
export default function Mot({
  mot,
  dossier,
  verset,
  index,
}: {
  mot: MotType;
  dossier?: string;
  verset?: number;
  index?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const { motActif, visible, afficher, programmerFermeture } = useInfobulle();
  const { motActif: motEnLecture } = useLectureAudio();

  function ouvrir() {
    if (ref.current) afficher(mot, ref.current);
  }

  const actif = motActif === mot && visible;
  const enLecture =
    dossier !== undefined &&
    verset !== undefined &&
    index !== undefined &&
    motEnLecture?.dossier === dossier &&
    motEnLecture.verset === verset &&
    motEnLecture.mot === index;

  return (
    <span
      ref={ref}
      className={`mot mx-1 ${actif ? "mot--actif" : ""} ${enLecture ? "mot--recitation" : ""}`}
      onMouseEnter={ouvrir}
      onMouseLeave={programmerFermeture}
      onClick={ouvrir}
    >
      {mot.texte}
    </span>
  );
}
