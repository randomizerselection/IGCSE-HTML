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
      eyebrow:  'Lesson overview',
      title:    'Taxation',
      subtitle: 'Fiscal policy lesson 2',
      kicker:   'Why do governments tax, and how can taxes be classified?',
      visual:   photos.shopping,
    },
    {
      type: 'discussion',
      eyebrow: 'Starter',
      title:   'Every receipt is a policy choice',
      question: 'When you buy something in a shop, which taxes might be hidden in the final price?',
      zh: '当你在商店买东西时，最终价格里可能隐藏着哪些税？',
      visual: photos.shopping,
    },
    {
      type: 'outcomes',
      eyebrow: 'Objectives',
      title:   'By the end, you can',
      bullets: [
        'Explain reasons for taxation.',
        'Distinguish between direct and indirect tax.',
        'Distinguish between proportional, progressive and regressive tax.',
        'Use real examples.',
      ],
    },
    {
      type: 'section',
      eyebrow: 'New section',
      title:   'Why governments tax',
      subtitle: '4.2.3 - Why governments tax',
    },
    {
      type: 'fact',
      eyebrow: 'Example',
      facts: {
        left: {
          flag: '🇩🇰',
          country: 'Denmark',
          fact: 'Denmark’s tax revenue was 45.2% of GDP in 2024.',
          zh: '2024年，丹麦税收收入占GDP的45.2%。',
          source: 'Source: OECD Revenue Statistics 2025.',
        },
        china: {
          flag: '🇨🇳',
          country: 'China',
          fact: 'China’s tax revenue was 20.4% of GDP in 2023.',
          zh: '2023年，中国税收收入占GDP的20.4%。',
          source: 'Source: OECD Revenue Statistics in Asia and the Pacific 2025.',
        },
      },
      visual: factPhotos.denmarkTax,
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title:   '1. Raise revenue',
      zhTitle: '增加财政收入',
      nodes: [['government charges taxes', 'revenue rises', 'public services can be funded']],
      footer: 'Example: income tax can help fund education and healthcare.',
      visual: photos.taxForms,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title:   '2. Reduce demerit goods',
      zhTitle: '减少有害品',
      nodes: [['tax on cigarettes', 'price rises', 'quantity demanded may fall', 'health costs may fall']],
      footer: 'Evaluation: demand may be price inelastic.',
      visual: photos.tobacco,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'fact',
      eyebrow: 'Example',
      facts: {
        left: {
          flag: '🇦🇺',
          country: 'Australia',
          fact: 'Australia’s cigarette excise tax was AUD 1.40312 per stick (about RMB 6.7) in March 2025.',
          zh: '2025年3月，澳大利亚香烟消费税为每支1.40312澳元（约6.7元人民币）。',
          source: 'Source: Australian Taxation Office; RMB conversion approximate.',
        },
        china: {
          flag: '🇨🇳',
          country: 'China',
          fact: 'China’s Class A cigarettes face a 56% production excise tax plus 11% wholesale excise tax.',
          zh: '中国甲类卷烟征收56%生产环节消费税，另加11%批发环节消费税。',
          source: 'Source: China consumption tax rate table.',
        },
      },
      visual: factPhotos.philippinesTobacco,
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title:   '3. Reduce imports',
      zhTitle: '减少进口',
      nodes: [['tariff on imports', 'import prices rise', 'consumers may buy fewer imports', 'domestic firms may sell more']],
      footer: 'Evaluation: other countries may retaliate.',
      visual: photos.port,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'quiz',
      eyebrow: 'Check',
      question: 'A government increases tax on alcohol. Which reason for taxation is most direct?',
      choices: [
        'Raise revenue only',
        'Reduce consumption of a demerit good',
        'Reduce imports',
      ],
      answer: 1,
      prompt: 'Add one reason why the effect may be limited.',
      visual: photos.tobacco,
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title:   '4. Redistribute income',
      zhTitle: '收入再分配',
      nodes: [['higher taxes on high incomes', 'government revenue rises', 'welfare can be funded', 'inequality may fall']],
      footer: 'Progressive taxes are usually linked most directly to redistribution.',
      visual: photos.socialSecurity,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title:   '5. Influence demand',
      zhTitle: '影响需求',
      nodes: [['higher income tax', 'disposable income falls', 'consumer spending may fall', 'inflationary pressure may fall']],
      footer: 'This may conflict with growth and employment.',
      visual: photos.inflation,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title:   '6. Encourage sustainability',
      zhTitle: '鼓励可持续发展',
      nodes: [['pollution tax', 'firms face higher costs for polluting', 'cleaner methods become more attractive']],
      footer: 'Evaluate: firms may pass higher costs to consumers.',
      visual: photos.pollution,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'quiz',
      eyebrow: 'Check',
      question: 'A pollution tax raises money and makes pollution more expensive. Which answer is strongest?',
      choices: [
        'It can raise revenue and encourage sustainability',
        'It can only raise revenue',
        'It can only reduce imports',
      ],
      answer: 0,
      prompt: 'Explain why one tax can have more than one effect.',
      visual: photos.pollution,
    },
    {
      type: 'answer',
      eyebrow: 'Check',
      title:   'Fill in the blanks',
      mode:    'fillBlanks',
      steps: [
        ['1', 'Taxes raise government __________.', 'revenue'],
        ['2', 'A tax on cigarettes can reduce consumption of a __________ good.', 'demerit'],
        ['3', 'A tariff can reduce __________ by making them more expensive.', 'imports'],
        ['4', 'Higher taxes on high incomes can help __________ income.', 'redistribute'],
      ],
    },
    {
      type: 'section',
      eyebrow: 'New section',
      title:   'Direct and indirect\ntaxes',
      subtitle: '4.2.3 - Direct and indirect taxes',
    },
    {
      type: 'discussion',
      eyebrow: 'Explore',
      title:   'Who should pay?',
      question: 'If the government needs more revenue for hospitals, should it raise income tax, VAT, corporation tax or a tax on unhealthy products?',
      zh: '如果政府需要更多收入来资助医院，应该提高所得税、增值税、公司税，还是对不健康产品征税？',
      visual: photos.healthcare,
    },
    {
      type: 'discussion',
      eyebrow: 'Explore',
      title:   'Income and wealth',
      question: 'Should higher-income households pay a higher percentage of their income in tax?',
      zh: '高收入家庭是否应该缴纳更高比例的收入作为税？',
      visual: photos.taxForms,
    },
    {
      type: 'term',
      eyebrow: 'Learn',
      title:   'Direct tax',
      zhTitle: '直接税',
      term:    'direct tax',
      definition: 'A direct tax is a tax on income, profit or wealth, paid directly by the taxpayer to the government.',
      examples: [
        ['Income tax', 'tax on wages'],
        ['Corporation tax', 'tax on company profits'],
        ['Property tax', 'tax on land or buildings'],
      ],
      visual: photos.taxForms,
      partialReview: ['.termBox', '.termExamples > .termExample'],
    },
    {
      type: 'discussion',
      eyebrow: 'Explore',
      title:   'At the checkout',
      question: 'Is a tax added to prices fair if poorer households spend most of their income?',
      zh: '如果较贫困家庭会花掉大部分收入，加在价格上的税公平吗？',
      visual: photos.shopping,
    },
    {
      type: 'term',
      eyebrow: 'Learn',
      title:   'Indirect tax',
      zhTitle: '间接税',
      term:    'indirect tax',
      definition: 'An indirect tax is a tax on spending. It is added to the price of goods or services and collected by the seller for the government.',
      examples: [
        ['VAT', 'added to many prices'],
        ['Sales tax', 'paid at checkout'],
        ['Excise tax', 'on goods such as fuel'],
      ],
      visual: photos.shopping,
      partialReview: ['.termBox', '.termExamples > .termExample'],
    },
    {
      type: 'indirectTaxSim',
      eyebrow: 'Explore',
      title:   'Why indirect taxes can be regressive',
      taxRate: 10,
    },
    {
      type: 'fact',
      eyebrow: 'Example',
      facts: {
        left: {
          flag: '🇬🇧',
          country: 'United Kingdom',
          fact: 'After the UK sugar levy, sugar in taxed soft drinks fell 46% from 2015 to 2020.',
          zh: '英国含糖饮料税后，被征税软饮料含糖量在2015至2020年下降46%。',
          source: 'Source: HM Treasury and HMRC.',
        },
        china: {
          flag: '🇨🇳',
          country: 'China',
          fact: 'China has no national sugar-sweetened beverage excise tax in the World Bank database.',
          zh: '世界银行数据库显示，中国全国层面的含糖饮料消费税为0。',
          source: 'Source: World Bank Global SSB Tax Database.',
        },
      },
      visual: factPhotos.ukSugar,
    },
    {
      type: 'compare',
      eyebrow: 'Learn',
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
      eyebrow: 'Explore',
      title:   'Taxing company profits',
      question: 'If corporation tax rises, what might a firm do with prices, wages, investment or dividends?',
      zh: '如果公司税上升，企业可能会如何调整价格、工资、投资或股息？',
      visual: photos.industry,
    },
    {
      type: 'compare',
      eyebrow: 'Learn',
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
      eyebrow: 'Explore',
      title:   'Taxing harmful goods',
      question: 'Why might governments tax cigarettes more heavily than bread?',
      zh: '为什么政府可能对香烟征收比面包更高的税？',
      visual: photos.tobacco,
    },
    {
      type: 'flow',
      eyebrow: 'Example',
      title:   'Indirect tax on tobacco',
      zhTitle: '烟草间接税',
      question: 'Many governments put high indirect taxes on cigarettes.',
      nodes: [['tax per packet rises', 'retail price rises', 'some smokers buy fewer cigarettes', 'health costs may fall']],
      footer: 'Limitation: addiction can make demand price inelastic, so quantity may fall only slightly.',
      visual: photos.tobacco,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'term',
      eyebrow: 'Learn',
      title:   'Import tariff',
      zhTitle: '进口关税',
      term:    'tariff',
      definition: 'A tariff is an indirect tax on imported goods. It raises the price of imports and may protect domestic producers.',
      examples: [
        ['Imported cars', 'price rises'],
        ['Imported steel', 'domestic firms protected'],
        ['Imported clothing', 'consumer prices may rise'],
      ],
      visual: photos.port,
      partialReview: ['.termBox', '.termExamples > .termExample'],
    },
    {
      type: 'discussion',
      eyebrow: 'Explore',
      title:   'At the port',
      question: 'If a tariff makes imported phones more expensive, who might gain and who might lose?',
      zh: '如果关税使进口手机更贵，谁可能受益，谁可能受损？',
      visual: photos.port,
    },
    {
      type: 'fact',
      eyebrow: 'Example',
      facts: {
        left: {
          flag: '🇸🇪',
          country: 'Sweden',
          fact: 'Sweden’s carbon tax started at SEK 250 per tonne of fossil CO2 (about RMB 180) in 1991.',
          zh: '1991年，瑞典碳税为每吨化石二氧化碳250瑞典克朗（约180元人民币）。',
          source: 'Source: Government Offices of Sweden; RMB conversion approximate.',
        },
        china: {
          flag: '🇨🇳',
          country: 'China',
          fact: 'China’s national carbon market started in 2021, covering over 4.5 billion tonnes of CO2.',
          zh: '中国全国碳市场2021年启动，覆盖超过45亿吨二氧化碳排放。',
          source: 'Source: Gov.cn and MEE reporting.',
        },
      },
      visual: factPhotos.swedenCarbon,
    },
    {
      type: 'discussion',
      eyebrow: 'Explore',
      title:   'The smoke stack',
      question: 'Should a factory pay tax for pollution if it provides jobs in the local area?',
      zh: '如果工厂为当地提供就业，它还应该为污染纳税吗？',
      visual: photos.pollution,
    },
    {
      type: 'answer',
      eyebrow: 'Check',
      title:   'Fill in the blanks',
      mode:    'fillBlanks',
      steps: [
        ['1', 'A direct tax is paid directly by the __________ to the government.', 'taxpayer'],
        ['2', 'An indirect tax is added to the __________ of a good or service.', 'price'],
        ['3', 'Corporation tax is a tax on company __________.', 'profits'],
        ['4', 'A tariff is an indirect tax on __________ goods.', 'imported'],
      ],
    },
    {
      type: 'section',
      eyebrow: 'New section',
      title:   'Progressive, regressive\nand proportional taxes',
      subtitle: '4.2.3 - Progressive, regressive and proportional taxes',
    },
    {
      type: 'discussion',
      eyebrow: 'Explore',
      title:   'Who pays a higher share?',
      question: 'Which tax structure more directly reduces inequality: progressive, regressive or proportional?',
      zh: '哪种税收结构更直接地减少不平等：累进税、累退税，还是比例税？',
      visual: photos.socialSecurity,
    },
    {
      type: 'compare',
      eyebrow: 'Learn',
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
      eyebrow: 'Explore',
      title:   'Progressive or regressive?',
      defaultMode: 'progressive',
    },
    {
      type: 'chinaIncomeTaxSim',
      eyebrow: 'Example',
      title:   'Mainland China income tax',
      defaultIncome: 240000,
      standardDeduction: 60000,
      presets: [96000, 180000, 360000, 720000, 1200000],
      source: 'Resident comprehensive income; simplified classroom estimate. Sources: STA Individual Income Tax Law; PwC Worldwide Tax Summaries.',
    },
    {
      type: 'flow',
      eyebrow: 'Example',
      title:   'Sales tax can be regressive',
      zhTitle: '销售税可能具有累退性',
      question: 'Two households both pay $500 sales tax in a year.',
      nodes: [['low income: $10,000', '$500 is 5% of income', 'high income: $100,000', '$500 is 0.5% of income']],
      footer: 'The same tax payment is a larger proportion of the poorer household income.',
      visual: photos.shopping,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'term',
      eyebrow: 'Learn',
      title:   'Proportional tax',
      zhTitle: '比例税',
      term:    'proportional tax',
      definition: 'A proportional tax takes the same percentage of income from all taxpayers, even though higher earners pay more money in total.',
      examples: [
        ['Low income', '10% of $20,000 = $2,000'],
        ['High income', '10% of $80,000 = $8,000'],
        ['Key point', 'same percentage, different amount'],
      ],
      visual: photos.taxForms,
      partialReview: ['.termBox', '.termExamples > .termExample'],
    },
    {
      type: 'answer',
      eyebrow: 'Check',
      title:   'Fill in the blanks',
      mode:    'fillBlanks',
      steps: [
        ['1', 'A progressive tax takes a higher proportion as income __________.', 'rises'],
        ['2', 'A regressive tax takes a higher proportion from __________-income households.', 'lower'],
        ['3', 'A proportional tax charges the same __________ at all income levels.', 'percentage'],
        ['4', 'An indirect tax can be regressive if poorer households spend a larger share of their __________.', 'income'],
      ],
    },
    {
      type: 'section',
      eyebrow: 'New section',
      title:   'Classify and explain',
      subtitle: '4.2.3 - Classify and explain',
    },
    {
      type: 'discussion',
      eyebrow: 'Exam practice',
      title:   'Name it first',
      question: 'Why is it risky to explain the effect of a tax before classifying what type of tax it is?',
      zh: '为什么在判断税收类型之前就解释税收影响会有风险？',
      visual: photos.classroom,
    },
    {
      type: 'cards',
      eyebrow: 'Exam practice',
      title:   'Classify before explaining',
      cards: [
        ['Direct or indirect?', 'what is being taxed: income, wealth, profit or spending?'],
        ['Progressive?', 'does the proportion rise as income rises?'],
        ['Regressive?', 'does the proportion hit lower-income households harder?'],
        ['Proportional?', 'is the same percentage charged at all income levels?'],
      ],
      partialReview: ['.cardgrid > .card'],
    },
    {
      type: 'quiz',
      eyebrow: 'Check',
      question: 'A government charges a percentage tax on company profits and uses the revenue to fund schools.',
      choices: [
        'Direct tax and corporation tax',
        'Indirect tax on spending',
        'Tariff and regressive tax',
      ],
      answer: 0,
      prompt: 'Add one possible effect on firms.',
      visual: photos.industry,
    },
    {
      type: 'quiz',
      eyebrow: 'Check',
      question: 'Why might a government increase tax on petrol?',
      choices: [
        'To raise revenue and discourage pollution from car use',
        'To make exports cheaper',
        'To increase disposable income',
      ],
      answer: 0,
      prompt: 'Now add one limitation of the policy.',
      visual: photos.pollution,
    },
    {
      type: 'answer',
      eyebrow: 'Exit ticket',
      title:   'Fill in the blanks',
      mode:    'fillBlanks',
      steps: [
        ['1', 'A direct tax is paid on income, profit or __________.', 'wealth'],
        ['2', 'An indirect tax is paid when goods and services are __________.', 'bought'],
        ['3', 'A tariff is a tax on __________.', 'imports'],
        ['4', 'A progressive tax takes a higher __________ as income rises.', 'proportion'],
      ],
      cue: 'Answer before moving from taxation to wider fiscal policy.',
    },

  ],
};
