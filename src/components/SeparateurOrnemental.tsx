import Image from "next/image";
import separateur from "@/assets/separator.webp";

// Sépare le titre de la sourate du texte des versets (voir src/assets/separator.webp).
export default function SeparateurOrnemental() {
  return <Image src={separateur} alt="" aria-hidden="true" className="separateur-ornemental" />;
}
