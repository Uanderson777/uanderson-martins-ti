import Link from "next/link";
import { LevelBadge } from "@/components/LevelBadge";
import type { Project } from "@/types/content";

const statusLabel: Record<Project["status"], string> = {
  planejado: "Planejado",
  "em-andamento": "Em andamento",
  concluido: "Concluído",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projetos/${project.slug}`}
      className="flex flex-col gap-3 rounded-lg border border-ink-700/10 p-5 transition-colors hover:border-stream-500/50 dark:border-paper-200/10"
    >
      <div className="flex items-center justify-between">
        <LevelBadge level={project.level} />
        <span className="text-xs text-ink-500 dark:text-paper-200/50">{statusLabel[project.status]}</span>
      </div>
      <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-paper-50">{project.name}</h3>
      <p className="text-sm text-ink-700 dark:text-paper-200/70">{project.description}</p>
      <div className="flex flex-wrap gap-1.5 pt-1">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded bg-ink-700/5 px-2 py-0.5 font-mono text-[0.7rem] text-ink-700 dark:bg-paper-200/10 dark:text-paper-200/70"
          >
            {tech}
          </span>
        ))}
      </div>
    </Link>
  );
}
