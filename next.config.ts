import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export en fichiers HTML/CSS/JS purs pour un hébergement VPS derrière
  // Apache/Nginx, sans process Node en production.
  output: "export",
  // Renomme le dossier de sortie "out" (défaut) en "build".
  distDir: "build",
  // Sous-dossier de service (ex: /corpus en local via MAMP). Vide en
  // production si le site est servi à la racine du domaine.
  basePath: process.env.NEXT_BASE_PATH || "",
  // Pas de serveur Node en prod (VPS statique) : next/image ne peut pas
  // passer par son API d'optimisation, on sert les images telles quelles.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
