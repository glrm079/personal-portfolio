"use client";

import { motion, useReducedMotion } from "motion/react";

import type { PortfolioContent } from "@/data/portfolio";
import { getRevealMotion } from "@/lib/animation";
import { SectionHeading } from "./section-heading";
import { TiltedSpotlightCard } from "./tilted-spotlight-card";

type ServicesSectionProps = Pick<PortfolioContent, "services">;

export function ServicesSection({ services }: ServicesSectionProps) {
  const reducedMotion = useReducedMotion();
  const reveal = getRevealMotion(Boolean(reducedMotion));
  return (
    <section
      className="grid grid-cols-[.75fr_1.25fr] items-start gap-[7vw] border-t border-rule py-[clamp(6rem,14vw,13rem)] [scroll-margin-top:80px] max-md:grid-cols-1 max-md:gap-12 max-md:py-[6.5rem]"
      id="services"
    >
      <motion.div {...reveal}>
        <SectionHeading label={services.label} title={services.title} />
      </motion.div>
      <div className="border-t border-rule">
        {services.items.map((service, index) => (
          <TiltedSpotlightCard
            key={service.number}
            spotlightColor="rgba(127, 127, 127, 0.2)"
            disabled={Boolean(reducedMotion)}
          >
            <motion.article
              {...reveal}
              transition={{ ...reveal.transition, delay: index * 0.08 }}
              className="group relative z-2 grid grid-cols-[50px_1fr_1.05fr_auto] items-baseline gap-4 border-b border-rule py-7 max-md:grid-cols-[32px_1fr_auto]"
            >
              <span className="font-mono text-[.65rem] font-medium">
                {service.number}
              </span>
              <h3 className="text-[clamp(1.2rem,1.75vw,1.7rem)] leading-[1.1] font-medium tracking-[-.05em]">
                {service.title}
              </h3>
              <p className="text-[.88rem] leading-6 text-muted max-md:col-[2/4]">
                {service.description}
              </p>
              <b className="font-mono text-xl font-normal transition-transform group-hover:rotate-45">
                ↘
              </b>
            </motion.article>
          </TiltedSpotlightCard>
        ))}
      </div>
    </section>
  );
}
