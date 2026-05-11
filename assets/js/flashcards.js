window.IGCSE = window.IGCSE || {};

(() => {
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (m) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[m]));

  const cardTags = (card) => {
    const baseTag = card.type === 'fillBlank' ? 'Fill in the blank' : 'Definition';
    const tags = [baseTag, ...(Array.isArray(card.tags) ? card.tags : [])]
      .filter((tag, index, arr) => tag && arr.indexOf(tag) === index);
    if (!tags.length) return '';
    return `
      <div class="flashcardTags" aria-label="Card tags">
        ${tags.map((tag) => `<span>${esc(tag)}</span>`).join('')}
      </div>
    `;
  };

  const normalizeCards = (cards = []) => cards
    .map((card, index) => {
      const type = card?.type === 'fillBlank' ? 'fillBlank' : 'definition';
      const front = type === 'fillBlank'
        ? card?.prompt
        : (card?.term || card?.front);
      const back = type === 'fillBlank'
        ? card?.answer
        : (card?.definition || card?.back);

      return {
        id: card?.id || `card-${index + 1}`,
        type,
        front,
        back,
        hint: card?.hint || '',
        tags: Array.isArray(card?.tags) ? card.tags : [],
      };
    })
    .filter((card) => card.front && card.back);

  const shuffleCards = (cards) => {
    const next = [...cards];
    for (let i = next.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [next[i], next[j]] = [next[j], next[i]];
    }
    return next;
  };

  const isTypingTarget = (target) => {
    const tagName = target?.tagName?.toLowerCase();
    return target?.isContentEditable || ['input', 'select', 'textarea'].includes(tagName);
  };

  IGCSE.mountFlashcardLesson = function mountFlashcardLesson(lesson, flashcards, mountEl = document.getElementById('deck')) {
    const meta = lesson?.meta || {};
    const originalCards = normalizeCards(flashcards?.cards || []);
    let queue = [...originalCards];
    let flipped = false;
    const knownIds = new Set();
    const againIds = new Set();

    document.body.classList.add('is-flashcard-mode');
    document.body.classList.remove('is-quiz-mode');
    document.body.classList.remove('is-handout-mode');
    if (meta.title) document.title = `${meta.lessonLabel || meta.title} - Flashcards`;

    if (!originalCards.length) {
      mountEl.className = 'flashcardDeck';
      mountEl.removeAttribute('aria-live');
      mountEl.innerHTML = `
        <section class="flashcardShell">
          <header class="flashcardHero">
            <div class="flashcardKicker">${esc(meta.unit || meta.courseLabel || 'IGCSE Economics Lesson Library')}</div>
            <h1>${esc(meta.lessonLabel || meta.title || 'Lesson flashcards')}</h1>
            <p>This lesson does not yet have flashcards.</p>
          </header>
        </section>
      `;
      return { mode: 'flashcards' };
    }

    mountEl.className = 'flashcardDeck';
    mountEl.removeAttribute('aria-live');
    mountEl.innerHTML = `
      <section class="flashcardShell">
        <header class="flashcardHero">
          <div class="flashcardKicker">${esc(meta.unit || meta.courseLabel || 'IGCSE Economics Lesson Library')}</div>
          <h1>${esc(flashcards?.title || meta.lessonLabel || meta.title || 'Lesson flashcards')}</h1>
          ${flashcards?.description ? `<p>${esc(flashcards.description)}</p>` : ''}
        </header>

        <div class="flashcardStudy" aria-label="Flashcard revision deck">
          <div class="flashcardStatus">
            <div class="flashcardStatusText">
              <span>Queue</span>
              <strong class="flashcardPosition"></strong>
            </div>
            <div class="flashcardCounters" aria-label="Study progress">
              <span><b class="flashcardNewCount">0</b> left</span>
              <span><b class="flashcardAgainCount">0</b> again</span>
              <span><b class="flashcardKnownCount">0</b> know</span>
            </div>
            <div class="flashcardProgressTrack" role="progressbar" aria-label="Cards completed" aria-valuemin="0" aria-valuemax="${originalCards.length}" aria-valuenow="0">
              <span class="flashcardProgressFill"></span>
            </div>
          </div>

          <button type="button" class="flashcardCard" data-flashcard-card aria-live="polite" aria-pressed="false">
            <span class="flashcardFaceLabel"></span>
            <span class="flashcardPrompt"></span>
            <span class="flashcardHint"></span>
            <span class="flashcardTagMount"></span>
          </button>

          <section class="flashcardComplete" data-flashcard-complete hidden>
            <p class="flashcardCompleteKicker">Session complete</p>
            <h2>All cards finished</h2>
            <dl>
              <div>
                <dt>Known</dt>
                <dd class="flashcardCompleteKnown">0</dd>
              </div>
              <div>
                <dt>Still marked again</dt>
                <dd class="flashcardCompleteAgain">0</dd>
              </div>
            </dl>
          </section>

          <div class="flashcardActions" aria-label="Flashcard controls">
            <button type="button" class="flashcardPrimaryButton" data-flashcard-show>Show Answer</button>
            <button type="button" class="flashcardMarkButton is-again" data-flashcard-mark="again" hidden>Again</button>
            <button type="button" class="flashcardMarkButton is-know" data-flashcard-mark="know" hidden>Know</button>
            <button type="button" class="flashcardSecondaryButton" data-flashcard-shuffle>Shuffle</button>
            <button type="button" class="flashcardSecondaryButton" data-flashcard-reset>Reset</button>
            <button type="button" class="flashcardPrimaryButton" data-flashcard-study-again hidden>Study again</button>
          </div>
        </div>
      </section>
    `;

    const positionEl = mountEl.querySelector('.flashcardPosition');
    const newEl = mountEl.querySelector('.flashcardNewCount');
    const knownEl = mountEl.querySelector('.flashcardKnownCount');
    const againEl = mountEl.querySelector('.flashcardAgainCount');
    const progressTrack = mountEl.querySelector('.flashcardProgressTrack');
    const progressFill = mountEl.querySelector('.flashcardProgressFill');
    const cardButton = mountEl.querySelector('[data-flashcard-card]');
    const faceLabel = mountEl.querySelector('.flashcardFaceLabel');
    const promptEl = mountEl.querySelector('.flashcardPrompt');
    const hintEl = mountEl.querySelector('.flashcardHint');
    const tagMount = mountEl.querySelector('.flashcardTagMount');
    const completeEl = mountEl.querySelector('[data-flashcard-complete]');
    const completeKnownEl = mountEl.querySelector('.flashcardCompleteKnown');
    const completeAgainEl = mountEl.querySelector('.flashcardCompleteAgain');
    const showButton = mountEl.querySelector('[data-flashcard-show]');
    const shuffleButton = mountEl.querySelector('[data-flashcard-shuffle]');
    const resetButton = mountEl.querySelector('[data-flashcard-reset]');
    const studyAgainButton = mountEl.querySelector('[data-flashcard-study-again]');
    const markButtons = [...mountEl.querySelectorAll('[data-flashcard-mark]')];

    const resetSession = () => {
      queue = [...originalCards];
      flipped = false;
      knownIds.clear();
      againIds.clear();
      update();
    };

    const update = () => {
      const completed = knownIds.size;
      const complete = queue.length === 0;
      const card = queue[0];

      positionEl.textContent = complete ? 'Complete' : `${queue.length} left`;
      newEl.textContent = queue.length;
      knownEl.textContent = knownIds.size;
      againEl.textContent = againIds.size;
      progressTrack.setAttribute('aria-valuenow', String(completed));
      progressFill.style.width = `${(completed / originalCards.length) * 100}%`;

      completeEl.hidden = !complete;
      cardButton.hidden = complete;
      showButton.hidden = complete || flipped;
      shuffleButton.hidden = complete;
      studyAgainButton.hidden = !complete;
      completeKnownEl.textContent = knownIds.size;
      completeAgainEl.textContent = againIds.size;

      markButtons.forEach((button) => {
        button.hidden = complete || !flipped;
        button.disabled = complete || !flipped;
      });

      if (complete) return;

      cardButton.classList.toggle('is-flipped', flipped);
      cardButton.classList.toggle('is-known', knownIds.has(card.id));
      cardButton.classList.toggle('is-again', againIds.has(card.id));
      cardButton.setAttribute('aria-pressed', flipped ? 'true' : 'false');
      faceLabel.textContent = flipped
        ? (card.type === 'fillBlank' ? 'Answer' : 'Definition')
        : (card.type === 'fillBlank' ? 'Fill in the blank' : 'Key term');
      promptEl.textContent = flipped ? card.back : card.front;
      hintEl.textContent = flipped ? (card.hint || '') : 'Click the card or press Show Answer to check your answer.';
      hintEl.hidden = flipped ? !card.hint : false;
      tagMount.innerHTML = cardTags(card);
    };

    const showAnswer = () => {
      if (queue.length === 0 || flipped) return;
      flipped = true;
      update();
    };

    const mark = (value) => {
      if (!flipped || queue.length === 0) return;
      const [card] = queue;
      if (value === 'again') {
        againIds.add(card.id);
        queue = [...queue.slice(1), card];
      } else {
        knownIds.add(card.id);
        againIds.delete(card.id);
        queue = queue.slice(1);
      }
      flipped = false;
      update();
    };

    cardButton.addEventListener('click', showAnswer);
    showButton.addEventListener('click', showAnswer);
    markButtons.forEach((button) => {
      button.addEventListener('click', () => mark(button.dataset.flashcardMark));
    });
    shuffleButton.addEventListener('click', () => {
      queue = shuffleCards(queue);
      flipped = false;
      update();
    });
    resetButton.addEventListener('click', resetSession);
    studyAgainButton.addEventListener('click', resetSession);
    document.addEventListener('keydown', (event) => {
      if (!document.body.classList.contains('is-flashcard-mode') || isTypingTarget(event.target)) return;
      if (!flipped && [' ', 'Enter'].includes(event.key)) {
        event.preventDefault();
        showAnswer();
      } else if (flipped && event.key === '1') {
        event.preventDefault();
        mark('again');
      } else if (flipped && event.key === '2') {
        event.preventDefault();
        mark('know');
      }
    });

    update();
    return { mode: 'flashcards' };
  };
})();
