import { Enderecos, Prisma } from "@prisma/client"
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
}