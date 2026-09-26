import type { Project } from "@/types/content";

/**
 * Lista de projetos reais.
 *
 * Só adicione um projeto aqui quando ele realmente existir (com
 * repositório, código ou demonstração). Nada neste arquivo deve ser
 * preenchido com dados inventados — status, tecnologias e links devem
 * refletir a realidade.
 *
 * Exemplo de estrutura (deixado comentado para você usar como modelo):
 *
 * {
 *   slug: "sistema-de-chamados-service-desk",
 *   name: "Sistema de Chamados — Service Desk",
 *   description: "API de chamados com fila, prioridade e SLA.",
 *   objective: "Aplicar conceitos de Service Desk em um sistema real.",
 *   technologies: ["Python", "FastAPI", "PostgreSQL"],
 *   level: "intermediario",
 *   category: "backend",
 *   date: "2026-01-01",
 *   status: "em-andamento",
 *   githubUrl: "https://github.com/SEU_USUARIO/SEU_REPO",
 *   architecture: "Cliente → API FastAPI → PostgreSQL",
 *   steps: ["Modelagem do banco", "Criação das rotas CRUD", "Autenticação JWT"],
 *   learnings: ["Modelagem de prioridade e SLA", "Validação com Pydantic"],
 *   nextSteps: ["Adicionar dashboard de métricas"],
 * }
 */
export const projects: Project[] = [];
