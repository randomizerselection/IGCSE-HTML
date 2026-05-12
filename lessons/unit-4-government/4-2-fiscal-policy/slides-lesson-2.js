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

const photos = IGCSE.photos.fiscalPolicy;
const factPhotos = IGCSE.photos.fiscalPolicyFacts;
IGCSE.lesson = {
  meta: {
    code:         '4.2.3',
    unit:         'Unit 4 - Government and the macroeconomy',
    title:        'Fiscal policy lesson 2: taxation foundations - Cambridge IGCSE Economics 0455',
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
            'Use real examples of direct and indirect taxes.',
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
              fact: 'Australia charged AUD 1.40312 excise tax per cigarette in March 2025. Taxation can reduce demerit goods.',
              source: 'Source: Australian Taxation Office.',
            },
            china: {
              flag: '🇨🇳',
              country: 'China',
              fact: 'China uses excise taxes on cigarettes, including production and wholesale taxes.',
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
          footer: 'Taxes on higher incomes can be linked directly to redistribution.',
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
            'rates may vary by income band or income level'
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
              fact: 'Sweden introduced a carbon tax in 1991. Taxation can give firms an incentive to pollute less.',
              source: 'Source: Government Offices of Sweden.',
            },
            china: {
              flag: '🇨🇳',
              country: 'China',
              fact: 'China started a national carbon market in 2021, covering power-sector emissions.',
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
          title:   'Exit ticket',
          mode:    'fillBlanks',
          steps: [
            ['1', 'A direct tax is paid directly by the __________ to the government.', 'taxpayer'],
            ['2', 'An indirect tax is added to the __________ of a good or service.', 'price'],
            ['3', 'Corporation tax is a tax on company __________.', 'profits'],
            ['4', 'A tariff is an indirect tax on __________ goods.', 'imported'],
          ],
        },

  ],
};
