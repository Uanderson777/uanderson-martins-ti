export type ContentLevel = "iniciante" | "basico" | "intermediario" | "avancado";

export type ArticleFrontmatter = {
  title: string;
  slug: string;
  summary: string;
  category: string; // deve bater com Category.slug em lib/categories.ts
  tags: string[];
  level: ContentLevel;
  readingTime?: string; // calculado automaticamente, não precisa preencher
  date: string; // YYYY-MM-DD — data de publicação
  updated?: string; // YYYY-MM-DD — data da última atualização
  author: string;
  // Tipo de conteúdo — deixa explícito para o leitor o que está lendo,
  // conforme pedido no briefing (nunca misturar experiência pessoal
  // com conhecimento técnico geral sem indicar isso).
  contentType:
    | "conhecimento-tecnico"
    | "conteudo-educacional"
    | "experiencia-pessoal"
    | "projeto"
    | "conteudo-de-curso"
    | "opiniao";
  sources?: { label: string; url: string }[];
};

export type Article = ArticleFrontmatter & {
  content: string; // MDX bruto
};

export type Project = {
  slug: string;
  name: string;
  description: string;
  objective: string;
  technologies: string[];
  level: ContentLevel;
  category: string;
  date?: string;
  status: "planejado" | "em-andamento" | "concluido";
  githubUrl?: string;
  demoUrl?: string;
  architecture?: string;
  steps?: string[];
  learnings?: string[];
  nextSteps?: string[];
};

export type TrailLesson = {
  title: string;
  articleSlug?: string; // se já existir o artigo correspondente
  done?: boolean;
};

export type Trail = {
  slug: string;
  title: string;
  description: string;
  level: ContentLevel;
  lessons: TrailLesson[];
};
