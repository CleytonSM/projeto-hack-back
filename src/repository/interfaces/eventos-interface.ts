import { Eventos, Prisma } from "@prisma/client";
import { EventosProps } from "../../@types/Evento";

export interface EventosRepository {
    create(data: Prisma.EventosUncheckedCreateInput): Promise<Eventos | null>
    getById(id: string): Promise<Eventos | null>
    getAll(): Promise<Eventos[] | null>
    searchEvento(): Promise<Eventos[] | null>
}