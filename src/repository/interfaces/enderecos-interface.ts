import { Enderecos, Prisma } from "@prisma/client";

export interface EnderecosRepository {
    createEndereco(data: Prisma.EnderecosUncheckedCreateInput): Promise<Enderecos | null>
}