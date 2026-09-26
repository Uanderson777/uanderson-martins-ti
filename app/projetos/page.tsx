import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Projetos práticos de programação, back-end, dados, IA, Kafka e Service Desk.",
  alternates: { canonical: "/projetos" },
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Projetos" }]} />
      <h1 className="font-display text-3xl font-semibold text-ink-900 dark:text-paper-50">Projetos</h1>
      <p className="mt-3 max-w-2xl text-ink-700 dark:text-paper-200/70">
        Projetos práticos, com código, arquitetura e aprendizados reais — nada aqui é simulado.
      </p>

      {projects.length > 0 ? (
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-lg border border-dashed border-ink-700/20 p-8 text-center dark:border-paper-200/20">
          <p className="text-ink-700 dark:text-paper-200/70">
            Nenhum projeto publicado ainda. Assim que um projeto real for concluído, ele aparece aqui — com código,
            arquitetura e link para o repositório.
          </p>
        </div>
      )}
    </div>
  );
}
