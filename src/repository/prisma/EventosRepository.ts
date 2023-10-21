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

    async getById(id: string): Promise<Eventos | null> {
        try {
            const evento = await prisma.eventos.findUnique({
                where: {
                    id
                }
            })
            return evento
        } catch {
            return null
        }
    }

    async getAll(): Promise<Eventos[] | null> {
        try {
            const eventos = await prisma.eventos.findMany()
            return eventos
        } catch {
            return null
        }
    }
}