import { FastifyReply, FastifyRequest } from "fastify"
import { z } from "zod"
import { makeCertificadoService } from "../factory/makeCertificadoService"

export class CertificadosController {
    async createCertificadoHandler(req: FastifyRequest, rep: FastifyReply) {
        const certificadoSchema = z.object({
            id_instituicao: z.string(),
            id_certificado: z.string()
        })

        const { id_instituicao, id_certificado } = certificadoSchema.parse(req.body)

        const certificadoService = makeCertificadoService()

        try {
            const certificado = await certificadoService.addCertificado({ id_instituicao, id_certificado })

            return rep.status(201).send({ success: true, data: certificado })
        } catch {
            return null
        }
    }
}