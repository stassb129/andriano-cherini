"use client";

import SectionHead from "@/components/ui/SectionHead";
import CollectionGrid from "@/components/pages/CollectionGrid";
import CollectionShowcase from "@/components/pages/CollectionShowcase";
import Reveal from "@/components/motion/Reveal";
import { CATEGORIES, type Category } from "@/data/products";
import { useLocale } from "@/i18n/LocaleProvider";
import styles from "@/components/pages/pages.module.scss";

export default function CollectionView({ initialCategory }: { initialCategory?: string }) {
  const { t } = useLocale();
  const c = t.collectionPage;
  const initial = CATEGORIES.includes(initialCategory as Category) ? (initialCategory as Category) : "All";

  return (
    <>
      <CollectionShowcase />

      <section className="section" id="shoes">
        <div className="container">
          <SectionHead eyebrow={c.eyebrow} title={c.title} intro={c.intro} />
          <CollectionGrid key={initial} initial={initial} />
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <SectionHead eyebrow={c.careEyebrow} title={c.careTitle} />
          <Reveal className={styles.services} stagger={0.12}>
            {c.care.map((s, i) => (
              <div key={s.title} className={styles.service}>
                <span className={styles.serviceN}>0{i + 1}</span>
                <h3 className="t-h3">{s.title}</h3>
                <p className="t-body">{s.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
