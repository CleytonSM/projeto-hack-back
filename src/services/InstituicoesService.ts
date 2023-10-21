import { Prisma } from "@prisma/client";
import { InstituicoesRepository } from "../repository/interfaces/instituicoes-interface";
import { AppError } from "../error/AppError";

export class InstituicoesService {
    constructor(private instituicoesRepository: InstituicoesRepository) { }

    async create(data: Prisma.InstituicoesCreateInput) {

        const instituicao = await this.instituicoesRepository.createInstituicao(data)

        if(!instituicao){
            throw new AppError('Erro ao criar instituição')
        }

        return instituicao
    }
}