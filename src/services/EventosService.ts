import { Eventos } from "@prisma/client";
import { EventosRepository } from "../repository/interfaces/eventos-interface";
import { AppError } from "../error/AppError";

export class EventosService {
    constructor(private eventosRepository: EventosRepository) { }

    async create(data: any): Promise<Eventos> {
        const evento = await this.eventosRepository.create(data)

        if (!evento) {
            throw new AppError('Erro ao criar evento')
        }

        return evento
    }
}