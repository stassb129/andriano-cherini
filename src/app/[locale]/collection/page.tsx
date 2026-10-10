import type { Metadata } from "next";
import CollectionView from "@/components/pages/CollectionView";
import { resolveLocale, staticPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }>; searchParams: Promise<{ c?: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return staticPageMetadata("collection", resolveLocale(locale), "/collection", "/andreano_cherini_collection/model_2/color_2/1.png");
}

export default async function CollectionPage({ searchParams }: Props) {
  const { c } = await searchParams;
  return <CollectionView initialCategory={c} />;
}
