import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { SITE, absoluteUrl } from "../data/site";

export const GET: APIRoute = async () => {
  const features = await getCollection("features");
  const featuresList = features.map((feature) => `- ${feature.data.title.replace(" - Hal Feature", "")}: ${feature.data.description}`).join("\n");
  const body = `# Pricing — Hal\n\nLast updated: 2026-05-04\n\nHal is presented on this website as an open-source, terminal-first CLI for PRD-driven coding loops with AI agents such as Codex, Claude Code, and Pi. This website does not describe a hosted Hal Cloud plan, paid tier, seat price, usage quota, SLA, or managed service today.\n\n## Open-source CLI\n\n- Public listed price on this website: $0 for the Hal CLI described here\n- Hosted paid plan on this website: Not listed\n- Usage quota on this website: Not listed\n- SLA on this website: Not listed\n- Install command: ${SITE.installCommand}\n- Source repository: ${SITE.repoUrl}\n- Website pricing page: ${absoluteUrl("/pricing")}\n- ReScience Lab product page: ${SITE.rescienceUrl}\n\n## Included product areas\n\n${featuresList}\n\n## External costs not included\n\n- AI coding engine subscriptions, model/API usage, or IDE tooling\n- Repository hosting, CI, preview deployments, production hosting, analytics, or monitoring\n- Human code review, QA, security review, legal review, or release management\n\n## Adoption caveats\n\n- Hal structures coding loops; it does not remove developer review before merging.\n- Hal does not guarantee code quality, tests passing, delivery speed, revenue, rankings, or product outcomes.\n- Verify the current source repository, release notes, and install path before adopting Hal in production work.\n`;

  return new Response(body, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
};
