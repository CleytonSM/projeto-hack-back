import {Prisma, Usuarios} from '@prisma/client';

export interface UsuariosRepository {
    create(usuario: Prisma.UsuariosCreateInput): Promise<Usuarios | null>

}