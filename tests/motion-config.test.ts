import { describe, expect, it } from "vitest";

import {
  getHydrationSafeReducedMotion,
  getMotionConfigMode,
} from "@/lib/motion-config";

describe("getMotionConfigMode", () => {
  it("keeps the server and initial client render motion-compatible", () => {
    expect(getMotionConfigMode(false)).toBe("never");
    expect(getMotionConfigMode(true)).toBe("user");
  });
});

describe("getHydrationSafeReducedMotion", () => {
  it("defers a user motion preference until after hydration", () => {
    expect(getHydrationSafeReducedMotion(false, true)).toBe(false);
    expect(getHydrationSafeReducedMotion(true, true)).toBe(true);
  });
});
