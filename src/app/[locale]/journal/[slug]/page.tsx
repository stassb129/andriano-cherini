import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleView from "@/components/pages/ArticleView";
import JsonLd from "@/components/seo/JsonLd";
import { articles, getArticle } from "@/data/journal";
import { LOCALES, localizePath } from "@/i18n/config";
import { SITE_NAME, SITE_URL, absoluteUrl, pageMetadata, resolveLocale } from "@/lib/seo";

type Params = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => articles.map((a) => ({ locale, slug: a.slug })));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale = resolveLocale(raw);
  const a = getArticle(slug);
  if (!a) return {};
  const meta = pageMetadata({
    locale,
    path: `/journal/${a.slug}`,
    title: a.title[locale],
    description: a.excerpt[locale],
    image: a.cover,
    type: "article",
  });
  return { ...meta, openGraph: { ...meta.openGraph, type: "article", publishedTime: a.published } };
}

export default async function ArticlePage({ params }: Params) {
  const { locale: raw, slug } = await params;
  const locale = resolveLocale(raw);
  const article = getArticle(slug);
  if (!article) notFound();

  const url = absoluteUrl(localizePath(`/journal/${article.slug}`, locale));
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title[locale],
    description: article.excerpt[locale],
    image: [absoluteUrl(article.cover)],
    datePublished: article.published,
    inLanguage: locale,
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <ArticleView article={article} />
    </>
  );
}
