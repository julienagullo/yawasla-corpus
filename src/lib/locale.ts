import type { Langue } from "@/data/types";

export const LANGUES: Langue[] = ["fr", "en", "es"];

// Langues avec un préfixe d'URL (/en, /es) — le français reste à la racine.
export const LANGUES_PREFIXEES = LANGUES.filter((l) => l !== "fr") as Exclude<Langue, "fr">[];

// Détermine la langue à partir d'un pathname (ex: "/en/sourate/1/al-fatiha" -> "en").
export function langueDePathname(pathname: string): Langue {
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  if (pathname === "/es" || pathname.startsWith("/es/")) return "es";
  return "fr";
}

// Construit l'URL équivalente à `pathname` dans `langue` (fr -> pas de préfixe, sinon /en ou /es).
export function urlPourLangue(pathname: string, langue: Langue): string {
  const reste = pathname.replace(/^\/(en|es)(?=\/|$)/, "") || "/";
  if (langue === "fr") return reste;
  return reste === "/" ? `/${langue}` : `/${langue}${reste}`;
}
