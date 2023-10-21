import { Instituicoes, Prisma } from "@prisma/client";

export interface InstituicoesRepository {
    createInstituicao(data: Prisma.InstituicoesCreateInput): Promise<Instituicoes | null>
    getInstituicaoById(id: string): Promise<Instituicoes | null>
    getAllInstituicoes(): Promise<Instituicoes[] | null>
    putInstituicoesById(id: string, data: Prisma.InstituicoesUpdateInput): Promise<Instituicoes | null>
}