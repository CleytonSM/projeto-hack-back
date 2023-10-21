import { Enderecos, Prisma } from "@prisma/client"
import { prisma } from "../../lib/prisma"
import { EnderecosRepository } from "../interfaces/enderecos-interface"



export class PrismaEnderecosRepository implements EnderecosRepository {
    async createEndereco(data: Prisma.EnderecosCreateInput): Promise<Enderecos | null> {
       try {
            const endereco = await prisma.enderecos.create({
                data
            })
            return endereco
       } catch (error) {
            return null
       }
    }

    async addIdPontoCultural(id_ponto_cultural: string, id_endereco: string): Promise<Enderecos | null> {
        try {
            const endereco = await prisma.enderecos.update({
                where: {
                    id: id_endereco
                },
                data: {
                    id_ponto_cultural
                }
            })
            return endereco
        } catch (error) {
            return null
        }
    }
}