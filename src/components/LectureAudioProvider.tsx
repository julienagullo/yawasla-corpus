"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import type { Recitateur, Verset } from "@/conf/types";
import { urlAudioVerset, parseMinutage } from "@/conf/audio";

type Etat = "arret" | "lecture" | "pause";

type MotActif = { dossier: string; verset: number; mot: number };

type LectureAudioContexte = {
  recitateur: Recitateur | null;
  dossier: string | null;
  etat: Etat;
  motActif: MotActif | null;
  // `debut` : position de départ (secondes) dans le clip du verset `depart` (double-clic sur un mot).
  jouer: (recitateur: Recitateur, dossier: string, versets: Verset[], depart?: number, debut?: number) => void;
  basculerLecture: (recitateur: Recitateur, dossier: string, versets: Verset[]) => void;
  arreter: () => void;
  // Appelé par Infobulle à chaque changement de visibilité, pour ne pas faire défiler la page tant qu'une infobulle est ouverte.
  signalerInfobulleVisible: (visible: boolean) => void;
};

const LectureAudioContext = createContext<LectureAudioContexte | null>(null);

export function LectureAudioProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const versetsRef = useRef<Verset[]>([]);
  const recitateurRef = useRef<Recitateur | null>(null);
  const dossierRef = useRef<string | null>(null);
  const versetIndexRef = useRef(0);
  const motActifRef = useRef<MotActif | null>(null);
  const infobulleVisibleRef = useRef(false);
  const suiviRef = useRef<number | null>(null);

  const signalerInfobulleVisible = useCallback((visible: boolean) => {
    infobulleVisibleRef.current = visible;
  }, []);

  const [recitateur, setRecitateur] = useState<Recitateur | null>(null);
  const [dossier, setDossier] = useState<string | null>(null);
  const [etat, setEtat] = useState<Etat>("arret");
  const [motActif, setMotActif] = useState<MotActif | null>(null);

  function chargerEtJouer(index: number, debut = 0) {
    const audio = audioRef.current;
    const r = recitateurRef.current;
    const d = dossierRef.current;
    const verset = versetsRef.current[index];
    if (!audio || !r || !d || !verset) return;
    versetIndexRef.current = index;
    audio.src = urlAudioVerset(r, d, verset.numero);
    if (debut > 0) {
      audio.addEventListener("loadedmetadata", () => (audio.currentTime = debut), { once: true });
    }
    audio.play();
    descendreSiHorsChamp(verset.numero);
  }

  function hauteurBarreNavigation(): number {
    const barre = document.querySelector(".barre-navigation");
    return barre ? barre.getBoundingClientRect().height : 0;
  }

  function scrollVersVerset(numero: number) {
    if (infobulleVisibleRef.current) return; // n'arrache pas l'utilisateur au mot qu'il regarde
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

  function jouer(nouveauRecitateur: Recitateur, nouveauDossier: string, versets: Verset[], depart?: number, debut?: number) {
    if (
      depart === undefined &&
      etat === "pause" &&
      recitateurRef.current === nouveauRecitateur &&
      dossierRef.current === nouveauDossier
    ) {
      audioRef.current?.play();
      setEtat("lecture");
      return;
    }
    recitateurRef.current = nouveauRecitateur;
    dossierRef.current = nouveauDossier;
    versetsRef.current = versets;
    setRecitateur(nouveauRecitateur);
    setDossier(nouveauDossier);
    if (depart === undefined && versets[0]) {
      scrollVersVerset(versets[0].numero);
    }
    const index = depart !== undefined ? versets.findIndex((v) => v.numero === depart) : 0;
    chargerEtJouer(index >= 0 ? index : 0, debut);
    setEtat("lecture");
  }

  function mettreEnPause() {
    audioRef.current?.pause();
    setEtat("pause");
  }

  function basculerLecture(recitateurCible: Recitateur, dossierCible: string, versets: Verset[]) {
    if (etat === "lecture" && recitateurRef.current === recitateurCible && dossierRef.current === dossierCible) {
      mettreEnPause();
      return;
    }
    jouer(recitateurCible, dossierCible, versets);
  }

  function arreter() {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.removeAttribute("src");
      audio.load();
    }
    recitateurRef.current = null;
    dossierRef.current = null;
    versetsRef.current = [];
    versetIndexRef.current = 0;
    motActifRef.current = null;
    setRecitateur(null);
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

  // Suivi du mot à chaque image (~16 ms) plutôt que sur `timeupdate`, déclenché irrégulièrement (~250 ms) : surlignage fiable pour caler les minutages.
  function demarrerSuivi() {
    if (suiviRef.current !== null) return;
    const boucle = () => {
      majMotActif();
      suiviRef.current = requestAnimationFrame(boucle);
    };
    suiviRef.current = requestAnimationFrame(boucle);
  }

  function arreterSuivi() {
    if (suiviRef.current === null) return;
    cancelAnimationFrame(suiviRef.current);
    suiviRef.current = null;
  }

  useEffect(() => arreterSuivi, []);

  function majMotActif() {
    const audio = audioRef.current;
    const r = recitateurRef.current;
    const d = dossierRef.current;
    const verset = versetsRef.current[versetIndexRef.current];
    const minutages = r ? verset?.audio?.[r] : undefined;
    if (!audio || !d || !minutages) return;
    const t = audio.currentTime;
    let index = 0;
    for (let i = 0; i < minutages.length; i++) {
      if (parseMinutage(minutages[i]) <= t) index = i;
    }
    const actuel = motActifRef.current;
    if (actuel?.dossier === d && actuel.verset === verset.numero && actuel.mot === index) return;
    const nouveau = { dossier: d, verset: verset.numero, mot: index };
    motActifRef.current = nouveau;
    setMotActif(nouveau);
  }

  return (
    <LectureAudioContext.Provider
      value={{ recitateur, dossier, etat, motActif, jouer, basculerLecture, arreter, signalerInfobulleVisible }}
    >
      <audio ref={audioRef} onEnded={versetSuivant} onPlaying={demarrerSuivi} onPause={arreterSuivi} />
      {children}
    </LectureAudioContext.Provider>
  );
}

export function useLectureAudio(): LectureAudioContexte {
  const contexte = useContext(LectureAudioContext);
  if (!contexte) throw new Error("useLectureAudio doit être utilisé dans un LectureAudioProvider");
  return contexte;
}
