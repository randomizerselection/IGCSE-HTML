const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

const root = path.resolve(__dirname, '..');
const pageUrl = (relativePath) => pathToFileURL(path.join(root, relativePath)).toString();
const remoteUrlPattern = /^https?:\/\//i;

function findHtmlFiles(dir, base = dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    if (entry.name === 'node_modules' || entry.name === '.git') return [];

    const absolutePath = path.join(dir, entry.name);
    if (entry.isDirectory()) return findHtmlFiles(absolutePath, base);
    if (!entry.name.endsWith('.html')) return [];

    return [path.relative(base, absolutePath).replace(/\\/g, '/')];
  });
}

async function expectNoHorizontalOverflow(page) {
  const metrics = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth
  }));

  expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth + 1);
}

async function expectNoRemoteImageAssets(page) {
  const remoteAssets = await page.evaluate(() => {
    const isRemote = (value) => /(^|,\s*)https?:\/\//i.test(String(value || ''));
    const assets = [];

    document.querySelectorAll('img, source').forEach((node) => {
      ['currentSrc', 'src', 'srcset'].forEach((attr) => {
        const value = node[attr] || node.getAttribute(attr);
        if (isRemote(value)) assets.push(value);
      });
    });

    document.querySelectorAll('*').forEach((node) => {
      const backgroundImage = window.getComputedStyle(node).backgroundImage;
      if (/url\(["']?https?:\/\//i.test(backgroundImage)) assets.push(backgroundImage);
    });

    return assets;
  });

  expect(remoteAssets).toEqual([]);
}

test.describe('site smoke', () => {
  test('landing page renders at desktop and phone widths', async ({ page }) => {
    await page.goto(pageUrl('index.html'));

    await expect(page.getByRole('heading', { name: /IGCSE Economics lesson review/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Review a deck/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Slide view/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /Handout view/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /^Quiz$/i }).first()).toBeVisible();
    await expect(page.getByRole('heading', { name: /Macroeconomic aims/i })).toBeVisible();

    await expect(page.getByRole('link', { name: /Slide view/i })).toHaveCount(6);
    await expect(page.getByRole('link', { name: /Handout view/i })).toHaveCount(6);
    await expect(page.getByRole('link', { name: /^Quiz$/i })).toHaveCount(6);
    await expect(page.getByRole('link', { name: /Handout view/i }).first()).toHaveAttribute('href', /view=print/);
    await expect(page.getByRole('link', { name: /^Quiz$/i }).first()).toHaveAttribute('href', /view=quiz/);

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
    await expect(page.getByRole('link', { name: /Course index/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Lesson start/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Student print view/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /^Quiz$/i })).toBeVisible();

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

  test('lesson start link returns slide view to the first slide', async ({ page }) => {
    await page.goto(pageUrl('lessons/unit-4-government/4-1-macroeconomic-aims/index.html') + '#4');

    await expect(page.locator('.slide.is-active h2')).toHaveText(/What governments try to achieve/i);
    await page.getByRole('link', { name: /Lesson start/i }).click();
    await expect(page.locator('.slide.is-active h1')).toHaveText(/Macroeconomic aims/i);
    await expect(page).toHaveURL(/#1$/);
  });

  test('rapid keyboard navigation advances after the final partial reveal', async ({ page }) => {
    await page.goto(pageUrl('lessons/unit-4-government/4-2-fiscal-policy/lesson-2.html') + '#6');
    await expect(page.locator('.slide.is-active h2')).toHaveText(/Raise revenue/i);

    const partialCount = await page.locator('.slide.is-active .partial-item').count();
    expect(partialCount).toBeGreaterThan(0);

    for (let i = 0; i < partialCount; i += 1) {
      await page.keyboard.press('ArrowRight');
    }

    await expect(page.locator('.slide.is-active .partial-item.is-visible')).toHaveCount(partialCount);
    await expect(page).toHaveURL(/#6$/);

    await page.keyboard.press('ArrowRight');
    await expect(page).toHaveURL(/#7$/);
  });

  test('rapid click navigation advances after the final partial reveal', async ({ page }) => {
    await page.goto(pageUrl('lessons/unit-4-government/4-2-fiscal-policy/lesson-2.html') + '#6');
    await expect(page.locator('.slide.is-active h2')).toHaveText(/Raise revenue/i);

    const partialCount = await page.locator('.slide.is-active .partial-item').count();
    expect(partialCount).toBeGreaterThan(0);
    const viewport = page.viewportSize();
    const clickPoint = {
      x: Math.floor((viewport?.width || 1024) / 2),
      y: Math.floor((viewport?.height || 768) / 2),
    };

    for (let i = 0; i < partialCount; i += 1) {
      await page.mouse.click(clickPoint.x, clickPoint.y);
    }

    await expect(page.locator('.slide.is-active .partial-item.is-visible')).toHaveCount(partialCount);
    await expect(page).toHaveURL(/#6$/);

    await page.mouse.click(clickPoint.x, clickPoint.y);
    await expect(page).toHaveURL(/#7$/);
  });

  test('student print view renders a full lesson handout', async ({ page }) => {
    await page.goto(pageUrl('lessons/unit-4-government/4-1-macroeconomic-aims/index.html') + '?view=print');

    await expect(page.getByRole('heading', { name: /Macroeconomic aims/i }).first()).toBeVisible();
    await expect(page.getByRole('button', { name: /^Print$/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Course index/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Lesson start/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Slide mode/i })).toBeVisible();
    await expect(page.locator('.slide')).toHaveCount(0);
    await expect(page.locator('.handoutBlock')).toHaveCount(4);
    await expect(page.locator('.handoutBlock').filter({ hasText: /What governments try to achieve/i })).toBeVisible();
    await expect(page.locator('.handoutDocument')).not.toContainText(/Key points/i);
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

  test('lesson quiz views render for every available deck', async ({ page }) => {
    const quizPaths = [
      'lessons/unit-2-allocation/2-8-market-economic-system/index.html',
      'lessons/unit-2-allocation/2-8-market-failure/index.html',
      'lessons/unit-4-government/4-1-macroeconomic-aims/index.html',
      'lessons/unit-4-government/4-2-fiscal-policy/lesson-1.html',
      'lessons/unit-4-government/4-2-fiscal-policy/lesson-2.html',
      'lessons/unit-4-government/4-2-fiscal-policy/lesson-3.html',
    ];

    for (const quizPath of quizPaths) {
      await page.goto(pageUrl(quizPath) + '?view=quiz');
      await expect(page.locator('.quizDeck')).toBeVisible();
      await expect(page.locator('.quizQuestion')).toHaveCount(8);
      await expect(page.getByRole('textbox', { name: /^Name$/i })).toBeVisible();
      await expect(page.getByRole('textbox', { name: /^Class$/i })).toBeVisible();
      await expect(page.getByRole('link', { name: /Slide mode/i })).toBeVisible();
      await expect(page.getByRole('link', { name: /Student print view/i })).toBeVisible();
      await expectNoHorizontalOverflow(page);
    }
  });

  test('student quiz marks answers and preserves score when submission fails', async ({ page }) => {
    await page.route('https://quiz.invalid/submit', async (route) => {
      await route.fulfill({
        status: 500,
        headers: { 'access-control-allow-origin': '*' },
        body: 'failed',
      });
    });

    await page.goto(pageUrl('lessons/unit-4-government/4-1-macroeconomic-aims/index.html') + '?view=quiz');
    await page.evaluate(() => {
      window.IGCSE.quizConfig = {
        submissionEnabled: true,
        submitEndpoint: 'https://quiz.invalid/submit',
      };
    });

    await page.getByRole('textbox', { name: /^Name$/i }).fill('Test Student');
    await page.getByRole('textbox', { name: /^Class$/i }).fill('10E');

    await page.locator('.quizQuestion').nth(0).getByLabel('The whole economy').check();
    await page.locator('.quizQuestion').nth(1).getByLabel('Answer').fill('real GDP');
    await page.locator('.quizQuestion').nth(2).getByLabel('Stable prices').check();
    await page.locator('.quizQuestion').nth(3).getByLabel('Answer').fill('employment');
    await page.locator('.quizQuestion').nth(4).getByLabel('Balance of payments stability').check();
    await page.locator('.quizQuestion').nth(5).getByLabel('Answer').fill('income');
    await page.locator('.quizQuestion').nth(6).getByLabel('More output may use more resources and create more pollution.').check();
    await page.locator('.quizQuestion').nth(7).getByLabel('Answer').fill('payments');

    await page.getByRole('button', { name: /Mark quiz/i }).click();

    await expect(page.locator('.quizScore')).toHaveText('8/8 (100%)');
    await expect(page.locator('.quizQuestion.is-correct')).toHaveCount(8);
    await expect(page.locator('.quizCorrection').filter({ hasText: /Correct: gdp/i })).toBeVisible();
    await expect(page.locator('.quizSubmitStatus')).toHaveText(/Submission failed - retry/i);
    await expect(page.getByRole('button', { name: /Retry submission/i })).toBeVisible();
    await expectNoHorizontalOverflow(page);
  });

  test('student quiz submits to configured Netlify form endpoint', async ({ page }) => {
    let submissionBody = '';
    await page.route('https://example.test/', async (route) => {
      submissionBody = route.request().postData() || '';
      await route.fulfill({ status: 200, body: 'ok' });
    });

    await page.goto(pageUrl('lessons/unit-4-government/4-1-macroeconomic-aims/index.html') + '?view=quiz');
    await page.evaluate(() => {
      window.IGCSE.quizConfig = {
        submissionEnabled: true,
        provider: 'netlify-forms',
        formName: 'quiz-submissions',
        submitEndpoint: 'https://example.test/',
      };
    });

    await page.getByRole('textbox', { name: /^Name$/i }).fill('Test Student');
    await page.getByRole('textbox', { name: /^Class$/i }).fill('10E');

    await page.locator('.quizQuestion').nth(0).getByLabel('The whole economy').check();
    await page.locator('.quizQuestion').nth(1).getByLabel('Answer').fill('real GDP');
    await page.locator('.quizQuestion').nth(2).getByLabel('Stable prices').check();
    await page.locator('.quizQuestion').nth(3).getByLabel('Answer').fill('employment');
    await page.locator('.quizQuestion').nth(4).getByLabel('Balance of payments stability').check();
    await page.locator('.quizQuestion').nth(5).getByLabel('Answer').fill('income');
    await page.locator('.quizQuestion').nth(6).getByLabel('More output may use more resources and create more pollution.').check();
    await page.locator('.quizQuestion').nth(7).getByLabel('Answer').fill('payments');

    await page.getByRole('button', { name: /Mark quiz/i }).click();

    await expect(page.locator('.quizScore')).toHaveText('8/8 (100%)');
    await expect(page.locator('.quizSubmitStatus')).toHaveText(/Score submitted to your teacher/i);

    const submitted = new URLSearchParams(submissionBody);
    expect(submitted.get('form-name')).toBe('quiz-submissions');
    expect(submitted.get('studentName')).toBe('Test Student');
    expect(submitted.get('studentClass')).toBe('10E');
    expect(submitted.get('lessonCode')).toBe('4.1.1');
    expect(submitted.get('score')).toBe('8');
    expect(submitted.get('maxScore')).toBe('8');
    expect(submitted.get('responsesJson')).toContain('growth-measure');
  });

  test('fiscal policy menu links back and offers both views', async ({ page }) => {
    await page.goto(pageUrl('lessons/unit-4-government/4-2-fiscal-policy/index.html'));

    await expect(page.getByRole('link', { name: /Course index/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Slide view/i })).toHaveCount(3);
    await expect(page.getByRole('link', { name: /Handout view/i })).toHaveCount(3);
    await expect(page.getByRole('link', { name: /^Quiz$/i })).toHaveCount(3);
    await expect(page.getByRole('link', { name: /Handout view/i }).first()).toHaveAttribute('href', /view=print/);
    await expect(page.getByRole('link', { name: /^Quiz$/i }).first()).toHaveAttribute('href', /view=quiz/);

    await expectNoHorizontalOverflow(page);
  });

  for (const htmlPath of findHtmlFiles(root)) {
    test(`does not render remote image assets in ${htmlPath}`, async ({ page }) => {
      const remoteImageRequests = [];

      page.on('request', (request) => {
        if (request.resourceType() === 'image' && remoteUrlPattern.test(request.url())) {
          remoteImageRequests.push(request.url());
        }
      });

      await page.goto(pageUrl(htmlPath));
      await expectNoRemoteImageAssets(page);
      expect(remoteImageRequests).toEqual([]);
    });
  }
});
