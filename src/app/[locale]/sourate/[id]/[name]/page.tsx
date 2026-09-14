import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { sourates, padId } from "@/data/summary";
import PageSourate from "@/components/PageSourate";

const DESCRIPTIONS = {
  en: "Verse-by-verse Quran reading prototype with word translation on hover.",
  es: "Prototipo de lectura del Corán verso a verso con traducción de palabras al pasar el cursor.",
};

export function generateStaticParams() {
  const disponibles = sourates.filter((s) => s.disponible).map((s) => ({ id: padId(s.id), name: s.slug }));
  return ["en", "es"].flatMap((locale) => disponibles.map((s) => ({ locale, ...s })));
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

export default async function SouratePageLocale({
  params,
}: {
  params: Promise<{ locale: string; id: string; name: string }>;
}) {
  const { locale, id, name } = await params;
  if (locale !== "en" && locale !== "es") notFound();
  return <PageSourate id={id} name={name} langue={locale} />;
}
