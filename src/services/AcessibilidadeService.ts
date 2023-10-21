import { pontos_acessibilidade } from "@prisma/client";
import { AcessibilidadeRepository } from "../repository/interfaces/acessibilidade-interface";
import { AppError } from "../error/AppError";

export class AcessibilidadeService {
    constructor(private acessibilidadeRepository: AcessibilidadeRepository) { }
    
    async getById(id: string): Promise<pontos_acessibilidade | null> {
        const acessibilidade = await this.acessibilidadeRepository.getById(id)
        return acessibilidade
    }

    async getAll(): Promise<pontos_acessibilidade[]> {
        const acessibilidades = await this.acessibilidadeRepository.getAll()

        if (!acessibilidades) {
            throw new AppError('Erro ao listar acessibilidades')
        }

        return acessibilidades;
    }
}