import { FastifyInstance } from "fastify";
import { CidadesController } from "../controller/cidadesController";

export const enderecoRoutes = async (app: FastifyInstance) => {
    const cidadesController = new CidadesController()

    app.post('/create-cidades', async (req, rep) => {
        await cidadesController.createCidadesHandler(req, rep)
    })

    app.get('/get-all-cidades', async (req, rep) => {
        await cidadesController.getAllCidadesHandler(req, rep)
    })

    app.get('/get-cidade-by-id/:id', async (req, rep) => {
        await cidadesController.getCidadeByIdHandler(req, rep)
    })
}