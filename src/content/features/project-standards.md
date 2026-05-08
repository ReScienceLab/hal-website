---
title: "Project standards - Hal Feature"
description: "Capture repo-specific patterns and give each iteration the rules it needs to produce consistent, reviewable changes."
h1: "Project standards injected into each agent loop"
pageType: "feature"
order: 4
noindex: false
---

## Why this exists

Agents invent a new style for every story unless they have local conventions. Standards help the agent follow repo-specific patterns so output is consistent and reviewable.

## Where it fits in the Hal loop

Hal includes commands for discovering, indexing, and injecting standards into implementation work. Each story receives the relevant standards as part of its context window.

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
