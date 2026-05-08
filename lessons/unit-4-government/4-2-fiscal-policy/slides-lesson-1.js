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
      eyebrow:  'Lesson overview',
      title:    'Government budget and spending',
      subtitle: 'Fiscal policy lesson 1',
      kicker:   'How do budgets and spending choices affect the economy?',
      visual:   photos.budgetMeeting,
    },
    {
      type: 'discussion',
      eyebrow: 'Starter',
      title:   'Trade-offs',
      question: 'What should a government do first when it cannot achieve every aim at once?',
      zh: '当政府无法同时实现所有目标时，应该先做什么？',
      visual: photos.budgetMeeting,
    },
    {
      type: 'outcomes',
      eyebrow: 'Objectives',
      title:   'By the end, you can',
      bullets: [
        'Define a government budget.',
        'Calculate deficits and surpluses.',
        'Describe main areas of government spending.',
        'Explain reasons and effects of government spending.',
      ],
    },
    {
      type: 'section',
      eyebrow: 'New section',
      title:   'Government budget',
      subtitle: '4.2.1 - Government budget',
    },
    {
      type: 'discussion',
      eyebrow: 'Explore',
      title:   'Public money',
      question: 'What should happen if a government spends more than it receives?',
      zh: '如果政府支出超过收入，应该怎么办？',
      visual: photos.budgetHearing,
    },
    {
      type: 'term',
      eyebrow: 'Learn',
      title:   'Budget balance',
      zhTitle: '预算差额',
      term:    'government budget',
      definition: 'A government budget is a plan for government revenue and government expenditure.',
      formula: 'Budget balance = government revenue - government expenditure',
      examples: [
        ['Deficit', 'negative balance'],
        ['Surplus', 'positive balance'],
      ],
      visual:  photos.budgetMeeting,
      partialReview: ['.termBox', '.formula', '.termExamples > .termExample'],
    },
    {
      type: 'fact',
      eyebrow: 'Example',
      flag:    '🇬🇧',
      country: 'United Kingdom',
      fact:    'In the financial year ending March 2024, UK public sector net borrowing was estimated at GBP 131.1 billion.',
      zh:      '截至2024年3月的财政年度，英国公共部门净借款估计为1311亿英镑。',
      source: 'Source: Office for National Statistics, Public sector finances, December 2024.',
      visual: factPhotos.ukBudget,
    },
    {
      type: 'quiz',
      eyebrow: 'Check',
      question: 'Government revenue = $420m. Government expenditure = $510m.',
      choices: ['$90m surplus', '$90m deficit', '$930m deficit'],
      answer: 1,
      prompt:  'Calculate revenue - expenditure.',
      visual:  photos.taxForms,
    },
    {
      type: 'answer',
      eyebrow: 'Check',
      title:   'Answer',
      answer:  '$90m deficit',
      body:    '$420m - $510m = -$90m. A deficit occurs because spending is greater than revenue.',
      visual:  photos.budgetMeeting,
      partialReview: ['.answerBox'],
    },
    {
      type: 'compare',
      eyebrow: 'Learn',
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
      type: 'answer',
      eyebrow: 'Check',
      title:   'Fill in the blanks',
      mode:    'fillBlanks',
      steps: [
        ['1', 'A government budget is a plan for revenue and __________.', 'expenditure'],
        ['2', 'A budget deficit occurs when expenditure is greater than __________.', 'revenue'],
        ['3', 'A budget surplus occurs when revenue is greater than __________.', 'expenditure'],
        ['4', 'Budget balance = revenue - __________.', 'expenditure'],
      ],
    },

    {
      type: 'section',
      eyebrow: 'New section',
      title:   'Government spending',
      subtitle: '4.2.2 - Government spending',
    },
    {
      type: 'discussion',
      eyebrow: 'Explore',
      title:   'Priorities',
      question: 'Which area of government spending should receive more money first?',
      zh: '政府支出的哪个领域应该最先获得更多资金？',
      visual: photos.budgetHearing,
    },
    {
      type: 'cards',
      eyebrow: 'Learn',
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
      eyebrow: 'Example',
      flag:    '🇫🇮',
      country: 'Finland',
      fact:    'Government education spending in Finland was about 6.38% of GDP in 2022.',
      zh:      '世界银行数据显示，2022年芬兰政府教育支出约占GDP的6.38%。',
      source: 'Source: World Bank indicator SE.XPD.TOTL.GD.ZS, based on UNESCO UIS data.',
      visual: factPhotos.finlandEducation,
    },
    {
      type: 'discussion',
      eyebrow: 'Explore',
      title:   'Why spend?',
      question: 'Why might markets fail to provide enough education, healthcare or infrastructure?',
      zh: '为什么市场可能无法提供足够的教育、医疗或基础设施？',
      visual: photos.classroom,
    },
    {
      type: 'cards',
      eyebrow: 'Learn',
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
      eyebrow: 'Explore',
      title:   'Education and healthcare',
      question: 'Why might a person consume too little education or healthcare if they must pay the full price?',
      zh: '如果必须支付全部价格，为什么人们可能消费太少的教育或医疗？',
      visual: photos.classroom,
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title:   '1. Provide merit goods',
      zhTitle: '提供有益品',
      question: 'Education and healthcare may be underprovided if people have to pay the full price.',
      nodes: [['government funds schools or hospitals', 'more people can access them', 'skills and health improve', 'productivity may rise']],
      footer: 'Exam link: merit goods can improve living standards and long-run growth.',
      visual: photos.classroom,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'discussion',
      eyebrow: 'Explore',
      title:   'Free rider problem',
      question: 'Why is defence difficult to sell only to people who pay for it?',
      zh: '为什么国防很难只卖给付费的人？',
      visual: photos.defence,
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title:   '2. Provide public goods',
      zhTitle: '提供公共物品',
      question: 'Some goods would not be provided by private firms because people can benefit without paying directly.',
      nodes: [['government funds defence', 'the country is protected', 'people and firms face less risk', 'economic activity is protected']],
      footer: 'Exam link: public goods create benefits that markets may not provide.',
      visual: photos.defence,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'discussion',
      eyebrow: 'Explore',
      title:   'Roads, rail and ports',
      question: 'How can a better road or railway help firms produce more?',
      zh: '更好的公路或铁路如何帮助企业生产更多？',
      visual: photos.roadwork,
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title:   '3. Invest in infrastructure',
      zhTitle: '投资基础设施',
      nodes: [['more infrastructure spending', 'lower transport costs', 'firms may produce more', 'real GDP may rise']],
      footer: 'This links spending to economic growth.',
      visual: photos.roadwork,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'quiz',
      eyebrow: 'Check',
      question: 'The government builds a new railway between factories and a port. Which reason for spending is most direct?',
      choices: [
        'Provide a public good',
        'Invest in infrastructure',
        'Reduce inequality',
      ],
      answer: 1,
      prompt: 'Say the answer, then add one likely effect on firms.',
      visual: photos.roadwork,
    },
    {
      type: 'discussion',
      eyebrow: 'Explore',
      title:   'Picking winners',
      question: 'Should a government support an industry if it is important for future jobs?',
      zh: '如果某个产业对未来就业很重要，政府应该支持它吗？',
      visual: photos.industry,
    },
    {
      type: 'fact',
      eyebrow: 'Example',
      flag:    '🇺🇸',
      country: 'United States',
      fact:    'The CHIPS Act provided $52.7 billion to revive the US semiconductor industry.',
      zh:      '《芯片法案》提供527亿美元，用于振兴美国半导体产业。',
      source: 'Source: NIST, CHIPS Incentives Funding Opportunities.',
      visual: factPhotos.usSemiconductors,
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title:   '4. Support key industries',
      zhTitle: '支持关键产业',
      question: 'Governments may support industries that are important for jobs, exports or future technology.',
      nodes: [['subsidy for a key industry', 'firms face lower costs', 'investment or R&D may rise', 'competitiveness may improve']],
      footer: 'Evaluation: subsidies have an opportunity cost and may protect inefficient firms.',
      visual: photos.industry,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'discussion',
      eyebrow: 'Explore',
      title:   'Welfare support',
      question: 'How much responsibility should a government take for reducing poverty?',
      zh: '政府在减少贫困方面应该承担多大责任？',
      visual: photos.socialSecurity,
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title:   '5. Reduce inequality',
      zhTitle: '减少不平等',
      nodes: [['higher welfare spending', 'poorer households receive support', 'income inequality may fall']],
      footer: 'Add a cost: the government may need higher taxes or borrowing.',
      visual: photos.socialSecurity,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'discussion',
      eyebrow: 'Explore',
      title:   'Managing demand',
      question: 'Should a government spend more when unemployment is rising?',
      zh: '当失业率上升时，政府应该增加支出吗？',
      visual: photos.budgetMeeting,
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title:   '6. Manage the macroeconomy',
      zhTitle: '管理宏观经济',
      question: 'Government spending can be changed to influence total demand.',
      nodes: [['higher government spending', 'total demand rises', 'firms may increase output', 'growth and employment may rise']],
      footer: 'Evaluation: demand may rise too much and create inflationary pressure.',
      visual: photos.budgetMeeting,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'quiz',
      eyebrow: 'Check',
      question: 'The government increases unemployment benefits during a downturn. Which reason fits best?',
      choices: [
        'Reduce inequality',
        'Support key industries',
        'Provide public goods',
      ],
      answer: 0,
      prompt: 'Now name one possible opportunity cost.',
      visual: photos.socialSecurity,
    },
    {
      type: 'quiz',
      eyebrow: 'Apply',
      question: 'Which spending decision most directly supports environmental sustainability?',
      choices: [
        'Build cleaner public transport',
        'Increase debt-interest payments',
        'Cut education spending',
      ],
      answer: 0,
      prompt: 'Now add one possible opportunity cost.',
      visual: photos.pollution,
    },
    {
      type: 'answer',
      eyebrow: 'Check',
      title:   'Fill in the blanks',
      mode:    'fillBlanks',
      steps: [
        ['1', 'Government spending on education and healthcare can increase access to __________ goods.', 'merit'],
        ['2', 'Defence is an example of a public __________.', 'good'],
        ['3', 'Infrastructure spending may lower transport __________ for firms.', 'costs'],
        ['4', 'Welfare spending can reduce income __________.', 'inequality'],
      ],
    },

  ],
};
