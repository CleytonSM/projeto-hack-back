import { FastifyInstance } from "fastify";
import { SustentabilidadeController } from "../controller/sustentabilidadeController";

export const sustentabilidadesRoutes = async (app: FastifyInstance) => {
    const sustentabilidadeController = new SustentabilidadeController()

    app.get('/get/:id', async (req, rep) => {
        await sustentabilidadeController.getByIdHandler(req, rep)
    })

    app.get('/get-all', async (req, rep) => {
        await sustentabilidadeController.getAllHandler(req, rep)
    })
}