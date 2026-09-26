import type { ArticleFrontmatter } from "@/types/content";

const labels: Record<ArticleFrontmatter["contentType"], string> = {
  "conhecimento-tecnico": "Conhecimento técnico geral",
  "conteudo-educacional": "Conteúdo educacional",
  "experiencia-pessoal": "Relato de experiência pessoal",
  projeto: "Projeto realizado",
  "conteudo-de-curso": "Conteúdo estudado em curso",
  opiniao: "Opinião / aprendizado pessoal",
};

export function ContentTypeLabel({ type }: { type: ArticleFrontmatter["contentType"] }) {
  return (
    <span className="inline-flex items-center rounded border border-ink-700/15 px-2 py-0.5 text-xs text-ink-600 dark:border-paper-200/15 dark:text-paper-200/60">
      {labels[type]}
    </span>
  );
}
