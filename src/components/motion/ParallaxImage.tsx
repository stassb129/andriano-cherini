"use client";

import Image from "next/image";
import { useRef, type CSSProperties } from "react";
import { gsap, useIsoLayoutEffect, prefersReducedMotion } from "@/lib/gsap";
import { imageRatio } from "@/lib/imageRatio";
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
  /** Use `contain` for product shots so toes/heels stay in frame. */
  fit?: "cover" | "contain";
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
  fit = "cover",
}: Props) {
  const frame = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const contain = fit === "contain";

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
    // Contain mode: little/no scale or scrub — otherwise toes/heels clip again.
    const travel = contain ? 0 : coarse ? Math.min(speed, 6) : speed;
    const fromScale = contain ? 1 : coarse ? 1.18 : 1.28;
    const toScale = contain ? 1 : coarse ? 1.06 : 1.1;

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
          { scale: fromScale },
          {
            scale: toScale,
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
  }, [src, speed, reveal, revealFrom, contain]);

  return (
    <div
      ref={frame}
      className={`${styles.frame} ${className ?? ""}`}
      style={contain ? { aspectRatio: imageRatio(src), ...style } : style}
      data-reveal-img={reveal ? "" : undefined}
    >
      <div ref={inner} className={styles.inner} style={{ transform: contain ? "none" : "scale(1.1)" }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          style={{ objectFit: fit, objectPosition: position }}
        />
      </div>
    </div>
  );
}
