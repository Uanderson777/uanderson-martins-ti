"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { categories, categoryGroups } from "@/lib/categories";
import { siteConfig } from "@/config/site";

const navLinks = [
  { href: "/projetos", label: "Projetos" },
  { href: "/artigos", label: "Artigos" },
  { href: "/trilhas", label: "Trilhas" },
  { href: "/carreira", label: "Carreira" },
  { href: "/sobre", label: "Sobre mim" },
];

export function Header() {
  const [learnOpen, setLearnOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const grouped = Object.entries(categoryGroups).map(([group, label]) => ({
    group,
    label,
    items: categories.filter((c) => c.group === group),
  }));

  return (
    <header className="sticky top-0 z-40 border-b border-ink-700/10 bg-paper-50/90 backdrop-blur dark:border-paper-200/10 dark:bg-ink-950/90">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-center gap-2 font-display text-[1.05rem] font-semibold tracking-tight">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-ink-900 font-mono text-sm text-signal-400 dark:bg-signal-500 dark:text-ink-950">
            &gt;_
          </span>
          <span className="hidden sm:inline">{siteConfig.shortName}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          <div
            className="relative"
            onMouseEnter={() => setLearnOpen(true)}
            onMouseLeave={() => setLearnOpen(false)}
          >
            <button
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-ink-800 hover:bg-ink-700/5 dark:text-paper-100 dark:hover:bg-paper-100/10"
              aria-expanded={learnOpen}
            >
              Aprenda <ChevronDown size={14} />
            </button>
            {learnOpen && (
              <div className="absolute left-0 top-full w-[640px] rounded-lg border border-ink-700/10 bg-paper-50 p-5 shadow-xl dark:border-paper-200/10 dark:bg-ink-900">
                <div className="grid grid-cols-3 gap-5">
                  {grouped.map(({ group, label, items }) => (
                    <div key={group}>
                      <p className="mb-2 text-xs font-semibold text-ink-600 dark:text-paper-200/70">{label}</p>
                      <ul className="space-y-1.5">
                        {items.map((item) => (
                          <li key={item.slug}>
                            <Link
                              href={`/${item.slug}`}
                              className="text-sm text-ink-800 hover:text-signal-600 dark:text-paper-100 dark:hover:text-signal-400"
                            >
                              {item.shortTitle}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-ink-800 hover:bg-ink-700/5 dark:text-paper-100 dark:hover:bg-paper-100/10"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/buscar"
            aria-label="Buscar"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-ink-700/10 text-ink-700 hover:bg-ink-700/5 dark:border-paper-200/15 dark:text-paper-100 dark:hover:bg-paper-100/10"
          >
            <Search size={17} />
          </Link>
          <ThemeToggle />
          <button
            className="flex h-9 w-9 items-center justify-center rounded-md border border-ink-700/10 text-ink-700 lg:hidden dark:border-paper-200/15 dark:text-paper-100"
            aria-label="Abrir menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          className="border-t border-ink-700/10 px-4 py-4 lg:hidden dark:border-paper-200/10"
          aria-label="Navegação mobile"
        >
          <p className="mb-2 mt-3 text-xs font-semibold uppercase tracking-wide text-ink-600 dark:text-paper-200/60">
            Aprenda
          </p>
          <ul className="mb-4 grid grid-cols-2 gap-x-3 gap-y-1.5">
            {categories.map((item) => (
              <li key={item.slug}>
                <Link href={`/${item.slug}`} className="block py-1 text-sm" onClick={() => setMobileOpen(false)}>
                  {item.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="space-y-1 border-t border-ink-700/10 pt-3 dark:border-paper-200/10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="block py-1.5 text-sm font-medium" onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
