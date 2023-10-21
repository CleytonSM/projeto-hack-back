import { FastifyInstance } from "fastify";
import { usuariosRoutes } from "./usuarios.routes";


export const routes = async (app: FastifyInstance) => {

    app.register(usuariosRoutes,  { prefix: '/usuarios'})
}