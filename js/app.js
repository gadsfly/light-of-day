/**
 * Light of Day — Tarot Reading Application
 * Pure vanilla JS, no dependencies.
 */

(function () {
  'use strict';

  // ═══════════════════════════════════════
  //  State
  // ═══════════════════════════════════════
  const state = {
    currentPage: 'home',
    singleCard: null,
    singleReversed: false,
    singleFlipped: false,
    threeCards: [],
    threeReversed: [],
    threeFlipped: [false, false, false],
    threeAllFlipped: false,
    isDrawing: false,
  };

  // ═══════════════════════════════════════
  //  Star Background
  // ═══════════════════════════════════════
  function createStars() {
    const container = document.getElementById('stars-container');
    if (!container) return;
    const count = Math.min(120, Math.floor(window.innerWidth * window.innerHeight / 8000));
    for (let i = 0; i < count; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      const size = Math.random() * 2.5 + 0.5;
      star.style.width = size + 'px';
      star.style.height = size + 'px';
      star.style.setProperty('--duration', (Math.random() * 4 + 2) + 's');
      star.style.setProperty('--max-opacity', (Math.random() * 0.6 + 0.2).toString());
      star.style.animationDelay = (Math.random() * 5) + 's';
      container.appendChild(star);
    }
  }

  // ═══════════════════════════════════════
  //  Navigation
  // ═══════════════════════════════════════
  function initNavigation() {
    // Nav links
    document.querySelectorAll('[data-page]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo(el.dataset.page);
        // Close mobile nav
        document.getElementById('nav-links')?.classList.remove('open');
      });
    });

    // Mobile hamburger
    document.getElementById('nav-toggle')?.addEventListener('click', () => {
      document.getElementById('nav-links')?.classList.toggle('open');
    });
  }

  function navigateTo(page) {
    state.currentPage = page;

    // Update nav active state
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.toggle('active', link.dataset.page === page);
    });

    // Show/hide pages
    document.querySelectorAll('.page').forEach(p => {
      p.classList.remove('active');
    });
    const target = document.getElementById('page-' + page);
    if (target) {
      target.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // ═══════════════════════════════════════
  //  Card Drawing Logic
  // ═══════════════════════════════════════
  function shuffleDeck() {
    // Fisher-Yates shuffle on a copy of the deck
    const deck = [...TAROT_DECK];
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
  }

  function isReversed() {
    return Math.random() < 0.3; // 30% chance of reversed
  }

  // ═══════════════════════════════════════
  //  Card Rendering
  // ═══════════════════════════════════════
  function renderCardFront(card) {
    const suitClass = card.suit ? 'suit-' + card.suit : 'suit-major';
    const suitColor = card.suit ? SUIT_META[card.suit].color : 'var(--gold)';
    const numeral = card.arcana === 'major' ? card.numeral : (ROMAN[card.numeral] || card.numeral);

    return `
      <div class="card-front-content ${suitClass}">
        <div class="card-numeral">${numeral}</div>
        <div class="card-symbol-large">${card.symbol}</div>
        <div class="card-name-display">${card.name}</div>
        <div class="card-keywords-display">${card.keywords.slice(0, 3).join(' · ')}</div>
        ${card.suit ? `<div class="card-suit-icon">${SUIT_META[card.suit].icon}</div>` : ''}
      </div>
    `;
  }

  function renderReadingResult(card, reversed, position) {
    const meaning = reversed ? card.reversed : card.upright;
    const orientLabel = reversed ? '⟲ Reversed' : '⟳ Upright';

    let html = '';
    if (position) {
      html += `<div class="position-title">${position}</div>`;
    }
    html += `
      <div class="result-card-name">${card.symbol} ${card.name}</div>
      <div class="result-orientation">${orientLabel}</div>
      <div class="result-keywords">
        ${card.keywords.map(k => `<span class="result-keyword">${k}</span>`).join('')}
      </div>
      <div class="result-meaning">${meaning}</div>
      <div class="result-element-info">
        ${card.element ? `Element: ${card.element}` : ''}
        ${card.zodiac ? ` · Ruled by: ${card.zodiac}` : ''}
        ${card.suit ? ` · Suit: ${SUIT_META[card.suit].name} (${SUIT_META[card.suit].theme})` : ''}
      </div>
    `;
    return html;
  }

  // ═══════════════════════════════════════
  //  Sparkle Effect
  // ═══════════════════════════════════════
  function createSparkle(element) {
    const rect = element.getBoundingClientRect();
    const sparkleContainer = document.createElement('div');
    sparkleContainer.className = 'sparkle';
    sparkleContainer.style.left = rect.left + 'px';
    sparkleContainer.style.top = rect.top + 'px';
    sparkleContainer.style.width = rect.width + 'px';
    sparkleContainer.style.height = rect.height + 'px';

    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'sparkle-particle';
      const angle = (Math.PI * 2 / 20) * i;
      const distance = 40 + Math.random() * 60;
      particle.style.left = '50%';
      particle.style.top = '50%';
      particle.style.setProperty('--tx', Math.cos(angle) * distance + 'px');
      particle.style.setProperty('--ty', Math.sin(angle) * distance + 'px');
      particle.style.animationDelay = (Math.random() * 0.2) + 's';
      sparkleContainer.appendChild(particle);
    }

    document.body.appendChild(sparkleContainer);
    setTimeout(() => sparkleContainer.remove(), 1200);
  }

  // ═══════════════════════════════════════
  //  Single Card Draw
  // ═══════════════════════════════════════
  function initSingleDraw() {
    const drawBtn = document.getElementById('draw-btn');
    const resetBtn = document.getElementById('reset-single-btn');
    const drawnCardArea = document.getElementById('drawn-card-area');
    const drawnCard = document.getElementById('drawn-card');
    const readingResult = document.getElementById('reading-result');
    const deckArea = document.getElementById('deck-area-single');
    const flipHint = document.getElementById('flip-hint');

    drawBtn?.addEventListener('click', async () => {
      if (state.isDrawing) return;
      state.isDrawing = true;

      // Reset
      drawnCard.classList.remove('flipped', 'reversed');
      drawnCardArea.style.display = 'none';
      readingResult.style.display = 'none';
      resetBtn.style.display = 'none';
      flipHint.style.display = '';
      state.singleFlipped = false;

      // Shuffle animation
      const deck = document.getElementById('card-deck-single');
      deck.classList.add('shuffling');
      await sleep(600);
      deck.classList.remove('shuffling');
      deck.classList.add('shuffling-2');
      await sleep(700);
      deck.classList.remove('shuffling-2');

      // Draw a card
      const shuffled = shuffleDeck();
      state.singleCard = shuffled[0];
      state.singleReversed = isReversed();

      // Render card front
      document.getElementById('card-front-single').innerHTML = renderCardFront(state.singleCard);

      // Hide deck, show drawn card
      drawBtn.style.display = 'none';
      deckArea.style.display = 'none';
      drawnCardArea.style.display = 'flex';
      drawnCard.classList.add('card-enter');

      if (state.singleReversed) {
        drawnCard.classList.add('reversed');
      }

      state.isDrawing = false;
    });

    // Card flip
    drawnCard?.addEventListener('click', () => {
      if (state.singleFlipped) return;
      state.singleFlipped = true;

      drawnCard.classList.add('flipped');
      createSparkle(drawnCard);
      flipHint.style.display = 'none';

      // Show reading after flip animation
      setTimeout(() => {
        readingResult.innerHTML = renderReadingResult(
          state.singleCard,
          state.singleReversed
        );
        readingResult.style.display = 'block';
        resetBtn.style.display = '';
      }, 900);
    });

    // Reset
    resetBtn?.addEventListener('click', () => {
      drawnCardArea.style.display = 'none';
      readingResult.style.display = 'none';
      resetBtn.style.display = 'none';
      const drawBtn = document.getElementById('draw-btn');
      drawBtn.style.display = '';
      document.getElementById('deck-area-single').style.display = '';
      drawnCard.classList.remove('flipped', 'reversed', 'card-enter');
      state.singleFlipped = false;
      state.singleCard = null;
    });
  }

  // ═══════════════════════════════════════
  //  Three Card Spread
  // ═══════════════════════════════════════
  function initThreeCardSpread() {
    const drawBtn = document.getElementById('draw-three-btn');
    const resetBtn = document.getElementById('reset-three-btn');
    const spreadContainer = document.getElementById('three-card-spread');
    const readingResult = document.getElementById('three-card-result');

    drawBtn?.addEventListener('click', async () => {
      if (state.isDrawing) return;
      state.isDrawing = true;

      // Reset
      spreadContainer.style.display = 'none';
      readingResult.style.display = 'none';
      resetBtn.style.display = 'none';
      state.threeFlipped = [false, false, false];
      state.threeAllFlipped = false;

      // Reset card classes
      spreadContainer.querySelectorAll('.tarot-card').forEach(card => {
        card.classList.remove('flipped', 'reversed');
      });

      await sleep(400);

      // Draw three cards
      const shuffled = shuffleDeck();
      state.threeCards = [shuffled[0], shuffled[1], shuffled[2]];
      state.threeReversed = [isReversed(), isReversed(), isReversed()];

      // Render card fronts
      const positions = spreadContainer.querySelectorAll('.spread-position');
      positions.forEach((pos, i) => {
        const frontEl = pos.querySelector('.card-front');
        frontEl.innerHTML = renderCardFront(state.threeCards[i]);

        const cardEl = pos.querySelector('.tarot-card');
        if (state.threeReversed[i]) {
          cardEl.classList.add('reversed');
        }
      });

      // Show spread
      drawBtn.style.display = 'none';
      spreadContainer.style.display = 'flex';
      state.isDrawing = false;
    });

    // Card flip (click individual cards)
    spreadContainer?.querySelectorAll('.tarot-card').forEach((cardEl, index) => {
      cardEl.addEventListener('click', () => {
        if (state.threeFlipped[index]) return;
        state.threeFlipped[index] = true;

        cardEl.classList.add('flipped');
        createSparkle(cardEl);

        // Check if all flipped
        if (state.threeFlipped.every(f => f) && !state.threeAllFlipped) {
          state.threeAllFlipped = true;
          setTimeout(() => showThreeCardReading(), 900);
        }
      });
    });

    function showThreeCardReading() {
      const positions = ['Past', 'Present', 'Future'];
      const html = `
        <div class="three-card-reading">
          ${state.threeCards.map((card, i) => `
            <div class="reading-position-result">
              ${renderReadingResult(card, state.threeReversed[i], positions[i])}
            </div>
          `).join('')}
        </div>
      `;
      readingResult.innerHTML = html;
      readingResult.style.display = 'block';
      resetBtn.style.display = '';
    }

    // Reset
    resetBtn?.addEventListener('click', () => {
      spreadContainer.style.display = 'none';
      readingResult.style.display = 'none';
      resetBtn.style.display = 'none';
      drawBtn.style.display = '';
      spreadContainer.querySelectorAll('.tarot-card').forEach(card => {
        card.classList.remove('flipped', 'reversed');
      });
      state.threeCards = [];
      state.threeFlipped = [false, false, false];
      state.threeAllFlipped = false;
    });
  }

  // ═══════════════════════════════════════
  //  Card Library
  // ═══════════════════════════════════════
  function initLibrary() {
    const grid = document.getElementById('library-grid');
    if (!grid) return;

    function renderLibrary(filter) {
      grid.innerHTML = '';

      const filtered = filter === 'all'
        ? TAROT_DECK
        : filter === 'major'
          ? TAROT_DECK.filter(c => c.arcana === 'major')
          : TAROT_DECK.filter(c => c.suit === filter);

      filtered.forEach((card, i) => {
        const suitClass = card.suit ? 'suit-' + card.suit : 'suit-major';
        const numeral = card.arcana === 'major' ? card.numeral : (ROMAN[card.numeral] || card.numeral);

        const div = document.createElement('div');
        div.className = 'library-card';
        div.style.animationDelay = (i * 30) + 'ms';
        div.innerHTML = `
          <div class="card-mini ${suitClass}">
            <div class="card-mini-numeral">${numeral}</div>
            <div class="card-mini-symbol">${card.symbol}</div>
            <div class="card-mini-name">${card.name}</div>
          </div>
        `;
        div.addEventListener('click', () => openCardModal(card));
        grid.appendChild(div);
      });
    }

    // Filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderLibrary(btn.dataset.filter);
      });
    });

    // Initial render
    renderLibrary('all');
  }

  // ═══════════════════════════════════════
  //  Card Detail Modal
  // ═══════════════════════════════════════
  function openCardModal(card) {
    const modal = document.getElementById('card-modal');
    const body = document.getElementById('modal-body');

    const numeral = card.arcana === 'major' ? card.numeral : (ROMAN[card.numeral] || card.numeral);

    body.innerHTML = `
      <div class="modal-card-header">
        <span class="modal-card-symbol">${card.symbol}</span>
        <div class="modal-card-name">${card.name}</div>
        <div class="modal-card-numeral">${numeral} ${card.suit ? '· ' + SUIT_META[card.suit].name : '· Major Arcana'}</div>
      </div>

      <div class="result-keywords" style="justify-content:center; margin-bottom:1.5rem;">
        ${card.keywords.map(k => `<span class="result-keyword">${k}</span>`).join('')}
      </div>

      <div class="modal-section">
        <div class="modal-section-title">⟳ Upright Meaning</div>
        <p>${card.upright}</p>
      </div>

      <div class="modal-section">
        <div class="modal-section-title">⟲ Reversed Meaning</div>
        <p>${card.reversed}</p>
      </div>

      <div class="modal-meta">
        ${card.element ? `<div class="modal-meta-item">Element: <span>${card.element}</span></div>` : ''}
        ${card.zodiac ? `<div class="modal-meta-item">Ruled by: <span>${card.zodiac}</span></div>` : ''}
        ${card.suit ? `<div class="modal-meta-item">Theme: <span>${SUIT_META[card.suit].theme}</span></div>` : ''}
      </div>
    `;

    modal.classList.add('active');
  }

  function initModal() {
    const modal = document.getElementById('card-modal');
    const closeBtn = document.getElementById('modal-close');
    const overlay = modal?.querySelector('.modal-overlay');

    closeBtn?.addEventListener('click', () => modal.classList.remove('active'));
    overlay?.addEventListener('click', () => modal.classList.remove('active'));

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal?.classList.contains('active')) {
        modal.classList.remove('active');
      }
    });
  }

  // ═══════════════════════════════════════
  //  Utilities
  // ═══════════════════════════════════════
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // ═══════════════════════════════════════
  //  Initialization
  // ═══════════════════════════════════════
  function init() {
    createStars();
    initNavigation();
    initSingleDraw();
    initThreeCardSpread();
    initLibrary();
    initModal();

    console.log('✦ Light of Day — Tarot Reading initialized');
    console.log(`  ${TAROT_DECK.length} cards loaded`);
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
