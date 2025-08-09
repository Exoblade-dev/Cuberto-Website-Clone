<p align="center">
  <img src="https://via.placeholder.com/1200x520.png?text=Cuberto+Clone+Banner+-+Dark+Theme" alt="Cuberto Clone Banner" style="max-width:100%; border-radius:10px;" />
</p>

# Cuberto Website Clone 🎨

A pixel-inspired, premium clone of the [Cuberto](https://cuberto.com) design agency website — built for learning, UI/UX practice, and portfolio demonstration.

<p align="center">
  <a href="https://cuberto-website-clone-nu.vercel.app/" target="_blank" rel="noopener">
    <img alt="Live Demo" src="https://img.shields.io/badge/Live%20Demo-%2300ADB5?style=for-the-badge&logo=vercel&logoColor=white">
  </a>
</p>

---

## ✨ About
This project replicates the visual style and interaction feel of the Cuberto design agency website using plain HTML, CSS and JavaScript. It’s intended for learning animation patterns, layout precision, and micro-interactions (cursor, hover, and scroll based effects).

---

## 🎯 Key Features
- Responsive multi-page layout: **Home**, **Services**, **Projects**, **Company**, **Blog**, **Contacts**
- Custom navigation bar with animated link states
- Hero sections with background videos and media support
- Featured projects & services showcase with hover interactions
- Blog layout with categories and two-column posts view
- Custom fonts & icons via **Google Fonts**, **Remixicon**, and **Font Awesome**
- Ready-to-add animated micro-interactions (cursor follower, magnet effect, scroll reveals)
- Handcrafted CSS with structured, readable markup

---

## 📁 Project Structure
```
├── index.html
├── services.html
├── projects.html
├── company.html
├── blog.html
├── contacts.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   └── ... (images & svg assets)
├── fonts/
│   └── ... (custom font files)
└── video/
    └── ... (hero/background videos)
```

---

## 🚀 Quick Start (Local)
1. Clone the repo:
   ```bash
   git clone https://github.com/Exoblade-dev/Cuberto-Website-Clone.git
   ```
2. Open the project folder in VS Code (recommended).
3. Use Live Server or any static server for best results (avoids CORS issues with videos/fonts):
   - Install Live Server extension in VS Code and click Go Live, or
   - Run a simple Python server:
     ```bash
     python -m http.server 5500
     ```
   Then open http://localhost:5500 (or the port shown).

To view a single page, you can open index.html directly, but using a local server is recommended for proper video/font loading.

---

## 🛠 Tech Stack
- HTML5
- CSS3 (Flexbox / Grid, custom variables)
- JavaScript (Vanilla) — for interactivity and micro-interactions
- Icon & fonts: Font Awesome, Remixicon, Google Fonts (Roboto Flex)

### Optional libraries (for when you add animations):
- GSAP — complex, performant animations & timelines
- Lenis / Locomotive Scroll — smooth scrolling / scroll-based triggers
- three.js / PixiJS — for WebGL image effects (optional)

---

## 🧩 Animation / Interaction Ideas (to implement)
- Smooth page load timeline (nav → hero → content) with GSAP timelines
- Custom cursor / mouse follower (subtle easing; quickSetter for performance)
- Magnet hover on clickable elements (proximity-based translation & scale)
- Section reveal on scroll (fade + translate + stagger)
- Image hover: slight scale + mask / clip-path for organic effect

---

## 🔧 Customization
- Replace files inside images/ and video/ to personalize visuals.
- Tweak colors and typography in css/style.css (use CSS variables at the top).
- Add/remove pages; copy the header/footer partials where needed.

---

## ✅ Deployment
This repo is Vercel-ready. To deploy:
- Push the repo to GitHub (already done).
- Connect the repo to Vercel and set root to the project folder (default).
- Vercel will auto-deploy on each push.
- Live demo: https://cuberto-website-clone-nu.vercel.app/

---

## 📸 Screenshots / GIFs
Add short GIFs (3–6s) demonstrating your key animations (cursor follower, magnet, hero video) under the Preview section above. Use .gif or compressed .webm for smaller files.

Suggested filenames:
```
/assets/gifs/hero-intro.gif
/assets/gifs/cursor-follower.gif
/assets/screenshots/projects-section.png
```

---

## 🤝 Contributing
This repo is mainly for personal learning / portfolio. If you want to contribute or improve animations, open an issue or send a PR — I’ll review and merge reasonable improvements.

---

## 👨‍💻 Author
Exoblade-dev (Sahil)
- GitHub: https://github.com/Exoblade-dev
- Live Demo: https://cuberto-website-clone-nu.vercel.app/

---

## 📝 License
For educational & non-commercial use only. All third-party assets remain the property of their original owners. Reuse responsibly.

<p align="center" style="margin-top:1rem;">Made with ❤️ — inspired by <a href="https://cuberto.com" target="_blank" rel="noopener">Cuberto</a></p>
