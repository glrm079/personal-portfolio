import { describe, expect, it } from "vitest";

import robots from "../app/robots";
import sitemap from "../app/sitemap";

describe("search engine routes", () => {
  it("indexes the two localized portfolio pages and publishes their sitemap", () => {
    expect(sitemap()).toEqual([
      { url: "https://www.exploreguilherme.space/pt" },
      { url: "https://www.exploreguilherme.space/en" },
    ]);
    expect(robots()).toMatchObject({
      rules: { userAgent: "*", allow: "/" },
      sitemap: "https://www.exploreguilherme.space/sitemap.xml",
    });
  });
});
