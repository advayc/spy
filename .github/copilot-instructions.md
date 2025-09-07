<?xml version="1.0" encoding="UTF-8"?>
<copilot-instructions>
  <title>Copilot Instructions for AI Coding Agents</title>
  <version>1.1</version>
  <last-updated>September 05, 2025</last-updated>
  <introduction>
    These instructions guide AI coding agents working on the "Spy" project, a modern, mobile-friendly social deduction party game. They ensure efficient onboarding, development, and deployment while maintaining code quality and consistency. Provide feedback to refine unclear or incomplete sections.
  </introduction>

  <section name="Project Overview">
    <description>
      "Spy" is a cross-platform social deduction party game inspired by classics like "Mafia" or "Werewolf." It supports real-time multiplayer gameplay, custom topic creation, and secret role assignments, accessible via web (Next.js) and mobile (iOS/Android via Expo). See README.md or the demo video for details: https://github.com/user-attachments/assets/33248075-c040-43f1-8be8-3578a567a6c6.
    </description>
    <key-features>
      <feature>Real-time multiplayer with dynamic role assignments (e.g., spies, civilians).</feature>
      <feature>User-customizable game topics and word lists.</feature>
      <feature>Cross-platform: Web (Next.js), iOS/Android (Expo/React Native).</feature>
      <feature>Fast-paced, client-side logic for seamless gameplay.</feature>
    </key-features>
    <goals>
      <goal>Create an engaging, intuitive party game experience.</goal>
      <goal>Support scalability for large groups and custom content.</goal>
      <goal>Optimize performance for mobile and web environments.</goal>
    </goals>
  </section>
<?xml version="1.0" encoding="UTF-8"?>
<!--
  Extended Copilot Instructions for the "spy" repository.
  Purpose: Provide a comprehensive, machine-readable guide for automated AI coding agents
  (Copilot-like assistants) that must analyze, modify, test, and document the codebase.
  This document is intentionally verbose and prescriptive to cover many edge-cases and
  workflows across mobile (Expo), web (Next.js), native projects, and supporting scripts.
  Keep this file in the repository at `.github/copilot-instructions.md` so agents and maintainers
  can reference a single canonical source of decision-making rules.
