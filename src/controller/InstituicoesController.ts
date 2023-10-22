import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod"
import { makeInstituicoesService } from "../factory/makeInstituicoesService";

export class InstituicoesController {
    async createInstituicaoHandler(req: FastifyRequest, rep: FastifyReply) {
        const instituicaoSchema = z.object({
            razao_social: z.string(),
            descricao: z.string(),
            imagem: z.string().default('will-be-replaced'),
            perfil_empresarial: z.enum(['instituicao_publica', 'eco_friendly', 'inclusao_social', 'restauracao_ambiental']),
            email: z.string().email(),
            senha: z.string()
        })

        const { razao_social, descricao, perfil_empresarial, imagem, email, senha } = instituicaoSchema.parse(req.body)

        const instituicoesService = makeInstituicoesService()

        try {
            const instituicao = await instituicoesService.create({
                razao_social,
                descricao,
                imagem,
                perfil_empresarial,
                email,
                senha
            })

            rep.status(201).send({ success: true, data: instituicao })
        } catch (error: any) {
            rep.status(400).send({ success: false, message: error.message })
        }
    }

    async getInstituicaoByIdHandler(req: FastifyRequest, rep: FastifyReply) {
        const idInstituicaoSchema = z.object({
            id: z.string()
        })

        const { id } = idInstituicaoSchema.parse(req.params)

        const instituicoesService = makeInstituicoesService()

        try {
            const instituicao = await instituicoesService.getInstituicaoById(id)

            rep.status(200).send({ success: true, data: instituicao })
        } catch (error: any) {
            rep.status(400).send({ success: false, message: error.message })
        }
    }

    async getAllInstituicoesHandler(req: FastifyRequest, rep: FastifyReply) {
        const instituicoesService = makeInstituicoesService()

        try {
            const instituicoes = await instituicoesService.getAllInstituicoes()

            if (!instituicoes[0]) {
                rep.status(400).send({ success: false, data: instituicoes })
            }

            rep.status(200).send({ success: true, data: instituicoes })
        } catch (error: any) {
            rep.status(400).send({ success: false, message: error.message })
        }
    }

    async putInstituicaoByIdHandler(req: FastifyRequest, rep: FastifyReply) {
        const idInstituicaoSchema = z.object({
            id: z.string()
        })
        const instituicaoSchema = z.object({
            razao_social: z.string(),
            descricao: z.string(),
            perfil_empresarial: z.enum(['instituicao_publica', 'eco_friendly', 'inclusao_social', 'restauracao_ambiental']),
        })

        const { id } = idInstituicaoSchema.parse(req.params)
        const { razao_social, descricao, perfil_empresarial } = instituicaoSchema.parse(req.body)

        const instituicoesService = makeInstituicoesService()

        try {
            const instituicao = await instituicoesService.putInstituicaoById(id, {
                razao_social,
                descricao,
                perfil_empresarial
            })

            rep.status(200).send({ success: true, data: instituicao })
        } catch (error: any) {
            rep.status(400).send({ success: false, message: error.message })
        }
    }
}