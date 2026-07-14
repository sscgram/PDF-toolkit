/* ============================================================
   ui.js — injects shared header + footer into every page
   Usage: call initUI({ toolName: 'Image to PDF' }) in each tool page
   ============================================================ */

const NAV_TOOLS = [
  { label: 'Image to PDF',   href: '/tools/image-to-pdf.html' },
  { label: 'Split & Merge',  href: '/tools/split-merge-pdftoimage.html' },
];

function initUI({ toolName = '', rootPath = '../' } = {}) {
  _injectFonts();
  _injectHeader(toolName, rootPath);
  _injectFooter(rootPath);
}

function _injectFonts() {
  if (document.getElementById('tk-fonts')) return;
  const link = document.createElement('link');
  link.id = 'tk-fonts';
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap';
  document.head.appendChild(link);
}

function _injectHeader(toolName, rootPath) {
  const currentPath = window.location.pathname;

  const navLinks = NAV_TOOLS.map(t => {
    const isActive = currentPath.includes(t.href.replace(/^\//, ''));
    return `<a href="${rootPath}${t.href.replace(/^\//, '')}" class="nav-link${isActive ? ' active' : ''}">${t.label}</a>`;
  }).join('');

  const toolLabel = toolName
    ? `<span class="brand-sep">/</span><span class="brand-tool">${toolName}</span>`
    : '';

  const header = document.createElement('header');
  header.className = 'topbar';
  header.innerHTML = `
    <div class="topbar-inner">
      <a href="${rootPath}index.html" class="brand">
        <img src="${rootPath}assets/images/SSCGRAM-logo.svg" alt="SSCGRAM" onerror="this.style.display='none'">
        <span>PDF Toolkit</span>
        ${toolLabel}
      </a>
      <nav class="nav-links" aria-label="Tools">
        <a href="${rootPath}index.html" class="nav-link${!toolName ? ' active' : ''}">Home</a>
        ${navLinks}
      </nav>
    </div>
  `;

  document.body.insertBefore(header, document.body.firstChild);
}

function _injectFooter(rootPath) {
  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = `
    <p>SSCGRAM PDF Toolkit &mdash; 100% client-side &middot; no uploads &middot; no tracking &middot; MIT License</p>
    <p style="margin-top:6px">
      <a href="${rootPath}index.html">Home</a> &middot;
      <a href="https://github.com/sscgram/PDF-toolkit" target="_blank" rel="noopener">GitHub</a>
    </p>
  `;
  document.body.appendChild(footer);
}
