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

  <section name="Architecture &amp; Key Directories">
    <description>
      The project uses a monorepo structure with React/Next.js for web and Expo for mobile. Directories are modular to streamline development and maintenance.
    </description>
    <directories>
      <directory name="app/">
        <desc>Next.js/React pages and layouts. Each file (e.g., game.tsx, create-game.tsx) defines a route using file-based routing.</desc>
      </directory>
      <directory name="components/">
        <desc>Reusable React components for UI (e.g., buttons, modals, game boards).</desc>
      </directory>
      <directory name="data/">
        <desc>Static data, such as default-topics.ts for predefined game topics and word lists.</desc>
      </directory>
      <directory name="stores/">
        <desc>State management with Zustand or similar. Examples: game-store.ts (game state), topics-store.ts (topic management).</desc>
      </directory>
      <directory name="assets/">
        <desc>Images, icons, and demo assets. Subfolders: images/ (UI graphics), demos/ (marketing or tutorial content).</desc>
      </directory>
      <directory name="ios/">
        <desc>Native iOS project files for Expo/React Native builds.</desc>
      </directory>
      <directory name="android/">
        <desc>Native Android project files for Expo/React Native builds.</desc>
      </directory>
      <directory name="scripts/">
        <desc>Utility scripts for automation (e.g., data generation, build helpers).</desc>
      </directory>
      <directory name="tests/">
        <desc>Unit/integration tests (use Jest/React Testing Library in __tests__ folders if implemented).</desc>
      </directory>
    </directories>
  </section>

  <section name="Developer Workflows">
    <description>
      Standardized workflows for setup, development, building, testing, and deployment to ensure consistency.
    </description>
    <workflows>
      <workflow name="Pre-Setup">
        <desc>Prepare the project environment for mobile builds.</desc>
        <steps>
          <step>Run `expo prebuild --clean` to generate native project files.</step>
          <step>Alternatively, use `eas build -p ios --profile production` for production iOS builds or `eas build -p android --profile production` for Android.</step>
        </steps>
      </workflow>
      <workflow name="Local Development">
        <steps>
          <step>Install dependencies: `yarn install` or `npm install`.</step>
          <step>Start web app: `yarn dev` or `npm run dev`.</step>
          <step>Start mobile app: `expo start`.</step>
        </steps>
      </workflow>
      <workflow name="Build (Mobile)">
        <desc>Build and distribute mobile apps for iOS and Android.</desc>
        <steps>
          <step>Build iOS: `eas build -p ios --profile development` for development or `--profile production` for production.</step>
          <step>Build Android: `eas build -p android --profile development` or `--profile production`.</step>
          <step>Manage credentials in eas.json.</step>
          <step>For iOS App Store distribution:
            <substep>Open Xcode → Window → Organizer.</substep>
            <substep>Select "Distribute App" → App Store Connect.</substep>
            <substep>Alternatively, run the workflow to generate .ipa, upload via Transporter, and wait for build processing.</substep>
          </step>
        </steps>
      </workflow>
      <workflow name="TypeScript">
        <desc>Use TypeScript (tsconfig.json) with strict typing. Avoid `any` types and ensure type safety.</desc>
      </workflow>
      <workflow name="Linting &amp; Formatting">
        <desc>Use ESLint (eslint.config.js, rork-eslint.config.js) and Prettier. Run `yarn lint` or `npm run lint`.</desc>
      </workflow>
      <workflow name="Testing">
        <desc>No test setup detected; implement with Jest/React Testing Library in __tests__ folders. Run `yarn test` or `npm test`.</desc>
        <best-practices>Cover components, stores, and critical logic with unit and integration tests.</best-practices>
      </workflow>
      <workflow name="Deployment">
        <desc>Web: Deploy via Vercel/Netlify with Next.js. Mobile: Use EAS for app store submissions.</desc>
      </workflow>
    </workflows>
  </section>

  <section name="Patterns &amp; Conventions">
    <description>
      Adhere to these conventions for code consistency, scalability, and maintainability.
    </description>
    <patterns>
      <pattern name="Routing">
        <desc>Use file-based routing in app/. Dynamic routes (e.g., [id].tsx) for game IDs or user-specific pages.</desc>
      </pattern>
      <pattern name="State Management">
        <desc>Use hooks from stores/ (e.g., game-store.ts) for global state. Avoid prop drilling.</desc>
      </pattern>
      <pattern name="Topics &amp; Data">
        <desc>Load default topics from data/default-topics.ts. Support user overrides via localStorage or topics-store.ts.</desc>
      </pattern>
      <pattern name="Assets">
        <desc>Import from assets/images/ or assets/demos/. Optimize images for web/mobile (e.g., use WebP, compress assets).</desc>
      </pattern>
      <pattern name="Components">
        <desc>Use functional components with hooks. Style with Tailwind CSS or CSS Modules.</desc>
      </pattern>
      <pattern name="Error Handling">
        <desc>Implement try-catch for async operations. Display user-friendly error messages.</desc>
      </pattern>
      <pattern name="Accessibility">
        <desc>Ensure WCAG compliance (e.g., ARIA labels, keyboard navigation, sufficient color contrast).</desc>
      </pattern>
      <pattern name="Performance">
        <desc>Optimize renders with memoization (React.memo, useMemo, useCallback). Lazy-load non-critical assets.</desc>
      </pattern>
    </patterns>
  </section>

  <section name="Integration Points">
    <description>
      Key technologies and services integrated into the project.
    </description>
    <integrations>
      <integration name="Expo/EAS">
        <desc>Manages mobile builds and deployment for iOS and Android.</desc>
      </integration>
      <integration name="React/Next.js">
        <desc>Powers web app structure, routing, and server-side rendering.</desc>
      </integration>
      <integration name="Client-Side Logic">
        <desc>No backend detected; all logic is client-side using React and state management.</desc>
      </integration>
    </integrations>
  </section>

  <section name="Example Tasks">
    <description>
      Practical examples for common development tasks to guide implementation.
    </description>
    <tasks>
      <task name="Adding a New Game Topic">
        <steps>
          <step>Add the topic to data/default-topics.ts with a unique ID and word list.</step>
          <step>Update app/topics.tsx or related components to display the new topic.</step>
          <step>If persistent, update stores/topics-store.ts to handle user selections.</step>
          <step>Test UI and state integration locally with `yarn dev` or `expo start`.</step>
        </steps>
      </task>
      <task name="Creating a New Route">
        <steps>
          <step>Add a new file in app/ (e.g., new-game.tsx) for the route.</step>
          <step>Define the page component with necessary logic and state from stores/.</step>
          <step>Update navigation components (e.g., in components/) to link to the new route.</step>
          <step>Test routing with `yarn dev`.</step>
        </steps>
      </task>
      <task name="Adding Unit Tests">
        <steps>
          <step>Create a __tests__ folder in the relevant directory (e.g., components/__tests__).</step>
          <step>Write tests using Jest/React Testing Library for components or stores.</step>
          <step>Run tests with `yarn test` or `npm test`.</step>
        </steps>
      </task>
    </tasks>
  </section>

  <section name="Troubleshooting">
    <description>
      Common issues and solutions for development and deployment.
    </description>
    <issues>
      <issue name="Build Failures">
        <desc>Check eas.json for correct profiles. Ensure credentials are valid. Run `expo prebuild --clean` to resolve native build issues.</desc>
      </issue>
      <issue name="Linting Errors">
        <desc>Run `yarn lint` to identify issues. Check eslint.config.js and rork-eslint.config.js for rules.</desc>
      </issue>
      <issue name="State Inconsistencies">
        <desc>Verify store hooks (e.g., game-store.ts) and ensure state updates are synchronous where required.</desc>
      </issue>
    </issues>
  </section>

  <section name="Feedback">
    <description>
      To improve these instructions, report unclear sections, missing details, or suggested additions. Include specific examples or questions to refine workflows, patterns, or examples.
    </description>
  </section>
</copilot-instructions>