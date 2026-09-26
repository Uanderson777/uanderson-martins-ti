import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { categories } from "@/lib/categories";
import { getAllArticles } from "@/lib/content";
import { trails } from "@/content/trails";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticRoutes = [
    "",
    "/sobre",
    "/contato",
    "/artigos",
    "/projetos",
    "/trilhas",
    "/carreira",
    "/certificados",
    "/glossario",
    "/buscar",
    "/politica-de-privacidade",
    "/politica-de-cookies",
    "/termos-de-uso",
    "/acessibilidade",
  ].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));

  const categoryRoutes = categories.map((c) => ({
    url: `${base}/${c.slug}`,
    lastModified: new Date(),
  }));

  const articleRoutes = getAllArticles().map((a) => ({
    url: `${base}/artigos/${a.slug}`,
    lastModified: new Date(a.updated ?? a.date),
  }));

  const trailRoutes = trails.map((t) => ({
    url: `${base}/trilhas/${t.slug}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${base}/projetos/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...categoryRoutes, ...articleRoutes, ...trailRoutes, ...projectRoutes];
}
