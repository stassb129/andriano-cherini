"use client";

import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import SectionHead from "@/components/ui/SectionHead";
import NextChapter from "@/components/pages/NextChapter";
import Technologies from "@/components/home/Technologies";
import ContactCta from "@/components/home/ContactCta";
import Reveal from "@/components/motion/Reveal";
import ParallaxImage from "@/components/motion/ParallaxImage";
import SplitText from "@/components/motion/SplitText";
import Marquee from "@/components/motion/Marquee";
import { craftSteps, leathers } from "@/data/brand";
import { useLocale } from "@/i18n/LocaleProvider";
import styles from "@/components/pages/pages.module.scss";

export default function AtelierView() {
  const { L, t } = useLocale();
  const a = t.atelierPage;

  return (
    <>
      <PageHero eyebrow={a.eyebrow} title={a.title} intro={a.intro} image="/images/atelier/workshop.jpg" meta={[...a.meta]} />

      <section className="section">
        <div className={`container ${styles.atelierIntro}`}>
          <Reveal>
            <p className="eyebrow">{a.ruleEyebrow}</p>
          </Reveal>
          <SplitText text={a.ruleTitle} className="t-h1" />
          <Reveal>
            <p className="t-lead">{a.ruleLead}</p>
          </Reveal>
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <SectionHead eyebrow={a.stepsEyebrow} title={a.stepsTitle} intro={a.stepsIntro} />
          <ol className={styles.craft}>
            {craftSteps.map((step) => (
              <li key={step.n} className={styles.craftRow}>
                <div className={styles.craftMeta}>
                  <span className={styles.craftN}>{step.n}</span>
                  <span className={styles.craftTime}>{L(step.duration)}</span>
                </div>
                <div className={styles.craftCopy}>
                  <h3 className="t-h3">{L(step.title)}</h3>
                  <p className="t-body">{L(step.text)}</p>
                </div>
                <div className={styles.craftMedia}>
                  <Image src={step.image} alt={L(step.title)} fill sizes="(max-width: 1100px) 100vw, 32vw" />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Marquee items={[...t.marquee]} />

      <section className="section">
        <div className="container">
          <SectionHead eyebrow={a.leatherEyebrow} title={a.leatherTitle} intro={a.leatherIntro} />
          <Reveal className={styles.leathers} stagger={0.1}>
            {leathers.map((l) => (
              <figure key={L(l.name)} className={styles.leather}>
                <div className={styles.leatherImg}>
                  <Image src={l.image} alt={L(l.name)} fill sizes="(max-width: 768px) 100vw, 25vw" />
                </div>
                <figcaption>
                  <h3>{L(l.name)}</h3>
                  <p className={styles.leatherOrigin}>{L(l.origin)}</p>
                  <p className="t-body">{L(l.text)}</p>
                </figcaption>
              </figure>
            ))}
          </Reveal>
        </div>
      </section>

      <Technologies />

      <section className={styles.atelierWide}>
        <ParallaxImage
          src="/images/collection/urbino-oxford-moro/08.jpg"
          alt=""
          className={styles.atelierWideImg}
          sizes="100vw"
          speed={16}
        />
        <div className={styles.atelierWideShade} />
        <div className={`container ${styles.atelierWideCopy}`}>
          <Reveal>
            <p className="eyebrow">{a.promiseEyebrow}</p>
          </Reveal>
          <SplitText text={a.promiseTitle} className="t-h1" />
          <Reveal>
            <p className="t-lead">{a.promiseLead}</p>
          </Reveal>
        </div>
      </section>

      <ContactCta />
      <NextChapter href="/contact" eyebrow={a.nextEyebrow} title={a.next} image="/images/collection/fermo-derby-nero/10.jpg" />
    </>
  );
}
