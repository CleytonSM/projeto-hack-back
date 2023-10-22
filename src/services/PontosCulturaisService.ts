import { PontosCulturais, Prisma } from "@prisma/client";
import { PontosCulturaisRepository } from "../repository/interfaces/pontosCulturais-interface";
import { PontoCulturalProps } from "../@types/PontoCulturalReturn";



export class PontosCulturaisService {
    constructor(private pontosCulturaisRepository: PontosCulturaisRepository) { }

    async create(data: Prisma.PontosCulturaisUncheckedCreateInput): Promise<PontosCulturais | null> {
        const pontoCultural = await this.pontosCulturaisRepository.create(data)
        if (!pontoCultural) {
            throw new Error('Erro ao criar ponto cultural')
        }
        return pontoCultural
    }

    async getById(id: string): Promise<PontoCulturalProps | null> {
        const pontoCultural = await this.pontosCulturaisRepository.getById(id)
        if (!pontoCultural) {
            throw new Error('Erro ao encontrar ponto cultural')
        }
        return pontoCultural
    }

    async getAll(): Promise<PontoCulturalProps[] | null> {
        const pontosCulturais = await this.pontosCulturaisRepository.getAll()
        if (!pontosCulturais) {
            throw new Error('Erro ao listar pontos culturais')
        }
        
        return pontosCulturais as PontoCulturalProps[]
    }
}