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
              <Mot key={i} mot={mot} dossier={dossier} verset={verset.numero} index={i} versets={versets} />
            ))}
            <NumeroVerset numero={verset.numero} dossier={dossier} versets={versets} langue={langue} />
          </div>
          {/* En arabe le verset est déjà dans sa langue : pas de traduction littérale à afficher. */}
          {langue !== "ar" && (
            <p className="traduction-litterale" dir="ltr">
              {verset.traduction[langue]}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
