import { Eventos, Prisma } from "@prisma/client";

export interface EventosRepository {
    create(data: Prisma.EventosUncheckedCreateInput): Promise<Eventos | null>
}