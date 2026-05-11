# Oehler-Huang Library

Classroom-tested lessons, quizzes, handouts, and review materials. The current
collection is the IGCSE Economics Lesson Library, built on one shared design
system.

## Quick start

Open `index.html` in a browser (or double-click it) to see the landing page,
then click any lesson tile to open that deck.

Inside a deck:

| Key              | Action                   |
| ---------------- | ------------------------ |
| `→` / `Space` / `PageDown` | next slide      |
| `←` / `PageUp`   | previous slide           |
| `Home` / `End`   | first / last slide       |
| `F`              | toggle fullscreen        |
| `N`              | toggle teacher notes     |
| `O`              | overview grid (jump)     |
| `Esc`            | close overview           |

URL hash tracks the slide (e.g. `…/index.html#12`), so bookmarks work.

---

On slides that use partial review, the next action reveals the next element
before advancing to the next slide. Use this sparingly: full slides are better
when students need to see the whole structure at once.

## Folder structure

```
oehler-huang-library/
├── index.html                         ← course landing page
├── README.md                          ← this file
├── references/
│   ├── igcse-economics-syllabus-2027-2029.md ← current syllabus reference
│   └── igcse-economics-definitions-2026.md ← recent mark-scheme definitions overview
├── assets/
│   ├── css/
│   │   ├── theme.css                  ← design tokens + primitives (buttons, cards, chips)
│   │   └── presentation.css           ← slide layout, navigation, motion, print
│   └── js/
│       ├── presentation.js            ← reusable slide engine (ES module)
│       └── visuals.js                 ← SVG graphic library
├── lessons/
│   ├── _template/                     ← starter files for a new lesson
│   │   ├── index.html
│   │   └── slides.js
│   └── unit-4-government/
│       └── 4-3-fiscal-policy/
│           ├── index.html             ← thin page; just loads engine + slides
│           └── slides.js              ← lesson content (data only)
└── archive/                           ← superseded originals
```

Naming rules:

- Unit folders: `unit-<number>-<slug>` (e.g. `unit-4-government`).
- Lesson folders: `<syllabus-code>-<slug>` (e.g. `4-3-fiscal-policy`).
- Lesson slugs use kebab-case; no spaces, no capital letters.

---

## Reference source for lesson content

Use `references/igcse-economics-syllabus-2027-2029.md` as the shared syllabus
source when building or revising decks for the current syllabus. It contains
the revised 2027-2029 syllabus references, assessment overview, command words,
formulas, and planning notes.

Use `references/igcse-economics-definitions-2026.md` as the shared definitions
source. It is an up-to-date overview of definitions and mark-scheme wording as
Cambridge IGCSE Economics 0455 has used them in recent years. Lesson materials
should typically align with these definitions, though slide wording may be made
more concise and student-understandable where appropriate, provided it still
prepares students to earn marks in exams.

Recommended workflow:

1. Find the relevant syllabus rows, e.g. `4.2` for fiscal policy.
2. Check the definitions overview for key terms and exam-ready wording.
3. Use the planning notes on `term` slides where possible.
4. Shorten wording only when needed for slide clarity or student access.
5. Keep detailed wording in speaker explanation or follow-up practice slides.
6. Add a short source comment near the top of each lesson `slides.js`.

Example comment:

```
Syllabus source: ../../../references/igcse-economics-syllabus-2027-2029.md
Definitions source: ../../../references/igcse-economics-definitions-2026.md
Use the 4.2 rows for fiscal-policy wording when creating slides.
```

---

## Creating a new lesson

1. Copy `lessons/_template/` into the correct unit folder and rename, e.g.:
   ```
   lessons/unit-2-allocation/2-4-elasticity/
   ```
2. Edit **`slides.js`** — change the `meta` block and rewrite the `slides` array.
   Each slide is a plain object with a `type` and fields for that type.
3. Edit **`quiz.js`** for the separate after-class quiz shown at `?view=quiz`.
   Keep it to short retrieval questions by default, using `multipleChoice` and
   `fillBlank` question objects.
4. Edit **`flashcards.js`** for the self-check revision deck shown at
   `?view=flashcards`. Flashcards must be one of two types only:
   ```js
   {
     type: 'definition',
     id: 'stable-id',
     term: 'Key term',
     definition: 'Short definition'
   }

   {
     type: 'fillBlank',
     id: 'stable-id',
     prompt: 'Sentence with __________ for a missing key word',
     answer: 'missing key word'
   }
   ```
   Flashcards are separately authored. Keep them limited to short definitions
   of key terms or fill-in-the-blank retrieval.
5. Leave **`index.html`** alone unless you're customising the page itself.
   It simply imports the engine and your slide data.
6. Add a card to `index.html` (the landing page) under the matching unit.

That's it. No CSS or JavaScript changes are needed for a new lesson.

Quiz score submission is configured in `assets/js/quiz-config.js`. The site is
set up for Netlify Forms: quiz attempts post to the hidden
`quiz-submissions` form in `index.html`, and Netlify stores the submissions for
dashboard review and CSV export. After deployment, check Netlify → Forms →
`quiz-submissions`.

### Lesson structure preferences

Default slide decks should open in this order:

1. Title slide
2. Opening hook
3. Learning objectives (`By the end, you can`)

