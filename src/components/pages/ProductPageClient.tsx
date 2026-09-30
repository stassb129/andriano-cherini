"use client";

import ProductView from "@/components/pages/ProductView";
import ProductCard from "@/components/ui/ProductCard";
import SectionHead from "@/components/ui/SectionHead";
import ParallaxImage from "@/components/motion/ParallaxImage";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";
import Counter from "@/components/motion/Counter";
import Technologies from "@/components/home/Technologies";
import { TLink } from "@/components/layout/Transition";
import { getVariants, products, type Product } from "@/data/products";
import { useLocale } from "@/i18n/LocaleProvider";
import styles from "@/components/pages/pages.module.scss";

export default function ProductPageClient({ product }: { product: Product }) {
  const { L, t, locale } = useLocale();
  const ru = locale === "ru";
  const related = products.filter((p) => p.slug !== product.slug);
  const sibling = getVariants(product).find((v) => v.slug !== product.slug);
  const storyImage = sibling?.images[2] ?? product.images[2] ?? product.images[0]!;

  return (
    <>
      <ProductView product={product} />

      <section className={`section light ${styles.story}`}>
        <div className={`container ${styles.storyGrid}`}>
          <ParallaxImage
            src={storyImage}
            alt=""
            className={styles.storyImg}
            sizes="(max-width: 1100px) 100vw, 45vw"
            speed={14}
          />
          <div className={styles.storyCopy}>
            <Reveal>
              <p className="eyebrow">{t.productUi.storyEyebrow}</p>
            </Reveal>
            <SplitText
              text={ru ? `Почему модель называется\n*${product.name}.*` : `Why it is called\n*${product.name}.*`}
              className="t-h2"
            />
            <Reveal>
              <p className="t-lead">{L(product.story)}</p>
            </Reveal>
            <Reveal className={styles.storyStats} stagger={0.1}>
              <div>
                <Counter value={getVariants(product).length} className={styles.storyNum} />
                <span>{t.productUi.colours}</span>
              </div>
              <div>
                <Counter value={6} className={styles.storyNum} />
                <span>{ru ? "технологий комфорта" : "comfort technologies"}</span>
              </div>
              <div>
                <Counter value={2014} className={styles.storyNum} />
                <span>{ru ? "год основания" : "year founded"}</span>
              </div>
            </Reveal>
            <Reveal>
              <TLink href="/atelier" className="link-line">
                {t.mosaic.cta}
              </TLink>
            </Reveal>
          </div>
        </div>
      </section>

      <Technologies compact />

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow={t.collection.eyebrow}
            title={t.collection.title}
            action={
              <TLink href="/collection" className="link-line">
                {t.common.allShoes}
              </TLink>
            }
          />
          <Reveal className={styles.related} stagger={0.1}>
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
