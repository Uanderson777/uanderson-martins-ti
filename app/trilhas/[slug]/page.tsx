import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Circle } from "lucide-react";
import { trails } from "@/content/trails";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LevelBadge } from "@/components/LevelBadge";

export function generateStaticParams() {
  return trails.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const trail = trails.find((t) => t.slug === params.slug);
  if (!trail) return {};
  return { title: trail.title, description: trail.description, alternates: { canonical: `/trilhas/${trail.slug}` } };
}

export default function TrailDetailPage({ params }: { params: { slug: string } }) {
  const trail = trails.find((t) => t.slug === params.slug);
  if (!trail) notFound();

  const available = trail.lessons.filter((l) => l.articleSlug).length;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Trilhas", href: "/trilhas" }, { label: trail.title }]} />

      <div className="mb-2 flex items-center gap-2">
        <LevelBadge level={trail.level} />
        <span className="text-xs text-ink-500 dark:text-paper-200/50">
          {trail.lessons.length} aulas · {available} disponíveis agora
        </span>
      </div>
      <h1 className="font-display text-3xl font-semibold text-ink-900 dark:text-paper-50">{trail.title}</h1>
      <p className="mt-3 text-ink-700 dark:text-paper-200/70">{trail.description}</p>

      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-ink-700/10 dark:bg-paper-200/10">
        <div
          className="h-full rounded-full bg-stream-500"
          style={{ width: `${(available / trail.lessons.length) * 100}%` }}
        />
      </div>

      <ol className="mt-8 divide-y divide-ink-700/10 dark:divide-paper-200/10">
        {trail.lessons.map((lesson, i) => {
          const content = (
            <div className="flex items-center gap-3 py-4">
              {lesson.articleSlug ? (
                <CheckCircle2 size={18} className="shrink-0 text-stream-500" />
              ) : (
                <Circle size={18} className="shrink-0 text-ink-400 dark:text-paper-200/30" />
              )}
              <span className="font-mono text-xs text-ink-400 dark:text-paper-200/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={lesson.articleSlug ? "text-ink-900 dark:text-paper-50" : "text-ink-500 dark:text-paper-200/50"}>
                {lesson.title}
              </span>
              {!lesson.articleSlug && (
                <span className="ml-auto text-xs text-ink-400 dark:text-paper-200/40">em breve</span>
              )}
            </div>
          );

          return (
            <li key={lesson.title}>
              {lesson.articleSlug ? (
                <Link href={`/artigos/${lesson.articleSlug}`} className="block hover:bg-ink-700/[0.02] dark:hover:bg-paper-100/[0.03]">
                  {content}
                </Link>
              ) : (
                content
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
