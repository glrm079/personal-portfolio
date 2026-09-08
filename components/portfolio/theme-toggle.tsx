"use client";

import { IconMoon, IconSun } from "@tabler/icons-react";

import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  return (
    <button
      className="inline-grid size-8 cursor-pointer place-items-center rounded-full border border-rule bg-transparent text-inherit focus-visible:outline-2 focus-visible:outline-offset-4 max-md:size-9"
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? (
        <IconSun aria-hidden="true" size={16} stroke={1.75} className="max-md:size-[18px]" />
      ) : (
        <IconMoon aria-hidden="true" size={16} stroke={1.75} className="max-md:size-[18px]" />
      )}
    </button>
  );
}
