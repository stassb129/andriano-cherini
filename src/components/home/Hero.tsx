"use client";

import Image from "next/image";
import { useRef } from "react";
import { TLink } from "@/components/layout/Transition";
import Magnetic from "@/components/motion/Magnetic";
import { gsap, useIsoLayoutEffect, prefersReducedMotion } from "@/lib/gsap";
import { onIntroDone } from "@/lib/scroll";
import { useLocale } from "@/i18n/LocaleProvider";
import styles from "./home.module.scss";

const TITLE = "Andriano Cherini";

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const { t } = useLocale();

  useIsoLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduced = prefersReducedMotion();
    let stopIntro = () => {};
    let safety: ReturnType<typeof setTimeout> | undefined;

    const ctx = gsap.context(() => {
      const letters = el.querySelectorAll(`.${styles.heroLetter}`);
      const bg = el.querySelector(`.${styles.heroBg}`);

      if (reduced) {
        gsap.set(letters, { yPercent: 0 });
        gsap.set(bg, { autoAlpha: 1 });
        return;
      }

      gsap.set(letters, { yPercent: 110 });
      gsap.set(bg, { autoAlpha: 0, scale: 1.04 });

      gsap.to(`.${styles.heroBg} img`, {
        scale: 1.08,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(`.${styles.heroWord}`, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true },
      });

      const intro = gsap.timeline({ paused: true });
      intro
        .to(bg, { autoAlpha: 1, scale: 1, duration: 2.2, ease: "expo.out" }, 0)
        .to(letters, { yPercent: 0, duration: 1.65, ease: "expo.out", stagger: 0.028 }, 0.2)
        .fromTo(
          `[data-hero-fade]`,
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 1.1, ease: "expo.out", stagger: 0.07 },
          0.45,
        );

      const play = () => {
        if (intro.progress() === 0 && !intro.isActive()) intro.play(0);
      };
      stopIntro = onIntroDone(play);
      // If the preloader already finished (or never ran), still reveal the title.
      safety = setTimeout(play, 1200);
    }, el);

    return () => {
      stopIntro();
      if (safety) clearTimeout(safety);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={root} className={styles.hero} aria-label="Andriano Cherini">
      <div className={styles.heroBg} aria-hidden="true">
        <Image
          src="/images/hero/main.png"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <div className={styles.heroShade} aria-hidden="true" />

      <div className={styles.heroTop} data-hero-fade>
        <span>{t.hero.est}</span>
        <span>{t.hero.place}</span>
        <span>{t.hero.handmade}</span>
      </div>

      <h1 className={styles.heroWord}>
        <span className="sr-only">{t.hero.titleSr}</span>
        {TITLE.split("").map((c, i) => (
          <span
            key={`${c}-${i}`}
            aria-hidden="true"
            className={`${styles.heroGlyph} ${c === " " ? styles.heroSpace : ""}`}
          >
            <span className={styles.heroLetter}>{c === " " ? "\u00A0" : c}</span>
          </span>
        ))}
      </h1>

      <div className={styles.heroBottom}>
        <div className={styles.heroIntro} data-hero-fade>
          <p className={styles.heroKicker}>{t.hero.kicker}</p>
          <p className={styles.heroLead}>{t.hero.lead}</p>
          <div className={styles.heroCtas}>
            <Magnetic>
              <TLink href="/collection/fermo-derby-nero" className="btn btn--solid">
                {t.hero.cta}
              </TLink>
            </Magnetic>
            <TLink href="/heritage" className="link-line">
              {t.hero.story}
            </TLink>
          </div>
        </div>

        <div className={styles.heroScroll} data-hero-fade aria-hidden="true">
          <i />
          <span className="sr-only">{t.hero.scroll}</span>
        </div>
      </div>
    </section>
  );
}
