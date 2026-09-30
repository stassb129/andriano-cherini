"use client";

import Image from "next/image";
import { useMemo, useState, type FormEvent } from "react";
import { TLink } from "./Transition";
import { scrollToTop } from "@/lib/scroll";
import { useLocale } from "@/i18n/LocaleProvider";
import { CONTACT_EMAIL } from "@/components/ui/ContactForm";
import styles from "./layout.module.scss";

export default function Footer() {
  const { t } = useLocale();
  const [sent, setSent] = useState(false);
  const columns = useMemo(
    () => [
      {
        title: t.footer.collection,
        links: [
          { href: "/collection", label: t.common.allShoes },
          { href: "/collection/fermo-derby-nero", label: t.footer.fermoDerby },
          { href: "/collection/urbino-oxford-nero", label: t.footer.oxfords },
        ],
      },
      {
        title: t.footer.house,
        links: [
          { href: "/heritage", label: t.footer.heritage },
          { href: "/atelier", label: t.footer.atelier },
          { href: "/contact#write", label: t.footer.contact },
        ],
      },
    ],
    [t],
  );

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    const subject = encodeURIComponent("Andriano Cherini — inquiry");
    const body = encodeURIComponent(`Email: ${email}\n\n${message || "(no message)"}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerTop}`}>
        <div className={styles.footerLetter}>
          <p className="eyebrow">{t.footer.letter}</p>
          <h2 className="t-h2">{t.footer.letterTitle}</h2>
          <p className="t-body">{t.footer.letterBody}</p>
          {sent ? (
            <p className={styles.footerThanks}>{t.footer.thanks}</p>
          ) : (
            <form className={styles.footerForm} onSubmit={onSubmit}>
              <label htmlFor="footer-email" className="sr-only">
                Email
              </label>
              <input id="footer-email" name="email" type="email" required placeholder={t.common.email} />
              <label htmlFor="footer-message" className="sr-only">
                {t.contactPage.message}
              </label>
              <input id="footer-message" name="message" type="text" placeholder={t.contactPage.message} />
              <button type="submit" className={styles.footerSubmit} aria-label={t.contactPage.send}>
                {t.contactPage.send} →
              </button>
            </form>
          )}
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
            <p className={styles.footerHead}>{t.footer.bottega}</p>
            <address className={styles.footerAddress}>
              Contrada San Michele 14
              <br />
              63900 Fermo (FM), Italia
              <br />
              <a href="tel:+390734000121">+39 0734 000 121</a>
              <br />
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
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
        <span className={styles.footerLegal}>
          <a href="#">{t.common.privacy}</a>
          <a href="#">{t.common.terms}</a>
          <a href="#">{t.common.instagram}</a>
        </span>
        <button className={styles.footerTop2} onClick={() => scrollToTop(false)}>
          {t.common.backTop}
        </button>
      </div>
    </footer>
  );
}
