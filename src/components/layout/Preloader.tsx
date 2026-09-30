"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { lockScroll, markIntroDone } from "@/lib/scroll";
import { useLocale } from "@/i18n/LocaleProvider";
import styles from "./layout.module.scss";

const SESSION_KEY = "ac-intro";

export default function Preloader() {
  const root = useRef<HTMLDivElement>(null);
  const count = useRef<HTMLSpanElement>(null);
  const [done, setDone] = useState(false);
  const { t } = useLocale();
  const motto = t.preloader.motto;

  useEffect(() => {
    const el = root.current;
    const seen = sessionStorage.getItem(SESSION_KEY);
    if (!el || seen || prefersReducedMotion()) {
      setDone(true);
      markIntroDone();
      return;
    }
    sessionStorage.setItem(SESSION_KEY, "1");
    lockScroll(true);
    const state = { n: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        lockScroll(false);
        setDone(true);
      },
    });
    tl.fromTo(`.${styles.preCrest}`, { opacity: 0, scale: 0.85 }, { opacity: 1, scale: 1, duration: 1.4, ease: "expo.out" })
      .fromTo(
        `.${styles.preWord} span`,
        { yPercent: 110, y: 0 },
        { yPercent: 0, y: 0, duration: 1.1, ease: "expo.out", stagger: 0.04 },
        0.25,
      )
      .to(
        state,
        {
          n: 100,
          duration: 1.9,
          ease: "power2.inOut",
          onUpdate: () => {
            if (count.current) count.current.textContent = String(Math.round(state.n)).padStart(3, "0");
          },
        },
        0,
      )
      .to(`.${styles.preBar} i`, { scaleX: 1, duration: 1.9, ease: "power2.inOut" }, 0)
      .to(`.${styles.preContent}`, { opacity: 0, y: -40, duration: 0.6, ease: "power3.in" }, "+=0.15")
      .add(() => markIntroDone(), "-=0.1")
      .to(el, { clipPath: "inset(0 0 100% 0)", duration: 1.1, ease: "expo.inOut" }, "-=0.2");

    return () => {
      tl.kill();
    };
  }, []);

  if (done) return null;

  return (
    <div ref={root} className={styles.preloader} aria-hidden="true">
      <div className={styles.preContent}>
        <div className={styles.preCrest}>
          <Image src="/images/brand/crest.png" alt="" fill sizes="220px" priority />
        </div>
        <p className={styles.preWord}>
          {motto.split("").map((c, i) => (
            <span key={i}>{c === " " ? "\u00a0" : c}</span>
          ))}
        </p>
        <div className={styles.preBar}>
          <i />
        </div>
        <span ref={count} className={styles.preCount}>
          000
        </span>
      </div>
    </div>
  );
}
