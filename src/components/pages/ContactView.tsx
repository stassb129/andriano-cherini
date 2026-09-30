"use client";

import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import SectionHead from "@/components/ui/SectionHead";
import Accordion from "@/components/ui/Accordion";
import ContactForm from "@/components/ui/ContactForm";
import NextChapter from "@/components/pages/NextChapter";
import Reveal from "@/components/motion/Reveal";
import { boutiques } from "@/data/brand";
import { useLocale } from "@/i18n/LocaleProvider";
import styles from "@/components/pages/pages.module.scss";

const FAQ = [
  {
    title: { en: "How do I choose a size?", ru: "Как выбрать размер?" },
    content: {
      en: "Cherini lasts run true to EU size. If you are between sizes, take the larger. For the Fermo Derby, ComfortForma is generous in the forefoot — most keep their usual size.",
      ru: "Колодки Cherini соответствуют EU. Если между размерами — берите больший. У Fermo Derby ComfortForma свободнее в носке — большинство берёт привычный размер.",
    },
  },
  {
    title: { en: "How do orders work?", ru: "Как оформить заказ?" },
    content: {
      en: "Write to us by email with the model and size. We confirm availability and the next steps by reply.",
      ru: "Напишите нам модель и размер. Наличие и следующие шаги подтверждаем ответом на письмо.",
    },
  },
  {
    title: { en: "What is included?", ru: "Что входит в комплект?" },
    content: {
      en: "Shoe trees, a cotton bag and a care card with every pair.",
      ru: "Колодки, хлопковый мешок и карточка ухода с каждой парой.",
    },
  },
  {
    title: { en: "Do you offer aftercare?", ru: "Есть ли обслуживание после покупки?" },
    content: {
      en: "Yes — ask about resoling and seasonal care. We stay with the models we sell.",
      ru: "Да — спрашивайте про перетяжку и сезонный уход. Мы остаёмся с моделями, которые продаём.",
    },
  },
];

export default function ContactView() {
  const { L, t } = useLocale();
  const c = t.contactPage;

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} intro={c.intro} image="/images/italy/florence-duomo.jpg" meta={[...c.meta]} />

      <section className="section light" id="write">
        <div className={`container ${styles.appoint}`}>
          <div>
            <p className="eyebrow">{c.writeEyebrow}</p>
            <h2 className="t-h2">{c.writeTitle}</h2>
            <p className="t-body">{c.writeBody}</p>
          </div>
          <ContactForm dark />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow={c.whereEyebrow} title={c.whereTitle} intro={c.whereIntro} />
          <Reveal className={styles.shops} stagger={0.1}>
            {boutiques.map((b) => (
              <article key={b.city} className={styles.shop}>
                <div className={styles.shopImg}>
                  <Image src={b.image} alt={L(b.name)} fill sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <div className={styles.shopCopy}>
                  <p className="eyebrow">{b.city}</p>
                  <h3 className="t-h3">{L(b.name)}</h3>
                  <address>
                    {b.address}
                    <br />
                    {L(b.hours)}
                    <br />
                    <a href={`tel:${b.phone.replace(/\s/g, "")}`}>{b.phone}</a>
                  </address>
                  <p className="t-body">{L(b.note)}</p>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section" id="faq">
        <div className={`container ${styles.faq}`}>
          <SectionHead eyebrow={c.faqEyebrow} title={c.faqTitle} />
          <Accordion
            items={FAQ.map((f) => ({
              title: L(f.title),
              content: <p>{L(f.content)}</p>,
            }))}
          />
        </div>
      </section>

      <NextChapter href="/" eyebrow={t.common.ourStory} title="Andriano Cherini" image="/images/product/fermo-marble.jpg" />
    </>
  );
}
