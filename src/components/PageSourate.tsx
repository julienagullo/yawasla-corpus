import { notFound } from "next/navigation";
import { sourates, getVersets } from "@/data/summary";
import type { Langue } from "@/conf/types";
import { aAudio, TOUS_RECITATEURS } from "@/conf/audio";
import Infobulle from "@/components/Infobulle";
import TitreSourate from "@/components/TitreSourate";
import SelecteurRecitateur from "@/components/SelecteurRecitateur";
import SeparateurOrnemental from "@/components/SeparateurOrnemental";
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
      <SelecteurRecitateur disponibles={TOUS_RECITATEURS.filter((r) => aAudio(r, versets))} langue={langue} />
      <SeparateurOrnemental />
      <Infobulle dir="rtl" lang="ar" langue={langue}>
        <Versets versets={versets} langue={langue} dossier={`${id}-${name}`} />
      </Infobulle>
    </main>
  );
}
