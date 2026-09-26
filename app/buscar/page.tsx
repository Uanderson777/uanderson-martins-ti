"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import type { SearchItem } from "@/app/api/busca/route";

const typeLabel: Record<SearchItem["type"], string> = {
  artigo: "Artigo",
  categoria: "Categoria",
  projeto: "Projeto",
  trilha: "Trilha",
};

export default function SearchPage() {
  const [items, setItems] = useState<SearchItem[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/busca")
      .then((res) => res.json())
      .then(setItems)
      .finally(() => setLoading(false));
  }, []);

  const results = useMemo(() => {
    if (!query.trim()) return items;
    const q = query.toLowerCase();
    return items.filter((item) => item.title.toLowerCase().includes(q) || item.description.toLowerCase().includes(q));
  }, [items, query]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Buscar" }]} />
      <h1 className="font-display text-3xl font-semibold text-ink-900 dark:text-paper-50">
        Encontre o que você quer aprender
      </h1>

      <div className="relative mt-6">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400 dark:text-paper-200/40" />
        <input
          type="search"
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar artigos, projetos, trilhas ou categorias…"
          className="w-full rounded-lg border border-ink-700/15 bg-paper-50 py-3 pl-10 pr-4 text-ink-900 placeholder:text-ink-400 focus:border-signal-500 dark:border-paper-200/15 dark:bg-ink-900 dark:text-paper-50"
        />
      </div>

      <div className="mt-6">
        {loading ? (
          <p className="text-sm text-ink-500 dark:text-paper-200/50">Carregando…</p>
        ) : results.length > 0 ? (
          <ul className="divide-y divide-ink-700/10 dark:divide-paper-200/10">
            {results.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="flex flex-col gap-1 py-4 hover:text-signal-600 dark:hover:text-signal-400">
                  <span className="flex items-center gap-2">
                    <span className="rounded bg-ink-700/5 px-1.5 py-0.5 text-[0.7rem] font-medium text-ink-600 dark:bg-paper-200/10 dark:text-paper-200/60">
                      {typeLabel[item.type]}
                    </span>
                    <span className="font-medium text-ink-900 dark:text-paper-50">{item.title}</span>
                  </span>
                  <span className="text-sm text-ink-600 dark:text-paper-200/60">{item.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-ink-500 dark:text-paper-200/50">Nenhum resultado para &ldquo;{query}&rdquo;.</p>
        )}
      </div>
    </div>
  );
}
