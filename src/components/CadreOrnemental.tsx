import type { ReactNode } from "react";
import Image from "next/image";
import cadre from "@/assets/cadre.webp";

// Cadre décoratif : le coin dessiné dans cadre.webp, réutilisé aux 4 coins
// par rotation (90°/180°/270°), + une bordure fine entre les coins.
export default function CadreOrnemental({ children }: { children: ReactNode }) {
  return (
    <div className="cadre-ornemental">
      <Image src={cadre} alt="" aria-hidden="true" className="cadre-ornemental__coin cadre-ornemental__coin--hg" />
      <Image src={cadre} alt="" aria-hidden="true" className="cadre-ornemental__coin cadre-ornemental__coin--hd" />
      <Image src={cadre} alt="" aria-hidden="true" className="cadre-ornemental__coin cadre-ornemental__coin--bd" />
      <Image src={cadre} alt="" aria-hidden="true" className="cadre-ornemental__coin cadre-ornemental__coin--bg" />
      <div className="cadre-ornemental__interieur">{children}</div>
    </div>
  );
}
