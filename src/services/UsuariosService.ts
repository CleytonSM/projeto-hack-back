import { CreateUsuariosProps, UsuariosProps } from "../@types/Usuarios";
import { AppError } from "../error/AppError";
import { UsuariosRepository } from "../repository/interfaces/usuarios-interface";
import {Prisma, Usuarios} from "@prisma/client"

export class UsuariosService {
    constructor(private usuariosRepository: UsuariosRepository) { }

    async create(data: CreateUsuariosProps): Promise<Usuarios | null> {
        const usuario = await this.usuariosRepository.create(data)
        if(!usuario) {
            throw new AppError('Erro ao criar usuário')
        } 
        return usuario
    }

    async getById(id: string): Promise<Usuarios | null> {
        const usuario = await this.usuariosRepository.getById(id)
        if(!usuario) {
            throw new AppError('Usuário não encontrado')
        }
        return usuario
    }

    async getAll(): Promise<Usuarios[] | null> {
        const usuarios = await this.usuariosRepository.getAll()
        if(!usuarios) {
            throw new AppError('Erro ao listar usuários')
        }
        return usuarios
    }

    async putById(id: string , data: Prisma.UsuariosUpdateInput): Promise<Usuarios | null> {
        const usuario = await this.usuariosRepository.putById(id, data)
        if(!usuario) {
            throw new AppError('Erro ao atualizar usuário')
        }
        return usuario
    }

    async deleteById(id: string): Promise<Usuarios | null> {
        const usuario = await this.usuariosRepository.deleteById(id)
        if(!usuario) {
            throw new AppError('Erro ao deletar usuário')
        }
        return usuario
    }
}