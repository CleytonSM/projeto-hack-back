import { AppError } from "../../error/AppError";
import { prisma } from "../../lib/prisma";
import { AcessibilidadeXEvento, SustentabilidadeXEvento } from "../../services/SusAccXEventoService";
import {SusAccXEventoRepository} from "../interfaces/sustetabilidadeXEvento-interface";


export class PrismaSusAccXEventoRepository implements SusAccXEventoRepository {
    async createSustentabilidade(arraySustentabilidade: SustentabilidadeXEvento[]): Promise<any> {
        try {
            const sustentabilidade = await prisma.sustentabilidadeXevento.createMany({
                data: arraySustentabilidade
            })
            return sustentabilidade
        } catch (error) {
            throw new AppError('Erro ao criar sustentabilidade')
        }
    }

    async createAcessibilidade(arrayAcessibilidade: AcessibilidadeXEvento[]): Promise<any> {
        try {
            const acessibilidade = await prisma.acessibilidadeXevento.createMany({
                data: arrayAcessibilidade
            })
            return acessibilidade
        } catch (error) {
            throw new AppError('Erro ao criar acessibilidade')
        }
    }
}