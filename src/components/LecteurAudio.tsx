"use client";

import { useEffect, useRef } from "react";
import { useLectureAudio } from "@/components/LectureAudioProvider";
import { LIBELLES } from "@/conf/libelles";
import type { Langue, Verset } from "@/conf/types";

// Éléments qui gèrent déjà l'espace nativement (champ de saisie...) : on ne leur vole pas la touche.
const BALISES_INTERACTIVES = new Set(["INPUT", "TEXTAREA", "SELECT"]);

// Empêche le focus après un clic souris, sinon un espace ultérieur réactive nativement ce bouton précis au lieu de basculer la lecture (Tab n'est pas concerné).
function empecherFocus(e: React.MouseEvent) {
  e.preventDefault();
}

// Boutons play/pause/stop : simple vue sur l'état partagé porté par LectureAudioProvider.
export default function LecteurAudio({
  dossier,
  versets,
  langue,
}: {
  dossier: string;
  versets: Verset[];
  langue: Langue;
}) {
  const { dossier: dossierActif, etat, basculerLecture, arreter } = useLectureAudio();
  const libelles = LIBELLES[langue];
  const actif = dossierActif === dossier;
  const enLecture = actif && etat === "lecture";

  function basculer() {
    basculerLecture(dossier, versets);
  }

  // Lu via une ref pour n'attacher l'écouteur qu'une seule fois malgré le changement de référence de `basculer` à chaque rendu.
  const basculerRef = useRef(basculer);
  useEffect(() => {
    basculerRef.current = basculer;
  });

  // Espace = play/pause, sauf si le focus est sur un champ de saisie.
  useEffect(() => {
    function surTouche(e: KeyboardEvent) {
      if (e.code !== "Space" || e.repeat) return;
      const cible = e.target as HTMLElement | null;
      if (cible && BALISES_INTERACTIVES.has(cible.tagName)) return;
      e.preventDefault();
      basculerRef.current();
    }
    window.addEventListener("keydown", surTouche);
    return () => window.removeEventListener("keydown", surTouche);
  }, []);

  return (
    <>
      <button
        type="button"
        className="barre-navigation__bouton"
        title={enLecture ? libelles.pause : libelles.lecture}
        aria-label={enLecture ? libelles.pause : libelles.lecture}
        onMouseDown={empecherFocus}
        onClick={basculer}
      >
        <i className={`bi ${enLecture ? "bi-pause-fill" : "bi-play-fill"}`} aria-hidden="true" />
      </button>
      <button
        type="button"
        className="barre-navigation__bouton"
        title={libelles.arret}
        aria-label={libelles.arret}
        onMouseDown={empecherFocus}
        onClick={arreter}
        disabled={!actif || etat === "arret"}
        // Faux positif d'hydratation connu avec certaines extensions navigateur (ex. Antidote) : l'expression ci-dessus ne peut jamais produire `null`.
        suppressHydrationWarning
      >
        <i className="bi bi-stop-fill" aria-hidden="true" />
      </button>
    </>
  );
}
