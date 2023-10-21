import { Instituicoes, Prisma } from "@prisma/client";
import { InstituicoesRepository } from "../repository/interfaces/instituicoes-interface";
import { AppError } from "../error/AppError";

export class InstituicoesService {
    constructor(private instituicoesRepository: InstituicoesRepository) { }

    async create(data: Prisma.InstituicoesCreateInput): Promise<Instituicoes | null> {

        const instituicao = await this.instituicoesRepository.createInstituicao(data)

        if (!instituicao) {
            throw new AppError('Erro ao criar instituição')
        }

        return instituicao
    }

    async getInstituicaoById(id: string): Promise<Instituicoes | null> {
        const instituicao = await this.instituicoesRepository.getInstituicaoById(id)

        if (!instituicao) {
            throw new AppError('Instituição não encontrada')
        }

        return instituicao
    }

    async getAllInstituicoes(): Promise<Instituicoes[]> {
        const instituicoes = await this.instituicoesRepository.getAllInstituicoes()

        if (!instituicoes) {
            throw new AppError('Erro ao encontrar instituição.')
        }

        return instituicoes
    }

    async putInstituicaoById(id: string, data: Prisma.InstituicoesUpdateInput): Promise<Instituicoes | null> {
        const instituicao = await this.instituicoesRepository.putInstituicoesById(id, data)

        if (!instituicao) {
            throw new AppError('Erro ao atualizar instituição.')
        }

        return instituicao
    }
}