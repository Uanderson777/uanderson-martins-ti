import type { Metadata } from "next";
import { trails } from "@/content/trails";
import { TrailCard } from "@/components/TrailCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Trilhas de Aprendizagem",
  description: "Sequências guiadas de aulas para aprender programação, dados, IA, Kafka, Cloud e Service Desk.",
  alternates: { canonical: "/trilhas" },
};

export default function TrailsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Trilhas" }]} />
      <h1 className="font-display text-3xl font-semibold text-ink-900 dark:text-paper-50">Trilhas de aprendizagem</h1>
      <p className="mt-3 max-w-2xl text-ink-700 dark:text-paper-200/70">
        Sequências de aulas organizadas do início ao fim. Siga uma trilha completa ou pule direto para o assunto que
        você precisa.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {trails.map((trail) => (
          <TrailCard key={trail.slug} trail={trail} />
        ))}
      </div>
    </div>
  );
}
