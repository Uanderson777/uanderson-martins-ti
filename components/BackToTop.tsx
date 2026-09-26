"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Voltar ao topo"
      className="fixed bottom-6 right-6 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-ink-900 text-paper-50 shadow-lg transition-transform hover:-translate-y-0.5 dark:bg-signal-500 dark:text-ink-950"
    >
      <ArrowUp size={18} />
    </button>
  );
}
