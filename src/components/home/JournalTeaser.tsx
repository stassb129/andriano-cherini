import SectionHead from "@/components/ui/SectionHead";
import ArticleCard from "@/components/ui/ArticleCard";
import Reveal from "@/components/motion/Reveal";
import { TLink } from "@/components/layout/Transition";
import { articles } from "@/data/journal";
import styles from "./home.module.scss";

export default function JournalTeaser() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead
          eyebrow="Il Giornale"
          title={"Stories from\nthe *bench.*"}
          action={
            <TLink href="/journal" className="link-line">
              All stories
            </TLink>
          }
        />
        <Reveal className={styles.journalGrid} stagger={0.12}>
          {articles.slice(0, 3).map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
