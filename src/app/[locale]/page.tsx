import type { Metadata } from "next";
import HomeView from "@/components/home/HomeView";
import { resolveLocale, staticPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return staticPageMetadata("home", resolveLocale(locale), "/");
}

export default function HomePage() {
  return <HomeView />;
}