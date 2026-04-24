
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  /* Maximum parallel execution */
  // fullyParallel: true,
  fullyParallel: false,


  /* Fail fast in CI */
  forbidOnly: !!process.env.CI,

  /* Retry failed tests in CI */
  retries: process.env.CI ? 2 : 0,

  /* Parallel workers */
  workers: process.env.CI ? 1 : undefined,

  /* Reporter */
  reporter: [
    ['html', { open: 'never' }],
    ['list']
  ],

  use: {
    baseURL: 'https://qa.jumprecruiter.com/',

    /* Modern defaults */
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',

    /* Default timeout */
    actionTimeout: 15000,
    navigationTimeout: 30000,
  },

  /* ALL BROWSERS SETUP */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* MOBILE VIEW (optional but recommended) */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
  ],
});