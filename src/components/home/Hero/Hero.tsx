"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TLink } from "@/components/layout/Transition";
import { useLocale } from "@/i18n/LocaleProvider";
import { gsap, prefersReducedMotion, useIsoLayoutEffect } from "@/lib/gsap";
import { onIntroDone } from "@/lib/scroll";
import styles from "./Hero.module.scss";

const SLIDES = [
  { src: "/preview/4.jpg", position: "58% 46%" },
  { src: "/preview/1.jpg", position: "60% 40%" },
  { src: "/preview/3.jpg", position: "55% 55%" },
  { src: "/preview/5.jpg", position: "50% 45%" },
  { src: "/preview/2.jpg", position: "65% 50%" },
  { src: "/preview/6.jpg", position: "60% 40%" },
] as const;

const SLIDE_MS = 8000;

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const { t } = useLocale();
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(2);

  useEffect(() => {
    const el = root.current;
    if (!el || prefersReducedMotion()) return;

    let visible = true;
    const io = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? true;
    });
    io.observe(el);

    let current = 0;
    const timer = setInterval(() => {
      if (!visible || document.hidden) return;
      current = (current + 1) % SLIDES.length;
      setActive(current);
      setMounted((m) => Math.max(m, Math.min(SLIDES.length, current + 2)));
    }, SLIDE_MS);

    return () => {
      clearInterval(timer);
      io.disconnect();
    };
  }, []);

  useIsoLayoutEffect(() => {
    const el = root.current;
    if (!el) return;

    const reveal = () => el.classList.add("is-live");
    const reduced = prefersReducedMotion();
    let stopIntro = () => {};
    let safety: ReturnType<typeof setTimeout> | undefined;

    if (reduced) {
      reveal();
    } else {
      stopIntro = onIntroDone(reveal);
      safety = setTimeout(reveal, 6500);
    }

    const ctx = gsap.context(() => {
      if (reduced) return;
      const scrollTrigger = { trigger: el, start: "top top", end: "bottom top", scrub: 0.4 };
      gsap.fromTo("[data-exit-content]", { y: 0, opacity: 1 }, { y: -18, opacity: 0.3, ease: "none", immediateRender: false, scrollTrigger });
      gsap.fromTo("[data-exit-shade]", { opacity: 0 }, { opacity: 1, ease: "none", immediateRender: false, scrollTrigger });
      gsap.fromTo("[data-exit-light]", { opacity: 1 }, { opacity: 0, ease: "none", immediateRender: false, scrollTrigger });
    }, el);

    return () => {
      stopIntro();
      if (safety) clearTimeout(safety);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={root} className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.backdrop} aria-hidden="true">
        <div className={styles.leather}>
          {SLIDES.slice(0, mounted).map((slide, i) => (
            <div key={slide.src} className={`${styles.slide} ${i === active ? styles.slideActive : ""}`}>
              <Image
                src={slide.src}
                alt=""
                fill
                priority={i === 0}
                sizes="100vw"
                className={styles.leatherImg}
                style={{ objectPosition: slide.position }}
              />
            </div>
          ))}
        </div>
        <div className={styles.lightTrack} data-exit-light>
          <div className={styles.light} />
        </div>
        <div className={styles.shade} />
        <div className={styles.vignette} />
        <div className={styles.exitShade} data-exit-shade />
        <div className={styles.grain} />
      </div>

      <div className={styles.content} data-exit-content>
        <div className={styles.identity}>
          <span className={styles.crest} aria-hidden="true">
            <Image src="/images/brand/crest.png" alt="" fill sizes="72px" priority />
          </span>

          <h1 id="hero-title" className={styles.title}>
            <span className={styles.titleMask}>
              <span className={styles.titleLine}>Andriano</span>{" "}
              <span className={styles.titleLine}>Cherini</span>
            </span>
          </h1>

          <p className={styles.tagline}>Calzature italiane</p>
          <p className={styles.signature}>Fermo · 2014</p>
        </div>

        <TLink href="/collection" className={styles.cta}>
          <span className={styles.ctaLabel}>{t.hero.cta}</span>
          <span className={styles.ctaLine} aria-hidden="true" />
          <span className={styles.ctaArrow} aria-hidden="true">
            ↗
          </span>
        </TLink>
      </div>

      <p className={`${styles.micro} ${styles.microLeft}`}>
        <span>Fermo</span>
        <span>Marche · Italia</span>
      </p>
      <p className={`${styles.micro} ${styles.microRight}`}>
        <span>Handcrafted</span>
        <span>Dal 2014</span>
      </p>

      <div className={styles.scroll} aria-hidden="true">
        <i />
        <span>{t.hero.scroll}</span>
      </div>
    </section>
  );
}
