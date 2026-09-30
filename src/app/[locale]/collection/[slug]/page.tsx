import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductPageClient from "@/components/pages/ProductPageClient";
import JsonLd from "@/components/seo/JsonLd";
import { getProduct, products } from "@/data/products";
import { LOCALES, localizePath } from "@/i18n/config";
import { PAGE_SEO, absoluteUrl, pageMetadata, resolveLocale } from "@/lib/seo";

type Params = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => products.map((p) => ({ locale, slug: p.slug })));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale = resolveLocale(raw);
  const p = getProduct(slug);
  if (!p) return {};
  const colour = p.colour[locale].toLowerCase();
  const title = `${p.name} — ${p.model[locale]}, ${colour}`;
  const description =
    locale === "ru"
      ? `${p.tagline.ru} Мужские туфли Andriano Cherini ${p.name}, цвет ${colour}. Кожаная стелька, меховая подкладка. В продаже на Ozon.`
      : `${p.tagline.en} Andriano Cherini ${p.name} men's shoes in ${colour}. Leather insole, fur lining. Available on Ozon.`;
  return pageMetadata({ locale, path: `/collection/${p.slug}`, title, description, image: p.images[0] });
}

export default async function ProductPage({ params }: Params) {
  const { locale: raw, slug } = await params;
  const locale = resolveLocale(raw);
  const product = getProduct(slug);
  if (!product) notFound();

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { name: "Andriano Cherini", path: "/" },
      { name: PAGE_SEO.collection.title[locale].split(" — ")[0], path: "/collection" },
      { name: `${product.name} ${product.model[locale]}`, path: `/collection/${product.slug}` },
    ].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(localizePath(item.path, locale)),
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <ProductPageClient product={product} />
    </>
  );
}
