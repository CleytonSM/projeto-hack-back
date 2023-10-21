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

    async searchEvento(): Promise<Eventos[] | null> {
        try {
            const eventos = await prisma.eventos.findMany()
            
            return eventos
        } catch {
            return null
        }
    }
}