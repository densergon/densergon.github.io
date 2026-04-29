# Portfolio Upgrade — Atomic Operational Breakdown (UI/UX Enhanced)

> **Environment:** `bun` not available; using `npm` for build verification.
> Source: `PLAN.md` upgraded with `ui-ux-pro-max` Design Intelligence.
> Goal: Transition from a generic dark theme to a professional, high-contrast, Vibrant & Block-based portfolio.
> **PREPARE** = research, audit, gather assets, write configs — zero source-code mutations.
> **EXECUTE** = apply changes, write code, compile, verify.

---

## Phase 1 · Visual & Brand Overhaul

### 1.1 Typography Transition (Inter → Archivo + Space Grotesk)
*Design Goal: Combine the authority of Archivo (Headings) with the modern, technical feel of Space Grotesk (Body).*

#### PREPARE
- [x] **1.1.P1** Audit current font usage: identify every reference to `Inter` and `JetBrains Mono` in `index.css` (line 1 — `@import url(...)`, line 26 — `--font-primary`, line 27 — `--font-mono`).
- [x] **1.1.P2** Confirm target font stack: `Archivo` (Headings, weights 600 / 700 / 800), `Space Grotesk` (Body, weights 300 / 400 / 500 / 600).
- [x] **1.1.P3** Generate the Google Fonts import URL for the exact weights.
- [x] **1.1.P4** Identify every CSS rule that hardcodes a `font-family` value outside of `var(--font-*)` (scan `App.css`).

#### EXECUTE
- [x] **1.1.E1** Replace the `@import url(...)` on line 1 of `index.css` with the new Google Fonts URL.
- [x] **1.1.E2** Update `--font-primary` (line 26) to `'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`.
- [x] **1.1.E3** Add a new CSS variable `--font-heading: 'Archivo', var(--font-primary)` inside `:root`.
- [x] **1.1.E4** Apply `font-family: var(--font-heading)` to `h1, h2, h3, h4, h5, h6` (lines 112–121).
- [x] **1.1.E5** Ensure body / button / input / textarea inherit `var(--font-primary)`.
- [x] **1.1.E6** Run `bun run build` — confirm zero errors.
- [x] **1.1.E7** Visual check: verify headings render in Archivo and body text in Space Grotesk.

---

### 1.2 Color Palette Refinement ("Code Dark" High Contrast)
*Design Goal: Implement a professional "Code Dark" aesthetic using a Slate-based scale with a vibrant Green accent for CTAs.*

#### PREPARE
- [x] **1.2.P1** Document target palette:
  - Background: `#0F172A` (Deep Slate)
  - Text Primary: `#F8FAFC` (Off-White)
  - CTA / Accent Green: `#22C55E` (Vibrant Emerald)
- [x] **1.2.P2** Audit every CSS variable in `:root` (lines 3–54 of `index.css`) and map to new palette.
- [x] **1.2.P3** Audit every hardcoded hex/rgba in `index.css` and `App.css` (especially syntax colors in `App.css`).
- [x] **1.2.P4** Define derived palette: secondary backgrounds (`#1E293B`), muted text (`#94A3B8`), and border alphas.
- [x] **1.2.P5** Verify contrast ratios: Ensure text-on-bg is $\ge 4.5:1$ (AA) and accent-on-bg is $\ge 3:1$.

#### EXECUTE
- [x] **1.2.E1** Update `--color-bg-primary` → `#0F172A`.
- [x] **1.2.E2** Update `--color-bg-secondary` → `#1E293B`.
- [x] **1.2.E3** Update `--color-bg-tertiary` → `#334155`.
- [x] **1.2.E4** Update `--color-bg-card` rgba to match new secondary.
- [x] **1.2.E5** Update `--color-text-primary` → `#F8FAFC`.
- [x] **1.2.E6** Update `--color-text-secondary` and `--color-text-muted` using the Slate scale.
- [x] **1.2.E7** Update `--color-accent-primary` → `#22C55E`.
- [x] **1.2.E8** Update `--gradient-primary`, `--gradient-secondary`, and `--gradient-glow` to harmonize with Emerald.
- [x] **1.2.E9** Update `body::before` radial-gradient colors (lines 86–88 of `index.css`).
- [x] **1.2.E10** Update `.navbar.scrolled` background rgba (line 22 of `App.css`).
- [x] **1.2.E11** Update `.scrollbar-thumb` colors (lines 356–363 of `index.css`).
- [x] **1.2.E12** Replace remaining hardcoded `rgba(99, 102, 241, ...)` with variable-based values.
- [x] **1.2.E13** Run `bun run build` and visual check all sections for "indigo remnants".

