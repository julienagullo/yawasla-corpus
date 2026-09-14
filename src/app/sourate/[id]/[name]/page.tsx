import { notFound } from "next/navigation";
import { sourates, getVersets, padId } from "@/data/summary";
import Infobulle from "@/components/Infobulle";
import TitreSourate from "@/components/TitreSourate";
import Versets from "@/components/Versets";

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
  const sourateId = Number(id);
  const sourate = sourates.find(
    (s) => s.id === sourateId && s.slug === name && s.disponible
  );

  if (!sourate) {
    notFound();
  }

  const versets = getVersets(sourateId);

  return (
    <main className="page-shell py-5">
      <TitreSourate sourate={sourate} />
      <Infobulle dir="rtl" lang="ar">
        <Versets versets={versets} />
      </Infobulle>
    </main>
  );
}
