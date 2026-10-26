import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CountryPageTemplate } from "@/components/landing/country-page";
import { getCountryBySlug } from "@/content/countries";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const country = getCountryBySlug("burkina-faso");

export const metadata: Metadata = {
  title: country ? country.seoTitle : "Logiciel de gestion scolaire Burkina Faso",
  description: country ? country.seoDescription : "",
  keywords: country ? country.metaKeywords : [],
  alternates: {
    canonical: "/burkina-faso",
    languages: {
      "fr-BF": "/burkina-faso",
      "fr-TG": "/togo",
      "fr-BJ": "/benin",
      "fr-CI": "/cote-divoire",
      "fr-SN": "/senegal",
      "fr-ML": "/mali",
      "fr-GN": "/guinee",
      "fr-NE": "/niger",
      "fr-CM": "/cameroun",
      "fr": "/",
    },
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/burkina-faso`,
    title: country?.seoTitle,
    description: country?.seoDescription,
    siteName: SITE_NAME,
    locale: "fr_BF",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "Schoolvi Burkina Faso - Logiciel de gestion scolaire" }],
  },
  twitter: {
    card: "summary_large_image",
    title: country?.seoTitle,
    description: country?.seoDescription,
  },
  other: {
    "geo.region": "BF",
    "geo.placename": "Ouagadougou, Burkina Faso",
  },
};

export default function BurkinaFasoPage() {
  if (!country) notFound();
  return <CountryPageTemplate country={country} />;
}
