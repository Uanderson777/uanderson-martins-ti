import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Acessibilidade",
  alternates: { canonical: "/acessibilidade" },
};

export default function AcessibilidadePage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Acessibilidade" }]} />
      <h1 className="font-display text-3xl font-semibold text-ink-900 dark:text-paper-50">Acessibilidade</h1>

      <div className="prose prose-neutral mt-6 max-w-none dark:prose-invert">
        <p>Este site busca seguir boas práticas de acessibilidade, incluindo:</p>
        <ul>
          <li>HTML semântico e hierarquia correta de títulos.</li>
          <li>Contraste de cores adequado em modo claro e escuro.</li>
          <li>Navegação completa por teclado, com estados de foco visíveis.</li>
          <li>Texto alternativo (ALT) em imagens informativas.</li>
          <li>Links com texto descritivo, evitando termos como &ldquo;clique aqui&rdquo;.</li>
          <li>Respeito à preferência do sistema por movimento reduzido.</li>
        </ul>
        <p>
          Se você encontrar alguma barreira de acessibilidade neste site, entre em contato pela página de{" "}
          <a href="/contato">Contato</a> — o retorno é muito bem-vindo.
        </p>
      </div>
    </div>
  );
}
