import { Enderecos, Prisma } from "@prisma/client";
import { EnderecosRepository } from "../repository/interfaces/enderecos-interface";
import { AppError } from "../error/AppError";
import { EnderecosProps } from "../@types/Enderecos";

export class EnderecosService {
    constructor (private enderecoRepository: EnderecosRepository) {}

    async create(data: EnderecosProps): Promise<Enderecos | null> {
        const endereco = await this.enderecoRepository.createEndereco(data)
    
        if(!endereco) {
            throw new AppError('Erro ao criar endereço')
        }
        return endereco
    }

}