import { FastifyInstance } from "fastify";
import { PontosCulturaisController } from "../controller/PontosCulturaisController";



export const pontosCulturaisRoutes = async (app: FastifyInstance) => {
    const pontosCulturaisController = new PontosCulturaisController()

    app.post('/create', async (req, rep) => {
        await pontosCulturaisController.createPontoCulturalHandler(req, rep)
    })
    app.get('/get/:id', async (req, rep) => {
        await pontosCulturaisController.getByIdHandler(req, rep)
    })
    app.get('/get-all', async (req, rep) => {
        await pontosCulturaisController.getAllHandler(req, rep)
    })
}