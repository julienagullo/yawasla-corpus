"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sourates, padId, titreSourate } from "@/data/summary";
import { useLangue } from "@/components/LangueProvider";
import { useTheme } from "@/components/ThemeProvider";
import MenuLangue from "@/components/MenuLangue";

function urlSourate(sourate: { id: number; slug: string }): string {
  return `/sourate/${padId(sourate.id)}/${sourate.slug}`;
}

// Barre fixe en bas, présente sur toutes les pages : sommaire + langue à
// gauche, sourate en cours au centre (vide hors lecture), précédent/suivant
// à droite (uniquement parmi les sourates disponibles).
export default function BarreNavigation() {
  const pathname = usePathname();
  const { langue } = useLangue();
  const { theme, basculerTheme } = useTheme();

  const disponibles = sourates.filter((s) => s.disponible);
  const idActuel = Number(pathname.match(/^\/sourate\/(\d+)\//)?.[1]);
  const indexActuel = disponibles.findIndex((s) => s.id === idActuel);
  const sourateActuelle = indexActuel >= 0 ? disponibles[indexActuel] : null;
  const precedente = indexActuel > 0 ? disponibles[indexActuel - 1] : null;
  const suivante = indexActuel >= 0 && indexActuel < disponibles.length - 1 ? disponibles[indexActuel + 1] : null;

  return (
    <nav className="barre-navigation">
      <div className="barre-navigation__groupe">
        <Link href="/" className="barre-navigation__bouton" aria-label="Sommaire">
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
