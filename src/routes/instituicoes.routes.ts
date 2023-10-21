import { FastifyInstance } from "fastify";
import { InstituicoesController } from "../controller/InstituicoesController";

export const instituicoesRoutes = async (app: FastifyInstance) => {
    const instituicoesController = new InstituicoesController()

    app.post('/create', async (req, rep) => {
        await instituicoesController.createInstituicaoHandler(req, rep)
    })

    app.get('/get/:id', async (req, rep) => {
        await instituicoesController.getInstituicaoByIdHandler(req, rep)
    })

    app.get('/get-all', async (req, rep) => {
        await instituicoesController.getAllInstituicoesHandler(req, rep)
    })
}