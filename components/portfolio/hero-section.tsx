"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

import type { PortfolioContent } from "@/data/portfolio";
import { getHeroDescriptionMotion } from "@/lib/animation";
import { MagneticButton } from "./magnetic-button";
import { SplitText } from "./split-text";

type HeroSectionProps = Pick<PortfolioContent, "hero" | "name">;

export function HeroSection({ hero, name }: HeroSectionProps) {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const heroArtY = useTransform(scrollYProgress, [0, 0.25], [0, -36]);
  const heroDescription = getHeroDescriptionMotion(Boolean(reducedMotion));

  return (
    <section
      className="relative isolate grid min-h-[calc(100svh-64px)] grid-cols-[minmax(0,1.15fr)_minmax(250px,.85fr)] items-center gap-[6vw] overflow-visible px-0 pt-[clamp(7rem,14vw,14rem)] pb-16 [clip-path:inset(0_-100vw)] max-md:min-h-0 max-md:grid-cols-1 max-md:gap-16 max-md:pt-28"
      aria-labelledby="hero-heading"
    >
      <motion.div
        className="relative z-1"
        initial={reducedMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-6 flex items-center gap-2.5 font-mono text-[.67rem] font-medium uppercase tracking-[.1em]">
          <span className="size-[7px] animate-[pulse_2s_infinite] rounded-full bg-ink" />
          {hero.eyebrow}
        </p>
        <SplitText
          id="hero-heading"
          text={hero.heading}
          reducedMotion={Boolean(reducedMotion)}
        />
        <motion.p
          className="my-8 max-w-[480px] text-[clamp(.9rem,1.15vw,1.1rem)] leading-7 text-muted"
          {...heroDescription}
        >
          {hero.description}
        </motion.p>
        <div className="flex flex-wrap gap-3">
          <MagneticButton
            className="inline-flex min-h-12 items-center gap-11 border border-ink bg-ink py-0 pr-4 pl-[1.15rem] font-mono text-[.67rem] font-medium uppercase tracking-[.07em] text-page"
            href="#experience"
            reducedMotion={Boolean(reducedMotion)}
          >
            {hero.primaryAction}
            <span className="text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↘
            </span>
          </MagneticButton>
          <MagneticButton
            className="inline-flex min-h-12 items-center gap-11 border border-ink py-0 pr-4 pl-[1.15rem] font-mono text-[.67rem] font-medium uppercase tracking-[.07em] transition-colors hover:bg-ink hover:text-page"
            href="#contact"
            reducedMotion={Boolean(reducedMotion)}
          >
            {hero.secondaryAction}
            <span className="text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </MagneticButton>
        </div>
      </motion.div>
      <motion.div
        className="relative z-1 w-[min(31vw,410px)] justify-self-end max-md:w-[min(68vw,340px)]"
        initial={reducedMotion ? false : { opacity: 0, scale: 0.96 }}
        animate={reducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        style={reducedMotion ? undefined : { y: heroArtY }}
      >
        <div className="relative aspect-[.84] overflow-hidden border border-ink bg-paper">
          <Image
            src="/guilherme-oliveira-portrait-straightened.png"
            alt="Guilherme Oliveira"
            width={1448}
            height={1080}
            priority
            sizes="(max-width: 760px) 68vw, min(31vw, 410px)"
            className="size-full object-cover object-[42%_28%] grayscale contrast-105"
          />
        </div>
        <p className="mt-3 font-mono text-[.62rem] font-medium uppercase tracking-[.08em]">
          {name}
          <br />— 2026
        </p>
      </motion.div>
    </section>
  );
}
