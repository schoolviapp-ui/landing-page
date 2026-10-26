import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CountryPageTemplate } from "@/components/landing/country-page";
import { getCountryBySlug } from "@/content/countries";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const country = getCountryBySlug("cote-divoire");

export const metadata: Metadata = {
  title: country ? country.seoTitle : "Logiciel de gestion scolaire Côte d'Ivoire",
  description: country ? country.seoDescription : "",
  keywords: country ? country.metaKeywords : [],
  alternates: {
    canonical: "/cote-divoire",
    languages: {
      "fr-CI": "/cote-divoire",
      "fr-TG": "/togo",
      "fr-BJ": "/benin",
      "fr-SN": "/senegal",
      "fr": "/",
    },
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/cote-divoire`,
    title: country?.seoTitle,
    description: country?.seoDescription,
    siteName: SITE_NAME,
    locale: "fr_CI",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "Schoolvi Côte d'Ivoire - Logiciel de gestion scolaire" }],
  },
  twitter: {
    card: "summary_large_image",
    title: country?.seoTitle,
    description: country?.seoDescription,
  },
  other: {
    "geo.region": "CI",
    "geo.placename": "Abidjan, Côte d'Ivoire",
  },
};

export default function CoteDIvoirePage() {
  if (!country) notFound();
  return <CountryPageTemplate country={country} />;
}
