import { Enderecos, Prisma } from "@prisma/client";


export interface EnderecosRepository {
    createEndereco(data: Prisma.EnderecosCreateInput): Promise<Enderecos | null>
    addIdPontoCultural(id_ponto_cultural: string, id_endereco: string): Promise<Enderecos | null>
    
}