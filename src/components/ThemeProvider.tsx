"use client";

import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";

export type Theme = "clair" | "sombre";

const CLE_STOCKAGE = "yawasla-theme";
const ecouteurs = new Set<() => void>();

function estTheme(valeur: string | null): valeur is Theme {
  return valeur === "clair" || valeur === "sombre";
}

function lireTheme(): Theme {
  const stocke = window.localStorage.getItem(CLE_STOCKAGE);
  return estTheme(stocke) ? stocke : "clair";
}

function ecrireTheme(theme: Theme) {
  window.localStorage.setItem(CLE_STOCKAGE, theme);
  ecouteurs.forEach((notifier) => notifier());
}

function sabonner(notifier: () => void) {
  ecouteurs.add(notifier);
  return () => ecouteurs.delete(notifier);
}

// Toujours "clair" côté serveur pour éviter un mismatch d'hydratation, le vrai thème est repris juste après.
function getServerSnapshot(): Theme {
  return "clair";
}

type ThemeContexte = {
  theme: Theme;
  basculerTheme: () => void;
};

const ThemeContext = createContext<ThemeContexte | null>(null);

// Thème clair/sombre mémorisé en local, pilote data-bs-theme sur <html> pour réutiliser les couleurs Bootstrap.
export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(sabonner, lireTheme, getServerSnapshot);

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme === "sombre" ? "dark" : "light");
  }, [theme]);

  function basculerTheme() {
    ecrireTheme(theme === "sombre" ? "clair" : "sombre");
  }

  return <ThemeContext.Provider value={{ theme, basculerTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContexte {
  const contexte = useContext(ThemeContext);
  if (!contexte) throw new Error("useTheme doit être utilisé dans un ThemeProvider");
  return contexte;
}
