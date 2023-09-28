import { Request, Response, NextFunction } from 'express';
import tryCatch from '../../utils/tryCatch';
import appError from '../../utils/appError';
import jwt from '../../utils/jwt';
import bcrypt from '../../utils/bcrypt';
import db from '../../database/database.source'
import { User } from '../../database/entities/admin.entity';

const userEntity = db.getRepository(User)
const signup = tryCatch(async (req: Request, res: Response) => {
    const alreadyUser = await User.findOne({
        where:{
            email: res.locals.user.email
        }
    });
    if (alreadyUser) {
        throw new appError(400,'You have already account with this email please login');
    }
    res.locals.user.password = await bcrypt.bcryptPassword(res.locals.user.password as string);
    
});