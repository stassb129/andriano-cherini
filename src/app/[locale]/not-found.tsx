"use client";

import { TLink } from "@/components/layout/Transition";
import { useLocale } from "@/i18n/LocaleProvider";

export default function NotFound() {
  const { locale } = useLocale();
  const ru = locale === "ru";
  return (
    <section className="section" style={{ minHeight: "80svh", display: "grid", alignItems: "center" }}>
      <div className="container" style={{ display: "grid", gap: "1.6rem", justifyItems: "start", paddingTop: "var(--header-h)" }}>
        <meta name="robots" content="noindex" />
        <p className="eyebrow">404</p>
        <h1 className="t-h1">{ru ? "Страница не найдена." : "Page not found."}</h1>
        <p className="t-lead">
          {ru ? "Возможно, адрес изменился. Загляните в коллекцию." : "The address may have changed. Take a look at the collection."}
        </p>
        <TLink href="/collection" className="btn btn--solid">
          {ru ? "Смотреть коллекцию" : "View the collection"}
        </TLink>
      </div>
    </section>
  );
}
