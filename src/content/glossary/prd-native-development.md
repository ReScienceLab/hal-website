---
title: "PRD-Native Development - Glossary"
description: "PRD-native development means using a product requirements document as the source of truth for planning, implementation, and review."
h1: "PRD-native development"
pageType: "glossary"
noindex: false
updatedAt: "2026-05-09"
reviewedBy: "ReScience Lab"
summary: "PRD-native development starts with product requirements and keeps implementation stories, acceptance criteria, and review decisions tied to that source document."
faqs:
  - question: "What does PRD-native mean?"
    answer: "PRD-native means the product requirements document is not an afterthought. It drives planning, story structure, implementation, and review."
  - question: "Why does this matter for AI coding?"
    answer: "AI coding agents work better when scope, constraints, and acceptance criteria are explicit before implementation begins."
related:
  - "ai-coding-loop"
  - "acceptance-criteria"
---

## What is PRD-native development?

PRD-native development means the product requirements document is the source of truth for planning, implementation, and review. Instead of treating the PRD as a handoff artifact, the workflow keeps stories, acceptance criteria, constraints, and merge decisions tied back to the original requirement.

## Definition

PRD-native development is a workflow where product requirements guide the implementation loop from the beginning. The PRD is used to define scope, split stories, write acceptance criteria, and review output.

## In Hal

Hal is built around PRD-native loops. Commands such as `hal plan`, `hal convert`, and `hal validate` exist so implementation starts from structured product intent instead of a loose prompt.

## Why it helps

A clear PRD gives both the agent and the reviewer a shared target. It also makes broad work easier to split into smaller stories that can be inspected one at a time.

## Related terms

PRD-native development connects directly to AI coding loops, acceptance criteria, project standards, and review-before-merge practices.

## Where to go next

- Read the [first Hal loop guide](/docs/first-loop/) to see the workflow in practice.
- Review [PRD-driven planning](/features/prd-driven-planning/) for the feature mechanics.
- Use the [PRD readiness checker](/tools/prd-readiness-checker/) before handing a requirement to an agent.
- Verify current product behavior in the [Hal source repository](https://github.com/ReScienceLab/hal).

