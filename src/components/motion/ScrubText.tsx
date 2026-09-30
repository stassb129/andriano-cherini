"use client";

import { useRef } from "react";
import { gsap, useIsoLayoutEffect, prefersReducedMotion } from "@/lib/gsap";
import { plain, tokenize } from "@/lib/text";
import styles from "./motion.module.scss";

/** A paragraph whose words light up one by one as it scrolls through the viewport. */
export default function ScrubText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll(`.${styles.scrubWord}`),
        { opacity: 0.14 },
        {
          opacity: 1,
          stagger: 0.1,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 45%", scrub: 0.6 },
        },
      );
    }, el);
    return () => ctx.revert();
  }, [text]);

  return (
    <p ref={ref} className={className} aria-label={plain(text)}>
      {tokenize(text).map((t, i) => (
        <span key={i} aria-hidden="true" className={`${styles.scrubWord}${t.accent ? " accent" : ""}`}>
          {t.word}{" "}
        </span>
      ))}
    </p>
  );
}
