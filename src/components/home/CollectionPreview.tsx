"use client";

import SectionHead from "@/components/ui/SectionHead";
import ProductCard from "@/components/ui/ProductCard";
import Reveal from "@/components/motion/Reveal";
import { TLink } from "@/components/layout/Transition";
import { products } from "@/data/products";
import { useLocale } from "@/i18n/LocaleProvider";
import styles from "./home.module.scss";

export default function CollectionPreview() {
  const { t } = useLocale();
  const items = products;
  return (
    <section className="section">
      <div className="container">
        <SectionHead
          eyebrow={t.collection.eyebrow}
          title={t.collection.title}
          intro={t.collection.intro}
          action={
            <TLink href="/collection" className="link-line">
              {t.collection.viewAll}
            </TLink>
          }
        />
        <Reveal className={styles.collectionGrid} stagger={0.1}>
          {items.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
