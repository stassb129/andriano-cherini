"use client";

import ParallaxImage from "@/components/motion/ParallaxImage";
import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/motion/Reveal";
import { technologies } from "@/data/brand";
import { useLocale } from "@/i18n/LocaleProvider";
import styles from "./home.module.scss";

export default function Technologies({ compact = false }: { compact?: boolean }) {
  const { L, t } = useLocale();
  return (
    <section className={`section ${styles.tech}`} id="technologies">
      <div className="container">
        <SectionHead eyebrow={t.tech.eyebrow} title={t.tech.title} intro={t.tech.intro} />

        <div className={styles.techLayout}>
          {!compact && (
            <div className={styles.techVisual}>
              <ParallaxImage
                src="/images/product/fermo-side.jpg"
                alt="Fermo Derby — Ammortizzo"
                className={styles.techImg}
                speed={10}
              />
              <div className={styles.techTag}>
                <span>01</span>
                {t.tech.tag}
              </div>
            </div>
          )}
          <Reveal as="ul" className={`${styles.techGrid} ${compact ? styles.techGridWide : ""}`} stagger={0.08}>
            {technologies.map((tech, i) => (
              <li key={tech.id} className={styles.techCard}>
                <div className={styles.techTop}>
                  <span className={styles.techNum}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={styles.techName}>{tech.name}</span>
                </div>
                <h3 className={styles.techTitle}>{L(tech.title)}</h3>
                <p className="t-small">{L(tech.text)}</p>
                <p className={styles.techStat}>
                  <strong>{tech.stat}</strong>
                  <span>{L(tech.statLabel)}</span>
                </p>
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
