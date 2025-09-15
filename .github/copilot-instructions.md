<!--
Concise AI agent guidance for the `spy` repository.
Keep this short, actionable, and repo-specific. Expand by PR when needed.
-->

# AI Agent Guidance — spy (concise)

Repository snapshot: Expo-managed React Native app + Next.js web frontend. Primary sources:

- App routes/screens: `app/` (e.g. `create-game.tsx`, `game.tsx`, `range-*`)
- UI components: `components/`
- State: `stores/` (Zustand; e.g. `game-store.ts`, `range-game-store.ts`)
- Static data: `data/default-topics.ts`, `data/range-questions.ts`

Quick commands (macOS / zsh):
- Install: `npm ci`
- Typecheck: `npx tsc --noEmit`
- Lint: `npx eslint . --ext .ts,.tsx,.js,.jsx`
- Mobile dev: `expo start`
- Web dev: `npm run dev`

Repo-specific rules and patterns:
- Use Zustand stores in `stores/` for app and range game state. When changing store shapes, update types and grep for every selector/usage.
- Prefer functional React components and hooks under `app/`. Keep UI changes isolated and small.
- Use static lists in `data/` instead of hard-coding topics in components.
- Avoid editing `ios/` or `android/` native folders unless change is tiny and tested locally.
- If changing persisted state, add a short migration note in the PR.

Common quick lookups (examples):
- Players/roles: search `players` → inspect `stores/game-store.ts` and `app/game.tsx`.
- Range mode: `app/range-game.tsx`, `stores/range-game-store.ts`, `data/range-questions.ts`.

Validation gates (minimum): run TypeScript check, ESLint, and a brief smoke test (Expo or web) appropriate to the change.

