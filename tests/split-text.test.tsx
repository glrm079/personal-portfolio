import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { SplitText } from "../components/portfolio/split-text";

describe("SplitText", () => {
  it("keeps a visible gap between adjacent animated words", () => {
    const markup = renderToStaticMarkup(
      <SplitText
        text="Aplicações modernas, responsivas e escaláveis."
        reducedMotion
      />,
    );

    expect(markup).toMatch(/mr-\[0\.22em\]"[^>]*>responsivas<\/span><span/);
  });
});
