"use client";

import { createContext, useContext, useSyncExternalStore, type ReactNode } from "react";

const CLE_STOCKAGE = "yawasla-transliteration";
const ecouteurs = new Set<() => void>();

function lireAffichage(): boolean {
  return window.localStorage.getItem(CLE_STOCKAGE) === "1";
}

function ecrireAffichage(valeur: boolean) {
  window.localStorage.setItem(CLE_STOCKAGE, valeur ? "1" : "0");
  ecouteurs.forEach((notifier) => notifier());
}

function sabonner(notifier: () => void) {
  ecouteurs.add(notifier);
  return () => ecouteurs.delete(notifier);
}

// Masquée par défaut côté serveur (pas de localStorage) et au premier rendu.
function getServerSnapshot(): boolean {
  return false;
}

type TransliterationContexte = {
  afficher: boolean;
  basculer: () => void;
};

const TransliterationContext = createContext<TransliterationContexte | null>(null);

// Affichage optionnel de la translittération dans l'infobulle, mémorisé en local.
export function TransliterationProvider({ children }: { children: ReactNode }) {
  const afficher = useSyncExternalStore(sabonner, lireAffichage, getServerSnapshot);

  function basculer() {
    ecrireAffichage(!afficher);
  }

  return (
    <TransliterationContext.Provider value={{ afficher, basculer }}>{children}</TransliterationContext.Provider>
  );
}

export function useTransliteration(): TransliterationContexte {
  const contexte = useContext(TransliterationContext);
  if (!contexte) throw new Error("useTransliteration doit être utilisé dans un TransliterationProvider");
  return contexte;
}
