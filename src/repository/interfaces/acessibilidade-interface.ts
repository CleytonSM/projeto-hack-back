import { pontos_acessibilidade } from "@prisma/client"

export interface AcessibilidadeRepository {
    getById(id: string): Promise<pontos_acessibilidade | null>
    getAll(): Promise<pontos_acessibilidade[] | null>
}