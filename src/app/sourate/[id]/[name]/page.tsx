import { sourates, padId } from "@/data/summary";
import PageSourate from "@/components/PageSourate";

export function generateStaticParams() {
  return sourates
    .filter((s) => s.disponible)
    .map((s) => ({ id: padId(s.id), name: s.slug }));
}

export default async function SouratePage({
  params,
}: {
  params: Promise<{ id: string; name: string }>;
}) {
  const { id, name } = await params;
  return <PageSourate id={id} name={name} langue="fr" />;
}
