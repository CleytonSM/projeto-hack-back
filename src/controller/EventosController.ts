import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export class EventosController {
    async createEventoHandler(req: FastifyRequest, rep: FastifyReply) {
        const eventoSchema = z.object({
            nome: z.string(),
            descricao: z.string(),
            como_participar: z.string(),
            data: z.date()
        })
    }
}