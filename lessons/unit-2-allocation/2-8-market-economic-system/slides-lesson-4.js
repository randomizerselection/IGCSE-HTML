/* Syllabus source: ../../../references/igcse-economics-syllabus-2027-2029.md */
window.IGCSE = window.IGCSE || {};

const photos = IGCSE.photos.marketTeaching;

IGCSE.lesson = {
  meta: {
    code: '2.8.2',
    unit: 'Unit 2 - The allocation of resources',
    title: 'Market economic system lesson 4: arguments against markets - Cambridge IGCSE Economics 0455',
    lessonLabel: 'Market economic system lesson 4',
    courseLabel: 'Cambridge IGCSE Economics 0455',
    creatorLabel: 'Created by Samuel Oehler-Huang, Suzhou Foreign Language School',
  },
  slides: [
    {
      type: 'hero',
      eyebrow: 'Lesson overview',
      title: 'Arguments against markets',
      subtitle: '2.8.2 - inequality, market failure and under-provision',
      kicker: 'When might markets allocate resources badly?',
      visual: photos.factorySmoke,
    },
    {
      type: 'discussion',
      eyebrow: 'Starter',
      title: 'What markets may ignore',
      question: 'If a firm earns profit while nearby residents breathe polluted air, what is missing from the market price?',
      visual: photos.factorySmoke,
    },
    {
      type: 'outcomes',
      eyebrow: 'Objectives - 2.8.2',
      title: 'By the end, you can',
      bullets: [
        'Explain inequality as an argument against markets.',
        'Explain market failure as an argument against markets.',
        'Explain under-provision of some goods.',
        'Compare arguments for and against markets in a balanced answer.',
      ],
    },
    {
      type: 'section',
      eyebrow: 'New section',
      title: 'Inequality',
      subtitle: '2.8.2 - disadvantages include inequality',
    },
    {
      type: 'fact',
      eyebrow: 'Specific example',
      facts: {
        left: {
          country: 'World',
          fact: 'The richest 10% of the global population receive about half of global income.',
          source: 'Source: World Inequality Report 2022.',
        },
        china: {
          country: 'China',
          fact: 'China’s official urban-rural disposable income ratio remained above 2.3 to 1 in 2024.',
          source: 'Source: National Bureau of Statistics of China, 2025.',
        },
      },
      visual: photos.socialSecurity,
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title: 'Inequality',
      nodes: [['richer consumers have more spending power', 'firms respond to profitable demand', 'poorer households have less access', 'inequality may persist']],
      footer: 'Market demand reflects ability to pay, not only human need.',
      visual: photos.socialSecurity,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'section',
      eyebrow: 'New section',
      title: 'Market failure',
      subtitle: '2.8.2 - disadvantages include market failure',
    },
    {
      type: 'fact',
      eyebrow: 'Specific example',
      facts: {
        left: {
          country: 'World',
          fact: 'Air pollution is linked to 6.7 million premature deaths annually.',
          source: 'Source: World Health Organization.',
        },
        china: {
          country: 'China',
          fact: 'China’s city PM2.5 average was 29.3 micrograms per m3 in 2024.',
          source: 'Source: Ministry of Ecology and Environment of China, 2025.',
        },
      },
      visual: photos.factorySmoke,
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title: 'External costs',
      nodes: [['factory pollutes', 'third parties face health costs', 'market price ignores external cost', 'output may be too high']],
      footer: 'This is one route to market failure.',
      visual: photos.factorySmoke,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'section',
      eyebrow: 'New section',
      title: 'Under-provision',
      subtitle: '2.8.2 - disadvantages include under-provision of some goods',
    },
    {
      type: 'discussion',
      eyebrow: 'Explore',
      title: 'Who pays for the light?',
      question: 'If a street light benefits everyone nearby, why might a private firm struggle to charge each user?',
      visual: photos.streetLight,
    },
    {
      type: 'fact',
      eyebrow: 'Specific example',
      facts: {
        left: {
          country: 'United Kingdom',
          fact: 'The UK government planned GBP 5.2 billion for flood and coastal erosion schemes from 2021 to 2027.',
          source: 'Source: UK Environment Agency.',
        },
        china: {
          country: 'China',
          fact: 'China increased central support for flood-control and disaster-prevention projects after major 2023 floods.',
          source: 'Source: China State Council, 2024.',
        },
      },
      visual: photos.roadwork,
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title: 'Public goods may be under-provided',
      nodes: [['people can benefit without paying', 'private revenue is low', 'profit incentive is weak', 'good may not be provided']],
      footer: 'Examples include street lighting, flood defences and national defence.',
      visual: photos.streetLight,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'compare',
      eyebrow: 'Review',
      title: 'For and against markets',
      leftTitle: 'Arguments for',
      left: ['choice', 'incentives', 'efficiency'],
      rightTitle: 'Arguments against',
      right: ['inequality', 'market failure', 'under-provision of some goods'],
      prompt: 'A balanced answer uses both sides before judging.',
      partialReview: ['.splitCols > .card', '.prompt'],
    },
    {
      type: 'quiz',
      eyebrow: 'Check',
      question: 'Which statement is the strongest argument against markets?',
      choices: [
        'Markets may ignore external costs, so resources can be over-allocated to polluting goods.',
        'Markets always give every household equal income.',
        'Markets always provide all public goods efficiently.',
      ],
      answer: 0,
      prompt: 'Identify the cause and consequence.',
    },
    {
      type: 'exam',
      eyebrow: 'Exam practice',
      title: 'Discuss markets',
      question: 'Discuss whether a market economic system is the best way to allocate resources. [8]',
      keywords: ['choice', 'incentives', 'efficiency', 'inequality', 'market failure'],
      prompt: 'One paragraph for, one against, then a judgement.',
      partialReview: ['.cardgrid > .card', '.prompt'],
    },
    {
      type: 'answer',
      eyebrow: 'Exit ticket',
      title: 'Fill in the blanks',
      mode: 'fillBlanks',
      steps: [
        ['1', 'Arguments against markets include inequality, market failure and under-__________.', 'provision'],
        ['2', 'Market demand reflects wants and ability to __________.', 'pay'],
        ['3', 'Pollution is an example of an external __________.', 'cost'],
        ['4', 'Public goods may not be provided because people can benefit without __________.', 'paying'],
      ],
    },
  ],
};
