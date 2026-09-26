import Link from "next/link";
import { LevelBadge } from "@/components/LevelBadge";
import type { Article } from "@/types/content";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/artigos/${article.slug}`}
      className="flex flex-col gap-3 rounded-lg border border-ink-700/10 p-5 transition-colors hover:border-stream-500/50 dark:border-paper-200/10"
    >
      <div className="flex items-center gap-2">
        <LevelBadge level={article.level} />
        <span className="text-xs text-ink-500 dark:text-paper-200/50">{article.readingTime}</span>
      </div>
      <h3 className="font-display text-lg font-semibold leading-snug text-ink-900 dark:text-paper-50">
        {article.title}
      </h3>
      <p className="text-sm text-ink-700 dark:text-paper-200/70">{article.summary}</p>
    </Link>
  );
}
