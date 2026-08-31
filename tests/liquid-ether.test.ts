import { describe, expect, it } from 'vitest';

import { getLiquidEtherSettings } from '@/lib/liquid-ether';

describe('getLiquidEtherSettings', () => {
  it('keeps mouse interaction enabled on every viewport size', () => {
    expect(getLiquidEtherSettings(375)).toMatchObject({ interactive: true });
    expect(getLiquidEtherSettings(1440)).toMatchObject({ interactive: true });
  });

  it('automatically lowers pixel density on narrow viewports', () => {
    expect(getLiquidEtherSettings(375)).toMatchObject({ maxPixelRatio: 1 });
    expect(getLiquidEtherSettings(1440)).toMatchObject({ maxPixelRatio: 1.5 });
  });

  it('uses a broad, soft mouse influence instead of a concentrated spot', () => {
    expect(getLiquidEtherSettings(1440)).toMatchObject({
      cursorFalloff: 2.5,
      flowStrength: 0,
      fieldStrength: 0.65,
      organicLightStrength: 1.1,
      glowOpacity: 0.24,
      mouseForce: 10,
      cursorSize: 40,
      viscous: 100,
      autoDemo: true,
      autoSpeed: 0.5,
      autoIntensity: 2.2,
      isBounce: false,
      resolution: 0.5
    });
    expect(getLiquidEtherSettings(1440)).not.toHaveProperty('colors');
  });
});
