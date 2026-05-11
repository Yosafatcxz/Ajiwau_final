// ============================================================
// Ajiwau — Lesson & Quiz Engine
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  const lessonId = getParam('id');

  if (!lessonId || !APP_DATA.lessons[lessonId]) {
    document.querySelector('.lesson-page').innerHTML = `
      <div class="container" style="padding-top: 60px; text-align: center;">
        <h2 style="margin-bottom: 12px;">Pelajaran tidak ditemukan</h2>
        <p>Pelajaran ini belum tersedia atau ID tidak valid.</p>
        <button class="btn btn-primary" style="margin-top: 24px;" onclick="navigateTo('chapters.html')">Kembali</button>
      </div>`;
    return;
  }

  if (!Progress.isUnlocked(lessonId)) {
    document.querySelector('.lesson-page').innerHTML = `
      <div class="container" style="padding-top: 60px; text-align: center;">
        <h2 style="margin-bottom: 12px;">Pelajaran masih terkunci 🔒</h2>
        <p>Selesaikan pelajaran sebelumnya dengan skor minimal 60% untuk membuka pelajaran ini.</p>
        <button class="btn btn-primary" style="margin-top: 24px;" onclick="navigateTo('chapters.html')">Kembali ke Peta Belajar</button>
      </div>`;
    return;
  }

  const lesson = APP_DATA.lessons[lessonId];
  renderLesson(lesson);
  showPreviousResult(lessonId);
  initQuiz(lesson.quiz, lessonId);
});

// ── Lesson Content Renderer ──────────────────────────────────

function renderLesson(lesson) {
  // Title
  document.title = `${lesson.title} — Ajiwau`;
  const chapterLabel = document.getElementById('lesson-chapter-label');
  if (chapterLabel) chapterLabel.textContent = lesson.chapterTitle;
  document.getElementById('lesson-main-title').textContent = lesson.title;
  document.getElementById('lesson-title-jp').textContent = lesson.titleJP;
  document.getElementById('lesson-intro').innerHTML = lesson.introduction;
  renderLessonMedia(lesson);

  const contentCol = document.getElementById('lesson-content');
  const outlineList = document.getElementById('outline-list');
  let sectionIndex = 0;

  lesson.sections.forEach((sec, i) => {
    const el = buildSection(sec, i);
    if (el) {
      el.style.animationDelay = `${0.1 + i * 0.08}s`;
      contentCol.appendChild(el);

      // Build outline item
      const li = document.createElement('li');
      li.className = 'outline-item';
      li.dataset.target = `section-${i}`;
      li.innerHTML = `<span class="outline-dot"></span>${sec.title}`;
      li.addEventListener('click', () => {
        document.getElementById(`section-${i}`).scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      outlineList.appendChild(li);
    }
  });

  // Intersection observer for outline highlights
  const sections = contentCol.querySelectorAll('.lesson-section');
  const outlineItems = outlineList.querySelectorAll('.outline-item');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        outlineItems.forEach(i => i.classList.remove('active'));
        const target = entry.target.id;
        const match = outlineList.querySelector(`[data-target="${target}"]`);
        if (match) match.classList.add('active');
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));
}

