// ============================================================
// Ajiwau — Shared App Logic
// ============================================================

/**
 * Navigate to a page with a simple fade-out transition.
 * @param {string} url
 */
function navigateTo(url) {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    setTimeout(() => { window.location.href = url; }, 280);
}

/**
 * Get a URL query parameter by name.
 * @param {string} name
 * @returns {string|null}
 */
function getParam(name) {
    return new URLSearchParams(window.location.search).get(name);
}

/**
 * Fade in the page on load.
 */
function initPageFade() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.45s ease';
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            document.body.style.opacity = '1';
        });
    });
}

// Run on every page
document.addEventListener('DOMContentLoaded', initPageFade);
