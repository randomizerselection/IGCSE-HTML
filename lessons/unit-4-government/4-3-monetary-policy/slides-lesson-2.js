/* ============================================================
   Lesson 4.3 - Monetary policy
   Cambridge IGCSE Economics 0455 - Unit 4: Government and the macroeconomy

   Syllabus source:
   ../../../references/igcse-economics-syllabus-2027-2029.md
   Definitions source:
   ../../../references/igcse-economics-definitions-2026.md

   Pacing note:
   Lesson 2 focuses on the interest-rate measure in 4.3.2 and its
   transmission to spending, saving, borrowing, investment, output,
   employment and inflation.
   ============================================================ */

window.IGCSE = window.IGCSE || {};

const photos = IGCSE.photos.monetaryPolicy;
IGCSE.lesson = {
  meta: {
    code:         '4.3.2',
    unit:         'Unit 4 - Government and the macroeconomy',
    title:        'Monetary policy lesson 2: interest rates - Cambridge IGCSE Economics 0455',
    lessonLabel:  'Monetary policy lesson 2',
    courseLabel:  'Cambridge IGCSE Economics 0455',
    creatorLabel: 'Created by Samuel Oehler-Huang, Suzhou Foreign Language School',
  },

  slides: [
    {
      type: 'hero',
      eyebrow:  'Lesson overview',
      title:    'Interest rates',
      subtitle: 'Monetary policy lesson 2 - 4.3.2',
      kicker:   'How does changing interest rates affect spending and inflation?',
      visual:   photos.bankEngland,
    },
    {
      type: 'discussion',
      eyebrow: 'Starter',
      title:   'Borrow or save?',
      question: 'If banks raise loan rates and deposit rates, what happens to household spending?',
      visual: photos.bankEngland,
    },
    {
      type: 'outcomes',
      eyebrow: 'Objectives - 4.3.2',
      title:   'By the end, you can',
      bullets: [
        'Define interest rate as the cost of borrowing and reward for saving.',
        'Explain lower interest rates as an expansionary monetary policy measure.',
        'Explain higher interest rates as a contractionary monetary policy measure.',
        'Link interest rates to spending, saving, borrowing, investment, output, employment and inflation.',
      ],
    },
    {
      type: 'section',
      eyebrow: 'New section',
      title:   'Interest rate',
      subtitle: '4.3.2 - interest rates are a monetary policy measure',
    },
    {
      type: 'fact',
      eyebrow: 'Example',
      facts: {
        left: {
          country: 'United Kingdom',
          fact: 'In August 2024, the Bank of England reduced Bank Rate by 0.25 percentage points to 5.00%.',
          source: 'Source: Bank of England Monetary Policy Summary, August 2024.',
        },
        china: {
          country: 'China',
          fact: 'In July 2024, China reduced the one-year Loan Prime Rate to 3.35%.',
          source: 'Source: People\'s Bank of China, July 2024 LPR announcement.',
        },
      },
      visual: photos.bankEngland,
    },
    {
      type: 'term',
      eyebrow: 'Learn',
      title:   'Interest rate',
      term:    'interest rate',
      definition: 'The cost of borrowing and reward for saving; higher interest rates tend to reduce consumer expenditure, borrowing and investment and increase saving.',
      examples: [
        ['Borrowing', 'a higher rate makes loans more expensive'],
        ['Saving', 'a higher rate gives a larger reward for saving'],
        ['Investment', 'a higher rate can make business projects less profitable'],
      ],
      visual: photos.bankEngland,
      partialReview: ['.termBox', '.termExamples > .termExample'],
    },
    {
      type: 'quiz',
      eyebrow: 'Check',
      question: 'A higher interest rate is most likely to make borrowing...',
      choices: ['cheaper', 'more expensive', 'unnecessary', 'the same as taxation'],
      answer: 1,
      prompt: 'Interest is the cost of borrowing.',
      visual: photos.fed,
    },
    {
      type: 'section',
      eyebrow: 'New section',
      title:   'Lower interest rates',
      subtitle: 'Expansionary monetary policy through spending and investment',
    },
    {
      type: 'discussion',
      eyebrow: 'Explore',
      title:   'Stimulating demand',
      question: 'Why might a central bank cut interest rates when output and employment are too low?',
      visual: photos.pboc,
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title:   'Lower rates and spending',
      nodes: [['lower interest rates', 'borrowing becomes cheaper', 'spending may rise', 'aggregate demand may rise']],
      footer: 'Syllabus link: spending and borrowing.',
      visual: photos.bankEngland,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title:   'Lower rates and investment',
      nodes: [['lower interest rates', 'business loans cost less', 'investment may rise', 'output and employment may rise']],
      footer: 'Syllabus link: investment, output and employment.',
      visual: photos.fed,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'cards',
      eyebrow: 'Learn',
      title:   'Expansionary monetary policy',
      cards: [
        ['Main measure', 'lower interest rates'],
        ['Borrowing', 'more attractive'],
        ['Saving', 'less attractive'],
        ['Result', 'spending, output and employment may rise'],
      ],
      footer: 'Risk: inflationary pressure may rise if aggregate demand grows faster than output.',
      visual: photos.moneySupply,
      partialReview: ['.cardgrid > .card', '.prompt'],
    },
    {
      type: 'answer',
      eyebrow: 'Check',
      title:   'Fill in the blanks',
      mode:    'fillBlanks',
      steps: [
        ['1', 'Lower interest rates make borrowing __________.', 'cheaper'],
        ['2', 'Lower interest rates may reduce the reward for __________.', 'saving'],
        ['3', 'If spending and investment rise, aggregate demand may __________.', 'rise'],
        ['4', 'Higher aggregate demand may increase output and __________.', 'employment'],
      ],
    },
    {
      type: 'section',
      eyebrow: 'New section',
      title:   'Higher interest rates',
      subtitle: 'Contractionary monetary policy through spending and inflation',
    },
    {
      type: 'discussion',
      eyebrow: 'Explore',
      title:   'Cooling inflation',
      question: 'Why might a central bank raise interest rates when prices are rising too quickly?',
      visual: photos.fed,
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title:   'Higher rates and spending',
      nodes: [['higher interest rates', 'borrowing becomes more expensive', 'spending may fall', 'inflationary pressure may fall']],
      footer: 'Syllabus link: spending, borrowing and inflation.',
      visual: photos.fed,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title:   'Higher rates and saving',
      nodes: [['higher interest rates', 'saving reward rises', 'households may save more', 'consumer spending may fall']],
      footer: 'Syllabus link: saving and spending.',
      visual: photos.bankEngland,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'cards',
      eyebrow: 'Learn',
      title:   'Contractionary monetary policy',
      cards: [
        ['Main measure', 'higher interest rates'],
        ['Borrowing', 'less attractive'],
        ['Saving', 'more attractive'],
        ['Result', 'spending, investment and inflationary pressure may fall'],
      ],
      footer: 'Risk: output and employment may fall.',
      visual: photos.pboc,
      partialReview: ['.cardgrid > .card', '.prompt'],
    },
    {
      type: 'quiz',
      eyebrow: 'Check',
      question: 'Which chain best explains how higher interest rates can reduce inflation?',
      choices: [
        'Higher rates -> borrowing cheaper -> spending rises -> inflation rises',
        'Higher rates -> saving less attractive -> imports rise -> inflation must end',
        'Higher rates -> borrowing more expensive -> spending falls -> inflationary pressure falls',
        'Higher rates -> taxes fall -> government spending rises -> output falls',
      ],
      answer: 2,
      prompt: 'Use the syllabus effect on spending and inflation.',
      visual: photos.fed,
    },
    {
      type: 'exam',
      eyebrow: 'Exam practice',
      title:   'Explain chain',
      question: 'Explain how a rise in interest rates may reduce inflation.',
      keywords: ['cost of borrowing', 'saving', 'spending', 'inflationary pressure'],
      prompt:   'Write a chain with one clear "may".',
      visual:   photos.bankEngland,
      partialReview: ['.cardgrid > .card', '.prompt'],
    },
    {
      type: 'answer',
      eyebrow: 'Exit ticket',
      title:   'Fill in the blanks',
      mode:    'fillBlanks',
      steps: [
        ['1', 'Interest rate is the cost of borrowing and reward for __________.', 'saving'],
        ['2', 'Lower interest rates are usually expansionary __________ policy.', 'monetary'],
        ['3', 'Higher interest rates may reduce borrowing and __________.', 'spending'],
        ['4', 'Higher interest rates may reduce inflationary __________.', 'pressure'],
      ],
      cue: 'Answer before leaving.',
    },
  ],
};
