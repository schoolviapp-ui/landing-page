import type { Metadata } from "next";
import { Jost, Urbanist } from "next/font/google";
import "./globals.css";

import { SITE_NAME, SITE_URL } from "@/lib/site";

const jost = Jost({
  variable: "--font-sans",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const TITLE = "Schoolvi - Logiciel de gestion scolaire au Togo";
const DESCRIPTION =
  "Schoolvi aide les écoles, collèges et lycées du Togo à récupérer leurs frais de scolarité, à prévenir les parents dès la première absence et à produire les bulletins sans recopier les notes, avec un assistant IA. Gratuit et illimité pour l'établissement ; 1 000 FCFA par élève et par an payés par les parents.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "logiciel de gestion scolaire Togo",
    "gestion scolaire Lome",
    "logiciel ecole Togo",
    "gestion des eleves",
    "frais de scolarite FCFA",
    "bulletins scolaires en ligne",
    "emploi du temps scolaire",
    "presences eleves",
    "application ecole college lycee Togo",
    "Schoolvi",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "education",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    locale: "fr_TG",
    alternateLocale: ["fr_FR"],
    countryName: "Togo",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  other: {
    "geo.region": "TG",
    "geo.placename": "Lome",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${jost.variable} ${urbanist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col text-foreground">{children}</body>
    </html>
  );
}
