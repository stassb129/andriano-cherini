"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/i18n/LocaleProvider";
import styles from "./home.module.scss";

/** Close-up photos that stand in for the old 3D poses — one per construction detail. */
const DETAIL_IMAGES = [
  "/andreano_cherini_collection/model_1/color_1/3.png",
  "/andreano_cherini_collection/model_1/color_1/2.png",
  "/andreano_cherini_collection/model_2/color_2/1.png",
  "/andreano_cherini_collection/model_1/color_2/1.png",
] as const;

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
          {DETAIL_IMAGES.map((src, i) => (
            <div
              key={src}
              className={`${styles.anatomyFrame} ${i === active ? styles.anatomyFrameActive : ""}`}
              aria-hidden={i !== active}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="(max-width: 1100px) 100vw, 58vw"
                priority={i === 0}
                className={styles.anatomyImg}
              />
            </div>
          ))}
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
