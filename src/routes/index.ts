import { FastifyInstance } from "fastify";
import { usuariosRoutes } from "./usuarios.routes";
import { instituicoesRoutes } from "./instituicoes.routes";
import { sustentabilidadesRoutes } from "./sustentabilidade.routes";

export const routes = async (app: FastifyInstance) => {
    app.register(usuariosRoutes,  { prefix: '/usuarios'})
    app.register(instituicoesRoutes, { prefix: '/instituicoes'})
    app.register(sustentabilidadesRoutes, { prefix: '/sustentabilidades'})
}