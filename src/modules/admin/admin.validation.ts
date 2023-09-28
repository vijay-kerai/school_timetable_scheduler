import joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import appError from '../../utils/appError';

const signup = async (req: Request, res: Response, next: NextFunction) => {
    const body = joi.object({
        fullname: joi.string().required(),
        username: joi.string().required(),
        email: joi.string().email().required(),
        password: joi.string().min(6).max(32).required(),
        confirmPassword: joi.valid(joi.ref('password')).required(),
    });
    const { error, value } = body.validate(req.body);
    if (error) {
        throw new appError(400, error.details[0].message);
    }
    res.locals.admin = value;
};
export default {
    signup
};