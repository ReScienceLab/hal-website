---
title: "Archive and Restore - Hal Feature"
description: "Preserve progress, reports, workflow files, and loop state so AI coding work can be paused, inspected, and resumed."
h1: "Preserve the state behind every coding loop"
pageType: "feature"
order: 5
noindex: false
summary: "Autonomous work should not vanish into a chat transcript. Hal favors files, commits, reports, and archives so a developer can pause, inspect, restore, or continue the loop later."
faqs:
  - question: "Why archive agent work?"
    answer: "Archives preserve the review trail around a loop. They make it easier to understand what ran, what changed, and where to continue later."
  - question: "Is archive and restore the same as Git?"
    answer: "No. Git tracks repository history. Hal archive behavior is about preserving workflow state and loop artifacts around agent-driven implementation."
  - question: "Should archived work be merged automatically?"
    answer: "No. Archived state should still be inspected by a developer before any production merge."
related:
  - "fresh-context-every-story"
  - "auto-pipeline"
  - "prd-driven-planning"
---

## What breaks when work has no trail

A coding agent can make progress while leaving the developer unsure what happened. Which story ran? Which files changed? What reports were generated? What remains unresolved?

Hal is built around reviewable state, not invisible progress.

## How Hal handles it

After loop work, archive behavior can preserve progress, reports, and workflow state. That makes it easier to pause a feature, inspect it later, or restore the context needed to continue.

```bash
hal plan "describe the product change"
hal convert
hal validate
hal run
```

The important output is not just code. It is the trail around the code.

## What the developer gets

- Saved loop state for later inspection.
- Reports and artifacts tied to the work.
- A cleaner handoff between autonomous execution and human review.
- A way to resume without reconstructing everything from memory.

## How to review archived work

Treat the archive as supporting evidence. Inspect the changed files, commits, reports, unresolved stories, and acceptance criteria before deciding what to keep.
