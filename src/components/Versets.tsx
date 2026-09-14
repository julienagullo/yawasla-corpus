import type { Langue, Verset } from "@/conf/types";
import Mot from "@/components/Mot";
import NumeroVerset from "@/components/NumeroVerset";

export default function Versets({
  versets,
  langue,
  dossier,
}: {
  versets: Verset[];
  langue: Langue;
  dossier?: string;
}) {
  return (
    <div className="versets">
      {versets.map((verset) => (
        <div className="verset" id={`verset-${verset.numero}`} key={verset.numero}>
          <div className="arabic-text">
            {verset.mots.map((mot, i) => (
              <Mot key={i} mot={mot} dossier={dossier} verset={verset.numero} index={i} />
            ))}
            <NumeroVerset numero={verset.numero} dossier={dossier} versets={versets} langue={langue} />
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
