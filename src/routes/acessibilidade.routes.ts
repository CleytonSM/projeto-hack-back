import { FastifyInstance } from "fastify";
import { AcessibidadeController } from "../controller/AcessibilidadeController";

export const acessibilidadeRoutes = async (app: FastifyInstance) => {
    const acessibilidadeController = new AcessibidadeController()

    app.get('/get/:id', async (req, rep) => {
        await acessibilidadeController.getByIdHandler(req, rep)
    })

    app.get('/get-all', async (req, rep) => {
        await acessibilidadeController.getAllHandler(req, rep)
    })
}