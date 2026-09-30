import type { ReactNode } from "react";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";
import styles from "./ui.module.scss";

type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  action?: ReactNode;
  align?: "split" | "center";
};

/** Eyebrow + split-reveal title, with an optional intro paragraph or action on the right. */
export default function SectionHead({ eyebrow, title, intro, action, align = "split" }: Props) {
  return (
    <div className={`${styles.head} ${align === "center" ? styles.headCenter : ""}`}>
      <div className={styles.headMain}>
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
        <SplitText text={title} className="t-h2" />
      </div>
      {(intro || action) && (
        <Reveal className={styles.headSide} delay={0.2}>
          {intro && <p className="t-body">{intro}</p>}
          {action}
        </Reveal>
      )}
    </div>
  );
}