---

### 1.3 Layout Shift — Vibrant & Block-Based
*Design Goal: Move from standard padding to a bold, energetic layout with geometric accents and high visual impact.*

#### PREPARE
- [x] **1.3.P1** Audit `section` padding: current `6rem` is good, but determine if *inter-section* margins are needed for a blockier feel.
- [x] **1.3.P2** Map geometric accent locations: angled dividers (`clip-path`), dot-grid backgrounds, or floating SVG shapes.
- [x] **1.3.P3** Audit hover effects: identify every interactive element and plan a "Bolder" transition (e.g., scale + color shift).
- [x] **1.3.P4** Define "Large Type" thresholds: Ensure major headings are $\ge 32\text{px}$ for impact.

#### EXECUTE
- [x] **1.3.E1** Enforce the $48\text{px}+$ spacing rhythm between all major section containers.
- [x] **1.3.E2** Add geometric decorative elements: use `clip-path` on section backgrounds (e.g., `.about`, `.portfolio`) to create angled transitions.
- [x] **1.3.E3** Upgrade card hover: `translateY(-4px)` $\to$ `translateY(-8px)` + `scale(1.02)` + `transition: 200ms ease-out`.
- [x] **1.3.E4** Implement "Bold Hover" for tags and stat-items: intensify `box-shadow` and shift accent color.
- [x] **1.3.E5** Apply consistent `border-radius: var(--radius-xl)` (2rem) on major cards for the block aesthetic.
- [x] **1.3.E6** Implement a global `max-width` for desktop content (e.g., `max-w-7xl`) to prevent overly stretched lines.
- [x] **1.3.E7** Run `bun run build` and verify on all breakpoints.

---

## Phase 2 · Feature Completion (Critical)

### 2.1 Portfolio Section — Masonry Grid + Filtering + Lightbox
*Design Goal: "Visuals First" approach. A project-centric grid that prioritizes imagery and fast browsing.*

#### PREPARE
- [x] **2.1.P1** Define project data model: `{ id, title, description, image, tags, category, liveUrl, repoUrl }`.
- [x] **2.1.P2** Gather real project content.
- [x] **2.1.P3** Define filter categories (`All`, `Web`, `Mobile`, etc.).
- [x] **2.1.P4** Add translation keys to `en.json`/`es.json` for filters and project details.
- [x] **2.1.P5** Design Lightbox: Custom modal with backdrop blur, large image, and clear CTA buttons.
- [x] **2.1.P6** Plan Masonry Layout: Compare CSS `column-count` vs Grid. Prioritize responsive column scaling.
- [x] **2.1.P7** Image Optimization Plan: Use **WebP/AVIF** formats to minimize load times and layout shift (CLS).

#### EXECUTE
- [x] **2.1.E1** Create `src/data/projects.ts` with typed project objects.
- [x] **2.1.E2** Update translation files and register `portfolio` namespace in `i18n.ts`.
- [x] **2.1.E3** Rewrite `src/sections/portfolio/index.tsx`:
  - Implement category filter state.
  - Render Masonry Grid of `ProjectCard` components.
  - **ProjectCard Design:** Image area $\to$ Hover Overlay (Title + "View") $\to$ Tech Tags.
- [x] **2.1.E4** Create `src/sections/portfolio/Lightbox.tsx`:
  - Full-screen blur overlay + Escape key / Click-outside close handlers.
  - Large project image + full description + primary CTAs.
