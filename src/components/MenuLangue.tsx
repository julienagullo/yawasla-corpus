"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LANGUES, langueDePathname, urlPourLangue } from "@/conf/locale";
import { LIBELLES } from "@/conf/libelles";
import type { Langue } from "@/conf/types";

const LIBELLE_LANGUE: Record<Langue, string> = { fr: "Français", en: "English", es: "Español" };
const DELAI_FERMETURE_MS = 300;

// Menu de langue : survol (souris) + clic (mobile, pas de vrai hover tactile), chaque option pointe vers l'URL équivalente dans cette langue.
export default function MenuLangue() {
  const pathname = usePathname();
  const langue = langueDePathname(pathname);
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

  // Mobile simule un hover au 1er tap puis déclenche le click aussitôt (toggle immédiat) : on ignore le hover hors souris réelle, seul le clic gère le tactile.
  function surPointerEnter(e: React.PointerEvent) {
    if (e.pointerType === "mouse") ouvrir();
  }

  function surPointerLeave(e: React.PointerEvent) {
    if (e.pointerType === "mouse") programmerFermeture();
  }

  // Filet de sécurité tactile : sans vrai survol, on referme aussi au tap en dehors du menu.
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
    <div ref={conteneurRef} className="menu-langue" onPointerEnter={surPointerEnter} onPointerLeave={surPointerLeave}>
      <button
        type="button"
        className="barre-navigation__bouton"
        title={`${LIBELLES[langue].changerLangue} (${LIBELLE_LANGUE[langue]})`}
        aria-label={`${LIBELLES[langue].changerLangue} (${LIBELLE_LANGUE[langue]})`}
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
