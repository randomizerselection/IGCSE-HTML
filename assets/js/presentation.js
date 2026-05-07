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
      <h2>${esc(s.title)}</h2>
      ${s.question ? `<p class="lead">${esc(s.question)}</p>` : ''}
      ${choiceList(s.choices)}
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
    if (target?.closest('.thumb, #notes, .help, button, a')) return;
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
