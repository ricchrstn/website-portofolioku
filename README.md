# Rizky Cristian S - Portofolio

Personal portfolio SPA for Rizky Cristian S, a mobile-first Software Engineer with Flutter, React Native, web/full-stack, and QA experience. Built with React 19, TypeScript, Vite, Tailwind CSS, shadcn/ui, Framer Motion, and Lenis.

## Quick Start

```bash
pnpm install
pnpm run dev
```

The dev server runs on port `8080` via Vite config.

## Commands

| Command | Description |
| --- | --- |
| `pnpm run dev` | Start local development server |
| `pnpm run build` | Create production build in `dist/` |
| `pnpm run build:dev` | Create development-mode build |
| `pnpm run preview` | Preview production build locally |
| `pnpm run lint` | Run ESLint |
| `pnpm run test` | Run Vitest tests once |
| `pnpm exec tsc --noEmit` | Type-check without emitting files |

## Architecture

The app is a static single-page portfolio. `src/pages/Home.tsx` mounts Lenis smooth scroll, then renders sections in this order:

```txt
Hero → About → Career → Skills → Project → Footer
```

Section IDs used by `Header.tsx` navigation are:

```txt
home, about, career, skills, projects, contact
```

`App.tsx` provides `ThemeProvider`, TanStack Query, tooltip/toast providers, and React Router DOM 7 routes. The `/` route renders the portfolio, while `*` renders the 404 page.

## Content Source

`profile-summary.json` stores the canonical profile context: bio, contacts, skills, experience, projects, documents, and SEO positioning. Current UI content is mostly hardcoded inside section components, especially `src/components/Project.tsx` and `src/components/Career.tsx`, so keep those files synchronized when updating profile data.

## Key Docs

- [`AGENTS.md`](AGENTS.md) — project conventions for coding agents
- [`TECHNICAL OVERVIEW.md`](TECHNICAL%20OVERVIEW.md) — architecture and runtime behavior
- [`profile-summary.json`](profile-summary.json) — portfolio/persona data reference
