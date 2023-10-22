import { CertificadosXInstituicoes, Prisma } from "@prisma/client";
import { CertificadosRepository } from "../repository/interfaces/certificados-interface";
import { AppError } from "../error/AppError";

export class CertificadosService {
    constructor(private certificadosRepository: CertificadosRepository) { }

    async addCertificado(data: Prisma.CertificadosXInstituicoesUncheckedCreateInput): Promise<CertificadosXInstituicoes | null> {
        const certificado = await this.certificadosRepository.addCertificadoXinstituicao(data)

        return certificado
    }

    async getCertificadosInstituicao(id_instituicao: string): Promise<CertificadosXInstituicoes[] | null> {
        const certificados = await this.certificadosRepository.getCertificadosInstituicao(id_instituicao)

        if(!certificados){
            throw new AppError("Erro ao buscar certificados")
        }

        return certificados
    }
}