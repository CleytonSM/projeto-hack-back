import { FastifyReply, FastifyRequest } from "fastify"
import { makeAcessibilidadeService } from "../factory/makeAcessibilidadeService"
import { z } from "zod"

export class AcessibidadeController {
    async getByIdHandler(req: FastifyRequest, rep: FastifyReply) {
        const idAcessSchema = z.object({
            id: z.string()
        })

        const { id } = idAcessSchema.parse(req.params)

        const acessibilidadeService = makeAcessibilidadeService()

        try {
            const acessibilidade = await acessibilidadeService.getById(id)

            if (!acessibilidade) {
                return rep.status(400).send({ success: false, message: 'Acessibilidade não encontrada' })
            }

            return rep.status(200).send({ success: true, data: acessibilidade })
        } catch (e: any) {
            return rep.status(400).send({ success: false, message: e.message })
        }
    }

    async getAllHandler(req: FastifyRequest, rep: FastifyReply) {
        const acessibilidadeService = makeAcessibilidadeService()

        try {
            const acessibilidades = await acessibilidadeService.getAll()

            if (!acessibilidades[0]) {
                return rep.status(400).send({ success: false, message: 'Nenhuma acessibilidade encontrada' })
            }

            return rep.status(200).send({ success: true, data: acessibilidades })
        } catch (e: any) {
            return rep.status(400).send({ success: false, message: e.message })
        }
    }

}