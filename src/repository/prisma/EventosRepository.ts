import { Eventos, Prisma } from "@prisma/client"
import { prisma } from "../../lib/prisma"
import { EventosRepository } from "../interfaces/eventos-interface"

export class PrismaEventosRepository implements EventosRepository {
    async create(data: Prisma.EventosUncheckedCreateInput): Promise<Eventos | null> {
        try {
            console.log(data)
            const evento = await prisma.eventos.create({
                data
            })

            return evento
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

    async searchEvento(search: any): Promise<Eventos[] | null> {
        try {
            const eventos = await prisma.eventos.findMany({
                where: search
            })

            return eventos
        } catch {
            return null
        }
    }
    async updateRating(id: string, rating: number, couting: number): Promise<Eventos | null> {
        try {
            const nota = (rating/10)/couting
            couting++
            console.log(id)
            const evento = await prisma.eventos.update({
                where: {
                    id
                },
                data: {
                    rating: nota,
                    count_rating: couting
                }
            })
            
            
            return evento
        } catch (error) {
            return null
        }
    }
}