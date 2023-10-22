import { FastifyReply, FastifyRequest } from "fastify";
import { makeEnderecosService } from "../factory/makeEnderecosService";
import { z } from "zod";

export class CidadesController {
    async createCidadesHandler(req: FastifyRequest, rep: FastifyReply) {
        const enderecoService = makeEnderecosService()

        const bodySchema = z.object({
            cidadesObj: z.array(z.object({
                id: z.number(),
                cidade: z.string()
            }))
        })

        const { cidadesObj } = bodySchema.parse(req.body)

        try {
            const cidades = await enderecoService.createCidade(cidadesObj)

            return rep.status(200).send({ success: true, data: cidades })
        } catch (e: any) {
            return rep.status(400).send({ success: false, message: e.message })
        }
    }

    async getAllCidadesHandler(req: FastifyRequest, rep: FastifyReply) {
        const enderecoService = makeEnderecosService()

        try {
            const cidades = await enderecoService.getAllCidades()

            return rep.status(200).send({ success: true, data: cidades })
        } catch (e: any) {
            return rep.status(400).send({ success: false, message: e.message })
        }
    }

    async getCidadeByIdHandler(req: FastifyRequest, rep: FastifyReply) {
        
        const idSchema = z.object({
            id: z.string()
        })

        const enderecoService = makeEnderecosService()

        const { id } = idSchema.parse(req.params)

        try {
            const cidade = await enderecoService.getCidadeById(parseInt(id))

            return rep.status(200).send({ success: true, data: cidade })
        } catch (e: any) {
            return rep.status(400).send({ success: false, message: e.message })
        }
    }
}