Keep title slides visually engaging but uncluttered: use the lesson title,
a short lesson or unit label, one hook line, and a relevant, specific photo.
Avoid repeating the course name in the slide body when the deck chrome already
shows course information.

Photo choices should be specific to the teaching point. Do not repeatedly reuse
generic classroom, shopping, factory, or port images when a more precise image
would make the concept clearer. New images must be saved locally in
`assets/images/...` and referenced from the deck data.

Learning-objective slides should use a simple graphic or no visual. Avoid
photos on objective slides because they compete with the checklist.

After that, teach each micro-sequence in this order:

1. Divider or section slide
2. Fact or discussion slide to introduce the topic
3. Taught content slides
4. Formative assessment, such as quizzes, hinge questions, application checks,
   answer blanks, or exam-style checks

Repeat that divider -> fact/discussion -> content -> formative-assessment
sequence for each major section in the deck.

Section dividers should name the content actually taught in that section. They
do not need subtitles; the section slide itself shows progress through the
lesson sequence.

Most teaching slides should not use subtitles or lead text. Prefer a clear,
self-contained title, then move directly into the content.

Quiz slides should not have display titles. Put the cognitive load into the
question and answer options; the shared engine provides click feedback on the
options. Always include an `answer` index on multiple-choice quiz slides so the
visual feedback can show correct and incorrect choices.

Use `answer` slides with `mode: 'fillBlanks'` for retrieval practice. Title
these slides `Fill in the blanks`; show all statements immediately, and put the
answer text in the third item of each step so it appears inside the blank when
clicked.

For bilingual slides, put Chinese translations on discussion and fact slides.
Use `zhTitle` on important flow and definition slides so the Chinese appears
inline with the English title. Keep the English title short enough that the
bilingual title does not overflow.

For list-like syllabus content, avoid putting all explanations on one dense
slide. Prefer:

- a short overview slide that names the full list
- numbered items when the list has a natural sequence
- one slide per reason, type, effect, or case
- a simple cause/effect chain on each explanation slide
- quick checks of understanding between segments
- exam prompts that ask students to identify the reason, apply it, and add an
  opportunity cost or evaluation point

For example, reasons for government spending and reasons for taxation should
use a numbered overview followed by one slide per reason.

### Slide types (in `slides.js`)

| `type`     | Purpose                                  |
| ---------- | ---------------------------------------- |
| `hero`     | Opening title slide                      |
| `roadmap`  | Numbered agenda cards                    |
| `outcomes` | Learning objectives list                 |
| `term`     | Key-term definition box (+ optional examples / formula) |
| `compare`  | Side-by-side comparison                  |
| `quiz`     | Question + choice pills                  |
| `answer`   | Answer card and/or reasoning steps       |
| `cards`    | Grid of concept cards                    |
| `split`    | Two-column bullet comparison             |
| `flow`     | Chain of arrow-connected chips           |
| `exam`     | Exam-style question + keyword anchors    |
| `section`  | Full-bleed section break                 |

Every slide accepts:

- `eyebrow` — small badge text (top-left)
- `title`   — main heading
- `visual`  — a key from `assets/js/visuals.js`, or a photo object with
  `src`, `alt`, `credit`, and `source`, for the right-hand visual
- `notes`   — private teacher note revealed with `N`

Also accepts:

- `partialReview` - optional reveal pacing for selected slides

See `lessons/unit-4-government/4-3-fiscal-policy/slides.js` for a full example.

### Partial review

Prefer full content by default. Add `partialReview` only when revealing one
piece at a time improves teaching:

- Good uses: answer steps, exam chains, flow diagrams, dense comparisons,
  starter questions, and definition-then-formula reveals.
- Avoid it: title slides, lesson maps, section breaks, single-concept answer
  slides, and tasks where students need all options visible before responding.

Use `partialReview: true` to reveal all supported content blocks on a slide, or
pass selectors for finer control:

```js
partialReview: ['.choices > .choice', '.prompt']
```

### Visual keys

Declared in `assets/js/visuals.js`. Core graphics:

- `hero`          — orbiting-coins title graphic
- `abstract`      — concentric circles with crossed curves (default fall-back)
- `demandShift`   — supply/demand with shifted curve
- `budgetBars`    — two-bar revenue vs. spending chart
- `progressive` / `regressive` / `proportional` — tax-rate bar charts
- `demandUp` / `demandDown` — expansionary / contractionary curves
- `flowArrows`    — four-node horizontal flow

Legacy keys from older lessons are mapped onto these automatically.

---

## Design system

All colours, radii, shadows, and font sizes live as CSS custom properties in
`assets/css/theme.css`. Change the token, every lesson updates.

Tone: dark background (`--bg-0` = `#05101d`), bold white headings with tight
tracking, cyan/gold accents. Large fluid type (`clamp()`) so a single deck
reads cleanly on anything from a 13" laptop to a 75" classroom display.

Motion is gated on `prefers-reduced-motion` and print CSS is included for
PDF export (File → Print → "Save as PDF").

---

## Browser requirements

The engine uses native ES modules (`import` / `export`), so the lesson pages
must be loaded over `http://` (or `file:///` in browsers that allow local
module loads — most do). If double-clicking the HTML fails due to CORS:

```powershell
# from the repo root, in PowerShell
python -m http.server 8080
```
…then open <http://localhost:8080/>.
