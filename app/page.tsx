import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CategoryCard } from "@/components/CategoryCard";
import { ArticleCard } from "@/components/ArticleCard";
import { TrailCard } from "@/components/TrailCard";
import { AdHeader } from "@/components/ads/AdSlot";
import { categories } from "@/lib/categories";
import { getAllArticles } from "@/lib/content";
import { trails } from "@/content/trails";

export default function HomePage() {
  const latestArticles = getAllArticles().slice(0, 3);
  const featuredTrails = trails.slice(0, 3);

  return (
    <>
      {/* HERO — split layout: headline à esquerda, "terminal" à direita.
          O terminal é o elemento de destaque único da página: representa
          literalmente o assunto do site (programação/TI), não é decoração. */}
      <section className="border-b border-ink-700/10 dark:border-paper-200/10">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:py-24">
          <div>
            <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-5xl dark:text-paper-50">
              Aprenda Tecnologia, Programação e TI na prática
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ink-700 dark:text-paper-200/70">
              Conteúdos, tutoriais, projetos e conhecimentos sobre desenvolvimento de sistemas,
              dados, inteligência artificial, infraestrutura, Service Desk e muito mais.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/fundamentos-de-ti"
                className="rounded-md bg-ink-900 px-5 py-2.5 text-sm font-medium text-paper-50 transition-transform hover:-translate-y-0.5 dark:bg-signal-500 dark:text-ink-950"
              >
                Começar a aprender
              </Link>
              <Link
                href="/projetos"
                className="rounded-md border border-ink-700/15 px-5 py-2.5 text-sm font-medium text-ink-900 hover:bg-ink-700/5 dark:border-paper-200/20 dark:text-paper-50 dark:hover:bg-paper-100/10"
              >
                Ver projetos
              </Link>
              <Link
                href="/sobre"
                className="rounded-md px-5 py-2.5 text-sm font-medium text-ink-700 hover:text-signal-600 dark:text-paper-200/70 dark:hover:text-signal-400"
              >
                Conheça minha trajetória
              </Link>
            </div>
          </div>

          <div className="rounded-xl border border-ink-700/10 bg-ink-950 p-5 font-mono text-[0.83rem] leading-relaxed text-paper-100 shadow-xl dark:border-paper-200/10">
            <div className="mb-3 flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-warn/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-ok/70" />
            </div>
            <p className="text-stream-400">$ trilha --iniciar fundamentos-de-ti</p>
            <p className="mt-1 text-paper-200/60">→ hardware, software, redes, dados</p>
            <p className="mt-3 text-stream-400">$ trilha --iniciar python</p>
            <p className="mt-1 text-paper-200/60">→ variáveis, funções, POO, FastAPI</p>
            <p className="mt-3 text-stream-400">$ trilha --iniciar service-desk</p>
            <p className="mt-1 text-paper-200/60">→ incidentes, SLA, N1 → N2 → N3</p>
            <p className="mt-3 text-signal-400">
             status: em evolução contínua<span className="animate-blink">_</span>
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="rounded-lg border border-ink-700/10 bg-paper-100/40 p-6 dark:border-paper-200/10 dark:bg-ink-900/40">
          <p className="max-w-2xl text-[0.95rem] leading-relaxed text-ink-700 dark:text-paper-200/70">
            Sou <strong className="text-ink-900 dark:text-paper-50">Uanderson Martins</strong> e estou construindo
            minha trajetória profissional em Tecnologia da Informação, estudando e desenvolvendo conhecimentos em
            programação, Back-End, dados, inteligência artificial, Service Desk e suporte de TI.
          </p>
        </div>
      </section>

      {/* O que você pode aprender */}
      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink-900 dark:text-paper-50">
              O que você pode aprender
            </h2>
            <p className="mt-1 text-sm text-ink-600 dark:text-paper-200/60">
              Escolha uma área e siga no seu próprio ritmo.
            </p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <AdHeader />
      </section>

      {/* Trilhas em destaque */}
      {featuredTrails.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-10">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="font-display text-2xl font-semibold text-ink-900 dark:text-paper-50">
              Trilhas de aprendizagem
            </h2>
            <Link href="/trilhas" className="flex items-center gap-1 text-sm font-medium text-stream-600 dark:text-stream-400">
              Ver todas <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTrails.map((trail) => (
              <TrailCard key={trail.slug} trail={trail} />
            ))}
          </div>
        </section>
      )}

      {/* Artigos recentes */}
      {latestArticles.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-10">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="font-display text-2xl font-semibold text-ink-900 dark:text-paper-50">
              Artigos recentes
            </h2>
            <Link href="/artigos" className="flex items-center gap-1 text-sm font-medium text-stream-600 dark:text-stream-400">
              Ver todos <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {latestArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
