---
title: "Review Hal Output Before Merge - Checklist"
description: "Use this checklist to review AI coding loop output from Hal before merging commits, reports, workflow state, or generated code."
h1: "Review Hal output before merging"
pageType: "docs"
noindex: false
updatedAt: "2026-05-09"
reviewedBy: "ReScience Lab"
summary: "Hal is built around reviewable state. The merge decision still belongs to a developer who checks behavior, tests, diffs, and unresolved requirements."
faqs:
  - question: "Should Hal output be merged automatically?"
    answer: "No. Hal can structure autonomous coding loops, but developers should inspect the resulting changes before merging."
  - question: "What should I inspect first?"
    answer: "Start with the PRD, story status, changed files, tests, commits, and reports. Then check edge cases and any files the agent touched unexpectedly."
  - question: "What if the output is partially correct?"
    answer: "Keep the useful changes only after review, repair the plan or implementation, and rerun a smaller loop if needed."
related:
  - "first-loop"
  - "install"
---

## How do you review Hal output before merge?

Review Hal output by reopening the original requirement, inspecting every changed file, checking reports and workflow state, running local project checks, and comparing the result against acceptance criteria. A completed loop is not a merge approval; it is agent-generated work prepared for human review.

## Start with the requirement

Before reading the diff, reopen the PRD or requirement that started the loop. Confirm what the agent was supposed to change and what was explicitly out of scope.

If the requirement was vague, do not treat a large diff as a success. Tighten the plan and split the work.

## Inspect changed files

Review every changed file and look for:

- unexpected edits outside the planned scope
- invented abstractions or dependencies
- inconsistent style compared with the repository
- missing error states, empty states, or edge cases
- generated code that passes shape checks but not product intent

## Check commits and reports

Hal can leave commits, reports, progress files, workflow files, and archive state. Use those artifacts to answer basic review questions:

- Which story ran?
- What changed?
- What tests or checks were attempted?
- What remains unresolved?
- Can the work be resumed, reverted, or archived cleanly?

## Run local checks

Run the repository's normal build, typecheck, lint, and test commands. If the project has an `AGENTS.md` or standards file, confirm the agent followed it.

A passing command does not prove product correctness, but a failing command is a reason to stop and repair.

## Review acceptance criteria

Match the implementation against each acceptance criterion. Mark criteria as complete only when behavior is observable and testable.

If a criterion cannot be verified, rewrite it before the next loop.

## Merge only after human acceptance

Hal makes coding work more repeatable and inspectable. It does not guarantee code quality, security, CI success, or product fit. Merge only after a developer accepts the change.

## Verification and review rule

Before adopting Hal, verify the current [source repository](https://github.com/ReScienceLab/hal), [install path](/docs/install/), release notes, and supported engine behavior. A completed loop is reviewable agent output, not a guarantee that the code is safe to merge.

## Related workflow links

Use the [PRD readiness checker](/tools/prd-readiness-checker/) before planning, read the [PRD-driven planning feature](/features/prd-driven-planning/), and review [whether Hal replaces code review](/faq/does-hal-replace-code-review/) before expanding to larger tasks.

