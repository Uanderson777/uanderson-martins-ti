import type { Metadata } from "next";
import { MessageCircle, Mail } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com Uanderson Martins.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Contato" }]} />
      <h1 className="font-display text-3xl font-semibold text-ink-900 dark:text-paper-50">Contato</h1>
      <p className="mt-3 text-ink-700 dark:text-paper-200/70">
        Tem alguma dúvida, sugestão de conteúdo ou quer trocar uma ideia? Preencha o formulário abaixo ou fale
        diretamente pelo WhatsApp ou e-mail.
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        {siteConfig.social.whatsapp && !siteConfig.social.whatsapp.includes("COLOCAR") && (
          <a
            href={`https://wa.me/${siteConfig.social.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-ink-700/15 px-4 py-2.5 text-sm font-medium text-ink-900 hover:border-stream-500/50 dark:border-paper-200/20 dark:text-paper-50"
          >
            <MessageCircle size={16} /> Falar pelo WhatsApp
          </a>
        )}
        {siteConfig.author.email && !siteConfig.author.email.includes("COLOCAR") && (
          <a
            href={`mailto:${siteConfig.author.email}`}
            className="inline-flex items-center gap-2 rounded-md border border-ink-700/15 px-4 py-2.5 text-sm font-medium text-ink-900 hover:border-stream-500/50 dark:border-paper-200/20 dark:text-paper-50"
          >
            <Mail size={16} /> Enviar e-mail
          </a>
        )}
      </div>

      <div className="mt-8">
        <ContactForm />
      </div>
    </div>
  );
}
