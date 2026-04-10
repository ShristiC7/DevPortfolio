<div align="center">

# 🚀 Shristi Choudhary — Developer Universe

### A next-generation 3D interactive portfolio platform

*Skills orbit your identity. Projects become missions. Learning becomes exploration.*

[![React](https://img.shields.io/badge/React-18.2-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![Three.js](https://img.shields.io/badge/Three.js-r162-white?style=flat-square&logo=three.js&logoColor=black)](https://threejs.org)
[![Vite](https://img.shields.io/badge/Vite-5.1-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0055?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-C4A8FF?style=flat-square)](LICENSE)

</div>

---

## ✦ Overview

This is not a portfolio template. It is a **personal developer universe** — an immersive, WebGL-powered experience where:

- Skills are **3D planets orbiting your identity** as a central star
- Projects are **mission logs** filterable by status
- Learning milestones are **scroll-animated constellation points**
- A **3D avatar** with orbital rings and your passport photo greets every visitor
- The background is a **parallax starfield** responding to mouse movement in real time

Built from scratch with React 18, React Three Fiber, Framer Motion, and CSS Modules. Zero UI libraries. Zero templates. Every pixel intentional.

---

## 📸 Preview

```
┌─────────────────────────────────────────────────────┐
│  S.Choudhary          About  Skills  Projects  ...  │  ← Frosted-glass navbar
├─────────────────────────────────────────────────────┤
│                                                     │
│  ● Available          ╭─────────────────────╮       │
│                       │   3D Orbital Avatar  │       │
│  Shristi              │  ┌──────────────┐   │       │
│  Choudhary            │  │  [Photo/SC]  │   │       │  ← Passport photo in
│                       │  └──────────────┘   │       │    3D avatar center
│  Full-Stack Dev       │   Orbiting rings ✦  │       │
│  & AI/ML Engineer     ╰─────────────────────╯       │
│                       ┌─────────────────────┐       │
│  [Explore ↗] [GitHub] │ 🪪 Shristi Choudhary │       │  ← Passport badge card
│                       │  Developer · AI Eng  │       │
│                       └─────────────────────┘       │
└─────────────────────────────────────────────────────┘
         ✦ ✦  Parallax starfield background  ✦ ✦
```

---

## 🏗️ Project Structure

```
portfolio/
│
├── index.html                        # Entry point
├── vite.config.js                    # Vite + GLSL plugin config
├── package.json
├── README.md
│
├── public/
│   ├── favicon.svg                   # SC monogram favicon
│   └── assets/
│       └── photo.jpg                 # ← Drop your photo here (see setup)
│
└── src/
    │
    ├── main.jsx                      # React root mount
    ├── App.jsx                       # Component composition root
    │
    ├── data/
    │   └── portfolio.js              # ★ ALL CONTENT LIVES HERE ★
    │                                 #   Edit this file to update the site
    │
    ├── styles/
    │   └── globals.css               # Design tokens, resets, utility classes
    │
    └── components/
        │
        ├── hero/
        │   ├── Hero.jsx              # Landing section — name, role, CTAs
        │   ├── Hero.module.css
        │   ├── Avatar3D.jsx          # 3D orbital sphere + photo overlay
        │   ├── Avatar3D.module.css
        │   ├── About.jsx             # About section with 3D distort blob
        │   └── About.module.css
        │
        ├── nav/
        │   ├── Navbar.jsx            # Fixed frosted-glass navigation bar
        │   └── Navbar.module.css
        │
        ├── skills/
        │   ├── SkillsGalaxy.jsx      # 3D orbiting skill planets
        │   └── SkillsGalaxy.module.css
        │
        ├── projects/
        │   ├── Projects.jsx          # Filterable project card grid
        │   └── Projects.module.css
        │
        ├── timeline/
        │   ├── Timeline.jsx          # Scroll-animated learning milestones
        │   └── Timeline.module.css
        │
        ├── hackathons/
        │   ├── Hackathons.jsx        # Hackathon mission log cards
        │   └── Hackathons.module.css
        │
        ├── opensource/
        │   ├── OpenSource.jsx        # GitHub stats + contribution heatmap
        │   └── OpenSource.module.css
        │
        ├── contact/
        │   ├── Contact.jsx           # Contact links hub
        │   └── Contact.module.css
        │
        └── shared/
            ├── CosmosBackground.jsx  # Canvas-based parallax starfield
            ├── CosmosBackground.module.css
            ├── CursorGlow.jsx        # Radial cursor light follower
            ├── CursorGlow.module.css
            ├── Footer.jsx
            └── Footer.module.css
```

---

## ⚙️ Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Framework** | React 18 | Component architecture & reactivity |
| **Build Tool** | Vite 5 | Dev server, HMR, production bundling |
| **3D Rendering** | Three.js r162 | WebGL scene management |
| **React 3D** | React Three Fiber 8 | Declarative Three.js in React |
| **3D Helpers** | @react-three/drei | Sphere, Torus, Float, Stars, MeshDistortMaterial |
| **Animations** | Framer Motion 11 | Page transitions, scroll reveals, staggered entrance |
| **Styling** | CSS Modules | Scoped component styles, zero class collisions |
| **Design Tokens** | CSS Custom Properties | Centralized color system in `globals.css` |
| **GLSL Support** | vite-plugin-glsl | Custom shader imports (future expansion) |

### Why these choices?

- **Vite over CRA** — 10–50× faster dev server startup, native ESM, instant HMR
- **CSS Modules over Tailwind** — Full creative freedom without utility class constraints; no purge config; styles live with their component
- **R3F over raw Three.js** — Declarative, composable 3D scenes that fit naturally into React's rendering model
- **Framer Motion over GSAP** — Better React integration; layout animations; simpler `whileInView` scroll triggers

---

## 🚀 Getting Started

### Prerequisites

- Node.js **18+** (check with `node -v`)
- npm **9+** or pnpm/yarn equivalent

### Installation

```bash
# 1. Unzip the downloaded package
unzip portfolio-shristi.zip
cd portfolio

# 2. Install all dependencies (~30 seconds)
npm install

# 3. Start the development server
npm run dev
```

The dev server starts at **http://localhost:5173** with hot module replacement — changes reflect instantly without full page reload.

### Available Scripts

```bash
npm run dev        # Development server with HMR (localhost:5173)
npm run build      # Production build → outputs to /dist
npm run preview    # Preview the production build locally
```

---

## 📝 Personalizing the Portfolio

**Everything you need to change lives in one file:**

```
src/data/portfolio.js
```

You never need to touch JSX or CSS to update content. Here's every field explained:

### `personalInfo`

```js
export const personalInfo = {
  name: 'Shristi Choudhary',         // Your full name — used in hero H1
  role: 'Full-Stack Developer & AI/ML Engineer',
  tagline: '...',                     // One-liner shown under the role
  description: '...',                 // 2–3 sentence hero description
  github: 'https://github.com/...',   // Used in nav CTA + contact section
  linkedin: 'https://linkedin.com/...', 
  email: 'you@example.com',
  
  photoPlaceholder: true,             // ← Set to false once you add a photo
  photoUrl: null,                     // ← '/assets/photo.jpg' after adding
  
  available: true,                    // Controls the green "Available" dot
  funFacts: [                         // Chips shown in the About section
    { icon: '🎮', label: 'Strategy Gamer' },
    // add or remove freely
  ],
}
```

### Adding Your Passport Photo

```bash
# Copy your photo into the public directory
cp /path/to/your/photo.jpg public/assets/photo.jpg
```

Then in `src/data/portfolio.js`:
```js
photoPlaceholder: false,
photoUrl: '/assets/photo.jpg',
```

**Photo appears in two places automatically:**
1. Center of the 3D Avatar sphere (circular crop, 112px)
2. The passport badge card beside your name (portrait crop, 54×70px)

Photo tips for best results:
- Minimum **400×400px** for avatar, **300×400px** portrait ratio for badge
- Face centered, well-lit, neutral or minimal background
- JPEG or WebP preferred; PNG works too

### `skills`

```js
export const skills = [
  {
    name: 'React',
    category: 'Frontend',   // Groups pills: Frontend | Backend | Database | Tools | Language | AI
    color: '#61DAFB',        // Planet color in the 3D galaxy + pill hover color
    icon: '⚛',              // Emoji shown in tooltip and pill
    level: 90,              // 0–100; controls planet size in 3D scene
    desc: 'UI Component Framework',  // Shown in tooltip on hover
  },
  // Add as many as you like — the 3D orbit adjusts automatically
]
```

### `projects`

```js
export const projects = [
  {
    id: 1,                            // Must be unique
    title: 'ClauseWise',
    subtitle: 'AI Document Risk Analyzer',  // Shown in monospace under title
    description: '...',
    icon: '⚖',                        // Emoji in card icon box
    iconBg: 'rgba(114,255,203,0.1)',   // Icon box background tint
    status: 'live',                   // 'live' | 'hackathon' | 'wip' | null
    statusLabel: '● Live',            // Badge text
    stack: ['AI/ML', 'React', 'Node.js'],  // Tech badges
    github: 'https://github.com/...',
    demo: 'https://yoursite.com',     // Optional — shows ↗ button if present
    featured: true,                   // Adds a subtle border accent
    color: '#72FFCB',                 // Accent line on card hover
  },
]
```

**Status filter:** The projects section has filter buttons — `All Missions`, `Live`, `Hackathon`, `In Dev`. Setting `status: null` means the project appears only under "All".

### `timeline`

```js
export const timeline = [
  {
    year: '2024 — Present',   // Displayed in monospace above title
    title: 'AI/ML Engineering',
    desc: '...',              // 2–3 sentence description
    color: 'var(--lav)',      // Dot color — use CSS vars or hex
  },
  // Items render top-to-bottom, latest first is conventional
]
```

### `hackathons`

```js
export const hackathons = [
  {
    icon: '🏆',
    name: 'Smart India Hackathon',
    project: 'MediFast — Online Medical Wellness Platform',
    role: 'Full-Stack Developer',
    result: 'Selected',           // Shown as badge text
    status: 'hackathon',          // Controls badge color: 'live' | 'hackathon' | 'wip'
    color: '#FFD580',             // Card hover accent color
  },
]
```

### `githubStats`

```js
export const githubStats = {
  repos: '15+',
  contributions: '200+',
  languages: '8+',
  streak: '🔥',
  username: 'ShristiC7',   // Used in heatmap label
}
```

---

## 🎨 Design System

All design tokens are defined as CSS custom properties in `src/styles/globals.css`:

### Color Palette

```css
/* Backgrounds */
--void: #060410;            /* Deep space black — body background */
--nebula-deep: #0a0520;     /* Card & surface backgrounds */
--nebula-mid: #130830;      /* Elevated surface */

/* Brand Colors */
--lav: #C4A8FF;             /* Primary — lavender */
--lav-dim: #9B7FE0;         /* Muted lavender */
--lav-glow: rgba(196,168,255,0.35); /* Glow effects */
--peach: #FFB09A;           /* Accent — warm peach */
--peach-dim: #E8896A;       /* Muted peach */

/* Supporting */
--cyan: #7EDDFF;            /* Info / cool accent */
--rose: #FF7EB3;            /* Warning / warm accent */
--gold: #FFD580;            /* Hackathon / highlight */
--green-neon: #72FFCB;      /* Live / success */

/* Text */
--dust: #F0E8FF;            /* Primary text */
--dust-dim: #C8B8F0;        /* Secondary text */
```

### Typography

```css
--font-display: 'Syne', sans-serif;      /* Headings — 800 weight */
--font-body: 'DM Sans', sans-serif;      /* Body — 300/400/500 weight */
--font-mono: 'Space Mono', monospace;    /* Labels, dates, badges */
```

### Reusable Classes

Defined globally so any component can use them without import:

```css
.grad-text          /* Lavender→Peach gradient text */
.section-label      /* Monospace section counter "01 — About" */
.section-title      /* Large display heading */
.section-wrap       /* Max-width 1100px centered container */
.btn-primary        /* Gradient filled button */
.btn-ghost          /* Ghost/outline button */
.status-badge       /* Base badge */
.status-live        /* Green "● Live" badge */
.status-hackathon   /* Gold hackathon badge */
.status-wip         /* Cyan "◎ In Dev" badge */
.tech-badge         /* Monospace tech stack pill */
```

---

## 🔮 3D Components — How They Work

### `Avatar3D.jsx`
The hero's centerpiece. A React Three Fiber scene with:

| Layer | What it is |
|-------|-----------|
| `CoreSphere` | Two nested `<Sphere>` meshes — outer with `MeshDistortMaterial` (animated warp), inner solid metallic core |
| `OrbitalRings` | Three `<Torus>` geometries at different radii, inclinations, and rotation speeds |
| `OrbitingDots` | 5 small spheres whose positions are updated every frame via `useFrame`, tracing elliptical paths in 3D space |
| `Stars` | Drei's `<Stars>` helper — 500 procedural background particles |
| Photo overlay | A CSS-positioned `<div>` centered over the canvas using `position: absolute` — the 3D scene and photo are independent layers |

```jsx
// The photo appears via CSS on top of the WebGL canvas
<div className={styles.photoOverlay}>
  <img src={photoUrl} alt="Shristi" className={styles.photo} />
</div>
```

### `SkillsGalaxy.jsx`
Each skill from `portfolio.js` becomes a planet:

- **Orbit radius** = `1.4 + (index % 4) * 0.7` — 4 orbit bands
- **Planet size** = `0.13 + skill.level * 0.002` — bigger = higher proficiency
- **Orbit speed** = varies per index, all counter/clockwise
- **Orbit tilt** = `index * 23.5°` in radians — no two planets share the same plane
- **Hover detection** = raycasting via R3F's `onPointerEnter` / `onPointerLeave`
- **Tooltip** = absolute-positioned div that fades in with Framer Motion

### `About.jsx` — Distort Blob
A single `<Sphere>` with `MeshDistortMaterial`:
- `distort={0.45}` — how much the surface warps
- `speed={2}` — animation speed of the warp
- Wrapped in Drei's `<Float>` for gentle up-down floating physics

### `CosmosBackground.jsx`
A plain `<canvas>` element managed via `useEffect`:
- Stars are generated at `screenArea / 2800` density
- Each star has individual `depth` (1–4) for parallax magnitude
- Mouse position shifts star X/Y by `depth * 10` pixels — deeper stars move more
- `requestAnimationFrame` loop; cleaned up on unmount to prevent memory leaks

---

## 🚢 Deployment

### Option 1 — Vercel (Recommended, ~2 minutes)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
vercel

# Follow prompts — framework auto-detected as Vite
# Production URL given immediately
```

For subsequent deployments:
```bash
vercel --prod
```

### Option 2 — Netlify

```bash
# Build the project
npm run build

# Option A: Netlify CLI
npm i -g netlify-cli
netlify deploy --dir=dist --prod

# Option B: Drag & drop
# Go to netlify.com → "Add new site" → drag the /dist folder
```

Add a `netlify.toml` in the project root for SPA routing:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Option 3 — GitHub Pages

```bash
# Install gh-pages helper
npm install -D gh-pages

# Add to package.json scripts:
# "deploy": "gh-pages -d dist"

# Build & deploy
npm run build
npm run deploy
```

Add to `vite.config.js`:
```js
export default defineConfig({
  base: '/your-repo-name/',   // ← your GitHub repo name
  plugins: [react(), glsl()],
})
```

### Option 4 — Self-Hosted / VPS

```bash
npm run build
# Serve the /dist directory with any static file server

# Using nginx:
# Point root to /path/to/portfolio/dist
# Add try_files $uri $uri/ /index.html; for SPA routing

# Using serve (quick test):
npx serve dist
```

---

## 🔧 Customization Guide

### Adding a New Section

1. Create `src/components/mysection/MySection.jsx` and `MySection.module.css`
2. Export a default React component
3. Import and add it to `src/App.jsx` in the desired position
4. Add a nav link in `src/components/nav/Navbar.jsx` (the `links` array)
5. Add your content to `src/data/portfolio.js`

### Changing the Color Scheme

Edit the CSS custom properties at the top of `src/styles/globals.css`. The entire site updates — all component styles reference these variables.

```css
/* Example: Switch to a teal/coral scheme */
:root {
  --lav: #7EFFD4;       /* was lavender */
  --peach: #FF8C69;     /* stays warm */
}
```

### Adding a New Skill

In `src/data/portfolio.js`, add to the `skills` array:

```js
{ name: 'Rust', category: 'Language', color: '#CE422B', icon: '⚙', level: 60, desc: 'Systems Programming' },
```

The 3D galaxy and skill pills update automatically. No component changes needed.

### Adding a New Project

In `src/data/portfolio.js`, add to the `projects` array:

```js
{
  id: 10,                              // increment from last ID
  title: 'My New Project',
  subtitle: 'Short descriptor',
  description: 'What it does and why it matters.',
  icon: '🔬',
  iconBg: 'rgba(196,168,255,0.1)',
  status: 'wip',
  statusLabel: '◎ In Dev',
  stack: ['React', 'Python'],
  github: 'https://github.com/ShristiC7/my-project',
  color: '#C4A8FF',
},
```

### Replacing the Monogram with a Real Photo

```
public/assets/photo.jpg     ← place photo here
```

```js
// src/data/portfolio.js
photoPlaceholder: false,
photoUrl: '/assets/photo.jpg',
```

That's it. No component changes. The photo auto-populates both the avatar center and the passport badge.

### Adjusting 3D Performance

If the 3D scenes feel heavy on lower-end devices, tune these values in their respective components:

```jsx
// CosmosBackground.jsx — reduce star density
const count = Math.floor(W * H / 4000)   // was /2800

// Avatar3D.jsx — reduce geometry segments
<Sphere args={[1.1, 32, 32]}>   // was [1.1, 64, 64]

// SkillsGalaxy.jsx — reduce star count
<Stars count={200} />            // was 400
```

---

## 🐛 Troubleshooting

### `WebGL not supported` error
Your browser or device doesn't support WebGL. The starfield and 3D scenes require it. Chrome, Firefox, Safari, and Edge all support WebGL by default. Check `chrome://flags` and ensure hardware acceleration is on.

### 3D scene not rendering / blank canvas
Ensure your browser's GPU process isn't blocked. Open DevTools → Console and look for Three.js or WebGL errors. Common fix: update GPU drivers.

### `Module not found: @react-three/fiber`
Run `npm install` again. If using Node.js < 18, upgrade — R3F requires modern module resolution.

### Fonts not loading
The Google Fonts `<link>` in `index.html` requires an internet connection at dev time. For offline development, download the fonts and serve them locally via `/public/fonts/`.

### Skills planets not visible
This is usually a camera/FOV issue if you've edited the Canvas. The SkillsGalaxy camera is set to `position: [0, 2, 6.5]` and `fov: 50` — restore these values if the scene looks empty.

### Photo not appearing in avatar
Verify: (1) file is at `public/assets/photo.jpg`, (2) `photoPlaceholder: false` in `portfolio.js`, (3) `photoUrl: '/assets/photo.jpg'` — the leading `/` is required.

---

## 📈 Performance

| Metric | Target | Notes |
|--------|--------|-------|
| Lighthouse Performance | > 85 | 3D scenes are lazy-loaded with `<Suspense>` |
| First Contentful Paint | < 1.5s | Text content renders before 3D resolves |
| Time to Interactive | < 3s | 3D canvas is non-blocking |
| JS Bundle (gzipped) | ~180KB | Three.js is the dominant dependency |
| 60fps Animations | ✓ | All animations use `transform` / `opacity` only |

**3D Performance Tips:**
- `CosmosBackground` uses a plain 2D canvas — no WebGL overhead for the starfield
- R3F scenes use `alpha: true` so they layer over the CSS background without a separate clear pass
- `<Stars>` from Drei uses instanced geometry — 400 stars is a single draw call
- `MeshDistortMaterial` is the most GPU-intensive element; reduce `distort` or `speed` if needed

---

## 🗺️ Roadmap (Phase 2)

- [ ] **AI Chatbot** — "Ask about Shristi" — GPT/Claude-powered chat assistant
- [ ] **Blog Section** — MDX-powered writing showcase
- [ ] **Recruiter Analytics** — Track section engagement time
- [ ] **Dark/Nebula Mode Toggle** — Switch between color schemes
- [ ] **Voice Navigation** — Speak section names to scroll
- [ ] **GitHub API Integration** — Live repo data via GitHub GraphQL API
- [ ] **Custom GLSL Shaders** — Full custom vertex/fragment shaders for the avatar

---

## 📄 License

MIT © Shristi Choudhary — free to use and adapt with attribution.

---

<div align="center">

Built with React, Three.js, and cosmic energy ✦

*Designed for recruiters to feel like astronauts discovering talent.*

**[GitHub](https://github.com/ShristiC7) · [LinkedIn](https://www.linkedin.com/in/shristi-c-3a3518290)**

</div>
