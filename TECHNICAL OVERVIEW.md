# Technical Overview — Rizky Cristian S - Portofolio

## Project Summary

A personal portfolio website for **Rizky Cristian S**, a mobile software engineer. The site is a single-page application (SPA) built with React + TypeScript, styled with Tailwind CSS and shadcn/ui, and bundled with Vite. It showcases projects, a career timeline, bio, and contact information with scroll-driven animations powered by Framer Motion.

---

## Core Components

### Tech Stack

| Layer         | Technology                                        |
| ------------- | ------------------------------------------------- |
| Language      | TypeScript 5.8                                    |
| UI Framework  | React 19                                          |
| Build Tool    | Vite 7 (SWC plugin)                               |
| Styling       | Tailwind CSS 3.4 + CSS Variables (HSL tokens)     |
| Component Lib | shadcn/ui (Radix UI primitives)                   |
| Animation     | Framer Motion 12                                  |
| Smooth Scroll | Lenis                                             |
| Routing       | React Router DOM 7                                |
| Data Fetching | TanStack React Query 5 (configured, not yet used) |
| Testing       | Vitest + Testing Library + jsdom                  |
| Linting       | ESLint 9 (flat config) + typescript-eslint        |
| Fonts         | Google Fonts — Inter, Sora, Playfair Display      |

### Major Modules

#### Pages (`src/pages/`)

| File           | Responsibility                                                             |
| -------------- | -------------------------------------------------------------------------- |
| `Home.tsx`    | Main landing page — composes all sections, initialises Lenis smooth scroll |
| `NotFound.tsx` | 404 catch-all — logs missing route, provides link back to home             |

#### Section Components (`src/components/`)

| Component          | Responsibility                                                                                                                                                   |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Header.tsx`       | Fixed top navigation bar with desktop nav links, mobile Sheet (hamburger menu), CV/certificate links, and theme toggle. Smooth-scrolls to sections.              |
| `Hero.tsx`         | Full-viewport hero with animated text reveal (`rise` variants), real-time WIB clock, and parallax scroll.                                                        |
| `About.tsx`        | Three parallax-offset headings ("Agile Dev / Clean Architecture / Smooth UX") + descriptive paragraph.                                                           |
| `Career.tsx`       | Vertical timeline of career milestones (2019–2024) with alternating left/right layout, accent-colored dots, parallax heading, and staggered `fadeUp` animations. |
| `Skills.tsx`       | Displays a grid of technical skills with icons, using stagger animations for entry.                                                                              |
| `Project.tsx`      | "Selected Work" section — renders featured mobile projects, web/full-stack project cards, QA document links, and preview/live-site interactions.                 |
| `Footer.tsx`       | Infinite marquee banner (tech stack keywords on accent background), contact CTA, social links, copyright. Uses `fadeUp` animation and CSS `@keyframes marquee`.  |
| `CustomCursor.tsx` | Custom circular cursor (80 px, mix-blend-mode: difference) that appears on hover over `[data-cursor-view]` elements. Disabled on touch devices.                  |
| `NavLink.tsx`      | Thin wrapper around React Router's `NavLink` supporting `activeClassName` / `pendingClassName` via `cn()`.                                                       |

#### UI Primitives (`src/components/ui/`)

~50 shadcn/ui components auto-generated via the shadcn CLI. They wrap Radix UI primitives and expose a consistent API using `class-variance-authority` and `cn()`.

#### Utilities & Hooks

| File                       | Purpose                                                        |
| -------------------------- | -------------------------------------------------------------- |
| `src/lib/utils.ts`         | `cn()` — merges Tailwind classes via `clsx` + `tailwind-merge` |
| `src/hooks/use-mobile.tsx` | Hook to detect mobile viewport                                 |
| `src/hooks/use-toast.ts`   | Toast state hook (shadcn/ui)                                   |

---

## Component Interactions

### Data & Control Flow

```
main.tsx
 └─ App.tsx
     ├─ QueryClientProvider (TanStack React Query)
     ├─ TooltipProvider (Radix)
     ├─ Toaster / Sonner (toast notifications)
     └─ BrowserRouter
          ├─ "/" → Home page
          │       ├─ CustomCursor (global, pointer tracking)
          │       ├─ Header (fixed, smooth-scroll nav)
          │       └─ <main>
          │            ├─ Hero
          │            ├─ About
          │            ├─ Career (timeline)
          │            ├─ Skills (grid)
          │            ├─ Project (featured mobile + web/full-stack + QA showcases)
          │            └─ Footer (marquee + contact)
          └─ "*" → NotFound page
