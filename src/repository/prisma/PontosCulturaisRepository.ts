import { PontosCulturais, Prisma } from "@prisma/client";
import { PontosCulturaisRepository } from "../interfaces/pontosCulturais-interface";
import { prisma } from "../../lib/prisma";


export class PrismaPontosCulturaisRepository implements PontosCulturaisRepository {
    async create(data: Prisma.PontosCulturaisUncheckedCreateInput): Promise<PontosCulturais | null> {
        try {
            const pontoCultural = await prisma.pontosCulturais.create({
                data
            })

            return pontoCultural
        } catch (error) {
            return null
        }
    }
}