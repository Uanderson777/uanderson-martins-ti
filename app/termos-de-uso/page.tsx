import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Termos de Uso",
  alternates: { canonical: "/termos-de-uso" },
};

export default function TermosDeUsoPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Termos de Uso" }]} />
      <h1 className="font-display text-3xl font-semibold text-ink-900 dark:text-paper-50">Termos de Uso</h1>

      <div className="prose prose-neutral mt-6 max-w-none dark:prose-invert">
        <h2>Sobre o conteúdo</h2>
        <p>
          O conteúdo publicado em {siteConfig.name} tem finalidade educacional. Tecnologias, ferramentas e interfaces
          mudam com o tempo — consulte sempre a documentação oficial de cada tecnologia para informações atualizadas.
        </p>

        <h2>Uso do conteúdo</h2>
        <p>
          Os textos, exemplos de código e materiais deste site são de autoria de {siteConfig.author.name}, salvo
          quando indicado o contrário. Você pode usar os exemplos de código para fins de estudo.
        </p>

        <h2>Sem garantias</h2>
        <p>
          O conteúdo é fornecido &ldquo;como está&rdquo;, sem garantias de que estará livre de erros. Ao aplicar qualquer
          conhecimento aqui apresentado em ambientes de produção, faça sua própria validação.
        </p>
      </div>
    </div>
  );
}
