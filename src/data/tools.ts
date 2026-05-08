import type { CollectionEntry } from "astro:content";

export type ToolEntry = CollectionEntry<"tools">;

export function toolSlug(tool: Pick<ToolEntry, "id">) {
  return tool.id.replace(/\.md$/, "");
}

export function sortToolsByOrder(tools: ToolEntry[]) {
  return [...tools].sort((a, b) => a.data.order - b.data.order || toolSlug(a).localeCompare(toolSlug(b)));
}
