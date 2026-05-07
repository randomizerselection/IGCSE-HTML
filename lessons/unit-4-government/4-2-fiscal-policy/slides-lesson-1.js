/* ============================================================
   Lesson 4.2 - Fiscal policy
   Cambridge IGCSE Economics 0455 - Unit 4: Government and the macroeconomy

   Syllabus source:
   ../../../references/igcse-economics-syllabus-2027-2029.md

   Pacing note:
   Keep each slide to one teaching move and tie each policy effect back to
   the macroeconomic aims taught in 4.1.1.
   ============================================================ */

window.IGCSE = window.IGCSE || {};

const localPhoto = (file, alt, credit) => ({
  type: 'photo',
  src: `../../../assets/images/fiscal-policy/${file}`,
  alt,
  caption: alt.replace(/\.$/, ''),
  credit,
});

const factPhoto = (file, caption, credit, source) => ({
  type: 'photo',
  src: `../../../assets/images/fiscal-policy/facts/${file}`,
  alt: caption,
  caption,
  credit,
  source,
});

const photos = {
  budgetMeeting: localPhoto(
    'budget-meeting-with-congress.jpg',
    'Government officials seated around a table during budget negotiations.',
    'Wikimedia Commons / Robert McNeely'
  ),
  budgetHearing: localPhoto(
    'house-budget-committee-meeting-2020-01-15.jpg',
    'A legislative budget committee meeting in progress.',
    'Wikimedia Commons / House Budget Committee Democrats'
  ),
  classroom: localPhoto(
    'students-in-a-classroom.jpg',
    'Students working at desks in a classroom.',
    'Wikimedia Commons / Ente75'
  ),
  healthcare: localPhoto(
    'doctors-and-nurses-at-the-3rd-field-hospital.jpg',
    'Doctors and nurses standing together in a hospital.',
    'Wikimedia Commons / Defense VI Records Center'
  ),
  defence: localPhoto(
    'defence-officials-meeting.jpg',
    'Defence officials seated for a formal bilateral meeting.',
    'Wikimedia Commons / U.S. Secretary of Defense'
  ),
  roadwork: localPhoto(
    'going-to-the-sun-road-paving.jpg',
    'A road construction crew paving a mountain road.',
    'Wikimedia Commons / U.S. Dept. of Transportation'
  ),
  industry: localPhoto(
    'national-semiconductor-factory.jpg',
    'The exterior of a semiconductor factory.',
    'Wikimedia Commons / william craig'
  ),
  socialSecurity: localPhoto(
    'signing-of-the-social-security-act.jpg',
    'President Roosevelt signing the Social Security Act.',
    'Wikimedia Commons / National Archives'
  ),
  shopping: localPhoto(
    'shopping-carts-in-a-grocery-store.jpg',
    'Rows of shopping carts inside a grocery store.',
    'Wikimedia Commons / Visitor7'
  ),
  taxForms: localPhoto(
    'tax-forms.jpg',
    'Printed tax forms laid out on a table.',
    'Wikimedia Commons / Kalamazoo Public Library'
  ),
  tobacco: localPhoto(
    'tobacco-cigarette-pack.jpg',
    'A cigarette pack photographed on a table.',
    'Wikimedia Commons / Lindsay Fox'
  ),
  pollution: localPhoto(
    'smokestack-in-detroit.jpg',
    'A smokestack rising from an industrial plant.',
    'Wikimedia Commons / Gyre'
  ),
  port: localPhoto(
    'cargo-containers.jpg',
    'Stacks of cargo containers at a waterfront port.',
    'Wikimedia Commons / Roy Luck'
  ),
  inflation: localPhoto(
    'meat-inflation-in-the-united-states.jpg',
    'A grocery shelf with posted meat prices.',
    'Wikimedia Commons / Wikideas1'
  ),
};

