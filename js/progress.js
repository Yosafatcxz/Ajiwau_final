// ============================================================
// Ajiwau — Progress Manager (localStorage)
// ============================================================
//
// Completion data is stored in localStorage under key "ajiwau_progress".
// Unfinished quiz answers are stored under key "ajiwau_quiz_drafts".
// This keeps progress on the same browser/device after refresh or publish.
// ============================================================

const STORAGE_KEY = 'ajiwau_progress';
const DRAFT_STORAGE_KEY = 'ajiwau_quiz_drafts';
const PROGRESS_VERSION = 2;

// Normal progress mode: only the first lesson is open at the start.
// The next lesson opens after the current lesson is passed.
const ALL_LESSON_IDS_FALLBACK = ['1-1','1-2','1-3','2-1','2-2','2-3','3-1','3-2','3-3','4-1'];
// Define the unlock chain: completing X unlocks Y
const UNLOCK_CHAIN = {
    '1-1': '1-2',
    '1-2': '1-3',
    '1-3': '2-1',
    '2-1': '2-2',
    '2-2': '2-3',
    '2-3': '3-1',
    '3-1': '3-2',
    '3-2': '3-3',
    '3-3': '4-1',
};

// Minimum score (%) to count as "completed" and unlock next
const PASS_SCORE = 60;


function getAllLessonIds() {
    try {
        if (typeof APP_DATA !== 'undefined' && APP_DATA.lessons) {
            return Object.keys(APP_DATA.lessons);
        }
    } catch {
        // Ignore and use fallback.
    }
    return [...ALL_LESSON_IDS_FALLBACK];
}

function isPassedResult(result) {
    return !!result && Number(result.score || 0) >= PASS_SCORE;
}

function normalizeSequentialProgress(data) {
    const normalized = data || {};

    if (!normalized.completedLessons || typeof normalized.completedLessons !== 'object' || Array.isArray(normalized.completedLessons)) {
        normalized.completedLessons = {};
    }

    const legalUnlocked = ['1-1'];
    let currentId = '1-1';

    while (currentId) {
        const result = normalized.completedLessons[currentId];
        if (!isPassedResult(result)) break;

        const nextId = UNLOCK_CHAIN[currentId];
        if (!nextId) break;

        if (!legalUnlocked.includes(nextId)) legalUnlocked.push(nextId);
        currentId = nextId;
    }

    normalized.unlockedLessons = legalUnlocked.filter((lessonId) => getAllLessonIds().includes(lessonId));
    if (!normalized.unlockedLessons.includes('1-1')) normalized.unlockedLessons.unshift('1-1');

    return normalized;
}

// ── Core Read / Write ────────────────────────────────────────

function loadProgress() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return defaultProgress();
        const data = JSON.parse(raw);
        data.version = PROGRESS_VERSION;
        const normalized = normalizeSequentialProgress(data);
        saveProgress(normalized);
        return normalized;
    } catch {
        return defaultProgress();
    }
}

function saveProgress(data) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
        console.warn('[Ajiwau] Could not save progress:', e);
    }
}

function defaultProgress() {
    return normalizeSequentialProgress({
        version: PROGRESS_VERSION,
        completedLessons: {},
        unlockedLessons: ['1-1'],
        lastUpdatedAt: null,
    });
}

function readDrafts() {
    try {
        const raw = localStorage.getItem(DRAFT_STORAGE_KEY);
        return raw ? JSON.parse(raw) : {};
    } catch {
        return {};
    }
}

function writeDrafts(drafts) {
    try {
        localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(drafts));
    } catch (e) {
        console.warn('[Ajiwau] Could not save quiz draft:', e);
    }
}

function hasAnyMeaningfulAnswer(answers, answered) {
    if (!Array.isArray(answers) || !Array.isArray(answered)) return false;
    return answered.some(Boolean) || answers.some((answer) => {
        if (answer === null || answer === undefined) return false;
        if (typeof answer === 'string') return answer.trim().length > 0;
        return true;
    });
}

// ── Public API ───────────────────────────────────────────────

