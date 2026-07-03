# Improvement Plan

Goal: Make the page more responsive, smoother, and polished — without breaking existing functionality or introducing major architectural changes.

---

## ✅ Phase 1: Polish & UX Refinements (Completed)

### 1.1 Scroll-Active Section Highlight
- **Done**: `IntersectionObserver` in `App.tsx` tracks visible section; `activeSection` state passed to `Navbar` for link highlighting.

### 1.2 Entrance Animations on Scroll
- **Done**: `IntersectionObserver` adds `data-revealed` to sections when they enter viewport. CSS transitions animate `opacity` and `translateY` on direct children.

### 1.3 Hover/Transition Micro-Polish
- **Done**: Sidebar links now have underline animation on hover; active sidebar links highlighted with accent color.

### 1.4 Skill Tags — Consistent Sizing
- **Done**: `min-height: 2.25rem` and `display: inline-flex` with `align-items: center` on `.skill-tag`.

---

## ✅ Phase 2: Responsive Improvements (Completed)

### 2.1 Fluid Typography Scale
- **Done**: `p` elements use `font-size: clamp(1rem, 2.5vw, 1.1rem)`.

### 2.2 Contact Form Responsive
- **Done**: `.contact-form` has `max-width: 100%; min-width: 0`.

### 2.3 Timeline Responsive
- **Done**: At `480px` breakpoint, `::before` (line) and `.timeline-dot` hidden, `.timeline-item` padding removed for simple stacked layout.

### 2.4 Hero 3D Viewer on Mobile
- **Done**: `.hero-visual` uses `height: min(500px, 50vh)` instead of inline fixed `500px`.

---

## ✅ Phase 3: Smoothness & Performance (Completed)

### 3.1 Smooth Scroll to Section Offset
- **Done**: `scrollToSection` uses `window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' })` with `useCallback`.

### 3.2 Debounce Scroll Handler
- **Done**: Scroll listener gated with `requestAnimationFrame` and `passive: true`.

### 3.3 Lazy-Load 3D Model
- **Done**: `Hero3DViewer` imported via `React.lazy()` with a `<Suspense>` spinner fallback in `Hero/index.tsx`.

### 3.4 Image/Asset Optimization
- **Done**: `retro-computer.glb` compressed from 4.57MB → 73KB using `@gltf-transform/cli` with Draco compression.

---

## ✅ Phase 4: Cross-Browser & Accessibility (Completed)

### 4.1 Focus Styles & Reduced Motion
- **Done**: `:focus-visible` outlines on all interactive elements. `prefers-reduced-motion` disables all animations/transitions.

### 4.2 Meta Tags & SEO
- **Done**: Added `meta description`, `og:title`, `og:description`, `og:type`, `og:url` in `index.html`.

### 4.3 Background Pulse GPU Acceleration
- **Done**: `will-change: opacity` on `body::before` for GPU-accelerated rendering.

---

## Phase 5: Content Completeness (Not Started)

### 5.1 Portfolio Section — Populate
- Replace commented-out project data with real projects. Keep the card structure; add actual links, images, descriptions.

### 5.2 CV Download — Wire Up
- Add a PDF to `/public/` and create a download handler (or direct link).

### 5.3 Contact Form — Add Handler
- Implement a submit handler (e.g., `mailto:` fallback or formspree/email service).

---

## Phase 6: Developer Experience (Not Started)

### 6.1 Remove Unused Dependency
- Uninstall `iconsax-reactjs` from `package.json`.

### 6.2 Consolidate Lock Files
- Remove either `bun.lock` or `pnpm-lock.yaml` to match CI (Bun).

### 6.3 Testing Setup (Optional)
- Add Vitest + React Testing Library for component smoke tests.

---

## Items Explicitly Excluded (Breaking Changes)

- Switching to a CSS framework (e.g., full Tailwind migration, CSS Modules).
- Adding client-side routing (React Router, Next.js).
- Replacing Three.js with another 3D solution.
- Overhauling the i18n system.
- Migrating to a different bundler.
- Changing the component architecture (e.g., to atomic design).
