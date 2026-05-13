/* ============================================================
   Lesson 4.3 - Monetary policy
   Cambridge IGCSE Economics 0455 - Unit 4: Government and the macroeconomy

   Syllabus source:
   ../../../references/igcse-economics-syllabus-2027-2029.md
   Definitions source:
   ../../../references/igcse-economics-definitions-2026.md
   Paper 2 mark-scheme archive:
   ../../../references/paper-2-mark-schemes-2023-2025/4-government-and-macroeconomy.md

   Pacing note:
   Lesson 1 focuses on 4.3.1. Keep the exam language close to:
   money supply, monetary policy, interest rates, money supply,
   foreign exchange rate and macroeconomic aims.
   ============================================================ */

window.IGCSE = window.IGCSE || {};

const photos = IGCSE.photos.monetaryPolicy;
IGCSE.lesson = {
  meta: {
    code:         '4.3.1',
    unit:         'Unit 4 - Government and the macroeconomy',
    title:        'Monetary policy lesson 1: money supply and monetary policy - Cambridge IGCSE Economics 0455',
    lessonLabel:  'Monetary policy lesson 1',
    courseLabel:  'Cambridge IGCSE Economics 0455',
    creatorLabel: 'Created by Samuel Oehler-Huang, Suzhou Foreign Language School',
  },

  slides: [
    {
      type: 'hero',
      eyebrow:  'Lesson overview',
      title:    'Money supply and monetary policy',
      subtitle: 'Monetary policy lesson 1 - 4.3.1',
      kicker:   'How can a central bank influence macroeconomic aims?',
      visual:   photos.pboc,
    },
    {
      type: 'discussion',
      eyebrow: 'Starter',
      title:   'Who changes the price of money?',
      question: 'If an economy has weak spending and rising unemployment, who might act before the government changes taxes?',
      zh: '如果经济支出疲弱且失业上升，在政府改变税收之前，谁可能先采取行动？',
      answer: 'The central bank may act by changing interest rates, money supply or credit conditions.',
      answerZh: '中央银行可能先采取行动，例如改变利率、货币供应或信贷条件。',
      visual: photos.bankEngland,
    },
    {
      type: 'outcomes',
      eyebrow: 'Objectives - 4.3.1',
      title:   'By the end, you can',
      bullets: [
        'Define money supply as the amount of money in the economy.',
        'Define monetary policy using syllabus wording.',
        'Identify interest rates, money supply and foreign exchange-rate measures.',
        'Link monetary policy to macroeconomic aims.',
      ],
    },
    {
      type: 'section',
      eyebrow: 'New section',
      title:   'Money supply',
      zhTitle: '货币供应',
    },
    {
      type: 'fact',
      eyebrow: 'Example',
      facts: {
        left: {
          country: 'United States',
          fact: 'Money supply includes more than notes and coins; bank deposits are a major part of broad money.',
          source: 'Source: Federal Reserve H.6 data shown on Wikimedia Commons.',
        },
        china: {
          country: 'China',
          fact: 'China reports money supply measures such as M0, M1 and M2 to show liquidity in the economy.',
          source: 'Source: People\'s Bank of China monetary statistics.',
        },
      },
      visual: photos.moneySupply,
    },
    {
      type: 'term',
      eyebrow: 'Learn',
      title:   'Money supply',
      zhTitle: '货币供应',
      term:    'money supply',
      definition: 'The amount of money in an economy / in circulation.',
      examples: [
        ['Cash', 'notes and coins used for spending'],
        ['Deposits', 'money held in bank accounts'],
        ['Liquidity', 'money available for payments'],
      ],
      visual: photos.moneySupply,
      partialReview: ['.termBox', '.termExamples > .termExample'],
    },
    {
      type: 'answer',
      eyebrow: 'Check',
      title:   'Fill in the blanks',
      mode:    'fillBlanks',
      steps: [
        ['1', 'Money supply is the amount of money in the __________.', 'economy'],
        ['2', 'Bank deposits are part of the money __________.', 'supply'],
        ['3', 'More money available for payments can affect aggregate __________.', 'demand'],
      ],
    },
    {
      type: 'section',
      eyebrow: 'New section',
      title:   'Central banks',
      zhTitle: '中央银行',
    },
    {
      type: 'discussion',
      eyebrow: 'Explore',
      title:   'Central-bank decisions',
      question: 'Why might a central bank change interest rates when inflation is above target?',
      zh: '当通货膨胀高于目标时，中央银行为什么可能改变利率？',
      answer: 'It may raise interest rates to reduce borrowing and spending, lowering demand-pull inflationary pressure.',
      answerZh: '央行可能提高利率以减少借款和支出，从而降低需求拉动型通胀压力。',
      visual: photos.fed,
    },
    {
      type: 'cards',
      eyebrow: 'Learn',
      title:   'What central banks do',
      cards: [
        ['Bank to government', 'manage government accounts and financial stability'],
        ['Bank to banks', 'support the banking system and act as lender of last resort'],
        ['Issue currency', 'supply notes and coins'],
        ['Monetary policy', 'use policy tools to influence macroeconomic aims'],
      ],
      footer: 'For 4.3, focus on monetary policy rather than every central-bank role.',
      visual: photos.pboc,
      partialReview: ['.cardgrid > .card', '.prompt'],
    },
    {
      type: 'fact',
      eyebrow: 'Example',
      facts: {
        left: {
          country: 'United States',
          fact: 'In September 2024, the Federal Reserve cut its target range by 50 basis points to 4.75%-5.00%.',
          source: 'Source: Federal Reserve, open market operations.',
        },
        china: {
          country: 'China',
          fact: 'In July 2024, China set the one-year Loan Prime Rate at 3.35%, down 0.1 percentage points.',
          source: 'Source: People\'s Bank of China, July 2024 LPR announcement.',
        },
      },
      visual: photos.fed,
    },
    {
      type: 'quiz',
      eyebrow: 'Check',
      question: 'Which institution usually implements monetary policy?',
      choices: ['A central bank', 'A private supermarket', 'A trade union', 'A local charity'],
      answer: 0,
      prompt: 'Think about who changes interest rates and controls the money supply.',
      visual: photos.pboc,
    },
    {
      type: 'section',
      eyebrow: 'New section',
      title:   'Monetary policy',
      zhTitle: '货币政策',
    },
    {
      type: 'term',
      eyebrow: 'Learn',
      title:   'Monetary policy',
      zhTitle: '货币政策',
      term:    'monetary policy',
      definition: 'Policy using changes in interest rates, money supply and foreign exchange-rate measures; usually implemented by the central bank and used to influence aggregate demand and macroeconomic aims.',
      examples: [
        ['Interest rates', 'change the cost of borrowing and reward for saving'],
        ['Money supply', 'change the amount of money available in the economy'],
        ['Foreign exchange rate', 'influence the value of the currency'],
      ],
      visual: photos.bankEngland,
      partialReview: ['.termBox', '.termExamples > .termExample'],
    },
    {
      type: 'compare',
      eyebrow: 'Learn',
      title:   'Monetary policy is not fiscal policy',
      leftTitle:  'Monetary policy',
      left:  ['interest rates', 'money supply', 'foreign exchange-rate measures'],
      rightTitle: 'Fiscal policy',
      right: ['government spending', 'taxation', 'government budget balance'],
      prompt: 'A monetary-policy answer should not rely on taxation or government spending.',
      visual: photos.bankEngland,
      partialReview: ['.splitCols > .card', '.prompt'],
    },
    {
      type: 'cards',
      eyebrow: 'Learn',
      title:   'Macroeconomic aims link',
      cards: [
        ['Economic growth', 'raise spending, output and investment'],
        ['Employment', 'increase output and demand for labour'],
        ['Stable prices', 'reduce inflationary pressure'],
        ['Current account', 'influence imports and exports'],
      ],
      footer: 'The syllabus asks how monetary policy influences macroeconomic aims.',
      visual: photos.exchangeRate,
      partialReview: ['.cardgrid > .card', '.prompt'],
    },
    {
      type: 'quiz',
      eyebrow: 'Check',
      question: 'Which list contains only monetary policy measures from 4.3.1?',
      choices: [
        'Taxes, subsidies and public spending',
        'Interest rates, money supply and foreign exchange-rate measures',
        'Minimum wages, training and privatisation',
        'Exports, imports and current account balances',
      ],
      answer: 1,
      prompt: 'Use the exact syllabus list.',
      visual: photos.exchangeRate,
    },
    {
      type: 'answer',
      eyebrow: 'Exit ticket',
      title:   'Fill in the blanks',
      mode:    'fillBlanks',
      steps: [
        ['1', 'Money supply is the amount of money in the __________.', 'economy'],
        ['2', 'Monetary policy uses interest rates, money supply and foreign exchange-rate __________.', 'measures'],
        ['3', 'Monetary policy is usually implemented by the central __________.', 'bank'],
        ['4', 'Monetary policy is used to influence macroeconomic __________.', 'aims'],
      ],
      cue: 'Answer before leaving.',
    },
  ],
};
