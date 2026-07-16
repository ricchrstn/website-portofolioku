# Rizky Cristian S - Portofolio

## Project Snapshot

Personal portfolio SPA for a mobile software engineer. React 19 + TypeScript 5, Vite 7, Tailwind CSS 3.4, shadcn/ui, Framer Motion 12. Single-package repo — no monorepo tooling. See [TECHNICAL OVERVIEW.md](TECHNICAL%20OVERVIEW.md) for full architecture details.

## Setup Commands

```bash
# Install (pnpm lockfile present; npm/bun also work)
pnpm install

# Dev server (port 8080)
pnpm run dev

# Production build
pnpm run build

# Preview production build
pnpm run preview

# Lint
pnpm run lint

# Run tests
pnpm run test

# Type-check
pnpm exec tsc --noEmit
```

## Universal Conventions

- **Language**: TypeScript (strict-ish — `noImplicitAny: false`, `strictNullChecks: false`).
- **Imports**: Use `@/` alias for all `src/` imports (e.g. `@/components/Hero`).
- **Styling**: Tailwind utility classes only. Custom font utilities: `font-display`, `font-serif-italic`, `font-body`. Colors via HSL CSS variables in `src/index.css`.
- **Components**: Functional components with hooks. No class components.
- **Animation**: Framer Motion `variants` + `whileInView` / `useScroll` + `useTransform`.
- **UI primitives**: shadcn/ui components in `src/components/ui/` — generated via CLI, modified in-place.
- **Naming**: PascalCase for components, camelCase for hooks/utilities.
- **Commit style**: Conventional Commits (`feat:`, `fix:`, `chore:`, etc.).

## Security & Secrets

- No backend or API keys. Pure static site.
- Never commit credentials, tokens, or PII to the repo.
- `.env` files are gitignored by default.

## Project Structure

```
src/
├── assets/              # Static images (project mockups)
├── components/
│   ├── ui/              # ~50 shadcn/ui primitives (auto-generated)
│   ├── Header.tsx       # Fixed nav bar, mobile sheet menu
│   ├── Hero.tsx         # Hero section with parallax + clock
│   ├── About.tsx        # About section with parallax headings
│   ├── Career.tsx       # Timeline of career milestones (2019–2024)
│   ├── Skills.tsx       # Technical skills grid with icons
│   ├── Project.tsx      # Featured mobile, web/full-stack, and QA project showcases
│   ├── Footer.tsx       # Marquee banner, contact CTA, socials, copyright
│   ├── CustomCursor.tsx # Custom hover cursor (desktop only)
│   └── NavLink.tsx      # React Router NavLink wrapper
├── hooks/               # Custom React hooks
├── lib/
│   └── utils.ts         # cn() — clsx + tailwind-merge
├── pages/
│   ├── Home.tsx         # Main landing page (Lenis + all sections)
│   └── NotFound.tsx     # 404 page
└── test/
    ├── setup.ts         # Vitest setup (jest-dom, matchMedia mock)
    └── example.test.ts  # Placeholder test
```

## Section Rendering Order

Sections render in `src/pages/Home.tsx` in this order:

```
Hero → About → Career → Skills → Project → Footer
```

Each section has an `id` attribute matching its nav label (lowercase): `home`, `about`, `career`, `skills`, `projects`, `contact`.

## Patterns & Conventions

### Adding a New Section

1. Create `src/components/SectionName.tsx` as a functional component.
2. Use Framer Motion `variants` + `whileInView` for entrance animations.
3. Use `useScroll` + `useTransform` for parallax if needed.
4. Add an `id` attribute matching the nav link label (lowercase).
5. Import and place inside `<main>` in `src/pages/Home.tsx`.
6. Add the nav label to the `navLinks` array in `src/components/Header.tsx`.

**DO**: Follow the pattern in `src/components/About.tsx` — ref-based scroll tracking, `fadeUp` variants.
**DO**: Follow the timeline pattern in `src/components/Career.tsx` — data-driven array + staggered animations.
**DON'T**: Use CSS `@keyframes` directly for entrance animations — use Framer Motion for consistency.

