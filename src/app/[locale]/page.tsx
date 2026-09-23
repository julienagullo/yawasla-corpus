import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageAccueil from "@/components/PageAccueil";
import { alternatesPour } from "@/conf/locale";

const DESCRIPTIONS = {
  en: "Verse-by-verse Quran reading prototype with word translation on hover.",
  es: "Prototipo de lectura del Corán verso a verso con traducción de palabras al pasar el cursor.",
  ar: "نموذج لقراءة القرآن آية بآية مع ترجمة الكلمات عند المرور عليها.",
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }, { locale: "ar" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en" && locale !== "es" && locale !== "ar") return {};
  return { description: DESCRIPTIONS[locale], alternates: alternatesPour("/", locale) };
}

export default async function HomeLocale({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "es" && locale !== "ar") notFound();
  return <PageAccueil langue={locale} />;
}
