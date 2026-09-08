import { ImageResponse } from "next/og";

import { getPortfolioContent, type Locale } from "@/data/portfolio";

export const alt = "Guilherme Oliveira — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const content = getPortfolioContent(locale === "en" ? "en" : "pt");

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f3f3ef",
          color: "#11110f",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, letterSpacing: 2 }}>
          GO.
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 68, fontWeight: 700 }}>
            {content.hero.heading}
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#454541" }}>
            {content.hero.description}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26 }}>
          Guilherme Oliveira · Full Stack Developer
        </div>
      </div>
    ),
    size,
  );
}
