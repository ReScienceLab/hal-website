---
title: "PRD-Driven AI Coding - Definition and Workflow"
description: "PRD-driven AI coding uses a product requirements document to guide agent planning, story splitting, implementation, and review."
h1: "PRD-driven AI coding"
pageType: "glossary"
noindex: false
updatedAt: "2026-05-09"
reviewedBy: "ReScience Lab"
summary: "PRD-driven AI coding gives an agent a product target and gives the developer a source document for review."
faqs:
  - question: "What is PRD-driven AI coding?"
    answer: "It is using a product requirements document to define scope, constraints, stories, acceptance criteria, and review expectations before an AI coding agent edits files."
  - question: "Is PRD-driven AI coding only for large features?"
    answer: "No. It is most useful when a change has product behavior, edge cases, or review risk that should be written down before implementation."
related:
  - "prd-native-development"
  - "ai-coding-loop"
  - "acceptance-criteria"
---

## What is PRD-driven AI coding?

PRD-driven AI coding means using a product requirements document to guide an AI coding agent from scope to implementation review. The PRD defines the user, behavior, constraints, acceptance criteria, and non-goals before the agent starts changing files.

## How it works in practice

A developer writes or generates a PRD, reviews the scope, splits the work into smaller stories, and validates those stories before implementation. The agent then works against a more explicit target than a one-line prompt.

In Hal, the workflow can look like this:

```bash
hal plan "describe the product change"
hal convert
hal validate
hal run
```

## Why PRDs help AI agents

AI coding agents are sensitive to ambiguity. If the prompt does not define success, the agent may invent scope or optimize for the wrong outcome. A PRD gives both the agent and the reviewer a shared source of truth.

## PRD-driven vs direct prompting

| Dimension | PRD-driven AI coding | Direct agent prompting |
|---|---|---|
| Scope | Written before implementation. | Often negotiated during the chat. |
| Review | Compared against requirements and criteria. | Compared against the latest conversation. |
| Risk control | Encourages story splitting and validation. | Easy to over-broaden. |
| Best fit | Product changes with behavior and edge cases. | Tiny edits or exploratory work. |

## How Hal uses PRDs

Hal is built around PRD-native coding loops. It helps move from product intent into planned, validated, reviewable work while still requiring a developer to inspect generated output before merging.

## Related pages

- [PRD-native development](/glossary/prd-native-development/)
- [PRD-driven planning](/features/prd-driven-planning/)
- [AI coding PRD generator](/tools/ai-coding-prd-generator/)
- [PRD readiness checker](/tools/prd-readiness-checker/)

## Verification rule

Check the current [Hal repository](https://github.com/ReScienceLab/hal), [install docs](/docs/install/), and release notes before relying on command behavior in production work.
