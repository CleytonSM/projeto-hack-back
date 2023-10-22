import { PrismaUsuariosRepository } from "../repository/prisma/UsuariosRepository"
import { UsuariosService } from "../services/UsuariosService"



export const makeUsuariosService = () => {
    const usuariosRepository = new PrismaUsuariosRepository
    const usuariosService = new UsuariosService(usuariosRepository)
    return usuariosService
}