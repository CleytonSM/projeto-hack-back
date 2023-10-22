import { Prisma, marcar_presenca } from "@prisma/client";




export interface MarcarPresencaInterface {
    create(data: Prisma.marcar_presencaUncheckedCreateInput): Promise<marcar_presenca | null>
    getUsuariosEventos(id_usuario: string): Promise<marcar_presenca[] | null>
    getPresenca(id: string): Promise<marcar_presenca | null>
    updateFavorite(id: string, isFavorite: boolean): Promise<marcar_presenca | null>
}