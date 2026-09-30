"use client";

import { useRef } from "react";
import ShoeCanvas from "@/components/three/ShoeCanvas";
import { TLink } from "@/components/layout/Transition";
import Magnetic from "@/components/motion/Magnetic";
import { gsap, ScrollTrigger, useIsoLayoutEffect, prefersReducedMotion } from "@/lib/gsap";
import { onIntroDone } from "@/lib/scroll";
import { useLocale } from "@/i18n/LocaleProvider";
import styles from "./home.module.scss";

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const progress = useRef(0);
  const { t } = useLocale();

  useIsoLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduced = prefersReducedMotion();
    let stopIntro = () => {};
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: "top top",
        end: "bottom top",
        onUpdate: (self) => {
          progress.current = self.progress;
        },
      });
      if (reduced) return;
      gsap.to(`.${styles.heroWord}`, {
        yPercent: -35,
        opacity: 0.15,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true },
      });
      const intro = gsap.timeline({ paused: true });
      intro
        .fromTo(
          `.${styles.heroWord} span`,
          { yPercent: 105, y: 0 },
          { yPercent: 0, y: 0, duration: 1.8, ease: "expo.out", stagger: 0.05 },
        )
        .fromTo(`.${styles.heroStage}`, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 2.2, ease: "expo.out" }, 0.2)
        .fromTo(
          `[data-hero-fade]`,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 1.2, ease: "expo.out", stagger: 0.08 },
          0.6,
        );
      stopIntro = onIntroDone(() => intro.play());
    }, el);
    return () => {
      stopIntro();
      ctx.revert();
    };
  }, []);

  return (
    <section ref={root} className={styles.hero} aria-label="Andriano Cherini">
      <div className={styles.heroGlow} aria-hidden="true" />

      <div className={styles.heroTop} data-hero-fade>
        <span>{t.hero.est}</span>
        <span>{t.hero.place}</span>
        <span>{t.hero.handmade}</span>
      </div>

      <h1 className={styles.heroWord}>
        <span className="sr-only">{t.hero.titleSr}</span>
        {"Cherini".split("").map((c, i) => (
          <span key={i} aria-hidden="true">
            {c}
          </span>
        ))}
      </h1>

      <div className={styles.heroStage}>
        <ShoeCanvas mode="hero" progress={progress} />
        <p className={styles.heroHint} data-hero-fade aria-hidden="true">
          <span>↻</span> {t.hero.rotate}
        </p>
      </div>

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
