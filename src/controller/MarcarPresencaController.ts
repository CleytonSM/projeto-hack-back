import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeMarcarPresencaService } from "../factory/makeMarcarPresencaService";




export class MarcarPresencaController {
    async createMarcarPresencaHandler (req: FastifyRequest, rep: FastifyReply) {
        const marcarPresencaSchema = z.object({
            id_evento: z.string().uuid(),
            id_usuario: z.string().uuid(),
            comentario: z.string().optional(),
        })

        const {id_evento,id_usuario,comentario} = marcarPresencaSchema.parse(req.body)
    
        const marcarPresencaService = makeMarcarPresencaService()

        try {
            const marcarPresenca = await marcarPresencaService.create({
                id_evento,
                id_usuario,
                comentario,
            })

            return rep.status(201).send({ success: true, data: marcarPresenca })
        } catch (error: any) {
            return rep.status(400).send({ success: false, message: error.message })
        }
    }


    async getUsuarioEventosHandler (req: FastifyRequest, rep: FastifyReply) {
        const idUsuarioSchema = z.object({
            id_usuario: z.string().uuid()
        })

        const {id_usuario} = idUsuarioSchema.parse(req.params)
        const marcarPresencaService = makeMarcarPresencaService()
        try {
            const marcarPresenca = await marcarPresencaService.getUsuariosEventos(id_usuario)

            return rep.status(200).send({ success: true, data: marcarPresenca})
        } catch (error: any) {
            return rep.status(400).send({ success: false, message: error.message })
        }
    }

    async getPresencaHandler (req: FastifyRequest, rep: FastifyReply) {
        const idSchema = z.object({
            id: z.string().uuid()
        })

        const {id} = idSchema.parse(req.params)
        const marcarPresencaService = makeMarcarPresencaService()
        try {
            const marcar_presenca = await marcarPresencaService.getPresenca(id)
            return rep.status(200).send({ success: true, data: marcar_presenca })
        } catch (error:any) {
            return rep.status(400).send({ success: false, message: error.message }) 
        }
    }

    async updateFavoriteHandler (req: FastifyRequest, rep: FastifyReply) {
        const idSchema = z.object({
            id: z.string().uuid()
        })

        const {id} = idSchema.parse(req.params)
        const marcarPresencaService = makeMarcarPresencaService()
        try {
            const object = await marcarPresencaService.getPresenca(id)
            const isFavorite = object?.isFavorite

            await marcarPresencaService.updateFavorite(id, !isFavorite)
            const marcar_presenca = await marcarPresencaService.getPresenca(id)
            return rep.status(200).send({ success: true, data: marcar_presenca })
        } catch (error: any) {
            return rep.status(400).send({ success: false, message: error.message })
        }
    }
}