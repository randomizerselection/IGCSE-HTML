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
    title:        'Fiscal policy lesson 2: taxation - Cambridge IGCSE Economics 0455',
    lessonLabel:  'Fiscal policy lesson 2',
    courseLabel:  'Cambridge IGCSE Economics 0455',
    creatorLabel: 'Created by Samuel Oehler-Huang, Suzhou Foreign Language School',
  },

  slides: [
    {
      type: 'hero',
      eyebrow:  'Cambridge IGCSE Economics 0455',
      title:    'Taxation',
      subtitle: 'Fiscal policy lesson 2',
      kicker:   'Why do governments tax, and how can taxes be classified?',
    },
    {
      type: 'roadmap',
      eyebrow: 'Lesson map',
      title:   'Today\'s route',
      items: [
        ['4.2.3', 'Reasons for taxation', 'revenue, incentives, redistribution, demand and sustainability'],
        ['4.2.3', 'Tax types', 'direct, indirect, progressive, regressive and proportional'],
      ],
      visual: photos.taxForms,
    },
    {
      type: 'section',
      eyebrow: '4.2.3',
      title:   'Taxation',
      subtitle: 'Taxes raise revenue, change behaviour and influence demand.',
    },
    {
      type: 'discussion',
      eyebrow: 'Taxation hook',
      title:   'Every receipt is a policy choice',
      question: 'Which taxes do you already know?',
      zh: '你已经知道哪些税？',
      visual: photos.shopping,
    },
    {
      type: 'outcomes',
      eyebrow: 'Taxation objectives',
      title:   'By the end of the taxation lesson, you can',
      bullets: [
        'Explain reasons for taxation.',
        'Distinguish between direct and indirect tax.',
        'Distinguish between proportional, progressive and regressive tax.',
        'Use real examples.',
      ],
      visual: photos.taxForms,
    },
    {
      type: 'quiz',
      eyebrow: 'Baseline check',
      title:   'What do you already know?',
      question: 'Which statement is most accurate?',
      choices: [
        'All taxes are paid directly by households to the government.',
        'Some taxes are paid on income; others are paid when goods and services are bought.',
        'A tax can only raise revenue and cannot change behaviour.',
      ],
      prompt: 'Choose one, then correct one wrong statement.',
      visual: photos.taxForms,
    },
    {
      type: 'fact',
      eyebrow: 'Real-world fact',
      flag:    '🇩🇰',
      country: 'Denmark',
      fact:    'In 2024, Denmark had a tax-to-GDP ratio of 45.2%, compared with an OECD average of 34.1%.',
      zh:      '2024年，丹麦税收占GDP的比例为45.2%，而OECD平均水平为34.1%。',
      source: 'Source: OECD Revenue Statistics 2025, Denmark country note.',
      visual: factPhotos.denmarkTax,
    },
    {
      type: 'flow',
      eyebrow: 'Reason for taxation',
      title:   '1. Raise revenue',
      nodes: [['government charges taxes', 'revenue rises', 'public services can be funded']],
      footer: 'Example: income tax can help fund education and healthcare.',
      visual: photos.taxForms,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'flow',
      eyebrow: 'Reason for taxation',
      title:   '2. Reduce demerit goods',
      nodes: [['tax on cigarettes', 'price rises', 'quantity demanded may fall', 'health costs may fall']],
      footer: 'Evaluation: demand may be price inelastic.',
      visual: photos.tobacco,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'fact',
      eyebrow: 'Real-world fact',
      flag:    '🇵🇭',
      country: 'Philippines',
      fact:    'The Philippines passed a Sin Tax Reform Law in 2012 that raised indirect taxes on tobacco and alcohol.',
      zh:      '菲律宾在2012年通过“罪恶税”改革法，提高了烟草和酒精消费税。',
      source: 'Source: World Health Organization and Philippines Department of Finance material on sin tax reform.',
      visual: factPhotos.philippinesTobacco,
    },
    {
      type: 'flow',
      eyebrow: 'Reason for taxation',
      title:   '3. Reduce imports',
      nodes: [['tariff on imports', 'import prices rise', 'consumers may buy fewer imports', 'domestic firms may sell more']],
      footer: 'Evaluation: other countries may retaliate.',
      visual: photos.port,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'quiz',
      eyebrow: 'Quick check',
      question: 'A government increases tax on alcohol. Which reason for taxation is most direct?',
      choices: [
        'Raise revenue only',
        'Reduce consumption of a demerit good',
        'Reduce imports',
      ],
      prompt: 'Add one reason why the effect may be limited.',
      visual: photos.tobacco,
    },
    {
      type: 'flow',
      eyebrow: 'Reason for taxation',
      title:   '4. Redistribute income',
      nodes: [['higher taxes on high incomes', 'government revenue rises', 'welfare can be funded', 'inequality may fall']],
      footer: 'Progressive taxes are usually linked most directly to redistribution.',
      visual: photos.socialSecurity,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'flow',
      eyebrow: 'Reason for taxation',
      title:   '5. Influence demand',
      nodes: [['higher income tax', 'disposable income falls', 'consumer spending may fall', 'inflationary pressure may fall']],
      footer: 'This may conflict with growth and employment.',
      visual: photos.inflation,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'flow',
      eyebrow: 'Reason for taxation',
      title:   '6. Encourage sustainability',
      nodes: [['pollution tax', 'firms face higher costs for polluting', 'cleaner methods become more attractive']],
      footer: 'Evaluate: firms may pass higher costs to consumers.',
      visual: photos.pollution,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'quiz',
      eyebrow: 'Quick check',
      question: 'A pollution tax raises money and makes pollution more expensive. Which answer is strongest?',
      choices: [
        'It can raise revenue and encourage sustainability',
        'It can only raise revenue',
        'It can only reduce imports',
      ],
      prompt: 'Explain why one tax can have more than one effect.',
      visual: photos.pollution,
    },
    {
      type: 'discussion',
      eyebrow: 'Class discussion',
      title:   'Who should pay?',
      question: 'If the government needs more revenue for hospitals, should it raise income tax, VAT, corporation tax or a tax on unhealthy products?',
      zh: '如果政府需要更多收入来资助医院，应该提高所得税、增值税、公司税，还是对不健康产品征税？',
      visual: photos.healthcare,
    },
    {
      type: 'discussion',
      eyebrow: 'Direct tax',
      title:   'Income and wealth',
      question: 'Should higher-income households pay a higher percentage of their income in tax?',
      zh: '高收入家庭是否应该缴纳更高比例的收入作为税？',
      visual: photos.taxForms,
    },
    {
      type: 'term',
      eyebrow: 'Tax type',
      title:   'Direct tax',
      term:    'direct tax',
      definition: 'A direct tax is a tax on income, profit or wealth, paid directly by the taxpayer to the government.',
      examples: ['income tax on wages', 'corporation tax on company profits', 'property tax on land or buildings'],
      visual: photos.taxForms,
      partialReview: ['.termBox', '.choices > .choice'],
    },
    {
      type: 'discussion',
      eyebrow: 'Indirect tax',
      title:   'At the checkout',
      question: 'Is a tax added to prices fair if poorer households spend most of their income?',
      zh: '如果较贫困家庭会花掉大部分收入，加在价格上的税公平吗？',
      visual: photos.shopping,
    },
    {
      type: 'term',
      eyebrow: 'Tax type',
      title:   'Indirect tax',
      term:    'indirect tax',
      definition: 'An indirect tax is a tax on spending. It is added to the price of goods or services and collected by the seller for the government.',
      examples: ['VAT on many goods and services', 'sales tax at a shop checkout', 'indirect tax on petrol or cigarettes'],
      visual: photos.shopping,
      partialReview: ['.termBox', '.choices > .choice'],
    },
    {
      type: 'indirectTaxSim',
      eyebrow: 'Indirect tax simulator',
      title:   'Why indirect taxes can be regressive',
      taxRate: 10,
    },
    {
      type: 'fact',
      eyebrow: 'Real-world fact',
      flag:    '🇬🇧',
      country: 'United Kingdom',
      fact:    'The UK government says sugar in soft drinks within the Soft Drinks Industry Levy fell by 46% between 2015 and 2020.',
      zh:      '英国政府称，软饮料产业税范围内的软饮料含糖量在2015年至2020年下降了46%。',
      source: 'Source: HM Treasury and HMRC, Soft Drinks Industry Levy Review, October 2024.',
      visual: factPhotos.ukSugar,
    },
    {
      type: 'compare',
      eyebrow: 'Tax type',
      title:   'Two direct taxes',
      leftTitle: 'Income tax',
      left: [
        'tax on wages, salaries or other personal income',
        'often progressive: higher earners may pay a higher percentage'
      ],
      rightTitle: 'Corporation tax',
      right: [
        'tax on company profits',
      ],
      prompt: 'Real-world link: the UK, US, China and many other countries use both taxes.',
      visual: photos.industry,
      partialReview: ['.splitCols > .card', '.prompt'],
    },
    {
      type: 'discussion',
      eyebrow: 'Class discussion',
      title:   'Taxing company profits',
      question: 'If corporation tax rises, what might a firm do with prices, wages, investment or dividends?',
      zh: '如果公司税上升，企业可能会如何调整价格、工资、投资或股息？',
      visual: photos.industry,
    },
    {
      type: 'compare',
      eyebrow: 'Tax type',
      title:   'VAT, sales tax and other indirect taxes',
      leftTitle: 'VAT or sales tax',
      left: [
        'indirect tax on spending',
        'charged as a percentage of the selling price',
        'real examples: VAT in the UK and EU; sales tax in many US states'
      ],
      rightTitle: 'Indirect tax on specific goods',
      right: [
        'indirect tax on specific goods',
        'often used on cigarettes, alcohol and fuel',
        'aims can include revenue and reducing demerit goods'
      ],
      visual: photos.tobacco,
      partialReview: ['.splitCols > .card', '.prompt'],
    },
    {
      type: 'discussion',
      eyebrow: 'Indirect tax',
      title:   'Taxing harmful goods',
      question: 'Why might governments tax cigarettes more heavily than bread?',
      zh: '为什么政府可能对香烟征收比面包更高的税？',
      visual: photos.tobacco,
    },
    {
      type: 'flow',
      eyebrow: 'Real-world example',
      title:   'Indirect tax on tobacco',
      question: 'Many governments put high indirect taxes on cigarettes.',
      nodes: [['tax per packet rises', 'retail price rises', 'some smokers buy fewer cigarettes', 'health costs may fall']],
      footer: 'Limitation: addiction can make demand price inelastic, so quantity may fall only slightly.',
      visual: photos.tobacco,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'term',
      eyebrow: 'Tax type',
      title:   'Import tariff',
      term:    'tariff',
      definition: 'A tariff is an indirect tax on imported goods. It raises the price of imports and may protect domestic producers.',
      examples: ['tax on imported cars', 'import duty on steel', 'tariff on imported clothing'],
      visual: photos.port,
      partialReview: ['.termBox', '.choices > .choice'],
    },
    {
      type: 'discussion',
      eyebrow: 'Class discussion',
      title:   'At the port',
      question: 'If a tariff makes imported phones more expensive, who might gain and who might lose?',
      zh: '如果关税使进口手机更贵，谁可能受益，谁可能受损？',
      visual: photos.port,
    },
    {
      type: 'fact',
      eyebrow: 'Real-world fact',
      flag:    '🇸🇪',
      country: 'Sweden',
      fact:    'Sweden introduced a carbon tax in 1991 at SEK 250 per tonne of fossil CO2.',
      zh:      '瑞典在1991年推出碳税，税率为每吨化石二氧化碳250瑞典克朗。',
      source: 'Source: Government Offices of Sweden, Sweden\'s carbon tax.',
      visual: factPhotos.swedenCarbon,
    },
    {
      type: 'discussion',
      eyebrow: 'Class discussion',
      title:   'The smoke stack',
      question: 'Should a factory pay tax for pollution if it provides jobs in the local area?',
      zh: '如果工厂为当地提供就业，它还应该为污染纳税吗？',
      visual: photos.pollution,
    },
    {
      type: 'compare',
      eyebrow: 'Tax structure',
      title:   'Progressive and regressive taxes',
      leftTitle: 'Progressive tax',
      left: [
        'takes a higher proportion of income as income rises',
        'example: income tax with higher rates for higher income bands',
        'often used to reduce inequality'
      ],
      rightTitle: 'Regressive tax',
      right: [
        'takes a higher proportion of income from lower-income households',
        'example: indirect tax (sales tax)',
        'may increase inequality'
      ],
      visual: photos.shopping,
      partialReview: ['.splitCols > .card', '.prompt'],
    },
    {
      type: 'taxSim',
      eyebrow: 'Tax simulator',
      title:   'Progressive or regressive?',
      defaultMode: 'progressive',
    },
    {
      type: 'chinaIncomeTaxSim',
      eyebrow: 'Real-world simulator',
      title:   'Mainland China income tax',
      defaultIncome: 240000,
      standardDeduction: 60000,
      presets: [96000, 180000, 360000, 720000, 1200000],
      source: 'Resident comprehensive income; simplified classroom estimate. Sources: STA Individual Income Tax Law; PwC Worldwide Tax Summaries.',
    },
    {
      type: 'flow',
      eyebrow: 'Numerical example',
      title:   'Why a sales tax can be regressive',
      question: 'Two households both pay $500 sales tax in a year.',
      nodes: [['low income: $10,000', '$500 is 5% of income', 'high income: $100,000', '$500 is 0.5% of income']],
      footer: 'The same tax payment is a larger proportion of the poorer household income.',
      visual: photos.shopping,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'term',
      eyebrow: 'Tax structure',
      title:   'Proportional tax',
      term:    'proportional tax',
      definition: 'A proportional tax takes the same percentage of income from all taxpayers, even though higher earners pay more money in total.',
      examples: ['10% of $20,000 = $2,000', '10% of $80,000 = $8,000', 'same percentage, different amount'],
      visual: photos.taxForms,
      partialReview: ['.termBox', '.choices > .choice'],
    },
    {
      type: 'quiz',
      eyebrow: 'Formative assessment',
      title:   'Classify the tax',
      question: 'A government charges a percentage tax on company profits and uses the revenue to fund schools.',
      choices: [
        'Direct tax and corporation tax',
        'Indirect tax on spending',
        'Tariff and regressive tax',
      ],
      prompt: 'Add one possible effect on firms.',
      visual: photos.industry,
    },
    {
      type: 'quiz',
      eyebrow: 'Formative assessment',
      title:   'Pick the best explanation',
      question: 'Why might a government increase tax on petrol?',
      choices: [
        'To raise revenue and discourage pollution from car use',
        'To make exports cheaper',
        'To increase disposable income',
      ],
      prompt: 'Now add one limitation of the policy.',
      visual: photos.pollution,
    },
    {
      type: 'answer',
      eyebrow: 'Taxation exit check',
      title:   'Four blanks',
      steps: [
        ['1', 'A direct tax is paid on income, profit or __________.'],
        ['2', 'An indirect tax is paid when goods and services are __________.'],
        ['3', 'A tariff is a tax on __________.'],
        ['4', 'A progressive tax takes a higher __________ as income rises.'],
      ],
      cue: 'Answer before moving from taxation to wider fiscal policy.',
      visual: photos.classroom,
      partialReview: ['.steps > .step', '.prompt'],
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
      visual: photos.socialSecurity,
      partialReview: ['.splitCols > .card', '.prompt'],
    },
    {
      type: 'discussion',
      eyebrow: 'Redistribution',
      title:   'Reducing inequality',
      question: 'Which tax structure reduces inequality more directly?',
      zh: '哪种税收结构更直接地减少不平等？',
      visual: photos.socialSecurity,
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
      visual: photos.taxForms,
      partialReview: ['.cardgrid > .card', '.prompt'],
    },
    {
      type: 'discussion',
      eyebrow: 'Exam trap',
      title:   'Regressive taxes',
      question: 'Why might a sales tax be called regressive?',
      zh: '为什么销售税可能被称为累退税？',
      visual: photos.shopping,
    },

  ],
};
