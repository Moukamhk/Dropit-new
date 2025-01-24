import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', // This ensures the environment mimics a browser (necessary for React)
    globals: true, // This allows globals like `expect` and `describe` to be available
  },
});
