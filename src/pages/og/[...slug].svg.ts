import type { APIRoute, GetStaticPaths } from "astro";
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
  const centerX = 972;
  const centerY = 174;
  for (let row = -16; row <= 18; row += 1) {
    for (let col = -20; col <= 20; col += 1) {
      const x = centerX + col * 16;
      const y = centerY + row * 14;
      const dx = col / 20;
      const dy = row / 13;
      const eye = Math.abs(dy) + Math.abs(dx * dx * 0.85);
      const ripple = Math.sin(col * 0.7 + row * 0.32) * 0.12;
      const density = Math.max(0, 1 - eye + ripple);
      if (density < 0.08 && (row + col) % 5 !== 0) continue;
      const radius = Math.max(1.1, density * 6.4);
      const opacity = Math.max(0.05, Math.min(0.48, density * 0.44));
      dots.push(`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${radius.toFixed(1)}" fill="#dc2626" fill-opacity="${opacity.toFixed(2)}"/>`);
    }
  }
  return dots.join("\n  ");
}

function commandMist(pageType: string) {
  const rows = ["hal plan", "hal validate", "hal run", "review report archive", pageType.toLowerCase()];
  return rows
    .map((row, index) => `<text x="760" y="${354 + index * 42}" class="mist">${escapeXml(row)}</text>`)
    .join("\n  ");
}

function svg({ title, pageType }: OgProps) {
  const lines = wrapText(title);
  const text = lines.map((line, index) => `<text x="76" y="${250 + index * 78}" class="title">${escapeXml(line)}</text>`).join("\n  ");
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0a0a0c"/>
  <path d="M682 0C825 93 957 122 1200 98V630H796C741 497 696 303 682 0Z" fill="#dc2626" fill-opacity="0.055"/>
  <path d="M790 174C859 96 1086 96 1155 174C1086 252 859 252 790 174Z" stroke="#dc2626" stroke-opacity="0.46" stroke-width="2" fill="none"/>
  <path d="M696 514C832 430 982 442 1168 352" stroke="#dc2626" stroke-opacity="0.14" stroke-width="2" fill="none"/>
  <path d="M744 78C874 146 996 139 1172 64" stroke="#dc2626" stroke-opacity="0.13" stroke-width="2" fill="none"/>
  ${redSignal()}
  <circle cx="972" cy="174" r="38" fill="#dc2626"/>
  <circle cx="972" cy="174" r="14" fill="#0a0a0c" fill-opacity="0.78"/>
  ${commandMist(pageType)}
  <style>
    .brand{font: 500 30px Geist, system-ui, sans-serif; fill: #f0f0f0; letter-spacing: -0.03em;}
    .eyebrow{font: 500 19px 'Geist Mono', ui-monospace, monospace; fill: #8a8f98; letter-spacing: 0.08em; text-transform: uppercase;}
    .title{font: 600 72px Geist, system-ui, sans-serif; fill: #f0f0f0; letter-spacing: -0.055em;}
    .caption{font: 400 24px Geist, system-ui, sans-serif; fill: #8a8f98;}
    .mist{font: 400 25px 'Geist Mono', ui-monospace, monospace; fill: #dc2626; fill-opacity: 0.18; letter-spacing: 0.03em;}
  </style>
  <text x="76" y="104" class="brand">${escapeXml(SITE.name)}</text>
  <text x="76" y="164" class="eyebrow">${escapeXml(pageType)}</text>
  ${text}
  <text x="76" y="548" class="caption">PRD-driven coding loops with inspectable state.</text>
</svg>`;
}

export const getStaticPaths: GetStaticPaths = () =>
  ROUTES.map((route) => ({ params: { slug: slugForPath(route.path) }, props: { title: route.h1, pageType: route.pageType } }));

export const GET: APIRoute = ({ props }) =>
  new Response(svg(props as OgProps), { headers: { "Content-Type": "image/svg+xml; charset=utf-8" } });
