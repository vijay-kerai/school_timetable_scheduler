import { Request, Response, NextFunction } from 'express';

function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    const statusCode = err.statusCode || 500;
    const status = err.status || 'fail';
    const message = err.message || "Internal Server Error";
    
    return res.status(statusCode).json({
        status: statusCode,
        message: message
    });
}

export default errorHandler;
