/* ============================================================
   Lesson X.Y — <Lesson title>
   IGCSE Economics Lesson Library - Unit N: <unit name>

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

   Eyebrow convention:
     Use eyebrow only as a student learning-stage cue:
     Lesson overview | Starter | Objectives | New section | Learn | Explore
     Example | Apply | Check | Exam practice | Review | Exit ticket
     Put syllabus refs and topic breadcrumbs in section subtitles.
   ============================================================ */

window.IGCSE = window.IGCSE || {};

IGCSE.lesson = {
  meta: {
    code:         'X.Y',
    unit:         'Unit N — <unit name>',
    title:        '<Lesson title> - Oehler-Huang Library',
    lessonLabel:  '<Lesson label shown in slide footer>',
    courseLabel:  'IGCSE Economics Lesson Library',
    creatorLabel: 'Oehler-Huang Library',
  },

  slides: [
    {
      type: 'hero',
      eyebrow:  'Lesson overview',
      title:    '<Lesson title>',
      subtitle: '<Short subtitle>',
      kicker:   '<One-line hook>',
      visual:   'hero',
    },

    {
      type: 'discussion',
      eyebrow: 'Starter',
      title:   '<Hook question>',
      question: '<Concrete scenario or puzzle that creates the need for the lesson>',
      visual: 'abstract',
    },

    {
      type: 'outcomes',
      eyebrow: 'Objectives',
      title:   'By the end, you can',
      bullets: [
        '<Objective 1>',
        '<Objective 2>',
        '<Objective 3>',
      ],
    },

    {
      type: 'section',
      eyebrow: 'New section',
      title:   '<First section taught>',
      subtitle: '<Syllabus ref> - <Topic breadcrumb>',
    },

    {
      type: 'discussion',
      eyebrow: 'Explore',
      title:   '<Starter question>',
      question: '<Fact or discussion prompt that introduces this section>',
      visual: 'abstract',
    },

    // Repeat for each section:
    // section -> fact/discussion -> taught content -> formative assessment.

    {
      type: 'quiz',
      eyebrow: 'Check',
      question: '<Question>',
      choices: ['<Correct or plausible choice>', '<Distractor>', '<Distractor>'],
      answer: 0,
      prompt: '<Follow-up explanation or application task>',
      visual: 'abstract',
    },

    {
      type: 'answer',
      eyebrow: 'Review',
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
