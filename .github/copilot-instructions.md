<!-- GitHub Copilot agent guidance for LearningPlaywright repo -->
# Copilot Instructions — LearningPlaywright

Purpose
- Provide actionable, repository-specific guidance for AI coding assistants working on this learning playground.

Big picture
- This is a minimal Playwright/Node.js learning folder containing standalone example scripts under `Chapter_01_JS_Basics/`.
- Files are small, sequential examples (chapter-prefixed filenames) meant to be run directly with Node.js rather than built into a larger app.

Key files (examples)
- Hello example: [Chapter_01_JS_Basics/01_Basic.js](Chapter_01_JS_Basics/01_Basic.js#L1) — simple console output.
- Hot-code example: [Chapter_01_JS_Basics/02_HotCode_Example.js](Chapter_01_JS_Basics/02_HotCode_Example.js#L1-L6) — demonstrates a CPU-heavy loop; avoid executing full loop during quick tests.
- Platform check: [Chapter_01_JS_Basics/03_platform_verification.js](Chapter_01_JS_Basics/03_platform_verification.js#L1-L2) — shows use of `process.platform` and `process.version`.

Run & debug
- There is no `package.json` in the repository root. These scripts run with a local Node.js install:

```bash
# run an example
node Chapter_01_JS_Basics/01_Basic.js
```

- When editing examples, run small subsets (or reduce loop counts) before running the whole file. See `02_HotCode_Example.js` which logs 10k iterations — trim before executing.

Project conventions & patterns
- File naming: examples are prefixed with `Chapter_XX_*` (sequential learning chapters). When adding new examples, follow the numbering scheme to maintain order.
- Use console-based examples: all current files use `console.log` for observable behavior rather than test frameworks.
- Mark large or expensive sections with comments (example: `//Hot Code` in `02_HotCode_Example.js`) — treat these as cautions for runtime.

Dependencies & integration
- No external npm dependencies discovered (no `package.json`). If Playwright is intended, add a `package.json` and document `npm install playwright` and `npx playwright test` usage.

Editing guidance for AI agents
- Prioritize tiny, incremental edits to these example files and run them locally with `node` to validate output.
- Avoid running or modifying large loops or heavy logging without first reducing iterations (see [02_HotCode_Example.js](Chapter_01_JS_Basics/02_HotCode_Example.js#L1-L6)).
- When adding new examples, create `Chapter_XX_Name.js` and copy the existing simple pattern: minimal top-level code and `console.log` output.

When to ask the user
- Confirm whether the repository should include Playwright tests or remain a plain Node.js examples folder.
- Ask before adding a `package.json`, test runner, or CI workflows.

Notes about merging
- No existing `.github/copilot-instructions.md` or AGENT files were found; this file is an initial, conservative summary based on current contents.

If anything is missing or if you want Playwright-specific instructions (install, sample test, CI), tell me which direction to add and I'll update this file.
