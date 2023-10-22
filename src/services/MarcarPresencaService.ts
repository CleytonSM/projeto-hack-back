import { Prisma, marcar_presenca } from "@prisma/client";
import { MarcarPresencaInterface } from "../repository/interfaces/marcarPresenca-interface";




export class MarcarPresencaService {
    constructor (private marcarPresencaInterface: MarcarPresencaInterface) {}

    async create (data: Prisma.marcar_presencaUncheckedCreateInput): Promise<marcar_presenca | null> {
        const marcar_presenca = await this.marcarPresencaInterface.create(data)

        if (!marcar_presenca) {
            throw new Error('Erro ao marcar presença')
        }

        return marcar_presenca
    }

    async getUsuariosEventos (id_usuario: string): Promise<marcar_presenca[] | null> { 
        const marcar_presenca = await this.marcarPresencaInterface.getUsuariosEventos(id_usuario)

        if (!marcar_presenca) {
            throw new Error('Erro ao buscar eventos')
        }

        return marcar_presenca
    }
}