import Image from "next/image";
import { TLink } from "@/components/layout/Transition";
import styles from "./pages.module.scss";

type Props = { href: string; eyebrow: string; title: string; image: string };

/** Full-width "turn the page" link that closes most inner pages. */
export default function NextChapter({ href, eyebrow, title, image }: Props) {
  return (
    <TLink href={href} className={styles.next}>
      <div className={styles.nextMedia}>
        <Image src={image} alt="" fill sizes="100vw" />
      </div>
      <div className={`container ${styles.nextInner}`}>
        <p className="eyebrow">{eyebrow}</p>
        <p className={styles.nextTitle}>
          {title}
          <span aria-hidden="true">→</span>
        </p>
      </div>
    </TLink>
  );
}
