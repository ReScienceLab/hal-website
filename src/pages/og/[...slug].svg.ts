import type { APIRoute, GetStaticPaths } from "astro";
import { ROUTES, SITE } from "../../data/site";

type OgProps = { title: string; pageType: string };

function slugForPath(path: string) {
  return path === "/" ? "home" : path.replace(/^\//, "").replace(/\/$/, "");
}

function escapeXml(value: string) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function wrapText(value: string, maxLineLength = 21) {
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

function svg({ title, pageType }: OgProps) {
  const lines = wrapText(title);
  const text = lines.map((line, index) => `<text x="80" y="${300 + index * 82}" class="title">${escapeXml(line)}</text>`).join("");
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0a0a0c"/>
  <circle cx="1000" cy="118" r="190" fill="#dc2626" fill-opacity="0.20"/>
  <circle cx="1000" cy="118" r="54" fill="#dc2626"/>
  <rect x="48" y="48" width="1104" height="534" rx="24" stroke="rgba(255,255,255,0.10)"/>
  <style>
    .brand{font: 500 34px Geist, system-ui, sans-serif; fill: #f0f0f0; letter-spacing: -0.03em;}
    .eyebrow{font: 500 24px 'Geist Mono', ui-monospace, monospace; fill: #8a8f98; letter-spacing: 0.08em; text-transform: uppercase;}
    .title{font: 600 74px Geist, system-ui, sans-serif; fill: #f0f0f0; letter-spacing: -0.05em;}
    .caption{font: 400 25px Geist, system-ui, sans-serif; fill: #8a8f98;}
  </style>
  <text x="80" y="120" class="brand">${escapeXml(SITE.name)}</text>
  <text x="80" y="206" class="eyebrow">${escapeXml(pageType)}</text>
  ${text}
  <text x="80" y="540" class="caption">Autonomous PRD-driven coding loops for developers.</text>
</svg>`;
}

export const getStaticPaths: GetStaticPaths = () =>
  ROUTES.map((route) => ({ params: { slug: slugForPath(route.path) }, props: { title: route.h1, pageType: route.pageType } }));

export const GET: APIRoute = ({ props }) =>
  new Response(svg(props as OgProps), { headers: { "Content-Type": "image/svg+xml; charset=utf-8" } });
