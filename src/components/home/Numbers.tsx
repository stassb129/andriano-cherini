"use client";

import ParallaxImage from "@/components/motion/ParallaxImage";
import Counter from "@/components/motion/Counter";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";
import { useLocale } from "@/i18n/LocaleProvider";
import styles from "./home.module.scss";

export default function Numbers() {
  const { t } = useLocale();
  return (
    <section className={styles.numbers}>
      <ParallaxImage
        src="/images/atelier/workshop-2.jpg"
        alt=""
        className={styles.numbersBg}
        sizes="100vw"
        speed={20}
        reveal={false}
      />
      <div className={styles.numbersShade} />
      <div className={`container ${styles.numbersInner}`}>
        <div className={styles.numbersHead}>
          <Reveal>
            <p className="eyebrow">{t.numbers.eyebrow}</p>
          </Reveal>
          <SplitText text={t.numbers.title} className="t-h2" />
        </div>
        <Reveal as="ul" className={styles.numbersGrid} stagger={0.1}>
          {t.numbers.items.map((n) => (
            <li key={n.label}>
              <Counter value={n.value} suffix={n.suffix} className={styles.numbersValue} />
              <span className={styles.numbersLabel}>{n.label}</span>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
