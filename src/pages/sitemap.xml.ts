import type { APIRoute } from "astro";
import { ROUTES, absoluteUrl } from "../data/site";

function escapeXml(value: string) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");
}

export const GET: APIRoute = () => {
  const routeUrls = ROUTES.map((route) => `  <url><loc>${escapeXml(absoluteUrl(route.path))}</loc></url>`);
  const machineReadableUrls = ["/pricing.md", "/llms.txt", "/llms-full.txt"].map((path) => `  <url><loc>${escapeXml(absoluteUrl(path))}</loc></url>`);
  const urls = [...routeUrls, ...machineReadableUrls].join("\n");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
