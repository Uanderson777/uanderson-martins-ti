import type { ComponentPropsWithoutRef } from "react";
import { CodeBlock } from "@/components/CodeBlock";

function Callout({
  type = "info",
  children,
}: {
  type?: "info" | "atencao" | "pessoal";
  children: React.ReactNode;
}) {
  const styles = {
    info: "border-stream-500/40 bg-stream-500/5",
    atencao: "border-signal-500/50 bg-signal-500/5",
    pessoal: "border-ink-600/40 bg-ink-600/5 dark:border-paper-200/20",
  };
  const labels = {
    info: "Contexto",
    atencao: "Atenção",
    pessoal: "Relato pessoal",
  };
  return (
    <div className={`my-6 rounded-lg border-l-4 px-4 py-3 text-[0.95rem] ${styles[type]}`}>
      <p className="mb-1 font-semibold">{labels[type]}</p>
      <div className="[&>p]:m-0">{children}</div>
    </div>
  );
}

export const mdxComponents = {
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2 className="mt-10 scroll-mt-24 text-2xl font-semibold text-ink-900 dark:text-paper-50" {...props} />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3 className="mt-8 scroll-mt-24 text-xl font-semibold text-ink-900 dark:text-paper-50" {...props} />
  ),
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a className="font-medium text-stream-600 underline decoration-stream-500/40 underline-offset-2 hover:decoration-stream-600 dark:text-stream-400" {...props} />
  ),
  pre: (props: ComponentPropsWithoutRef<"pre">) => <CodeBlock {...props} />,
  Callout,
};
