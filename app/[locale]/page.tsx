import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Portfolio } from "@/components/portfolio/portfolio";
import { getPortfolioContent, type Locale } from "@/data/portfolio";

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
  const isEnglish = locale === "en";
  const title = isEnglish ? "Fullstack developer" : "Desenvolvedor Fullstack";
  const description = isEnglish
    ? "Selected work and digital experiences by Guilherme Oliveira."
    : "Projetos e experiências digitais de Guilherme Oliveira.";

  return {
    title,
    description,
    alternates: { languages: { "pt-BR": "/pt", en: "/en" } },
    openGraph: {
      title: `Guilherme Oliveira — ${title}`,
      description,
      type: "website",
      locale: isEnglish ? "en_US" : "pt_BR",
    },
  };
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
    <Portfolio
      locale={typedLocale}
      content={getPortfolioContent(typedLocale)}
    />
  );
}
