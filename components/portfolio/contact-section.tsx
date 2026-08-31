"use client";

import { motion, useReducedMotion } from "motion/react";

import type { PortfolioContent } from "@/data/portfolio";
import { getBlurRevealMotion, subtleTap } from "@/lib/animation";

type ContactSectionProps = Pick<PortfolioContent, "contact">;

export function ContactSection({ contact }: ContactSectionProps) {
  const reducedMotion = useReducedMotion();
  const blurReveal = (delay = 0) =>
    getBlurRevealMotion(Boolean(reducedMotion), delay);
  return (
    <section
      className="grid grid-cols-[1.3fr_.7fr] items-end gap-[5vw] border-t border-rule pt-[clamp(7rem,15vw,15rem)] pb-28 [scroll-margin-top:80px] max-md:grid-cols-1 max-md:gap-12 max-md:pt-32 max-md:pb-20"
      id="contact"
    >
      <div>
        <motion.p
          {...blurReveal()}
          className="mb-5 font-mono text-[.67rem] font-medium uppercase tracking-[.1em] text-muted"
        >
          {contact.label}
        </motion.p>
        <motion.h2
          {...blurReveal(0.08)}
          className="max-w-[850px] text-[clamp(2.7rem,5vw,5.2rem)] leading-none font-semibold"
        >
          {contact.title}
        </motion.h2>
        <motion.p
          {...blurReveal(0.16)}
          className="mt-5 max-w-[460px] text-[.95rem] leading-7 text-muted"
        >
          {contact.description}
        </motion.p>
        <motion.div
          {...blurReveal(0.24)}
          className="mt-6 flex flex-wrap items-baseline gap-3"
        >
          <a
            className="inline-flex items-center gap-4 text-[clamp(1.15rem,2vw,1.8rem)] tracking-[-.02em]"
            href={`mailto:${contact.email}`}
          >
            {contact.email}
            <span className="text-[1.2em]">↗</span>
          </a>
          <span className="text-muted" aria-hidden="true">
            ·
          </span>
          <a
            className="text-[clamp(1rem,1.7vw,1.5rem)] font-medium tracking-[-.02em]"
            href={`tel:${contact.phone.replace(/\D/g, "")}`}
          >
            {contact.phone}
          </a>
        </motion.div>
      </div>
      <motion.div
        {...blurReveal(0.18)}
        className="flex flex-col items-start gap-4"
      >
        <p className="mb-2 font-mono text-[.62rem] font-medium uppercase tracking-[.07em] text-muted">
          {contact.socialLabel}
        </p>
        <motion.a
          href="https://github.com/glrm079"
          target="_blank"
          rel="noreferrer"
          whileHover={{ x: reducedMotion ? 0 : 4 }}
          whileTap={subtleTap}
          className="font-mono text-[.75rem] font-medium uppercase tracking-[.05em]"
        >
          GitHub <span className="ml-1.5">↗</span>
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/guilherme-oliveira-96583023a/"
          target="_blank"
          rel="noreferrer"
          whileHover={{ x: reducedMotion ? 0 : 4 }}
          whileTap={subtleTap}
          className="font-mono text-[.75rem] font-medium uppercase tracking-[.05em]"
        >
          LinkedIn <span className="ml-1.5">↗</span>
        </motion.a>
      </motion.div>
    </section>
  );
}
