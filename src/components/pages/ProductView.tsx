"use client";

import Image from "next/image";
import { useState } from "react";
import Accordion from "@/components/ui/Accordion";
import Reveal from "@/components/motion/Reveal";
import { TLink } from "@/components/layout/Transition";
import { CATEGORY_LABEL, getVariants, type Product } from "@/data/products";
import { useLocale } from "@/i18n/LocaleProvider";
import styles from "./pages.module.scss";

export default function ProductView({ product }: { product: Product }) {
  const { L, t } = useLocale();
  const ui = t.productUi;
  const [active, setActive] = useState(0);
  const main = product.images[active] ?? product.images[0]!;
  const variants = getVariants(product);

  return (
    <section className={styles.product}>
      <div className={`container ${styles.productGrid}`}>
        <div className={styles.gallery}>
          <div className={styles.galleryMain}>
            <Image
              key={main}
              src={main}
              alt={`${product.name} ${L(product.model)}, ${L(product.colour)}`}
              fill
              priority
              sizes="(max-width: 1100px) 100vw, 58vw"
            />
          </div>
          {product.images.length > 1 && (
            <div className={styles.galleryRest}>
              {product.images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  className={`${styles.galleryThumb} ${i === active ? styles.galleryThumbActive : ""}`}
                  onClick={() => setActive(i)}
                  aria-label={`${product.name} — ${i + 1} / ${product.images.length}`}
                  aria-pressed={i === active}
                >
                  <Image src={src} alt="" fill sizes="96px" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className={styles.info}>
          <div className={styles.infoSticky}>
            <nav className={styles.crumbs} aria-label="Breadcrumb">
              <TLink href="/collection">{ui.collection}</TLink>
              <span>/</span>
              <TLink href={`/collection?c=${product.category}`}>{L(CATEGORY_LABEL[product.category])}</TLink>
            </nav>

            <div className={styles.infoHead}>
              {product.badge && <p className="eyebrow">{L(product.badge)}</p>}
              <h1 className={styles.infoTitle}>{product.name}</h1>
              <p className={styles.infoModel}>{L(product.model)}</p>
            </div>

            <p className={styles.infoTagline}>{L(product.tagline)}</p>

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
                      <Image src={v.images[0]!} alt="" fill sizes="72px" />
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
        </div>
      </div>

      <Reveal className={`container ${styles.productDesc}`}>
        <p className="t-lead">{L(product.description)}</p>
      </Reveal>
    </section>
  );
}
