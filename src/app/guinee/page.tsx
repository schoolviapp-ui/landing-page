import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CountryPageTemplate } from "@/components/landing/country-page";
import { getCountryBySlug } from "@/content/countries";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const country = getCountryBySlug("guinee");

export const metadata: Metadata = {
  title: country ? country.seoTitle : "Logiciel de gestion scolaire Guinée",
  description: country ? country.seoDescription : "",
  keywords: country ? country.metaKeywords : [],
  alternates: {
    canonical: "/guinee",
    languages: {
      "fr-GN": "/guinee",
      "fr-TG": "/togo",
      "fr-BJ": "/benin",
      "fr-CI": "/cote-divoire",
      "fr-SN": "/senegal",
      "fr-BF": "/burkina-faso",
      "fr-ML": "/mali",
      "fr-NE": "/niger",
      "fr-CM": "/cameroun",
      "fr": "/",
    },
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/guinee`,
    title: country?.seoTitle,
    description: country?.seoDescription,
    siteName: SITE_NAME,
    locale: "fr_GN",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "Schoolvi Guinée - Logiciel de gestion scolaire" }],
  },
  twitter: {
    card: "summary_large_image",
    title: country?.seoTitle,
    description: country?.seoDescription,
  },
  other: {
    "geo.region": "GN",
    "geo.placename": "Conakry, Guinée",
  },
};

export default function GuineePage() {
  if (!country) notFound();
  return <CountryPageTemplate country={country} />;
}
