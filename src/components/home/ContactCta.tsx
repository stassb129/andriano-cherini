"use client";

import ParallaxImage from "@/components/motion/ParallaxImage";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";
import Magnetic from "@/components/motion/Magnetic";
import { TLink } from "@/components/layout/Transition";
import { useLocale } from "@/i18n/LocaleProvider";
import styles from "./home.module.scss";

/** Closing contact CTA — brand card, no appointment flow. */
export default function ContactCta() {
  const { t } = useLocale();
  return (
    <section className={styles.visit}>
      <ParallaxImage src="/images/collection/urbino-oxford-moro/05.jpg" alt="" className={styles.visitBg} sizes="100vw" speed={22} reveal={false} />
      <div className={styles.visitShade} />
      <div className={`container ${styles.visitInner}`}>
        <Reveal>
          <p className="eyebrow">{t.contact.eyebrow}</p>
        </Reveal>
        <SplitText text={t.contact.title} className="t-display" />
        <Reveal className={styles.visitFoot}>
          <p className="t-lead">{t.contact.lead}</p>
          <Magnetic>
            <TLink href="/contact#write" className="btn btn--solid">
              {t.contact.cta}
            </TLink>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
