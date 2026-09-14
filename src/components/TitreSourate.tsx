"use client";

import { titreSourate, type Sourate } from "@/data/summary";
import { useLangue } from "@/components/LangueProvider";

export default function TitreSourate({ sourate }: { sourate: Sourate }) {
  const { langue } = useLangue();
  return (
    <>
      <h1 className="titre-accueil text-center mb-4" dir="rtl" lang="ar">
        {sourate.nom.arabe}
      </h1>
      <h2 className="h5 text-center mb-4">{titreSourate(sourate, langue)}</h2>
    </>
  );
}
