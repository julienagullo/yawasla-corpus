import type { Langue } from "@/conf/types";

export const LANGUES: Langue[] = ["fr", "en", "es"];

export const LANGUES_PREFIXEES = LANGUES.filter((l) => l !== "fr") as Exclude<Langue, "fr">[];

export function langueDePathname(pathname: string): Langue {
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  if (pathname === "/es" || pathname.startsWith("/es/")) return "es";
  return "fr";
}

export function urlPourLangue(pathname: string, langue: Langue): string {
  const reste = pathname.replace(/^\/(en|es)(?=\/|$)/, "") || "/";
  if (langue === "fr") return reste;
  return reste === "/" ? `/${langue}` : `/${langue}${reste}`;
}
