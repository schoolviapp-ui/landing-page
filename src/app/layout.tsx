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

const TITLE = "Schoolvi · Logiciel de gestion d'établissement scolaire | Togo, Bénin, Côte d'Ivoire";
const DESCRIPTION =
  "Schoolvi est le logiciel de gestion d'établissement scolaire de référence en Afrique de l'Ouest (Togo, Bénin, Côte d'Ivoire, Sénégal...). Gestion des élèves, bulletins automatiques sans recopie de notes, encaissement des frais de scolarité (T-Money, Flooz, MTN, Wave), relances WhatsApp et assistant IA. 100% gratuit pour l'école.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    // Requêtes principales
    "logiciel de gestion d'établissement scolaire",
    "logiciel de gestion scolaire",
    "logiciel de gestion d'école",
    "logiciel gestion scolaire Afrique",
    "logiciel gestion scolaire Afrique de l'Ouest",
    "logiciel école primaire collège lycée",
    "Schoolvi",
    "Schoolvi Afrique",

    // Togo
    "logiciel de gestion scolaire Togo",
    "logiciel de gestion d'établissement scolaire Togo",
    "logiciel école Togo",
    "logiciel gestion scolaire Lomé",
    "bulletins scolaires Togo MEPST",
    "frais de scolarité T-Money Flooz",
    "Schoolvi Togo",

    // Bénin
    "logiciel de gestion scolaire Bénin",
    "logiciel de gestion d'établissement scolaire Bénin",
    "logiciel école Bénin",
    "logiciel école Cotonou",
    "gestion scolaire Porto-Novo",
    "bulletins scolaires Bénin MESTFP",
    "frais de scolarité MTN MoMo Bénin",
    "Schoolvi Bénin",

    // Côte d'Ivoire
    "logiciel de gestion scolaire Côte d'Ivoire",
    "logiciel de gestion d'établissement scolaire Côte d'Ivoire",
    "logiciel école Abidjan",
    "bulletins scolaires MENA Côte d'Ivoire",
    "frais de scolarité Wave Orange Money Côte d'Ivoire",
    "gestion des élèves DREN Abidjan",
    "Schoolvi Côte d'Ivoire",

    // Sénégal
    "logiciel de gestion scolaire Sénégal",
    "logiciel école Dakar",
    "bulletins scolaires Sénégal MEN",
    "frais de scolarité Wave Orange Money Sénégal",
    "Schoolvi Sénégal",

    // Burkina Faso
    "logiciel de gestion scolaire Burkina Faso",
    "logiciel de gestion d'établissement scolaire Burkina Faso",
    "logiciel école Ouagadougou",
    "bulletins scolaires MENAPLN Burkina",
    "frais de scolarité Orange Money Moov Burkina",
    "Schoolvi Burkina Faso",

    // Mali
    "logiciel de gestion scolaire Mali",
    "logiciel de gestion d'établissement scolaire Mali",
    "logiciel école Bamako",
    "bulletins scolaires Mali MEN",
    "frais de scolarité Orange Money Mali",
    "Schoolvi Mali",

    // Guinée
    "logiciel de gestion scolaire Guinée",
    "logiciel de gestion d'établissement scolaire Guinée",
    "logiciel école Conakry",
    "bulletins scolaires Guinée MEPU-A",
    "frais de scolarité Orange Money Guinée",
    "Schoolvi Guinée",

    // Niger
    "logiciel de gestion scolaire Niger",
    "logiciel de gestion d'établissement scolaire Niger",
    "logiciel école Niamey",
    "bulletins scolaires Niger MENA",
    "frais de scolarité Airtel Money Niger",
    "Schoolvi Niger",

    // Cameroun
    "logiciel de gestion scolaire Cameroun",
    "logiciel de gestion d'établissement scolaire Cameroun",
    "logiciel école Douala",
    "logiciel collège lycée Yaoundé",
    "bulletins scolaires MINESEC Cameroun",
    "Schoolvi Cameroun",

    // Fonctionnalités clés
    "calcul automatique moyennes et rangs",
    "bulletins scolaires sans recopier les notes",
    "recouvrement frais de scolarité Mobile Money",
    "relance parents WhatsApp absences et impayés",
    "appel en classe smartphone enseignant",
    "gestion des élèves et inscriptions FCFA",
    "assistant IA gestion scolaire",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "education",
  alternates: {
    canonical: "/",
    languages: {
      "fr": "/",
      "fr-TG": "/togo",
      "fr-BJ": "/benin",
      "fr-CI": "/cote-divoire",
      "fr-SN": "/senegal",
      "fr-BF": "/burkina-faso",
      "fr-ML": "/mali",
      "fr-GN": "/guinee",
      "fr-NE": "/niger",
      "fr-CM": "/cameroun",
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    locale: "fr_FR",
    alternateLocale: ["fr_TG", "fr_BJ", "fr_CI", "fr_SN", "fr_BF", "fr_ML", "fr_GN", "fr_NE", "fr_CM"],
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Schoolvi - Logiciel de gestion d'établissement scolaire en Afrique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/opengraph-image`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": "TG, BJ, CI, SN, BF, ML, GN, NE, CM",
    "geo.placename": "Lomé, Cotonou, Abidjan, Dakar, Ouagadougou, Bamako, Conakry, Niamey, Douala, Yaoundé",
    "target-audience": "Établissements scolaires, Directeurs d'écoles, Collèges, Lycées, Fondateurs",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${jost.variable} ${urbanist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col text-foreground">{children}</body>
    </html>
  );
}
