import {Prisma, Usuarios } from '@prisma/client';
import { prisma } from '../../lib/prisma';
import { UsuariosRepository } from '../interfaces/usuarios-interface';

export class PrismaUsuariosRepository implements UsuariosRepository {
    async create(data: Prisma.UsuariosCreateInput): Promise<Usuarios|null> {
        try {
            const usuario = await prisma.usuarios.create({
                data: {
                    nome: data.nome,
                    sobrenome: data.sobrenome,
                    telefone: data.telefone,
                    email: data.email,
                    senha: data.senha
                }
            })
            return usuario
        } catch (error) {
            return null
        }
    }

    async getById(id: string): Promise<Usuarios|null> {
        try {
            const usuario = await prisma.usuarios.findUnique(

                {
                    where: {
                        id
                    }
                }
            )
            return usuario
        } catch (error) {
            return null
        }
        
    }

    async getAll(): Promise<Usuarios[]| null> {
        try {
           const usuario = await prisma.usuarios.findMany()
           return usuario
        } catch (error) {
            return null
        }
    }

    async putById(id: string, data: Prisma.UsuariosUpdateInput): Promise<Usuarios|null> {
        try {
            const usuario = await prisma.usuarios.update({
                where: {
                    id
                },
                data
            })
            return usuario
                
        } catch (error) {
            return null
        }
    }

    async deleteById(id: string): Promise<Usuarios | null> {
        try {
            const usuario = await prisma.usuarios.update({where: {
                id
            }, data: {
                status: 0
            }
        })
            return usuario
                
        } catch (error) {
            return null
        }
    }
}