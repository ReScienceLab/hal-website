# PAGEWELL.md

Generated: 2026-05-04
Last reviewed: 2026-05-04

PAGEWELL.md is the source of truth for Hal website page generation and SEO/GEO maintenance. Use it with `DESIGN.md` before creating or editing pages.

## Product facts

### Product

- Name: Hal
- URL: https://hal.rocks
- Source repository: https://github.com/ReScienceLab/hal
- Category: Terminal-first CLI for autonomous PRD-driven coding loops
- One-sentence description: Hal is a CLI for running PRD-driven development loops with AI coding agents such as Codex, Claude Code, and Pi.
- Primary audience:
  - solo developers and technical founders
  - developers using AI coding agents
  - operators who want repeatable implementation loops from PRDs
- Primary CTA: Get started with Hal docs (`/docs`)
- Secondary CTA: View GitHub repository (https://github.com/ReScienceLab/hal)

### Supported claims

- Hal is an autonomous AI coding loop CLI.
- Hal supports PRD-driven workflows with commands such as `hal init`, `hal plan`, `hal convert`, `hal validate`, and `hal run`.
- Hal supports pluggable engines including Codex, Claude Code, and Pi.
- Hal is terminal-first and developer-oriented.
- Hal can leave reviewable state through commits, reports, workflow files, and archive behavior.
- Developers should review agent output before merging.

### Prohibited or unknown claims

Do not claim:

- customer logos, adoption metrics, GitHub star counts, ratings, testimonials, or benchmark results unless a source is added here
- hosted paid plans, enterprise tiers, SLAs, or usage limits unless implemented and documented
- guaranteed code quality, CI success, shipping speed, revenue, or productivity gains
- support for engines beyond Codex, Claude Code, and Pi unless the repo documents it
- security/compliance guarantees or data retention behavior not documented in the source repo

## Site implementation

- Framework: Astro
- Rendering: static
- Routes: file-based `.astro` and endpoint routes under `src/pages`
- Styling: global CSS in `src/layouts/Layout.astro`, with page-specific styles on the homepage
- Design source: `DESIGN.md`
- Product/site data: `src/data/site.ts`
- Discovery files: `src/pages/robots.txt.ts`, `src/pages/sitemap.xml.ts`, and `src/pages/llms.txt.ts`
- Free tools: `src/content/tools/*.md` for durable tool content, `src/pages/tools/[slug].astro` for dynamic routes, and `src/components/ToolRunner.astro` for browser-side interactive logic
- OG images: generated SVG routes under `src/pages/og/[...slug].svg.ts`
- Commands:
  - Dev: `bun run dev`
  - Build: `bun run build`
  - Preview: `bun run preview`
  - Design lint: `bun run lint:design`

## Content Architecture Standard

See `AGENTS.md` for the canonical ReScience Lab content collection pattern.

**Rule:** All durable SEO/GEO pages must use Astro Content Collections (`.md` files in `src/content/` + dynamic `[slug].astro` routes + shared template component).

**Current state:** Hal uses TypeScript data arrays for feature pages. This should migrate to content collections.

**Migration target:**
- `src/content/features/*.md` — feature detail pages
- `src/content/docs/*.md` — documentation pages
- `src/content/faq/*.md` — FAQ pages
- `src/content/glossary/*.md` — glossary pages
- `src/content/tools/*.md` — free tool metadata, FAQs, and supporting content
- `src/components/ContentPage.astro` — shared template
- `src/pages/features/[slug].astro` — dynamic route (~10 lines)

Adding a new page = creating one `.md` file. No `.astro` duplication.

## Route taxonomy

| Intent | Route pattern | Notes |
|---|---|---|
| Home | `/` | Product overview and conversion page. |
| Docs | `/docs`, `/getting-started` | Install and first-loop documentation. |
| Feature hub | `/features` | Lists feature detail pages. |
| Feature detail | `/features/<slug>` | One feature mechanic per page. |
| Tools hub | `/tools` | Free AI coding tools for PRDs, agent standards, acceptance criteria, and task splitting. |
| Tool detail | `/tools/<slug>` | Interactive file-based tool shell with durable content from `src/content/tools`. |
| Pricing | `/pricing` | Transparent open-source CLI status. |
| Trust/proof | `/testimonials` | Real inspectable signals; no fake testimonials. |
| Discovery | `/robots.txt`, `/sitemap.xml`, `/llms.txt` | Generated endpoint files. |

## Page and component patterns

- Use the dark void aesthetic from `DESIGN.md`: near-black background, subtle surfaces, warm red accent, Geist Sans, Geist Mono for commands.
- Use `Layout.astro` for metadata, canonical URLs, OG/Twitter tags, favicon links, and JSON-LD.
- Use `SiteNav.astro` and `SiteFooter.astro` on non-home pages.
- Use direct hero sections, terminal/code panels, hard feature cards, short FAQ blocks, and command-forward examples.
- Trust pages must use real inspectable evidence such as source, docs, license, and ReScience context. Do not add fake logos or placeholder social proof.

## Generation rules

- Public pages must have a unique title, description, canonical URL, one H1, and crawlable content.
- Keep pages factual, command-forward, and tied to Hal mechanics.
- Prefer docs, feature detail pages, pricing/trust transparency, and comparison pages over generic blog-style filler.
- Do not add dependencies unless needed.
- Do not generate fake testimonials, logos, or metrics.

## QA rules

Before completion:

- Run `bun run build` when safe.
- Check sitemap includes indexable public pages.
- Check robots references sitemap.
- Check llms.txt is factual and excludes unsupported claims.
- Check JSON-LD is valid and visible FAQ schema matches page copy.
- Check internal links and GitHub URLs point to ReScienceLab-owned destinations.
