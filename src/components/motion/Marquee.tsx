"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useIsoLayoutEffect, prefersReducedMotion } from "@/lib/gsap";
import styles from "./motion.module.scss";

type Props = { items: string[]; className?: string; speed?: number; reverse?: boolean };

/** Infinite marquee that speeds up and skews with scroll velocity. */
export default function Marquee({ items, className, speed = 40, reverse = false }: Props) {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    const el = track.current;
    if (!el || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const loop = gsap.fromTo(
        el,
        { xPercent: reverse ? -50 : 0 },
        { xPercent: reverse ? 0 : -50, duration: speed, ease: "none", repeat: -1 },
      );
      const skewTo = gsap.quickTo(el, "skewX", { duration: 0.6, ease: "power3" });
      ScrollTrigger.create({
        trigger: root.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const v = self.getVelocity();
          loop.timeScale(1 + Math.min(4, Math.abs(v) / 400));
          skewTo(gsap.utils.clamp(-8, 8, v / -250));
        },
        onLeave: () => loop.timeScale(1),
      });
    }, root);
    return () => ctx.revert();
  }, [speed, reverse]);

  const row = (hidden: boolean) =>
    items.map((item, i) => (
      <span key={`${hidden}-${i}`} className={styles.marqueeItem} aria-hidden={hidden || undefined}>
        {item}
        <span className={styles.marqueeStar}>✦</span>
      </span>
    ));

  return (
    <div ref={root} className={`${styles.marquee} ${className ?? ""}`}>
      <div ref={track} className={styles.marqueeTrack}>
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
