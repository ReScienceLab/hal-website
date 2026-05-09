---
title: "Which AI Coding Engines Does Hal Support? - FAQ"
description: "This site mentions Codex, Claude Code, and Pi as supported agent engines for Hal's PRD-native coding loop."
h1: "Which engines does Hal support?"
pageType: "faq"
noindex: false
updatedAt: "2026-05-09"
reviewedBy: "ReScience Lab"
summary: "This site claims support for Codex, Claude Code, and Pi. Check the source repository before assuming support for any additional engine."
faqs:
  - question: "Which engines does this site mention?"
    answer: "This site mentions Codex, Claude Code, and Pi as supported AI coding engines for Hal."
  - question: "Does the engine replace the workflow?"
    answer: "No. Hal supplies the PRD-native loop while the configured engine performs implementation work."
  - question: "Can I assume other engines are supported?"
    answer: "No. Do not assume support for engines beyond Codex, Claude Code, and Pi unless the source repository documents it."
related:
  - "what-is-hal"
  - "does-hal-replace-code-review"
---

## Which AI coding engines does Hal support?

This website mentions Codex, Claude Code, and Pi as supported coding engines for Hal. Treat the list as a site claim to verify against the current source repository and release notes before production use. Do not assume support for additional engines unless documented.

## Short answer

This website mentions Codex, Claude Code, and Pi as supported coding engines for Hal.

## How engines fit into the loop

Hal treats the coding agent as the implementation engine. The workflow around that engine is still PRD-native: plan the requirement, validate the stories, run the loop, and inspect output.

## Why this matters

If the workflow lives entirely inside one agent tool, switching tools can mean rebuilding prompts, standards, and review habits. Hal is designed to keep those workflow pieces explicit.

## Verification rule

Before relying on an engine for production work, verify the current source repository and release documentation. Do not rely on unsupported engine claims.
