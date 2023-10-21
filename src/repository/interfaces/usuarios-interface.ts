import {Prisma, Usuarios} from '@prisma/client';

export interface UsuariosRepository {
    create(usuario: Prisma.UsuariosCreateInput): Promise<Usuarios | null>
    getById(id: string): Promise<Usuarios | null>
    getAll(): Promise<Usuarios[] | null>
    putById(id: string, usuario: Prisma.UsuariosUpdateInput): Promise<Usuarios | null>
    deleteById(id: string): Promise<Usuarios | null>
}