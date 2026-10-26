import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CountryPageTemplate } from "@/components/landing/country-page";
import { getCountryBySlug } from "@/content/countries";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const country = getCountryBySlug("senegal");

export const metadata: Metadata = {
  title: country ? country.seoTitle : "Logiciel de gestion scolaire Sénégal",
  description: country ? country.seoDescription : "",
  keywords: country ? country.metaKeywords : [],
  alternates: {
    canonical: "/senegal",
    languages: {
      "fr-SN": "/senegal",
      "fr-TG": "/togo",
      "fr-BJ": "/benin",
      "fr-CI": "/cote-divoire",
      "fr": "/",
    },
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/senegal`,
    title: country?.seoTitle,
    description: country?.seoDescription,
    siteName: SITE_NAME,
    locale: "fr_SN",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "Schoolvi Sénégal - Logiciel de gestion scolaire" }],
  },
  twitter: {
    card: "summary_large_image",
    title: country?.seoTitle,
    description: country?.seoDescription,
  },
  other: {
    "geo.region": "SN",
    "geo.placename": "Dakar, Sénégal",
  },
};

export default function SenegalPage() {
  if (!country) notFound();
  return <CountryPageTemplate country={country} />;
}
