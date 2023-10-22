import { Prisma, marcar_presenca } from "@prisma/client";




export interface MarcarPresencaInterface {
    create(data: Prisma.marcar_presencaUncheckedCreateInput): Promise<marcar_presenca | null>
}