- [x] **2.1.E5** Add CSS in `App.css` for `.portfolio-masonry`, `.portfolio-filters`, and `.lightbox-overlay`.
- [ ] **2.1.E6** Optimize images: Convert all project screenshots to WebP.
- [x] **2.1.E7** Run `bun run lint` + `bun run build`. Visual check: filter functionality $\to$ masonry flow $\to$ lightbox smoothness.

---

### 2.2 CV Download — Functional PDF Download

#### PREPARE
- [x] **2.2.P1** Obtain actual CV PDF $\to$ place in `public/cv/Daniel_Serna_CV.pdf`.
- [x] **2.2.P2** Add `cv` translation keys and register namespace in `i18n.ts`.

#### EXECUTE
- [x] **2.2.E1** Implement `<a>` tag with `download` attribute and `target="_blank"`.
- [x] **2.2.E2** Replace hardcoded text with `useTranslation("cv")` calls.
- [x] **2.2.E3** Run `bun run build` and verify PDF is served from `/dist/cv/`.

---

### 2.3 Contact Form — Formspree Integration + Real Data

#### PREPARE
- [x] **2.3.P1** Setup Formspree endpoint URL.
- [x] **2.3.P2** Replace all placeholder contact details with real data.
- [x] **2.3.P3** Add `contact` translation keys for success/error messages.
- [x] **2.3.P4** Design Submission UX: Button loading state $\to$ Success toast $\to$ Error recovery path.

#### EXECUTE
- [x] **2.3.E1** Update `src/sections/contact/index.tsx` with real email, phone, and social links.
- [x] **2.3.E2** Implement async `fetch` submission to Formspree.
- [x] **2.3.E3** Add `name` attributes to inputs for field mapping.
- [x] **2.3.E4** Implement `useState` for `submitting`, `submitted`, and `error` states.
- [x] **2.3.E5** Update form labels to `t()` calls.
- [x] **2.3.E6** Add `aria-label` to all inputs and submission button.
- [x] **2.3.E7** Run `bun run lint` + `bun run build` and test full submission flow.

---

### 2.4 Footer — Dynamic Year

#### EXECUTE
- [x] **2.4.E1** Replace hardcoded `2024` with `{new Date().getFullYear()}`.
- [x] **2.4.E2** (Optional) Implement `footer` translation namespace.

---

## Phase 3 · UX & Accessibility Improvements

### 3.1 Mobile Navigation Redesign
*Design Goal: Ensure a flawless, touch-first experience on all mobile devices.*

#### PREPARE
- [x] **3.1.P1** Audit breakpoints: ensure hamburger is the sole nav below $968\text{px}$ with no hidden states below $480\text{px}$.
- [x] **3.1.P2** Plan Touch Targets: Ensure all nav links and buttons are $\ge 44 \times 44\text{px}$ (Apple HIG) or $48 \times 48\text{dp}$ (Material).

#### EXECUTE
- [x] **3.1.E1** Remove redundant `@media (max-width: 480px)` rule in `App.css`.
- [x] **3.1.E2** Verify `.desktop-menu` is hidden and `.hamburger-btn` is visible for all widths $\le 968\text{px}$.
- [x] **3.1.E3** Update sidebar link padding to meet min $48 \times 48\text{px}$ touch target requirements.
- [ ] **3.1.E4** Implement `overflow: hidden` on `<body>` when sidebar is open to prevent background scroll.
- [x] **3.1.E5** Test at $320\text{px}, 375\text{px}, 414\text{px}, 768\text{px}$.

---

### 3.2 Interaction Standardization (150–300ms Transitions)
*Design Goal: Create a "snappy" feel using physics-based easing (ease-out) and consistent durations.*

#### PREPARE
- [x] **3.2.P1** Audit all transitions. Target: micro-interactions $150\text{--}300\text{ms}$.
- [x] **3.2.P2** Identify elements missing transitions (e.g., `.timeline-dot`, `.education-icon`).

#### EXECUTE
- [x] **3.2.E1** Update `--transition-slow` from $0.5\text{s} \to 0.3\text{s}$.
- [x] **3.2.E2** Apply `transition: all var(--transition-fast)` to all identified interactive elements.
- [x] **3.2.E3** Ensure all hover/active states use variable-based transitions, not hardcoded values.

