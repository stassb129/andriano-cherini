import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductPageClient from "@/components/pages/ProductPageClient";
import { getProduct, products } from "@/data/products";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return {
    title: `${p.name} — ${p.model.en}`,
    description: p.tagline.en,
    openGraph: { images: [p.images[0]!] },
  };
}

export default async function ProductPage({ params }: Params) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  return <ProductPageClient product={product} />;
}
