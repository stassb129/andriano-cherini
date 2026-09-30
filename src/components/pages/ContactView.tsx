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
      en: "Our shoes follow standard EU sizing. If you are between sizes, choose the larger one. With the fur lining, most customers take their usual size.",
      ru: "Размеры соответствуют стандартной европейской сетке. Если вы между размерами, выбирайте больший. С учётом меховой подкладки большинство берёт свой обычный размер.",
    },
  },
  {
    title: { en: "Where can I buy?", ru: "Где купить?" },
    content: {
      en: "The collection is sold on Ozon. Delivery, payment and returns follow Ozon's terms.",
      ru: "Коллекция продаётся на Ozon. Доставка, оплата и возврат — по правилам Ozon.",
    },
  },
  {
    title: { en: "Can I order through the website?", ru: "Можно ли заказать через сайт?" },
    content: {
      en: "No, this website is for information only. For questions about a model, write to us by email.",
      ru: "Нет, сайт носит информационный характер. С вопросами о модели пишите нам на почту.",
    },
  },
  {
    title: { en: "How do I care for the shoes?", ru: "Как ухаживать за обувью?" },
    content: {
      en: "Brush after wear, use a cream in the shoe's colour, keep shoe trees inside and dry away from radiators.",
      ru: "Чистите щёткой после носки, используйте крем в цвет обуви, храните с колодками и сушите вдали от батарей.",
    },
  },
];

export default function ContactView() {
  const { L, t } = useLocale();
  const c = t.contactPage;

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} intro={c.intro} image="/images/italy/stone-house.jpg" meta={[...c.meta]} />

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
                    {b.href ? (
                      <a href={b.href} target="_blank" rel="noopener noreferrer">
                        {b.address} ↗
                      </a>
                    ) : (
                      b.address
                    )}
                    <br />
                    {L(b.hours)}
                    {b.phone && (
                      <>
                        <br />
                        <a href={`tel:${b.phone.replace(/\s/g, "")}`}>{b.phone}</a>
                      </>
                    )}
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

      <NextChapter href="/" eyebrow={t.common.ourStory} title="Andriano Cherini" image="/images/collection/fermo-derby-moro/11.jpg" />
    </>
  );
}
