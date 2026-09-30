"use client";

import Image from "next/image";
import { useRef, type CSSProperties } from "react";
import { gsap, useIsoLayoutEffect, prefersReducedMotion } from "@/lib/gsap";
import styles from "./motion.module.scss";

type Props = {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  sizes?: string;
  priority?: boolean;
  /** Parallax travel as a percentage of the frame height. */
  speed?: number;
  reveal?: boolean;
  revealFrom?: "bottom" | "top" | "left" | "right";
  position?: string;
};

const INSETS = {
  bottom: "inset(100% 0% 0% 0%)",
  top: "inset(0% 0% 100% 0%)",
  left: "inset(0% 100% 0% 0%)",
  right: "inset(0% 0% 0% 100%)",
};

function isCoarsePointer() {
  return typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;
}

export default function ParallaxImage({
  src,
  alt,
  className,
  style,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority,
  speed = 12,
  reveal = true,
  revealFrom = "bottom",
  position = "center",
}: Props) {
  const frame = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    const el = frame.current;
    const img = inner.current;
    if (!el || !img) return;
    if (prefersReducedMotion()) {
      gsap.set(el, { clipPath: "none" });
      gsap.set(img, { clearProps: "transform" });
      return;
    }

    const coarse = isCoarsePointer();
    const travel = coarse ? Math.min(speed, 6) : speed;

    const ctx = gsap.context(() => {
      if (reveal) {
        gsap.fromTo(
          el,
          { clipPath: INSETS[revealFrom] },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: coarse ? 1 : 1.4,
            ease: "expo.inOut",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          },
        );
        gsap.fromTo(
          img,
          { scale: coarse ? 1.18 : 1.28 },
          {
            scale: coarse ? 1.06 : 1.1,
            duration: coarse ? 1.2 : 1.8,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          },
        );
      }

      // Skip continuous scrub parallax on touch — big source of scroll jank.
      if (!coarse && travel > 0) {
        gsap.fromTo(
          img,
          { yPercent: -travel / 2 },
          {
            yPercent: travel / 2,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          },
        );
      }
    }, el);
    return () => ctx.revert();
  }, [src, speed, reveal, revealFrom]);

  return (
    <div
      ref={frame}
      className={`${styles.frame} ${className ?? ""}`}
      style={style}
      data-reveal-img={reveal ? "" : undefined}
    >
      <div ref={inner} className={styles.inner} style={{ transform: "scale(1.1)" }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          style={{ objectFit: "cover", objectPosition: position }}
        />
      </div>
    </div>
  );
}
