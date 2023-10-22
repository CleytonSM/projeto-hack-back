import { Cidades, Enderecos, Prisma } from "@prisma/client"
import { prisma } from "../../lib/prisma"
import { EnderecosRepository } from "../interfaces/enderecos-interface"

export class PrismaEnderecosRepository implements EnderecosRepository {
    async createEndereco(data: Prisma.EnderecosUncheckedCreateInput): Promise<Enderecos | null> {
        try {
            return await prisma.enderecos.create({
                data
            })
        } catch (error) {
            return null
        }
    }
    async createCidades(data: Prisma.CidadesUncheckedCreateInput[]): Promise<any | null> {
        try {
            const cidades = await prisma.cidades.createMany({
                data
            })

            return cidades
        } catch {
            return null
        }
    }

    async getAllCidades(): Promise<Cidades[] | null> {
        try {
            const cidades = await prisma.cidades.findMany()

            return cidades
        } catch {
            return null
        }
    }

    async getCidadeById(id: number): Promise<Cidades | null> {
        try {
            const cidade = await prisma.cidades.findUnique({
                where: {
                    id
                }
            })

            return cidade
        } catch {
            return null
        }
    }
}