function escapeHTML(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderLessonMedia(lesson) {
  if (!lesson.media) return;

  const introSection = document.getElementById('lesson-intro')?.closest('.lesson-section');
  if (!introSection) return;

  const media = lesson.media;
  const card = document.createElement('div');
  card.className = 'lesson-section lesson-media-card animate-in';
  card.innerHTML = `
    <div class="lesson-media-visual">
      <img src="${escapeHTML(media.image)}" alt="${escapeHTML(media.imageAlt || lesson.title)}" loading="lazy">
    </div>
    <div class="lesson-media-content">
      <div class="section-label">Audio dan Visual</div>
      <h3>${escapeHTML(media.title || 'Contoh Pengucapan')}</h3>
      <p class="media-example-jp" lang="ja">${escapeHTML(media.audioText)}</p>
      <p class="media-example-romaji">${escapeHTML(media.audioRomaji)}</p>
      <p class="media-example-id">${escapeHTML(media.audioTranslation)}</p>
      <button class="audio-play-btn" type="button">
        <span class="audio-icon">🔊</span> Dengarkan Pengucapan
      </button>
      <p class="audio-note">Audio menggunakan fitur suara bawaan peramban.</p>
    </div>
  `;

  introSection.after(card);
  const button = card.querySelector('.audio-play-btn');
  if (button) {
    button.addEventListener('click', () => speakLessonAudio(media.audioText, media.audioLang || 'ja-JP', button));
  }
}

function speakLessonAudio(text, lang, button) {
  if (!('speechSynthesis' in window) || !window.SpeechSynthesisUtterance) {
    alert('Fitur audio tidak tersedia pada peramban ini.');
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang || 'ja-JP';
  utterance.rate = 0.82;
  utterance.pitch = 1;

  if (button) {
    button.classList.add('is-playing');
    button.disabled = true;
    button.innerHTML = '<span class="audio-icon">🔊</span> Memutar Audio...';
  }

  utterance.onend = utterance.onerror = () => {
    if (button) {
      button.classList.remove('is-playing');
      button.disabled = false;
      button.innerHTML = '<span class="audio-icon">🔊</span> Dengarkan Pengucapan';
    }
  };

  window.speechSynthesis.speak(utterance);
}

function buildSection(sec, idx) {
  const div = document.createElement('div');
  div.className = 'lesson-section animate-in';
  div.id = `section-${idx}`;

  switch (sec.type) {
    case 'explanation': {
      div.innerHTML = `
        <div class="section-label">Penjelasan</div>
        <div class="section-title">${sec.title}</div>
        <div class="section-body">${sec.content}</div>
        ${sec.note ? `<div class="section-note">${sec.note}</div>` : ''}
      `;
      break;
    }
    case 'structure': {
      div.innerHTML = `
        <div class="section-label">Struktur Kalimat</div>
        <div class="section-title">${sec.title}</div>
        <div class="pattern-box">
          <div class="pattern-formula">${highlightParticles(sec.pattern)}</div>
          <div class="pattern-en">${sec.patternEN}</div>
          <div class="pattern-example">
            <div class="example-jp">${sec.example}</div>
            <div class="example-romaji">${sec.exampleRomaji}</div>
            <div class="example-id">${sec.exampleID}</div>
          </div>
        </div>
      `;
      break;
    }
    case 'vocabulary': {
      const vocabCards = sec.words.map(w => `
        <div class="vocab-card">
          <div class="vocab-jp">${w.jp}<span class="vocab-kanji">${w.kanji}</span></div>
          <div class="vocab-romaji">${w.romaji}</div>
          <div class="vocab-id">${w.id}</div>
        </div>
      `).join('');
      div.innerHTML = `
        <div class="section-label">Kosakata</div>
        <div class="section-title">${sec.title}</div>
        <div class="vocab-grid">${vocabCards}</div>
      `;
      break;
    }
    case 'examples': {
      const sentences = sec.sentences.map(s => `
        <div class="sentence-item">
          <div class="s-jp">${s.jp}</div>
          <div class="s-romaji">${s.romaji}</div>
          <div class="s-id">${s.id}</div>
        </div>
      `).join('');
      div.innerHTML = `
        <div class="section-label">Contoh Kalimat</div>
        <div class="section-title">${sec.title}</div>
        <div class="sentence-list">${sentences}</div>
      `;
      break;
    }
    case 'timeline-card': {
      div.className = 'timeline-section animate-in';
      const formulaText = sec.formulaText || sec.formulatext;
      div.innerHTML = `
        <div class="timeline-line" style="border-color: ${sec.color}">
          <div class="timeline-dot" style="background: ${sec.color}">
            <span>${sec.number}</span>
          </div>
          <div class="timeline-content">
            <h2 class="timeline-title" style="color: ${sec.color}">${sec.title}</h2>
            <div class="timeline-body-card">
              <div class="timeline-body-text">${sec.body}</div>
              ${sec.formulaTitle ? `
                <div class="pattern-box">
                  <div class="pattern-formula">${highlightParticles(sec.formulaTitle)}</div>
                  ${formulaText ? `<div class="pattern-en">${formulaText}</div>` : ''}
                </div>` : ''}
              ${(sec.highlightJP || sec.highlight) ? `
                <div class="timeline-highlight" style="border-color:${sec.color}; background: ${sec.color}14">
                  ${sec.highlightJP ? `<div class="timeline-highlight-jp">${sec.highlightJP}</div>` : ''}
                  ${sec.highlight ? `<div class="timeline-highlight-id">${sec.highlight}</div>` : ''}
                </div>` : ''}
            </div>
          </div>
        </div>
      `;
      break;
    }
    default:
      return null;
  }

  return div;
}

function highlightParticles(pattern) {
  // Highlight は and です in structure patterns
  return pattern
    .replace(/は/g, '<span class="particle">は</span>')
    .replace(/です/g, '<span class="particle">です</span>');
}

// ── Previous Result Banner ──────────────────────────────────

function showPreviousResult(lessonId) {
  const result = Progress.getResult(lessonId);
  if (!result) return;
  const banner = document.createElement('div');
  banner.className = 'prev-result-banner';
  banner.innerHTML = `
    <span class="prev-result-icon">📊</span>
    <div>
      <strong>Anda telah menyelesaikan pelajaran ini</strong>
      <span>Skor terbaik: <b>${result.score}%</b> (${result.correct}/${result.total} benar) · ${new Date(result.completedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
    </div>
  `;
  const hero = document.querySelector('.lesson-hero');
  if (hero) hero.after(banner);
}


// ── Japanese Reading Helpers ────────────────────────────────

const BASE_ROMAJI_READINGS = {
  'は': 'wa', 'を': 'o', 'へ': 'e', 'も': 'mo', 'の': 'no', 'に': 'ni', 'で': 'de', 'と': 'to', 'が': 'ga', 'か': 'ka',
  'です': 'desu', 'ですか': 'desu ka', 'でした': 'deshita', 'じゃ': 'ja', 'では': 'dewa', 'じゃありません': 'ja arimasen', 'ではありません': 'dewa arimasen', 'ありません': 'arimasen', 'あります': 'arimasu', 'います': 'imasu',
  'はい': 'hai', 'いいえ': 'iie', 'そうです': 'sou desu', 'そうですか': 'sou desu ka', 'はじめまして': 'hajimemashite', 'よろしくおねがいします': 'yoroshiku onegai shimasu', 'こんにちは': 'konnichiwa', 'こんばんは': 'konbanwa',
  'わたし': 'watashi', '私': 'watashi', 'ぼく': 'boku', '僕': 'boku', 'あなた': 'anata', 'さん': 'san', 'たなか': 'tanaka', 'やまだ': 'yamada', 'みら': 'mira', 'あり': 'ari', 'アリ': 'ari', 'せんせい': 'sensei', '先生': 'sensei', 'がくせい': 'gakusei', '学生': 'gakusei', 'いしゃ': 'isha', '医者': 'isha',
  'にほん': 'nihon', '日本': 'nihon', 'にほんご': 'nihongo', '日本語': 'nihongo', 'にほんじん': 'nihonjin', '日本人': 'nihonjin', 'いんどねしあじん': 'indoneshia-jin', 'インドネシア人': 'indoneshia-jin',
  'これ': 'kore', 'それ': 'sore', 'あれ': 'are', 'この': 'kono', 'その': 'sono', 'あの': 'ano', 'ここ': 'koko', 'そこ': 'soko', 'あそこ': 'asoko', 'どこ': 'doko', 'だれ': 'dare', '誰': 'dare', 'なに': 'nani', '何': 'nani',
  'ほん': 'hon', '本': 'hon', 'じしょ': 'jisho', '辞書': 'jisho', 'とけい': 'tokei', '時計': 'tokei', 'かぎ': 'kagi', '鍵': 'kagi', 'かさ': 'kasa', '傘': 'kasa', 'つくえ': 'tsukue', '机': 'tsukue', 'いす': 'isu', 'くつ': 'kutsu', 'かばん': 'kaban', '鞄': 'kaban', 'てがみ': 'tegami', '手紙': 'tegami',
  'がっこう': 'gakkou', '学校': 'gakkou', 'だいがく': 'daigaku', '大学': 'daigaku', 'えき': 'eki', '駅': 'eki', 'びょういん': 'byouin', '病院': 'byouin', 'ぎんこう': 'ginkou', '銀行': 'ginkou', 'としょかん': 'toshokan', '図書館': 'toshokan', 'こうえん': 'kouen', '公園': 'kouen', 'いえ': 'ie', '家': 'ie', 'へや': 'heya', '部屋': 'heya',
  'みぎ': 'migi', '右': 'migi', 'ひだり': 'hidari', '左': 'hidari', 'まえ': 'mae', '前': 'mae', 'うしろ': 'ushiro', '後ろ': 'ushiro', 'うえ': 'ue', '上': 'ue', 'した': 'shita', '下': 'shita', 'なか': 'naka', '中': 'naka', 'そと': 'soto', '外': 'soto', 'となり': 'tonari', '隣': 'tonari',
  'いま': 'ima', '今': 'ima', 'きょう': 'kyou', '今日': 'kyou', 'あした': 'ashita', '明日': 'ashita', 'きのう': 'kinou', '昨日': 'kinou', 'まいにち': 'mainichi', '毎日': 'mainichi', 'あさ': 'asa', '朝': 'asa', 'ひる': 'hiru', '昼': 'hiru', 'よる': 'yoru', '夜': 'yoru', 'じ': 'ji', '時': 'ji', 'はん': 'han', '半': 'han',
  'いち': 'ichi', '一': 'ichi', 'に': 'ni', '二': 'ni', 'さん': 'san', '三': 'san', 'よん': 'yon', '四': 'yon', 'ご': 'go', '五': 'go', 'ろく': 'roku', '六': 'roku', 'しち': 'shichi', '七': 'shichi', 'はち': 'hachi', '八': 'hachi', 'きゅう': 'kyuu', '九': 'kyuu', 'く': 'ku', 'じゅう': 'juu', '十': 'juu',
  'いちじ': 'ichi-ji', '一時': 'ichi-ji', 'にじ': 'ni-ji', '二時': 'ni-ji', 'さんじ': 'san-ji', '三時': 'san-ji', 'よじ': 'yo-ji', '四時': 'yo-ji', 'ごじ': 'go-ji', '五時': 'go-ji', 'ろくじ': 'roku-ji', '六時': 'roku-ji', 'しちじ': 'shichi-ji', '七時': 'shichi-ji', 'はちじ': 'hachi-ji', '八時': 'hachi-ji', 'くじ': 'ku-ji', '九時': 'ku-ji', 'じゅうじ': 'juu-ji', '十時': 'juu-ji',
  'いきます': 'ikimasu', '行きます': 'ikimasu', 'きます': 'kimasu', '来ます': 'kimasu', 'かえります': 'kaerimasu', '帰ります': 'kaerimasu', 'たべます': 'tabemasu', '食べます': 'tabemasu', 'のみます': 'nomimasu', '飲みます': 'nomimasu', 'よみます': 'yomimasu', '読みます': 'yomimasu', 'かきます': 'kakimasu', '書きます': 'kakimasu', 'みます': 'mimasu', '見ます': 'mimasu', 'します': 'shimasu', 'べんきょうします': 'benkyou shimasu', '勉強します': 'benkyou shimasu',
  'たべません': 'tabemasen', '食べません': 'tabemasen', 'のみません': 'nomimasen', '飲みません': 'nomimasen', 'いきません': 'ikimasen', '行きません': 'ikimasen',
  'みず': 'mizu', '水': 'mizu', 'おちゃ': 'ocha', 'お茶': 'ocha', 'ぱん': 'pan', 'パン': 'pan', 'さかな': 'sakana', '魚': 'sakana', 'にく': 'niku', '肉': 'niku', 'すし': 'sushi', '寿司': 'sushi', 'らーめん': 'raamen', 'ラーメン': 'raamen',
  'おいしい': 'oishii', 'あまい': 'amai', 'からい': 'karai', 'すっぱい': 'suppai', 'にがい': 'nigai', 'あつい': 'atsui', 'さむい': 'samui', 'たかい': 'takai', 'やすい': 'yasui', 'おおきい': 'ookii', 'ちいさい': 'chiisai', 'あたらしい': 'atarashii', 'ふるい': 'furui', 'いい': 'ii', 'よくない': 'yokunai',
  'すき': 'suki', '好き': 'suki', 'きらい': 'kirai', '嫌い': 'kirai', 'じょうず': 'jouzu', '上手': 'jouzu', 'へた': 'heta', '下手': 'heta', 'できます': 'dekimasu', 'できません': 'dekimasen', 'どうして': 'doushite', 'から': 'kara',
  'ひとつ': 'hitotsu', '一つ': 'hitotsu', 'ふたつ': 'futatsu', '二つ': 'futatsu', 'みっつ': 'mittsu', '三つ': 'mittsu', 'よっつ': 'yottsu', '四つ': 'yottsu', 'いつつ': 'itsutsu', '五つ': 'itsutsu', 'たくさん': 'takusan', 'すこし': 'sukoshi', 'とても': 'totemo'
};

const HIRAGANA_ROMAJI = {
  'あ': 'a', 'い': 'i', 'う': 'u', 'え': 'e', 'お': 'o',
  'か': 'ka', 'き': 'ki', 'く': 'ku', 'け': 'ke', 'こ': 'ko',
  'さ': 'sa', 'し': 'shi', 'す': 'su', 'せ': 'se', 'そ': 'so',
  'た': 'ta', 'ち': 'chi', 'つ': 'tsu', 'て': 'te', 'と': 'to',
  'な': 'na', 'に': 'ni', 'ぬ': 'nu', 'ね': 'ne', 'の': 'no',
  'は': 'ha', 'ひ': 'hi', 'ふ': 'fu', 'へ': 'he', 'ほ': 'ho',
  'ま': 'ma', 'み': 'mi', 'む': 'mu', 'め': 'me', 'も': 'mo',
  'や': 'ya', 'ゆ': 'yu', 'よ': 'yo',
  'ら': 'ra', 'り': 'ri', 'る': 'ru', 'れ': 're', 'ろ': 'ro',
  'わ': 'wa', 'を': 'o', 'ん': 'n',
  'が': 'ga', 'ぎ': 'gi', 'ぐ': 'gu', 'げ': 'ge', 'ご': 'go',
  'ざ': 'za', 'じ': 'ji', 'ず': 'zu', 'ぜ': 'ze', 'ぞ': 'zo',
  'だ': 'da', 'ぢ': 'ji', 'づ': 'zu', 'で': 'de', 'ど': 'do',
  'ば': 'ba', 'び': 'bi', 'ぶ': 'bu', 'べ': 'be', 'ぼ': 'bo',
  'ぱ': 'pa', 'ぴ': 'pi', 'ぷ': 'pu', 'ぺ': 'pe', 'ぽ': 'po',
  'ぁ': 'a', 'ぃ': 'i', 'ぅ': 'u', 'ぇ': 'e', 'ぉ': 'o', 'ゔ': 'vu'
};

const DIGRAPH_ROMAJI = {
  'きゃ': 'kya', 'きゅ': 'kyu', 'きょ': 'kyo', 'しゃ': 'sha', 'しゅ': 'shu', 'しょ': 'sho',
  'ちゃ': 'cha', 'ちゅ': 'chu', 'ちょ': 'cho', 'にゃ': 'nya', 'にゅ': 'nyu', 'にょ': 'nyo',
  'ひゃ': 'hya', 'ひゅ': 'hyu', 'ひょ': 'hyo', 'みゃ': 'mya', 'みゅ': 'myu', 'みょ': 'myo',
  'りゃ': 'rya', 'りゅ': 'ryu', 'りょ': 'ryo', 'ぎゃ': 'gya', 'ぎゅ': 'gyu', 'ぎょ': 'gyo',
  'じゃ': 'ja', 'じゅ': 'ju', 'じょ': 'jo', 'びゃ': 'bya', 'びゅ': 'byu', 'びょ': 'byo',
  'ぴゃ': 'pya', 'ぴゅ': 'pyu', 'ぴょ': 'pyo'
};

let ROMAJI_DICTIONARY_CACHE = null;

function hasJapanese(text) {
  return /[\u3040-\u30ff\u3400-\u9fff]/.test(String(text || ''));
}

function cleanRomaji(value) {
  return String(value || '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/[。！？、,.!?]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

function cleanJapaneseKey(value) {
  return String(value || '')
    .replace(/<[^>]*>/g, '')
    .replace(/[。！？、,.!?]/g, '')
    .trim();
}

function registerReading(map, jp, romaji) {
  const key = cleanJapaneseKey(jp);
  const reading = cleanRomaji(romaji);
  if (!key || !reading || !hasJapanese(key) || hasJapanese(reading)) return;
  if (!map.has(key)) map.set(key, reading);
}

function walkForReadings(value, map) {
  if (!value || typeof value !== 'object') return;
  if (Array.isArray(value)) {
    value.forEach(item => walkForReadings(item, map));
    return;
  }

  if (value.jp && value.romaji) registerReading(map, value.jp, value.romaji);
  if (value.kanji && value.romaji) registerReading(map, value.kanji, value.romaji);
  if (value.example && value.exampleRomaji) registerReading(map, value.example, value.exampleRomaji);
  if (value.audioText && value.audioRomaji) registerReading(map, value.audioText, value.audioRomaji);

  if (Array.isArray(value.acceptedAnswers)) {
    const romaji = value.acceptedAnswers.find(ans => ans && !hasJapanese(ans));
    if (romaji) value.acceptedAnswers.forEach(ans => registerReading(map, ans, romaji));
  }

  Object.values(value).forEach(child => walkForReadings(child, map));
}

function getRomajiDictionary() {
  if (ROMAJI_DICTIONARY_CACHE) return ROMAJI_DICTIONARY_CACHE;
  const map = new Map();
  Object.entries(BASE_ROMAJI_READINGS).forEach(([jp, romaji]) => registerReading(map, jp, romaji));
  try {
    if (typeof APP_DATA !== 'undefined') walkForReadings(APP_DATA, map);
  } catch (err) {
    // APP_DATA belum siap; gunakan kamus dasar saja.
  }
  ROMAJI_DICTIONARY_CACHE = Array.from(map.entries()).sort((a, b) => b[0].length - a[0].length);
  return ROMAJI_DICTIONARY_CACHE;
}

function toHiragana(input) {
  return String(input || '').replace(/[ァ-ン]/g, char => String.fromCharCode(char.charCodeAt(0) - 0x60));
}

function romanizeKana(raw) {
  const text = toHiragana(raw);
  let output = '';
  let doubleNext = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char === 'っ') {
      doubleNext = true;
      continue;
    }
    if (char === 'ー') {
      const lastVowel = (output.match(/[aeiou]$/) || [''])[0];
      if (lastVowel) output += lastVowel;
      continue;
    }

    const pair = text.slice(i, i + 2);
    let roma = DIGRAPH_ROMAJI[pair];
    if (roma) {
      i += 1;
    } else {
      roma = HIRAGANA_ROMAJI[char] || char;
    }

    if (doubleNext && /^[bcdfghjklmnpqrstvwxyz]/.test(roma)) {
      output += roma[0];
      doubleNext = false;
    } else {
      doubleNext = false;
    }
    output += roma;
  }
  return output;
}

function romanizeJapaneseSegment(segment) {
  const clean = cleanJapaneseKey(segment);
  if (!clean) return '';
  const dictionary = getRomajiDictionary();
  const exact = dictionary.find(([jp]) => jp === clean);
  if (exact) return exact[1];

  let result = [];
  let i = 0;
  while (i < clean.length) {
    const remaining = clean.slice(i);
    const match = dictionary.find(([jp]) => remaining.startsWith(jp));
    if (match) {
      result.push(match[1]);
      i += match[0].length;
      continue;
    }

    const pair = clean.slice(i, i + 2);
    if (DIGRAPH_ROMAJI[toHiragana(pair)]) {
      result.push(romanizeKana(pair));
      i += 2;
      continue;
    }

    const char = clean[i];
    result.push(romanizeKana(char));
    i += 1;
  }

  return result.join(' ')
    .replace(/\s+/g, ' ')
    .replace(/ ([.,!?])/g, '$1')
    .trim();
}

function getRomajiReading(text) {
  const raw = String(text || '').replace(/<[^>]*>/g, ' ');
  if (!hasJapanese(raw)) return '';

  const exact = getRomajiDictionary().find(([jp]) => cleanJapaneseKey(raw) === jp);
  if (exact) return exact[1];

  const segments = raw.match(/[\u3040-\u30ff\u3400-\u9fffー々〇一二三四五六七八九十百千万]+/g) || [];
  const readings = segments
    .map(romanizeJapaneseSegment)
    .filter(Boolean);

  return readings.join(' ').replace(/\s+/g, ' ').trim();
}

function renderTextWithRomaji(value) {
  const original = escapeHTML(value).replace(/\n/g, '<br>');
  const reading = getRomajiReading(value);
  if (!reading) return original;
  return `
    <span class="jp-reading-block">
      <span class="jp-reading-main">${original}</span>
      <span class="jp-reading-romaji">${escapeHTML(reading)}</span>
    </span>
  `;
}

// ── Quiz Engine ───────────────────────────────────────────────

function initQuiz(questions, lessonId) {
  let currentQ = 0;
  let answers = new Array(questions.length).fill(null); // selected option index or typed essay answer
  let answered = new Array(questions.length).fill(false);
  let audioCtx = null;
  let quizFinished = false;
  const REVIEW_FORM_URL = 'https://forms.gle/nrB4UH7zsB5v3BSW8';

  const quizInner = document.getElementById('quiz-inner');
  const quizFill = document.getElementById('quiz-fill');
  const quizCurrentEl = document.getElementById('quiz-current');
  const quizTotalEl = document.getElementById('quiz-total');

  quizTotalEl.textContent = questions.length;

  let restoredDraftNotice = false;
  const savedDraft = Progress.getDraft(lessonId);
  if (
    savedDraft &&
    Array.isArray(savedDraft.answers) &&
    Array.isArray(savedDraft.answered) &&
    savedDraft.answers.length === questions.length &&
    savedDraft.answered.length === questions.length
  ) {
    answers = savedDraft.answers;
    answered = savedDraft.answered.map(Boolean);
    currentQ = Math.min(Math.max(Number(savedDraft.currentQ) || 0, 0), questions.length - 1);
    restoredDraftNotice = true;
  }

  function saveQuizDraft() {
    if (quizFinished) return;
    Progress.saveDraft(lessonId, {
      currentQ,
      answers,
      answered,
      total: questions.length,
    });
  }

  function clearQuizDraft() {
    Progress.clearDraft(lessonId);
  }

  function getReviewOfferKey() {
    return `ajiwau-review-offer-${lessonId}`;
  }

  function hasSeenReviewOffer() {
    try {
      return localStorage.getItem(getReviewOfferKey()) === 'seen';
    } catch (err) {
      return false;
    }
  }

  function markReviewOfferSeen() {
    try {
      localStorage.setItem(getReviewOfferKey(), 'seen');
    } catch (err) {
      // LocalStorage bisa tidak tersedia pada mode privat tertentu.
    }
  }

  function createReviewPopup(score, correct) {
    const oldPopup = document.querySelector('.review-popup-overlay');
    if (oldPopup) oldPopup.remove();

    const overlay = document.createElement('div');
    overlay.className = 'review-popup-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-labelledby', 'review-popup-title');

    overlay.innerHTML = `
      <div class="review-popup-card">
        <button class="review-popup-close" type="button" aria-label="Tutup popup review">×</button>
        <div class="review-popup-sparkles" aria-hidden="true">
          <span>🌸</span><span>✨</span><span>💬</span>
        </div>
        <div class="review-popup-icon">📝</div>
        <p class="review-popup-eyebrow">Pelajaran selesai</p>
        <h3 id="review-popup-title">Bantu kami menyempurnakan Ajiwau</h3>
        <p class="review-popup-text">
          Anda baru saja menyelesaikan pelajaran ini dengan skor <strong>${score}%</strong>
          (${correct} dari ${questions.length} soal benar). Apakah Anda bersedia memberi saran singkat melalui Google Form?
        </p>
        <div class="review-popup-actions">
          <button class="btn btn-primary review-fill-btn" type="button">Isi Review</button>
          <button class="btn btn-ghost review-later-btn" type="button">Nanti Saja</button>
        </div>
        <p class="review-popup-note">Pilihan Anda disimpan di peramban agar popup ini tidak muncul berulang pada pelajaran yang sama.</p>
      </div>
    `;

    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add('show'));

    const closePopup = () => {
      markReviewOfferSeen();
      document.removeEventListener('keydown', handleEscape);
      overlay.classList.remove('show');
      window.setTimeout(() => overlay.remove(), 220);
    };

    const openReview = () => {
      markReviewOfferSeen();
      window.open(REVIEW_FORM_URL, '_blank', 'noopener,noreferrer');
      closePopup();
    };

    overlay.querySelector('.review-fill-btn')?.addEventListener('click', openReview);
    overlay.querySelector('.review-later-btn')?.addEventListener('click', closePopup);
    overlay.querySelector('.review-popup-close')?.addEventListener('click', closePopup);
    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) closePopup();
    });

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closePopup();
        document.removeEventListener('keydown', handleEscape);
      }
    };
    document.addEventListener('keydown', handleEscape);
  }

  function maybeShowReviewPopup(score, correct) {
    if (hasSeenReviewOffer()) return;
    window.setTimeout(() => {
      if (!hasSeenReviewOffer()) createReviewPopup(score, correct);
    }, 650);
  }

  window.addEventListener('beforeunload', saveQuizDraft);

  function unlockAudioContext() {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return null;
    if (!audioCtx) audioCtx = new AudioCtx();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
  }

  function playFeedbackSound(resultType) {
    const ctx = unlockAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const master = ctx.createGain();
    master.gain.setValueAtTime(0.85, now);
    master.connect(ctx.destination);

    const playTone = (freq, startAt, duration, gainValue, wave = 'sine') => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = wave;
      osc.frequency.setValueAtTime(freq, startAt);

      gain.gain.setValueAtTime(0.0001, startAt);
      gain.gain.linearRampToValueAtTime(gainValue, startAt + 0.012);
      gain.gain.exponentialRampToValueAtTime(0.0001, startAt + duration);

      osc.connect(gain);
      gain.connect(master);
      osc.start(startAt);
      osc.stop(startAt + duration + 0.03);
    };

    if (resultType === 'correct') {
      // Ceria: nada naik seperti chime kecil.
      playTone(523.25, now, 0.08, 0.08, 'triangle');
      playTone(659.25, now + 0.08, 0.09, 0.085, 'triangle');
      playTone(783.99, now + 0.17, 0.12, 0.09, 'triangle');
      playTone(1046.5, now + 0.31, 0.12, 0.055, 'sine');
    } else if (resultType === 'finish') {
      playTone(392, now, 0.09, 0.07, 'triangle');
      playTone(523.25, now + 0.09, 0.11, 0.075, 'triangle');
      playTone(659.25, now + 0.2, 0.14, 0.08, 'triangle');
      playTone(783.99, now + 0.34, 0.16, 0.075, 'sine');
    } else {
      // Lembut: nada turun agar memberi tanda salah tanpa terasa kasar.
      playTone(392, now, 0.12, 0.075, 'sine');
      playTone(293.66, now + 0.1, 0.16, 0.065, 'sine');
      playTone(220, now + 0.25, 0.12, 0.045, 'triangle');
    }
  }

  function normalizeText(str) {
    return (str || '')
      .toLowerCase()
      .trim()
      .replace(/[.,!?;:]/g, '')
      .replace(/\s+/g, ' ');
  }

  function formatText(value) {
    return renderTextWithRomaji(value);
  }

  function isAnswerCorrect(question, answer) {
    if (question.type === 'essay') {
      const acceptedRaw = Array.isArray(question.acceptedAnswers)
        ? question.acceptedAnswers
        : (question.acceptedAnswer ? [question.acceptedAnswer] : []);
      const accepted = acceptedRaw.map(normalizeText);
      return accepted.includes(normalizeText(answer));
    }
    return answer === question.correct;
  }

  function getCorrectText(question) {
    if (question.type === 'essay') {
      const acceptedRaw = Array.isArray(question.acceptedAnswers)
        ? question.acceptedAnswers
        : (question.acceptedAnswer ? [question.acceptedAnswer] : []);
      return acceptedRaw.join(' / ');
    }
    return question.options?.[question.correct] || '';
  }

  function fallbackOptionExplanation(question, optionIndex) {
    const letters = ['A', 'B', 'C', 'D'];
    if (optionIndex === question.correct) {
      return `Pilihan ${letters[optionIndex]} benar karena paling sesuai dengan konteks soal.`;
    }
    return `Pilihan ${letters[optionIndex]} belum tepat. Bandingkan dengan jawaban benar, yaitu “${getCorrectText(question)}”.`;
  }

  function getOptionExplanation(question, optionIndex) {
    if (Array.isArray(question.optionExplanations) && question.optionExplanations[optionIndex]) {
      return question.optionExplanations[optionIndex];
    }
    return fallbackOptionExplanation(question, optionIndex);
  }

  function buildOptionReview(question, selectedAnswer) {
    if (question.type !== 'multiple-choice') return '';
    const letters = ['A', 'B', 'C', 'D'];
    const items = question.options.map((opt, oi) => {
      const isCorrect = oi === question.correct;
      const isSelected = oi === selectedAnswer;
      const stateClass = isCorrect ? 'is-correct' : (isSelected ? 'is-selected-wrong' : 'is-wrong');
      const badgeText = isCorrect ? 'Jawaban benar' : (isSelected ? 'Pilihan Anda' : 'Pilihan salah');
      return `
        <div class="option-review-item ${stateClass}">
          <div class="option-review-head">
            <span class="option-review-letter">${letters[oi]}</span>
            <span class="option-review-text">${formatText(opt)}</span>
            <span class="option-review-badge">${badgeText}</span>
          </div>
          <p>${formatText(getOptionExplanation(question, oi))}</p>
        </div>
      `;
    }).join('');

    return `
      <details class="option-review" ${selectedAnswer !== question.correct ? 'open' : ''}>
        <summary>📌 Lihat pembahasan setiap opsi</summary>
        <div class="option-review-list">${items}</div>
      </details>
    `;
  }

  function buildFeedbackHTML(question, answer, wasCorrect) {
    const correctText = getCorrectText(question);

    if (question.type === 'essay') {
      const typed = typeof answer === 'string' ? answer.trim() : '';
      const mainMessage = wasCorrect
        ? 'Jawaban Anda tepat. Pertahankan!'
        : 'Jawaban Anda belum sesuai. Perhatikan jawaban yang diharapkan di bawah ini.';
      return `
        <div class="feedback-banner ${wasCorrect ? 'is-correct' : 'is-incorrect'}">
          <span class="feedback-emoji">${wasCorrect ? '🌸' : '🍃'}</span>
          <div>
            <strong>${wasCorrect ? 'Benar!' : 'Belum tepat.'}</strong>
            <span>${mainMessage}</span>
          </div>
        </div>
        <div class="answer-summary">
          ${typed ? `<p><strong>Jawaban Anda:</strong> ${formatText(typed)}</p>` : '<p><strong>Jawaban Anda:</strong> belum diisi.</p>'}
          <p><strong>Jawaban yang diharapkan:</strong> ${formatText(correctText)}</p>
          <p>${formatText(question.explanation || '')}</p>
        </div>
      `;
    }

    const letters = ['A', 'B', 'C', 'D'];
    const selectedText = question.options[answer] || '';
    const selectedExplanation = getOptionExplanation(question, answer);
    const correctExplanation = getOptionExplanation(question, question.correct);

    const banner = wasCorrect
      ? `
        <div class="feedback-banner is-correct">
          <span class="feedback-emoji">🎉</span>
          <div>
            <strong>Benar! Mantap.</strong>
            <span>Jawaban Anda sesuai dengan konteks materi.</span>
          </div>
        </div>
      `
      : `
        <div class="feedback-banner is-incorrect">
          <span class="feedback-emoji">💡</span>
          <div>
            <strong>Belum tepat.</strong>
            <span>Tenang, lihat alasan pilihan tersebut dan bandingkan dengan jawaban benar.</span>
          </div>
        </div>
      `;

    const summary = wasCorrect
      ? `
        <div class="answer-summary">
          <p><strong>Jawaban benar:</strong> ${letters[question.correct]}. ${formatText(correctText)}</p>
          <p>${formatText(correctExplanation || question.explanation || '')}</p>
        </div>
      `
      : `
        <div class="answer-summary">
          <p><strong>Jawaban Anda:</strong> ${letters[answer]}. ${formatText(selectedText)}</p>
          <p><strong>Mengapa salah?</strong> ${formatText(selectedExplanation)}</p>
          <p><strong>Jawaban benar:</strong> ${letters[question.correct]}. ${formatText(correctText)}</p>
          <p>${formatText(correctExplanation || question.explanation || '')}</p>
        </div>
      `;

    return `${banner}${summary}${buildOptionReview(question, answer)}`;
  }

  function feedbackDecorHTML(resultType) {
    if (resultType === 'correct') {
      return `
        <div class="quiz-confetti" aria-hidden="true">
          <span>🌸</span><span>✨</span><span>🎊</span><span>🌟</span><span>💮</span><span>✨</span>
        </div>
      `;
    }
    if (resultType === 'incorrect') {
      return `<div class="quiz-soft-hint" aria-hidden="true">💭</div>`;
    }
    return '';
  }

  function renderQuestion(index) {
    currentQ = index;
    const q = questions[index];
    const isEssay = q.type === 'essay';
    const pct = ((index + 1) / questions.length) * 100;
    quizFill.style.width = pct + '%';
    quizCurrentEl.textContent = index + 1;

    const letters = ['A', 'B', 'C', 'D'];
    const isAnswered = answered[index];
    const wasCorrect = isAnswered && isAnswerCorrect(q, answers[index]);
    const cardFeedbackClass = isAnswered ? (wasCorrect ? 'feedback-correct' : 'feedback-incorrect') : '';

    const optionsHTML = isEssay ? '' : q.options.map((opt, oi) => {
      let cls = 'option-btn';
      if (isAnswered) {
        if (oi === q.correct) cls += ' correct';
        else if (oi === answers[index] && answers[index] !== q.correct) cls += ' incorrect';
      } else if (answers[index] === oi) {
        cls += ' selected';
      }
      return `
        <button class="${cls}" data-option="${oi}" ${isAnswered ? 'disabled' : ''}>
          <span class="option-letter">${letters[oi]}</span>
          <span class="option-text">${formatText(opt)}</span>
        </button>
      `;
    }).join('');

    const answerUI = isEssay
      ? `
        <div class="essay-wrap">
          <textarea class="essay-input" id="essay-input" rows="4" placeholder="Ketik jawaban Anda di sini..." ${isAnswered ? 'disabled' : ''}></textarea>
          ${isAnswered ? '' : '<button class="quiz-nav-btn primary" id="essay-submit">Cek Jawaban</button>'}
        </div>
      `
      : `<div class="options-grid">${optionsHTML}</div>`;

    const explanationHTML = isAnswered ? buildFeedbackHTML(q, answers[index], wasCorrect) : '';
    const draftNoticeHTML = restoredDraftNotice ? `
      <div class="quiz-draft-notice">
        <span>💾</span>
        <div>
          <strong>Progres kuis Anda dipulihkan.</strong>
          <p>Jawaban yang pernah Anda isi tersimpan otomatis di peramban perangkat ini.</p>
        </div>
      </div>
    ` : '';

    quizInner.innerHTML = `
      ${draftNoticeHTML}
      <div class="question-card ${cardFeedbackClass}" id="question-container">
        ${isAnswered ? feedbackDecorHTML(wasCorrect ? 'correct' : 'incorrect') : ''}
        <div class="question-number">Soal ${index + 1} dari ${questions.length}</div>
        <div class="question-text">${formatText(q.question)}</div>
        ${answerUI}
        <div class="explanation-box ${isAnswered ? (wasCorrect ? 'correct-exp show' : 'incorrect-exp show') : ''}">
          ${explanationHTML}
        </div>
      </div>
      <div class="quiz-controls">
        <button class="quiz-nav-btn" id="quiz-prev" ${index === 0 ? 'disabled' : ''}>← Sebelumnya</button>
        <span class="quiz-position-pill">${index + 1} / ${questions.length}</span>
        ${index < questions.length - 1
        ? `<button class="quiz-nav-btn primary" id="quiz-next">Selanjutnya →</button>`
        : `<button class="quiz-nav-btn primary" id="quiz-finish" ${!isAnswered ? 'disabled' : ''}>Lihat Hasil 🎉</button>`
      }
      </div>
    `;

    restoredDraftNotice = false;

    const essayInputEl = quizInner.querySelector('#essay-input');
    if (essayInputEl && typeof answers[index] === 'string') {
      essayInputEl.value = answers[index];
    }

    quizInner.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const oi = parseInt(btn.dataset.option);
        const resultType = isAnswerCorrect(q, oi) ? 'correct' : 'incorrect';
        playFeedbackSound(resultType);
        answers[index] = oi;
        answered[index] = true;
        saveQuizDraft();
        renderQuestion(index);
        updateProgress();
      });
    });

    const essaySubmitEl = quizInner.querySelector('#essay-submit');
    if (essayInputEl && !isAnswered) {
      essayInputEl.addEventListener('input', () => {
        answers[index] = essayInputEl.value;
        saveQuizDraft();
      });
    }
    if (essaySubmitEl && essayInputEl) {
      essaySubmitEl.addEventListener('click', () => {
        const typedAnswer = essayInputEl.value;
        const resultType = isAnswerCorrect(q, typedAnswer) ? 'correct' : 'incorrect';
        playFeedbackSound(resultType);
        answers[index] = typedAnswer;
        answered[index] = true;
        saveQuizDraft();
        renderQuestion(index);
        updateProgress();
      });
    }

    const prevEl = quizInner.querySelector('#quiz-prev');
    const nextEl = quizInner.querySelector('#quiz-next');
    const finishEl = quizInner.querySelector('#quiz-finish');

    if (prevEl) prevEl.addEventListener('click', () => { currentQ--; saveQuizDraft(); renderQuestion(currentQ); });
    if (nextEl) nextEl.addEventListener('click', () => { currentQ++; saveQuizDraft(); renderQuestion(currentQ); });
    if (finishEl) finishEl.addEventListener('click', showResult);
  }

  function updateProgress() {
    const done = answered.filter(Boolean).length;
    const pct = Math.round((done / questions.length) * 100);
    document.getElementById('lesson-progress-fill').style.width = pct + '%';
    document.getElementById('lesson-progress-pct').textContent = `${pct}%`;
    document.getElementById('lesson-progress-count').textContent = `${done}/${questions.length} soal`;
    const answeredCount = document.getElementById('quiz-answered-count');
    if (answeredCount) answeredCount.textContent = `${done} dijawab`;
  }

  function showResult() {
    const correct = answers.reduce((acc, ans, i) => acc + (isAnswerCorrect(questions[i], ans) ? 1 : 0), 0);
    const score = Math.round((correct / questions.length) * 100);

    playFeedbackSound('finish');

    const { passed } = Progress.recordResult(lessonId, correct, questions.length);
    quizFinished = true;
    clearQuizDraft();

    const emoji = score >= 80 ? '🌸' : score >= 60 ? '📚' : '💪';
    const title = score >= 80 ? 'Luar Biasa!' : score >= 60 ? 'Bagus!' : 'Tetap Semangat!';
    const sub = score >= 80
      ? 'Anda telah menguasai pelajaran ini dengan sangat baik!'
      : score >= 60
        ? 'Hasil Anda sudah baik. Latih kembali materi ini agar semakin sempurna.'
        : 'Jangan menyerah. Ulangi pelajaran ini dan coba kembali.';

    const UNLOCK_CHAIN = { '1-1': '1-2', '1-2': '1-3', '1-3': '2-1', '2-1': '2-2', '2-2': '2-3', '2-3': '3-1', '3-1': '3-2', '3-2': '3-3', '3-3': '4-1' };
    const nextId = UNLOCK_CHAIN[lessonId];
    const unlockNotif = (passed && nextId)
      ? `<div class="unlock-notif">🔓 Pelajaran <strong>${nextId}</strong> telah terbuka!</div>`
      : (!passed ? `<div class="unlock-fail-notif">💡 Skor minimal 60% untuk membuka pelajaran berikutnya.</div>` : '');

    quizInner.innerHTML = `
      <div class="result-screen show">
        <div class="result-card-inner">
          <span class="result-emoji">${emoji}</span>
          <div class="result-title">${title}</div>
          <div class="result-score">${score}%</div>
          <div class="result-subtitle">${correct} dari ${questions.length} soal benar. ${sub}</div>
          ${unlockNotif}
          <div class="result-actions">
            <button class="btn btn-ghost" onclick="location.reload()">Ulangi Kuis</button>
            <button class="btn btn-ghost" id="review-result-btn">Beri Review</button>
            <button class="btn btn-primary" onclick="navigateTo('chapters.html')">Kembali ke Peta</button>
          </div>
        </div>
      </div>
    `;

    const reviewResultBtn = quizInner.querySelector('#review-result-btn');
    if (reviewResultBtn) {
      reviewResultBtn.addEventListener('click', () => {
        window.open(REVIEW_FORM_URL, '_blank', 'noopener,noreferrer');
        markReviewOfferSeen();
      });
    }

    maybeShowReviewPopup(score, correct);
  }

  renderQuestion(currentQ);
  updateProgress();
}
