import { Certificados, CertificadosXInstituicoes, Prisma } from "@prisma/client"
import { prisma } from "../../lib/prisma"
import { CertificadosRepository } from "../interfaces/certificados-interface"

export class PrismaCertificadosRepository implements CertificadosRepository {
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

    async getCertificadosInstituicao(id_instituicao: string): Promise<CertificadosXInstituicoes[] | null> {
        try {
            const certificados = await prisma.certificadosXInstituicoes.findMany({
                where: {
                    id_instituicao
                }
            })

            return certificados
        } catch {
            return null
        }
    }
}