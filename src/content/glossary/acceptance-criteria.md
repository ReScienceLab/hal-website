---
title: "Acceptance Criteria - Glossary for AI Coding"
description: "Acceptance criteria define observable conditions a story must satisfy before generated code can be accepted after review."
h1: "Acceptance criteria"
pageType: "glossary"
noindex: false
updatedAt: "2026-05-09"
reviewedBy: "ReScience Lab"
summary: "Acceptance criteria tell an AI coding agent what done means and tell the developer what to inspect before accepting the output."
faqs:
  - question: "What are acceptance criteria?"
    answer: "Acceptance criteria are observable, testable conditions that a feature or story must satisfy before it is accepted."
  - question: "Why are they important for AI coding?"
    answer: "They reduce ambiguity and make generated changes easier to validate against the original requirement."
related:
  - "prd-native-development"
  - "ai-coding-loop"
---

## What are acceptance criteria?

Acceptance criteria are observable conditions a story must satisfy before generated code can be accepted. For AI coding, they give the agent a definition of done and give the developer a checklist for reviewing behavior, edge cases, constraints, and unresolved work.

## Definition

Acceptance criteria are specific conditions a story must meet to be considered complete. They should be observable, testable, and tied to product behavior.

## In AI coding workflows

Acceptance criteria help prevent vague prompts from turning into vague diffs. They give the implementation engine a target and give the reviewer a checklist.

## Good criteria

Good acceptance criteria name the user-facing behavior, relevant edge cases, constraints, and non-goals. They avoid broad statements like “works well” or “make it better.”

## In Hal

Hal's PRD-driven workflow encourages requirements and stories that can be validated before implementation. If acceptance criteria are unclear, split or rewrite the story before running the loop.

## Where to go next

- Read the [first Hal loop guide](/docs/first-loop/) to see the workflow in practice.
- Review [PRD-driven planning](/features/prd-driven-planning/) for the feature mechanics.
- Use the [PRD readiness checker](/tools/prd-readiness-checker/) before handing a requirement to an agent.
- Verify current product behavior in the [Hal source repository](https://github.com/ReScienceLab/hal).

