import { siteConfig } from "@/config/site";

type AdPlacement = "header" | "inArticle" | "sidebar" | "footer";

const placementLabel: Record<AdPlacement, string> = {
  header: "Anúncio",
  inArticle: "Anúncio dentro do artigo",
  sidebar: "Anúncio",
  footer: "Anúncio",
};

/**
 * Componente central de anúncios.
 *
 * Enquanto siteConfig.adsense.enabled for false (padrão), nada é
 * renderizado — nenhum script de terceiros é carregado. Quando você
 * preencher seu clientId/slot reais em /config/site.ts e mudar
 * `enabled` para true, o espaço passa a renderizar o bloco <ins> do
 * AdSense automaticamente.
 *
 * Por design, nenhum destes componentes é usado:
 *  - sobre blocos de código
 *  - sobre botões de navegação/CTA
 *  - dentro do menu
 */
function AdSlot({ placement, className = "" }: { placement: AdPlacement; className?: string }) {
  const { adsense } = siteConfig;
  const slot = adsense.slots[placement];

  if (!adsense.enabled || adsense.clientId.startsWith("COLOCAR") || slot.startsWith("COLOCAR")) {
    // Placeholder visível apenas em desenvolvimento, para você validar o
    // espaço reservado sem depender do AdSense estar ativo.
    if (process.env.NODE_ENV !== "production") {
      return (
        <div
          className={`flex min-h-[90px] items-center justify-center rounded-md border border-dashed border-ink-700/20 text-xs text-ink-500 dark:border-paper-200/20 dark:text-paper-200/50 ${className}`}
        >
          Espaço reservado — {placementLabel[placement]} (AdSense não configurado)
        </div>
      );
    }
    return null;
  }

  return (
    <ins
      className={`adsbygoogle block ${className}`}
      style={{ display: "block" }}
      data-ad-client={adsense.clientId}
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}

export const AdHeader = (props: { className?: string }) => <AdSlot placement="header" {...props} />;
export const AdInArticle = (props: { className?: string }) => <AdSlot placement="inArticle" {...props} />;
export const AdSidebar = (props: { className?: string }) => <AdSlot placement="sidebar" {...props} />;
export const AdFooter = (props: { className?: string }) => <AdSlot placement="footer" {...props} />;
