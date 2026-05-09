export const SITE = {
  name: "Hal",
  domain: "https://hal.rocks",
  description:
    "Hal is a terminal-first CLI for PRD-native coding loops with AI agents such as Codex, Claude Code, and Pi.",
  repoUrl: "https://github.com/ReScienceLab/hal",
  rescienceUrl: "https://rescience.com/products/hal",
  installCommand: "brew tap j-yw/tap && brew install --cask hal",
  version: "v0.0.9",
} as const;

export const ROUTES = [
  { path: "/", title: "Hal — PRD-Native Coding Loops for AI Agents", h1: "PRD-native coding loops for AI agents", description: SITE.description, pageType: "Home" },
  { path: "/docs", title: "Hal Docs - Run a Reviewable AI Coding Loop", h1: "Hal docs for reviewable coding loops", description: "Install Hal, initialize a repo, plan a PRD, validate stories, run the loop, and inspect the result before merging.", pageType: "Docs" },
  { path: "/getting-started", title: "Getting Started with Hal - Run Your First Reviewable Loop", h1: "Run your first Hal loop", description: "A safe quickstart for installing Hal, planning a small requirement, validating stories, running the loop, and reviewing the output.", pageType: "Docs" },
  { path: "/features", title: "Hal Features - Reviewable AI Coding Loops", h1: "Features for reviewable AI coding loops", description: "Explore Hal features for PRD planning, fresh story context, pluggable engines, project standards, archived state, and deterministic loop execution.", pageType: "Features" },
  { path: "/tools", title: "Free AI Coding Tools for PRDs, Agents, and Reviewable Tasks", h1: "Free AI coding tools for PRDs and agent loops", description: "Prepare work before an AI coding agent touches the repo: check PRDs, generate acceptance criteria, create AGENTS.md files, and split risky tasks.", pageType: "Tools" },
  { path: "/pricing", title: "Hal Pricing - Free Open Source CLI", h1: "Hal pricing", description: "Hal is a free, open-source CLI on this website. Review the install path, source repository, external engine costs, and current product caveats.", pageType: "Pricing" },
  { path: "/testimonials", title: "Hal Proof - Inspectable Trust Signals", h1: "Proof you can inspect", description: "Hal trust signals without fake logos or invented metrics: source code, MIT license, docs, ReScience Lab context, and transparent product status.", pageType: "Trust" },
];

function shouldUseTrailingSlash(path: string) {
  if (path === "/") return false;
  const cleanPath = path.split("#")[0].split("?")[0];
  return !/\.[a-z0-9]+$/i.test(cleanPath);
}

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const [beforeHash, hash = ""] = normalized.split("#");
  const [pathname, query = ""] = beforeHash.split("?");
  const withSlash = shouldUseTrailingSlash(pathname) && !pathname.endsWith("/")
    ? `${pathname}/`
    : pathname;
  return `${SITE.domain}${withSlash === "/" ? "" : withSlash}${query ? `?${query}` : ""}${hash ? `#${hash}` : ""}`;
}

export function ogImagePath(path = "/") {
  const slug = path === "/" || path === "" ? "home" : path.replace(/^\//, "").replace(/\/$/, "");
  return `/og/${slug}.svg`;
}
