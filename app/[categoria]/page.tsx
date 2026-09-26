import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { categories, getCategoryBySlug } from "@/lib/categories";
import { getArticlesByCategory } from "@/lib/content";
import { trails } from "@/content/trails";
import { ArticleCard } from "@/components/ArticleCard";
import { TrailCard } from "@/components/TrailCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AdHeader } from "@/components/ads/AdSlot";

export function generateStaticParams() {
  return categories.map((c) => ({ categoria: c.slug }));
}

export function generateMetadata({ params }: { params: { categoria: string } }): Metadata {
  const category = getCategoryBySlug(params.categoria);
  if (!category) return {};
  return {
    title: category.title,
    description: category.description,
    alternates: { canonical: `/${category.slug}` },
  };
}

export default function CategoryPage({ params }: { params: { categoria: string } }) {
  const category = getCategoryBySlug(params.categoria);
  if (!category) notFound();

  const articles = getArticlesByCategory(category.slug);
  const relatedTrails = trails.filter((t) =>
    t.lessons.some((lesson) => lesson.articleSlug && articles.some((a) => a.slug === lesson.articleSlug))
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: category.title }]} />

      <h1 className="font-display text-3xl font-semibold text-ink-900 dark:text-paper-50">{category.title}</h1>
      <p className="mt-3 max-w-2xl text-ink-700 dark:text-paper-200/70">{category.description}</p>

      <div className="mt-10">
        <h2 className="mb-4 text-lg font-semibold text-ink-900 dark:text-paper-50">Conteúdos</h2>
        {articles.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <p className="rounded-lg border border-dashed border-ink-700/20 p-6 text-sm text-ink-600 dark:border-paper-200/20 dark:text-paper-200/60">
            Os primeiros conteúdos desta categoria ainda estão sendo publicados. Volte em breve — ou confira{" "}
            <Link href="/trilhas" className="text-stream-600 underline dark:text-stream-400">
              as trilhas de aprendizagem
            </Link>{" "}
            para ver o que está planejado.
          </p>
        )}
      </div>

      {relatedTrails.length > 0 && (
        <div className="mt-12">
          <h2 className="mb-4 text-lg font-semibold text-ink-900 dark:text-paper-50">Trilhas relacionadas</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedTrails.map((trail) => (
              <TrailCard key={trail.slug} trail={trail} />
            ))}
          </div>
        </div>
      )}

      <div className="mt-12">
        <AdHeader />
      </div>
    </div>
  );
}
