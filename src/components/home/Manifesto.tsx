"use client";

import Image from "next/image";
import ScrubText from "@/components/motion/ScrubText";
import ParallaxImage from "@/components/motion/ParallaxImage";
import Reveal from "@/components/motion/Reveal";
import { TLink } from "@/components/layout/Transition";
import { useLocale } from "@/i18n/LocaleProvider";
import styles from "./home.module.scss";

export default function Manifesto() {
  const { t } = useLocale();
  return (
    <section className={`section ${styles.manifesto}`}>
      <div className={`container ${styles.manifestoGrid}`}>
        <Reveal className={styles.manifestoAside}>
          <div className={styles.manifestoCrest}>
            <Image src="/images/brand/crest.png" alt="" fill sizes="120px" />
          </div>
          <p className="eyebrow">{t.manifesto.eyebrow}</p>
          <p className="t-small">{t.manifesto.aside}</p>
        </Reveal>

        <div className={styles.manifestoBody}>
          <ScrubText className={styles.manifestoText} text={t.manifesto.text} />
          <Reveal className={styles.manifestoSign} delay={0.1}>
            <span className={styles.manifestoSign}>{t.manifesto.sign}</span>
            <TLink href="/heritage" className="link-line">
              {t.manifesto.link}
            </TLink>
          </Reveal>
        </div>
      </div>

      <div className={`container ${styles.manifestoImages}`}>
        <ParallaxImage
          src="/images/italy/urbino.jpg"
          alt={t.manifesto.placeEyebrow}
          className={styles.manifestoImgA}
          speed={18}
        />
        <div className={styles.manifestoCaption}>
          <Reveal>
            <p className="eyebrow">{t.manifesto.placeEyebrow}</p>
            <p className="t-lead">{t.manifesto.placeLead}</p>
          </Reveal>
        </div>
        <ParallaxImage
          src="/images/atelier/hands-leather.jpg"
          alt=""
          className={styles.manifestoImgB}
          speed={24}
          revealFrom="top"
        />
      </div>
    </section>
  );
}
