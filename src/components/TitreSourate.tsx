import { titreSourate, type Sourate } from "@/data/summary";
import type { Langue } from "@/data/types";

export default function TitreSourate({ sourate, langue }: { sourate: Sourate; langue: Langue }) {
  return (
    <>
      <h1 className="titre-accueil text-center mb-4" dir="rtl" lang="ar">
        {sourate.nom.arabe}
      </h1>
      <h2 className="h5 text-center mb-4">{titreSourate(sourate, langue)}</h2>
    </>
  );
}
