---
title: "Run Your First Hal Loop - Quickstart"
description: "Run a small Hal loop from PRD planning through validation, implementation, and human review without handing over a broad feature."
h1: "Run your first Hal loop"
pageType: "docs"
noindex: false
updatedAt: "2026-05-09"
reviewedBy: "ReScience Lab"
summary: "The safest first Hal loop is intentionally small: one bounded requirement, clear acceptance criteria, and a developer review before merge."
faqs:
  - question: "What kind of task should I choose first?"
    answer: "Choose a low-risk feature or cleanup with clear behavior, no sensitive data migration, and a review scope you can inspect in one sitting."
  - question: "Can I skip planning and just run implementation?"
    answer: "Hal is designed for PRD-native loops. Use planning and validation so the implementation engine has a bounded target."
  - question: "Does a completed Hal loop mean the code is ready to merge?"
    answer: "No. Treat the result as reviewable agent output. Inspect files, commits, tests, reports, and unresolved acceptance criteria before merging."
related:
  - "install"
  - "review-before-merge"
---

## How do you run a first Hal loop safely?

Run a first Hal loop with one small requirement, a clean branch, validated stories, and a manual review before merge. The goal is not hands-off shipping. The goal is to learn the PRD-native sequence: initialize, plan, convert, validate, run, inspect, and decide what to keep.

## 1. Start from a clean branch

Create a branch for the experiment before the agent edits files:

```bash
git checkout -b hal-first-loop
```

A clean branch makes every generated change easier to review or discard.

## 2. Initialize Hal

Run the project setup command:

```bash
hal init
```

This creates the local workflow structure Hal uses for planning, validation, runtime state, and reviewable artifacts.

## 3. Plan a small requirement

Use a narrow feature that has a visible outcome:

```bash
hal plan "add a dark mode toggle with system preference detection"
```

Review the generated PRD or story output before moving forward. Look for ambiguous scope, missing constraints, and unclear acceptance criteria.

## 4. Convert and validate

Prepare runtime state and check story quality:

```bash
hal convert
hal validate
```

If validation reports unclear stories, fix the PRD before implementation. A vague story usually becomes a vague diff.

## 5. Run the implementation loop

When the plan is reviewable, run the loop:

```bash
hal run
```

Hal can run autonomous implementation iterations with the configured engine, but it should still leave state a developer can inspect.

## 6. Review before merging

Inspect changed files, commits, reports, tests, generated state, and remaining acceptance criteria. Revert or repair anything that does not match the PRD.

Use Hal to make agent work more structured, not to remove developer responsibility.

## Verification and review rule

Before adopting Hal, verify the current [source repository](https://github.com/ReScienceLab/hal), [install path](/docs/install/), release notes, and supported engine behavior. A completed loop is reviewable agent output, not a guarantee that the code is safe to merge.

## Related workflow links

Use the [PRD readiness checker](/tools/prd-readiness-checker/) before planning, read the [PRD-driven planning feature](/features/prd-driven-planning/), and review [whether Hal replaces code review](/faq/does-hal-replace-code-review/) before expanding to larger tasks.

