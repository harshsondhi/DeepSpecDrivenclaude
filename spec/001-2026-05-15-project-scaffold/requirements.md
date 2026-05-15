# Requirements — Phase 1: Project Scaffold

## Scope

Set up the foundational project structure for AgenticClinic. This phase produces a runnable Next.js application with all core tooling configured. No application features are built here — only the scaffold that every subsequent phase builds on.

## Decisions

| Decision | Choice | Reason |
|---|---|---|
| Package manager | pnpm | Specified in tech-stack.md; faster installs, disk-efficient |
| Router | App Router only | No Pages Router; aligns with tech-stack.md and Next.js best practices |
| Component library | shadcn/ui init included | Tech-stack.md specifies shadcn/ui; better to wire it in from the start than retrofit |
| Scope boundary | Roadmap Phase 1 only | No early feature work; keep this branch focused and mergeable fast |

## Context

**Project:** AgenticClinic — a therapeutic retreat for AI agents recovering from human-inflicted stress (see `spec/mission.md`).

**Why this phase first:** The current repo contains only a plain TypeScript stub (`src/index.ts`). All subsequent phases (landing page, data model, agent list, etc.) require a Next.js foundation. This phase creates that foundation and establishes the clinic's identity on the home page.

**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS · shadcn/ui · ESLint · Prettier · pnpm  
Full details in `spec/tech-stack.md`.

## Out of Scope

- Full landing page with hero section and navigation (Phase 2)
- Prisma / database setup (Phase 3)
- Any UI components beyond the shadcn/ui scaffold
- Authentication or protected routes
