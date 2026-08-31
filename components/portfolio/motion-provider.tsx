"use client";

import { useEffect, useState } from "react";
import { MotionConfig } from "motion/react";
import { getMotionConfigMode } from "@/lib/motion-config";

export function MotionProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    const frame = requestAnimationFrame(() => setHasMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);
  return (
    <MotionConfig reducedMotion={getMotionConfigMode(hasMounted)}>
      {children}
    </MotionConfig>
  );
}
