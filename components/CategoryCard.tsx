import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Category } from "@/lib/categories";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/${category.slug}`}
      className="group flex flex-col justify-between rounded-lg border border-ink-700/10 p-5 transition-colors hover:border-signal-500/50 dark:border-paper-200/10"
    >
      <div>
        <p className="font-medium text-ink-900 dark:text-paper-50">{category.shortTitle}</p>
        <p className="mt-1.5 text-sm text-ink-700 dark:text-paper-200/70">{category.description}</p>
      </div>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-stream-600 dark:text-stream-400">
        Explorar
        <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}
