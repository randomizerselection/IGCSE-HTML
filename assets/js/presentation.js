/* ============================================================
   presentation.js — reusable slide engine for IGCSE Economics
   Usage (from a lesson's index.html):
       <script src="../../../assets/js/visuals.js"></script>
       <script src="../../../assets/js/presentation.js"></script>
       <script src="./slides.js"></script>
       <script>IGCSE.mountLesson(IGCSE.lesson);</script>
   The lesson object must have: { meta, slides } (see _template).
   ============================================================ */

window.IGCSE = window.IGCSE || {};

/* ---------- Utilities ---------- */
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (m) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[m]));

const pad = (n) => String(n).padStart(2, '0');

/* ---------- Slide chrome ---------- */
const topline = (slide, idx, total) => `
  <div class="topline">
    <span class="badge">${esc(slide.eyebrow || 'Economics')}</span>
    <span class="count">${pad(idx + 1)} / ${pad(total)}</span>
  </div>
`;

const footer = (meta, slide) => `
  <div class="slide-footer">
    <span>${esc(meta.courseLabel || 'Cambridge IGCSE Economics 0455')}</span>
    <span class="creator">${esc(meta.creatorLabel || 'Created by Samuel Oehler-Huang, Suzhou Foreign Language School')}</span>
    <span>${esc(slide.eyebrow || meta.lessonLabel || '')}</span>
  </div>
`;

/* ---------- Component helpers ---------- */
const cardGrid = (cards = []) => `
  <div class="cardgrid">
    ${cards.map(c => `
      <div class="card">
        ${c[2] ? `<div class="num">${esc(c[2])}</div>` : ''}
        <b>${esc(c[0])}</b>
        <span>${esc(c[1])}</span>
      </div>
    `).join('')}
  </div>
`;

const numberedCards = (items = []) => `
  <div class="cardgrid">
    ${items.map(it => `
      <div class="card">
        <div class="num">${esc(it[0])}</div>
        <b>${esc(it[1])}</b>
        <span>${esc(it[2] || '')}</span>
      </div>
    `).join('')}
  </div>
`;

const choiceList = (items = []) => `
  <div class="choices">
    ${items.map(x => `<div class="choice">${esc(x)}</div>`).join('')}
  </div>
`;

const mcqChoiceList = (items = []) => `
  <div class="choices is-mcq">
    ${items.map((x, i) => `
      <div class="choice">
        <span class="choiceLetter">${String.fromCharCode(65 + i)}</span>
        <span>${esc(x)}</span>
      </div>
    `).join('')}
  </div>
`;

const stepList = (items = []) => `
  <div class="steps">
    ${items.map(x => `
      <div class="step">
        <div class="label">${esc(x[0])}</div>
        <div class="desc">${esc(x[1])}</div>
      </div>
    `).join('')}
  </div>
`;

const flowChips = (nodes = []) => {
  const arr = Array.isArray(nodes[0]) ? nodes[0] : nodes;
  return `
    <div class="flowRow">
      ${arr.map(x => `<div class="flowChip">${esc(x)}</div>`).join('')}
    </div>
  `;
};

const cleanList = (items = []) =>
  `<ul class="clean">${items.map(x => `<li>${esc(x)}</li>`).join('')}</ul>`;

