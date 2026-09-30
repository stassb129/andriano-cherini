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
      <PageHero eyebrow={h.eyebrow} title={h.title} intro={h.intro} image="/images/atelier/master.jpg" meta={[...h.meta]} />

      <section className="section light">
        <div className={`container ${styles.crestBand}`}>
          <Reveal className={styles.crestMark}>
            <Image src="/images/brand/crest.png" alt="Andriano Cherini crest" fill sizes="280px" />
          </Reveal>
          <div className={styles.crestCopy}>
            <Reveal>
              <p className="eyebrow">{h.crestEyebrow}</p>
            </Reveal>
            <SplitText text={h.crestTitle} className="t-h2" />
            <Reveal>
              <p className="t-lead">{h.crestLead}</p>
            </Reveal>
            <Reveal as="ul" className={styles.crestLegend} stagger={0.08}>
              <li>
                <strong>A · C</strong>
                <span>{h.crestA}</span>
              </li>
              <li>
                <strong>ANDRIANO CHERINI</strong>
                <span>{h.crestName}</span>
              </li>
              <li>
                <strong>FORMA E COMFORT</strong>
                <span>{h.crestMotto}</span>
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

      <Quote text={t.quote.text} by="Andriano Cherini" role={t.quote.role} image="/images/atelier/workshop-2.jpg" />

      <NextChapter href="/atelier" eyebrow={h.nextEyebrow} title={h.next} image="/images/atelier/workshop.jpg" />
    </>
  );
}
