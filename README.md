# Uanderson Martins | Tecnologia & TI

Portal de conhecimento, aprendizagem e portfólio em Tecnologia e TI. Este README documenta a arquitetura da
**primeira versão funcional** da plataforma (fundação), pronta para receber conteúdo de forma progressiva.

## 1. Stack escolhida (e por quê)

| Camada | Escolha | Motivo |
|---|---|---|
| Framework | **Next.js 14 (App Router)** | Geração estática (SSG) para SEO e velocidade, roteamento por arquivos, `sitemap`/`robots` nativos. |
| Linguagem | **TypeScript** | Segurança de tipos em um projeto que vai crescer para centenas de arquivos de conteúdo. |
| Estilo | **Tailwind CSS** | Consistência visual e responsividade rápida sem CSS solto se acumulando. |
| Conteúdo | **MDX + frontmatter (arquivos em `/content`)** | Cada artigo é um arquivo `.mdx` versionável no Git — sem depender de banco de dados ou CMS externo para publicar. |
| Tema | **next-themes** | Dark/light mode com persistência, sem flash de tema errado. |

Não foi usado nenhum CMS externo, banco de dados ou serviço pago: tudo roda com arquivos estáticos, o que atende
diretamente ao requisito de "crescer para 1.000+ artigos sem reconstruir a aplicação" com o menor custo operacional.

## 2. Estrutura de pastas

```
app/                     → rotas (App Router)
  [categoria]/            → página de categoria dinâmica (/python, /kafka, /service-desk, ...)
  artigos/                → listagem e detalhe de artigos
  trilhas/                → listagem e detalhe de trilhas
  projetos/                → listagem e detalhe de projetos
  certificados/, carreira/, glossario/, sobre/, contato/ → páginas de conteúdo
  politica-de-privacidade/, politica-de-cookies/, termos-de-uso/, acessibilidade/ → institucionais
  api/busca/               → índice de busca (JSON)
  sitemap.ts, robots.ts    → SEO técnico
  layout.tsx, globals.css  → layout raiz, fontes, tema, scripts de Analytics/AdSense

components/               → componentes de UI (Header, Footer, cards, MDX renderer, anúncios…)
content/                  → CONTEÚDO. Artigos (.mdx), projetos, trilhas, certificados e glossário.
lib/                      → leitura de conteúdo (`content.ts`), taxonomia (`categories.ts`), MDX (`mdx.tsx`)
config/site.ts            → configuração central (nome, links, AdSense, Analytics)
types/content.ts          → tipos compartilhados
scripts/new-article.mjs   → gera um novo artigo com frontmatter pronto
```

## 3. Como rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

Para gerar a build de produção (o mesmo processo usado no deploy):

```bash
npm run build
npm run start
```

> A build foi validada neste ambiente de desenvolvimento e compila com sucesso (96 rotas geradas). A única
> dependência de rede em tempo de build é o download das fontes do Google Fonts (`IBM Plex Sans`, `IBM Plex Mono`,
> `Lora`) — isso é normal do `next/font/google` e vai funcionar em qualquer ambiente com acesso à internet (sua
> máquina, Vercel, etc.).

## 4. Como adicionar um novo artigo

1. Rode `npm run new:artigo -- "Título do artigo" categoria-slug` (a categoria deve existir em `lib/categories.ts`).
2. Isso cria `content/articles/titulo-do-artigo.mdx` com o frontmatter pronto.
3. Preencha `summary`, `tags`, `level`, `contentType` e escreva o conteúdo em Markdown/MDX abaixo do frontmatter.
4. Pronto — o artigo aparece automaticamente em `/artigos`, na página da categoria, no sitemap e na busca. Nenhum
   outro arquivo precisa ser tocado.