/* ---------- Slide body renderers, keyed by slide.type ---------- */
const renderers = {
  hero: (s) => `
    <div>
      ${s.subtitle ? `<div class="sub">${esc(s.subtitle)}</div>` : ''}
      <h1>${esc(s.title)}</h1>
      ${s.eyebrow ? `<p class="lead">${esc(s.eyebrow)}</p>` : ''}
      ${s.kicker ? `<div class="kicker">${esc(s.kicker)}</div>` : ''}
    </div>
  `,

  roadmap: (s) => `
    <div>
      <h2>${esc(s.title)}</h2>
      ${s.lead ? `<p class="lead">${esc(s.lead)}</p>` : ''}
      ${numberedCards(s.items)}
    </div>
  `,

  outcomes: (s) => `
    <div>
      <h2>${esc(s.title)}</h2>
      ${s.lead ? `<p class="lead">${esc(s.lead)}</p>` : ''}
      ${choiceList(s.bullets)}
      ${s.footer ? `<div class="prompt">${esc(s.footer)}</div>` : ''}
    </div>
  `,

  term: (s) => `
    <div>
      <h2>${esc(s.title)}</h2>
      ${s.lead ? `<p class="lead">${esc(s.lead)}</p>` : ''}
      <div class="termBox">
        <b>${esc(s.term)}</b>
        <p>${esc(s.definition)}</p>
      </div>
      ${s.formula ? `<div class="formula">${esc(s.formula)}</div>` : ''}
      ${s.examples ? choiceList(s.examples) : ''}
    </div>
  `,

  compare: (s) => `
    <div>
      <h2>${esc(s.title)}</h2>
      ${s.question ? `<p class="lead">${esc(s.question)}</p>` : ''}
      ${s.term ? `
        <div class="termBox">
          <b>${esc(s.term)}</b>
          <p>${esc(s.definition)}</p>
        </div>` : ''}
      <div class="splitCols">
        <div class="card"><b>${esc(s.leftTitle)}</b>${choiceList(s.left)}</div>
        <div class="card"><b>${esc(s.rightTitle)}</b>${choiceList(s.right)}</div>
      </div>
      ${s.prompt ? `<div class="prompt">${esc(s.prompt)}</div>`
        : s.divider ? `<div class="prompt">${esc(s.divider)}</div>` : ''}
    </div>
  `,

  quiz: (s) => `
    <div>
      ${s.title ? `<h2>${esc(s.title)}</h2>` : ''}
      ${s.question ? `<p class="lead">${esc(s.question)}</p>` : ''}
      ${mcqChoiceList(s.choices)}
      ${s.prompt ? `<div class="prompt">${esc(s.prompt)}</div>` : ''}
    </div>
  `,

  answer: (s) => `
    <div>
      <h2>${esc(s.title)}</h2>
      ${s.answer ? `
        <div class="answerBox">
          <div class="big">${esc(s.answer)}</div>
          ${s.body ? `<p>${esc(s.body)}</p>` : ''}
        </div>` : ''}
      ${s.steps ? stepList(s.steps) : ''}
      ${s.cue ? `<div class="prompt">${esc(s.cue)}</div>` : ''}
    </div>
  `,

  cards: (s) => `
    <div>
      <h2>${esc(s.title)}</h2>
      ${s.lead ? `<p class="lead">${esc(s.lead)}</p>` : ''}
      ${cardGrid(s.cards)}
      ${s.footer ? `<div class="prompt">${esc(s.footer)}</div>` : ''}
    </div>
  `,

  split: (s) => `
    <div>
      <h2>${esc(s.title)}</h2>
      <div class="splitCols">
        <div class="card"><b>${esc(s.leftTitle)}</b>${cleanList(s.left)}</div>
        <div class="card"><b>${esc(s.rightTitle)}</b>${cleanList(s.right)}</div>
      </div>
      ${s.prompt ? `<div class="prompt">${esc(s.prompt)}</div>` : ''}
    </div>
  `,

  flow: (s) => `
    <div>
      <h2>${esc(s.title)}</h2>
      ${s.question ? `<p class="lead">${esc(s.question)}</p>` : ''}
      ${flowChips(s.nodes)}
      ${s.prompt ? `<div class="prompt">${esc(s.prompt)}</div>` : ''}
      ${s.footer ? `<div class="prompt">${esc(s.footer)}</div>` : ''}
    </div>
  `,

  exam: (s) => `
    <div>
      <h2>${esc(s.title)}</h2>
      <p class="lead">${esc(s.question)}</p>
      <div class="cardgrid">
        ${(s.keywords || []).map(k => `
          <div class="card">
            <b>${esc(k)}</b>
            <span>required link in the chain</span>
          </div>
        `).join('')}
      </div>
      ${s.prompt ? `<div class="prompt">${esc(s.prompt)}</div>` : ''}
    </div>
  `,

  discussion: (s) => `
    <div class="discussionPrompt">
      <p>${esc(s.question)}</p>
      ${s.zh ? `<p class="zh">${esc(s.zh)}</p>` : ''}
    </div>
  `,

  fact: (s) => `
    <div class="factBlock">
      <div class="factCountry">
        ${s.flag ? `<span class="factFlag">${esc(s.flag)}</span>` : ''}
        <span>${esc(s.country || '')}</span>
      </div>
      <p class="factText">${esc(s.fact || (s.facts || [])[0] || '')}</p>
      ${s.zh ? `<p class="factZh">${esc(s.zh)}</p>` : ''}
    </div>
  `,

  taxSim: (s) => `
    <div class="taxSim" data-default-mode="${esc(s.defaultMode || 'progressive')}">
      <h2>${esc(s.title || 'Tax burden simulator')}</h2>
      ${s.lead ? `<p class="lead">${esc(s.lead)}</p>` : ''}
      <div class="simModes" role="group" aria-label="Tax type">
        <button type="button" class="simMode is-active" data-mode="progressive">Progressive</button>
        <button type="button" class="simMode" data-mode="proportional">Proportional</button>
        <button type="button" class="simMode" data-mode="regressive">Regressive</button>
      </div>
      <div class="simResults">
        <div class="simHousehold" data-household="low">
          <div class="simName">Lower-income household</div>
          <div class="simIncome"></div>
          <div class="simBarLabel">Income split</div>
          <div class="simStackedBar">
            <span class="simTaxSegment"></span>
            <span class="simAfterTaxSegment"></span>
          </div>
          <div class="simTaxRows">
            <div><span>Tax amount</span><b class="simTaxAmount"></b></div>
            <div><span>Tax paid as % of income</span><b class="simTaxRate"></b></div>
            <div><span>After-tax income</span><b class="simAfterTax"></b></div>
          </div>
        </div>
        <div class="simHousehold" data-household="high">
          <div class="simName">Higher-income household</div>
          <div class="simIncome"></div>
          <div class="simBarLabel">Income split</div>
          <div class="simStackedBar">
            <span class="simTaxSegment"></span>
            <span class="simAfterTaxSegment"></span>
          </div>
          <div class="simTaxRows">
            <div><span>Tax amount</span><b class="simTaxAmount"></b></div>
            <div><span>Tax paid as % of income</span><b class="simTaxRate"></b></div>
            <div><span>After-tax income</span><b class="simAfterTax"></b></div>
          </div>
        </div>
      </div>
      <div class="simLegend">
        <span><i class="is-tax"></i>Tax paid</span>
        <span><i class="is-after-tax"></i>After-tax income</span>
      </div>
      <div class="simTakeaway"></div>
    </div>
  `,

  chinaIncomeTaxSim: (s) => `
    <div class="chinaTaxSim"
      data-default-income="${esc(s.defaultIncome ?? 240000)}"
      data-standard-deduction="${esc(s.standardDeduction ?? 60000)}">
      <h2>${esc(s.title || 'Mainland China income tax calculator')}</h2>
      <p class="chinaTaxZh">中国大陆个人所得税计算器</p>
      <div class="chinaTaxGrid">
        <div class="chinaTaxPanel">
          <div class="chinaTaxControls">
            <label>
              <span>Annual gross income</span>
              <small>税前年收入</small>
              <input class="chinaGrossIncome" type="number" min="0" step="1000" inputmode="numeric" />
            </label>
            <label>
              <span>Other annual deductions</span>
              <small>其他年度扣除</small>
              <input class="chinaExtraDeductions" type="number" min="0" step="1000" inputmode="numeric" value="0" />
            </label>
          </div>
          <div class="chinaPresetRow" role="group" aria-label="Income presets">
            ${(s.presets || [96000, 180000, 360000, 720000, 1200000]).map((amount) => `
              <button type="button" class="chinaPreset" data-income="${esc(amount)}"></button>
            `).join('')}
          </div>
          <div class="chinaFormula">
            Taxable income = annual income - RMB 60,000 - deductions.
            <span>应纳税所得额 = 年收入 - 60,000元 - 扣除。</span>
          </div>
        </div>
        <div class="chinaTaxPanel chinaTaxResults">
          <div class="chinaMetric is-large">
            <span>Estimated annual IIT</span>
            <b class="chinaTaxDue"></b>
          </div>
          <div class="chinaMetric">
            <span>Taxable income</span>
            <b class="chinaTaxableIncome"></b>
          </div>
          <div class="chinaMetric">
            <span>Marginal rate</span>
            <b class="chinaMarginalRate"></b>
          </div>
          <div class="chinaMetric">
            <span>Effective rate</span>
            <b class="chinaEffectiveRate"></b>
          </div>
          <div class="chinaMetric">
            <span>Income after IIT</span>
            <b class="chinaAfterTaxIncome"></b>
          </div>
        </div>
      </div>
      <div class="chinaIncomeSplit" aria-label="Taxable income calculation">
        <span class="chinaStandardSegment"></span>
        <span class="chinaExtraSegment"></span>
        <span class="chinaTaxableSegment"></span>
      </div>
      <div class="chinaLegend">
        <span><i class="is-standard"></i>RMB 60,000 standard deduction</span>
        <span><i class="is-extra"></i>Other deductions</span>
        <span><i class="is-taxable"></i>Taxable income</span>
      </div>
      <div class="chinaBracketViz"></div>
      <div class="chinaSource">
        ${esc(s.source || 'Resident comprehensive income; simplified estimate using annual brackets and quick deductions.')}
      </div>
    </div>
  `,

  indirectTaxSim: (s) => `
    <div class="indirectTaxSim" data-tax-rate="${esc(s.taxRate ?? 10)}">
      <h2>${esc(s.title || 'Why indirect taxes can be regressive')}</h2>
      <div class="productChooser" role="group" aria-label="Choose product">
        ${(s.products || [
          ['Groceries', '🛒', 50],
          ['School shoes', '👟', 80],
          ['Smartphone', '📱', 600],
          ['Bicycle', '🚲', 900],
          ['Laptop', '💻', 1200],
        ]).map((product, i) => `
          <button type="button" class="productButton${i === 0 ? ' is-active' : ''}" data-price="${esc(product[2])}">
            <span class="productPic">${esc(product[1])}</span>
            <span class="productName">${esc(product[0])}</span>
            <span class="productPrice"></span>
          </button>
        `).join('')}
      </div>
      <div class="indirectProductSummary"></div>
      <div class="indirectViz">
        <div class="indirectHousehold" data-household="low">
          <div class="indirectName">Lower-income household</div>
          <div class="indirectMeta">Income: $20,000</div>
          <div class="indirectRows">
            <div><span>Indirect tax paid</span><b class="indirectTaxPaid"></b></div>
            <div><span>Tax as % of income</span><b class="indirectBurden"></b></div>
          </div>
          <div class="burdenMeter"><span></span></div>
        </div>
        <div class="indirectHousehold" data-household="high">
          <div class="indirectName">Higher-income household</div>
          <div class="indirectMeta">Income: $100,000</div>
          <div class="indirectRows">
            <div><span>Indirect tax paid</span><b class="indirectTaxPaid"></b></div>
            <div><span>Tax as % of income</span><b class="indirectBurden"></b></div>
          </div>
          <div class="burdenMeter"><span></span></div>
        </div>
      </div>
      <div class="indirectLegend">
        <span><i class="is-tax"></i>Tax as share of annual income</span>
      </div>
      <div class="indirectTakeaway"></div>
    </div>
  `,
};

