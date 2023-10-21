import { FastifyInstance } from "fastify";
import { usuariosRoutes } from "./usuarios.routes";
import { instituicoesRoutes } from "./instituicoes.routes";
import { pontosCulturaisRoutes } from "./pontosCulturais.routes";
import { sustentabilidadesRoutes } from "./sustentabilidade.routes";
import { acessibilidadeRoutes } from "./acessibilidade.routes";
import { eventosRoutes } from "./eventos.routes";

export const routes = async (app: FastifyInstance) => {
    app.register(usuariosRoutes,  { prefix: '/usuarios'})
    app.register(instituicoesRoutes, { prefix: '/instituicoes'})
    app.register(pontosCulturaisRoutes, { prefix: '/pontos-culturais'})
    app.register(sustentabilidadesRoutes, { prefix: '/sustentabilidades'})
    app.register(acessibilidadeRoutes, { prefix: '/acessibilidades'})
    app.register(eventosRoutes, { prefix: '/eventos'})
}