import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import { ThemeProvider } from '../components/portfolio/theme-provider';

describe('ThemeProvider', () => {
  it('does not render an inline script', () => {
    expect(renderToStaticMarkup(<ThemeProvider><span>content</span></ThemeProvider>)).not.toContain('<script');
  });
});
