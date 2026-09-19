import { readFile } from "node:fs/promises";
import path from "node:path";

import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Schoolvi - Logiciel de gestion scolaire au Togo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(path.join(process.cwd(), "public/brand/logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#fafaf9",
          color: "#1a1a1a",
          fontFamily: "sans-serif",
        }}
      >
        <img src={logoSrc} alt="" width={260} height={105} style={{ objectFit: "contain" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 76, lineHeight: 1.05, letterSpacing: -2 }}>
            Gerer votre ecole redevient un plaisir
          </div>
          <div style={{ fontSize: 30, color: "#535353" }}>
            Logiciel de gestion scolaire pour les ecoles, colleges et lycees du Togo
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#2563eb",
              color: "#fff",
              borderRadius: 999,
              padding: "14px 28px",
              fontSize: 28,
              fontWeight: 600,
            }}
          >
            1 000 FCFA / eleve / an
          </div>
          <span style={{ fontSize: 26, color: "#535353" }}>Enseignants et personnel illimites</span>
        </div>
      </div>
    ),
    size,
  );
}
