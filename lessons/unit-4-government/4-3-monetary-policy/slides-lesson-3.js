/* ============================================================
   Lesson 4.3 - Monetary policy
   Cambridge IGCSE Economics 0455 - Unit 4: Government and the macroeconomy

   Syllabus source:
   ../../../references/igcse-economics-syllabus-2027-2029.md
   Definitions source:
   ../../../references/igcse-economics-definitions-2026.md

   Pacing note:
   Lesson 3 completes the 4.3.2 measures list: changes in money
   supply and foreign exchange rate. Keep exchange-rate links simple:
   exports, imports, inflationary pressure and the current account.
   ============================================================ */

window.IGCSE = window.IGCSE || {};

const photos = IGCSE.photos.monetaryPolicy;
IGCSE.lesson = {
  meta: {
    code:         '4.3.2',
    unit:         'Unit 4 - Government and the macroeconomy',
    title:        'Monetary policy lesson 3: money supply and exchange rates - Cambridge IGCSE Economics 0455',
    lessonLabel:  'Monetary policy lesson 3',
    courseLabel:  'Cambridge IGCSE Economics 0455',
    creatorLabel: 'Created by Samuel Oehler-Huang, Suzhou Foreign Language School',
  },

  slides: [
    {
      type: 'hero',
      eyebrow:  'Lesson overview',
      title:    'Money supply and exchange rates',
      subtitle: 'Monetary policy lesson 3 - 4.3.2',
      kicker:   'What can a central bank change besides interest rates?',
      visual:   photos.exchangeRate,
    },
    {
      type: 'discussion',
      eyebrow: 'Starter',
      title:   'More money, cheaper currency?',
      question: 'How might more money in the economy change spending, prices or the exchange rate?',
      visual: photos.moneySupply,
    },
    {
      type: 'outcomes',
      eyebrow: 'Objectives - 4.3.2',
      title:   'By the end, you can',
      bullets: [
        'Explain changes in money supply as a monetary policy measure.',
        'Explain foreign exchange-rate measures as a monetary policy measure.',
        'Link exchange-rate changes to exports, imports, inflation and the current account.',
        'Classify measures as expansionary or contractionary.',
      ],
    },
    {
      type: 'section',
      eyebrow: 'New section',
      title:   'Changing money supply',
      subtitle: '4.3.2 - monetary policy measures include changes in money supply',
    },
    {
      type: 'fact',
      eyebrow: 'Example',
      facts: {
        left: {
          country: 'United States',
          fact: 'Central banks can affect liquidity by changing the amount of money and bank reserves in the financial system.',
          source: 'Source: Federal Reserve monetary policy implementation materials.',
        },
        china: {
          country: 'China',
          fact: 'In February 2024, China cut the reserve requirement ratio by 0.5 percentage points to release long-term liquidity.',
          source: 'Source: People\'s Bank of China, January 2024 announcement.',
        },
      },
      visual: photos.moneySupply,
    },
    {
      type: 'cards',
      eyebrow: 'Learn',
      title:   'Money supply measures',
      cards: [
        ['Increase money supply', 'more liquidity available to banks and households'],
        ['Reduce money supply', 'less liquidity available in the economy'],
        ['Expansionary aim', 'raise spending, investment, output and employment'],
        ['Contractionary aim', 'reduce inflationary pressure'],
      ],
      footer: 'Keep the wording at IGCSE level: more or less money available in the economy.',
      visual: photos.moneySupply,
      partialReview: ['.cardgrid > .card', '.prompt'],
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title:   'Increasing money supply',
      nodes: [['money supply rises', 'banks may lend more', 'spending and investment may rise', 'output and employment may rise']],
      footer: 'Risk: inflationary pressure may rise if aggregate demand grows too quickly.',
      visual: photos.pboc,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title:   'Reducing money supply',
      nodes: [['money supply falls', 'banks may lend less', 'spending and investment may fall', 'inflationary pressure may fall']],
      footer: 'Risk: output and employment may fall.',
      visual: photos.fed,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'quiz',
      eyebrow: 'Check',
      question: 'Which measure is most likely to be expansionary monetary policy?',
      choices: [
        'Reducing the money supply',
        'Increasing the money supply',
        'Increasing income tax',
        'Cutting government spending',
      ],
      answer: 1,
      prompt: 'Expansionary policy raises aggregate demand.',
      visual: photos.moneySupply,
    },
    {
      type: 'answer',
      eyebrow: 'Check',
      title:   'Fill in the blanks',
      mode:    'fillBlanks',
      steps: [
        ['1', 'Increasing money supply can increase bank __________.', 'lending'],
        ['2', 'More lending may increase spending and __________.', 'investment'],
        ['3', 'Reducing money supply can reduce inflationary __________.', 'pressure'],
      ],
    },
    {
      type: 'section',
      eyebrow: 'New section',
      title:   'Foreign exchange rate',
      subtitle: '4.3.2 - monetary policy measures include foreign exchange rate',
    },
    {
      type: 'discussion',
      eyebrow: 'Explore',
      title:   'Currency value',
      question: 'If the yuan becomes cheaper against the US dollar, what happens to Chinese exports and imports?',
      visual: photos.exchangeRate,
    },
    {
      type: 'term',
      eyebrow: 'Learn',
      title:   'Foreign exchange rate',
      term:    'foreign exchange rate',
      definition: 'The price of one currency in terms of another currency.',
      examples: [
        ['Higher exchange rate', 'currency appreciates or is revalued'],
        ['Lower exchange rate', 'currency depreciates or is devalued'],
        ['Current account link', 'exports and imports may change'],
      ],
      visual: photos.exchangeRate,
      partialReview: ['.termBox', '.termExamples > .termExample'],
    },
    {
      type: 'compare',
      eyebrow: 'Learn',
      title:   'Lower or higher exchange rate',
      leftTitle:  'Lower exchange rate',
      left:  ['exports become cheaper for foreign buyers', 'imports become more expensive', 'current account may improve'],
      rightTitle: 'Higher exchange rate',
      right: ['exports become more expensive for foreign buyers', 'imports become cheaper', 'inflationary pressure may fall'],
      prompt: 'Use "may": effects depend on demand for exports and imports.',
      visual: photos.exchangeRate,
      partialReview: ['.splitCols > .card', '.prompt'],
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title:   'Lower exchange rate',
      nodes: [['currency value falls', 'exports become cheaper', 'export demand may rise', 'current account may improve']],
      footer: 'Risk: imports become more expensive, increasing cost-push inflation.',
      visual: photos.exchangeRate,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title:   'Higher exchange rate',
      nodes: [['currency value rises', 'imports become cheaper', 'import costs may fall', 'inflationary pressure may fall']],
      footer: 'Risk: exports become more expensive, which may worsen the current account.',
      visual: photos.exchangeRate,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'quiz',
      eyebrow: 'Check',
      question: 'A lower exchange rate is most likely to make imports...',
      choices: ['cheaper', 'more expensive', 'the same as government spending', 'free'],
      answer: 1,
      prompt: 'A weaker currency buys less foreign currency.',
      visual: photos.exchangeRate,
    },
    {
      type: 'exam',
      eyebrow: 'Exam practice',
      title:   'Explain chain',
      question: 'Explain how a lower foreign exchange rate may improve the current account.',
      keywords: ['exports', 'imports', 'price competitiveness', 'current account'],
      prompt:   'Include one export link and one import link.',
      visual:   photos.exchangeRate,
      partialReview: ['.cardgrid > .card', '.prompt'],
    },
    {
      type: 'answer',
      eyebrow: 'Exit ticket',
      title:   'Fill in the blanks',
      mode:    'fillBlanks',
      steps: [
        ['1', 'Monetary policy measures include changes in money __________.', 'supply'],
        ['2', 'An increase in money supply may increase spending and __________.', 'investment'],
        ['3', 'The foreign exchange rate is the price of one __________ in terms of another.', 'currency'],
        ['4', 'A lower exchange rate may make exports cheaper and imports more __________.', 'expensive'],
      ],
      cue: 'Answer before leaving.',
    },
  ],
};
