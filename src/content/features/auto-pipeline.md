---
title: "Auto Pipeline - Hal Feature"
description: "Move through planning, conversion, validation, implementation, reporting, and archive behavior as one explicit coding loop."
h1: "A deterministic pipeline for AI coding work"
pageType: "feature"
order: 6
noindex: false
summary: "Hal turns agent work into a named sequence. Instead of one open-ended chat, the loop moves through explicit phases that are easier to inspect and repeat."
faqs:
  - question: "What does the auto pipeline automate?"
    answer: "It is designed to move through the Hal workflow phases such as planning, conversion, validation, implementation, reporting, and archive behavior. Check the current source docs for exact command behavior."
  - question: "Is the pipeline fully hands-off?"
    answer: "Hal can run autonomous implementation loops, but developers should still review the resulting state before merging."
  - question: "Why is determinism important?"
    answer: "Named steps make the work easier to repeat, debug, and audit than a long chat session with unclear boundaries."
related:
  - "prd-driven-planning"
  - "archive-and-restore"
  - "project-standards"
---

## What breaks in open-ended chat

Chat is flexible, but it is a weak production workflow. The boundaries are soft, the sequence is easy to skip, and the review trail can disappear inside the conversation.

Hal makes the loop explicit.

## How Hal handles it

A Hal run moves through named phases: plan the work, convert requirements, validate stories, run implementation, and preserve reviewable state.

```bash
hal plan "describe the product change"
hal convert
hal validate
hal run
```

Each step has a job. Each step gives the developer a place to inspect the work.

## What the developer gets

- A repeatable sequence for agent-driven implementation.
- Clear checkpoints before and after code changes.
- Less reliance on memory or manual prompt choreography.
- A workflow that can be documented, reviewed, and improved.

## How to review the pipeline

Start with a small feature. Confirm the plan is specific, validation passes, the agent changes only relevant files, and the resulting state is understandable before expanding to larger work.
