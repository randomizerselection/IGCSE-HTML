/* ============================================================
   Lesson X.Y — <Lesson title>
   Cambridge IGCSE Economics 0455 · Unit N: <unit name>

   Copy this folder to lessons/unit-N-<slug>/X-Y-<lesson-slug>/
   then rewrite the meta and slides arrays below.

   Supported slide types (see assets/js/presentation.js):
     hero | roadmap | outcomes | term | compare | quiz | answer
     cards | split | flow | exam | section | discussion | fact | taxSim

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
  },

  slides: [
    {
      type: 'hero',
      eyebrow:  'Cambridge IGCSE Economics 0455',
      title:    '<Lesson title>',
      subtitle: '<Short subtitle>',
      kicker:   '<One-line hook>',
      visual:   'hero',
    },

    {
      type: 'roadmap',
      eyebrow: 'Lesson map',
      title:   'Today’s route',
      items: [
        ['1', 'Part one',   'short description'],
        ['2', 'Part two',   'short description'],
        ['3', 'Part three', 'short description'],
      ],
      visual: 'abstract',
    },

    // … add more slides here …
  ],
};
