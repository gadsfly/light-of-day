/* ═══════════════════════════════════════════════════
   Light of Day — Personality Quiz Definitions
   Pure data — all text uses i18n keys
   ═══════════════════════════════════════════════════ */

const QUIZZES = [
  /* ──────────────────────────────────────
     Quiz 1: Which Major Arcana Are You?
     ────────────────────────────────────── */
  {
    id: 'which-arcana',
    icon: '✦',
    nameKey: 'quiz.arcana.name',
    descKey: 'quiz.arcana.desc',
    coverKey: 'quiz.arcana.cover',   // tagline on the cover card
    questions: [
      {
        textKey: 'quiz.arcana.q1',
        options: [
          { textKey: 'quiz.arcana.q1a', scores: { fool: 3, star: 1 } },
          { textKey: 'quiz.arcana.q1b', scores: { hermit: 3, moon: 1 } },
          { textKey: 'quiz.arcana.q1c', scores: { magician: 2, empress: 2 } },
          { textKey: 'quiz.arcana.q1d', scores: { emperor: 3, justice: 1 } },
        ],
      },
      {
        textKey: 'quiz.arcana.q2',
        options: [
          { textKey: 'quiz.arcana.q2a', scores: { fool: 2, sun: 2 } },
          { textKey: 'quiz.arcana.q2b', scores: { hermit: 2, priestess: 2 } },
          { textKey: 'quiz.arcana.q2c', scores: { empress: 3, star: 1 } },
          { textKey: 'quiz.arcana.q2d', scores: { magician: 3, emperor: 1 } },
        ],
      },
      {
        textKey: 'quiz.arcana.q3',
        options: [
          { textKey: 'quiz.arcana.q3a', scores: { priestess: 3, moon: 1 } },
          { textKey: 'quiz.arcana.q3b', scores: { fool: 2, magician: 2 } },
          { textKey: 'quiz.arcana.q3c', scores: { emperor: 2, justice: 2 } },
          { textKey: 'quiz.arcana.q3d', scores: { empress: 2, sun: 2 } },
        ],
      },
      {
        textKey: 'quiz.arcana.q4',
        options: [
          { textKey: 'quiz.arcana.q4a', scores: { star: 3, sun: 1 } },
          { textKey: 'quiz.arcana.q4b', scores: { moon: 3, priestess: 1 } },
          { textKey: 'quiz.arcana.q4c', scores: { hermit: 3 } },
          { textKey: 'quiz.arcana.q4d', scores: { fool: 2, magician: 2 } },
        ],
      },
      {
        textKey: 'quiz.arcana.q5',
        options: [
          { textKey: 'quiz.arcana.q5a', scores: { magician: 3, emperor: 1 } },
          { textKey: 'quiz.arcana.q5b', scores: { empress: 3, star: 1 } },
          { textKey: 'quiz.arcana.q5c', scores: { hermit: 2, priestess: 2 } },
          { textKey: 'quiz.arcana.q5d', scores: { fool: 2, sun: 2 } },
        ],
      },
      {
        textKey: 'quiz.arcana.q6',
        options: [
          { textKey: 'quiz.arcana.q6a', scores: { sun: 3, fool: 1 } },
          { textKey: 'quiz.arcana.q6b', scores: { moon: 2, hermit: 2 } },
          { textKey: 'quiz.arcana.q6c', scores: { justice: 3, emperor: 1 } },
          { textKey: 'quiz.arcana.q6d', scores: { star: 2, empress: 2 } },
        ],
      },
      {
        textKey: 'quiz.arcana.q7',
        options: [
          { textKey: 'quiz.arcana.q7a', scores: { emperor: 3 } },
          { textKey: 'quiz.arcana.q7b', scores: { empress: 2, star: 2 } },
          { textKey: 'quiz.arcana.q7c', scores: { fool: 3, sun: 1 } },
          { textKey: 'quiz.arcana.q7d', scores: { priestess: 2, moon: 2 } },
        ],
      },
      {
        textKey: 'quiz.arcana.q8',
        options: [
          { textKey: 'quiz.arcana.q8a', scores: { magician: 3, emperor: 1 } },
          { textKey: 'quiz.arcana.q8b', scores: { hermit: 2, moon: 2 } },
          { textKey: 'quiz.arcana.q8c', scores: { empress: 3, sun: 1 } },
          { textKey: 'quiz.arcana.q8d', scores: { fool: 2, star: 2 } },
        ],
      },
    ],
    // Result archetypes — keyed by score slug
    results: {
      fool: {
        cardName: 'The Fool',
        titleKey: 'quiz.arcana.r.fool.title',
        descKey: 'quiz.arcana.r.fool.desc',
        emoji: '🌀',
      },
      magician: {
        cardName: 'The Magician',
        titleKey: 'quiz.arcana.r.magician.title',
        descKey: 'quiz.arcana.r.magician.desc',
        emoji: '✨',
      },
      priestess: {
        cardName: 'The High Priestess',
        titleKey: 'quiz.arcana.r.priestess.title',
        descKey: 'quiz.arcana.r.priestess.desc',
        emoji: '🌙',
      },
      empress: {
        cardName: 'The Empress',
        titleKey: 'quiz.arcana.r.empress.title',
        descKey: 'quiz.arcana.r.empress.desc',
        emoji: '🌿',
      },
      emperor: {
        cardName: 'The Emperor',
        titleKey: 'quiz.arcana.r.emperor.title',
        descKey: 'quiz.arcana.r.emperor.desc',
        emoji: '🏛️',
      },
      hermit: {
        cardName: 'The Hermit',
        titleKey: 'quiz.arcana.r.hermit.title',
        descKey: 'quiz.arcana.r.hermit.desc',
        emoji: '🏔️',
      },
      justice: {
        cardName: 'Justice',
        titleKey: 'quiz.arcana.r.justice.title',
        descKey: 'quiz.arcana.r.justice.desc',
        emoji: '⚖️',
      },
      moon: {
        cardName: 'The Moon',
        titleKey: 'quiz.arcana.r.moon.title',
        descKey: 'quiz.arcana.r.moon.desc',
        emoji: '🌊',
      },
      sun: {
        cardName: 'The Sun',
        titleKey: 'quiz.arcana.r.sun.title',
        descKey: 'quiz.arcana.r.sun.desc',
        emoji: '☀️',
      },
      star: {
        cardName: 'The Star',
        titleKey: 'quiz.arcana.r.star.title',
        descKey: 'quiz.arcana.r.star.desc',
        emoji: '⭐',
      },
    },
  },

  /* ──────────────────────────────────────
     Quiz 2: Your Tarot Love Style
     ────────────────────────────────────── */
  {
    id: 'love-style',
    icon: '💗',
    nameKey: 'quiz.love.name',
    descKey: 'quiz.love.desc',
    coverKey: 'quiz.love.cover',
    questions: [
      {
        textKey: 'quiz.love.q1',
        options: [
          { textKey: 'quiz.love.q1a', scores: { knight: 3 } },
          { textKey: 'quiz.love.q1b', scores: { cups2: 3 } },
          { textKey: 'quiz.love.q1c', scores: { star: 3 } },
          { textKey: 'quiz.love.q1d', scores: { devil: 2, lovers: 1 } },
        ],
      },
      {
        textKey: 'quiz.love.q2',
        options: [
          { textKey: 'quiz.love.q2a', scores: { lovers: 3 } },
          { textKey: 'quiz.love.q2b', scores: { empress: 3 } },
          { textKey: 'quiz.love.q2c', scores: { cups2: 2, star: 1 } },
          { textKey: 'quiz.love.q2d', scores: { knight: 2, devil: 1 } },
        ],
      },
      {
        textKey: 'quiz.love.q3',
        options: [
          { textKey: 'quiz.love.q3a', scores: { star: 2, lovers: 1 } },
          { textKey: 'quiz.love.q3b', scores: { devil: 3 } },
          { textKey: 'quiz.love.q3c', scores: { empress: 2, cups2: 1 } },
          { textKey: 'quiz.love.q3d', scores: { knight: 3 } },
        ],
      },
      {
        textKey: 'quiz.love.q4',
        options: [
          { textKey: 'quiz.love.q4a', scores: { cups2: 3 } },
          { textKey: 'quiz.love.q4b', scores: { devil: 2, knight: 1 } },
          { textKey: 'quiz.love.q4c', scores: { lovers: 2, empress: 1 } },
          { textKey: 'quiz.love.q4d', scores: { star: 3 } },
        ],
      },
      {
        textKey: 'quiz.love.q5',
        options: [
          { textKey: 'quiz.love.q5a', scores: { empress: 3 } },
          { textKey: 'quiz.love.q5b', scores: { knight: 2, devil: 1 } },
          { textKey: 'quiz.love.q5c', scores: { star: 2, cups2: 1 } },
          { textKey: 'quiz.love.q5d', scores: { lovers: 3 } },
        ],
      },
      {
        textKey: 'quiz.love.q6',
        options: [
          { textKey: 'quiz.love.q6a', scores: { lovers: 2, cups2: 1 } },
          { textKey: 'quiz.love.q6b', scores: { empress: 2, star: 1 } },
          { textKey: 'quiz.love.q6c', scores: { devil: 3 } },
          { textKey: 'quiz.love.q6d', scores: { knight: 3 } },
        ],
      },
    ],
    results: {
      knight: {
        cardName: 'Knight of Cups',
        titleKey: 'quiz.love.r.knight.title',
        descKey: 'quiz.love.r.knight.desc',
        emoji: '🐴',
      },
      cups2: {
        cardName: 'Two of Cups',
        titleKey: 'quiz.love.r.cups2.title',
        descKey: 'quiz.love.r.cups2.desc',
        emoji: '🤝',
      },
      lovers: {
        cardName: 'The Lovers',
        titleKey: 'quiz.love.r.lovers.title',
        descKey: 'quiz.love.r.lovers.desc',
        emoji: '💞',
      },
      empress: {
        cardName: 'The Empress',
        titleKey: 'quiz.love.r.empress.title',
        descKey: 'quiz.love.r.empress.desc',
        emoji: '🌹',
      },
      star: {
        cardName: 'The Star',
        titleKey: 'quiz.love.r.star.title',
        descKey: 'quiz.love.r.star.desc',
        emoji: '🌟',
      },
      devil: {
        cardName: 'The Devil',
        titleKey: 'quiz.love.r.devil.title',
        descKey: 'quiz.love.r.devil.desc',
        emoji: '🔥',
      },
    },
  },
];

/* ── Helpers ── */
function getQuiz(id) {
  return QUIZZES.find(q => q.id === id);
}

function tallyScores(quiz, answers) {
  const totals = {};
  // Initialize all result keys to 0
  Object.keys(quiz.results).forEach(k => { totals[k] = 0; });

  answers.forEach((optIdx, qIdx) => {
    const option = quiz.questions[qIdx]?.options[optIdx];
    if (!option) return;
    Object.entries(option.scores).forEach(([key, val]) => {
      totals[key] = (totals[key] || 0) + val;
    });
  });

  // Return the highest scoring result key
  return Object.entries(totals).sort((a, b) => b[1] - a[1])[0][0];
}
