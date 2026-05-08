const { test, expect } = require('@playwright/test');
const path = require('path');
const { pathToFileURL } = require('url');

const root = path.resolve(__dirname, '..');
const pageUrl = (relativePath) => pathToFileURL(path.join(root, relativePath)).toString();

async function expectNoHorizontalOverflow(page) {
  const metrics = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth
  }));

  expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth + 1);
}

test.describe('site smoke', () => {
  test('landing page renders at desktop and phone widths', async ({ page }) => {
    await page.goto(pageUrl('index.html'));

    await expect(page.getByRole('heading', { name: /IGCSE Economics lesson review/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Review a deck/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Slide view/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /Handout view/i }).first()).toBeVisible();
    await expect(page.getByRole('heading', { name: /Macroeconomic aims/i })).toBeVisible();

    await expect(page.getByRole('link', { name: /Slide view/i })).toHaveCount(5);
    await expect(page.getByRole('link', { name: /Handout view/i })).toHaveCount(5);
    await expect(page.getByRole('link', { name: /Handout view/i }).first()).toHaveAttribute('href', /view=print/);

    await expectNoHorizontalOverflow(page);

    const macroHeadingBox = await page
      .getByRole('heading', { name: /Macroeconomic aims/i })
      .boundingBox();
    const viewport = page.viewportSize();

    expect(macroHeadingBox).not.toBeNull();
    expect(macroHeadingBox.x).toBeGreaterThanOrEqual(0);
    expect(macroHeadingBox.x + macroHeadingBox.width).toBeLessThanOrEqual(viewport.width + 1);
  });

  test('macroeconomic aims deck renders at desktop and phone widths', async ({ page }, testInfo) => {
    await page.goto(pageUrl('lessons/unit-4-government/4-1-macroeconomic-aims/index.html'));

    await expect(page.locator('.slide.is-active')).toBeVisible();
    await expect(page.locator('.slide.is-active h1')).toHaveText(/Macroeconomic aims/i);
    await expect(page.locator('#progress')).toBeVisible();
    await expect(page.getByRole('link', { name: /Student print view/i })).toBeVisible();

    await expectNoHorizontalOverflow(page);

    const titleBox = await page.locator('.slide.is-active h1').boundingBox();
    const viewport = page.viewportSize();

    expect(titleBox).not.toBeNull();
    expect(titleBox.x).toBeGreaterThanOrEqual(0);
    expect(titleBox.x + titleBox.width).toBeLessThanOrEqual(viewport.width + 1);

    if (testInfo.project.name.includes('phone')) {
      const mobileLayout = await page.evaluate(() => {
        const slide = document.querySelector('.slide.is-active');
        const slideStyle = window.getComputedStyle(slide);

        return {
          bodyOverflowY: window.getComputedStyle(document.body).overflowY,
          slideOverflow: slideStyle.overflow,
          slidePosition: slideStyle.position,
          documentHeight: document.documentElement.scrollHeight,
          viewportHeight: window.innerHeight
        };
      });

      expect(mobileLayout.bodyOverflowY).toBe('auto');
      expect(mobileLayout.slideOverflow).toBe('visible');
      expect(mobileLayout.slidePosition).toBe('relative');
      expect(mobileLayout.documentHeight).toBeGreaterThanOrEqual(mobileLayout.viewportHeight);
    }
  });

  test('student print view renders a full lesson handout', async ({ page }) => {
    await page.goto(pageUrl('lessons/unit-4-government/4-1-macroeconomic-aims/index.html') + '?view=print');

    await expect(page.getByRole('heading', { name: /Macroeconomic aims/i }).first()).toBeVisible();
    await expect(page.getByRole('button', { name: /^Print$/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Slide mode/i })).toBeVisible();
    await expect(page.locator('.slide')).toHaveCount(0);
    await expect(page.locator('.handoutBlock')).toHaveCount(4);
    await expect(page.locator('.handoutBlock').filter({ hasText: /What governments try to achieve/i })).toBeVisible();
    await expect(page.locator('.handoutBlock').filter({ hasText: /Choose the priority/i })).toHaveCount(0);

    await expectNoHorizontalOverflow(page);
  });

  test('student handout excludes fact and discussion slides', async ({ page }) => {
    await page.goto(pageUrl('lessons/unit-4-government/4-2-fiscal-policy/lesson-2.html') + '?view=print');

    await expect(page.locator('.slide')).toHaveCount(0);
    await expect(page.locator('.handoutBlock').filter({ hasText: /Denmark had a tax-to-GDP ratio/i })).toHaveCount(0);
    await expect(page.locator('.handoutBlock').filter({ hasText: /Turn and talk/i })).toHaveCount(0);
    await expect(page.getByRole('heading', { name: 'Direct tax', exact: true })).toBeVisible();

    await expectNoHorizontalOverflow(page);
  });
});
