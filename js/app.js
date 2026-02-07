/* ═══════════════════════════════════════════════════
   Light of Day — Main Application (v2)
   Theme toggle • Language toggle • Reflection prompts
   Journal integration • Reading history
   ═══════════════════════════════════════════════════ */

// ── AI Reading Config ──
// Set this to your deployed Cloudflare Worker URL
const AI_API_URL = ''; // e.g. 'https://light-of-day-api.yourname.workers.dev'

document.addEventListener('DOMContentLoaded', () => {
  /* ──────────── Init ──────────── */
  i18n.init();
  i18n.updateToggleButton();
  initTheme();
  createStars();
  setupNavigation();
  setupSingleDraw();
  setupSpreadPicker();
  setupUniversalSpread();
  setupQuizzes();
  setupAIReading();
  setupLibrary();
  setupModal();
  setupThemeToggle();
  setupLangToggle();
  setupJournalPage();
});

/* ═══════════════════════════════════════
   THEME
   ═══════════════════════════════════════ */
function initTheme() {
  const saved = localStorage.getItem('lod_theme');
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
  }
}

function setupThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dawn' ? 'night' : 'dawn';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('lod_theme', next);
  });
}

/* ═══════════════════════════════════════
   LANGUAGE TOGGLE
   ═══════════════════════════════════════ */
function setupLangToggle() {
  const btn = document.getElementById('lang-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    i18n.toggle();
    // Re-render dynamic content
    if (document.getElementById('page-journal').classList.contains('active')) {
      journal.renderPage();
    }
    if (document.getElementById('page-library').classList.contains('active')) {
      renderLibrary(currentFilter);
    }
    if (document.getElementById('page-quizzes').classList.contains('active')) {
      const picker = document.getElementById('quiz-picker');
      if (picker && picker.style.display !== 'none') renderQuizPicker();
    }
    // Re-render spread grid if visible
    if (document.getElementById('page-spreads').classList.contains('active')) {
      const spicker = document.getElementById('spread-picker');
      if (spicker && spicker.style.display !== 'none') renderSpreadGrid(currentSpreadCat);
    }
  });
}

/* ═══════════════════════════════════════
   STAR / AMBIENT BACKGROUND
   ═══════════════════════════════════════ */
function createStars() {
  const container = document.getElementById('stars-container');
  if (!container) return;
  const count = window.innerWidth < 768 ? 50 : 100;
  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 3 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.setProperty('--duration', `${Math.random() * 4 + 3}s`);
    star.style.setProperty('--max-opacity', `${Math.random() * 0.5 + 0.3}`);
    star.style.animationDelay = `${Math.random() * 5}s`;
    container.appendChild(star);
  }
}

/* ═══════════════════════════════════════
   NAVIGATION
   ═══════════════════════════════════════ */
function setupNavigation() {
  const navLinks = document.querySelectorAll('[data-page]');
  const pages = document.querySelectorAll('.page');
  const navToggle = document.getElementById('nav-toggle');
  const navLinksContainer = document.getElementById('nav-links');

  function navigateTo(pageId) {
    pages.forEach(p => p.classList.remove('active'));
    const target = document.getElementById(`page-${pageId}`);
    if (target) target.classList.add('active');

    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.querySelectorAll(`.nav-link[data-page="${pageId}"]`).forEach(l => l.classList.add('active'));

    // Close mobile menu
    if (navLinksContainer) navLinksContainer.classList.remove('open');

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Render journal when navigating to it
    if (pageId === 'journal') {
      journal.renderPage();
    }
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const pageId = link.dataset.page;
      if (pageId) navigateTo(pageId);
    });
  });

  // Mobile toggle
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navLinksContainer.classList.toggle('open');
    });
  }

  // Expose for external use
  window.navigateTo = navigateTo;
}

/* ═══════════════════════════════════════
   SINGLE CARD DRAW
   ═══════════════════════════════════════ */
