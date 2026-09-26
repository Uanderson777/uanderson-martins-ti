import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LevelBadge } from "@/components/LevelBadge";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return { title: project.name, description: project.description, alternates: { canonical: `/projetos/${project.slug}` } };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Projetos", href: "/projetos" }, { label: project.name }]} />

      <div className="mb-2 flex items-center gap-2">
        <LevelBadge level={project.level} />
      </div>
      <h1 className="font-display text-3xl font-semibold text-ink-900 dark:text-paper-50">{project.name}</h1>
      <p className="mt-3 text-ink-700 dark:text-paper-200/70">{project.description}</p>

      <dl className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-ink-500 dark:text-paper-200/50">Objetivo</dt>
          <dd className="mt-1 text-sm text-ink-800 dark:text-paper-100">{project.objective}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-ink-500 dark:text-paper-200/50">Tecnologias</dt>
          <dd className="mt-1 flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <span key={t} className="rounded bg-ink-700/5 px-2 py-0.5 font-mono text-xs dark:bg-paper-200/10">{t}</span>
            ))}
          </dd>
        </div>
      </dl>

      {project.architecture && (
        <div className="mt-8">
          <h2 className="mb-2 text-lg font-semibold text-ink-900 dark:text-paper-50">Arquitetura</h2>
          <p className="rounded-lg bg-ink-700/5 p-4 font-mono text-sm dark:bg-paper-200/10">{project.architecture}</p>
        </div>
      )}

      {project.steps && project.steps.length > 0 && (
        <div className="mt-8">
          <h2 className="mb-2 text-lg font-semibold text-ink-900 dark:text-paper-50">Passo a passo</h2>
          <ol className="list-decimal space-y-1 pl-5 text-ink-800 dark:text-paper-100">
            {project.steps.map((step) => <li key={step}>{step}</li>)}
          </ol>
        </div>
      )}

      {project.learnings && project.learnings.length > 0 && (
        <div className="mt-8">
          <h2 className="mb-2 text-lg font-semibold text-ink-900 dark:text-paper-50">Aprendizados</h2>
          <ul className="list-disc space-y-1 pl-5 text-ink-800 dark:text-paper-100">
            {project.learnings.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      )}

      <div className="mt-8 flex flex-wrap gap-3">
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="rounded-md border border-ink-700/15 px-4 py-2 text-sm font-medium dark:border-paper-200/20">
            Ver no GitHub
          </a>
        )}
        {project.demoUrl && (
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="rounded-md bg-ink-900 px-4 py-2 text-sm font-medium text-paper-50 dark:bg-signal-500 dark:text-ink-950">
            Ver demonstração
          </a>
        )}
      </div>
    </div>
  );
}
