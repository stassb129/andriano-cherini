"use client";

import { useState, type FormEvent } from "react";
import Magnetic from "@/components/motion/Magnetic";
import { useLocale } from "@/i18n/LocaleProvider";
import styles from "@/components/pages/pages.module.scss";

export const CONTACT_EMAIL = "atelier@andrianocherini.com";

type Props = {
  /** Prefills the message / subject (e.g. product name). */
  about?: string;
  className?: string;
  dark?: boolean;
};

export default function ContactForm({ about, className, dark }: Props) {
  const { t } = useLocale();
  const c = t.contactPage;
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    const topic = about ? `Andriano Cherini — ${about}` : "Andriano Cherini — inquiry";
    const body = [
      name && `Name: ${name}`,
      email && `Email: ${email}`,
      about && `About: ${about}`,
      "",
      message || "(no message)",
    ]
      .filter(Boolean)
      .join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(topic)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  if (sent) {
    return <p className={styles.appointThanks}>{c.thanks}</p>;
  }

  return (
    <form className={`${styles.appointForm} ${className ?? ""}`} onSubmit={onSubmit}>
      <label>
        {c.name}
        <input name="name" required autoComplete="name" />
      </label>
      <label>
        Email
        <input name="email" type="email" required autoComplete="email" />
      </label>
      <label>
        {c.message}
        <textarea
          name="message"
          rows={4}
          placeholder={about ? `${about}…` : "Fermo Derby, size, city…"}
          defaultValue={about ? "" : undefined}
        />
      </label>
      <Magnetic>
        <button type="submit" className={dark ? "btn btn--dark" : "btn btn--solid"}>
          {c.send}
        </button>
      </Magnetic>
    </form>
  );
}
