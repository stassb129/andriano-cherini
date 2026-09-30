"use client";

import Image from "next/image";
import { useRef } from "react";
import { chapters } from "@/data/brand";
import { useLocale } from "@/i18n/LocaleProvider";
import { gsap, useIsoLayoutEffect, prefersReducedMotion } from "@/lib/gsap";
import styles from "./home.module.scss";

export default function Chapters() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  const { t, L } = useLocale();

  useIsoLayoutEffect(() => {
    const el = root.current;
    const tr = track.current;
    if (!el || !tr || prefersReducedMotion()) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1100px)", () => {
      const distance = () => tr.scrollWidth - window.innerWidth;
      gsap.to(tr, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (bar.current) bar.current.style.transform = `scaleX(${self.progress})`;
          },
        },
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={root} className={styles.chapters} aria-label={t.chapters.aria}>
      <div ref={track} className={styles.chapterTrack}>
        <div className={styles.chapterIntro}>
          <p className="eyebrow">{t.chapters.eyebrow}</p>
          <h2 className="t-h1">
            {t.chapters.title}
            <br />
            <em className="accent">{t.chapters.titleAccent}</em>
          </h2>
          <p className="t-body">{t.chapters.intro}</p>
          <p className={styles.chapterHint} aria-hidden="true">
            {t.chapters.hint} <span>→</span>
          </p>
        </div>

        {chapters.map((c, i) => (
          <article key={c.year} className={styles.chapter}>
            <span className={styles.chapterYear} aria-hidden="true">
              {c.year}
            </span>
            <div className={styles.chapterImage}>
              <Image src={c.image} alt={L(c.caption)} fill sizes="(max-width: 1100px) 100vw, 34vw" />
              <span className={styles.chapterCaption}>{L(c.caption)}</span>
            </div>
            <div className={styles.chapterText}>
              <p className={styles.chapterNum}>
                {t.chapters.chapter} {String(i + 1).padStart(2, "0")} · {c.year}
              </p>
              <h3 className="t-h3">{L(c.title)}</h3>
              <p className="t-body">{L(c.text)}</p>
            </div>
          </article>
        ))}

        <div className={styles.chapterEnd}>
          <p className="t-lead">
            <em className="accent">{t.chapters.end}</em>
          </p>
        </div>
      </div>
      <div className={styles.chapterProgress} aria-hidden="true">
        <div ref={bar} />
      </div>
    </section>
  );
}
