import { NextResponse } from "next/server";
import { getAllArticles } from "@/lib/content";
import { categories } from "@/lib/categories";
import { projects } from "@/content/projects";
import { trails } from "@/content/trails";

export const dynamic = "force-static";

export type SearchItem = {
  type: "artigo" | "categoria" | "projeto" | "trilha";
  title: string;
  description: string;
  href: string;
};

export function GET() {
  const items: SearchItem[] = [
    ...getAllArticles().map((a) => ({
      type: "artigo" as const,
      title: a.title,
      description: a.summary,
      href: `/artigos/${a.slug}`,
    })),
    ...categories.map((c) => ({
      type: "categoria" as const,
      title: c.title,
      description: c.description,
      href: `/${c.slug}`,
    })),
    ...projects.map((p) => ({
      type: "projeto" as const,
      title: p.name,
      description: p.description,
      href: `/projetos/${p.slug}`,
    })),
    ...trails.map((t) => ({
      type: "trilha" as const,
      title: t.title,
      description: t.description,
      href: `/trilhas/${t.slug}`,
    })),
  ];

  return NextResponse.json(items);
}
