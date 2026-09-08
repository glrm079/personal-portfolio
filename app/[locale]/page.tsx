import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Portfolio } from "@/components/portfolio/portfolio";
import { getPortfolioContent, type Locale } from "@/data/portfolio";
import {
  getPortfolioMetadata,
  getPortfolioPersonJsonLd,
} from "@/lib/portfolio-metadata";

const locales: Locale[] = ["pt", "en"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  return getPortfolioMetadata(locale as Locale);
}

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  const typedLocale = locale as Locale;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPortfolioPersonJsonLd()),
        }}
      />
      <Portfolio
        locale={typedLocale}
        content={getPortfolioContent(typedLocale)}
      />
    </>
  );
}
