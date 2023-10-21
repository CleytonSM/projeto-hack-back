import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeEventosService } from "../factory/makeEventosService";

export class EventosController {
    async createEventoHandler(req: FastifyRequest, rep: FastifyReply) {
        const eventoSchema = z.object({
            nome: z.string(),
            descricao: z.string(),
            como_participar: z.string(),
            data: z.coerce.date(),
            hora_inicio: z.string(),
            hora_fim: z.string(),
            imagem: z.string().default('will-be-replaced'),
            ingresso_social: z.string(),
            id_instituicao: z.string(),
        })
        const { nome, descricao, como_participar, data,hora_fim,hora_inicio,id_instituicao,imagem,ingresso_social } = eventoSchema.parse(req.body)
        const eventoService = makeEventosService()
        try {
            const evento = await eventoService.create({
                nome,
                descricao,
                como_participar,
                data,
                hora_inicio,
                hora_fim,
                id_instituicao,
                imagem,
                ingresso_social
            })
            return rep.status(201).send({ success: true, data: evento })
        } catch (error: any) {
            return rep.status(400).send({ success: false, message: error.message })
        }
    }

    async getEventoByIdHandler(req: FastifyRequest, rep: FastifyReply) {
        const idEventoSchema = z.object({
            id: z.string()
        })

        const {id} = idEventoSchema.parse(req.params)

        const eventoService = makeEventosService()
        try {
            const evento = await eventoService.getById(id)
            return rep.status(200).send({ success: true, data: evento })
        } catch (error: any) {
            return rep.status(400).send({ success: false, message: error.message })
        }
    }

    async getAllEventosHandler(req: FastifyRequest, rep: FastifyReply) {
        const eventoService = makeEventosService()

        try {
            const eventos = await eventoService.getAll()

            return rep.status(200).send({ success: true, data: eventos })
        } catch (error: any) {
            return rep.status(400).send({ success: false, message: error.message })
        }
    }

    searchEventoHandler(req: FastifyRequest, rep: FastifyReply) {
        //@ts-ignore
        const keys = Object.keys(req.query)
        //@ts-ignore
        const values = Object.values(req.query)

        for(let i = 0; i < keys.length; i++) {
            switch (keys[i]) {
                case 'descricao':
                     
            }
        }
    }
}