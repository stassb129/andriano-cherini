"use client";

import Image from "next/image";
import { TLink } from "@/components/layout/Transition";
import type { Product } from "@/data/products";
import { useLocale } from "@/i18n/LocaleProvider";
import styles from "./ui.module.scss";

export default function ProductCard({ product, priority }: { product: Product; priority?: boolean }) {
  const { L } = useLocale();
  const [main, hover] = product.images;
  return (
    <TLink href={`/collection/${product.slug}`} className={styles.card}>
      <div className={styles.cardMedia}>
        {product.badge && <span className={styles.cardBadge}>{L(product.badge)}</span>}
        <Image
          src={main!}
          alt={`${product.name} ${L(product.model)}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1400px) 50vw, 25vw"
          className={styles.cardImg}
          style={{ objectPosition: product.frame }}
          priority={priority}
        />
        {hover && (
          <Image
            src={hover}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className={styles.cardImgHover}
            style={{ objectPosition: product.frame }}
          />
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
