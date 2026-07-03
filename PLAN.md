# Hero & Animation Overhaul Plan

Current pain points: the retro computer 3D model feels dated, the background is a static gradient pulse, and animations are basic CSS keyframes with no spring physics or orchestrated sequences.

---

## Phase A: Replace Hero Visual (High Priority)

### A.1 Remove Retro Computer, Use Geometric Scene
- **What**: Replace `<Float>` + `retro-computer.glb` with a custom Three.js scene of floating geometric shapes (icosahedrons, torus knots, octahedrons) in a cluster.
- **Why**: A geometric abstract scene looks modern, aligns with the dev portfolio theme, and avoids the "outdated 3D asset" feeling.
- **How**: New component `HeroScene.tsx` that renders 3–5 floating polyhedra with different colors from the accent palette, slow rotation, gentle Float animation, and emissive materials that glow against the dark background.
- **Secondary**: Keep the `ErrorBoundary` wrapper and `<Suspense>` with spinner fallback.

### A.2 Particle Ring / Orbital Trail (Optional Enhancement)
- **What**: Add a ring of tiny particles orbiting the geometric shapes, creating a subtle tech/cyber aesthetic.
- **How**: `useFrame` to rotate a `THREE.BufferGeometry` of points in a ring pattern. Low vertex count (< 200) for performance.

---

## Phase B: Replace Background (High Priority)

### B.1 Animated Gradient Mesh
- **What**: Replace the static `body::before` radial gradient with a `<canvas>` or Three.js plane that animates gradient positions using simplex noise or sine waves.
- **How**: A full-viewport `<canvas>` (via `useEffect` or a lightweight `HeroBackground.tsx` component) drawing 3–4 gradient blobs that slowly drift and morph. Colors derived from `--color-accent-primary/secondary/tertiary` with low opacity.
- **Why**: The current fixed-position radial gradient is static (only opacity pulsing). Animated gradient positions create a living, breathing background that reacts to scroll position.

### B.2 Mouse-Responsive Parallax
- **What**: The gradient blobs shift subtly in response to mouse movement.
- **How**: Track `mousemove` on `document`, map coordinates to a small translation offset on the gradient layer.
- **Progressive enhancement**: Falls back to the current static gradient if JS fails.

---

## Phase C: Framer Motion Integration (Medium Priority)

Install `framer-motion` as a dependency. Replace CSS animations across all sections.

### C.1 Hero Text — Orchestrated Entrance
- **Wrap** `.hero-greeting`, `.hero-name`, `.hero-title`, `.hero-description`, `.hero-buttons` in a `<motion.div>` each.
- **Stagger** them with `variants` + `staggerChildren: 0.15` so each line enters sequentially.
- **Use** spring physics (`type: "spring", stiffness: 100, damping: 20`) instead of the current CSS `slideInLeft` and `fadeIn` keyframes.
- **Remove**: `.hero-content` CSS `animation: fadeIn`, `.hero-text` CSS `animation: slideInLeft`.

### A.1 Replace Hero 3D Scene (Related)
- **Wrap** `<HeroScene>` in a `<motion.div>` with `initial={{ opacity: 0, scale: 0.8 }}` → `animate={{ opacity: 1, scale: 1 }}` with spring transition, delayed to start after text has begun entering.

### C.2 Scroll Reveal — Framer Motion `whileInView`
- **Replace**: The `data-revealed` CSS transition system entirely.
- **In each section component**, wrap the root content in `<motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: "easeOut" }}>`.
- **Remove**: The `useEffect` IntersectionObserver for scroll reveal in `App.tsx`. Remove the `section[id]:not(#home) > *` opacity/transform CSS.

### C.3 Section Headers — Staggered Entry
- **Wrap** `.section-header` children (h2 + divider + subtitle) in a `<motion.div>` with staggered variants.
- **Delay** the content following the header (cards, grid items) to enter after the header.

### C.4 Skill Tags — Staggered Grid
- **Wrap** each `.skill-tag` in `<motion.span>` with `whileInView` stagger. Each tag pops in with a slight delay relative to its siblings.
- **Use** `transition: { type: "spring", stiffness: 200 }` for a bouncy feel.

### C.5 Project Cards — Lift on Hover
- **Wrap** each `.project-card` in `<motion.div whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300 }}>`.
- **Replace** the CSS `.project-card:hover` transform, but keep the `.project-overlay` fade.

