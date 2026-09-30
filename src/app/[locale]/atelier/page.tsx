import type { Metadata } from "next";
import AtelierView from "@/components/pages/AtelierView";
import { resolveLocale, staticPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return staticPageMetadata("atelier", resolveLocale(locale), "/atelier", "/images/atelier/workshop.jpg");
}

export default function AtelierPage() {
  return <AtelierView />;
}
