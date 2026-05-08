---
title: "Auto pipeline - Hal Feature"
description: "Run the sequence from planning and validation through implementation, review, reporting, and archive behavior."
h1: "A deterministic auto pipeline for PRD-driven coding"
pageType: "feature"
noindex: false
---

## Why this exists

The auto pipeline is for repeatable agent runs where every phase should be explicit. It keeps the work observable by moving through named steps rather than an open-ended chat session.

## Where it fits in the Hal loop

Run the sequence from planning and validation through implementation, review, reporting, and archive behavior. Each phase is explicit and leaves inspectable state.

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
