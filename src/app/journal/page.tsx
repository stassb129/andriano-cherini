import type { Metadata } from "next";
import JournalView from "@/components/pages/JournalView";

export const metadata: Metadata = {
  title: "Notes",
  description: "Short notes from Andriano Cherini — founding, comfort tech, and the Fermo Derby.",
};

export default function JournalPage() {
  return <JournalView />;
}
