"use client";

import { type PropsWithChildren, useRef } from "react";

type SpotlightCardProps = PropsWithChildren<{
  className?: string;
  spotlightColor: string;
  disabled?: boolean;
  surface?: boolean;
}>;

/** Adapted from React Bits' dependency-free Spotlight Card component. */
export function SpotlightCard({
  children,
  className = "",
  spotlightColor,
  disabled = false,
  surface = true,
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const handlePointerMove: React.PointerEventHandler<HTMLDivElement> = (
    event,
  ) => {
    if (disabled || event.pointerType !== "mouse" || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
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
    <div
      ref={cardRef}
      className={`relative overflow-hidden ${surface ? "bg-page" : "bg-transparent"} before:pointer-events-none before:absolute before:inset-0 before:z-1 before:opacity-0 before:transition-opacity hover:before:opacity-100 before:bg-[radial-gradient(520px_circle_at_var(--mouse-x)_var(--mouse-y),var(--spotlight-color),transparent_42%)] ${className}`}
      style={
        {
          "--mouse-x": "50%",
          "--mouse-y": "50%",
          "--spotlight-color": spotlightColor,
        } as React.CSSProperties
      }
      onPointerMove={handlePointerMove}
    >
      {children}
    </div>
  );
}
