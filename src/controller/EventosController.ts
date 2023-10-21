import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export class EventosController {
    async createEventoHandler(req: FastifyRequest, rep: FastifyReply) {
        const eventoSchema = z.object({
            nome: z.string(),
            descricao: z.string(),
            como_participar: z.string(),
            data: z.coerce.date()
        })
    }

    searchEventoHandler(req: FastifyRequest, rep: FastifyReply) {
        //@ts-ignore
        const keys = Object.keys(req.query)
        //@ts-ignore
        const values = Object.values(req.query)

        const searchParams: any = {}

        for (let i = 0; i < keys.length; i++) {
            switch (keys[i]) {
                case 'descricao':
                    searchParams.descricao = {
                        contains: values[i]
                    }
                    break
                case 'data':
                    if (values[i] === 'PS') {
                        searchParams.data = {

                        }
                    }
                    searchParams.data = {

                    }
            }
        }
    }
}