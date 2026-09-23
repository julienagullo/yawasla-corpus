import type { Metadata } from "next";
import PageAccueil from "@/components/PageAccueil";
import { alternatesPour } from "@/conf/locale";

export const metadata: Metadata = { alternates: alternatesPour("/", "fr") };

export default function Home() {
  return <PageAccueil langue="fr" />;
}
