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

const commonsPhoto = (file, alt, credit) => ({
  type: 'photo',
  src: `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=1200`,
  source: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file).replace(/%20/g, '_')}`,
  alt,
  credit,
});

const photos = {
  budgetMeeting: commonsPhoto(
    'Budget meeting with Congress.jpg',
    'Government officials seated around a table during budget negotiations.',
    'Wikimedia Commons / Robert McNeely'
  ),
  budgetHearing: commonsPhoto(
    'House Budget Committee meeting - 2020-01-15.jpg',
    'A legislative budget committee meeting in progress.',
    'Wikimedia Commons / House Budget Committee Democrats'
  ),
  classroom: commonsPhoto(
    'Students in a classroom.jpg',
    'Students working at desks in a classroom.',
    'Wikimedia Commons / Ente75'
  ),
  healthcare: commonsPhoto(
    'Doctors and nurses at the 3rd Field Hospital.jpg',
    'Doctors and nurses standing together in a hospital.',
    'Wikimedia Commons / Defense VI Records Center'
  ),
  defence: commonsPhoto(
    '250417-D-FN350-1098 (54457200287).jpg',
    'Defence officials seated for a formal bilateral meeting.',
    'Wikimedia Commons / U.S. Secretary of Defense'
  ),
  roadwork: commonsPhoto(
    'Going-to-the-Sun Road, construction crew paving around milepost 33.jpg',
    'A road construction crew paving a mountain road.',
    'Wikimedia Commons / U.S. Dept. of Transportation'
  ),
  industry: commonsPhoto(
    'National Semiconductor Factory - geograph.org.uk - 63468.jpg',
    'The exterior of a semiconductor factory.',
    'Wikimedia Commons / william craig'
  ),
  socialSecurity: commonsPhoto(
    'Signing Of The Social Security Act.jpg',
    'President Roosevelt signing the Social Security Act.',
    'Wikimedia Commons / National Archives'
  ),
  shopping: commonsPhoto(
    'Shopping Carts in a Grocery Store.jpg',
    'Rows of shopping carts inside a grocery store.',
    'Wikimedia Commons / Visitor7'
  ),
  taxForms: commonsPhoto(
    'Tax Forms (13880455534).jpg',
    'Printed tax forms laid out on a table.',
    'Wikimedia Commons / Kalamazoo Public Library'
  ),
  tobacco: commonsPhoto(
    'Tobacco Cigarette Pack (24986420363).jpg',
    'A cigarette pack photographed on a table.',
    'Wikimedia Commons / Lindsay Fox'
  ),
  pollution: commonsPhoto(
    'Smokestack in Detroit.jpg',
    'A smokestack rising from an industrial plant.',
    'Wikimedia Commons / Gyre'
  ),
  port: commonsPhoto(
    'Cargo containers (5945899601).jpg',
    'Stacks of cargo containers at a waterfront port.',
    'Wikimedia Commons / Roy Luck'
  ),
  inflation: commonsPhoto(
    'Meat inflation in the United States.jpg',
    'A grocery shelf with posted meat prices.',
    'Wikimedia Commons / Wikideas1'
  ),
};

IGCSE.lesson = {
  meta: {
    code:         '4.2',
    unit:         'Unit 4 - Government and the macroeconomy',
    title:        'Fiscal policy - Cambridge IGCSE Economics 0455',
    lessonLabel:  'Fiscal policy',
    courseLabel:  'Cambridge IGCSE Economics 0455',
  },

  slides: [
    {
      type: 'hero',
      eyebrow:  'Cambridge IGCSE Economics 0455',
      title:    'Fiscal policy',
      subtitle: 'Government spending and taxation',
      kicker:   'How can a budget help meet macroeconomic aims?',
    },
    {
      type: 'outcomes',
      eyebrow: 'Lesson objectives',
      title:   'By the end, you can',
      bullets: [
        'Explain government budgets, deficits and surpluses, including calculations.',
        'Describe main areas of government spending and reasons for taxation.',
        'Classify tax types and explain fiscal policy measures.',
        'Analyse how fiscal policy may affect growth, employment, price stability, redistribution, the balance of payments and sustainability.',
      ],
      footer: 'Success looks like: accurate term, clear policy chain, relevant macroeconomic aim, balanced evaluation.',
      partialReview: ['.choices > .choice', '.prompt'],
    },
    {
      type: 'roadmap',
      eyebrow: 'Lesson map',
      title:   'Today\'s route',
      items: [
        ['4.2.1', 'Budget', 'revenue, expenditure, deficit, surplus'],
        ['4.2.2', 'Spending', 'main areas, reasons and effects'],
        ['4.2.3', 'Taxation', 'reasons and types of taxes'],
        ['4.2.4-4.2.6', 'Fiscal policy', 'measures and effects on macro aims'],
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
      partialReview: ['.choices > .choice', '.prompt'],
    },

    {
      type: 'section',
      eyebrow: '4.2.1',
      title:   'Government budget',
      subtitle: 'Revenue and expenditure decide whether there is a deficit or surplus.',
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
      type: 'cards',
      eyebrow: 'Government spending',
      title:   'Where does the money go?',
      lead:    'The syllabus expects main areas of spending and the reasons/effects of spending in those areas.',
      cards: [
        ['Education', 'raises skills and long-run productivity'],
        ['Healthcare', 'improves wellbeing and labour productivity'],
        ['Infrastructure', 'lowers costs and supports growth'],
        ['Welfare', 'supports poorer households and redistributes income'],
        ['Defence', 'provides security and public goods'],
        ['Debt interest', 'pays the cost of previous borrowing'],
      ],
      visual: photos.budgetHearing,
      partialReview: ['.cardgrid > .card'],
    },
    {
      type: 'flow',
      eyebrow: 'Government spending',
      title:   'Spending can support growth',
      nodes: [['more infrastructure spending', 'lower transport costs', 'firms may produce more', 'real GDP may rise']],
      footer: 'Link the spending area to one macroeconomic aim.',
      visual: photos.roadwork,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'flow',
      eyebrow: 'Government spending',
      title:   'Spending can redistribute income',
      nodes: [['higher welfare spending', 'poorer households receive support', 'income inequality may fall']],
      footer: 'Add a cost: the government may need higher taxes or borrowing.',
      visual: photos.socialSecurity,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'quiz',
      eyebrow: 'Spending challenge',
      title:   'Match policy to aim',
      question: 'Which spending decision most directly supports environmental sustainability?',
      choices: [
        'Build cleaner public transport',
        'Increase debt-interest payments',
        'Cut education spending',
      ],
      prompt: 'Now add one possible opportunity cost.',
      visual: photos.pollution,
      partialReview: ['.choices > .choice', '.prompt'],
    },

    {
      type: 'section',
      eyebrow: '4.2.3',
      title:   'Taxation',
      subtitle: 'Taxes raise revenue, change behaviour and influence demand.',
    },
    {
      type: 'quiz',
      eyebrow: 'Taxation',
      title:   'Why tax?',
      question: 'Which reason for taxation is shown by a tariff on imported cars?',
      choices: [
        'Reduce imports',
        'Raise revenue',
        'Redistribute income',
        'Encourage sustainability',
      ],
      prompt: 'There may be more than one valid answer.',
      visual: photos.port,
      partialReview: ['.choices > .choice', '.prompt'],
    },
    {
      type: 'cards',
      eyebrow: 'Taxation',
      title:   'Reasons for taxation',
      lead:    'The reason matters because it determines the expected effect.',
      cards: [
        ['Raise revenue', 'fund education, healthcare, infrastructure and welfare'],
        ['Demerit goods', 'raise price and reduce consumption'],
        ['Reduce imports', 'tariffs make imports more expensive'],
        ['Redistribute income', 'tax higher incomes and support poorer households'],
        ['Influence demand', 'higher taxes reduce spending; lower taxes increase it'],
        ['Sustainability', 'tax pollution or resource use to change incentives'],
      ],
      visual:  photos.pollution,
      partialReview: ['.cardgrid > .card'],
    },
    {
      type: 'flow',
      eyebrow: 'Taxation',
      title:   'Tax can reduce demand-pull inflation',
      nodes: [['higher income tax', 'disposable income falls', 'consumer spending may fall', 'inflationary pressure may fall']],
      footer: 'This may conflict with growth and employment.',
      visual: photos.inflation,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'flow',
      eyebrow: 'Taxation',
      title:   'Tax can encourage sustainability',
      nodes: [['pollution tax', 'firms face higher costs for polluting', 'cleaner methods become more attractive']],
      footer: 'Evaluate: firms may pass higher costs to consumers.',
      visual: photos.pollution,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'compare',
      eyebrow: 'Tax types',
      title:   'Direct or indirect?',
      leftTitle:  'Direct tax',
      left:  ['on income or wealth', 'paid directly to government'],
      rightTitle: 'Indirect tax',
      right: ['on spending', 'paid when goods or services are bought'],
      prompt: 'Classify: income tax, VAT, corporation tax, tariff.',
      visual: photos.taxForms,
      partialReview: ['.splitCols > .card', '.prompt'],
    },
    {
      type: 'compare',
      eyebrow: 'Tax types',
      title:   'Progressive or regressive?',
      leftTitle:  'Progressive',
      left:  ['higher proportion as income rises'],
      rightTitle: 'Regressive',
      right: ['higher proportion for lower-income groups'],
      prompt: 'Which type reduces inequality more directly?',
      visual: photos.socialSecurity,
      partialReview: ['.splitCols > .card', '.prompt'],
    },
    {
      type: 'term',
      eyebrow: 'Tax types',
      title:   'Proportional tax',
      term:    'proportional tax',
      definition: 'A tax that takes the same proportion of income at all income levels.',
      examples: ['15% of $20,000', '15% of $80,000'],
      visual:  photos.taxForms,
      partialReview: ['.termBox', '.choices > .choice'],
    },
    {
      type: 'cards',
      eyebrow: 'Exam trap',
      title:   'Classify before explaining',
      lead:    'A strong answer names the tax type, then links it to a macroeconomic aim.',
      cards: [
        ['Direct or indirect?', 'what is being taxed? income, wealth, or spending?'],
        ['Progressive?', 'does the proportion rise as income rises?'],
        ['Regressive?', 'does the proportion hit lower-income households harder?'],
        ['Proportional?', 'is the same percentage charged at all income levels?'],
      ],
      footer: 'Why might a sales tax be called regressive?',
      visual: photos.taxForms,
      partialReview: ['.cardgrid > .card', '.prompt'],
    },

    {
      type: 'section',
      eyebrow: '4.2.4-4.2.6',
      title:   'Fiscal policy',
      subtitle: 'Changes in spending and taxation are used to influence macroeconomic aims.',
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
      type: 'flow',
      eyebrow: 'Fiscal policy',
      title:   'Expansionary policy',
      nodes: [['higher spending or lower taxes', 'total demand rises', 'firms may increase output', 'growth and employment may rise']],
      footer: 'Risk: inflation and imports may rise.',
      visual: photos.roadwork,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
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
      type: 'cards',
      eyebrow: 'Fiscal policy effects',
      title:   'Link policy to aims',
      lead:    'Use the same chain structure for any macroeconomic aim.',
      cards: [
        ['Growth', 'tax cuts or spending can raise demand and output'],
        ['Employment', 'higher output may increase demand for labour'],
        ['Price stability', 'higher taxes or lower spending may reduce inflation pressure'],
        ['Redistribution', 'progressive taxes and welfare can reduce inequality'],
        ['Balance of payments', 'lower demand may reduce imports'],
        ['Sustainability', 'green taxes or spending can change incentives'],
      ],
      footer: 'Evaluation: identify a possible conflict or time lag.',
      visual: photos.budgetMeeting,
      partialReview: ['.cardgrid > .card', '.prompt'],
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
