import { pontos_acessibilidade } from "@prisma/client";
import { AcessibilidadeRepository } from "../interfaces/acessibilidade-interface";
import { prisma } from "../../lib/prisma";

export class PrismaAcessibilidadeRepository implements AcessibilidadeRepository {
    async getById(id: string): Promise<pontos_acessibilidade | null> {
        try {
            const acessibilidade = await prisma.pontos_acessibilidade.findUnique({
                where: {
                    id: id
                }
            })
            return acessibilidade
        } catch {
            return null
        }
    }

    async getAll(): Promise<pontos_acessibilidade[] | null> {
        try {
            const acessibilidades = await prisma.pontos_acessibilidade.findMany()

            return acessibilidades
        } catch {
            return null
        }
    }
}