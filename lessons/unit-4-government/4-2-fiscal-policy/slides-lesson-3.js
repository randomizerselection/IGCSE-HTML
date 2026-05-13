/* ============================================================
   Lesson 4.2 - Fiscal policy (4.2.3)
   Cambridge IGCSE Economics 0455 - Unit 4: Government and the macroeconomy

   Syllabus source:
   ../../../references/igcse-economics-syllabus-2027-2029.md
   Definitions source:
   ../../../references/igcse-economics-definitions-2026.md
   Paper 2 mark-scheme archive:
   ../../../references/paper-2-mark-schemes-2023-2025/4-government-and-macroeconomy.md

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
          answer: 'A progressive tax can reduce inequality, but very high rates may reduce incentives or encourage avoidance.',
          answerZh: '累进税可以减少不平等，但过高税率可能削弱激励或鼓励避税。',
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
          zhTitle: '累进税、累退税和比例税',
        },
    {
          type: 'discussion',
          eyebrow: 'Explore',
          title:   'Who pays a higher share?',
          question: 'Which tax structure more directly reduces inequality: progressive, regressive or proportional?',
          zh: '哪种税收结构更直接地减少不平等：累进税、累退税，还是比例税？',
          answer: 'Progressive tax more directly reduces inequality because higher-income households pay a higher percentage.',
          answerZh: '累进税更直接减少不平等，因为高收入家庭缴纳更高比例的收入。',
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
          type: 'fact',
          eyebrow: 'Example',
          facts: {
            left: {
              flag: '🇬🇧',
              country: 'United Kingdom',
              fact: 'The UK charges 45% income tax on taxable income above GBP 125,140. This is a progressive tax.',
              source: 'Source: GOV.UK income tax rates, 2025-26.',
            },
            china: {
              flag: '🇨🇳',
              country: 'China',
              fact: 'China also uses progressive income tax, with a top 45% rate on yearly taxable income above RMB 960,000.',
              source: 'Source: China State Taxation Administration.',
            },
          },
          visual: factPhotos.hmrcLondon,
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
          answer: 'It may be unfair because poorer households can pay a higher share of their income through indirect taxes.',
          answerZh: '这可能不公平，因为较贫困家庭可能把更高比例的收入用于缴纳间接税。',
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
          definition: 'A proportional tax takes the same proportion of income at all income levels, even though higher earners pay more money in total.',
          definitionZh: '比例税在所有收入水平上征收相同比例的收入，虽然高收入者缴纳的总金额更多。',
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
          zhTitle: '分类并解释',
        },
    {
          type: 'discussion',
          eyebrow: 'Exam practice',
          title:   'Name it first',
          question: 'Why is it risky to explain the effect of a tax before classifying what type of tax it is?',
          zh: '为什么在判断税收类型之前就解释税收影响会有风险？',
          answer: 'Different taxes affect consumers, firms, prices and incentives in different ways, so classification guides the analysis.',
          answerZh: '不同税种对消费者、企业、价格和激励的影响不同，因此先分类有助于正确分析。',
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
