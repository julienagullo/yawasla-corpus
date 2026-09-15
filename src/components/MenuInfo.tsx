"use client";

import { useEffect, useRef, useState } from "react";
import { LIBELLES } from "@/conf/libelles";
import { RECITATEUR, SOURCES, GITHUB_URL } from "@/conf/license";
import type { Langue } from "@/conf/types";

const DELAI_FERMETURE_MS = 300;

export default function MenuInfo({ langue }: { langue: Langue }) {
  const libelles = LIBELLES[langue];
  const [ouvert, setOuvert] = useState(false);
  const conteneurRef = useRef<HTMLDivElement>(null);
  const fermeture = useRef<ReturnType<typeof setTimeout> | null>(null);

  function annulerFermeture() {
    if (fermeture.current) clearTimeout(fermeture.current);
  }

  function ouvrir() {
    annulerFermeture();
    setOuvert(true);
  }

  function programmerFermeture() {
    annulerFermeture();
    fermeture.current = setTimeout(() => setOuvert(false), DELAI_FERMETURE_MS);
  }

  function surPointerEnter(e: React.PointerEvent) {
    if (e.pointerType === "mouse") ouvrir();
  }

  function surPointerLeave(e: React.PointerEvent) {
    if (e.pointerType === "mouse") programmerFermeture();
  }

  useEffect(() => {
    if (!ouvert) return;
    function surPointerDown(e: PointerEvent) {
      if (conteneurRef.current && !conteneurRef.current.contains(e.target as Node)) {
        setOuvert(false);
      }
    }
    document.addEventListener("pointerdown", surPointerDown);
    return () => document.removeEventListener("pointerdown", surPointerDown);
  }, [ouvert]);

  return (
    <div ref={conteneurRef} className="menu-info" onPointerEnter={surPointerEnter} onPointerLeave={surPointerLeave}>
      <button
        type="button"
        className="barre-navigation__bouton"
        title={libelles.aPropos}
        aria-label={libelles.aPropos}
        aria-haspopup="true"
        aria-expanded={ouvert}
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => setOuvert((v) => !v)}
      >
        <i className="bi bi-info-circle" aria-hidden="true" />
      </button>
      {ouvert && (
        <div className="menu-info__panneau" role="dialog" aria-label={libelles.sourcesTitre}>
          <p className="menu-info__titre">{libelles.sourcesTitre}</p>
          <p className="menu-info__ligne">
            <strong>{libelles.recitateur}</strong> : {RECITATEUR}
          </p>
          {SOURCES.map((source) => (
            <p className="menu-info__ligne" key={source.nom}>
              <strong>
                <a href={source.url} target="_blank" rel="noopener noreferrer">
                  {source.nom}
                </a>
              </strong>{" "}
              : {source.description[langue]}
            </p>
          ))}
          <p className="menu-info__ligne">
            <i className="bi bi-github" aria-hidden="true" />{" "}
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              {libelles.codeSource}
            </a>{" "}
            ({libelles.licenceCode})
          </p>
        </div>
      )}
    </div>
  );
}
