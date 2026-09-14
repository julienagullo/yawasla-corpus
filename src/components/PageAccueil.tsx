import { sourates } from "@/data/summary";
import type { Langue } from "@/conf/types";
import ListeSourates from "@/components/ListeSourates";

export default function PageAccueil({ langue }: { langue: Langue }) {
  return (
    <main className="page-shell py-5 text-center">
      <h1 className="titre-accueil mb-4" dir="rtl" lang="ar">
        القرآن الكريم
      </h1>
      <h2 className="h5 mb-4">Yawasla Corpus</h2>
      <ListeSourates sourates={sourates} langue={langue} />
    </main>
  );
}
