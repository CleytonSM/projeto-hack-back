import { Eventos, Prisma } from "@prisma/client"
import { prisma } from "../../lib/prisma"
import { EventosRepository } from "../interfaces/eventos-interface"

export class PrismaEventosRepository implements EventosRepository {
    async create(data: Prisma.EventosUncheckedCreateInput): Promise<Eventos | null> {
        try {
            return await prisma.eventos.create({
                data
            })
        } catch {
            return null
        }
    }
}