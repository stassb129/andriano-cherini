"use client";

import Hero from "@/components/home/Hero/Hero";
import Manifesto from "@/components/home/Manifesto";
import Chapters from "@/components/home/Chapters";
import Signature from "@/components/home/Signature";
import Anatomy from "@/components/home/Anatomy";
import CollectionPreview from "@/components/home/CollectionPreview";
import Numbers from "@/components/home/Numbers";
import Technologies from "@/components/home/Technologies";
import AtelierMosaic from "@/components/home/AtelierMosaic";
import Quote from "@/components/home/Quote";
import ContactCta from "@/components/home/ContactCta";
import Marquee from "@/components/motion/Marquee";
import { useLocale } from "@/i18n/LocaleProvider";

export default function HomeView() {
  const { t } = useLocale();
  return (
    <>
      <Hero />
      <Manifesto />
      <Chapters />
      <Signature />
      <Anatomy />
      <Marquee items={[...t.marquee]} />
      <CollectionPreview />
      <Numbers />
      <Technologies />
      <AtelierMosaic />
      <Quote text={t.quote.text} by="Andriano Cherini" role={t.quote.role} image="/images/collection/fermo-derby-nero/04.jpg" />
      <ContactCta />
    </>
  );
}
