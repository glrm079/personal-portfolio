export function getMotionConfigMode(hasMounted: boolean) {
  return hasMounted ? "user" : "never";
}

export function getHydrationSafeReducedMotion(
  hasMounted: boolean,
  prefersReducedMotion: boolean,
) {
  return hasMounted && prefersReducedMotion;
}
