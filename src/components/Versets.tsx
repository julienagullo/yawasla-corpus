import type { Langue, Verset } from "@/data/types";
import Mot from "@/components/Mot";

export default function Versets({ versets, langue }: { versets: Verset[]; langue: Langue }) {
  return (
    <div className="versets">
      {versets.map((verset) => (
        <div className="verset" key={verset.numero}>
          <div className="arabic-text">
            {verset.mots.map((mot, i) => (
              <Mot key={i} mot={mot} />
            ))}
            <span className="mx-1 fs-6 text-muted">({verset.numero})</span>
          </div>
          {/* dir="ltr" explicite : sans ça, ce paragraphe en langue latine hérite
              du dir="rtl" du conteneur arabe et sa ponctuation finale se retrouve
              affichée à gauche au lieu de la droite. */}
          <p className="traduction-litterale" dir="ltr">
            {verset.traduction[langue]}
          </p>
        </div>
      ))}
    </div>
  );
}
