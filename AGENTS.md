# AGENTS.md — AI Agent Guide

## Project Overview

Personal portfolio SPA (single-page application) built with React 19 + TypeScript + Vite. Dark-themed developer portfolio with i18n (EN/ES), a 3D hero model, and smooth-scroll navigation between vertical sections. Deployed to GitHub Pages via CI/CD.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19.2.0 |
| Language | TypeScript ~5.9 (strict) |
| Bundler | Vite 7.2.4 |
| CSS | Tailwind CSS v4.1 + custom CSS with design tokens |
| 3D | Three.js, @react-three/fiber 9, @react-three/drei 10 |
| i18n | i18next 25, react-i18next 16 |
| Icons | react-icons 5 |
| Linting | ESLint 9 with typescript-eslint |
| CI/CD | GitHub Actions → GitHub Pages |
| Package | pnpm (CI uses Bun) |

---

## Directory Layout

```
src/
  main.tsx                   # Entry point
  App.tsx                    # Root component: scroll state, I18nextProvider, section composition
  index.css                  # Design tokens (CSS vars), reset, typography, animations, utilities
  App.css                    # Tailwind import + all component-specific styles
  utils/
    i18n.ts                  # i18next init with EN/ES resources
  locales/
    en.json                  # English translations
    es.json                  # Spanish translations
  sections/
    navbar/index.tsx         # Fixed top nav, desktop menu + mobile hamburger sidebar
    hero/index.tsx           # Hero with greeting, name, CTA buttons
    hero/Hero3DViewer.tsx    # Three.js retro computer model with fallback
    about/index.tsx          # Bio + stat cards
    skills/index.tsx         # Skill categories grid
    portfolio/index.tsx      # Project cards (currently placeholder)
    experience/index.tsx     # Timeline work history
    education/index.tsx      # Education + certifications
    cv/index.tsx             # Download CV card
    contact/index.tsx        # Contact info + form + social links
    footer/index.tsx         # Copyright
```

---

## Architecture

### Single Page, No Router
- Navigation uses `scrollIntoView({ behavior: 'smooth' })` via `scrollToSection` prop.
- Each section rendered sequentially inside `App.tsx`. No React Router.

### Component Hierarchy
```
<App>
  <I18nextProvider>
    <Navbar />          ← receives isScrolled + scrollToSection
    <Hero />            ← receives scrollToSection
    <About />
    <Skills />
    <Portfolio />
    <Experience />
    <Education />
    <CV />
    <Contact />
    <Footer />
  </I18nextProvider>
</App>
```

### State
- `isScrolled` (boolean) in `App.tsx` — tracks scroll > 50px for navbar background.
- Scroll-to-section logic centralized in `App.tsx` and passed as prop.

---

## Styling System

### Design Tokens (CSS Custom Properties)
Defined in `:root` in `index.css`. Available globally. Key categories:
- **Colors**: `--color-bg-*`, `--color-text-*`, `--color-accent-*`
- **Gradients**: `--gradient-primary`, `--gradient-secondary`, `--gradient-glow`
- **Typography**: `--font-primary` (Inter), `--font-mono` (JetBrains Mono)
- **Spacing**: `--spacing-xs` through `--spacing-3xl`
- **Radius**: `--radius-sm` through `--radius-xl`
- **Shadows**: `--shadow-sm` through `--shadow-glow`
- **Transitions**: `--transition-fast/normal/slow`

### Component Styles
All component-specific styles live in `App.css`. Use BEM-ish class naming. Tailwind is installed but not used for utility classes.

### Responsive Breakpoints
- `max-width: 968px` — hero/contact go 1-column, desktop menu → hamburger
- `max-width: 768px` — grids go single column, reduced padding, smaller headings
- `max-width: 480px` — further reduced padding

