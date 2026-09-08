import { describe, expect, it } from "vitest";

import { getPortfolioContent } from "@/data/portfolio";

describe("getPortfolioContent", () => {
  it("returns Guilherme Oliveira and verified contact details in Portuguese", () => {
    const content = getPortfolioContent("pt");

    expect(content.name).toBe("Guilherme Oliveira");
    expect(content.projects).toHaveLength(1);
    expect(content.contact.email).toBe("glrmcontato@gmail.com");
  });

  it("returns translated hero copy in English", () => {
    const content = getPortfolioContent("en");

    expect(content.hero.eyebrow).toBe("Full Stack Developer");
    expect(content.projects[0].title).toBe("On building");
  });

  it("keeps the current English experience entry as a complete translation", () => {
    const content = getPortfolioContent("en");

    expect(content.experience.items[0].description).toContain(
      "React, Next.js, TypeScript and Mantine",
    );
    expect(content.experience.items[0].description).toContain(
      "infrastructure as code",
    );
    expect(content.experience.items[0].description).toContain(
      "used across Europe",
    );
  });

  it("lists AWS CDK with the serverless backend stack in both locales", () => {
    expect(getPortfolioContent("pt").services.items[1].description).toContain(
      "AWS CDK",
    );
    expect(getPortfolioContent("en").services.items[1].description).toContain(
      "AWS CDK",
    );
  });
});
