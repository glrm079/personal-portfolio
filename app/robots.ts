import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/portfolio-metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
