/* ============================================================
   Lesson 2.8.2 - Market failure and arguments against markets
   Cambridge IGCSE Economics 0455 - Unit 2: The allocation of resources

   Syllabus source:
   ../../../references/igcse-economics-syllabus-2027-2029.md

   Earlier teaching material consulted:
   02.1 IC Classroom/2 The allocation of resources/2.8 Market economic system/
   - 2.9 (A) Market economic system.pdf
   - 2.9 (A) Market economic system.pptx
   - IC3 Revision - Economic systems.pptx

   Pacing note:
   Start from disadvantages of market economies, then build exam-ready
   chains for market failure and the limits of the price mechanism.
   ============================================================ */

window.IGCSE = window.IGCSE || {};

const localPhoto = (file, alt, credit) => ({
  type: 'photo',
  src: `../../../assets/images/fiscal-policy/${file}`,
  alt,
  caption: alt.replace(/\.$/, ''),
  credit,
});

const marketPhoto = (file, alt, credit, source) => ({
  type: 'photo',
  src: `../../../assets/images/market-economic-system/${file}`,
  alt,
  caption: alt.replace(/\.$/, ''),
  credit,
  source,
});

const photos = {
  classroom: localPhoto(
    'students-in-a-classroom.jpg',
    'Students working at desks in a classroom.',
    'Wikimedia Commons / Ente75'
  ),
  shopping: localPhoto(
    'shopping-carts-in-a-grocery-store.jpg',
    'Rows of shopping carts inside a grocery store.',
    'Wikimedia Commons / Visitor7'
  ),
  factory: localPhoto(
    'national-semiconductor-factory.jpg',
    'The exterior of a semiconductor factory.',
    'Wikimedia Commons / william craig'
  ),
  port: localPhoto(
    'cargo-containers.jpg',
    'Stacks of cargo containers at a waterfront port.',
    'Wikimedia Commons / Roy Luck'
  ),
  pollution: localPhoto(
    'smokestack-in-detroit.jpg',
    'A smokestack rising from an industrial plant.',
    'Wikimedia Commons / Gyre'
  ),
  roadwork: localPhoto(
    'going-to-the-sun-road-paving.jpg',
    'A road construction crew paving a mountain road.',
    'Wikimedia Commons / U.S. Dept. of Transportation'
  ),
  healthcare: localPhoto(
    'doctors-and-nurses-at-the-3rd-field-hospital.jpg',
    'Doctors and nurses standing together in a hospital.',
    'Wikimedia Commons / Defense VI Records Center'
  ),
  socialSecurity: localPhoto(
    'signing-of-the-social-security-act.jpg',
    'President Roosevelt signing the Social Security Act.',
    'Wikimedia Commons / National Archives'
  ),
  bubbleTeaShop: marketPhoto(
    'bubble-tea-shop.jpg',
    'A Tapioca Express bubble tea shop in Alameda, California.',
    'Wikimedia Commons / Tony Webster',
    'https://commons.wikimedia.org/wiki/File:Tapioca_Express,_Alameda,_California_(17240075099).jpg'
  ),
  phoneDisplay: marketPhoto(
    'iphone-display.jpg',
    'Rows of smartphones displayed in an Apple Store.',
    'Wikimedia Commons / Fastily',
    'https://commons.wikimedia.org/wiki/File:Apple_Store_iPhone_Display_1_2023-12-10.jpg'
  ),
  eBikeShop: marketPhoto(
    'electric-bike-shop.jpg',
    'An electric bicycle shop on 9th Avenue in New York.',
    'Wikimedia Commons / Jim.henderson',
    'https://commons.wikimedia.org/wiki/File:DC_Electric_Power_Bicycle_shop_jeh.jpg'
  ),
  evCharging: marketPhoto(
    'ev-charging-station.jpg',
    'An electric vehicle charging station.',
    'Wikimedia Commons / Rgaenzle',
    'https://commons.wikimedia.org/wiki/File:Electric_vehicle_charging_station.jpg'
  ),
  vegetables: marketPhoto(
    'supermarket-vegetables.jpg',
    'A supermarket vegetable shelf kept fresh by a mist generator.',
    'Wikimedia Commons / Simon Speed',
    'https://commons.wikimedia.org/wiki/File:VegetableShelfMistGenerator.JPG'
  ),
  factorySmoke: marketPhoto(
    'factory-smoke.jpg',
    'A factory chimney releasing smoke into the sky.',
    'Wikimedia Commons / Thomas Berg',
    'https://commons.wikimedia.org/wiki/File:Factory_Emitting_Smoke.jpg'
  ),
  streetLight: marketPhoto(
    'street-light.jpg',
    'A yellow street light at a road intersection at night.',
    'Wikimedia Commons / Famartin',
    'https://commons.wikimedia.org/wiki/File:2021-10-08_21_20_53_Yellow_street_light_at_the_intersection_of_Kuakini_Highway_and_Likana_Lane_in_Kailua-Kona,_Hawaii_County,_Hawaii.jpg'
  ),
};

