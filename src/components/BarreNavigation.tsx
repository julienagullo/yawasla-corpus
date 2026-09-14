"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { sourates, padId, titreSourate } from "@/data/summary";
import { langueDePathname, urlPourLangue } from "@/lib/locale";
import { useTheme } from "@/components/ThemeProvider";
import { useTransliteration } from "@/components/TransliterationProvider";
import MenuLangue from "@/components/MenuLangue";

// Barre fixe en bas, présente sur toutes les pages : sommaire + langue à
// gauche, sourate en cours au centre (vide hors lecture), précédent/suivant
// à droite (uniquement parmi les sourates disponibles, dans la langue en cours).
export default function BarreNavigation() {
  const pathname = usePathname();
  const langue = langueDePathname(pathname);
  const { theme, basculerTheme } = useTheme();

  // Le layout racine (unique, partagé par toutes les routes) ne peut pas
  // connaître le segment [locale] au rendu serveur : on corrige l'attribut
  // lang de <html> ici, dès qu'on connaît la langue via l'URL.
  useEffect(() => {
    document.documentElement.lang = langue;
  }, [langue]);

  const { afficher: afficherTransliteration, basculer: basculerTransliteration } = useTransliteration();

  const disponibles = sourates.filter((s) => s.disponible);
  const idActuel = Number(pathname.match(/^(?:\/(?:en|es))?\/sourate\/(\d+)\//)?.[1]);
  const indexActuel = disponibles.findIndex((s) => s.id === idActuel);
  const sourateActuelle = indexActuel >= 0 ? disponibles[indexActuel] : null;
  const precedente = indexActuel > 0 ? disponibles[indexActuel - 1] : null;
  const suivante = indexActuel >= 0 && indexActuel < disponibles.length - 1 ? disponibles[indexActuel + 1] : null;

  function urlSourate(sourate: { id: number; slug: string }): string {
    return urlPourLangue(`/sourate/${padId(sourate.id)}/${sourate.slug}`, langue);
  }

  return (
    <nav className="barre-navigation">
      <div className="barre-navigation__groupe">
        <Link href={urlPourLangue("/", langue)} className="barre-navigation__bouton" aria-label="Sommaire">
          <i className="bi bi-list-ul" aria-hidden="true" />
        </Link>
        <MenuLangue />
        <button
          type="button"
          onClick={basculerTheme}
          className="barre-navigation__bouton"
          aria-label={theme === "sombre" ? "Passer en mode clair" : "Passer en mode sombre"}
        >
          <i className={`bi ${theme === "sombre" ? "bi-sun" : "bi-moon"}`} aria-hidden="true" />
        </button>
      </div>

      <div className="barre-navigation__titre">{sourateActuelle ? titreSourate(sourateActuelle, langue) : null}</div>

      <div className="barre-navigation__groupe">
        <label className="barre-navigation__switch" title="Translittération">
          <i className="bi bi-type" aria-hidden="true" />
          <span className="form-check form-switch m-0">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              checked={afficherTransliteration}
              onChange={basculerTransliteration}
              aria-label="Afficher la translittération dans l'infobulle des mots"
            />
          </span>
        </label>
        {precedente ? (
          <Link href={urlSourate(precedente)} className="barre-navigation__bouton" aria-label="Sourate précédente">
            ←
          </Link>
        ) : (
          <span className="barre-navigation__bouton barre-navigation__bouton--desactive" aria-hidden="true">
            ←
          </span>
        )}
        {suivante ? (
          <Link href={urlSourate(suivante)} className="barre-navigation__bouton" aria-label="Sourate suivante">
            →
          </Link>
        ) : (
          <span className="barre-navigation__bouton barre-navigation__bouton--desactive" aria-hidden="true">
            →
          </span>
        )}
      </div>
    </nav>
  );
}
