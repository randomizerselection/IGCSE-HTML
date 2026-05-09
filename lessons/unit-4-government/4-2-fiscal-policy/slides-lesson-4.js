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
    title:        'Fiscal policy lesson 4: fiscal-policy measures and effects - Cambridge IGCSE Economics 0455',
    lessonLabel:  'Fiscal policy lesson 4',
    courseLabel:  'Cambridge IGCSE Economics 0455',
    creatorLabel: 'Created by Samuel Oehler-Huang, Suzhou Foreign Language School',
  },

  slides: [
    {
      type: 'hero',
      eyebrow:  'Lesson overview',
      title:    'Fiscal policy',
      subtitle: 'Fiscal policy lesson 4',
      kicker:   'How do changes in spending and taxation affect macroeconomic aims?',
      visual:   photos.budgetMeeting,
    },
    {
      type: 'discussion',
      eyebrow: 'Starter',
      title:   'Changing the economy',
      question: 'Can a government change the whole economy by changing spending and taxes?',
      zh: '政府能通过改变支出和税收来影响整个经济吗？',
      visual: photos.budgetMeeting,
    },
    {
      type: 'outcomes',
      eyebrow: 'Objectives',
      title:   'By the end, you can',
      bullets: [
        'Define fiscal policy.',
        'Identify fiscal-policy measures.',
        'Explain effects on macroeconomic aims.',
        'Evaluate likely trade-offs.',
      ],
    },
    {
      type: 'section',
      eyebrow: 'New section',
      title:   'Fiscal policy basics',
      subtitle: '4.2.4-4.2.6 - Fiscal policy basics',
    },
    {
      type: 'fact',
      eyebrow: 'Example',
      facts: {
        left: {
          flag: '🇸🇬',
          country: 'Singapore',
          fact: 'Singapore added S$1.9 billion (about RMB 10 billion) for cost-of-living relief in Budget 2024.',
          zh: '新加坡2024年预算案增加19亿新元（约100亿元人民币）缓解生活成本压力。',
          source: 'Source: Singapore Ministry of Finance; RMB conversion approximate.',
        },
        china: {
          flag: '🇨🇳',
          country: 'China',
          fact: 'China planned RMB 28.5 trillion in general public budget spending for 2024.',
          zh: '中国2024年一般公共预算支出安排28.5万亿元人民币。',
          source: 'Source: 2024 Government Work Report.',
        },
      },
      visual: factPhotos.singaporeBudget,
    },
    {
      type: 'term',
      eyebrow: 'Learn',
      title:   'Fiscal policy',
      zhTitle: '财政政策',
      term:    'fiscal policy',
      definition: 'The use of government spending and taxation to influence economic activity and achieve macroeconomic aims.',
      examples: [
        ['Spending', 'government purchases and services'],
        ['Taxation', 'changes in tax rates or tax revenue'],
        ['Macro aims', 'growth, jobs, prices and more'],
      ],
      visual: photos.budgetMeeting,
      partialReview: ['.termBox', '.termExamples > .termExample'],
    },
    {
      type: 'compare',
      eyebrow: 'Learn',
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
      type: 'answer',
      eyebrow: 'Check',
      title:   'Fill in the blanks',
      mode:    'fillBlanks',
      steps: [
        ['1', 'Fiscal policy uses government spending and __________.', 'taxation'],
        ['2', 'An increase in spending can increase total __________.', 'demand'],
        ['3', 'A tax cut can increase disposable __________.', 'income'],
        ['4', 'Fiscal policy is used to influence macroeconomic __________.', 'aims'],
      ],
    },
    {
      type: 'section',
      eyebrow: 'New section',
      title:   'Expansionary and\ncontractionary policy',
      subtitle: '4.2.5 - Expansionary and contractionary policy',
    },
    {
      type: 'discussion',
      eyebrow: 'Explore',
      title:   'Stimulus',
      question: 'When unemployment is high, should the government cut taxes or increase spending?',
      zh: '当失业率较高时，政府应该减税还是增加支出？',
      visual: photos.roadwork,
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title:   'Expansionary policy',
      zhTitle: '扩张性政策',
      nodes: [['higher spending or lower taxes', 'total demand rises', 'firms may increase output', 'growth and employment may rise']],
      footer: 'Risk: inflation and imports may rise.',
      visual: photos.roadwork,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'discussion',
      eyebrow: 'Explore',
      title:   'Cooling demand',
      question: 'When prices are rising too quickly, should the government raise taxes or cut spending?',
      zh: '当价格上涨过快时，政府应该增税还是削减支出？',
      visual: photos.inflation,
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title:   'Contractionary policy',
      zhTitle: '紧缩性政策',
      nodes: [['lower spending or higher taxes', 'total demand falls', 'spending pressure eases', 'inflationary pressure may fall']],
      footer: 'Risk: output and employment may fall.',
      visual: photos.taxForms,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'answer',
      eyebrow: 'Check',
      title:   'Fill in the blanks',
      mode:    'fillBlanks',
      steps: [
        ['1', 'Expansionary fiscal policy uses higher spending or lower __________.', 'taxes'],
        ['2', 'Expansionary policy can increase total __________.', 'demand'],
        ['3', 'Contractionary fiscal policy uses lower spending or higher __________.', 'taxes'],
        ['4', 'Contractionary policy may reduce inflationary __________.', 'pressure'],
      ],
    },
    {
      type: 'section',
      eyebrow: 'New section',
      title:   'Effects on\nmacroeconomic aims',
      subtitle: '4.2.6 - Effects on macroeconomic aims',
    },
    {
      type: 'discussion',
      eyebrow: 'Explore',
      title:   'Policy conflicts',
      question: 'Which macroeconomic aim is most likely to conflict with lower inflation?',
      zh: '哪个宏观经济目标最可能与降低通货膨胀发生冲突？',
      visual: photos.budgetMeeting,
    },
    {
      type: 'cards',
      eyebrow: 'Learn',
      title:   'Fiscal policy and macro aims',
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
      eyebrow: 'Learn',
      title:   'Economic growth',
      zhTitle: '经济增长',
      nodes: [['higher spending or lower taxes', 'total demand rises', 'firms produce more', 'real GDP may rise']],
      footer: 'Risk: inflation or imports may also rise.',
      visual: photos.roadwork,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title:   'Employment',
      zhTitle: '就业',
      nodes: [['higher demand for goods', 'firms increase output', 'firms hire more workers', 'unemployment may fall']],
      footer: 'Risk: this may be slow if workers lack the right skills.',
      visual: photos.industry,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title:   'Price stability',
      zhTitle: '价格稳定',
      nodes: [['higher taxes or lower spending', 'total demand falls', 'spending pressure eases', 'inflation may fall']],
      footer: 'Risk: output and employment may fall.',
      visual: photos.inflation,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title:   'Redistribution',
      zhTitle: '再分配',
      nodes: [['progressive taxes', 'revenue funds welfare', 'poorer households receive support', 'inequality may fall']],
      footer: 'Risk: high tax rates may reduce incentives for some workers or firms.',
      visual: photos.socialSecurity,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title:   'Balance of payments',
      zhTitle: '国际收支',
      nodes: [['higher taxes', 'consumer spending falls', 'imports may fall', 'current account may improve']],
      footer: 'Risk: lower demand can also reduce economic growth.',
      visual: photos.port,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title:   'Sustainability',
      zhTitle: '可持续发展',
      nodes: [['green taxes or spending', 'incentives change', 'pollution may fall', 'sustainability may improve']],
      footer: 'Risk: firms may pass higher costs to consumers.',
      visual: photos.pollution,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'answer',
      eyebrow: 'Check',
      title:   'Fill in the blanks',
      mode:    'fillBlanks',
      steps: [
        ['1', 'Higher spending can increase total demand and real __________.', 'GDP'],
        ['2', 'If firms increase output, demand for labour may __________.', 'rise'],
        ['3', 'Higher taxes can reduce demand-pull __________.', 'inflation'],
        ['4', 'Green taxes can improve environmental __________.', 'sustainability'],
      ],
    },
    {
      type: 'section',
      eyebrow: 'New section',
      title:   'Exam evaluation',
      subtitle: '4.2.6 - Exam evaluation',
    },
    {
      type: 'discussion',
      eyebrow: 'Exam practice',
      title:   'What could go wrong?',
      question: 'Why might a tax cut reduce unemployment but also create new economic problems?',
      zh: '为什么减税可能降低失业率，但也可能带来新的经济问题？',
      visual: photos.shopping,
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
      eyebrow: 'Exam practice',
      title:   'Discuss two sides',
      question: 'Discuss whether cutting taxes is the best way for a government to reduce unemployment.',
      keywords: ['disposable income', 'total demand', 'employment', 'inflation', 'budget deficit'],
      prompt:   'Build one argument for, one against, then make a judgement.',
      visual:   photos.shopping,
      partialReview: ['.cardgrid > .card', '.prompt'],
    },
    {
      type: 'answer',
      eyebrow: 'Exit ticket',
      title:   'Fill in the blanks',
      mode:    'fillBlanks',
      steps: [
        ['1', 'Fiscal policy uses government __________ and taxation.', 'spending'],
        ['2', 'A budget deficit means spending is __________ revenue.', 'greater than'],
        ['3', 'Higher taxes may reduce __________-pull inflation.', 'demand'],
        ['4', 'A strong answer explains one effect and then adds one __________.', 'evaluation'],
      ],
      cue: 'Answer before leaving.',
    },
  ],
};
