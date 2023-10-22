import { CertificadosXInstituicoes, Prisma } from "@prisma/client"
import { prisma } from "../../lib/prisma"

export class PrismaCertificadosRepository {
    async addCertificadoXinstituicao(data: Prisma.CertificadosXInstituicoesUncheckedCreateInput): Promise<CertificadosXInstituicoes | null> {
        try {
            const certificadoXinstituicao = await prisma.certificadosXInstituicoes.create({
                data
            })
    
            return certificadoXinstituicao
        } catch {
            return null
        }
    }
}