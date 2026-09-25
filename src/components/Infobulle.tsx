"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import type { Langue, Mot as MotType } from "@/conf/types";
import { useLectureAudio } from "@/components/LectureAudioProvider";
import { useTransliteration } from "@/components/TransliterationProvider";

const DELAI_FERMETURE_MS = 2000;
const DUREE_FONDU_MS = 300;
const LARGEUR_MAX_INFOBULLE = 220; // doit correspondre au max-width de .mot-infobulle (globals.css)

// Distance de glissement (px) au-delà de laquelle on tranche entre parcourir les mots (horizontal) et scroller (vertical).
const SEUIL_DECISION_GLISSEMENT_PX = 10;

type Position = { top: number; left: number };

type MotEnregistre = { mot: MotType; verset?: number };

type InfobulleContextValue = {
  motActif: MotType | null;
  // Verset du mot actif : permet au bouton "(n)" de NumeroVerset de basculer sur l'icône play quand l'infobulle est ouverte sur un de ses mots.
  versetActif: number | null;
  visible: boolean;
  afficher: (mot: MotType, cible: HTMLElement, verset?: number) => void;
  programmerFermeture: () => void;
  enregistrerMot: (el: HTMLElement, mot: MotType, verset?: number) => void;
  desenregistrerMot: (el: HTMLElement) => void;
};

const InfobulleContext = createContext<InfobulleContextValue | null>(null);

export function useInfobulle() {
  const ctx = useContext(InfobulleContext);
  if (!ctx) throw new Error("useInfobulle doit être utilisé dans un InfobulleProvider");
  return ctx;
}

