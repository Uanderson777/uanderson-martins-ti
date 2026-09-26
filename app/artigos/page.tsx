import type { Metadata } from "next";
import { getAllArticles } from "@/lib/content";
import { ArticleCard } from "@/components/ArticleCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Artigos",
  description: "Todos os artigos sobre programação, dados, IA, Kafka, Cloud, redes e Service Desk.",
  alternates: { canonical: "/artigos" },
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Artigos" }]} />
      <h1 className="font-display text-3xl font-semibold text-ink-900 dark:text-paper-50">Artigos</h1>
      <p className="mt-3 max-w-2xl text-ink-700 dark:text-paper-200/70">
        {articles.length} {articles.length === 1 ? "artigo publicado" : "artigos publicados"} até agora — mais
        conteúdos são adicionados progressivamente.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
