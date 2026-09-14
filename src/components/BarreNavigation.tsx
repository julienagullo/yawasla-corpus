"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { sourates, padId, titreSourate, getVersets } from "@/data/summary";
import { langueDePathname, urlPourLangue } from "@/conf/locale";
import { LIBELLES } from "@/conf/libelles";
import { aAudio } from "@/conf/audio";
import { useTheme } from "@/components/ThemeProvider";
import { useTransliteration } from "@/components/TransliterationProvider";
import MenuLangue from "@/components/MenuLangue";
import MenuInfo from "@/components/MenuInfo";
import LecteurAudio from "@/components/LecteurAudio";

// Barre fixe en bas, présente sur toutes les pages : sommaire + langue à
// gauche, sourate en cours au centre (vide hors lecture), précédent/suivant
// à droite (uniquement parmi les sourates disponibles, dans la langue en cours).
export default function BarreNavigation() {
  const pathname = usePathname();
  const langue = langueDePathname(pathname);
  const libelles = LIBELLES[langue];
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
  const dossierAudio = sourateActuelle ? `${padId(sourateActuelle.id)}-${sourateActuelle.slug}` : null;
  const precedente = indexActuel > 0 ? disponibles[indexActuel - 1] : null;
  const suivante = indexActuel >= 0 && indexActuel < disponibles.length - 1 ? disponibles[indexActuel + 1] : null;

  function urlSourate(sourate: { id: number; slug: string }): string {
    return urlPourLangue(`/sourate/${padId(sourate.id)}/${sourate.slug}`, langue);
  }

  return (
    <nav className="barre-navigation">
      <div className="barre-navigation__groupe">
        <Link
          href={urlPourLangue("/", langue)}
          className="barre-navigation__bouton"
          title={libelles.sommaire}
          aria-label={libelles.sommaire}
        >
          <i className="bi bi-list-ul" aria-hidden="true" />
        </Link>
        <MenuLangue />
        <button
          type="button"
          onClick={basculerTheme}
          className="barre-navigation__bouton"
          title={theme === "sombre" ? libelles.modeClair : libelles.modeSombre}
          aria-label={theme === "sombre" ? libelles.modeClair : libelles.modeSombre}
        >
          <i className={`bi ${theme === "sombre" ? "bi-sun" : "bi-moon"}`} aria-hidden="true" />
        </button>
        <MenuInfo langue={langue} />
      </div>

      <div className="barre-navigation__titre d-none d-sm-block">
        {sourateActuelle ? titreSourate(sourateActuelle, langue) : null}
      </div>

      <div className="barre-navigation__groupe">
        <label className="barre-navigation__switch" title={libelles.translitteration}>
          <i className="bi bi-type" aria-hidden="true" />
          <span className="form-check form-switch m-0">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              checked={afficherTransliteration}
              onChange={basculerTransliteration}
              aria-label={libelles.translitteration}
            />
          </span>
        </label>
        {sourateActuelle && dossierAudio && aAudio(dossierAudio) && (
          <LecteurAudio dossier={dossierAudio} versets={getVersets(sourateActuelle.id)} langue={langue} />
        )}
        {precedente ? (
          <Link
            href={urlSourate(precedente)}
            className="barre-navigation__bouton"
            title={libelles.souratePrecedente}
            aria-label={libelles.souratePrecedente}
          >
            ←
          </Link>
        ) : (
          <span className="barre-navigation__bouton barre-navigation__bouton--desactive" aria-hidden="true">
            ←
          </span>
        )}
        {suivante ? (
          <Link
            href={urlSourate(suivante)}
            className="barre-navigation__bouton"
            title={libelles.sourateSuivante}
            aria-label={libelles.sourateSuivante}
          >
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
