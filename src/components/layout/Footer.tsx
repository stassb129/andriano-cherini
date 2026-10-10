"use client";

import Image from "next/image";
import { useMemo } from "react";
import { TLink } from "./Transition";
import { scrollToTop } from "@/lib/scroll";
import { getFamilies } from "@/data/products";
import { useLocale } from "@/i18n/LocaleProvider";
import styles from "./layout.module.scss";

export default function Footer() {
  const { t } = useLocale();
  const families = getFamilies();
  const columns = useMemo(
    () => [
      {
        title: t.footer.collection,
        links: [
          { href: "/collection", label: t.common.allShoes },
          ...families.map((p) => ({ href: `/collection/${p.slug}`, label: p.name })),
        ],
      },
      {
        title: t.footer.house,
        links: [
          { href: "/heritage", label: t.footer.heritage },
          { href: "/atelier", label: t.footer.atelier },
        ],
      },
    ],
    [t, families],
  );

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerTop}`}>
        <div className={styles.footerLetter}>
          <p className="eyebrow">{t.footer.placeEyebrow}</p>
          <h2 className="t-h2">{t.footer.placeTitle}</h2>
          <p className="t-body">{t.footer.placeBody}</p>
        </div>

        <div className={styles.footerCols}>
          {columns.map((col) => (
            <div key={col.title}>
              <p className={styles.footerHead}>{col.title}</p>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <TLink href={l.href} className={styles.footerLink}>
                      {l.label}
                    </TLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className={styles.footerHead}>{t.footer.place}</p>
            <address className={styles.footerAddress}>
              Fermo
              <br />
              Marche, Italia
              <br />
              {t.footer.since}
            </address>
          </div>
        </div>
      </div>

      <div className={styles.footerMark}>
        <div className={styles.footerCrest}>
          <Image src="/images/brand/crest.png" alt="Andriano Cherini crest" fill sizes="240px" />
        </div>
        <p className={styles.footerWord} aria-hidden="true">
          Andriano Cherini
        </p>
      </div>

      <div className={`container ${styles.footerBottom}`}>
        <span>{t.footer.copy}</span>
        <button className={styles.footerTop2} onClick={() => scrollToTop(false)}>
          {t.common.backTop}
        </button>
      </div>
    </footer>
  );
}
