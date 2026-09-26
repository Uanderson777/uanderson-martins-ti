import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Carreira em TI",
  description: "Como começar em TI, montar portfólio, organizar o GitHub e se preparar para entrevistas.",
  alternates: { canonical: "/carreira" },
};

const topics = [
  { title: "Como começar em TI?", body: "Escolha uma porta de entrada — Service Desk, programação ou dados — e siga uma trilha até o fim antes de trocar de assunto." },
  { title: "Como estudar programação?", body: "Pratique escrevendo código todos os dias, mesmo que pouco. Prefira projetos pequenos e completos a projetos grandes e inacabados." },
  { title: "Como criar um portfólio?", body: "Publique seus projetos no GitHub com um README claro: o que o projeto faz, quais tecnologias usa e como rodar." },
  { title: "Service Desk como porta de entrada", body: "Service Desk expõe você a incidentes reais, sistemas, rede e atendimento — uma base prática para quase qualquer caminho em TI." },
  { title: "Como se preparar para entrevistas técnicas", body: "Revise os fundamentos da vaga, tenha 2–3 projetos que você conhece profundamente e pratique explicar decisões técnicas em voz alta." },
  { title: "Como explicar um projeto sem inventar experiência", body: "Seja específico: diga o que você estudou, o que você construiu e o que ainda não teve oportunidade de aplicar profissionalmente." },
];

export default function CarreiraPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Carreira" }]} />
      <h1 className="font-display text-3xl font-semibold text-ink-900 dark:text-paper-50">Carreira em TI</h1>
      <p className="mt-3 text-ink-700 dark:text-paper-200/70">
        Orientações práticas para quem está começando ou migrando de carreira para Tecnologia da Informação.
      </p>

      <div className="mt-10 space-y-8">
        {topics.map((topic) => (
          <div key={topic.title}>
            <h2 className="text-lg font-semibold text-ink-900 dark:text-paper-50">{topic.title}</h2>
            <p className="mt-1.5 text-ink-700 dark:text-paper-200/70">{topic.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
