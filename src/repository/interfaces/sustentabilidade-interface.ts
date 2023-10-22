import { pontos_sustentabilidade } from "@prisma/client";

export interface SustentabilidadeRepository {
    getById(id: string): Promise<pontos_sustentabilidade | null>
    getAll(): Promise<pontos_sustentabilidade[] | null>
}