---
title: "AI Coding Loop - Glossary"
description: "An AI coding loop is a repeated plan, implement, inspect, and continue workflow for agent-assisted software development."
h1: "AI coding loop"
pageType: "glossary"
noindex: false
updatedAt: "2026-05-09"
reviewedBy: "ReScience Lab"
summary: "An AI coding loop turns agent work into repeatable iterations instead of one long, drifting chat session."
faqs:
  - question: "What is an AI coding loop?"
    answer: "It is a repeated workflow where a coding agent works on bounded tasks and leaves output for developer inspection before the next step or merge."
  - question: "How does Hal structure the loop?"
    answer: "Hal describes a flow through planning, conversion, validation, implementation, reporting, archiving, and review."
related:
  - "prd-native-development"
  - "acceptance-criteria"
---

## What is an AI coding loop?

An AI coding loop is a repeatable workflow where a developer defines a bounded task, an AI coding agent implements against that task, and the resulting changes are inspected before continuing or merging. Hal structures this loop around PRDs, validation, runtime state, reports, and review.

## Definition

An AI coding loop is a repeatable sequence for using an AI coding agent on software work. A healthy loop defines the task, runs implementation, records what happened, and gives a developer a review point.

## In Hal

Hal frames the loop around PRDs and stories. The site describes the sequence as planning, conversion, validation, running, reporting, archiving, and human review.

## What makes a loop reviewable

A reviewable loop leaves artifacts. Those can include changed files, commits, reports, workflow state, acceptance criteria, and archive history.

## What to avoid

Avoid one broad prompt that asks an agent to implement an entire complex feature without boundaries. Long unstructured sessions are harder to inspect and easier to drift.

## Where to go next

- Read the [first Hal loop guide](/docs/first-loop/) to see the workflow in practice.
- Review [PRD-driven planning](/features/prd-driven-planning/) for the feature mechanics.
- Use the [PRD readiness checker](/tools/prd-readiness-checker/) before handing a requirement to an agent.
- Verify current product behavior in the [Hal source repository](https://github.com/ReScienceLab/hal).

