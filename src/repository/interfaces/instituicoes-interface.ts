import { Instituicoes, Prisma } from "@prisma/client";

export interface InstituicoesRepository {
    createInstituicao(data: Prisma.InstituicoesCreateInput): Promise<Instituicoes | null>
}