---
title: "PRD-driven planning - Hal Feature"
description: "Turn a product requirement into structured stories, acceptance criteria, and implementation state before an agent touches code."
h1: "PRD-driven planning for agent work"
pageType: "feature"
order: 1
noindex: false
---

## Why this exists

Developers often jump straight to implementation. Hal forces a planning step that captures scope, expected behavior, constraints, and reviewable stories so each implementation loop has a narrow target.

## Where it fits in the Hal loop

Hal starts from product intent instead of one broad prompt. The planning step turns a PRD into explicit stories and acceptance criteria. That gives the agent a bounded target and gives the developer something reviewable before any code is written.

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