function setupSingleDraw() {
  const drawBtn = document.getElementById('draw-btn');
  const drawnCardArea = document.getElementById('drawn-card-area');
  const drawnCard = document.getElementById('drawn-card');
  const cardFront = document.getElementById('card-front-single');
  const flipHint = document.getElementById('flip-hint');
  const readingResult = document.getElementById('reading-result');
  const resetBtn = document.getElementById('reset-single-btn');
  const deckArea = document.getElementById('deck-area-single');
  const deck = document.getElementById('card-deck-single');
  const reflectionArea = document.getElementById('reflection-area-single');
  const reflectionQuestion = document.getElementById('reflection-question-single');
  const reflectionInput = document.getElementById('reflection-input-single');
  const saveBtn = document.getElementById('save-reflection-single-btn');
  const skipBtn = document.getElementById('skip-reflection-single-btn');

  let currentCard = null;
  let isReversed = false;
  let isFlipped = false;
  let isDrawing = false;

  if (!drawBtn) return;

  drawBtn.addEventListener('click', () => {
    if (isDrawing) return;
    isDrawing = true;

    // Reset state
    drawnCardArea.style.display = 'none';
    readingResult.style.display = 'none';
    reflectionArea.style.display = 'none';
    resetBtn.style.display = 'none';
    drawnCard.classList.remove('flipped', 'reversed');
    isFlipped = false;

    // Pick a random card
    const shuffled = [...TAROT_DECK].sort(() => Math.random() - 0.5);
    currentCard = shuffled[0];
    isReversed = Math.random() < 0.3;

    // Shuffle animation
    deck.classList.add('shuffling');
    drawBtn.style.display = 'none';

    setTimeout(() => {
      deck.classList.remove('shuffling');
      deck.classList.add('shuffling-2');

      setTimeout(() => {
        deck.classList.remove('shuffling-2');
        deckArea.style.display = 'none';

        // Show the drawn card
        buildCardFront(cardFront, currentCard);
        drawnCardArea.style.display = 'flex';
        drawnCard.classList.add('card-enter');
        flipHint.style.display = 'block';
        if (isReversed) drawnCard.classList.add('reversed');

        isDrawing = false;
      }, 600);
    }, 500);
  });

  // Flip on click
  if (drawnCard) {
    drawnCard.addEventListener('click', () => {
      if (isFlipped || !currentCard) return;
      isFlipped = true;
      drawnCard.classList.add('flipped');
      flipHint.style.display = 'none';

      // Sparkle effect
      createSparkles(drawnCard);

      // Show result
      setTimeout(() => {
        renderSingleResult(readingResult, currentCard, isReversed);
        readingResult.style.display = 'block';

        // Show AI reading button
        showAIButton('single');

        // Show reflection prompt
        setTimeout(() => {
          reflectionQuestion.textContent = i18n.getReflection();
          reflectionInput.value = '';
          reflectionArea.style.display = 'block';
          resetBtn.style.display = 'inline-block';
        }, 400);
      }, 600);
    });
  }

  // Save reflection
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      const question = document.getElementById('question-input')?.value || '';
      journal.saveReading({
        type: 'single',
        question,
        cards: [{ name: currentCard.name, reversed: isReversed }],
        reflection: reflectionInput.value,
      });
      showToast(i18n.t('toast.saved'));
      reflectionArea.style.display = 'none';
    });
  }

  // Skip reflection (still save reading without reflection)
  if (skipBtn) {
    skipBtn.addEventListener('click', () => {
      const question = document.getElementById('question-input')?.value || '';
      journal.saveReading({
        type: 'single',
        question,
        cards: [{ name: currentCard.name, reversed: isReversed }],
        reflection: '',
      });
      reflectionArea.style.display = 'none';
    });
  }

  // Reset
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      currentCard = null;
      isFlipped = false;
      drawnCardArea.style.display = 'none';
      readingResult.style.display = 'none';
      reflectionArea.style.display = 'none';
      resetAIArea('single');
      resetBtn.style.display = 'none';
      deckArea.style.display = 'flex';
      drawBtn.style.display = 'inline-block';
      drawnCard.classList.remove('flipped', 'reversed', 'card-enter');
    });
  }
}

