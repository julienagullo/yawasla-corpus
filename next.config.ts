import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export en fichiers HTML/CSS/JS purs pour un hébergement VPS derrière Apache/Nginx, sans process Node.
  output: "export",
  // Renomme le dossier de sortie "out" (défaut) en "build".
  distDir: "build",
  // Sous-dossier de service (ex: /corpus en local via MAMP), vide en production si servi à la racine.
  basePath: process.env.NEXT_BASE_PATH || "",
  // Pas de serveur Node en prod : next/image ne peut pas optimiser, on sert les images telles quelles.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