const factPhotos = {
  ukBudget: factPhoto(
    'uk-budget-rachel-reeves.jpg',
    'Rachel Reeves official portrait',
    'Wikimedia Commons / Chris McAndrew',
    'https://commons.wikimedia.org/wiki/File:Official_portrait_of_Rachel_Reeves_crop_2.jpg'
  ),
  finlandEducation: factPhoto(
    'finland-vantaankoski-classroom.jpg',
    'Vantaankoski school classroom',
    'Wikimedia Commons / Leo-setä',
    'https://commons.wikimedia.org/wiki/File:Elementary_school_classroom_in_Vantaankoski_school_in_Vantaa,_Finland,_2010.jpg'
  ),
  usSemiconductors: factPhoto(
    'us-intel-d1x-fab.png',
    'Intel D1X semiconductor fab',
    'Wikimedia Commons / Intel Free Press',
    'https://commons.wikimedia.org/wiki/File:Intel_D1X_Development_Fab_Hillsboro_Oregon.png'
  ),
  denmarkTax: factPhoto(
    'denmark-ministry-taxation.jpg',
    'Danish Ministry of Taxation',
    'Wikimedia Commons / Bjoertvedt',
    'https://commons.wikimedia.org/wiki/File:Copenhagen_Skatteministeriet_IMG_5647.jpg'
  ),
  philippinesTobacco: factPhoto(
    'philippines-tobacco-warning-labels.jpg',
    'Philippine tobacco warning labels',
    'Wikimedia Commons / Government of the Philippines',
    'https://commons.wikimedia.org/wiki/File:PH_tobacco_packaging_graphic_warning_labels.jpg'
  ),
  ukSugar: factPhoto(
    'uk-soft-drink-shelf.jpg',
    'Soft drinks on supermarket shelves',
    'Wikimedia Commons',
    'https://commons.wikimedia.org/wiki/File:Soft_drink_shelf.JPG'
  ),
  euCbam: factPhoto(
    'netherlands-rotterdam-container-terminal.jpg',
    'Port of Rotterdam container terminal',
    'Wikimedia Commons / AgainErick',
    'https://commons.wikimedia.org/wiki/File:Waalhaven_pier_6_-_Port_of_Rotterdam_-_container_terminal_and_cranes.jpg'
  ),
  swedenCarbon: factPhoto(
    'sweden-hammarbyverket.jpg',
    'Hammarbyverket energy plant',
    'Wikimedia Commons / Holger.Ellgaard',
    'https://commons.wikimedia.org/wiki/File:Hammarbyverket_2008.jpg'
  ),
  singaporeBudget: factPhoto(
    'singapore-budget-2024-thumbnail.jpg',
    'Singapore Budget 2024 video thumbnail',
    'YouTube / Singapore MOF',
    'https://www.mof.gov.sg/budget-archives/budget-2024/'
  ),
};

