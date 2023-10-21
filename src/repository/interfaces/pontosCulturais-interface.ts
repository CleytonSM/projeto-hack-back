import { Enderecos, PontosCulturais, Prisma } from "@prisma/client";


export interface PontosCulturaisRepository {
    create(data: Prisma.PontosCulturaisUncheckedCreateInput): Promise<PontosCulturais & Enderecos | null>
    getById(id: string): Promise<PontosCulturais | null>
}