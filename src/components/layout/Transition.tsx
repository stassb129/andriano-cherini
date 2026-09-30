"use client";

import Link, { type LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  type AnchorHTMLAttributes,
  type ReactNode,
} from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";
import { scrollToTop } from "@/lib/scroll";
import { useLocale } from "@/i18n/LocaleProvider";
import styles from "./layout.module.scss";

type Ctx = { navigate: (href: string) => void };
const TransitionContext = createContext<Ctx>({ navigate: () => {} });

export function useTransitionNav() {
  return useContext(TransitionContext);
}

export function TransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const curtain = useRef<HTMLDivElement>(null);
  const covering = useRef(false);

  const navigate = useCallback(
    (href: string) => {
      const target = href.split("#")[0];
      if (target === pathname) {
        scrollToTop(false);
        return;
      }
      if (prefersReducedMotion() || !curtain.current) {
        router.push(href);
        return;
      }
      covering.current = true;
      gsap.killTweensOf(curtain.current);
      gsap.fromTo(
        curtain.current,
        { yPercent: 100, visibility: "visible" },
        {
          yPercent: 0,
          duration: 0.75,
          ease: "expo.inOut",
          onComplete: () => router.push(href),
        },
      );
      gsap.fromTo(
        curtain.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.35, ease: "expo.out" },
      );
    },
    [pathname, router],
  );

  useEffect(() => {
    if (!covering.current || !curtain.current) return;
    covering.current = false;
    scrollToTop(true);
    const el = curtain.current;
    const t = setTimeout(() => {
      ScrollTrigger.refresh();
      gsap.to(el, {
        yPercent: -100,
        duration: 0.9,
        ease: "expo.inOut",
        onComplete: () => {
          gsap.set(el, { visibility: "hidden", yPercent: 100 });
        },
      });
    }, 180);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}
      <div ref={curtain} className={styles.curtain} aria-hidden="true">
        <div className={styles.curtainMark}>
          <span>Andriano Cherini</span>
          <em>Forma e comfort</em>
        </div>
      </div>
    </TransitionContext.Provider>
  );
}

type TLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & { children: ReactNode };

/** Internal link that plays the curtain transition before navigating. */
export function TLink({ href, onClick, children, ...rest }: TLinkProps) {
  const { navigate } = useTransitionNav();
  const { href: localize } = useLocale();
  const raw = typeof href === "string" ? href : (href.pathname ?? "/");
  const url = raw.startsWith("/") ? localize(raw) : raw;
  return (
    <Link
      href={typeof href === "string" ? url : { ...href, pathname: url }}
      {...rest}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        if (!url.startsWith("/")) return;
        e.preventDefault();
        navigate(url);
      }}
    >
      {children}
    </Link>
  );
}
