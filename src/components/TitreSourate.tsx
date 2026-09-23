import { titreSourate, type Sourate } from "@/data/summary";
import type { Langue } from "@/conf/types";

export default function TitreSourate({ sourate, langue }: { sourate: Sourate; langue: Langue }) {
  return (
    <>
      <h1 className="titre-accueil text-center mb-4" dir="rtl" lang="ar">
        {sourate.nom.arabe}
      </h1>
      {/* En arabe le h1 ci-dessus porte déjà le nom : rien à ajouter en dessous. */}
      {langue !== "ar" && <h2 className="h5 text-center mb-4">{titreSourate(sourate, langue)}</h2>}
    </>
  );
}
