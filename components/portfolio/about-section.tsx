"use client";

import { motion, useReducedMotion } from "motion/react";

import type { PortfolioContent } from "@/data/portfolio";
import { getBlurRevealMotion } from "@/lib/animation";
import { SectionHeading } from "./section-heading";

type AboutSectionProps = Pick<PortfolioContent, "about">;

export function AboutSection({ about }: AboutSectionProps) {
  const reducedMotion = useReducedMotion();
  return (
    <section
      className="grid grid-cols-[.75fr_1.25fr] gap-[7vw] border-t border-rule py-[clamp(6rem,14vw,13rem)] [scroll-margin-top:80px] max-md:grid-cols-1 max-md:gap-12 max-md:py-[6.5rem]"
      id="about"
    >
      <motion.div {...getBlurRevealMotion(Boolean(reducedMotion))}>
        <SectionHeading label={about.label} title={about.title} />
      </motion.div>
      <motion.div {...getBlurRevealMotion(Boolean(reducedMotion), 0.12)}>
        <p className="max-w-[600px] text-[clamp(.96rem,1.2vw,1.14rem)] leading-7 text-ink">
          {about.body}
        </p>
        <div className="mt-12 grid grid-cols-3 border-t border-rule">
          {about.metrics.map((metric, index) => (
            <motion.div
              key={`about-metric-${index}-${metric.label}`}
              {...getBlurRevealMotion(
                Boolean(reducedMotion),
                0.22 + index * 0.08,
              )}
              className={`pt-5 pr-4 ${index ? "border-l border-rule pl-4" : ""}`}
            >
              <strong className="block text-[clamp(.82rem,1.15vw,1rem)] leading-[1.3] font-semibold">
                {metric.value}
              </strong>
              <span className="mt-2 block font-mono text-[.57rem] font-medium uppercase tracking-[.1em] text-muted">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
