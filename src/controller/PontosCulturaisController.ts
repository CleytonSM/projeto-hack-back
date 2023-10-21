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
            
            const pontoCultural = await pontosCulturaisService.create({
                nome,
                importancia,
                referencia,
                hora_inicio,
                hora_fim,
                imagem,
            })

            if(!pontoCultural) {
                return rep.status(400).send({ success: false, message: 'Erro ao cadastrar' })
            }

            const endereco = await enderecoService.create({
                bairro,
                cep, cidade, estado, numero, rua, id_ponto_cultural: pontoCultural.id,
    
            })
            
            if(!endereco) {
                return rep.status(400).send({ success: false, message: 'Erro ao cadastrar' })
            }
            
            return rep.status(201).send({ success: true, data: {
                id_ponto_cultural: pontoCultural.id, 
                nome: pontoCultural.nome,
                importancia: pontoCultural.importancia,
                como_preservar: pontoCultural.como_preservar,
                referencia: pontoCultural.referencia,
                hora_inicio: pontoCultural.hora_inicio,
                hora_fim: pontoCultural.hora_fim,
                imagem: pontoCultural.imagem,
                status: pontoCultural.status,
                Enderecos: [endereco]        
            }
        })
        } catch (error: any) {
            return rep.status(400).send({ success: false, message: error.message })
        }
    }

    async getByIdHandler(req: FastifyRequest, rep: FastifyReply) {
        const idPontoSchema = z.object({
            id: z.string()
        })

        const { id } = idPontoSchema.parse(req.params)

        const pontosCulturaisService = makePontosCulturaisService()

        try {
            const pontoCultural = await pontosCulturaisService.getById(id)

            return rep.status(200).send({ success: true, data: pontoCultural })
        } catch (e: any) {
            return rep.status(400).send({ success: false, message: e.message })
        }
    }
}