export default function Infobulle({
  children,
  dir,
  lang,
  langue,
}: {
  children: ReactNode;
  dir?: string;
  lang?: string;
  langue: Langue;
}) {
  const { afficher: afficherTransliteration } = useTransliteration();
  const { signalerInfobulleVisible } = useLectureAudio();
  const conteneurRef = useRef<HTMLDivElement>(null);
  const [motActif, setMotActif] = useState<MotType | null>(null);
  const [versetActif, setVersetActif] = useState<number | null>(null);
  const [position, setPosition] = useState<Position | null>(null);
  const [visible, setVisible] = useState(false);
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

  // Association <span class="mot"> -> données du mot, pour retrouver le mot sous le doigt pendant un glissement tactile (document.elementFromPoint).
  const motsRegistre = useRef(new Map<HTMLElement, MotEnregistre>());

  // useCallback à identité stable pour éviter que chaque mot ne se ré-enregistre à chaque rendu d'Infobulle.
  const enregistrerMot = useCallback((el: HTMLElement, mot: MotType, verset?: number) => {
    motsRegistre.current.set(el, { mot, verset });
  }, []);

  const desenregistrerMot = useCallback((el: HTMLElement) => {
    motsRegistre.current.delete(el);
  }, []);

  // Empêche le scroll auto de la lecture audio de défiler la page tant qu'un mot est affiché (voir scrollVersVerset).
  useEffect(() => {
    signalerInfobulleVisible(visible);
  }, [visible, signalerInfobulleVisible]);

  function annulerTimeouts() {
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];
  }

  function afficher(mot: MotType, cible: HTMLElement, verset?: number) {
    annulerTimeouts();
    const conteneur = conteneurRef.current;
    if (!conteneur) return;
    const rectCible = cible.getBoundingClientRect();
    const rectConteneur = conteneur.getBoundingClientRect();
    // Empêche la bulle de dépasser le conteneur (scroll horizontal) quand le mot est près du bord.
    const demiLargeur = LARGEUR_MAX_INFOBULLE / 2;
    const centreBrut = rectCible.left - rectConteneur.left + rectCible.width / 2;
    const centreClampe = Math.min(
      Math.max(centreBrut, demiLargeur),
      rectConteneur.width - demiLargeur
    );
    setPosition({
      top: rectCible.top - rectConteneur.top,
      left: centreClampe,
    });
    setMotActif(mot);
    setVersetActif(verset ?? null);
    setVisible(true);
  }

  function programmerFermeture() {
    annulerTimeouts();
    timeouts.current.push(
      setTimeout(() => setVisible(false), DELAI_FERMETURE_MS),
      setTimeout(() => {
        setMotActif(null);
        setVersetActif(null);
      }, DELAI_FERMETURE_MS + DUREE_FONDU_MS)
    );
  }

  // Lues via des refs pour n'attacher les écouteurs tactiles qu'une seule fois (mêmes raisons que LecteurAudio.tsx).
  const afficherRef = useRef(afficher);
  const fermetureRef = useRef(programmerFermeture);
  useEffect(() => {
    afficherRef.current = afficher;
    fermetureRef.current = programmerFermeture;
  });

  // Sur mobile, l'infobulle s'ouvre dès le touchstart (pas de vrai survol) ; le glissement permet ensuite de parcourir les mots du verset.
  useEffect(() => {
    const conteneur = conteneurRef.current;
    if (!conteneur) return;

    let motDepart: HTMLElement | null = null;
    let origineX = 0;
    let origineY = 0;
    let mode: "indetermine" | "glissement" | "scroll" = "indetermine";
    let dernierEl: HTMLElement | null = null;

    function motSousPoint(x: number, y: number): { el: HTMLElement; mot: MotType; verset?: number } | null {
      const cible = document.elementFromPoint(x, y);
      const el = cible?.closest<HTMLElement>(".mot") ?? null;
      const enregistre = el ? motsRegistre.current.get(el) : undefined;
      return el && enregistre ? { el, mot: enregistre.mot, verset: enregistre.verset } : null;
    }

    function surTouchStart(e: TouchEvent) {
      const touch = e.touches[0];
      const trouve = motSousPoint(touch.clientX, touch.clientY);
      motDepart = trouve?.el ?? null;
      dernierEl = trouve?.el ?? null;
      origineX = touch.clientX;
      origineY = touch.clientY;
      mode = "indetermine";
      if (trouve) afficherRef.current(trouve.mot, trouve.el, trouve.verset);
    }

    function surTouchMove(e: TouchEvent) {
      if (!motDepart) return;
      const touch = e.touches[0];
      const dx = touch.clientX - origineX;
      const dy = touch.clientY - origineY;

      if (mode === "indetermine") {
        if (Math.hypot(dx, dy) < SEUIL_DECISION_GLISSEMENT_PX) return;
        mode = Math.abs(dx) > Math.abs(dy) ? "glissement" : "scroll";
        if (mode === "scroll") {
          // Scroll vertical détecté : referme l'infobulle ouverte au touchstart et laisse la page scroller normalement.
          motDepart = null;
          fermetureRef.current();
          return;
        }
      }

      const trouve = motSousPoint(touch.clientX, touch.clientY);
      e.preventDefault(); // bloque le scroll tant qu'on parcourt les mots au doigt
      if (trouve && trouve.el !== dernierEl) {
        dernierEl = trouve.el;
        afficherRef.current(trouve.mot, trouve.el, trouve.verset);
      }
    }

    function surTouchFin() {
      if (motDepart) fermetureRef.current();
      motDepart = null;
      dernierEl = null;
      mode = "indetermine";
    }

    conteneur.addEventListener("touchstart", surTouchStart, { passive: true });
    conteneur.addEventListener("touchmove", surTouchMove, { passive: false });
    conteneur.addEventListener("touchend", surTouchFin);
    conteneur.addEventListener("touchcancel", surTouchFin);
    return () => {
      conteneur.removeEventListener("touchstart", surTouchStart);
      conteneur.removeEventListener("touchmove", surTouchMove);
      conteneur.removeEventListener("touchend", surTouchFin);
      conteneur.removeEventListener("touchcancel", surTouchFin);
    };
  }, []);

  return (
    <InfobulleContext.Provider
      value={{ motActif, versetActif, visible, afficher, programmerFermeture, enregistrerMot, desenregistrerMot }}
    >
      <div ref={conteneurRef} className="position-relative" dir={dir} lang={lang}>
        {children}
        {motActif && position && (
          <span
            dir={langue === "ar" ? "rtl" : "ltr"}
            lang={langue}
            className={`mot-infobulle position-absolute text-start rounded-3 shadow px-3 py-2 ${
              visible ? "mot-infobulle--visible" : ""
            }`}
            style={{
              top: position.top,
              left: position.left,
              transform: "translate(-50%, calc(-100% - 8px))",
            }}
          >
            {afficherTransliteration && (
              <span className="mot-infobulle__grammaire d-block small fst-italic">{motActif.transliteration}</span>
            )}
            {/* En arabe le mot est déjà dans sa langue : pas de traduction, seule l'analyse grammaticale a du sens. */}
            {langue !== "ar" && <span className="d-block fw-semibold">{motActif.traduction[langue]}</span>}
            <span className="mot-infobulle__grammaire d-block small">
              {motActif.racine ? (
                <>
                  <bdi lang="ar">{motActif.racine.arabe}</bdi>
                  {afficherTransliteration && <span className="fst-italic"> ({motActif.racine.transliteration})</span>}
                </>
              ) : (
                "—"
              )}
            </span>
            <span
              className={`d-block ${langue === "ar" ? "fw-semibold" : "mot-infobulle__grammaire small mt-1"}`}
            >
              {motActif.grammaire[langue]}
            </span>
          </span>
        )}
      </div>
    </InfobulleContext.Provider>
  );
}
