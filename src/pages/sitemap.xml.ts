import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { featureSlug, sortFeaturesByOrder } from '../data/features';
import { toolSlug, sortToolsByOrder } from '../data/tools';
import { ROUTES, absoluteUrl } from '../data/site';

export const GET: APIRoute = async () => {
  const today = new Date().toISOString().slice(0, 10);
  const features = sortFeaturesByOrder(await getCollection('features'));
  const tools = sortToolsByOrder(await getCollection('tools'));

  const staticPages = ROUTES.map((route) => ({
    url: route.path,
    priority: route.path === '/' ? '1.0' : route.path === '/docs' ? '0.8' : '0.6',
    changefreq: 'weekly',
  }));

  const featurePages = features.map((feature) => ({
    url: `/features/${featureSlug(feature)}`,
    priority: '0.6',
    changefreq: 'weekly',
  }));

  const toolPages = tools.map((tool) => ({
    url: `/tools/${toolSlug(tool)}`,
    priority: '0.7',
    changefreq: 'weekly',
  }));

  const pages = [...staticPages, ...featurePages, ...toolPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${absoluteUrl(p.url)}</loc>
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
