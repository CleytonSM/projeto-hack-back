import { FastifyInstance } from "fastify";
import { MarcarPresencaController } from "../controller/MarcarPresencaController";


export const marcarPresencaRoutes = async (app: FastifyInstance) => { 
    const marcarPresencaController = new MarcarPresencaController()

    app.post('/create', async (req, rep) => { 
        await marcarPresencaController.createMarcarPresencaHandler(req, rep)
    })

    app.get('/get-eventos/:id_usuario', async (req, rep) => {
        await marcarPresencaController.getUsuarioEventosHandler(req, rep)
    })
    app.get('/get/:id', async (req, rep) => {
        await marcarPresencaController.getPresencaHandler(req, rep)
    })

    app.put('/update-favorite/:id', async (req, rep) => {
        await marcarPresencaController.updateFavoriteHandler(req, rep)
    })
}