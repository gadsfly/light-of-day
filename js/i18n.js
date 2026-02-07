/* ═══════════════════════════════════════════════════
   Light of Day — Bilingual System (EN / 中文)
   ═══════════════════════════════════════════════════ */

const I18N = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.single': 'Draw',
    'nav.spreads': 'Spreads',
    'nav.quizzes': 'Quizzes',
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
    'home.feat3.title': 'Personality Quizzes',
    'home.feat3.desc': 'Which tarot card are you? Find out & share',
    'home.feat4.title': 'Your Journal',
    'home.feat4.desc': 'A private space for your reflections',

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

    // AI Reading
    'ai.get_reading': '✨ Get AI Interpretation',
    'ai.loading': 'The cards are speaking...',
    'ai.error': 'The cards are quiet right now. Please try again.',
    'ai.powered': 'Interpretation by AI • for reflection, not prediction',

    // Quiz UI
    'quiz.title': 'Personality Quizzes',
    'quiz.subtitle': 'Discover yourself through the cards',
    'quiz.start': 'Begin ✦',
    'quiz.share': '📋 Copy Result',
    'quiz.retry': '✦ Try Again ✦',
    'quiz.back': '← All Quizzes',
    'quiz.q_of': 'of',
    'quiz.your_result': 'You are...',
    'quiz.copied': '✨ Copied to clipboard!',
    'quiz.share_text': 'I got "{card}" on Light of Day\'s quiz "{quiz}"! ✦ lightofday.app',

    // Quiz 1: Which Major Arcana
    'quiz.arcana.name': 'Which Major Arcana Are You?',
    'quiz.arcana.desc': '8 questions to find the card that mirrors your soul',
    'quiz.arcana.cover': 'What archetype lives in you?',
    'quiz.arcana.q1': 'You have a completely free weekend. What calls to you?',
    'quiz.arcana.q1a': 'Something spontaneous — maybe a road trip with no plan',
    'quiz.arcana.q1b': 'A quiet day alone with a book, a walk, or just silence',
    'quiz.arcana.q1c': 'Working on a passion project — I lose track of time',
    'quiz.arcana.q1d': 'Organizing my space, catching up on goals, getting ahead',
    'quiz.arcana.q2': 'At a party, you\'re most likely to...',
    'quiz.arcana.q2a': 'Be the one dancing, telling stories, making everyone laugh',
    'quiz.arcana.q2b': 'Find a quiet corner and have one deep conversation',
    'quiz.arcana.q2c': 'Make sure everyone\'s comfortable and having a good time',
    'quiz.arcana.q2d': 'Be running the playlist or mixing drinks — I do things well',
    'quiz.arcana.q3': 'When you face a big decision, you tend to...',
    'quiz.arcana.q3a': 'Listen to my gut — logic can\'t solve everything',
    'quiz.arcana.q3b': 'Just go for it. I\'ll figure it out along the way',
    'quiz.arcana.q3c': 'Weigh the pros and cons, consult trusted people, decide firmly',
    'quiz.arcana.q3d': 'Ask: will this feel good to look back on?',
    'quiz.arcana.q4': 'It\'s late at night. You can\'t sleep. What\'s on your mind?',
    'quiz.arcana.q4a': 'Hopes and dreams — what could be possible if I just tried',
    'quiz.arcana.q4b': 'Something nameless — a mood, a memory, a half-formed feeling',
    'quiz.arcana.q4c': 'Life\'s bigger questions — purpose, meaning, solitude',
    'quiz.arcana.q4d': 'Tomorrow\'s plan. My mind is always building something',
    'quiz.arcana.q5': 'People come to you when they need...',
    'quiz.arcana.q5a': 'A solution. I\'m practical and I get things done',
    'quiz.arcana.q5b': 'Comfort and warmth — I hold space well',
    'quiz.arcana.q5c': 'Honesty. I\'ll say the thing no one else will',
    'quiz.arcana.q5d': 'A spark. I remind people that life can be fun',
    'quiz.arcana.q6': 'Which element feels most like home?',
    'quiz.arcana.q6a': 'Fire — warmth, energy, action',
    'quiz.arcana.q6b': 'Water — depth, intuition, emotion',
    'quiz.arcana.q6c': 'Air — clarity, truth, fairness',
    'quiz.arcana.q6d': 'Earth — growth, patience, beauty',
    'quiz.arcana.q7': 'Your biggest strength — and biggest challenge — is...',
    'quiz.arcana.q7a': 'My discipline. I hold it all together, sometimes too tightly',
    'quiz.arcana.q7b': 'My empathy. I feel everything, including what\'s not mine',
    'quiz.arcana.q7c': 'My freedom. I follow my heart, even when it scares people',
    'quiz.arcana.q7d': 'My perception. I see what others miss, but it can be lonely',
    'quiz.arcana.q8': 'If a wise old figure gave you a gift, you\'d want...',
    'quiz.arcana.q8a': 'A golden key — to unlock anything I set my mind to',
    'quiz.arcana.q8b': 'A lantern — to see clearly in the dark',
    'quiz.arcana.q8c': 'A garden — something alive that I can nurture',
    'quiz.arcana.q8d': 'A compass — to follow, even if the road is unmapped',

    // Quiz 1 Results
    'quiz.arcana.r.fool.title': 'The Fool — The Eternal Beginner',
    'quiz.arcana.r.fool.desc': 'You live for new starts, open roads, and the thrill of not knowing what\'s next. People admire your courage — and sometimes worry about you. But you know something they don\'t: the leap is the point.',
    'quiz.arcana.r.magician.title': 'The Magician — The Manifestor',
    'quiz.arcana.r.magician.desc': 'You\'re the one who turns ideas into reality. Focused, resourceful, and quietly magnetic. When you walk into a room, things start happening. Your superpower is making the impossible look easy.',
    'quiz.arcana.r.priestess.title': 'The High Priestess — The Intuitive',
    'quiz.arcana.r.priestess.desc': 'You know things before they happen. You hear what\'s unsaid, see what\'s hidden, and trust the quiet voice inside. In a noisy world, your stillness is your power.',
    'quiz.arcana.r.empress.title': 'The Empress — The Nurturer',
    'quiz.arcana.r.empress.desc': 'Warmth radiates from you. You make people feel safe, seen, and held — whether through cooking, creating, or just being present. Beauty and comfort are your love language.',
    'quiz.arcana.r.emperor.title': 'The Emperor — The Builder',
    'quiz.arcana.r.emperor.desc': 'You create structure where there\'s chaos. Reliable, determined, and strong — people look to you when things fall apart. You carry the weight well, but remember: even emperors need rest.',
    'quiz.arcana.r.hermit.title': 'The Hermit — The Seeker',
    'quiz.arcana.r.hermit.desc': 'Solitude isn\'t loneliness for you — it\'s where you find truth. You\'ve always felt a little different, a little deeper. Your wisdom comes from going inward when the world goes outward.',
    'quiz.arcana.r.justice.title': 'Justice — The Truth-Teller',
    'quiz.arcana.r.justice.desc': 'You have an unshakable moral compass. Fairness, honesty, and accountability matter deeply to you. People trust your judgment because you\'ve earned it — through thought, not impulse.',
    'quiz.arcana.r.moon.title': 'The Moon — The Dreamer',
    'quiz.arcana.r.moon.desc': 'You live between worlds — the real and the imagined, the said and the felt. Your inner life is rich, complex, maybe even a little haunted. Embrace the mystery. Not everything needs to make sense.',
    'quiz.arcana.r.sun.title': 'The Sun — The Radiant One',
    'quiz.arcana.r.sun.desc': 'You light up every room. Genuine, warm, and full of life — your joy is contagious. Even when life is hard, you find the light. The world needs your energy. Don\'t dim it.',
    'quiz.arcana.r.star.title': 'The Star — The Quiet Hope',
    'quiz.arcana.r.star.desc': 'After every storm, you\'re the one who looks up and says: "We\'ll be okay." You hold onto hope not because you\'re naive, but because you\'ve survived enough to know it\'s worth it.',

    // Quiz 2: Love Style
    'quiz.love.name': 'Your Tarot Love Style',
    'quiz.love.desc': 'How do you love? Let the cards tell you',
    'quiz.love.cover': 'What kind of lover are you?',
    'quiz.love.q1': 'When you first catch feelings for someone, you...',
    'quiz.love.q1a': 'Go all in — grand gestures, constant texting, heart on sleeve',
    'quiz.love.q1b': 'Want to know everything about them — deep talks, shared silence',
    'quiz.love.q1c': 'Take it slow — I protect my heart but dream quietly',
    'quiz.love.q1d': 'Feel pulled by intensity — the tension, the chemistry, the spark',
    'quiz.love.q2': 'Your ideal date night looks like...',
    'quiz.love.q2a': 'Stargazing, a long walk, or something that makes us both feel alive',
    'quiz.love.q2b': 'Cooking together, candles, good music — cozy and intimate',
    'quiz.love.q2c': 'A quiet café, sharing headphones, just being together',
    'quiz.love.q2d': 'Something adventurous — a new restaurant, a surprise, spontaneity',
    'quiz.love.q3': 'After a fight, you tend to...',
    'quiz.love.q3a': 'Need space first, then come back calmer and open',
    'quiz.love.q3b': 'Stew in it — I replay every word and feel everything intensely',
    'quiz.love.q3c': 'Reach out first. I hate distance. I\'d rather fix it than wait',
    'quiz.love.q3d': 'Say what I think, even if it\'s sharp. I value honesty over comfort',
    'quiz.love.q4': 'The love language that speaks loudest to you...',
    'quiz.love.q4a': 'Quality time — just being present together, no phones',
    'quiz.love.q4b': 'Physical touch — a hand on my back says more than words',
    'quiz.love.q4c': 'Words of affirmation — tell me what you feel',
    'quiz.love.q4d': 'Acts of devotion — show me through what you do',
    'quiz.love.q5': 'What scares you most in love?',
    'quiz.love.q5a': 'Losing myself — becoming so intertwined I forget who I am',
    'quiz.love.q5b': 'Boredom — when the passion fades into routine',
    'quiz.love.q5c': 'Being truly seen — and not being enough',
    'quiz.love.q5d': 'Choosing wrong — investing my heart in the wrong person',
    'quiz.love.q6': 'The song lyric that hits you hardest...',
    'quiz.love.q6a': '"I don\'t want to miss a thing" — I want closeness, always',
    'quiz.love.q6b': '"You make me feel like a natural woman" — tenderness is everything',
    'quiz.love.q6c': '"I can\'t help falling in love with you" — desire is gravitational',
    'quiz.love.q6d': '"Wherever you go, I\'ll follow" — I\'m ride-or-die',

    // Quiz 2 Results
    'quiz.love.r.knight.title': 'Knight of Cups — The Romantic Hero',
    'quiz.love.r.knight.desc': 'You love with your whole heart, no half-measures. Grand gestures, poetic words, and fearless devotion — that\'s your style. You\'d cross oceans for the right person. Just remember: the right person meets you halfway.',
    'quiz.love.r.cups2.title': 'Two of Cups — The Deep Connector',
    'quiz.love.r.cups2.desc': 'For you, love is about presence. You don\'t need fireworks — you need someone who really sees you. You build love through quiet moments, shared vulnerability, and the kind of intimacy that takes time.',
    'quiz.love.r.lovers.title': 'The Lovers — The All-or-Nothing',
    'quiz.love.r.lovers.desc': 'Love, for you, is a choice you make with your whole being. You crave a soulmate-level connection — someone who matches your depth. When you\'re in, you\'re in. Your love transforms people.',
    'quiz.love.r.empress.title': 'The Empress — The Tender Caretaker',
    'quiz.love.r.empress.desc': 'You love through warmth, comfort, and devotion. Your partner feels wrapped in safety with you. You nurture naturally — through food, touch, attention. Your love is a garden: steady, patient, and always in bloom.',
    'quiz.love.r.star.title': 'The Star — The Hopeful Heart',
    'quiz.love.r.star.desc': 'You\'ve been through some storms, but you still believe in love. You love gently, with hope and healing. You\'re the partner who says "take your time" and means it. Your love is a safe harbor.',
    'quiz.love.r.devil.title': 'The Devil — The Passionate One',
    'quiz.love.r.devil.desc': 'You love with intensity, chemistry, and fire. You\'re drawn to deep connection, magnetic tension — the kind that makes you lose yourself a little. It\'s dangerous and beautiful. Own it, but stay grounded.',

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
    'nav.quizzes': '测试',
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
    'home.feat3.title': '人格测试',
    'home.feat3.desc': '你是哪张塔罗牌？测一测并分享',
    'home.feat4.title': '你的日记',
    'home.feat4.desc': '属于你的私人反思空间',

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

    // AI Reading
    'ai.get_reading': '✨ AI 解读',
    'ai.loading': '牌正在说话……',
    'ai.error': '牌现在很安静。请稍后再试。',
    'ai.powered': 'AI 解读 • 仅供反思，非预测',

    // Quiz UI
    'quiz.title': '人格测试',
    'quiz.subtitle': '通过塔罗牌发现自己',
    'quiz.start': '开始 ✦',
    'quiz.share': '📋 复制结果',
    'quiz.retry': '✦ 再测一次 ✦',
    'quiz.back': '← 所有测试',
    'quiz.q_of': '/',
    'quiz.your_result': '你是……',
    'quiz.copied': '✨ 已复制到剪贴板！',
    'quiz.share_text': '我在「光之日」的「{quiz}」测试中得到了「{card}」！✦',

    // Quiz 1: Which Major Arcana
    'quiz.arcana.name': '你是哪张大阿卡纳？',
    'quiz.arcana.desc': '8个问题，找到与你灵魂共鸣的那张牌',
    'quiz.arcana.cover': '你心中住着哪个原型？',
    'quiz.arcana.q1': '完全自由的周末，你最想做什么？',
    'quiz.arcana.q1a': '来一场说走就走的旅行，没有计划',
    'quiz.arcana.q1b': '安静地独处——看书、散步、或只是享受沉默',
    'quiz.arcana.q1c': '投入一个热爱的项目——常常做着做着就忘了时间',
    'quiz.arcana.q1d': '整理房间、梳理目标、把事情提前安排好',
    'quiz.arcana.q2': '在聚会上，你最可能……',
    'quiz.arcana.q2a': '跳舞、讲故事、逮得每个人都开心',
    'quiz.arcana.q2b': '找个安静的角落，和一个人进行一场深入的对话',
    'quiz.arcana.q2c': '确保每个人都舒服自在，玩得开心',
    'quiz.arcana.q2d': '负责播放列表或调酒——我做事讲究品质',
    'quiz.arcana.q3': '面对重大决定时，你往往……',
    'quiz.arcana.q3a': '听从直觉——逻辑解决不了所有问题',
    'quiz.arcana.q3b': '直接行动。边走边想就好',
    'quiz.arcana.q3c': '权衡利弊，请教信任的人，然后坚定地做决定',
    'quiz.arcana.q3d': '问自己：回头看时，这个选择会让我愉快吗？',
    'quiz.arcana.q4': '深夜失眠，你在想什么？',
    'quiz.arcana.q4a': '希望和梦想——如果我勇敢试一试，会怎样呢',
    'quiz.arcana.q4b': '说不清的东西——一种情绪、一段记忆、一个还没成型的感觉',
    'quiz.arcana.q4c': '人生的大问题——意义、目的、孤独',
    'quiz.arcana.q4d': '明天的计划。我的大脑总在构建什么',
    'quiz.arcana.q5': '人们在需要什么的时候来找你？',
    'quiz.arcana.q5a': '解决方案。我务实，能把事情搞定',
    'quiz.arcana.q5b': '温暖和安慰——我能很好地包容',
    'quiz.arcana.q5c': '说实话。别人不敢说的，我会说',
    'quiz.arcana.q5d': '一点火花。我能提醒人们生活可以很有趣',
    'quiz.arcana.q6': '哪个元素最像家？',
    'quiz.arcana.q6a': '火——温暖、能量、行动',
    'quiz.arcana.q6b': '水——深度、直觉、情感',
    'quiz.arcana.q6c': '风——清晰、真相、公正',
    'quiz.arcana.q6d': '土——成长、耐心、美',
    'quiz.arcana.q7': '你最大的优势——也是最大的挑战——是……',
    'quiz.arcana.q7a': '我的自律。我把一切维持得井井有条，有时太紧了',
    'quiz.arcana.q7b': '我的共情。我感受一切，包括不属于我的情绪',
    'quiz.arcana.q7c': '我的自由。我跟随内心，即使这让别人担心',
    'quiz.arcana.q7d': '我的洞察力。我看到别人看不到的，但有时会孤独',
    'quiz.arcana.q8': '如果一位智者给你一件礼物，你想要……',
    'quiz.arcana.q8a': '一把金钥匙——打开我想要的一切',
    'quiz.arcana.q8b': '一盏灯笼——在黑暗中看清一切',
    'quiz.arcana.q8c': '一座花园——活生生的、可以用心培育的',
    'quiz.arcana.q8d': '一个罗盘——即使路未知，也跟着它走',

    // Quiz 1 Results
    'quiz.arcana.r.fool.title': '愚人 — 永远的初学者',
    'quiz.arcana.r.fool.desc': '你为新的开始而活，为未知的兴奋而叹。人们欣赏你的勇气——有时也为你担心。但你知道一个他们不懂的秘密：纵身一跃，本身就是意义。',
    'quiz.arcana.r.magician.title': '魔术师 — 化梦为实的人',
    'quiz.arcana.r.magician.desc': '你是那个把想法变成现实的人。专注、足智多谋、平静中带着磁场。你走进房间，事情就开始发生。你的超能力是让不可能看起来毫不费力。',
    'quiz.arcana.r.priestess.title': '女祖司 — 直觉者',
    'quiz.arcana.r.priestess.desc': '你在事情发生之前就能感知到它。你听到未说出口的，看到被隐藏的，信任内心那个安静的声音。在喧嚣的世界里，你的静谧就是你的力量。',
    'quiz.arcana.r.empress.title': '皇后 — 滋养者',
    'quiz.arcana.r.empress.desc': '温暖从你身上散发出来。你让人感到安全、被看见、被托住——无论是通过烹饪、创作，还是只是在场。美与温暖是你的爱的语言。',
    'quiz.arcana.r.emperor.title': '皇帝 — 建设者',
    'quiz.arcana.r.emperor.desc': '你在混乱中创造秩序。可靠、坚定、强大——事情崩溃时人们会望向你。你能背负重担，但记住：即使是皇帝也需要休息。',
    'quiz.arcana.r.hermit.title': '隐士 — 求道者',
    'quiz.arcana.r.hermit.desc': '对你来说，独处不是孤独——而是发现真理的地方。你一直觉得自己有点不同，有点更深。你的智慧来自当世界向外时，你向内。',
    'quiz.arcana.r.justice.title': '正义 — 说真话的人',
    'quiz.arcana.r.justice.desc': '你有不可动摇的道德罗盘。公平、诚实、担当对你来说至关重要。人们信任你的判断，因为你的判断来自思考，而不是冲动。',
    'quiz.arcana.r.moon.title': '月亮 — 梦想家',
    'quiz.arcana.r.moon.desc': '你生活在两个世界之间——现实与想象、说出的与感受到的。你的内心世界丰富、复杂，甚至有点神秘。拥抱这种神秘感。不是所有事情都需要答案。',
    'quiz.arcana.r.sun.title': '太阳 — 闪耀的人',
    'quiz.arcana.r.sun.desc': '你照亮每一个房间。真诚、温暖、充满生命力——你的快乐具有感染力。即使生活艰难，你也能找到光。世界需要你的能量。不要让它暗淡。',
    'quiz.arcana.r.star.title': '星星 — 安静的希望',
    'quiz.arcana.r.star.desc': '每次暴风雨之后，你都是那个抬头说“会好的”的人。你持有希望不是因为天真，而是因为你经历过足够多，知道希望值得。',

    // Quiz 2: Love Style
    'quiz.love.name': '你的塔罗爱情风格',
    'quiz.love.desc': '你是怎样爱的？让塔罗牌告诉你',
    'quiz.love.cover': '你是哪种类型的爱人？',
    'quiz.love.q1': '当你开始对一个人心动时，你会……',
    'quiz.love.q1a': '全力以赴——投入、表白、殫尽全力',
    'quiz.love.q1b': '想了解TA的一切——深谈、共享沉默',
    'quiz.love.q1c': '慢慢来——保护自己的心，但在心里惄惄幻想',
    'quiz.love.q1d': '被强烈的吸引力拉住——张力、化学反应、火花',
    'quiz.love.q2': '你理想的约会是……',
    'quiz.love.q2a': '看星星、散长步、或任何让两个人都充满活力的事',
    'quiz.love.q2b': '一起做饭、点蜡烛、听音乐——温馨亲密',
    'quiz.love.q2c': '安静的咖啡馆，共享耳机，只是待在一起',
    'quiz.love.q2d': '有冒险感的——新餐厅、惊喜、即兴而起',
    'quiz.love.q3': '吵架之后，你往往……',
    'quiz.love.q3a': '先需要空间，再平静地回来沟通',
    'quiz.love.q3b': '泡在里面——反复回放每句话，强烈地感受一切',
    'quiz.love.q3c': '主动联系。我讨厌距离感。宁可修复也不想等',
    'quiz.love.q3d': '说出我的想法，即使尖锐。我看重诚实胜过舒适',
    'quiz.love.q4': '最能打动你的爱的语言是……',
    'quiz.love.q4a': '高质量的相处——在一起，不看手机',
    'quiz.love.q4b': '身体接触——一只手搭在我背上比什么话都多',
    'quiz.love.q4c': '肯定的话语——告诉我你的感受',
    'quiz.love.q4d': '用行动表达——用你做的事让我看到',
    'quiz.love.q5': '在爱情中，你最害怕什么？',
    'quiz.love.q5a': '失去自我——太缠绵以至于忘记自己是谁',
    'quiz.love.q5b': '无聊——当激情消退，变成日常',
    'quiz.love.q5c': '被真正看见——然后发现我不够好',
    'quiz.love.q5d': '选错人——把心交给错的人',
    'quiz.love.q6': '最打动你的歌词是……',
    'quiz.love.q6a': '「我不想错过任何一件事」——我想要亲密，始终',
    'quiz.love.q6b': '「你让我感觉像个真正的女人」——温柔就是一切',
    'quiz.love.q6c': '「我情不自禁爱上你」——欲望是引力',
    'quiz.love.q6d': '「你去哪里，我就跟到哪里」——我是生死与共的',

    // Quiz 2 Results
    'quiz.love.r.knight.title': '圣杯骑士 — 浪漫英雄',
    'quiz.love.r.knight.desc': '你用全心去爱，从不打折。浪漫的表白、诗意的话语、无畏的奉献——这就是你的风格。你会为对的人赴汤蹈火。只是记住：对的人会朝你走来一半。',
    'quiz.love.r.cups2.title': '圣杯二 — 深度连接者',
    'quiz.love.r.cups2.desc': '对你而言，爱是关于在场。你不需要烟花——你需要一个真正看见你的人。你通过安静的时刻、共同的脆弱、和需要时间的那种亲密来建立爱。',
    'quiz.love.r.lovers.title': '恋人 — 全或无',
    'quiz.love.r.lovers.desc': '对你来说，爱是用全部的自己所做的选择。你渴望灵魂伴侣级别的连接——一个与你深度匹配的人。当你投入时，你是全身心的。你的爱改变人。',
    'quiz.love.r.empress.title': '皇后 — 温柔的照料者',
    'quiz.love.r.empress.desc': '你通过温暖、舒适和奉献来爱。和你在一起，伴侣感到被安全包裹。你天生就会滋养——通过食物、触摸、关注。你的爱是一座花园：稳定、耐心、始终绱放。',
    'quiz.love.r.star.title': '星星 — 充满希望的心',
    'quiz.love.r.star.desc': '你经历过一些风雨，但你仍然相信爱情。你温柔地爱，带着希望和治愈。你是那个说“慢慢来”并且认真的伴侣。你的爱是一个安全的港湾。',
    'quiz.love.r.devil.title': '恶魔 — 热烈的人',
    'quiz.love.r.devil.desc': '你用强烈、化学反应和火焰去爱。你被深层连接、磁场一样的张力吸引——那种让你微微失去自我的感觉。危险而美丽。拥有它，但保持清醒。',

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
