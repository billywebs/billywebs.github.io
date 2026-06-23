import { test, expect, type ConsoleMessage } from '@playwright/test';

/**
 * Headless critical-path regression — every page, every section, every link.
 * Runs against the built static output via `npm run preview`.
 */

const IGNORE_CONSOLE = [
  'Download the React DevTools',
  'Warning:',
  'next-dev.js',
  'Failed to load resource',
  '[vite]'
];

test.describe('Billy Webs homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('renders the hero with the weave your web tagline', async ({ page }) => {
    const heading = page.locator('#hero-heading');
    await expect(heading).toBeVisible();
    await expect(heading).toContainText(/weave your web/i);
    await expect(heading).toContainText(/catch more leads/i);
  });

  test('renders all five sections (hero, portfolio, process, contact, footer)', async ({
    page
  }) => {
    await expect(page.locator('#top')).toBeVisible();
    await expect(page.locator('#portfolio')).toBeVisible();
    await expect(page.locator('#process')).toBeVisible();
    await expect(page.locator('#contact')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
  });

  test('CTA button scrolls to contact section', async ({ page }) => {
    await page.getByRole('button', { name: /start the conversation/i }).click();
    await page.waitForTimeout(800); // smooth scroll
    const contact = page.locator('#contact');
    await expect(contact).toBeInViewport();
  });

  test('portfolio renders 3 cards with external links', async ({ page }) => {
    const cards = page.locator('#portfolio .card');
    await expect(cards).toHaveCount(3);
    const firstLink = cards.first().locator('a').first();
    await expect(firstLink).toHaveAttribute('target', '_blank');
    await expect(firstLink).toHaveAttribute('rel', /noopener/);
  });

  test('process section shows 3 numbered steps', async ({ page }) => {
    const steps = page.locator('#process li.step');
    await expect(steps).toHaveCount(3);
    await expect(steps.nth(0)).toContainText('Build');
    await expect(steps.nth(1)).toContainText('Launch');
    await expect(steps.nth(2)).toContainText('Support');
  });

  test('contact form has required fields and submit button', async ({ page }) => {
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
    await expect(page.getByRole('button', { name: /send/i })).toBeVisible();
  });

  test('contact form submits to Web3Forms successfully (mocked)', async ({ page }) => {
    await page.route('https://api.web3forms.com/submit', (route) =>
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true, message: 'Form submitted successfully' })
      })
    );
    await page.locator('input[name="name"]').fill('Test User');
    await page.locator('input[name="email"]').fill('test@example.com');
    await page.locator('textarea[name="message"]').fill('I need a site for my plumbing business.');
    await page.getByRole('button', { name: /send/i }).click();
    await expect(page.getByRole('status')).toContainText(/thanks|got it|received|sent/i);
  });

  test('mailto link points to billy@billywebs.ca', async ({ page }) => {
    const mailto = page.locator('a[href^="mailto:"]').first();
    await expect(mailto).toHaveAttribute('href', /billy@billywebs\.ca/);
  });

  test('service area mentions Ottawa', async ({ page }) => {
    const sidebar = page.locator('#contact aside');
    await expect(sidebar).toContainText(/Ottawa/);
  });

  test('page loads in under 5 seconds', async ({ page }) => {
    const start = Date.now();
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    expect(Date.now() - start).toBeLessThan(5000);
  });

  test('no unexpected console errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg: ConsoleMessage) => {
      if (msg.type() === 'error' && !IGNORE_CONSOLE.some((p) => msg.text().includes(p))) {
        errors.push(msg.text());
      }
    });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    expect(errors).toEqual([]);
  });

  test('renders correctly on mobile (375×812)', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.locator('#portfolio')).toBeVisible();
  });

  test('favicon is reachable', async ({ page }) => {
    const res = await page.request.get('/favicon.svg');
    expect(res.status()).toBe(200);
  });
});
