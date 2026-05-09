---
title: "Does Hal Replace Code Review? - FAQ"
description: "Hal does not replace code review. It structures AI coding loops so developers can inspect generated state, diffs, reports, and commits."
h1: "Does Hal replace code review?"
pageType: "faq"
noindex: false
updatedAt: "2026-05-09"
reviewedBy: "ReScience Lab"
summary: "No. Hal is designed to leave reviewable state, not to make merge decisions for a developer."
faqs:
  - question: "Does Hal replace code review?"
    answer: "No. Hal structures coding loops and can leave reviewable state, but a developer should inspect output before merging."
  - question: "What should I review?"
    answer: "Review the PRD, story status, changed files, commits, reports, tests, and any unresolved acceptance criteria."
  - question: "Can Hal output be useful if it needs review?"
    answer: "Yes. The point is to make agent work bounded and inspectable so review is easier than reading an unstructured chat transcript."
related:
  - "what-is-hal"
  - "which-engines-does-hal-support"
---

## Does Hal replace code review?

Hal does not replace code review. It structures AI coding loops so developers can inspect requirements, stories, changed files, reports, commits, and archive state before deciding what to merge. The developer still owns correctness, testing, security review, and production judgment.

## Short answer

Hal does not replace code review. It creates a workflow around AI coding agents so generated work is easier to inspect.

## Why review still matters

AI coding agents can produce plausible changes that miss product intent, skip edge cases, or modify files outside the expected scope. A structured loop reduces drift, but it does not prove correctness.

## What Hal contributes

Hal can help preserve the trail around a loop: requirements, stories, runtime state, reports, commits, and archive behavior. Those artifacts make it easier to answer what changed and why.

## Safe merge rule

Do not merge because a loop completed. Merge only after a developer verifies the diff against the PRD and the repository's standards.

## Verification rule

Before adopting Hal, inspect the [source repository](https://github.com/ReScienceLab/hal), current [install guide](/docs/install/), [pricing page](/pricing/), and [machine-readable pricing](/pricing.md). Do not assume hosted plans, unsupported engines, metrics, or guarantees unless the current source documents them.

