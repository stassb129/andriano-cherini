import type { Metadata } from "next";
import AtelierView from "@/components/pages/AtelierView";

export const metadata: Metadata = {
  title: "The Atelier",
  description:
    "Eight weeks, handmade operations, a small team. How a Cherini shoe is cut, lasted and polished in Fermo.",
};

export default function AtelierPage() {
  return <AtelierView />;
}
