"use client";

import { useEffect, useRef, useState } from "react";
import ShoeCanvas from "@/components/three/ShoeCanvas";
import { useLocale } from "@/i18n/LocaleProvider";
import styles from "./home.module.scss";

export default function Anatomy() {
  const [active, setActive] = useState(0);
  const steps = useRef<(HTMLDivElement | null)[]>([]);
  const { t } = useLocale();
  const STEPS = t.anatomy.steps;

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    steps.current.forEach((s) => s && io.observe(s));
    return () => io.disconnect();
  }, [STEPS]);

  return (
    <section className={styles.anatomy} aria-label={t.anatomy.aria}>
      <div className={styles.anatomySticky}>
        <div className={styles.anatomyStage}>
          <ShoeCanvas mode="anatomy" pose={active} />
        </div>
        <div className={styles.anatomyHud} aria-hidden="true">
          <p className="eyebrow">{t.anatomy.eyebrow}</p>
          <ol className={styles.anatomyDots}>
            {STEPS.map((s, i) => (
              <li key={s.label} className={i === active ? styles.anatomyDotActive : ""}>
                <span>0{i + 1}</span>
                {s.label}
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className={styles.anatomySteps}>
        <div className={styles.anatomyIntro}>
          <p className="eyebrow">{t.anatomy.eyebrowSide}</p>
          <h2 className="t-h2">
            {t.anatomy.title}
            <br />
            <em className="accent">{t.anatomy.titleAccent}</em>
          </h2>
        </div>
        {STEPS.map((s, i) => (
          <div
            key={s.label}
            ref={(el) => {
              steps.current[i] = el;
            }}
            data-index={i}
            className={`${styles.anatomyStep} ${i === active ? styles.anatomyStepActive : ""}`}
          >
            <span className={styles.anatomyNum}>0{i + 1}</span>
            <p className={styles.anatomyLabel}>{s.label}</p>
            <h3 className="t-h3">{s.title}</h3>
            <p className="t-body">{s.text}</p>
            <p className={styles.anatomyStat}>{s.stat}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
