import { Prisma, Instituicoes } from "@prisma/client";
import { InstituicoesRepository } from "../interfaces/instituicoes-interface";
import { prisma } from "../../lib/prisma";
import { hash } from "bcrypt";

export class PrismaInstituicoesRepository implements InstituicoesRepository {
    async createInstituicao(data: Prisma.InstituicoesCreateInput): Promise<Instituicoes | null> {
        try {
            const hashPassword = await hash(data.senha, 5)
            const instituicao = await prisma.instituicoes.create({
                data: {
                    ...data,
                    senha: hashPassword
                }
            })

            return instituicao
        } catch {
            return null
        }
    }

    async getInstituicaoById(id: string): Promise<Instituicoes | null> {
        try {
            const instituicao = await prisma.instituicoes.findUnique({
                where: {
                    id
                }
            })

            return instituicao
        } catch {
            return null
        }
    }

    async getAllInstituicoes(): Promise<Instituicoes[] | null> {
        try {
            const instituicoes = await prisma.instituicoes.findMany()

            return instituicoes
        } catch {
            return null
        }
    }

    async putInstituicoesById(id: string, data: Prisma.InstituicoesUpdateInput): Promise<Instituicoes | null> {
        try {
            const instituicao = await prisma.instituicoes.update({
                where: {
                    id
                },
                data
            })

            return instituicao
        } catch {
            return null
        }
    }
}