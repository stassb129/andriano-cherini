"use client";

import ParallaxImage from "@/components/motion/ParallaxImage";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";
import Magnetic from "@/components/motion/Magnetic";
import { TLink } from "@/components/layout/Transition";
import { useLocale } from "@/i18n/LocaleProvider";
import styles from "./home.module.scss";

export default function AtelierMosaic() {
  const { t } = useLocale();
  return (
    <section className="section">
      <div className={`container ${styles.mosaicGrid}`}>
        <div className={styles.mosaicCopy}>
          <Reveal>
            <p className="eyebrow">{t.mosaic.eyebrow}</p>
          </Reveal>
          <SplitText text={t.mosaic.title} className="t-h1" />
          <Reveal>
            <p className="t-lead">{t.mosaic.lead}</p>
          </Reveal>
          <Reveal>
            <p className="t-body">{t.mosaic.body}</p>
          </Reveal>
          <Reveal className={styles.mosaicCta}>
            <Magnetic>
              <TLink href="/atelier" className="btn">
                {t.mosaic.cta}
              </TLink>
            </Magnetic>
          </Reveal>
        </div>

        <ParallaxImage src="/images/collection/fermo-derby-moro/06.jpg" alt="" className={styles.mosaicA} speed={16} />
        <ParallaxImage src="/images/atelier/tools.jpg" alt="" className={styles.mosaicB} speed={26} revealFrom="left" />
        <ParallaxImage src="/images/atelier/marking.jpg" alt="" className={styles.mosaicC} speed={12} revealFrom="right" />
        <ParallaxImage src="/images/atelier/leather-roll-2.jpg" alt="" className={styles.mosaicD} speed={22} revealFrom="top" />
      </div>
    </section>
  );
}
