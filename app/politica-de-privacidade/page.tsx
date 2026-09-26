import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  alternates: { canonical: "/politica-de-privacidade" },
};

export default function PoliticaPrivacidadePage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Política de Privacidade" }]} />
      <h1 className="font-display text-3xl font-semibold text-ink-900 dark:text-paper-50">Política de Privacidade</h1>

      <div className="prose prose-neutral mt-6 max-w-none dark:prose-invert">
        <p>
          Esta página explica, de forma geral, como o site {siteConfig.name} trata informações dos visitantes. Este
          texto é um modelo educacional e não substitui orientação jurídica especializada.
        </p>

        <h2>Quais dados podem ser coletados</h2>
        <ul>
          <li>Dados enviados voluntariamente pelo formulário de contato (nome, e-mail e mensagem).</li>
          <li>Dados de navegação coletados por ferramentas de analytics, quando ativadas (ex.: páginas visitadas).</li>
          <li>Cookies e identificadores usados por anúncios do Google AdSense, quando ativados.</li>
        </ul>

        <h2>Como os dados são usados</h2>
        <p>
          Os dados de contato são usados apenas para responder à sua mensagem. Dados de navegação e publicidade,
          quando existentes, seguem as políticas das respectivas ferramentas (Google Analytics e Google AdSense).
        </p>

        <h2>Cookies</h2>
        <p>Veja detalhes na nossa <a href="/politica-de-cookies">Política de Cookies</a>.</p>

        <h2>Contato</h2>
        <p>Dúvidas sobre esta política podem ser enviadas pela página de <a href="/contato">Contato</a>.</p>
      </div>
    </div>
  );
}
