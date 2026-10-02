# Architecture

This repository is intentionally structured as a small quality-engineering platform rather than a single test script.

```text
tests/
├── ui/       Browser workflows and user-facing assertions
├── api/      Service and contract checks
└── ai/       Deterministic tests for AI-quality helpers

pages/        Page Objects and reusable UI behavior
api/          Reusable API clients/helpers
ai/           AI prompts, failure triage and test-generation helpers
.github/      CI automation
```

## Design decisions

1. **Playwright as the unified runner** — browser and API checks share one runner, configuration, reporting model and CI pipeline.
2. **Page Objects contain behavior, not assertions about entire business flows** — tests remain readable while selectors stay centralized.
3. **AI is an assistive layer** — deterministic automation remains the source of truth. AI helpers support test ideation and failure triage rather than deciding pass/fail.
4. **CI preserves evidence** — HTML reports, traces, screenshots and videos are retained for debugging failures.
5. **Tags support risk-based execution** — smoke checks can run independently from the broader suite.

## Portfolio intent

The examples use public demo targets and contain no employer, client, production, credential or proprietary data.
