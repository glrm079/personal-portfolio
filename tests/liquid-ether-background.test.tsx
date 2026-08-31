import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import { LiquidEtherBackground } from '../components/portfolio/liquid-ether-background';
import { ThemeProvider } from '../components/portfolio/theme-provider';

describe('LiquidEtherBackground', () => {
  it('does not render a separate cursor glow over the liquid shader', () => {
    expect(renderToStaticMarkup(<ThemeProvider><LiquidEtherBackground /></ThemeProvider>)).not.toContain('radial-gradient');
  });
});
