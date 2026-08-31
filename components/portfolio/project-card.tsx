"use client";

import { motion, useReducedMotion } from "motion/react";

import type { Project } from "@/data/portfolio";
import { getRevealMotion, subtleHover } from "@/lib/animation";
import { SpotlightCard } from "./spotlight-card";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const reducedMotion = useReducedMotion();
  const reveal = getRevealMotion(Boolean(reducedMotion));
  const mark = index === 0 ? "A" : index === 1 ? "M" : "F";
  const visualClass =
    index === 0
      ? "bg-transparent text-ink"
      : index === 1
        ? "bg-[repeating-radial-gradient(circle_at_50%_52%,var(--fg)_0_1px,var(--bg)_2px_17px)]"
        : "bg-[conic-gradient(from_220deg,var(--fg),var(--bg),var(--fg),var(--bg),var(--fg))]";
  return (
    <SpotlightCard
      className="backdrop-blur-[2px]"
      spotlightColor="rgba(127, 127, 127, 0.2)"
      disabled={Boolean(reducedMotion)}
      surface={false}
    >
      <motion.article
        {...reveal}
        transition={{ ...reveal.transition, delay: index * 0.08 }}
        whileHover={reducedMotion ? undefined : subtleHover}
        className="relative z-2 grid min-h-[410px] grid-cols-[minmax(220px,.85fr)_minmax(0,1.15fr)] bg-transparent max-md:grid-cols-1"
      >
        <div
          className={`relative flex overflow-hidden border-r border-rule p-5 font-mono text-[.62rem] font-medium max-md:min-h-[270px] max-md:border-r-0 max-md:border-b ${visualClass}`}
        >
          <span className="relative z-2">{project.number}</span>
          <motion.div
            className="absolute inset-0 grid place-items-center font-serif text-[clamp(10rem,23vw,22rem)] leading-none"
            animate={
              reducedMotion
                ? undefined
                : {
                    rotate: index === 0 ? [-14, -4, -14] : [0, 8, 0],
                    scale: [1, 1.06, 1],
                  }
            }
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            {mark}
          </motion.div>
          <p className="relative z-2 ml-auto">{project.year}</p>
        </div>
        <div className="flex flex-col items-start p-[clamp(1.5rem,3vw,3rem)]">
          <p className="mb-8 font-mono text-[.67rem] font-medium uppercase tracking-[.1em] text-muted">
            {project.category}
          </p>
          <h3 className="text-[clamp(1.8rem,3vw,3.25rem)] leading-[1.05] font-semibold">
            {project.title}
          </h3>
          <p className="max-w-[470px] leading-7 text-muted">
            {project.description}
          </p>
          <div className="mt-auto flex w-full items-end justify-between gap-4 pt-8">
            <ul className="flex flex-wrap gap-1.5">
              {project.technologies.map((technology) => (
                <li
                  className="border border-rule px-2 py-1 font-mono text-[.58rem] font-medium"
                  key={technology}
                >
                  {technology}
                </li>
              ))}
            </ul>
            <a
              className="whitespace-nowrap font-mono text-[.62rem] font-medium uppercase tracking-[.05em]"
              href={project.href}
            >
              {project.actionLabel}
              <span className="ml-2 text-base">↗</span>
            </a>
          </div>
        </div>
      </motion.article>
    </SpotlightCard>
  );
}
