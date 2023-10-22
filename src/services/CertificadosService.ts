import { CertificadosXInstituicoes, Prisma } from "@prisma/client";
import { CertificadosRepository } from "../repository/interfaces/certificados-interface";

export class CertificadosService {
    constructor(private certificadosRepository: CertificadosRepository) { }

    async addCertificado(data: Prisma.CertificadosXInstituicoesUncheckedCreateInput): Promise<CertificadosXInstituicoes | null> {
        const certificado = await this.certificadosRepository.addCertificadoXinstituicao(data)

        return certificado
    }
}