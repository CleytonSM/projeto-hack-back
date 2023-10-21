import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makePontosCulturaisService } from "../factory/makePontosCulturaisService";
import { makeEnderecosService } from "../factory/makeEnderecosService";




export class PontosCulturaisController {
    async createPontoCulturalHandler(req: FastifyRequest, rep: FastifyReply) {
        const pontoCulturalSchema = z.object({
            nome: z.string(),
            importancia: z.string(),
            referencia: z.string(),
            hora_inicio: z.string(),
            hora_fim: z.string(),
            imagem: z.string().default('will-be-replaced'),
            rua: z.string(),
            numero: z.string(),
            bairro: z.string(),
            cidade: z.string(),
            estado: z.string(),
            cep: z.string(),
        })

        const { nome, importancia, referencia, hora_inicio, hora_fim, imagem, rua, numero, bairro, cidade, estado, cep } = pontoCulturalSchema.parse(req.body)
        const pontosCulturaisService = makePontosCulturaisService()
        const enderecoService = makeEnderecosService()
        try {
            const endereco = await enderecoService.create({
                rua,
                numero,
                bairro,
                cidade,
                estado,
                cep,
            })

            if(!endereco) {
                return rep.status(400).send({ success: false, message: 'Erro ao cadastrar' })
            }
            const pontoCultural = await pontosCulturaisService.create({
                nome,
                importancia,
                referencia,
                hora_inicio,
                hora_fim,
                imagem,
                id_endereco: endereco.id
            })
            if(!pontoCultural) {
                return rep.status(400).send({ success: false, message: 'Erro ao cadastrar' })
            }
            
            return rep.status(201).send({ success: true, data: {...pontoCultural,...endereco} })
        } catch (error: any) {
            return rep.status(400).send({ success: false, message: error.message })
        }
    }
}