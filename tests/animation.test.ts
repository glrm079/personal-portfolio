import { describe, expect, it } from 'vitest';

import { getHeroDescriptionMotion, getRevealMotion, getTextSegmentMotion } from '@/lib/animation';

describe('getRevealMotion', () => {
  it('uses an opacity-only transition when reduced motion is enabled', () => {
    expect(getRevealMotion(true).initial).toEqual({ opacity: 0 });
    expect(getRevealMotion(true).whileInView).toEqual({ opacity: 1 });
  });

  it('uses a subtle vertical reveal by default', () => {
    expect(getRevealMotion(false).initial).toEqual({ opacity: 0, y: 18 });
    expect(getRevealMotion(false).whileInView).toEqual({ opacity: 1, y: 0 });
  });
});

describe('getTextSegmentMotion', () => {
  it('does not animate split text when reduced motion is enabled', () => {
    expect(getTextSegmentMotion(true).initial).toBe(false);
    expect(getTextSegmentMotion(true).transition.duration).toBe(0);
  });

  it('reveals text segments upward by default', () => {
    expect(getTextSegmentMotion(false).initial).toEqual({ opacity: 0, y: '0.72em' });
    expect(getTextSegmentMotion(false).animate).toEqual({ opacity: 1, y: 0 });
  });
});

describe('getHeroDescriptionMotion', () => {
  it('uses a static readable description for reduced motion', () => {
    expect(getHeroDescriptionMotion(true).initial).toBe(false);
    expect(getHeroDescriptionMotion(true).transition.duration).toBe(0);
  });

  it('reveals the description with a blur-to-clear transition by default', () => {
    expect(getHeroDescriptionMotion(false).initial).toEqual({ opacity: 0, y: 18, filter: 'blur(8px)' });
    expect(getHeroDescriptionMotion(false).animate).toEqual({ opacity: 1, y: 0, filter: 'blur(0px)' });
  });
});
