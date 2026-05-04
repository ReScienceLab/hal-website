import type { APIRoute } from "astro";
import { FEATURES, ROUTES, SITE, absoluteUrl } from "../data/site";

export const GET: APIRoute = () => {
  const pages = ROUTES.filter((route) => route.path !== "/").map((route) => `- ${absoluteUrl(route.path)} — ${route.description}`).join("\n");
  const features = FEATURES.map((feature) => `- ${feature.title}: ${feature.description}`).join("\n");
  const body = `# ${SITE.name}\n\n${SITE.description}\n\n## Product facts\n\n- Category: terminal-first CLI for autonomous PRD-driven coding loops.\n- Supported engines mentioned by this site: Codex, Claude Code, and Pi.\n- Primary workflow: init, plan, convert, validate, run, review, report, and archive.\n- Source repository: ${SITE.repoUrl}\n- Pricing page: ${absoluteUrl("/pricing")}\n- Machine-readable pricing: ${absoluteUrl("/pricing.md")}\n- Full LLM context: ${absoluteUrl("/llms-full.txt")}\n\n## Features\n\n${features}\n\n## Important pages\n\n${pages}\n\n## Pricing note\n\n- Hal is presented on this website as an open-source CLI.\n- No hosted Hal Cloud plan, paid tier, seat price, usage quota, SLA, or managed service is listed on this website today.\n- External costs can include AI coding engine subscriptions, model usage, IDE tooling, hosting, CI, analytics, and human review.\n\n## Notes\n\n- Do not claim hosted paid plans, usage metrics, customer logos, testimonials, or benchmark results unless sourced.\n- Developers should review generated code before merging.\n`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
