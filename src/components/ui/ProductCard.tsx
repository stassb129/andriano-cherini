"use client";

import FitImage from "@/components/ui/FitImage";
import { TLink } from "@/components/layout/Transition";
import type { Product } from "@/data/products";
import { imageRatio } from "@/lib/imageRatio";
import { useLocale } from "@/i18n/LocaleProvider";
import styles from "./ui.module.scss";

export default function ProductCard({ product, priority }: { product: Product; priority?: boolean }) {
  const { L } = useLocale();
  const [main, ...rest] = product.images;
  const ratio = imageRatio(main!);
  const hover = rest.find((src) => imageRatio(src) === ratio);
  return (
    <TLink href={`/collection/${product.slug}`} className={styles.card}>
      <div className={styles.cardMedia} style={{ aspectRatio: ratio }}>
        {product.badge && <span className={styles.cardBadge}>{L(product.badge)}</span>}
        <FitImage
          src={main!}
          alt={`${product.name} ${L(product.model)}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1400px) 50vw, 25vw"
          className={styles.cardImg}
          priority={priority}
        />
        {hover && (
          <div className={styles.cardHover}>
            <FitImage src={hover} alt="" sizes="(max-width: 768px) 100vw, 25vw" />
          </div>
        )}
      </div>
      <div className={styles.cardInfo}>
        <div>
          <h3 className={styles.cardName}>{product.name}</h3>
          <p className={styles.cardModel}>{L(product.model)}</p>
        </div>
        <p className={styles.cardColour}>
          <i style={{ background: product.swatch }} />
          {L(product.colour)}
        </p>
      </div>
    </TLink>
  );
}
