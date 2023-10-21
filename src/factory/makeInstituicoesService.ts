import { PrismaInstituicoesRepository } from "../repository/prisma/InstituicoesRepository";
import { InstituicoesService } from "../services/InstituicoesService";

export const makeInstituicoesService = () => {
    const instituicoesRepository = new PrismaInstituicoesRepository
    const instituicoesService = new InstituicoesService(instituicoesRepository)
    
    return instituicoesService
}