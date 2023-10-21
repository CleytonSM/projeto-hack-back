import { PontosCulturais, Prisma } from "@prisma/client";
import { PontosCulturaisRepository } from "../repository/interfaces/pontosCulturais-interface";



export class PontosCulturaisService {
    constructor(private pontosCulturaisRepository: PontosCulturaisRepository) { }

    async create(data: Prisma.PontosCulturaisUncheckedCreateInput): Promise<PontosCulturais | null> {
        const pontoCultural = await this.pontosCulturaisRepository.create(data)
        if(!pontoCultural) {
            throw new Error('Erro ao criar ponto cultural')
        }
        return pontoCultural
    }
}