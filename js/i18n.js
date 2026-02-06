/* ═══════════════════════════════════════════════════
   Light of Day — Bilingual System (EN / 中文)
   ═══════════════════════════════════════════════════ */

const I18N = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.single': 'Draw',
    'nav.three': 'Three Cards',
    'nav.journal': 'Journal',
    'nav.library': 'Library',

    // Home page
    'home.subtitle': 'A quiet space to listen to yourself',
    'home.welcome': 'You don\'t need to have a question ready. Sometimes the cards just want to sit with you for a while. Take a breath. There\'s no rush here.',
    'home.begin': '✦ Draw a Card ✦',
    'home.feat1.title': 'Draw a Card',
    'home.feat1.desc': 'One card, one moment of clarity',
    'home.feat2.title': 'Three Cards',
    'home.feat2.desc': 'Where you\'ve been, where you are, where you\'re going',
    'home.feat3.title': 'Your Journal',
    'home.feat3.desc': 'A private space for your reflections',

    // Single draw
    'single.title': 'Draw a Card',
    'single.subtitle': 'Ask something, or simply see what comes',
    'single.placeholder': 'What\'s on your mind? (optional)',
    'single.draw': '✦ Shuffle & Draw ✦',
    'single.flip': '~ Tap the card to reveal ~',
    'single.again': '✦ Draw Again ✦',

    // Three cards
    'three.title': 'Past · Present · Future',
    'three.subtitle': 'Three cards to gently illuminate your path',
    'three.placeholder': 'What do you seek clarity on? (optional)',
    'three.draw': '✦ Shuffle & Draw Three ✦',
    'three.past': 'Past',
    'three.present': 'Present',
    'three.future': 'Future',
    'three.again': '✦ Draw Again ✦',

    // Reflection
    'reflect.placeholder': 'Whatever comes to mind... there are no wrong answers',
    'reflect.save': '💜 Save to Journal',
    'reflect.skip': 'Not right now',

    // Journal
    'journal.title': 'Your Journal',
    'journal.subtitle': 'Every reading is a conversation with yourself',
    'journal.empty': 'Your journal is waiting. Draw a card, and your story begins here.',
    'journal.first': '✦ Draw Your First Card ✦',
    'journal.clear': 'Clear All Entries',
    'journal.stat.readings': 'Readings',
    'journal.stat.reflections': 'Reflections',
    'journal.confirm_clear': 'This will delete all your journal entries. There\'s no undo. Continue?',

    // Library
    'library.title': 'Card Library',
    'library.subtitle': 'Explore the wisdom of all 78 cards',
    'library.all': 'All (78)',
    'library.major': 'Major Arcana',
    'library.wands': 'Wands',
    'library.cups': 'Cups',
    'library.swords': 'Swords',
    'library.pentacles': 'Pentacles',

    // Footer
    'footer.line1': 'The cards illuminate, but you choose the path.',
    'footer.line2': '© 2026 — Free & open source. Made with care.',

    // Reading result labels
    'result.upright': 'Upright',
    'result.reversed': 'Reversed ↺',
    'result.keywords': 'Keywords',
    'result.element': 'Element',
    'result.zodiac': 'Zodiac',

    // Modal
    'modal.upright': 'Upright Meaning',
    'modal.reversed': 'Reversed Meaning',
    'modal.keywords': 'Keywords',
    'modal.element': 'Element',
    'modal.zodiac': 'Zodiac',
    'modal.arcana': 'Arcana',

    // Toast
    'toast.saved': '💜 Saved to your journal',
    'toast.cleared': 'Journal cleared',
    'toast.copied': 'Reading copied',

    // Reflection questions (pool)
    'reflections': [
      'What caught your attention first about this card?',
      'Does this card remind you of anything in your life right now?',
      'If you could ask this card a question, what would it be?',
      'How does this card make you feel?',
      'What part of yourself does this card mirror?',
      'Is there something this card is asking you to let go of?',
      'What would it look like to embrace this card\'s message?',
      'If this card could speak, what would it say to you?',
      'What\'s one small thing this card is inviting you to do?',
      'Does this card feel familiar, or surprising?',
      'What truth might this card be gently pointing toward?',
      'If you met this card as a person, who would they be?',
    ],

    // Three-card reflections
    'reflections.three': [
      'Looking at all three cards together, what story do they tell?',
      'Which of these three positions feels the most true right now?',
      'What connects these three cards for you?',
      'Does the "future" card feel like something you\'re ready for?',
      'What would it mean to honor both your past and where you\'re going?',
      'If these three cards were a sentence, what would they say?',
      'Which card draws your eye the most? What does that tell you?',
      'Is there a card here you wish you could change? Why?',
    ],
  },

  zh: {
    // Navigation
    'nav.home': '首页',
    'nav.single': '抽牌',
    'nav.three': '三牌阵',
    'nav.journal': '日记',
    'nav.library': '牌库',

    // Home page
    'home.subtitle': '一个安静倾听自己的地方',
    'home.welcome': '不需要准备好问题。有时候，牌只是想陪你坐一会儿。深呼吸。这里没有急事。',
    'home.begin': '✦ 抽一张牌 ✦',
    'home.feat1.title': '抽一张牌',
    'home.feat1.desc': '一张牌，一个清明的瞬间',
    'home.feat2.title': '三牌阵',
    'home.feat2.desc': '过去、现在、未来',
    'home.feat3.title': '你的日记',
    'home.feat3.desc': '属于你的私人反思空间',

    // Single draw
    'single.title': '抽一张牌',
    'single.subtitle': '问一个问题，或者只是看看会来什么',
    'single.placeholder': '你在想什么？（可不填）',
    'single.draw': '✦ 洗牌并抽取 ✦',
    'single.flip': '~ 点击牌面以揭示 ~',
    'single.again': '✦ 再抽一次 ✦',

    // Three cards
    'three.title': '过去 · 现在 · 未来',
    'three.subtitle': '三张牌，轻柔照亮你的路',
    'three.placeholder': '你想看清什么？（可不填）',
    'three.draw': '✦ 洗牌并抽取三张 ✦',
    'three.past': '过去',
    'three.present': '现在',
    'three.future': '未来',
    'three.again': '✦ 再抽一次 ✦',

    // Reflection
    'reflect.placeholder': '想到什么写什么……没有标准答案',
    'reflect.save': '💜 保存到日记',
    'reflect.skip': '暂时不写',

    // Journal
    'journal.title': '你的日记',
    'journal.subtitle': '每次抽牌，都是和自己的一次对话',
    'journal.empty': '你的日记还是空白的。抽一张牌，你的故事就从这里开始。',
    'journal.first': '✦ 抽你的第一张牌 ✦',
    'journal.clear': '清除所有记录',
    'journal.stat.readings': '次抽牌',
    'journal.stat.reflections': '篇反思',
    'journal.confirm_clear': '这将删除你所有的日记条目，无法撤销。确定继续吗？',

    // Library
    'library.title': '牌库',
    'library.subtitle': '探索78张牌的全部智慧',
    'library.all': '全部 (78)',
    'library.major': '大阿卡纳',
    'library.wands': '权杖',
    'library.cups': '圣杯',
    'library.swords': '宝剑',
    'library.pentacles': '星币',

    // Footer
    'footer.line1': '牌会照亮，但路由你来选。',
    'footer.line2': '© 2026 — 免费开源，用心制作。',

    // Reading result labels
    'result.upright': '正位',
    'result.reversed': '逆位 ↺',
    'result.keywords': '关键词',
    'result.element': '元素',
    'result.zodiac': '星座',

    // Modal
    'modal.upright': '正位含义',
    'modal.reversed': '逆位含义',
    'modal.keywords': '关键词',
    'modal.element': '元素',
    'modal.zodiac': '星座',
    'modal.arcana': '牌组',

    // Toast
    'toast.saved': '💜 已保存到日记',
    'toast.cleared': '日记已清除',
    'toast.copied': '已复制抽牌结果',

    // Reflection questions (pool)
    'reflections': [
      '这张牌里，什么最先吸引了你的目光？',
      '这张牌让你想到了生活中的什么事吗？',
      '如果可以问这张牌一个问题，你会问什么？',
      '这张牌让你有什么感觉？',
      '在这张牌里，你看到了自己的哪一面？',
      '有没有什么东西，是这张牌在邀请你放下的？',
      '如果去拥抱这张牌的信息，会是什么样子？',
      '如果这张牌会说话，它会对你说什么？',
      '这张牌在提醒你做的一件小事，是什么？',
      '这张牌对你来说，是熟悉的，还是意外的？',
      '这张牌可能在温柔指向什么真相？',
      '如果这张牌是一个人，TA会是谁？',
    ],

    // Three-card reflections
    'reflections.three': [
      '把三张牌放在一起看，它们在讲什么故事？',
      '这三个位置里，哪一个此刻感觉最真实？',
      '这三张牌之间，有什么连接？',
      '"未来"这张牌，你觉得自己准备好了吗？',
      '如果同时尊重过去和未来，那意味着什么？',
      '如果这三张牌是一句话，它们会说什么？',
      '哪张牌最吸引你的目光？这说明了什么？',
      '有没有哪张牌你想换掉？为什么？',
    ],
  }
};

