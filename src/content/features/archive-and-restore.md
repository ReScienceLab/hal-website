---
title: "Archive and restore - Hal Feature"
description: "Preserve progress, reports, and workflow state so features can be paused, reviewed, or resumed later."
h1: "Archive and restore state between coding loops"
pageType: "feature"
order: 5
noindex: false
---

## Why this exists

Autonomous coding work should leave artifacts behind. Hal's archive workflow is built for saving state, switching context, and returning to a loop without losing the review trail.

## Where it fits in the Hal loop

After a batch of stories completes, `hal archive` preserves progress, reports, and workflow state. You can pause, review, or resume later without reconstructing context.

```bash
hal plan "describe the product change"
hal convert
hal validate
hal run
```

## How to evaluate it

- The work should be tied to a specific PRD story or command.
- The output should leave inspectable files, commits, reports, or state.
- The developer should still review the changes before merging.
