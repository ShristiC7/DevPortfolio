# 🚀 Shristi Choudhary — Developer Universe Portfolio

A next-generation personal portfolio platform with immersive 3D galaxy experience.

## Tech Stack

- **React 18** + **Vite 5** — Lightning-fast dev & build
- **React Three Fiber** + **@react-three/drei** — 3D animations & WebGL
- **Framer Motion** — Smooth UI animations
- **CSS Modules** — Scoped component styles
- **Three.js** — 3D rendering engine

## Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── hero/
│   │   │   ├── Hero.jsx           # Landing + 3D avatar + passport photo
│   │   │   ├── Hero.module.css
│   │   │   ├── Avatar3D.jsx       # Interactive 3D orbital avatar
│   │   │   ├── Avatar3D.module.css
│   │   │   ├── About.jsx          # About section with 3D blob
│   │   │   └── About.module.css
│   │   ├── nav/
│   │   │   ├── Navbar.jsx         # Fixed frosted-glass navbar
│   │   │   └── Navbar.module.css
│   │   ├── skills/
│   │   │   ├── SkillsGalaxy.jsx   # 3D orbiting skills planet system
│   │   │   └── SkillsGalaxy.module.css
│   │   ├── projects/
│   │   │   ├── Projects.jsx       # Filterable project cards
│   │   │   └── Projects.module.css
│   │   ├── timeline/
│   │   │   ├── Timeline.jsx       # Animated learning timeline
│   │   │   └── Timeline.module.css
│   │   ├── hackathons/
│   │   │   ├── Hackathons.jsx     # Hackathon mission cards
│   │   │   └── Hackathons.module.css
│   │   ├── opensource/
│   │   │   ├── OpenSource.jsx     # GitHub stats + heatmap
│   │   │   └── OpenSource.module.css
│   │   ├── contact/
│   │   │   ├── Contact.jsx        # Contact hub
│   │   │   └── Contact.module.css
│   │   └── shared/
│   │       ├── CosmosBackground.jsx  # Parallax star canvas
│   │       ├── CosmosBackground.module.css
│   │       ├── CursorGlow.jsx        # Mouse glow effect
│   │       ├── CursorGlow.module.css
│   │       ├── Footer.jsx
│   │       └── Footer.module.css
│   ├── data/
│   │   └── portfolio.js           # ALL content — edit here
│   ├── styles/
│   │   └── globals.css            # Design tokens + global styles
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Adding Your Photo

1. Place your passport photo at `public/assets/photo.jpg`
2. In `src/data/portfolio.js`, update:
   ```js
   photoPlaceholder: false,
   photoUrl: '/assets/photo.jpg',
   ```
   The photo will appear both in the 3D avatar overlay AND the passport badge card.

## Updating Content

All content lives in **`src/data/portfolio.js`**:
- `personalInfo` — name, role, links, photo
- `skills` — tech stack with colors & levels
- `projects` — all project cards
- `timeline` — learning journey milestones
- `hackathons` — competition history
- `githubStats` — open source numbers

## 3D Features

| Component | 3D Effect |
|-----------|-----------|
| `Avatar3D` | Distorted sphere with orbital rings + floating dots |
| `About` (blob) | Animated distort blob with floating physics |
| `SkillsGalaxy` | Skill planets orbiting a central star in 3D |
| `CosmosBackground` | Parallax star field responding to mouse |

## Deploying

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag & drop the `dist/` folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Push dist/ to gh-pages branch
```
