import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const body = `User-agent: *
Allow: /
Disallow: /_astro/

Sitemap: https://hal.resciencelab.ai/sitemap.xml
`;
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
