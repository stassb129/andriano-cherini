import type { Metadata } from "next";
import JournalView from "@/components/pages/JournalView";
import { resolveLocale, staticPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return staticPageMetadata("journal", resolveLocale(locale), "/journal");
}

export default function JournalPage() {
  return <JournalView />;
}
