import { Prisma, marcar_presenca } from "@prisma/client";
import { MarcarPresencaInterface } from "../repository/interfaces/marcarPresenca-interface";
import { AppError } from "../error/AppError";




export class MarcarPresencaService {
    constructor (private marcarPresencaInterface: MarcarPresencaInterface) {}

    async create (data: Prisma.marcar_presencaUncheckedCreateInput): Promise<marcar_presenca | null> {
        const marcar_presenca = await this.marcarPresencaInterface.create(data)

        if (!marcar_presenca) {
            throw new AppError('Erro ao marcar presença')
        }

        return marcar_presenca
    }

    async getUsuariosEventos (id_usuario: string): Promise<marcar_presenca[] | null> { 
        const marcar_presenca = await this.marcarPresencaInterface.getUsuariosEventos(id_usuario)

        if (!marcar_presenca) {
            throw new AppError('Erro ao buscar eventos')
        }

        return marcar_presenca
    }

    async getPresenca (id: string): Promise<marcar_presenca | null> {
        const marcar_presenca = await this.marcarPresencaInterface.getPresenca(id)

        if(!marcar_presenca) {
            throw new AppError('Erro ao buscar evento')
        }

        return marcar_presenca
    }

    async updateFavorite(id: string, isFavorite: boolean): Promise<marcar_presenca | null> {
        const marcar_presenca = await this.marcarPresencaInterface.updateFavorite(id, isFavorite)

        if(!marcar_presenca) {
            throw new AppError('Erro ao atualizar favorito')
        }
        
        return marcar_presenca
    }

}