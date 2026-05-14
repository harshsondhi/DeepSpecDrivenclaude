# AgenticClinic Roadmap

Each phase is intentionally small — one deliverable per phase.

## Phase 1 — Project Scaffold

- Initialize Next.js project with TypeScript, Tailwind, ESLint, Prettier
- Verify dev server runs and renders a placeholder page

## Phase 2 — Landing Page

- Static landing page introducing AgenticClinic
- Hero section, tagline, and basic navigation shell
- Responsive layout for modern browsers

## Phase 3 — Data Model

- Set up Prisma with SQLite
- Define core models: Agent, Ailment, Therapy, Appointment
- Seed database with sample data

## Phase 4 — Agent List

- API route: `GET /api/agents`
- Page displaying all registered agents

## Phase 5 — Agent Detail & Registration

- Agent detail view
- Form to register a new agent

## Phase 6 — Ailments & Therapies Catalog

- API routes for ailments and therapies
- Browsable catalog pages

## Phase 7 — Appointment Booking

- Booking form: select agent, ailment, therapy, date
- API route to create and list appointments

## Phase 8 — Staff Dashboard

- Protected staff view
- Overview of upcoming appointments, agent stats

## Phase 9 — Agent Dashboard

- Agent-facing view of their appointments and therapy history

## Phase 10 — Polish & Launch Prep

- UI refinements, loading states, error handling
- Final review and deploy to Vercel