function renderSingleResult(container, card, reversed) {
  const orientation = reversed
    ? (i18n.t('result.reversed') || 'Reversed ↺')
    : (i18n.t('result.upright') || 'Upright');
  const meaning = reversed ? card.reversed : card.upright;
  const keywords = card.keywords || [];

  container.innerHTML = `
    <h3 class="result-card-name">${card.name}</h3>
    <p class="result-orientation">${orientation}</p>
    <div class="result-keywords">
      ${keywords.map(k => `<span class="result-keyword">${k}</span>`).join('')}
    </div>
    <p class="result-meaning">${meaning}</p>
    ${card.element || card.zodiac ? `
    <div class="result-element-info">
      ${card.element ? `${i18n.t('result.element') || 'Element'}: ${card.element}` : ''}
      ${card.element && card.zodiac ? ' · ' : ''}
      ${card.zodiac ? `${i18n.t('result.zodiac') || 'Zodiac'}: ${card.zodiac}` : ''}
    </div>` : ''}
  `;
}

/* ═══════════════════════════════════════
   SPREAD PICKER
   ═══════════════════════════════════════ */
let currentSpreadCat = 'all';

function setupSpreadPicker() {
  const catBtns = document.querySelectorAll('[data-spread-cat]');
  renderSpreadGrid('all');

  catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      catBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentSpreadCat = btn.dataset.spreadCat;
      renderSpreadGrid(currentSpreadCat);
    });
  });
}

function renderSpreadGrid(cat) {
  const grid = document.getElementById('spread-grid');
  if (!grid) return;

  const spreads = cat === 'all' ? SPREADS : SPREADS.filter(s => s.category === cat);
  const cardWord = i18n.t('spreads.cards') || 'cards';
  const cardWordSingle = i18n.t('spreads.card') || 'card';

  grid.innerHTML = spreads.map(s => {
    const name = i18n.t(s.nameKey) || s.id;
    const desc = i18n.t(s.descKey) || '';
    const count = s.cardCount;
    const countLabel = count === 1 ? `1 ${cardWordSingle}` : `${count} ${cardWord}`;

    return `
      <div class="spread-tile" data-spread-id="${s.id}">
        <span class="spread-tile-icon">${s.icon}</span>
        <h3 class="spread-tile-name">${name}</h3>
        <p class="spread-tile-desc">${desc}</p>
        <span class="spread-tile-count">${countLabel}</span>
      </div>
    `;
  }).join('');

  grid.querySelectorAll('.spread-tile').forEach(tile => {
    tile.addEventListener('click', () => {
      activateSpread(tile.dataset.spreadId);
    });
  });
}

/* ═══════════════════════════════════════
   UNIVERSAL SPREAD ENGINE
   ═══════════════════════════════════════ */
let activeSpread = null;
let spreadDrawnCards = [];
let spreadReversedStates = [];
let spreadFlippedCount = 0;

function activateSpread(spreadId) {
  activeSpread = getSpread(spreadId);
  if (!activeSpread) return;

  const picker = document.getElementById('spread-picker');
  const active = document.getElementById('spread-active');
  const title = document.getElementById('spread-active-title');
  const desc = document.getElementById('spread-active-desc');
  const drawBtn = document.getElementById('draw-spread-btn');
  const cardsArea = document.getElementById('spread-cards-area');
  const resultArea = document.getElementById('spread-result');
  const reflectionArea = document.getElementById('reflection-area-spread');
  const resetBtn = document.getElementById('reset-spread-btn');

  // Reset
  cardsArea.style.display = 'none';
  cardsArea.innerHTML = '';
  resultArea.style.display = 'none';
  reflectionArea.style.display = 'none';
  resetBtn.style.display = 'none';
  drawBtn.style.display = 'inline-block';

  title.textContent = `${activeSpread.icon} ${i18n.t(activeSpread.nameKey) || activeSpread.id}`;
  desc.textContent = i18n.t(activeSpread.descKey) || '';

  picker.style.display = 'none';
  active.style.display = 'block';

  // Apply i18n to newly visible elements
  i18n.apply();
}

