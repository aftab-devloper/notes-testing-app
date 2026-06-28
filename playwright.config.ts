import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './test/e2e',
  testMatch: ['**/*.test.ts'],
  use: {
    baseURL: 'http://localhost:3000',
  },
});