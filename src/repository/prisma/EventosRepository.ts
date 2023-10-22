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

    async getById(id: string): Promise<any> {
        try {
            const evento = await prisma.eventos.findUnique({
                where: {
                    id
                },
                select: {
                    id: true,
                    nome: true,
                    descricao: true,
                    como_participar: true,
                    data: true,
                    hora_inicio: true,
                    hora_fim: true,
                    imagem: true,
                    ingresso_social: true,
                    status: true,
                    rating: true,
                    count_rating: true,
                    Enderecos: {
                        select: {
                            id: true,
                            rua: true,
                            numero: true,
                            bairro: true,
                            estado: true,
                            cep: true,
                            status: true,
                            Cidades: {
                                select: {
                                    id: true,
                                    cidade: true,
                                }
                            }
                        }
                    }
                }
            })
            return evento
        } catch {
            return null
        }
    }

    async getAll(): Promise<any[] | null> {
        try {
            const eventos = await prisma.eventos.findMany({
                select: {
                    id: true,
                    nome: true,
                    descricao: true,
                    como_participar: true,
                    data: true,
                    hora_inicio: true,
                    hora_fim: true,
                    imagem: true,
                    ingresso_social: true,
                    status: true,
                    rating: true,
                    count_rating: true,
                    Enderecos: {
                        select: {
                            id: true,
                            rua: true,
                            numero: true,
                            bairro: true,
                            estado: true,
                            cep: true,
                            status: true,
                            Cidades: {
                                select: {
                                    id: true,
                                    cidade: true,
                                }
                            }
                        }
                    }
                }
            })
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
            (rating/10)/couting
            const evento = await prisma.eventos.update({
                where: {
                    id
                },
                data: {
                    rating,
                    count_rating: couting
                }
            })

            return evento
        } catch (error) {
            return null
        }
    }
}