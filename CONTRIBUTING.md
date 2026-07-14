# Contributing to SSCGRAM PDF Toolkit

Thank you for contributing! To maintain the quality and consistency of the toolkit, please follow these guidelines.

## 🎨 Global Theme & UI Guidelines
We follow a unified "global theme" to ensure a seamless experience across all tools.

1. **Do Not Alter Core CSS**: 
   - We use shared files: `assets/css/theme.css`, `assets/css/layout.css`, and `assets/css/components.css`. 
   - **Do not modify** these core files unless you are making a global design change.
   - If you need custom styles for a specific tool, add them within that file's `<style>` tag, but try to use existing CSS variables (`--bg`, `--accent`, `--accent-dark`, etc.).

2. **Layout Consistency**:
   - Every tool page **must** use the standard `.page-wrap` and `.tool-layout` structure.
   - Sidebar panel should always be `aside.tool-panel` with `.card` components.
   - Preview area should be `main.tool-preview` to ensure the layout remains responsive.

3. **Live Preview Implementation**:
   - Any new tool should support the Canvas-based 'Before/After' preview.
   - Use the standard `modal-overlay` structure provided in existing tools.
   - Ensure the "After" preview reflects the actual logic applied during the PDF generation process.

4. **Code Structure**:
   - Always use the provided `common.js` and `ui.js` for shared functionality (e.g., header/footer injection, common toasts).
   - Keep scripts inside the HTML files organized and avoid polluting the global namespace.

## 🚀 How to Contribute
1. **Fork** the repository.
2. **Open an Issue** if you are planning a large feature.
3. **Branch** your work (e.g., `feat/new-tool` or `fix/bug-name`).
4. **Submit a Pull Request** with a description of your changes.

*Happy Coding!*