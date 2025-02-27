# WIAG Web Development Guide

## Commands
- Build: `npm run build`
- Dev server: `npm run dev`
- Format code: `npm run format`
- Lint: `npm run lint`
- Typecheck: `npm run typecheck`
- Run tests: `npm run test`
- Run single test: `npm run test -- -t "test name pattern"`
- Run tests with coverage: `npm run test -- --coverage`
- E2E tests: `npm run test:e2e:dev`

## Code Style
- TypeScript with strict type checking
- React with functional components and hooks
- Tailwind CSS for styling with utility classes
- Path aliases: Use `~/` for imports from the app directory
- Component naming: PascalCase for components and their files
- Props: Define prop types with TypeScript interfaces/types
- State management: Use React hooks (useState, useEffect)
- Error handling: Use try/catch for async operations
- Format with Prettier (auto-runs with `npm run format`)
- Follow eslint rules from @remix-run/eslint-config