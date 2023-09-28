import { Response } from 'express';
export default {
    
    successResponse(res: Response, statusCode: number, data={},message: string | 'success') {
        return res.status(statusCode).json({
            success: true,
            message: message,
            data,
        });
    }
}