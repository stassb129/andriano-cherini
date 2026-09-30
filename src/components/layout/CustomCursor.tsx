"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import styles from "./layout.module.scss";

function canUseCustomCursor() {
  if (typeof window === "undefined") return false;
  if (prefersReducedMotion()) return false;
  return window.matchMedia("(pointer: fine) and (hover: hover)").matches;
}

export default function CustomCursor() {
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canUseCustomCursor()) return;

    const ringEl = ring.current;
    const dotEl = dot.current;
    const wrap = root.current;
    if (!ringEl || !dotEl || !wrap) return;

    document.documentElement.classList.add("has-cursor");
    wrap.dataset.active = "true";

    const xRing = gsap.quickTo(ringEl, "x", { duration: 0.48, ease: "power3.out" });
    const yRing = gsap.quickTo(ringEl, "y", { duration: 0.48, ease: "power3.out" });
    const xDot = gsap.quickTo(dotEl, "x", { duration: 0.14, ease: "power3.out" });
    const yDot = gsap.quickTo(dotEl, "y", { duration: 0.14, ease: "power3.out" });

    gsap.set([ringEl, dotEl], { xPercent: -50, yPercent: -50 });

    let visible = false;
    const show = () => {
      if (visible) return;
      visible = true;
      gsap.to([ringEl, dotEl], { opacity: 1, duration: 0.35, ease: "power2.out", overwrite: "auto" });
    };
    const hide = () => {
      visible = false;
      gsap.to([ringEl, dotEl], { opacity: 0, duration: 0.25, ease: "power2.out", overwrite: "auto" });
    };

    const onMove = (e: MouseEvent) => {
      show();
      xRing(e.clientX);
      yRing(e.clientY);
      xDot(e.clientX);
      yDot(e.clientY);
    };

    const linkClass = styles.cursorLink!;
    const pressClass = styles.cursorPress!;

    const interactive = "a, button, [role='button'], input, textarea, select, label, summary";
    const onOver = (e: MouseEvent) => {
      if ((e.target as Element | null)?.closest?.(interactive)) {
        ringEl.classList.add(linkClass);
      }
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as Element | null)?.closest?.(interactive)) {
        ringEl.classList.remove(linkClass);
      }
    };

    const onDown = () => {
      ringEl.classList.add(pressClass);
      gsap.to(ringEl, { scale: 0.7, duration: 0.16, ease: "power2.out", overwrite: "auto" });
      gsap.to(dotEl, { scale: 0.4, duration: 0.16, ease: "power2.out", overwrite: "auto" });
    };
    const onUp = () => {
      ringEl.classList.remove(pressClass);
      gsap.to(ringEl, { scale: 1, duration: 0.55, ease: "expo.out", overwrite: "auto" });
      gsap.to(dotEl, { scale: 1, duration: 0.45, ease: "expo.out", overwrite: "auto" });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.documentElement.addEventListener("mouseleave", hide);
    window.addEventListener("blur", hide);

    return () => {
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.documentElement.removeEventListener("mouseleave", hide);
      window.removeEventListener("blur", hide);
    };
  }, []);

  return (
    <div ref={root} className={styles.cursorRoot} aria-hidden="true">
      <div ref={ring} className={styles.cursorRing} />
      <div ref={dot} className={styles.cursorDot} />
    </div>
  );
}
