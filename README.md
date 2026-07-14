<div align="center">

# 📄 SSCGRAM PDF Toolkit

**A 100% client-side PDF toolkit — runs entirely in your browser.**
No uploads. No backend. No tracking. Just open the page and go.

[![License: MIT](https://img.shields.io/badge/License-MIT-ffd35a.svg)](LICENSE)
[![Made with JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-f7df1e.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![100% Client Side](https://img.shields.io/badge/Runs-100%25%20in--browser-6fe3d6.svg)](#)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-79e08a.svg)](https://github.com/sscgram/PDF-toolkit/pulls)
[![GitHub Pages](https://img.shields.io/badge/Live-Demo-ff7ec8.svg)](https://sscgram.github.io/PDF-toolkit/)

[Live Demo](https://sscgram.github.io/PDF-toolkit/) · [Report a Bug](https://github.com/sscgram/PDF-toolkit/issues) · [Request a Feature](https://github.com/sscgram/PDF-toolkit/issues)

</div>

---

## 📚 Table of Contents

- [Why this exists](#-why-this-exists)
- [Modules](#-modules)
- [Live Demo](#-live-demo)
- [Quick Start](#-quick-start)
- [Deploy to GitHub Pages](#-deploy-to-github-pages)
- [Modules](#-modules)
- [Project Structure](#-project-structure)
- [Privacy Model](#-privacy-model)
- [Tech Stack](#-tech-stack)
- [Contributing](#-contributing)
- [License](#-license)

---

## 💡 Why this exists

Most "free PDF tool" websites quietly upload your files to a server first. This one doesn't have a server. Every conversion — image-to-PDF, split, merge, rotate, export — runs inside the browser tab using Canvas, `pdf.js`, and `jsPDF`. Close the tab and nothing you touched ever left your machine.

---

## 🧩 Modules
- **Image to PDF**: Convert images to PDF with EXIF-based rotation, custom margins, headers, footers, and watermarks.
- **Split & Merge**: Reorder, rotate, merge, split, and export PDF pages as images.
- **Live Preview**: All tools feature a **Before/After live preview** in the lightbox modal to visualize margins, watermarks, and headers before generating.

---

## 🚀 Live Demo

**[pdf-toolkit.sscgram.com](https://pdf-toolkit.sscgram.com/)**

No install, no signup — open the link and start converting.

---

## ⚙️ Quick Start

Run it locally in three lines:

```bash
git clone https://github.com/sscgram/PDF-toolkit.git
cd PDF-toolkit
index.html          # or use VS Code's "Live Server" extension, direct open index.html in browser
```

That's it — no `npm install`, no build step, no dependencies to fetch.

---

## 📦 Deploy to GitHub Pages

1. Go to **Settings → Pages → Build and deployment** and set the source to **GitHub Actions**.
2. Push your changes to `main`.
3. `.github/workflows/static.yml` picks it up automatically and publishes the site.

Your toolkit will be live at `https://<your-username>.github.io/<repo-name>/` within about a minute.

---

## 🗂️ Project Structure

```
.
├── .github/
│   └── workflows/
│       └── static.yml               # GitHub Pages deployment workflow
├── assets/                          # Global CSS, JS, and Images
│   ├── css/
│   │   ├── components.css           # UI components
│   │   ├── layout.css               # Responsive grid/layout
│   │   └── theme.css                # Global CSS variables
│   └── js/
│       ├── common.js                # Shared utilities (toast/busy)
│       └── ui.js                    # Header/Footer injection
├── tools/                           # PDF Modules
│   ├── image-to-pdf.html            # Image to PDF Tool
│   └── split-merge-pdftoimage.html  # Split/Merge Tool
├── index.html                       # Landing page
├── LICENSE                          # MIT License
└── README.md                        # Project documentation
```

---

## 🔒 Privacy Model

| | |
|---|---|
| **Server involved** | None |
| **Files uploaded** | Never |
| **Works offline** | Yes, after the first load |
| **Data collected** | None |

Everything runs in the browser's sandbox using the Canvas API. There's nothing to send, so there's nothing to intercept.

---

## 🛠️ Tech Stack

`HTML5` · `CSS3` · `JavaScript (ES6)` · `PDF.js` · `jsPDF` · `Canvas API` · `GitHub Actions`

---

## 🤝 Contributing

Issues and pull requests are welcome. If you're fixing a bug, a short description of how to reproduce it helps a lot. If you're proposing a feature, open an issue first so we can talk through the approach.

---

## 📄 License

Released under the **[MIT License](LICENSE)** — free to use, modify, and distribute.

<div align="center">

Made with ❤️ using HTML5, JavaScript, PDF.js & jsPDF · v1.0.0

</div>