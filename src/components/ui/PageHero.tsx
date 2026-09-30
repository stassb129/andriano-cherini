"use client";

import Image from "next/image";
import { useRef } from "react";
import SplitText from "@/components/motion/SplitText";
import { gsap, useIsoLayoutEffect, prefersReducedMotion } from "@/lib/gsap";
import { onIntroDone } from "@/lib/scroll";
import styles from "./ui.module.scss";

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  meta?: string[];
  position?: string;
};

/** Full-bleed hero used by inner pages: image zooms out and parallaxes behind a split title. */
export default function PageHero({ eyebrow, title, intro, image, meta, position = "center" }: Props) {
  const root = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    const el = root.current;
    if (!el || prefersReducedMotion()) return;
    let stop = () => {};
    const ctx = gsap.context(() => {
      const media = el.querySelector(`.${styles.pageHeroMedia}`);
      const intro = gsap.timeline({ paused: true });
      intro
        .fromTo(media, { scale: 1.25, clipPath: "inset(12% 8% 12% 8%)" }, { scale: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 2, ease: "expo.inOut" })
        .fromTo(`[data-hero-fade]`, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.2, ease: "expo.out", stagger: 0.1 }, 1);
      stop = onIntroDone(() => intro.play());
      gsap.to(media, {
        yPercent: 18,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true },
      });
    }, el);
    return () => {
      stop();
      ctx.revert();
    };
  }, []);

  return (
    <section ref={root} className={styles.pageHero}>
      <div className={styles.pageHeroMedia}>
        <Image src={image} alt="" fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: position }} />
      </div>
      <div className={styles.pageHeroShade} />
      <div className={`container ${styles.pageHeroContent}`}>
        <p className="eyebrow" data-hero-fade>
          {eyebrow}
        </p>
        <SplitText as="h1" text={title} className="t-h1" immediate delay={0.9} />
        <div className={styles.pageHeroFoot}>
          <p className="t-lead" data-hero-fade>
            {intro}
          </p>
          {meta && (
            <ul className={styles.pageHeroMeta} data-hero-fade>
              {meta.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