/* ---------- Full slide renderer ---------- */
function renderSlide(meta, slide, idx, total) {
  if (slide.type === 'discussion') {
    const photo = slide.visual && typeof slide.visual === 'object' ? slide.visual : null;
    const caption = photo?.caption || photo?.alt || '';
    const credit = photo?.credit || '';
    const promptLength = String(slide.question || '').length + String(slide.zh || '').length;
    const sizeClass = promptLength > 135 ? ' is-long' : promptLength > 100 ? ' is-medium' : '';
    return `
      <section class="slide is-discussion${sizeClass}" data-idx="${idx}"
               data-notes="${esc(slide.notes || 'Teacher cue: let students discuss the question before taking responses.')}">
        ${photo?.src ? `
          <img class="discussionBg"
               src="${esc(photo.src)}"
               alt="${esc(photo.alt || '')}"
               loading="lazy"
               decoding="async" />` : ''}
        ${topline(slide, idx, total)}
        <div class="discussionContent">
          ${renderers.discussion(slide)}
        </div>
        ${caption || credit ? `
          <div class="discussionCredit">
            ${caption ? `<span>${esc(caption)}</span>` : '<span></span>'}
            ${credit ? `<span>${esc(credit)}</span>` : ''}
          </div>` : ''}
        ${footer(meta, slide)}
      </section>
    `;
  }

  // Section transitions get a special wide layout
  if (slide.type === 'section') {
    const sectionVisual = IGCSE.renderVisual(slide.visual, `sec-${idx}`);
    return `
      <section class="slide is-section" data-idx="${idx}"
               data-notes="${esc(slide.notes || 'Section transition — pause and reset attention.')}">
        ${topline(slide, idx, total)}
        <div class="content is-section${sectionVisual ? '' : ' is-full'}">
          <div>
            <div class="badge">${esc(slide.eyebrow || 'Section')}</div>
            <div class="sectionTitle">${esc(slide.title)}</div>
            ${slide.subtitle ? `<p class="lead">${esc(slide.subtitle)}</p>` : ''}
          </div>
          ${sectionVisual ? `<aside class="visual">${sectionVisual}</aside>` : ''}
        </div>
        ${footer(meta, slide)}
      </section>
    `;
  }

  const r = renderers[slide.type];
  const body = r ? r(slide) : `<div><h2>${esc(slide.title || '')}</h2></div>`;

  const isHero = slide.type === 'hero';
  const isFact = slide.type === 'fact';
  const visual = IGCSE.renderVisual(slide.visual, `viz-${idx}`);

  return `
    <section class="slide${isHero ? ' is-hero' : ''}${isFact ? ' is-fact' : ''}" data-idx="${idx}"
             data-notes="${esc(slide.notes || 'Teacher cue: ask students to explain the mechanism before revealing any answer.')}">
      ${topline(slide, idx, total)}
      <div class="content${visual ? '' : ' is-full'}">
        <main>${body}</main>
        ${visual ? `<aside class="visual">${visual}</aside>` : ''}
      </div>
      ${footer(meta, slide)}
    </section>
  `;
}

