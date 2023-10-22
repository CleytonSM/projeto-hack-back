import { PrismaAcessibilidadeRepository } from "../repository/prisma/AcessibilidadeRepository"
import { AcessibilidadeService } from "../services/AcessibilidadeService"

export const makeAcessibilidadeService = () => {
    const acessibilidadeRepository = new PrismaAcessibilidadeRepository
    const acessibilidadeService = new AcessibilidadeService(acessibilidadeRepository)

    return acessibilidadeService
}