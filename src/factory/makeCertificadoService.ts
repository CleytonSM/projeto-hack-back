import { PrismaCertificadosRepository } from "../repository/prisma/CertificadosRepository"
import { CertificadosService } from "../services/CertificadosService"

export const makeCertificadoService = () => {
    const certificadoRepository = new PrismaCertificadosRepository
    const certificadoService = new CertificadosService(certificadoRepository)

    return certificadoService
}