import { AcessibilidadeXEvento, SustentabilidadeXEvento } from "../../services/SusAccXEventoService"


export interface SusAccXEventoRepository {
    createSustentabilidade(arraySustentabilidade: SustentabilidadeXEvento[]): Promise<any>
    createAcessibilidade(arrayAcessibilidade: AcessibilidadeXEvento[]): Promise<any>
}