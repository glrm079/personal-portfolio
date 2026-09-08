"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { MotionConfig, useReducedMotion } from "motion/react";
import {
  getHydrationSafeReducedMotion,
  getMotionConfigMode,
} from "@/lib/motion-config";

const HydrationSafeReducedMotionContext = createContext(false);

export function useHydrationSafeReducedMotion() {
  return useContext(HydrationSafeReducedMotionContext);
}

export function MotionProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [hasMounted, setHasMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  useEffect(() => {
    const frame = requestAnimationFrame(() => setHasMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);
  return (
    <MotionConfig reducedMotion={getMotionConfigMode(hasMounted)}>
      <HydrationSafeReducedMotionContext.Provider
        value={getHydrationSafeReducedMotion(
          hasMounted,
          Boolean(prefersReducedMotion),
        )}
      >
        {children}
      </HydrationSafeReducedMotionContext.Provider>
    </MotionConfig>
  );
}
