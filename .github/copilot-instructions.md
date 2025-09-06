# Copilot Instructions for AI Coding Agents

## Project Overview
- **Spy** is a mobile-friendly social deduction party game built for web and mobile (see `README.md`).
- The app allows users to play with friends, create custom topics, and experience secret role gameplay.

## Architecture & Key Directories
- **app/**: Main Next.js/React app pages and layouts. Each file (e.g., `game.tsx`, `create-game.tsx`) represents a route or screen.
- **components/**: Shared React components (UI, controls, etc.).
- **data/**: Static data sources, e.g., `default-topics.ts` for game topics.
- **stores/**: State management (likely using Zustand or similar). E.g., `game-store.ts`, `topics-store.ts`.
- **assets/**: Images and demo assets for UI and marketing.
- **ios/**: Native iOS project files (for Expo/React Native builds).
- **scripts/**: Utility scripts (not always present).

## Developer Workflows
- **Build (iOS):** Use Expo Application Services (EAS):
  - `eas build -p ios --profile development`
- **TypeScript:** Project uses TypeScript throughout (`tsconfig.json`).
- **Linting:** ESLint config in `eslint.config.js` and `rork-eslint.config.js`.
- **No explicit test setup** detected; add tests in a `__tests__` or `tests/` folder if needed.

## Patterns & Conventions
- **Pages:** Each file in `app/` is a route. Use file-based routing conventions.
- **State:** Use stores in `stores/` for cross-component state. Example: `game-store.ts` manages game state.
- **Topics:** Game topics are loaded from `data/default-topics.ts` and can be customized by users.
- **Assets:** Reference images from `assets/images/` and demos from `assets/demos/`.
- **Custom ESLint config:** If linting issues arise, check both `eslint.config.js` and `rork-eslint.config.js`.

## Integration Points
- **Expo/EAS:** For mobile builds and deployment.
- **React/Next.js:** For web app structure and routing.
- **No backend detected** in this repo; all logic appears client-side.

## Example: Adding a New Game Topic
1. Update `data/default-topics.ts` with the new topic.
2. Ensure UI in `app/topics.tsx` or related component reflects the change.
3. If persistent state is needed, update logic in `stores/topics-store.ts`.

## Quick Start for AI Agents
- Start with `app/` for UI/flow, `stores/` for state, and `data/` for static content.
- Use TypeScript and React best practices.
- Reference assets for UI polish.
- Use EAS for mobile builds.

---
_If any section is unclear or missing, please provide feedback to improve these instructions._
