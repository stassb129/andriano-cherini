import type { Metadata } from "next";
import ContactView from "@/components/pages/ContactView";

export const metadata: Metadata = {
  title: "Contact",
  description: "Write to Andriano Cherini — sizes, shipping and the current collection.",
};

export default function ContactPage() {
  return <ContactView />;
}
