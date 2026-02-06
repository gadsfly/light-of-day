/* ═══════════════════════════════════════════════════
   Light of Day — Journal System (localStorage)
   ═══════════════════════════════════════════════════ */

const JOURNAL_KEY = 'lod_journal';

const journal = {
  /* ── Data Layer ── */
  getAll() {
    try {
      const raw = localStorage.getItem(JOURNAL_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  },

  save(entry) {
    const entries = this.getAll();
    entry.id = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
    entry.date = new Date().toISOString();
    entries.unshift(entry); // newest first
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(entries));
    return entry;
  },

  remove(id) {
    const entries = this.getAll().filter(e => e.id !== id);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(entries));
  },

  clearAll() {
    localStorage.removeItem(JOURNAL_KEY);
  },

  /* ── Stats ── */
  getStats() {
    const entries = this.getAll();
    const withReflection = entries.filter(e => e.reflection && e.reflection.trim().length > 0);
    return {
      total: entries.length,
      reflections: withReflection.length,
    };
  },

  /* ── Rendering ── */
  renderPage() {
    const entries = this.getAll();
    const stats = this.getStats();
    const statsEl = document.getElementById('journal-stats');
    const emptyEl = document.getElementById('journal-empty');
    const timelineEl = document.getElementById('journal-timeline');
    const actionsEl = document.getElementById('journal-actions');

    if (!statsEl || !timelineEl) return;

    // Stats
    const readingsLabel = i18n.t('journal.stat.readings') || 'Readings';
    const reflectionsLabel = i18n.t('journal.stat.reflections') || 'Reflections';

    statsEl.innerHTML = `
      <div class="stat-item">
        <span class="stat-number">${stats.total}</span>
        <span class="stat-label">${readingsLabel}</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">${stats.reflections}</span>
        <span class="stat-label">${reflectionsLabel}</span>
      </div>
    `;

    if (entries.length === 0) {
      emptyEl.style.display = 'block';
      timelineEl.innerHTML = '';
      actionsEl.style.display = 'none';
      return;
    }

    emptyEl.style.display = 'none';
    actionsEl.style.display = 'block';

    timelineEl.innerHTML = entries.map(entry => this.renderEntry(entry)).join('');

    // Delete buttons
    timelineEl.querySelectorAll('.journal-delete-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        this.remove(id);
        this.renderPage();
      });
    });
  },

  renderEntry(entry) {
    const d = new Date(entry.date);
    const dateStr = d.toLocaleDateString(i18n.currentLang === 'zh' ? 'zh-CN' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    const typeLabel = entry.type === 'three' ? '🔮' : '🎴';

    const cardTags = (entry.cards || []).map(c => {
      const revClass = c.reversed ? ' reversed' : '';
      const revMark = c.reversed ? ' ↺' : '';
      return `<span class="journal-card-tag${revClass}">${c.name}${revMark}</span>`;
    }).join('');

    const questionHtml = entry.question
      ? `<div class="journal-entry-question">"${this.escapeHtml(entry.question)}"</div>`
      : '';

    const reflectionHtml = entry.reflection && entry.reflection.trim()
      ? `<div class="journal-entry-reflection">${this.escapeHtml(entry.reflection)}</div>`
      : '';

    return `
      <div class="journal-entry" data-id="${entry.id}">
        <div class="journal-entry-date">${typeLabel} ${dateStr}</div>
        ${questionHtml}
        <div class="journal-entry-cards">${cardTags}</div>
        ${reflectionHtml}
        <button class="btn-ghost btn-small journal-delete-btn" data-id="${entry.id}">✕</button>
      </div>
    `;
  },

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  },

  /* ── Quick Save Helper ── */
  saveReading({ type, question, cards, reflection }) {
    return this.save({
      type: type || 'single',
      question: question || '',
      cards: cards || [],
      reflection: reflection || '',
      lang: i18n.currentLang,
    });
  }
};
