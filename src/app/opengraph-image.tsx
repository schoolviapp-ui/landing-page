import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Schoolvi - Logiciel de gestion scolaire au Togo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
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
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#2563eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
              <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
              <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
            </svg>
          </div>
          <span style={{ fontSize: 40, fontWeight: 700 }}>Schoolvi</span>
        </div>

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
