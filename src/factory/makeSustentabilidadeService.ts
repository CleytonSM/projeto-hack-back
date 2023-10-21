import { PrismaSustentabilidadesRepository } from "../repository/prisma/sustentabilidadeRepository";
import { SustentabilidadeService } from "../services/sustentabilidadeService";

export const makeSustentabilidadeService = () => {
    const sustentabilidadeRepository = new PrismaSustentabilidadesRepository
    const sustentabilidadeService = new SustentabilidadeService(sustentabilidadeRepository)

    return sustentabilidadeService
}