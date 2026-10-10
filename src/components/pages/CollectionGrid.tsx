"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import ProductCard from "@/components/ui/ProductCard";
import { gsap, ScrollTrigger, useIsoLayoutEffect, prefersReducedMotion } from "@/lib/gsap";
import { CATEGORIES, CATEGORY_LABEL, products, type Category } from "@/data/products";
import { useLocale } from "@/i18n/LocaleProvider";
import styles from "./pages.module.scss";

type Filter = Category | "All";

export default function CollectionGrid({ initial }: { initial: Filter }) {
  const { t, L } = useLocale();
  const c = t.collectionPage;
  const [filter, setFilter] = useState<Filter>(initial);
  const grid = useRef<HTMLDivElement>(null);
  const first = useRef(true);

  const list = filter === "All" ? products : products.filter((p) => p.category === filter);

  useIsoLayoutEffect(() => {
    const el = grid.current;
    if (!el) return;
    const items = el.children;
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      if (first.current) {
        first.current = false;
        gsap.fromTo(
          items,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "expo.out",
            stagger: 0.08,
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          },
        );
      } else {
        gsap.fromTo(items, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9, ease: "expo.out", stagger: 0.06 });
        ScrollTrigger.refresh();
      }
    }, el);
    return () => ctx.revert();
  }, [filter]);

  const choose = (f: Filter) => {
    setFilter(f);
    window.history.replaceState(null, "", f === "All" ? "/collection" : `/collection?c=${f}`);
  };

  const count = (f: Filter) => (f === "All" ? products.length : products.filter((p) => p.category === f).length);

  return (
    <>
      <div className={styles.filters}>
        <div className={styles.chips} role="tablist" aria-label="Filter">
          {(["All", ...CATEGORIES] as Filter[]).map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              className={`${styles.chip} ${filter === f ? styles.chipActive : ""}`}
              onClick={() => choose(f)}
            >
              {f === "All" ? c.filterAll : L(CATEGORY_LABEL[f])}
              <sup>{count(f)}</sup>
            </button>
          ))}
        </div>
        <p className={styles.filterNote}>
          {c.filterShowing}: {list.length} · {c.filterNote}
        </p>
      </div>

      <div ref={grid} className={styles.grid}>
        {list.map((p, i) => (
          <div key={p.slug} className={styles.gridItem}>
            <ProductCard product={p} priority={i < 3} />
          </div>
        ))}
        {filter === "All" && (
          <aside className={styles.gridEditorial}>
            <div className={styles.gridEditorialImg}>
              <Image
                src="/images/atelier/workshop.jpg"
                alt=""
                fill
                sizes="(max-width: 1100px) 100vw, 33vw"
              />
            </div>
            <blockquote>
              “{c.editorial}”
              <cite>{c.editorialBy}</cite>
            </blockquote>
          </aside>
        )}
      </div>
    </>
  );
}
