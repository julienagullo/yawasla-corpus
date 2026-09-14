"use client";

import { createContext, useContext, useRef, useState, type ReactNode } from "react";
import type { Verset } from "@/conf/types";
import { urlAudioVerset, parseMinutage } from "@/conf/audio";

type Etat = "arret" | "lecture" | "pause";

type MotActif = { dossier: string; verset: number; mot: number };

type LectureAudioContexte = {
  dossier: string | null;
  etat: Etat;
  motActif: MotActif | null;
  jouer: (dossier: string, versets: Verset[], depart?: number) => void;
  basculerLecture: (dossier: string, versets: Verset[]) => void;
  arreter: () => void;
};

const LectureAudioContext = createContext<LectureAudioContexte | null>(null);

// <audio> unique, monté ici (racine du layout) pour rester accessible à la
// fois aux boutons play/pause/stop (BarreNavigation, hors de la page) et au
// surlignage du mot en cours (Mot.tsx, dans la page) : deux branches
// distinctes de l'arbre React qui ne peuvent pas se passer l'état autrement
// que par un contexte commun monté au-dessus des deux.
export function LectureAudioProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const versetsRef = useRef<Verset[]>([]);
  const dossierRef = useRef<string | null>(null);
  const versetIndexRef = useRef(0);
  const motActifRef = useRef<MotActif | null>(null);

  const [dossier, setDossier] = useState<string | null>(null);
  const [etat, setEtat] = useState<Etat>("arret");
  const [motActif, setMotActif] = useState<MotActif | null>(null);

  function chargerEtJouer(index: number) {
    const audio = audioRef.current;
    const d = dossierRef.current;
    const verset = versetsRef.current[index];
    if (!audio || !d || !verset) return;
    versetIndexRef.current = index;
    audio.src = urlAudioVerset(d, verset.numero);
    audio.play();
    descendreSiHorsChamp(verset.numero);
  }

  // Fait défiler vers le bas uniquement si le verset qui démarre est sous la
  // zone visible (jamais vers le haut : ça ne doit pas gêner une lecture du
  // texte scrollée manuellement pendant l'écoute). Tient compte de la barre
  // de navigation fixe en bas, qui cache le bas réel de l'écran.
  function descendreSiHorsChamp(numero: number) {
    const el = document.getElementById(`verset-${numero}`);
    if (!el) return;
    const barre = document.querySelector(".barre-navigation");
    const margeBasse = barre ? barre.getBoundingClientRect().height : 0;
    if (el.getBoundingClientRect().top > window.innerHeight - margeBasse) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  // `depart` (numéro de verset) absent : reprend en pause si déjà chargé,
  // sinon repart du début. Présent (clic sur "(n)") : saute à ce verset,
  // même en cours de lecture ou en pause ailleurs.
  function jouer(nouveauDossier: string, versets: Verset[], depart?: number) {
    if (depart === undefined && etat === "pause" && dossierRef.current === nouveauDossier) {
      audioRef.current?.play();
      setEtat("lecture");
      return;
    }
    dossierRef.current = nouveauDossier;
    versetsRef.current = versets;
    setDossier(nouveauDossier);
    // Départ du tout début (bouton lecture après arrêt, pas un clic sur un
    // verset précis) : on remonte au premier verset (0 = Bismillah si
    // présente, sinon 1) — pas à `top: 0` qui s'arrêterait sur le titre de
    // la sourate, au-dessus, avec le premier verset encore hors champ.
    if (depart === undefined) {
      document.getElementById(`verset-${versets[0]?.numero}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    const index = depart !== undefined ? versets.findIndex((v) => v.numero === depart) : 0;
    chargerEtJouer(index >= 0 ? index : 0);
    setEtat("lecture");
  }

  function mettreEnPause() {
    audioRef.current?.pause();
    setEtat("pause");
  }

  // Point d'entrée unique du bouton play/pause et du raccourci espace :
  // décide lui-même pause/reprise/départ selon l'état courant du Provider
  // (source unique de vérité), plutôt que de faire confiance à un `enLecture`
  // recalculé côté appelant qui peut se retrouver en retard d'un rendu.
  function basculerLecture(dossierCible: string, versets: Verset[]) {
    if (etat === "lecture" && dossierRef.current === dossierCible) {
      mettreEnPause();
      return;
    }
    jouer(dossierCible, versets);
  }

  function arreter() {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.removeAttribute("src");
      audio.load();
    }
    dossierRef.current = null;
    versetsRef.current = [];
    versetIndexRef.current = 0;
    motActifRef.current = null;
    setDossier(null);
    setEtat("arret");
    setMotActif(null);
  }

  function versetSuivant() {
    const suivant = versetIndexRef.current + 1;
    if (suivant >= versetsRef.current.length) {
      arreter();
      return;
    }
    chargerEtJouer(suivant);
  }

  // Cherche, parmi les débuts de mot du verset en cours, le dernier <= au
  // temps de lecture actuel : c'est le mot en train d'être récité.
  function surTimeUpdate() {
    const audio = audioRef.current;
    const d = dossierRef.current;
    const verset = versetsRef.current[versetIndexRef.current];
    if (!audio || !d || !verset?.audio) return;
    const t = audio.currentTime;
    let index = 0;
    for (let i = 0; i < verset.audio.length; i++) {
      if (parseMinutage(verset.audio[i]) <= t) index = i;
    }
    const actuel = motActifRef.current;
    if (actuel?.dossier === d && actuel.verset === verset.numero && actuel.mot === index) return;
    const nouveau = { dossier: d, verset: verset.numero, mot: index };
    motActifRef.current = nouveau;
    setMotActif(nouveau);
  }

  return (
    <LectureAudioContext.Provider value={{ dossier, etat, motActif, jouer, basculerLecture, arreter }}>
      <audio ref={audioRef} onEnded={versetSuivant} onTimeUpdate={surTimeUpdate} />
      {children}
    </LectureAudioContext.Provider>
  );
}

export function useLectureAudio(): LectureAudioContexte {
  const contexte = useContext(LectureAudioContext);
  if (!contexte) throw new Error("useLectureAudio doit être utilisé dans un LectureAudioProvider");
  return contexte;
}
