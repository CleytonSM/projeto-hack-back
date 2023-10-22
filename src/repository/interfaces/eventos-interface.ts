import { Eventos, Prisma } from "@prisma/client";
import { EventosProps } from "../../@types/Evento";

export interface EventosRepository {
    create(data: Prisma.EventosUncheckedCreateInput): Promise<Eventos | null>
    getById(id: string): Promise<any>
    getAll(): Promise<Eventos[] | null>
    searchEvento(search: any): Promise<Eventos[] | null>
    updateRating(id: string, rating: number, couting: number): Promise<Eventos | null>
}