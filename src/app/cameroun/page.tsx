import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CountryPageTemplate } from "@/components/landing/country-page";
import { getCountryBySlug } from "@/content/countries";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const country = getCountryBySlug("cameroun");

export const metadata: Metadata = {
  title: country ? country.seoTitle : "Logiciel de gestion scolaire Cameroun",
  description: country ? country.seoDescription : "",
  keywords: country ? country.metaKeywords : [],
  alternates: {
    canonical: "/cameroun",
    languages: {
      "fr-CM": "/cameroun",
      "fr-TG": "/togo",
      "fr-BJ": "/benin",
      "fr-CI": "/cote-divoire",
      "fr-SN": "/senegal",
      "fr-BF": "/burkina-faso",
      "fr-ML": "/mali",
      "fr-GN": "/guinee",
      "fr-NE": "/niger",
      "fr": "/",
    },
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/cameroun`,
    title: country?.seoTitle,
    description: country?.seoDescription,
    siteName: SITE_NAME,
    locale: "fr_CM",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "Schoolvi Cameroun - Logiciel de gestion scolaire" }],
  },
  twitter: {
    card: "summary_large_image",
    title: country?.seoTitle,
    description: country?.seoDescription,
  },
  other: {
    "geo.region": "CM",
    "geo.placename": "Douala, Yaoundé, Cameroun",
  },
};

export default function CamerounPage() {
  if (!country) notFound();
  return <CountryPageTemplate country={country} />;
}
