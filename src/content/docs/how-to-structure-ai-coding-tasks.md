---
title: "How to Structure Tasks for AI Coding Agents"
description: "Structure AI coding tasks with a clear user, scope, constraints, acceptance criteria, non-goals, and review plan before implementation."
h1: "How to structure AI coding tasks"
pageType: "docs"
noindex: false
updatedAt: "2026-05-09"
reviewedBy: "ReScience Lab"
summary: "Good AI coding tasks are small enough to implement and small enough for a developer to review."
faqs:
  - question: "What makes an AI coding task well structured?"
    answer: "It has a clear user, outcome, scope, non-goals, constraints, acceptance criteria, and review plan."
  - question: "How small should an AI coding task be?"
    answer: "Small enough that a developer can inspect the resulting diff, tests, reports, and unresolved criteria in one review session."
related:
  - "first-loop"
  - "how-to-use-ai-coding-agents-with-prds"
  - "how-to-review-ai-generated-code"
---

## How do you structure tasks for AI coding agents?

Structure AI coding tasks as small, reviewable stories with a user, desired behavior, explicit scope, non-goals, constraints, acceptance criteria, and a review plan. Hal works best when the agent receives bounded work and the developer can inspect the resulting diff before continuing.

## Start with the review boundary

Before writing the prompt, ask: can a developer review the output in one sitting? If not, split the task.

Risky tasks often involve authentication, payments, migrations, permissions, security-sensitive code, broad refactors, or many unrelated files. Use the [AI coding task splitter](/tools/ai-coding-task-splitter/) when scope is unclear.

## Task template

```md
## Goal
What user-visible or developer-visible outcome should change?

## Scope
What files, systems, or behavior may the agent touch?

## Non-goals
What should the agent avoid?

## Acceptance criteria
What observable conditions must be true?

## Constraints
What commands, conventions, data rules, or edge cases matter?

## Review plan
What should a developer inspect before merge?
```

## Convert broad requests into stories

| Broad request | Safer AI coding story |
|---|---|
| Add account settings. | Add one saved display-name field with validation and tests. |
| Improve onboarding. | Add one empty-state CTA and confirm the first-run route still works. |
| Refactor billing. | Extract one pure formatting helper without changing payment behavior. |

## Use Hal after structure is clear

```bash
hal plan "describe one bounded product change"
hal convert
hal validate
hal run
```

If validation highlights unclear stories, tighten the task before implementation. A vague story usually becomes a vague diff.

## What Hal does and does not do

| Hal helps with | Hal does not replace |
|---|---|
| Planning, conversion, validation, running, reporting, archive state, and reviewable loops. | Product judgment, security review, QA, merge approval, or production ownership. |

## Verification rule

Before relying on Hal in production, check the [source repository](https://github.com/ReScienceLab/hal), [install guide](/docs/install/), release notes, and supported engine documentation.
