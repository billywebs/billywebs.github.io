import { test, expect } from '@playwright/test';

/**
 * Pixel-perfect screenshot baselines. First run creates the baselines;
 * subsequent runs fail on visual diff.
 *
 * To accept intentional UI changes:
 *   npm run test:e2e:regression -- --update-snapshots
 */

test.describe('Visual regression — desktop', () => {
  test('full homepage @ 1280×720', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500); // let fonts settle
    await expect(page).toHaveScreenshot('homepage-desktop.png', { fullPage: true });
  });

  test('hero above the fold', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);
    await expect(page).toHaveScreenshot('hero-fold.png');
  });

  test('portfolio section', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.locator('#portfolio').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(page.locator('#portfolio')).toHaveScreenshot('portfolio.png');
  });

  test('process section', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.locator('#process').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(page.locator('#process')).toHaveScreenshot('process.png');
  });

  test('contact section', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.locator('#contact').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(page.locator('#contact')).toHaveScreenshot('contact.png');
  });
});

test.describe('Visual regression — mobile', () => {
  test('full homepage @ iPhone SE (375×812)', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);
    await expect(page).toHaveScreenshot('homepage-mobile.png', { fullPage: true });
  });

  test('hero mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);
    await expect(page).toHaveScreenshot('hero-mobile.png');
  });
});
