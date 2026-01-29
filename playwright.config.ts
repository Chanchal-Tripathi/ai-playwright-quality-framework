
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  retries: 2,
  workers: 4,
  reporter: [['html'], ['list']],
  use: {
    baseURL: 'https://reqres.in',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  }
});
