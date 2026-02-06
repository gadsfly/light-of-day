/* ═══════════════════════════════════════════════════
   Light of Day — Main Application (v2)
   Theme toggle • Language toggle • Reflection prompts
   Journal integration • Reading history
   ═══════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  /* ──────────── Init ──────────── */
  i18n.init();
  i18n.updateToggleButton();
  initTheme();
  createStars();
  setupNavigation();
  setupSingleDraw();
  setupThreeCardDraw();
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
   THREE CARD SPREAD
   ═══════════════════════════════════════ */
function setupThreeCardDraw() {
  const drawBtn = document.getElementById('draw-three-btn');
  const spreadArea = document.getElementById('three-card-spread');
  const resultArea = document.getElementById('three-card-result');
  const resetBtn = document.getElementById('reset-three-btn');
  const reflectionArea = document.getElementById('reflection-area-three');
  const reflectionQuestion = document.getElementById('reflection-question-three');
  const reflectionInput = document.getElementById('reflection-input-three');
  const saveBtn = document.getElementById('save-reflection-three-btn');
  const skipBtn = document.getElementById('skip-reflection-three-btn');

  let drawnCards = [];
  let reversedStates = [];
  let flippedCount = 0;

  if (!drawBtn) return;

  drawBtn.addEventListener('click', () => {
    // Reset
    spreadArea.style.display = 'none';
    resultArea.style.display = 'none';
    reflectionArea.style.display = 'none';
    resetBtn.style.display = 'none';
    flippedCount = 0;

    // Pick 3 unique cards
    const shuffled = [...TAROT_DECK].sort(() => Math.random() - 0.5);
    drawnCards = shuffled.slice(0, 3);
    reversedStates = drawnCards.map(() => Math.random() < 0.3);

    // Build card fronts
    const positions = spreadArea.querySelectorAll('.spread-position');
    positions.forEach((pos, idx) => {
      const card = drawnCards[idx];
      const tarotCard = pos.querySelector('.tarot-card');
      const cardFront = pos.querySelector('.card-front');
      tarotCard.classList.remove('flipped', 'reversed');
      buildCardFront(cardFront, card);
      if (reversedStates[idx]) tarotCard.classList.add('reversed');

      // Remove old listener
      const newCard = tarotCard.cloneNode(true);
      tarotCard.parentNode.replaceChild(newCard, tarotCard);

      newCard.addEventListener('click', () => {
        if (newCard.classList.contains('flipped')) return;
        newCard.classList.add('flipped');
        createSparkles(newCard);
        flippedCount++;

        // All flipped? Show reading
        if (flippedCount === 3) {
          setTimeout(() => {
            renderThreeResult(resultArea, drawnCards, reversedStates);
            resultArea.style.display = 'block';

            setTimeout(() => {
              reflectionQuestion.textContent = i18n.getThreeReflection();
              reflectionInput.value = '';
              reflectionArea.style.display = 'block';
              resetBtn.style.display = 'inline-block';
            }, 400);
          }, 600);
        }
      });
    });

    drawBtn.style.display = 'none';
    spreadArea.style.display = 'flex';
  });

  // Save
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      const question = document.getElementById('question-input-three')?.value || '';
      journal.saveReading({
        type: 'three',
        question,
        cards: drawnCards.map((c, i) => ({ name: c.name, reversed: reversedStates[i] })),
        reflection: reflectionInput.value,
      });
      showToast(i18n.t('toast.saved'));
      reflectionArea.style.display = 'none';
    });
  }

  // Skip
  if (skipBtn) {
    skipBtn.addEventListener('click', () => {
      const question = document.getElementById('question-input-three')?.value || '';
      journal.saveReading({
        type: 'three',
        question,
        cards: drawnCards.map((c, i) => ({ name: c.name, reversed: reversedStates[i] })),
        reflection: '',
      });
      reflectionArea.style.display = 'none';
    });
  }

  // Reset
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      drawnCards = [];
      flippedCount = 0;
      spreadArea.style.display = 'none';
      resultArea.style.display = 'none';
      reflectionArea.style.display = 'none';
      resetBtn.style.display = 'none';
      drawBtn.style.display = 'inline-block';
    });
  }
}

function renderThreeResult(container, cards, reversedStates) {
  const posLabels = [
    i18n.t('three.past') || 'Past',
    i18n.t('three.present') || 'Present',
    i18n.t('three.future') || 'Future',
  ];

  container.innerHTML = '<div class="three-card-reading">' + cards.map((card, idx) => {
    const reversed = reversedStates[idx];
    const orientation = reversed
      ? (i18n.t('result.reversed') || 'Reversed ↺')
      : (i18n.t('result.upright') || 'Upright');
    const meaning = reversed ? card.reversed : card.upright;

    return `
      <div class="reading-position-result">
        <p class="position-title">${posLabels[idx]}</p>
        <h3 class="result-card-name">${card.name}</h3>
        <p class="result-orientation">${orientation}</p>
        <p class="result-meaning">${meaning}</p>
      </div>
    `;
  }).join('') + '</div>';
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
