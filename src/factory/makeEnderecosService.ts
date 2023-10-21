import { PrismaEnderecosRepository } from "../repository/prisma/EnderecosRepository"
import { EnderecosService } from "../services/EnderecosService"



export const makeEnderecosService = () => {
    const enderecosRepository = new PrismaEnderecosRepository
    const enderecosService = new EnderecosService(enderecosRepository)
    
    return enderecosService
}