import {Prisma, Usuarios} from '@prisma/client';

export interface UsuarioRepository {
    create(usuario: Prisma.UsuariosCreateInput): Promise<Usuarios>

}