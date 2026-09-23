"use client";

import { createContext, useContext, useSyncExternalStore, type ReactNode } from "react";
import { RECITATEUR_DEFAUT } from "@/conf/audio";
import type { Recitateur } from "@/conf/types";

const CLE_STOCKAGE = "yawasla-recitateur";
const ecouteurs = new Set<() => void>();

function estRecitateur(valeur: string | null): valeur is Recitateur {
  return valeur === "al-hussary" || valeur === "al-houdaifi";
}

function lireRecitateur(): Recitateur {
  const stocke = window.localStorage.getItem(CLE_STOCKAGE);
  return estRecitateur(stocke) ? stocke : RECITATEUR_DEFAUT;
}

function ecrireRecitateur(recitateur: Recitateur) {
  window.localStorage.setItem(CLE_STOCKAGE, recitateur);
  ecouteurs.forEach((notifier) => notifier());
}

function sabonner(notifier: () => void) {
  ecouteurs.add(notifier);
  return () => ecouteurs.delete(notifier);
}

// Toujours le récitateur par défaut côté serveur pour éviter un mismatch d'hydratation, le vrai choix est repris juste après.
function getServerSnapshot(): Recitateur {
  return RECITATEUR_DEFAUT;
}

type RecitateurContexte = {
  recitateur: Recitateur;
  choisir: (recitateur: Recitateur) => void;
};

const RecitateurContext = createContext<RecitateurContexte | null>(null);

// Récitateur choisi pour la lecture (verset ou sourate entière), mémorisé en local et partagé entre le sélecteur et la barre de navigation.
export function RecitateurProvider({ children }: { children: ReactNode }) {
  const recitateur = useSyncExternalStore(sabonner, lireRecitateur, getServerSnapshot);

  function choisir(nouveau: Recitateur) {
    ecrireRecitateur(nouveau);
  }

  return <RecitateurContext.Provider value={{ recitateur, choisir }}>{children}</RecitateurContext.Provider>;
}

export function useRecitateur(): RecitateurContexte {
  const contexte = useContext(RecitateurContext);
  if (!contexte) throw new Error("useRecitateur doit être utilisé dans un RecitateurProvider");
  return contexte;
}
