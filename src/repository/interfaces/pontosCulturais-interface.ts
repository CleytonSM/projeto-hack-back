import { PontosCulturais, Prisma } from "@prisma/client";


export interface PontosCulturaisRepository {
    create(data: Prisma.PontosCulturaisUncheckedCreateInput): Promise<PontosCulturais | null>
}