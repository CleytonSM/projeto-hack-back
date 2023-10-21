import { Eventos, Prisma } from "@prisma/client";
import { EventosRepository } from "../repository/interfaces/eventos-interface";
import { AppError } from "../error/AppError";
import { EventosProps } from "../@types/Evento";

export class EventosService {
    constructor(private eventosRepository: EventosRepository) { }

    async create(data: Prisma.EventosUncheckedCreateInput): Promise<Eventos> {
        const evento = await this.eventosRepository.create(data)

        if (!evento) {
            throw new AppError('Erro ao criar evento')
        }

        return evento
    }

    async getById(id: string): Promise<Eventos | null> {
        const evento = await this.eventosRepository.getById(id)

        if (!evento) {
            throw new AppError('Evento não encontrado')
        }

        return evento
    }

    async getAll(): Promise<Eventos[] | null> {
        const eventos = await this.eventosRepository.getAll()

        if (!eventos) {
            throw new AppError('Erro ao encontrar eventos.')
        }

        return eventos
    }
}