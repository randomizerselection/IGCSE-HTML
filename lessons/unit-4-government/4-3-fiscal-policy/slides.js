/* ============================================================
   Lesson 4.3 - Fiscal policy
   Cambridge IGCSE Economics 0455 - Unit 4: The role of government

   Definition source:
   ../../../references/igcse-economics-definitions-2026.md

   Pacing note:
   Keep each slide to one teaching move. Short prompts and fill-ins mirror
   the previously taught "Reasons for taxation" lesson extract.
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
    code:         '4.3',
    unit:         'Unit 4 - The role of government',
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
      kicker:   'How can a government influence the economy?',
    },
    {
      type: 'roadmap',
      eyebrow: 'Lesson map',
      title:   'Today\'s route',
      items: [
        ['1', 'Budget review', 'revenue, spending, balance'],
        ['2', 'Why spend?', 'main reasons for government spending'],
        ['3', 'Why tax?', 'main reasons for taxation'],
      ],
      visual: photos.budgetHearing,
    },
    {
      type: 'quiz',
      eyebrow: 'Opening dilemma',
      title:   'You control the budget',
      question: 'The economy is slowing, hospitals need money, and prices are rising. What do you do first?',
      choices: [
        'Increase government spending',
        'Cut taxes',
        'Raise taxes',
        'Delay the decision',
      ],
      prompt: 'Choose one, then defend the trade-off.',
      visual: photos.budgetMeeting,
      partialReview: ['.choices > .choice', '.prompt'],
    },
    {
      type: 'quiz',
      eyebrow: 'Recall',
      title:   'Starter thinking',
      question: 'Use common sense: what choices does a government face when money is limited?',
      choices: [
        'Name one service a government might spend money on.',
        'Suggest one reason people might disagree about taxes.',
        'Predict what problem appears if spending is higher than money collected.',
      ],
      prompt: 'No definitions yet: make a sensible prediction.',
      visual: photos.classroom,
      partialReview: ['.choices > .choice', '.prompt'],
    },
    {
      type: 'answer',
      eyebrow: 'Starter thinking',
      title:   'Possible answers',
      steps: [
        ['1', 'Governments may spend on education, healthcare, roads, defence or welfare.'],
        ['2', 'People disagree because taxes affect income, prices, fairness and incentives.'],
        ['3', 'If spending is higher than money collected, the government may face a budget deficit.'],
      ],
      visual: photos.taxForms,
      partialReview: ['.steps > .step'],
    },

    {
      type: 'term',
      eyebrow: 'Budget',
      title:   'Government budget',
      term:    'government budget',
      definition: 'A plan or forecast for government expenditure and government revenue.',
      formula: 'Budget balance = government revenue - government expenditure',
      visual:  photos.budgetMeeting,
      partialReview: ['.termBox', '.formula'],
    },
    {
      type: 'quiz',
      eyebrow: 'Budget',
      title:   'Quick calculation',
      question: 'Revenue = $420m. Expenditure = $510m.',
      choices: ['$90m surplus', '$90m deficit', '$930m deficit'],
      prompt:  'Calculate revenue - expenditure.',
      visual:  photos.taxForms,
    },
    {
      type: 'answer',
      eyebrow: 'Budget',
      title:   'Answer',
      answer:  '$90m deficit',
      body:    '$420m - $510m = -$90m. Spending is higher than revenue.',
      visual:  photos.budgetMeeting,
      partialReview: ['.answerBox'],
    },
    {
      type: 'cards',
      eyebrow: 'Budget fact',
      title:   'Every budget has a cost',
      lead:    'A government can choose more of one aim, but rarely all aims at once.',
      cards: [
        ['More spending', 'may improve services, but can increase a deficit'],
        ['Lower taxes', 'may raise disposable income, but reduces revenue'],
        ['Higher taxes', 'may fund spending, but can reduce demand'],
      ],
      footer: 'Which choice is hardest for a government to explain to voters?',
      visual: photos.budgetHearing,
      partialReview: ['.cardgrid > .card', '.prompt'],
    },

    {
      type: 'section',
      eyebrow: 'Part one',
      title:   'Why spend?',
      subtitle: 'Public expenditure is government spending.',
    },
    {
      type: 'quiz',
      eyebrow: 'Government spending',
      title:   'Where does it go?',
      question: 'Which areas usually take the largest share of public spending?',
      choices: ['social security', 'healthcare', 'education', 'defence', 'debt interest'],
      prompt:  'Rank the top three, then compare.',
      visual: photos.budgetHearing,
      partialReview: ['.choices > .choice', '.prompt'],
    },
    {
      type: 'answer',
      eyebrow: 'Government spending',
      title:   'Reason 1',
      answer:  'Provide merit goods',
      body:    'Education and healthcare may be underprovided without government intervention.',
      visual:  photos.healthcare,
    },
    {
      type: 'answer',
      eyebrow: 'Government spending',
      title:   'Reason 2',
      answer:  'Provide public goods',
      body:    'National defence would not be provided by the market in sufficient quantity.',
      visual:  photos.defence,
    },
    {
      type: 'cards',
      eyebrow: 'Interesting fact',
      title:   'Why is defence different?',
      lead:    'Public goods create a free-rider problem.',
      cards: [
        ['Non-excludable', 'people cannot easily be stopped from benefiting'],
        ['Non-rival', 'one person benefiting does not reduce another person\'s benefit'],
        ['Free rider', 'people may benefit even if they do not pay directly'],
      ],
      footer: 'Is street lighting closer to defence or closer to a private good?',
      visual: photos.defence,
      partialReview: ['.cardgrid > .card', '.prompt'],
    },
    {
      type: 'answer',
      eyebrow: 'Government spending',
      title:   'Reason 3',
      answer:  'Invest in infrastructure',
      body:    'Roads, ports and railways can support growth and development.',
      visual:  photos.roadwork,
    },
    {
      type: 'answer',
      eyebrow: 'Government spending',
      title:   'Reason 4',
      answer:  'Support key industries',
      body:    'Subsidies can support research, development or important domestic firms.',
      visual:  photos.industry,
    },
    {
      type: 'answer',
      eyebrow: 'Government spending',
      title:   'Reason 5',
      answer:  'Reduce inequality',
      body:    'Benefits and social security can support vulnerable households.',
      visual:  photos.socialSecurity,
    },
    {
      type: 'answer',
      eyebrow: 'Government spending',
      title:   'Reason 6',
      answer:  'Manage the macroeconomy',
      body:    'Spending can raise or lower total demand.',
      visual:  photos.shopping,
    },
    {
      type: 'quiz',
      eyebrow: 'Spending challenge',
      title:   'Spend, pause, or cut?',
      question: 'Which spending decision would be easiest to justify in an exam answer?',
      choices: [
        'Build a port to lower transport costs for firms',
        'Subsidise every business, even if demand is weak',
        'Cut healthcare spending during a disease outbreak',
      ],
      prompt: 'Explain the effect on growth, equality, or total demand.',
      visual: photos.port,
      partialReview: ['.choices > .choice', '.prompt'],
    },

    {
      type: 'section',
      eyebrow: 'Part two',
      title:   'Why tax?',
      subtitle: 'Taxation is the main source of government revenue.',
    },
    {
      type: 'quiz',
      eyebrow: 'Taxation',
      title:   'Discuss',
      question: 'How can taxes change behaviour?',
      choices: [
        'Which goods might government tax heavily?',
        'How can a tax reduce pollution?',
        'How can tariffs affect imports?',
      ],
      prompt: 'Use one real example.',
      visual: photos.taxForms,
      partialReview: ['.choices > .choice', '.prompt'],
    },
    {
      type: 'cards',
      eyebrow: 'Tax fact',
      title:   'Taxes send signals',
      lead:    'A tax is not only a way to collect money.',
      cards: [
        ['Price signal', 'higher tax can make a good more expensive'],
        ['Behaviour signal', 'consumers may buy less of the taxed good'],
        ['Producer signal', 'firms may change methods to avoid higher costs'],
      ],
      footer: 'Which signal matters most for a pollution tax?',
      visual: photos.pollution,
      partialReview: ['.cardgrid > .card', '.prompt'],
    },
    {
      type: 'answer',
      eyebrow: 'Taxation',
      title:   'Reason 1',
      answer:  'Discourage demerit goods',
      body:    'Taxes can raise prices and reduce consumption of goods such as tobacco.',
      visual:  photos.tobacco,
    },
    {
      type: 'answer',
      eyebrow: 'Taxation',
      title:   'Reason 2',
      answer:  'Reduce external costs',
      body:    'A pollution tax can make firms include external costs in private costs.',
      visual:  photos.pollution,
    },
    {
      type: 'answer',
      eyebrow: 'Taxation',
      title:   'Reason 3',
      answer:  'Discourage imports',
      body:    'Tariffs can make imported goods more expensive and protect domestic producers.',
      visual:  photos.port,
    },
    {
      type: 'quiz',
      eyebrow: 'Tariff debate',
      title:   'Who gains, who loses?',
      question: 'A tariff is placed on imported shoes. Predict one winner and one loser.',
      choices: [
        'Domestic shoe producers',
        'Consumers buying shoes',
        'Government tax revenue',
        'Foreign exporters',
      ],
      prompt: 'There can be more than one correct pair.',
      visual: photos.port,
      partialReview: ['.choices > .choice', '.prompt'],
    },
    {
      type: 'answer',
      eyebrow: 'Taxation',
      title:   'Reason 4',
      answer:  'Raise revenue',
      body:    'Tax revenue helps fund spending such as education, healthcare and infrastructure.',
      visual:  photos.taxForms,
    },
    {
      type: 'answer',
      eyebrow: 'Taxation',
      title:   'Reason 5',
      answer:  'Reduce demand-pull inflation',
      body:    'Higher taxes can reduce disposable income, spending and total demand.',
      visual:  photos.inflation,
    },
    {
      type: 'answer',
      eyebrow: 'Taxation',
      title:   'Reason 6',
      answer:  'Reduce income inequality',
      body:    'The government can tax higher incomes more and use revenue to support poorer households.',
      visual:  photos.socialSecurity,
    },
    {
      type: 'quiz',
      eyebrow: 'Fairness line',
      title:   'What is fair?',
      question: 'Two households pay $2,000 tax. One earns $20,000. One earns $100,000. Is the tax fair?',
      choices: [
        'Yes: they pay the same amount',
        'No: they pay different proportions of income',
        'It depends what the tax funds',
      ],
      prompt: 'This sets up progressive, regressive and proportional taxes.',
      visual: photos.socialSecurity,
      partialReview: ['.choices > .choice', '.prompt'],
    },

    {
      type: 'section',
      eyebrow: 'Part three',
      title:   'Tax types',
      subtitle: 'Classify the tax before explaining its effect.',
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
      title:   'Same tax, different burden',
      lead:    'Do not only ask who pays the money. Ask who feels the burden most.',
      cards: [
        ['Direct or indirect?', 'what is being taxed? income, wealth, or spending?'],
        ['Progressive?', 'does the proportion rise as income rises?'],
        ['Regressive?', 'does the proportion hit lower-income groups harder?'],
      ],
      footer: 'Why might a sales tax be called regressive?',
      visual: photos.taxForms,
      partialReview: ['.cardgrid > .card', '.prompt'],
    },

    {
      type: 'section',
      eyebrow: 'Part four',
      title:   'Fiscal policy',
      subtitle: 'Tax and spending change total demand.',
    },
    {
      type: 'term',
      eyebrow: 'Key term',
      title:   'Fiscal policy',
      term:    'fiscal policy',
      definition: 'The use of government spending and taxation to influence economic activity and achieve macroeconomic aims.',
      examples: ['government spending', 'taxation', 'total demand'],
      visual: photos.budgetMeeting,
      partialReview: ['.termBox', '.choices > .choice'],
    },
    {
      type: 'flow',
      eyebrow: 'Fiscal policy',
      title:   'Expansionary policy',
      nodes: [['higher spending or lower taxes', 'demand rises', 'output may rise', 'employment may rise']],
      footer: 'Used to support growth and employment.',
      visual: photos.roadwork,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'flow',
      eyebrow: 'Fiscal policy',
      title:   'Contractionary policy',
      nodes: [['lower spending or higher taxes', 'demand falls', 'inflationary pressure may fall']],
      footer: 'Used when demand-pull inflation is high.',
      visual: photos.taxForms,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'cards',
      eyebrow: 'Extension fact',
      title:   'Some fiscal policy is automatic',
      lead:    'Not every fiscal-policy change needs a new speech or new law.',
      cards: [
        ['In a boom', 'income rises, so tax revenue often rises automatically'],
        ['In a recession', 'income falls, so tax revenue often falls automatically'],
        ['Safety net', 'some welfare spending may rise when unemployment rises'],
      ],
      footer: 'Why might this smooth out changes in total demand?',
      visual: photos.budgetMeeting,
      partialReview: ['.cardgrid > .card', '.prompt'],
    },
    {
      type: 'exam',
      eyebrow: 'Exam practice',
      title:   '4-mark chain',
      question: 'Explain how a reduction in taxation may help economic growth.',
      keywords: ['disposable income', 'consumer spending', 'total demand', 'output'],
      prompt:   'Write one clear chain. Use "may".',
      visual:   photos.shopping,
      partialReview: ['.cardgrid > .card', '.prompt'],
    },
    {
      type: 'answer',
      eyebrow: 'Exit check',
      title:   'Three blanks',
      steps: [
        ['1', 'A tariff is an __________ tax.'],
        ['2', 'A budget deficit means spending is __________ revenue.'],
        ['3', 'Higher taxes may reduce __________ inflation.'],
      ],
      cue: 'Answer before leaving.',
      visual: photos.classroom,
      partialReview: ['.steps > .step', '.prompt'],
    },
  ],
};
