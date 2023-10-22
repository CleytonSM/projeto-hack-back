import { Enderecos, PontosCulturais, Prisma } from "@prisma/client";
import { PontosCulturaisRepository } from "../interfaces/pontosCulturais-interface";
import { prisma } from "../../lib/prisma";
import { PontoCulturalProps } from "../../@types/PontoCulturalReturn";


export class PrismaPontosCulturaisRepository implements PontosCulturaisRepository {
    async create(data: Prisma.PontosCulturaisUncheckedCreateInput): Promise<PontosCulturais | null> {
        try {
            const pontoCultural = await prisma.pontosCulturais.create({
                data
            })

            return pontoCultural
        } catch (error) {
            return null
        }
    }

    async getById(id: string): Promise<PontoCulturalProps | null> {
        try {
            const pontoCultural = await prisma.pontosCulturais.findUnique({
                where: {
                    id
                }, select: {
                    id: true,
                    nome: true,
                    importancia: true,
                    como_preservar: true,
                    hora_inicio: true,
                    hora_fim: true,
                    imagem: true,
                    referencia: true,
                    status: true,
                    Enderecos: {
                        select: {
                            id: true,
                            bairro: true,
                            cep: true,
                            id_cidade: true,
                            estado: true,
                            id_evento: true,
                            id_ponto_cultural: true,
                            numero: true,
                            rua: true,
                        }
                    }
                }
            })
            return pontoCultural as PontoCulturalProps;
        } catch (error) {
            return null
        }
    }

    async getAll(): Promise<PontoCulturalProps[] | null> {
        try {
            const pontosCulturais = await prisma.pontosCulturais.findMany({
                select: {
                    id: true,
                    nome: true,
                    importancia: true,
                    como_preservar: true,
                    hora_inicio: true,
                    hora_fim: true,
                    imagem: true,
                    referencia: true,
                    status: true,
                    Enderecos: {
                        select: {
                            id: true,
                            bairro: true,
                            cep: true,
                            id_cidade: true,
                            estado: true,
                            id_evento: true,
                            id_ponto_cultural: true,
                            numero: true,
                            rua: true,
                        }
                    }
                }
            })

            return pontosCulturais as PontoCulturalProps[]
        } catch {
            return null
        }
    }
}