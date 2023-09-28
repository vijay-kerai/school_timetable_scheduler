import jwt from 'jsonwebtoken';
import config from '../config';
import { Request,Response } from 'express';

const createToken = (id: number, role: string, res: Response) => {
    const token = jwt.sign({ id, role }, config.jwt.secret_key as string, { expiresIn: config.jwt.expires_in });
    const cookieOptions = {
        expires: new Date(Date.now() as any + config.jwt.cookie_expires_in as number * 24 * 60 * 60 * 1000),// days
        httpOnly : true,
        secure : false,
    };
    if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;
    res.cookie("jwt",token,cookieOptions);
}

const decodeToken = (req: Request) => {
    return jwt.verify(req.cookies.token, config.jwt.expires_in as string);
}

export default {
    createToken,
    decodeToken
};