import { PrismaPontosCulturaisRepository } from "../repository/prisma/PontosCulturaisRepository"
import { PontosCulturaisService } from "../services/PontosCulturaisService"

export const makePontosCulturaisService = () => {
    const pontosCulturaisRepository = new PrismaPontosCulturaisRepository
    const pontosCulturaisService = new PontosCulturaisService(pontosCulturaisRepository)
    
    return pontosCulturaisService
}