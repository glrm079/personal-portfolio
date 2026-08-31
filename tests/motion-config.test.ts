import { describe, expect, it } from 'vitest';

import { getMotionConfigMode } from '@/lib/motion-config';

describe('getMotionConfigMode', () => {
  it('disables motion until client hydration has completed', () => {
    expect(getMotionConfigMode(false)).toBe('always');
    expect(getMotionConfigMode(true)).toBe('user');
  });
});
