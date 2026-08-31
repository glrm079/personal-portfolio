"use client";

import { type PropsWithChildren, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

type TiltedSpotlightCardProps = PropsWithChildren<{
  spotlightColor: string;
  disabled?: boolean;
}>;

/** React Bits-inspired Tilted Card with a cursor-following spotlight. */
export function TiltedSpotlightCard({
  children,
  spotlightColor,
  disabled = false,
}: TiltedSpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };
  const handlePointerMove: React.PointerEventHandler<HTMLDivElement> = (
    event,
  ) => {
    if (disabled || event.pointerType !== "mouse" || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    rotateX.set((0.5 - y) * 8);
    rotateY.set((x - 0.5) * 8);
    cardRef.current.style.setProperty(
      "--mouse-x",
      `${event.clientX - rect.left}px`,
    );
    cardRef.current.style.setProperty(
      "--mouse-y",
      `${event.clientY - rect.top}px`,
    );
  };

  return (
    <motion.div
      ref={cardRef}
      whileHover={disabled ? undefined : { scale: 1.015, z: 12 }}
      className="relative overflow-hidden bg-transparent before:pointer-events-none before:absolute before:inset-0 before:z-1 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 before:bg-[radial-gradient(520px_circle_at_var(--mouse-x)_var(--mouse-y),var(--spotlight-color),transparent_42%)]"
      style={
        {
          "--mouse-x": "50%",
          "--mouse-y": "50%",
          "--spotlight-color": spotlightColor,
          rotateX,
          rotateY,
          transformPerspective: 800,
        } as React.CSSProperties
      }
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      onBlur={reset}
    >
      {children}
    </motion.div>
  );
}
