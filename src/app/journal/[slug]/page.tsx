import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleView from "@/components/pages/ArticleView";
import { articles, getArticle } from "@/data/journal";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return { title: a.title.en, description: a.excerpt.en, openGraph: { images: [a.cover] } };
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  return <ArticleView article={article} />;
}