function setupUniversalSpread() {
  const backBtn = document.getElementById('spread-back-btn');
  const drawBtn = document.getElementById('draw-spread-btn');
  const resetBtn = document.getElementById('reset-spread-btn');
  const saveBtn = document.getElementById('save-reflection-spread-btn');
  const skipBtn = document.getElementById('skip-reflection-spread-btn');

  if (!drawBtn) return;

  // Back to picker
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      document.getElementById('spread-picker').style.display = 'block';
      document.getElementById('spread-active').style.display = 'none';
      activeSpread = null;
    });
  }

  // Draw
  drawBtn.addEventListener('click', () => {
    if (!activeSpread) return;

    const cardsArea = document.getElementById('spread-cards-area');
    const resultArea = document.getElementById('spread-result');
    const reflectionArea = document.getElementById('reflection-area-spread');

    // Reset
    cardsArea.innerHTML = '';
    resultArea.style.display = 'none';
    reflectionArea.style.display = 'none';
    resetBtn.style.display = 'none';
    spreadFlippedCount = 0;

    // Pick N unique cards
    const shuffled = [...TAROT_DECK].sort(() => Math.random() - 0.5);
    spreadDrawnCards = shuffled.slice(0, activeSpread.cardCount);
    spreadReversedStates = spreadDrawnCards.map(() => Math.random() < 0.3);

    // Build card positions dynamically
    const isLargeSpread = activeSpread.cardCount > 5;
    cardsArea.className = `spread-cards-area spread-cards-${activeSpread.cardCount}`;

    activeSpread.positions.forEach((pos, idx) => {
      const card = spreadDrawnCards[idx];
      const reversed = spreadReversedStates[idx];
      const label = i18n.t(pos.labelKey) || `Position ${idx + 1}`;

      const posEl = document.createElement('div');
      posEl.className = 'spread-position';
      posEl.style.animationDelay = `${idx * 0.15}s`;

      posEl.innerHTML = `
        <h3 class="position-label">${label}</h3>
        <div class="tarot-card ${isLargeSpread ? 'tarot-card-sm' : ''} ${reversed ? 'reversed' : ''}">
          <div class="card-inner">
            <div class="card-front"></div>
            <div class="card-back">
              <div class="card-back-design${isLargeSpread ? ' mini' : ''}">
                <div class="card-back-pattern"></div>
                <span class="card-back-symbol">✦</span>
              </div>
            </div>
          </div>
        </div>
      `;

      const cardFront = posEl.querySelector('.card-front');
      buildCardFront(cardFront, card);

      const tarotCard = posEl.querySelector('.tarot-card');
      tarotCard.addEventListener('click', () => {
        if (tarotCard.classList.contains('flipped')) return;
        tarotCard.classList.add('flipped');
        createSparkles(tarotCard);
        spreadFlippedCount++;

        if (spreadFlippedCount === activeSpread.cardCount) {
          setTimeout(() => {
            renderSpreadResult(resultArea, activeSpread, spreadDrawnCards, spreadReversedStates);
            resultArea.style.display = 'block';

            // Show AI reading button
            showAIButton('spread');

            setTimeout(() => {
              const reflQ = document.getElementById('reflection-question-spread');
              const reflI = document.getElementById('reflection-input-spread');
              reflQ.textContent = i18n.getSpreadReflection(activeSpread.reflectionKeys);
              reflI.value = '';
              reflectionArea.style.display = 'block';
              resetBtn.style.display = 'inline-block';
            }, 400);
          }, 600);
        }
      });

      cardsArea.appendChild(posEl);
    });

    drawBtn.style.display = 'none';
    cardsArea.style.display = 'flex';
  });

  // Save
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      const question = document.getElementById('question-input-spread')?.value || '';
      const reflInput = document.getElementById('reflection-input-spread');
      journal.saveReading({
        type: activeSpread?.id || 'spread',
        question,
        cards: spreadDrawnCards.map((c, i) => ({ name: c.name, reversed: spreadReversedStates[i] })),
        reflection: reflInput.value,
      });
      showToast(i18n.t('toast.saved'));
      document.getElementById('reflection-area-spread').style.display = 'none';
    });
  }

  // Skip
  if (skipBtn) {
    skipBtn.addEventListener('click', () => {
      const question = document.getElementById('question-input-spread')?.value || '';
      journal.saveReading({
        type: activeSpread?.id || 'spread',
        question,
        cards: spreadDrawnCards.map((c, i) => ({ name: c.name, reversed: spreadReversedStates[i] })),
        reflection: '',
      });
      document.getElementById('reflection-area-spread').style.display = 'none';
    });
  }

  // Reset
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      spreadDrawnCards = [];
      spreadFlippedCount = 0;
      document.getElementById('spread-cards-area').style.display = 'none';
      document.getElementById('spread-cards-area').innerHTML = '';
      document.getElementById('spread-result').style.display = 'none';
      document.getElementById('reflection-area-spread').style.display = 'none';
      resetAIArea('spread');
      resetBtn.style.display = 'none';
      drawBtn.style.display = 'inline-block';
    });
  }
}

