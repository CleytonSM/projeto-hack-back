import { PrismaSustentabilidadesRepository } from "../repository/prisma/SustentabilidadeRepository"
import { SustentabilidadeService } from "../services/SustentabilidadeService"

export const makeSustentabilidadeService = () => {
    const sustentabilidadeRepository = new PrismaSustentabilidadesRepository
    const sustentabilidadeService = new SustentabilidadeService(sustentabilidadeRepository)

    return sustentabilidadeService
}