### C.6 Timeline Items — Slide In
- **Wrap** each `.timeline-item` in `<motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>`.
- **Stagger** them with `transition: { delay: 0.2 }` per item.

### C.7 Navigation Link Underline — Layout Animation
- **Wrap** the navbar `a.active` indicator so the underline slides smoothly between links when `activeSection` changes.
- Use `<motion.div layoutId="nav-indicator">` for a shared layout animation.

---

## Phase D: Button & Card Micro-Interactions (Medium Priority)

### D.1 CTA Buttons — Ripple Effect on Click
- **What**: A ripple/circle expands from the click point on `.btn-primary` and `.btn-secondary`.
- **How**: Track click coordinates, render a `<motion.span>` that scales from 0 to 2x and fades out over 0.6s.
- **Fallback**: Pure CSS `::after` pseudo-element approach if Framer isn't desired.

### D.2 Stat Counters — Animated Numbers
- **What**: The "4+" and "30+" stats in the About section count up from 0 on scroll into view.
- **How**: Use `useInView` + `useSpring` to animate integer values. The "+" suffix stays fixed.

### D.3 Section Divider Width Animation
- **What**: `.section-divider` animates from `width: 0` to `width: 80px` when its section enters view.
- **How**: `<motion.div initial={{ width: 0 }} whileInView={{ width: 80 }}>` — pure width transition.

---

## Phase E: Background Polish (Lower Priority)

### E.1 Navbar Blur — Smooth Transition
- Current: `.navbar.scrolled` instantly gets `backdrop-filter: blur(10px)`. The `background` transitions but the blur is instantaneous.
- **Fix**: Animate the blur from `blur(0px)` to `blur(10px)` over 0.3s when scrolled.

### E.2 Scrollbar Styling Polish
- Current: Indigo accent scrollbar. Could add a gradient fade at top/bottom.
- **Add**: A `mask-image` linear gradient on the scrollbar thumb to fade edges slightly.

---

## Implementation Order

| Step | Phase | Effort | Impact |
|---|---|---|---|
| 1 | A.1 — Replace 3D with geometric scene | Medium | High |
| 2 | C.1 — Hero text orchestrated entrance | Low | High |
| 3 | C.2 — Framer scroll reveal (replace CSS) | Medium | High |
| 4 | B.1 — Animated gradient background | Medium | High |
| 5 | C.4 — Skill tags staggered | Low | Medium |
| 6 | C.6 — Timeline slide-in | Low | Medium |
| 7 | C.3 — Section headers stagger | Low | Medium |
| 8 | D.3 — Section divider width | Low | Medium |
| 9 | D.1 — Button ripple effect | Low | Medium |
| 10 | D.2 — Stat counters | Medium | Medium |
| 11 | B.2 — Mouse parallax on background | Low | Low |
| 12 | A.2 — Particle ring (optional) | Low | Low |
| 13 | C.5 — Card lift on hover | Low | Low |
| 14 | C.7 — Nav underline layout animation | Medium | Low |
| 15 | E.1 — Navbar blur transition | Low | Low |
| 16 | E.2 — Scrollbar polish | Low | Low |

---

## Files to Create / Modify

| File | Action |
|---|---|
| `src/sections/hero/HeroScene.tsx` | **NEW** — Geometric shapes scene, replaces Hero3DViewer |
| `src/sections/hero/index.tsx` | Modify — import HeroScene instead of Hero3DViewer |
| `src/sections/hero/Hero3DViewer.tsx` | Delete or archive |
| `public/retro-computer.glb` | Delete (no longer needed) |
| `src/components/HeroBackground.tsx` | **NEW** — Animated canvas gradient background |
| `src/App.tsx` | Modify — add HeroBackground, remove scroll reveal observer |
| `src/index.css` | Modify — remove scroll reveal CSS, update body background |
| `src/App.css` | Modify — remove slideInLeft/Right from hero, update overlay |
| All section `index.tsx` files | Modify — wrap content in `<motion.div>` for Framer scroll reveal |
| `package.json` | Add `framer-motion` dependency |

---

## Items Explicitly Excluded

- Adding a full-screen video hero background (heavy, slow)
- Scroll-triggered 3D model transitions (complex, no clear gain)
- Three.js smoke/fire/fluid effects (performance heavy)
- Full-page transitions / route-based animations (no router)
- Replacing the 3D viewer with a 2D illustration (user wants 3D, just better 3D)