-->
<copilotInstructions>
  <meta>
    <title>Spy — Copilot / AI Agent Instructions</title>
    <version>2.0</version>
    <author>Repository Maintainers</author>
    <lastUpdated>2025-09-07</lastUpdated>
    <contact>See repository owner and commits</contact>
  </meta>

  <summary>
    These instructions tell an automated coding assistant how to safely and effectively work on
    the `spy` repository. They prioritize correctness, non-destructive changes, test-backed edits,
    and clear commit messages. Follow the validation and quality-gates section before finalizing
    changes. When uncertain, prefer to ask maintainers or leave an explicit TODO comment.
  </summary>

  <highLevelGuidelines>
    <guideline id="safety">Always work on a feature branch or ensure a safe revert path exists.</guideline>
    <guideline id="minimalEdits">Prefer the smallest set of edits needed to achieve the request.</guideline>
    <guideline id="typeSafety">Preserve TypeScript types and avoid adding untyped any where possible.</guideline>
    <guideline id="noSecrets">Do not add or expose secrets (API keys, tokens, credentials) in commits or code.</guideline>
    <guideline id="tests">Add or update tests for non-trivial logic changes when possible.</guideline>
    <guideline id="lint">Run linters and formatters; keep code style consistent with existing files.</guideline>
    <guideline id="explain">Include a concise commit message and a short PR description for each change.</guideline>
  </highLevelGuidelines>

  <projectScope>
    <description>
      The codebase contains an Expo-managed React Native mobile app and a Next.js web front-end.
      Key areas to inspect when making changes include `app/` (routes/screens), `components/`,
      `stores/` (Zustand-based state), `data/` (default topics/questions), `assets/`, and native
      folders `ios/` and `android/` created by `expo prebuild`.
    </description>

    <importantFiles>
      <file path="app/">App routes and screens (React/TSX).</file>
      <file path="components/">Shared UI components.</file>
      <file path="stores/">State management (Zustand stores).</file>
      <file path="data/">Topic and question data; static lists.</file>
      <file path="assets/">Images and demo assets.</file>
      <file path="package.json">Project scripts and dependencies.</file>
      <file path="tsconfig.json">TypeScript configuration; respect project options.</file>
      <file path="eas.json">EAS build profiles and credentials locations.</file>
      <file path="README.md">Primary documentation for developers.</file>
      <file path=".github/workflows/">CI workflows; inspect before changing build steps.</file>
    </importantFiles>
  </projectScope>

  <analysisStrategy>
    <overview>
      When an agent is asked to implement a feature or fix a bug, follow this step-by-step analysis strategy:
    </overview>
    <steps>
      <step id="scan">Perform a repository-wide search for relevant symbols, filenames, and keywords.
        Use exact matches when known (e.g., `spyMode`, `players`, `startGame`, `rangeQuestions`).
      </step>
      <step id="read">Read full files that are directly implicated by the search results — prefer larger
        contiguous reads (150–400 lines) to avoid missing context.</step>
      <step id="trace">Trace key symbols to definitions and their usages across stores, components, and helpers.</step>
      <step id="plan">Draft a minimal change plan listing files to edit and the nature of edits (add/remove/modify).</step>
      <step id="tests">Identify or create minimal unit tests covering the changed logic (happy path + 1 edge case).</step>
      <step id="edit">Apply changes with focused, small patches.
        Keep unrelated files unchanged and avoid broad reformatting.
      </step>
      <step id="validate">Run build/lint/tests locally (or emulate via CI) and fix errors until green.</step>
      <step id="commit">Commit with a clear message and include a short changelog in PR description.</step>
    </steps>
  </analysisStrategy>

  <codingConventions>
    <typescript>
      <rule>Use strict type annotations where the project uses them; prefer union types over `any`.</rule>
      <rule>When modifying public interfaces (stores, props), update all usages found via global grep.</rule>
    </typescript>
    <react>
      <rule>Prefer functional components and hooks. Avoid class components unless existing code requires them.</rule>
      <rule>Keep components small; extract repeated logic into utilities under `lib/` or `utils/`.</rule>
    </react>
    <ui>
      <rule>Use existing design tokens from `useTheme` hook; maintain color contrast and sizing conventions.</rule>
      <rule>When updating layouts for many players/items, ensure responsive behavior with flex-wrap and truncation (numberOfLines / ellipsizeMode for Text).</rule>
    </ui>
  </codingConventions>

  <stateManagement>
    <desc>The project uses Zustand stores located under `stores/` for app and range game states.</desc>
    <rules>
      <rule>When removing or renaming a store property (e.g., `spyMode`), update all callers and types in one change.
        Use repository grep to find all references before editing.</rule>
      <rule>Prefer to preserve backwards compatibility where feasible (e.g., keep default values for removed fields for one release cycle).</rule>
      <rule>When a store change affects persisted state, update migration logic or add a migration comment for maintainers.</rule>
    </rules>
  </stateManagement>

  <uiUxGuidelines>
    <desc>UX changes must be predictable and accessible. Small layout changes are acceptable without major design reviews.</desc>
    <rules>
      <rule>For player lists and grids, use wrapping behavior and set each player card to a percentage width so lists don't overflow on small screens.</rule>
      <rule>Truncate long names with ellipsizeMode="tail" and set numberOfLines=1 to prevent layout shift.</rule>
      <rule>When adding new options (e.g., spy counts), ensure labels and selection behavior stay consistent across Create Game and Range screens.</rule>
    </rules>
  </uiUxGuidelines>

  <securityPrivacy>
    <desc>Respect user privacy and do not transmit or log player names externally. Keep all gameplay data local unless an opt-in backend exists.</desc>
    <rules>
      <rule>Never commit secrets or credentials. If credentials are required for CI, reference environment variables instead.</rule>
      <rule>Sanitize user-provided strings before showing in logs. Avoid writing PII to debug logs.</rule>
    </rules>
  </securityPrivacy>

  <testingAndValidation>
    <desc>Before finalizing changes, run these checks.</desc>
    <checks>
      <check>Type check (tsc) — ensure no new TypeScript errors are introduced.</check>
      <check>Lint (eslint) — make code conform to rules used by the project.</check>
      <check>Unit tests — run existing tests and any new tests added for changed logic.</check>
      <check>Quick smoke test — run the app in the simulator or on device if a UI change was made.</check>
      <check>Manual UX check — verify layouts on small (iPhone SE) and large devices for responsive changes.</check>
    </checks>
  </testingAndValidation>

  <commitMessages>
    <format>
      <rule>Use a short summary line (<= 72 chars) and an optional body describing reasoning.</rule>
      <example>Fix: remove spyMode and preserve players when cancelling game start</example>
      <example>Refactor: responsive player grid; truncate long names to avoid overflow</example>
    </format>
  </commitMessages>

  <pullRequestGuidelines>
    <desc>When opening a PR, include these items in the description.</desc>
    <items>
      <item>Summary of change and why it was made.</item>
      <item>Files changed and the high-level rationale for each change.</item>
      <item>How to test locally (commands and quick steps).</item>
      <item>Any follow-ups or TODOs for future work.</item>
    </items>
  </pullRequestGuidelines>

  <debuggingChecklist>
    <step>Reproduce the bug locally with a minimal set of steps.</step>
    <step>Use repository search to find involved state, props, and UI elements.</step>
    <step>Insert non-invasive logs (console.debug) when necessary; remove before committing or gate behind a debug flag.</step>
    <step>Add a unit test replicating the bug when possible.</step>
    <step>Run the full test suite and linters after the fix.</step>
  </debuggingChecklist>

  <ciCd>
    <desc>Before merging, ensure the CI pipeline passes. If CI is missing checks, add a small pipeline step to run TypeScript and ESLint at minimum.</desc>
    <rules>
      <rule>CI should run `npm ci` (or `yarn install --frozen-lockfile`), `npm run lint`, `npm run test`, and `npm run build` where applicable.</rule>
    </rules>
  </ciCd>

  <fileChangePolicy>
    <desc>Guidelines for safe file edits by automated agents.</desc>
    <rules>
      <rule>Do not modify `android/` or `ios/` native code except when the change is small, necessary, and tested locally.</rule>
      <rule>Avoid large refactors in a single commit; break into small, reviewable PRs.</rule>
      <rule>When changing persisted state shapes, provide migration notes in PR and a version bump if needed.</rule>
    </rules>
  </fileChangePolicy>

  <howToGatherFullCodebaseInfo>
    <desc>Recommended programmatic steps an agent should perform to gather a project snapshot and analyze the entire codebase before making changes.</desc>
    <steps>
      <step id="listFiles">List all top-level files and directories (e.g., `ls -la`).</step>
      <step id="packageInfo">Open `package.json` and record scripts and dependencies.</step>
      <step id="tsConfig">Open `tsconfig.json` and ESLint configs to detect strictness and rules.</step>
      <step id="searchSymbols">Search for domain-specific symbols (e.g., `spyMode`, `players`, `startGame`, `range`) and collect hit files.</step>
      <step id="readBigFiles">Read full contents of store files in `stores/` and main screens under `app/` to trace data flows.</step>
      <step id="diagram">Optionally produce a small diagram or mapping of stores -> screens -> components for complex changes.</step>
    </steps>
  </howToGatherFullCodebaseInfo>

  <examples>
    <example id="removeSpyMode">
      <title>Remove `spyMode` globally</title>
      <steps>
        <step>Search repo for `spyMode` and `setSpyMode`.</step>
        <step>Update store types to remove `spyMode`; keep a default behavior if needed.</step>
        <step>Update all UIs that read/write `spyMode` to remove selectors and logic branches.</step>
        <step>Adjust role assignment logic to use a consistent rule (e.g., rolesEnabled + category roles).</step>
        <step>Run type check, lint, and tests; run the app to verify no runtime errors.</step>
      </steps>
    </example>

    <example id="preservePlayersOnCancel">
      <title>Fix: players cleared when cancelling start</title>
      <steps>
        <step>Locate `startGame` and any `resetGame` functions in stores.</step>
        <step>Ensure `resetGame` clears gameplay state but does not clear `players` unless `clearPlayers` is explicitly called.</step>
        <step>Update UI navigation flows to `router.back()` without calling a destructive reset.</step>
        <step>Add a unit/integration test verifying players remain after a cancelled start attempt.</step>
      </steps>
    </example>
  </examples>

  <performanceHints>
    <hint>Memoize derived data from stores with useMemo to avoid expensive recalculations during rendering.</hint>
    <hint>For long lists (topics, emojis), use FlatList/VirtualizedList on React Native for constant memory usage.</hint>
    <hint>Avoid large synchronous work on UI thread; move heavy operations to web workers or native modules where applicable.</hint>
  </performanceHints>

  <accessibility>
    <desc>Accessibility must be considered for all public screens.</desc>
    <checks>
      <check>All interactive elements should be reachable by keyboard and have accessible labels.</check>
      <check>Check color contrast ratios for readability.</check>
      <check>Provide alternative text for images used in documentation and marketing assets.</check>
    </checks>
  </accessibility>

  <localization>
    <desc>If adding or changing user-facing text, consider externalizing strings for i18n framework in the project.</desc>
    <rule>Use existing localization utilities if present; otherwise centralize strings under `i18n/` or `locales/`.</rule>
  </localization>

  <maintenanceAndDocumentation>
    <desc>Keep README and in-code comments up-to-date when changing public behavior or major UX flows.</desc>
    <items>
      <item>Update `README.md` with new setup or build instructions when relevant.</item>
      <item>Add short docblocks for complex store functions explaining inputs/outputs and side-effects.</item>
    </items>
  </maintenanceAndDocumentation>

  <operationalPlaybook>
    <intro>Quick commands and checks for a developer or agent working locally.</intro>
    <commands>
      <cmd desc="Install deps">npm ci (or yarn install)</cmd>
      <cmd desc="Run web dev server">npm run dev</cmd>
      <cmd desc="Run mobile dev server">expo start</cmd>
      <cmd desc="Typecheck">npx tsc --noEmit</cmd>
      <cmd desc="Lint">npx eslint . --ext .ts,.tsx,.js,.jsx</cmd>
      <cmd desc="Run tests">npm test</cmd>
    </commands>
  </operationalPlaybook>

  <escalationAndQuestions>
    <desc>If the agent encounters ambiguous requirements or a risky change, escalate with these details:</desc>
    <items>
      <item>Files likely affected and reason for uncertainty.</item>
      <item>Suggested minimal change and potential consequences.</item>
      <item>Request for human review, ideally pointing to a specific maintainer or team.</item>
    </items>
  </escalationAndQuestions>

  <appendix>
    <faq>
      <q id="why-kept-long">Why so verbose?</q>
      <a>Automated agents benefit from explicit, machine-parsable rules. The length ensures corner cases and step sequences are available without repeated human questions.</a>
      <q id="how-to-update">How to update this file?</q>
      <a>Submit a PR with clear rationale for changes. Keep changes incremental and document the reason in the PR body.</a>
    </faq>

    <glossary>
      <term id="store">A Zustand store managing application state, usually under `stores/`.</term>
      <term id="topic">A game topic (word list) used to generate player roles or questions.</term>
      <term id="range-game">An alternate game mode where one player receives a range instead of a role.</term>
    </glossary>
  </appendix>

</copilotInstructions>
