# Validation — Phase 1: Project Scaffold

This phase is complete and ready to merge when **all** of the following pass.

## Automated Checks

| Check | Command | Pass Condition |
|---|---|---|
| TypeScript | `pnpm tsc --noEmit` | Exits 0, zero type errors |
| Lint | `pnpm lint` | Exits 0, zero ESLint errors |
| Build | `pnpm build` | Next.js production build succeeds without errors |
| Home page content | `curl -sf http://localhost:3000 \| grep -q "AgenticClinic"` | Exits 0 (server up + heading present in SSR HTML) |

## Manual Checks

| Check | How to verify | Pass Condition |
|---|---|---|
| Dev server starts | Run `pnpm dev` | Server starts on `localhost:3000` with no terminal errors |
| Home page renders | Open `localhost:3000` in a browser | Page shows "AgenticClinic" heading and mission tagline |
| No lorem ipsum | Read `app/page.tsx` | All copy is real clinic content, no placeholder text |
| shadcn/ui wired | Check project root | `components.json` exists; `components/ui/` directory exists |
| Prettier configured | Open any `.ts` / `.tsx` file and run the formatter | File formats without conflict with ESLint |

## Definition of Done

- All automated checks pass in CI (or locally if CI is not yet configured)
- All manual checks confirmed by the implementer
- No TODOs or placeholder comments left in code
- PR description references this validation checklist
