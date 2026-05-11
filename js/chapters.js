// ============================================================
// Ajiwau - Chapters Page Logic
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  const chaptersList = document.getElementById('chapters-list');
  const progressFill = document.getElementById('progress-fill');
  const progressPercent = document.getElementById('progress-percent');
  const progressLabel = document.getElementById('progress-label');
  const searchInput = document.getElementById('lesson-search-input');
  const searchClear = document.getElementById('lesson-search-clear');
  const searchStatus = document.getElementById('lesson-search-status');
  const searchableItems = [];

  const stripHTML = (value) => String(value || '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const collectLessonSearchText = (lesson) => {
    if (!lesson) return '';
    const chunks = [lesson.id, lesson.title, lesson.titleJP, lesson.chapterTitle, stripHTML(lesson.introduction)];
    if (lesson.media) chunks.push(lesson.media.audioText, lesson.media.audioRomaji, lesson.media.audioTranslation);
    (lesson.sections || []).forEach(sec => {
      chunks.push(sec.title, stripHTML(sec.body), stripHTML(sec.content), sec.pattern, sec.patternEN, sec.example, sec.exampleRomaji, sec.exampleID, sec.highlightJP, sec.highlight);
      (sec.words || []).forEach(w => chunks.push(w.jp, w.kanji, w.romaji, w.id));
      (sec.sentences || []).forEach(s => chunks.push(s.jp, s.romaji, s.id));
    });
    return chunks.filter(Boolean).join(' ').toLowerCase();
  };

  const normalizeQuery = (value) => String(value || '').toLowerCase().trim().replace(/\s+/g, ' ');

  function applyLessonSearch() {
    const query = normalizeQuery(searchInput?.value || '');
    let visibleCards = 0;
    let visibleSections = 0;

    searchableItems.forEach(item => {
      const match = !query || item.searchText.includes(query);
      item.card.hidden = !match;
      item.card.classList.toggle('search-hidden', !match);
      if (match) visibleCards += 1;
    });

    document.querySelectorAll('.chapter-section').forEach(section => {
      const hasVisible = !!section.querySelector('.subchapter-card:not([hidden])');
      section.hidden = !hasVisible;
      section.classList.toggle('search-hidden', !hasVisible);
      if (hasVisible) visibleSections += 1;
    });

    if (searchClear) searchClear.classList.toggle('show', !!query);
    if (searchStatus) {
      if (!query) searchStatus.textContent = 'Menampilkan semua pelajaran.';
      else if (visibleCards) searchStatus.textContent = `${visibleCards} pelajaran ditemukan dari ${visibleSections} bab.`;
      else searchStatus.textContent = 'Belum ada pelajaran yang cocok. Coba kata kunci lain.';
    }
  }

  const stats = Progress.stats();
  progressFill.style.width = '0%';
  progressPercent.textContent = `${stats.pct}%`;
  if (progressLabel) {
    progressLabel.innerHTML = `${stats.completed} dari ${stats.totalLessons} pelajaran selesai<br><span class="progress-save-note">Progres tersimpan otomatis di peramban perangkat ini.</span>`;
  }
  setTimeout(() => { progressFill.style.width = stats.pct + '%'; }, 100);

  APP_DATA.chapters.forEach((chapter, ci) => {
    const section = document.createElement('div');
    section.className = 'chapter-section animate-in';
    section.style.animationDelay = `${ci * 0.12}s`;

    const colors = [
      { icon: '#7c6df7', bg: 'rgba(124,109,247,0.10)' },
      { icon: '#60a5fa', bg: 'rgba(96,165,250,0.10)' },
      { icon: '#34d399', bg: 'rgba(52,211,153,0.10)' },
      { icon: '#f59e0b', bg: 'rgba(245,158,11,0.12)' }
    ];
    const clr = colors[ci] || colors[0];
    const iconText = chapter.iconJP || (chapter.titleJP || String(ci + 1)).slice(0, 1);

    section.innerHTML = `
      <div class="chapter-header">
        <div class="chapter-icon" lang="ja" style="background:${clr.bg}; color:${clr.icon}">
          ${iconText}
        </div>
        <div class="chapter-meta">
          <div class="chapter-title-row">
            <h2>${chapter.title}</h2>
            <span class="chapter-title-jp-inline" lang="ja">${chapter.titleJP || ''}</span>
          </div>
          <p>${chapter.description}</p>
        </div>
        <span class="chapter-jp-label">BAB ${ci + 1}</span>
      </div>
      <div class="subchapter-grid" id="grid-ch${ci}"></div>
    `;

    chaptersList.appendChild(section);
    const grid = section.querySelector(`#grid-ch${ci}`);

    chapter.subChapters.forEach((sc) => {
      const isUnlocked = Progress.isUnlocked(sc.id);
      const isCompleted = Progress.isCompleted(sc.id);
      const result = Progress.getResult(sc.id);
      const effectiveStatus = isUnlocked ? 'available' : 'locked';

      const card = document.createElement('div');
      card.className = `subchapter-card ${effectiveStatus}`;
      card.setAttribute('data-id', sc.id);
      card.setAttribute('data-status', effectiveStatus);
      card.setAttribute('data-title', sc.title || '');

      const relatedLesson = APP_DATA.lessons?.[sc.id];
      const searchText = [
        chapter.title,
        chapter.titleJP,
        chapter.description,
        sc.id,
        sc.title,
        sc.titleJP,
        collectLessonSearchText(relatedLesson),
      ].filter(Boolean).join(' ').toLowerCase();

      let statusIcon, statusBadge;
      if (isCompleted) {
        statusIcon = '✓';
        statusBadge = `<span class="card-completed-badge">Selesai · ${result.score}%</span>`;
      } else if (isUnlocked) {
        statusIcon = '✦';
        statusBadge = '';
      } else {
        statusIcon = '🔒';
        statusBadge = '';
      }

      card.innerHTML = `
        <div class="card-top">
          <span class="card-number">Pelajaran ${sc.id}</span>
          <div class="card-status-icon ${isCompleted ? 'status-completed' : isUnlocked ? 'status-available' : 'status-locked'}">${statusIcon}</div>
        </div>
        <div class="card-title">${sc.title}</div>
        <div class="card-title-jp" lang="ja">${sc.titleJP || ''}</div>
        ${statusBadge}
        ${isUnlocked ? '<span class="card-arrow">→</span>' : ''}
      `;

      if (isUnlocked) {
        card.addEventListener('click', () => navigateTo(`lesson.html?id=${sc.id}`));
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            navigateTo(`lesson.html?id=${sc.id}`);
          }
        });
      }

      searchableItems.push({ card, section, searchText });
      grid.appendChild(card);
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', applyLessonSearch);
  }
  if (searchClear) {
    searchClear.addEventListener('click', () => {
      searchInput.value = '';
      searchInput.focus();
      applyLessonSearch();
    });
  }
  applyLessonSearch();

  const resetBtn = document.getElementById('btn-reset-progress');
  if (resetBtn) resetBtn.addEventListener('click', () => Progress.reset());
});
