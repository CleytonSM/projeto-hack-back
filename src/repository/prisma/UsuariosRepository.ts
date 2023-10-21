import {Prisma, Usuarios } from '@prisma/client';
import { prisma } from '../../lib/prisma';
import { UsuariosRepository } from '../interfaces/usuarios-interface';

export class PrismaUsuariosRepository implements UsuariosRepository {
    async create(usuario: Prisma.UsuariosCreateInput): Promise<Usuarios|null> {
        try {
            return await prisma.usuarios.create({data: usuario})
        } catch (error) {
            return null
        }
    }

    async getById(id: string): Promise<Usuarios|null> {
        try {
            return await prisma.usuarios.findUnique(
                {
                    where: {
                        id: id
                    },
                    select: {
                        id: true,
                        nome: true,
                        sobrenome: true,
                        telefone: true,
                        email: true,
                        senha: true,
                    }
                }
            )
        } catch (error) {
            return null
        }
    }

    async getAll(): Promise<Usuarios[]| null> {
        try {
            return await prisma.usuarios.findMany({
                where: {
                    status: 1
                }
            })
        } catch (error) {
            return null
        }
    }

    async putById(id: string, usuario: Prisma.UsuariosUpdateInput): Promise<Usuarios|null> {
        try {
            return await prisma.usuarios.update({
                where: {
                    id: id
                },
                data: usuario
            })
        } catch (error) {
            return null
        }
    }

    async deleteById(id: string): Promise<Usuarios | null> {
        try {
            return await prisma.usuarios.delete({
                where: {
                    id: id
                }
            })
        } catch (error) {
            return null
        }
    }
}