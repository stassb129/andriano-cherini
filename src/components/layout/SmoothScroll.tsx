"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";
import { setLenis } from "@/lib/scroll";

export default function SmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const lenis = new Lenis({
      duration: coarse ? 0.9 : 1.05,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      touchMultiplier: 1.2,
      // Avoid fighting native scroll momentum on phones.
      syncTouch: false,
    });
    setLenis(lenis);

    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    // Allow GSAP to drop frames under load instead of compounding lag.
    gsap.ticker.lagSmoothing(500, 33);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);

    return () => {
      window.removeEventListener("load", refresh);
      gsap.ticker.remove(tick);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  return null;
}
