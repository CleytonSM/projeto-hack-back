import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { UsuariosService } from "../services/UsuariosService";
import { makeUsuariosService } from "../factory/makeUsuariosService";



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
            
        } catch (error) {
            
        }
    }
}