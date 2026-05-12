/* Syllabus source: ../../../references/igcse-economics-syllabus-2027-2029.md */
window.IGCSE = window.IGCSE || {};

const photos = IGCSE.photos.marketTeaching;

IGCSE.lesson = {
  meta: {
    code: '2.8.1',
    unit: 'Unit 2 - The allocation of resources',
    title: 'Market economic system lesson 2: price mechanism - Cambridge IGCSE Economics 0455',
    lessonLabel: 'Market economic system lesson 2',
    courseLabel: 'Cambridge IGCSE Economics 0455',
    creatorLabel: 'Created by Samuel Oehler-Huang, Suzhou Foreign Language School',
  },
  slides: [
    {
      type: 'hero',
      eyebrow: 'Lesson overview',
      title: 'Price mechanism',
      subtitle: '2.8.1 - demand and supply signals allocate resources',
      kicker: 'How do prices tell firms where resources should move?',
      visual: photos.vegetables,
    },
    {
      type: 'discussion',
      eyebrow: 'Starter',
      title: 'Signals on the shelf',
      question: 'If a supermarket vegetable shelf sells out every afternoon, what signal is the market sending to the shop?',
      visual: photos.vegetables,
    },
    {
      type: 'outcomes',
      eyebrow: 'Objectives - 2.8.1',
      title: 'By the end, you can',
      bullets: [
        'Explain prices as signals and incentives.',
        'Show how rising demand can move resources into production.',
        'Show how falling demand can move resources away from production.',
        'Apply the price mechanism to a specific market example.',
      ],
    },
    {
      type: 'section',
      eyebrow: 'New section',
      title: 'Price signals',
      subtitle: '2.8.1 - the price mechanism allocates resources through markets',
    },
    {
      type: 'fact',
      eyebrow: 'Specific example',
      facts: {
        left: {
          country: 'World',
          fact: 'Electric car sales topped 17 million worldwide in 2024 as consumer demand rose.',
          source: 'Source: IEA Global EV Outlook 2025.',
        },
        china: {
          country: 'China',
          fact: 'China sold over 11 million electric cars in 2024, more than the world sold two years earlier.',
          source: 'Source: IEA Global EV Outlook 2025.',
        },
      },
      visual: photos.evCharging,
    },
    {
      type: 'marketMechanismSim',
      eyebrow: 'Explore',
      title: 'Demand, price, profit and resources',
      defaultDemand: 58,
      defaultCost: 18,
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title: 'Demand rises',
      nodes: [['demand rises', 'price rises', 'profit may rise', 'firms produce more', 'resources move into the market']],
      footer: 'Resources include land, labour, capital and enterprise.',
      visual: photos.evCharging,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'discussion',
      eyebrow: 'Apply',
      title: 'E-bike demand',
      question: 'If more commuters want e-bikes, what should happen to workers, shop space and parts suppliers?',
      visual: photos.eBikeShop,
    },
    {
      type: 'fact',
      eyebrow: 'Specific example',
      facts: {
        left: {
          country: 'United States',
          fact: 'US e-bike imports rose sharply after 2020, reflecting stronger demand for electric bicycles.',
          source: 'Source: USITC DataWeb and industry reporting.',
        },
        china: {
          country: 'China',
          fact: 'China produces most of the world’s electric bicycles and has a large domestic e-bike market.',
          source: 'Source: China Bicycle Association industry reports.',
        },
      },
      visual: photos.eBikeShop,
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title: 'Demand falls',
      nodes: [['demand falls', 'price falls', 'profit may fall', 'firms cut output', 'resources move elsewhere']],
      footer: 'The price mechanism can redirect resources without a central planner.',
      visual: photos.bubbleTeaShop,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'term',
      eyebrow: 'Learn',
      title: 'Consumer sovereignty',
      term: 'consumer sovereignty',
      definition: 'The idea that firms produce what consumers demand because profit provides an incentive to respond to demand.',
      examples: [
        ['More spending', 'firms stock more of the product'],
        ['Less spending', 'firms reduce output'],
        ['Profit signal', 'firms follow consumer demand'],
      ],
      visual: photos.vegetables,
      partialReview: ['.termBox', '.termExamples > .termExample'],
    },
    {
      type: 'quiz',
      eyebrow: 'Check',
      question: 'Demand for electric cars rises. Which chain best shows the price mechanism?',
      choices: [
        'Demand rises -> price may rise -> profit incentive rises -> more resources move into EV production.',
        'Demand rises -> government must produce every electric car.',
        'Demand rises -> firms always leave the market.',
      ],
      answer: 0,
      prompt: 'Name one resource that may move into production.',
    },
    {
      type: 'fact',
      eyebrow: 'Specific example',
      facts: {
        left: {
          country: 'United States',
          fact: 'Plant-based food sales reached USD 8.1 billion in the United States in 2024.',
          source: 'Source: Good Food Institute, 2024 retail sales data.',
        },
        china: {
          country: 'China',
          fact: 'China’s plant-based meat market was estimated at about USD 428 million in 2023.',
          source: 'Source: Grand View Research, 2023 market estimate.',
        },
      },
      visual: photos.vegetables,
    },
    {
      type: 'answer',
      eyebrow: 'Exit ticket',
      title: 'Fill in the blanks',
      mode: 'fillBlanks',
      steps: [
        ['1', 'Prices act as signals and __________.', 'incentives'],
        ['2', 'When demand rises, price and profit may __________.', 'rise'],
        ['3', 'The profit motive encourages firms to allocate more __________.', 'resources'],
        ['4', 'Consumer sovereignty means consumers influence what is __________.', 'produced'],
      ],
    },
  ],
};
