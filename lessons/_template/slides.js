/* ============================================================
   Lesson X.Y — <Lesson title>
   Cambridge IGCSE Economics 0455 · Unit N: <unit name>

   Copy this folder to lessons/unit-N-<slug>/X-Y-<lesson-slug>/
   then rewrite the meta and slides arrays below.

   Supported slide types (see assets/js/presentation.js):
     hero | roadmap | outcomes | term | compare | quiz | answer
     cards | split | flow | exam | section | discussion | fact
     taxSim | indirectTaxSim | marketMechanismSim | marketSignalGame

   Available "visual" keys (see assets/js/visuals.js):
     hero · abstract · demandShift · budgetBars · progressive
     regressive · proportional · demandUp · demandDown · flowArrows
     (plus all legacy aliases)

   Optional pacing:
     partialReview: true reveals supported content blocks one at a time.
     Prefer full slides by default; use partialReview only for dense
     comparisons, answer steps, flow chains, or starter prompts.
   ============================================================ */

window.IGCSE = window.IGCSE || {};

IGCSE.lesson = {
  meta: {
    code:         'X.Y',
    unit:         'Unit N — <unit name>',
    title:        '<Lesson title> — Cambridge IGCSE Economics 0455',
    lessonLabel:  '<Lesson label shown in slide footer>',
    courseLabel:  'Cambridge IGCSE Economics 0455',
    creatorLabel: 'Created by Samuel Oehler-Huang, Suzhou Foreign Language School',
  },

  slides: [
    {
      type: 'hero',
      eyebrow:  '<Unit or syllabus strand>',
      title:    '<Lesson title>',
      subtitle: '<Short subtitle>',
      kicker:   '<One-line hook>',
      visual:   'hero',
    },

    {
      type: 'discussion',
      eyebrow: 'Opening hook',
      title:   '<Hook question>',
      question: '<Concrete scenario or puzzle that creates the need for the lesson>',
      visual: 'abstract',
    },

    {
      type: 'outcomes',
      eyebrow: 'Lesson objectives',
      title:   'By the end, you can',
      bullets: [
        '<Objective 1>',
        '<Objective 2>',
        '<Objective 3>',
      ],
    },

    {
      type: 'section',
      eyebrow: '<Syllabus ref>',
      title:   '<First section taught>',
    },

    {
      type: 'discussion',
      eyebrow: '<Section starter>',
      title:   '<Starter question>',
      question: '<Fact or discussion prompt that introduces this section>',
      visual: 'abstract',
    },

    // Repeat for each section:
    // section -> fact/discussion -> taught content -> formative assessment.

    {
      type: 'quiz',
      eyebrow: 'Formative assessment',
      question: '<Question>',
      choices: ['<Correct or plausible choice>', '<Distractor>', '<Distractor>'],
      answer: 0,
      prompt: '<Follow-up explanation or application task>',
      visual: 'abstract',
    },

    {
      type: 'answer',
      eyebrow: 'Section check',
      title:   'Fill in the blanks',
      mode:    'fillBlanks',
      steps: [
        ['1', '<Statement with __________.>', '<answer>'],
        ['2', '<Statement with __________.>', '<answer>'],
      ],
    },

    // … add more slides here …
  ],
};