/* ---------- Partial reveal helpers ---------- */
const partialSelectors = [
  '.content main > div > .lead',
  '.content main > div > .termBox',
  '.content main > div > .formula',
  '.content main > div > .choices > .choice',
  '.content main > div > .cardgrid > .card',
  '.content main > div > .splitCols > .card',
  '.content main > div > .flowRow > .flowChip',
  '.content main > div > .answerBox',
  '.content main > div > .steps > .step',
  '.content main > div > .prompt',
  '.content.is-section > div > .lead',
].join(',');

function getPartialSelectors(meta, slide) {
  const config = slide.partialReview;
  if (slide.type === 'quiz') return '';
  if (config === false) return '';
  if (Array.isArray(config)) return config.map((selector) => `.content main > div > ${selector}`).join(',');
  if (slide.type === 'hero' && config !== true) return '';
  return (config || meta.partialReview) ? partialSelectors : '';
}

function setupPartialReview(slideEls, slides, meta) {
  slideEls.forEach((el, i) => {
    const selectors = getPartialSelectors(meta, slides[i]);
    if (!selectors) return;
    const items = [...el.querySelectorAll(selectors)];
    if (!items.length) return;
    el.classList.add('has-partials');
    items.forEach((item) => {
      item.classList.add('partial-item');
      item.setAttribute('aria-hidden', 'true');
    });
  });
}

