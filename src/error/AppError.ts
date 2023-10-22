export class AppError {
    constructor(public readonly message: string = 'Something went wrong', public readonly statusCode: number = 400) {
        this.message = message
        this.statusCode = statusCode
    }
}