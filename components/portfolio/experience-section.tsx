"use client";

import { motion, useReducedMotion } from "motion/react";

import type { PortfolioContent } from "@/data/portfolio";
import { getRevealMotion } from "@/lib/animation";
import { SectionHeading } from "./section-heading";
import { TiltedSpotlightCard } from "./tilted-spotlight-card";

type ExperienceSectionProps = Pick<PortfolioContent, "experience">;

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  const reducedMotion = useReducedMotion();
  const reveal = getRevealMotion(Boolean(reducedMotion));
  return (
    <section
      className="grid grid-cols-[.75fr_1.25fr] gap-[7vw] border-t border-rule py-[clamp(6rem,14vw,13rem)] [scroll-margin-top:80px] max-md:grid-cols-1 max-md:gap-12 max-md:py-[6.5rem]"
      id="experience"
    >
      <motion.div {...reveal}>
        <SectionHeading label={experience.label} title={experience.title} />
      </motion.div>
      <div className="border-t border-rule">
        {experience.items.map((item, index) => (
          <TiltedSpotlightCard
            key={item.period}
            spotlightColor="rgba(127, 127, 127, 0.2)"
            disabled={Boolean(reducedMotion)}
          >
            <motion.article
              {...reveal}
              transition={{ ...reveal.transition, delay: index * 0.08 }}
              className="relative z-2 grid grid-cols-[1fr_2fr] gap-8 border-b border-rule py-7 max-md:grid-cols-1 max-md:gap-3"
            >
              <p className="m-0 font-mono text-[.65rem] font-medium leading-5 text-muted">
                {item.period}
              </p>
              <div>
                <h3 className="m-0 text-base tracking-[-.035em]">
                  {item.role}
                  <span className="ml-2 font-normal text-muted">
                    @ {item.company}
                  </span>
                </h3>
                <p className="mt-3 text-[.88rem] leading-6 text-muted">
                  {item.description}
                </p>
              </div>
            </motion.article>
          </TiltedSpotlightCard>
        ))}
      </div>
    </section>
  );
}
