"use client";

import { useRef, type ReactNode, type CSSProperties } from "react";
import { gsap, useIsoLayoutEffect, prefersReducedMotion } from "@/lib/gsap";

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  /** Animate direct children one after another instead of the wrapper. */
  stagger?: number;
  y?: number;
  as?: "div" | "section" | "ul" | "li" | "article" | "p";
};

export default function Reveal({ children, className, style, delay = 0, stagger, y = 40, as = "div" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = stagger ? Array.from(el.children) : [el];
    if (prefersReducedMotion()) {
      gsap.set(targets, { opacity: 1, y: 0 });
      return;
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "expo.out",
          delay,
          stagger: stagger ?? 0,
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        },
      );
    }, el);
    return () => ctx.revert();
  }, []);

  const Tag = as as "div";
  return (
    <Tag
      ref={ref}
      className={className}
      style={style}
      data-reveal={stagger ? undefined : ""}
      data-reveal-stagger={stagger ? "" : undefined}
    >
      {children}
    </Tag>
  );
}
