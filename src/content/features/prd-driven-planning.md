---
title: "PRD-Driven Planning for AI Coding Agents | Hal"
description: "Turn product intent into stories, acceptance criteria, and reviewable state before an AI coding agent touches the repo."
h1: "Plan the work before the agent writes code"
pageType: "feature"
order: 1
noindex: false
updatedAt: "2026-05-09"
reviewedBy: "ReScience Lab"
summary: "Hal starts with a PRD because vague prompts create vague diffs. Planning gives the agent a bounded target and gives the developer something to review before implementation begins."
faqs:
  - question: "Do I need a complete PRD before using Hal?"
    answer: "No. Hal can help turn product intent into a structured PRD, but the developer should still review scope, constraints, and acceptance criteria before running implementation."
  - question: "Why not prompt the coding agent directly?"
    answer: "Direct prompts work for tiny changes, but larger features need explicit stories, constraints, and review points. Hal makes that structure part of the workflow."
  - question: "What should I check before running the loop?"
    answer: "Check that each story has a clear outcome, acceptance criteria, known constraints, and a small enough scope to review after the agent runs."
related:
  - "fresh-context-every-story"
  - "project-standards"
  - "auto-pipeline"
---

## What is PRD-driven planning for AI coding?

PRD-driven planning for AI coding means turning product intent into stories, acceptance criteria, and constraints before an AI coding agent edits files. In Hal, this gives developers a reviewable plan before running implementation through supported engines such as Codex, Claude Code, or Pi.

## What breaks without planning

AI coding agents are strongest when the target is narrow. A broad prompt like “add authentication” can sprawl into UI, database, sessions, middleware, tests, copy, and cleanup in one pass. The result may be useful, but it is harder to inspect.

Hal puts planning before implementation. Product intent becomes stories, acceptance criteria, and runtime state so the agent is working against a defined unit of work instead of a loose request.

## How Hal handles it

Run `hal plan` with a product change, then review the generated requirements before the loop starts.

```bash
hal plan "add account settings with one saved preference"
hal convert
hal validate
```

The important shift is not the command itself. It is the checkpoint. The developer gets to inspect scope before an agent edits files.

## What the developer gets

- A PRD or structured requirement in markdown.
- Story-sized implementation units.
- Acceptance criteria that define “done.”
- Runtime state that can be validated before `hal run`.

## How to review the plan

Look for stories that are too broad, acceptance criteria that are not observable, and missing constraints such as authentication, persistence, migration, or UI behavior. If the plan is hard to review, the resulting code will be harder to trust.

## What Hal does and does not do

| Hal does | Hal does not do |
|---|---|
| Structures PRD-native coding loops around planning, validation, implementation, reporting, and reviewable state. | Guarantee code quality, passing tests, delivery speed, revenue, rankings, or production readiness. |
| Helps supported engines work against smaller, reviewable units of work. | Replace developer review, QA, security review, or merge judgment. |

## Sources and verification

Before adopting this workflow, verify the current [Hal source repository](https://github.com/ReScienceLab/hal), [install docs](/docs/install/), [pricing status](/pricing/), and [machine-readable pricing](/pricing.md). Check release notes and engine support before relying on Hal in production work.

