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

    async getCertificadosInstituicaoHandler(req: FastifyRequest, rep: FastifyReply) {
        const idSchema = z.object({
            id_instituicao: z.string()
        })

        const { id_instituicao } = idSchema.parse(req.params)

        const certificadoService = makeCertificadoService()

        try {

            const certificados = await certificadoService.getCertificadosInstituicao(id_instituicao)

            if (!certificados) {
                return rep.status(400).send({ success: false, message: 'Nenhum certificado encontrado' })
            }

            return rep.status(200).send({ success: true, data: certificados })
            
        } catch (e: any) {
            return rep.status(400).send({ success: false, message: e.message })
        }
    }
}