/* ═══════════════════════════════════════════════════
   Light of Day — Spread Definitions
   Each spread: id, icon, cardCount, positions[], reflections[]
   All text uses i18n keys (resolved at render time)
   ═══════════════════════════════════════════════════ */

const SPREADS = [
  /* ──────── GENERAL ──────── */
  {
    id: 'past-present-future',
    category: 'general',
    icon: '🕰️',
    cardCount: 3,
    // i18n keys
    nameKey: 'spread.ppf.name',
    descKey: 'spread.ppf.desc',
    positions: [
      { labelKey: 'spread.ppf.pos1' },
      { labelKey: 'spread.ppf.pos2' },
      { labelKey: 'spread.ppf.pos3' },
    ],
    reflectionKeys: 'reflections.ppf',
  },
  {
    id: 'situation-action-outcome',
    category: 'general',
    icon: '⚡',
    cardCount: 3,
    nameKey: 'spread.sao.name',
    descKey: 'spread.sao.desc',
    positions: [
      { labelKey: 'spread.sao.pos1' },
      { labelKey: 'spread.sao.pos2' },
      { labelKey: 'spread.sao.pos3' },
    ],
    reflectionKeys: 'reflections.sao',
  },
  {
    id: 'yes-or-no',
    category: 'general',
    icon: '✨',
    cardCount: 1,
    nameKey: 'spread.yesno.name',
    descKey: 'spread.yesno.desc',
    positions: [
      { labelKey: 'spread.yesno.pos1' },
    ],
    reflectionKeys: 'reflections.yesno',
  },

  /* ──────── LOVE ──────── */
  {
    id: 'hearts-desire',
    category: 'love',
    icon: '💗',
    cardCount: 3,
    nameKey: 'spread.hearts.name',
    descKey: 'spread.hearts.desc',
    positions: [
      { labelKey: 'spread.hearts.pos1' },
      { labelKey: 'spread.hearts.pos2' },
      { labelKey: 'spread.hearts.pos3' },
    ],
    reflectionKeys: 'reflections.hearts',
  },
  {
    id: 'relationship-mirror',
    category: 'love',
    icon: '🪞',
    cardCount: 4,
    nameKey: 'spread.mirror.name',
    descKey: 'spread.mirror.desc',
    positions: [
      { labelKey: 'spread.mirror.pos1' },
      { labelKey: 'spread.mirror.pos2' },
      { labelKey: 'spread.mirror.pos3' },
      { labelKey: 'spread.mirror.pos4' },
    ],
    reflectionKeys: 'reflections.mirror',
  },
  {
    id: 'love-crossroads',
    category: 'love',
    icon: '💞',
    cardCount: 5,
    nameKey: 'spread.crossroads.name',
    descKey: 'spread.crossroads.desc',
    positions: [
      { labelKey: 'spread.crossroads.pos1' },
      { labelKey: 'spread.crossroads.pos2' },
      { labelKey: 'spread.crossroads.pos3' },
      { labelKey: 'spread.crossroads.pos4' },
      { labelKey: 'spread.crossroads.pos5' },
    ],
    reflectionKeys: 'reflections.crossroads',
  },

  /* ──────── SELF ──────── */
  {
    id: 'mind-body-spirit',
    category: 'self',
    icon: '🧘',
    cardCount: 3,
    nameKey: 'spread.mbs.name',
    descKey: 'spread.mbs.desc',
    positions: [
      { labelKey: 'spread.mbs.pos1' },
      { labelKey: 'spread.mbs.pos2' },
      { labelKey: 'spread.mbs.pos3' },
    ],
    reflectionKeys: 'reflections.mbs',
  },
  {
    id: 'shadow-work',
    category: 'self',
    icon: '🌑',
    cardCount: 3,
    nameKey: 'spread.shadow.name',
    descKey: 'spread.shadow.desc',
    positions: [
      { labelKey: 'spread.shadow.pos1' },
      { labelKey: 'spread.shadow.pos2' },
      { labelKey: 'spread.shadow.pos3' },
    ],
    reflectionKeys: 'reflections.shadow',
  },
  {
    id: 'inner-compass',
    category: 'self',
    icon: '🧭',
    cardCount: 4,
    nameKey: 'spread.compass.name',
    descKey: 'spread.compass.desc',
    positions: [
      { labelKey: 'spread.compass.pos1' },
      { labelKey: 'spread.compass.pos2' },
      { labelKey: 'spread.compass.pos3' },
      { labelKey: 'spread.compass.pos4' },
    ],
    reflectionKeys: 'reflections.compass',
  },

  /* ──────── CLASSIC ──────── */
  {
    id: 'celtic-cross',
    category: 'classic',
    icon: '✝️',
    cardCount: 10,
    nameKey: 'spread.celtic.name',
    descKey: 'spread.celtic.desc',
    positions: [
      { labelKey: 'spread.celtic.pos1' },
      { labelKey: 'spread.celtic.pos2' },
      { labelKey: 'spread.celtic.pos3' },
      { labelKey: 'spread.celtic.pos4' },
      { labelKey: 'spread.celtic.pos5' },
      { labelKey: 'spread.celtic.pos6' },
      { labelKey: 'spread.celtic.pos7' },
      { labelKey: 'spread.celtic.pos8' },
      { labelKey: 'spread.celtic.pos9' },
      { labelKey: 'spread.celtic.pos10' },
    ],
    reflectionKeys: 'reflections.celtic',
  },
];

/* Quick lookup */
function getSpread(id) {
  return SPREADS.find(s => s.id === id);
}

function getSpreadsByCategory(cat) {
  return SPREADS.filter(s => s.category === cat);
}