### Animations
- `fadeInUp`, `fadeIn`, `slideInLeft`, `slideInRight` — entrance animations
- `float` — hover effect on cards/icons
- `glow` — pulsing glow border
- `backgroundPulse` — animated radial gradient background
- CSS transitions on hover for all interactive elements

---

## i18n System

- Initialized in `src/utils/i18n.ts`.
- Translations in `src/locales/en.json` and `es.json`.
- Each section has its own namespace matching the section name.
- Usage: `const { t } = useTranslation("sectionName")` then `t("key")`.
- Language toggle in Navbar calls `i18n.changeLanguage()`.

---

## 3D Component (Hero3DViewer)

- Renders `retro-computer.glb` model via `@react-three/drei`'s `useGLTF`.
- Wrapped in `<Suspense>` with wireframe cube fallback.
- `ErrorBoundary` class component catches load failures gracefully.
- Features: Float animation, OrbitControls (auto-rotate, no zoom), Environment preset "city".

---

## Scripts

| Command | Action |
|---|---|
| `pnpm dev` | Start Vite dev server |
| `pnpm build` | `tsc -b && vite build` |
| `pnpm lint` | ESLint on all files |
| `pnpm preview` | Preview production build |

---

## CI/CD Pipeline

GitHub Actions workflow (`.github/workflows/deploy.yml`):
- Trigger: push to `main`
- Steps: checkout → setup Bun → `bun install` → `bun run build` → deploy to Pages
- Output: `dist/` folder uploaded as Pages artifact

---

## Code Conventions

- **Components**: Default export, PascalCase, functional with TypeScript props interface.
- **Sections**: Each in own folder with `index.tsx`.
- **Props**: Inline type annotation for single props; `interface` for complex.
- **CSS**: BEM-ish naming, global classes, no CSS Modules.
- **Translations**: Namespace per section in i18n files.
- **Imports**: React imports first, then libraries, then local.

---

## Implemented Improvements (Phases 1–4)

| Phase | Feature | Details |
|---|---|---|
| 1.1 | Active section highlight | `IntersectionObserver` tracks which section is in view; navbar links highlight accordingly |
| 1.2 | Scroll reveal animations | Sections animate in (`fadeInUp`) when they enter viewport via `IntersectionObserver` |
| 1.3 | Hover micro-polish | Sidebar links have underline animation, language toggle hover improved |
| 1.4 | Skill tag sizing | Uniform `min-height` and flex alignment for consistent tag sizing |
| 2.1 | Fluid typography | `clamp()` applied to body text (`p`) for better reading on all screens |
| 2.2 | Contact form responsiveness | `max-width: 100%` and `min-width: 0` on form container |
| 2.3 | Timeline mobile layout | Vertical line and dots hidden at 480px; simple stacked layout |
| 2.4 | Hero 3D responsive height | Changed from fixed 500px to `min(500px, 50vh)` |
| 3.1 | Scroll offset fix | `window.scrollTo` with 80px offset to account for fixed navbar |
| 3.2 | RAF throttle | Scroll handler gated with `requestAnimationFrame` for performance |
| 3.3 | Lazy 3D model | `React.lazy()` on `Hero3DViewer` with spinner fallback |
| 3.4 | GLB compression | `retro-computer.glb` compressed from 4.57MB → 73KB via Draco |
| 4.1 | Focus styles & reduced motion | `:focus-visible` outlines on all interactive elements; `prefers-reduced-motion` disables animations |
| 4.2 | Meta tags & SEO | Description, OG tags, improved title in `index.html` |
| 4.3 | GPU acceleration | `will-change: opacity` on animated background for smoother rendering |

## Known Gaps (Non-Breaking)

1. Portfolio section has no real project data (content is commented out).
2. CV download button has no file or handler.
3. Contact form has no submit handler (page refreshes on submit).
4. `iconsax-reactjs` dependency is unused.
5. No test infrastructure.
6. `bun.lock` and `pnpm-lock.yaml` both exist (CI uses Bun).
