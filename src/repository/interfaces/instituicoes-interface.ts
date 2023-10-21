import { Instituicoes, Prisma } from "@prisma/client";

export interface InstituicoesRepository {
    createInstituicao(data: Prisma.InstituicoesCreateInput): Promise<Instituicoes | null>
    getInstituicaoById(id: string): Promise<Instituicoes | null>
    getAllInstituicoes(): Promise<Instituicoes[] | null>
    putUsuarioById(id: string, data: Prisma.InstituicoesUpdateInput): Promise<Instituicoes | null>
}