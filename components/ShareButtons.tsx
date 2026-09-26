"use client";

import { useState } from "react";
import { Check, Link2 } from "lucide-react";

export function ShareButtons({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    { label: "WhatsApp", href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}` },
    { label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}` },
    { label: "X", href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}` },
  ];

  async function handleCopy() {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="flex flex-wrap items-center gap-2 text-sm">
      <span className="text-ink-600 dark:text-paper-200/60">Compartilhar:</span>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-ink-700/10 px-2.5 py-1 text-ink-800 hover:border-stream-500/50 dark:border-paper-200/15 dark:text-paper-100"
        >
          {link.label}
        </a>
      ))}
      <button
        onClick={handleCopy}
        className="flex items-center gap-1 rounded-md border border-ink-700/10 px-2.5 py-1 text-ink-800 hover:border-stream-500/50 dark:border-paper-200/15 dark:text-paper-100"
      >
        {copied ? <Check size={13} /> : <Link2 size={13} />}
        {copied ? "Copiado" : "Copiar link"}
      </button>
    </div>
  );
}
