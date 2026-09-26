"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const form = new FormData(e.currentTarget);
    const nome = String(form.get("nome") || "").trim();
    const email = String(form.get("email") || "").trim();
    const assunto = String(form.get("assunto") || "").trim();
    const mensagem = String(form.get("mensagem") || "").trim();

    if (!nome || !email || !mensagem) {
      setError("Preencha nome, e-mail e mensagem.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Informe um e-mail válido.");
      return;
    }

    setStatus("sending");
    try {
      // TODO: substitua por uma chamada real (API route, Formspree, etc.)
      // quando você definir onde as mensagens devem chegar. Nenhum
      // endpoint foi inventado nesta etapa.
      await new Promise((resolve) => setTimeout(resolve, 600));
      console.log({ nome, email, assunto, mensagem });
      setStatus("sent");
    } catch {
      setStatus("error");
      setError("Não foi possível enviar agora. Tente novamente em instantes.");
    }
  }

  if (status === "sent") {
    return (
      <p className="rounded-lg border border-ok/30 bg-ok/5 p-4 text-sm text-ok">
        Mensagem enviada. Obrigado pelo contato!
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className="mb-1 block text-sm font-medium">Nome</label>
          <input id="nome" name="nome" type="text" required className="w-full rounded-md border border-ink-700/15 bg-paper-50 px-3 py-2 text-sm focus:border-signal-500 dark:border-paper-200/15 dark:bg-ink-900" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium">E-mail</label>
          <input id="email" name="email" type="email" required className="w-full rounded-md border border-ink-700/15 bg-paper-50 px-3 py-2 text-sm focus:border-signal-500 dark:border-paper-200/15 dark:bg-ink-900" />
        </div>
      </div>
      <div>
        <label htmlFor="assunto" className="mb-1 block text-sm font-medium">Assunto</label>
        <input id="assunto" name="assunto" type="text" className="w-full rounded-md border border-ink-700/15 bg-paper-50 px-3 py-2 text-sm focus:border-signal-500 dark:border-paper-200/15 dark:bg-ink-900" />
      </div>
      <div>
        <label htmlFor="mensagem" className="mb-1 block text-sm font-medium">Mensagem</label>
        <textarea id="mensagem" name="mensagem" rows={5} required className="w-full rounded-md border border-ink-700/15 bg-paper-50 px-3 py-2 text-sm focus:border-signal-500 dark:border-paper-200/15 dark:bg-ink-900" />
      </div>

      {error && <p className="text-sm text-danger">{error}</p>}

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-md bg-ink-900 px-5 py-2.5 text-sm font-medium text-paper-50 disabled:opacity-60 dark:bg-signal-500 dark:text-ink-950"
      >
        {status === "sending" ? "Enviando…" : "Enviar mensagem"}
      </button>
    </form>
  );
}