/* ---------- Mount & navigation ---------- */
IGCSE.mountLesson = function(lesson, mountEl = document.getElementById('deck')) {
  if (!lesson || !Array.isArray(lesson.slides)) {
    console.error('mountLesson: lesson.slides is required');
    return;
  }
  const { meta = {}, slides } = lesson;

  // Document title
  if (meta.title) document.title = meta.title;

  // Render
  mountEl.innerHTML = slides
    .map((s, i) => renderSlide(meta, s, i, slides.length))
    .join('');

  const slideEls = [...mountEl.querySelectorAll('.slide')];
  const progressBar = document.querySelector('#progress > span');
  const notesEl = document.getElementById('notes');
  const overviewEl = document.getElementById('overview');

  let idx = 0;
  const partialProgress = slides.map(() => 0);

  setupPartialReview(slideEls, slides, meta);
  setupTaxSimulators(mountEl);
  setupChinaIncomeTaxSimulators(mountEl);
  setupIndirectTaxSimulators(mountEl);

  function syncPartials(n) {
    const items = [...slideEls[n].querySelectorAll('.partial-item')];
    items.forEach((item, i) => {
      const isVisible = i < partialProgress[n];
      item.classList.toggle('is-visible', isVisible);
      item.setAttribute('aria-hidden', isVisible ? 'false' : 'true');
    });
  }

  function revealNextPartial() {
    const total = slideEls[idx].querySelectorAll('.partial-item').length;
    if (partialProgress[idx] >= total) return false;
    partialProgress[idx] += 1;
    syncPartials(idx);
    return true;
  }

  function hidePreviousPartial() {
    if (partialProgress[idx] <= 0) return false;
    partialProgress[idx] -= 1;
    syncPartials(idx);
    return true;
  }

  function show(n) {
    idx = Math.max(0, Math.min(slides.length - 1, n));
    slideEls.forEach((el, i) => el.classList.toggle('is-active', i === idx));
    syncPartials(idx);
    if (progressBar) progressBar.style.width = (((idx + 1) / slides.length) * 100) + '%';
    if (notesEl) notesEl.textContent = slideEls[idx].dataset.notes || '';
    if (location.hash !== `#${idx + 1}`) {
      history.replaceState(null, '', `#${idx + 1}`);
    }
  }

  function toggleNotes() {
    if (notesEl) notesEl.classList.toggle('is-visible');
  }

  function buildOverview() {
    if (!overviewEl) return;
    overviewEl.innerHTML = `
      <h2>${esc(meta.title || 'Lesson overview')}</h2>
      <div class="thumbGrid">
        ${slides.map((s, i) => `
          <button class="thumb" data-jump="${i}">
            <span class="n">${pad(i + 1)} · ${esc(s.eyebrow || s.type)}</span>
            <span class="t">${esc((s.title || '').replace(/\n/g, ' '))}</span>
          </button>
        `).join('')}
      </div>
    `;
    overviewEl.querySelectorAll('.thumb').forEach((b) => {
      b.addEventListener('click', () => {
        const n = parseInt(b.dataset.jump, 10);
        overviewEl.classList.remove('is-visible');
        show(n);
      });
    });
  }

  function toggleOverview() {
    if (!overviewEl) return;
    if (!overviewEl.dataset.built) { buildOverview(); overviewEl.dataset.built = '1'; }
    overviewEl.classList.toggle('is-visible');
  }

  function toggleFullscreen() {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen().catch(() => {});
  }

  // Keyboard
  document.addEventListener('keydown', (e) => {
    // Don't hijack keys when typing somewhere
    const target = e.target?.closest ? e.target : null;
    if (target?.closest('input, textarea, [contenteditable]')) return;
    const k = e.key;
    if (['ArrowRight', 'PageDown', ' '].includes(k)) {
      e.preventDefault();
      if (!revealNextPartial()) show(idx + 1);
    }
    else if (['ArrowLeft', 'PageUp'].includes(k)) {
      e.preventDefault();
      if (!hidePreviousPartial()) show(idx - 1);
    }
    else if (k === 'Home')                            { e.preventDefault(); show(0); }
    else if (k === 'End')                             { e.preventDefault(); show(slides.length - 1); }
    else if (k.toLowerCase() === 'n')                 { toggleNotes(); }
    else if (k.toLowerCase() === 'o')                 { toggleOverview(); }
    else if (k.toLowerCase() === 'f')                 { toggleFullscreen(); }
    else if (k === 'Escape')                          { overviewEl?.classList.remove('is-visible'); }
  });

  // Click-to-advance (but not on overview / notes / controls)
  mountEl.addEventListener('click', (e) => {
    const target = e.target?.closest ? e.target : null;
    if (target?.closest('.thumb, #notes, .help, button, a, input, label, select, .taxSim, .chinaTaxSim, .indirectTaxSim')) return;
    if (!revealNextPartial()) show(idx + 1);
  });

  // Touch-swipe
  let touchX = null;
  mountEl.addEventListener('touchstart', (e) => { touchX = e.touches[0].clientX; }, { passive: true });
  mountEl.addEventListener('touchend', (e) => {
    if (touchX == null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 60) {
      if (dx < 0) {
        if (!revealNextPartial()) show(idx + 1);
      } else if (!hidePreviousPartial()) {
        show(idx - 1);
      }
    }
    touchX = null;
  });

  // Initial
  const fromHash = parseInt(location.hash.replace('#', ''), 10);
  show(Number.isFinite(fromHash) ? fromHash - 1 : 0);

  return { show, toggleNotes, toggleOverview };
}

