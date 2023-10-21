import { FastifyInstance } from "fastify";
import { PontosCulturaisController } from "../controller/PontosCulturaisController";



export const pontosCulturaisRoutes = async (app: FastifyInstance) => {
    const pontosCulturaisController = new PontosCulturaisController()

    app.post('/create', async (req, rep) => {
        await pontosCulturaisController.createPontoCulturalHandler(req, rep)
    })
    
}