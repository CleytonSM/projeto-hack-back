import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";




export class MarcarPresencaController {
    async createMarcarPresencaHandler (req: FastifyRequest, rep: FastifyReply) {
        const marcarPresencaSchema = z.object({
            id_evento: z.string().uuid(),
            id_usuario: z.string().uuid(),
            comentario: z.string().optional(),
            isFavorite: z.boolean().default(false)
        })

        const {id_evento,id_usuario,comentario, isFavorite} = marcarPresencaSchema.parse(req.body)
    
        
    }
}