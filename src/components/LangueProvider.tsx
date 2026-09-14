"use client";

import { createContext, useContext, useSyncExternalStore, type ReactNode } from "react";
import type { Langue } from "@/data/types";

const CLE_STOCKAGE = "yawasla-langue";
export const LANGUES: Langue[] = ["fr", "en", "es"];
const ecouteurs = new Set<() => void>();

function estLangue(valeur: string | null): valeur is Langue {
  return valeur === "fr" || valeur === "en" || valeur === "es";
}

function lireLangue(): Langue {
  const stockee = window.localStorage.getItem(CLE_STOCKAGE);
  return estLangue(stockee) ? stockee : "fr";
}

function ecrireLangue(langue: Langue) {
  window.localStorage.setItem(CLE_STOCKAGE, langue);
  ecouteurs.forEach((notifier) => notifier());
}

function sabonner(notifier: () => void) {
  ecouteurs.add(notifier);
  return () => ecouteurs.delete(notifier);
}

// Toujours "fr" côté serveur (pas de localStorage) : évite un mismatch
// d'hydratation, la vraie langue mémorisée est reprise juste après.
function getServerSnapshot(): Langue {
  return "fr";
}

type LangueContexte = {
  langue: Langue;
  definirLangue: (langue: Langue) => void;
};

const LangueContext = createContext<LangueContexte | null>(null);

// Langue d'affichage (fr/en/es), mémorisée en local. Ne couvre pour l'instant
// que le nom des sourates (seul contenu traduit dans les 3 langues) — versets
// et mot-à-mot restent en français tant qu'ils n'existent pas ailleurs.
export function LangueProvider({ children }: { children: ReactNode }) {
  const langue = useSyncExternalStore(sabonner, lireLangue, getServerSnapshot);

  return <LangueContext.Provider value={{ langue, definirLangue: ecrireLangue }}>{children}</LangueContext.Provider>;
}

export function useLangue(): LangueContexte {
  const contexte = useContext(LangueContext);
  if (!contexte) throw new Error("useLangue doit être utilisé dans un LangueProvider");
  return contexte;
}
