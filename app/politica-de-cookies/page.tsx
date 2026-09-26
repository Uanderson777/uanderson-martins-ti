import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Política de Cookies",
  alternates: { canonical: "/politica-de-cookies" },
};

export default function PoliticaCookiesPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Política de Cookies" }]} />
      <h1 className="font-display text-3xl font-semibold text-ink-900 dark:text-paper-50">Política de Cookies</h1>

      <div className="prose prose-neutral mt-6 max-w-none dark:prose-invert">
        <p>
          Cookies são pequenos arquivos armazenados pelo navegador que ajudam sites a lembrar preferências e a
          funcionar corretamente.
        </p>

        <h2>Cookies usados neste site</h2>
        <ul>
          <li><strong>Preferência de tema (claro/escuro):</strong> armazenada localmente no navegador.</li>
          <li>
            <strong>Analytics</strong> (quando ativado em <code>config/site.ts</code>): cookies de medição de
            audiência do Google Analytics.
          </li>
          <li>
            <strong>Publicidade</strong> (quando ativado): cookies do Google AdSense, usados para exibir anúncios,
            possivelmente personalizados conforme as políticas do Google.
          </li>
        </ul>

        <h2>Como gerenciar cookies</h2>
        <p>
          Você pode bloquear ou apagar cookies diretamente nas configurações do seu navegador a qualquer momento.
        </p>
      </div>
    </div>
  );
}
