import { Cidades, Enderecos, Prisma } from "@prisma/client";

export interface EnderecosRepository {
    createEndereco(data: Prisma.EnderecosUncheckedCreateInput): Promise<Enderecos | null>
    createCidades(data: Prisma.CidadesUncheckedCreateInput[]): Promise<any | null>
    getAllCidades(): Promise<Cidades[] | null>
    getCidadeById(id: number): Promise<Cidades | null>
}