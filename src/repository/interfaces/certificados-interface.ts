import { CertificadosXInstituicoes, Prisma } from "@prisma/client";

export interface CertificadosRepository {
    addCertificadoXinstituicao(data: Prisma.CertificadosXInstituicoesUncheckedCreateInput): Promise<CertificadosXInstituicoes | null>
}