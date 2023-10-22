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

    async getUsuariosEventos(id_usuario: string): Promise<marcar_presenca[] | null> {
        try {
            const marcar_presenca = await prisma.marcar_presenca.findMany({
                where: {
                    id_usuario
                }
            })

            return marcar_presenca
        } catch (error) {
            return null
        }
        
    }

    async getPresenca(id: string): Promise<marcar_presenca | null> {
        try {
            const marcar_presenca = await prisma.marcar_presenca.findUnique({
                where: {
                    id
                }
            })

            return marcar_presenca
        } catch (error) {
            return null
        }
    }

    async updateFavorite(id: string, isFavorite: boolean): Promise<marcar_presenca | null> {
        try {
            const marcar_presenca = await prisma.marcar_presenca.update({
                where: {
                    id
                },
                data: {
                    isFavorite
                }
            })
            
            return marcar_presenca
        } catch (error) {
            return null
        }
    }
}