import type { APIRoute } from "astro";
import { FEATURES, ROUTES, SITE, absoluteUrl } from "../data/site";

export const GET: APIRoute = () => {
  const pages = ROUTES.filter((route) => route.path !== "/").map((route) => `- ${absoluteUrl(route.path)} — ${route.description}`).join("\n");
  const features = FEATURES.map((feature) => `- ${feature.title}: ${feature.description}`).join("\n");
  const body = `# ${SITE.name}\n\n${SITE.description}\n\n## Product facts\n\n- Category: terminal-first CLI for autonomous PRD-driven coding loops.\n- Supported engines mentioned by this site: Codex, Claude Code, and Pi.\n- Primary workflow: init, plan, convert, validate, run, review, report, and archive.\n- Source repository: ${SITE.repoUrl}\n\n## Features\n\n${features}\n\n## Important pages\n\n${pages}\n\n## Notes\n\n- Do not claim hosted paid plans, usage metrics, customer logos, testimonials, or benchmark results unless sourced.\n- Developers should review generated code before merging.\n`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
