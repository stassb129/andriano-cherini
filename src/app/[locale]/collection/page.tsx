import type { Metadata } from "next";
import CollectionView from "@/components/pages/CollectionView";
import { resolveLocale, staticPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }>; searchParams: Promise<{ c?: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return staticPageMetadata("collection", resolveLocale(locale), "/collection", "/images/collection/urbino-oxford-nero/06.jpg");
}

export default async function CollectionPage({ searchParams }: Props) {
  const { c } = await searchParams;
  return <CollectionView initialCategory={c} />;
}
