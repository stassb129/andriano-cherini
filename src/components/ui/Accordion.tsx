"use client";

import { useId, useState, type ReactNode } from "react";
import styles from "./ui.module.scss";

export type AccordionItem = { title: string; content: ReactNode };

export default function Accordion({ items, defaultOpen = -1 }: { items: AccordionItem[]; defaultOpen?: number }) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();

  return (
    <div className={styles.accordion}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.title} className={`${styles.accItem} ${isOpen ? styles.accOpen : ""}`}>
            <h3>
              <button
                type="button"
                className={styles.accTrigger}
                aria-expanded={isOpen}
                aria-controls={`${id}-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span>{item.title}</span>
                <i aria-hidden="true" />
              </button>
            </h3>
            <div id={`${id}-${i}`} role="region" className={styles.accPanel}>
              <div className={styles.accInner}>{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
