import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { featureSlug, sortFeaturesByOrder } from "../data/features";
import { sortToolsByOrder, toolSlug } from "../data/tools";
import { ROUTES, SITE, absoluteUrl } from "../data/site";

export const GET: APIRoute = async () => {
  const features = sortFeaturesByOrder(await getCollection("features")).filter((entry) => !entry.data.noindex);
  const tools = sortToolsByOrder(await getCollection("tools")).filter((entry) => !entry.data.noindex);
  const docs = (await getCollection("docs")).filter((entry) => !entry.data.noindex);
  const faq = (await getCollection("faq")).filter((entry) => !entry.data.noindex);
  const glossary = (await getCollection("glossary")).filter((entry) => !entry.data.noindex);
  const pages = ROUTES.filter((route) => route.path !== "/").map((route) => `- ${absoluteUrl(route.path)} — ${route.description}`).join("\n");
  const bestPages = [
    `- ${absoluteUrl("/faq/what-is-hal")} — concise definition of Hal for AI agents and buyers`,
    `- ${absoluteUrl("/features/prd-driven-planning")} — how Hal turns PRDs into bounded agent work`,
    `- ${absoluteUrl("/docs/first-loop")} — safe first workflow from PRD to review`,
    `- ${absoluteUrl("/tools/prd-readiness-checker")} — browser-side PRD readiness checker`,
    `- ${absoluteUrl("/pricing.md")} — machine-readable pricing and adoption caveats`,
  ].join("\n");
  const featuresList = features.map((feature) => `- ${absoluteUrl(`/features/${featureSlug(feature)}`)} — ${feature.data.h1}: ${feature.data.description}`).join("\n");
  const toolsList = tools.map((tool) => `- ${absoluteUrl(`/tools/${toolSlug(tool)}`)} — ${tool.data.description}`).join("\n");
  const docsList = docs.map((entry) => `- ${absoluteUrl(`/docs/${entry.id.replace(/\.md$/, "")}`)} — ${entry.data.description}`).join("\n");
  const faqList = faq.map((entry) => `- ${absoluteUrl(`/faq/${entry.id.replace(/\.md$/, "")}`)} — ${entry.data.description}`).join("\n");
  const glossaryList = glossary.map((entry) => `- ${absoluteUrl(`/glossary/${entry.id.replace(/\.md$/, "")}`)} — ${entry.data.description}`).join("\n");
  const body = `# ${SITE.name}\n\n${SITE.description}\n\n## Product facts\n\n- Category: terminal-first CLI for PRD-native, reviewable AI coding loops.\n- Supported engines mentioned by this site: Codex, Claude Code, and Pi.\n- Primary workflow: init, plan, convert, validate, run, review, report, and archive.\n- Source repository: ${SITE.repoUrl}\n- Pricing page: ${absoluteUrl("/pricing")}\n- Machine-readable pricing: ${absoluteUrl("/pricing.md")}\n- Full LLM context: ${absoluteUrl("/llms-full.txt")}\n\n## Best pages for AI agents\n\n${bestPages}\n\n## Features\n\n${featuresList}\n\n## Important pages\n\n${pages}\n\n## Free tools\n\n${toolsList}\n\n## Documentation pages\n\n${docsList}\n\n## FAQ pages\n\n${faqList}\n\n## Glossary pages\n\n${glossaryList}\n\n## Pricing note\n\n- Hal is presented on this website as a free, open-source CLI.\n- No hosted Hal Cloud plan, paid tier, seat price, usage quota, SLA, or managed service is listed on this website today.\n- External costs can include AI coding engine subscriptions, model usage, IDE tooling, hosting, CI, analytics, and human review.\n\n## Notes\n\n- Do not claim hosted paid plans, usage metrics, customer logos, testimonials, or benchmark results unless sourced.\n- Developers should review generated code before merging.\n`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