IGCSE.lesson = {
  meta: {
    code:         '2.8.2',
    unit:         'Unit 2 - The allocation of resources',
    title:        'Market failure and arguments against markets - Cambridge IGCSE Economics 0455',
    lessonLabel:  'Market failure and arguments against markets',
    courseLabel:  'Cambridge IGCSE Economics 0455',
    creatorLabel: 'Created by Samuel Oehler-Huang, Suzhou Foreign Language School',
  },

  slides: [
    {
      type: 'hero',
      eyebrow:  'Lesson overview',
      title:    'Market failure and arguments against markets',
      subtitle: 'Lesson 2.8.2',
      kicker:   'Why can markets allocate resources powerfully but imperfectly?',
      visual:   photos.factorySmoke,
    },
    {
      type: 'discussion',
      eyebrow: 'Starter',
      title:   'When profit is not enough',
      question: 'Which important goods or effects might firms ignore if they only produce what is profitable?',
      zh: '如果企业只生产有利润的东西，它们可能会忽视哪些重要产品或影响？',
      visual: photos.factorySmoke,
    },
    {
      type: 'outcomes',
      eyebrow: 'Objectives',
      title:   'By the end, you can',
      bullets: [
        'Analyse disadvantages of a market economy.',
        'Define market failure as inefficient resource allocation by the market.',
        'Use private, external and social costs and benefits correctly.',
        'Explain public goods, merit goods, demerit goods and monopoly power.',
        'Build balanced exam answers about markets and government intervention.',
      ],
    },
    {
      type: 'section',
      eyebrow: 'New section',
      title:   'Arguments against\nmarket economies',
      subtitle: '2.8.2 - Arguments against market economies',
    },
    {
      type: 'cards',
      eyebrow: 'Learn',
      title:   'Disadvantages of a market economy',
      cards: [
        ['Inequality', 'income and wealth may become unevenly distributed', '1'],
        ['External costs', 'firms and consumers may ignore costs imposed on others', '2'],
        ['Merit goods', 'beneficial goods such as education may be under-consumed', '3'],
        ['Public goods', 'goods such as street lighting or defence may not be provided', '4'],
        ['Demerit goods', 'harmful goods may be over-consumed', '5'],
        ['Monopoly power', 'large firms may restrict output and charge high prices', '6'],
      ],
      partialReview: ['.cardgrid > .card'],
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title:   '1. Inequality',
      zhTitle: '不平等',
      nodes: [['high-income consumers have more spending power', 'firms respond to profitable demand', 'poorer households may have less access', 'inequality may increase']],
      footer: 'Market demand reflects ability to pay, not only human need.',
      visual: photos.socialSecurity,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'term',
      eyebrow: 'Key term',
      title:   'Market failure',
      zhTitle: '市场失灵',
      term:    'market failure',
      definition: 'Market failure occurs when the free market allocates resources inefficiently, so society gets too much, too little or none of a good or service.',
      examples: [
        ['Too much', 'pollution or demerit goods'],
        ['Too little', 'education, healthcare or vaccines'],
        ['None', 'some public goods may not be provided'],
      ],
      visual: photos.factorySmoke,
      partialReview: ['.termBox', '.termExamples > .termExample'],
    },
    {
      type: 'socialEffectsVenn',
      eyebrow: 'Language toolkit',
      title:   'Private, external and social effects',
      costs: {
        title: 'Costs',
        social: 'Social cost',
        private: 'Private cost',
        privateNote: 'paid by buyer or seller',
        external: 'External cost',
        externalNote: 'imposed on third parties',
        formula: 'Social cost = private cost + external cost',
      },
      benefits: {
        title: 'Benefits',
        social: 'Social benefit',
        private: 'Private benefit',
        privateNote: 'gained by buyer or seller',
        external: 'External benefit',
        externalNote: 'gained by third parties',
        formula: 'Social benefit = private benefit + external benefit',
      },
      prompt: 'Exam use: market failure can occur when private incentives do not reflect social costs or social benefits.',
      partialReview: ['.vennBox', '.prompt'],
    },
    {
      type: 'marketFailureExternalitySim',
      eyebrow: 'Explore',
      title:   '2. External costs: one simple idea',
      lead:    'Move the slider: a bigger external cost makes social cost higher than private cost.',
      defaultPrivateBenefit: 60,
      defaultPrivateCost: 38,
      defaultSpillover: 24,
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title:   '2. External costs',
      zhTitle: '外部成本',
      question: 'A factory may focus on private profit and ignore costs to third parties.',
      nodes: [['factory pollutes', 'external costs are ignored', 'social cost is higher than private cost', 'output may be too high', 'resources are over-allocated']],
      footer: 'This is a cause of market failure.',
      visual: photos.factorySmoke,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'fact',
      eyebrow: 'Example',
      facts: {
        left: {
          flag: '🌍',
          country: 'World',
          fact: 'Air pollution creates external costs: WHO links it to 6.7 million early deaths each year.',
          zh: '空气污染会带来外部成本：世卫组织认为每年与670万例过早死亡有关。',
          source: 'Source: World Health Organization.',
        },
        china: {
          flag: '🇨🇳',
          country: 'China',
          fact: 'China’s city PM2.5 average was 29.3 micrograms per m³ in 2024.',
          zh: '2024年，中国城市PM2.5平均浓度为29.3微克/立方米。',
          source: 'Source: China Ministry of Ecology and Environment.',
        },
      },
      visual:  photos.factorySmoke,
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title:   'External benefits',
      zhTitle: '外部收益',
      question: 'A good may benefit people beyond the person who buys it.',
      nodes: [['consumer considers private benefit', 'external benefits are ignored', 'social benefit is higher than private benefit', 'demand may be too low', 'resources are under-allocated']],
      footer: 'Examples can include vaccination, education and healthcare.',
      visual: photos.healthcare,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'compare',
      eyebrow: 'Learn',
      title:   'Over-consumption and under-consumption',
      leftTitle: 'Demerit goods',
      left: [
        'consumers may underestimate private costs',
        'external costs may be ignored',
        'market may over-consume goods such as cigarettes or sugary drinks'
      ],
      rightTitle: 'Merit goods',
      right: [
        'consumers may underestimate private benefits',
        'external benefits may be ignored',
        'market may under-consume goods such as education or healthcare'
      ],
      visual: photos.healthcare,
      partialReview: ['.splitCols > .card'],
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title:   '3. Merit goods',
      zhTitle: '有益品',
      nodes: [['consumers underestimate benefits of education', 'demand is too low', 'private firms provide too little', 'long-run productivity may be lower']],
      footer: 'Markets may under-allocate resources to goods with wider social benefits.',
      visual: photos.classroom,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title:   '5. Demerit goods',
      zhTitle: '有害品',
      nodes: [['consumers underestimate health costs', 'demand is too high', 'firms supply what is profitable', 'harmful goods are over-consumed']],
      footer: 'Examples include cigarettes, alcohol or sugary drinks.',
      visual: photos.shopping,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'section',
      eyebrow: 'New section',
      title:   'Public goods and\nmonopoly power',
      subtitle: '2.9.3 - Causes of market failure',
    },
    {
      type: 'discussion',
      eyebrow: 'Explore',
      title:   'Who pays for the light?',
      question: 'If everyone benefits from a street light, why might a private firm struggle to charge each user?',
      zh: '如果每个人都能从路灯受益，为什么私人企业很难向每个使用者收费？',
      visual: photos.streetLight,
    },
    {
      type: 'publicGoodFreeRiderSim',
      eyebrow: 'Explore',
      title:   '4. Public goods: one simple idea',
      lead:    'Move the slider: when fewer users pay, private revenue may not cover the cost.',
      defaultPeople: 90,
      defaultBenefit: 12,
      defaultPaying: 25,
      defaultCost: 800,
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title:   '4. Public goods',
      zhTitle: '公共物品',
      question: 'Public goods are difficult to sell only to people who pay.',
      nodes: [['people can benefit without paying', 'firms cannot easily charge users', 'profit incentive is weak', 'good may not be provided']],
      footer: 'Example: street lighting, flood defences or national defence.',
      visual: photos.streetLight,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'monopolyPowerSim',
      eyebrow: 'Explore',
      title:   '6. Monopoly power: one simple idea',
      lead:    'Move the slider: weaker competition gives one firm more market power.',
      defaultCompetition: 30,
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title:   '6. Monopoly power',
      zhTitle: '垄断力量',
      nodes: [['one firm dominates a market', 'competition falls', 'output may be restricted', 'prices may be higher', 'consumer choice may fall']],
      footer: 'This weakens the market-economy advantage of competition.',
      visual: photos.factory,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'section',
      eyebrow: 'New section',
      title:   'Classify and evaluate',
      subtitle: '2.8.2 and 2.9 - Arguments against markets',
    },
    {
      type: 'marketFailureScenarioGame',
      eyebrow: 'Apply',
      title:   'Classify the market failure',
      lead:    'Choose the best label, then read the exam chain in the feedback.',
    },
    {
      type: 'compare',
      eyebrow: 'Review',
      title:   'For and against markets',
      leftTitle: 'Arguments for',
      left: [
        'consumer sovereignty',
        'choice',
        'profit incentive',
        'competition and efficiency',
        'quality and innovation'
      ],
      rightTitle: 'Arguments against',
      right: [
        'inequality',
        'external costs and benefits',
        'over-consumption of demerit goods',
        'under-consumption of merit goods',
        'non-provision of public goods and monopoly power'
      ],
      prompt: 'Judgement: markets are powerful allocators, but not perfect allocators.',
      partialReview: ['.splitCols > .card', '.prompt'],
    },
    {
      type: 'compare',
      eyebrow: 'Exam practice',
      title:   'Weak answer or strong answer?',
      leftTitle: 'Weak',
      left: [
        'Markets can fail because pollution is bad.',
        'Public goods are not made.',
        'Monopolies charge more.'
      ],
      rightTitle: 'Strong',
      right: [
        'Pollution is an external cost, so social cost exceeds private cost.',
        'Free riders reduce private revenue, so public goods may not be provided.',
        'A monopoly may restrict output, causing higher prices and less choice.'
      ],
      prompt: 'The strong answer identifies the cause, mechanism and consequence.',
      partialReview: ['.splitCols > .card', '.prompt'],
    },
    {
      type: 'quiz',
      eyebrow: 'Check',
      question: 'A private firm will not provide street lighting because people can benefit even if they do not pay. Which problem is this?',
      choices: [
        'Non-provision of a public good',
        'Consumer sovereignty',
        'More innovation',
      ],
      answer: 0,
      prompt: 'Add one sentence explaining why profit is difficult here.',
      visual: photos.streetLight,
    },
    {
      type: 'answer',
      eyebrow: 'Check',
      title:   'Fill in the blanks',
      mode:    'fillBlanks',
      steps: [
        ['1', 'Market failure means resources are allocated __________ by the market.', 'inefficiently'],
        ['2', 'Pollution is an example of an external __________.', 'cost'],
        ['3', 'Education and healthcare may be under-consumed because they are __________ goods.', 'merit'],
        ['4', 'Street lighting may not be provided by firms because it is a public __________.', 'good'],
      ],
    },
    {
      type: 'exam',
      eyebrow: 'Exam practice',
      title:   'Discuss two sides',
      question: 'Discuss whether a market economic system is the best way to allocate resources. [8]',
      keywords: ['price mechanism', 'consumer sovereignty', 'market failure', 'judgement'],
      prompt:   'One paragraph for, one paragraph against, then judge whether government intervention is needed.',
      visual: photos.classroom,
      partialReview: ['.cardgrid > .card', '.prompt'],
    },
    {
      type: 'answer',
      eyebrow: 'Exit ticket',
      title:   'Fill in the blanks',
      mode:    'fillBlanks',
      steps: [
        ['1', 'A market economy allocates resources mainly through the price __________.', 'mechanism'],
        ['2', 'Market failure is an inefficient allocation of __________.', 'resources'],
        ['3', 'Social cost equals private cost plus external __________.', 'cost'],
        ['4', 'Social benefit equals private benefit plus external __________.', 'benefit'],
        ['5', 'A monopoly may restrict output and charge higher __________.', 'prices'],
      ],
    },
  ],
};
