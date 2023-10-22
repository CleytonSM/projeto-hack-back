import { PrismaSusAccXEventoRepository } from "../repository/prisma/SusAccXEventoRepository"
import { SusAccService } from "../services/SusAccXEventoService"


export const makeSusAccService = () => {
    const susAccXEventoRepository = new PrismaSusAccXEventoRepository
    const susAccService = new SusAccService(susAccXEventoRepository)

    return susAccService
}