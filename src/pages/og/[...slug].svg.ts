import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import { featureSlug, sortFeaturesByOrder } from "../../data/features";
import { sortToolsByOrder, toolSlug } from "../../data/tools";
import { ROUTES, SITE } from "../../data/site";

type OgProps = { title: string; pageType: string };

function slugForPath(path: string) {
  return path === "/" ? "home" : path.replace(/^\//, "").replace(/\/$/, "");
}

function escapeXml(value: string) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function wrapText(value: string, maxLineLength = 20) {
  const words = value.split(/\s+/);
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > maxLineLength && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines.slice(0, 3);
}

function redSignal() {
  const dots: string[] = [];
  const originX = 954;
  const originY = 178;
  for (let row = -18; row <= 20; row += 1) {
    for (let col = -23; col <= 24; col += 1) {
      const x = originX + col * 15;
      const y = originY + row * 13;
      const sweep = Math.abs(row * 0.42 + Math.sin(col * 0.38) * 4.2);
      const curve = Math.abs(col / 20) + sweep / 14;
      const wake = Math.max(0, 1 - curve);
      const drift = Math.max(0, 1 - Math.abs(col - row * 0.62) / 17);
      const density = Math.max(wake * 0.58, drift * 0.32);
      if (density < 0.09 && (row + col) % 6 !== 0) continue;
      const radius = Math.max(0.9, density * 5.8);
      const opacity = Math.max(0.045, Math.min(0.34, density * 0.38));
      dots.push(`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${radius.toFixed(1)}" fill="#dc2626" fill-opacity="${opacity.toFixed(2)}"/>`);
    }
  }
  return dots.join("\n  ");
}

function sketchLines() {
  return [
    `<path d="M760 170C833 118 1035 111 1150 168" stroke="#dc2626" stroke-opacity="0.26" stroke-width="2" fill="none" stroke-linecap="round"/>`,
    `<path d="M792 215C870 260 1021 263 1124 207" stroke="#dc2626" stroke-opacity="0.18" stroke-width="2" fill="none" stroke-linecap="round"/>`,
    `<path d="M728 502C836 434 992 441 1166 352" stroke="#dc2626" stroke-opacity="0.13" stroke-width="2" fill="none" stroke-linecap="round"/>`,
    `<path d="M748 84C876 143 1004 135 1168 64" stroke="#dc2626" stroke-opacity="0.11" stroke-width="2" fill="none" stroke-linecap="round"/>`,
  ].join("\n  ");
}

function commandMist(pageType: string) {
  const rows = ["hal plan", "hal validate", "hal run", "review report archive", pageType.toLowerCase()];
  return rows
    .map((row, index) => `<text x="762" y="${354 + index * 42}" class="mist">${escapeXml(row)}</text>`)
    .join("\n  ");
}

function svg({ title, pageType }: OgProps) {
  const lines = wrapText(title);
  const text = lines.map((line, index) => `<text x="76" y="${250 + index * 78}" class="title">${escapeXml(line)}</text>`).join("\n  ");
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0a0a0c"/>
  <path d="M684 0C816 85 955 123 1200 104V630H792C744 486 699 292 684 0Z" fill="#dc2626" fill-opacity="0.052"/>
  ${sketchLines()}
  ${redSignal()}
  ${commandMist(pageType)}
  <style>
    .brand{font: 500 30px Geist, system-ui, sans-serif; fill: #f0f0f0; letter-spacing: -0.03em;}
    .eyebrow{font: 500 19px 'Geist Mono', ui-monospace, monospace; fill: #8a8f98; letter-spacing: 0.08em; text-transform: uppercase;}
    .title{font: 600 72px Geist, system-ui, sans-serif; fill: #f0f0f0; letter-spacing: -0.055em;}
    .caption{font: 400 24px Geist, system-ui, sans-serif; fill: #8a8f98;}
    .mist{font: 400 25px 'Geist Mono', ui-monospace, monospace; fill: #dc2626; fill-opacity: 0.16; letter-spacing: 0.03em;}
  </style>
  <text x="76" y="104" class="brand">${escapeXml(SITE.name)}</text>
  <text x="76" y="164" class="eyebrow">${escapeXml(pageType)}</text>
  ${text}
  <text x="76" y="548" class="caption">PRD-native coding loops with inspectable state.</text>
</svg>`;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const features = sortFeaturesByOrder(await getCollection("features"));
  const tools = sortToolsByOrder(await getCollection("tools"));
  const docs = await getCollection("docs");
  const faq = await getCollection("faq");
  const glossary = await getCollection("glossary");
  const staticRoutes = ROUTES.map((route) => ({
    params: { slug: slugForPath(route.path) },
    props: { title: route.h1, pageType: route.pageType },
  }));
  const featureRoutes = features.map((feature) => ({
    params: { slug: slugForPath(`/features/${featureSlug(feature)}`) },
    props: { title: feature.data.h1, pageType: feature.data.pageType },
  }));
  const toolRoutes = tools.map((tool) => ({
    params: { slug: slugForPath(`/tools/${toolSlug(tool)}`) },
    props: { title: tool.data.h1, pageType: "Tool" },
  }));
  const contentRoutes = [
    ...docs.map((entry) => ({ params: { slug: slugForPath(`/docs/${entry.id.replace(/\.md$/, "")}`) }, props: { title: entry.data.h1, pageType: "Docs" } })),
    ...faq.map((entry) => ({ params: { slug: slugForPath(`/faq/${entry.id.replace(/\.md$/, "")}`) }, props: { title: entry.data.h1, pageType: "FAQ" } })),
    ...glossary.map((entry) => ({ params: { slug: slugForPath(`/glossary/${entry.id.replace(/\.md$/, "")}`) }, props: { title: entry.data.h1, pageType: "Glossary" } })),
  ];
  return [...staticRoutes, ...featureRoutes, ...toolRoutes, ...contentRoutes];
};

export const GET: APIRoute = ({ props }) =>
  new Response(svg(props as OgProps), { headers: { "Content-Type": "image/svg+xml; charset=utf-8" } });
