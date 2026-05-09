---
title: "Agentic Coding Workflow - Definition and Examples"
description: "An agentic coding workflow uses AI agents to perform bounded software implementation steps while developers plan, validate, and review output."
h1: "Agentic coding workflow"
pageType: "glossary"
noindex: false
updatedAt: "2026-05-09"
reviewedBy: "ReScience Lab"
summary: "An agentic coding workflow turns AI coding from an open-ended chat into a sequence of planned, inspectable implementation steps."
faqs:
  - question: "What is an agentic coding workflow?"
    answer: "It is a software workflow where an AI agent performs bounded implementation work while a developer supplies requirements, standards, validation, and review."
  - question: "Does agentic coding remove developers?"
    answer: "No. Developers still define intent, review changes, run checks, and decide whether work is safe to merge."
related:
  - "ai-coding-loop"
  - "reviewable-ai-coding-loop"
  - "prd-native-development"
---

## What is an agentic coding workflow?

An agentic coding workflow uses an AI coding agent to perform implementation steps while a developer controls the requirement, constraints, review points, and merge decision. The workflow is strongest when tasks are bounded, standards are explicit, and output is inspected before production use.

## Core pieces

A practical agentic coding workflow usually includes:

1. A written requirement or PRD.
2. Story-sized implementation tasks.
3. Acceptance criteria and non-goals.
4. Repo-specific standards and commands.
5. A run step using a coding agent.
6. Human review of files, tests, reports, and unresolved work.

## Where Hal fits

Hal provides a terminal-first loop around supported coding engines such as Codex, Claude Code, and Pi. Hal is not the model. It is the workflow layer that helps structure planning, validation, execution, reporting, archiving, and review.

## Agentic workflow vs agent chat

| Agentic coding workflow | Agent chat |
|---|---|
| Uses explicit tasks and checkpoints. | Can drift across many turns. |
| Keeps requirements and standards inspectable. | Often stores decisions in conversation history. |
| Preserves reviewable state. | May leave only a final diff. |
| Treats merge as a developer decision. | Can create pressure to accept completion as correctness. |

## Example Hal sequence

```bash
hal init
hal plan "describe the product change"
hal convert
hal validate
hal run
```

Start with a low-risk task and confirm the resulting state is understandable before expanding the workflow.

## Related pages

- [AI coding loop](/glossary/ai-coding-loop/)
- [Reviewable AI coding loop](/glossary/reviewable-ai-coding-loop/)
- [How to structure AI coding tasks](/docs/how-to-structure-ai-coding-tasks/)
- [AI coding task splitter](/tools/ai-coding-task-splitter/)

## Verification rule

Before adopting Hal, inspect the [source repository](https://github.com/ReScienceLab/hal), current [install guide](/docs/install/), and release notes for documented command and engine behavior.
