import Link from "next/link";
import { LevelBadge } from "@/components/LevelBadge";
import type { Trail } from "@/types/content";

export function TrailCard({ trail }: { trail: Trail }) {
  return (
    <Link
      href={`/trilhas/${trail.slug}`}
      className="flex flex-col gap-3 rounded-lg border border-ink-700/10 p-5 transition-colors hover:border-signal-500/50 dark:border-paper-200/10"
    >
      <div className="flex items-center justify-between">
        <LevelBadge level={trail.level} />
        <span className="font-mono text-xs text-ink-500 dark:text-paper-200/50">
          {trail.lessons.length} {trail.lessons.length === 1 ? "aula" : "aulas"}
        </span>
      </div>
      <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-paper-50">{trail.title}</h3>
      <p className="text-sm text-ink-700 dark:text-paper-200/70">{trail.description}</p>
    </Link>
  );
}
