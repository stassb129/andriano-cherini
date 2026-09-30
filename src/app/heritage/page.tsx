import type { Metadata } from "next";
import HeritageView from "@/components/pages/HeritageView";

export const metadata: Metadata = {
  title: "Heritage",
  description:
    "Andriano Cherini — a contemporary shoemaking house from Fermo, founded in 2014. Formal shoes with modern cushioning.",
};

export default function HeritagePage() {
  return <HeritageView />;
}
