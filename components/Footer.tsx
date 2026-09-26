import Link from "next/link";
import { siteConfig } from "@/config/site";

const columns = [
  {
    title: "Conteúdo",
    links: [
      { href: "/artigos", label: "Artigos" },
      { href: "/projetos", label: "Projetos" },
      { href: "/trilhas", label: "Trilhas" },
      { href: "/glossario", label: "Glossário" },
    ],
  },
  {
    title: "Sobre",
    links: [
      { href: "/sobre", label: "Sobre mim" },
      { href: "/carreira", label: "Carreira em TI" },
      { href: "/certificados", label: "Certificados" },
      { href: "/contato", label: "Contato" },
    ],
  },
  {
    title: "Institucional",
    links: [
      { href: "/politica-de-privacidade", label: "Política de Privacidade" },
      { href: "/politica-de-cookies", label: "Política de Cookies" },
      { href: "/termos-de-uso", label: "Termos de Uso" },
      { href: "/acessibilidade", label: "Acessibilidade" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-ink-700/10 bg-paper-100/50 dark:border-paper-200/10 dark:bg-ink-900/40">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-lg font-semibold">{siteConfig.shortName}</p>
            <p className="mt-2 max-w-xs text-sm text-ink-700 dark:text-paper-200/70">
              Portal de aprendizagem em Tecnologia e TI: programação, dados, IA, Kafka, Cloud e Service Desk.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              {siteConfig.social.github && !siteConfig.social.github.startsWith("COLOCAR") && (
                <a href={siteConfig.social.github} className="hover:text-signal-600">
                  GitHub
                </a>
              )}
              {siteConfig.social.linkedin && !siteConfig.social.linkedin.startsWith("COLOCAR") && (
                <a href={siteConfig.social.linkedin} className="hover:text-signal-600">
                  LinkedIn
                </a>
              )}
              {siteConfig.social.youtube && !siteConfig.social.youtube.startsWith("COLOCAR") && (
                <a href={siteConfig.social.youtube} className="hover:text-signal-600">
                  YouTube
                </a>
              )}
              {siteConfig.social.instagram && !siteConfig.social.instagram.startsWith("COLOCAR") && (
                <a href={siteConfig.social.instagram} className="hover:text-signal-600">
                  Instagram
                </a>
              )}   
              {siteConfig.social.dio && !siteConfig.social.dio.startsWith("COLOCAR") && (
                <a href={siteConfig.social.dio} className="hover:text-signal-600">
                   DIO
                 </a>
              )}
              {siteConfig.social.whatsapp && !siteConfig.social.whatsapp.startsWith("COLOCAR") && (
                <a href={`https://wa.me/${siteConfig.social.whatsapp}`} className="hover:text-signal-600">
                  WhatsApp
                </a>
              )}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="mb-3 text-sm font-semibold text-ink-900 dark:text-paper-50">{col.title}</p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-ink-700 hover:text-signal-600 dark:text-paper-200/70 dark:hover:text-signal-400">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-ink-700/10 pt-6 text-xs text-ink-600 sm:flex-row sm:items-center sm:justify-between dark:border-paper-200/10 dark:text-paper-200/60">
          <p>© {year} {siteConfig.name}. Todos os direitos reservados.</p>
          <p>Conteúdo educacional. Tecnologias e interfaces podem mudar — consulte sempre a documentação oficial.</p>
        </div>
      </div>
    </footer>
  );
}