function setupTaxSimulators(root) {
  const sims = [...root.querySelectorAll('.taxSim')];
  const money = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });

  const rates = {
    progressive: { low: 0.10, high: 0.30 },
    proportional: { low: 0.20, high: 0.20 },
    regressive: { low: 0.30, high: 0.10 },
  };

  const taxFor = (income, mode, household) => {
    const rate = rates[mode]?.[household] ?? 0;
    return income * rate;
  };

  const labelFor = (mode) => ({
    progressive: 'Progressive: the higher-income household pays a higher percentage.',
    proportional: 'Proportional: both households pay the same percentage.',
    regressive: 'Regressive: the lower-income household pays a higher percentage.',
  }[mode] || '');

  sims.forEach((sim) => {
    let mode = sim.dataset.defaultMode || 'progressive';
    const buttons = [...sim.querySelectorAll('.simMode')];
    const incomes = { low: 20000, high: 100000 };

    const update = () => {
      buttons.forEach((button) => button.classList.toggle('is-active', button.dataset.mode === mode));
      for (const key of ['low', 'high']) {
        const box = sim.querySelector(`[data-household="${key}"]`);
        const tax = taxFor(incomes[key], mode, key);
        const rate = (tax / incomes[key]) * 100;
        box.querySelector('.simIncome').textContent = `Income: ${money.format(incomes[key])}`;
        box.querySelector('.simTaxAmount').textContent = money.format(tax);
        box.querySelector('.simTaxRate').textContent = `${rate.toFixed(1)}% of income`;
        box.querySelector('.simAfterTax').textContent = money.format(incomes[key] - tax);
        box.querySelector('.simTaxSegment').style.width = `${rate}%`;
        box.querySelector('.simAfterTaxSegment').style.width = `${100 - rate}%`;
      }
      sim.querySelector('.simTakeaway').textContent = labelFor(mode);
    };

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        mode = button.dataset.mode;
        update();
      });
    });
    update();
  });
}

