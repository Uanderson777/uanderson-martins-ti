import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { Article, ArticleFrontmatter } from "@/types/content";

/**
 * Sistema de conteúdo baseado em arquivos.
 *
 * Cada artigo é um arquivo .mdx em /content/articles com frontmatter.
 * Para adicionar um novo artigo, basta criar um novo arquivo aqui —
 * nenhuma alteração de código é necessária. Isso é o que permite o
 * site crescer de 20 para 1.000+ artigos sem reescrever a aplicação.
 */

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

function readArticleFile(fileName: string): Article {
  const filePath = path.join(ARTICLES_DIR, fileName);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const frontmatter = data as ArticleFrontmatter;
  const stats = readingTime(content);

  return {
    ...frontmatter,
    readingTime: `${Math.max(1, Math.ceil(stats.minutes))} min de leitura`,
    content,
  };
}

export function getAllArticles(): Article[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  const files = fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith(".mdx"));
  return files
    .map(readArticleFile)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getAllArticles().find((a) => a.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return getAllArticles().filter((a) => a.category === categorySlug);
}

export function getArticlesByTag(tag: string): Article[] {
  return getAllArticles().filter((a) => a.tags.includes(tag));
}

export function getRelatedArticles(article: Article, limit = 3): Article[] {
  return getAllArticles()
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, limit);
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  getAllArticles().forEach((a) => a.tags.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
}
