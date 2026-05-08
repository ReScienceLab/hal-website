---
title: "Pluggable Agent Engines - Hal Feature"
description: "Use Codex, Claude Code, or Pi inside the same PRD-driven loop without rewriting your planning workflow."
h1: "Bring your coding agent into the Hal loop"
pageType: "feature"
order: 3
noindex: false
summary: "Hal treats the coding agent as the engine, not the workflow. Keep the same PRD, stories, validation, and review trail while using Codex, Claude Code, or Pi."
faqs:
  - question: "Which engines does this site claim Hal supports?"
    answer: "This site mentions Codex, Claude Code, and Pi as supported agent engines. Do not assume support for other engines unless the source repository documents it."
  - question: "Can I switch engines for a project?"
    answer: "Hal is designed around a pluggable engine workflow, but developers should verify the current configuration and source documentation before relying on an engine for production work."
  - question: "Does the engine change the review process?"
    answer: "No. Regardless of engine, Hal is built around reviewable state and developer inspection before merge."
related:
  - "project-standards"
  - "prd-driven-planning"
  - "auto-pipeline"
---

## What breaks when the agent is the workflow

If your process lives inside one agent tool, switching tools means rebuilding habits: prompts, conventions, review expectations, and handoff steps. The workflow becomes coupled to the model or interface.

Hal separates the loop from the engine. The PRD-driven process stays stable while the configured coding agent does the implementation work.

## How Hal handles it

Configure the engine, then run the same planning and execution flow.

```bash
hal plan "describe the product change"
hal convert
hal validate
hal run
```

The developer keeps the same checkpoints: plan, validate, run, inspect.

## What the developer gets

- One workflow across supported engines.
- A stable PRD and story format.
- Reviewable output regardless of which agent runs.
- Less process churn when experimenting with tools.

## How to review the setup

Check the current Hal configuration, confirm the selected engine is documented in the repo, and run a small loop before handing over a larger feature. Treat engine changes like any other workflow change: test them before trusting them.
