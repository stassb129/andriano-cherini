import Image from "next/image";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";
import styles from "./home.module.scss";

type Props = { text: string; by: string; role: string; image: string };

export default function Quote({ text, by, role, image }: Props) {
  return (
    <section className={`section ${styles.quote}`}>
      <div className={`container ${styles.quoteInner}`}>
        <Reveal className={styles.quotePortrait}>
          <Image src={image} alt="" fill sizes="200px" />
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
