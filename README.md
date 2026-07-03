# densergon.github.io

Personal portfolio website built with React 19, TypeScript, and Vite. Dark-themed SPA with i18n (EN/ES), a 3D hero model, and smooth-scroll vertical sections.

## Tech Stack

- **Framework**: React 19 + TypeScript (strict)
- **Bundler**: Vite 7 (SWC plugin)
- **Styling**: Tailwind CSS v4 + custom CSS design tokens
- **3D**: Three.js, @react-three/fiber, @react-three/drei
- **i18n**: i18next, react-i18next
- **CI/CD**: GitHub Actions → GitHub Pages

## Quick Start

```bash
pnpm install
pnpm dev       # dev server
pnpm build     # type-check + production build
pnpm lint      # ESLint
pnpm preview   # preview production build
```

## Project Structure

```
src/
  main.tsx             # Entry point
  App.tsx              # Root component + section composition
  index.css            # Design tokens, reset, animations
  App.css              # Tailwind + component styles
  utils/i18n.ts        # i18n init
  locales/             # EN/ES translations
  sections/            # 10 sections (navbar, hero, about, skills, portfolio, experience, education, cv, contact, footer)
```

## Key Features

- **No router** — single page, smooth-scroll `scrollIntoView` navigation
- **3D retro computer model** — Three.js with graceful error fallback
- **Bilingual** — English/Spanish toggle in navbar
- **Responsive** — 3 breakpoints (968px, 768px, 480px) with mobile hamburger sidebar
- **Dark theme** — CSS custom property design tokens with animated gradient background

See [AGENTS.md](./AGENTS.md) for detailed architecture and conventions.
