import type { ContentLevel } from "@/types/content";

const labels: Record<ContentLevel, string> = {
  iniciante: "Iniciante",
  basico: "Básico",
  intermediario: "Intermediário",
  avancado: "Avançado",
};

const styles: Record<ContentLevel, string> = {
  iniciante: "bg-stream-500/10 text-stream-600 dark:text-stream-400",
  basico: "bg-stream-500/10 text-stream-600 dark:text-stream-400",
  intermediario: "bg-signal-500/10 text-signal-600 dark:text-signal-400",
  avancado: "bg-danger/10 text-danger",
};

export function LevelBadge({ level }: { level: ContentLevel }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${styles[level]}`}>
      {labels[level]}
    </span>
  );
}
