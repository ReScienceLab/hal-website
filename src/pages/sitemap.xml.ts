import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { featureSlug, sortFeaturesByOrder } from '../data/features';
import { toolSlug, sortToolsByOrder } from '../data/tools';
import { ROUTES, absoluteUrl } from '../data/site';

export const GET: APIRoute = async () => {
  const today = new Date().toISOString().slice(0, 10);
  const features = sortFeaturesByOrder(await getCollection('features')).filter((entry) => !entry.data.noindex);
  const tools = sortToolsByOrder(await getCollection('tools')).filter((entry) => !entry.data.noindex);
  const docs = (await getCollection('docs')).filter((entry) => !entry.data.noindex);
  const faq = (await getCollection('faq')).filter((entry) => !entry.data.noindex);
  const glossary = (await getCollection('glossary')).filter((entry) => !entry.data.noindex);

  const staticPages = ROUTES.map((route) => ({
    url: route.path,
    priority: route.path === '/' ? '1.0' : route.path === '/docs' ? '0.8' : '0.6',
    changefreq: 'weekly',
    lastmod: today,
  }));

  const discoveryPages = ['/llms.txt', '/llms-full.txt', '/pricing.md'].map((url) => ({
    url,
    priority: '0.4',
    changefreq: 'weekly',
    lastmod: today,
  }));

  const featurePages = features.map((feature) => ({
    url: `/features/${featureSlug(feature)}`,
    priority: '0.6',
    changefreq: 'weekly',
    lastmod: feature.data.updatedAt,
  }));

  const toolPages = tools.map((tool) => ({
    url: `/tools/${toolSlug(tool)}`,
    priority: '0.7',
    changefreq: 'weekly',
    lastmod: tool.data.updatedAt,
  }));

  const docsPages = docs.map((entry) => ({
    url: `/docs/${entry.id.replace(/\.md$/, '')}`,
    priority: '0.7',
    changefreq: 'weekly',
    lastmod: entry.data.updatedAt,
  }));

  const faqPages = faq.map((entry) => ({
    url: `/faq/${entry.id.replace(/\.md$/, '')}`,
    priority: '0.5',
    changefreq: 'monthly',
    lastmod: entry.data.updatedAt,
  }));

  const glossaryPages = glossary.map((entry) => ({
    url: `/glossary/${entry.id.replace(/\.md$/, '')}`,
    priority: '0.5',
    changefreq: 'monthly',
    lastmod: entry.data.updatedAt,
  }));

  const pages = [...staticPages, ...discoveryPages, ...featurePages, ...toolPages, ...docsPages, ...faqPages, ...glossaryPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${absoluteUrl(p.url)}</loc>
    <lastmod>${p.lastmod}</lastmod>
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
