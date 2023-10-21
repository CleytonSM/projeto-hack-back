import { FastifyInstance } from "fastify";
import { EnderecosController } from "../controller/EnderecosController";



export const enderecosRoutes = async (app: FastifyInstance) => { 
    const enderecosController = new EnderecosController()

    app.post('/create', async (req, rep) => {
        await enderecosController.createEnderecoHandler(req, rep)
    })
}
