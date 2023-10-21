import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeSustentabilidadeService } from "../factory/makeSustentabilidadeService";

export class SustentabilidadeController {
    async getByIdHandler(req: FastifyRequest, rep: FastifyReply) {
        const idSusteSchema = z.object({
            id: z.string()
        })

        const { id } = idSusteSchema.parse(req.params)

        const sustentabilidadeService = makeSustentabilidadeService()

        try {
            const sustentabilidade = await sustentabilidadeService.getById(id)

            return rep.status(200).send({ success: true, data: sustentabilidade })
        } catch (e: any) {
            return rep.status(400).send({ success: false, message: e.message })
        }
    }

    async getAllHandler(req: FastifyRequest, rep: FastifyReply) {
        const sustentabilidadeService = makeSustentabilidadeService()

        try {
            const sustentabilidades = await sustentabilidadeService.getAll()

            if (!sustentabilidades[0]) {
                return rep.status(400).send({ success: false, message: 'Nenhuma sustentabilidade encontrada' })
            }

            return rep.status(200).send({ success: true, data: sustentabilidades })
        } catch (e: any) {
            return rep.status(400).send({ success: false, message: e.message })
        }
    }
}