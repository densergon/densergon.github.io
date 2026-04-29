# AGENTS.md

## Project Overview

Personal portfolio website for Daniel Serna Gonzalez — a Computing Systems Engineer based in Mexico City. Deployed as a GitHub Pages site at densergon.github.io.

## Tech Stack

- **Framework:** React 19 + TypeScript 5.9
- **Build Tool:** Vite 7 (with @vitejs/plugin-react-swc for SWC compilation)
- **Styling:** Tailwind CSS 4 (via @tailwindcss/vite plugin) + custom CSS (App.css / index.css with CSS variables)
- **3D Graphics:** Three.js + @react-three/fiber + @react-three/drei (hero section 3D model viewer)
- **Internationalization:** i18next + react-i18next (English & Spanish)
- **Icons:** react-icons, iconsax-reactjs
- **Package Manager:** Bun (bun.lock present)
- **Linting:** ESLint 9 with typescript-eslint, react-hooks, react-refresh plugins
- **Deployment:** GitHub Pages (static site, base: '/')

## Commands

```bash
bun run dev        # Start dev server (Vite)
bun run build      # TypeScript check + Vite production build
bun run lint       # ESLint linting
bun run preview    # Preview production build locally
```

## Project Structure

```
src/
├── main.tsx              # App entry point
├── App.tsx               # Root component, scroll state, I18nextProvider wrapper
├── index.css             # Global CSS variables, animations, typography, scrollbar, responsive
├── App.css               # Tailwind import + all section-specific CSS (navbar, hero, about, skills, portfolio, experience, education, cv, contact, footer, mobile sidebar)
├── locales/
│   ├── en.json           # English translations
│   └── es.json           # Spanish translations
├── utils/
│   └── i18n.ts           # i18next configuration
└── sections/
    ├── navbar/index.tsx          # Fixed navbar + mobile hamburger sidebar, language toggle (EN/ES)
    ├── hero/
    │   ├── index.tsx             # Hero section with greeting, name, title, CTA buttons
    │   └── Hero3DViewer.tsx      # Three.js Canvas with GLTF model (retro-computer.glb), OrbitControls, ErrorBoundary
    ├── about/index.tsx           # Bio text + stats (years experience, projects)
    ├── skills/index.tsx          # 6 skill categories in card grid with tags
    ├── portfolio/index.tsx       # Project showcase (currently empty — placeholder cards commented out)
    ├── experience/index.tsx      # Timeline with 2 roles: Penteon (2024–Present), SOLTEC (2021–2024)
    ├── education/index.tsx       # IPN/ESCOM degree + certifications
    ├── cv/index.tsx              # CV download card (non-functional — no PDF link)
    ├── contact/index.tsx         # Contact info + form (form has no submission logic)
    └── footer/index.tsx          # Copyright footer
```

## Key Patterns & Conventions

- **Sections:** Each section is a directory under `src/sections/` with an `index.tsx` default export
- **Translations:** All user-facing text uses `useTranslation("namespace")` with keys from locale JSON files. Section namespaces match the section folder name (navbar, hero, about, skills, portfolio, experience, education, contact)
- **Styling:** Dual approach — Tailwind CSS 4 imported in App.css + extensive custom CSS in index.css/App.css using CSS custom properties (variables). Tailwind is available but most styling is currently custom CSS with BEM-like class names
- **CSS Variables:** Color palette, spacing, radii, shadows, and transitions defined in `:root` in index.css
- **3D Viewer:** Uses ErrorBoundary + Suspense pattern for graceful fallback if GLTF model fails to load
- **Navigation:** Smooth scroll via `scrollToSection()` passed as prop from App. Mobile uses hamburger → sidebar overlay pattern
- **Language Toggle:** Navbar button switches between 'en' and 'es' via i18n.changeLanguage()
- **No state management library:** Component state only (useState, useEffect)
- **No routing:** Single-page scroll-based navigation

## Build & Type Check

- `bun run build` runs `tsc -b && vite build` — TypeScript errors will fail the build
- `bun run lint` runs ESLint with strict TypeScript rules (noUnusedLocals, noUnusedParameters, strict mode)
- Always run `bun run lint` after making changes to verify code quality
- Always run `bun run build` to verify TypeScript compiles and Vite builds successfully

## Known Issues / Incomplete Features

- **Portfolio section:** Project cards are commented out — section renders empty
- **CV section:** Download button has no actual PDF link or download functionality
- **Contact form:** No form submission logic (no API endpoint, no email service integration)
- **Footer:** Hardcoded year "2024" — should be dynamic
- **Social links in contact:** Point to generic URLs (github.com, linkedin.com, twitter.com) not personal profiles
- **Contact email/phone:** Placeholder values (daniel.serna@email.com, +1 (234) 567-890)
- **Mobile nav:** Nav menu hidden at 480px with no alternative (hamburger only appears at 968px)

## Style Guidelines

- No comments in code unless explicitly requested
- Follow existing patterns: functional components with default exports, useTranslation hooks for i18n
- Maintain the dark theme aesthetic: deep navy/purple backgrounds with indigo/violet/pink accent gradients
- Keep CSS consistent with existing variable-based approach in index.css/App.css
- When adding new sections, create a folder under `src/sections/` with `index.tsx`
- When adding translatable text, add keys to both `en.json` and `es.json`, then register in `i18n.ts`
