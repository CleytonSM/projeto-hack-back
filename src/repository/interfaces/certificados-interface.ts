import { CertificadosXInstituicoes, Prisma } from "@prisma/client";

export interface CertificadosRepository {
    addCertificadoXinstituicao(data: Prisma.CertificadosXInstituicoesUncheckedCreateInput): Promise<CertificadosXInstituicoes | null>
    getCertificadosInstituicao(id_instituicao: string): Promise<CertificadosXInstituicoes[] | null>
}