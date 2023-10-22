import { FastifyInstance } from "fastify";
import { CertificadosController } from "../controller/CertificadosController";

export const certificadosRoutes = async (app: FastifyInstance) => {
    const certificadoController = new CertificadosController
    app.post('/give', async (req, rep) => {
        await certificadoController.createCertificadoHandler(req, rep)
    })

    app.get('/get-insti/:id_instituicao', async (req, rep) => {
        await certificadoController.getCertificadosInstituicaoHandler(req, rep)
    })
}