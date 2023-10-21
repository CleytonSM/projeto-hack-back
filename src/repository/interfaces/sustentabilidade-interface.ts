import { pontos_sustentabilidade } from "@prisma/client";

export interface SustentabilidadeInterface {
    getById(id: string): Promise<pontos_sustentabilidade | null>
    getAll(): Promise<pontos_sustentabilidade[] | null>
}