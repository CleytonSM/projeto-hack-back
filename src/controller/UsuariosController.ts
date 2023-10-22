import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { UsuariosService } from "../services/UsuariosService";
import { makeUsuariosService } from "../factory/makeUsuariosService";
import { AppError } from "../error/AppError";

export class UsuariosController {
    async createUsuarioHandler(req: FastifyRequest, rep: FastifyReply) {
        const usuarioSchema = z.object({
            nome: z.string(),
            sobrenome: z.string(),
            telefone: z.string(),
            email: z.string().email(),
            senha: z.string()
        })

        const { nome, sobrenome, telefone, email, senha } = usuarioSchema.parse(req.body)
        const usuariosService = makeUsuariosService()
        try {
            const usuario = await usuariosService.create({ nome, sobrenome, telefone, email, senha })
            return rep.status(201).send({ success: true, data: usuario })
        } catch (e: any) {
            return rep.status(400).send({ success: false, message: e.message })
        }
    }

    async getUsuarioByIdHandler(req: FastifyRequest, rep: FastifyReply) {
        const idSchema = z.object({
            id: z.string().uuid()
        })

        const {id} = idSchema.parse(req.params)
        const usuariosService = makeUsuariosService()

        try {
            const usuario = await usuariosService.getById(id)

            if(!usuario) {
                return rep.status(404).send({success: false, message: 'Usuário não encontrado'})
            }

            return rep.status(200).send({success: true, data: usuario})
        } catch (e: any) {
            return rep.status(400).send({success: false, message: e.message})
        }
    }

    async getAllUsuariosHandler(req: FastifyRequest, rep: FastifyReply) {
        const usuariosService = makeUsuariosService()
        try {
            const usuarios = await usuariosService.getAll()
            if(!usuarios) {
                return rep.status(400).send({success: false, message: 'Nenhum usuário encontrado'})
            }
            return rep.status(200).send({success: true, data: usuarios})
        } catch (e: any) {
            return rep.status(400).send({success: false, message: e.message})
        }
    }

    async putUsuarioByIdHandler(req: FastifyRequest, rep: FastifyReply) {
        const idSchema = z.object({
            id: z.string().uuid()
        })

        const usuarioSchema = z.object({
            nome: z.string(),
            sobrenome: z.string(),
            telefone: z.string(),
            email: z.string().email(),
            senha: z.string()
        })

        const {id} = idSchema.parse(req.params)
        const {nome, sobrenome, telefone, email, senha} = usuarioSchema.parse(req.body)
        const usuariosService = makeUsuariosService()

        try {
            const usuario = await usuariosService.putById(id,{nome, sobrenome, telefone, email, senha})
            if(!usuario) {
                return rep.status(404).send({success: false, message: 'Usuário não encontrado'})
            }
            return rep.status(200).send({success: true, data: usuario})
        } catch (e: any) {
            return rep.status(400).send({success: false, message: e.message})
        }
    }

    async deleteUsuarioByIdHandler(req: FastifyRequest, rep: FastifyReply) {
        const idSchema = z.object({
            id: z.string().uuid()
        })

        const {id} = idSchema.parse(req.params)
        const usuariosService = makeUsuariosService()

        try {
            const usuario = await usuariosService.deleteById(id)
            if(!usuario) {
                return rep.status(404).send({success: false, message: 'Usuário não encontrado'})
            }
            return rep.status(200).send({success: true, message: 'Usuario deletado'})
        } catch (e: any) {
            return rep.status(400).send({success: false, message: e.message})
        }
    }
}