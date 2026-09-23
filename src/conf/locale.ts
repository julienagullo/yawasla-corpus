import type { Langue } from "@/conf/types";

export const LANGUES: Langue[] = ["fr", "en", "es", "ar"];

export const LANGUES_PREFIXEES = LANGUES.filter((l) => l !== "fr") as Exclude<Langue, "fr">[];

export function langueDePathname(pathname: string): Langue {
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  if (pathname === "/es" || pathname.startsWith("/es/")) return "es";
  if (pathname === "/ar" || pathname.startsWith("/ar/")) return "ar";
  return "fr";
}

export function urlPourLangue(pathname: string, langue: Langue): string {
  const reste = pathname.replace(/^\/(en|es|ar)(?=\/|$)/, "") || "/";
  if (langue === "fr") return reste;
  return reste === "/" ? `/${langue}` : `/${langue}${reste}`;
}

// Balises canonical + hreflang d'une page (chemin sans préfixe de langue) ; x-default = français, servi à la racine.
export function alternatesPour(chemin: string, langue: Langue) {
  return {
    canonical: urlPourLangue(chemin, langue),
    languages: {
      ...Object.fromEntries(LANGUES.map((l) => [l, urlPourLangue(chemin, l)])),
      "x-default": urlPourLangue(chemin, "fr"),
    },
  };
}
