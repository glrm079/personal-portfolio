import { describe, expect, it } from "vitest";

import {
  getPortfolioMetadata,
  getPortfolioPersonJsonLd,
} from "@/lib/portfolio-metadata";

describe("portfolio metadata", () => {
  it("publishes canonical Portuguese metadata with reciprocal language alternatives", () => {
    const metadata = getPortfolioMetadata("pt");

    expect(metadata.alternates?.canonical).toBe("/pt");
    expect(metadata.alternates?.languages).toMatchObject({
      "pt-BR": "/pt",
      en: "/en",
      "x-default": "/pt",
    });
    expect(metadata.openGraph?.locale).toBe("pt_BR");
    expect(metadata.openGraph?.url).toBe("/pt");
  });

  it("publishes English metadata and a complete public profile", () => {
    const metadata = getPortfolioMetadata("en");
    const person = getPortfolioPersonJsonLd();

    expect(metadata.alternates?.canonical).toBe("/en");
    expect(metadata.openGraph?.locale).toBe("en_US");
    expect(metadata.twitter?.card).toBe("summary_large_image");
    expect(person).toMatchObject({
      "@type": "ProfilePage",
      mainEntity: {
        "@type": "Person",
        url: "https://www.exploreguilherme.space",
        image:
          "https://www.exploreguilherme.space/guilherme-oliveira-portrait.jpg",
        sameAs: [
          "https://github.com/glrm079",
          "https://www.linkedin.com/in/guilherme-oliveira-96583023a/",
        ],
      },
    });
  });
});
