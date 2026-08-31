"use client";

import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  return (
    <button
      className="size-8 cursor-pointer rounded-full border border-rule bg-transparent font-mono text-[.68rem] text-inherit focus-visible:outline-2 focus-visible:outline-offset-4"
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <span aria-hidden="true">{isDark ? "☼" : "◐"}</span>
    </button>
  );
}