IGCSE.lesson = {
  meta: {
    code:         '4.2',
    unit:         'Unit 4 - Government and the macroeconomy',
    title:        'Fiscal policy lesson 1: government budget and spending - Cambridge IGCSE Economics 0455',
    lessonLabel:  'Fiscal policy lesson 1',
    courseLabel:  'Cambridge IGCSE Economics 0455',
    creatorLabel: 'Created by Samuel Oehler-Huang, Suzhou Foreign Language School',
  },

  slides: [
    {
      type: 'hero',
      eyebrow:  'Cambridge IGCSE Economics 0455',
      title:    'Government budget and spending',
      subtitle: 'Fiscal policy lesson 1',
      kicker:   'How do budgets and spending choices affect the economy?',
    },
    {
      type: 'outcomes',
      eyebrow: 'Lesson objectives',
      title:   'By the end, you can',
      bullets: [
        'Define a government budget.',
        'Calculate deficits and surpluses.',
        'Describe main areas of government spending.',
        'Explain reasons and effects of government spending.',
      ],
    },
    {
      type: 'roadmap',
      eyebrow: 'Lesson map',
      title:   'Today\'s route',
      items: [
        ['4.2.1', 'Budget', 'revenue, expenditure, deficit, surplus'],
        ['4.2.2', 'Spending', 'main areas, reasons and effects'],
      ],
      visual: photos.budgetHearing,
    },
    {
      type: 'quiz',
      eyebrow: 'Opening dilemma',
      title:   'You control the budget',
      question: 'Growth is slowing, unemployment is rising, prices are still increasing, and pollution is high. What should the government prioritise?',
      choices: [
        'Economic growth',
        'Low unemployment',
        'Low inflation',
        'Environmental sustainability',
      ],
      prompt: 'Choose one aim, then name the likely trade-off.',
      visual: photos.budgetMeeting,
    },
    {
      type: 'discussion',
      eyebrow: 'Opening discussion',
      title:   'Trade-offs',
      question: 'What should a government do first when it cannot achieve every aim at once?',
      zh: '当政府无法同时实现所有目标时，应该先做什么？',
      visual: photos.budgetMeeting,
    },

    {
      type: 'section',
      eyebrow: '4.2.1',
      title:   'Government budget',
      subtitle: 'Revenue and expenditure decide whether there is a deficit or surplus.',
    },
    {
      type: 'discussion',
      eyebrow: 'Budget discussion',
      title:   'Public money',
      question: 'What should happen if a government spends more than it receives?',
      zh: '如果政府支出超过收入，应该怎么办？',
      visual: photos.budgetHearing,
    },
    {
      type: 'term',
      eyebrow: 'Government budget',
      title:   'Budget balance',
      term:    'government budget',
      definition: 'A government budget is a plan for government revenue and government expenditure.',
      formula: 'Budget balance = government revenue - government expenditure',
      examples: ['negative balance = deficit', 'positive balance = surplus'],
      visual:  photos.budgetMeeting,
      partialReview: ['.termBox', '.formula', '.choices > .choice'],
    },
    {
      type: 'fact',
      eyebrow: 'Real-world fact',
      flag:    '🇬🇧',
      country: 'United Kingdom',
      fact:    'In the financial year ending March 2024, UK public sector net borrowing was estimated at GBP 131.1 billion.',
      zh:      '截至2024年3月的财政年度，英国公共部门净借款估计为1311亿英镑。',
      source: 'Source: Office for National Statistics, Public sector finances, December 2024.',
      visual: factPhotos.ukBudget,
    },
    {
      type: 'quiz',
      eyebrow: 'Budget calculation',
      title:   'Deficit or surplus?',
      question: 'Government revenue = $420m. Government expenditure = $510m.',
      choices: ['$90m surplus', '$90m deficit', '$930m deficit'],
      prompt:  'Calculate revenue - expenditure.',
      visual:  photos.taxForms,
    },
    {
      type: 'answer',
      eyebrow: 'Budget calculation',
      title:   'Answer',
      answer:  '$90m deficit',
      body:    '$420m - $510m = -$90m. A deficit occurs because spending is greater than revenue.',
      visual:  photos.budgetMeeting,
      partialReview: ['.answerBox'],
    },
    {
      type: 'compare',
      eyebrow: 'Budget balance',
      title:   'Deficit or surplus?',
      leftTitle:  'Budget deficit',
      left:  ['government spending exceeds government revenue', 'may require borrowing'],
      rightTitle: 'Budget surplus',
      right: ['government revenue exceeds government spending', 'may reduce borrowing or debt'],
      prompt: 'A balanced budget means revenue equals expenditure.',
      visual: photos.budgetHearing,
      partialReview: ['.splitCols > .card', '.prompt'],
    },

    {
      type: 'section',
      eyebrow: '4.2.2',
      title:   'Government spending',
      subtitle: 'Main areas of spending have different macroeconomic effects.',
    },
    {
      type: 'discussion',
      eyebrow: 'Spending discussion',
      title:   'Priorities',
      question: 'Which area of government spending should receive more money first?',
      zh: '政府支出的哪个领域应该最先获得更多资金？',
      visual: photos.budgetHearing,
    },
    {
      type: 'cards',
      eyebrow: 'Government spending',
      title:   'Main areas of spending',
      cards: [
        ['Education', 'schools and training'],
        ['Healthcare', 'hospitals and public health'],
        ['Infrastructure', 'transport and digital networks'],
        ['Welfare', 'benefits and pensions'],
        ['Defence', 'national security'],
        ['Industry support', 'subsidies and research'],
      ],
      visual: photos.budgetHearing,
      partialReview: ['.cardgrid > .card'],
    },
    {
      type: 'fact',
      eyebrow: 'Real-world fact',
      flag:    '🇫🇮',
      country: 'Finland',
      fact:    'World Bank data report Finland government expenditure on education at about 6.38% of GDP in 2022.',
      zh:      '世界银行数据显示，2022年芬兰政府教育支出约占GDP的6.38%。',
      source: 'Source: World Bank indicator SE.XPD.TOTL.GD.ZS, based on UNESCO UIS data.',
      visual: factPhotos.finlandEducation,
    },
    {
      type: 'discussion',
      eyebrow: 'Spending reasons',
      title:   'Why spend?',
      question: 'Why might markets fail to provide enough education, healthcare or infrastructure?',
      zh: '为什么市场可能无法提供足够的教育、医疗或基础设施？',
      visual: photos.classroom,
    },
    {
      type: 'cards',
      eyebrow: 'Government spending',
      title:   'Why governments spend',
      cards: [
        ['Merit goods', 'education, healthcare', '1'],
        ['Public goods', 'defence', '2'],
        ['Infrastructure', 'roads, rail, ports', '3'],
        ['Key industries', 'subsidies, R&D', '4'],
        ['Inequality', 'benefits, pensions', '5'],
        ['Macroeconomy', 'demand, inflation', '6'],
      ],
      visual: photos.budgetHearing,
      partialReview: ['.cardgrid > .card'],
    },
    {
      type: 'discussion',
      eyebrow: 'Merit goods',
      title:   'Education and healthcare',
      question: 'Why might a person consume too little education or healthcare if they must pay the full price?',
      zh: '如果必须支付全部价格，为什么人们可能消费太少的教育或医疗？',
      visual: photos.classroom,
    },
    {
      type: 'flow',
      eyebrow: 'Reason for spending',
      title:   '1. Provide merit goods',
      question: 'Education and healthcare may be underprovided if people have to pay the full price.',
      nodes: [['government funds schools or hospitals', 'more people can access them', 'skills and health improve', 'productivity may rise']],
      footer: 'Exam link: merit goods can improve living standards and long-run growth.',
      visual: photos.classroom,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'discussion',
      eyebrow: 'Public goods',
      title:   'Free rider problem',
      question: 'Why is defence difficult to sell only to people who pay for it?',
      zh: '为什么国防很难只卖给付费的人？',
      visual: photos.defence,
    },
    {
      type: 'flow',
      eyebrow: 'Reason for spending',
      title:   '2. Provide public goods',
      question: 'Some goods would not be provided by private firms because people can benefit without paying directly.',
      nodes: [['government funds defence', 'the country is protected', 'people and firms face less risk', 'economic activity is protected']],
      footer: 'Exam link: public goods create benefits that markets may not provide.',
      visual: photos.defence,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'discussion',
      eyebrow: 'Infrastructure',
      title:   'Roads, rail and ports',
      question: 'How can a better road or railway help firms produce more?',
      zh: '更好的公路或铁路如何帮助企业生产更多？',
      visual: photos.roadwork,
    },
    {
      type: 'flow',
      eyebrow: 'Reason for spending',
      title:   '3. Invest in infrastructure',
      nodes: [['more infrastructure spending', 'lower transport costs', 'firms may produce more', 'real GDP may rise']],
      footer: 'This links spending to economic growth.',
      visual: photos.roadwork,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'quiz',
      eyebrow: 'Quick check',
      question: 'The government builds a new railway between factories and a port. Which reason for spending is most direct?',
      choices: [
        'Provide a public good',
        'Invest in infrastructure',
        'Reduce inequality',
      ],
      prompt: 'Say the answer, then add one likely effect on firms.',
      visual: photos.roadwork,
    },
    {
      type: 'discussion',
      eyebrow: 'Industry support',
      title:   'Picking winners',
      question: 'Should a government support an industry if it is important for future jobs?',
      zh: '如果某个产业对未来就业很重要，政府应该支持它吗？',
      visual: photos.industry,
    },
    {
      type: 'fact',
      eyebrow: 'Real-world fact',
      flag:    '🇺🇸',
      country: 'United States',
      fact:    'The CHIPS Act provided $52.7 billion to revive the US semiconductor industry.',
      zh:      '《芯片法案》提供527亿美元，用于振兴美国半导体产业。',
      source: 'Source: NIST, CHIPS Incentives Funding Opportunities.',
      visual: factPhotos.usSemiconductors,
    },
    {
      type: 'flow',
      eyebrow: 'Reason for spending',
      title:   '4. Support key industries',
      question: 'Governments may support industries that are important for jobs, exports or future technology.',
      nodes: [['subsidy for a key industry', 'firms face lower costs', 'investment or R&D may rise', 'competitiveness may improve']],
      footer: 'Evaluation: subsidies have an opportunity cost and may protect inefficient firms.',
      visual: photos.industry,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'discussion',
      eyebrow: 'Inequality',
      title:   'Welfare support',
      question: 'How much responsibility should a government take for reducing poverty?',
      zh: '政府在减少贫困方面应该承担多大责任？',
      visual: photos.socialSecurity,
    },
    {
      type: 'flow',
      eyebrow: 'Reason for spending',
      title:   '5. Reduce inequality',
      nodes: [['higher welfare spending', 'poorer households receive support', 'income inequality may fall']],
      footer: 'Add a cost: the government may need higher taxes or borrowing.',
      visual: photos.socialSecurity,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'discussion',
      eyebrow: 'Macroeconomy',
      title:   'Managing demand',
      question: 'Should a government spend more when unemployment is rising?',
      zh: '当失业率上升时，政府应该增加支出吗？',
      visual: photos.budgetMeeting,
    },
    {
      type: 'flow',
      eyebrow: 'Reason for spending',
      title:   '6. Manage the macroeconomy',
      question: 'Government spending can be changed to influence total demand.',
      nodes: [['higher government spending', 'total demand rises', 'firms may increase output', 'growth and employment may rise']],
      footer: 'Evaluation: demand may rise too much and create inflationary pressure.',
      visual: photos.budgetMeeting,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'quiz',
      eyebrow: 'Quick check',
      question: 'The government increases unemployment benefits during a downturn. Which reason fits best?',
      choices: [
        'Reduce inequality',
        'Support key industries',
        'Provide public goods',
      ],
      prompt: 'Now name one possible opportunity cost.',
      visual: photos.socialSecurity,
    },
    {
      type: 'quiz',
      eyebrow: 'Spending challenge',
      question: 'Which spending decision most directly supports environmental sustainability?',
      choices: [
        'Build cleaner public transport',
        'Increase debt-interest payments',
        'Cut education spending',
      ],
      prompt: 'Now add one possible opportunity cost.',
      visual: photos.pollution,
    },

  ],
};
