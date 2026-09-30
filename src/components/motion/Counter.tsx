"use client";

import { useRef } from "react";
import { gsap, useIsoLayoutEffect, prefersReducedMotion } from "@/lib/gsap";

type Props = { value: number; suffix?: string; prefix?: string; className?: string; duration?: number };

export default function Counter({ value, suffix = "", prefix = "", className, duration = 2.2 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const format = (n: number) => `${prefix}${Math.round(n)}${suffix}`;
    if (prefersReducedMotion()) {
      el.textContent = format(value);
      return;
    }
    const state = { n: 0 };
    el.textContent = format(0);
    const ctx = gsap.context(() => {
      gsap.to(state, {
        n: value,
        duration,
        ease: "power3.out",
        onUpdate: () => {
          el.textContent = format(state.n);
        },
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
      });
    });
    return () => ctx.revert();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
