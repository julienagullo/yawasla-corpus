"use client";

import { createContext, useContext, useRef, useState, type ReactNode } from "react";
import type { Mot as MotType } from "@/data/types";
import { useLangue } from "@/components/LangueProvider";

const DELAI_FERMETURE_MS = 2000;
const DUREE_FONDU_MS = 300;
const LARGEUR_MAX_INFOBULLE = 220; // doit correspondre au max-width de .mot-infobulle (globals.css)

type Position = { top: number; left: number };

type InfobulleContextValue = {
  motActif: MotType | null;
  visible: boolean;
  afficher: (mot: MotType, cible: HTMLElement) => void;
  programmerFermeture: () => void;
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
}: {
  children: ReactNode;
  dir?: string;
  lang?: string;
}) {
  const { langue } = useLangue();
  const conteneurRef = useRef<HTMLDivElement>(null);
  const [motActif, setMotActif] = useState<MotType | null>(null);
  const [position, setPosition] = useState<Position | null>(null);
  const [visible, setVisible] = useState(false);
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

  function annulerTimeouts() {
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];
  }

  function afficher(mot: MotType, cible: HTMLElement) {
    annulerTimeouts();
    const conteneur = conteneurRef.current;
    if (!conteneur) return;
    const rectCible = cible.getBoundingClientRect();
    const rectConteneur = conteneur.getBoundingClientRect();
    // Empêche la bulle de dépasser le conteneur (et donc de créer un scroll
    // horizontal) quand le mot est trop près du bord gauche ou droit.
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
    setVisible(true);
  }

  function programmerFermeture() {
    annulerTimeouts();
    timeouts.current.push(
      setTimeout(() => setVisible(false), DELAI_FERMETURE_MS),
      setTimeout(() => setMotActif(null), DELAI_FERMETURE_MS + DUREE_FONDU_MS)
    );
  }

  return (
    <InfobulleContext.Provider value={{ motActif, visible, afficher, programmerFermeture }}>
      <div ref={conteneurRef} className="position-relative" dir={dir} lang={lang}>
        {children}
        {motActif && position && (
          <span
            dir="ltr"
            className={`mot-infobulle position-absolute text-start rounded-3 shadow px-3 py-2 ${
              visible ? "mot-infobulle--visible" : ""
            }`}
            style={{
              top: position.top,
              left: position.left,
              transform: "translate(-50%, calc(-100% - 8px))",
            }}
          >
            <span className="d-block fw-semibold">{motActif.traduction[langue]}</span>
            <span className="mot-infobulle__grammaire d-block small mt-1">{motActif.grammaire[langue]}</span>
          </span>
        )}
      </div>
    </InfobulleContext.Provider>
  );
}
