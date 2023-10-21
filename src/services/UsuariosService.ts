import { UsuariosProps } from "../@types/Usuarios";
import { UsuariosRepository } from "../repository/interfaces/usuarios-interface";





export class UsuariosService {
    constructor(private usuariosRepository: UsuariosRepository) { }

    async create(data: UsuariosProps) {
        const usuario = await this.usuariosRepository.create(data)
        return usuario
    }
}