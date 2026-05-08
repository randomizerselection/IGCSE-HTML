/* ============================================================
   visuals.js — SVG graphic library for IGCSE Economics decks
   Each function returns an HTML string (one <div class="vizPanel">
   or similar). Keep new diagrams here so lessons stay data-only.
   ============================================================ */

window.IGCSE = window.IGCSE || {};

const axes = () => `
  <line class="gridline" x1="70"  y1="90"  x2="470" y2="90"  />
  <line class="gridline" x1="70"  y1="180" x2="470" y2="180" />
  <line class="gridline" x1="70"  y1="270" x2="470" y2="270" />
  <line class="gridline" x1="70"  y1="360" x2="470" y2="360" />
  <line class="axis"    x1="78"  y1="430" x2="460" y2="430" />
  <line class="axis"    x1="78"  y1="430" x2="78"  y2="70"  />
`;

const arrowDef = (id) => `
  <defs>
    <marker id="${id}" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="var(--gold)"/>
    </marker>
  </defs>
`;

const wrap = (inner) => `<div class="vizPanel" aria-hidden="true">${inner}</div>`;
const svg  = (id, body) => `<svg viewBox="0 0 520 520" role="img">${arrowDef(id)}${body}</svg>`;
const htmlEsc = (s) => String(s ?? '').replace(/[&<>"']/g, (m) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[m]));

IGCSE.isRemoteImageUrl = IGCSE.isRemoteImageUrl || ((src) =>
  /^(?:https?:)?\/\//i.test(String(src || '').trim()));
IGCSE.localImageSrc = IGCSE.localImageSrc || ((src) =>
  IGCSE.isRemoteImageUrl(src) ? '' : String(src || ''));

const renderPhoto = (photo = {}) => {
  const src = IGCSE.localImageSrc(photo.src);
  if (!src) return '';

  const caption = photo.caption || photo.alt || '';
  const credit = photo.credit || '';
  const creditHtml = credit
    ? (photo.source
        ? `<a href="${htmlEsc(photo.source)}" target="_blank" rel="noopener">${htmlEsc(credit)}</a>`
        : htmlEsc(credit))
    : '';
  const captionHtml = caption || creditHtml
    ? `<figcaption>
        ${caption ? `<span>${htmlEsc(caption)}</span>` : '<span></span>'}
        ${creditHtml ? `<span>${creditHtml}</span>` : ''}
      </figcaption>`
    : '';

  return `
    <figure class="photoPanel">
      <img src="${htmlEsc(src)}"
           alt="${htmlEsc(photo.alt || '')}"
           loading="lazy"
           decoding="async" />
      ${captionHtml}
    </figure>
  `;
};

/* ---------- Catalogue of named graphics ---------- */
const graphics = {

  /* Hero — swirling tax graphic */
  hero: () => `
    <div class="heroGraphic" aria-hidden="true">
      <div class="orbit o1"></div>
      <div class="orbit o2"></div>
      <div class="orbit o3"></div>
      <div class="coin c1">$</div>
      <div class="coin c2">%</div>
      <div class="coin c3">£</div>
      <svg viewBox="0 0 500 500" role="img">
        ${arrowDef('heroArrow')}
        <path class="curve cyan" d="M110 340 C170 180 300 360 390 145"/>
        <path class="curve gold" d="M130 280 C225 310 250 170 375 230"/>
        <text x="250" y="268" text-anchor="middle" font-size="74" font-weight="900" fill="white" letter-spacing="-2">tax</text>
      </svg>
    </div>
  `,

  /* Demand-side shift (price vs quantity), works for "demand"/"indirect"/etc. */
  demandShift: (id='demandShift') => wrap(svg(id, `
    ${axes()}
    <path class="curve cyan" d="M115 120 C185 160 280 260 420 390"/>
    <path class="curve rose" d="M130 370 C210 260 280 170 420 105"/>
    <path class="arrow-line" marker-end="url(#${id})" d="M250 190 C282 218 306 245 330 282"/>
    <text x="96" y="70" fill="#dbe7f6" font-size="20" font-weight="700">P</text>
    <text x="462" y="460" fill="#dbe7f6" font-size="20" font-weight="700">Q</text>
  `)),

  /* Two bars: revenue vs spending — used for budget/deficit/netRevenue */
  budgetBars: (id='budgetBars', label='deficit') => wrap(svg(id, `
    ${axes()}
    <rect class="bar" x="135" y="164" width="88" height="266" fill="var(--cyan)"/>
    <rect class="bar" x="300" y="94"  width="88" height="336" fill="var(--rose)"/>
    <text x="179" y="462" text-anchor="middle" fill="white" font-weight="800" font-size="22">revenue</text>
    <text x="344" y="462" text-anchor="middle" fill="white" font-weight="800" font-size="22">spending</text>
    <text x="258" y="80"  text-anchor="middle" fill="var(--gold)" font-weight="900" font-size="42">${label}</text>
  `)),

  /* Progressive — small vs tall gold bar with upward arrow */
  progressive: (id='progressive') => wrap(svg(id, `
    ${axes()}
    <rect class="bar" x="135" y="310" width="88" height="120" fill="var(--cyan)"/>
    <rect class="bar" x="300" y="160" width="88" height="270" fill="var(--gold)"/>
    <path class="arrow-line" marker-end="url(#${id})" d="M190 250 C250 160 290 130 355 105"/>
    <text x="179" y="462" text-anchor="middle" fill="#dbe7f6" font-size="18">low income</text>
    <text x="344" y="462" text-anchor="middle" fill="#dbe7f6" font-size="18">high income</text>
  `)),

  /* Regressive — heavier burden on low earners */
  regressive: (id='regressive') => wrap(svg(id, `
    ${axes()}
    <rect class="bar" x="135" y="210" width="88" height="220" fill="var(--gold)"/>
    <rect class="bar" x="300" y="350" width="88" height="80"  fill="var(--cyan)"/>
    <text x="260" y="135" text-anchor="middle" fill="white" font-weight="900" font-size="36">same tax</text>
    <text x="260" y="178" text-anchor="middle" fill="white" font-weight="700" font-size="26">unequal burden</text>
    <text x="179" y="462" text-anchor="middle" fill="#dbe7f6" font-size="18">low income</text>
    <text x="344" y="462" text-anchor="middle" fill="#dbe7f6" font-size="18">high income</text>
  `)),

  /* Proportional — two equal green bars */
  proportional: (id='proportional') => wrap(svg(id, `
    ${axes()}
    <rect class="bar" x="135" y="260" width="88" height="170" fill="var(--green)"/>
    <rect class="bar" x="300" y="260" width="88" height="170" fill="var(--green)"/>
    <text x="260" y="140" text-anchor="middle" fill="white" font-weight="900" font-size="42">15% = 15%</text>
  `)),

  /* Expansionary — rising green curve */
  demandUp: (id='demandUp') => wrap(svg(id, `
    ${axes()}
    <path class="curve green" d="M110 385 C170 335 235 265 300 205 C350 160 395 130 430 105"/>
    <path class="arrow-line" marker-end="url(#${id})" d="M250 320 C290 270 320 225 360 180"/>
    <text x="270" y="92" text-anchor="middle" fill="var(--green)" font-weight="900" font-size="40">demand up</text>
  `)),

  /* Contractionary — falling rose curve */
  demandDown: (id='demandDown') => wrap(svg(id, `
    ${axes()}
    <path class="curve rose" d="M110 120 C170 170 235 240 300 300 C350 345 395 380 430 405"/>
    <path class="arrow-line" marker-end="url(#${id})" d="M250 190 C290 240 320 285 360 330"/>
    <text x="270" y="90" text-anchor="middle" fill="var(--rose)" font-weight="900" font-size="40">demand down</text>
  `)),

  /* Abstract — concentric + crossed curves (conceptual/section breaks) */
  abstract: (id='abstract') => wrap(svg(id, `
    ${axes()}
    <circle cx="260" cy="250" r="145" fill="none" stroke="rgba(86,216,255,.4)" stroke-width="26"/>
    <circle cx="260" cy="250" r="95"  fill="none" stroke="rgba(255,209,102,.44)" stroke-width="26"/>
    <path class="curve cyan" d="M125 350 C210 105 310 415 425 150"/>
    <path class="curve gold" d="M120 205 C210 310 310 130 420 295"/>
  `)),

  /* Flow arrows — four chips horizontally (decorative) */
  flowArrows: (id='flowArrows') => wrap(svg(id, `
    ${axes()}
    <path class="arrow-line" marker-end="url(#${id})" d="M100 260 L430 260"/>
    <circle cx="130" cy="260" r="30" fill="var(--cyan)"  opacity=".35"/>
    <circle cx="230" cy="260" r="30" fill="var(--gold)"  opacity=".35"/>
    <circle cx="330" cy="260" r="30" fill="var(--green)" opacity=".35"/>
    <circle cx="420" cy="260" r="30" fill="var(--rose)"  opacity=".35"/>
  `)),
};

/* Alias map: legacy lesson names → current graphic keys.
   Lessons can reference any of these keys in their slide data. */
const aliases = {
  map: 'abstract',
  targets: 'abstract',
  taxchoice: 'demandShift',
  budget: 'budgetBars',
  budgetDeficit: 'budgetBars',
  budgetPractice: 'demandShift',
  tax: 'abstract',
  publicGoods: 'abstract',
  demand: 'demandShift',
  matching: 'abstract',
  matchingAnswer: 'abstract',
  sectionClass: 'abstract',
  sectionGood: 'abstract',
  sectionFiscal: 'abstract',
  direct: 'abstract',
  indirect: 'demandShift',
  classFlow: 'abstract',
  twoDecisions: 'abstract',
  classificationAnswer: 'abstract',
  principles: 'abstract',
  implementation: 'abstract',
  netRevenue: 'budgetBars',
  netRevenueAnswer: 'budgetBars',
  consumers: 'demandShift',
  producers: 'abstract',
  government: 'abstract',
  economy: 'demandShift',
  luxuryCars: 'abstract',
  stakeholders: 'abstract',
  fiscal: 'abstract',
  expansionary: 'demandUp',
  contractionary: 'demandDown',
  balanceTerms: 'budgetBars',
  policyAims: 'demandUp',
  conflict: 'abstract',
  miniCase: 'demandUp',
  exam: 'abstract',
  modelAnswer: 'abstract',
  discipline: 'abstract',
  exit: 'abstract',
  exitAnswer: 'abstract',
};

IGCSE.renderVisual = function(key, id) {
  if (!key) return '';
  if (typeof key === 'object') return renderPhoto(key);
  if (key === 'hero') return graphics.hero();
  const resolved = graphics[key] ? key : (aliases[key] || 'abstract');
  const fn = graphics[resolved] || graphics.abstract;
  return fn(id || `viz-${resolved}`);
};

IGCSE.__graphicsRegistry = graphics;
