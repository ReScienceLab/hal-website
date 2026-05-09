---
title: "Project Standards for AI Coding Agents | Hal"
description: "Give each AI coding iteration the repo-specific commands, conventions, and review rules it needs to stay consistent."
h1: "Inject project standards into each agent loop"
pageType: "feature"
order: 4
noindex: false
updatedAt: "2026-05-09"
reviewedBy: "ReScience Lab"
summary: "Agents default to generic patterns unless the repo tells them otherwise. Hal helps carry project standards into each story so implementation starts with local rules, not guesses."
faqs:
  - question: "What belongs in project standards?"
    answer: "Include build and test commands, architecture rules, code style, forbidden patterns, review expectations, and repo-specific conventions the agent should follow."
  - question: "Should standards be long?"
    answer: "Usually no. Short, concrete instructions are easier to maintain and easier for agents to follow. Add detail when repeated review feedback shows a missing rule."
  - question: "Can standards replace code review?"
    answer: "No. Standards reduce avoidable mistakes, but a developer should still inspect the generated changes before merging."
related:
  - "fresh-context-every-story"
  - "pluggable-agent-engines"
  - "prd-driven-planning"
---

## What are project standards for AI coding agents?

Project standards are repo-specific rules, commands, conventions, and review expectations that an AI coding agent should follow during implementation. In Hal, standards help each story start with local context such as package manager, test command, architecture rules, and forbidden patterns.

## What breaks without local rules

Agents can write plausible code that does not match the repo. They may choose the wrong package manager, miss the test command, invent folder patterns, or use a style the team already rejected.

Those mistakes are not always model failures. Often, the agent simply did not receive the local rules.

## How Hal handles it

Hal includes project standards as part of the loop context so each story starts with the commands, conventions, and constraints that matter for this repo.

```bash
hal init
hal validate
hal run
```

The point is to make the expected way of working explicit before implementation begins.

## What the developer gets

- Repeatable instructions for future loops.
- Fewer style and workflow surprises.
- A clearer review basis when the agent deviates.
- Standards that can evolve as the repo changes.

## How to review standards

Ask whether each rule changes agent behavior. “Use our existing patterns” is weak. “Use Bun commands, keep Astro content pages in `src/content`, and run `bun run build` before finishing” is stronger.

## What Hal does and does not do

| Hal does | Hal does not do |
|---|---|
| Structures PRD-native coding loops around planning, validation, implementation, reporting, and reviewable state. | Guarantee code quality, passing tests, delivery speed, revenue, rankings, or production readiness. |
| Helps supported engines work against smaller, reviewable units of work. | Replace developer review, QA, security review, or merge judgment. |

## Sources and verification

Before adopting this workflow, verify the current [Hal source repository](https://github.com/ReScienceLab/hal), [install docs](/docs/install/), [pricing status](/pricing/), and [machine-readable pricing](/pricing.md). Check release notes and engine support before relying on Hal in production work.

