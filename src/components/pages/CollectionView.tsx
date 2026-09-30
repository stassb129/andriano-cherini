"use client";

import PageHero from "@/components/ui/PageHero";
import SectionHead from "@/components/ui/SectionHead";
import CollectionGrid from "@/components/pages/CollectionGrid";
import ParallaxImage from "@/components/motion/ParallaxImage";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";
import Marquee from "@/components/motion/Marquee";
import Magnetic from "@/components/motion/Magnetic";
import { TLink } from "@/components/layout/Transition";
import ContactCta from "@/components/home/ContactCta";
import { CATEGORIES, SIGNATURE_SLUG, getProduct, type Category } from "@/data/products";
import { useLocale } from "@/i18n/LocaleProvider";
import styles from "@/components/pages/pages.module.scss";

export default function CollectionView({ initialCategory }: { initialCategory?: string }) {
  const { t } = useLocale();
  const c = t.collectionPage;
  const initial = CATEGORIES.includes(initialCategory as Category) ? (initialCategory as Category) : "All";
  const signature = getProduct(SIGNATURE_SLUG)!;

  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.title}
        intro={c.intro}
        image={getProduct("urbino-oxford-nero")!.images[5]!}
        meta={[...c.meta]}
      />

      <section className="section" id="shoes">
        <div className="container">
          <CollectionGrid key={initial} initial={initial} />
        </div>
      </section>

      <Marquee items={[...t.marquee]} />

      <section className={styles.feature}>
        <ParallaxImage
          src={signature.images[5]!}
          alt="Fermo Derby"
          className={styles.featureImg}
          sizes="100vw"
          speed={18}
        />
        <div className={styles.featureShade} />
        <div className={`container ${styles.featureInner}`}>
          <Reveal>
            <p className="eyebrow">{c.featureEyebrow}</p>
          </Reveal>
          <SplitText text={c.featureTitle} className="t-h1" />
          <Reveal className={styles.featureFoot}>
            <p className="t-lead">{c.featureLead}</p>
            <Magnetic>
              <TLink href={`/collection/${signature.slug}`} className="btn btn--solid">
                {c.featureCta}
              </TLink>
            </Magnetic>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow={c.careEyebrow} title={c.careTitle} />
          <Reveal className={styles.services} stagger={0.12}>
            {c.care.map((s, i) => (
              <div key={s.title} className={styles.service}>
                <span className={styles.serviceN}>0{i + 1}</span>
                <h3 className="t-h3">{s.title}</h3>
                <p className="t-body">{s.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
