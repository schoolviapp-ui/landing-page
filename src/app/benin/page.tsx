import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CountryPageTemplate } from "@/components/landing/country-page";
import { getCountryBySlug } from "@/content/countries";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const country = getCountryBySlug("benin");

export const metadata: Metadata = {
  title: country ? country.seoTitle : "Logiciel de gestion scolaire Bénin",
  description: country ? country.seoDescription : "",
  keywords: country ? country.metaKeywords : [],
  alternates: {
    canonical: "/benin",
    languages: {
      "fr-BJ": "/benin",
      "fr-TG": "/togo",
      "fr-CI": "/cote-divoire",
      "fr-SN": "/senegal",
      "fr": "/",
    },
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/benin`,
    title: country?.seoTitle,
    description: country?.seoDescription,
    siteName: SITE_NAME,
    locale: "fr_BJ",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "Schoolvi Bénin - Logiciel de gestion scolaire" }],
  },
  twitter: {
    card: "summary_large_image",
    title: country?.seoTitle,
    description: country?.seoDescription,
  },
  other: {
    "geo.region": "BJ",
    "geo.placename": "Cotonou, Bénin",
  },
};

export default function BeninPage() {
  if (!country) notFound();
  return <CountryPageTemplate country={country} />;
}
