"use client";

import { motion, useReducedMotion } from "motion/react";

import type { PortfolioContent } from "@/data/portfolio";
import { getBlurRevealMotion } from "@/lib/animation";
import { ProjectCard } from "./project-card";
import { SectionHeading } from "./section-heading";

type ProjectsSectionProps = Pick<PortfolioContent, "work" | "projects">;

export function ProjectsSection({ work, projects }: ProjectsSectionProps) {
  const reducedMotion = useReducedMotion();
  return (
    <section
      className="border-t border-rule py-[clamp(6rem,14vw,13rem)] [scroll-margin-top:80px] max-md:py-[6.5rem]"
      id="work"
    >
      <div className="mb-16 grid grid-cols-[.75fr_1.25fr] gap-[7vw] max-md:grid-cols-1 max-md:gap-4">
        <motion.div {...getBlurRevealMotion(Boolean(reducedMotion))}>
          <p className="mb-5 font-mono text-[.67rem] font-medium uppercase tracking-[.1em] text-muted">
            {work.label}
          </p>
        </motion.div>
        <motion.div {...getBlurRevealMotion(Boolean(reducedMotion), 0.12)}>
          <SectionHeading title={work.title}>
            <p className="max-w-[550px] leading-7 text-muted">{work.intro}</p>
          </SectionHeading>
        </motion.div>
      </div>
      <motion.div
        {...getBlurRevealMotion(Boolean(reducedMotion), 0.22)}
        className="grid gap-px border border-rule bg-rule"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.number} project={project} index={index} />
        ))}
      </motion.div>
    </section>
  );
}