function renderSpreadResult(container, spread, cards, reversedStates) {
  const html = cards.map((card, idx) => {
    const reversed = reversedStates[idx];
    const orientation = reversed
      ? (i18n.t('result.reversed') || 'Reversed ↺')
      : (i18n.t('result.upright') || 'Upright');
    const meaning = reversed ? card.reversed : card.upright;
    const posLabel = i18n.t(spread.positions[idx].labelKey) || `Position ${idx + 1}`;

    return `
      <div class="reading-position-result">
        <p class="position-title">${posLabel}</p>
        <h3 class="result-card-name">${card.name}</h3>
        <p class="result-orientation">${orientation}</p>
        <p class="result-meaning">${meaning}</p>
      </div>
    `;
  }).join('');

  container.innerHTML = `<div class="three-card-reading">${html}</div>`;
}

/* ═══════════════════════════════════════
   PERSONALITY QUIZZES
   ═══════════════════════════════════════ */
let activeQuiz = null;
let quizAnswers = [];
let quizStep = 0;

function setupQuizzes() {
  const picker = document.getElementById('quiz-picker');
  if (!picker) return;

  renderQuizPicker();

  // Wire result buttons
  const shareBtn = document.getElementById('quiz-share-btn');
  const retryBtn = document.getElementById('quiz-retry-btn');
  const backBtn = document.getElementById('quiz-back-btn');

  if (shareBtn) shareBtn.addEventListener('click', copyQuizResult);
  if (retryBtn) retryBtn.addEventListener('click', () => {
    if (activeQuiz) startQuiz(activeQuiz.id);
  });
  if (backBtn) backBtn.addEventListener('click', resetQuizToMenu);
}

function renderQuizPicker() {
  const picker = document.getElementById('quiz-picker');
  if (!picker) return;

  picker.innerHTML = QUIZZES.map(q => {
    const name = i18n.t(q.nameKey) || q.id;
    const desc = i18n.t(q.descKey) || '';
    return `
      <div class="quiz-tile" data-quiz-id="${q.id}">
        <span class="quiz-tile-icon">${q.icon}</span>
        <h3 class="quiz-tile-name">${name}</h3>
        <p class="quiz-tile-desc">${desc}</p>
        <button class="btn-primary quiz-start-btn">${i18n.t('quiz.start') || 'Begin ✦'}</button>
      </div>
    `;
  }).join('');

  picker.querySelectorAll('.quiz-tile').forEach(tile => {
    tile.querySelector('.quiz-start-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      startQuiz(tile.dataset.quizId);
    });
  });
}

function startQuiz(quizId) {
  activeQuiz = getQuiz(quizId);
  if (!activeQuiz) return;

  quizAnswers = [];
  quizStep = 0;

  document.getElementById('quiz-picker').style.display = 'none';
  document.getElementById('quiz-result').style.display = 'none';
  document.getElementById('quiz-active').style.display = 'block';

  renderQuizStep();
}

function renderQuizStep() {
  if (!activeQuiz) return;
  const total = activeQuiz.questions.length;
  const q = activeQuiz.questions[quizStep];

  // Progress
  const bar = document.getElementById('quiz-progress-bar');
  const text = document.getElementById('quiz-progress-text');
  const pct = ((quizStep) / total) * 100;
  bar.style.width = `${pct}%`;
  const ofWord = i18n.t('quiz.q_of') || 'of';
  text.textContent = `${quizStep + 1} ${ofWord} ${total}`;

  // Question
  const qEl = document.getElementById('quiz-question');
  qEl.textContent = i18n.t(q.textKey) || `Question ${quizStep + 1}`;
  qEl.classList.remove('quiz-question-enter');
  void qEl.offsetWidth; // force reflow
  qEl.classList.add('quiz-question-enter');

  // Options
  const optEl = document.getElementById('quiz-options');
  optEl.innerHTML = q.options.map((opt, idx) => {
    const label = i18n.t(opt.textKey) || `Option ${idx + 1}`;
    return `<button class="quiz-option" data-opt="${idx}">${label}</button>`;
  }).join('');
  optEl.classList.remove('quiz-options-enter');
  void optEl.offsetWidth;
  optEl.classList.add('quiz-options-enter');

  optEl.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => selectQuizOption(parseInt(btn.dataset.opt)));
  });
}

