import Image from "next/image";
import styles from "./ui.module.scss";

type Props = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
};

/**
 * Whole photo inside a fixed-ratio tile: the pair is never cropped, and the
 * leftover space is filled with a blurred copy of the same shot instead of bars.
 * Parent must be positioned and sized.
 */
export default function FitImage({ src, alt, sizes, priority, className }: Props) {
  return (
    <>
      <Image src={src} alt="" fill sizes={sizes} className={styles.fitBloom} aria-hidden />
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`${styles.fitImg} ${className ?? ""}`}
      />
    </>
  );
}
