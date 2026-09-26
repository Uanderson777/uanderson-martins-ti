import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Sobre mim",
  description: "A trajetória de estudos e desenvolvimento profissional de Uanderson Martins em Tecnologia da Informação.",
  alternates: { canonical: "/sobre" },
};

export default function SobrePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Sobre mim" }]} />
      <h1 className="font-display text-3xl font-semibold text-ink-900 dark:text-paper-50">Minha trajetória em Tecnologia</h1>

      <div className="prose prose-neutral mt-6 max-w-none dark:prose-invert">
        <p>
          Sou Uanderson Martins e estou construindo minha trajetória profissional em Tecnologia da Informação,
          estudando e desenvolvendo conhecimentos em programação, Back-End, dados, inteligência artificial, Service
          Desk e suporte de TI.
        </p>
        <p>
          Este site reúne o que venho estudando — de fundamentos de TI e lógica de programação até Python, SQL,
          FastAPI, Apache Kafka e inteligência artificial — organizado como conteúdo público para quem também está
          aprendendo.
        </p>

        <h2>Formação</h2>
        <p>
          Estou em formação em <strong>Análise e Desenvolvimento de Sistemas</strong>, curso que tem sido a base
          para os estudos que compartilho neste site — da lógica de programação e estrutura de dados aos
          fundamentos de banco de dados e engenharia de software.
        </p>

        <h2>Áreas de estudo</h2>
        <p>
          Ao longo da formação e por conta própria, venho estudando e praticando principalmente nas seguintes
          frentes:
        </p>
        <ul>
          <li>
            <strong>Desenvolvimento Back-End</strong> — Python, SQL, APIs REST e FastAPI, com foco em construir
            sistemas funcionais do banco de dados até a API.
          </li>
          <li>
            <strong>Dados</strong> — modelagem e consultas em SQL, além de Python aplicado à análise de dados
            (Pandas e NumPy).
          </li>
          <li>
            <strong>Inteligência Artificial</strong> — os fundamentos de LLMs, embeddings, RAG e agentes de IA,
            entendendo tanto os conceitos quanto as aplicações práticas.
          </li>
          <li>
            <strong>Service Desk e Help Desk</strong> — incidentes, SLA, escalonamento e boas práticas de
            atendimento e suporte ao usuário.
          </li>
          <li>
            <strong>Versionamento e colaboração</strong> — Git e GitHub, como parte de qualquer fluxo de
            desenvolvimento profissional.
          </li>
        </ul>
        <p>
          Todo o conteúdo publicado aqui reflete exatamente isso: estudo ativo e aplicado, não experiência
          profissional já consolidada — a distinção fica clara em cada artigo, marcada pelo seu tipo de conteúdo.
        </p>

        <h2>Objetivo profissional</h2>
        <p>
          Estou em busca de oportunidades na área de Tecnologia da Informação — seja como porta de entrada em
          Service Desk e suporte técnico, seja em desenvolvimento Back-End — onde eu possa aplicar na prática o
          que venho estudando e continuar evoluindo com desafios reais. Publicar este material é, em parte, uma
          forma de documentar e consolidar esse aprendizado de forma transparente.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-4 text-sm">
        {[
          { label: "LinkedIn", href: siteConfig.social.linkedin },
          { label: "GitHub", href: siteConfig.social.github },
          { label: "YouTube", href: siteConfig.social.youtube },
          { label: "Instagram", href: siteConfig.social.instagram },
          { label: "WhatsApp", href: `https://wa.me/${siteConfig.social.whatsapp}` },
          { label: "E-mail", href: `mailto:${siteConfig.author.email}` },
        ]
          .filter((link) => !link.href.includes("COLOCAR"))
          .map((link) => (
            <a key={link.label} href={link.href} className="font-medium text-stream-600 dark:text-stream-400">
              {link.label}
            </a>
          ))}
      </div>
    </div>
  );
}