function selectQuizOption(idx) {
  quizAnswers.push(idx);
  quizStep++;

  if (quizStep >= activeQuiz.questions.length) {
    showQuizResult();
  } else {
    renderQuizStep();
  }
}

function showQuizResult() {
  const resultKey = tallyScores(activeQuiz, quizAnswers);
  const result = activeQuiz.results[resultKey];
  if (!result) return;

  document.getElementById('quiz-active').style.display = 'none';
  const resultArea = document.getElementById('quiz-result');
  const card = document.getElementById('quiz-result-card');

  // Find the tarot card data if it exists
  const tarotCard = typeof TAROT_DECK !== 'undefined'
    ? TAROT_DECK.find(c => c.name === result.cardName)
    : null;

  const title = i18n.t(result.titleKey) || result.cardName;
  const desc = i18n.t(result.descKey) || '';
  const yourResult = i18n.t('quiz.your_result') || 'You are...';

  card.innerHTML = `
    <p class="quiz-result-label">${yourResult}</p>
    <div class="quiz-result-emoji">${result.emoji}</div>
    <h2 class="quiz-result-title">${title}</h2>
    <p class="quiz-result-desc">${desc}</p>
    ${tarotCard ? `<div class="quiz-result-card-art">
      <div class="tarot-card flipped">
        <div class="card-inner">
          <div class="card-front" id="quiz-card-front"></div>
          <div class="card-back"><div class="card-back-design"><div class="card-back-pattern"></div><span class="card-back-symbol">✦</span></div></div>
        </div>
      </div>
    </div>` : ''}
  `;

  // Build card art if available
  if (tarotCard) {
    const frontEl = document.getElementById('quiz-card-front');
    if (frontEl) buildCardFront(frontEl, tarotCard);
  }

  resultArea.style.display = 'block';
  resultArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function copyQuizResult() {
  if (!activeQuiz) return;
  const resultKey = tallyScores(activeQuiz, quizAnswers);
  const result = activeQuiz.results[resultKey];
  if (!result) return;

  const quizName = i18n.t(activeQuiz.nameKey) || activeQuiz.id;
  const cardTitle = i18n.t(result.titleKey) || result.cardName;

  let template = i18n.t('quiz.share_text') || 'I got "{card}" on Light of Day\'s quiz "{quiz}"! ✦';
  const text = template.replace('{card}', cardTitle).replace('{quiz}', quizName);

  navigator.clipboard.writeText(text).then(() => {
    showToast(i18n.t('quiz.copied') || '✨ Copied!');
  }).catch(() => {
    showToast(i18n.t('quiz.copied') || '✨ Copied!');
  });
}

function resetQuizToMenu() {
  activeQuiz = null;
  quizAnswers = [];
  quizStep = 0;
  document.getElementById('quiz-active').style.display = 'none';
  document.getElementById('quiz-result').style.display = 'none';
  document.getElementById('quiz-picker').style.display = 'block';
  renderQuizPicker(); // re-render for language changes
}

/* ═══════════════════════════════════════
   AI READING
   ═══════════════════════════════════════ */
function setupAIReading() {
  // Single draw AI button
  const singleBtn = document.getElementById('ai-reading-btn-single');
  if (singleBtn) {
    singleBtn.addEventListener('click', () => {
      if (!currentCard) return;
      const question = document.getElementById('question-input')?.value || '';
      const cards = [{
        name: currentCard.name,
        position: 'Single Draw',
        reversed: isReversed,
      }];
      requestAIReading('single', question, cards, 'Single Card Draw');
    });
  }

  // Spread AI button
  const spreadBtn = document.getElementById('ai-reading-btn-spread');
  if (spreadBtn) {
    spreadBtn.addEventListener('click', () => {
      if (!activeSpread || spreadDrawnCards.length === 0) return;
      const question = document.getElementById('question-input-spread')?.value || '';
      const cards = spreadDrawnCards.map((card, idx) => ({
        name: card.name,
        position: i18n.t(activeSpread.positions[idx].labelKey) || `Position ${idx + 1}`,
        reversed: spreadReversedStates[idx],
      }));
      const spreadName = i18n.t(activeSpread.nameKey) || activeSpread.id;
      requestAIReading('spread', question, cards, spreadName);
    });
  }
}

function showAIButton(context) {
  const area = document.getElementById(`ai-reading-area-${context}`);
  if (!area) return;
  // Only show if API is configured
  if (!AI_API_URL) return;
  area.style.display = 'block';
  // Reset sub-elements
  area.querySelector('.btn-ai').style.display = 'inline-flex';
  area.querySelector('.btn-ai').disabled = false;
  const loading = area.querySelector('.ai-reading-loading');
  const content = area.querySelector('.ai-reading-content');
  if (loading) loading.style.display = 'none';
  if (content) { content.style.display = 'none'; content.innerHTML = ''; }
}

function resetAIArea(context) {
  const area = document.getElementById(`ai-reading-area-${context}`);
  if (!area) return;
  area.style.display = 'none';
  const btn = area.querySelector('.btn-ai');
  if (btn) { btn.style.display = 'inline-flex'; btn.disabled = false; }
  const loading = area.querySelector('.ai-reading-loading');
  if (loading) loading.style.display = 'none';
  const content = area.querySelector('.ai-reading-content');
  if (content) { content.style.display = 'none'; content.innerHTML = ''; }
}

async function requestAIReading(context, question, cards, spreadType) {
  if (!AI_API_URL) return;

  const area = document.getElementById(`ai-reading-area-${context}`);
  const btn = area.querySelector('.btn-ai');
  const loading = document.getElementById(`ai-loading-${context}`);
  const content = document.getElementById(`ai-content-${context}`);

  // Show loading
  btn.disabled = true;
  btn.style.display = 'none';
  loading.style.display = 'flex';
  content.style.display = 'none';

  try {
    const resp = await fetch(`${AI_API_URL}/api/interpret`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        question,
        cards,
        spreadType,
        lang: i18n.currentLang,
      }),
    });

    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);

    const data = await resp.json();
    const interpretation = data.interpretation || '';

    loading.style.display = 'none';
    content.innerHTML = `
      <div class="ai-reading-text">${escapeHtml(interpretation)}</div>
      <div class="ai-reading-footer">${i18n.t('ai.powered') || 'AI interpretation • for reflection, not prediction'}</div>
    `;
    content.style.display = 'block';

  } catch (err) {
    console.error('AI reading error:', err);
    loading.style.display = 'none';
    content.innerHTML = `
      <div class="ai-reading-text ai-error">${i18n.t('ai.error') || 'The cards are quiet right now. Please try again.'}</div>
    `;
    content.style.display = 'block';
    // Re-show button so they can retry
    btn.style.display = 'inline-flex';
    btn.disabled = false;
  }
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/* ═══════════════════════════════════════
   CARD RENDERING HELPERS
   ═══════════════════════════════════════ */
