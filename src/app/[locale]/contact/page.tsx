import type { Metadata } from "next";
import ContactView from "@/components/pages/ContactView";
import { resolveLocale, staticPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return staticPageMetadata("contact", resolveLocale(locale), "/contact");
}

export default function ContactPage() {
  return <ContactView />;
}
