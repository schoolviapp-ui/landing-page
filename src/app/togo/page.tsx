import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CountryPageTemplate } from "@/components/landing/country-page";
import { getCountryBySlug } from "@/content/countries";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const country = getCountryBySlug("togo");

export const metadata: Metadata = {
  title: country ? country.seoTitle : "Logiciel de gestion scolaire Togo",
  description: country ? country.seoDescription : "",
  keywords: country ? country.metaKeywords : [],
  alternates: {
    canonical: "/togo",
    languages: {
      "fr-TG": "/togo",
      "fr-BJ": "/benin",
      "fr-CI": "/cote-divoire",
      "fr-SN": "/senegal",
      "fr": "/",
    },
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/togo`,
    title: country?.seoTitle,
    description: country?.seoDescription,
    siteName: SITE_NAME,
    locale: "fr_TG",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "Schoolvi Togo - Logiciel de gestion scolaire" }],
  },
  twitter: {
    card: "summary_large_image",
    title: country?.seoTitle,
    description: country?.seoDescription,
  },
  other: {
    "geo.region": "TG",
    "geo.placename": "Lomé, Togo",
  },
};

export default function TogoPage() {
  if (!country) notFound();
  return <CountryPageTemplate country={country} />;
}
