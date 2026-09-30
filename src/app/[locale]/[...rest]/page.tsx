import { notFound } from "next/navigation";

/** Catch unknown routes under a locale and render the locale not-found page. */
export const dynamicParams = true;

export function generateStaticParams() {
  return [];
}

export default function CatchAll() {
  notFound();
}
