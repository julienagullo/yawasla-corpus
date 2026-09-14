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

  function hauteurBarreNavigation(): number {
    const barre = document.querySelector(".barre-navigation");
    return barre ? barre.getBoundingClientRect().height : 0;
  }

  function scrollVersVerset(numero: number) {
    const el = document.getElementById(`verset-${numero}`);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - hauteurBarreNavigation();
    window.scrollTo({ top: y, behavior: "smooth" });
  }

  function descendreSiHorsChamp(numero: number) {
    const el = document.getElementById(`verset-${numero}`);
    if (!el) return;
    const MARGE_DETECTION_PX = 20;
    if (el.getBoundingClientRect().top > window.innerHeight - hauteurBarreNavigation() - MARGE_DETECTION_PX) {
      scrollVersVerset(numero);
    }
  }

  function jouer(nouveauDossier: string, versets: Verset[], depart?: number) {
    if (depart === undefined && etat === "pause" && dossierRef.current === nouveauDossier) {
      audioRef.current?.play();
      setEtat("lecture");
      return;
    }
    dossierRef.current = nouveauDossier;
    versetsRef.current = versets;
    setDossier(nouveauDossier);
    if (depart === undefined && versets[0]) {
      scrollVersVerset(versets[0].numero);
    }
    const index = depart !== undefined ? versets.findIndex((v) => v.numero === depart) : 0;
    chargerEtJouer(index >= 0 ? index : 0);
    setEtat("lecture");
  }

  function mettreEnPause() {
    audioRef.current?.pause();
    setEtat("pause");
  }

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
