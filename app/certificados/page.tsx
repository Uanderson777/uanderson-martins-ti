import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { certificates, type Certificate, type CertificateCategory } from "@/content/certificates";

export const metadata: Metadata = {
  title: "Certificados",
  description: "Cursos e certificados de conclusão de Uanderson Martins.",
  alternates: { canonical: "/certificados" },
};

const categoryLabels: Record<CertificateCategory, string> = {
  programacao: "Programação",
  backend: "Back-End",
  dados: "Dados",
  ia: "Inteligência Artificial",
  cloud: "Cloud",
  "service-desk": "Service Desk",
  redes: "Redes",
  "banco-de-dados": "Banco de Dados",
  "git-github": "Git e GitHub",
  devops: "DevOps",
  carreira: "Carreira e Portfólio",
  outros: "Outros",
};

// Ordem de exibição das categorias na seção "Todos os cursos e certificados"
const categoryOrder: CertificateCategory[] = [
  "service-desk",
  "backend",
  "programacao",
  "banco-de-dados",
  "ia",
  "cloud",
  "dados",
  "git-github",
  "devops",
  "redes",
  "carreira",
  "outros",
];

const kindWeight: Record<Certificate["kind"], number> = { curso: 0, modulo: 1, extra: 2 };
const kindLabel: Record<Certificate["kind"], string> = { curso: "Curso", modulo: "Módulo", extra: "Complementar" };

function sortWithinCategory(items: Certificate[]) {
  return [...items].sort((a, b) => kindWeight[a.kind] - kindWeight[b.kind]);
}

export default function CertificadosPage() {
  const featured = certificates.filter((c) => c.featured);
  const byCategory = certificates.reduce<Partial<Record<CertificateCategory, Certificate[]>>>((acc, cert) => {
    (acc[cert.category] ??= []).push(cert);
    return acc;
  }, {});

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Certificados" }]} />
      <h1 className="font-display text-3xl font-semibold text-ink-900 dark:text-paper-50">
        Cursos e Certificados
      </h1>
      <p className="mt-3 max-w-2xl text-ink-700 dark:text-paper-200/70">
        Registros reais de cursos e certificados de conclusão, majoritariamente na plataforma{" "}
        <strong>DIO</strong>, organizados por área.
      </p>

      <div className="mt-4 rounded-lg border border-ink-700/10 bg-paper-100/40 p-4 text-sm text-ink-700 dark:border-paper-200/10 dark:bg-ink-900/40 dark:text-paper-200/70">
        <p>
          Os itens abaixo são <strong>certificados de conclusão de curso na DIO</strong> (e um curso concluído em
          outra plataforma de vídeo-aulas) — não são certificações oficiais emitidas diretamente por fabricantes
          (Microsoft, AWS, etc.), exceto quando isso for indicado de forma explícita. Em particular, os cursos e
          simulados relacionados a <strong>AZ-204</strong> e <strong>AI-900</strong> são preparações e simulados
          para essas certificações Microsoft — não representam a certificação oficial já obtida. Os certificados
          da DIO ficam disponíveis para download diretamente na plataforma; por isso, nenhum link é exibido aqui.
        </p>
      </div>

      {/* ===== Em destaque ===== */}
      <section className="mt-10">
        <h2 className="mb-1 text-xl font-semibold text-ink-900 dark:text-paper-50">Em destaque</h2>
        <p className="mb-4 text-sm text-ink-600 dark:text-paper-200/60">
          Cursos mais diretamente relacionados a Back-End, Python, SQL, IA e Service Desk.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {featured.map((cert) => (
            <div
              key={`${cert.name}-${cert.date}`}
              className="rounded-lg border border-signal-500/30 bg-signal-500/5 p-4"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="rounded bg-ink-700/5 px-2 py-0.5 text-[0.7rem] font-medium text-ink-600 dark:bg-paper-200/10 dark:text-paper-200/60">
                  {categoryLabels[cert.category]}
                </span>
                <span className="text-xs text-ink-500 dark:text-paper-200/50">{cert.date}</span>
              </div>
              <p className="mt-2 font-medium text-ink-900 dark:text-paper-50">{cert.name}</p>
              <p className="mt-0.5 text-xs text-ink-600 dark:text-paper-200/60">
                {cert.institution}
                {cert.workloadHours ? ` · ${cert.workloadHours}h` : ""}
              </p>
              {cert.description && (
                <p className="mt-2 text-sm text-ink-700 dark:text-paper-200/70">{cert.description}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ===== Todos os cursos e certificados ===== */}
      <section className="mt-14">
        <h2 className="mb-1 text-xl font-semibold text-ink-900 dark:text-paper-50">
          Todos os cursos e certificados
        </h2>
        <p className="mb-4 text-sm text-ink-600 dark:text-paper-200/60">
          Registro completo, incluindo módulos individuais e conteúdos complementares (lives, questionários,
          materiais de apoio, semanas de trilha), organizados por área. Clique em uma área para expandir.
        </p>

        <div className="space-y-3">
          {categoryOrder
            .filter((cat) => byCategory[cat]?.length)
            .map((cat) => {
              const items = sortWithinCategory(byCategory[cat]!);
              return (
                <details key={cat} className="group rounded-lg border border-ink-700/10 dark:border-paper-200/10">
                  <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-medium text-ink-900 dark:text-paper-50">
                    <span>{categoryLabels[cat]}</span>
                    <span className="text-xs font-normal text-ink-500 dark:text-paper-200/50">
                      {items.length} {items.length === 1 ? "registro" : "registros"}
                    </span>
                  </summary>
                  <ul className="divide-y divide-ink-700/10 border-t border-ink-700/10 px-4 dark:divide-paper-200/10 dark:border-paper-200/10">
                    {items.map((cert) => (
                      <li
                        key={`${cert.name}-${cert.date}`}
                        className={`flex flex-wrap items-center justify-between gap-x-3 gap-y-1 py-2 ${
                          cert.kind === "extra" ? "opacity-60" : ""
                        }`}
                      >
                        <span
                          className={
                            cert.kind === "curso"
                              ? "font-medium text-ink-900 dark:text-paper-50"
                              : cert.kind === "modulo"
                                ? "text-sm text-ink-800 dark:text-paper-100"
                                : "text-xs text-ink-500 dark:text-paper-200/50"
                          }
                        >
                          {cert.name}
                        </span>
                        <span className="flex shrink-0 items-center gap-2 text-xs text-ink-500 dark:text-paper-200/50">
                          {cert.kind !== "modulo" && (
                            <span className="rounded bg-ink-700/5 px-1.5 py-0.5 dark:bg-paper-200/10">
                              {kindLabel[cert.kind]}
                            </span>
                          )}
                          {cert.date}
                        </span>
                      </li>
                    ))}
                  </ul>
                </details>
              );
            })}
        </div>
      </section>
    </div>
  );
}
