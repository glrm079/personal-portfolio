import { describe, expect, it } from "vitest";

import { getDocumentLanguage } from "@/lib/document-language";

describe("getDocumentLanguage", () => {
  it("uses the route locale for the HTML language", () => {
    expect(getDocumentLanguage("/pt")).toBe("pt-BR");
    expect(getDocumentLanguage("/en")).toBe("en");
  });
});
