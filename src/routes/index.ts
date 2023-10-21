import { FastifyInstance } from "fastify";
import { usuariosRoutes } from "./usuarios.routes";
import { instituicoesRoutes } from "./instituicoes.routes";
import { pontosCulturaisRoutes } from "./pontosCulturais.routes";
import { enderecosRoutes } from "./enderecos.routes";
import { sustentabilidadesRoutes } from "./sustentabilidade.routes";

export const routes = async (app: FastifyInstance) => {
    app.register(usuariosRoutes,  { prefix: '/usuarios'})
    app.register(instituicoesRoutes, { prefix: '/instituicoes'})
    app.register(pontosCulturaisRoutes, { prefix: '/pontos-culturais'})
    app.register(enderecosRoutes, { prefix: '/enderecos'})
    app.register(sustentabilidadesRoutes, { prefix: '/sustentabilidades'})
}