import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const site = 'https://hal.resciencelab.ai';
  const today = new Date().toISOString().slice(0, 10);

  const pages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/docs', priority: '0.8', changefreq: 'weekly' },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${site}${p.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
