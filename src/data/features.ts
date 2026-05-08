import type { CollectionEntry } from "astro:content";

export type FeatureEntry = CollectionEntry<"features">;

export function featureSlug(feature: Pick<FeatureEntry, "id">) {
  return feature.id.replace(/\.md$/, "");
}

export function sortFeaturesByOrder(features: FeatureEntry[]) {
  return [...features].sort((a, b) => a.data.order - b.data.order || featureSlug(a).localeCompare(featureSlug(b)));
}
