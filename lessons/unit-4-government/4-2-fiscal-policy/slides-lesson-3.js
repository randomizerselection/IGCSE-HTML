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
    code:         '4.2.3',
    unit:         'Unit 4 - Government and the macroeconomy',
    title:        'Fiscal policy lesson 3: tax structures - Cambridge IGCSE Economics 0455',
    lessonLabel:  'Fiscal policy lesson 3',
    courseLabel:  'Cambridge IGCSE Economics 0455',
    creatorLabel: 'Created by Samuel Oehler-Huang, Suzhou Foreign Language School',
  },

  slides: [
    {
      type: 'hero',
      eyebrow:  'Lesson overview',
      title:    'Progressive, regressive and proportional taxes',
      subtitle: 'Fiscal policy lesson 3',
      kicker:   'Who pays a higher share of income when taxes change?',
      visual:   photos.taxForms,
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
      type: 'outcomes',
      eyebrow: 'Objectives',
      title:   'By the end, you can',
      bullets: [
        'Distinguish between progressive, regressive and proportional taxes.',
        'Calculate tax burden as a percentage of income.',
        'Explain why indirect taxes can be regressive.',
        'Classify taxes before explaining their effects.',
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
          type: 'discussion',
          eyebrow: 'Explore',
          title:   'At the checkout',
          question: 'Is a tax added to prices fair if poorer households spend most of their income?',
          zh: '如果较贫困家庭会花掉大部分收入，加在价格上的税公平吗？',
          visual: photos.shopping,
        },
    {
          type: 'indirectTaxSim',
          eyebrow: 'Explore',
          title:   'Why indirect taxes can be regressive',
          taxRate: 10,
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
