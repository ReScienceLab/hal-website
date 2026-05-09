---
title: "Install Hal CLI - Setup Guide"
description: "Install the Hal CLI, verify the command is available, and check the AI coding engine prerequisites before running a PRD-native loop."
h1: "Install Hal CLI"
pageType: "docs"
noindex: false
updatedAt: "2026-05-09"
reviewedBy: "ReScience Lab"
summary: "Start with a local install you can verify. Hal is a terminal-first CLI, so installation should end with a working `hal version` check before you run a coding loop."
faqs:
  - question: "What is the current install command shown by this site?"
    answer: "This site shows the Homebrew command for installing the Hal cask on macOS: brew tap j-yw/tap && brew install --cask hal. Verify the current repository README before production adoption."
  - question: "Do I need an AI coding agent installed too?"
    answer: "Yes. Hal supplies the workflow loop. You still need access to a supported coding engine such as Codex, Claude Code, or Pi."
  - question: "What should I run after installing?"
    answer: "Run hal version or hal doctor if available in your installed release, then initialize a low-risk repository with hal init."
related:
  - "first-loop"
  - "review-before-merge"
---

## How do you install Hal CLI?

Install Hal by using the Homebrew command shown on this website, then verify the `hal` command is available before running a coding loop. Hal is a terminal-first CLI, so setup should end with a local command check and a review of current repository installation notes.

## Install with Homebrew

Use the install command shown by this site:

```bash
brew tap j-yw/tap && brew install --cask hal
```

After installation, open a new terminal session if your shell needs to refresh its PATH.

## Verify the binary

Confirm that the `hal` command is available before using it in a repository:

```bash
hal version
```

If your installed release supports diagnostics, run:

```bash
hal doctor
```

Use the GitHub README as the source of truth for release-specific installation notes.

## Check engine prerequisites

Hal wraps a coding loop around an implementation engine. Make sure you have access to one of the supported agent engines mentioned by this site: Codex, Claude Code, or Pi.

The engine may have its own authentication, subscription, API, IDE, or model requirements. Those costs and limits are separate from Hal.

## Initialize a repository

Run Hal inside a repository you can inspect and revert safely:

```bash
hal init
```

Start with a branch and a small task. Do not point a new tool at production code without version control and a review plan.

## Next step

Once installation is verified, run a small first loop. Use a narrow requirement, validate the generated stories, and inspect the output before merging.

## Verification and review rule

Before adopting Hal, verify the current [source repository](https://github.com/ReScienceLab/hal), [install path](/docs/install/), release notes, and supported engine behavior. A completed loop is reviewable agent output, not a guarantee that the code is safe to merge.

## Related workflow links

Use the [PRD readiness checker](/tools/prd-readiness-checker/) before planning, read the [PRD-driven planning feature](/features/prd-driven-planning/), and review [whether Hal replaces code review](/faq/does-hal-replace-code-review/) before expanding to larger tasks.

