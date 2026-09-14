"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LANGUES, langueDePathname, urlPourLangue } from "@/lib/locale";
import type { Langue } from "@/data/types";

const LIBELLE_LANGUE: Record<Langue, string> = { fr: "Français", en: "English", es: "Español" };
const DELAI_FERMETURE_MS = 300;

// Menu de langue qui s'ouvre au survol (+ clic, mobile first : pas de vrai
// survol au doigt), sur le modèle de l'infobulle des mots. Chaque option est
// un lien vers l'URL équivalente dans cette langue (fr sans préfixe, /en, /es).
export default function MenuLangue() {
  const pathname = usePathname();
  const langue = langueDePathname(pathname);
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
    <div className="menu-langue" onMouseEnter={ouvrir} onMouseLeave={programmerFermeture}>
      <button
        type="button"
        className="barre-navigation__bouton"
        aria-label={`Changer de langue (${LIBELLE_LANGUE[langue]})`}
        aria-haspopup="true"
        aria-expanded={ouvert}
        onClick={() => setOuvert((v) => !v)}
      >
        <i className="bi bi-globe" aria-hidden="true" />
      </button>
      {ouvert && (
        <ul className="menu-langue__liste" role="menu">
          {LANGUES.map((option) => (
            <li key={option} role="none">
              <Link
                href={urlPourLangue(pathname, option)}
                role="menuitemradio"
                aria-checked={option === langue}
                className={`menu-langue__option ${option === langue ? "menu-langue__option--actif" : ""}`}
                onClick={() => setOuvert(false)}
              >
                {LIBELLE_LANGUE[option]}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
