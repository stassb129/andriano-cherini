"use client";

import Image from "next/image";
import ArticleCard from "@/components/ui/ArticleCard";
import NextChapter from "@/components/pages/NextChapter";
import Reveal from "@/components/motion/Reveal";
import { TLink } from "@/components/layout/Transition";
import { articles, type Article } from "@/data/journal";
import { useLocale } from "@/i18n/LocaleProvider";
import styles from "@/components/pages/pages.module.scss";

export default function ArticleView({ article }: { article: Article }) {
  const { L, t } = useLocale();
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <article className={styles.essay}>
        <header className={styles.essayHero}>
          <div className={styles.essayCover}>
            <Image src={article.cover} alt="" fill priority sizes="100vw" />
          </div>
          <div className={styles.essayShade} />
          <div className={`container ${styles.essayHead}`}>
            <TLink href="/journal" className="link-line">
              {t.journalPage.back}
            </TLink>
            <p className="eyebrow">
              {L(article.category)} · {L(article.date)} · {L(article.readTime)}
            </p>
            <h1 className="t-h1">{L(article.title)}</h1>
            <p className="t-lead">{L(article.excerpt)}</p>
          </div>
        </header>

        <div className={`container ${styles.essayBody}`}>
          {article.body.map((block, i) => {
            if (block.type === "p") return <p key={i}>{L(block.text)}</p>;
            if (block.type === "h") return <h2 key={i}>{L(block.text)}</h2>;
            if (block.type === "quote") {
              return (
                <blockquote key={i}>
                  {L(block.text)}
                  {block.by && <cite>{block.by}</cite>}
                </blockquote>
              );
            }
            return (
              <figure key={i} className={styles.essayFigure}>
                <Image src={block.src} alt={block.caption ? L(block.caption) : ""} width={1400} height={900} />
                {block.caption && <figcaption>{L(block.caption)}</figcaption>}
              </figure>
            );
          })}
        </div>
      </article>

      <section className="section">
        <div className="container">
          <Reveal className={styles.journalGrid} stagger={0.1}>
            {related.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </Reveal>
        </div>
      </section>

      <NextChapter
        href="/collection"
        eyebrow={t.collection.eyebrow}
        title={t.common.viewAll}
        image="/andreano_cherini_collection/model_2/color_2/1.png"
      />
    </>
  );
}
