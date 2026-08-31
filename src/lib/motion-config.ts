export function getMotionConfigMode(hasMounted: boolean) {
  return hasMounted ? "user" : "always";
}
