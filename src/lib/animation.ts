const ease = [0.22, 1, 0.36, 1] as const;

export function getRevealMotion(reducedMotion: boolean) {
  if (reducedMotion) {
    return {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: true, amount: 0.2 },
      transition: { duration: 0.2 },
    };
  }

  return {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.72, ease },
  };
}

export const subtleHover = { y: -3, scale: 1.01 };
export const subtleTap = { scale: 0.98 };

export function getTextSegmentMotion(reducedMotion: boolean) {
  if (reducedMotion)
    return {
      initial: false,
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0 },
    };
  return {
    initial: { opacity: 0, y: "0.72em" },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease },
  };
}

export function getHeroDescriptionMotion(reducedMotion: boolean) {
  if (reducedMotion)
    return {
      initial: false,
      animate: { opacity: 1, y: 0, filter: "blur(0px)" },
      transition: { duration: 0 },
    };
  return {
    initial: { opacity: 0, y: 18, filter: "blur(8px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.65, delay: 0.42, ease },
  };
}

export function getBlurRevealMotion(reducedMotion: boolean, delay = 0) {
  if (reducedMotion)
    return {
      initial: false,
      whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
      viewport: { once: true, amount: 0.2 },
      transition: { duration: 0 },
    };
  return {
    initial: { opacity: 0, y: 38, scale: 0.97, filter: "blur(15px)" },
    whileInView: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, delay, ease },
  };
}
