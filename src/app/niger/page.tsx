import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CountryPageTemplate } from "@/components/landing/country-page";
import { getCountryBySlug } from "@/content/countries";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const country = getCountryBySlug("niger");

export const metadata: Metadata = {
  title: country ? country.seoTitle : "Logiciel de gestion scolaire Niger",
  description: country ? country.seoDescription : "",
  keywords: country ? country.metaKeywords : [],
  alternates: {
    canonical: "/niger",
    languages: {
      "fr-NE": "/niger",
      "fr-TG": "/togo",
      "fr-BJ": "/benin",
      "fr-CI": "/cote-divoire",
      "fr-SN": "/senegal",
      "fr-BF": "/burkina-faso",
      "fr-ML": "/mali",
      "fr-GN": "/guinee",
      "fr-CM": "/cameroun",
      "fr": "/",
    },
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/niger`,
    title: country?.seoTitle,
    description: country?.seoDescription,
    siteName: SITE_NAME,
    locale: "fr_NE",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "Schoolvi Niger - Logiciel de gestion scolaire" }],
  },
  twitter: {
    card: "summary_large_image",
    title: country?.seoTitle,
    description: country?.seoDescription,
  },
  other: {
    "geo.region": "NE",
    "geo.placename": "Niamey, Niger",
  },
};

export default function NigerPage() {
  if (!country) notFound();
  return <CountryPageTemplate country={country} />;
}
