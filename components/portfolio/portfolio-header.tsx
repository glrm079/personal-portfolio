"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

import type { Locale, PortfolioContent } from "@/data/portfolio";
import { ThemeToggle } from "./theme-toggle";

type PortfolioHeaderProps = Pick<PortfolioContent, "navigation"> & {
  locale: Locale;
};
const sectionHrefs = [
  "#about",
  "#experience",
  "#work",
  "#services",
  "#contact",
] as const;

export function PortfolioHeader({ locale, navigation }: PortfolioHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const otherLocale: Locale = locale === "pt" ? "en" : "pt";
  const otherLanguage = locale === "pt" ? "EN" : "PT";
  const links = sectionHrefs.map(
    (href) =>
      [href, navigation[href.slice(1) as keyof typeof navigation]] as const,
  );

  useEffect(() => {
    const closeMenuOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", closeMenuOnEscape);
    return () => window.removeEventListener("keydown", closeMenuOnEscape);
  }, [isMenuOpen]);

  useEffect(() => {
    const updateHeaderState = () => setHasScrolled(window.scrollY > 12);
    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });
    return () => window.removeEventListener("scroll", updateHeaderState);
  }, []);

  useEffect(() => {
    const clearActiveInHero = () => {
      if (window.scrollY < window.innerHeight * 0.55) setActiveHref(null);
    };
    clearActiveInHero();
    window.addEventListener("scroll", clearActiveInHero, { passive: true });
    return () => window.removeEventListener("scroll", clearActiveInHero);
  }, []);

  useEffect(() => {
    const sections = sectionHrefs
      .map((href) => document.querySelector(href))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveHref(`#${visible.target.id}`);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.15, 0.35, 0.6] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = (href?: string) => {
    setIsMenuOpen(false);
    if (href) setActiveHref(href);
  };
  return (
    <header
      className={`fixed top-4 right-[4.5vw] left-[4.5vw] z-10 flex h-12 items-center justify-between rounded-full px-5 text-ink transition-[background,box-shadow,backdrop-filter] duration-100 max-md:top-3 max-md:right-5 max-md:left-5 max-md:h-11 max-md:px-3.5 ${hasScrolled ? "bg-transparent shadow-none backdrop-blur-[3px] backdrop-saturate-[1.15]" : "bg-transparent shadow-none backdrop-filter-none"}`}
    >
      <Link
        href={`/${locale}`}
        className="font-mono text-xl font-medium tracking-[-.12em]"
        aria-label="Guilherme Oliveira home"
      >
        GO<span className="text-[1.5em]">.</span>
      </Link>
      <nav
        id="primary-navigation"
        className={`font-mono text-[.68rem] font-medium uppercase tracking-[.08em] max-md:fixed max-md:top-[calc(.75rem+44px)] max-md:right-5 max-md:left-5 max-md:z-9 ${isMenuOpen ? "max-md:flex max-md:flex-col max-md:gap-0 max-md:rounded-b-[22px] max-md:bg-page/92 max-md:px-4 max-md:py-2 max-md:shadow-[0_16px_28px_rgba(0,0,0,.12)] max-md:backdrop-blur-[16px] max-md:backdrop-saturate-[1.15]" : "hidden md:flex md:gap-8"}`}
        aria-label="Primary navigation"
      >
        {links.map(([href, label]) => (
          <a
            key={href}
            href={href}
            onClick={() => closeMenu(href)}
            aria-current={activeHref === href ? "page" : undefined}
            className={`relative opacity-75 transition-opacity hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-4 max-md:border-b max-md:border-rule max-md:py-4 max-md:last:border-0 ${activeHref === href ? "opacity-100" : ""}`}
          >
            {label}
            {activeHref === href && (
              <motion.span
                layoutId="active-nav-indicator"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  layout: { duration: 0.28, ease: "easeOut" },
                  scaleX: { duration: 0.32, ease: "easeOut" },
                }}
                className="absolute right-0 -bottom-2 left-0 hidden h-px origin-left bg-current md:block"
              />
            )}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-4 max-md:gap-2.5">
        <button
          ref={menuButtonRef}
          className="hidden size-8 cursor-pointer place-content-center gap-[5px] rounded-full border border-rule bg-transparent text-inherit max-md:grid"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={
            isMenuOpen
              ? locale === "pt"
                ? "Fechar menu de navegação"
                : "Close navigation menu"
              : locale === "pt"
                ? "Abrir menu de navegação"
                : "Open navigation menu"
          }
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span
            className={`block h-px w-[15px] bg-current transition-transform ${isMenuOpen ? "translate-y-[3px] rotate-45" : ""}`}
            aria-hidden="true"
          />
          <span
            className={`block h-px w-[15px] bg-current transition-transform ${isMenuOpen ? "-translate-y-[3px] -rotate-45" : ""}`}
            aria-hidden="true"
          />
        </button>
        <Link
          href={`/${otherLocale}`}
          className="font-mono text-[.68rem] font-medium opacity-75 transition-opacity hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-4"
          lang={otherLocale}
        >
          {otherLanguage}
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