function setupChinaIncomeTaxSimulators(root) {
  const sims = [...root.querySelectorAll('.chinaTaxSim')];
  const number = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });
  const money = (amount) => `RMB ${number.format(Math.max(0, Math.round(amount || 0)))}`;
  const brackets = [
    { lower: 0, upper: 36000, rate: 0.03, quick: 0 },
    { lower: 36000, upper: 144000, rate: 0.10, quick: 2520 },
    { lower: 144000, upper: 300000, rate: 0.20, quick: 16920 },
    { lower: 300000, upper: 420000, rate: 0.25, quick: 31920 },
    { lower: 420000, upper: 660000, rate: 0.30, quick: 52920 },
    { lower: 660000, upper: 960000, rate: 0.35, quick: 85920 },
    { lower: 960000, upper: Infinity, rate: 0.45, quick: 181920 },
  ];

  const clampNumber = (value) => Math.max(0, Number(value) || 0);
  const bracketLabel = (bracket) => {
    if (bracket.lower === 0) return `0-${number.format(bracket.upper)}`;
    if (!Number.isFinite(bracket.upper)) return `Over ${number.format(bracket.lower)}`;
    return `${number.format(bracket.lower)}-${number.format(bracket.upper)}`;
  };

  const calculateTax = (taxable) => {
    let tax = 0;
    const segments = brackets.map((bracket) => {
      const amount = Math.max(0, Math.min(taxable, bracket.upper) - bracket.lower);
      const segmentTax = amount * bracket.rate;
      tax += segmentTax;
      return { ...bracket, amount, segmentTax };
    });
    const active = brackets.find((bracket) => taxable > bracket.lower && taxable <= bracket.upper) || brackets[0];
    return { tax, segments, active };
  };

  sims.forEach((sim) => {
    const grossInput = sim.querySelector('.chinaGrossIncome');
    const extraInput = sim.querySelector('.chinaExtraDeductions');
    const presets = [...sim.querySelectorAll('.chinaPreset')];
    const standardDeduction = clampNumber(sim.dataset.standardDeduction || 60000);

    grossInput.value = sim.dataset.defaultIncome || 240000;

    presets.forEach((button) => {
      const income = clampNumber(button.dataset.income);
      button.textContent = money(income);
      button.addEventListener('click', () => {
        grossInput.value = income;
        update();
      });
    });

    const update = () => {
      const gross = clampNumber(grossInput.value);
      const extra = clampNumber(extraInput.value);
      const standardUsed = Math.min(gross, standardDeduction);
      const extraUsed = Math.min(extra, Math.max(0, gross - standardUsed));
      const taxable = Math.max(0, gross - standardDeduction - extra);
      const { tax, segments, active } = calculateTax(taxable);
      const grossBase = Math.max(gross, 1);

      presets.forEach((button) => {
        button.classList.toggle('is-active', clampNumber(button.dataset.income) === gross);
      });

      sim.querySelector('.chinaTaxDue').textContent = money(tax);
      sim.querySelector('.chinaTaxableIncome').textContent = money(taxable);
      sim.querySelector('.chinaMarginalRate').textContent = `${(active.rate * 100).toFixed(0)}%`;
      sim.querySelector('.chinaEffectiveRate').textContent = gross > 0 ? `${((tax / gross) * 100).toFixed(2)}%` : '0.00%';
      sim.querySelector('.chinaAfterTaxIncome').textContent = money(gross - tax);
      sim.querySelector('.chinaStandardSegment').style.width = `${(standardUsed / grossBase) * 100}%`;
      sim.querySelector('.chinaExtraSegment').style.width = `${(extraUsed / grossBase) * 100}%`;
      sim.querySelector('.chinaTaxableSegment').style.width = `${(taxable / grossBase) * 100}%`;

      sim.querySelector('.chinaBracketViz').innerHTML = segments.map((segment) => {
        const bracketSize = Number.isFinite(segment.upper) ? segment.upper - segment.lower : Math.max(segment.amount, 1);
        const fill = Math.min(100, (segment.amount / bracketSize) * 100);
        const activeClass = segment.amount > 0 ? ' is-used' : '';
        return `
          <div class="chinaBracketRow${activeClass}">
            <div class="chinaBracketMeta">
              <span>${bracketLabel(segment)}</span>
              <b>${(segment.rate * 100).toFixed(0)}%</b>
            </div>
            <div class="chinaBracketBar"><span style="width:${fill}%"></span></div>
            <div class="chinaBracketAmount">${money(segment.amount)} taxed | ${money(segment.segmentTax)} tax</div>
          </div>
        `;
      }).join('');
    };

    grossInput.addEventListener('input', update);
    extraInput.addEventListener('input', update);
    update();
  });
}

