import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CountryPageTemplate } from "@/components/landing/country-page";
import { getCountryBySlug } from "@/content/countries";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const country = getCountryBySlug("mali");

export const metadata: Metadata = {
  title: country ? country.seoTitle : "Logiciel de gestion scolaire Mali",
  description: country ? country.seoDescription : "",
  keywords: country ? country.metaKeywords : [],
  alternates: {
    canonical: "/mali",
    languages: {
      "fr-ML": "/mali",
      "fr-TG": "/togo",
      "fr-BJ": "/benin",
      "fr-CI": "/cote-divoire",
      "fr-SN": "/senegal",
      "fr-BF": "/burkina-faso",
      "fr-GN": "/guinee",
      "fr-NE": "/niger",
      "fr-CM": "/cameroun",
      "fr": "/",
    },
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/mali`,
    title: country?.seoTitle,
    description: country?.seoDescription,
    siteName: SITE_NAME,
    locale: "fr_ML",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "Schoolvi Mali - Logiciel de gestion scolaire" }],
  },
  twitter: {
    card: "summary_large_image",
    title: country?.seoTitle,
    description: country?.seoDescription,
  },
  other: {
    "geo.region": "ML",
    "geo.placename": "Bamako, Mali",
  },
};

export default function MaliPage() {
  if (!country) notFound();
  return <CountryPageTemplate country={country} />;
}
