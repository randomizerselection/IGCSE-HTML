/* Syllabus source: ../../../references/igcse-economics-syllabus-2027-2029.md */
window.IGCSE = window.IGCSE || {};

const photos = IGCSE.photos.marketTeaching;

IGCSE.lesson = {
  meta: {
    code: '2.8.2',
    unit: 'Unit 2 - The allocation of resources',
    title: 'Market economic system lesson 3: arguments for markets - Cambridge IGCSE Economics 0455',
    lessonLabel: 'Market economic system lesson 3',
    courseLabel: 'Cambridge IGCSE Economics 0455',
    creatorLabel: 'Created by Samuel Oehler-Huang, Suzhou Foreign Language School',
  },
  slides: [
    {
      type: 'hero',
      eyebrow: 'Lesson overview',
      title: 'Arguments for markets',
      subtitle: '2.8.2 - choice, incentives and efficiency',
      kicker: 'Why can markets be powerful allocators of scarce resources?',
      visual: photos.phoneDisplay,
    },
    {
      type: 'discussion',
      eyebrow: 'Starter',
      title: 'Competing for customers',
      question: 'Why do smartphone firms keep improving cameras, battery life, screens and prices?',
      visual: photos.phoneDisplay,
    },
    {
      type: 'outcomes',
      eyebrow: 'Objectives - 2.8.2',
      title: 'By the end, you can',
      bullets: [
        'Explain choice as an argument for markets.',
        'Explain incentives from profit and competition.',
        'Explain efficiency using cost and waste reduction.',
        'Build fact-based exam chains for arguments for markets.',
      ],
    },
    {
      type: 'section',
      eyebrow: 'New section',
      title: 'Choice',
      subtitle: '2.8.2 - advantages include choice',
    },
    {
      type: 'fact',
      eyebrow: 'Specific example',
      facts: {
        left: {
          country: 'United States',
          fact: 'The US App Store ecosystem facilitated USD 406 billion in developer billings and sales in 2024.',
          source: 'Source: Apple Newsroom, 2025.',
        },
        china: {
          country: 'China',
          fact: 'China’s App Store ecosystem reached RMB 3.76 trillion in 2023.',
          source: 'Source: Apple China Newsroom, 2024.',
        },
      },
      visual: photos.phoneDisplay,
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title: 'Choice',
      nodes: [['many firms compete', 'different prices and designs appear', 'consumers compare options', 'consumer welfare may rise']],
      footer: 'Choice is stronger when competition is real.',
      visual: photos.phoneDisplay,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'section',
      eyebrow: 'New section',
      title: 'Incentives',
      subtitle: '2.8.2 - advantages include incentives',
    },
    {
      type: 'discussion',
      eyebrow: 'Explore',
      title: 'Profit pressure',
      question: 'If a bubble tea shop can earn more profit by launching a popular drink, what incentive does profit create?',
      visual: photos.bubbleTeaShop,
    },
    {
      type: 'fact',
      eyebrow: 'Specific example',
      facts: {
        left: {
          country: 'World',
          fact: 'Electric car sales topped 17 million in 2024 as firms competed for a fast-growing market.',
          source: 'Source: IEA Global EV Outlook 2025.',
        },
        china: {
          country: 'China',
          fact: 'Chinese-headquartered car makers accounted for about 80% of domestic EV sales in China in 2024.',
          source: 'Source: IEA Global EV Outlook 2025.',
        },
      },
      visual: photos.evCharging,
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title: 'Quality and innovation',
      nodes: [['firms want profit', 'better products attract consumers', 'sales may rise', 'quality and innovation improve']],
      footer: 'Use this chain for smartphone, EV, app and food-market examples.',
      visual: photos.evCharging,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'section',
      eyebrow: 'New section',
      title: 'Efficiency',
      subtitle: '2.8.2 - advantages include efficiency',
    },
    {
      type: 'fact',
      eyebrow: 'Specific example',
      facts: {
        left: {
          country: 'United States',
          fact: 'Amazon’s fulfilment centers use large-scale logistics systems to reduce delivery times and unit handling costs.',
          source: 'Source: Amazon operations reporting and public fulfilment-center materials.',
        },
        china: {
          country: 'China',
          fact: 'China’s express delivery volume exceeded 130 billion parcels in 2023, showing large-scale logistics competition.',
          source: 'Source: State Post Bureau of China, 2024.',
        },
      },
      visual: photos.amazonWarehouse,
    },
    {
      type: 'flow',
      eyebrow: 'Learn',
      title: 'Efficiency',
      nodes: [['competition pressures firms', 'firms cut waste and costs', 'prices may fall', 'resources may be used efficiently']],
      footer: 'Efficiency means producing with fewer wasted resources.',
      visual: photos.amazonWarehouse,
      partialReview: ['.flowRow > .flowChip', '.prompt'],
    },
    {
      type: 'marketSignalGame',
      eyebrow: 'Apply',
      title: 'Follow the market signal',
    },
    {
      type: 'compare',
      eyebrow: 'Exam practice',
      title: 'Weak answer or strong answer?',
      leftTitle: 'Weak',
      left: ['Markets are good because there is choice.', 'Firms make profit.', 'Competition is good.'],
      rightTitle: 'Strong',
      right: ['Competition gives firms an incentive to reduce costs.', 'Lower costs may allow lower prices.', 'Consumers may gain more choice and better quality.'],
      prompt: 'The strong answer explains the chain.',
      partialReview: ['.splitCols > .card', '.prompt'],
    },
    {
      type: 'exam',
      eyebrow: 'Exam practice',
      title: 'Analyse advantages',
      question: 'Analyse two advantages of a market economic system. [6]',
      keywords: ['choice', 'incentives', 'efficiency', 'profit'],
      prompt: 'Build two chains. Each chain needs a cause, an effect and a benefit.',
      partialReview: ['.cardgrid > .card', '.prompt'],
    },
    {
      type: 'answer',
      eyebrow: 'Exit ticket',
      title: 'Fill in the blanks',
      mode: 'fillBlanks',
      steps: [
        ['1', 'Arguments for markets include choice, incentives and __________.', 'efficiency'],
        ['2', 'Profit can encourage quality and __________.', 'innovation'],
        ['3', 'Competition can put downward pressure on __________.', 'prices'],
        ['4', 'Efficiency means fewer resources are __________.', 'wasted'],
      ],
    },
  ],
};
