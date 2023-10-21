import { FastifyRequest, FastifyReply } from 'fastify'
import { AppError } from './AppError'
import { ZodError } from 'zod'
import { env } from '../env'

export const errorHandler = (err: Error, _req: FastifyRequest, rep: FastifyReply) => {
    if (err instanceof AppError) {
        return rep.status(err.statusCode).send({ success: false, message: err.message })
    } else if (err instanceof ZodError) {
        return rep.status(400).send({ success: false, message: err.format() })
    }

    if (env.NODE_ENV !== 'prod') {
        console.error(err)
    }
}