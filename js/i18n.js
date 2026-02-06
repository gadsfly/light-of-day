/* ═══════════════════════════════════════════════════
   Light of Day — Bilingual System (EN / 中文)
   ═══════════════════════════════════════════════════ */

const I18N = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.single': 'Draw',
    'nav.spreads': 'Spreads',
    'nav.journal': 'Journal',
    'nav.library': 'Library',

    // Home page
    'home.subtitle': 'A quiet space to listen to yourself',
    'home.welcome': 'You don\'t need to have a question ready. Sometimes the cards just want to sit with you for a while. Take a breath. There\'s no rush here.',
    'home.begin': '✦ Draw a Card ✦',
    'home.feat1.title': 'Draw a Card',
    'home.feat1.desc': 'One card, one moment of clarity',
    'home.feat2.title': 'Spreads',
    'home.feat2.desc': '10 unique spreads — love, self-discovery & more',
    'home.feat3.title': 'Your Journal',
    'home.feat3.desc': 'A private space for your reflections',

    // Single draw
    'single.title': 'Draw a Card',
    'single.subtitle': 'Ask something, or simply see what comes',
    'single.placeholder': 'What\'s on your mind? (optional)',
    'single.draw': '✦ Shuffle & Draw ✦',
    'single.flip': '~ Tap the card to reveal ~',
    'single.again': '✦ Draw Again ✦',

    // Spreads page
    'spreads.title': 'Choose a Spread',
    'spreads.subtitle': 'Each spread tells a different kind of story',
    'spreads.cat.all': 'All',
    'spreads.cat.love': '💗 Love',
    'spreads.cat.self': '🧘 Self',
    'spreads.cat.general': '✨ General',
    'spreads.cat.classic': '✝️ Classic',
    'spreads.placeholder': 'What\'s on your heart? (optional)',
    'spreads.draw': '✦ Shuffle & Draw ✦',
    'spreads.again': '✦ Draw Again ✦',
    'spreads.back': 'Back to spreads',
    'spreads.cards': 'cards',
    'spreads.card': 'card',
    'spreads.flip_all': '~ Tap each card to reveal ~',

    // Spread: Past Present Future
    'spread.ppf.name': 'Past · Present · Future',
    'spread.ppf.desc': 'The classic timeline — where you\'ve been, where you are, where you\'re going',
    'spread.ppf.pos1': 'Past',
    'spread.ppf.pos2': 'Present',
    'spread.ppf.pos3': 'Future',

    // Spread: Situation Action Outcome
    'spread.sao.name': 'Situation · Action · Outcome',
    'spread.sao.desc': 'What\'s happening, what to do, and where it leads',
    'spread.sao.pos1': 'Situation',
    'spread.sao.pos2': 'Action',
    'spread.sao.pos3': 'Outcome',

    // Spread: Yes or No
    'spread.yesno.name': 'Yes or No',
    'spread.yesno.desc': 'A simple question, one card\'s answer',
    'spread.yesno.pos1': 'The Answer',

    // Spread: Heart's Desire (love)
    'spread.hearts.name': 'Heart\'s Desire',
    'spread.hearts.desc': 'What your heart seeks, what stands in the way, and what to embrace',
    'spread.hearts.pos1': 'What You Seek',
    'spread.hearts.pos2': 'What Blocks You',
    'spread.hearts.pos3': 'What to Embrace',

    // Spread: Relationship Mirror (love)
    'spread.mirror.name': 'Relationship Mirror',
    'spread.mirror.desc': 'See both sides of a connection — you, them, the bond, and guidance',
    'spread.mirror.pos1': 'You',
    'spread.mirror.pos2': 'Them',
    'spread.mirror.pos3': 'The Bond',
    'spread.mirror.pos4': 'Advice',

    // Spread: Love Crossroads (love)
    'spread.crossroads.name': 'Love Crossroads',
    'spread.crossroads.desc': 'A deeper look at where love stands and where it may lead',
    'spread.crossroads.pos1': 'Your Feelings',
    'spread.crossroads.pos2': 'Their Feelings',
    'spread.crossroads.pos3': 'What Connects You',
    'spread.crossroads.pos4': 'Challenges',
    'spread.crossroads.pos5': 'Where It Leads',

    // Spread: Mind Body Spirit
    'spread.mbs.name': 'Mind · Body · Spirit',
    'spread.mbs.desc': 'Check in with all three parts of yourself',
    'spread.mbs.pos1': 'Mind',
    'spread.mbs.pos2': 'Body',
    'spread.mbs.pos3': 'Spirit',

    // Spread: Shadow Work
    'spread.shadow.name': 'Shadow Work',
    'spread.shadow.desc': 'What\'s hidden, why it hides, and how to bring it to light',
    'spread.shadow.pos1': 'What\'s Hidden',
    'spread.shadow.pos2': 'Why It Hides',
    'spread.shadow.pos3': 'How to Integrate',

    // Spread: Inner Compass
    'spread.compass.name': 'Inner Compass',
    'spread.compass.desc': 'Four directions of your inner landscape',
    'spread.compass.pos1': 'North — Wisdom',
    'spread.compass.pos2': 'East — Creativity',
    'spread.compass.pos3': 'South — Passion',
    'spread.compass.pos4': 'West — Emotion',

    // Spread: Celtic Cross
    'spread.celtic.name': 'Celtic Cross',
    'spread.celtic.desc': 'The classic 10-card deep dive — for when you\'re ready to go deeper',
    'spread.celtic.pos1': 'Present',
    'spread.celtic.pos2': 'Challenge',
    'spread.celtic.pos3': 'Foundation',
    'spread.celtic.pos4': 'Recent Past',
    'spread.celtic.pos5': 'Potential',
    'spread.celtic.pos6': 'Near Future',
    'spread.celtic.pos7': 'Your Attitude',
    'spread.celtic.pos8': 'External Influence',
    'spread.celtic.pos9': 'Hopes & Fears',
    'spread.celtic.pos10': 'Final Outcome',

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

    // Reflection questions — single card (pool)
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

    // Reflection questions — per spread
    'reflections.ppf': [
      'Looking at all three cards together, what story do they tell?',
      'Which position feels the most true right now?',
      'Does the "future" card feel like something you\'re ready for?',
      'If these three cards were a sentence, what would they say?',
    ],
    'reflections.sao': [
      'Does the suggested action feel right to you?',
      'What about the outcome surprises you — or doesn\'t?',
      'If you followed this advice, what would change?',
    ],
    'reflections.yesno': [
      'Does this answer match what you secretly hoped for?',
      'If the card said the opposite, how would you feel?',
      'What does your gut say — does the card confirm it?',
    ],
    'reflections.hearts': [
      'Is what you seek what you truly need?',
      'Can you name the block this card is pointing to?',
      'What would it feel like to fully embrace the third card\'s message?',
    ],
    'reflections.mirror': [
      'Which side of the mirror feels more familiar?',
      'Does the "bond" card surprise you?',
      'What would you say to the person across from you right now?',
      'How does the advice card make you feel?',
    ],
    'reflections.crossroads': [
      'Are your feelings and theirs more alike or different than you expected?',
      'What does the "challenge" card ask you to face?',
      'Does "where it leads" feel like a destination or a choice?',
    ],
    'reflections.mbs': [
      'Which of the three — mind, body, spirit — needs your attention most?',
      'Is there a disconnect between any of them?',
      'What small thing could bring them more into alignment?',
    ],
    'reflections.shadow': [
      'When you read "what\'s hidden," did something inside you flinch?',
      'Does the reason it hides make sense to you?',
      'What would integration look like in your daily life?',
    ],
    'reflections.compass': [
      'Which direction calls to you the loudest?',
      'Is there a direction you\'ve been neglecting?',
      'If you stood at the center of this compass, which way would you walk?',
    ],
    'reflections.celtic': [
      'With all ten cards laid out, what\'s the overall feeling?',
      'Which card surprised you the most?',
      'Does the final outcome feel earned or unexpected?',
      'What would you tell a friend if these were their cards?',
    ],
  },

  zh: {
    // Navigation
    'nav.home': '首页',
    'nav.single': '抽牌',
    'nav.spreads': '牌阵',
    'nav.journal': '日记',
    'nav.library': '牌库',

    // Home page
    'home.subtitle': '一个安静倾听自己的地方',
    'home.welcome': '不需要准备好问题。有时候，牌只是想陪你坐一会儿。深呼吸。这里没有急事。',
    'home.begin': '✦ 抽一张牌 ✦',
    'home.feat1.title': '抽一张牌',
    'home.feat1.desc': '一张牌，一个清明的瞬间',
    'home.feat2.title': '牌阵',
    'home.feat2.desc': '10种牌阵 — 爱情、自我探索 & 更多',
    'home.feat3.title': '你的日记',
    'home.feat3.desc': '属于你的私人反思空间',

    // Single draw
    'single.title': '抽一张牌',
    'single.subtitle': '问一个问题，或者只是看看会来什么',
    'single.placeholder': '你在想什么？（可不填）',
    'single.draw': '✦ 洗牌并抽取 ✦',
    'single.flip': '~ 点击牌面以揭示 ~',
    'single.again': '✦ 再抽一次 ✦',

    // Spreads page
    'spreads.title': '选择一个牌阵',
    'spreads.subtitle': '每种牌阵，讲述一个不同的故事',
    'spreads.cat.all': '全部',
    'spreads.cat.love': '💗 爱情',
    'spreads.cat.self': '🧘 自我',
    'spreads.cat.general': '✨ 通用',
    'spreads.cat.classic': '✝️ 经典',
    'spreads.placeholder': '你心里在想什么？（可不填）',
    'spreads.draw': '✦ 洗牌并抽取 ✦',
    'spreads.again': '✦ 再抽一次 ✦',
    'spreads.back': '返回牌阵列表',
    'spreads.cards': '张牌',
    'spreads.card': '张牌',
    'spreads.flip_all': '~ 点击每张牌以揭示 ~',

    // Spread: Past Present Future
    'spread.ppf.name': '过去 · 现在 · 未来',
    'spread.ppf.desc': '经典时间线 — 你来自哪里，你在哪里，你将去往何处',
    'spread.ppf.pos1': '过去',
    'spread.ppf.pos2': '现在',
    'spread.ppf.pos3': '未来',

    // Spread: Situation Action Outcome
    'spread.sao.name': '情境 · 行动 · 结果',
    'spread.sao.desc': '正在发生什么，该怎么做，以及它将通向哪里',
    'spread.sao.pos1': '情境',
    'spread.sao.pos2': '行动',
    'spread.sao.pos3': '结果',

    // Spread: Yes or No
    'spread.yesno.name': '是或否',
    'spread.yesno.desc': '一个简单的问题，一张牌的回答',
    'spread.yesno.pos1': '答案',

    // Spread: Heart's Desire (love)
    'spread.hearts.name': '心之所向',
    'spread.hearts.desc': '你的心在追寻什么，什么在阻碍你，以及该拥抱什么',
    'spread.hearts.pos1': '你追寻的',
    'spread.hearts.pos2': '阻碍你的',
    'spread.hearts.pos3': '该拥抱的',

    // Spread: Relationship Mirror (love)
    'spread.mirror.name': '关系之镜',
    'spread.mirror.desc': '看见一段关系的两面 — 你、TA、你们之间的纽带，以及建议',
    'spread.mirror.pos1': '你',
    'spread.mirror.pos2': 'TA',
    'spread.mirror.pos3': '纽带',
    'spread.mirror.pos4': '建议',

    // Spread: Love Crossroads (love)
    'spread.crossroads.name': '爱的十字路口',
    'spread.crossroads.desc': '更深入地了解爱情的位置和它可能的走向',
    'spread.crossroads.pos1': '你的感受',
    'spread.crossroads.pos2': 'TA的感受',
    'spread.crossroads.pos3': '连接你们的',
    'spread.crossroads.pos4': '挑战',
    'spread.crossroads.pos5': '通向何方',

    // Spread: Mind Body Spirit
    'spread.mbs.name': '心智 · 身体 · 灵魂',
    'spread.mbs.desc': '和自己的三个部分分别对话',
    'spread.mbs.pos1': '心智',
    'spread.mbs.pos2': '身体',
    'spread.mbs.pos3': '灵魂',

    // Spread: Shadow Work
    'spread.shadow.name': '阴影面探索',
    'spread.shadow.desc': '什么被隐藏了，为什么它躲藏，以及如何整合它',
    'spread.shadow.pos1': '被隐藏的',
    'spread.shadow.pos2': '它为何隐藏',
    'spread.shadow.pos3': '如何整合',

    // Spread: Inner Compass
    'spread.compass.name': '内心罗盘',
    'spread.compass.desc': '你内在风景的四个方向',
    'spread.compass.pos1': '北 — 智慧',
    'spread.compass.pos2': '东 — 创造力',
    'spread.compass.pos3': '南 — 热情',
    'spread.compass.pos4': '西 — 情感',

    // Spread: Celtic Cross
    'spread.celtic.name': '凯尔特十字',
    'spread.celtic.desc': '经典的10牌深度解读 — 当你准备好深入探索时',
    'spread.celtic.pos1': '现状',
    'spread.celtic.pos2': '挑战',
    'spread.celtic.pos3': '根基',
    'spread.celtic.pos4': '近过去',
    'spread.celtic.pos5': '潜力',
    'spread.celtic.pos6': '近未来',
    'spread.celtic.pos7': '你的态度',
    'spread.celtic.pos8': '外部影响',
    'spread.celtic.pos9': '希望与恐惧',
    'spread.celtic.pos10': '最终结果',

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

    // Reflection questions — single card
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

    // Reflection questions — per spread
    'reflections.ppf': [
      '把三张牌放在一起看，它们在讲什么故事？',
      '哪个位置此刻感觉最真实？',
      '"未来"那张牌，你觉得自己准备好了吗？',
      '如果这三张牌是一句话，它们会说什么？',
    ],
    'reflections.sao': [
      '建议的行动对你来说感觉对吗？',
      '结果有没有让你意外——或者完全在意料之中？',
      '如果你照着这个建议去做，会有什么改变？',
    ],
    'reflections.yesno': [
      '这个答案和你心里暗暗期望的一样吗？',
      '如果牌给出相反的答案，你会有什么感觉？',
      '你的直觉怎么说——牌有没有证实它？',
    ],
    'reflections.hearts': [
      '你追寻的东西，是你真正需要的吗？',
      '你能说出这张牌指向的那个阻碍是什么吗？',
      '完全拥抱第三张牌的信息，那会是什么感觉？',
    ],
    'reflections.mirror': [
      '镜子的哪一面让你觉得更熟悉？',
      '"纽带"那张牌有没有让你意外？',
      '此刻你想对镜子对面的人说什么？',
      '建议牌让你有什么感觉？',
    ],
    'reflections.crossroads': [
      '你和TA的感受，比你想象中更相似还是更不同？',
      '"挑战"牌要求你面对什么？',
      '"通向何方"那张牌，感觉像命运还是选择？',
    ],
    'reflections.mbs': [
      '心智、身体、灵魂——哪一个最需要你的关注？',
      '它们之间有没有什么脱节？',
      '什么小事能让它们更加协调？',
    ],
    'reflections.shadow': [
      '看到"被隐藏的"时，你心里有没有一丝颤抖？',
      '它隐藏的原因对你来说说得通吗？',
      '在日常生活中，整合它会是什么样子？',
    ],
    'reflections.compass': [
      '哪个方向对你的呼唤最响亮？',
      '有没有哪个方向你一直在忽视？',
      '如果你站在罗盘中心，你会走向哪里？',
    ],
    'reflections.celtic': [
      '十张牌铺开之后，整体感觉是什么？',
      '哪张牌最让你意外？',
      '最终结果感觉是水到渠成，还是出乎意料？',
      '如果这是朋友的牌，你会对TA说什么？',
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

  // Get a random reflection question for a spread (by reflectionKey)
  getSpreadReflection(reflectionKey) {
    const pool = I18N[this.currentLang][reflectionKey];
    if (!pool || pool.length === 0) return this.getReflection(); // fallback
    return pool[Math.floor(Math.random() * pool.length)];
  },

  // Legacy alias
  getThreeReflection() {
    return this.getSpreadReflection('reflections.ppf');
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
