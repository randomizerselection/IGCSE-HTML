window.IGCSE = window.IGCSE || {};

(() => {
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (m) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[m]));

  const normalizeAnswer = (value) => String(value ?? '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ');

  const isCorrectFillBlank = (value, accepted = []) => {
    const normalized = normalizeAnswer(value);
    return accepted.some((answer) => normalizeAnswer(answer) === normalized);
  };

  const questionMaxPoints = (question) => Number.isFinite(question.points) ? question.points : 1;

  const renderChoiceQuestion = (question, index) => `
    <fieldset class="quizQuestion" data-question-index="${index}">
      <legend>
        <span>Question ${index + 1}</span>
        <b>${esc(question.prompt)}</b>
      </legend>
      <div class="quizChoices">
        ${(question.choices || []).map((choice, choiceIndex) => `
          <label class="quizChoice">
            <input type="radio" name="q-${index}" value="${choiceIndex}" required />
            <span class="quizChoiceLetter">${String.fromCharCode(65 + choiceIndex)}</span>
            <span>${esc(choice)}</span>
          </label>
        `).join('')}
      </div>
      <div class="quizCorrection" hidden></div>
    </fieldset>
  `;

  const renderFillBlankQuestion = (question, index) => `
    <fieldset class="quizQuestion" data-question-index="${index}">
      <legend>
        <span>Question ${index + 1}</span>
        <b>${esc(question.prompt)}</b>
      </legend>
      <label class="quizBlank">
        <span>Answer</span>
        <input type="text" name="q-${index}" autocomplete="off" required />
      </label>
      <div class="quizCorrection" hidden></div>
    </fieldset>
  `;

  const renderQuestion = (question, index) => {
    if (question.type === 'fillBlank') return renderFillBlankQuestion(question, index);
    return renderChoiceQuestion(question, index);
  };

  const choiceAnswerText = (question) => question.choices?.[question.answer] || '';
  const acceptedAnswerText = (question) => {
    if (question.type === 'fillBlank') return (question.acceptedAnswers || []).join(' / ');
    return choiceAnswerText(question);
  };

  const readStudentAnswer = (form, question, index) => {
    const fieldName = `q-${index}`;
    if (question.type === 'fillBlank') return form.elements[fieldName]?.value || '';
    const checked = form.querySelector(`input[name="${fieldName}"]:checked`);
    return checked ? Number(checked.value) : null;
  };

  const gradeQuestion = (question, answer) => {
    const maxPoints = questionMaxPoints(question);
    const correct = question.type === 'fillBlank'
      ? isCorrectFillBlank(answer, question.acceptedAnswers || [])
      : Number(answer) === Number(question.answer);

    return {
      id: question.id || '',
      type: question.type || 'multipleChoice',
      prompt: question.prompt || '',
      studentAnswer: question.type === 'multipleChoice'
        ? (question.choices?.[answer] || '')
        : String(answer || ''),
      correctAnswer: acceptedAnswerText(question),
      correct,
      points: correct ? maxPoints : 0,
      maxPoints,
      explanation: question.explanation || '',
    };
  };

  const gradeQuiz = (form, questions) => {
    const responses = questions.map((question, index) => {
      const answer = readStudentAnswer(form, question, index);
      return gradeQuestion(question, answer);
    });
    const score = responses.reduce((sum, response) => sum + response.points, 0);
    const maxScore = responses.reduce((sum, response) => sum + response.maxPoints, 0);
    return {
      responses,
      score,
      maxScore,
      percentage: maxScore ? Math.round((score / maxScore) * 100) : 0,
    };
  };

  const applyCorrections = (form, questions, responses) => {
    questions.forEach((question, index) => {
      const response = responses[index];
      const fieldset = form.querySelector(`[data-question-index="${index}"]`);
      const correction = fieldset?.querySelector('.quizCorrection');
      if (!fieldset || !correction) return;

      fieldset.classList.toggle('is-correct', response.correct);
      fieldset.classList.toggle('is-incorrect', !response.correct);
      fieldset.querySelectorAll('.quizChoice').forEach((label) => {
        const input = label.querySelector('input');
        const isAnswer = Number(input?.value) === Number(question.answer);
        const isSelected = input?.checked;
        label.classList.toggle('is-answer', isAnswer);
        label.classList.toggle('is-selected', Boolean(isSelected));
      });

      correction.hidden = false;
      correction.innerHTML = `
        <b>${response.correct ? 'Correct' : 'Correct answer'}: ${esc(response.correctAnswer)}</b>
        ${response.explanation ? `<p>${esc(response.explanation)}</p>` : ''}
      `;
    });
  };

  const createPayload = (lesson, quiz, student, result) => ({
    attemptId: `${quiz.id || lesson.meta?.code || 'quiz'}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    submittedAt: new Date().toISOString(),
    lesson: {
      code: lesson.meta?.code || '',
      title: lesson.meta?.lessonLabel || lesson.meta?.title || '',
      unit: lesson.meta?.unit || '',
    },
    quiz: {
      id: quiz.id || '',
      version: quiz.version || '',
      title: quiz.title || '',
    },
    student,
    score: result.score,
    maxScore: result.maxScore,
    percentage: result.percentage,
    responses: result.responses,
  });

  async function submitPayload(payload) {
    const config = window.IGCSE.quizConfig || {};
    if (!config.submissionEnabled || !config.submitEndpoint) {
      return { state: 'disabled' };
    }

    const response = await fetch(config.submitEndpoint, {
      method: 'POST',
      mode: 'cors',
      credentials: 'omit',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error(`Submission failed with HTTP ${response.status}`);
    return { state: 'submitted' };
  }

  const setStatus = (statusEl, state, message) => {
    statusEl.className = `quizSubmitStatus is-${state}`;
    statusEl.textContent = message;
  };

  IGCSE.mountQuizLesson = function mountQuizLesson(lesson, quiz, mountEl = document.getElementById('deck')) {
    const meta = lesson?.meta || {};
    const questions = Array.isArray(quiz?.questions) ? quiz.questions : [];
    document.body.classList.add('is-quiz-mode');
    document.body.classList.remove('is-handout-mode');
    if (meta.title) document.title = `${meta.lessonLabel || meta.title} - Quiz`;

    if (!questions.length) {
      mountEl.className = 'quizDeck';
      mountEl.removeAttribute('aria-live');
      mountEl.innerHTML = `
        <section class="quizShell">
          <header class="quizHero">
            <div class="quizKicker">${esc(meta.unit || meta.courseLabel || 'Cambridge IGCSE Economics 0455')}</div>
            <h1>${esc(meta.lessonLabel || meta.title || 'Lesson quiz')}</h1>
            <p>This lesson does not yet have a quiz.</p>
          </header>
        </section>
      `;
      return { mode: 'quiz' };
    }

    mountEl.className = 'quizDeck';
    mountEl.removeAttribute('aria-live');
    mountEl.innerHTML = `
      <section class="quizShell">
        <header class="quizHero">
          <div class="quizKicker">${esc(meta.unit || meta.courseLabel || 'Cambridge IGCSE Economics 0455')}</div>
          <h1>${esc(quiz.title || `${meta.lessonLabel || meta.title || 'Lesson'} quiz`)}</h1>
          <p>${esc(quiz.description || 'Complete the quiz after reviewing the lesson. Your answers are marked automatically.')}</p>
        </header>

        <form class="quizForm">
          <section class="quizIdentity" aria-label="Student details">
            <label>
              <span>Name</span>
              <input name="studentName" type="text" autocomplete="name" required />
            </label>
            <label>
              <span>Class</span>
              <input name="studentClass" type="text" autocomplete="off" required />
            </label>
          </section>

          <section class="quizQuestions" aria-label="Quiz questions">
            ${questions.map(renderQuestion).join('')}
          </section>

          <section class="quizActions">
            <button class="quizPrimaryButton" type="submit">Mark quiz</button>
            <button class="quizSecondaryButton" type="button" data-quiz-reset hidden>Try again</button>
          </section>

          <section class="quizResult" aria-live="polite" hidden>
            <div>
              <span>Score</span>
              <strong class="quizScore"></strong>
            </div>
            <p class="quizSubmitStatus"></p>
            <button class="quizSecondaryButton" type="button" data-quiz-retry hidden>Retry submission</button>
          </section>
        </form>
      </section>
    `;

    const form = mountEl.querySelector('.quizForm');
    const resultEl = mountEl.querySelector('.quizResult');
    const scoreEl = mountEl.querySelector('.quizScore');
    const statusEl = mountEl.querySelector('.quizSubmitStatus');
    const retryButton = mountEl.querySelector('[data-quiz-retry]');
    const resetButton = mountEl.querySelector('[data-quiz-reset]');
    let lastPayload = null;

    const runSubmission = async () => {
      if (!lastPayload) return;
      retryButton.hidden = true;
      setStatus(statusEl, 'pending', 'Submitting score...');
      try {
        const submitResult = await submitPayload(lastPayload);
        if (submitResult.state === 'submitted') {
          setStatus(statusEl, 'submitted', 'Score submitted to your teacher.');
        } else {
          setStatus(statusEl, 'disabled', 'Score marked locally. No teacher submission endpoint is configured.');
        }
      } catch (_error) {
        setStatus(statusEl, 'failed', 'Submission failed - retry when your connection or endpoint is available.');
        retryButton.hidden = false;
      }
    };

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const result = gradeQuiz(form, questions);
      const student = {
        name: form.elements.studentName.value.trim(),
        className: form.elements.studentClass.value.trim(),
      };
      lastPayload = createPayload(lesson, quiz, student, result);

      applyCorrections(form, questions, result.responses);
      scoreEl.textContent = `${result.score}/${result.maxScore} (${result.percentage}%)`;
      resultEl.hidden = false;
      resetButton.hidden = false;
      await runSubmission();
      resultEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    });

    retryButton.addEventListener('click', runSubmission);
    resetButton.addEventListener('click', () => {
      form.reset();
      resultEl.hidden = true;
      retryButton.hidden = true;
      resetButton.hidden = true;
      lastPayload = null;
      form.querySelectorAll('.quizQuestion').forEach((question) => {
        question.classList.remove('is-correct', 'is-incorrect');
        question.querySelector('.quizCorrection').hidden = true;
        question.querySelectorAll('.quizChoice').forEach((choice) => {
          choice.classList.remove('is-answer', 'is-selected');
        });
      });
      mountEl.querySelector('.quizIdentity input')?.focus();
    });

    return { mode: 'quiz' };
  };
})();
