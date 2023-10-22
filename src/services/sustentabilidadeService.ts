import { pontos_sustentabilidade } from "@prisma/client";
import { SustentabilidadeRepository } from "../repository/interfaces/sustentabilidade-interface";
import { AppError } from "../error/AppError";

export class SustentabilidadeService {
    constructor(private sustentabilidadeRepository: SustentabilidadeRepository) { }

    async getById(id: string): Promise<pontos_sustentabilidade | null> {
        const sustentabilidade = await this.sustentabilidadeRepository.getById(id)

        if(!sustentabilidade){
            throw new AppError('Sustentabilidade não encontrada')
        }

        return sustentabilidade
    }

    async getAll(): Promise<pontos_sustentabilidade[]> {
        const sustentabilidades = await this.sustentabilidadeRepository.getAll()

        if(!sustentabilidades){
            throw new AppError('Erro ao listar sustentabilidades')
        }

        return sustentabilidades
    }
}