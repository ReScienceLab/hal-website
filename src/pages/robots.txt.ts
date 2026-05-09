import type { APIRoute } from 'astro';
import { absoluteUrl } from '../data/site';

export const GET: APIRoute = async () => {
  const allowedAgents = [
    '*',
    'GPTBot',
    'ChatGPT-User',
    'PerplexityBot',
    'ClaudeBot',
    'anthropic-ai',
    'Googlebot',
    'Bingbot',
  ];
  const body = `${allowedAgents.map((agent) => `User-agent: ${agent}\nAllow: /`).join('\n\n')}\n\nSitemap: ${absoluteUrl('/sitemap.xml')}\n`;
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
