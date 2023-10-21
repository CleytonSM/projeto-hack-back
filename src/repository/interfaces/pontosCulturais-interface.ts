import { Enderecos, PontosCulturais, Prisma } from "@prisma/client";
import { PontoCulturalProps } from "../../@types/PontoCulturalReturn";


export interface PontosCulturaisRepository {
    create(data: Prisma.PontosCulturaisUncheckedCreateInput): Promise<any | null>
    getById(id: string): Promise<PontoCulturalProps | null>
}