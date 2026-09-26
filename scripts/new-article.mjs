#!/usr/bin/env node
// Uso: npm run new:artigo -- "Título do artigo" categoria-slug
// Gera um novo arquivo em content/articles com o frontmatter já preenchido.

import fs from "node:fs";
import path from "node:path";

const [, , titleArg, categoryArg] = process.argv;

if (!titleArg) {
  console.error('Uso: npm run new:artigo -- "Título do artigo" categoria-slug');
  process.exit(1);
}

const slug = titleArg
  .toLowerCase()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/[^a-z0-9\s-]/g, "")
  .trim()
  .replace(/\s+/g, "-");

const today = new Date().toISOString().slice(0, 10);

const template = `---
title: "${titleArg}"
slug: "${slug}"
summary: "Escreva aqui um resumo de 1-2 frases."
category: "${categoryArg ?? "fundamentos-de-ti"}"
tags: []
level: "iniciante"
date: "${today}"
author: "Uanderson Martins"
contentType: "conteudo-educacional"
---

Escreva a introdução do artigo aqui.

## Próximo tópico

Conteúdo...

## Resumo

Resumo do artigo.
`;

const filePath = path.join(process.cwd(), "content", "articles", `${slug}.mdx`);

if (fs.existsSync(filePath)) {
  console.error(`Já existe um artigo em ${filePath}`);
  process.exit(1);
}

fs.writeFileSync(filePath, template, "utf-8");
console.log(`Artigo criado em: content/articles/${slug}.mdx`);
