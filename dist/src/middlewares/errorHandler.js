"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
// export function logErrors(
//   err: Error,
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) {
//   console.log(err);
//   next(err);
// }
function errorHandler(err, req, res, next) {
    let errorResponse;
    if (err.isBoom) {
        const { statusCode, payload } = err.output;
        errorResponse = {
            status: +statusCode,
            message: payload.message,
        };
    }
    else {
        errorResponse = {
            status: 500,
            message: "Error en el servidor",
        };
    }
    res.status(errorResponse.status).json({ message: errorResponse.message });
}
exports.errorHandler = errorHandler;