---

### 3.3 Accessibility Audit (WCAG Compliance)
*Design Goal: Ensure the site is inclusive and usable for everyone, including keyboard and screen-reader users.*

#### PREPARE
- [x] **3.3.P1** Verify contrast ratios: Text $\ge 4.5:1$, Large Text/UI $\ge 3:1$.
- [x] **3.3.P2** Audit `aria-label` usage for icon-only buttons (Lang toggle, CV download, Social links).
- [x] **3.3.P3** Test keyboard focus order: Tab order must match visual order.
- [x] **3.3.P4** Check for `prefers-reduced-motion` support in CSS animations.

#### EXECUTE
- [x] **3.3.E1** Fix any contrast failures by adjusting Slate/Emerald values.
- [x] **3.3.E2** Implement dynamic `aria-label` for the language toggle (Switch to EN/ES).
- [x] **3.3.E3** Add `aria-label` to CV button and all social links.
- [x] **3.3.E4** Add `role="img"` and `aria-label="3D retro computer model"` to `Hero3DViewer` container.
- [x] **3.3.E5** Implement a global `:focus-visible` outline: `outline: 2px solid var(--color-accent-primary); outline-offset: 2px;`.
- [x] **3.3.E6** Add `tabIndex={0}` and keyboard handlers to non-anchor nav items.
- [ ] **3.3.E7** Wrap heavy animations in `@media (prefers-reduced-motion: no-preference)`.
- [ ] **3.3.E8** Final Tab-through test of the entire page.

---

## Phase 4 · Performance & Polish

### 4.1 3D Viewer Asset Optimization

#### PREPARE
- [ ] **4.1.P1** Audit `retro-computer.glb` size ($\sim 4.57\text{MB}$). Target: $< 2\text{MB}$.
- [ ] **4.1.P2** Plan compression: use `gltf-transform` (Draco/Meshopt) and texture resizing ($1024 \times 1024$).
- [ ] **4.1.P3** Design Loading UX: Replace wireframe fallback with a `useProgress` percentage bar.

#### EXECUTE
- [ ] **4.1.E1** Run `npx @gltf-transform/cli optimize` and `resize`.
- [ ] **4.1.E2** Replace `public/retro-computer.glb` with the optimized version.
- [ ] **4.1.E3** Implement loading progress indicator via `@react-three/drei`.
- [ ] **4.1.E4** Run `bun run build` and verify render quality vs. file size.

---

### 4.2 8px Spacing Rhythm

#### PREPARE
- [ ] **4.2.P1** Confirm `:root` scale is 8px-aligned (already verified: $8, 16, 24, 32, 48, 64, 96$).
- [ ] **4.2.P2** Scan for "off-rhythm" hardcoded values (e.g., $14\text{px}, 6.4\text{px}$) in `App.css` and `index.css`.

#### EXECUTE
- [ ] **4.2.E1** Replace non-compliant spacing with nearest 8px variable or explicit multiple.
- [ ] **4.2.E2** Convert all remaining raw rem/px values in padding/margin/gap to CSS variables.
- [ ] **4.2.E3** Final visual check for layout crowding or shifts.

---

## Verification Gate (Post-All-Phases)

- [ ] **V1** `bun run lint` $\to$ zero errors/warnings.
- [ ] **V2** `bun run build` $\to$ zero TS/Vite errors.
- [ ] **V3** Visual inspection at $320\text{px}, 768\text{px}, 1280\text{px}, 1920\text{px}$.
- [ ] **V4** Language toggle (EN $\leftrightarrow$ ES) $\to$ zero missing keys.
- [ ] **V5** Keyboard-only navigation flow test.
- [ ] **V6** Portfolio filters $\to$ Lightbox $\to$ Form submit $\to$ CV download.
- [ ] **V7** Lighthouse Audit: Performance, Accessibility, Best Practices, SEO $\ge 90$.
- [ ] **V8** Deploy to GitHub Pages $\to$ verify live site at `densergon.github.io`.
