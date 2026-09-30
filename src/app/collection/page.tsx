import type { Metadata } from "next";
import CollectionView from "@/components/pages/CollectionView";

export const metadata: Metadata = {
  title: "Collection",
  description: "Andriano Cherini collection — the Fermo cap-toe derby and the Urbino croc-embossed Oxford, in black and dark brown.",
};

export default async function CollectionPage({ searchParams }: { searchParams: Promise<{ c?: string }> }) {
  const { c } = await searchParams;
  return <CollectionView initialCategory={c} />;
}
