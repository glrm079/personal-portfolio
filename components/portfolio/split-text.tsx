"use client";

import { motion } from "motion/react";
import { getTextSegmentMotion } from "@/lib/animation";

type SplitTextProps = { text: string; reducedMotion: boolean; id?: string };

/** Motion-compatible adaptation of the React Bits Split Text word reveal. */
export function SplitText({ text, reducedMotion, id }: SplitTextProps) {
  const motionProps = getTextSegmentMotion(reducedMotion);
  const words = text.split(/\s+/);
  return (
    <h1
      id={id}
      className="max-w-[900px] font-sans text-[clamp(3rem,5.8vw,6.4rem)] leading-[.98] font-semibold tracking-normal"
      aria-label={text}
    >
      {words.map((word, index) => (
        <motion.span
          className="inline-block will-change-transform"
          key={`${word}-${index}`}
          aria-hidden="true"
          {...motionProps}
          transition={{ ...motionProps.transition, delay: index * 0.065 }}
        >
          {word}
          {index < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </h1>
  );
}