function setupIndirectTaxSimulators(root) {
  const sims = [...root.querySelectorAll('.indirectTaxSim')];
  const money = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });

  sims.forEach((sim) => {
    const buttons = [...sim.querySelectorAll('.productButton')];
    const taxRate = Number(sim.dataset.taxRate || 10);
    const households = {
      low: { income: 20000 },
      high: { income: 100000 },
    };
    let selected = buttons[0];

    const update = () => {
      const price = Number(selected.dataset.price || 0);
      const tax = price * (taxRate / 100);
      buttons.forEach((button) => {
        button.classList.toggle('is-active', button === selected);
        button.querySelector('.productPrice').textContent = money.format(Number(button.dataset.price || 0));
      });
      sim.querySelector('.indirectProductSummary').textContent =
        `${selected.querySelector('.productName').textContent}: ${money.format(price)} price, ${taxRate}% indirect tax = ${money.format(tax)} tax`;

      for (const key of ['low', 'high']) {
        const burden = (tax / households[key].income) * 100;
        const box = sim.querySelector(`[data-household="${key}"]`);
        box.querySelector('.indirectTaxPaid').textContent = money.format(tax);
        box.querySelector('.indirectBurden').textContent = `${burden.toFixed(2)}%`;
        box.querySelector('.burdenMeter span').style.width = `${Math.min(100, burden * 20)}%`;
      }

      const lowBurden = (tax / households.low.income) * 100;
      const highBurden = (tax / households.high.income) * 100;
      sim.querySelector('.indirectTakeaway').textContent =
        `Both households pay ${money.format(tax)} tax, but it is ${lowBurden.toFixed(2)}% of the lower income and ${highBurden.toFixed(2)}% of the higher income.`;
    };

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        selected = button;
        update();
      });
    });
    update();
  });
}
