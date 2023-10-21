import { pontos_sustentabilidade } from "@prisma/client"
import { SustentabilidadeInterface } from "../interfaces/sustentabilidade-interface"
import { prisma } from "../../lib/prisma"

export class PrismaSustentabilidadesRepository implements SustentabilidadeInterface {
    async getById(id: string): Promise<pontos_sustentabilidade | null> {
        try {
            const sustentabilidade = await prisma.pontos_sustentabilidade.findUnique({
                where: {
                    id: id
                }
            })
            return sustentabilidade
        } catch {
            return null
        }
    }

    async getAll(): Promise<pontos_sustentabilidade[] | null> {
        try {
            const sustentabilidades = await prisma.pontos_sustentabilidade.findMany()
            
            return sustentabilidades
        } catch {
            return null
        }
    }
}