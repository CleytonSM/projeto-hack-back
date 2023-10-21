import { FastifyInstance } from "fastify";
import { usuariosRoutes } from "./usuarios.routes";
import { instituicoesRoutes } from "./instituicoes.routes";


export const routes = async (app: FastifyInstance) => {
    console.log('teste')
    app.register(usuariosRoutes,  { prefix: '/usuarios'})
    app.register(instituicoesRoutes, { prefix: '/instituicoes'})

}