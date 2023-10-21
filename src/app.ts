import fastify from "fastify";
import cors from "@fastify/cors";
import fastifyJwt from "@fastify/jwt";
//import { env } from "./env";
//import { errorHandler } from "./error/errorHandler";
// import { routes } from "./routes";

const app = fastify()

app.register(cors)

// app.register(fastifyJwt, {
//     secret: env.SECRET_JWT,
//     sign: {
//         expiresIn: '1d'
//     }
// })

app.get('/', (req, res) => {
    return { hello: 'world' }
})
// app.register(routes)

//app.setErrorHandler(errorHandler)

export default app