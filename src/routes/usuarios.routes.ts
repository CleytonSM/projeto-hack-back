import { FastifyInstance } from "fastify";
import { UsuariosController } from "../controller/UsuariosController";


export const usuariosRoutes = async (app: FastifyInstance) => {
    const usuariosController = new UsuariosController

    app.post('/create', async (req, rep) => {
        await usuariosController.createUsuarioHandler(req, rep)
    })

    app.get('/get/:id', async (req, rep) => {
        await usuariosController.getUsuarioByIdHandler(req, rep)
    })

    app.get('/get', async (req, rep) => {
        await usuariosController.getAllUsuariosHandler(req, rep)
    })
    app.put('/put/:id', async (req, rep) => {
        await usuariosController.putUsuarioByIdHandler(req, rep)
    })
    app.delete('/delete/:id', async (req, rep) => {
        await usuariosController.deleteUsuarioByIdHandler(req, rep)
    })
}



