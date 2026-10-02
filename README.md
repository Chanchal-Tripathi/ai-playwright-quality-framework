# AI Playwright Quality Framework

> A Senior-SDET portfolio project demonstrating how modern quality engineering can combine **Playwright + TypeScript, UI and API automation, CI/CD evidence, and responsible AI-assisted testing**.

[![Playwright](https://img.shields.io/badge/Playwright-TypeScript-2EAD33?logo=playwright)](https://playwright.dev/)
[![CI](https://github.com/Chanchal-Tripathi/ai-playwright-quality-framework/actions/workflows/ci.yml/badge.svg)](https://github.com/Chanchal-Tripathi/ai-playwright-quality-framework/actions/workflows/ci.yml)

## Why this project exists

Automation maturity is more than generating scripts. A useful quality framework should provide fast feedback, readable tests, reusable architecture, failure evidence, API coverage and a safe way to experiment with AI.

This repository is my hands-on quality-engineering lab for those ideas.

## What it demonstrates

| Area | Evidence in this repository |
| --- | --- |
| UI automation | Playwright browser tests + Page Object Model |
| API quality | Playwright APIRequestContext contract and negative-path checks |
| Test design | Smoke tags, isolated suites and reusable components |
| CI/CD | GitHub Actions on pushes and pull requests |
| Reporting | HTML report + trace/screenshot/video failure evidence |
| Reliability | CI retries, timeouts and parallel execution |
| AI-assisted QE | Test ideation and evidence-based failure-triage helpers |
| AI guardrails | AI supports analysis; deterministic assertions decide pass/fail |

## Architecture

```text
ai-playwright-quality-framework/
├── ai/                    # AI-assisted QE helpers
├── api/                   # Reusable API clients/helpers
├── docs/
│   └── ARCHITECTURE.md    # Design decisions
├── pages/                 # Page Objects
├── tests/
│   ├── ai/                # AI helper/guardrail tests
│   ├── api/               # API contract + negative tests
│   └── ui/                # Browser E2E tests
├── .github/workflows/     # CI pipeline
├── playwright.config.ts
└── package.json
```

See [Architecture & design decisions](docs/ARCHITECTURE.md).

## Example quality scenarios

### UI
The TodoMVC example demonstrates a reusable Page Object and user-visible assertions without relying on proprietary applications or test data.

### API
The public GitHub API tests validate status, content type, response contract and a negative 404 scenario using Playwright's native request fixture.

### AI-assisted testing
The AI layer explores two practical use cases:

1. **Test ideation** — generating candidate API scenarios that a quality engineer reviews before implementation.
2. **Failure triage** — constructing evidence-based prompts that ask an LLM for probable failure category, evidence and debugging steps.

The LLM is deliberately **not** used as the pass/fail oracle. Automated assertions remain deterministic.

## Run locally

Prerequisites: Node.js 20+.

```bash
npm ci
npx playwright install chromium
npm test
```

Run focused suites:

```bash
npm run test:ui
npm run test:api
npm run test:ai
npm run test:smoke
```

Open the HTML report:

```bash
npm run report
```

## CI/CD

GitHub Actions runs the suite for pushes and pull requests to `main`. The pipeline:

1. installs Node and dependencies,
2. installs Chromium,
3. executes UI + API + AI checks,
4. uploads the Playwright HTML report,
5. preserves traces/screenshots/videos when failures occur.

This gives a reviewer both the test result and the debugging evidence.

## AI configuration

The optional experimental OpenAI helpers use an environment variable. Never commit a real key.

```bash
cp .env.example .env
# add your own OPENAI_API_KEY locally
```

The core UI/API/AI-guardrail test suite does **not** require an API key.

## Quality-engineering principles demonstrated

- Test behavior and business risk, not implementation details.
- Keep selectors and reusable UI behavior out of test scenarios.
- Cover service contracts as well as browser workflows.
- Make failures diagnosable with traces and artifacts.
- Use targeted retries as CI resilience—not as a way to hide flaky tests.
- Treat AI output as untrusted assistance that requires deterministic validation and human review.
- Keep portfolio examples free of employer/client data and credentials.

## Roadmap

- Add schema validation for richer API contracts
- Add visual and accessibility checks
- Add API-to-UI data setup flow
- Add flaky-test analytics
- Add LLM evaluation fixtures with deterministic scoring criteria
- Add Docker execution example
- Add contract-testing example with Pact

## About the author

Built by **Chanchal Tripathi**, a Quality Engineering professional focused on **Playwright, Selenium, API automation, CI/CD, automation architecture and AI-assisted software testing**.

This repository is designed to show engineering decisions—not just test-script syntax.
