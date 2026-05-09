---
title: "How to Review AI-Generated Code Before Merge"
description: "Review AI-generated code by checking the requirement, changed files, tests, reports, edge cases, and unexpected edits before merging."
h1: "How to review AI-generated code before merge"
pageType: "docs"
noindex: false
updatedAt: "2026-05-09"
reviewedBy: "ReScience Lab"
summary: "AI-generated code should be treated as reviewable output, not as an automatic merge candidate."
faqs:
  - question: "Is AI-generated code safe to merge automatically?"
    answer: "No. A developer should inspect the diff, run checks, verify behavior, and confirm the output matches the requirement before merging."
  - question: "What should I review first?"
    answer: "Start with the original requirement, then inspect changed files, tests, reports, acceptance criteria, edge cases, and unexpected edits."
related:
  - "review-before-merge"
  - "first-loop"
  - "how-to-structure-ai-coding-tasks"
---

## How should you review AI-generated code?

Review AI-generated code by comparing it against the original requirement, inspecting every changed file, running project checks, and confirming acceptance criteria before merge. In a Hal loop, also inspect reports, workflow state, commits, archives, and unresolved stories left by the run.

## Prerequisites

- The PRD, issue, or task that started the work.
- A clean branch or diff you can inspect.
- The repository's normal build, lint, typecheck, and test commands.
- Any project standards or `AGENTS.md` instructions used by the agent.

## Review sequence

1. Re-read the requirement and non-goals.
2. Inspect changed files before reading the agent's explanation.
3. Check whether every acceptance criterion is addressed.
4. Run local checks and tests.
5. Look for unexpected dependencies, abstractions, migrations, permissions changes, or broad refactors.
6. Confirm edge cases, empty states, error states, and rollback behavior where relevant.
7. Decide what to keep, fix, rerun, or discard.

## What to inspect in Hal output

Hal is designed to leave reviewable state around the loop. Depending on current release behavior, inspect files such as reports, workflow state, commits, and archive output alongside the code diff.

```bash
hal validate
hal run
```

A completed command is not proof that the product behavior is correct.

## Review checklist

| Area | Review question |
|---|---|
| Requirement | Does the diff solve the requested behavior and avoid non-goals? |
| Scope | Did the agent touch only expected files? |
| Tests | Do relevant checks pass locally? |
| Product behavior | Are edge cases and failure states handled? |
| Standards | Did the output follow repo commands and conventions? |
| Merge safety | Can a human explain and support the change? |

## When to rerun instead of fix manually

Rerun a smaller loop when the generated change is directionally useful but too broad, under-specified, or missing key constraints. Fix manually when the remaining work is small and the developer can confidently review the final diff.

## Verification and no-guarantees rule

Verify current Hal behavior in the [source repository](https://github.com/ReScienceLab/hal) and [install docs](/docs/install/). Hal can make AI coding work more inspectable, but it does not guarantee code quality, test success, or production readiness.
