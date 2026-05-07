import type { APIRoute } from 'astro';
import { absoluteUrl } from '../data/site';

export const GET: APIRoute = async () => {
  const body = `User-agent: *
Allow: /
Disallow: /_astro/

Sitemap: ${absoluteUrl('/sitemap.xml')}
`;
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
