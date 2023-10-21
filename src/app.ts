import fastify from "fastify";
import cors from "@fastify/cors";
import fastifyJwt from "@fastify/jwt";
import { routes } from "./routes";
import { errorHandler } from "./error/errorHandler";
import { env } from "./env";

const app = fastify()

// app.register(fastifyJwt, {
//     secret: env.SECRET_JWT,
//     sign: {
//         expiresIn: '1d'
//     }
// })

app.register(routes)

app.setErrorHandler(errorHandler)

export default app