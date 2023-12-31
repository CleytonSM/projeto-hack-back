import { FastifyInstance } from "fastify";
import { EventosController } from "../controller/EventosController";



export const eventosRoutes = async (app: FastifyInstance) => {
    const eventosController = new EventosController()

    app.post('/create', async (req, rep) => {
        await eventosController.createEventoHandler(req, rep)
    })

    app.get('/get/:id', async (req, rep) => {
        await eventosController.getEventoByIdHandler(req, rep)
    })
    
    app.get('/get-all', async (req, rep) => {
        await eventosController.getAllEventosHandler(req, rep)
    })

    app.get('/search', async (req, rep) => {
        await eventosController.searchEventoHandler(req, rep)
    })

    app.put('/update-rating/:id', async (req, rep) => {
        await eventosController.updateRatingHandler(req, rep)
    })
}