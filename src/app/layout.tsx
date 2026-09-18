import type { Metadata } from "next";
import { Jost, Urbanist } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-sans",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Schoolvi - Gestion scolaire multi-etablissements",
    template: "%s | Schoolvi",
  },
  description:
    "Schoolvi centralise eleves, classes, presences, notes, emploi du temps et frais de scolarite pour un ou plusieurs etablissements. 1000 FCFA par eleve et par an.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3001"),
  openGraph: {
    title: "Schoolvi - Gestion scolaire multi-etablissements",
    description:
      "La plateforme qui simplifie la gestion quotidienne des ecoles, colleges et lycees.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${jost.variable} ${urbanist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col text-foreground">{children}</body>
    </html>
  );
}
