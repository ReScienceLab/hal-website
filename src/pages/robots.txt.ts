import type { APIRoute } from "astro";
import { absoluteUrl } from "../data/site";

const aiUserAgents = ["GPTBot", "ChatGPT-User", "PerplexityBot", "ClaudeBot", "anthropic-ai", "Google-Extended", "Bingbot"];
const groups = ["User-agent: *\nAllow: /", ...aiUserAgents.map((agent) => `User-agent: ${agent}\nAllow: /`)];

export const GET: APIRoute = () =>
  new Response(`${groups.join("\n\n")}\n\nSitemap: ${absoluteUrl("/sitemap.xml")}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
