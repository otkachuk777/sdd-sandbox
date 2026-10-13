# sdd-sandbox

Tiny Node.js (ESM, no dependencies) todo library. Exists to test installing plugins
from `dev-digest-ai-marketplace` into a foreign project.

## Commands
- Test: `npm test` (node:test, no setup needed)

## Conventions
- Source in `src/`, tests in `test/<name>.test.js`, one test file per source file.
- No dependencies; use Node stdlib only.
- Specs go to `specs/`, plans to `plans/` (created on demand by the workflow).
- Keep functions small; throw `Error` with a clear message on invalid input.
