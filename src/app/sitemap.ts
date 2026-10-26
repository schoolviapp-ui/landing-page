import type { MetadataRoute } from "next";

import { COUNTRIES } from "@/content/countries";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const LAST_MODIFIED = new Date().toISOString().split("T")[0];

export default function sitemap(): MetadataRoute.Sitemap {
  const countryUrls: MetadataRoute.Sitemap = COUNTRIES.map((country) => ({
    url: `${SITE_URL}/${country.slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "daily",
      priority: 1.0,
    },
    ...countryUrls,
    {
      url: `${SITE_URL}/cgu`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/confidentialite`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