```

- **Navigation**: In-page smooth scrolling via `element.scrollIntoView()` triggered from `Header`. Current section IDs are `home`, `about`, `career`, `skills`, `projects`, and `contact`. No multi-page routing is used beyond the 404 catch-all.
- **Animation**: Framer Motion `useScroll` + `useTransform` provide parallax; `variants` + `whileInView` trigger viewport-based entrance animations.
- **Smooth Scroll**: Lenis is instantiated in `Home.tsx` via `useEffect`, running its own `requestAnimationFrame` loop and cleaning up on unmount.
- **Custom Cursor**: Listens to `mousemove` globally and toggles visibility on `mouseenter` / `mouseleave` of `[data-cursor-view]` elements (project cards).
- **Marquee**: CSS-only infinite horizontal scroll (`@keyframes marquee`) in `Footer.tsx`, duplicating a `<span>` for seamless looping.

### Communication Methods

- **Props down**: Standard unidirectional React data flow.
- **DOM queries**: `CustomCursor` and `Header` use `document.getElementById` / `querySelectorAll` for scroll targets and cursor hover zones.
- **CSS Variables**: Light and dark design tokens (colors, radius) are defined as HSL CSS custom properties in `src/index.css` and consumed by Tailwind config. Theme switching is wired through `next-themes` and `ThemeToggle`.

---

## Deployment Architecture

### Build Steps

1. `pnpm install` — install dependencies (pnpm lockfile present; npm/bun also supported)
2. `vite build` — produces optimised static assets in `dist/`
3. `vite preview` — local preview of production build

### Output

Pure static SPA (`dist/` folder) — can be deployed to any static hosting (Vercel, Netlify, Cloudflare Pages, GitHub Pages).

### External Dependencies at Runtime

- **Google Fonts CDN** — Inter, Sora, Playfair Display loaded via `<link>` in `index.html`.
- No backend API or database.

### Environments

Single environment (production static build). No staging/dev-specific configuration beyond Vite's `--mode development` build variant.

---

## Runtime Behavior

### Initialization

1. Browser loads `index.html` → Vite entry `src/main.tsx`.
2. `createRoot` mounts `<App />` into `#root`.
3. `App` sets up providers (QueryClient, Tooltip, Toasters) and `BrowserRouter`.
4. Route `/` renders `Home`, which mounts Lenis smooth scroll and all section components.
5. Framer Motion animations begin immediately (hero text rise) and on scroll (About, Career, Skills, Project parallax / fade-up).

### Request Handling

- Client-side only. All routes are handled by React Router in the browser.
- `"*"` catch-all renders `NotFound` component and logs a console error.

### Background Tasks

- **Lenis RAF loop**: Runs continuously via `requestAnimationFrame` for smooth scroll interpolation; destroyed on `Home` unmount.
- **Clock interval**: `setInterval` in `Hero` updates WIB time every 60 seconds; cleared on unmount.
- **Cursor tracking**: `mousemove` global listener in `CustomCursor`; removed on unmount.
- **Marquee animation**: Pure CSS infinite animation (`marquee 20s linear infinite`) in `Footer` — no JS overhead.

### Error Handling

- 404 routes log `console.error` with the attempted pathname.
- No global error boundary is currently implemented.
- Toast infrastructure (shadcn Toaster + Sonner) is wired but not actively used.

---

## Design Patterns & Architectural Notes

- **Component-per-section**: Each visible section (Hero, About, Career, Skills, Project, Footer) is an isolated component with its own animation logic.
- **CSS-in-utility**: Tailwind utility classes with custom font-family utilities (`font-display`, `font-serif-italic`, `font-body`).
- **HSL token system**: All colors defined as CSS custom properties in HSL format, consumed by Tailwind's `hsl(var(--*))` pattern for easy theming.
- **shadcn/ui pattern**: UI primitives are copied into the codebase (not imported from a package), allowing full customisation.
- **Path aliasing**: `@/` maps to `src/` via both TypeScript `paths` and Vite `resolve.alias`.
- **Timeline pattern**: `Career.tsx` uses a data-driven array of milestones with alternating left/right layout on desktop, linear on mobile.
- **Marquee pattern**: `Footer.tsx` duplicates content text into two `<span>` elements with CSS `translateX` animation for seamless infinite scrolling.
