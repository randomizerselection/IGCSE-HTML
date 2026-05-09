/* ============================================================
   Lesson 2.8 - Market economic system
   Cambridge IGCSE Economics 0455 - Unit 2: The allocation of resources

   Syllabus source:
   ../../../references/igcse-economics-syllabus-2027-2029.md

   Earlier teaching material consulted:
   02.1 IC Classroom/2 The allocation of resources/2.8 Market economic system/
   - 2.9 (A) Market economic system.pdf
   - 2.9 (A) Market economic system.pptx
   - IC3 Revision - Economic systems.pptx

   Pacing note:
   Keep the definition tight, then build exam-ready chains for the price
   mechanism, advantages and disadvantages.
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
    code:         '2.8',
    unit:         'Unit 2 - The allocation of resources',
    title:        'Market economic system - Cambridge IGCSE Economics 0455',
    lessonLabel:  'Market economic system',
    courseLabel:  'Cambridge IGCSE Economics 0455',
    creatorLabel: 'Created by Samuel Oehler-Huang, Suzhou Foreign Language School',
  },

  slides: [
    {
      type: 'hero',
      eyebrow:  'Lesson overview',
      title:    'Market economic system',
      subtitle: 'Lesson 2.8',
      kicker:   'How do prices, profits and consumer choices allocate scarce resources?',
      visual:   photos.bubbleTeaShop,
    },
    {
      type: 'discussion',
      eyebrow: 'Starter',
      title:   'Who decides?',
      question: 'If a new bubble tea shop opens near school, who decides what it sells, what price it charges and whether it survives?',
      zh: '如果学校附近新开一家奶茶店，谁决定它卖什么、定什么价格，以及它能否生存？',
      visual: photos.bubbleTeaShop,
    },
    {
      type: 'outcomes',
      eyebrow: 'Objectives',
      title:   'By the end, you can',
      bullets: [
        'Define a market economic system.',
        'Explain how the price mechanism allocates resources.',
        'Analyse advantages of a market economy.',
        'Analyse disadvantages of a market economy.',
        'Build balanced exam answers using clear cause-and-effect chains.',
      ],
    },
    {
      type: 'section',
      eyebrow: 'New section',
      title:   'Market economy basics',
      subtitle: '2.8.1 - Market economic system',
    },
    {
      type: 'discussion',
      eyebrow: 'Explore',
      title:   'No central planner',
      question: 'In a busy food street, why might some stalls expand while others disappear without anyone centrally planning the result?',
      zh: '在繁忙的小吃街，为什么有些摊位会扩大，而有些会消失，即使没有人统一计划？',
      visual: photos.bubbleTeaShop,
    },
    {
      type: 'systemCompare',
      eyebrow: 'Learn',
      title:   'Three economic systems',
      systems: [
        {
          visual: 'market',
          title: 'Market economy',
          zhTitle: '市场经济',
          points: [
            'resources mainly privately owned',
            'prices set by demand and supply',
            'firms respond to profit incentives'
          ],
        },
        {
          visual: 'mixed',
          title: 'Mixed economy',
          zhTitle: '混合经济',
          points: [
            'private and public sectors both important',
            'government provides some goods and services',
            'most real-world economies are mixed'
          ],
        },
        {
          visual: 'planned',
          title: 'Planned economy',
          zhTitle: '计划经济',
          points: [
            'resources mainly publicly owned',
            'government decides output and priorities',
            'prices may be set or controlled centrally'
          ],
        },
      ],
      prompt: 'Exam focus today: the market end of the spectrum.',
      partialReview: ['.systemCompare > .systemCard', '.prompt'],
    },
    {
      type: 'term',
      eyebrow: 'Learn',
      title:   'Market economic system',
      zhTitle: '市场经济制度',
      term:    'market economic system',
      definition: 'Resources are allocated mainly by demand and supply through prices, with private ownership and little or no government intervention.',
      examples: [
        ['Private ownership', 'resources owned by individuals and firms'],
        ['Profit motive', 'firms produce to earn profit'],
        ['Price signals', 'prices show what consumers want'],
      ],
      visual: photos.bubbleTeaShop,
      partialReview: ['.termBox', '.termExamples > .termExample'],
    },
    {
      type: 'cards',
      eyebrow: 'Learn',
      title:   'Four features of a market economy',
      cards: [
        ['Private ownership', 'resources are owned by individuals and private firms', '1'],
        ['Market forces', 'demand and supply influence prices', '2'],
        ['Price mechanism', 'prices act as signals and incentives', '3'],
        ['Profit incentive', 'firms produce to earn profit', '4'],
      ],
      visual: photos.bubbleTeaShop,
      partialReview: ['.cardgrid > .card'],
    },
    {
      type: 'compare',
      eyebrow: 'Learn',
      title:   'Private sector and public sector',
      leftTitle: 'Private sector',
      left: [
        'businesses owned by private individuals or shareholders',
        'usually aims to earn profit',
        'examples: shops, factories, restaurants'
      ],
      rightTitle: 'Public sector',
      right: [
        'organisations owned and controlled by the government',
        'often provides services for society',
        'examples: state schools, public hospitals, defence'
      ],
      visual: photos.healthcare,
      partialReview: ['.splitCols > .card'],
    },
    {
      type: 'quiz',
      eyebrow: 'Check',
      question: 'Most resources are owned by private individuals and firms. Goods are produced mainly for profit, and prices are set by demand and supply.',
      choices: [
        'Market economic system',
        'Planned economic system',
        'Budget deficit',
      ],
      answer: 0,
      prompt: 'Choose one, then identify the phrase that proves it.',
      visual: photos.factory,
    },
    {
      type: 'quiz',
      eyebrow: 'Check',
      question: 'What is an essential feature of a market economy?',
      choices: [
        'Central planners decide what, how and for whom to produce.',
        'The price mechanism sends signals to consumers and producers.',
        'The government owns all resources.',
        'Income is distributed equally.'
      ],
      answer: 1,
      prompt: 'Explain why one wrong answer describes a different system.',
      visual: photos.shopping,
    },
    {
      type: 'section',
      eyebrow: 'New section',
      title:   'How markets allocate\nresources',
      subtitle: '2.8.1 - Price mechanism and resource allocation',
    },
    {
      type: 'discussion',
      eyebrow: 'Explore',
      title:   'Signals in a queue',
      question: 'If demand for milk tea rises and queues become longer, what might happen to price, profit and the number of firms selling milk tea?',
      zh: '如果奶茶需求上升、排队变长，价格、利润和卖奶茶的企业数量可能会怎样变化？',
      visual: photos.bubbleTeaShop,
    },
    {
      type: 'marketMechanismSim',
      eyebrow: 'Explore',
      title:   'Demand, price, profit and resources',
      defaultDemand: 55,
      defaultCost: 18,
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title:   'Demand rises',
      zhTitle: '需求上升',
      question: 'A rise in demand sends a signal through price.',
      nodes: [['demand rises', 'price rises', 'profits rise', 'firms produce more', 'more resources move into production']],
      footer: 'Resources include land, labour, capital and enterprise.',
      visual: photos.shopping,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'fact',
      eyebrow: 'Example',
      facts: {
        left: {
          flag: '🌍',
          country: 'World',
          fact: 'Electric car demand passed 17 million sales in 2024.',
          zh: '2024年，全球电动汽车销量超过1700万辆。',
          source: 'Source: IEA Global EV Outlook 2025.',
        },
        china: {
          flag: '🇨🇳',
          country: 'China',
          fact: 'China sold over 11 million electric cars in 2024, almost half of new car sales.',
          zh: '2024年中国电动汽车销量超过1100万辆，接近新车销量的一半。',
          source: 'Source: IEA Global EV Outlook 2025.',
        },
      },
      visual:  photos.evCharging,
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title:   'Demand falls',
      zhTitle: '需求下降',
      question: 'A fall in demand sends the opposite signal.',
      nodes: [['demand falls', 'price falls', 'profits fall', 'firms produce less', 'resources move elsewhere']],
      footer: 'This is why markets can adjust without a central planner.',
      visual: photos.factory,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'discussion',
      eyebrow: 'Apply',
      title:   'When demand disappears',
      question: 'If fewer students buy a drink from one shop, what should happen to its workers, stock and opening hours?',
      zh: '如果越来越少的学生在某家店买饮料，它的员工、库存和营业时间应该怎样调整？',
      visual: photos.bubbleTeaShop,
    },
    {
      type: 'term',
      eyebrow: 'Learn',
      title:   'Consumer sovereignty',
      zhTitle: '消费者主权',
      term:    'consumer sovereignty',
      definition: 'Consumers, through their spending decisions, influence what goods and services are produced.',
      examples: [
        ['More demand', 'firms stock more'],
        ['Less demand', 'firms cut output'],
        ['Spending power', 'sales guide production'],
      ],
      visual: photos.vegetables,
      partialReview: ['.termBox', '.termExamples > .termExample'],
    },
    {
      type: 'answer',
      eyebrow: 'Check',
      title:   'Fill in the blanks',
      mode:    'fillBlanks',
      steps: [
        ['1', 'When demand rises, price usually __________.', 'rises'],
        ['2', 'Higher prices can increase producer __________.', 'profit'],
        ['3', 'The profit incentive encourages firms to allocate more __________.', 'resources'],
        ['4', 'Consumer sovereignty means spending decisions influence what is __________.', 'produced'],
      ],
    },
    {
      type: 'fact',
      eyebrow: 'Example',
      facts: {
        left: {
          flag: '🇺🇸',
          country: 'United States',
          fact: 'U.S. plant-based food sales reached $8.1 billion (about RMB 58 billion) in 2024.',
          zh: '2024年，美国植物基食品销售额达到81亿美元（约580亿元人民币）。',
          source: 'Source: Good Food Institute; RMB conversion approximate.',
        },
        china: {
          flag: '🇨🇳',
          country: 'China',
          fact: 'China’s plant-based meat market was about $427.8 million (about RMB 3.1 billion) in 2023.',
          zh: '2023年，中国植物肉市场约为4.278亿美元（约31亿元人民币）。',
          source: 'Source: Grand View Research; RMB conversion approximate.',
        },
      },
      visual:  photos.vegetables,
    },
    {
      type: 'quiz',
      eyebrow: 'Apply',
      question: 'Demand for electric bicycles rises. Which chain is strongest?',
      choices: [
        'Demand rises -> price may rise -> profit incentive rises -> firms allocate more resources to electric bicycles.',
        'Demand rises -> government must centrally plan more electric bicycles.',
        'Demand rises -> firms produce less because consumers have more choice.',
      ],
      answer: 0,
      prompt: 'Add one resource that might move into production.',
      visual: photos.eBikeShop,
    },
    {
      type: 'answer',
      eyebrow: 'Review',
      title:   'Fill in the blanks',
      mode:    'fillBlanks',
      steps: [
        ['1', 'Market forces means __________ and supply.', 'demand'],
        ['2', 'The price mechanism allocates resources through changes in __________.', 'price'],
        ['3', 'Resources are mainly __________ owned.', 'privately'],
        ['4', 'The profit __________ encourages firms to produce what consumers demand.', 'incentive'],
      ],
    },
    {
      type: 'section',
      eyebrow: 'New section',
      title:   'Arguments for\nmarket economies',
      subtitle: '2.8.2 - Arguments for market economies',
    },
    {
      type: 'discussion',
      eyebrow: 'Explore',
      title:   'Competing for customers',
      question: 'Why do rival phone companies keep improving cameras, batteries, designs and prices?',
      zh: '为什么相互竞争的手机企业会不断改进摄像头、电池、设计和价格？',
      visual: photos.phoneDisplay,
    },
    {
      type: 'cards',
      eyebrow: 'Learn',
      title:   'Advantages of a market economy',
      cards: [
        ['Consumer sovereignty', 'firms respond to consumer demand', '1'],
        ['Choice', 'consumers can choose from a wide variety of goods and services', '2'],
        ['Quality and innovation', 'profit encourages firms to improve products', '3'],
        ['Efficiency', 'competition and profit pressure firms to reduce waste and costs', '4'],
      ],
      visual: photos.phoneDisplay,
      partialReview: ['.cardgrid > .card'],
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title:   '1. Consumer sovereignty',
      zhTitle: '消费者主权',
      nodes: [['consumers spend on products they want', 'firms try to attract consumers', 'firms produce what consumers demand']],
      footer: 'Strong phrase: producers are responsive to consumer demand.',
      visual: photos.shopping,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'discussion',
      eyebrow: 'Explore',
      title:   'Do firms follow every signal?',
      question: 'If consumers want healthier meals but also low prices, what trade-offs do firms face?',
      zh: '如果消费者既想要更健康的餐食，又想要低价格，企业会面临什么取舍？',
      visual: photos.vegetables,
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title:   '2. Choice',
      zhTitle: '选择更多',
      nodes: [['many firms compete', 'different prices, styles and quality levels appear', 'consumers have wider choice']],
      footer: 'Example: coffee shops may compete through price, flavour, location and seating.',
      visual: photos.shopping,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'fact',
      eyebrow: 'Example',
      facts: {
        left: {
          flag: '🇺🇸',
          country: 'United States',
          fact: 'The U.S. App Store economy reached $406 billion (about RMB 2.9 trillion) in 2024.',
          zh: '2024年，美国App Store经济规模达到4060亿美元（约2.9万亿元人民币）。',
          source: 'Source: Apple Newsroom; RMB conversion approximate.',
        },
        china: {
          flag: '🇨🇳',
          country: 'China',
          fact: 'China’s App Store economy reached RMB 3.76 trillion in 2023.',
          zh: '2023年，中国App Store经济规模达到3.76万亿元人民币。',
          source: 'Source: Apple China Newsroom.',
        },
      },
      visual:  photos.phoneDisplay,
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title:   '3. Quality and innovation',
      zhTitle: '质量和创新',
      nodes: [['firms want profit', 'better products attract consumers', 'quality and innovation may improve']],
      footer: 'Example: phone firms may improve battery life and camera quality.',
      visual: photos.phoneDisplay,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title:   '4. Efficiency',
      zhTitle: '效率',
      nodes: [['competition pressures firms', 'firms reduce costs and waste', 'prices may be lower', 'resources may be used efficiently']],
      footer: 'Evaluation: efficiency is not guaranteed if firms gain monopoly power.',
      visual: photos.factory,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'compare',
      eyebrow: 'Exam practice',
      title:   'Weak answer or strong answer?',
      leftTitle: 'Weak',
      left: [
        'Markets are good because there is choice.',
        'Firms make profit.',
        'Competition is good.'
      ],
      rightTitle: 'Strong',
      right: [
        'Competition gives firms an incentive to reduce costs.',
        'Lower costs may allow lower prices.',
        'Consumers may gain more choice and better quality.'
      ],
      prompt: 'The strong answer explains the chain.',
      visual: photos.classroom,
      partialReview: ['.splitCols > .card', '.prompt'],
    },
    {
      type: 'quiz',
      eyebrow: 'Check',
      question: 'A supermarket increases its range of vegetarian meals after more customers ask for them. Which advantage is most direct?',
      choices: [
        'Consumer sovereignty',
        'Public ownership',
        'Market failure',
      ],
      answer: 0,
      prompt: 'Now name the advantage shown when a factory installs better machinery to lower cost per unit.',
      visual: photos.vegetables,
    },
    {
      type: 'answer',
      eyebrow: 'Check',
      title:   'Fill in the blanks',
      mode:    'fillBlanks',
      steps: [
        ['1', 'Competition can encourage firms to lower __________.', 'costs'],
        ['2', 'The profit incentive can encourage quality and __________.', 'innovation'],
        ['3', 'More firms in a market can increase consumer __________.', 'choice'],
        ['4', 'A market economy can respond quickly to changes in consumer __________.', 'demand'],
      ],
    },
    {
      type: 'marketSignalGame',
      eyebrow: 'Apply',
      title:   'Follow the market signal',
    },
    {
      type: 'exam',
      eyebrow: 'Exam practice',
      title:   'Analyse advantages',
      question: 'Analyse two advantages of a market economic system. [6]',
      keywords: ['consumer demand', 'profit incentive', 'competition', 'efficiency'],
      prompt:   'Build two chains. Each chain needs a cause, an effect and a benefit.',
      visual: photos.classroom,
      partialReview: ['.cardgrid > .card', '.prompt'],
    },
    {
      type: 'section',
      eyebrow: 'New section',
      title:   'Arguments against\nmarket economies',
      subtitle: '2.8.2 - Arguments against market economies',
    },
    {
      type: 'discussion',
      eyebrow: 'Explore',
      title:   'When profit is not enough',
      question: 'Which important goods or effects might firms ignore if they only produce what is profitable?',
      zh: '如果企业只生产有利润的东西，它们可能会忽视哪些重要产品或影响？',
      visual: photos.factorySmoke,
    },
    {
      type: 'cards',
      eyebrow: 'Learn',
      title:   'Disadvantages of a market economy',
      cards: [
        ['Inequality', 'income and wealth may become unevenly distributed', '1'],
        ['External costs', 'firms and consumers may ignore costs imposed on others', '2'],
        ['Merit goods', 'goods such as education and healthcare may be under-consumed', '3'],
        ['Public goods', 'goods such as street lighting or defence may not be provided', '4'],
        ['Demerit goods', 'harmful goods may be over-consumed', '5'],
        ['Monopoly power', 'large firms may restrict output and charge high prices', '6'],
      ],
      visual: photos.factorySmoke,
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
      type: 'flow',
      eyebrow: 'Learn',
      title:   '2. External costs',
      zhTitle: '外部成本',
      question: 'A factory may focus on private profit and ignore costs to third parties.',
      nodes: [['factory pollutes', 'external costs are ignored', 'output may be too high', 'resources are over-allocated']],
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
      title:   '3. Under-provision of merit goods',
      zhTitle: '有益品供给不足',
      nodes: [['consumers underestimate benefits of education', 'demand is too low', 'private firms provide too little', 'long-run productivity may be lower']],
      footer: 'Markets may under-allocate resources to goods with wider social benefits.',
      visual: photos.classroom,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title:   '4. Non-provision of public goods',
      zhTitle: '公共物品不被提供',
      question: 'Public goods are difficult to sell only to people who pay.',
      nodes: [['people can benefit without paying', 'firms cannot easily charge users', 'profit incentive is weak', 'good may not be provided']],
      footer: 'Example: street lighting, flood defences or national defence.',
      visual: photos.streetLight,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
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
      type: 'flow',
      eyebrow: 'Learn',
      title:   '5. Monopoly power',
      zhTitle: '垄断力量',
      nodes: [['one firm dominates a market', 'competition falls', 'output may be restricted', 'prices may be higher']],
      footer: 'This weakens the market-economy advantage of competition.',
      visual: photos.factory,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
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
        'external costs',
        'over-consumption of demerit goods',
        'under-consumption of merit goods',
        'non-provision of public goods'
      ],
      prompt: 'Judgement: markets are powerful allocators, but not perfect allocators.',
      visual: photos.shopping,
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
        ['1', 'Markets may create inequality because demand depends partly on ability to __________.', 'pay'],
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
      keywords: ['price mechanism', 'consumer sovereignty', 'market failure', 'inequality'],
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
        ['2', 'Resources are mostly owned by __________ individuals and firms.', 'private'],
        ['3', 'Consumer sovereignty means consumers influence what is __________.', 'produced'],
        ['4', 'Competition can encourage firms to reduce __________ and improve quality.', 'costs'],
        ['5', 'A disadvantage is that markets may create __________ failure.', 'market'],
      ],
    },
  ],
};
