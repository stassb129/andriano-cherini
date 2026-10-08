"use client";

import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import SectionHead from "@/components/ui/SectionHead";
import Timeline from "@/components/pages/Timeline";
import NextChapter from "@/components/pages/NextChapter";
import Quote from "@/components/home/Quote";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";
import Marquee from "@/components/motion/Marquee";
import { timeline, values } from "@/data/brand";
import { useLocale } from "@/i18n/LocaleProvider";
import styles from "@/components/pages/pages.module.scss";

export default function HeritageView() {
  const { t, L } = useLocale();
  const h = t.heritage;

  return (
    <>
      <PageHero eyebrow={h.eyebrow} title={h.title} intro={h.intro} image="/images/atelier/workshop-2.jpg" meta={[...h.meta]} />

      <section className="section light">
        <div className={`container ${styles.modelsBand}`}>
          <Reveal className={styles.modelsMedia}>
            <Image
              src="/images/collection/fermo-derby-nero/08.jpg"
              alt="Fermo Derby and Urbino Oxford"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </Reveal>
          <div className={styles.modelsCopy}>
            <Reveal>
              <p className="eyebrow">{h.modelsEyebrow}</p>
            </Reveal>
            <SplitText text={h.modelsTitle} className="t-h2" />
            <Reveal>
              <p className="t-lead">{h.modelsLead}</p>
            </Reveal>
            <Reveal as="ul" className={styles.modelsLegend} stagger={0.08}>
              <li>
                <strong>FERMO DERBY</strong>
                <span>{h.modelsFermo}</span>
              </li>
              <li>
                <strong>URBINO OXFORD</strong>
                <span>{h.modelsUrbino}</span>
              </li>
              <li>
                <strong>NERO · MORO</strong>
                <span>{h.modelsColours}</span>
              </li>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow={h.timeEyebrow} title={h.timeTitle} intro={h.timeIntro} />
          <Timeline entries={timeline} />
        </div>
      </section>

      <Marquee items={[...t.marquee]} />

      <section className="section">
        <div className="container">
          <SectionHead eyebrow={h.valuesEyebrow} title={h.valuesTitle} />
          <Reveal className={styles.values} stagger={0.1}>
            {values.map((v, i) => (
              <article key={L(v.title)} className={styles.value}>
                <span>0{i + 1}</span>
                <h3 className="t-h3">{L(v.title)}</h3>
                <p className="t-body">{L(v.text)}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <Quote text={t.quote.text} by="Andriano Cherini" role={t.quote.role} image="/images/collection/urbino-oxford-moro/06.jpg" />

      <NextChapter href="/atelier" eyebrow={h.nextEyebrow} title={h.next} image="/images/collection/urbino-oxford-nero/07.jpg" />
    </>
  );
}
