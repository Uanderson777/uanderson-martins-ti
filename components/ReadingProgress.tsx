"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const total = scrollHeight - clientHeight;
      setProgress(total > 0 ? (scrollTop / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-16 z-30 h-0.5 w-full bg-ink-700/5 dark:bg-paper-200/10">
      <div
        className="reading-progress h-full bg-signal-500 transition-[width]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