/* ── Translation Engine ── */
const i18n = {
  currentLang: 'en',

  init() {
    const saved = localStorage.getItem('lod_lang');
    if (saved && I18N[saved]) {
      this.currentLang = saved;
    }
    this.apply();
    this.updateHtmlLang();
  },

  toggle() {
    this.currentLang = this.currentLang === 'en' ? 'zh' : 'en';
    localStorage.setItem('lod_lang', this.currentLang);
    this.apply();
    this.updateHtmlLang();
    this.updateToggleButton();
  },

  apply() {
    // data-i18n text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = this.t(key);
      if (text) el.textContent = text;
    });

    // data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const text = this.t(key);
      if (text) el.placeholder = text;
    });
  },

  t(key) {
    const dict = I18N[this.currentLang];
    return dict ? dict[key] : null;
  },

  // Get a random reflection question for single card
  getReflection() {
    const pool = I18N[this.currentLang]['reflections'];
    return pool[Math.floor(Math.random() * pool.length)];
  },

  // Get a random reflection question for three-card spread
  getThreeReflection() {
    const pool = I18N[this.currentLang]['reflections.three'];
    return pool[Math.floor(Math.random() * pool.length)];
  },

  updateHtmlLang() {
    document.documentElement.setAttribute('data-lang', this.currentLang);
    document.documentElement.setAttribute('lang', this.currentLang === 'zh' ? 'zh-Hans' : 'en');
  },

  updateToggleButton() {
    const btn = document.getElementById('lang-toggle');
    if (!btn) return;
    const label = btn.querySelector('.lang-label');
    if (label) {
      label.textContent = this.currentLang === 'en' ? '中' : 'EN';
    }
    btn.title = this.currentLang === 'en' ? '切换中文' : 'Switch to English';
  }
};
