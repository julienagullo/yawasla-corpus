"use client";

import { useRef, useState } from "react";
import { LIBELLES } from "@/conf/libelles";
import { RECITATEUR, SOURCES } from "@/conf/license";
import type { Langue } from "@/conf/types";

const DELAI_FERMETURE_MS = 300;

// Popup "i" : récitateur + sources, sur le même modèle survol/clic que
// MenuLangue (mobile first : pas de vrai survol au doigt).
export default function MenuInfo({ langue }: { langue: Langue }) {
  const libelles = LIBELLES[langue];
  const [ouvert, setOuvert] = useState(false);
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

  return (
    <div className="menu-info" onMouseEnter={ouvrir} onMouseLeave={programmerFermeture}>
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
        </div>
      )}
    </div>
  );
}
