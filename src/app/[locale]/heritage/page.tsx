import type { Metadata } from "next";
import HeritageView from "@/components/pages/HeritageView";
import { resolveLocale, staticPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return staticPageMetadata("heritage", resolveLocale(locale), "/heritage", "/images/atelier/workshop-2.jpg");
}

export default function HeritagePage() {
  return <HeritageView />;
}
