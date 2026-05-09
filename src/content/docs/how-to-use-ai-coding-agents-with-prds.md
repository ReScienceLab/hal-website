---
title: "How to Use AI Coding Agents with PRDs"
description: "Use a PRD to give AI coding agents clearer scope, acceptance criteria, constraints, and review checkpoints before implementation starts."
h1: "How to use AI coding agents with PRDs"
pageType: "docs"
noindex: false
updatedAt: "2026-05-09"
reviewedBy: "ReScience Lab"
summary: "A PRD gives an AI coding agent a bounded target and gives the developer a document to review before and after implementation."
faqs:
  - question: "Do AI coding agents need PRDs?"
    answer: "Not for every tiny edit, but PRDs help when product behavior, constraints, edge cases, or review risk need to be explicit before implementation."
  - question: "Can Hal generate or use PRD-style input?"
    answer: "This site describes Hal as PRD-native and mentions commands such as hal plan, hal convert, hal validate, and hal run. Verify exact behavior in the current repository."
related:
  - "first-loop"
  - "review-before-merge"
  - "how-to-structure-ai-coding-tasks"
---

## How do you use AI coding agents with PRDs?

Use a PRD with an AI coding agent by turning product intent into scoped stories, acceptance criteria, constraints, and review checkpoints before implementation starts. In Hal, that means planning the requirement, validating the resulting work units, running a bounded loop, and reviewing output before merge.

## Prerequisites

- A repository under version control.
- A small product change or feature idea.
- Access to a supported coding engine such as Codex, Claude Code, or Pi.
- A willingness to review generated code before merging.

## Step 1: Write the smallest useful PRD

Include:

- user or operator affected by the change
- desired behavior
- in-scope and out-of-scope work
- constraints such as auth, data, performance, or UI rules
- acceptance criteria
- review notes and risky files

If the requirement is still vague, use the [PRD readiness checker](/tools/prd-readiness-checker/) or [AI coding PRD generator](/tools/ai-coding-prd-generator/) before implementation.

## Step 2: Plan and validate in Hal

Use the documented Hal flow as the reviewable boundary:

```bash
hal plan "describe the product change"
hal convert
hal validate
```

Review the generated plan or story output. Do not continue if stories are too broad, criteria are untestable, or constraints are missing.

## Step 3: Run one bounded implementation loop

```bash
hal run
```

Start with one story or one narrow requirement. The goal is to create output that can be reviewed in one sitting, not to hand over a broad roadmap.

## Step 4: Review before merge

Inspect changed files, commits, reports, tests, unresolved criteria, and unexpected edits. If the output is partially correct, keep only what you can verify and rerun a smaller loop if needed.

## PRD checklist for agent work

| PRD section | Why it matters for agents |
|---|---|
| Scope | Prevents broad diffs and invented work. |
| Non-goals | Tells the agent what not to touch. |
| Acceptance criteria | Gives reviewers observable checks. |
| Constraints | Carries local product and technical rules. |
| Review plan | Makes the human checkpoint explicit. |

## Verification and no-guarantees rule

Before adopting Hal, verify the current [source repository](https://github.com/ReScienceLab/hal), [install guide](/docs/install/), release notes, and engine support. Hal structures coding loops; it does not guarantee correctness or replace developer review.