### Adding a shadcn/ui Component

```bash
pnpm dlx shadcn@latest add <component-name>
```

Components land in `src/components/ui/`. Modify freely after generation.

### Styling Rules

- **DO**: Use Tailwind utilities and the custom font classes (`font-display`, `font-serif-italic`, `font-body`).
- **DO**: Use `clamp()` for fluid typography (see `Hero.tsx` for examples).
- **DO**: Use CSS `@keyframes` for continuous/infinite animations like marquees (see `Footer.tsx` + `index.css`).
- **DON'T**: Add raw CSS to `index.css` unless it's a global utility, third-party integration, or infinite animation.
- **DON'T**: Use inline `style` objects except for dynamic values (e.g. `fontSize: "clamp(...)"`, Framer Motion `style`).

### Testing

- **Framework**: Vitest + Testing Library + jsdom.
- **Setup**: `src/test/setup.ts` (loads `@testing-library/jest-dom` matchers, mocks `matchMedia`).
- **Convention**: Colocate test files as `*.test.ts(x)` alongside source, or place in `src/test/`.
- **Run single test**: `pnpm exec vitest run src/path/to/file.test.ts`

## Key Files

| File                 | Purpose                                                                          |
| -------------------- | -------------------------------------------------------------------------------- |
| `src/pages/Home.tsx` | Entry composition — Lenis init + all sections                                    |
| `src/index.css`      | CSS variables (design tokens), Lenis overrides, marquee keyframes, global styles |
| `tailwind.config.ts` | Tailwind theme extensions (colors, radius, animations)                           |
| `components.json`    | shadcn/ui configuration                                                          |
| `vite.config.ts`     | Vite config — SWC plugin, `@/` alias, dev server on `:8080`                      |
| `vitest.config.ts`   | Test config — jsdom, globals, setup file                                         |

## Quick Find Commands

```bash
# Find a component
rg -n "export (default |const )" src/components/ --type ts

# Find all section IDs
rg -n "id=\"" src/components/ --type tsx

# Find animation variants
rg -n "variants" src/components/ --type ts

# Find CSS variables
rg -n "^    --" src/index.css

# Find all imports of a component
rg -n "from.*@/components/ComponentName" src/

# Find career milestones data
rg -n "milestones" src/components/Career.tsx

# Find project data
rg -n "projects" src/components/Project.tsx
```

## Common Gotchas

- **Lenis**: Initialized per-page in `Home.tsx`. If adding new pages with smooth scroll, instantiate Lenis there too.
- **Custom cursor**: Only appears on elements with `data-cursor-view` attribute. Add this attribute to any new interactive cards.
- **Fonts**: Loaded via Google Fonts CDN in `index.html` — not bundled. Offline dev requires network access or local font files.
- **Dark mode toggle**: `ThemeToggle` is mounted in `Header.tsx`, `ThemeProvider` is configured in `App.tsx`, and `.dark` CSS variables live in `src/index.css`.
- **React Query**: `QueryClientProvider` is wired in `App.tsx` but no queries are used yet.
- **Toast infrastructure**: Toaster components are mounted but no toasts are triggered.
- **Nav links vs sections**: The `navLinks` array in `Header.tsx` exactly matches the section IDs (`home`, `about`, `career`, `skills`, `projects`, `contact`). The `Footer` component maps to the `contact` ID.
- **Marquee**: `Footer.tsx` uses `.marquee-track` with CSS `@keyframes marquee` defined in `index.css`. The text is duplicated via `.repeat(4)` in two `<span>` elements for seamless looping.

## Definition of Done

Before submitting a PR, ensure all pass:

```bash
pnpm exec tsc --noEmit && pnpm run lint && pnpm run test && pnpm run build
```

- Type-check passes with zero errors.
- ESLint reports no errors.
- All tests pass.
- Production build completes without errors.
- Changes are confined to the agreed-upon file paths.
