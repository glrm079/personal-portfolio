import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@/data': `${import.meta.dirname}/src/data`,
      '@/lib': `${import.meta.dirname}/src/lib`
    }
  },
  test: { environment: 'node' }
});
