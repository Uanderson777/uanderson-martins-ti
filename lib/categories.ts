export type Category = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  group: "fundamentos" | "programacao" | "dados-ia" | "streaming" | "infra" | "suporte";
};

/**
 * Taxonomia central do conteúdo. Cada entrada aqui gera automaticamente:
 *  - um card na home ("O que você pode aprender")
 *  - uma página /[slug] com a listagem de aulas/artigos daquela categoria
 *  - uma entrada no menu "Aprenda"
 *
 * Para adicionar uma nova categoria (ex.: Docker, Kubernetes, AWS),
 * basta adicionar um novo objeto neste array — nenhuma outra parte da
 * aplicação precisa ser tocada.
 */
export const categories: Category[] = [
  {
    slug: "fundamentos-de-ti",
    title: "Fundamentos de Tecnologia da Informação",
    shortTitle: "Fundamentos de TI",
    description: "Hardware, software, sistemas operacionais, redes e os conceitos que sustentam tudo o mais.",
    group: "fundamentos",
  },
  {
    slug: "logica-de-programacao",
    title: "Lógica de Programação",
    shortTitle: "Lógica de Programação",
    description: "Algoritmos, variáveis, condicionais, loops e estruturas de dados — a base de qualquer linguagem.",
    group: "fundamentos",
  },
  {
    slug: "python",
    title: "Python",
    shortTitle: "Python",
    description: "Da instalação aos decorators: Python para automação, back-end, dados e IA.",
    group: "programacao",
  },
  {
    slug: "java",
    title: "Java",
    shortTitle: "Java",
    description: "Fundamentos de Java, orientação a objetos, coleções e streams.",
    group: "programacao",
  },
  {
    slug: "backend",
    title: "Desenvolvimento Back-End",
    shortTitle: "Back-End",
    description: "HTTP, APIs REST, autenticação, arquitetura e boas práticas de servidor.",
    group: "programacao",
  },
  {
    slug: "fastapi",
    title: "FastAPI",
    shortTitle: "FastAPI",
    description: "Rotas, Pydantic, banco de dados, autenticação e deploy de APIs em Python.",
    group: "programacao",
  },
  {
    slug: "sql",
    title: "SQL e Banco de Dados",
    shortTitle: "SQL e Banco de Dados",
    description: "Modelagem, consultas, joins e o funcionamento de MySQL e PostgreSQL.",
    group: "dados-ia",
  },
  {
    slug: "git-github",
    title: "Git e GitHub",
    shortTitle: "Git e GitHub",
    description: "Versionamento de código, branches, pull requests e como montar um portfólio no GitHub.",
    group: "programacao",
  },
  {
    slug: "dados",
    title: "Dados",
    shortTitle: "Dados",
    description: "Pandas, NumPy, ETL, Data Warehouse, Data Lake e os fundamentos de análise de dados.",
    group: "dados-ia",
  },
  {
    slug: "inteligencia-artificial",
    title: "Inteligência Artificial",
    shortTitle: "Inteligência Artificial",
    description: "LLMs, prompt engineering, embeddings e como a IA generativa funciona na prática.",
    group: "dados-ia",
  },
  {
    slug: "rag",
    title: "RAG",
    shortTitle: "RAG",
    description: "Retrieval-Augmented Generation: chunking, vector databases e pipelines de recuperação.",
    group: "dados-ia",
  },
  {
    slug: "agentes-de-ia",
    title: "Agentes de IA",
    shortTitle: "Agentes de IA",
    description: "Tool calling, memória, planejamento e como agentes de IA tomam decisões.",
    group: "dados-ia",
  },
  {
    slug: "kafka",
    title: "Apache Kafka",
    shortTitle: "Kafka e Streaming",
    description: "Brokers, producers, consumers, topics e arquitetura orientada a eventos.",
    group: "streaming",
  },
  {
    slug: "confluent-cloud",
    title: "Confluent Cloud",
    shortTitle: "Confluent Cloud",
    description: "Kafka gerenciado na nuvem: clusters, conectores e streaming de dados em tempo real.",
    group: "streaming",
  },
  {
    slug: "cloud",
    title: "Cloud e Azure",
    shortTitle: "Cloud",
    description: "IaaS, PaaS, SaaS e conceitos essenciais de computação em nuvem com Azure.",
    group: "infra",
  },
  {
    slug: "redes",
    title: "Redes",
    shortTitle: "Redes",
    description: "IP, DNS, DHCP, TCP/UDP, firewall e diagnóstico prático de rede.",
    group: "infra",
  },
  {
    slug: "windows",
    title: "Windows",
    shortTitle: "Windows",
    description: "Administração, PowerShell, gerenciamento de dispositivos e troubleshooting no Windows.",
    group: "infra",
  },
  {
    slug: "service-desk",
    title: "Service Desk",
    shortTitle: "Service Desk",
    description: "Incidentes, SLA, escalonamento, ITIL introdutório e a rotina de um Service Desk.",
    group: "suporte",
  },
  {
    slug: "help-desk",
    title: "Help Desk",
    shortTitle: "Help Desk",
    description: "Atendimento ao usuário, diagnóstico e sequências seguras de troubleshooting.",
    group: "suporte",
  },
];

export const categoryGroups: Record<Category["group"], string> = {
  fundamentos: "Fundamentos",
  programacao: "Programação",
  "dados-ia": "Dados & IA",
  streaming: "Streaming & Eventos",
  infra: "Cloud & Infraestrutura",
  suporte: "Service Desk & Help Desk",
};

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}
