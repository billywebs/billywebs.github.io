import { test, expect } from '@playwright/test';

/**
 * Headed visual QA — money-shot user journeys you actually WATCH.
 * Runs slowly with the browser visible so Billy can confirm the real-world feel.
 */

test.describe('Visual QA — Billy Webs homepage tour', () => {
  test('first impression: hero loads and tagline is legible', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await page.waitForTimeout(1200);
  });

  test('scroll through entire homepage at a human pace', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(800);

    await page.evaluate(() => window.scrollTo({ top: 600, behavior: 'smooth' }));
    await page.waitForTimeout(1000);

    await page.locator('#portfolio').scrollIntoViewIfNeeded();
    await page.waitForTimeout(1200);

    await page.locator('#process').scrollIntoViewIfNeeded();
    await page.waitForTimeout(1200);

    await page.locator('#contact').scrollIntoViewIfNeeded();
    await page.waitForTimeout(1200);

    await page.locator('footer').scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
  });

  test('CTA button smooth-scrolls to contact', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(600);

    await page.getByRole('button', { name: /start the conversation/i }).hover();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: /start the conversation/i }).click();
    await page.waitForTimeout(1500);
    await expect(page.locator('#contact')).toBeInViewport();
  });

  test('hover over portfolio cards shows accent border lift', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.locator('#portfolio').scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);

    const cards = page.locator('#portfolio .card');
    for (let i = 0; i < (await cards.count()); i++) {
      await cards.nth(i).hover();
      await page.waitForTimeout(600);
    }
  });

  test('fill out the contact form (without submitting)', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.locator('#contact').scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);

    await page.locator('input[name="name"]').click();
    await page.locator('input[name="name"]').fill('Dave the Roofer');
    await page.waitForTimeout(400);

    await page.locator('input[name="email"]').fill('dave@daveroofing.ca');
    await page.waitForTimeout(400);

    await page
      .locator('textarea[name="message"]')
      .fill("Hey Billy — heard about your $100/mo service. My current site is awful.");
    await page.waitForTimeout(800);
  });

  test('submit the form and see the unconfigured fallback message', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.locator('#contact').scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);

    await page.locator('input[name="name"]').fill('Test Sender');
    await page.locator('input[name="email"]').fill('test@example.com');
    await page.locator('textarea[name="message"]').fill('Testing the form fallback message.');
    await page.waitForTimeout(400);

    await page.getByRole('button', { name: /send/i }).click();
    await page.waitForTimeout(1500);
    await expect(page.getByRole('alert')).toBeVisible();
  });

  test('mobile viewport: full scroll-through at 375×812', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    await page.locator('#portfolio').scrollIntoViewIfNeeded();
    await page.waitForTimeout(1200);

    await page.locator('#process').scrollIntoViewIfNeeded();
    await page.waitForTimeout(1200);

    await page.locator('#contact').scrollIntoViewIfNeeded();
    await page.waitForTimeout(1200);

    await page.locator('footer').scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
  });
});
