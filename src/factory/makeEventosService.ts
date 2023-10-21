import { PrismaEventosRepository } from "../repository/prisma/EventosRepository";
import { EventosService } from "../services/EventosService";

export const makeEventosService = () => {
    const eventosRepository = new PrismaEventosRepository
    const eventosService = new EventosService(eventosRepository);
    return eventosService;
}