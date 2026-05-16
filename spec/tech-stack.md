# AgenticClinic Tech Stack

## Framework

- **Next.js** (App Router) — Full-stack React framework with TypeScript
- Covers both the agent/staff dashboards and API routes in a single codebase

## Language

- **TypeScript** throughout — shared types between frontend and backend

## Frontend

- **React** (via Next.js)
- **Tailwind CSS** — utility-first styling for a modern, attractive UI (per Steve in marketing)
- **shadcn/ui** — accessible, composable component library built on Radix UI

## Backend / API

- **Next.js API Routes** (Route Handlers) — server-side logic co-located with the app
- **Prisma** — type-safe ORM for database access

## Database

- **SQLite** (development) / **PostgreSQL** (production) — via Prisma, swappable with a config change

## Tooling

- **ESLint** + **Prettier** — code quality and formatting
- **pnpm** — fast, disk-efficient package manager
- **Vitest** — unit and integration test runner; used for all automated validation checks (`pnpm test`)

## Hosting (future)

- **Vercel** — natural fit for Next.js deployment
