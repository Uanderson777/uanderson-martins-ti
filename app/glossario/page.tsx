import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { glossaryTerms } from "@/content/glossary";

export const metadata: Metadata = {
  title: "Glossário de Tecnologia",
  description: "Termos essenciais de programação, dados, redes, Kafka e Service Desk explicados de forma simples.",
  alternates: { canonical: "/glossario" },
};

export default function GlossarioPage() {
  const sorted = [...glossaryTerms].sort((a, b) => a.term.localeCompare(b.term, "pt-BR"));

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Glossário" }]} />
      <h1 className="font-display text-3xl font-semibold text-ink-900 dark:text-paper-50">Glossário de Tecnologia</h1>
      <p className="mt-3 text-ink-700 dark:text-paper-200/70">
        Termos que aparecem com frequência nos conteúdos deste site, explicados de forma direta.
      </p>

      <dl className="mt-10 divide-y divide-ink-700/10 dark:divide-paper-200/10">
        {sorted.map((item) => (
          <div key={item.term} className="py-4">
            <dt className="font-mono text-sm font-semibold text-ink-900 dark:text-paper-50">{item.term}</dt>
            <dd className="mt-1 text-sm text-ink-700 dark:text-paper-200/70">{item.definition}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
