import { describe, expect, it } from 'vitest';

import { getPortfolioContent } from '@/data/portfolio';

describe('getPortfolioContent', () => {
  it('returns Guilherme Oliveira and verified contact details in Portuguese', () => {
    const content = getPortfolioContent('pt');

    expect(content.name).toBe('Guilherme Oliveira');
    expect(content.projects).toHaveLength(1);
    expect(content.contact.email).toBe('glrmcontato@gmail.com');
  });

  it('returns translated hero copy in English', () => {
    const content = getPortfolioContent('en');

    expect(content.hero.eyebrow).toBe('Full Stack Developer');
    expect(content.projects[0].title).toBe('On building');
  });
});
