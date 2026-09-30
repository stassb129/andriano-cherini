"use client";

import Image from "next/image";
import { useLocale } from "@/i18n/LocaleProvider";
import type { TimelineEntry } from "@/data/brand";
import { useRef } from "react";
import { gsap, useIsoLayoutEffect, prefersReducedMotion } from "@/lib/gsap";
import styles from "./pages.module.scss";

export default function Timeline({ entries }: { entries: TimelineEntry[] }) {
  const root = useRef<HTMLOListElement>(null);
  const { L } = useLocale();

  useIsoLayoutEffect(() => {
    const el = root.current;
    if (!el || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        `.${styles.tlProgress}`,
        { scaleY: 0 },
        { scaleY: 1, ease: "none", scrollTrigger: { trigger: el, start: "top 60%", end: "bottom 60%", scrub: true } },
      );
      el.querySelectorAll<HTMLElement>(`.${styles.tlItem}`).forEach((item) => {
        const year = item.querySelector(`.${styles.tlYear}`);
        const body = item.querySelectorAll(`.${styles.tlBody} > *`);
        const media = item.querySelector(`.${styles.tlMedia}`);
        const tl = gsap.timeline({ scrollTrigger: { trigger: item, start: "top 78%", once: true } });
        tl.fromTo(year, { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 1.2, ease: "expo.out" }).fromTo(
          body,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, ease: "expo.out", stagger: 0.08 },
          0.1,
        );
        if (media) {
          tl.fromTo(media, { clipPath: "inset(100% 0 0 0)" }, { clipPath: "inset(0% 0 0 0)", duration: 1.4, ease: "expo.inOut" }, 0);
        }
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <ol ref={root} className={styles.timeline}>
      <span className={styles.tlTrack} aria-hidden="true">
        <span className={styles.tlProgress} />
      </span>
      {entries.map((e) => (
        <li key={e.year} className={styles.tlItem}>
          <span className={styles.tlDot} aria-hidden="true" />
          <p className={styles.tlYear}>{e.year}</p>
          <div className={styles.tlBody}>
            <h3 className="t-h3">{L(e.title)}</h3>
            <p className="t-body">{L(e.text)}</p>
          </div>
          {e.image && (
            <div className={styles.tlMedia}>
              <Image src={e.image} alt={`${e.year} — ${L(e.title)}`} fill sizes="(max-width: 1100px) 100vw, 28vw" />
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}
