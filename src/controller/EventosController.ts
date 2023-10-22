import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeEventosService } from "../factory/makeEventosService";
import { makeSustentabilidadeService } from "../factory/makeSustentabilidadeService";
import { makeAcessibilidadeService } from "../factory/makeAcessibilidadeService";
import { makeSusAccService } from "../factory/makeSusAccService";
import { makeEnderecosService } from "../factory/makeEnderecosService";

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
            sustentabilidadeXevento: z.array(z.string()),
            acessibilidadeXevento: z.array(z.string()),
            rua: z.string(),
            numero: z.string(),
            bairro: z.string(),
            cidade: z.string(),
            estado: z.string(),
            cep: z.string(),
        })
        const { nome, descricao, como_participar, data,hora_fim,hora_inicio,id_instituicao,imagem,ingresso_social,acessibilidadeXevento,sustentabilidadeXevento, rua, numero, bairro, cidade, estado, cep  } = eventoSchema.parse(req.body)
        const eventoService = makeEventosService()
        const sustentabilidadeService = makeSustentabilidadeService()
        const acessibilidadeService = makeAcessibilidadeService()
        const susAccService = makeSusAccService()
        const enderecoService = makeEnderecosService()
        try {
            const sustentabilidade = await sustentabilidadeService.getById("461b3732-10ea-4e53-863e-191f1a0b2d6f")
            if(!sustentabilidade) {
                return rep.status(400).send({ success: false, message: 'Erro ao cadastrar' })
            }

            const acessibilidade = await acessibilidadeService.getById("06632318-0c53-4090-bf37-ae41e179314c")
            if(!acessibilidade) {
                return rep.status(400).send({ success: false, message: 'Erro ao cadastrar' })
            }

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

            const arraySustentabilidade = sustentabilidadeXevento.map((id: string) => {
                return {
                    id_sustentabilidade: id,
                    id_evento: evento.id
            }
        })
            
            const arrayAcessibilidade = acessibilidadeXevento.map((id: string) => {
                return {
                    id_acessibilidade: id,
                    id_evento: evento.id
                }
            })
            
            await susAccService.createSustentabilidade(arraySustentabilidade)
            await susAccService.createAcessibilidade(arrayAcessibilidade)
            const endereco = await enderecoService.create({
                bairro,
                cep, cidade, estado, numero, rua, id_evento: evento.id
    
            })


            return rep.status(201).send({ success: true, data: {
                evento,
                Endereco: [endereco]
            }})
        
        } catch (error: any) {
            return rep.status(400).send({ success: false, message: error.message })
        }
    }

    async getEventoByIdHandler(req: FastifyRequest, rep: FastifyReply) {
        const idEventoSchema = z.object({
            id: z.string()
        })

        const { id } = idEventoSchema.parse(req.params)

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

    async searchEventoHandler(req: FastifyRequest, rep: FastifyReply) {
        //@ts-ignore
        const keys = Object.keys(req.query)
        //@ts-ignore
        const values = Object.values(req.query)

        const searchParams: any = {}

        for (let i = 0; i < keys.length; i++) {
            switch (keys[i]) {
                case 'descricao':
                    searchParams.descricao = {
                        contains: values[i]
                    }
                    break
                case 'data':
                    const dataAtual = new Date()
                    if (values[i] === 'PS') {
                        const diaAtual = dataAtual.getDate()
                        const diasateDomingo = 7 - diaAtual

                        const dataProximoDomingo = new Date(dataAtual);
                        dataProximoDomingo.setDate(dataAtual.getDate() + diasateDomingo);

                        const dataProximoSabado = new Date(dataProximoDomingo);
                        dataProximoSabado.setDate(dataProximoDomingo.getDate() + 6);

                        searchParams.data = {
                            gte: dataProximoDomingo,
                            lte: dataProximoSabado
                        }
                    }
                    if (values[i] === 'ES') {
                        const diaAtual = dataAtual.getDate()
                        const diasateDomingo = 7 - diaAtual

                        const dataProximoDomingo = new Date(dataAtual)
                        dataProximoDomingo.setDate(dataAtual.getDate() + diasateDomingo)

                        const dataUltimoSabado = new Date(dataProximoDomingo)
                        dataUltimoSabado.setDate(dataProximoDomingo.getDate() - 6)

                        searchParams.data = {
                            gte: dataProximoDomingo,
                            lte: dataUltimoSabado
                        }
                    }
                    if (values[i] === 'PM') {
                        const mesAtual = dataAtual.getMonth();

                        const primeiroDiaProximoMes = new Date(dataAtual);
                        primeiroDiaProximoMes.setMonth(mesAtual + 1, 1);

                        const ultimoDiaProximoMes = new Date(dataAtual)
                        ultimoDiaProximoMes.setMonth(mesAtual + 2, 0)

                        searchParams.data = {
                            gte: primeiroDiaProximoMes,
                            lte: ultimoDiaProximoMes
                        }
                    }
                    if (values[i] === 'EM') {
                        const primeiroDiaMesAtual = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 1)

                        const ultimoDiaMesAtual = new Date(dataAtual.getFullYear(), dataAtual.getMonth() + 1, 0)

                        searchParams.data = {
                            gte: primeiroDiaMesAtual,
                            lte: ultimoDiaMesAtual
                        }
                    }
                    break
                case 'local':
                    searchParams.Enderecos = {
                        some: {
                            cidade: {
                                equals: values[i]
                            }
                        }
                    }
                    break
                case 'acessibilidade':
                    searchParams.acessibilidadeXevento = {
                        some: {
                            id_acessibilidade: {
                                equals: values[i]
                            }
                        }
                    }
            }
        }

        const eventoService = makeEventosService()

        try {
            const evento = await eventoService.searchEvento(searchParams)

            return rep.status(200).send({ success: true, data: evento })
        } catch (error: any) {
            return rep.status(400).send({ success: false, message: error.message })
        }
    }
}