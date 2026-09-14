import { notFound } from "next/navigation";
import { sourates, getVersets } from "@/data/summary";
import type { Langue } from "@/conf/types";
import Infobulle from "@/components/Infobulle";
import TitreSourate from "@/components/TitreSourate";
import Versets from "@/components/Versets";

export default function PageSourate({ id, name, langue }: { id: string; name: string; langue: Langue }) {
  const sourateId = Number(id);
  const sourate = sourates.find((s) => s.id === sourateId && s.slug === name && s.disponible);

  if (!sourate) {
    notFound();
  }

  const versets = getVersets(sourateId);

  return (
    <main className="page-shell py-5">
      <TitreSourate sourate={sourate} langue={langue} />
      <Infobulle dir="rtl" lang="ar" langue={langue}>
        <Versets versets={versets} langue={langue} dossier={`${id}-${name}`} />
      </Infobulle>
    </main>
  );
}
