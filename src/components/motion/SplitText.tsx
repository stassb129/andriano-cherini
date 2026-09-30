"use client";

import { createElement, useRef, type ElementType } from "react";
import { gsap, ScrollTrigger, useIsoLayoutEffect, prefersReducedMotion } from "@/lib/gsap";
import { onIntroDone } from "@/lib/scroll";
import { plain, tokenize } from "@/lib/text";

type Props = {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  /** Play on mount (after the intro) instead of on scroll. */
  immediate?: boolean;
  /** Words wrapped in *asterisks* are rendered in the accent italic. */
  accent?: boolean;
};

export default function SplitText({
  text,
  as = "h2",
  className,
  delay = 0,
  stagger = 0.06,
  immediate = false,
  accent = true,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const words = el.querySelectorAll(".split-inner");
    if (prefersReducedMotion()) {
      gsap.set(words, { yPercent: 0, y: 0 });
      return;
    }
    let cleanupIntro = () => {};
    const ctx = gsap.context(() => {
      const tween = gsap.fromTo(
        words,
        { yPercent: 110, y: 0 },
        {
          yPercent: 0,
          y: 0,
          duration: 1.3,
          ease: "expo.out",
          stagger,
          delay,
          paused: true,
        },
      );
      if (immediate) {
        cleanupIntro = onIntroDone(() => tween.play());
      } else {
        ScrollTrigger.create({
          trigger: el,
          start: "top 88%",
          once: true,
          onEnter: () => tween.play(),
        });
      }
    }, el);
    return () => {
      cleanupIntro();
      ctx.revert();
    };
  }, [text]);

  const lines = text.split("\n");
  let key = 0;

  return createElement(
    as,
    { ref, className, "aria-label": plain(text) },
    lines.map((line, li) => (
      <span key={li} style={{ display: "block" }} aria-hidden="true">
        {tokenize(line).map((t) => (
          <span key={key++} className="split-word">
            <span className={`split-inner${accent && t.accent ? " accent" : ""}`}>{t.word}</span>
            {"\u00a0"}
          </span>
        ))}
      </span>
    )),
  );
}
