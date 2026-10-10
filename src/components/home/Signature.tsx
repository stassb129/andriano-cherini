"use client";

import ParallaxImage from "@/components/motion/ParallaxImage";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";
import Magnetic from "@/components/motion/Magnetic";
import { TLink } from "@/components/layout/Transition";
import { getProduct, SIGNATURE_SLUG } from "@/data/products";
import { useLocale } from "@/i18n/LocaleProvider";
import styles from "./home.module.scss";

export default function Signature() {
  const p = getProduct(SIGNATURE_SLUG)!;
  const { t, L } = useLocale();
  const detailImgs = [p.images[2] ?? p.images[0]!, p.images[3] ?? p.images[1]!, p.images[4] ?? p.images[0]!];

  return (
    <section className={"section light"}>
      <div className={`container ${styles.signatureGrid}`}>
        <div className={styles.signatureMedia}>
          <ParallaxImage
            src={p.images[0]!}
            alt={`${p.name} Derby`}
            className={styles.signatureImg}
            sizes="(max-width: 1100px) 100vw, 55vw"
            speed={14}
          />
          <span className={styles.signatureStamp}>
            {t.signature.since}
            <strong>2014</strong>
          </span>
        </div>

        <div className={styles.signatureCopy}>
          <Reveal>
            <p className="eyebrow">{t.signature.eyebrow}</p>
          </Reveal>
          <SplitText text={t.signature.title} className="t-h1" />
          <Reveal>
            <p className="t-lead">{L(p.tagline)}</p>
          </Reveal>
          <Reveal>
            <p className="t-body">{L(p.description)}</p>
          </Reveal>
          <Reveal as="ul" className={styles.signatureList} stagger={0.06}>
            {p.features.map((d) => (
              <li key={d.en}>{L(d)}</li>
            ))}
          </Reveal>
          <Reveal className={styles.signatureBuy}>
            <Magnetic>
              <TLink href={`/collection/${p.slug}`} className="btn btn--dark">
                {t.signature.cta}
              </TLink>
            </Magnetic>
          </Reveal>
        </div>
      </div>

      <Reveal className={`container ${styles.signatureDetails}`} stagger={0.12}>
        {t.signature.details.map((label, i) => (
          <figure key={label} className={styles.signatureDetail}>
            <div className={styles.signatureDetailImg}>
              <ParallaxImage src={detailImgs[i]!} alt={`${p.name} — ${label}`} speed={8 + i * 4} sizes="33vw" />
            </div>
            <figcaption>{label}</figcaption>
          </figure>
        ))}
      </Reveal>
    </section>
  );
}
