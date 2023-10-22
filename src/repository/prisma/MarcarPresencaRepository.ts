import { Prisma, marcar_presenca } from "@prisma/client";
import { MarcarPresencaInterface } from "../interfaces/marcarPresenca-interface";
import { prisma } from "../../lib/prisma";
import { AppError } from "../../error/AppError";





export class PrismaMarcarPresencaRepository implements MarcarPresencaInterface {
    async create(data: Prisma.marcar_presencaUncheckedCreateInput): Promise<marcar_presenca | null> {
        try {
            const marcar_presenca = await prisma.marcar_presenca.create({
                data
            })
            return marcar_presenca
        } catch (error) {
            return null
        }
    }   
}