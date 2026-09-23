import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { sourates, padId } from "@/data/summary";
import PageSourate from "@/components/PageSourate";
import { alternatesPour } from "@/conf/locale";

const DESCRIPTIONS = {
  en: "Verse-by-verse Quran reading prototype with word translation on hover.",
  es: "Prototipo de lectura del Corán verso a verso con traducción de palabras al pasar el cursor.",
  ar: "نموذج لقراءة القرآن آية بآية مع ترجمة الكلمات عند المرور عليها.",
};

export function generateStaticParams() {
  const disponibles = sourates.filter((s) => s.disponible).map((s) => ({ id: padId(s.id), name: s.slug }));
  return ["en", "es", "ar"].flatMap((locale) => disponibles.map((s) => ({ locale, ...s })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string; name: string }>;
}): Promise<Metadata> {
  const { locale, id, name } = await params;
  if (locale !== "en" && locale !== "es" && locale !== "ar") return {};
  return {
    description: DESCRIPTIONS[locale],
    alternates: alternatesPour(`/sourate/${id}/${name}`, locale),
  };
}

export default async function SouratePageLocale({
  params,
}: {
  params: Promise<{ locale: string; id: string; name: string }>;
}) {
  const { locale, id, name } = await params;
  if (locale !== "en" && locale !== "es" && locale !== "ar") notFound();
  return <PageSourate id={id} name={name} langue={locale} />;
}
