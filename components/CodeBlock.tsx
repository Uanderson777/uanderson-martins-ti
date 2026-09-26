"use client";

import { useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

export function CodeBlock(props: React.ComponentPropsWithoutRef<"pre">) {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    const text = preRef.current?.textContent ?? "";
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="group relative my-6 overflow-hidden rounded-lg border border-ink-700/10 dark:border-paper-200/10">
      <button
        onClick={handleCopy}
        aria-label="Copiar código"
        className="absolute right-2 top-2 z-10 rounded-md border border-ink-700/10 bg-paper-50/90 p-1.5 text-ink-700 opacity-0 transition-opacity hover:bg-paper-100 group-hover:opacity-100 dark:border-paper-200/10 dark:bg-ink-800/90 dark:text-paper-100"
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
      </button>
      <pre
        ref={preRef}
        {...props}
        className="overflow-x-auto p-4 text-[0.875rem] leading-relaxed [&_code]:font-mono"
      />
    </div>
  );
}
