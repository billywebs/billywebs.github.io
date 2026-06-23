import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright config — three projects following testing-standards:
 *   - headless    → fast regression (every page, every API path, console errors)
 *   - regression  → pixel-perfect screenshot diffs vs. saved baselines
 *   - visual      → headed, slowMo, recorded — money-shot user journeys
 *
 * The webServer block boots `npm run build && npm run preview` so we test the
 * actual static output that will ship to GitHub Pages, not the dev server.
 */
export default defineConfig({
  testDir: './e2e',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: 1,
  reporter: [['list']],
  use: {
    baseURL: 'http://localhost:4173',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure'
  },
  expect: {
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.01
    }
  },
  projects: [
    {
      name: 'headless',
      testMatch: 'critical-path.spec.ts',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'regression',
      testMatch: 'visual-regression.spec.ts',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'visual',
      testMatch: 'visual-qa.spec.ts',
      use: {
        ...devices['Desktop Chrome'],
        headless: false,
        launchOptions: { slowMo: 100 },
        video: 'on'
      }
    }
  ],
  webServer: {
    command: 'npm run build && npm run preview',
    url: 'http://localhost:4173',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000
  }
});
