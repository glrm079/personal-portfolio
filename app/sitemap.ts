import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/portfolio-metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["pt", "en"].map((locale) => ({ url: `${siteUrl}/${locale}` }));
}
