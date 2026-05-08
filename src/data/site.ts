export const SITE = {
  name: "Hal",
  domain: "https://hal.rocks",
  description:
    "Hal is a terminal-first CLI for autonomous PRD-driven coding loops with AI agents such as Codex, Claude Code, and Pi.",
  repoUrl: "https://github.com/ReScienceLab/hal",
  rescienceUrl: "https://rescience.com/products/hal",
  installCommand: "curl -fsSL https://hal.run/install.sh | bash",
  version: "v0.4.0",
} as const;

export const ROUTES = [
  { path: "/", title: "Hal — Autonomous coding loop for developers", h1: "Write the PRD. Hal runs the loop.", description: SITE.description, pageType: "Home" },
  { path: "/docs", title: "Hal Docs - Getting Started with PRD-Driven Coding", h1: "Hal docs and getting started guide", description: "Install Hal, initialize a repo, plan a PRD, validate stories, and run an autonomous coding loop.", pageType: "Docs" },
  { path: "/getting-started", title: "Getting Started with Hal - Install and Run Your First Loop", h1: "Getting started with Hal", description: "A quickstart path for installing Hal and running the first PRD-driven coding loop.", pageType: "Docs" },
  { path: "/features", title: "Hal Features - PRD-Driven AI Coding Automation", h1: "Hal features for autonomous coding loops", description: "Deep dives into Hal planning, fresh context, engine support, standards, archive, and auto pipeline features.", pageType: "Features" },
  { path: "/tools", title: "Free AI Coding Tools for PRDs, Agents, and Reviewable Tasks", h1: "Free AI coding tools for PRDs and agent loops", description: "Use free tools to check PRD readiness, generate AI coding PRDs, write acceptance criteria, create AGENTS.md files, and split risky coding tasks.", pageType: "Tools" },
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
