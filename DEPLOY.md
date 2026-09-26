# Guia de Deploy

Este projeto é um app Next.js 14 (App Router) padrão — sem dependências específicas de nenhuma plataforma. Abaixo
estão as três formas mais comuns de publicar, da mais simples à mais avançada.

## Opção 1 — Vercel (recomendada, feita pela mesma equipe do Next.js)

1. Suba este projeto para um repositório no GitHub.
2. Acesse [vercel.com](https://vercel.com) e clique em "Add New Project".
3. Selecione o repositório — a Vercel detecta automaticamente que é um projeto Next.js, sem precisar de nenhuma
   configuração extra (não é necessário nenhum arquivo `vercel.json`).
4. Clique em "Deploy". A cada `git push`, um novo deploy é feito automaticamente.
5. Depois do primeiro deploy, configure seu domínio próprio em **Project Settings → Domains**.

## Opção 2 — Netlify

Já incluído neste projeto: o arquivo `netlify.toml` na raiz, configurado com o plugin oficial
`@netlify/plugin-nextjs` (necessário para rotas dinâmicas, API routes e Server Components funcionarem
corretamente — a Netlify instala esse plugin automaticamente ao detectar o arquivo).

1. Suba o projeto para o GitHub.
2. Em [app.netlify.com](https://app.netlify.com), clique em "Add new site" → "Import an existing project".
3. Selecione o repositório — a Netlify já vai ler o `netlify.toml` automaticamente.
4. Clique em "Deploy site".
5. Configure seu domínio em **Site configuration → Domain management**.

## Opção 3 — Cloudflare Pages

Cloudflare Pages precisa de um passo extra de adaptação (`@cloudflare/next-on-pages`), que **não está incluído**
neste projeto por padrão para não adicionar uma dependência que só é usada nesta plataforma específica. Se optar
pela Cloudflare:

```bash
npm install --save-dev @cloudflare/next-on-pages
npx @cloudflare/next-on-pages
```

E configure o comando de build no painel da Cloudflare Pages como `npx @cloudflare/next-on-pages`, com diretório de
saída `.vercel/output/static`. Consulte a documentação oficial da Cloudflare para os detalhes mais atuais desse
processo, já que ele muda com alguma frequência.

## Opção 4 — Servidor Node próprio (VPS, Docker, etc.)

```bash
npm install
npm run build
npm run start
```

Isso sobe um servidor Node na porta 3000 por padrão. Em produção, normalmente você colocaria um proxy reverso
(Nginx, Caddy) na frente, cuidando de HTTPS e do domínio.

## Antes de publicar em qualquer plataforma

1. Preencha `config/site.ts` com a **URL real do domínio** (`url`), essencial para o `sitemap.xml`, `robots.txt` e
   as tags de Open Graph funcionarem corretamente.
2. Preencha os links reais de redes sociais (`social.linkedin`, `social.github`, `social.youtube`).
3. Se for usar Analytics ou os Slot IDs do AdSense, preencha `analytics.id` e `adsense.slots` no mesmo arquivo.
4. Rode `npm run build` uma última vez localmente para confirmar que tudo compila sem erros antes do deploy.

## Variáveis de ambiente

Este projeto **não depende de nenhuma variável de ambiente** para funcionar — toda a configuração fica
centralizada em `config/site.ts`, versionada junto com o código. Isso simplifica o deploy: não há segredos para
configurar manualmente no painel da plataforma escolhida.