const Progress = {

    /**
     * Get the full progress object.
     */
    get() {
        return loadProgress();
    },

    /**
     * Check if a lesson is unlocked.
     * @param {string} lessonId  e.g. "1-1"
     */
    isUnlocked(lessonId) {
        const data = loadProgress();
        return data.unlockedLessons.includes(lessonId);
    },

    /**
     * Check if a lesson has been completed (passed).
     * @param {string} lessonId
     */
    isCompleted(lessonId) {
        const data = loadProgress();
        return isPassedResult(data.completedLessons[lessonId]);
    },

    /**
     * Get saved result for a lesson (or null).
     * @param {string} lessonId
     */
    getResult(lessonId) {
        const data = loadProgress();
        const result = data.completedLessons[lessonId];
        return isPassedResult(result) ? result : null;
    },

    /**
     * Record a quiz result. Unlocks next lesson if score >= PASS_SCORE.
     * @param {string} lessonId
     * @param {number} correct   number of correct answers
     * @param {number} total     total questions
     */
    recordResult(lessonId, correct, total) {
        const data = loadProgress();
        const score = Math.round((correct / total) * 100);
        const passed = score >= PASS_SCORE;

        data.lastUpdatedAt = new Date().toISOString();
        data.lastLessonId = lessonId;

        // Only a passed quiz counts as completed and unlocks the next lesson.
        // A failed attempt does not overwrite an existing passed result.
        if (passed) {
            const existing = data.completedLessons[lessonId];
            if (!existing || score > existing.score) {
                data.completedLessons[lessonId] = {
                    score,
                    correct,
                    total,
                    passed: true,
                    completedAt: new Date().toISOString(),
                };
            }
        }

        const normalized = normalizeSequentialProgress(data);
        saveProgress(normalized);
        return { score, passed };
    },

    /**
     * Get overall stats.
     */
    stats() {
        const data = loadProgress();
        const totalLessons = getAllLessonIds().length;
        const completed = Object.values(data.completedLessons).filter(isPassedResult).length;
        const pct = Math.round((completed / totalLessons) * 100);
        return { completed, totalLessons, pct, unlockedCount: data.unlockedLessons.length };
    },

    /**
     * Save unfinished quiz work for a lesson. This lets users continue
     * from the same question after closing or refreshing the page.
     * @param {string} lessonId
     * @param {{currentQ:number, answers:Array, answered:Array, total:number}} draft
     */
    saveDraft(lessonId, draft) {
        if (!lessonId || !draft) return;

        const answers = Array.isArray(draft.answers) ? draft.answers : [];
        const answered = Array.isArray(draft.answered) ? draft.answered : [];
        const total = Number(draft.total || answers.length || answered.length || 0);

        if (!hasAnyMeaningfulAnswer(answers, answered)) {
            this.clearDraft(lessonId);
            return;
        }

        const drafts = readDrafts();
        drafts[lessonId] = {
            version: PROGRESS_VERSION,
            lessonId,
            currentQ: Math.max(0, Number(draft.currentQ || 0)),
            total,
            answers,
            answered,
            updatedAt: new Date().toISOString(),
        };
        writeDrafts(drafts);
    },

    /**
     * Get unfinished quiz work for a lesson.
     * @param {string} lessonId
     */
    getDraft(lessonId) {
        const drafts = readDrafts();
        const draft = drafts[lessonId];
        if (!draft || draft.version !== PROGRESS_VERSION) return null;
        return draft;
    },

    /**
     * Delete unfinished quiz work for a lesson.
     * @param {string} lessonId
     */
    clearDraft(lessonId) {
        const drafts = readDrafts();
        if (drafts[lessonId]) {
            delete drafts[lessonId];
            writeDrafts(drafts);
        }
    },

    /**
     * Delete every unfinished quiz draft.
     */
    clearAllDrafts() {
        localStorage.removeItem(DRAFT_STORAGE_KEY);
    },

    /**
     * Reset all progress (with confirmation).
     */
    reset() {
        if (confirm('Reset semua progres belajar Anda? Tindakan ini tidak dapat dibatalkan.')) {
            localStorage.removeItem(STORAGE_KEY);
            localStorage.removeItem(DRAFT_STORAGE_KEY);
            Object.keys(localStorage)
                .filter((key) => key.startsWith('ajiwau-review-offer-'))
                .forEach((key) => localStorage.removeItem(key));
            location.reload();
        }
    },
};
