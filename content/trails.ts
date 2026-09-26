import type { Trail } from "@/types/content";

/**
 * Trilhas de aprendizagem.
 *
 * Cada trilha é só uma sequência de aulas. Se `articleSlug` apontar para
 * um artigo existente em /content/articles, a aula vira um link real;
 * caso contrário, aparece como "em breve". Isso permite publicar a
 * trilha inteira desde já e ir preenchendo o conteúdo aos poucos, sem
 * nunca ter um link quebrado.
 */
export const trails: Trail[] = [
  {
    slug: "programacao-do-zero",
    title: "Programação do Zero",
    description: "Da lógica de programação aos primeiros programas — para quem nunca programou.",
    level: "iniciante",
    lessons: [
      { title: "O que é Tecnologia da Informação?", articleSlug: "o-que-e-tecnologia-da-informacao" },
      { title: "O que é programação?", articleSlug: "o-que-e-programacao" },
      { title: "O que é algoritmo?", articleSlug: "o-que-e-algoritmo" },
      { title: "Variáveis e tipos de dados", articleSlug: "variaveis-e-tipos-de-dados" },
      { title: "Condicionais (if / else)", articleSlug: "condicionais-em-programacao" },
      { title: "Loops (for / while)", articleSlug: "loops-em-programacao" },
      { title: "Funções", articleSlug: "funcoes-em-programacao" },
      { title: "Listas e dicionários", articleSlug: "listas-e-dicionarios" },
    ],
  },
  {
    slug: "python-do-zero-ao-backend",
    title: "Python do Zero ao Back-End",
    description: "Python básico, orientação a objetos, APIs com FastAPI e banco de dados.",
    level: "iniciante",
    lessons: [
      { title: "Instalando Python e configurando o ambiente", articleSlug: "como-instalar-python" },
      { title: "Variáveis em Python", articleSlug: "variaveis-em-python" },
      { title: "Condicionais e loops em Python", articleSlug: "condicionais-e-loops-em-python" },
      { title: "Funções em Python", articleSlug: "funcoes-em-python" },
      { title: "Programação orientada a objetos em Python", articleSlug: "poo-em-python" },
      { title: "O que é uma API REST?", articleSlug: "o-que-e-uma-api-rest" },
      { title: "Criando uma API com FastAPI", articleSlug: "criando-uma-api-com-fastapi" },
      { title: "Conectando a um banco de dados", articleSlug: "conectando-a-um-banco-de-dados" },
    ],
  },
  {
    slug: "sql-e-banco-de-dados",
    title: "SQL e Banco de Dados",
    description: "Modelagem, consultas SQL e os fundamentos de bancos relacionais.",
    level: "basico",
    lessons: [
      { title: "O que é um banco de dados?", articleSlug: "o-que-e-um-banco-de-dados" },
      { title: "Tabelas, colunas e chaves primárias", articleSlug: "tabelas-colunas-e-chaves-primarias" },
      { title: "SELECT, WHERE e ORDER BY", articleSlug: "select-where-e-order-by" },
      { title: "JOINs (INNER, LEFT, RIGHT)", articleSlug: "joins-inner-left-right" },
      { title: "INSERT, UPDATE e DELETE", articleSlug: "insert-update-e-delete" },
      { title: "Modelagem e normalização", articleSlug: "modelagem-e-normalizacao" },
    ],
  },
  {
    slug: "service-desk-n1",
    title: "Service Desk N1",
    description: "A rotina de um analista de Service Desk: incidentes, SLA e escalonamento.",
    level: "iniciante",
    lessons: [
      { title: "O que é Service Desk?", articleSlug: "o-que-e-service-desk" },
      { title: "Diferença entre Help Desk e Service Desk", articleSlug: "diferenca-entre-help-desk-e-service-desk" },
      { title: "Incidentes, solicitações e problemas", articleSlug: "incidentes-solicitacoes-e-problemas" },
      { title: "O que é SLA?", articleSlug: "o-que-e-sla" },
      { title: "Prioridade, impacto e urgência", articleSlug: "prioridade-impacto-e-urgencia" },
      { title: "Escalonamento (N1 → N2 → N3)", articleSlug: "escalonamento-n1-n2-n3" },
      { title: "Base de conhecimento e documentação", articleSlug: "base-de-conhecimento-e-documentacao" },
    ],
  },
  {
    slug: "help-desk-e-suporte-tecnico",
    title: "Help Desk e Suporte Técnico",
    description: "Diagnóstico prático: rede, Windows, hardware e atendimento ao usuário.",
    level: "iniciante",
    lessons: [
      { title: "Sequência segura de diagnóstico" },
      { title: "Internet não funciona: por onde começar" },
      { title: "Wi-Fi não conecta" },
      { title: "Windows não inicia" },
      { title: "Problemas de driver e periféricos" },
    ],
  },
  {
    slug: "dados",
    title: "Dados",
    description: "Python para dados, Pandas, ETL e os conceitos de Data Warehouse e Data Lake.",
    level: "intermediario",
    lessons: [
      { title: "O que é análise de dados?", articleSlug: "o-que-e-analise-de-dados" },
      { title: "Python para dados: Pandas e NumPy", articleSlug: "python-para-dados-pandas-e-numpy" },
      { title: "O que é ETL e ELT?", articleSlug: "o-que-e-etl-e-elt" },
      { title: "Data Warehouse, Data Lake e Lakehouse", articleSlug: "data-warehouse-data-lake-e-lakehouse" },
    ],
  },
  {
    slug: "inteligencia-artificial",
    title: "Inteligência Artificial",
    description: "LLMs, prompt engineering, RAG e agentes — do conceito à aplicação prática.",
    level: "intermediario",
    lessons: [
      { title: "O que é Inteligência Artificial?", articleSlug: "o-que-e-inteligencia-artificial" },
      { title: "O que são LLMs?", articleSlug: "o-que-sao-llms" },
      { title: "O que são embeddings?", articleSlug: "o-que-sao-embeddings" },
      { title: "O que é RAG?", articleSlug: "o-que-e-rag" },
      { title: "O que são agentes de IA?", articleSlug: "o-que-sao-agentes-de-ia" },
    ],
  },
  {
    slug: "rag-e-agentes-de-ia",
    title: "RAG e Agentes de IA",
    description: "Chunking, vector databases, pipelines de recuperação e tool calling.",
    level: "avancado",
    lessons: [
      { title: "Por que RAG existe?" },
      { title: "Chunking e embeddings na prática" },
      { title: "Vector databases" },
      { title: "Construindo um pipeline RAG" },
      { title: "Agentes com tool calling" },
    ],
  },
  {
    slug: "apache-kafka-e-streaming",
    title: "Apache Kafka e Streaming",
    description: "Brokers, producers, consumers e arquitetura orientada a eventos.",
    level: "intermediario",
    lessons: [
      { title: "O que é Apache Kafka?" },
      { title: "Producer, Topic, Partition e Consumer" },
      { title: "Consumer Groups" },
      { title: "O que é Event-Driven Architecture?" },
      { title: "Confluent Cloud: Kafka gerenciado" },
    ],
  },
  {
    slug: "cloud",
    title: "Cloud",
    description: "IaaS, PaaS, SaaS e os conceitos essenciais de computação em nuvem.",
    level: "basico",
    lessons: [
      { title: "O que é Cloud Computing?" },
      { title: "IaaS, PaaS e SaaS" },
      { title: "O que é Azure?" },
    ],
  },
  {
    slug: "git-e-github",
    title: "Git e GitHub",
    description: "Versionamento, branches e como montar um portfólio de projetos no GitHub.",
    level: "iniciante",
    lessons: [
      { title: "O que é Git?", articleSlug: "o-que-e-git" },
      { title: "O que é GitHub?", articleSlug: "o-que-e-github" },
      { title: "git init, add e commit", articleSlug: "git-init-add-e-commit" },
      { title: "Branches e merge", articleSlug: "branches-e-merge" },
      { title: "Como montar um portfólio no GitHub", articleSlug: "como-montar-um-portfolio-no-github" },
    ],
  },
];
