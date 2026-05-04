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

function eyeDither() {
  const dots: string[] = [];
  const centerX = 984;
  const centerY = 158;
  for (let row = -9; row <= 9; row += 1) {
    for (let col = -15; col <= 15; col += 1) {
      const x = centerX + col * 15;
      const y = centerY + row * 15;
      const distance = Math.sqrt((col / 15) ** 2 + (row / 9) ** 2);
      if (distance > 1.1) continue;
      const opacity = Math.max(0.08, 0.42 * (1 - distance));
      const radius = Math.max(1.2, 5.5 * (1 - distance));
      dots.push(`<circle cx="${x}" cy="${y}" r="${radius.toFixed(1)}" fill="#dc2626" fill-opacity="${opacity.toFixed(2)}"/>`);
    }
  }
  return dots.join("\n  ");
}

function terminalAscii(pageType: string) {
  const rows = [
    "$ hal plan pricing-context",
    "✓ stories bounded",
    "✓ review trail intact",
    "✓ llms + pricing parsed",
    `mode: ${pageType.toLowerCase()}`,
  ];
  return rows
    .map((row, index) => `<text x="82" y="${456 + index * 25}" class="term">${escapeXml(row)}</text>`)
    .join("\n  ");
}

function svg({ title, pageType }: OgProps) {
  const lines = wrapText(title);
  const text = lines.map((line, index) => `<text x="80" y="${258 + index * 78}" class="title">${escapeXml(line)}</text>`).join("\n  ");
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0a0a0c"/>
  <rect x="46" y="46" width="1108" height="538" rx="16" fill="#0f0f12" stroke="#ffffff" stroke-opacity="0.08"/>
  <path d="M735 46H1154V362C1048 255 930 151 735 46Z" fill="#dc2626" fill-opacity="0.06"/>
  ${eyeDither()}
  <circle cx="984" cy="158" r="43" fill="#dc2626"/>
  <circle cx="984" cy="158" r="15" fill="#0a0a0c" fill-opacity="0.76"/>
  <path d="M852 158C906 104 1062 104 1116 158C1062 212 906 212 852 158Z" stroke="#dc2626" stroke-opacity="0.70" stroke-width="2"/>
  <rect x="68" y="425" width="520" height="138" rx="12" fill="#111114" stroke="#ffffff" stroke-opacity="0.07"/>
  <rect x="68" y="425" width="520" height="32" rx="12" fill="#1a1a1e"/>
  <circle cx="91" cy="441" r="5" fill="#dc2626"/>
  <circle cx="110" cy="441" r="5" fill="#8a8f98" fill-opacity="0.45"/>
  <circle cx="129" cy="441" r="5" fill="#8a8f98" fill-opacity="0.30"/>
  <style>
    .brand{font: 500 30px Geist, system-ui, sans-serif; fill: #f0f0f0; letter-spacing: -0.03em;}
    .eyebrow{font: 500 20px 'Geist Mono', ui-monospace, monospace; fill: #8a8f98; letter-spacing: 0.08em; text-transform: uppercase;}
    .title{font: 600 72px Geist, system-ui, sans-serif; fill: #f0f0f0; letter-spacing: -0.055em;}
    .caption{font: 400 24px Geist, system-ui, sans-serif; fill: #8a8f98;}
    .term{font: 400 14px 'Geist Mono', ui-monospace, monospace; fill: #8a8f98;}
    .hot{fill: #dc2626;}
  </style>
  <text x="80" y="112" class="brand">${escapeXml(SITE.name)}</text>
  <text x="80" y="176" class="eyebrow">${escapeXml(pageType)}</text>
  ${text}
  ${terminalAscii(pageType)}
  <text x="635" y="540" class="caption">PRD-driven coding loops with inspectable state.</text>
</svg>`;
}

export const getStaticPaths: GetStaticPaths = () =>
  ROUTES.map((route) => ({ params: { slug: slugForPath(route.path) }, props: { title: route.h1, pageType: route.pageType } }));

export const GET: APIRoute = ({ props }) =>
  new Response(svg(props as OgProps), { headers: { "Content-Type": "image/svg+xml; charset=utf-8" } });