function buildCardFront(el, card) {
  const suitClass = card.arcana === 'major' ? 'suit-major' : `suit-${card.suit}`;
  el.innerHTML = `
    <div class="card-front-content ${suitClass}">
      <span class="card-numeral">${ROMAN[card.numeral] || card.numeral || ''}</span>
      <span class="card-symbol-large">${card.symbol || '✦'}</span>
      <span class="card-name-display">${card.name}</span>
      <span class="card-keywords-display">${(card.keywords || []).slice(0, 3).join(' · ')}</span>
      <span class="card-suit-icon">${SUIT_META[card.suit]?.symbol || '✦'}</span>
    </div>
  `;
}

function createSparkles(element) {
  const rect = element.getBoundingClientRect();
  const container = document.createElement('div');
  container.className = 'sparkle';
  container.style.left = `${rect.left + rect.width / 2}px`;
  container.style.top = `${rect.top + rect.height / 2}px`;
  document.body.appendChild(container);

  for (let i = 0; i < 12; i++) {
    const particle = document.createElement('div');
    particle.className = 'sparkle-particle';
    const angle = (Math.PI * 2 * i) / 12;
    const distance = 40 + Math.random() * 40;
    particle.style.setProperty('--tx', `${Math.cos(angle) * distance}px`);
    particle.style.setProperty('--ty', `${Math.sin(angle) * distance}px`);
    particle.style.animationDelay = `${Math.random() * 0.2}s`;
    container.appendChild(particle);
  }

  setTimeout(() => container.remove(), 1000);
}

