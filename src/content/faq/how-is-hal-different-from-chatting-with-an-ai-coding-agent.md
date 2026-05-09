---
title: "How Is Hal Different from Chatting with an AI Coding Agent?"
description: "Hal differs from direct AI agent chat by turning requirements into a PRD-native, validated, reviewable coding loop."
h1: "How is Hal different from chatting with an AI coding agent?"
pageType: "faq"
noindex: false
updatedAt: "2026-05-09"
reviewedBy: "ReScience Lab"
summary: "Hal provides workflow structure around coding agents instead of replacing the coding engine itself."
faqs:
  - question: "How is Hal different from chatting with an AI coding agent?"
    answer: "Hal structures planning, conversion, validation, running, reports, archive state, and review around supported coding engines instead of leaving the workflow inside an open-ended chat."
  - question: "Does Hal replace Codex, Claude Code, or Pi?"
    answer: "No. This site describes Hal as a workflow CLI that can use supported engines such as Codex, Claude Code, and Pi."
related:
  - "what-is-hal"
  - "which-engines-does-hal-support"
  - "does-hal-replace-code-review"
---

## How is Hal different from chatting with an AI coding agent?

Hal is different from chatting with an AI coding agent because it provides a PRD-native workflow around the agent. Instead of one open-ended conversation, Hal emphasizes planning, story conversion, validation, implementation, reports, archive state, and developer review before merge.

## Direct chat is useful but loose

Direct agent chat can work well for tiny edits, exploration, or quick questions. It becomes harder to manage when scope grows, because requirements, constraints, review notes, and decisions may live only in the conversation.

## Hal makes the workflow explicit

A Hal loop can include commands such as:

```bash
hal plan "describe the product change"
hal convert
hal validate
hal run
```

The point is not that commands alone make work correct. The point is that the developer gets checkpoints before and after implementation.

## Hal vs direct prompting

| Dimension | Hal | Direct agent chat |
|---|---|---|
| Source of truth | PRD, stories, standards, workflow state. | Conversation context. |
| Scope control | Plan and validate before run. | Scope can expand turn by turn. |
| Engine role | Codex, Claude Code, or Pi can be implementation engines. | The agent interface is both workflow and engine. |
| Review | Inspect artifacts and diffs before merge. | Review often depends on chat history and final diff. |

## Verification rule

Before relying on Hal, inspect the [source repository](https://github.com/ReScienceLab/hal), [engine support FAQ](/faq/which-engines-does-hal-support/), and [install guide](/docs/install/). Do not assume support for engines beyond what current source documents.
