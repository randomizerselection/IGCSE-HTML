const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const vm = require('vm');

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

function findFlashcardFiles(dir, base = dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === '_template') return [];

    const absolutePath = path.join(dir, entry.name);
    if (entry.isDirectory()) return findFlashcardFiles(absolutePath, base);
    if (!/^flashcards.*\.js$/.test(entry.name)) return [];

    return [path.relative(base, absolutePath).replace(/\\/g, '/')];
  });
}

function readFlashcards(relativePath) {
  const source = fs.readFileSync(path.join(root, relativePath), 'utf8');
  const context = { window: {} };
  context.window.IGCSE = {};
  context.IGCSE = context.window.IGCSE;
  vm.runInNewContext(source, context, { filename: relativePath });
  return context.window.IGCSE.flashcards;
}

function definitionTerms() {
  const source = fs.readFileSync(path.join(root, 'references/igcse-economics-definitions-2026.md'), 'utf8');
  return new Set([...source.matchAll(/^\|\s*[^|]+\|\s*([^|]+?)\s*\|/gm)]
    .map((match) => match[1].trim())
    .filter((term) => term && !['Term', 'Ref'].includes(term)));
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

async function fillPerfectMacroeconomicAimsQuiz(page) {
  await page.locator('.quizQuestion').nth(0).getByLabel('The whole economy').check();
  await page.locator('.quizQuestion').nth(1).getByLabel('Answer').fill('real GDP');
  await page.locator('.quizQuestion').nth(2).getByLabel('Stable prices').check();
  await page.locator('.quizQuestion').nth(3).getByLabel('Answer').fill('employment');
  await page.locator('.quizQuestion').nth(4).getByLabel('Balance of payments stability').check();
  await page.locator('.quizQuestion').nth(5).getByLabel('Answer').fill('income');
  await page.locator('.quizQuestion').nth(6).getByLabel('More output may use more resources and create more pollution.').check();
  await page.locator('.quizQuestion').nth(7).getByLabel('Answer').fill('payments');
}

test.describe('site smoke', () => {
  test.beforeEach(async ({ page }) => {
    await page.route('https://hm.baidu.com/**', (route) => route.abort());
    await page.route('https://oehlerhuang.com/', async (route) => {
      if (route.request().method() === 'POST') {
        await route.fulfill({ status: 200, body: 'ok' });
        return;
      }

      await route.continue();
    });
  });

  test('landing page renders at desktop and phone widths', async ({ page }) => {
    await page.goto(pageUrl('index.html'));

    await expect(page.getByRole('heading', { name: /Oehler-Huang Library/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /^Review lessons$/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Teaching philosophy \/ 教学理念/i }).first()).toBeVisible();
    await expect(page.getByRole('heading', { name: /^IGCSE Economics Lesson Library$/i })).toBeVisible();
    await expect(page.getByRole('img', { name: /Samuel Oehler-Huang/i })).toBeVisible();
    await expect(page.getByText(/Economics teacher, Suzhou Foreign Language School/i)).toBeVisible();
    await expect(page.getByText(/Not endorsed by Cambridge International Education/i)).toBeVisible();
    await expect(page.getByRole('link', { name: /Slide view/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /Handout view/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /^Quiz$/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /^Flashcards$/i }).first()).toBeVisible();
    const macroLessonCard = page.locator('.lesson-card').filter({ hasText: /4\.1\.1/i });
    await expect(macroLessonCard.getByRole('heading', { name: /Macroeconomic aims/i })).toBeVisible();

    await expect(page.getByRole('link', { name: /Slide view/i })).toHaveCount(7);
    await expect(page.getByRole('link', { name: /Handout view/i })).toHaveCount(7);
    await expect(page.getByRole('link', { name: /^Quiz$/i })).toHaveCount(7);
    await expect(page.getByRole('link', { name: /^Flashcards$/i })).toHaveCount(7);
    await expect(page.getByRole('link', { name: /Handout view/i }).first()).toHaveAttribute('href', /view=print/);
    await expect(page.getByRole('link', { name: /^Quiz$/i }).first()).toHaveAttribute('href', /view=quiz/);
    await expect(page.getByRole('link', { name: /^Flashcards$/i }).first()).toHaveAttribute('href', /view=flashcards/);

    await expectNoHorizontalOverflow(page);

    const macroHeadingBox = await page
      .locator('.lesson-card')
      .filter({ hasText: /4\.1\.1/i })
      .getByRole('heading', { name: /Macroeconomic aims/i })
      .boundingBox();
    const viewport = page.viewportSize();

    expect(macroHeadingBox).not.toBeNull();
    expect(macroHeadingBox.x).toBeGreaterThanOrEqual(0);
    expect(macroHeadingBox.x + macroHeadingBox.width).toBeLessThanOrEqual(viewport.width + 1);
  });

  test('teaching philosophy page renders bilingual pedagogy at desktop and phone widths', async ({ page }) => {
    await page.goto(pageUrl('pedagogy.html'));

    await expect(page.getByRole('link', { name: /Library index/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Teaching Philosophy/i })).toBeVisible();
    await expect(page.getByText('教学理念', { exact: true })).toBeVisible();
    await expect(page.getByRole('img', { name: /Samuel Oehler-Huang/i })).toBeVisible();
    await expect(page.getByText(/Economics teacher, Suzhou Foreign Language School/i)).toBeVisible();
    await expect(page.getByText(/苏州外国语学校经济学教师/)).toBeVisible();
    await expect(page.getByRole('heading', { name: /What the materials show/i })).toHaveCount(0);
    await expect(page.getByRole('heading', { name: /From curiosity to exam explanation/i })).toBeVisible();
    await expect(page.getByText(/情境导入/)).toBeVisible();
    await expect(page.getByText(/从政策问题、市场现象或真实案例出发/)).toBeVisible();
    await expect(page.getByRole('heading', { name: /Aligned with Cambridge teaching principles/i })).toBeVisible();
    await expect(page.getByText(/Confident 自信/)).toBeVisible();
    await expect(page.getByText(/本课程对齐剑桥教学指导/)).toBeVisible();
    await expect(page.getByRole('heading', { name: /For parents/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /面向家长/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /For teachers/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /面向教师/i })).toBeVisible();
    await expect(page.getByText(/does not claim formal endorsement/i)).toBeVisible();

    await expectNoHorizontalOverflow(page);
  });

  test('macroeconomic aims deck renders at desktop and phone widths', async ({ page }, testInfo) => {
    await page.goto(pageUrl('lessons/unit-4-government/4-1-macroeconomic-aims/index.html'));

    await expect(page.locator('.slide.is-active')).toBeVisible();
    await expect(page.locator('.slide.is-active h1')).toHaveText(/Macroeconomic aims/i);
    await expect(page.locator('#progress')).toBeVisible();
    await expect(page.getByRole('link', { name: /Library index/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Lesson start/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Student print view/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /^Quiz$/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /^Flashcards$/i })).toBeVisible();

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

  test('student selector opens on demand from lesson slides', async ({ page }) => {
    await page.route('https://randomizerselection.github.io/studentselector/selector.css', async (route) => {
      await route.fulfill({ status: 200, contentType: 'text/css', body: '.selector-overlay-host{position:fixed;inset:0;z-index:9999;background:#fff}' });
    });
    await page.route('https://randomizerselection.github.io/studentselector/selector.js', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/javascript',
        body: `
          window.StudentSelector = {
            mount(container, options = {}) {
              window.__studentSelectorMountOptions = options;
              container.innerHTML = \`
                <main class="selector-root">
                  <div class="selector-shell">
                    <section class="selector-dock" aria-label="Selector controls">
                      <div class="selector-titlebar">
                        <div class="selector-brand">
                          <img alt="" />
                          <div><h1>Random Student Selector</h1><p>27 left | 0 graded</p></div>
                        </div>
                        <button type="button" class="selector-close" data-close-selector>Close</button>
                      </div>
                      <label class="selector-section"><span class="selector-section-label">Class</span><select class="selector-class-select"><option>IC 1.1</option></select></label>
                      <div class="selector-metrics">
                        <div class="selector-metric"><strong>27</strong><span>Remaining</span></div>
                        <div class="selector-metric"><strong>0</strong><span>Graded</span></div>
                        <div class="selector-metric"><strong>0</strong><span>No Grade</span></div>
                        <div class="selector-metric"><strong>0</strong><span>Absent</span></div>
                      </div>
                      <div class="selector-segmented">
                        <button class="selector-time-button">5 sec</button>
                        <button class="selector-time-button">30 sec</button>
                        <button class="selector-time-button">1 min</button>
                        <button class="selector-time-button">2 min</button>
                      </div>
                      <div class="selector-toggle-row"><button class="selector-toggle">Sound</button><button class="selector-toggle">Slot Effect</button></div>
                      <div class="selector-actions"><button class="selector-button">Attendance</button><button class="selector-button">View Summary</button><button class="selector-button">Play Intro</button><button class="selector-button">Play Closing</button></div>
                      <button class="selector-button selector-primary" data-action="start">START SELECTION</button>
                    </section>
                    <section class="selector-stage" aria-label="Selection stage">
                      <header class="selector-stage-header"><div><h2>IC 1.1</h2><p class="selector-meta">27 left | 0 graded</p></div><div class="selector-pill-row"><span class="selector-pill">5 sec</span><span class="selector-pill">Slot effect</span></div></header>
                      <div class="selector-reel">
                        <div class="selector-reel-window" data-test-reel>
                          <div class="selector-name-stack">
                            <div class="selector-name">Student A</div>
                            <div class="selector-name is-current" data-current-name>Ready</div>
                            <div class="selector-name">Student C</div>
                          </div>
                        </div>
                        <div class="selector-progress"><span></span></div>
                      </div>
                      <footer class="selector-stage-footer"><p class="selector-help">Ask, think, select.</p></footer>
                    </section>
                  </div>
                </main>\`;
              container.querySelector('[data-close-selector]').addEventListener('click', () => options.onClose?.());
              container.querySelector('[data-action="start"]').addEventListener('click', () => {
                container.querySelector('[data-current-name]').textContent = 'Selected Student';
                container.querySelector('.selector-stage-footer').innerHTML = \`
                  <div class="selector-outcomes" aria-label="Outcome controls">
                    <button class="selector-outcome" type="button" data-action="rate" data-rating="A*">A*<span>Excellent</span></button>
                    <button class="selector-outcome" type="button" data-action="rate" data-rating="A">A<span>Strong</span></button>
                    <button class="selector-outcome" type="button" data-action="rate" data-rating="B">B<span>Secure</span></button>
                    <button class="selector-outcome" type="button" data-action="rate" data-rating="C">C<span>Needs support</span></button>
                    <button class="selector-outcome" type="button" data-action="no-grade">No Grade<span>Skip grading</span></button>
                    <button class="selector-outcome" type="button" data-action="absent">Absent<span>Remove for today</span></button>
                  </div>
                \`;
              });
              return { destroy() { container.innerHTML = ''; } };
            }
          };
        `,
      });
    });

    await page.goto(pageUrl('lessons/unit-2-allocation/2-8-market-economic-system/index.html'));
    await page.addStyleTag({ content: 'body { color: rgb(17, 24, 39); }' });
    const activeHeading = page.locator('.slide.is-active h1, .slide.is-active h2').first();
    await expect(activeHeading).toHaveText(/Market economic system/i);
    await expect(activeHeading).toHaveCSS('color', 'rgb(245, 248, 255)');

    await page.getByRole('button', { name: /Student selector/i }).click();
    await expect(page.locator('.studentSelectorSidePanel')).toBeVisible();
    await expect(page.locator('.studentSelectorSidePanel').getByRole('heading', { name: /Random Student Selector/i })).toBeVisible();
    await expect(page.locator('.studentSelectorSidePanel .selector-titlebar .selector-close')).toBeHidden();
    await expect(page.getByLabel('Close student selector')).toBeVisible();
    await expect(activeHeading).toHaveCSS('color', 'rgb(245, 248, 255)');
    await expect(page.locator('.studentSelectorSidePanel .selector-class-select option').first()).toHaveCSS('color', 'rgb(7, 17, 31)');
    await expect(page.locator('.studentSelectorSidePanel .selector-class-select option').first()).toHaveCSS('background-color', 'rgb(255, 255, 255)');
    await expect(page.locator('.studentSelectorSidePanel')).not.toHaveClass(/is-stage-overlay/);
    await expect(page.locator('[data-test-reel]')).toBeHidden();
    await expect(page.locator('link[href*="randomizerselection.github.io/studentselector/selector.css"]')).toHaveCount(0);
    await expect.poll(() => page.evaluate(() => window.__studentSelectorMountOptions?.skipStyles)).toBe(true);

    const startButton = page.locator('.studentSelectorSidePanel').getByRole('button', { name: /START SELECTION/i });
    await startButton.hover();
    const startHoverStyle = await startButton.evaluate((button) => {
      const style = window.getComputedStyle(button);
      return { color: style.color, backgroundImage: style.backgroundImage };
    });
    expect(startHoverStyle.color).toBe('rgb(7, 17, 31)');
    expect(startHoverStyle.backgroundImage).toContain('linear-gradient');

    await startButton.click();
    await expect(page.locator('.studentSelectorSidePanel')).toHaveClass(/is-stage-overlay/);
    await expect(page.locator('[data-test-reel]')).toBeVisible();

    const panelFit = await page.locator('.studentSelectorSidePanel').evaluate((panel) => ({
      clientHeight: panel.clientHeight,
      scrollHeight: panel.scrollHeight,
      reelBottom: panel.querySelector('[data-test-reel]').getBoundingClientRect().bottom,
      panelBottom: panel.getBoundingClientRect().bottom,
      dockOpacity: window.getComputedStyle(panel.querySelector('.selector-dock')).opacity,
      outcomeWidth: panel.querySelector('.selector-outcomes').getBoundingClientRect().width,
      stageWidth: panel.querySelector('.selector-stage').getBoundingClientRect().width,
      stagePaddingLeft: parseFloat(window.getComputedStyle(panel.querySelector('.selector-stage')).paddingLeft),
      stagePaddingRight: parseFloat(window.getComputedStyle(panel.querySelector('.selector-stage')).paddingRight),
      closeLeft: panel.querySelector('.studentSelectorPanelClose').getBoundingClientRect().left,
      pillRight: panel.querySelector('.selector-pill-row').getBoundingClientRect().right,
    }));
    expect(panelFit.scrollHeight).toBeLessThanOrEqual(panelFit.clientHeight + 1);
    expect(panelFit.reelBottom).toBeLessThanOrEqual(panelFit.panelBottom + 1);
    expect(panelFit.dockOpacity).toBe('0');
    expect(panelFit.outcomeWidth).toBeGreaterThanOrEqual(panelFit.stageWidth - panelFit.stagePaddingLeft - panelFit.stagePaddingRight - 1);
    expect(panelFit.pillRight).toBeLessThanOrEqual(panelFit.closeLeft - 6);

    await page.keyboard.press('Space');
    await expect(activeHeading).toHaveText(/Market economic system/i);

    await page.getByLabel('Close student selector').click();
    await expect(page.locator('.studentSelectorSidePanel')).toHaveCount(0);
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
    await expect(page.getByRole('link', { name: /Library index/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Lesson start/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Slide mode/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /^Flashcards$/i })).toBeVisible();
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

  test('lesson flashcard views render for every available deck', async ({ page }) => {
    const flashcardPaths = [
      'lessons/unit-2-allocation/2-8-market-economic-system/index.html',
      'lessons/unit-2-allocation/2-8-market-failure/index.html',
      'lessons/unit-4-government/4-1-macroeconomic-aims/index.html',
      'lessons/unit-4-government/4-2-fiscal-policy/lesson-1.html',
      'lessons/unit-4-government/4-2-fiscal-policy/lesson-2.html',
      'lessons/unit-4-government/4-2-fiscal-policy/lesson-3.html',
      'lessons/unit-4-government/4-2-fiscal-policy/lesson-4.html',
      'lessons/unit-4-government/4-3-fiscal-policy/index.html',
    ];

    for (const flashcardPath of flashcardPaths) {
      await page.goto(pageUrl(flashcardPath) + '?view=flashcards');
      await expect(page.locator('.flashcardDeck')).toBeVisible();
      await expect(page.locator('.flashcardPosition')).toHaveText('1 of 8');
      await expect(page.locator('.flashcardProgressTrack')).toHaveAttribute('aria-valuemax', '8');
      await expect(page.locator('.flashcardTags span').first()).toHaveText(/Definition|Fill in the blank/);
      await expect(page.getByRole('button', { name: /^Again$/i })).toBeDisabled();
      await expect(page.getByRole('button', { name: /^Know$/i })).toBeDisabled();
      await expect(page.getByRole('link', { name: /Slide mode/i })).toBeVisible();
      await expect(page.getByRole('link', { name: /^Quiz$/i })).toBeVisible();
      await expect(page.getByRole('link', { name: /Student print view/i })).toBeVisible();
      const cardTypes = await page.evaluate(() => window.IGCSE.flashcards.cards.map((card) => card.type));
      expect(cardTypes.every((type) => ['definition', 'fillBlank'].includes(type))).toBe(true);
      await expectNoHorizontalOverflow(page);
    }
  });

  test('student flashcards flip, mark, shuffle and reset', async ({ page }) => {
    await page.goto(pageUrl('lessons/unit-4-government/4-1-macroeconomic-aims/index.html') + '?view=flashcards');

    await expect(page.locator('.flashcardPosition')).toHaveText('1 of 8');
    await expect(page.locator('.flashcardFaceLabel')).toHaveText('Fill in the blank');
    await expect(page.locator('.flashcardPrompt')).toHaveText(/Macroeconomic aims include/i);
    await expect(page.locator('.flashcardKnownCount')).toHaveText('0');
    await expect(page.locator('.flashcardAgainCount')).toHaveText('0');

    await page.getByRole('button', { name: /^Flip$/i }).click();
    await expect(page.locator('.flashcardFaceLabel')).toHaveText('Answer');
    await expect(page.locator('.flashcardPrompt')).toHaveText('sustainability');
    await expect(page.getByRole('button', { name: /^Again$/i })).toBeEnabled();
    await expect(page.getByRole('button', { name: /^Know$/i })).toBeEnabled();

    await page.getByRole('button', { name: /^Again$/i }).click();
    await expect(page.locator('.flashcardPosition')).toHaveText('2 of 8');
    await expect(page.locator('.flashcardAgainCount')).toHaveText('1');

    await page.locator('.flashcardCard').click();
    await page.getByRole('button', { name: /^Know$/i }).click();
    await expect(page.locator('.flashcardPosition')).toHaveText('3 of 8');
    await expect(page.locator('.flashcardKnownCount')).toHaveText('1');

    await page.getByRole('button', { name: /^Shuffle$/i }).click();
    await expect(page.locator('.flashcardPosition')).toHaveText('1 of 8');
    await page.getByRole('button', { name: /^Reset$/i }).click();
    await expect(page.locator('.flashcardPosition')).toHaveText('1 of 8');
    await expect(page.locator('.flashcardPrompt')).toHaveText(/Macroeconomic aims include/i);
    await expect(page.locator('.flashcardKnownCount')).toHaveText('0');
    await expect(page.locator('.flashcardAgainCount')).toHaveText('0');
    await expectNoHorizontalOverflow(page);
  });

  test('flashcard definitions use terms from the definitions reference', async () => {
    const terms = definitionTerms();
    const missingTerms = [];

    for (const flashcardPath of findFlashcardFiles(path.join(root, 'lessons'), root)) {
      const cards = readFlashcards(flashcardPath).cards || [];
      cards
        .filter((card) => card.type === 'definition')
        .forEach((card) => {
          if (!terms.has(card.term)) missingTerms.push(`${flashcardPath}: ${card.term}`);
          expect(card.definition).toBeTruthy();
          expect(card.prompt).toBeUndefined();
          expect(card.answer).toBeUndefined();
        });

      cards
        .filter((card) => card.type === 'fillBlank')
        .forEach((card) => {
          expect(card.prompt).toContain('__________');
          expect(card.answer).toBeTruthy();
          expect(card.term).toBeUndefined();
          expect(card.definition).toBeUndefined();
        });
    }

    expect(missingTerms).toEqual([]);
  });

  test('lesson quiz views render for every available deck', async ({ page }) => {
    const quizPaths = [
      'lessons/unit-2-allocation/2-8-market-economic-system/index.html',
      'lessons/unit-2-allocation/2-8-market-failure/index.html',
      'lessons/unit-4-government/4-1-macroeconomic-aims/index.html',
      'lessons/unit-4-government/4-2-fiscal-policy/lesson-1.html',
      'lessons/unit-4-government/4-2-fiscal-policy/lesson-2.html',
      'lessons/unit-4-government/4-2-fiscal-policy/lesson-3.html',
      'lessons/unit-4-government/4-2-fiscal-policy/lesson-4.html',
    ];

    for (const quizPath of quizPaths) {
      await page.goto(pageUrl(quizPath) + '?view=quiz');
      await expect(page.locator('.quizDeck')).toBeVisible();
      await expect(page.locator('.quizQuestion')).toHaveCount(8);
      await expect(page.locator('.quizAnsweredCount')).toHaveText('0/8 answered');
      await expect(page.locator('.quizProgressTrack')).toHaveAttribute('aria-valuemax', '8');
      await expect(page.getByRole('textbox', { name: /^Name$/i })).toBeVisible();
      await expect(page.getByRole('combobox', { name: /^Class$/i })).toBeVisible();
      await expect(page.getByRole('combobox', { name: /^Class$/i }).locator('option')).toHaveText([
        'Choose class',
        'IC 1.1',
        'IC 1.2',
        'IC 1.3',
        'IC 2.1',
        'IC 2.2',
        'IC 3.1',
        'IC 3.2',
      ]);
      await expect(page.getByRole('link', { name: /Slide mode/i })).toBeVisible();
      await expect(page.getByRole('link', { name: /Student print view/i })).toBeVisible();
      await expect(page.getByRole('link', { name: /^Flashcards$/i })).toBeVisible();
      await expectNoHorizontalOverflow(page);
    }
  });

  test('student quiz progress updates and try again unlocks the form', async ({ page }) => {
    await page.goto(pageUrl('lessons/unit-4-government/4-1-macroeconomic-aims/index.html') + '?view=quiz');

    await expect(page.locator('.quizAnsweredCount')).toHaveText('0/8 answered');
    await expect(page.locator('.quizProgressTrack')).toHaveAttribute('aria-valuenow', '0');

    await page.getByRole('textbox', { name: /^Name$/i }).fill('Test Student');
    await page.getByRole('combobox', { name: /^Class$/i }).selectOption('IC 1.1');
    await page.locator('.quizQuestion').nth(0).getByLabel('The whole economy').check();
    await expect(page.locator('.quizAnsweredCount')).toHaveText('1/8 answered');
    await expect(page.locator('.quizProgressTrack')).toHaveAttribute('aria-valuenow', '1');
    await expect(page.locator('.quizQuestion').nth(0)).toHaveClass(/is-answered/);

    await page.locator('.quizQuestion').nth(1).getByLabel('Answer').fill('real GDP');
    await expect(page.locator('.quizAnsweredCount')).toHaveText('2/8 answered');
    await page.locator('.quizQuestion').nth(1).getByLabel('Answer').fill('   ');
    await expect(page.locator('.quizAnsweredCount')).toHaveText('1/8 answered');

    await page.getByRole('button', { name: /Mark quiz/i }).click();
    await expect(page.locator('.quizResult')).toBeHidden();

    await fillPerfectMacroeconomicAimsQuiz(page);
    await expect(page.locator('.quizAnsweredCount')).toHaveText('8/8 answered');
    await page.getByRole('button', { name: /Mark quiz/i }).click();

    await expect(page.locator('.quizScore')).toHaveText('8/8 (100%)');
    await expect(page.locator('.quizCorrectCount')).toHaveText('8/8');
    await expect(page.locator('.quizReviewCount')).toHaveText('0');
    await expect(page.locator('.quizPercent')).toHaveText('100%');
    await expect(page.getByRole('textbox', { name: /^Name$/i })).toBeDisabled();
    await expect(page.locator('.quizQuestion').nth(0).getByLabel('The whole economy')).toBeDisabled();
    await expect(page.getByRole('button', { name: /Mark quiz/i })).toBeDisabled();

    await page.getByRole('button', { name: /Try again/i }).click();
    await expect(page.getByRole('textbox', { name: /^Name$/i })).toBeEnabled();
    await expect(page.getByRole('textbox', { name: /^Name$/i })).toHaveValue('');
    await expect(page.locator('.quizAnsweredCount')).toHaveText('0/8 answered');
    await expect(page.locator('.quizProgressTrack')).toHaveAttribute('aria-valuenow', '0');
    await expect(page.locator('.quizResult')).toBeHidden();
    await expect(page.getByRole('button', { name: /Mark quiz/i })).toBeEnabled();
    await expectNoHorizontalOverflow(page);
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
    await page.getByRole('combobox', { name: /^Class$/i }).selectOption('IC 1.1');

    await fillPerfectMacroeconomicAimsQuiz(page);

    await page.getByRole('button', { name: /Mark quiz/i }).click();

    await expect(page.locator('.quizScore')).toHaveText('8/8 (100%)');
    await expect(page.locator('.quizCorrectCount')).toHaveText('8/8');
    await expect(page.locator('.quizReviewCount')).toHaveText('0');
    await expect(page.locator('.quizQuestion.is-correct')).toHaveCount(8);
    await expect(page.locator('.quizCorrection').filter({ hasText: /Correct: gdp/i })).toBeVisible();
    await expect(page.locator('.quizSubmitStatus')).toHaveText(/Submission failed - retry/i);
    await expect(page.getByRole('button', { name: /Retry submission/i })).toBeVisible();
    await expect(page.getByRole('combobox', { name: /^Class$/i })).toBeDisabled();
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
    await page.getByRole('combobox', { name: /^Class$/i }).selectOption('IC 1.1');

    await fillPerfectMacroeconomicAimsQuiz(page);

    await page.getByRole('button', { name: /Mark quiz/i }).click();

    await expect(page.locator('.quizScore')).toHaveText('8/8 (100%)');
    await expect(page.locator('.quizSubmitStatus')).toHaveText(/Score submitted to your teacher/i);

    const submitted = new URLSearchParams(submissionBody);
    expect(submitted.get('form-name')).toBe('quiz-submissions');
    expect(submitted.get('studentName')).toBe('Test Student');
    expect(submitted.get('studentClass')).toBe('IC 1.1');
    expect(submitted.get('lessonCode')).toBe('4.1.1');
    expect(submitted.get('score')).toBe('8');
    expect(submitted.get('maxScore')).toBe('8');
    expect(submitted.get('responsesJson')).toContain('growth-measure');
  });

  test('fiscal policy menu links back and offers lesson views', async ({ page }) => {
    await page.goto(pageUrl('lessons/unit-4-government/4-2-fiscal-policy/index.html'));

    await expect(page.getByRole('link', { name: /Library index/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Slide view/i })).toHaveCount(4);
    await expect(page.getByRole('link', { name: /Handout view/i })).toHaveCount(4);
    await expect(page.getByRole('link', { name: /^Quiz$/i })).toHaveCount(4);
    await expect(page.getByRole('link', { name: /^Flashcards$/i })).toHaveCount(4);
    await expect(page.getByRole('link', { name: /Handout view/i }).first()).toHaveAttribute('href', /view=print/);
    await expect(page.getByRole('link', { name: /^Quiz$/i }).first()).toHaveAttribute('href', /view=quiz/);
    await expect(page.getByRole('link', { name: /^Flashcards$/i }).first()).toHaveAttribute('href', /view=flashcards/);

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
