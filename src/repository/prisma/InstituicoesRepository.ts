import { Prisma, $Enums, Instituicoes } from "@prisma/client";
import { InstituicoesRepository } from "../interfaces/instituicoes-interface";
import { prisma } from "../../lib/prisma";

export class PrismaInstituicoesRepository implements InstituicoesRepository {
    async createInstituicao(data: Prisma.InstituicoesCreateInput): Promise<Instituicoes | null> {
        try {
            const instituicao = await prisma.instituicoes.create({
                data
            })

            return instituicao
        } catch {
            return null
        }
    }
}