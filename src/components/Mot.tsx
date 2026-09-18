"use client";

import { useEffect, useRef } from "react";
import type { Mot as MotType } from "@/conf/types";
import { useInfobulle } from "@/components/Infobulle";
import { useLectureAudio } from "@/components/LectureAudioProvider";

// Click en plus du hover (mobile first) ; dossier/verset/index optionnels, utilisés seulement pour comparer au mot en cours de récitation.
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
  const { motActif, visible, afficher, programmerFermeture, enregistrerMot, desenregistrerMot } = useInfobulle();
  const { motActif: motEnLecture } = useLectureAudio();

  // Permet à Infobulle de retrouver ce mot pendant un glissement tactile (voir Infobulle.tsx).
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    enregistrerMot(el, mot, verset);
    return () => desenregistrerMot(el);
  }, [mot, verset, enregistrerMot, desenregistrerMot]);

  function ouvrir() {
    if (ref.current) afficher(mot, ref.current, verset);
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
      className={`mot mx-1 ${actif ? "mot--actif" : ""} ${enLecture ? "mot--recitation" : ""} ${
        mot.couleur && !actif && !enLecture ? `mot--${mot.couleur}` : ""
      }`}
      onMouseEnter={ouvrir}
      onMouseLeave={programmerFermeture}
      onClick={ouvrir}
    >
      {mot.texte}
    </span>
  );
}
