"use client";

import { useRef } from "react";
import type { Mot as MotType } from "@/data/types";
import { useInfobulle } from "@/components/Infobulle";

// Click en plus du hover : mobile first, pas de vrai survol au doigt.
export default function Mot({ mot }: { mot: MotType }) {
  const ref = useRef<HTMLSpanElement>(null);
  const { motActif, visible, afficher, programmerFermeture } = useInfobulle();

  function ouvrir() {
    if (ref.current) afficher(mot, ref.current);
  }

  const actif = motActif === mot && visible;

  return (
    <span
      ref={ref}
      className={`mot mx-1 ${actif ? "mot--actif" : ""}`}
      onMouseEnter={ouvrir}
      onMouseLeave={programmerFermeture}
      onClick={ouvrir}
    >
      {mot.texte}
    </span>
  );
}
