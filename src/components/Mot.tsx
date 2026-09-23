"use client";

import { useEffect, useRef } from "react";
import type { Mot as MotType, Verset } from "@/conf/types";
import { useInfobulle } from "@/components/Infobulle";
import { useLectureAudio } from "@/components/LectureAudioProvider";
import { useRecitateur } from "@/components/RecitateurProvider";
import { aAudio, parseMinutage } from "@/conf/audio";

// Click en plus du hover (mobile first) ; dossier/verset/index/versets optionnels, utilisés pour le mot en cours de récitation et la lecture au double-clic.
export default function Mot({
  mot,
  dossier,
  verset,
  index,
  versets,
}: {
  mot: MotType;
  dossier?: string;
  verset?: number;
  index?: number;
  versets?: Verset[];
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const { motActif, visible, afficher, programmerFermeture, enregistrerMot, desenregistrerMot } = useInfobulle();
  const { motActif: motEnLecture, jouer } = useLectureAudio();
  const { recitateur } = useRecitateur();

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

  // Double-clic : récitation depuis ce mot (début du verset si le mot n'a pas de minutage pour ce récitateur).
  function jouerDepuisMot() {
    if (dossier === undefined || verset === undefined || index === undefined || !versets) return;
    if (!aAudio(recitateur, dossier)) return;
    const minutage = versets.find((v) => v.numero === verset)?.audio?.[recitateur]?.[index];
    jouer(recitateur, dossier, versets, verset, minutage ? parseMinutage(minutage) : 0);
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
      onMouseDown={(e) => e.detail > 1 && e.preventDefault()}
      onDoubleClick={jouerDepuisMot}
    >
      {mot.texte}
    </span>
  );
}
