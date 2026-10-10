import Image from "next/image";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";
import styles from "./home.module.scss";

type Props = { text: string; by: string; role: string; /** @deprecated shoe photos removed — crest is used */ image?: string };

export default function Quote({ text, by, role }: Props) {
  return (
    <section className={`section ${styles.quote}`}>
      <div className={`container ${styles.quoteInner}`}>
        <Reveal className={styles.quotePortrait}>
          <Image src="/images/brand/crest.png" alt="" fill sizes="160px" />
        </Reveal>
        <span className={styles.quoteMark} aria-hidden="true">
          “
        </span>
        <SplitText as="blockquote" text={text} className={styles.quoteText} stagger={0.03} />
        <Reveal className={styles.quoteBy}>
          <span>{by}</span>
          <small>{role}</small>
        </Reveal>
      </div>
    </section>
  );
}
