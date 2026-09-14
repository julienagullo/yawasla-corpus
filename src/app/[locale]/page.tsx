import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageAccueil from "@/components/PageAccueil";

const DESCRIPTIONS = {
  en: "Verse-by-verse Quran reading prototype with word translation on hover.",
  es: "Prototipo de lectura del Corán verso a verso con traducción de palabras al pasar el cursor.",
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en" && locale !== "es") return {};
  return { description: DESCRIPTIONS[locale] };
}

export default async function HomeLocale({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "es") notFound();
  return <PageAccueil langue={locale} />;
}
