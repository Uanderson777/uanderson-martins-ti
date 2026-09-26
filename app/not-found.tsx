import Link from "next/link";
import { Search, Home, BookOpen, Route } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-24 text-center">
      <p className="font-mono text-sm text-signal-600 dark:text-signal-400">404</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-ink-900 dark:text-paper-50">
        Página não encontrada
      </h1>
      <p className="mt-3 text-ink-700 dark:text-paper-200/70">
        O conteúdo que você procura pode ter mudado de endereço ou ainda não foi publicado.
      </p>

      <div className="mt-8 grid w-full gap-2 sm:grid-cols-2">
        <Link href="/" className="flex items-center justify-center gap-2 rounded-md border border-ink-700/15 px-4 py-2.5 text-sm font-medium dark:border-paper-200/20">
          <Home size={15} /> Voltar para o início
        </Link>
        <Link href="/buscar" className="flex items-center justify-center gap-2 rounded-md border border-ink-700/15 px-4 py-2.5 text-sm font-medium dark:border-paper-200/20">
          <Search size={15} /> Pesquisar
        </Link>
        <Link href="/artigos" className="flex items-center justify-center gap-2 rounded-md border border-ink-700/15 px-4 py-2.5 text-sm font-medium dark:border-paper-200/20">
          <BookOpen size={15} /> Ver artigos
        </Link>
        <Link href="/trilhas" className="flex items-center justify-center gap-2 rounded-md border border-ink-700/15 px-4 py-2.5 text-sm font-medium dark:border-paper-200/20">
          <Route size={15} /> Ver trilhas
        </Link>
      </div>
    </div>
  );
}
