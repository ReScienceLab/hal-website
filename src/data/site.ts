export const SITE = {
  name: "Hal",
  domain: "https://hal.resciencelab.ai",
  description:
    "Hal is a terminal-first CLI for autonomous PRD-driven coding loops with AI agents such as Codex, Claude Code, and Pi.",
  repoUrl: "https://github.com/ReScienceLab/hal",
  rescienceUrl: "https://rescience.com/products/hal",
  installCommand: "curl -fsSL https://hal.run/install.sh | bash",
  version: "v0.4.0",
} as const;

export const FEATURES = [
  {
    slug: "prd-driven-planning",
    title: "PRD-driven planning",
    h1: "PRD-driven planning for agent work",
    description:
      "Turn a product requirement into structured stories, acceptance criteria, and implementation state before an agent touches code.",
    detail:
      "Hal starts from product intent instead of one broad prompt. The planning step captures scope, expected behavior, constraints, and reviewable stories so each implementation loop has a narrow target.",
  },
  {
    slug: "fresh-context-every-story",
    title: "Fresh context every story",
    h1: "Fresh context for every implementation story",
    description:
      "Keep long features from becoming one drifting agent session by giving each story its own bounded context window.",
    detail:
      "Each iteration can load the current story, relevant standards, and recent state without carrying every previous token forward. That keeps review points smaller and makes the loop easier to inspect.",
  },
  {
    slug: "pluggable-agent-engines",
    title: "Pluggable agent engines",
    h1: "Pluggable engines for Codex, Claude Code, and Pi",
    description:
      "Use the same PRD-driven loop while changing the underlying coding agent engine when the project needs it.",
    detail:
      "Hal treats coding agents as engines inside a structured workflow. The project can keep its plan, state, standards, and reports while using supported engines such as Codex, Claude Code, and Pi.",
  },
  {
    slug: "project-standards",
    title: "Project standards",
    h1: "Project standards injected into each agent loop",
    description:
      "Capture repo-specific patterns and give each iteration the rules it needs to produce consistent, reviewable changes.",
    detail:
      "Standards help the agent follow local conventions instead of inventing a new style for every story. Hal includes commands for discovering, indexing, and injecting standards into implementation work.",
  },
  {
    slug: "archive-and-restore",
    title: "Archive and restore",
    h1: "Archive and restore state between coding loops",
    description:
      "Preserve progress, reports, and workflow state so features can be paused, reviewed, or resumed later.",
    detail:
      "Autonomous coding work should leave artifacts behind. Hal's archive workflow is built for saving state, switching context, and returning to a loop without losing the review trail.",
  },
  {
    slug: "auto-pipeline",
    title: "Auto pipeline",
    h1: "A deterministic auto pipeline for PRD-driven coding",
    description:
      "Run the sequence from planning and validation through implementation, review, reporting, and archive behavior.",
    detail:
      "The auto pipeline is for repeatable agent runs where every phase should be explicit. It keeps the work observable by moving through named steps rather than an open-ended chat session.",
  },
] as const;

export const ROUTES = [
  { path: "/", title: "Hal — Autonomous coding loop for developers", h1: "Write the PRD. Hal ships it.", description: SITE.description, pageType: "Home" },
  { path: "/docs", title: "Hal Docs - Getting Started with PRD-Driven Coding", h1: "Hal docs and getting started guide", description: "Install Hal, initialize a repo, plan a PRD, validate stories, and run an autonomous coding loop.", pageType: "Docs" },
  { path: "/getting-started", title: "Getting Started with Hal - Install and Run Your First Loop", h1: "Getting started with Hal", description: "A quickstart path for installing Hal and running the first PRD-driven coding loop.", pageType: "Docs" },
  { path: "/features", title: "Hal Features - PRD-Driven AI Coding Automation", h1: "Hal features for autonomous coding loops", description: "Deep dives into Hal planning, fresh context, engine support, standards, archive, and auto pipeline features.", pageType: "Features" },
  ...FEATURES.map((feature) => ({ path: `/features/${feature.slug}`, title: `${feature.title} - Hal Feature`, h1: feature.h1, description: feature.description, pageType: "Feature" })),
  { path: "/pricing", title: "Hal Pricing - Open Source CLI", h1: "Hal pricing", description: "Hal is an open-source CLI. Review the current install path, GitHub source, and what is not a hosted paid plan today.", pageType: "Pricing" },
  { path: "/testimonials", title: "Hal Proof - Source, License, and Trust Signals", h1: "Hal proof and trust signals", description: "Real trust signals for Hal: source repository, MIT license, docs, ReScience Lab context, and transparent product status.", pageType: "Trust" },
];

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.domain}${normalized === "/" ? "" : normalized}`;
}

export function ogImagePath(path = "/") {
  const slug = path === "/" || path === "" ? "home" : path.replace(/^\//, "").replace(/\/$/, "");
  return `/og/${slug}.svg`;
}
