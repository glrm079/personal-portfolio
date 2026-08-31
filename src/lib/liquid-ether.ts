export function getLiquidEtherSettings(viewportWidth: number) {
  return {
    interactive: true,
    maxPixelRatio: viewportWidth <= 760 ? 1 : 1.5,
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
    resolution: 0.5,
  };
}
