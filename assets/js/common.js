/* ============================================================
   common.js — shared utilities for all tool pages
   ============================================================ */

/* ---- Toast ---- */
const Toast = (() => {
  let el = null;
  let timer = null;

  function getEl() {
    if (!el) {
      el = document.createElement('div');
      el.className = 'toast';
      document.body.appendChild(el);
    }
    return el;
  }

  function show(msg, type = '', duration = 3200) {
    const t = getEl();
    t.textContent = msg;
    t.className = 'toast show' + (type ? ' ' + type : '');
    clearTimeout(timer);
    timer = setTimeout(() => t.classList.remove('show'), duration);
  }

  return {
    show,
    success: (msg) => show(msg, 'success'),
    error:   (msg) => show(msg, 'error'),
  };
})();

/* ---- Busy overlay ---- */
const Busy = (() => {
  let el = null;
  let textEl = null;

  function getEl() {
    if (!el) {
      el = document.createElement('div');
      el.className = 'busy-overlay';
      el.innerHTML = '<div class="busy-spinner"></div><p class="busy-text"></p>';
      textEl = el.querySelector('.busy-text');
      document.body.appendChild(el);
    }
    return el;
  }

  return {
    show(msg = 'Processing...') {
      const o = getEl();
      textEl.textContent = msg;
      o.classList.add('open');
    },
    hide() {
      if (el) el.classList.remove('open');
    }
  };
})();

/* ---- Download helper ---- */
function downloadBlob(data, filename) {
  const blob = (data instanceof Blob) ? data : new Blob([data], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
}

/* ---- Slug helper ---- */
function slug(s) {
  return (s || 'sscgram').toString().trim().toLowerCase()
    .replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'sscgram';
}

/* ---- Format file size ---- */
function formatSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}
