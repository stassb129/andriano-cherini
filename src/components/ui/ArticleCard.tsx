"use client";

import Image from "next/image";
import { TLink } from "@/components/layout/Transition";
import type { Article } from "@/data/journal";
import { useLocale } from "@/i18n/LocaleProvider";
import styles from "./ui.module.scss";

export default function ArticleCard({ article, large }: { article: Article; large?: boolean }) {
  const { L } = useLocale();
  return (
    <TLink href={`/journal/${article.slug}`} className={`${styles.article} ${large ? styles.articleLarge : ""}`}>
      <div className={styles.articleMedia}>
        <Image
          src={article.cover}
          alt=""
          fill
          sizes={large ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 100vw, 33vw"}
          className={styles.articleImg}
        />
      </div>
      <div className={styles.articleMeta}>
        <span>{L(article.category)}</span>
        <span>{L(article.readTime)}</span>
      </div>
      <h3 className={styles.articleTitle}>{L(article.title)}</h3>
      <p className={styles.articleExcerpt}>{L(article.excerpt)}</p>
    </TLink>
  );
}
