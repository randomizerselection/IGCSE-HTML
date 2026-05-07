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
    title:        'Fiscal policy lesson 3: fiscal-policy measures and effects - Cambridge IGCSE Economics 0455',
    lessonLabel:  'Fiscal policy lesson 3',
    courseLabel:  'Cambridge IGCSE Economics 0455',
    creatorLabel: 'Created by Samuel Oehler-Huang, Suzhou Foreign Language School',
  },

  slides: [
    {
      type: 'hero',
      eyebrow:  'Cambridge IGCSE Economics 0455',
      title:    'Fiscal policy',
      subtitle: 'Fiscal policy lesson 3',
      kicker:   'How do changes in spending and taxation affect macroeconomic aims?',
    },
    {
      type: 'outcomes',
      eyebrow: 'Lesson objectives',
      title:   'By the end, you can',
      bullets: [
        'Define fiscal policy.',
        'Identify fiscal-policy measures.',
        'Explain effects on macroeconomic aims.',
        'Evaluate likely trade-offs.',
      ],
    },
    {
      type: 'roadmap',
      eyebrow: 'Lesson map',
      title:   'Today\'s route',
      items: [
        ['4.2.4', 'Fiscal policy', 'spending and taxation'],
        ['4.2.5', 'Measures', 'tax changes and spending changes'],
        ['4.2.6', 'Effects', 'growth, jobs, prices, redistribution, BOP and sustainability'],
      ],
      visual: photos.budgetMeeting,
    },
    {
      type: 'section',
      eyebrow: '4.2.4-4.2.6',
      title:   'Fiscal policy',
      subtitle: 'Changes in spending and taxation are used to influence macroeconomic aims.',
    },
    {
      type: 'discussion',
      eyebrow: 'Fiscal policy discussion',
      title:   'Changing the economy',
      question: 'Can a government change the whole economy by changing spending and taxes?',
      zh: '政府能通过改变支出和税收来影响整个经济吗？',
      visual: photos.budgetMeeting,
    },
    {
      type: 'term',
      eyebrow: 'Key term',
      title:   'Fiscal policy',
      term:    'fiscal policy',
      definition: 'The use of government spending and taxation to influence economic activity and achieve macroeconomic aims.',
      examples: ['government spending', 'taxation', 'macroeconomic aims'],
      visual: photos.budgetMeeting,
      partialReview: ['.termBox', '.choices > .choice'],
    },
    {
      type: 'compare',
      eyebrow: 'Fiscal measures',
      title:   'The two fiscal-policy measures',
      leftTitle:  'Government spending',
      left:  ['increase spending to raise demand or improve supply', 'reduce spending to lower demand or borrowing'],
      rightTitle: 'Taxation',
      right: ['cut taxes to raise disposable income or incentives', 'raise taxes to reduce demand or fund spending'],
      prompt: 'Every fiscal-policy answer should mention spending and/or taxation.',
      visual: photos.budgetMeeting,
      partialReview: ['.splitCols > .card', '.prompt'],
    },
    {
      type: 'fact',
      eyebrow: 'Real-world fact',
      flag:    '🇸🇬',
      country: 'Singapore',
      fact:    'Singapore Budget 2024 focused on cost-of-living relief, a stronger social compact and future resilience.',
      zh:      '新加坡2024年预算重点关注生活成本援助、更强的社会契约和未来韧性。',
      source: 'Source: Singapore Ministry of Finance, Budget 2024.',
      visual: factPhotos.singaporeBudget,
    },
    {
      type: 'discussion',
      eyebrow: 'Expansionary policy',
      title:   'Stimulus',
      question: 'When unemployment is high, should the government cut taxes or increase spending?',
      zh: '当失业率较高时，政府应该减税还是增加支出？',
      visual: photos.roadwork,
    },
    {
      type: 'flow',
      eyebrow: 'Fiscal policy',
      title:   'Expansionary policy',
      nodes: [['higher spending or lower taxes', 'total demand rises', 'firms may increase output', 'growth and employment may rise']],
      footer: 'Risk: inflation and imports may rise.',
      visual: photos.roadwork,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'discussion',
      eyebrow: 'Contractionary policy',
      title:   'Cooling demand',
      question: 'When prices are rising too quickly, should the government raise taxes or cut spending?',
      zh: '当价格上涨过快时，政府应该增税还是削减支出？',
      visual: photos.inflation,
    },
    {
      type: 'flow',
      eyebrow: 'Fiscal policy',
      title:   'Contractionary policy',
      nodes: [['lower spending or higher taxes', 'total demand falls', 'spending pressure eases', 'inflationary pressure may fall']],
      footer: 'Risk: output and employment may fall.',
      visual: photos.taxForms,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'discussion',
      eyebrow: 'Macro aims',
      title:   'Policy conflicts',
      question: 'Which macroeconomic aim is most likely to conflict with lower inflation?',
      zh: '哪个宏观经济目标最可能与降低通货膨胀发生冲突？',
      visual: photos.budgetMeeting,
    },
    {
      type: 'cards',
      eyebrow: 'Fiscal policy effects',
      title:   'Fiscal policy and macro aims',
      lead:    'Each aim needs a clear spending or tax chain.',
      cards: [
        ['Growth', 'raise demand or improve supply'],
        ['Employment', 'increase demand for labour'],
        ['Price stability', 'reduce inflation pressure'],
        ['Redistribution', 'reduce income inequality'],
        ['Balance of payments', 'reduce imports'],
        ['Sustainability', 'change environmental incentives'],
      ],
      footer: 'Evaluation: identify a possible conflict or time lag.',
      visual: photos.budgetMeeting,
      partialReview: ['.cardgrid > .card', '.prompt'],
    },
    {
      type: 'flow',
      eyebrow: 'Fiscal policy effects',
      title:   'Economic growth',
      nodes: [['higher spending or lower taxes', 'total demand rises', 'firms produce more', 'real GDP may rise']],
      footer: 'Risk: inflation or imports may also rise.',
      visual: photos.roadwork,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'flow',
      eyebrow: 'Fiscal policy effects',
      title:   'Employment',
      nodes: [['higher demand for goods', 'firms increase output', 'firms hire more workers', 'unemployment may fall']],
      footer: 'Risk: this may be slow if workers lack the right skills.',
      visual: photos.industry,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'flow',
      eyebrow: 'Fiscal policy effects',
      title:   'Price stability',
      nodes: [['higher taxes or lower spending', 'total demand falls', 'spending pressure eases', 'inflation may fall']],
      footer: 'Risk: output and employment may fall.',
      visual: photos.inflation,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'flow',
      eyebrow: 'Fiscal policy effects',
      title:   'Redistribution',
      nodes: [['progressive taxes', 'revenue funds welfare', 'poorer households receive support', 'inequality may fall']],
      footer: 'Risk: high tax rates may reduce incentives for some workers or firms.',
      visual: photos.socialSecurity,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'flow',
      eyebrow: 'Fiscal policy effects',
      title:   'Balance of payments',
      nodes: [['higher taxes', 'consumer spending falls', 'imports may fall', 'current account may improve']],
      footer: 'Risk: lower demand can also reduce economic growth.',
      visual: photos.port,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'flow',
      eyebrow: 'Fiscal policy effects',
      title:   'Sustainability',
      nodes: [['green taxes or spending', 'incentives change', 'pollution may fall', 'sustainability may improve']],
      footer: 'Risk: firms may pass higher costs to consumers.',
      visual: photos.pollution,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'exam',
      eyebrow: 'Exam practice',
      title:   'Explain chain',
      question: 'Explain how an increase in government spending on infrastructure may help economic growth.',
      keywords: ['infrastructure', 'costs', 'investment', 'real GDP'],
      prompt:   'Write one clear chain and use "may".',
      visual:   photos.roadwork,
      partialReview: ['.cardgrid > .card', '.prompt'],
    },
    {
      type: 'exam',
      eyebrow: 'Evaluation practice',
      title:   'Discuss two sides',
      question: 'Discuss whether cutting taxes is the best way for a government to reduce unemployment.',
      keywords: ['disposable income', 'total demand', 'employment', 'inflation', 'budget deficit'],
      prompt:   'Build one argument for, one against, then make a judgement.',
      visual:   photos.shopping,
      partialReview: ['.cardgrid > .card', '.prompt'],
    },
    {
      type: 'answer',
      eyebrow: 'Exit check',
      title:   'Three blanks',
      steps: [
        ['1', 'Fiscal policy uses government __________ and taxation.'],
        ['2', 'A budget deficit means spending is __________ revenue.'],
        ['3', 'Higher taxes may reduce __________-pull inflation.'],
      ],
      cue: 'Answer before leaving.',
      visual: photos.classroom,
      partialReview: ['.steps > .step', '.prompt'],
    },
  ],
};
