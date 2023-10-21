import { Enderecos, Prisma } from "@prisma/client";
import { EnderecosRepository } from "../repository/interfaces/enderecos-interface";
import { AppError } from "../error/AppError";




export class EnderecosService {
    constructor (private enderecoRepository: EnderecosRepository) {}

    async create(data: Prisma.EnderecosCreateInput): Promise<Enderecos | null> {
        const endereco = await this.enderecoRepository.createEndereco(data)
        if(!endereco) {
            throw new AppError('Erro ao criar endereço')
        }
        return endereco
    }

    async addIdPontoCultural(id_ponto_cultural: string, id_endereco: string): Promise<Enderecos | null> {
        const endereco = await this.enderecoRepository.addIdPontoCultural(id_ponto_cultural, id_endereco)
        if(!endereco) {
            throw new AppError('Erro ao editar endereço')
        }
        return endereco
    }
}