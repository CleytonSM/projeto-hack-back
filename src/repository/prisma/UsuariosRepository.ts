import {Prisma, Usuarios } from '@prisma/client';
import { prisma } from '../../lib/prisma';
import { UsuariosRepository } from '../interfaces/usuarios-interface';

export class PrismaUsuariosRepository implements UsuariosRepository {
    async create(usuario: Prisma.UsuariosCreateInput): Promise<Usuarios> {
        return await prisma.usuarios.create({data: usuario})
    }
}