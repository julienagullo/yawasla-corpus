import type { Metadata } from "next";
import { sourates, padId } from "@/data/summary";
import PageSourate from "@/components/PageSourate";
import { alternatesPour } from "@/conf/locale";

export function generateStaticParams() {
  return sourates
    .filter((s) => s.disponible)
    .map((s) => ({ id: padId(s.id), name: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; name: string }>;
}): Promise<Metadata> {
  const { id, name } = await params;
  return { alternates: alternatesPour(`/sourate/${id}/${name}`, "fr") };
}

export default async function SouratePage({
  params,
}: {
  params: Promise<{ id: string; name: string }>;
}) {
  const { id, name } = await params;
  return <PageSourate id={id} name={name} langue="fr" />;
}
