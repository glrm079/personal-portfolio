"use client";

import { type PropsWithChildren, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

type MagneticButtonProps = PropsWithChildren<{
  href: string;
  className: string;
  reducedMotion: boolean;
}>;

export function MagneticButton({
  href,
  className,
  children,
  reducedMotion,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 250, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 250, damping: 18 });
  const [spark, setSpark] = useState<{ x: number; y: number } | null>(null);

  const reset = () => {
    x.set(0);
    y.set(0);
  };
  const handlePointerMove: React.PointerEventHandler<HTMLAnchorElement> = (
    event,
  ) => {
    if (reducedMotion || event.pointerType !== "mouse" || !buttonRef.current)
      return;
    const bounds = buttonRef.current.getBoundingClientRect();
    x.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 10);
    y.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 10);
  };
  const handlePointerDown: React.PointerEventHandler<HTMLAnchorElement> = (
    event,
  ) => {
    if (reducedMotion || !buttonRef.current) return;
    const bounds = buttonRef.current.getBoundingClientRect();
    setSpark({ x: event.clientX - bounds.left, y: event.clientY - bounds.top });
  };

  return (
    <motion.a
      ref={buttonRef}
      href={href}
      className={`group relative isolate overflow-hidden transition-[color,background-color,box-shadow] duration-300 ${className}`}
      style={{ x, y }}
      whileTap={reducedMotion ? undefined : { scale: 0.97 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      onFocus={reset}
      onPointerDown={handlePointerDown}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 -left-[90%] z-0 w-[60%] -skew-x-20 bg-white/25 transition-transform duration-500 ease-out group-hover:translate-x-[300%]"
      />
      <span className="relative z-1 inline-flex items-center gap-[inherit]">
        {children}
      </span>
      {spark && (
        <span
          className="pointer-events-none absolute size-2.5 -m-[5px] animate-[spark_.48s_ease-out_forwards] rounded-full bg-current"
          style={{ left: spark.x, top: spark.y }}
          onAnimationEnd={() => setSpark(null)}
          aria-hidden="true"
        />
      )}
    </motion.a>
  );
}
