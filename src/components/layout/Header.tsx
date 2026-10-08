"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { lockScroll } from "@/lib/scroll";
import { useLocale } from "@/i18n/LocaleProvider";
import { useTheme } from "@/i18n/ThemeProvider";
import type { Locale } from "@/i18n/dictionaries";
import { localizePath, stripLocale } from "@/i18n/config";
import { TLink } from "./Transition";
import styles from "./layout.module.scss";

export default function Header() {
  const pathname = stripLocale(usePathname() || "/");
  const { t, locale, setLocale } = useLocale();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const NAV = useMemo(
    () => [
      { href: "/collection", label: t.nav.collection, image: "/images/collection/urbino-oxford-nero/06.jpg" },
      { href: "/heritage", label: t.nav.heritage, image: "/images/atelier/workshop-2.jpg" },
      { href: "/atelier", label: t.nav.atelier, image: "/images/atelier/workshop.jpg" },
    ],
    [t],
  );

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > 300 && y > last + 2 ? true : y < last - 2 ? false : (h) => h);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setHidden(false);
  }, [pathname]);

  useEffect(() => {
    lockScroll(menuOpen);
  }, [menuOpen]);

  const onHero = pathname === "/" && !scrolled && !menuOpen;

  return (
    <>
      <header
        className={[
          styles.header,
          scrolled && styles.headerScrolled,
          hidden && !menuOpen && styles.headerHidden,
          onHero && styles.headerOnHero,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <nav className={styles.navLeft} aria-label="Primary">
          <button
            className={styles.menuBtn}
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? t.nav.close : t.nav.menu}
          >
            <span className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}>
              <i />
              <i />
            </span>
            <span className={styles.menuLabel}>{menuOpen ? t.nav.close : t.nav.menu}</span>
          </button>
          <ul className={styles.navLinks}>
            {NAV.map((n) => (
              <li key={n.href}>
                <TLink href={n.href} className={`${styles.navLink} ${pathname.startsWith(n.href) ? styles.navActive : ""}`}>
                  {n.label}
                </TLink>
              </li>
            ))}
          </ul>
        </nav>

        <TLink href="/" className={styles.brand} aria-label={t.nav.homeAria}>
          <span className={styles.brandCrest}>
            <Image src="/images/brand/crest.png" alt="" fill sizes="44px" priority />
          </span>
          <span className={styles.brandWord}>
            Andriano Cherini
            <small>{t.brand.tagline}</small>
          </span>
        </TLink>

        <div className={styles.navRight}>
          <div className={styles.lang} role="group" aria-label="Language">
            {(["en", "ru"] as Locale[]).map((l, i) => (
              <span key={l} style={{ display: "contents" }}>
                {i > 0 && <span aria-hidden="true">/</span>}
                <Link
                  href={localizePath(pathname, l)}
                  hrefLang={l}
                  lang={l}
                  scroll={false}
                  className={`${styles.langBtn} ${locale === l ? styles.langActive : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setLocale(l);
                  }}
                  aria-current={locale === l ? "true" : undefined}
                >
                  {l.toUpperCase()}
                </Link>
              </span>
            ))}
          </div>
          <button
            type="button"
            className={styles.themeBtn}
            onClick={toggleTheme}
            aria-label={theme === "light" ? t.nav.themeDark : t.nav.themeLight}
            title={theme === "light" ? t.nav.themeDark : t.nav.themeLight}
          >
            <span className={styles.themeTrack} data-theme-active={theme} aria-hidden="true">
              <i className={styles.themeSun} />
              <i className={styles.themeMoon} />
              <i className={styles.themeThumb} />
            </span>
          </button>
        </div>
      </header>
      <Menu open={menuOpen} onClose={() => setMenuOpen(false)} items={NAV} motto={t.brand.motto} />
    </>
  );
}

function Menu({
  open,
  onClose,
  items,
  motto,
}: {
  open: boolean;
  onClose: () => void;
  items: { href: string; label: string; image: string }[];
  motto: string;
}) {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const links = el.querySelectorAll(`.${styles.menuItem}`);
    if (open) {
      gsap.set(el, { visibility: "visible" });
      gsap.fromTo(el, { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: 0.9, ease: "expo.inOut" });
      gsap.fromTo(links, { yPercent: 120 }, { yPercent: 0, duration: 1.1, ease: "expo.out", stagger: 0.06, delay: 0.35 });
    } else {
      gsap.to(el, {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.7,
        ease: "expo.inOut",
        onComplete: () => gsap.set(el, { visibility: "hidden" }),
      });
    }
  }, [open]);

  return (
    <div ref={root} className={styles.menu} aria-hidden={!open}>
      <div className={styles.menuInner}>
        <ol className={styles.menuList}>
          {items.map((n, i) => (
            <li key={n.href} className={styles.menuRow} onMouseEnter={() => setActive(i)}>
              <TLink href={n.href} onClick={onClose} className={styles.menuItem} tabIndex={open ? 0 : -1}>
                <span className={styles.menuNum}>0{i + 1}</span>
                {n.label}
              </TLink>
            </li>
          ))}
        </ol>
        <div className={styles.menuVisual}>
          {items.map((n, i) => (
            <div key={n.href} className={`${styles.menuImage} ${i === active ? styles.menuImageActive : ""}`}>
              <Image src={n.image} alt="" fill sizes="40vw" style={{ objectFit: "cover" }} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.menuFoot}>
        <span>Fermo · Italia</span>
        <span>{motto}</span>
      </div>
    </div>
  );
}
