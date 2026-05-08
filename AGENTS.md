# Agent Standards: Hal Website Content Architecture

> Derived from the ReScience Lab landing page canonical pattern.

## Content Architecture Rule

**All durable SEO/GEO pages must use Astro Content Collections.**

The Hal website currently uses TypeScript data arrays (`src/data/site.ts`) for feature pages. This should migrate to the content collection pattern for consistency with the ReScience Lab standard.

### Directory Structure

```
src/
  content/
    config.ts              ← Collection schemas (zod)
    features/              ← Feature detail pages
      plan-driven-workflows.md
      validate-step.md
      ...
    docs/                  ← Documentation pages
      install.md
      first-loop.md
      ...
    faq/                   ← FAQ pages
    glossary/              ← Glossary pages
  pages/
    features/[slug].astro  ← Dynamic route (~10 lines)
    docs/[slug].astro      ← Dynamic route (~10 lines)
    faq/[slug].astro       ← Dynamic route (~10 lines)
    glossary/[slug].astro  ← Dynamic route (~10 lines)
  components/
    ContentPage.astro      ← Shared template component
  data/
    site.ts                ← Site constants, navigation
    products.ts            ← Product info (if multi-product)
```

### Content Collection Schema (src/content/config.ts)

```ts
import { defineCollection, z } from "astro:content";

const pageSchema = z.object({
  title: z.string(),
  description: z.string(),
  h1: z.string(),
  pageType: z.enum(["feature", "docs", "faq", "glossary"]),
  noindex: z.boolean().default(false),
  summary: z.string().optional(),
  faqs: z.array(z.object({
    question: z.string(),
    answer: z.string()
  })).default([]),
  related: z.array(z.string()).default([])
});

export const collections = {
  features: defineCollection({ type: "content", schema: pageSchema }),
  docs: defineCollection({ type: "content", schema: pageSchema }),
  faq: defineCollection({ type: "content", schema: pageSchema }),
  glossary: defineCollection({ type: "content", schema: pageSchema })
};
```

### Dynamic Route Pattern (src/pages/features/[slug].astro)

```astro
---
import { getCollection } from "astro:content";
import ContentPage from "../../components/ContentPage.astro";

export async function getStaticPaths() {
  const entries = await getCollection("features");
  return entries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}

const { entry } = Astro.props;
const path = `/features/${entry.slug}`;
---

<ContentPage entry={entry} path={path} />
```

### Shared Template Component (src/components/ContentPage.astro)

The shared component handles:
- Layout wrapper (metadata, canonical, JSON-LD, OG/Twitter tags)
- Breadcrumbs
- Hero section (eyebrow, H1, description, CTA)
- Optional summary/answer box
- Rendered markdown body (`<Content />`)
- FAQ schema (visible FAQ section + JSON-LD)
- Related links
- Final CTA

### Content File Pattern (src/content/features/plan-driven-workflows.md)

```md
---
title: "Plan-Driven Workflows - Hal Feature"
description: "Hal plans implementation from a PRD before any code is written."
h1: "Plan-driven workflows"
pageType: "feature"
noindex: false
summary: "Hal reads your PRD and produces a reviewable plan before writing code."
faqs:
  - question: "What format should the PRD be in?"
    answer: "Markdown is preferred. Hal reads .md files from the repo."
related:
  - "/features/validate-step"
  - "/docs/first-loop"
---

## Why this exists

Developers often jump straight to implementation. Hal forces a planning step...

## How it works

1. Write or update a PRD in your repo
2. Run `hal plan`
3. Review the generated plan
4. Run `hal convert` when ready
```

### Adding a New Page

To add a new feature page:

1. Create `src/content/features/<slug>.md`
2. Add frontmatter with `title`, `description`, `h1`, `pageType`
3. Write markdown body
4. Run `bun run build` — the page appears automatically at `/features/<slug>`

No `.astro` file needed. No route registration needed. No sitemap manual entry needed (pull from collection).

### Migration from Data Arrays

Current Hal website uses `FEATURES` array in `src/data/site.ts` with static `.astro` feature pages. Migration path:

1. Move feature content from `src/data/site.ts` into `src/content/features/*.md`
2. Replace `src/pages/features/[slug].astro` to use `getCollection("features")`
3. Delete individual feature `.astro` pages
4. Update sitemap to iterate content collections

### File-Based vs Content Collection

| Page Type | Pattern | Example |
|---|---|---|
| Durable SEO/GEO content | Content collection `.md` | Features, docs, FAQ, glossary |
| Interactive tools | File-based `.astro` | Tools, calculators, generators |
| Hub/index pages | File-based `.astro` | `/features`, `/docs`, `/` |
| Campaign/ABM pages | Content collection `.md` (noindex) | `/lp/<slug>` |

### QA Rules

- Every content page must have unique `title`, `description`, one `h1`
- FAQ schema must match visible FAQ content
- `noindex: true` for campaign/private pages
- Claim-check all product statements against `PAGEWELL.md`
- Run `bun run build` before finishing
