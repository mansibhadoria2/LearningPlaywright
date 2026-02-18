# LearningPlaywright

Small Node.js learning playground with simple example scripts demonstrating basic Playwright/Node usage patterns.

Purpose
- Provide tiny, self-contained examples under `Chapter_01_JS_Basics/` that run with Node.js.

Quick Start
- Run an example with a local Node.js install:

```bash
node Chapter_01_JS_Basics/01_Basic.js
```

- Beware: `Chapter_01_JS_Basics/02_HotCode_Example.js` contains a 10k-iteration loop marked `//Hot Code`. Reduce iterations before running during development.

Files of interest
- Examples: [Chapter_01_JS_Basics/01_Basic.js](Chapter_01_JS_Basics/01_Basic.js#L1), [Chapter_01_JS_Basics/02_HotCode_Example.js](Chapter_01_JS_Basics/02_HotCode_Example.js#L1-L6), [Chapter_01_JS_Basics/03_platform_verification.js](Chapter_01_JS_Basics/03_platform_verification.js#L1-L2)
- Copilot guidance: [.github/copilot-instructions.md](.github/copilot-instructions.md#L1)
- Repository ignore: [.gitignore](.gitignore#L1)

Conventions
- File naming: examples are prefixed `Chapter_XX_*` to keep learning snippets ordered.
- Examples use `console.log` for observable behavior; there is no test harness or `package.json` in the repo root.

Adding Playwright or dependencies
- This repo currently contains only examples; to add Playwright:

```bash
npm init -y
npm install playwright
```

Then add a script or sample test and update the README accordingly.

Pushing changes
- Recommended: authenticate once with GitHub CLI or your OS credential manager so you don't paste a PAT every push:

```bash
gh auth login
git push -u origin main
```

Or set up SSH keys and use an SSH remote URL to avoid PATs entirely.

If you want a more structured set of examples (tests, CI, package.json), ask and I'll scaffold them.
