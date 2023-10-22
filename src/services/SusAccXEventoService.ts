import { AppError } from "../error/AppError";
import { prisma } from "../lib/prisma";
import { SusAccXEventoRepository } from "../repository/interfaces/sustetabilidadeXEvento-interface";

export interface SustentabilidadeXEvento {
    id_sustentabilidade: string;
    id_evento: string;
}

export interface AcessibilidadeXEvento {
    id_acessibilidade: string;
    id_evento: string;
}

export class SusAccService {
    constructor (private susAccXEventoRepository: SusAccXEventoRepository){}

    async createSustentabilidade(arraySustentabilidade: SustentabilidadeXEvento[]): Promise<any> {
        try {
            const sustentabilidade = await this.susAccXEventoRepository.createSustentabilidade(arraySustentabilidade)  
            
            return sustentabilidade
        } catch (error) {
            throw new AppError('Erro ao criar sustentabilidade')
        }
    }

    async createAcessibilidade(arrayAcessibilidade: AcessibilidadeXEvento[]): Promise<any> {
        try {
            const acessibilidade = await this.susAccXEventoRepository.createAcessibilidade(arrayAcessibilidade)

            return acessibilidade
        } catch (error) {
            throw new AppError('Erro ao criar sustentabilidade')
        }
    }
}