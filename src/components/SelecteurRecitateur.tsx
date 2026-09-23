"use client";

import { useEffect } from "react";
import { useRecitateur } from "@/components/RecitateurProvider";
import { aAudio, RECITATEUR_DEFAUT, TOUS_RECITATEURS } from "@/conf/audio";
import { NOMS_RECITATEURS } from "@/conf/license";
import { LIBELLES } from "@/conf/libelles";
import type { Langue, Recitateur } from "@/conf/types";

// Sous le nom de la sourate : un récitateur par option, désactivée si cette sourate n'est pas encore découpée pour lui.
export default function SelecteurRecitateur({ dossier, langue }: { dossier: string; langue: Langue }) {
  const { recitateur, choisir } = useRecitateur();
  const libelles = LIBELLES[langue];

  // Le récitateur choisi reste mémorisé d'une sourate à l'autre, sauf s'il n'est pas disponible ici : on retombe alors sur Al-Hussary (et ce nouveau choix est celui qui reste mémorisé).
  useEffect(() => {
    if (recitateur !== RECITATEUR_DEFAUT && !aAudio(recitateur, dossier)) {
      choisir(RECITATEUR_DEFAUT);
    }
  }, [dossier, recitateur, choisir]);

  return (
    <div className="text-center mb-5">
      <label className="visually-hidden" htmlFor="selecteur-recitateur">
        {libelles.recitateur}
      </label>
      <select
        id="selecteur-recitateur"
        className="form-select form-select-sm d-inline-block w-auto"
        value={recitateur}
        onChange={(e) => choisir(e.target.value as Recitateur)}
      >
        {TOUS_RECITATEURS.map((r) => (
          <option key={r} value={r} disabled={!aAudio(r, dossier)}>
            {NOMS_RECITATEURS[r][langue]}
            {aAudio(r, dossier) ? "" : ` (${libelles.bientotDisponible})`}
          </option>
        ))}
      </select>
    </div>
  );
}
