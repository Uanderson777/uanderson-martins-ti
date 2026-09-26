import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllArticles, getArticleBySlug, getRelatedArticles } from "@/lib/content";
import { getCategoryBySlug } from "@/lib/categories";
import { RenderMDX } from "@/lib/mdx";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LevelBadge } from "@/components/LevelBadge";
import { ContentTypeLabel } from "@/components/ContentTypeLabel";
import { ReadingProgress } from "@/components/ReadingProgress";
import { ShareButtons } from "@/components/ShareButtons";
import { ArticleCard } from "@/components/ArticleCard";
import { AdInArticle, AdSidebar } from "@/components/ads/AdSlot";
import { siteConfig } from "@/config/site";

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.summary,
    alternates: { canonical: `/artigos/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.summary,
      publishedTime: article.date,
      modifiedTime: article.updated ?? article.date,
      authors: [article.author],
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const category = getCategoryBySlug(article.category);
  const related = getRelatedArticles(article);
  const url = `${siteConfig.url}/artigos/${article.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary,
    datePublished: article.date,
    dateModified: article.updated ?? article.date,
    author: { "@type": "Person", name: article.author },
  };

  return (
    <>
      <ReadingProgress />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 lg:grid-cols-[1fr_260px]">
        <article className="min-w-0">
          <Breadcrumbs
            items={[
              { label: "Início", href: "/" },
              { label: "Artigos", href: "/artigos" },
              ...(category ? [{ label: category.shortTitle, href: `/${category.slug}` }] : []),
              { label: article.title },
            ]}
          />

          <div className="mb-3 flex flex-wrap items-center gap-2">
            <LevelBadge level={article.level} />
            <ContentTypeLabel type={article.contentType} />
            <span className="text-xs text-ink-500 dark:text-paper-200/50">{article.readingTime}</span>
          </div>

          <h1 className="font-display text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl dark:text-paper-50">
            {article.title}
          </h1>
          <p className="mt-3 text-lg text-ink-700 dark:text-paper-200/70">{article.summary}</p>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-b border-ink-700/10 pb-6 text-sm text-ink-600 dark:border-paper-200/10 dark:text-paper-200/60">
            <p>
              Por {article.author} · publicado em{" "}
              {new Date(article.date + "T00:00:00").toLocaleDateString("pt-BR")}
              {article.updated && article.updated !== article.date && (
                <> · atualizado em {new Date(article.updated + "T00:00:00").toLocaleDateString("pt-BR")}</>
              )}
            </p>
            <ShareButtons title={article.title} url={url} />
          </div>

          <div className="prose prose-neutral mt-8 max-w-none dark:prose-invert prose-headings:font-display">
            <RenderMDX source={article.content} />
          </div>

          <div className="my-10">
            <AdInArticle />
          </div>

          {article.sources && article.sources.length > 0 && (
            <div className="mt-10 rounded-lg border border-ink-700/10 p-5 dark:border-paper-200/10">
              <p className="mb-2 text-sm font-semibold text-ink-900 dark:text-paper-50">Fontes e documentação</p>
              <ul className="space-y-1 text-sm">
                {article.sources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-stream-600 hover:underline dark:text-stream-400">
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <Link
                key={tag}
                href={`/artigos?tag=${tag}`}
                className="rounded-full bg-ink-700/5 px-3 py-1 text-xs text-ink-700 hover:bg-ink-700/10 dark:bg-paper-200/10 dark:text-paper-200/70"
              >
                #{tag}
              </Link>
            ))}
          </div>

          {related.length > 0 && (
            <div className="mt-12">
              <h2 className="mb-4 text-lg font-semibold text-ink-900 dark:text-paper-50">Artigos relacionados</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {related.map((a) => (
                  <ArticleCard key={a.slug} article={a} />
                ))}
              </div>
            </div>
          )}
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <AdSidebar />
          </div>
        </aside>
      </div>
    </>
  );
}
