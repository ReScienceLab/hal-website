import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const pageSchema = z.object({
  title: z.string(),
  description: z.string(),
  h1: z.string(),
  pageType: z.enum(["feature", "docs", "faq", "glossary", "tool"]),
  noindex: z.boolean().default(false),
  updatedAt: z.string(),
  reviewedBy: z.string().default("ReScience Lab"),
  summary: z.string().optional(),
  faqs: z.array(z.object({
    question: z.string(),
    answer: z.string()
  })).default([]),
  related: z.array(z.string()).default([])
});

const featureSchema = pageSchema.extend({
  order: z.number().int().positive()
});

const toolSchema = pageSchema.extend({
  order: z.number().int().positive(),
  category: z.enum(["analyzer", "generator", "validator", "calculator", "previewer", "other"]),
  primaryKeyword: z.string()
});

export const collections = {
  features: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/features" }),
    schema: featureSchema
  }),
  docs: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/docs" }),
    schema: pageSchema
  }),
  faq: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/faq" }),
    schema: pageSchema
  }),
  glossary: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/glossary" }),
    schema: pageSchema
  }),
  tools: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/tools" }),
    schema: toolSchema
  })
};
