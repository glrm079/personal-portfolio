import type { Metadata } from "next";

import type { Locale } from "@/data/portfolio";

export const siteUrl = "https://www.exploreguilherme.space";

const localizedMetadata: Record<
  Locale,
  { title: string; description: string; openGraphLocale: string }
> = {
  pt: {
    title: "Desenvolvedor Full Stack",
    description:
      "Portfólio de Guilherme Oliveira, desenvolvedor Full Stack especializado em React, Next.js, Node.js e soluções serverless.",
    openGraphLocale: "pt_BR",
  },
  en: {
    title: "Full Stack Developer",
    description:
      "Portfolio of Guilherme Oliveira, a Full Stack Developer specialized in React, Next.js, Node.js and serverless solutions.",
    openGraphLocale: "en_US",
  },
};

export function getPortfolioMetadata(locale: Locale): Metadata {
  const content = localizedMetadata[locale];
  const path = `/${locale}`;
  const otherLocale = locale === "pt" ? "en_US" : "pt_BR";

  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: path,
      languages: { "pt-BR": "/pt", en: "/en", "x-default": "/pt" },
    },
    openGraph: {
      title: `Guilherme Oliveira — ${content.title}`,
      description: content.description,
      url: path,
      siteName: "Guilherme Oliveira",
      type: "website",
      locale: content.openGraphLocale,
      alternateLocale: otherLocale,
      images: [{ url: `${path}/opengraph-image`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `Guilherme Oliveira — ${content.title}`,
      description: content.description,
      images: [`${path}/opengraph-image`],
    },
  };
}

export function getPortfolioPersonJsonLd() {
  const person = {
    "@id": `${siteUrl}/#guilherme-oliveira`,
    "@type": "Person",
    name: "Guilherme Oliveira",
    description:
      "Full Stack Developer specialized in React, Next.js, Node.js, AWS Serverless and AWS CDK.",
    jobTitle: "Full Stack Developer",
    url: siteUrl,
    image: `${siteUrl}/guilherme-oliveira-portrait.jpg`,
    email: "mailto:glrmcontato@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Paulo",
      addressCountry: "BR",
    },
    sameAs: [
      "https://github.com/glrm079",
      "https://www.linkedin.com/in/guilherme-oliveira-96583023a/",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Serverless architecture",
      "AWS",
      "AWS CDK",
    ],
  };

  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: siteUrl,
    mainEntity: person,
  };
}
