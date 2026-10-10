"use client";

import PageHero from "@/components/ui/PageHero";
import ArticleCard from "@/components/ui/ArticleCard";
import NextChapter from "@/components/pages/NextChapter";
import Reveal from "@/components/motion/Reveal";
import { articles } from "@/data/journal";
import { useLocale } from "@/i18n/LocaleProvider";
import styles from "@/components/pages/pages.module.scss";

export default function JournalView() {
  const { t } = useLocale();
  const j = t.journalPage;
  const [lead, ...rest] = articles;

  return (
    <>
      <PageHero eyebrow={j.eyebrow} title={j.title} intro={j.intro} image="/andreano_cherini_collection/model_2/color_1/1.png" meta={[...j.meta]} />

      <section className="section">
        <div className="container">
          {lead && (
            <Reveal>
              <ArticleCard article={lead} large />
            </Reveal>
          )}
          <Reveal className={styles.journalGrid} stagger={0.1}>
            {rest.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </Reveal>
        </div>
      </section>

      <NextChapter href="/collection" eyebrow={j.nextEyebrow} title={j.next} image="/andreano_cherini_collection/model_2/color_1/3.png" />
    </>
  );
}
