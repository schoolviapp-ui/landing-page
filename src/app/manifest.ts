import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Schoolvi · Logiciel de gestion d'établissement scolaire",
    short_name: "Schoolvi",
    description:
      "Logiciel de gestion d'établissement scolaire n°1 en Afrique de l'Ouest (Togo, Bénin, Côte d'Ivoire, Sénégal...).",
    start_url: "/",
    display: "standalone",
    background_color: "#fafaf9",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
