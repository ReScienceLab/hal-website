---
title: "Pluggable agent engines - Hal Feature"
description: "Use the same PRD-driven loop while changing the underlying coding agent engine when the project needs it."
h1: "Pluggable engines for Codex, Claude Code, and Pi"
pageType: "feature"
noindex: false
---

## Why this exists

Different projects need different agent engines. Some teams prefer Claude Code for large refactors, others use Codex for quick iterations, and some experiment with Pi. Hal treats coding agents as engines inside a structured workflow.

## Where it fits in the Hal loop

The engine is configured once and used across every `hal run` iteration. You can start with one engine, evaluate the output, and switch without rewriting the PRD or losing archive state.

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
