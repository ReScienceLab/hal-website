---
title: "Fresh context every story - Hal Feature"
description: "Keep long features from becoming one drifting agent session by giving each story its own bounded context window."
h1: "Fresh context for every implementation story"
pageType: "feature"
noindex: false
---

## Why this exists

Long features drift when one agent session carries the entire conversation history. Tokens compound, context gets polluted, and the agent starts answering questions that were asked ten stories ago instead of the current task.

## Where it fits in the Hal loop

Each iteration loads the current story, relevant standards, and recent state without carrying every previous token forward. That keeps review points smaller and makes the loop easier to inspect.

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
