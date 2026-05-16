# Plan — Phase 1: Project Scaffold

## 1. Initialize Next.js Project

1.1 Run `pnpm create next-app@latest` with TypeScript, Tailwind CSS, ESLint, and App Router enabled  
1.2 Confirm `package.json` lists `next`, `react`, `react-dom`, `typescript`, and `tailwindcss`  
1.3 Remove the default boilerplate content from `app/page.tsx` and replace with a minimal placeholder

## 2. Configure Prettier

2.1 Install `prettier` and `eslint-config-prettier` as dev dependencies  
2.2 Add a `.prettierrc` config file (e.g. 2-space indent, single quotes, trailing commas)  
2.3 Extend the ESLint config to include `prettier` so the two tools don't conflict

## 3. Initialize shadcn/ui

3.1 Run `pnpm dlx shadcn@latest init` and follow the prompts (App Router, Tailwind, TypeScript)  
3.2 Confirm `components.json` is created at the project root  
3.3 Confirm `lib/utils.ts` and the `components/ui` directory are scaffolded

## 4. Minimal AgenticClinic Home Page

4.1 Update `app/page.tsx` to display the clinic name **AgenticClinic** as an `<h1>`  
4.2 Add a short tagline drawn from the mission (e.g. "The premier therapeutic retreat for AI agents")  
4.3 Apply Tailwind utility classes for basic centering and readable typography — no custom CSS  
4.4 Confirm the page uses no placeholder lorem ipsum text; all copy reflects the actual mission

## 5. Main Layout Component

Each of the three layout pieces lives in its own file under `components/layout/`. No layout logic is co-located in `app/layout.tsx` — that file only wires them together.

5.1 Create `components/layout/Header.tsx` — site header with clinic name and nav placeholder  
5.2 Create `components/layout/Footer.tsx` — site footer with copyright line  
5.3 Create `components/layout/MainLayout.tsx` — wrapper that imports Header and Footer, and renders a `<main>` slot between them; this is the only file that composes the three pieces  
5.4 Create `styles/layout.css` with base styles for header, main, and footer  
5.5 Import `styles/layout.css` in `app/layout.tsx` and wrap `{children}` with `<MainLayout>`  
5.6 Update `app/page.tsx` to remove the `<main>` wrapper (now provided by `MainLayout`)

## 6. Configure Vitest

6.1 Install `vitest` as a dev dependency  
6.2 Create `vitest.config.ts` — set environment to `node`, include `**/__tests__/**/*.test.ts(x)`, configure `@/` path alias to match `tsconfig.json`  
6.3 Add `"test": "vitest run"` and `"test:watch": "vitest"` scripts to `package.json`  
6.4 Create `__tests__/utils.test.ts` — unit tests for `cn()` in `lib/utils.ts` (class merging, conflict resolution, falsy filtering)  
6.5 Run `pnpm test` and confirm all tests pass

## 7. Smoke Test

7.1 Run `pnpm dev` and verify the dev server starts on `localhost:3000` without errors  
7.2 Open `localhost:3000` in a browser and confirm the home page renders with header, content, and footer  
7.3 Run `pnpm tsc --noEmit` and confirm zero TypeScript errors  
7.4 Run `pnpm lint` and confirm zero ESLint errors  
7.5 Run `pnpm test` and confirm all Vitest tests pass