/* ═══════════════════════════════════════
   CARD LIBRARY
   ═══════════════════════════════════════ */
let currentFilter = 'all';

function setupLibrary() {
  const filters = document.querySelectorAll('.filter-btn');
  renderLibrary('all');

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(f => f.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderLibrary(currentFilter);
    });
  });
}

function renderLibrary(filter) {
  const grid = document.getElementById('library-grid');
  if (!grid) return;

  let cards = TAROT_DECK;
  if (filter === 'major') cards = TAROT_DECK.filter(c => c.arcana === 'major');
  else if (filter !== 'all') cards = TAROT_DECK.filter(c => c.suit === filter);

  grid.innerHTML = cards.map(card => {
    const suitClass = card.arcana === 'major' ? 'suit-major' : `suit-${card.suit}`;
    return `
      <div class="library-card" data-card-id="${card.id}">
        <div class="card-mini ${suitClass}">
          <span class="card-mini-numeral">${ROMAN[card.numeral] || card.numeral || ''}</span>
          <span class="card-mini-symbol">${card.symbol || '✦'}</span>
          <span class="card-mini-name">${card.name}</span>
        </div>
      </div>
    `;
  }).join('');

  // Click to open modal
  grid.querySelectorAll('.library-card').forEach(el => {
    el.addEventListener('click', () => {
      const cardId = parseInt(el.dataset.cardId);
      const card = TAROT_DECK.find(c => c.id === cardId);
      if (card) openModal(card);
    });
  });
}

/* ═══════════════════════════════════════
   MODAL
   ═══════════════════════════════════════ */
function setupModal() {
  const modal = document.getElementById('card-modal');
  const overlay = modal?.querySelector('.modal-overlay');
  const closeBtn = document.getElementById('modal-close');

  if (overlay) overlay.addEventListener('click', () => closeModal());
  if (closeBtn) closeBtn.addEventListener('click', () => closeModal());

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openModal(card) {
  const modal = document.getElementById('card-modal');
  const body = document.getElementById('modal-body');
  if (!modal || !body) return;

  const suitInfo = SUIT_META[card.suit];
  const arcanaLabel = card.arcana === 'major'
    ? (i18n.t('library.major') || 'Major Arcana')
    : `${suitInfo?.name || card.suit}`;

  body.innerHTML = `
    <div class="modal-card-header">
      <span class="modal-card-symbol">${card.symbol || '✦'}</span>
      <h2 class="modal-card-name">${card.name}</h2>
      <p class="modal-card-numeral">${ROMAN[card.numeral] || ''} · ${arcanaLabel}</p>
    </div>

    <div class="modal-section">
      <h3 class="modal-section-title">${i18n.t('modal.upright') || 'Upright Meaning'}</h3>
      <p>${card.upright}</p>
    </div>

    <div class="modal-section">
      <h3 class="modal-section-title">${i18n.t('modal.reversed') || 'Reversed Meaning'}</h3>
      <p>${card.reversed}</p>
    </div>

    <div class="modal-section">
      <h3 class="modal-section-title">${i18n.t('modal.keywords') || 'Keywords'}</h3>
      <div class="result-keywords">${(card.keywords || []).map(k => `<span class="result-keyword">${k}</span>`).join('')}</div>
    </div>

    <div class="modal-meta">
      ${card.element ? `<div class="modal-meta-item">${i18n.t('modal.element') || 'Element'}: <span>${card.element}</span></div>` : ''}
      ${card.zodiac ? `<div class="modal-meta-item">${i18n.t('modal.zodiac') || 'Zodiac'}: <span>${card.zodiac}</span></div>` : ''}
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('card-modal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
}

/* ═══════════════════════════════════════
   JOURNAL PAGE & CLEAR
   ═══════════════════════════════════════ */
function setupJournalPage() {
  const clearBtn = document.getElementById('clear-journal-btn');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      const msg = i18n.t('journal.confirm_clear') || 'Delete all journal entries? This cannot be undone.';
      if (confirm(msg)) {
        journal.clearAll();
        journal.renderPage();
        showToast(i18n.t('toast.cleared'));
      }
    });
  }
}

/* ═══════════════════════════════════════
   TOAST
   ═══════════════════════════════════════ */
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}
