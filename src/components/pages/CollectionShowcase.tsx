"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { TLink } from "@/components/layout/Transition";
import { products } from "@/data/products";
import { useLocale } from "@/i18n/LocaleProvider";
import { prefersReducedMotion } from "@/lib/gsap";
import styles from "./pages.module.scss";

const AUTO_MS = 7000;

export default function CollectionShowcase() {
  const { t, L } = useLocale();
  const c = t.collectionPage;
  const slides = products;
  const [active, setActive] = useState(0);
  const total = slides.length;
  const slide = slides[active]!;
  const productHref = `/collection/${slide.slug}`;

  const go = useCallback(
    (dir: -1 | 1) => {
      setActive((i) => (i + dir + total) % total);
    },
    [total],
  );

  useEffect(() => {
    if (prefersReducedMotion() || total < 2) return;
    const id = setInterval(() => go(1), AUTO_MS);
    return () => clearInterval(id);
  }, [go, total, active]);

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
    <section className={styles.showcase} aria-label={c.eyebrow}>
      <div className={styles.showcasePanel}>
        <header className={styles.showcaseTop}>
          <div className={styles.showcaseBrand}>
            <Image src="/images/brand/crest.png" alt="" width={44} height={44} className={styles.showcaseCrest} />
            <div>
              <p className={styles.showcaseBrandName}>Andriano Cherini</p>
              <p className={styles.showcaseBrandMeta}>Fermo · 2014</p>
            </div>
          </div>
          <p className={styles.showcaseCount} aria-live="polite">
            {pad(active + 1)} / {pad(total)}
          </p>
        </header>

        <div className={styles.showcaseCopy}>
          <p className={styles.showcaseEyebrow}>{c.showcaseEyebrow}</p>
          <h1 className={styles.showcaseTitle}>
            <TLink href={productHref} className={styles.showcaseTitleLink}>
              {slide.name}
              <span>{L(slide.model)}</span>
            </TLink>
          </h1>
          <p className={styles.showcaseLead}>{L(slide.tagline)}</p>
          <TLink href={productHref} className={styles.showcaseCta}>
            {c.showcaseCta} <span aria-hidden="true">↗</span>
          </TLink>
        </div>

        <footer className={styles.showcaseFoot}>
          <div className={styles.showcaseMicro}>
            <span>{c.showcasePlace}</span>
            <i />
            <span>{c.showcaseHandmade}</span>
          </div>

          <div className={styles.showcaseThumbs} role="tablist" aria-label="Slides">
            {slides.map((p, i) => (
              <button
                key={p.slug}
                type="button"
                role="tab"
                aria-selected={i === active}
                className={`${styles.showcaseThumb} ${i === active ? styles.showcaseThumbActive : ""}`}
                onClick={() => setActive(i)}
              >
                <Image
                  src={p.images[0]!}
                  alt=""
                  fill
                  sizes="140px"
                  style={{ objectPosition: p.frame }}
                />
              </button>
            ))}
          </div>

          <div className={styles.showcaseProgress} aria-hidden="true">
            <span style={{ width: `${((active + 1) / total) * 100}%` }} />
          </div>
        </footer>
      </div>

      <div className={styles.showcaseStage}>
        {slides.map((p, i) => (
          <div key={p.slug} className={`${styles.showcaseFrame} ${i === active ? styles.showcaseFrameActive : ""}`}>
            <Image
              src={p.images[0]!}
              alt=""
              fill
              priority={i === 0}
              sizes="(max-width: 1100px) 100vw, 58vw"
              className={styles.showcaseImgBloom}
            />
            <Image
              src={p.images[0]!}
              alt=""
              fill
              priority={i === 0}
              sizes="(max-width: 1100px) 100vw, 58vw"
              className={styles.showcaseImg}
            />
            <div className={styles.showcaseEdge} />
          </div>
        ))}
        <TLink href={productHref} className={styles.showcaseStageLink}>
          <span className="sr-only">
            {slide.name} — {L(slide.model)}
          </span>
        </TLink>
      </div>

      <div className={styles.showcaseNav}>
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
