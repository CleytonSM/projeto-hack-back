import { PrismaMarcarPresencaRepository } from "../repository/prisma/MarcarPresencaRepository"
import { MarcarPresencaService } from "../services/MarcarPresencaService"



export const makeMarcarPresencaService = () => {
    const marcarPresencaRepository = new PrismaMarcarPresencaRepository
    const marcarPresencaService = new MarcarPresencaService(marcarPresencaRepository);

    return marcarPresencaService
}