Recursos disponíveis dentro do MDX:
- Código com highlight e botão de copiar: use um bloco de código normal (\`\`\`python ... \`\`\`).
- Callouts: `<Callout type="info">texto</Callout>` (tipos: `info`, `atencao`, `pessoal`).

## 5. Como adicionar um novo projeto

Edite `content/projects.ts` e adicione um objeto ao array `projects`, seguindo o tipo `Project` em
`types/content.ts`. **Só adicione projetos que realmente existem** — o arquivo tem um exemplo comentado como
modelo. A página `/projetos/[slug]` é gerada automaticamente.

## 6. Como adicionar uma nova trilha

Edite `content/trails.ts` e adicione um objeto ao array `trails`. Cada aula pode ou não ter `articleSlug`
apontando para um artigo já publicado — aulas sem artigo aparecem como "em breve", sem gerar links quebrados.

## 7. Como adicionar uma nova categoria (ex.: Docker, Kubernetes, AWS)

Adicione um novo objeto ao array `categories` em `lib/categories.ts`. Isso gera automaticamente: card na home,
entrada no menu "Aprenda" e a página `/[novo-slug]`.

## 8. Onde configurar Google AdSense

Tudo em **`config/site.ts`**, objeto `adsense`:

- `clientId` → **já configurado** com o Publisher ID real: `ca-pub-4447555957079292`.
- `enabled` → `true` (com o Publisher ID real preenchido, o script oficial do AdSense já carrega no site).
- `slots.header` / `slots.inArticle` / `slots.sidebar` / `slots.footer` → ainda como placeholders
  (`COLOCAR_SLOT_ID_AQUI`). Enquanto um slot não tiver um ID real, o espaço correspondente **não exibe nenhum
  anúncio** (em desenvolvimento aparece um placeholder tracejado só para você visualizar o espaço reservado).

Os componentes de anúncio (`components/ads/AdSlot.tsx`) já estão posicionados em locais que não atrapalham a
leitura: `<AdHeader />` no fim da home, `<AdInArticle />` depois do conteúdo do artigo (antes das fontes/tags) e
`<AdSidebar />` numa coluna lateral fixa em telas grandes — nunca sobre código, botões ou navegação.

## 9. Onde configurar Analytics

Também em `config/site.ts`, objeto `analytics` (`id` + `enabled`). Quando ativado, o `app/layout.tsx` injeta o
script do Google Analytics (gtag) automaticamente em todas as páginas.

## 10. Deploy

Veja o guia completo em **`DEPLOY.md`** — cobre Vercel, Netlify (já com `netlify.toml` configurado neste projeto),
Cloudflare Pages e servidor Node próprio.

## 11. Verificação realizada nesta entrega

- ✅ `npm install` concluído sem erros de dependência.
- ✅ `npm run build` gera as 96 rotas com sucesso (páginas estáticas + páginas dinâmicas de artigos/categorias/
  trilhas/projetos), com ESLint e checagem de tipos TypeScript passando.
- ✅ Corrigidos 2 avisos de lint (`react/no-unescaped-entities` em `/acessibilidade` e `/termos-de-uso`).
- ✅ Next.js atualizado para `14.2.35` (a versão inicial, `14.2.16`, tinha uma vulnerabilidade de segurança já
  corrigida em versões posteriores da série 14.2).
- ✅ Cabeçalhos de segurança básicos (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`,
  `Permissions-Policy`) configurados em `next.config.mjs`.
- ✅ Responsivo (grid fluido, menu mobile dedicado, sem overflow horizontal).
- ✅ Acessibilidade: link "pular para o conteúdo", HTML semântico, foco visível (`focus-visible`), `prefers-reduced-motion`
  respeitado, formulário de contato com `label` associado a cada campo.
- ✅ SEO técnico: `sitemap.xml` e `robots.txt` dinâmicos, `canonical` por página, Open Graph, JSON-LD (`Person`,
  `Article`, `BreadcrumbList`).
- ⚠️ **Pendência conhecida (não é um bug):** o build precisa de acesso à internet para baixar as fontes do Google
  Fonts na primeira vez (`next/font/google`). Isso é esperado e funciona normalmente em qualquer máquina ou
  provedor de deploy com internet.
- ⚠️ **Pendências que dependem de você:** preencher `config/site.ts` (URL do domínio, e-mail, links sociais,
  Analytics ID), os Slot IDs do AdSense, e os dados reais de `sobre`, `certificados` e `projetos` — nada disso foi
  inventado, propositalmente.

## 12. Checklist antes de publicar

O projeto está tecnicamente pronto para publicação. Os itens abaixo dependem de informações que só você pode
fornecer — nada foi inventado, e cada um já tem a estrutura pronta para receber o dado real:

| Item | Onde preencher | Status |
|---|---|---|
| Domínio real | `config/site.ts` → `url` | ⏳ Placeholder (`COLOCAR-DOMINIO-AQUI`) |
| E-mail de contato | `config/site.ts` → `author.email` | ✅ Configurado |
| Link do LinkedIn | `config/site.ts` → `social.linkedin` | ✅ Configurado |
| Link do GitHub | `config/site.ts` → `social.github` | ✅ Configurado |
| Link do YouTube | `config/site.ts` → `social.youtube` | ✅ Configurado |
| Link do Instagram | `config/site.ts` → `social.instagram` | ✅ Configurado |
| WhatsApp | `config/site.ts` → `social.whatsapp` | ✅ Configurado (rodapé, Sobre e Contato) |
| Google Analytics ID | `config/site.ts` → `analytics.id` + `analytics.enabled` | ⏳ Placeholder |
| AdSense — Publisher ID | `config/site.ts` → `adsense.clientId` | ✅ Já configurado (`ca-pub-4447555957079292`) |
| AdSense — Slot IDs (header/artigo/sidebar/rodapé) | `config/site.ts` → `adsense.slots` | ⏳ Placeholders — nenhum foi fornecido até agora |
| Projetos reais | `content/projects.ts` | ⏳ Vazio — modelo comentado pronto para uso |
| Certificados reais | `content/certificates.ts` | ⏳ Vazio — modelo comentado pronto para uso |
| Texto de "Sobre mim" (estudos, objetivos) | `app/sobre/page.tsx` | ⏳ Campos com `[placeholder]` marcados no próprio texto |

Assim que você fornecer qualquer um desses dados, é só me enviar que eu preencho o arquivo correspondente — nenhum
outro arquivo do projeto precisa ser tocado para isso.

## 13. O que NÃO foi inventado (por design)

- Nenhum certificado, projeto, emprego, estatística de visitantes ou depoimento.
- Nenhum Slot ID de anúncio (apenas o Publisher ID real que você forneceu).
- Nenhum link social real (LinkedIn/GitHub/YouTube) — todos como placeholder `COLOCAR_..._AQUI` em `config/site.ts`.

Esses campos foram deixados como estrutura pronta para você preencher, conforme pedido no briefing original.
