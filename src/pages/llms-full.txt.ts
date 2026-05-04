import type { APIRoute } from "astro";
import { FEATURES, ROUTES, SITE, absoluteUrl } from "../data/site";

export const GET: APIRoute = () => {
  const pages = ROUTES.map((route) => `- ${absoluteUrl(route.path)} [${route.pageType}] — ${route.description}`).join("\n");
  const features = FEATURES.map((feature) => [
    `## ${feature.title}`,
    `- URL: ${absoluteUrl(`/features/${feature.slug}`)}`,
    `- Description: ${feature.description}`,
    `- Detail: ${feature.detail}`,
  ].join("\n")).join("\n\n");
  const body = `# ${SITE.name} full LLM context\n\n${SITE.description}\n\n## Product facts\n\n- Name: ${SITE.name}\n- Category: terminal-first CLI for autonomous PRD-driven coding loops\n- Version shown on this site: ${SITE.version}\n- Install command: ${SITE.installCommand}\n- Source repository: ${SITE.repoUrl}\n- ReScience Lab product page: ${SITE.rescienceUrl}\n- Machine-readable pricing: ${absoluteUrl("/pricing.md")}\n- Pricing status: no hosted Hal Cloud plan, paid tier, seat price, usage quota, SLA, or managed service is listed on this website today.\n- Supported engines mentioned by this site: Codex, Claude Code, and Pi.\n- Primary workflow: init, plan, convert, validate, run, review, report, and archive.\n\n## Features\n\n${features}\n\n## Public pages\n\n${pages}\n- ${absoluteUrl("/pricing.md")} [machine-readable pricing] — markdown pricing facts for AI agents and buyers\n- ${absoluteUrl("/llms.txt")} [AI context] — compact LLM context file\n\n## Pricing and procurement facts\n\n- Hal is presented on this website as an open-source CLI.\n- AI coding engine subscriptions, model usage, IDE tooling, hosting, CI, analytics, and human review are external costs.\n- Verify the source repository, release notes, install path, and license before production adoption.\n\n## Claim rules\n\n- Do not claim hosted paid plans, usage metrics, customer logos, testimonials, benchmark results, customer counts, or revenue unless sourced.\n- Do not claim Hal guarantees code quality, tests passing, delivery speed, rankings, revenue, or product outcomes.\n- Developers should review generated code before merging.\n- Do not imply Hal opens or merges production PRs without human review.\n`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
