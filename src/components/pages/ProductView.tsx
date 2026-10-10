"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import Accordion from "@/components/ui/Accordion";
import { TLink } from "@/components/layout/Transition";
import { CATEGORY_LABEL, getVariants, type Product } from "@/data/products";
import { useLocale } from "@/i18n/LocaleProvider";
import styles from "./pages.module.scss";

export default function ProductView({ product }: { product: Product }) {
  const { L, t } = useLocale();
  const ui = t.productUi;
  const [active, setActive] = useState(0);
  const images = product.images;
  const main = images[active] ?? images[0]!;
  const variants = getVariants(product);
  const total = images.length;

  const go = useCallback(
    (dir: -1 | 1) => {
      setActive((i) => (i + dir + total) % total);
    },
    [total],
  );

  useEffect(() => {
    setActive(0);
  }, [product.slug]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section className={styles.productShow}>
      <div className={styles.productShowPanel}>
        <div className={styles.productShowTop}>
          <nav className={styles.crumbs} aria-label="Breadcrumb">
            <TLink href="/collection">{ui.collection}</TLink>
            <span>/</span>
            <TLink href={`/collection?c=${product.category}`}>{L(CATEGORY_LABEL[product.category])}</TLink>
          </nav>
          <p className={styles.productShowCount}>
            {pad(active + 1)} / {pad(total)}
          </p>
        </div>

        <div className={styles.productShowCopy}>
          {product.badge && <p className="eyebrow">{L(product.badge)}</p>}
          <h1 className={styles.productShowTitle}>
            {product.name}
            <span>{L(product.model)}</span>
          </h1>
          <p className={styles.productShowLead}>{L(product.tagline)}</p>

          {variants.length > 1 && (
            <div className={styles.variants}>
              <p className={styles.variantsLabel}>
                {ui.colour}: <span>{L(product.colour)}</span>
              </p>
              <div className={styles.variantsRow}>
                {variants.map((v) => (
                  <TLink
                    key={v.slug}
                    href={`/collection/${v.slug}`}
                    className={`${styles.variant} ${v.slug === product.slug ? styles.variantActive : ""}`}
                    aria-current={v.slug === product.slug ? "page" : undefined}
                    aria-label={L(v.colour)}
                  >
                    <Image src={v.images[0]!} alt="" fill sizes="72px" style={{ objectPosition: v.frame }} />
                  </TLink>
                ))}
              </div>
            </div>
          )}

          <div className={styles.specs}>
            <h2 className={styles.specsTitle}>{ui.about}</h2>
            <dl>
              {product.specs.map((s) => (
                <div key={s.label.en} className={styles.specRow}>
                  <dt>{L(s.label)}</dt>
                  <dd>{L(s.value)}</dd>
                </div>
              ))}
            </dl>
          </div>

          <Accordion
            items={[
              {
                title: ui.details,
                content: (
                  <ul>
                    {product.features.map((d) => (
                      <li key={d.en}>{L(d)}</li>
                    ))}
                  </ul>
                ),
              },
              { title: ui.care, content: <p>{ui.careBody}</p> },
            ]}
          />
        </div>

        {total > 1 && (
          <div className={styles.productShowThumbs} role="tablist">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                role="tab"
                aria-selected={i === active}
                className={`${styles.showcaseThumb} ${i === active ? styles.showcaseThumbActive : ""}`}
                onClick={() => setActive(i)}
              >
                <Image src={src} alt="" fill sizes="96px" style={{ objectPosition: product.frame }} />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className={styles.productShowStage}>
        <div className={styles.productShowFrame}>
          <Image
            key={`${main}-bloom`}
            src={main}
            alt=""
            fill
            priority
            sizes="(max-width: 1100px) 100vw, 58vw"
            className={styles.productShowImgBloom}
            aria-hidden
          />
          <Image
            key={main}
            src={main}
            alt={`${product.name} ${L(product.model)}, ${L(product.colour)}`}
            fill
            priority
            sizes="(max-width: 1100px) 100vw, 58vw"
            className={styles.productShowImg}
          />
          <div className={styles.productShowEdge} aria-hidden />
        </div>
      </div>

      <div className={styles.productShowNav}>
        <button type="button" className={styles.showcaseArrow} onClick={() => go(-1)} aria-label="Previous">
          ←
        </button>
        <button type="button" className={styles.showcaseArrow} onClick={() => go(1)} aria-label="Next">
          →
        </button>
      </div>
    </section>
  );
}
