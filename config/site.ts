/**
 * CONFIGURAÇÃO CENTRAL DO SITE
 * -----------------------------------------------------------------------
 * Este é o único lugar que você precisa editar para:
 *   - trocar textos institucionais básicos
 *   - inserir seus links reais (LinkedIn, GitHub, YouTube)
 *   - inserir seu ID real do Google AdSense
 *   - inserir seu ID real de Analytics
 *
 * NADA aqui foi inventado: todos os campos sensíveis estão como
 * placeholders explícitos ("COLOCAR_..._AQUI") para você preencher.
 * -----------------------------------------------------------------------
 */

export const siteConfig = {
  name: "Uanderson Martins | Tecnologia & TI",
  shortName: "Uanderson Martins",
  description:
    "Conteúdos, tutoriais, projetos e trilhas sobre programação, Back-End, dados, inteligência artificial, Apache Kafka, Cloud, Service Desk e Help Desk.",
  // Troque pela URL real do site quando fizer o deploy.
  url: "https://COLOCAR-DOMINIO-AQUI.com.br",
  locale: "pt-BR",

  author: {
    name: "Uanderson Martins",
    email: "uandersonmartins3977@outlook.com",
  },

  social: {
    linkedin: "https://www.linkedin.com/in/uanderson-martins-672b45210/",
    github: "https://github.com/Uanderson777/uanderson777.github.io",
    youtube: "https://www.youtube.com/@andersonmartins4037/videos",
    instagram: "https://www.instagram.com/anderson_martinsmoraes/",
    dio: https://web.dio.me/users/andubryanrj/?tab=achievements
    // Número real, em formato E.164 (só dígitos, com código do país) —
    // usado para montar o link https://wa.me/... nos componentes.
    whatsapp: "5521992444504", // +55 21 99244-4504
  },

  // Google AdSense.
  // clientId = seu Publisher ID real, no formato exigido pelo atributo
  // data-ad-client / pelo script do AdSense: "ca-" + Publisher ID.
  // Publisher ID fornecido: pub-4447555957079292 → ca-pub-4447555957079292.
  // Os slots individuais (header/inArticle/sidebar/footer) continuam como
  // placeholder — nenhum Slot ID foi fornecido para uso nesta etapa, então
  // nenhum bloco de anúncio específico é renderizado ainda. Quando você
  // criar os blocos de anúncio no painel do AdSense, cole cada Slot ID
  // abaixo e o espaço correspondente passa a exibir o anúncio automaticamente.
  adsense: {
    clientId: "ca-pub-4447555957079292",
    enabled: true, // com o Publisher ID real preenchido, o script do AdSense já pode carregar
    slots: {
      header: "COLOCAR_SLOT_ID_AQUI",
      inArticle: "COLOCAR_SLOT_ID_AQUI",
      sidebar: "COLOCAR_SLOT_ID_AQUI",
      footer: "COLOCAR_SLOT_ID_AQUI",
    },
  },

  // Analytics (Google Analytics, Plausible, etc.) — NÃO invente o ID.
  analytics: {
    id: "COLOCAR_ANALYTICS_ID_AQUI", // ex: G-XXXXXXXXXX
    enabled: false,
  },
} as const;

export type SiteConfig = typeof siteConfig;
