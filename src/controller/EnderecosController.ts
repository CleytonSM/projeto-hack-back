import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeEnderecosService } from "../factory/makeEnderecosService";



export class EnderecosController {
    async createEnderecoHandler(req: FastifyRequest, rep: FastifyReply) {
        const enderecoSchema = z.object({
            rua: z.string(),
            numero: z.string(),
            bairro: z.string(),
            cidade: z.string(),
            estado: z.string(),
            cep: z.string(),
        })

        const { rua, numero, bairro, cidade, estado, cep } = enderecoSchema.parse(req.body)
        const enderecoService = makeEnderecosService()

        try {
            const endereco = await enderecoService.create({
                rua,
                numero,
                bairro,
                cidade,
                estado,
                cep
            })
            rep.status(201).send({ success: true, data: endereco })
        } catch (error: any) {
            rep.status(400).send({ success: false, message: error.message })
        }
    }
}